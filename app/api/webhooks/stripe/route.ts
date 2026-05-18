// POST /api/webhooks/stripe
// Handles Stripe subscription lifecycle events:
//   - customer.subscription.created  → atomic slot reserve + insert member + Kit tag
//   - customer.subscription.deleted  → mark canceled
//   - invoice.payment_failed         → mark past_due
//   - invoice.payment_succeeded      → bump last_payment_at
//
// Race condition handling: even if checkout pre-check passed, two
// simultaneous Founding subs could land here at slot 99 & 100. The
// reserve_founding_slot() RPC is atomic — only one wins. The loser
// gets refunded + canceled.

import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { createAdminClient } from "@/lib/supabase/admin";
import { isSaharaWindow } from "@/lib/pricing";

const stripeSecret = process.env.STRIPE_SECRET_KEY;
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
const stripe = stripeSecret ? new Stripe(stripeSecret) : null;

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  if (!stripe || !webhookSecret) {
    return NextResponse.json(
      { error: "Stripe webhook not configured" },
      { status: 500 },
    );
  }

  const signature = req.headers.get("stripe-signature");
  if (!signature) {
    return NextResponse.json({ error: "Missing signature" }, { status: 400 });
  }

  const body = await req.text();
  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Invalid signature";
    console.error("[webhook] signature verification failed:", msg);
    return NextResponse.json({ error: msg }, { status: 400 });
  }

  const supabase = createAdminClient();

  try {
    switch (event.type) {
      case "customer.subscription.created":
        await handleSubscriptionCreated(event.data.object, stripe, supabase);
        break;

      case "customer.subscription.deleted":
        await handleSubscriptionDeleted(event.data.object, supabase);
        break;

      case "customer.subscription.updated":
        await handleSubscriptionUpdated(event.data.object, supabase);
        break;

      case "invoice.payment_failed":
        await handlePaymentFailed(event.data.object, supabase);
        break;

      case "invoice.payment_succeeded":
        await handlePaymentSucceeded(event.data.object, supabase);
        break;

      default:
      // Ignore other events.
    }
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Webhook handler error";
    console.error(`[webhook] handler error for ${event.type}:`, msg);
    return NextResponse.json({ error: msg }, { status: 500 });
  }

  return NextResponse.json({ received: true });
}

// ─── Handlers ─── //

async function handleSubscriptionCreated(
  subscription: Stripe.Subscription,
  stripe: Stripe,
  supabase: ReturnType<typeof createAdminClient>,
) {
  const tier = (subscription.metadata?.tier as "founding" | "standard") ?? "standard";

  // Fetch customer for email
  const customer = (await stripe.customers.retrieve(
    subscription.customer as string,
  )) as Stripe.Customer;

  if (!customer.email) {
    throw new Error(
      `Customer ${customer.id} has no email — cannot create member`,
    );
  }

  // Atomic slot reservation for Founding
  if (tier === "founding") {
    const { data: reserved, error: rpcError } = await supabase.rpc(
      "reserve_founding_slot",
    );

    if (rpcError) {
      console.error("[webhook] reserve_founding_slot RPC failed:", rpcError);
      throw new Error("Slot reservation failed");
    }

    if (!reserved) {
      // Race condition: Founding closed between checkout and webhook.
      // Refund the invoice and cancel the subscription.
      console.warn(
        `[webhook] Founding closed mid-flight for sub ${subscription.id} — refunding`,
      );

      if (subscription.latest_invoice) {
        try {
          const invoice = await stripe.invoices.retrieve(
            subscription.latest_invoice as string,
            { expand: ["payments"] },
          );
          // Stripe SDK 19+: payment intent is nested under invoice.payments.
          // Fall back to charge-based refund for older invoices.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const inv = invoice as any;
          const paymentIntentId: string | undefined =
            inv.payments?.data?.[0]?.payment?.payment_intent ||
            inv.payment_intent;
          if (paymentIntentId) {
            await stripe.refunds.create({
              payment_intent: paymentIntentId,
            });
          }
        } catch (refundErr) {
          console.error("[webhook] refund failed:", refundErr);
        }
      }

      await stripe.subscriptions.cancel(subscription.id);
      // TODO: send apology email via Kit ("we sold out while you were paying — full refund issued")
      return;
    }
  }

  // Compute join_month + Sahara access
  const createdAt = new Date(subscription.created * 1000);
  const joinMonth = `${createdAt.getFullYear()}-${String(createdAt.getMonth() + 1).padStart(2, "0")}`;
  const saharaAccess = isSaharaWindow(createdAt.getTime());

  // Insert member row
  const { error: insertError } = await supabase.from("members").insert({
    stripe_customer_id: subscription.customer as string,
    stripe_subscription_id: subscription.id,
    email: customer.email,
    tier,
    status: "active",
    join_month: joinMonth,
    sahara_access: saharaAccess,
    last_payment_at: new Date().toISOString(),
  });

  if (insertError) {
    console.error("[webhook] member insert failed:", insertError);
    // If insert fails AND we reserved a Founding slot, release it back
    if (tier === "founding") {
      await supabase.rpc("release_founding_slot");
    }
    throw new Error("Member record creation failed");
  }

  // Tag the subscriber in Kit (formerly ConvertKit)
  await tagInKit(customer.email, tier);
}

async function handleSubscriptionDeleted(
  subscription: Stripe.Subscription,
  supabase: ReturnType<typeof createAdminClient>,
) {
  await supabase
    .from("members")
    .update({ status: "canceled", canceled_at: new Date().toISOString() })
    .eq("stripe_subscription_id", subscription.id);
}

async function handleSubscriptionUpdated(
  subscription: Stripe.Subscription,
  supabase: ReturnType<typeof createAdminClient>,
) {
  // Map Stripe statuses to our enum
  const statusMap: Record<string, "active" | "past_due" | "canceled" | "paused"> = {
    active: "active",
    trialing: "active",
    past_due: "past_due",
    unpaid: "past_due",
    canceled: "canceled",
    incomplete_expired: "canceled",
    paused: "paused",
  };
  const ourStatus = statusMap[subscription.status] || "active";

  await supabase
    .from("members")
    .update({ status: ourStatus })
    .eq("stripe_subscription_id", subscription.id);
}

// Stripe SDK 19+: invoice.subscription was moved to nested fields.
// Helper to extract subscription ID across SDK versions.
function getSubscriptionIdFromInvoice(invoice: Stripe.Invoice): string | null {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const inv = invoice as any;
  const id =
    inv.subscription_details?.subscription ||
    inv.parent?.subscription_details?.subscription ||
    inv.subscription;
  if (!id) return null;
  return typeof id === "string" ? id : id.id;
}

async function handlePaymentFailed(
  invoice: Stripe.Invoice,
  supabase: ReturnType<typeof createAdminClient>,
) {
  const subId = getSubscriptionIdFromInvoice(invoice);
  if (!subId) return;
  await supabase
    .from("members")
    .update({ status: "past_due" })
    .eq("stripe_subscription_id", subId);
}

async function handlePaymentSucceeded(
  invoice: Stripe.Invoice,
  supabase: ReturnType<typeof createAdminClient>,
) {
  const subId = getSubscriptionIdFromInvoice(invoice);
  if (!subId) return;
  await supabase
    .from("members")
    .update({
      status: "active",
      last_payment_at: new Date().toISOString(),
    })
    .eq("stripe_subscription_id", subId);
}

// ─── Kit (ConvertKit) integration ─── //
// Add the subscriber's email to a tag (one per tier).
// Kit v3 API — uses api_secret + tag ID.

async function tagInKit(email: string, tier: "founding" | "standard") {
  const apiSecret = process.env.KIT_API_SECRET;
  const tagId =
    tier === "founding"
      ? process.env.KIT_TAG_FOUNDING
      : process.env.KIT_TAG_STANDARD;

  if (!apiSecret || !tagId) {
    console.warn(
      "[webhook] Kit not configured (KIT_API_SECRET / KIT_TAG_*) — skipping tag",
    );
    return;
  }

  try {
    const res = await fetch(
      `https://api.convertkit.com/v3/tags/${tagId}/subscribe`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ api_secret: apiSecret, email }),
      },
    );
    if (!res.ok) {
      const text = await res.text();
      console.error(`[webhook] Kit tag failed (${res.status}):`, text);
    }
  } catch (err) {
    console.error("[webhook] Kit request error:", err);
  }
}

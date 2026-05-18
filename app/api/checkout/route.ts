// POST /api/checkout
// Creates a Stripe Checkout session for tier=founding|standard,
// interval=monthly|yearly. Validates Founding availability BEFORE
// hitting Stripe so we fail fast at the cap.
//
// IMPORTANT: this is a PRE-CHECK only. The atomic slot reservation
// happens in the webhook on `customer.subscription.created` to handle
// race conditions where 2 users checkout at slot 99 + 100.

import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { createClient } from "@/lib/supabase/server";

const stripeSecret = process.env.STRIPE_SECRET_KEY;
const stripe = stripeSecret ? new Stripe(stripeSecret) : null;

type Tier = "founding" | "standard";
type Interval = "monthly" | "yearly";

function priceIdFor(tier: Tier, interval: Interval): string | undefined {
  if (tier === "founding" && interval === "monthly")
    return process.env.STRIPE_PRICE_FOUNDING_MONTHLY;
  if (tier === "founding" && interval === "yearly")
    return process.env.STRIPE_PRICE_FOUNDING_YEARLY;
  if (tier === "standard" && interval === "monthly")
    return process.env.STRIPE_PRICE_STANDARD_MONTHLY;
  if (tier === "standard" && interval === "yearly")
    return process.env.STRIPE_PRICE_STANDARD_YEARLY;
  return undefined;
}

export async function POST(req: NextRequest) {
  if (!stripe) {
    return NextResponse.json(
      { error: "Stripe not configured — set STRIPE_SECRET_KEY in env." },
      { status: 500 },
    );
  }

  let body: { tier?: Tier; interval?: Interval };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const tier = body.tier;
  const interval = body.interval || "monthly";

  if (tier !== "founding" && tier !== "standard") {
    return NextResponse.json({ error: "Invalid tier" }, { status: 400 });
  }
  if (interval !== "monthly" && interval !== "yearly") {
    return NextResponse.json({ error: "Invalid interval" }, { status: 400 });
  }

  // Pre-check Founding availability (fail fast)
  if (tier === "founding") {
    try {
      const supabase = await createClient();
      const { data } = await supabase
        .from("founding_counter")
        .select("slots_claimed, max_slots")
        .single();

      if (data && data.slots_claimed >= data.max_slots) {
        return NextResponse.json(
          {
            error:
              "Founding tier is closed. Refresh the page to see Standard pricing.",
          },
          { status: 409 },
        );
      }
    } catch (err) {
      // Failsoft: if DB unreachable, let Stripe checkout proceed.
      // The webhook will still do the atomic check.
      console.error("[checkout] founding pre-check failed:", err);
    }
  }

  const priceId = priceIdFor(tier, interval);
  if (!priceId) {
    return NextResponse.json(
      {
        error: `Price not configured for tier=${tier} interval=${interval}. Set STRIPE_PRICE_${tier.toUpperCase()}_${interval.toUpperCase()} in env.`,
      },
      { status: 500 },
    );
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://drumzon.com";

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${siteUrl}/welcome?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/`,
      automatic_tax: { enabled: true },
      customer_creation: "always",
      billing_address_collection: "auto",
      tax_id_collection: { enabled: true },
      metadata: { tier, interval },
      subscription_data: {
        metadata: { tier, interval },
      },
      allow_promotion_codes: false,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Unknown Stripe error";
    console.error("[checkout] stripe error:", msg);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}

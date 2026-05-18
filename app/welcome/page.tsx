import type { Metadata } from "next";
import Link from "next/link";
import Stripe from "stripe";
import LogoMark from "@/components/LogoMark";
import Footer from "@/components/blocks/Footer";

export const metadata: Metadata = {
  title: "Welcome — Drumzon Pro",
  description: "Your subscription is active.",
  robots: { index: false, follow: false },
};

const stripeSecret = process.env.STRIPE_SECRET_KEY;
const stripe = stripeSecret ? new Stripe(stripeSecret) : null;

async function loadSessionDetails(sessionId: string | undefined) {
  if (!stripe || !sessionId) return null;
  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ["customer", "subscription"],
    });
    const tier =
      ((session.metadata?.tier ||
        (session.subscription as Stripe.Subscription)?.metadata?.tier) as
        | "founding"
        | "standard"
        | undefined) || "standard";
    const email =
      session.customer_details?.email ||
      (session.customer as Stripe.Customer)?.email ||
      null;
    return { tier, email };
  } catch {
    return null;
  }
}

export default async function Welcome({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>;
}) {
  const params = await searchParams;
  const session = await loadSessionDetails(params.session_id);
  const tier = session?.tier ?? "standard";
  const email = session?.email;
  const isFounding = tier === "founding";

  return (
    <>
      <header className="px-6 md:px-10 pt-6 md:pt-8 max-w-[1200px] mx-auto w-full">
        <Link href="/" className="inline-flex hover:opacity-85 transition-opacity">
          <LogoMark size="sm" />
        </Link>
      </header>

      <main className="flex-1 px-6 md:px-10">
        <div className="max-w-[680px] mx-auto pt-20 lg:pt-32 pb-20 text-center flex flex-col items-center gap-6">
          <p className="eyebrow" style={{ color: "var(--color-accent)" }}>
            You're in
          </p>

          <h1
            className="h-display text-text"
            style={{ fontSize: "clamp(40px, 6vw, 80px)", lineHeight: 1.05 }}
          >
            Welcome to{" "}
            <span className="serif-em" style={{ color: "var(--color-accent)" }}>
              Drumzon Pro
            </span>
            .
          </h1>

          {isFounding && (
            <p
              className="text-text-muted text-[14px] uppercase tracking-[0.2em] font-semibold mt-2"
            >
              Founding member · #{/* slot number could be displayed if we expand the session */}
            </p>
          )}

          <p className="text-text-muted text-[16px] sm:text-[17px] leading-[1.7] max-w-[52ch]">
            Your subscription is active. Check your inbox{email ? <>{" "}at <span className="text-text font-medium">{email}</span></> : ""} —
            you'll receive portal access shortly. Sahara drops May 31. Each
            following drop lands on the 1st of the month, available to all
            active members.
          </p>

          <div
            className="mt-4 text-left p-6 rounded-lg max-w-[520px] w-full"
            style={{
              background: "rgba(224,122,60,0.05)",
              border: "1px solid rgba(224,122,60,0.18)",
            }}
          >
            <p className="eyebrow mb-3" style={{ color: "var(--color-accent)" }}>
              Next steps
            </p>
            <ol className="flex flex-col gap-3 text-text text-[14px] leading-[1.65]">
              <li className="flex gap-3">
                <span className="shrink-0 font-mono tabular-nums text-text-subtle">01</span>
                <span>
                  Check your inbox for the welcome email (within 5 min). If it
                  doesn't arrive, check spam or email{" "}
                  <a
                    href="mailto:contact@drumzon.com"
                    className="text-accent underline"
                    style={{ color: "var(--color-accent)" }}
                  >
                    contact@drumzon.com
                  </a>
                  .
                </span>
              </li>
              <li className="flex gap-3">
                <span className="shrink-0 font-mono tabular-nums text-text-subtle">02</span>
                <span>
                  Sahara unlocks in your portal on May 31. We'll email you the
                  moment it's live.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="shrink-0 font-mono tabular-nums text-text-subtle">03</span>
                <span>
                  Manage your subscription anytime via the Stripe customer
                  portal — link in your welcome email.
                </span>
              </li>
              {isFounding && (
                <li className="flex gap-3">
                  <span className="shrink-0 font-mono tabular-nums" style={{ color: "var(--color-accent)" }}>
                    ✦
                  </span>
                  <span>
                    As a Founding member, you also get: quarterly track
                    feedback, Yearly Compilation credit, Vault drop access,
                    and Sahara forever. Details in your welcome email.
                  </span>
                </li>
              )}
            </ol>
          </div>

          <Link href="/" className="btn-ghost mt-2">
            Back to Drumzon
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}

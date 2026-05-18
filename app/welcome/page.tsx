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

const ArrowRight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden>
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

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
        <div className="max-w-[680px] mx-auto pt-16 lg:pt-24 pb-20 text-center flex flex-col items-center gap-6">
          <p className="text-ash text-[11px] font-semibold tracking-[0.22em] uppercase">
            You&apos;re in
          </p>

          <h1
            className="h-display text-ink"
            style={{ fontSize: "clamp(48px, 7vw, 88px)", lineHeight: 1.02 }}
          >
            Welcome to{" "}
            <span className="serif-em gradient-text">Drumzon Pro</span>.
          </h1>

          {isFounding && (
            <p className="text-orange-deep text-[11px] uppercase tracking-[0.22em] font-semibold mt-1">
              ✦ Founding member ✦
            </p>
          )}

          <p className="lede mx-auto">
            Your subscription is active. Check your inbox{email ? <>{" "}at <span className="text-ink font-medium">{email}</span></> : ""} —
            you&apos;ll receive portal access shortly. Sahara drops May 31.
            Each following drop lands on the 1st of the month for all active
            members.
          </p>

          <div
            className="mt-4 text-left p-7 rounded-2xl max-w-[540px] w-full"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,107,53,0.05) 0%, rgba(255,107,53,0.02) 100%)",
              border: "1px solid rgba(255,107,53,0.18)",
            }}
          >
            <p className="text-orange-deep text-[11px] font-semibold tracking-[0.22em] uppercase mb-4">
              Next steps
            </p>
            <ol className="flex flex-col gap-3 text-stone text-[14px] leading-[1.65]">
              <li className="flex gap-3">
                <span className="shrink-0 font-mono tabular-nums text-ash">01</span>
                <span>
                  Check your inbox for the welcome email (within 5 min). If it
                  doesn&apos;t arrive, check spam or email{" "}
                  <a
                    href="mailto:contact@drumzon.com"
                    className="text-ink underline decoration-orange/40 hover:decoration-orange"
                  >
                    contact@drumzon.com
                  </a>
                  .
                </span>
              </li>
              <li className="flex gap-3">
                <span className="shrink-0 font-mono tabular-nums text-ash">02</span>
                <span>
                  Sahara unlocks in your portal on May 31. We&apos;ll email
                  you the moment it&apos;s live.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="shrink-0 font-mono tabular-nums text-ash">03</span>
                <span>
                  Manage your subscription via the Stripe customer portal —
                  link in your welcome email.
                </span>
              </li>
              {isFounding && (
                <li className="flex gap-3">
                  <span className="shrink-0 text-orange" aria-hidden>
                    ✦
                  </span>
                  <span className="text-ink">
                    As a Founding member you also get quarterly track feedback,
                    Yearly Compilation credit, Vault drop access, and Sahara
                    forever. Details in your welcome email.
                  </span>
                </li>
              )}
            </ol>
          </div>

          <Link
            href="/"
            className="mt-2 inline-flex items-center justify-center gap-2 h-[44px] px-6 rounded-full text-stone hover:text-ink border border-black/10 hover:border-black/30 text-[14px] font-medium transition-colors"
          >
            Back to Drumzon
            <ArrowRight />
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}

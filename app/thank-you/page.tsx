import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ArrowRight = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    aria-hidden
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

export const metadata: Metadata = {
  title: "Thanks — Drumzon",
  description: "Your pack is on its way.",
  robots: { index: false, follow: false },
};

type Variant = "pack" | "inner-circle" | "midi";

const COPY: Record<Variant, { eyebrow: string; title: React.ReactNode; body: React.ReactNode; sub?: string }> = {
  pack: {
    eyebrow: "Payment received",
    title: (
      <>
        Welcome to the{" "}
        <span className="serif-em gradient-text">drop</span>.
      </>
    ),
    body: (
      <>
        Your download link is in your inbox — check the Stripe receipt. Drop
        the WAVs into Ableton, FL, Logic, anything. Stems are pre-routed —
        solo the kicks, swap the percs, write your own arrangement.
        Royalty-free. Yours forever.
      </>
    ),
    sub: "Didn't arrive? Check spam or email itsdrumzon@gmail.com.",
  },
  "inner-circle": {
    eyebrow: "You're in",
    title: (
      <>
        Welcome to the{" "}
        <span className="serif-em gradient-text">Inner Circle</span>.
      </>
    ),
    body: (
      <>
        This month's drop, the exclusive Serum presets, and the MIDI pack
        are all in your inbox. New drops will land automatically on the
        15th of each month — 24h before public.
      </>
    ),
    sub: "Cancel anytime from your Stripe customer portal. Every pack you've downloaded stays yours.",
  },
  midi: {
    eyebrow: "You're on the list",
    title: (
      <>
        Check your{" "}
        <span className="serif-em gradient-text">inbox</span>.
      </>
    ),
    body: (
      <>
        The Afrohouse MIDI starter pack is heading to you now. If it doesn't
        arrive in 5 minutes, check spam — and add{" "}
        <span className="text-ink font-medium">itsdrumzon@gmail.com</span>{" "}
        to your contacts so the next drop reaches you clean.
      </>
    ),
  },
};

export default async function ThankYou({
  searchParams,
}: {
  searchParams: Promise<{ purchase?: string }>;
}) {
  const params = await searchParams;
  const variant: Variant =
    params.purchase === "inner-circle"
      ? "inner-circle"
      : params.purchase === "pack"
        ? "pack"
        : "midi";
  const copy = COPY[variant];

  return (
    <>
      <Navbar />
      <main>
        <div className="mx-auto max-w-[720px] px-6 md:px-12 lg:px-20 pt-[clamp(108px,13vw,160px)] pb-[clamp(64px,9vw,120px)] text-center flex flex-col items-center gap-5">
          <p className="text-ash text-[11px] font-semibold tracking-[0.2em] uppercase">
            {copy.eyebrow}
          </p>

          <h1
            className="h-display text-ink"
            style={{ fontSize: "clamp(48px, 8vw, 96px)" }}
          >
            {copy.title}
          </h1>

          <p className="lede mx-auto">{copy.body}</p>

          {copy.sub && (
            <p className="text-[13px] text-ash max-w-[480px]">{copy.sub}</p>
          )}

          <Link
            href="/"
            className="mt-4 inline-flex items-center justify-center gap-2 h-[52px] px-7 rounded-full bg-orange text-white text-[15px] font-medium hover:bg-orange-deep hover:-translate-y-0.5 transition-all"
            style={{ boxShadow: "0 12px 36px -10px rgba(255,107,53,0.55)" }}
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

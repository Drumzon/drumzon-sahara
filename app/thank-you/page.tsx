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
  title: "Thanks — Drumzon Vol. 1: Sahara",
  description: "Your Sahara pack is on its way.",
  robots: { index: false, follow: false },
};

export default async function ThankYou({
  searchParams,
}: {
  searchParams: Promise<{ purchase?: string }>;
}) {
  const params = await searchParams;
  const isPurchase = params.purchase === "pack";

  return (
    <>
      <Navbar />
      <main>
        <div className="mx-auto max-w-[720px] px-6 md:px-12 lg:px-20 pt-[clamp(108px,13vw,160px)] pb-[clamp(64px,9vw,120px)] text-center flex flex-col items-center gap-5">
          <p className="text-ash text-[11px] font-semibold tracking-[0.2em] uppercase">
            {isPurchase ? "Payment received" : "You’re in"}
          </p>

          {isPurchase ? (
            <>
              <h1
                className="h-display text-ink"
                style={{ fontSize: "clamp(48px, 8vw, 96px)" }}
              >
                Welcome to{" "}
                <span className="serif-em gradient-text">Sahara</span>.
              </h1>

              <p className="lede mx-auto">
                Your download link is in your inbox — check the receipt from
                Stripe. If you don’t see it in 5 minutes, check spam or email{" "}
                <a
                  href="mailto:itsdrumzon@gmail.com"
                  className="text-ink font-medium underline decoration-orange/40 hover:decoration-orange"
                >
                  itsdrumzon@gmail.com
                </a>
                .
              </p>

              <p className="lede mx-auto text-[14px] text-ash mt-2">
                Drag the WAVs into Ableton, FL, Logic. Stems are pre-routed —
                solo the kicks, swap the percs, write your own arrangement.
                Royalty-free. Yours forever.
              </p>
            </>
          ) : (
            <>
              <h1
                className="h-display text-ink"
                style={{ fontSize: "clamp(48px, 8vw, 96px)" }}
              >
                Check your{" "}
                <span className="serif-em gradient-text">inbox</span>.
              </h1>

              <p className="lede mx-auto">
                Sahara Lite is on its way. If you don’t see it in 5 minutes,
                check spam — and add{" "}
                <span className="text-ink font-medium">
                  itsdrumzon@gmail.com
                </span>{" "}
                to your contacts so the next drop lands clean.
              </p>
            </>
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

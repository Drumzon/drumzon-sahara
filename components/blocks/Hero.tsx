import LogoMark from "../LogoMark";
import AudioPlayer from "../AudioPlayer";
import {
  FOUNDING_PRICE_MONTHLY,
  STANDARD_PRICE_MONTHLY,
} from "@/lib/pricing";

// BLOCK 1 — HERO (above the fold)
// Cream warm aesthetic. Restrained top bar (logo + status). Centered
// editorial display H1 with italic gradient on "Afro House". Audio
// player anchored prominently. Single primary CTA + ghost secondary.

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

export default function Hero({
  isFoundingOpen,
}: {
  isFoundingOpen: boolean;
}) {
  const audioSrc = process.env.NEXT_PUBLIC_SAHARA_DEMO_URL || undefined;
  const ctaText = isFoundingOpen
    ? `Claim your Founding spot — €${FOUNDING_PRICE_MONTHLY}/month`
    : `Join Drumzon Pro — €${STANDARD_PRICE_MONTHLY}/month`;
  const ctaMicro = isFoundingOpen
    ? "Lifetime price lock · Cancel anytime · No refunds, just listen first"
    : "Cancel anytime · No refunds, just listen first";

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex flex-col px-6 md:px-10 pt-6 md:pt-8 pb-14"
    >
      {/* Top bar — logo left, status right */}
      <div className="flex items-center justify-between max-w-[1200px] mx-auto w-full">
        <LogoMark size="sm" />
        <p className="text-[11px] text-ash font-semibold tracking-[0.18em] uppercase flex items-center gap-2">
          <span
            className="ab-dot w-1.5 h-1.5 rounded-full bg-orange"
            style={{ boxShadow: "0 0 8px rgba(255,107,53,0.9)" }}
            aria-hidden
          />
          Sahara drops May 31
        </p>
      </div>

      {/* Centered hero stack */}
      <div className="flex-1 flex flex-col items-center justify-center text-center max-w-[1100px] mx-auto w-full gap-7 lg:gap-9 pt-14 lg:pt-20">
        <p className="fade-up text-ash text-[11px] font-semibold tracking-[0.22em] uppercase">
          Curated Afro House label · One drop a month
        </p>

        <h1
          className="fade-up h-display"
          style={{
            fontSize: "clamp(40px, 6vw, 86px)",
            lineHeight: 1.02,
            maxWidth: "18ch",
          }}
        >
          The first curated label for{" "}
          <span className="serif-em gradient-text">Afro House</span>{" "}
          producers who want the sound,{" "}
          <span className="text-stone italic font-serif">not the search</span>.
        </h1>

        <p
          className="fade-up-1 lede mx-auto"
          style={{
            fontSize: "clamp(16px, 1.5vw, 21px)",
            maxWidth: "42ch",
          }}
        >
          Every month: one drop. Four complete construction kits.
          Drag, drop, you're inside the track.
        </p>

        <div className="fade-up-2 w-full mt-2">
          <AudioPlayer src={audioSrc} />
        </div>

        <div className="fade-up-3 flex flex-col items-center gap-3 mt-2">
          <a
            href="#pricing"
            className="inline-flex items-center justify-center gap-2 h-[52px] px-7 rounded-full bg-orange text-white text-[15px] font-semibold hover:bg-orange-deep hover:-translate-y-0.5 transition-all"
            style={{ boxShadow: "0 12px 36px -10px rgba(255,107,53,0.55)" }}
          >
            {ctaText}
            <ArrowRight />
          </a>
          <p className="text-ash text-[12px] tracking-wide">
            {ctaMicro}
          </p>
        </div>
      </div>
    </section>
  );
}

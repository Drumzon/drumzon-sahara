import LogoMark from "../LogoMark";
import AudioPlayer from "../AudioPlayer";
import {
  FOUNDING_PRICE_MONTHLY,
  STANDARD_PRICE_MONTHLY,
} from "@/lib/pricing";

// BLOCK 1 — HERO (above the fold)
// Full viewport, dark, centered with breathing room.
// No nav header (per brief: "the entire page is the funnel").
// The audio player is the single most important UI on the page.

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
      className="relative min-h-[100svh] flex flex-col px-6 md:px-10 pt-6 md:pt-8 pb-16"
    >
      {/* Top bar — logo left, status text right */}
      <div className="flex items-center justify-between max-w-[1200px] mx-auto w-full">
        <LogoMark size="sm" />
        <p className="eyebrow flex items-center gap-2">
          <span
            className="w-1.5 h-1.5 rounded-full pulse-accent"
            style={{ background: "var(--color-accent)" }}
            aria-hidden
          />
          Sahara drops May 31
        </p>
      </div>

      {/* Centered content stack */}
      <div className="flex-1 flex flex-col items-center justify-center text-center max-w-[1100px] mx-auto w-full gap-10 lg:gap-12 mt-12 lg:mt-16">
        <h1
          className="h-display max-w-[20ch]"
          style={{
            fontSize: "clamp(40px, 6.5vw, 86px)",
            lineHeight: 1.02,
          }}
        >
          The first curated label for{" "}
          <span className="serif-em" style={{ color: "var(--color-accent)" }}>
            Afro House
          </span>{" "}
          producers who want the sound, not the search.
        </h1>

        <p
          className="text-text-muted max-w-[42ch] mx-auto"
          style={{
            fontSize: "clamp(16px, 1.5vw, 21px)",
            lineHeight: 1.55,
          }}
        >
          Every month: one drop. Four complete construction kits.
          <br className="hidden sm:inline" />
          {" "}Drag, drop, you're inside the track.
        </p>

        <AudioPlayer src={audioSrc} />

        <div className="flex flex-col items-center gap-3 mt-2">
          <a href="#pricing" className="btn-primary btn-primary-large">
            {ctaText}
          </a>
          <p className="text-text-subtle text-[12px] tracking-wide">
            {ctaMicro}
          </p>
        </div>
      </div>
    </section>
  );
}

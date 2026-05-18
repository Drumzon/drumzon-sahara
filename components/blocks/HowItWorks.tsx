// BLOCK 4 — HOW IT WORKS (THE CRITICAL RULE)
// Elegant tinted backdrop. The "time in the club = size of your library"
// tagline rendered as italic gradient — pinpoint emphasis.

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="px-6 md:px-10 py-[clamp(72px,10vw,140px)] relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, transparent 0%, rgba(232,200,150,0.18) 40%, rgba(232,200,150,0.10) 100%)",
      }}
    >
      <div className="max-w-[900px] mx-auto text-center flex flex-col gap-10 lg:gap-14 relative">
        <p className="text-ash text-[11px] font-semibold tracking-[0.22em] uppercase">
          The rule
        </p>

        <h2
          className="h-display text-ink max-w-[22ch] mx-auto"
          style={{ fontSize: "clamp(32px, 4.8vw, 60px)", lineHeight: 1.08 }}
        >
          Each month, one drop releases.{" "}
          <span className="serif-em gradient-text">
            Members active that month
          </span>{" "}
          receive it. Forever.
        </h2>

        <div className="flex flex-col gap-6 text-stone text-[16px] sm:text-[18px] leading-[1.65] max-w-[58ch] mx-auto">
          <p>
            <span className="text-ink font-medium">Join in month 5?</span>{" "}
            You get drops 5 onwards. You don&apos;t get drops 1–4. Those belong
            to the members who were there.
          </p>
          <p>
            <span className="text-ink font-medium">Cancel anytime.</span>{" "}
            Whatever you downloaded stays in your library forever. What you
            missed before joining stays missed.
          </p>
        </div>

        {/* Pinpoint tagline */}
        <div className="pt-6">
          <p
            className="h-display"
            style={{
              fontSize: "clamp(28px, 4vw, 48px)",
              lineHeight: 1.15,
            }}
          >
            <span className="text-ink">Time in the club</span>{" "}
            <span className="text-stone">=</span>{" "}
            <span className="serif-em gradient-text">
              size of your library
            </span>
            .
          </p>
        </div>
      </div>
    </section>
  );
}

// BLOCK 4 — HOW IT WORKS (THE CRITICAL RULE)
// Must be impossible to miss. Tinted background block. Explains the
// time-in-the-club mechanic. Prevents chargebacks.

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="section-pad px-6 md:px-10 relative"
      style={{
        background:
          "linear-gradient(180deg, transparent 0%, rgba(224,122,60,0.04) 50%, transparent 100%)",
      }}
    >
      <div className="max-w-[860px] mx-auto text-center flex flex-col gap-8 lg:gap-10">
        <p className="eyebrow">How it works</p>

        <h2
          className="h-display-bold text-text max-w-[22ch] mx-auto"
          style={{ fontSize: "clamp(28px, 4.5vw, 52px)" }}
        >
          Each month, one drop releases.{" "}
          <span style={{ color: "var(--color-accent)" }}>
            Members active that month receive it. Forever.
          </span>
        </h2>

        <div className="flex flex-col gap-5 text-text-muted text-[16px] sm:text-[17px] leading-[1.7] max-w-[58ch] mx-auto">
          <p>
            <span className="text-text font-medium">Join in month 5?</span>{" "}
            You get drops 5 onwards. You don't get drops 1–4. Those belong to
            the members who were there.
          </p>
          <p>
            <span className="text-text font-medium">Cancel anytime.</span>{" "}
            Whatever you downloaded stays in your library forever. What you
            missed before joining stays missed.
          </p>
        </div>

        {/* Tagline */}
        <div className="pt-4 lg:pt-6 flex items-center justify-center gap-3">
          <span
            className="text-[28px] sm:text-[32px]"
            aria-hidden
          >
            ⏱
          </span>
          <p
            className="h-display"
            style={{
              fontSize: "clamp(24px, 3.4vw, 38px)",
              color: "var(--color-accent)",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            Time in the club ={" "}
            <span className="serif-em">size of your library</span>.
          </p>
        </div>
      </div>
    </section>
  );
}

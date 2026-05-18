// HowItWorks — new section explaining the core "time in the club"
// mechanic. Visual language matches the previous landing (tinted cream
// background + h-display + gradient-text emphasis).

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="px-6 md:px-10 py-[clamp(48px,6vw,88px)] relative"
      style={{
        background: "rgba(245,240,230,0.42)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
      }}
    >
      <div className="mx-auto max-w-[880px]">
        <div className="flex flex-col items-center text-center gap-4 mb-12 lg:mb-14 max-w-[720px] mx-auto">
          <p className="text-ash text-[11px] font-semibold tracking-[0.22em] uppercase">
            The rule
          </p>
          <h2
            className="h-display text-ink"
            style={{ fontSize: "clamp(30px, 4.4vw, 56px)" }}
          >
            Each month, one drop releases.{" "}
            <span className="serif-em gradient-text">
              Active members
            </span>{" "}
            receive it. Forever.
          </h2>
        </div>

        {/* 3-step explainer */}
        <div className="grid sm:grid-cols-3 gap-4 mb-12">
          {[
            {
              n: "01",
              title: "Subscribe",
              body: "Pick Founding (€7/mo, limited to 100) or Standard (€14.95/mo). Cancel anytime.",
            },
            {
              n: "02",
              title: "Receive monthly drops",
              body: "Every drop released while your subscription is active lands in your portal automatically.",
            },
            {
              n: "03",
              title: "Keep forever",
              body: "Cancel and what you've downloaded stays in your library. What you missed before joining stays missed.",
            },
          ].map((step) => (
            <div
              key={step.n}
              className="p-6 rounded-[20px] bg-cream-base/60 border border-black/[0.08]"
            >
              <span className="font-mono text-[12px] text-ash tracking-[0.18em] uppercase">
                {step.n}
              </span>
              <h3 className="text-ink text-[16px] font-semibold mt-2 mb-2">
                {step.title}
              </h3>
              <p className="text-stone text-[13px] leading-[1.6]">
                {step.body}
              </p>
            </div>
          ))}
        </div>

        {/* Tagline — the punchline */}
        <p
          className="h-display text-center"
          style={{ fontSize: "clamp(28px, 3.8vw, 44px)", lineHeight: 1.15 }}
        >
          <span className="text-ink">Time in the club</span>{" "}
          <span className="text-stone">=</span>{" "}
          <span className="serif-em gradient-text">
            size of your library
          </span>
          .
        </p>
      </div>
    </section>
  );
}

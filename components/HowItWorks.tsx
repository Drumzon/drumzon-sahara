// Just the mechanic. No "why a membership" rationale, no value
// equation drivers — Apple-style: state the rule, name the steps,
// move on.

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="px-6 md:px-10 py-[clamp(56px,8vw,110px)]"
    >
      <div className="mx-auto max-w-[860px] text-center">
        <h2 className="display-2 text-ink mx-auto">
          One drop a month. Active members receive it.{" "}
          <span className="text-chroma">Forever.</span>
        </h2>
        <p className="display-subhead mx-auto mt-5">
          Cancel anytime. Keep every file you downloaded.
        </p>

        <div className="grid sm:grid-cols-3 gap-x-8 gap-y-10 mt-14">
          {[
            { n: "01", title: "Subscribe", body: "Pick Founding (€19/mo, first 100) or Standard (€29/mo). Price locked for life." },
            { n: "02", title: "Receive every drop", body: "Each release lands in your portal automatically while you're active." },
            { n: "03", title: "Keep forever", body: "Cancel and what you downloaded stays yours. What you missed stays missed." },
          ].map((step) => (
            <div key={step.n} className="flex flex-col gap-2.5 items-center text-center">
              <span
                className="text-stone text-[11px] font-mono tabular-nums tracking-[0.06em]"
                aria-hidden
              >
                {step.n}
              </span>
              <h3 className="text-ink text-[16px] font-semibold tracking-[-0.015em]">
                {step.title}
              </h3>
              <p className="text-stone text-[14px] leading-[1.55] max-w-[32ch]">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Hormozi Value Equation reframe. Section explains the membership
// mechanics ("active month = library forever") AND the four drivers
// that make the value high: dream outcome, likelihood, time delay,
// effort. Centered, mobile-first.

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="px-6 md:px-10 py-[clamp(56px,8vw,110px)]"
    >
      <div className="mx-auto max-w-[920px] text-center">
        <h2 className="display-2 text-ink mx-auto">
          One drop a month. Active members receive it. Forever.
        </h2>
        <p className="display-subhead mx-auto mt-5">
          Join in month 5? You get drops 5 onwards — not 1–4. Cancel anytime
          and keep what you downloaded. Time in the club equals the{" "}
          <span className="text-chroma">size of your library</span>.
        </p>

        {/* 3-step rhythm — center-aligned text within each step */}
        <div className="grid sm:grid-cols-3 gap-x-8 gap-y-10 mt-14 mb-16">
          {[
            {
              n: "01",
              title: "Subscribe",
              body: "Pick Founding (€7/mo, first 100) or Standard (€14.95/mo). Price locked for life either way.",
            },
            {
              n: "02",
              title: "Receive every drop",
              body: "Each release lands in your portal automatically while you're active. No extra checkout.",
            },
            {
              n: "03",
              title: "Keep forever",
              body: "Cancel and what you've downloaded stays yours, royalty-free. What you missed stays missed.",
            },
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

        {/* Why membership instead of pay-per-pack */}
        <div className="mt-6 max-w-[820px] mx-auto">
          <p className="text-ash text-[11px] font-semibold tracking-[0.22em] uppercase mb-6">
            Why a membership, not a one-off pack
          </p>
          <div className="grid sm:grid-cols-3 gap-x-6 gap-y-6 text-left">
            <div>
              <h4 className="text-stone text-[13px] font-semibold uppercase tracking-[0.06em] mb-2">
                One-off pack
              </h4>
              <p className="text-stone text-[14px] leading-[1.55]">
                Pay €30–40 once, get one pack. Find the next one yourself.
                Repeat every time you start a new track.
              </p>
            </div>
            <div>
              <h4 className="text-stone text-[13px] font-semibold uppercase tracking-[0.06em] mb-2">
                Big catalog subscription
              </h4>
              <p className="text-stone text-[14px] leading-[1.55]">
                Pay monthly, scroll thousands of unrelated samples, hit a
                credit limit, lose access when you cancel.
              </p>
            </div>
            <div>
              <h4 className="text-ink text-[13px] font-semibold uppercase tracking-[0.06em] mb-2">
                Drumzon Pro
              </h4>
              <p className="text-stone text-[14px] leading-[1.55]">
                One curated drop every month, made by a 20-year producer
                in the genre. Cancel anytime, keep every file forever.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

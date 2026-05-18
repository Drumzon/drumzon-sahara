// Three quiet steps on plain background. No tinted section, no card
// shadows. Punchline at the end carries the chroma accent.

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="px-6 md:px-10 py-[clamp(56px,8vw,110px)]"
    >
      <div className="mx-auto max-w-[1100px]">
        <div className="max-w-[640px] mb-12 lg:mb-16">
          <h2 className="display-2 text-ink">
            One drop a month. Active members receive it. Forever.
          </h2>
          <p className="display-subhead mt-4">
            Join in month 5? You get drops 5 onwards — not 1–4. Cancel
            anytime and keep what you downloaded.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-x-10 gap-y-10 mb-16 lg:mb-20">
          {[
            {
              n: "01",
              title: "Subscribe",
              body: "Pick Founding (€7/mo, first 100) or Standard (€14.95/mo). Cancel anytime.",
            },
            {
              n: "02",
              title: "Receive every drop",
              body: "Each release lands in your portal automatically while you're active.",
            },
            {
              n: "03",
              title: "Keep forever",
              body: "Cancel and what you've downloaded stays yours. What you missed stays missed.",
            },
          ].map((step) => (
            <div key={step.n} className="flex flex-col gap-3">
              <span
                className="text-stone text-[12px] font-mono tabular-nums tracking-[0.04em]"
                aria-hidden
              >
                {step.n}
              </span>
              <h3 className="text-ink text-[17px] font-semibold tracking-[-0.015em]">
                {step.title}
              </h3>
              <p className="text-stone text-[15px] leading-[1.55]">
                {step.body}
              </p>
            </div>
          ))}
        </div>

        <p className="display-3 text-ink max-w-[24ch]">
          Time in the club equals the{" "}
          <span className="text-chroma">size of your library</span>.
        </p>
      </div>
    </section>
  );
}

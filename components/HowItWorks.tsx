// Just the mechanic. No "why a membership" rationale, no value
// equation drivers — Apple-style: state the rule, name the steps,
// move on. v16: dropped "01 02 03" mono numbers (didn't match sans).

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="px-6 md:px-10 py-[clamp(32px,5vw,64px)]"
    >
      <div className="mx-auto max-w-[760px] text-center">
        <h2 className="display-2 text-ink mx-auto">
          One drop a month. Yours forever.
        </h2>
        <p className="display-subhead mx-auto mt-4">
          Cancel anytime. Keep every file you downloaded.
        </p>

        <div className="grid sm:grid-cols-3 gap-x-8 gap-y-8 mt-10">
          {[
            { title: "Subscribe", body: "Pick Founding (€19/mo, first 100) or Standard (€29/mo). Price locked for life." },
            { title: "Receive every drop", body: "Each release lands in your portal automatically while you're active." },
            { title: "Keep forever", body: "Cancel and what you downloaded stays yours. What you missed stays missed." },
          ].map((step) => (
            <div key={step.title} className="flex flex-col gap-2.5 items-center text-center">
              <h3 className="text-ink text-[17px] font-semibold tracking-[-0.015em]">
                {step.title}
              </h3>
              <p className="text-stone text-[15px] leading-[1.6] max-w-[32ch]">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

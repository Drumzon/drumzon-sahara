// Apple-refined HowItWorks — clean headline, 3 steps on subtle panel,
// then the punchline as its own quiet statement.

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="px-6 md:px-10 py-[clamp(80px,12vw,160px)]"
      style={{ background: "var(--color-cream-subtle)" }}
    >
      <div className="mx-auto max-w-[1100px]">
        <div className="max-w-[760px] mb-16 lg:mb-20">
          <h2 className="display-2 text-ink">
            One drop a month. Active members receive it. Forever.
          </h2>
          <p className="display-subhead mt-5">
            Join in month 5? You get drops 5 onwards — not 1–4. Cancel
            anytime and keep what you downloaded.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-3 lg:gap-4 mb-16 lg:mb-20">
          {[
            {
              n: "1",
              title: "Subscribe",
              body: "Pick Founding (€7/mo, capped at 100) or Standard (€14.95/mo). Cancel anytime.",
            },
            {
              n: "2",
              title: "Receive every drop",
              body: "Each release lands in your portal automatically while you're active.",
            },
            {
              n: "3",
              title: "Keep forever",
              body: "Cancel and what you've downloaded stays yours. What you missed stays missed.",
            },
          ].map((step) => (
            <div key={step.n} className="p-7 lg:p-8 rounded-[18px] bg-white">
              <p
                className="text-orange text-[28px] font-semibold leading-none mb-4"
                aria-hidden
              >
                {step.n}
              </p>
              <h3 className="text-ink text-[18px] font-semibold mb-2 tracking-[-0.015em]">
                {step.title}
              </h3>
              <p className="text-stone text-[15px] leading-[1.55]">
                {step.body}
              </p>
            </div>
          ))}
        </div>

        <p className="display-3 text-ink max-w-[20ch]">
          Time in the club equals the size of your library.
        </p>
      </div>
    </section>
  );
}

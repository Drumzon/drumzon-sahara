// How Drumzon Pro works — 4 steps, narrative version. Each step reduces
// perceived time/effort. 2x2 on desktop, single column on mobile.

import { FOUNDING_MAX_SLOTS } from "@/lib/pricing";

const STEPS = (remaining: number) => [
  {
    title: "Subscribe today",
    body: `Founding tier €19/mo locked for life — ${remaining} spots left — or Standard €29/mo after. One click, no contract, cancel anytime.`,
  },
  {
    title: "The First Drop hits your inbox in 60 seconds",
    body: "One full construction kit plus 20 samples, 5 MIDIs, 3 presets. Open in your DAW tonight. Finish a loop in 10 minutes.",
  },
  {
    title: "The next drop lands on the 1st of each month",
    body: "Four construction kits, ~80 samples, ~12 presets, ~8 MIDIs. Curated for Afro House. Every file at studio quality, ready to drag in.",
  },
  {
    title: "You stay in the flow",
    body: "No more 3-hour sample hunts. No more \"this kick is almost right but not quite.\" A library that grows every month with sounds you actually use.",
  },
];

export default function HowItWorks({
  slotsClaimed,
}: {
  slotsClaimed: number;
}) {
  const remaining = Math.max(0, FOUNDING_MAX_SLOTS - slotsClaimed);
  const steps = STEPS(remaining);

  return (
    <section
      id="how-it-works"
      className="px-6 md:px-10 py-[clamp(32px,5vw,64px)]"
    >
      <div className="mx-auto max-w-[920px]">
        <div className="text-center mb-10 lg:mb-12">
          <h2 className="display-2 text-ink mx-auto">
            How Drumzon Pro works
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="flex flex-col gap-2.5 text-left"
            >
              <span
                className="text-stone text-[13px] font-medium tabular-nums"
                aria-hidden
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-ink text-[17px] sm:text-[18px] font-semibold tracking-[-0.015em]">
                {step.title}
              </h3>
              <p className="text-stone text-[15px] sm:text-[16px] leading-[1.6] max-w-[44ch]">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

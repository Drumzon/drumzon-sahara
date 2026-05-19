// Turns "no refunds" from a friction bullet into a positioning feature.
// Three reasons stacked vertically (not in columns — this is persuasive
// copy that needs sequential reading). Ends with a one-line risk/reward
// reframe.

import { FOUNDING_PRICE_MONTHLY } from "@/lib/pricing";

const BLOCKS = [
  {
    title: "You hear before you pay",
    body: "The full demo is on this page. The free First Drop is on this page. If the sound isn't what you want, don't subscribe. Simple.",
  },
  {
    title: "You can cancel any time",
    body: `One click in your portal. No emails, no calls, no friction. The €${FOUNDING_PRICE_MONTHLY}/mo never auto-traps you for another month.`,
  },
  {
    title: "You keep what you downloaded",
    body: "Cancel month 2, month 6, month 24 — every file you got on your watch stays on your hard drive forever. Royalty-free, commercial use included.",
  },
];

export default function WhyNoRefunds() {
  return (
    <section
      id="why-no-refunds"
      className="px-6 md:px-10 py-[clamp(32px,5vw,64px)]"
    >
      <div className="mx-auto max-w-[720px]">
        <div className="text-center mb-10 lg:mb-12">
          <h2 className="display-2 text-ink mx-auto">
            Why no refunds{" "}
            <span className="text-stone font-normal">
              (and why that&rsquo;s a feature, not a bug)
            </span>
          </h2>
          <p className="display-subhead mx-auto mt-4">
            Drumzon Pro doesn&rsquo;t have a refund policy because it
            doesn&rsquo;t need one. Three reasons.
          </p>
        </div>

        <div className="flex flex-col gap-6 lg:gap-7">
          {BLOCKS.map((block, i) => (
            <article
              key={block.title}
              className="p-6 lg:p-7 rounded-[20px] bg-white border border-black/[0.08] flex flex-col gap-2"
            >
              <div className="flex items-baseline gap-3">
                <span
                  className="text-stone text-[13px] font-medium tabular-nums shrink-0"
                  aria-hidden
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-ink text-[17px] sm:text-[18px] font-semibold tracking-[-0.015em]">
                  {block.title}
                </h3>
              </div>
              <p className="text-stone text-[15px] sm:text-[16px] leading-[1.6] pl-[28px]">
                {block.body}
              </p>
            </article>
          ))}
        </div>

        <p className="text-ink text-[14px] sm:text-[15px] leading-[1.6] mt-8 text-center text-balance">
          The risk is one month — €{FOUNDING_PRICE_MONTHLY}. The reward is a
          library that compounds every month at a price that never goes up.
        </p>
      </div>
    </section>
  );
}

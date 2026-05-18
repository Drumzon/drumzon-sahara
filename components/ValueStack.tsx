// Hormozi value-stack section. Each monthly deliverable shown with
// what it is, the pain it removes, and its market-comparable value.
// Footer tallies total perceived value and contrasts with the
// €7/€14.95 monthly price for a clean anchoring moment.

import { VALUE_STACK, totalPerceivedValue } from "@/lib/value-stack";
import {
  FOUNDING_PRICE_MONTHLY,
  STANDARD_PRICE_MONTHLY,
} from "@/lib/pricing";

export default function ValueStack() {
  const total = totalPerceivedValue();

  return (
    <section
      id="whats-included"
      className="px-6 md:px-10 py-[clamp(56px,8vw,110px)]"
    >
      <div className="mx-auto max-w-[920px] text-center">
        <h2 className="display-2 text-ink mx-auto">
          Everything that lands in your DAW, every month.
        </h2>
        <p className="display-subhead mx-auto mt-5">
          One curated drop. Six things in the box. Conservative market value
          per piece, so you can do the math yourself.
        </p>

        {/* Stack list — left-aligned within the card for readability, card
            itself centered in the section. */}
        <ul
          className="mt-12 mx-auto max-w-[720px] flex flex-col rounded-[20px] overflow-hidden"
          style={{ background: "var(--color-cream-warm)" }}
        >
          {VALUE_STACK.map((item, i) => (
            <li
              key={item.title}
              className={`flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-6 p-5 sm:p-6 text-left ${
                i > 0 ? "border-t border-black/[0.05]" : ""
              }`}
            >
              <div className="flex-1 min-w-0">
                <h3 className="text-ink text-[16px] font-semibold tracking-[-0.012em] mb-1">
                  {item.title}
                </h3>
                <p className="text-stone text-[14px] leading-[1.55]">
                  {item.what}
                </p>
              </div>
              <span className="shrink-0 text-stone text-[14px] font-mono tabular-nums sm:text-right">
                €{item.value}
                <span className="text-ash text-[11px]"> value</span>
              </span>
            </li>
          ))}

          {/* Total row */}
          <li
            className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 sm:gap-6 p-5 sm:p-6 text-left border-t-2 border-black/[0.10]"
            style={{ background: "white" }}
          >
            <div className="flex-1">
              <h3 className="text-ink text-[16px] font-semibold tracking-[-0.012em]">
                Total perceived value, every month
              </h3>
            </div>
            <span className="shrink-0 text-ink text-[24px] font-semibold tabular-nums tracking-[-0.025em]">
              €{total}
            </span>
          </li>
        </ul>

        {/* Anchor moment — Hormozi-style value vs price */}
        <div className="mt-10 max-w-[640px] mx-auto">
          <p className="text-stone text-[15px] leading-[1.6]">
            <span className="text-ink font-medium">€{total} of value</span>{" "}
            for <span className="text-chroma">€{FOUNDING_PRICE_MONTHLY}/month</span>{" "}
            if you&apos;re one of the first 100, or €{STANDARD_PRICE_MONTHLY}/month
            after. Both prices locked for life. Both stay below the value
            you&apos;re receiving every single month.
          </p>
        </div>
      </div>
    </section>
  );
}

// Hormozi value-stack — but anchored against REAL market prices rather
// than invented "perceived value". Single curated Afro House packs at
// this depth sell for €30-40 standalone (researched May 2026 from
// active competitor catalogs). Drumzon Pro delivers one such pack
// every month for €7-14.95. That's the offer.

import {
  MARKET_PACK_PRICE_MIN,
  MARKET_PACK_PRICE_MAX,
  MARKET_PACK_PRICE_MID,
  yearlyMarketValue,
  yearlySavingsFounding,
  yearlySavingsStandard,
  VALUE_STACK,
} from "@/lib/value-stack";
import {
  FOUNDING_PRICE_MONTHLY,
  FOUNDING_PRICE_YEARLY,
  STANDARD_PRICE_MONTHLY,
  STANDARD_PRICE_YEARLY,
} from "@/lib/pricing";

export default function ValueStack() {
  const annualMarket = yearlyMarketValue();
  const foundingSaves = yearlySavingsFounding();
  const standardSaves = yearlySavingsStandard();

  return (
    <section
      id="whats-included"
      className="px-6 md:px-10 py-[clamp(56px,8vw,110px)]"
    >
      <div className="mx-auto max-w-[920px] text-center">
        <h2 className="display-2 text-ink mx-auto">
          One drop a month.{" "}
          <span className="text-chroma">€{MARKET_PACK_PRICE_MIN}–{MARKET_PACK_PRICE_MAX}</span>{" "}
          of pack, every time.
        </h2>
        <p className="display-subhead mx-auto mt-5">
          Premium curated Afro House packs at this depth list at €{MARKET_PACK_PRICE_MIN}–{MARKET_PACK_PRICE_MAX}{" "}
          standalone. You receive one every active month for the price of a
          coffee.
        </p>

        {/* Itemized breakdown of one monthly drop */}
        <div className="mt-12 mx-auto max-w-[720px]">
          <p className="text-ash text-[11px] font-semibold tracking-[0.22em] uppercase mb-4 text-center">
            What lands in your DAW every month
          </p>
          <ul
            className="flex flex-col rounded-[20px] overflow-hidden"
            style={{ background: "var(--color-cream-warm)" }}
          >
            {VALUE_STACK.map((item, i) => (
              <li
                key={item.title}
                className={`flex items-center justify-between gap-6 p-5 sm:p-6 text-left ${
                  i > 0 ? "border-t border-black/[0.05]" : ""
                }`}
              >
                <div className="flex-1 min-w-0">
                  <h3 className="text-ink text-[15px] sm:text-[16px] font-semibold tracking-[-0.012em] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-stone text-[13px] sm:text-[14px] leading-[1.5]">
                    {item.what}
                  </p>
                </div>
              </li>
            ))}
            <li
              className="flex items-baseline justify-between gap-6 p-5 sm:p-6 text-left border-t-2 border-black/[0.10]"
              style={{ background: "white" }}
            >
              <h3 className="text-ink text-[15px] sm:text-[16px] font-semibold tracking-[-0.012em]">
                One complete drop · standalone value
              </h3>
              <span className="shrink-0 text-ink text-[20px] font-semibold tabular-nums tracking-[-0.025em]">
                €{MARKET_PACK_PRICE_MID}
              </span>
            </li>
          </ul>
        </div>

        {/* The math — yearly comparison */}
        <div className="mt-12 max-w-[800px] mx-auto">
          <p className="text-ash text-[11px] font-semibold tracking-[0.22em] uppercase mb-5 text-center">
            The math over a year
          </p>
          <div className="grid sm:grid-cols-3 gap-3 lg:gap-4">
            {/* Buy standalone */}
            <div
              className="p-6 rounded-[16px] text-left"
              style={{ background: "var(--color-cream-warm)" }}
            >
              <p className="text-stone text-[12px] uppercase tracking-[0.06em] font-semibold mb-2">
                Buy standalone
              </p>
              <p className="text-ink text-[28px] font-semibold tracking-[-0.03em] leading-none mb-1">
                €{annualMarket}
              </p>
              <p className="text-stone text-[12px] leading-[1.5]">
                12 packs · €{MARKET_PACK_PRICE_MID} each
              </p>
            </div>

            {/* Founding member */}
            <div
              className="p-6 rounded-[16px] text-left bg-white"
              style={{ border: "1.5px solid var(--color-orange)" }}
            >
              <p className="text-orange-deep text-[12px] uppercase tracking-[0.06em] font-semibold mb-2">
                Founding member
              </p>
              <p className="text-ink text-[28px] font-semibold tracking-[-0.03em] leading-none mb-1">
                €{FOUNDING_PRICE_YEARLY}
              </p>
              <p className="text-stone text-[12px] leading-[1.5]">
                12 packs · save €{foundingSaves}/yr
              </p>
            </div>

            {/* Standard member */}
            <div
              className="p-6 rounded-[16px] text-left bg-white border border-black/[0.10]"
            >
              <p className="text-stone text-[12px] uppercase tracking-[0.06em] font-semibold mb-2">
                Standard member
              </p>
              <p className="text-ink text-[28px] font-semibold tracking-[-0.03em] leading-none mb-1">
                €{STANDARD_PRICE_YEARLY}
              </p>
              <p className="text-stone text-[12px] leading-[1.5]">
                12 packs · save €{standardSaves}/yr
              </p>
            </div>
          </div>

          <p className="text-stone text-[14px] mt-6 leading-[1.6] max-w-[600px] mx-auto">
            Founding rate (€{FOUNDING_PRICE_MONTHLY}/mo or €{FOUNDING_PRICE_YEARLY}/yr) is locked
            for life — never raised. Standard rate
            (€{STANDARD_PRICE_MONTHLY}/mo or €{STANDARD_PRICE_YEARLY}/yr) is the
            permanent lifetime price for everyone after Founding sells out.
          </p>
        </div>
      </div>
    </section>
  );
}

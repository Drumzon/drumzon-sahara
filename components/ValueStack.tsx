// Grand Slam value-stack — Hormozi rule #10: "value of bonuses should
// eclipse the value of the main offer." + Decap "Drums That Knock"
// quality bar (curated, studio-grade, by the producer for himself).
//
// Honest math:
//   Monthly drop standalone value:  €35 × 12     = €420/yr
//   + MIDI Lab (€80) + Preset Lab (€100) + Quarterly Vault Drop
//     (€240/yr) + Sahara Vault (€40)              = €460
//   = TOTAL annual perceived value:                €880
//
//   Founding price: €190/yr  → 4.63× value ratio  (Grand Slam ✓)
//   Standard price: €290/yr  → 3.03× value ratio  (Strong ✓)
//
// Bonus stack (€460) now ECLIPSES the monthly drop value (€420),
// which per Hormozi creates the psychological effect that the main
// offer itself must be even more valuable than what's already been
// shown. This is the Grand Slam Offer floor.

import {
  MARKET_PACK_PRICE_MIN,
  MARKET_PACK_PRICE_MAX,
  MARKET_PACK_PRICE_MID,
  yearlyMarketValue,
} from "@/lib/value-stack";
import { BONUS_STACK, totalBonusValue } from "@/lib/bonuses";
import {
  FOUNDING_PRICE_MONTHLY,
  FOUNDING_PRICE_YEARLY,
  STANDARD_PRICE_MONTHLY,
  STANDARD_PRICE_YEARLY,
} from "@/lib/pricing";

export default function ValueStack() {
  const annualPackValue = yearlyMarketValue();
  const bonusValue = totalBonusValue();
  const totalValue = annualPackValue + bonusValue;
  const foundingSaves = totalValue - FOUNDING_PRICE_YEARLY;
  const standardSaves = totalValue - STANDARD_PRICE_YEARLY;

  return (
    <section
      id="whats-included"
      className="px-6 md:px-10 py-[clamp(56px,8vw,110px)]"
    >
      <div className="mx-auto max-w-[920px] text-center">
        <h2 className="display-2 text-ink mx-auto">
          One drop a month, plus{" "}
          <span className="text-chroma">five bonuses</span>{" "}
          that get you producing immediately.
        </h2>
        <p className="display-subhead mx-auto mt-5">
          Each monthly drop alone matches the €{MARKET_PACK_PRICE_MIN}–{MARKET_PACK_PRICE_MAX}{" "}
          standalone price of a comparable curated pack. The bonus stack on
          top is worth more than the drop itself.
        </p>

        {/* THE MONTHLY DROP */}
        <div className="mt-12 mx-auto max-w-[720px]">
          <p className="text-ash text-[11px] font-semibold tracking-[0.22em] uppercase mb-4 text-center">
            What lands in your DAW every active month
          </p>
          <div
            className="rounded-[20px] p-7 text-left"
            style={{ background: "var(--color-cream-warm)" }}
          >
            <div className="flex items-baseline justify-between gap-6 mb-4 pb-4 border-b border-black/[0.08]">
              <h3 className="text-ink text-[17px] font-semibold tracking-[-0.015em]">
                The Monthly Drop
              </h3>
              <span className="shrink-0 text-ink text-[18px] font-semibold tabular-nums">
                €{MARKET_PACK_PRICE_MID}
              </span>
            </div>
            <ul className="flex flex-col gap-2 text-stone text-[14px] leading-[1.6]">
              <li>· 4 complete construction kits, stems and pre-mixed</li>
              <li>· ~80 individual samples, BPM/key tagged</li>
              <li>· ~12 Serum, Vital and Diva presets</li>
              <li>· ~8 MIDI files (melodies, basslines, chord progressions)</li>
              <li>· Royalty-free, commercial use, yours to keep forever</li>
            </ul>
          </div>
        </div>

        {/* THE BONUS STACK */}
        <div className="mt-10 mx-auto max-w-[720px]">
          <p className="text-ash text-[11px] font-semibold tracking-[0.22em] uppercase mb-4 text-center">
            Plus five named bonuses — every member, every tier
          </p>
          <ul className="flex flex-col gap-2">
            {BONUS_STACK.map((b) => (
              <li
                key={b.name}
                className="rounded-[16px] p-5 sm:p-6 bg-white border border-black/[0.08] flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-6 text-left"
              >
                <div className="flex-1 min-w-0">
                  <h4 className="text-ink text-[15px] sm:text-[16px] font-semibold tracking-[-0.015em] mb-1.5">
                    {b.name}
                  </h4>
                  <p className="text-stone text-[13px] sm:text-[14px] leading-[1.55] mb-2">
                    {b.what}
                  </p>
                  <p className="text-ash text-[12px] italic">
                    Solves: {b.solves}
                  </p>
                </div>
                <span className="shrink-0 text-ink text-[15px] font-semibold tabular-nums sm:text-right">
                  €{b.value}
                  <span className="text-ash text-[11px] font-normal"> value</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* THE MATH — total value vs price */}
        <div
          className="mt-10 mx-auto max-w-[720px] p-7 rounded-[20px] text-left"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,107,53,0.06) 0%, rgba(255,140,66,0.03) 100%)",
            border: "1px solid rgba(255,107,53,0.18)",
          }}
        >
          <p className="text-ash text-[11px] font-semibold tracking-[0.22em] uppercase mb-4">
            The math, annually
          </p>
          <ul className="flex flex-col gap-2 text-[14px] mb-4">
            <li className="flex justify-between text-stone">
              <span>12 monthly drops at €{MARKET_PACK_PRICE_MID} standalone</span>
              <span className="tabular-nums">€{annualPackValue}</span>
            </li>
            <li className="flex justify-between text-stone">
              <span>5 bonuses, every member</span>
              <span className="tabular-nums">€{bonusValue}</span>
            </li>
            <li className="flex justify-between text-ink font-semibold pt-3 border-t border-black/[0.08]">
              <span>Total annual perceived value</span>
              <span className="tabular-nums">€{totalValue}</span>
            </li>
          </ul>
          <div className="grid sm:grid-cols-2 gap-3 mt-5">
            <div className="rounded-[12px] bg-white p-4">
              <p className="text-orange-deep text-[11px] font-semibold uppercase tracking-[0.06em] mb-1">
                Founding · €{FOUNDING_PRICE_YEARLY}/yr
              </p>
              <p className="text-ink text-[14px]">
                Save{" "}
                <span className="text-chroma font-semibold">€{foundingSaves}/yr</span>
                {" "}vs perceived value
              </p>
            </div>
            <div className="rounded-[12px] bg-white p-4">
              <p className="text-stone text-[11px] font-semibold uppercase tracking-[0.06em] mb-1">
                Standard · €{STANDARD_PRICE_YEARLY}/yr
              </p>
              <p className="text-ink text-[14px]">
                Save{" "}
                <span className="font-semibold">€{standardSaves}/yr</span>
                {" "}vs perceived value
              </p>
            </div>
          </div>
          <p className="text-stone text-[12px] mt-4 leading-[1.55]">
            Founding rate (€{FOUNDING_PRICE_MONTHLY}/mo) is locked for life,
            never raised. Standard (€{STANDARD_PRICE_MONTHLY}/mo) is the
            permanent lifetime price for everyone after Founding sells out.
          </p>
        </div>
      </div>
    </section>
  );
}

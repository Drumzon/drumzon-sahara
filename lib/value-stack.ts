// Hormozi value-stack — anchored against REAL market prices for
// comparable curated Afro House packs (researched May 2026 from
// PML, Loopmasters, Cymatics, Splice individual pack listings).
//
// The market reality: a single premium curated Afro House pack
// (similar depth: ~100 sounds + kits + MIDIs + presets) lists at
// €25-40 standalone. PML's "Sounds From The Cape" lists €37 (sale
// €25.90). Loopmasters' "3 Step Afro House" lists £29.95 (~€35).
//
// Drumzon Pro delivers ONE such pack EVERY MONTH for €7-14.95
// (subscription). The math is the value stack — not arbitrary $$
// totals, but real market comparison.

import {
  FOUNDING_PRICE_MONTHLY,
  STANDARD_PRICE_MONTHLY,
  FOUNDING_PRICE_YEARLY,
  STANDARD_PRICE_YEARLY,
} from "./pricing";

// Per-pack market reference (researched from active competitor
// listings). Used to anchor the membership offer against the cost
// of buying a single comparable pack standalone.
export const MARKET_PACK_PRICE_MIN = 30; // €30 (lower-end standalone)
export const MARKET_PACK_PRICE_MAX = 40; // €40 (upper-end standalone)
export const MARKET_PACK_PRICE_MID = 35; // €35 (median for math)

// Per-month value breakdown — kept for the itemized Hormozi list
// view, but the headline anchor uses MARKET_PACK_PRICE.
export type StackItem = {
  title: string;
  what: string;
  value: number;
};

export const VALUE_STACK: StackItem[] = [
  {
    title: "4 Construction kits",
    what: "Full track stems, pre-mixed and key-compatible.",
    value: 18,
  },
  {
    title: "~80 Individual samples",
    what: "Every kick, perc, vocal chop and one-shot isolated.",
    value: 8,
  },
  {
    title: "~12 Synth presets",
    what: "Serum, Vital and Diva patches used in the kits.",
    value: 5,
  },
  {
    title: "~8 MIDI files",
    what: "Melodies, basslines, chord progressions ready to drop in.",
    value: 4,
  },
];

export function totalStackValue(): number {
  return VALUE_STACK.reduce((sum, item) => sum + item.value, 0);
}

// Yearly math helpers — used to make the value tangible.
export function yearlyMarketValue(midPrice = MARKET_PACK_PRICE_MID): number {
  return midPrice * 12;
}

export function yearlySavingsFounding(): number {
  return yearlyMarketValue() - FOUNDING_PRICE_YEARLY;
}

export function yearlySavingsStandard(): number {
  return yearlyMarketValue() - STANDARD_PRICE_YEARLY;
}

export function monthlyEffectiveFromYearly(yearly: number): string {
  return (yearly / 12).toFixed(2);
}

export const FOUNDING_EFFECTIVE_MONTHLY = monthlyEffectiveFromYearly(
  FOUNDING_PRICE_YEARLY,
);
export const STANDARD_EFFECTIVE_MONTHLY = monthlyEffectiveFromYearly(
  STANDARD_PRICE_YEARLY,
);

// Suppress unused-warning helper exports — they're consumed by components.
export const _PRICES_REF = {
  FOUNDING_PRICE_MONTHLY,
  STANDARD_PRICE_MONTHLY,
};

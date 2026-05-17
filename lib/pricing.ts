// Price ladder for the monthly drop model.
//
// Tier progression based on days since releaseDate:
//   0-6   days  → EARLY_BIRD ($27 / €27)   [countdown visible]
//   7-29  days  → REGULAR    ($37 / €37)   [no countdown — drop ends at 30d]
//   30-59 days  → VAULT_2MO  ($50 / €50)   [in vault, 2 months]
//   60-179 days → VAULT_6MO  ($70 / €70)   [in vault, 6 months]
//   180+ days   → VAULT_12MO ($90 / €90)   [in vault, 12+ months]
//
// Same number in USD and EUR — buyers see local currency, you don't
// micro-convert. Easier mental model and easier Stripe setup.

import type { Currency } from "./currency";
import type { Drop } from "./drops";

export const INNER_CIRCLE_PRICE = 34; // /month, same number in USD and EUR
export const PROMO_CODE = "DRUMZON10"; // optional welcome promo

export type PriceTier =
  | "early-bird"
  | "regular"
  | "vault-2mo"
  | "vault-6mo"
  | "vault-12mo";

type TierConfig = {
  amount: number;       // same in USD and EUR
  startDay: number;     // inclusive
  endDay: number | null; // exclusive; null = forever
  label: string;
};

const TIERS: Record<PriceTier, TierConfig> = {
  "early-bird": { amount: 27, startDay: 0,   endDay: 7,   label: "Early bird" },
  "regular":    { amount: 37, startDay: 7,   endDay: 30,  label: "Drop price" },
  "vault-2mo":  { amount: 50, startDay: 30,  endDay: 60,  label: "Vault" },
  "vault-6mo":  { amount: 70, startDay: 60,  endDay: 180, label: "Vault" },
  "vault-12mo": { amount: 90, startDay: 180, endDay: null, label: "Vault" },
};

const DAY_MS = 86_400_000;

export type PriceState = {
  tier: PriceTier;
  amount: number;
  label: string;
  daysSinceRelease: number;
  /** ms until tier transition, or null if no further transition. */
  msUntilNextTier: number | null;
  /** The price the buyer will pay after the next transition. null if no next tier. */
  nextTierAmount: number | null;
  nextTierLabel: string | null;
  /** ISO date string of next transition for "going to vault on Xd" copy. */
  nextTierDate: string | null;
  /** True while the drop is still in the early-bird window. */
  inEarlyBird: boolean;
  /** True if the drop has moved to the Vault. */
  inVault: boolean;
};

export function getDropPrice(drop: Drop, now: number = Date.now()): PriceState {
  const releaseMs = new Date(drop.releaseDate).getTime();
  const elapsedDays = (now - releaseMs) / DAY_MS;

  const tier: PriceTier =
    elapsedDays < 7   ? "early-bird"
    : elapsedDays < 30  ? "regular"
    : elapsedDays < 60  ? "vault-2mo"
    : elapsedDays < 180 ? "vault-6mo"
    : "vault-12mo";

  const cfg = TIERS[tier];
  const nextTierKey: PriceTier | null =
    tier === "early-bird"  ? "regular"
    : tier === "regular"   ? "vault-2mo"
    : tier === "vault-2mo" ? "vault-6mo"
    : tier === "vault-6mo" ? "vault-12mo"
    : null;

  const next = nextTierKey ? TIERS[nextTierKey] : null;
  const transitionDay = cfg.endDay;
  const transitionMs =
    transitionDay !== null ? releaseMs + transitionDay * DAY_MS : null;
  const msUntilNextTier =
    transitionMs !== null ? Math.max(0, transitionMs - now) : null;

  return {
    tier,
    amount: cfg.amount,
    label: cfg.label,
    daysSinceRelease: Math.floor(elapsedDays),
    msUntilNextTier,
    nextTierAmount: next?.amount ?? null,
    nextTierLabel: next?.label ?? null,
    nextTierDate:
      transitionMs !== null ? new Date(transitionMs).toISOString() : null,
    inEarlyBird: tier === "early-bird",
    inVault: tier.startsWith("vault"),
  };
}

/** Returns ms remaining in current tier — for countdowns. */
export function getMsRemaining(drop: Drop, now: number = Date.now()): number {
  const state = getDropPrice(drop, now);
  return state.msUntilNextTier ?? 0;
}

/** Splits a ms duration into d/h/m/s for countdown displays. */
export function splitDuration(ms: number) {
  const remaining = Math.max(0, ms);
  const days = Math.floor(remaining / DAY_MS);
  const hours = Math.floor((remaining % DAY_MS) / 3_600_000);
  const mins = Math.floor((remaining % 3_600_000) / 60_000);
  const secs = Math.floor((remaining % 60_000) / 1000);
  return { days, hours, mins, secs };
}

/** Inner Circle subscription price in the buyer's currency. */
export function getInnerCirclePrice(_currency: Currency): number {
  return INNER_CIRCLE_PRICE;
}

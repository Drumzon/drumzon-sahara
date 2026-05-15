// Single source of truth for all price/launch logic.
// Edit ONLY this file when:
//   - the launch deadline changes
//   - the launch or post-launch price changes
//   - the promo code changes
//
// Every component (Hero, WhatsIncluded, StickyCTA, CountdownStrip, JSON-LD)
// imports from here so a price change is one line.

export const LAUNCH_END_MS = new Date("2026-05-20T23:59:59Z").getTime();

export const LAUNCH_PRICE_EUR = 27;
export const POST_LAUNCH_PRICE_EUR = 37;
export const ANCHOR_PRICE_EUR = 75; // "sold individually" reference

export const PROMO_CODE = "SAHARA10";

/** Price the buyer pays right now (before any promo code). */
export function getCurrentPrice(now: number = Date.now()): number {
  return now >= LAUNCH_END_MS ? POST_LAUNCH_PRICE_EUR : LAUNCH_PRICE_EUR;
}

/** True while the launch countdown is still running. */
export function isLaunchActive(now: number = Date.now()): boolean {
  return now < LAUNCH_END_MS;
}

/** Label for the price chip in the value-stack. "Launch:" vs "All-in:" */
export function getPriceLabel(now: number = Date.now()): string {
  return isLaunchActive(now) ? "Launch" : "All-in";
}

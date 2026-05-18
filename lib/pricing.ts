// Drumzon Pro — pricing + business constants.
// Single source of truth. All components import from here.

export const FOUNDING_PRICE_MONTHLY = 7;      // €/month
export const FOUNDING_PRICE_YEARLY = 70;       // €/year (2 months free)
export const STANDARD_PRICE_MONTHLY = 14.95;   // €/month
export const STANDARD_PRICE_YEARLY = 149;      // €/year (~2 months free)

export const FOUNDING_MAX_SLOTS = 100;

// Sahara availability window — any subscription created in this range
// gets Sahara. Founding members keep it forever; Standard members keep
// it only while active. After SAHARA_WINDOW.end, no new subs get Sahara.
export const SAHARA_WINDOW = {
  start: new Date("2026-05-31T00:00:00Z"),
  end: new Date("2026-06-30T23:59:59Z"),
};

// Founding reactivation grace period — cancel and resub within this window
// to preserve €7 lifetime lock. After 90d inactive, Founding status expires.
export const FOUNDING_REACTIVATION_DAYS = 90;

// Display helpers
export function formatEUR(amount: number): string {
  return Number.isInteger(amount) ? `€${amount}` : `€${amount.toFixed(2)}`;
}

export function isSaharaWindow(now: number = Date.now()): boolean {
  return (
    now >= SAHARA_WINDOW.start.getTime() && now <= SAHARA_WINDOW.end.getTime()
  );
}

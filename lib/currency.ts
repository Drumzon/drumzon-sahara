// Dual-currency support via Vercel geo headers.
// EU countries → EUR. Everyone else → USD.
//
// Vercel automatically sets `x-vercel-ip-country` on every request
// (free on all plans, no setup needed). In local dev there's no header
// and we default to USD (matches the spec's $ pricing).
//
// To use in a server component:
//   import { headers } from "next/headers";
//   import { detectCurrency } from "@/lib/currency";
//   const h = await headers();
//   const currency = detectCurrency(h.get("x-vercel-ip-country"));

export type Currency = "USD" | "EUR";

// ISO 3166-1 alpha-2 codes of EU + EEA + UK + CH (Stripe SEPA region).
// Buyers from these countries see EUR; everyone else sees USD.
const EUR_COUNTRIES = new Set([
  // EU 27
  "AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR",
  "DE", "GR", "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL",
  "PL", "PT", "RO", "SK", "SI", "ES", "SE",
  // EEA non-EU
  "IS", "LI", "NO",
  // UK + Switzerland (cultural/payment proximity)
  "GB", "CH",
]);

export function detectCurrency(country: string | null | undefined): Currency {
  if (!country) return "USD";
  return EUR_COUNTRIES.has(country.toUpperCase()) ? "EUR" : "USD";
}

export function formatPrice(amount: number, currency: Currency): string {
  const symbol = currency === "EUR" ? "€" : "$";
  // No cents for whole-number prices ($27, not $27.00) — matches the
  // premium digital-product convention. Use full decimals only when needed.
  const formatted =
    Number.isInteger(amount) ? amount.toString() : amount.toFixed(2);
  return `${symbol}${formatted}`;
}

export function currencyCode(currency: Currency): string {
  return currency;
}

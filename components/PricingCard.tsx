"use client";

// Ultra-refined 2-col pricing. Both cards on plain white, identical
// structure, thin borders. Differentiation through:
//   - Founding has a small "X of 100 left" chip
//   - Founding price is rendered with chroma accent
//   - Both CTAs are visually equal (founding is orange, standard is ink)
// Same MEMBER_BENEFITS list on both. The lifetime-lock is the offer.

import { useState } from "react";
import {
  FOUNDING_PRICE_MONTHLY,
  FOUNDING_PRICE_YEARLY,
  STANDARD_PRICE_MONTHLY,
  STANDARD_PRICE_YEARLY,
  FOUNDING_MAX_SLOTS,
} from "@/lib/pricing";
import {
  FOUNDING_EFFECTIVE_MONTHLY,
  STANDARD_EFFECTIVE_MONTHLY,
} from "@/lib/value-stack";

// Same benefits both tiers (per Carlos's directive). The differentiator
// is the locked lifetime price. All bonuses are 100% music assets.
// No values shown — Apple-style: state what they get, name the price.
const MEMBER_BENEFITS = [
  "Monthly drop — 4 kits, ~80 samples, ~12 presets, ~8 MIDIs",
  "The First Drop at signup — full construction kit",
  "The MIDI Lab — 50+ files in 5 keys",
  "The Preset Lab — 50+ Serum, Vital, Diva, Massive",
  "Royalty-free, cancel anytime, keep every file",
];

const ArrowRight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const Check = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5 text-stone" aria-hidden>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default function PricingCard({
  slotsClaimed,
  isFoundingOpen,
}: {
  slotsClaimed: number;
  isFoundingOpen: boolean;
}) {
  const [billingInterval, setBillingInterval] = useState<"monthly" | "yearly">("monthly");
  const [loadingTier, setLoadingTier] = useState<null | "founding" | "standard">(null);

  const handleCheckout = async (tier: "founding" | "standard") => {
    setLoadingTier(tier);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tier, interval: billingInterval }),
      });
      const data = await res.json();
      if (data.url) window.location.href = data.url;
      else {
        alert(data.error || "Try again or email contact@drumzon.com");
        setLoadingTier(null);
      }
    } catch {
      alert("Network error. Email contact@drumzon.com");
      setLoadingTier(null);
    }
  };

  const remaining = Math.max(0, FOUNDING_MAX_SLOTS - slotsClaimed);
  const foundingPrice = billingInterval === "monthly" ? FOUNDING_PRICE_MONTHLY : FOUNDING_PRICE_YEARLY;
  const standardPrice = billingInterval === "monthly" ? STANDARD_PRICE_MONTHLY : STANDARD_PRICE_YEARLY;
  const priceUnit = billingInterval === "monthly" ? "/month" : "/year";

  return (
    <section id="pricing" className="px-6 md:px-10 py-[clamp(56px,8vw,110px)]">
      <div className="mx-auto max-w-[1080px]">
        <div className="max-w-[680px] mx-auto text-center mb-10 lg:mb-14">
          <h2 className="display-2 text-ink mx-auto">
            Pricing.
          </h2>
        </div>

        {/* Interval toggle — centered, with yearly nudge */}
        <div className="flex flex-col items-center gap-2 mb-10">
          <div
            className="inline-flex p-1 rounded-full"
            style={{
              background: "var(--color-cream-warm)",
            }}
          >
            <button
              type="button"
              onClick={() => setBillingInterval("monthly")}
              className={`px-5 py-2 rounded-full text-[13px] font-medium transition-all ${
                billingInterval === "monthly"
                  ? "bg-white text-ink shadow-sm"
                  : "text-stone hover:text-ink"
              }`}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setBillingInterval("yearly")}
              className={`px-5 py-2 rounded-full text-[13px] font-medium transition-all inline-flex items-center gap-2 ${
                billingInterval === "yearly"
                  ? "bg-white text-ink shadow-sm"
                  : "text-stone hover:text-ink"
              }`}
            >
              Yearly
              <span
                className="text-[10px] font-semibold px-1.5 py-0.5 rounded-full text-white"
                style={{ background: "var(--color-orange)" }}
              >
                2 mo free
              </span>
            </button>
          </div>
        </div>

        {/* Two cards — both on white, thin borders, identical structure */}
        <div className="grid md:grid-cols-2 gap-3 lg:gap-4">
          {/* FOUNDING */}
          <article
            className={`relative p-8 lg:p-10 rounded-[20px] flex flex-col gap-7 bg-white border ${
              isFoundingOpen
                ? "border-black/[0.10]"
                : "border-black/[0.08] opacity-55"
            }`}
          >
            {isFoundingOpen && (
              <span
                className="absolute top-5 right-5 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-medium text-orange-deep"
                style={{ background: "rgba(255,107,53,0.10)" }}
              >
                {remaining} of {FOUNDING_MAX_SLOTS} left
              </span>
            )}

            <header className="flex flex-col gap-1.5">
              <h3 className="text-ink text-[20px] font-semibold tracking-[-0.018em]">
                Founding
              </h3>
              <p className="text-stone text-[14px] leading-[1.5] max-w-[36ch]">
                For the first {FOUNDING_MAX_SLOTS} producers. Lock your
                lifetime price now.
              </p>
            </header>

            <div className="flex flex-col gap-1">
              <div className="flex items-baseline gap-2">
                <span className="text-ink text-[48px] font-semibold tracking-[-0.04em] leading-none">
                  <span className="text-chroma">€{foundingPrice}</span>
                </span>
                <span className="text-stone text-[15px]">{priceUnit}</span>
              </div>
              {billingInterval === "yearly" && (
                <p className="text-stone text-[12px] mt-1">
                  €{FOUNDING_EFFECTIVE_MONTHLY}/mo effective · 2 months free
                </p>
              )}
              <p className="text-stone text-[12px] mt-1">
                Locked for life · never raised
              </p>
            </div>

            <ul className="flex flex-col gap-2.5">
              {MEMBER_BENEFITS.map((feat) => (
                <li
                  key={feat}
                  className="flex items-start gap-2.5 text-ink text-[14px] leading-[1.5]"
                >
                  <Check />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={() => handleCheckout("founding")}
              disabled={!isFoundingOpen || loadingTier !== null}
              className="mt-auto inline-flex items-center justify-center gap-2 h-[46px] px-6 rounded-full bg-orange text-white text-[14px] font-medium hover:bg-orange-deep transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loadingTier === "founding"
                ? "Opening checkout…"
                : isFoundingOpen
                  ? "Claim Founding"
                  : "Founding closed"}
              {isFoundingOpen && loadingTier !== "founding" && <ArrowRight />}
            </button>
          </article>

          {/* STANDARD */}
          <article className="relative p-8 lg:p-10 rounded-[20px] flex flex-col gap-7 bg-white border border-black/[0.10]">
            <header className="flex flex-col gap-1.5">
              <h3 className="text-ink text-[20px] font-semibold tracking-[-0.018em]">
                Standard
              </h3>
              <p className="text-stone text-[14px] leading-[1.5] max-w-[36ch]">
                For everyone after Founding sells out. Same lifetime
                guarantee.
              </p>
            </header>

            <div className="flex flex-col gap-1">
              <div className="flex items-baseline gap-2">
                <span className="text-ink text-[48px] font-semibold tracking-[-0.04em] leading-none">
                  €{standardPrice}
                </span>
                <span className="text-stone text-[15px]">{priceUnit}</span>
              </div>
              {billingInterval === "yearly" && (
                <p className="text-stone text-[12px] mt-1">
                  €{STANDARD_EFFECTIVE_MONTHLY}/mo effective · 2 months free
                </p>
              )}
              <p className="text-stone text-[12px] mt-1">
                Locked for life · never raised
              </p>
            </div>

            <ul className="flex flex-col gap-2.5">
              {MEMBER_BENEFITS.map((feat) => (
                <li
                  key={feat}
                  className="flex items-start gap-2.5 text-ink text-[14px] leading-[1.5]"
                >
                  <Check />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={() => handleCheckout("standard")}
              disabled={loadingTier !== null}
              className="mt-auto inline-flex items-center justify-center gap-2 h-[46px] px-6 rounded-full bg-ink text-white text-[14px] font-medium hover:bg-graphite transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loadingTier === "standard" ? "Opening checkout…" : "Subscribe"}
              {loadingTier !== "standard" && <ArrowRight />}
            </button>
          </article>
        </div>

        <p className="text-stone text-[12px] mt-8 mx-auto text-center">
          Cancel anytime. No refunds — listen first.
        </p>
      </div>
    </section>
  );
}

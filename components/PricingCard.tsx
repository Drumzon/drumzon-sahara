"use client";

// Two cards side-by-side. SAME monthly drop, SAME features, SAME access.
// The ONLY difference is the locked-for-life price:
//   - Founding: €7/mo locked forever (first 100 producers)
//   - Standard: €14.95/mo locked forever (everyone after)
//
// Both prices never go down once set. Cancel anytime, keep what you download.
// Honest pitch: it's the same product. Buy now and lock in cheap forever,
// or wait and lock in the standard rate.

import { useState } from "react";
import {
  FOUNDING_PRICE_MONTHLY,
  FOUNDING_PRICE_YEARLY,
  STANDARD_PRICE_MONTHLY,
  STANDARD_PRICE_YEARLY,
  FOUNDING_MAX_SLOTS,
} from "@/lib/pricing";

// Single source of truth — what every active member gets every month.
const MEMBER_BENEFITS = [
  "4 complete construction kits, every month",
  "~80 individual samples, ~12 presets, ~8 MIDIs",
  "Stems + MIDI on every loop",
  "Royalty-free for commercial use",
  "Cancel anytime, keep every file you downloaded",
];

const ArrowRight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden>
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const Check = ({ accent = false }: { accent?: boolean }) => (
  <span
    className={`shrink-0 mt-1 ${accent ? "text-orange" : "text-emerald"}`}
    aria-hidden
  >
    ✓
  </span>
);

const Lock = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M12 1a5 5 0 0 0-5 5v4H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2h-2V6a5 5 0 0 0-5-5zm-3 5a3 3 0 0 1 6 0v4H9V6z" />
  </svg>
);

export default function PricingCard({
  slotsClaimed,
  isFoundingOpen,
}: {
  slotsClaimed: number;
  isFoundingOpen: boolean;
}) {
  const [billingInterval, setBillingInterval] = useState<"monthly" | "yearly">(
    "monthly",
  );
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
      <div className="mx-auto max-w-[1100px]">
        <div className="max-w-[760px] mb-10 lg:mb-14">
          <h2 className="display-2 text-ink">
            Same drop. Same access.{" "}
            <span className="text-chroma">Different lifetime price.</span>
          </h2>
          <p className="display-subhead mt-5">
            First 100 producers lock €{FOUNDING_PRICE_MONTHLY}/month forever.
            Everyone after pays €{STANDARD_PRICE_MONTHLY}/month forever.
            Neither price ever raises — pick where you want to land.
          </p>
        </div>

        {/* Interval toggle */}
        <div className="flex justify-start mb-10">
          <div
            className="inline-flex p-1 rounded-full"
            style={{
              background: "var(--color-cream-warm)",
              border: "1px solid rgba(0,0,0,0.05)",
            }}
          >
            <button
              type="button"
              onClick={() => setBillingInterval("monthly")}
              className={`px-5 py-2 rounded-full text-[13px] font-semibold transition-all ${
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
              className={`px-5 py-2 rounded-full text-[13px] font-semibold transition-all ${
                billingInterval === "yearly"
                  ? "bg-white text-ink shadow-sm"
                  : "text-stone hover:text-ink"
              }`}
            >
              Yearly · 2 mo free
            </button>
          </div>
        </div>

        {/* Two cards side-by-side */}
        <div className="grid md:grid-cols-2 gap-4 lg:gap-5">
          {/* FOUNDING card */}
          <article
            className={`relative p-8 lg:p-10 rounded-[24px] flex flex-col gap-6 ${
              isFoundingOpen ? "" : "opacity-60"
            }`}
            style={{
              background: "#ffffff",
              border: isFoundingOpen
                ? "1.5px solid var(--color-orange)"
                : "1px solid rgba(0,0,0,0.10)",
              boxShadow: isFoundingOpen
                ? "0 20px 50px -20px rgba(255,107,53,0.30), 0 0 0 1px rgba(255,107,53,0.05)"
                : "none",
            }}
          >
            {isFoundingOpen && (
              <span
                className="absolute top-0 right-6 -translate-y-1/2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold text-white"
                style={{ background: "var(--color-orange)" }}
              >
                Limited · {remaining} of {FOUNDING_MAX_SLOTS} left
              </span>
            )}

            <header className="flex flex-col gap-2">
              <h3 className="text-ink text-[20px] font-semibold tracking-[-0.015em]">
                Founding
                {!isFoundingOpen && (
                  <span className="ml-2 text-stone text-[14px] font-normal">
                    · closed
                  </span>
                )}
              </h3>
              <p className="text-stone text-[14px] leading-[1.5]">
                For the first {FOUNDING_MAX_SLOTS} producers. Same drop as
                Standard — just cheaper, locked forever.
              </p>
            </header>

            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-ink text-[48px] font-bold tracking-[-0.035em] leading-none">
                  €{foundingPrice}
                </span>
                <span className="text-stone text-[15px]">{priceUnit}</span>
              </div>
              <p className="mt-2 text-orange-deep text-[12px] font-semibold uppercase tracking-[0.12em] flex items-center gap-1.5">
                <Lock />
                Locked for life
              </p>
            </div>

            <ul className="flex flex-col gap-3">
              {MEMBER_BENEFITS.map((feat) => (
                <li
                  key={feat}
                  className="flex items-start gap-3 text-ink text-[14px] leading-[1.5]"
                >
                  <Check accent />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={() => handleCheckout("founding")}
              disabled={!isFoundingOpen || loadingTier !== null}
              className="mt-auto inline-flex items-center justify-center gap-2 h-[48px] px-6 rounded-full bg-orange text-white text-[14px] font-semibold hover:bg-orange-deep transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loadingTier === "founding"
                ? "Opening checkout…"
                : isFoundingOpen
                  ? "Claim Founding spot"
                  : "Founding closed"}
              {isFoundingOpen && loadingTier !== "founding" && <ArrowRight />}
            </button>
          </article>

          {/* STANDARD card */}
          <article
            className="relative p-8 lg:p-10 rounded-[24px] flex flex-col gap-6"
            style={{
              background: "var(--color-cream-warm)",
              border: "1px solid rgba(0,0,0,0.06)",
            }}
          >
            <header className="flex flex-col gap-2">
              <h3 className="text-ink text-[20px] font-semibold tracking-[-0.015em]">
                Standard
              </h3>
              <p className="text-stone text-[14px] leading-[1.5]">
                For everyone after Founding sells out. Same drop, same
                access — at the lifetime rate.
              </p>
            </header>

            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-ink text-[48px] font-bold tracking-[-0.035em] leading-none">
                  €{standardPrice}
                </span>
                <span className="text-stone text-[15px]">{priceUnit}</span>
              </div>
              <p className="mt-2 text-stone text-[12px] font-semibold uppercase tracking-[0.12em] flex items-center gap-1.5">
                <Lock />
                Locked for life · never raised
              </p>
            </div>

            <ul className="flex flex-col gap-3">
              {MEMBER_BENEFITS.map((feat) => (
                <li
                  key={feat}
                  className="flex items-start gap-3 text-ink text-[14px] leading-[1.5]"
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
              className="mt-auto inline-flex items-center justify-center gap-2 h-[48px] px-6 rounded-full bg-ink text-white text-[14px] font-semibold hover:bg-graphite transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loadingTier === "standard" ? "Opening checkout…" : "Subscribe"}
              {loadingTier !== "standard" && <ArrowRight />}
            </button>
          </article>
        </div>

        {/* Honest footnote */}
        <p className="text-stone text-[13px] text-center mt-10 max-w-[600px] mx-auto">
          No hidden tier perks. No bait-and-switch. The difference is the
          €{STANDARD_PRICE_MONTHLY - FOUNDING_PRICE_MONTHLY}/month you save
          forever by being one of the first 100. Cancel anytime via Stripe.
        </p>
      </div>
    </section>
  );
}

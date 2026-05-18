"use client";

// Pricing block — literal styling from previous landing's LeadMagnet
// (dark rounded card on cream, radial sun glow, gradient title).
// Content swapped to subscription Founding/Standard tiers with live
// counter, interval toggle, atomic checkout flow.

import { useState } from "react";
import FoundingCounter from "./FoundingCounter";
import {
  FOUNDING_PRICE_MONTHLY,
  FOUNDING_PRICE_YEARLY,
  STANDARD_PRICE_MONTHLY,
  STANDARD_PRICE_YEARLY,
  FOUNDING_MAX_SLOTS,
  isSaharaWindow,
} from "@/lib/pricing";

const BASE_FOUNDING_BONUSES = [
  `Lifetime €${FOUNDING_PRICE_MONTHLY}/month — your price never rises`,
  "Quarterly track feedback — submit 1 track per quarter, personal reply",
  "Credits in the Yearly Compilation (releases Month 12)",
  "Vault drop — yearly experimental release, Founding-only",
];

const SAHARA_BONUS =
  "Sahara (Month 1) — yours forever, even after cancellation";

const ArrowRight = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    aria-hidden
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
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
  const [isLoading, setIsLoading] = useState(false);

  const tier = isFoundingOpen ? "founding" : "standard";
  const monthly = isFoundingOpen
    ? FOUNDING_PRICE_MONTHLY
    : STANDARD_PRICE_MONTHLY;
  const yearly = isFoundingOpen ? FOUNDING_PRICE_YEARLY : STANDARD_PRICE_YEARLY;
  const displayPrice = billingInterval === "monthly" ? monthly : yearly;
  const displayUnit = billingInterval === "monthly" ? "/month" : "/year";
  const altDisplay =
    billingInterval === "monthly"
      ? `or €${yearly}/year (2 months free)`
      : `or €${monthly}/month`;

  const foundingBonuses = isSaharaWindow()
    ? [...BASE_FOUNDING_BONUSES, SAHARA_BONUS]
    : BASE_FOUNDING_BONUSES;

  const handleCheckout = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tier, interval: billingInterval }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert(data.error || "Try again or email contact@drumzon.com");
        setIsLoading(false);
      }
    } catch {
      alert("Network error. Email contact@drumzon.com");
      setIsLoading(false);
    }
  };

  return (
    <section id="pricing" className="px-6 md:px-10 py-[clamp(48px,6vw,88px)]">
      <div className="mx-auto max-w-[880px]">
        <div
          className="relative overflow-hidden rounded-[40px] p-[clamp(40px,6vw,72px)] text-center"
          style={{
            background: "var(--color-ink)",
            border: "1px solid rgba(255,255,255,0.06)",
            boxShadow:
              "0 30px 60px -20px rgba(26,17,8,0.35), 0 12px 24px -8px rgba(26,17,8,0.18)",
          }}
        >
          {/* Warm sun glow — identical to LeadMagnet pattern */}
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at top, rgba(255,107,53,0.30), transparent 55%), radial-gradient(circle at 0% 100%, rgba(196,69,24,0.18), transparent 50%)",
            }}
          />

          <div className="relative flex flex-col items-center gap-6">
            <p className="text-orange/80 text-[11px] font-semibold tracking-[0.22em] uppercase">
              {isFoundingOpen
                ? "Founding members — limited to 100"
                : "Founding closed · Standard tier"}
            </p>

            <h2
              className="h-display text-cream-base"
              style={{ fontSize: "clamp(30px, 4.4vw, 56px)" }}
            >
              {isFoundingOpen ? (
                <>
                  Lock your{" "}
                  <span className="serif-em gradient-text">€{monthly}</span> for life.
                </>
              ) : (
                <>
                  Join the{" "}
                  <span className="serif-em gradient-text">label</span>.
                </>
              )}
            </h2>

            {/* Price display */}
            <div>
              <p
                className="h-display text-cream-base leading-none"
                style={{ fontSize: "clamp(56px, 8vw, 88px)" }}
              >
                <span className="gradient-text">€{displayPrice}</span>
                <span
                  className="text-[40%] font-normal"
                  style={{ color: "var(--color-text-dark)" }}
                >
                  {displayUnit}
                </span>
              </p>
              <p
                className="text-[14px] mt-2 opacity-80"
                style={{ color: "var(--color-text-dark)" }}
              >
                {altDisplay}
              </p>
            </div>

            {/* Interval toggle */}
            <div
              className="inline-flex p-1 rounded-full"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <button
                type="button"
                onClick={() => setBillingInterval("monthly")}
                className={`px-4 py-1.5 rounded-full text-[12px] font-semibold tracking-wide transition-all ${
                  billingInterval === "monthly"
                    ? "bg-orange text-white"
                    : "text-text-dark hover:text-cream-base"
                }`}
              >
                Monthly
              </button>
              <button
                type="button"
                onClick={() => setBillingInterval("yearly")}
                className={`px-4 py-1.5 rounded-full text-[12px] font-semibold tracking-wide transition-all ${
                  billingInterval === "yearly"
                    ? "bg-orange text-white"
                    : "text-text-dark hover:text-cream-base"
                }`}
              >
                Yearly · 2 mo free
              </button>
            </div>

            {/* Live counter (only while Founding is open) */}
            {isFoundingOpen && (
              <FoundingCounter
                slotsClaimed={slotsClaimed}
                maxSlots={FOUNDING_MAX_SLOTS}
                size="lg"
              />
            )}

            {/* Bonus list — Founding only */}
            {isFoundingOpen && (
              <div className="text-left w-full max-w-[440px]">
                <p
                  className="text-[12px] uppercase tracking-[0.16em] font-semibold mb-4 opacity-80"
                  style={{ color: "var(--color-text-dark)" }}
                >
                  What Standard members never get:
                </p>
                <ul className="flex flex-col gap-3">
                  {foundingBonuses.map((bonus) => (
                    <li
                      key={bonus}
                      className="flex items-start gap-3 text-cream-base text-[14px] leading-[1.55]"
                    >
                      <span className="shrink-0 mt-1 text-orange" aria-hidden>
                        ✓
                      </span>
                      <span>{bonus}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <button
              type="button"
              onClick={handleCheckout}
              disabled={isLoading}
              className="inline-flex items-center justify-center gap-2 h-[52px] px-7 rounded-full bg-orange text-white text-[15px] font-medium hover:bg-orange-deep hover:-translate-y-0.5 transition-all whitespace-nowrap disabled:opacity-60 disabled:cursor-wait"
              style={{
                boxShadow: "0 12px 36px -10px rgba(255,107,53,0.55)",
              }}
            >
              {isLoading
                ? "Opening checkout..."
                : isFoundingOpen
                  ? "Claim your Founding spot"
                  : "Join Drumzon Pro"}
              {!isLoading && <ArrowRight />}
            </button>

            <p
              className="mt-2 text-[12px] opacity-70 leading-[1.6]"
              style={{ color: "var(--color-text-dark)" }}
            >
              Cancel anytime. Keep what you downloaded.
              <br />
              No refunds — listen to the demo before deciding.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

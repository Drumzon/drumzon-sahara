"use client";

import { useState } from "react";
import FoundingCounter from "../FoundingCounter";
import {
  FOUNDING_PRICE_MONTHLY,
  FOUNDING_PRICE_YEARLY,
  STANDARD_PRICE_MONTHLY,
  STANDARD_PRICE_YEARLY,
  FOUNDING_MAX_SLOTS,
  isSaharaWindow,
} from "@/lib/pricing";

// BLOCK 5 — THE CONVERSION ENGINE
// Dark-on-cream contrast (same pattern as the previous landing's LeadMagnet).
// The block POPS visually as THE conversion point. Sahara bonus conditional
// on the window so we don't promise what the webhook can't deliver.

const BASE_FOUNDING_BONUSES = [
  `Lifetime €${FOUNDING_PRICE_MONTHLY}/month — your price never rises`,
  "Quarterly track feedback — submit 1 track per quarter, get personal feedback from me",
  "Credits in the Drumzon Yearly Compilation (releases Month 12)",
  "Vault access — yearly experimental bonus drop, Founding members only",
];

const SAHARA_BONUS = "Sahara (Month 1) — yours forever, even after cancellation";

const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden>
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
  const monthly = isFoundingOpen ? FOUNDING_PRICE_MONTHLY : STANDARD_PRICE_MONTHLY;
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
        alert(data.error || "Something went wrong. Try again or email contact@drumzon.com");
        setIsLoading(false);
      }
    } catch {
      alert("Network error. Try again or email contact@drumzon.com");
      setIsLoading(false);
    }
  };

  return (
    <section
      id="pricing"
      className="px-6 md:px-10 py-[clamp(64px,9vw,128px)]"
    >
      <div className="max-w-[760px] mx-auto">
        <div
          className="relative overflow-hidden rounded-[40px] p-8 sm:p-10 lg:p-14 text-center"
          style={{
            background: "var(--color-ink)",
            border: "1px solid rgba(255,255,255,0.06)",
            boxShadow:
              "0 40px 80px -20px rgba(26,17,8,0.4), 0 16px 32px -8px rgba(26,17,8,0.2)",
          }}
        >
          {/* Warm radial glow */}
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at top, rgba(255,107,53,0.28), transparent 60%), radial-gradient(circle at 0% 100%, rgba(196,69,24,0.16), transparent 55%)",
            }}
          />

          <div className="relative flex flex-col items-center gap-6">
            {isFoundingOpen ? (
              <>
                <p
                  className="text-[11px] font-semibold tracking-[0.22em] uppercase"
                  style={{ color: "var(--color-orange-soft)" }}
                >
                  Founding members
                </p>

                {/* Price */}
                <div>
                  <p
                    className="h-display text-cream-base leading-none"
                    style={{ fontSize: "clamp(64px, 9vw, 96px)" }}
                  >
                    <span className="gradient-text">€{displayPrice}</span>
                    <span className="text-text-dark text-[40%] font-normal">
                      {displayUnit}
                    </span>
                  </p>
                  <p className="text-text-dark text-[14px] mt-2 opacity-80">
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

                {/* Live counter */}
                <FoundingCounter
                  slotsClaimed={slotsClaimed}
                  maxSlots={FOUNDING_MAX_SLOTS}
                  size="lg"
                />

                {/* Bonuses */}
                <div className="text-left w-full max-w-[440px] mt-2">
                  <p className="text-text-dark text-[12px] uppercase tracking-[0.16em] font-semibold mb-4 opacity-80">
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

                <button
                  type="button"
                  onClick={handleCheckout}
                  disabled={isLoading}
                  className="inline-flex items-center justify-center gap-2 h-[56px] px-8 rounded-full bg-orange text-white text-[15px] font-semibold hover:bg-orange-deep hover:-translate-y-0.5 transition-all disabled:opacity-60 disabled:cursor-wait w-full sm:w-auto mt-2"
                  style={{ boxShadow: "0 16px 40px -12px rgba(255,107,53,0.55)" }}
                >
                  {isLoading ? "Opening checkout..." : "Claim your Founding spot"}
                  {!isLoading && <ArrowRight />}
                </button>

                <p className="text-text-dark text-[12px] opacity-70 leading-[1.6]">
                  Cancel anytime. Keep what you downloaded.
                  <br />
                  No refunds — listen to the demo above before deciding.
                </p>
              </>
            ) : (
              <>
                <p
                  className="text-[11px] font-semibold tracking-[0.22em] uppercase"
                  style={{ color: "var(--color-orange-soft)" }}
                >
                  Founding tier — closed
                </p>
                <p className="text-text-dark text-[14px] max-w-[44ch]">
                  The first {FOUNDING_MAX_SLOTS} members claimed their lifetime
                  spots. Standard membership is now open.
                </p>

                <div
                  className="border-t pt-8 w-full"
                  style={{ borderColor: "rgba(255,255,255,0.08)" }}
                >
                  <p
                    className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-4"
                    style={{ color: "var(--color-orange-soft)" }}
                  >
                    Standard tier
                  </p>
                  <div>
                    <p
                      className="h-display text-cream-base leading-none"
                      style={{ fontSize: "clamp(56px, 8vw, 88px)" }}
                    >
                      <span className="gradient-text">€{displayPrice}</span>
                      <span className="text-text-dark text-[40%] font-normal">
                        {displayUnit}
                      </span>
                    </p>
                    <p className="text-text-dark text-[14px] mt-2 opacity-80">
                      {altDisplay}
                    </p>
                  </div>

                  <div
                    className="inline-flex p-1 rounded-full my-6"
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

                  <button
                    type="button"
                    onClick={handleCheckout}
                    disabled={isLoading}
                    className="inline-flex items-center justify-center gap-2 h-[56px] px-8 rounded-full bg-orange text-white text-[15px] font-semibold hover:bg-orange-deep hover:-translate-y-0.5 transition-all disabled:opacity-60 disabled:cursor-wait w-full sm:w-auto"
                    style={{ boxShadow: "0 16px 40px -12px rgba(255,107,53,0.55)" }}
                  >
                    {isLoading ? "Opening checkout..." : "Join Drumzon Pro"}
                    {!isLoading && <ArrowRight />}
                  </button>

                  <p className="text-text-dark text-[12px] opacity-70 mt-4 leading-[1.6]">
                    Cancel anytime. Keep what you downloaded.
                    <br />
                    No refunds — listen to the demo above before deciding.
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

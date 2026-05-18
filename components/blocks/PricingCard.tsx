"use client";

import { useState } from "react";
import FoundingCounter from "../FoundingCounter";
import {
  FOUNDING_PRICE_MONTHLY,
  FOUNDING_PRICE_YEARLY,
  STANDARD_PRICE_MONTHLY,
  STANDARD_PRICE_YEARLY,
  FOUNDING_MAX_SLOTS,
} from "@/lib/pricing";

// BLOCK 5 — FOUNDING MEMBERS BLOCK (THE CONVERSION ENGINE)
// Main pricing block. Dominates visually. Dual variant:
//   - Founding open: shows €7/month + 100-slot counter + bonus list
//   - Founding closed: shows €14.95/month Standard tier (no bonuses)
//
// Yearly toggle: subtle switch between monthly and yearly billing.

const FOUNDING_BONUSES = [
  "Lifetime €7/month — your price never rises",
  "Quarterly track feedback — submit 1 track per quarter, get personal feedback from me",
  "Credits in the Drumzon Yearly Compilation (releases Month 12)",
  "Vault access — yearly experimental bonus drop, Founding members only",
  "Sahara (Month 1) — yours forever, even after cancellation",
];

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
  const [interval, setInterval] = useState<"monthly" | "yearly">("monthly");
  const [isLoading, setIsLoading] = useState(false);

  const tier = isFoundingOpen ? "founding" : "standard";
  const monthly = isFoundingOpen ? FOUNDING_PRICE_MONTHLY : STANDARD_PRICE_MONTHLY;
  const yearly = isFoundingOpen ? FOUNDING_PRICE_YEARLY : STANDARD_PRICE_YEARLY;

  const displayPrice = interval === "monthly" ? monthly : yearly;
  const displayUnit = interval === "monthly" ? "/month" : "/year";
  const altDisplay =
    interval === "monthly"
      ? `or €${yearly}/year (2 months free)`
      : `or €${monthly}/month`;

  const handleCheckout = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tier, interval }),
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
      className="section-pad px-6 md:px-10"
    >
      <div className="max-w-[680px] mx-auto">
        <div className="card-accent p-8 sm:p-10 lg:p-12 text-center">
          {isFoundingOpen ? (
            <>
              <p className="eyebrow" style={{ color: "var(--color-accent)" }}>
                Founding members tier
              </p>

              {/* Price */}
              <div className="mt-6 mb-6">
                <p
                  className="h-display text-text"
                  style={{ fontSize: "clamp(56px, 8vw, 88px)", lineHeight: 1 }}
                >
                  €{displayPrice}
                  <span className="text-text-muted text-[40%] font-normal">
                    {displayUnit}
                  </span>
                </p>
                <p className="text-text-muted text-[14px] mt-2">
                  {altDisplay}
                </p>
              </div>

              {/* Interval toggle */}
              <div
                className="inline-flex p-1 rounded-full mb-8"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid var(--color-border)" }}
              >
                <button
                  type="button"
                  onClick={() => setInterval("monthly")}
                  className={`px-4 py-1.5 rounded-full text-[12px] font-semibold tracking-wide transition-colors ${
                    interval === "monthly"
                      ? "text-bg"
                      : "text-text-muted hover:text-text"
                  }`}
                  style={interval === "monthly" ? { background: "var(--color-accent)" } : {}}
                >
                  Monthly
                </button>
                <button
                  type="button"
                  onClick={() => setInterval("yearly")}
                  className={`px-4 py-1.5 rounded-full text-[12px] font-semibold tracking-wide transition-colors ${
                    interval === "yearly"
                      ? "text-bg"
                      : "text-text-muted hover:text-text"
                  }`}
                  style={interval === "yearly" ? { background: "var(--color-accent)" } : {}}
                >
                  Yearly · 2 mo free
                </button>
              </div>

              {/* Live counter */}
              <div className="mb-8">
                <FoundingCounter
                  slotsClaimed={slotsClaimed}
                  maxSlots={FOUNDING_MAX_SLOTS}
                  size="lg"
                />
              </div>

              {/* Bonuses */}
              <div className="text-left mb-8">
                <p className="text-text-muted text-[13px] mb-4">
                  What Founding members get that Standard members never will:
                </p>
                <ul className="flex flex-col gap-3">
                  {FOUNDING_BONUSES.map((bonus) => (
                    <li
                      key={bonus}
                      className="flex items-start gap-3 text-text text-[14px] leading-[1.55]"
                    >
                      <span
                        className="shrink-0 mt-1"
                        style={{ color: "var(--color-accent)" }}
                        aria-hidden
                      >
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
                className="btn-primary btn-primary-large w-full sm:w-auto disabled:opacity-60 disabled:cursor-wait"
              >
                {isLoading ? "Opening checkout..." : "Claim your Founding spot"}
                {!isLoading && <ArrowRight />}
              </button>

              <p className="text-text-subtle text-[12px] mt-4 leading-[1.6]">
                Cancel anytime. Keep what you downloaded.
                <br />
                No refunds — listen to the demo above before deciding.
              </p>
            </>
          ) : (
            <>
              <p className="eyebrow" style={{ color: "var(--color-accent)" }}>
                Founding tier — closed
              </p>
              <p className="text-text-muted text-[14px] mt-3 mb-8 max-w-[44ch] mx-auto">
                The first {FOUNDING_MAX_SLOTS} members claimed their lifetime
                spots. Standard membership is now open.
              </p>

              <div
                className="border-t pt-8"
                style={{ borderColor: "var(--color-border)" }}
              >
                <p className="eyebrow">Standard tier</p>
                <div className="mt-4 mb-6">
                  <p
                    className="h-display text-text"
                    style={{ fontSize: "clamp(56px, 8vw, 88px)", lineHeight: 1 }}
                  >
                    €{displayPrice}
                    <span className="text-text-muted text-[40%] font-normal">
                      {displayUnit}
                    </span>
                  </p>
                  <p className="text-text-muted text-[14px] mt-2">
                    {altDisplay}
                  </p>
                </div>

                <div
                  className="inline-flex p-1 rounded-full mb-8"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid var(--color-border)" }}
                >
                  <button
                    type="button"
                    onClick={() => setInterval("monthly")}
                    className={`px-4 py-1.5 rounded-full text-[12px] font-semibold tracking-wide transition-colors ${
                      interval === "monthly" ? "text-bg" : "text-text-muted hover:text-text"
                    }`}
                    style={interval === "monthly" ? { background: "var(--color-accent)" } : {}}
                  >
                    Monthly
                  </button>
                  <button
                    type="button"
                    onClick={() => setInterval("yearly")}
                    className={`px-4 py-1.5 rounded-full text-[12px] font-semibold tracking-wide transition-colors ${
                      interval === "yearly" ? "text-bg" : "text-text-muted hover:text-text"
                    }`}
                    style={interval === "yearly" ? { background: "var(--color-accent)" } : {}}
                  >
                    Yearly · 2 mo free
                  </button>
                </div>

                <button
                  type="button"
                  onClick={handleCheckout}
                  disabled={isLoading}
                  className="btn-primary btn-primary-large w-full sm:w-auto disabled:opacity-60 disabled:cursor-wait"
                >
                  {isLoading ? "Opening checkout..." : "Join Drumzon Pro"}
                  {!isLoading && <ArrowRight />}
                </button>

                <p className="text-text-subtle text-[12px] mt-4 leading-[1.6]">
                  Cancel anytime. Keep what you downloaded.
                  <br />
                  No refunds — listen to the demo above before deciding.
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

"use client";

// Literal sticky pill from previous landing. Adapted to subscription CTA.
// Shows after scroll > 700px; clicks call /api/checkout directly.

import { useEffect, useState } from "react";
import {
  FOUNDING_PRICE_MONTHLY,
  STANDARD_PRICE_MONTHLY,
  FOUNDING_MAX_SLOTS,
} from "@/lib/pricing";

export default function StickyCTA({
  isFoundingOpen,
  slotsClaimed,
}: {
  isFoundingOpen: boolean;
  slotsClaimed: number;
}) {
  const [visible, setVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleCheckout = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          tier: isFoundingOpen ? "founding" : "standard",
          interval: "monthly",
        }),
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

  const remaining = Math.max(0, FOUNDING_MAX_SLOTS - slotsClaimed);
  const headline = isFoundingOpen
    ? `Founding · €${FOUNDING_PRICE_MONTHLY}/mo`
    : `Standard · €${STANDARD_PRICE_MONTHLY}/mo`;
  const subline = isFoundingOpen
    ? `${remaining}/${FOUNDING_MAX_SLOTS} spots left`
    : "Cancel anytime";

  return (
    <div
      role="region"
      aria-label="Sticky CTA"
      aria-hidden={!visible}
      className={`fixed bottom-3 inset-x-3 sm:inset-x-auto sm:left-1/2 sm:-translate-x-1/2 z-[90] transition-all duration-300 ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-[200%] opacity-0 pointer-events-none"
      }`}
      style={{ maxWidth: "min(640px, calc(100% - 24px))" }}
    >
      <div
        className="flex items-center justify-between gap-3 sm:gap-5 pl-4 pr-1 py-1 rounded-full"
        style={{
          background: "rgba(26,26,26,0.94)",
          backdropFilter: "blur(20px) saturate(180%)",
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
          border: "1px solid rgba(255,107,53,0.25)",
          boxShadow:
            "0 16px 48px -12px rgba(26,17,8,0.5), 0 0 0 4px rgba(255,107,53,0.06)",
        }}
      >
        <div className="flex items-center gap-2.5 min-w-0">
          <span
            className="ab-dot w-1.5 h-1.5 rounded-full bg-orange flex-shrink-0"
            style={{ boxShadow: "0 0 8px rgba(255,107,53,1)" }}
            aria-hidden
          />
          <div className="flex flex-col leading-tight min-w-0">
            <span className="text-cream-base text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.1em]">
              {headline}
            </span>
            <span className="text-orange text-[10px] sm:text-[11px] font-medium">
              {subline}
            </span>
          </div>
        </div>
        <button
          type="button"
          onClick={handleCheckout}
          disabled={isLoading}
          className="inline-flex items-center justify-center h-10 px-5 rounded-full bg-orange text-white text-[13px] font-medium hover:bg-orange-deep transition-colors flex-shrink-0 disabled:opacity-60 disabled:cursor-wait"
        >
          {isLoading
            ? "Opening..."
            : isFoundingOpen
              ? "Claim spot"
              : "Subscribe"}
        </button>
      </div>
    </div>
  );
}

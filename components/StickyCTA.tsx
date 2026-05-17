"use client";

import { useEffect, useState } from "react";
import type { Currency } from "@/lib/currency";
import { formatPrice } from "@/lib/currency";
import { getCurrentDrop, getDropBuyUrl } from "@/lib/drops";
import { getDropPrice, getInnerCirclePrice, splitDuration } from "@/lib/pricing";
import { getInnerCircleBuyUrl } from "@/lib/membership";

// Dual sticky CTA — drop one-time + Inner Circle subscription side by side.
// Visible after scroll > 700px. Hidden by default to avoid annoying the
// reader during initial scan.
export default function StickyCTA({ currency }: { currency: Currency }) {
  const drop = getCurrentDrop();
  const buyUrl = getDropBuyUrl(drop, currency);
  const icUrl = getInnerCircleBuyUrl();
  const icPrice = getInnerCirclePrice(currency);
  const [visible, setVisible] = useState(false);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    setTick(Date.now());
    const t = setInterval(() => setTick(Date.now()), 1000);
    const onScroll = () => setVisible(window.scrollY > 700);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      clearInterval(t);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const price = getDropPrice(drop, tick || Date.now());
  const fmt = formatPrice(price.amount, currency);
  const icFmt = formatPrice(icPrice, currency);

  let subline: string;
  if (price.inEarlyBird && price.msUntilNextTier !== null) {
    const { days, hours, mins } = splitDuration(price.msUntilNextTier);
    subline = `early bird · ${days}d ${String(hours).padStart(2, "0")}h ${String(mins).padStart(2, "0")}m`;
  } else if (price.tier === "regular" && price.msUntilNextTier !== null) {
    const days = Math.max(1, Math.ceil(price.msUntilNextTier / 86_400_000));
    subline = `going to vault in ${days}d`;
  } else {
    subline = "in the Vault";
  }

  return (
    <div
      role="region"
      aria-label="Sticky purchase bar"
      aria-hidden={!visible}
      className={`fixed bottom-3 inset-x-3 sm:inset-x-auto sm:left-1/2 sm:-translate-x-1/2 z-[90] transition-all duration-300 ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-[200%] opacity-0 pointer-events-none"
      }`}
      style={{ maxWidth: "min(720px, calc(100% - 24px))" }}
    >
      <div
        className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2 sm:gap-3 p-1.5 rounded-[28px] sm:rounded-full"
        style={{
          background: "rgba(26,26,26,0.94)",
          backdropFilter: "blur(20px) saturate(180%)",
          border: "1px solid rgba(255,107,53,0.25)",
          boxShadow:
            "0 16px 48px -12px rgba(26,17,8,0.5), 0 0 0 4px rgba(255,107,53,0.06)",
        }}
      >
        {/* Drop label */}
        <div className="flex items-center gap-2.5 min-w-0 pl-3 pr-1 sm:pr-0 py-1">
          <span
            className="ab-dot w-1.5 h-1.5 rounded-full bg-orange flex-shrink-0"
            style={{ boxShadow: "0 0 8px rgba(255,107,53,1)" }}
            aria-hidden
          />
          <div className="flex flex-col leading-tight min-w-0">
            <span className="text-cream-base text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.1em]">
              {drop.name} · {fmt}
            </span>
            <span className="text-orange text-[10px] sm:text-[11px] font-medium">
              {subline}
            </span>
          </div>
        </div>

        {/* Dual CTA */}
        <div className="flex items-stretch gap-1.5">
          <a
            href={icUrl}
            className="inline-flex items-center justify-center h-10 px-4 rounded-full text-cream-base text-[12px] sm:text-[13px] font-medium border border-white/15 hover:border-orange hover:text-orange transition-colors flex-shrink-0"
          >
            Inner Circle {icFmt}/mo
          </a>
          <a
            href={buyUrl}
            className="inline-flex items-center justify-center h-10 px-4 sm:px-5 rounded-full bg-orange text-white text-[12px] sm:text-[13px] font-medium hover:bg-orange-deep transition-colors flex-shrink-0"
          >
            Get {drop.name}
          </a>
        </div>
      </div>
    </div>
  );
}

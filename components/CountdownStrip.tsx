"use client";

import { useEffect, useState } from "react";
import type { Currency } from "@/lib/currency";
import { formatPrice } from "@/lib/currency";
import { getCurrentDrop } from "@/lib/drops";
import { getDropPrice, splitDuration } from "@/lib/pricing";

// Top announcement strip — content depends on the current drop's tier:
//   early-bird (day 0-6):  countdown to $37 + early-bird CTA
//   regular   (day 7-29):  "going to vault on Xd" + drop CTA
//   vault     (day 30+):   "Sahara is in the Vault — $50 · New drop coming"
//
// Currency is detected server-side and passed in to avoid hydration mismatch.
export default function CountdownStrip({ currency }: { currency: Currency }) {
  const drop = getCurrentDrop();
  const initialPrice = getDropPrice(drop);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    setTick(Date.now());
    const id = setInterval(() => setTick(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const price = tick === 0 ? initialPrice : getDropPrice(drop, tick);

  const renderBody = () => {
    // EARLY-BIRD: live countdown to regular price
    if (price.inEarlyBird && price.msUntilNextTier !== null) {
      const { days, hours, mins, secs } = splitDuration(price.msUntilNextTier);
      return (
        <span className="text-center font-mono tabular-nums text-text-dark">
          Early bird ends in{" "}
          <strong className="font-semibold text-cream-base">
            {days}d {String(hours).padStart(2, "0")}h{" "}
            {String(mins).padStart(2, "0")}m{" "}
            {String(secs).padStart(2, "0")}s
          </strong>{" "}
          ·{" "}
          <a
            href="#hero"
            className="underline underline-offset-[3px] decoration-[1.5px] font-semibold text-orange"
          >
            Get {drop.name} for {formatPrice(price.amount, currency)}
          </a>
        </span>
      );
    }

    // REGULAR (day 7-29): no countdown, but anchor the vault transition
    if (price.tier === "regular" && price.nextTierAmount !== null) {
      const days = Math.max(
        1,
        Math.ceil((price.msUntilNextTier ?? 0) / 86_400_000),
      );
      return (
        <span className="text-center text-text-dark">
          {drop.name} · {formatPrice(price.amount, currency)} —{" "}
          <span className="text-cream-base font-medium">
            going to vault in {days}d
          </span>
          {" · "}
          <a
            href="#hero"
            className="underline underline-offset-[3px] decoration-[1.5px] font-semibold text-orange"
          >
            Get it now →
          </a>
        </span>
      );
    }

    // VAULT (day 30+): drop has moved to vault
    return (
      <span className="text-center text-text-dark">
        {drop.name} is in the Vault · {formatPrice(price.amount, currency)} ·{" "}
        <a
          href="#hero"
          className="underline underline-offset-[3px] decoration-[1.5px] font-semibold text-orange"
        >
          New drop coming →
        </a>
      </span>
    );
  };

  return (
    <div
      role="region"
      aria-label="Drop status"
      className="fixed top-0 inset-x-0 h-[38px] z-[105] flex items-center justify-center gap-3 px-6 text-cream-base text-[12px] sm:text-[13px] font-medium tracking-tight"
      style={{
        background: "var(--color-ink)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <span
        className="ab-dot w-1.5 h-1.5 rounded-full"
        style={{
          background: "var(--color-orange)",
          boxShadow: "0 0 6px rgba(255,107,53,0.8)",
        }}
        aria-hidden
      />
      {renderBody()}
    </div>
  );
}

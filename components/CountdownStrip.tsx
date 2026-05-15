"use client";

import { useEffect, useState } from "react";
import {
  LAUNCH_END_MS,
  LAUNCH_PRICE_EUR,
  POST_LAUNCH_PRICE_EUR,
  PROMO_CODE,
} from "@/lib/pricing";

function diff(target: number, now: number) {
  const remaining = Math.max(0, target - now);
  const days = Math.floor(remaining / 86_400_000);
  const hours = Math.floor((remaining % 86_400_000) / 3_600_000);
  const mins = Math.floor((remaining % 3_600_000) / 60_000);
  const secs = Math.floor((remaining % 60_000) / 1000);
  return { remaining, days, hours, mins, secs };
}

export default function CountdownStrip() {
  const [now, setNow] = useState(LAUNCH_END_MS);
  useEffect(() => {
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const { remaining, days, hours, mins, secs } = diff(LAUNCH_END_MS, now);
  const expired = remaining === 0;

  return (
    <div
      role="region"
      aria-label="Launch announcement"
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
      {expired ? (
        <span className="text-center">
          Sahara is live · €{POST_LAUNCH_PRICE_EUR}.{" "}
          <a
            href="#hero"
            className="underline underline-offset-[3px] decoration-[1.5px] font-semibold text-orange"
          >
            Get the pack →
          </a>
        </span>
      ) : (
        <span className="text-center font-mono tabular-nums text-text-dark">
          Launch ends in{" "}
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
            Use {PROMO_CODE} for €{LAUNCH_PRICE_EUR}
          </a>
        </span>
      )}
    </div>
  );
}

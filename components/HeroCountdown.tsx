"use client";

import { useEffect, useState } from "react";
import { splitDuration } from "@/lib/pricing";

// Inline countdown chip rendered under the price ladder in the Hero
// during the early-bird window. Initial render uses the server value
// to avoid hydration mismatch, then client takes over.
export default function HeroCountdown({
  msUntilNextTier,
}: {
  msUntilNextTier: number;
}) {
  const [ms, setMs] = useState(msUntilNextTier);

  useEffect(() => {
    setMs(msUntilNextTier);
    const start = Date.now();
    const id = setInterval(() => {
      const elapsed = Date.now() - start;
      setMs(Math.max(0, msUntilNextTier - elapsed));
    }, 1000);
    return () => clearInterval(id);
  }, [msUntilNextTier]);

  if (ms <= 0) return null;
  const { days, hours, mins, secs } = splitDuration(ms);

  return (
    <p className="fade-up-3 text-[11px] text-ash uppercase tracking-[0.16em] font-semibold flex items-center gap-2 mt-1">
      <span
        className="ab-dot w-1.5 h-1.5 rounded-full bg-orange"
        style={{ boxShadow: "0 0 8px rgba(255,107,53,1)" }}
        aria-hidden
      />
      Early bird ends in{" "}
      <span className="font-mono tabular-nums text-ink">
        {days}d {String(hours).padStart(2, "0")}h{" "}
        {String(mins).padStart(2, "0")}m{" "}
        {String(secs).padStart(2, "0")}s
      </span>
    </p>
  );
}

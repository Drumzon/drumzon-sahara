"use client";

import { useEffect, useState } from "react";
import { splitDuration } from "@/lib/pricing";

// Generic countdown chip used inside CurrentDrop. Initial render uses
// server-computed ms to avoid hydration mismatch; client takes over on mount.
export default function DropCountdown({
  msUntilNextTier,
  prefix,
  suffix,
}: {
  msUntilNextTier: number;
  prefix: string;
  suffix: string;
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
    <div
      className="inline-flex items-center gap-3 px-5 py-3 rounded-full"
      style={{
        background: "rgba(255,107,53,0.06)",
        border: "1px solid rgba(255,107,53,0.20)",
      }}
    >
      <span
        className="ab-dot w-1.5 h-1.5 rounded-full bg-orange flex-shrink-0"
        style={{ boxShadow: "0 0 8px rgba(255,107,53,1)" }}
        aria-hidden
      />
      <span className="text-[12px] text-stone font-semibold uppercase tracking-[0.12em]">
        {prefix}
      </span>
      <span className="font-mono tabular-nums text-ink text-[13px] font-semibold">
        {days}d {String(hours).padStart(2, "0")}h{" "}
        {String(mins).padStart(2, "0")}m{" "}
        {String(secs).padStart(2, "0")}s
      </span>
      <span className="text-[11px] text-ash hidden sm:inline">{suffix}</span>
    </div>
  );
}

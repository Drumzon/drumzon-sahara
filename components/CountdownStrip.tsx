"use client";

import { useEffect, useState } from "react";
import { FOUNDING_MAX_SLOTS } from "@/lib/pricing";

// Top announcement strip — literal styling from previous landing.
// Content adapted to Drumzon Pro: shows live countdown to Sahara release
// (May 31) while pre-release, then switches to "Sahara is live" + Founding
// remaining slots once released.

const SAHARA_RELEASE_MS = new Date("2026-05-31T00:00:00Z").getTime();

function diff(target: number, now: number) {
  const remaining = Math.max(0, target - now);
  const days = Math.floor(remaining / 86_400_000);
  const hours = Math.floor((remaining % 86_400_000) / 3_600_000);
  const mins = Math.floor((remaining % 3_600_000) / 60_000);
  const secs = Math.floor((remaining % 60_000) / 1000);
  return { remaining, days, hours, mins, secs };
}

export default function CountdownStrip({
  slotsClaimed,
}: {
  slotsClaimed: number;
}) {
  const [now, setNow] = useState(SAHARA_RELEASE_MS);

  useEffect(() => {
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const { remaining, days, hours, mins, secs } = diff(SAHARA_RELEASE_MS, now);
  const released = remaining === 0;
  const remainingSlots = Math.max(0, FOUNDING_MAX_SLOTS - slotsClaimed);

  return (
    <div
      role="region"
      aria-label="Drumzon Pro status"
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

      {released ? (
        <span className="text-center text-text-dark">
          Sahara is live ·{" "}
          <span className="text-cream-base font-medium">
            {remainingSlots > 0
              ? `${remainingSlots} Founding spots left`
              : "Founding closed · Standard open"}
          </span>
          {" · "}
          <a
            href="#pricing"
            className="underline underline-offset-[3px] decoration-[1.5px] font-semibold text-orange"
          >
            Claim yours →
          </a>
        </span>
      ) : (
        <span className="text-center font-mono tabular-nums text-text-dark">
          Sahara drops in{" "}
          <strong className="font-semibold text-cream-base">
            {days}d {String(hours).padStart(2, "0")}h{" "}
            {String(mins).padStart(2, "0")}m{" "}
            {String(secs).padStart(2, "0")}s
          </strong>{" "}
          ·{" "}
          <a
            href="#pricing"
            className="underline underline-offset-[3px] decoration-[1.5px] font-semibold text-orange"
          >
            Lock your Founding spot
          </a>
        </span>
      )}
    </div>
  );
}

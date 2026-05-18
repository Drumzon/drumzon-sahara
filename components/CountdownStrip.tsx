"use client";

import { useEffect, useState } from "react";
import { FOUNDING_MAX_SLOTS } from "@/lib/pricing";

// Apple-minimal status strip — no FOMO countdown digits. Just a quiet
// statement of where we are in the cycle, with one inline link to pricing.

const SAHARA_RELEASE_MS = new Date("2026-05-31T00:00:00Z").getTime();

export default function CountdownStrip({
  slotsClaimed,
}: {
  slotsClaimed: number;
}) {
  const [now, setNow] = useState(SAHARA_RELEASE_MS);

  useEffect(() => {
    setNow(Date.now());
    // No per-second tick — re-render once per minute is enough.
    const id = setInterval(() => setNow(Date.now()), 60_000);
    return () => clearInterval(id);
  }, []);

  const released = now >= SAHARA_RELEASE_MS;
  const remaining = Math.max(0, FOUNDING_MAX_SLOTS - slotsClaimed);

  const message = released
    ? remaining > 0
      ? `Sahara is live. ${remaining} of ${FOUNDING_MAX_SLOTS} Founding spots remaining.`
      : `Sahara is live. Founding closed — Standard membership open.`
    : `Drumzon Pro · Sahara drops May 31. ${remaining} of ${FOUNDING_MAX_SLOTS} Founding spots remaining.`;

  return (
    <div
      role="region"
      aria-label="Drumzon Pro status"
      className="fixed top-0 inset-x-0 h-[38px] z-[105] flex items-center justify-center px-6 text-[12px] sm:text-[13px]"
      style={{
        background: "var(--color-ink)",
        color: "rgba(255,255,255,0.78)",
      }}
    >
      <span className="text-center">
        {message}{" "}
        <a
          href="#pricing"
          className="text-white font-medium underline decoration-white/30 underline-offset-[3px] hover:decoration-white transition-colors"
        >
          {released && remaining === 0 ? "Subscribe" : "See pricing"}
        </a>
      </span>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";

const LAUNCH_END = new Date("2026-05-20T23:59:59Z").getTime();

function diff(target: number, now: number) {
  const remaining = Math.max(0, target - now);
  const days = Math.floor(remaining / 86_400_000);
  const hours = Math.floor((remaining % 86_400_000) / 3_600_000);
  const mins = Math.floor((remaining % 3_600_000) / 60_000);
  return { remaining, days, hours, mins };
}

export default function StickyCTA() {
  const buyUrl = process.env.NEXT_PUBLIC_BUY_URL || "#";
  const [visible, setVisible] = useState(false);
  const [now, setNow] = useState(LAUNCH_END);

  useEffect(() => {
    setNow(Date.now());
    const tick = setInterval(() => setNow(Date.now()), 1000);
    const onScroll = () => setVisible(window.scrollY > 700);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      clearInterval(tick);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const { remaining, days, hours, mins } = diff(LAUNCH_END, now);
  if (remaining === 0) return null;

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
      style={{ maxWidth: "min(640px, calc(100% - 24px))" }}
    >
      <div
        className="flex items-center justify-between gap-3 sm:gap-5 pl-4 pr-1 py-1 rounded-full"
        style={{
          background: "rgba(26,26,26,0.94)",
          backdropFilter: "blur(20px) saturate(180%)",
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
              Sahara · €27
            </span>
            <span className="text-orange text-[10px] sm:text-[11px] font-mono tabular-nums">
              ends {days}d {String(hours).padStart(2, "0")}h{" "}
              {String(mins).padStart(2, "0")}m
            </span>
          </div>
        </div>
        <a
          href={buyUrl}
          className="inline-flex items-center justify-center h-10 px-5 rounded-full bg-orange text-white text-[13px] font-medium hover:bg-orange-deep transition-colors flex-shrink-0"
        >
          Get the pack
        </a>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import AudioPlayer from "../AudioPlayer";

// BLOCK 9 — FINAL CTA
// Repeat conversion block. Minimal version. Same dynamic Founding/Standard
// logic but the parent passes isFoundingOpen as a prop.

const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden>
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

export default function FinalCTA({
  isFoundingOpen,
}: {
  isFoundingOpen: boolean;
}) {
  const audioSrc = process.env.NEXT_PUBLIC_SAHARA_DEMO_URL || undefined;
  const [isLoading, setIsLoading] = useState(false);

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
        alert(data.error || "Something went wrong. Email contact@drumzon.com");
        setIsLoading(false);
      }
    } catch {
      alert("Network error. Email contact@drumzon.com");
      setIsLoading(false);
    }
  };

  return (
    <section
      id="final-cta"
      className="section-pad px-6 md:px-10"
    >
      <div className="max-w-[680px] mx-auto text-center flex flex-col items-center gap-8">
        <h2
          className="h-display-bold text-text"
          style={{ fontSize: "clamp(40px, 6vw, 72px)" }}
        >
          Ready?
        </h2>

        <AudioPlayer src={audioSrc} label="One more listen — Sahara demo" />

        <button
          type="button"
          onClick={handleCheckout}
          disabled={isLoading}
          className="btn-primary btn-primary-large disabled:opacity-60 disabled:cursor-wait"
        >
          {isLoading
            ? "Opening checkout..."
            : isFoundingOpen
              ? "Claim your Founding spot — €7/month"
              : "Join Drumzon Pro — €14.95/month"}
          {!isLoading && <ArrowRight />}
        </button>

        <p className="text-text-subtle text-[12px] leading-[1.6]">
          Cancel anytime. No refunds. Listen first, then decide.
        </p>
      </div>
    </section>
  );
}

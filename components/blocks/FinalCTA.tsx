"use client";

import { useState } from "react";
import AudioPlayer from "../AudioPlayer";
import {
  FOUNDING_PRICE_MONTHLY,
  STANDARD_PRICE_MONTHLY,
} from "@/lib/pricing";

// BLOCK 9 — FINAL CTA
// Repeat conversion block on cream. Minimal — just one more chance to
// hear the demo + a definitive CTA.

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
      className="px-6 md:px-10 py-[clamp(64px,9vw,128px)]"
    >
      <div className="max-w-[700px] mx-auto text-center flex flex-col items-center gap-8">
        <h2
          className="h-display text-ink"
          style={{ fontSize: "clamp(56px, 8vw, 96px)" }}
        >
          <span className="serif-em gradient-text">Ready?</span>
        </h2>

        <AudioPlayer src={audioSrc} label="One more listen — Sahara demo" />

        <button
          type="button"
          onClick={handleCheckout}
          disabled={isLoading}
          className="inline-flex items-center justify-center gap-2 h-[56px] px-8 rounded-full bg-orange text-white text-[15px] font-semibold hover:bg-orange-deep hover:-translate-y-0.5 transition-all disabled:opacity-60 disabled:cursor-wait"
          style={{ boxShadow: "0 16px 40px -12px rgba(255,107,53,0.55)" }}
        >
          {isLoading
            ? "Opening checkout..."
            : isFoundingOpen
              ? `Claim your Founding spot — €${FOUNDING_PRICE_MONTHLY}/month`
              : `Join Drumzon Pro — €${STANDARD_PRICE_MONTHLY}/month`}
          {!isLoading && <ArrowRight />}
        </button>

        <p className="text-ash text-[12px] tracking-wide">
          Cancel anytime. No refunds. Listen first, then decide.
        </p>
      </div>
    </section>
  );
}

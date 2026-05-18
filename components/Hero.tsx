"use client";

import { useState } from "react";
import AudioPlayer from "./AudioPlayer";
import {
  FOUNDING_PRICE_MONTHLY,
  STANDARD_PRICE_MONTHLY,
  FOUNDING_MAX_SLOTS,
} from "@/lib/pricing";

// Hormozi-structured Hero on Apple-minimal canvas.
// Mobile-first centered: stacked single column on small screens, opens
// to 2-col on lg+. Hero copy follows "Stop X. Start Y." pattern + risk
// reversal trust line + perceived value anchor.

const ArrowRight = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    aria-hidden
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

export default function Hero({
  isFoundingOpen,
  slotsClaimed,
}: {
  isFoundingOpen: boolean;
  slotsClaimed: number;
}) {
  const audioSrc = process.env.NEXT_PUBLIC_SAHARA_DEMO_URL || undefined;
  const [isLoading, setIsLoading] = useState(false);
  const remaining = Math.max(0, FOUNDING_MAX_SLOTS - slotsClaimed);

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
      if (data.url) window.location.href = data.url;
      else {
        alert(data.error || "Try again or email contact@drumzon.com");
        setIsLoading(false);
      }
    } catch {
      alert("Network error. Email contact@drumzon.com");
      setIsLoading(false);
    }
  };

  const primaryCta = isFoundingOpen
    ? `Claim Founding · €${FOUNDING_PRICE_MONTHLY}/mo for life`
    : `Subscribe · €${STANDARD_PRICE_MONTHLY}/mo for life`;

  return (
    <section
      id="hero"
      className="relative pt-[clamp(96px,12vw,140px)] pb-[clamp(48px,7vw,88px)] px-6 md:px-10"
    >
      <div className="mx-auto max-w-[920px] flex flex-col items-center text-center gap-7 lg:gap-9">
        <h1 className="display-1 text-ink">
          Ship a finished{" "}
          <span className="text-chroma">Afro House</span>{" "}
          track every month. Without scrolling samples for hours.
        </h1>

        <p className="display-subhead mx-auto">
          One curated drop a month. Four construction kits, samples,
          presets, MIDIs.
        </p>

        {/* Cover — sits between subhead and audio on mobile, anchored above CTA */}
        <div className="w-full max-w-[260px] mx-auto my-2">
          <div
            className="relative w-full aspect-[4/5] rounded-[20px] overflow-hidden"
            style={{
              boxShadow:
                "0 24px 50px -16px rgba(26,17,8,0.20), 0 6px 14px -4px rgba(26,17,8,0.10)",
            }}
          >
            <img
              src="/images/sahara-cover.png"
              alt="Drumzon Pro — Sahara, May 31 drop"
              width="1080"
              height="1350"
              className="w-full h-full object-cover block"
            />
          </div>
        </div>

        {/* Audio player */}
        <div className="w-full max-w-[560px] mx-auto">
          <AudioPlayer src={audioSrc} />
        </div>

        {/* CTA stack — primary subscribe, then dual text-links to
            "try free first" and "how it works" */}
        <div className="flex flex-col items-center gap-3 mt-2">
          <button
            type="button"
            onClick={handleCheckout}
            disabled={isLoading}
            className="inline-flex items-center justify-center gap-2 h-[50px] px-7 rounded-full bg-orange text-white text-[14px] font-medium hover:bg-orange-deep transition-colors disabled:opacity-60 disabled:cursor-wait"
          >
            {isLoading ? "Opening checkout…" : primaryCta}
            {!isLoading && <ArrowRight />}
          </button>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[13px]">
            <a
              href="#free-pack"
              className="text-stone hover:text-ink font-medium transition-colors inline-flex items-center gap-1.5"
            >
              Or get The First Drop free <ArrowRight />
            </a>
            <span aria-hidden className="text-ash/40">·</span>
            <a
              href="#how-it-works"
              className="text-stone hover:text-ink font-medium transition-colors inline-flex items-center gap-1.5"
            >
              How it works <ArrowRight />
            </a>
          </div>
        </div>

        {isFoundingOpen && remaining > 0 && (
          <p className="text-ash text-[12px] mt-2">
            {remaining} of {FOUNDING_MAX_SLOTS} Founding spots remaining
          </p>
        )}
      </div>
    </section>
  );
}

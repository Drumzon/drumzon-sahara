"use client";

import { useState } from "react";
import AudioPlayer from "./AudioPlayer";
import {
  FOUNDING_PRICE_MONTHLY,
  STANDARD_PRICE_MONTHLY,
  FOUNDING_MAX_SLOTS,
} from "@/lib/pricing";

// Refined Hero — Apple/Linear restraint. Lighter type weights, no
// decoration around the cover, single primary CTA + small text-only
// secondary. Cover sits cleanly without caption or floating tags.

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
    ? `Claim Founding · €${FOUNDING_PRICE_MONTHLY}/mo`
    : `Subscribe · €${STANDARD_PRICE_MONTHLY}/mo`;

  return (
    <section
      id="hero"
      className="relative pt-[clamp(80px,10vw,128px)] pb-[clamp(48px,6vw,80px)] px-6 md:px-10"
    >
      <div className="mx-auto max-w-[1180px] grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* LEFT — text + audio + CTAs */}
        <div className="lg:col-span-7 flex flex-col gap-8 lg:gap-9 items-start">
          <h1 className="display-1 text-ink">
            The first curated label for{" "}
            <span className="text-chroma">Afro House</span>{" "}
            producers who want the sound, not the search.
          </h1>

          <p className="display-subhead">
            Every month: one drop. Four complete construction kits.
            Drag, drop, you&apos;re inside the track.
          </p>

          <div className="w-full max-w-[560px]">
            <AudioPlayer src={audioSrc} />
          </div>

          <div className="flex flex-wrap items-center gap-5">
            <button
              type="button"
              onClick={handleCheckout}
              disabled={isLoading}
              className="inline-flex items-center justify-center gap-2 h-[46px] px-6 rounded-full bg-orange text-white text-[14px] font-medium hover:bg-orange-deep transition-colors disabled:opacity-60 disabled:cursor-wait"
            >
              {isLoading ? "Opening checkout…" : primaryCta}
              {!isLoading && <ArrowRight />}
            </button>
            <a
              href="#how-it-works"
              className="text-stone hover:text-ink text-[14px] font-medium transition-colors inline-flex items-center gap-1.5"
            >
              How it works <ArrowRight />
            </a>
          </div>

          {isFoundingOpen && remaining > 0 && (
            <p className="text-stone text-[13px]">
              <span className="text-ink font-medium">{remaining}</span> of{" "}
              {FOUNDING_MAX_SLOTS} Founding spots remaining · price locked
              for life.
            </p>
          )}
        </div>

        {/* RIGHT — Sahara cover, no caption, no floating tags */}
        <div className="lg:col-span-5 w-full max-w-[340px] mx-auto lg:mx-0">
          <div
            className="relative w-full aspect-[4/5] rounded-[20px] overflow-hidden"
            style={{
              boxShadow:
                "0 24px 50px -16px rgba(26,17,8,0.18), 0 6px 14px -4px rgba(26,17,8,0.10)",
            }}
          >
            <img
              src="/images/sahara-cover.png"
              alt="Drumzon Pro — Sahara"
              width="1080"
              height="1350"
              className="w-full h-full object-cover block"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

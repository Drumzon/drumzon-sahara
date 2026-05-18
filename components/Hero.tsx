"use client";

import { useState } from "react";
import AudioPlayer from "./AudioPlayer";
import {
  FOUNDING_PRICE_MONTHLY,
  STANDARD_PRICE_MONTHLY,
  FOUNDING_MAX_SLOTS,
} from "@/lib/pricing";

// Apple-refined Hero — no eyebrow, no glass tags, no italic gradient.
// Heavy sans headline + descriptive subhead + audio + dual CTA.
// Cover sits on the right as clean product imagery.

const ArrowRight = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    aria-hidden
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const COVER_SHADOW =
  "0 30px 60px -10px rgba(26,17,8,0.30), 0 8px 16px -4px rgba(26,17,8,0.18)";

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
      className="relative pt-[clamp(96px,12vw,160px)] pb-[clamp(48px,7vw,96px)] px-6 md:px-10"
    >
      <div className="mx-auto max-w-[1180px] grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* LEFT — text + audio + CTAs */}
        <div className="lg:col-span-7 flex flex-col gap-7 lg:gap-8 items-start">
          <h1 className="display-1 text-ink">
            The first curated label for Afro House
            producers who want the sound, not the search.
          </h1>

          <p className="display-subhead max-w-[44ch]">
            Every month: one drop. Four complete construction kits.
            Drag, drop, you&apos;re inside the track.
          </p>

          <div className="w-full max-w-[560px]">
            <AudioPlayer src={audioSrc} />
          </div>

          <div className="flex flex-wrap gap-3 items-center">
            <button
              type="button"
              onClick={handleCheckout}
              disabled={isLoading}
              className="inline-flex items-center justify-center gap-2 h-[48px] px-6 rounded-full bg-orange text-white text-[15px] font-semibold hover:bg-orange-deep transition-colors disabled:opacity-60 disabled:cursor-wait"
              style={{ boxShadow: "0 6px 20px -8px rgba(255,107,53,0.5)" }}
            >
              {isLoading ? "Opening checkout…" : primaryCta}
              {!isLoading && <ArrowRight />}
            </button>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-1.5 h-[48px] px-2 text-ink text-[15px] font-medium hover:text-orange-deep transition-colors"
            >
              How it works <ArrowRight />
            </a>
          </div>

          {isFoundingOpen && remaining > 0 && (
            <p className="text-stone text-[14px]">
              <span className="text-ink font-medium">{remaining}</span> of{" "}
              {FOUNDING_MAX_SLOTS} Founding spots remaining. €
              {FOUNDING_PRICE_MONTHLY}/month locked for life.
            </p>
          )}
        </div>

        {/* RIGHT — Sahara cover */}
        <div className="lg:col-span-5 w-full max-w-[360px] mx-auto lg:mx-0">
          <div
            className="cover-2 relative w-full aspect-[4/5] rounded-[22px] overflow-hidden"
            style={{ boxShadow: COVER_SHADOW }}
          >
            <img
              src="/images/sahara-cover.png"
              alt="Drumzon Pro — Sahara, May 31 drop"
              width="1080"
              height="1350"
              className="w-full h-full object-cover block"
            />
          </div>
          <p className="mt-5 text-center lg:text-left text-stone text-[13px]">
            <span className="text-ink font-medium">Sahara</span> · DRZ-001 ·
            Available May 31
          </p>
        </div>
      </div>
    </section>
  );
}

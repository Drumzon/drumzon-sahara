"use client";

import { useState } from "react";
import AudioPlayer from "./AudioPlayer";
import {
  FOUNDING_PRICE_MONTHLY,
  STANDARD_PRICE_MONTHLY,
  FOUNDING_MAX_SLOTS,
} from "@/lib/pricing";

// v16 Hero — product-centric headline (Apple/Decap style: state the product,
// don't promise outcomes). Two-col layout on desktop: text-left | cover+audio
// right. Stacks linear on mobile. Spacing tightened.

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
      className="relative pt-[120px] sm:pt-[clamp(96px,10vw,130px)] pb-[clamp(28px,5vw,56px)] px-6 md:px-10"
    >
      <div className="mx-auto max-w-[1180px]">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* LEFT — copy + CTA. Centered on mobile, left-aligned on lg+ */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left gap-6 lg:gap-7">
            <h1 className="text-ink font-semibold tracking-[-0.028em] leading-[1.1] text-[clamp(30px,3.8vw,52px)] text-balance">
              A curated <span className="text-chroma">Afro House</span> drop.{" "}
              <br className="hidden lg:block" />
              Every month.{" "}
              <br className="hidden lg:block" />
              In your DAW.
            </h1>

            <p className="display-subhead text-balance">
              Four construction kits, samples, presets, MIDIs.{" "}
              <br className="hidden lg:block" />
              Curated by Drumzon. Yours to keep.
            </p>

            <div className="flex flex-col items-center lg:items-start gap-3 mt-1">
              <button
                type="button"
                onClick={handleCheckout}
                disabled={isLoading}
                className="inline-flex items-center justify-center gap-2 h-[50px] px-7 rounded-full bg-orange text-white text-[14px] font-medium hover:bg-orange-deep transition-colors disabled:opacity-60 disabled:cursor-wait"
              >
                {isLoading ? "Opening checkout…" : primaryCta}
                {!isLoading && <ArrowRight />}
              </button>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-2 text-[13px]">
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
              <p className="text-ash text-[12px] mt-1">
                {remaining} of {FOUNDING_MAX_SLOTS} Founding spots remaining
              </p>
            )}
          </div>

          {/* RIGHT — cover + audio. Stacked on mobile (below copy), side
              column on lg+ */}
          <div className="lg:col-span-5 flex flex-col items-center gap-5 lg:gap-6 w-full">
            <div className="w-full max-w-[240px]">
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

            <div className="w-full max-w-[400px]">
              <AudioPlayer src={audioSrc} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import AudioPreview from "./AudioPreview";
import type { Currency } from "@/lib/currency";
import { formatPrice } from "@/lib/currency";
import { getCurrentDrop, getDropBuyUrl } from "@/lib/drops";
import { getDropPrice } from "@/lib/pricing";
import HeroCountdown from "./HeroCountdown";

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
  "0 30px 60px -10px rgba(26,17,8,0.30), 0 8px 16px -4px rgba(26,17,8,0.18), inset 0 0 0 1px rgba(255,107,53,0.10)";

export default function Hero({ currency }: { currency: Currency }) {
  const drop = getCurrentDrop();
  const price = getDropPrice(drop);
  const buyUrl = getDropBuyUrl(drop, currency);

  const currentPriceFmt = formatPrice(price.amount, currency);
  const nextPriceFmt =
    price.nextTierAmount !== null
      ? formatPrice(price.nextTierAmount, currency)
      : null;

  return (
    <section
      id="hero"
      className="relative pt-[clamp(80px,9vw,128px)] pb-[clamp(28px,3.5vw,48px)] px-6 md:px-10"
    >
      <div className="mx-auto max-w-[1100px] grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* LEFT — text content */}
        <div className="lg:col-span-7 flex flex-col gap-5 items-center text-center">
          <p className="fade-up text-ash text-[11px] font-semibold tracking-[0.22em] uppercase">
            {drop.monthLabel} drop · Afro House
          </p>

          <h1
            className="fade-up h-display"
            style={{ fontSize: "clamp(36px, 5vw, 72px)", lineHeight: 0.9 }}
          >
            <span className="serif-em gradient-text">{drop.name}</span>
            <span className="text-ink">.</span>
          </h1>

          <p
            className="fade-up-1 h-display text-ink"
            style={{
              fontSize: "clamp(15px, 1.6vw, 21px)",
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
              maxWidth: "22ch",
            }}
          >
            {drop.tagline}
          </p>

          <p className="fade-up-2 lede">
            {drop.contents.oneShots +
              drop.contents.drumLoops +
              drop.contents.melodyLoops +
              drop.contents.bassLoops +
              drop.contents.pads}
            + studio-grade sounds. Stems on every drum loop, MIDI on every
            melody.{" "}
            <span className="text-ink font-medium">
              Engineered to sit in the mix
            </span>{" "}
            without six plugins on top.
          </p>

          <div className="fade-up-2 w-full mt-1">
            <AudioPreview />
          </div>

          {/* Price ladder — current tier emphasized, next tier as anchor */}
          <div className="fade-up-3 flex flex-wrap items-center justify-center gap-3 text-[13px] mt-1">
            <span className="italic-fix font-serif italic text-orange-deep text-[18px]">
              {price.label}: {currentPriceFmt}
            </span>
            {nextPriceFmt && (
              <>
                <span className="text-ash" aria-hidden>
                  →
                </span>
                <span className="text-ash">
                  Then {nextPriceFmt} · Vault later
                </span>
              </>
            )}
          </div>

          {/* Live countdown chip — only during early-bird */}
          {price.inEarlyBird && price.msUntilNextTier !== null && (
            <HeroCountdown msUntilNextTier={price.msUntilNextTier} />
          )}

          {/* Primary CTA — single drop purchase */}
          <div className="fade-up-3 flex flex-wrap gap-2 mt-2 justify-center">
            <a
              href={buyUrl}
              className="inline-flex items-center justify-center gap-2 h-[48px] px-7 rounded-full bg-orange text-white text-[14px] font-medium hover:bg-orange-deep hover:-translate-y-0.5 transition-all"
              style={{
                boxShadow: "0 10px 28px -10px rgba(255,107,53,0.55)",
              }}
            >
              Get the {drop.monthLabel} drop — {currentPriceFmt}
              <ArrowRight />
            </a>
            <a
              href="#free-midi-pack"
              className="inline-flex items-center justify-center h-[48px] px-6 rounded-full text-ink text-[14px] font-medium border border-black/15 backdrop-blur-md hover:border-orange hover:text-orange-deep transition-colors"
              style={{ background: "rgba(26,26,26,0.04)" }}
            >
              Try the free MIDIs
            </a>
          </div>

          {/* Trust line */}
          <div className="fade-up-3 mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] text-ash uppercase tracking-[0.14em] font-semibold justify-center">
            <span className="inline-flex items-center gap-1.5">
              <span aria-hidden>✓</span> Pay once · yours forever
            </span>
            <span aria-hidden className="text-ash/40">·</span>
            <span className="inline-flex items-center gap-1.5">
              <span aria-hidden>✓</span> Stems + MIDI on every loop
            </span>
            <span aria-hidden className="text-ash/40">·</span>
            <span className="inline-flex items-center gap-1.5">
              <span aria-hidden>✓</span> Royalty-free
            </span>
          </div>
        </div>

        {/* RIGHT — cover with floating glass tags */}
        <div className="lg:col-span-5 relative w-full max-w-[300px] aspect-[4/5] mx-auto lg:mx-0">
          <div
            className="cover-2 relative w-full h-full rounded-[20px] overflow-hidden"
            style={{ boxShadow: COVER_SHADOW }}
          >
            <img
              src={drop.cover}
              alt={`${drop.fullTitle} — album cover`}
              width="1080"
              height="1350"
              className="w-full h-full object-cover block"
            />
          </div>

          {/* Floating glass tag — BPM */}
          <div
            className="hidden lg:flex absolute items-center gap-2.5 px-4 py-3 rounded-[20px] z-10"
            style={{
              top: "8%",
              left: "-22%",
              background: "rgba(250,247,242,0.85)",
              backdropFilter: "blur(30px) saturate(180%)",
              border: "1px solid rgba(26,26,26,0.10)",
              boxShadow: "0 20px 40px -10px rgba(26,17,8,0.18)",
            }}
          >
            <span
              className="w-2 h-2 rounded-full bg-orange"
              style={{ boxShadow: "0 0 12px rgba(255,107,53,1)" }}
              aria-hidden
            />
            <div className="text-left">
              <strong className="block text-[13px] font-semibold text-ink">
                {drop.bpmRange[0]}–{drop.bpmRange[1]} BPM
              </strong>
              <em className="block text-[11px] not-italic text-stone uppercase tracking-[0.08em] mt-0.5">
                Afro House
              </em>
            </div>
          </div>

          {/* Floating glass tag — sounds */}
          <div
            className="hidden lg:flex absolute items-center gap-2.5 px-4 py-3 rounded-[20px] z-10"
            style={{
              bottom: "12%",
              right: "-18%",
              background: "rgba(250,247,242,0.85)",
              backdropFilter: "blur(30px) saturate(180%)",
              border: "1px solid rgba(26,26,26,0.10)",
              boxShadow: "0 20px 40px -10px rgba(26,17,8,0.18)",
            }}
          >
            <span
              className="w-2 h-2 rounded-full bg-emerald"
              style={{ boxShadow: "0 0 12px rgba(45,132,102,1)" }}
              aria-hidden
            />
            <div className="text-left">
              <strong className="block text-[13px] font-semibold text-ink">
                {drop.contents.oneShots +
                  drop.contents.drumLoops +
                  drop.contents.melodyLoops +
                  drop.contents.bassLoops +
                  drop.contents.pads}
                + sounds
              </strong>
              <em className="block text-[11px] not-italic text-stone uppercase tracking-[0.08em] mt-0.5">
                Stems + MIDI
              </em>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

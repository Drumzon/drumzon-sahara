import type { Currency } from "@/lib/currency";
import { formatPrice } from "@/lib/currency";
import { getCurrentDrop, getDropBuyUrl } from "@/lib/drops";
import { getDropPrice, type PriceTier } from "@/lib/pricing";
import DropCountdown from "./DropCountdown";

// Visual price-ladder timeline for the current drop. Shows all 5 tiers,
// highlights the current one, anchors the next price increase, and
// surfaces the "going to vault on Xd" copy.
//
// This section sits between Marquee and WhatsIncluded — Hero is the
// elevator pitch, CurrentDrop is the spec-sheet deep dive that justifies
// the price.

const TIER_DATA: { key: PriceTier; label: string; sub: string; amount: number }[] = [
  { key: "early-bird",  label: "Early bird", sub: "First 7 days",   amount: 27 },
  { key: "regular",     label: "Drop price", sub: "Days 7 — 30",    amount: 37 },
  { key: "vault-2mo",   label: "Vault",      sub: "After 30 days",  amount: 50 },
  { key: "vault-6mo",   label: "Vault",      sub: "After 60 days",  amount: 70 },
  { key: "vault-12mo",  label: "Vault",      sub: "After 6 months", amount: 90 },
];

export default function CurrentDrop({ currency }: { currency: Currency }) {
  const drop = getCurrentDrop();
  const price = getDropPrice(drop);
  const buyUrl = getDropBuyUrl(drop, currency);
  const c = drop.contents;
  const totalSounds = c.oneShots + c.drumLoops + c.melodyLoops + c.bassLoops + c.pads;

  // Format "going to vault on" date copy
  const vaultDate = (() => {
    if (!price.nextTierDate) return null;
    const d = new Date(price.nextTierDate);
    return d.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  })();

  const nextPriceFmt =
    price.nextTierAmount !== null
      ? formatPrice(price.nextTierAmount, currency)
      : null;

  return (
    <section
      id="current-drop"
      className="px-6 md:px-10 py-[clamp(56px,7vw,104px)]"
    >
      <div className="mx-auto max-w-[1100px]">
        {/* Section header */}
        <div className="flex flex-col items-center text-center gap-3 mb-12 lg:mb-16 max-w-[720px] mx-auto">
          <p className="text-ash text-[11px] font-semibold tracking-[0.22em] uppercase">
            {drop.monthLabel} · Available now
          </p>
          <h2
            className="h-display text-ink"
            style={{ fontSize: "clamp(30px, 4.4vw, 56px)" }}
          >
            This month:{" "}
            <span className="serif-em gradient-text">{drop.name}</span>.
          </h2>
          <p className="lede mx-auto">{drop.description}</p>
        </div>

        {/* Spec sheet — BPM / keys / counts */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12 max-w-[860px] mx-auto">
          <SpecCard
            value={`${drop.bpmRange[0]}–${drop.bpmRange[1]}`}
            label="BPM range"
          />
          <SpecCard value={`${totalSounds}+`} label="Total sounds" />
          <SpecCard value={drop.keys.length.toString()} label="Keys covered" />
          <SpecCard value="24-bit" label="WAV quality" />
        </div>

        {/* Price ladder timeline */}
        <div className="max-w-[920px] mx-auto">
          <p className="text-center text-[11px] text-ash uppercase tracking-[0.16em] font-semibold mb-5">
            Price ladder — the longer you wait, the more it costs
          </p>
          <ol className="grid grid-cols-5 gap-1 sm:gap-2">
            {TIER_DATA.map((t) => {
              const isCurrent = t.key === price.tier;
              const isPast =
                TIER_DATA.findIndex((x) => x.key === price.tier) >
                TIER_DATA.findIndex((x) => x.key === t.key);
              return (
                <li
                  key={t.key}
                  className={`flex flex-col items-center gap-1.5 p-3 sm:p-4 rounded-2xl border transition-all ${
                    isCurrent
                      ? "bg-orange/8 border-orange/40 -translate-y-0.5"
                      : isPast
                        ? "bg-black/[0.02] border-black/[0.06] opacity-50"
                        : "bg-black/[0.02] border-black/[0.08]"
                  }`}
                  aria-current={isCurrent ? "true" : undefined}
                >
                  <span
                    className={`font-serif italic-fix italic ${
                      isCurrent ? "text-orange-deep" : "text-ink/70"
                    }`}
                    style={{ fontSize: "clamp(18px, 2.2vw, 26px)" }}
                  >
                    {formatPrice(t.amount, currency)}
                  </span>
                  <span
                    className={`text-[9px] sm:text-[10px] uppercase tracking-[0.1em] font-semibold text-center leading-tight ${
                      isCurrent ? "text-orange-deep" : "text-ash"
                    }`}
                  >
                    {t.label}
                  </span>
                  <span className="text-[9px] text-stone/70 text-center leading-tight hidden sm:block">
                    {t.sub}
                  </span>
                </li>
              );
            })}
          </ol>

          {/* "Going to vault on Xd" callout — only when in early-bird/regular */}
          {!price.inVault && vaultDate && nextPriceFmt && (
            <div className="mt-8 flex flex-col items-center gap-4">
              {price.msUntilNextTier !== null && (
                <DropCountdown
                  msUntilNextTier={price.msUntilNextTier}
                  prefix={
                    price.inEarlyBird
                      ? `Early bird ends in`
                      : `Going to Vault in`
                  }
                  suffix={
                    price.inEarlyBird
                      ? `· then ${nextPriceFmt}`
                      : `· then ${nextPriceFmt}`
                  }
                />
              )}
              <p className="text-[12px] text-stone text-center max-w-[480px]">
                After <span className="text-ink font-medium">{vaultDate}</span>,{" "}
                {drop.name} goes to the Vault at{" "}
                <span className="text-ink font-medium">{nextPriceFmt}</span> and
                keeps climbing. Never coming back down.
              </p>
              <a
                href={buyUrl}
                className="inline-flex items-center justify-center h-[46px] px-6 rounded-full bg-orange text-white text-[13px] font-medium hover:bg-orange-deep hover:-translate-y-0.5 transition-all"
                style={{ boxShadow: "0 12px 32px -10px rgba(255,107,53,0.55)" }}
              >
                Lock in {formatPrice(price.amount, currency)} now →
              </a>
            </div>
          )}

          {price.inVault && (
            <p className="mt-8 text-center text-[12px] text-stone max-w-[480px] mx-auto">
              {drop.name} is now in the Vault at{" "}
              <span className="text-ink font-medium">
                {formatPrice(price.amount, currency)}
              </span>
              . Early-bird buyers locked it in at $27.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

function SpecCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center p-5 rounded-2xl bg-black/[0.02] border border-black/[0.08]">
      <strong
        className="block font-serif text-orange-deep leading-none tracking-tight"
        style={{ fontSize: "clamp(20px, 2.2vw, 26px)" }}
      >
        {value}
      </strong>
      <span className="block mt-2 text-[10px] text-ash uppercase tracking-[0.14em] font-semibold">
        {label}
      </span>
    </div>
  );
}

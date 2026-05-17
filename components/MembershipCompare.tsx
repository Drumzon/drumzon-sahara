import type { Currency } from "@/lib/currency";
import { formatPrice } from "@/lib/currency";
import { getInnerCirclePrice } from "@/lib/pricing";

// Side-by-side comparison: single-purchase buyer vs Inner Circle member.
// Visual contrast makes the value of exclusive content (presets, MIDIs)
// concrete instead of just listed.

type Row = {
  feature: string;
  single: string | boolean;
  inner: string | boolean;
  emphasis?: boolean;
};

export default function MembershipCompare({
  currency,
}: {
  currency: Currency;
}) {
  const icPrice = getInnerCirclePrice(currency);
  const icPriceFmt = formatPrice(icPrice, currency);

  const ROWS: Row[] = [
    {
      feature: "This month's drop",
      single: `${formatPrice(27, currency)} early bird / ${formatPrice(37, currency)} after 7 days`,
      inner: "Included every month",
    },
    {
      feature: "Past drops (Vault)",
      single: `${formatPrice(50, currency)} – ${formatPrice(90, currency)} each`,
      inner: "Subscriber price preserved",
    },
    {
      feature: "Exclusive Serum presets",
      single: false,
      inner: "10–15 per month",
      emphasis: true,
    },
    {
      feature: "Exclusive MIDI pack",
      single: false,
      inner: "5–8 per month",
      emphasis: true,
    },
    {
      feature: "Demo track template (Ableton)",
      single: false,
      inner: "Project file + stems",
      emphasis: true,
    },
    {
      feature: "Early access (24h before public)",
      single: false,
      inner: true,
    },
    {
      feature: "Keep packs if you cancel",
      single: true,
      inner: true,
    },
  ];

  return (
    <div className="max-w-[940px] mx-auto rounded-[28px] overflow-hidden border border-black/[0.1] bg-cream-base/40">
      {/* Header row */}
      <div className="grid grid-cols-[1.4fr_1fr_1fr] sm:grid-cols-[1.6fr_1fr_1fr]">
        <div className="p-5 sm:p-6 bg-black/[0.02]">
          <p className="text-[10px] text-ash uppercase tracking-[0.16em] font-semibold">
            Compare
          </p>
        </div>
        <div className="p-5 sm:p-6 bg-black/[0.02] border-l border-black/[0.08] text-center">
          <p className="text-[10px] text-ash uppercase tracking-[0.14em] font-semibold mb-1">
            Single purchase
          </p>
          <p className="font-serif text-ink text-[15px]">
            Pay per drop
          </p>
        </div>
        <div
          className="p-5 sm:p-6 text-center border-l border-black/[0.08] relative"
          style={{
            background: "linear-gradient(180deg, rgba(255,107,53,0.10) 0%, rgba(255,107,53,0.04) 100%)",
          }}
        >
          <p className="text-[10px] text-orange-deep uppercase tracking-[0.14em] font-semibold mb-1">
            Inner Circle
          </p>
          <p className="font-serif text-orange-deep text-[15px]">
            {icPriceFmt}/month
          </p>
        </div>
      </div>

      {/* Body rows */}
      {ROWS.map((row, i) => (
        <div
          key={row.feature}
          className={`grid grid-cols-[1.4fr_1fr_1fr] sm:grid-cols-[1.6fr_1fr_1fr] border-t border-black/[0.08] ${
            row.emphasis ? "bg-orange/[0.03]" : ""
          }`}
        >
          <div className="p-4 sm:p-5 text-[13px] text-ink font-medium">
            {row.feature}
            {row.emphasis && (
              <span className="ml-2 text-[9px] text-orange-deep uppercase tracking-[0.14em] font-semibold">
                · Members only
              </span>
            )}
          </div>
          <div className="p-4 sm:p-5 border-l border-black/[0.08] text-center text-[12px] text-stone">
            {row.single === false ? (
              <span className="text-ash/60" aria-label="Not included">
                —
              </span>
            ) : row.single === true ? (
              <span className="text-emerald font-semibold" aria-hidden>
                ✓
              </span>
            ) : (
              <>{row.single}</>
            )}
          </div>
          <div
            className={`p-4 sm:p-5 border-l border-black/[0.08] text-center text-[12px] ${
              row.emphasis
                ? "text-orange-deep font-semibold"
                : "text-ink"
            }`}
          >
            {row.inner === true ? (
              <span className="text-emerald font-semibold" aria-hidden>
                ✓
              </span>
            ) : row.inner === false ? (
              <span className="text-ash/60" aria-label="Not included">
                —
              </span>
            ) : (
              <>{row.inner}</>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

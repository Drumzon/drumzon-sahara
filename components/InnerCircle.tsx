import type { Currency } from "@/lib/currency";
import { formatPrice } from "@/lib/currency";
import { getInnerCirclePrice } from "@/lib/pricing";
import { INNER_CIRCLE_BENEFITS, getInnerCircleBuyUrl } from "@/lib/membership";
import MembershipCompare from "./MembershipCompare";

// Pitched on VALUE (exclusive presets + MIDIs members-only), not discount.
// Sub price is HIGHER than single-purchase early-bird ($34 vs $27) —
// that's deliberate. The discount isn't the hook; the exclusives are.

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

export default function InnerCircle({ currency }: { currency: Currency }) {
  const icPrice = getInnerCirclePrice(currency);
  const icUrl = getInnerCircleBuyUrl();
  const icPriceFmt = formatPrice(icPrice, currency);

  return (
    <section
      id="inner-circle"
      className="px-6 md:px-10 py-[clamp(56px,7vw,104px)] relative"
    >
      <div className="mx-auto max-w-[1100px]">
        {/* Section header */}
        <div className="flex flex-col items-center text-center gap-4 mb-12 lg:mb-16 max-w-[760px] mx-auto">
          <p className="text-ash text-[11px] font-semibold tracking-[0.22em] uppercase">
            Membership · {icPriceFmt}/month
          </p>
          <h2
            className="h-display text-ink"
            style={{ fontSize: "clamp(30px, 4.4vw, 56px)" }}
          >
            The{" "}
            <span className="serif-em gradient-text">Inner Circle</span>.
          </h2>
          <p className="lede mx-auto">
            Every drop, plus exclusive Serum presets, MIDIs, and the full
            Ableton project of the demo beat. None of it sold separately.
            Built for producers shipping a track a week.
          </p>
        </div>

        {/* Benefits grid */}
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-12 max-w-[940px] mx-auto">
          {INNER_CIRCLE_BENEFITS.map((b) => (
            <li
              key={b.title}
              className="p-6 rounded-[20px] bg-black/[0.02] border border-black/[0.08] hover:bg-black/[0.04] hover:border-orange/30 hover:-translate-y-0.5 transition-all"
            >
              <h4 className="text-ink text-[15px] font-semibold leading-snug mb-2 flex items-center gap-2">
                <span className="text-orange" aria-hidden>◈</span>
                {b.title}
              </h4>
              <p className="text-stone text-[13px] leading-[1.55]">
                {b.description}
              </p>
            </li>
          ))}
        </ul>

        {/* Compare table */}
        <MembershipCompare currency={currency} />

        {/* Primary CTA */}
        <div className="mt-12 flex flex-col items-center gap-3">
          <a
            href={icUrl}
            className="inline-flex items-center justify-center gap-2 h-[52px] px-7 rounded-full bg-ink text-cream-base text-[14px] font-medium hover:bg-graphite hover:-translate-y-0.5 transition-all"
            style={{
              boxShadow: "0 14px 40px -12px rgba(26,17,8,0.4)",
            }}
          >
            Join Inner Circle — {icPriceFmt}/month
            <ArrowRight />
          </a>
          <p className="text-[11px] text-ash uppercase tracking-[0.14em] font-semibold flex items-center gap-3">
            <span>Cancel anytime</span>
            <span aria-hidden className="text-ash/40">·</span>
            <span>Keep every pack you've downloaded</span>
          </p>
        </div>
      </div>
    </section>
  );
}

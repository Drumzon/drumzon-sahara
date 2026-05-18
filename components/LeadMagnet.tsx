// Grand Slam lead magnet section — Decap "Drums That Knock" lesson
// applied: the FREE pack is built to the same quality as the paid
// product. Not a teaser, not a watermarked clip — a full complete
// construction kit the producer can ship a track with.
//
// Per Hormozi $100M Leads: lead magnets must be valuable enough that
// you could charge for them. This one is anchored at €40 standalone
// value, given free in exchange for an email.
//
// Form captures via Kit (ConvertKit) → incentive email autoresponder
// delivers download link → subscriber lands in nurture sequence for
// later subscription upsell.

import { LEAD_MAGNET } from "@/lib/bonuses";

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

const Check = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="shrink-0 mt-0.5 text-orange"
    aria-hidden
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default function LeadMagnet() {
  const formAction = process.env.NEXT_PUBLIC_KIT_FORM_ACTION || "";

  return (
    <section
      id="free-pack"
      className="px-6 md:px-10 py-[clamp(56px,8vw,110px)]"
    >
      <div className="mx-auto max-w-[760px] text-center">
        <h2 className="display-2 text-ink mx-auto">
          <span className="text-chroma">The First Drop.</span>{" "}
          Free.
        </h2>
        <p className="display-subhead mx-auto mt-5">
          A full construction kit. Same studio quality as the monthly drops.
        </p>

        {/* The free pack card — anchors at €40 → FREE for visual impact */}
        <div
          className="mt-10 mx-auto max-w-[620px] p-7 sm:p-8 rounded-[20px] text-left"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,107,53,0.08) 0%, rgba(255,140,66,0.04) 100%)",
            border: "1px solid rgba(255,107,53,0.22)",
          }}
        >
          <div className="flex items-baseline justify-between gap-4 mb-4">
            <h3 className="text-ink text-[20px] font-semibold tracking-[-0.018em]">
              {LEAD_MAGNET.name}
            </h3>
            <span className="shrink-0 text-stone text-[14px] font-mono tabular-nums">
              <span className="line-through opacity-50">
                €{LEAD_MAGNET.perceived_value}
              </span>
              <span className="ml-2 text-orange-deep font-semibold">
                FREE
              </span>
            </span>
          </div>

          <ul className="flex flex-col gap-2.5 mb-6">
            {LEAD_MAGNET.inclusions.map((line) => (
              <li
                key={line}
                className="flex items-start gap-2.5 text-ink text-[14px] leading-[1.5]"
              >
                <Check />
                <span>{line}</span>
              </li>
            ))}
          </ul>

          <form
            action={formAction}
            method="POST"
            className="flex flex-col sm:flex-row gap-2"
          >
            <input
              type="email"
              name="email_address"
              required
              autoComplete="email"
              placeholder="your@email.com"
              aria-label="Email address"
              className="flex-1 min-w-0 h-[48px] px-5 rounded-full bg-white text-ink placeholder:text-ash text-[14px] focus:outline-none transition-colors"
              style={{
                border: "1px solid rgba(0,0,0,0.12)",
                boxShadow: "inset 0 1px 2px rgba(0,0,0,0.03)",
              }}
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 h-[48px] px-6 rounded-full bg-orange text-white text-[14px] font-medium hover:bg-orange-deep transition-colors whitespace-nowrap"
            >
              Send The First Drop
              <ArrowRight />
            </button>
          </form>

          <p className="text-ash text-[12px] mt-4 leading-[1.5]">
            Instant download. Unsubscribe in one click. Yours to keep.
          </p>
        </div>
      </div>
    </section>
  );
}

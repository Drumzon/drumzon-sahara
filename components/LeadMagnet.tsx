// Hormozi $100M Leads — lead magnet section. Free Quick-Start Pack
// captured via Kit (ConvertKit) form. Sits between value-build sections
// and pricing as a "low-friction alternative path" for prospects not
// ready to subscribe yet. The free pack is the same Quick-Start Pack
// included as a bonus for paying members — but here it's standalone
// free in exchange for an email.
//
// $100M Leads core principle: "Engaged leads are the true output of
// advertising. Make your lead magnet so insanely good people feel
// stupid saying no."

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

export default function LeadMagnet() {
  const formAction = process.env.NEXT_PUBLIC_KIT_FORM_ACTION || "";

  return (
    <section
      id="free-pack"
      className="px-6 md:px-10 py-[clamp(56px,8vw,110px)]"
    >
      <div className="mx-auto max-w-[760px] text-center">
        <p className="text-orange-deep text-[11px] font-semibold tracking-[0.22em] uppercase mb-3">
          Not ready to subscribe?
        </p>
        <h2 className="display-2 text-ink mx-auto">
          Get a real{" "}
          <span className="text-chroma">taste</span> first. Free.
        </h2>
        <p className="display-subhead mx-auto mt-5">
          {LEAD_MAGNET.description}
        </p>

        {/* The free pack card — visual anchor */}
        <div
          className="mt-10 mx-auto max-w-[560px] p-7 sm:p-8 rounded-[20px] text-left"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,107,53,0.07) 0%, rgba(255,140,66,0.03) 100%)",
            border: "1px solid rgba(255,107,53,0.20)",
          }}
        >
          <div className="flex items-baseline justify-between gap-4 mb-3">
            <h3 className="text-ink text-[17px] font-semibold tracking-[-0.015em]">
              {LEAD_MAGNET.name}
            </h3>
            <span className="shrink-0 text-stone text-[13px] font-mono tabular-nums">
              <span className="line-through opacity-50">
                €{LEAD_MAGNET.perceived_value}
              </span>
              <span className="ml-2 text-orange-deep font-semibold">
                FREE
              </span>
            </span>
          </div>
          <p className="text-stone text-[14px] leading-[1.6] mb-5">
            {LEAD_MAGNET.tagline}
          </p>

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
              Get the free pack
              <ArrowRight />
            </button>
          </form>

          <p className="text-ash text-[12px] mt-4 leading-[1.5]">
            Instant download. One email after, then nothing unless you ask.
            Unsubscribe in one click.
          </p>
        </div>

        {/* Subtle nudge back to subscription */}
        <p className="text-stone text-[13px] mt-8 max-w-[520px] mx-auto">
          Free pack lives in your archive forever. When you&apos;re ready for
          a full curated drop every month, the membership&apos;s right below.
        </p>
      </div>
    </section>
  );
}

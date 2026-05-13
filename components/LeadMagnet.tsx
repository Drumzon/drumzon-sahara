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

export default function LeadMagnet() {
  const formAction = process.env.NEXT_PUBLIC_KIT_FORM_ACTION || "";

  return (
    <section
      id="lead-magnet"
      className="px-6 md:px-10 py-[clamp(72px,10vw,140px)]"
    >
      <div className="mx-auto max-w-[880px]">
        <div
          className="relative overflow-hidden rounded-[40px] p-[clamp(40px,6vw,72px)] text-center border border-black/[0.10]"
          style={{
            background: "rgba(26,26,26,0.025)",
            backdropFilter: "blur(40px)",
          }}
        >
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at top, rgba(255,107,53,0.12), transparent 60%)",
            }}
          />

          <div className="relative flex flex-col items-center gap-5">
            <span
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-orange-deep text-[12px] font-semibold tracking-[0.06em] uppercase"
              style={{
                background: "rgba(255,107,53,0.08)",
                border: "1px solid rgba(255,107,53,0.2)",
              }}
            >
              <span
                className="pulse-dot w-1.5 h-1.5 rounded-full bg-orange"
                style={{ boxShadow: "0 0 0 4px rgba(255,107,53,0.18)" }}
                aria-hidden
              />
              Sahara Lite · 15 free
            </span>

            <h2
              className="h-display text-ink"
              style={{ fontSize: "clamp(30px, 4.4vw, 56px)" }}
            >
              Try it{" "}
              <span className="serif-em gradient-text">free</span> first.
            </h2>

            <p className="lede mx-auto">
              15 hand-picked samples from the full pack. In your inbox in
              seconds. If they don’t fit your sound, you’ve lost nothing — and
              we’ve never had your address.
            </p>

            <form
              action={formAction}
              method="POST"
              className="flex flex-col sm:flex-row gap-2 max-w-[480px] w-full mx-auto mt-2"
            >
              <input
                type="email"
                name="email_address"
                required
                autoComplete="email"
                placeholder="your@email.com"
                aria-label="Email address"
                className="lead-input flex-1 min-w-0 h-[52px] px-5 rounded-full bg-cream-base border border-black/[0.16] text-ink placeholder:text-ash text-[15px] focus:outline-none focus:border-orange transition-all"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 h-[52px] px-7 rounded-full bg-orange text-white text-[15px] font-medium hover:bg-orange-deep hover:-translate-y-0.5 transition-all whitespace-nowrap"
                style={{
                  boxShadow: "0 12px 36px -10px rgba(255,107,53,0.55)",
                }}
              >
                Send the free pack
                <ArrowRight />
              </button>
            </form>

            <p className="mt-2 text-[12px] text-ash">
              No spam. One-click unsubscribe. We only write when Vol. 2 drops.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

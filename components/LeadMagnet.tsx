// Free MIDI Pack lead magnet — separated from any specific drop.
// Always available, always the same offer. Drives the email funnel.
//
// Kit form action URL → tag new subscribers as `free-midi-pack-lead`
// in Kit (configure that tag on the form's "Settings → Tag subscribers").
// Then run a Kit automation: tag added → email with the MIDI pack download.

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
      id="free-midi-pack"
      className="px-6 md:px-10 py-[clamp(48px,6vw,88px)]"
    >
      <div className="mx-auto max-w-[880px]">
        <div
          className="relative overflow-hidden rounded-[40px] p-[clamp(40px,6vw,72px)] text-center"
          style={{
            background: "var(--color-ink)",
            border: "1px solid rgba(255,255,255,0.06)",
            boxShadow:
              "0 30px 60px -20px rgba(26,17,8,0.35), 0 12px 24px -8px rgba(26,17,8,0.18)",
          }}
        >
          {/* Warm sun glow */}
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at top, rgba(255,107,53,0.30), transparent 55%), radial-gradient(circle at 0% 100%, rgba(196,69,24,0.18), transparent 50%)",
            }}
          />

          <div className="relative flex flex-col items-center gap-5">
            <p className="text-orange/80 text-[11px] font-semibold tracking-[0.22em] uppercase">
              Free download · No card needed
            </p>

            <h2
              className="h-display text-cream-base"
              style={{ fontSize: "clamp(30px, 4.4vw, 56px)" }}
            >
              The{" "}
              <span className="serif-em gradient-text">Afrohouse MIDI</span>{" "}
              starter pack.
            </h2>

            <p
              className="lede mx-auto"
              style={{ color: "var(--color-text-dark)" }}
            >
              8 chord progressions and 5 lead melodies in MIDI format. Tuned
              to the keys producers actually use in Afro House — A minor,
              C minor, G minor. Drop into Ableton, Logic, FL — change the
              instrument, keep the harmony.
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
                className="lead-input flex-1 min-w-0 h-[52px] px-5 rounded-full text-cream-base placeholder:text-stone text-[15px] focus:outline-none focus:border-orange transition-all"
                style={{
                  background: "var(--color-ink-lighter)",
                  border: "1px solid rgba(255,255,255,0.10)",
                }}
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 h-[52px] px-7 rounded-full bg-orange text-white text-[15px] font-medium hover:bg-orange-deep hover:-translate-y-0.5 transition-all whitespace-nowrap"
                style={{
                  boxShadow: "0 12px 36px -10px rgba(255,107,53,0.55)",
                }}
              >
                Send me the MIDIs
                <ArrowRight />
              </button>
            </form>

            <p
              className="mt-2 text-[12px]"
              style={{ color: "var(--color-text-dark)", opacity: 0.7 }}
            >
              One email per drop. Unsubscribe in one click. No spam, ever.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

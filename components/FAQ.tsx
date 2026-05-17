// FAQ — closes the 8 most common objections before they happen.
// Order matters: the highest-friction question goes first.
//
// Plain <details> for native open/close (zero JS, zero a11y issues).

const FAQ_ITEMS = [
  {
    q: "Why a subscription? I prefer to buy individual packs.",
    a: "Both work. Single purchase: pay for one drop, keep it forever. Inner Circle: $34/month, you get every monthly drop included plus exclusive Serum presets and MIDIs that aren't sold separately anywhere. Most producers buying 2–3 packs a year stick with single purchase. Producers shipping a track a week join Inner Circle for the exclusives. Pick what matches your workflow.",
  },
  {
    q: "If I cancel Inner Circle, do I keep the packs I already downloaded?",
    a: "Yes — every pack you've downloaded is yours forever. The subscription is for future drops + the exclusive presets and MIDIs. Cancel the day after you join and you keep everything that hit your account up to that point. No clawback, no DRM, no de-activation.",
  },
  {
    q: "Are these royalty-free? Can I release tracks commercially?",
    a: "Yes. Full commercial license included with every drop — release on Spotify / Beatport / SoundCloud / labels, monetize on YouTube, sync to film. The only thing you can't do is resell or redistribute the raw samples as a sample pack yourself. Full license terms at /license.",
  },
  {
    q: "What software do I need?",
    a: "Drum loops, one-shots, and pads are 24-bit WAV — they work in every DAW. MIDIs are universal — Ableton, FL Studio, Logic, Cubase, Bitwig, Reason, anything that opens a MIDI file. The exclusive Serum presets need Serum 1.3+ (.fxp format). The Inner Circle demo template is an Ableton Live project (.als) — Ableton 11 or higher, Suite recommended for the stock effects. If you don't use Ableton, you still get every other asset; just the demo template won't open for you.",
  },
  {
    q: "How do I download after paying?",
    a: "Instant. Stripe confirms payment, you get an email within seconds with the download link. No login, no waiting period, no shipping. You can also re-download from your purchase email any time. Inner Circle members get a private link in their welcome email that adds each new drop automatically.",
  },
  {
    q: "Refund policy?",
    a: "14 days, no questions asked. Email itsdrumzon@gmail.com with your order ID and we refund within 48h. Digital products have stricter refund rules in the EU than physical goods, but I'd rather refund than have an unhappy producer in the list. (For Inner Circle: cancel anytime, and the unused portion of the month is prorated.)",
  },
  {
    q: "What's the difference between buying a drop and joining Inner Circle?",
    a: "Single drop = the WAV samples + MIDI for melodies, paid once. Inner Circle = same monthly drop + 10–15 Serum presets + 5–8 MIDI chord progressions and leads + the full Ableton project of the demo beat, all exclusive (never sold individually). If you produce in Serum, rely on MIDI ideation, or learn faster by reverse-engineering finished sessions, Inner Circle compounds faster. If you just want raw drums and loops, single drops are cheaper at low frequency.",
  },
  {
    q: "Why one drop a month? Why not weekly or daily?",
    a: "Because shipping a great Afro House pack takes about three weeks. Anything faster is recycling. Anything slower starves the subscribers. One month is the cycle that keeps the quality bar where it needs to be without making you wait.",
  },
];

export default function FAQ() {
  return (
    <section
      id="faq"
      className="px-6 md:px-10 py-[clamp(56px,7vw,104px)]"
    >
      <div className="mx-auto max-w-[860px]">
        <div className="flex flex-col items-center text-center gap-3 mb-12 max-w-[720px] mx-auto">
          <p className="text-ash text-[11px] font-semibold tracking-[0.22em] uppercase">
            Questions
          </p>
          <h2
            className="h-display text-ink"
            style={{ fontSize: "clamp(30px, 4.4vw, 56px)" }}
          >
            The{" "}
            <span className="serif-em gradient-text">honest</span> answers.
          </h2>
        </div>

        <ul className="flex flex-col gap-2">
          {FAQ_ITEMS.map((item, i) => (
            <li
              key={i}
              className="rounded-2xl border border-black/[0.08] bg-black/[0.015] overflow-hidden"
            >
              <details className="group">
                <summary className="cursor-pointer list-none p-5 sm:p-6 flex items-start justify-between gap-4 hover:bg-black/[0.02] transition-colors">
                  <span className="text-ink text-[15px] sm:text-[16px] font-semibold leading-snug">
                    {item.q}
                  </span>
                  <span
                    aria-hidden
                    className="flex-shrink-0 w-6 h-6 grid place-items-center text-orange-deep text-[18px] font-bold transition-transform group-open:rotate-45 select-none"
                  >
                    +
                  </span>
                </summary>
                <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                  <p className="text-stone text-[14px] sm:text-[15px] leading-[1.65]">
                    {item.a}
                  </p>
                </div>
              </details>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-center text-[12px] text-ash">
          Still unsure? Email{" "}
          <a
            href="mailto:itsdrumzon@gmail.com"
            className="text-ink underline decoration-orange/40 hover:decoration-orange transition-colors font-medium"
          >
            itsdrumzon@gmail.com
          </a>{" "}
          — I read every message.
        </p>
      </div>
    </section>
  );
}

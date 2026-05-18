// FAQ — closes the most common objections before they happen.
// Order matters: highest-friction question first.
//
// Plain <details> for native open/close (zero JS, zero a11y issues).

const FAQ_ITEMS = [
  {
    q: "Are these royalty-free? Can I release tracks commercially?",
    a: "Yes. Full commercial license included with every drop — release on Spotify, Apple Music, Beatport, SoundCloud, YouTube, Bandcamp, monetize on streaming, sync to film/TV/games. The only thing you can't do is resell or redistribute the raw samples as a sample pack yourself. Full license terms at /license.",
  },
  {
    q: "What software do I need?",
    a: "Drum loops, one-shots, and pads are 24-bit WAV — they work in every DAW. MIDIs are universal — Ableton, FL Studio, Logic, Cubase, Bitwig, Reason, anything that opens a MIDI file. No special plugins required.",
  },
  {
    q: "How do I download after paying?",
    a: "Instant. Stripe confirms payment and you get an email within seconds with the download link. No login, no waiting period, no shipping. You can re-download from your purchase email any time.",
  },
  {
    q: "Refund policy?",
    a: "14 days, no questions asked. Email itsdrumzon@gmail.com with your order ID and we refund within 48h. Digital products have stricter refund rules in the EU than physical goods, but I'd rather refund than have an unhappy producer in the list.",
  },
  {
    q: "Why one drop a month? Why not weekly or daily?",
    a: "Because shipping a great Afro House pack takes about three weeks of writing, recording, tuning, and A/B testing. Anything faster is recycling. One month is the cycle that keeps the quality bar where it needs to be.",
  },
  {
    q: "Can I buy past drops?",
    a: "Yes — once they leave the current month they go to the Vault at an escalating price ($50 after 30 days, $70 after 60 days, $90 after 6 months). The longer you wait, the more it costs. Early-bird buyers always pay the least.",
  },
  {
    q: "What makes Drumzon different from other afro house packs?",
    a: "One genre, done with depth. Every kick is tuned for the low-end of afro house specifically. Every log drum is hand-shaped, not pitched from a generic sample library. Every pad has the air the genre lives in. No filler, no AI, no recycled Splice loops.",
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

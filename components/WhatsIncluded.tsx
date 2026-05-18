// Literal 6-card grid + 3-stat strip from previous landing.
// Content swapped to "what you get every month" per Drumzon Pro brief.

const ITEMS = [
  {
    title: "4 Complete Construction Kits",
    description:
      "Full track stems, pre-mixed. Same BPM, key-compatible. Drag into your DAW, press play, you're inside a finished track.",
  },
  {
    title: "~80 Individual Samples",
    description:
      "Every kick, perc hit, vocal chop, atmosphere and one-shot from the kits, isolated. BPM/key tagged in filename.",
  },
  {
    title: "~12 Synth Presets",
    description:
      "The exact patches (Serum, Vital, Diva) used in the kits. Plug-and-play. Tweak to taste.",
  },
  {
    title: "~8 MIDI Files",
    description:
      "Melodies, basslines, chord progressions. Build infinite variations on the same bones.",
  },
  {
    title: "Any DAW",
    description:
      "Ableton, FL, Logic, Cubase, Studio One, Bitwig, Reaper, Pro Tools. WAV is universal.",
  },
  {
    title: "Royalty-free forever",
    description:
      "Use in commercial releases. Sell tracks. Sync to anything. Yours to keep — even after cancellation.",
  },
];

export default function WhatsIncluded() {
  return (
    <section
      id="whats-included"
      className="px-6 md:px-10 py-[clamp(48px,6vw,88px)]"
    >
      <div className="mx-auto max-w-[1180px]">
        <div className="flex flex-col items-center text-center gap-4 max-w-[760px] mx-auto mb-14 lg:mb-20">
          <h2
            className="h-display text-ink"
            style={{ fontSize: "clamp(30px, 4.4vw, 56px)" }}
          >
            Every month you&apos;re a member,{" "}
            <span className="serif-em gradient-text">this lands</span>{" "}
            in your DAW.
          </h2>
          <p className="lede mx-auto">
            One curated drop. Construction kits, samples, presets, MIDIs.
            No filler, no AI, no recycled material. Built for producers
            shipping tracks.
          </p>
        </div>

        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {ITEMS.map((item) => (
            <li
              key={item.title}
              className="flex gap-3.5 p-6 rounded-[20px] bg-black/[0.02] border border-black/[0.08] hover:bg-black/[0.04] hover:border-black/[0.16] hover:-translate-y-0.5 transition-all"
            >
              <span
                className="flex-shrink-0 text-emerald font-bold text-[18px] leading-snug"
                aria-hidden
              >
                ✓
              </span>
              <div>
                <h4 className="text-ink text-[15px] font-semibold leading-snug mb-1.5">
                  {item.title}
                </h4>
                <p className="text-stone text-[13px] leading-[1.55]">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <div className="grid grid-cols-1 sm:grid-cols-3 border-y border-black/[0.08] max-w-3xl mx-auto">
          <div className="text-center px-4 py-7 sm:border-r border-black/[0.08]">
            <strong
              className="block font-serif text-orange-deep leading-none tracking-tight"
              style={{ fontSize: "clamp(22px, 2.4vw, 28px)" }}
            >
              24-bit / 44.1 kHz
            </strong>
            <span className="block mt-2 text-[11px] text-ash uppercase tracking-[0.12em] font-medium">
              Studio WAV
            </span>
          </div>
          <div className="text-center px-4 py-7 sm:border-r border-black/[0.08]">
            <strong
              className="block font-serif text-orange-deep leading-none tracking-tight"
              style={{ fontSize: "clamp(22px, 2.4vw, 28px)" }}
            >
              Stems + MIDI
            </strong>
            <span className="block mt-2 text-[11px] text-ash uppercase tracking-[0.12em] font-medium">
              Every kit
            </span>
          </div>
          <div className="text-center px-4 py-7">
            <strong
              className="block font-serif text-orange-deep leading-none tracking-tight"
              style={{ fontSize: "clamp(22px, 2.4vw, 28px)" }}
            >
              Royalty-free
            </strong>
            <span className="block mt-2 text-[11px] text-ash uppercase tracking-[0.12em] font-medium">
              Commercial use
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

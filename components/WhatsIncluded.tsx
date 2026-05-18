// Apple-refined "what's inside" — no eyebrow, clean sans headline,
// 6 minimal feature cards on subtle off-white panels.

const ITEMS = [
  {
    title: "4 Complete Construction Kits",
    description:
      "Full track stems, pre-mixed and key-compatible. Drag into your DAW, press play, you're inside a finished track.",
  },
  {
    title: "~80 Individual Samples",
    description:
      "Every kick, perc, vocal chop, atmosphere and one-shot from the kits — isolated, BPM/key tagged in filename.",
  },
  {
    title: "~12 Synth Presets",
    description:
      "The exact patches used in the kits — Serum, Vital, Diva. Plug-and-play. Tweak to taste.",
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
      "Commercial releases, streaming, sync. Yours to keep — even after cancellation.",
  },
];

export default function WhatsIncluded() {
  return (
    <section
      id="whats-included"
      className="px-6 md:px-10 py-[clamp(56px,8vw,110px)]"
    >
      <div className="mx-auto max-w-[1180px]">
        <div className="max-w-[760px] mb-10 lg:mb-14">
          <h2 className="display-2 text-ink">
            Everything that lands in your DAW, every month.
          </h2>
          <p className="display-subhead mt-5">
            One curated drop. No filler, no AI, no recycled material —
            built for producers shipping tracks.
          </p>
        </div>

        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
          {ITEMS.map((item, i) => (
            <li
              key={item.title}
              className="group p-7 lg:p-8 rounded-[18px] bg-cream-warm/60 hover:bg-white hover:-translate-y-0.5 transition-all duration-200 border border-transparent hover:border-orange/25"
            >
              <div className="flex items-baseline justify-between mb-3">
                <span
                  className="text-ash text-[12px] font-mono tabular-nums"
                  aria-hidden
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className="w-1.5 h-1.5 rounded-full bg-orange/0 group-hover:bg-orange transition-colors"
                  aria-hidden
                />
              </div>
              <h3 className="text-ink text-[18px] font-semibold leading-snug mb-2 tracking-[-0.015em]">
                {item.title}
              </h3>
              <p className="text-stone text-[15px] leading-[1.55]">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

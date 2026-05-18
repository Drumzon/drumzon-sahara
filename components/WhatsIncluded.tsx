// Ultra-clean feature grid. No hover lift, no numbered markers, no
// orange dots. Cards are flat panels in a subtle cream-warm fill.
// All visual interest from typography rhythm + spacing.

const ITEMS = [
  {
    title: "4 Construction kits",
    description:
      "Full track stems, pre-mixed and key-compatible. Drop into your DAW, press play, you're inside a finished track.",
  },
  {
    title: "~80 Samples",
    description:
      "Every kick, perc, vocal chop, atmosphere and one-shot, isolated. BPM and key tagged in the filename.",
  },
  {
    title: "~12 Presets",
    description:
      "The exact Serum, Vital and Diva patches used in the kits. Plug-and-play. Tweak to taste.",
  },
  {
    title: "~8 MIDI files",
    description:
      "Melodies, basslines, chord progressions. Build infinite variations on the same bones.",
  },
  {
    title: "Any DAW",
    description:
      "Ableton, FL, Logic, Cubase, Studio One, Bitwig, Reaper, Pro Tools — WAV is universal.",
  },
  {
    title: "Yours forever",
    description:
      "Royalty-free for commercial use. Cancel anytime and keep every file you've downloaded.",
  },
];

export default function WhatsIncluded() {
  return (
    <section
      id="whats-included"
      className="px-6 md:px-10 py-[clamp(56px,8vw,110px)]"
    >
      <div className="mx-auto max-w-[1180px]">
        <div className="max-w-[640px] mb-12 lg:mb-16">
          <h2 className="display-2 text-ink">
            Everything that lands in your DAW, every month.
          </h2>
          <p className="display-subhead mt-4">
            One curated drop. No filler, no AI, no recycled material.
          </p>
        </div>

        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {ITEMS.map((item) => (
            <li
              key={item.title}
              className="p-7 lg:p-8 rounded-[20px]"
              style={{ background: "var(--color-cream-warm)" }}
            >
              <h3 className="text-ink text-[17px] font-semibold leading-tight mb-2 tracking-[-0.015em]">
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

// BLOCK 3 — WHAT YOU GET EVERY MONTH
// Value stack. Critical for conversion. 2-col grid desktop, stacked mobile.

const ITEMS = [
  {
    icon: "⚡",
    title: "4 COMPLETE CONSTRUCTION KITS",
    body: "Full track stems, pre-mixed. Same BPM, key-compatible. Drag all into your DAW, press play — you're inside a finished track. Mute layers. Swap elements. Make it yours.",
  },
  {
    icon: "🪘",
    title: "~80 INDIVIDUAL SAMPLES",
    body: "Every kick, perc hit, vocal chop, atmosphere and one-shot from the kits, isolated and ready for use across other projects. BPM/key tagged in filename.",
  },
  {
    icon: "🎚️",
    title: "~12 SYNTH PRESETS",
    body: "The exact patches (Serum, Vital, Diva) used in the kits. Plug-and-play. Tweak to taste.",
  },
  {
    icon: "📂",
    title: "~8 MIDI FILES",
    body: "Melodies, basslines, chord progressions. Build infinite variations on the same bones.",
  },
  {
    icon: "🌍",
    title: "ANY DAW",
    body: "Ableton, FL Studio, Logic, Cubase, Studio One, Bitwig, Reaper, Pro Tools. WAV is universal.",
  },
  {
    icon: "🔄",
    title: "ROYALTY-FREE FOREVER",
    body: "Use in commercial releases. Sell tracks. Sync to anything. What you download is yours to keep, even after cancellation.",
  },
];

export default function WhatYouGet() {
  return (
    <section
      id="whats-included"
      className="section-pad px-6 md:px-10"
    >
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-14 lg:mb-20">
          <p className="eyebrow">Membership</p>
          <h2
            className="h-display-bold text-text mt-3 max-w-[20ch] mx-auto"
            style={{ fontSize: "clamp(28px, 4.2vw, 48px)" }}
          >
            Every month you're a member, you receive:
          </h2>
        </div>

        <ul className="grid md:grid-cols-2 gap-4 lg:gap-5">
          {ITEMS.map((item) => (
            <li
              key={item.title}
              className="card-elev p-7 lg:p-8 flex flex-col gap-3"
            >
              <span
                className="text-[32px] leading-none"
                aria-hidden
              >
                {item.icon}
              </span>
              <h3 className="text-text font-bold uppercase tracking-[0.04em] text-[14px]">
                {item.title}
              </h3>
              <p className="text-text-muted text-[14px] leading-[1.65]">
                {item.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

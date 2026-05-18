// BLOCK 3 — WHAT YOU GET EVERY MONTH
// Cream value-stack. 2-col grid desktop, stacked mobile. Each card has a
// minimal number marker (no emoji) + uppercase title + body. Hover lift.

const ITEMS = [
  {
    num: "01",
    title: "4 Complete Construction Kits",
    body: "Full track stems, pre-mixed. Same BPM, key-compatible. Drag all into your DAW, press play — you're inside a finished track. Mute layers, swap elements, make it yours.",
  },
  {
    num: "02",
    title: "~80 Individual Samples",
    body: "Every kick, perc hit, vocal chop, atmosphere and one-shot from the kits, isolated and ready for use across other projects. BPM/key tagged in filename.",
  },
  {
    num: "03",
    title: "~12 Synth Presets",
    body: "The exact patches (Serum, Vital, Diva) used in the kits. Plug-and-play. Tweak to taste.",
  },
  {
    num: "04",
    title: "~8 MIDI Files",
    body: "Melodies, basslines, chord progressions. Build infinite variations on the same bones.",
  },
  {
    num: "05",
    title: "Any DAW",
    body: "Ableton, FL Studio, Logic, Cubase, Studio One, Bitwig, Reaper, Pro Tools. WAV is universal.",
  },
  {
    num: "06",
    title: "Royalty-free forever",
    body: "Use in commercial releases. Sell tracks. Sync to anything. What you download is yours to keep — even after cancellation.",
  },
];

export default function WhatYouGet() {
  return (
    <section
      id="whats-included"
      className="px-6 md:px-10 py-[clamp(64px,9vw,128px)]"
    >
      <div className="mx-auto max-w-[1100px]">
        <div className="flex flex-col items-center text-center gap-4 max-w-[760px] mx-auto mb-14 lg:mb-20">
          <p className="text-ash text-[11px] font-semibold tracking-[0.22em] uppercase">
            Every active month
          </p>
          <h2
            className="h-display text-ink"
            style={{ fontSize: "clamp(32px, 4.6vw, 60px)" }}
          >
            What lands in{" "}
            <span className="serif-em gradient-text">your DAW</span>.
          </h2>
          <p className="lede mx-auto">
            One curated drop per month. Everything you need to write,
            rebuild, or sample your way into a finished track. No filler,
            no AI, no recycled material.
          </p>
        </div>

        <ul className="grid sm:grid-cols-2 gap-4 lg:gap-5">
          {ITEMS.map((item) => (
            <li
              key={item.num}
              className="group p-7 lg:p-8 rounded-[24px] bg-black/[0.02] border border-black/[0.07] hover:bg-black/[0.035] hover:border-black/[0.14] hover:-translate-y-0.5 transition-all flex flex-col gap-3"
            >
              <div className="flex items-baseline justify-between">
                <span
                  className="font-mono text-[12px] text-ash tracking-[0.18em] uppercase"
                  aria-hidden
                >
                  {item.num}
                </span>
                <span
                  className="text-orange-deep opacity-0 group-hover:opacity-100 transition-opacity text-[13px]"
                  aria-hidden
                >
                  ◈
                </span>
              </div>
              <h3
                className="h-display text-ink leading-tight"
                style={{ fontSize: "clamp(20px, 2vw, 26px)" }}
              >
                {item.title}
              </h3>
              <p className="text-stone text-[14px] leading-[1.65]">
                {item.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

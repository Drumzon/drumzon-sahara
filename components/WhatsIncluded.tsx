import { getCurrentDrop } from "@/lib/drops";

// Detailed "what's inside" deep dive — sits after CurrentDrop spotlight.
// Reads contents counts and BPM range from the current drop in lib/drops.ts.

export default function WhatsIncluded() {
  const drop = getCurrentDrop();
  const c = drop.contents;

  const ITEMS = [
    {
      title: `${c.oneShots}+ One-Shots`,
      description:
        "Kicks, snares, claps, hats, perc, FX. Drag and drop. No layering needed.",
    },
    {
      title: `${c.drumLoops} Drum Loops + Stems`,
      description: `${drop.bpmRange[0]}–${drop.bpmRange[1]} BPM. Each loop split into kick · perc · hats · claps. Mute one and rebuild the groove.`,
    },
    {
      title: `${c.melodyLoops} Melody Loops + MIDI`,
      description:
        "Marimba, kalimba, plucks, pads. MIDI on every one — change the key, swap the sound, keep the idea.",
    },
    {
      title: `${c.bassLoops} Bass Loops + MIDI`,
      description:
        "Sub and synth bass. MIDI included so you can match it to your kick instead of fighting it.",
    },
    {
      title: `${c.pads} Atmospheric Pads`,
      description:
        "Long pads and textures. The thing that makes a track sound finished.",
    },
    {
      title: "Stems + MIDI · every loop",
      description:
        "Every drum and melody loop fully unbundled. Total control without the rendering.",
    },
  ];

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
            Six categories.{" "}
            <span className="serif-em gradient-text">Every loop</span>{" "}
            unbundled.
          </h2>
          <p className="lede mx-auto">
            Drums, percs, melodies, bass, pads. Every drum loop split into
            stems. Every melody bounced with MIDI. No filler, no AI, no copy of
            a copy.
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
              Every loop
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

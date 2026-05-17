import { getCurrentDrop } from "@/lib/drops";

// Marquee tags removed: "Owned, not subscribed" (contradicts Inner Circle),
// "Drumzon Vol. 1" (now dynamic via current drop), generic "Mixed by ear".
// Added: Royalty-free, Commercial use, Afro House (genre anchor).
export default function Marquee() {
  const drop = getCurrentDrop();
  const totalSounds =
    drop.contents.oneShots +
    drop.contents.drumLoops +
    drop.contents.melodyLoops +
    drop.contents.bassLoops +
    drop.contents.pads;

  const ITEMS = [
    drop.name,
    drop.monthLabel + " drop",
    `${drop.bpmRange[0]}–${drop.bpmRange[1]} BPM`,
    "Afro House",
    "Stems on every loop",
    "MIDI on every melody",
    `${totalSounds}+ sounds`,
    "Royalty-free",
    "Commercial use",
    "WAV 24-bit",
    "Drag and drop",
  ];

  return (
    <div
      className="marquee overflow-hidden border-y border-black/[0.06] py-5"
      role="presentation"
      aria-hidden
    >
      <div
        className="marquee-track flex gap-14 whitespace-nowrap items-center font-medium text-[14px] tracking-[0.04em] uppercase text-stone"
        style={{ width: "max-content" }}
      >
        {[...ITEMS, ...ITEMS].map((item, i) => (
          <span key={i} className="inline-flex items-center gap-3.5">
            <span className="text-orange/60">◈</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

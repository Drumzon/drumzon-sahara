// Marquee — literal styling from previous landing. Tags adapted to
// subscription model + the "time in the club = library" mechanic.

const ITEMS = [
  "Drumzon Pro",
  "One drop a month",
  "4 construction kits",
  "120–125 BPM",
  "Stems + MIDI",
  "Time in the club = library",
  "Cancel anytime",
  "Royalty-free",
  "Commercial use",
  "WAV 24-bit",
  "Drag and drop",
  "Limited Founding tier",
];

export default function Marquee() {
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

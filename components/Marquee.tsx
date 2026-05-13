const ITEMS = [
  "Sahara",
  "Drumzon Vol. 1",
  "120–125 BPM",
  "Stems on every loop",
  "MIDI on every melody",
  "160+ sounds",
  "Mixed by ear",
  "WAV 24-bit",
  "Drag and drop",
  "Owned, not subscribed",
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

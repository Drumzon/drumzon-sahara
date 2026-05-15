const PREVIEWS = [
  { num: "01", file: "DZ_Kick_Deep_03.wav", meta: "Kick · One-shot", duration: "0:02" },
  { num: "02", file: "DZ_Perc_Conga_Loop_01.wav", meta: "Perc · Loop", duration: "0:04" },
  { num: "03", file: "DZ_TopLoop_Sahara_02.wav", meta: "Top loop · 122 BPM", duration: "0:08" },
  { num: "04", file: "DZ_Melody_Marimba_01.wav", meta: "Melody · MIDI", duration: "0:06" },
  { num: "05", file: "DZ_FullLoop_122BPM_05.wav", meta: "Full · Stems", duration: "0:08" },
  { num: "06", file: "DZ_BassLoop_Sub_03.wav", meta: "Bass · MIDI", duration: "0:04" },
];

export default function Preview() {
  return (
    <section
      id="preview"
      className="px-6 md:px-10 py-[clamp(48px,6vw,88px)] relative"
      style={{
        background: "rgba(245,240,230,0.42)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
      }}
    >
      <div className="mx-auto max-w-[880px]">
        <div className="flex flex-col items-center text-center gap-4 mb-12 lg:mb-16">
          <h2
            className="h-display text-ink"
            style={{ fontSize: "clamp(30px, 4.4vw, 56px)" }}
          >
            Six bites from{" "}
            <span className="serif-em gradient-text">inside</span>.
          </h2>
        </div>

        <ul className="flex flex-col">
          {PREVIEWS.map((p, i) => (
            <li
              key={p.file}
              className={`group grid items-center gap-4 py-5 px-2 cursor-pointer transition-colors hover:bg-black/[0.02] ${
                i === 0 ? "border-t" : ""
              } border-b border-black/[0.08]`}
              style={{ gridTemplateColumns: "32px 44px 1fr auto" }}
              tabIndex={0}
            >
              <span className="font-mono text-[12px] text-ash">{p.num}</span>
              <button
                type="button"
                aria-label={`Play ${p.file}`}
                className="w-11 h-11 rounded-full bg-cream-base border border-black/[0.16] text-orange-deep grid place-items-center text-[12px] transition-all group-hover:bg-orange group-hover:text-white group-hover:border-orange group-hover:scale-105"
              >
                ▶
              </button>
              <div className="min-w-0">
                <div
                  className="font-serif text-ink leading-tight truncate"
                  style={{ fontSize: "clamp(15px, 1.4vw, 19px)" }}
                >
                  {p.file}
                </div>
                <div className="font-mono text-[10px] text-ash uppercase tracking-[0.12em] mt-1.5">
                  {p.meta}
                </div>
              </div>
              <span className="font-mono text-[13px] text-orange-deep font-semibold tabular-nums">
                {p.duration}
              </span>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-center text-[11px] text-ash uppercase tracking-[0.16em] font-semibold">
          06 of 160. The rest opens after checkout.
        </p>

      </div>
    </section>
  );
}

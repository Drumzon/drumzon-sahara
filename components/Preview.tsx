// Refined sample rows. Smaller play buttons. No background fill on
// hover — just opacity transition + subtle bg shift on the row.

const PREVIEWS = [
  { num: "01", file: "Sahara_Kick_Deep_03.wav", meta: "Kick · One-shot", duration: "0:02" },
  { num: "02", file: "Sahara_Perc_Conga_Loop_01.wav", meta: "Perc · Loop", duration: "0:04" },
  { num: "03", file: "Sahara_TopLoop_122_02.wav", meta: "Top loop · 122 BPM", duration: "0:08" },
  { num: "04", file: "Sahara_Melody_Marimba_01.wav", meta: "Melody · MIDI", duration: "0:06" },
  { num: "05", file: "Sahara_FullKit_122_05.wav", meta: "Full kit · Stems", duration: "0:08" },
  { num: "06", file: "Sahara_BassLoop_Sub_03.wav", meta: "Bass · MIDI", duration: "0:04" },
];

export default function Preview() {
  return (
    <section
      id="preview"
      className="px-6 md:px-10 py-[clamp(56px,8vw,110px)]"
    >
      <div className="mx-auto max-w-[840px]">
        <div className="max-w-[560px] mb-10 lg:mb-12">
          <h2 className="display-2 text-ink">
            Six bites from inside{" "}
            <span className="text-chroma">Sahara</span>.
          </h2>
          <p className="display-subhead mt-4">
            A taste of what lands in your DAW within seconds of subscribing.
          </p>
        </div>

        <ul className="flex flex-col">
          {PREVIEWS.map((p, i) => (
            <li
              key={p.file}
              className={`group grid items-center gap-4 py-4 cursor-pointer transition-opacity hover:opacity-100 opacity-90 ${
                i === 0 ? "border-t" : ""
              } border-b border-black/[0.06]`}
              style={{ gridTemplateColumns: "28px 36px 1fr auto" }}
              tabIndex={0}
            >
              <span className="font-mono text-[11px] text-ash tabular-nums">
                {p.num}
              </span>
              <button
                type="button"
                aria-label={`Play ${p.file}`}
                className="w-9 h-9 rounded-full bg-white border border-black/[0.12] text-ink grid place-items-center text-[10px] transition-all group-hover:bg-ink group-hover:text-white group-hover:border-ink"
              >
                ▶
              </button>
              <div className="min-w-0">
                <div className="text-ink text-[15px] font-medium leading-tight truncate tracking-[-0.011em]">
                  {p.file}
                </div>
                <div className="text-stone text-[12px] mt-0.5">
                  {p.meta}
                </div>
              </div>
              <span className="font-mono text-[12px] text-stone tabular-nums">
                {p.duration}
              </span>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-ash text-[13px]">
          6 of 100+. The full kit opens after subscribing.
        </p>
      </div>
    </section>
  );
}

// Apple-refined Preview list — minimal headline, clean sample rows with
// play buttons. No tinted backdrop, no eyebrow.

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
      className="px-6 md:px-10 py-[clamp(80px,12vw,160px)]"
    >
      <div className="mx-auto max-w-[880px]">
        <div className="max-w-[640px] mb-12 lg:mb-14">
          <h2 className="display-2 text-ink">
            Six bites from inside Sahara.
          </h2>
          <p className="display-subhead mt-5">
            A taste of what lands in your DAW within seconds of subscribing.
          </p>
        </div>

        <ul className="flex flex-col">
          {PREVIEWS.map((p, i) => (
            <li
              key={p.file}
              className={`group grid items-center gap-4 py-5 px-2 cursor-pointer transition-colors hover:bg-cream-warm/50 ${
                i === 0 ? "border-t" : ""
              } border-b border-black/[0.08]`}
              style={{ gridTemplateColumns: "32px 44px 1fr auto" }}
              tabIndex={0}
            >
              <span className="font-mono text-[12px] text-ash">{p.num}</span>
              <button
                type="button"
                aria-label={`Play ${p.file}`}
                className="w-11 h-11 rounded-full bg-white border border-black/[0.12] text-ink grid place-items-center text-[12px] transition-all group-hover:bg-orange group-hover:text-white group-hover:border-orange"
              >
                ▶
              </button>
              <div className="min-w-0">
                <div className="text-ink text-[15px] sm:text-[16px] font-medium leading-tight truncate tracking-[-0.011em]">
                  {p.file}
                </div>
                <div className="text-stone text-[12px] mt-1">
                  {p.meta}
                </div>
              </div>
              <span className="font-mono text-[13px] text-stone font-medium tabular-nums">
                {p.duration}
              </span>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-stone text-[14px]">
          6 of 100+. The full kit opens after subscribing.
        </p>
      </div>
    </section>
  );
}

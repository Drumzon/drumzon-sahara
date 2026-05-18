// Hormozi problem section. Open with the prospect's current reality
// (hidden costs of NOT subscribing), then transition into the dream
// outcome. Each bullet is a specific pain, not abstract complaint.

const PAINS = [
  "Three hours tuning kicks before you can write a single bar.",
  "Splice scrolls that turn into entire afternoons lost.",
  "Generic Deep House samples wearing an &ldquo;Afro House&rdquo; label.",
  "Pads with no air. Percs that sit in front of the kick.",
  "Sample packs of 500 sounds where you use four.",
];

export default function Problem() {
  return (
    <section
      id="problem"
      className="px-6 md:px-10 py-[clamp(56px,8vw,110px)]"
    >
      <div className="mx-auto max-w-[760px] text-center">
        <h2 className="display-2 text-ink">
          You don&apos;t need more samples. You need the{" "}
          <span className="text-chroma">right</span> ones.
        </h2>
        <p className="display-subhead mx-auto mt-5">
          Every producer chasing the Afro House sound runs into the same
          friction.
        </p>

        <ul className="mt-10 flex flex-col gap-3 max-w-[560px] mx-auto text-left">
          {PAINS.map((pain, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-stone text-[15px] leading-[1.55]"
            >
              <span className="shrink-0 mt-1 text-orange/60 text-[12px]" aria-hidden>
                ◇
              </span>
              <span dangerouslySetInnerHTML={{ __html: pain }} />
            </li>
          ))}
        </ul>

        <p className="text-ink text-[16px] mt-10 max-w-[520px] mx-auto leading-[1.6]">
          Drumzon Pro removes every one of these. One genre. Done with depth.
          Drag-and-drop kits that already work.
        </p>
      </div>
    </section>
  );
}

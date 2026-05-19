// What's actually inside each monthly drop. 4 cards 2x2 on desktop,
// stacked single-column on mobile. Same card visual language as the
// pricing cards so the page reads as one continuous system.

const CARDS = [
  {
    tag: "4 per drop",
    title: "Construction kits",
    body: "4 complete kits per drop. Stems, arrangement, ready to remix or rebuild.",
  },
  {
    tag: "~80 per drop",
    title: "Samples",
    body: "~80 individual files per drop. Kicks, percs, hats, marimba, vocal chops, texture, foley.",
  },
  {
    tag: "~12 per drop",
    title: "Presets",
    body: "~12 presets for Serum, Vital, Diva, Massive. The exact sounds used in the drop, in your hands.",
  },
  {
    tag: "~8 per drop",
    title: "MIDIs",
    body: "~8 MIDI files per drop. Chord progressions, basslines, melodies. Edit the instrument, keep the groove.",
  },
];

export default function DropContents() {
  return (
    <section
      id="drop-contents"
      className="px-6 md:px-10 py-[clamp(32px,5vw,64px)]"
    >
      <div className="mx-auto max-w-[920px]">
        <div className="text-center mb-10 lg:mb-12">
          <h2 className="display-2 text-ink mx-auto">
            Inside every drop
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-4">
          {CARDS.map((card) => (
            <article
              key={card.title}
              className="p-6 lg:p-7 rounded-[20px] bg-white border border-black/[0.08] flex flex-col gap-2.5"
            >
              <span className="text-orange-deep text-[11px] font-semibold tracking-[0.02em] uppercase">
                {card.tag}
              </span>
              <h3 className="text-ink text-[18px] font-semibold tracking-[-0.018em]">
                {card.title}
              </h3>
              <p className="text-stone text-[14px] sm:text-[15px] leading-[1.55]">
                {card.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

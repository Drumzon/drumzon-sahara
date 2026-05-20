// 5 questions. Each one resolves real friction before subscribe.
// No "still unsure" tail copy.

const FAQ_ITEMS = [
  {
    q: "Are the samples royalty-free?",
    a: "Yes. Use individual samples, presets and MIDIs in your own commercial releases on any platform — Spotify, Apple Music, Beatport, vinyl. No attribution required. Permanent license, even after cancellation. (Releasing a full construction kit as-is requires a separate license — see next question.)",
  },
  {
    q: "Can I release a construction kit as my own track?",
    a: "Not as-is. Construction kits are starting points to build YOUR track from — chop, rearrange, replace elements, add your own production. If you want to release a kit close to as-delivered (with vocals on top, slight rework), email contact@drumzon.com with your release plan. We respond in 24-48h with terms — usually a small flat fee or revenue split. The full license is in the LICENSE.txt inside every pack.",
  },
  {
    q: "Do I need Ableton?",
    a: "No. Every file is WAV. Works in Ableton, FL, Logic, Cubase, Studio One, Bitwig, Reaper, Pro Tools — any DAW that opens WAV.",
  },
  {
    q: "Can I get drops from before I joined?",
    a: "No. Each month's drop is delivered only to members active that month. New members start their library from the month they join.",
  },
  {
    q: "What if I cancel and resubscribe later?",
    a: "You keep everything you downloaded. Founding members who resubscribe within 90 days keep the lifetime €19 price. After 90 days inactive, you'd rejoin at Standard.",
  },
  {
    q: "Why no refunds?",
    a: "Because the full demo is on this page. Listen first. If the sound is what you want, subscribe. If not, don't.",
  },
  {
    q: "What style of Afro House exactly? Is it for commercial radio or underground?",
    a: "Underground European Afro House. Think Keinemusik, Black Coffee, &ME, Adam Port territory. Organic percussion, deep marimba, hypnotic basslines, melodic but never cheesy. If your reference tracks live on labels like Keinemusik, Innervisions, Afterlife, you're in the right place.",
  },
  {
    q: "How do I know the next drops will be as good as Sahara?",
    a: "Because curation is the product. If the monthly drop doesn't hold up, you cancel in one click and keep everything you have. The whole business runs on retention — there is no incentive to ship a weak drop. The founding tier exists exactly to align long-term incentive.",
  },
];

export default function FAQ() {
  return (
    <section
      id="faq"
      className="px-6 md:px-10 py-[clamp(32px,5vw,64px)]"
    >
      <div className="mx-auto max-w-[680px]">
        <div className="text-center mb-8 lg:mb-10">
          <h2 className="display-2 text-ink mx-auto">
            Questions.
          </h2>
        </div>

        <ul className="flex flex-col">
          {FAQ_ITEMS.map((item, i) => (
            <li
              key={i}
              className={`${i === 0 ? "border-t" : ""} border-b border-black/[0.06]`}
            >
              <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary className="cursor-pointer list-none py-5 flex items-start justify-between gap-4 sm:gap-6 hover:opacity-80 transition-opacity">
                  <span className="min-w-0 flex-1 text-ink text-[16px] sm:text-[18px] font-medium leading-snug tracking-[-0.014em]">
                    {item.q}
                  </span>
                  <span
                    aria-hidden
                    className="flex-shrink-0 w-4 h-4 grid place-items-center text-stone text-[16px] transition-transform group-open:rotate-45 select-none mt-0.5"
                  >
                    +
                  </span>
                </summary>
                <div className="pb-5 pr-4 sm:pr-10">
                  <p className="text-stone text-[14px] sm:text-[16px] leading-[1.65]">
                    {item.a}
                  </p>
                </div>
              </details>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

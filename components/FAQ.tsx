// 5 questions. Each one resolves real friction before subscribe.
// No "still unsure" tail copy.

const FAQ_ITEMS = [
  {
    q: "Are the samples royalty-free?",
    a: "Yes. Use in commercial releases on any platform. The license is permanent — what you download is yours, even after cancellation.",
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
];

export default function FAQ() {
  return (
    <section
      id="faq"
      className="px-6 md:px-10 py-[clamp(32px,5vw,64px)]"
    >
      <div className="mx-auto max-w-[680px]">
        <ul className="flex flex-col">
          {FAQ_ITEMS.map((item, i) => (
            <li
              key={i}
              className={`${i === 0 ? "border-t" : ""} border-b border-black/[0.06]`}
            >
              <details className="group">
                <summary className="cursor-pointer list-none py-5 flex items-start justify-between gap-6 hover:opacity-80 transition-opacity">
                  <span className="text-ink text-[17px] sm:text-[18px] font-medium leading-snug tracking-[-0.014em]">
                    {item.q}
                  </span>
                  <span
                    aria-hidden
                    className="flex-shrink-0 w-4 h-4 grid place-items-center text-stone text-[16px] transition-transform group-open:rotate-45 select-none"
                  >
                    +
                  </span>
                </summary>
                <div className="pb-5 pr-10">
                  <p className="text-stone text-[15px] sm:text-[16px] leading-[1.65]">
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

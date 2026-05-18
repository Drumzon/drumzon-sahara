// Apple-refined FAQ — native <details> accordion, no eyebrow, clean
// sans typography, minimal "+" toggle.

const FAQ_ITEMS = [
  {
    q: "Are the samples royalty-free?",
    a: "Yes, 100%. Use in commercial releases, sell tracks, sync to anything. The license is permanent — what you download is yours to keep, even after cancellation.",
  },
  {
    q: "Do I need Ableton?",
    a: "No. Every file is WAV format. Works in Ableton Live, FL Studio, Logic Pro, Cubase, Studio One, Bitwig, Reaper, Pro Tools — any DAW that imports WAV.",
  },
  {
    q: "What if I cancel and resubscribe later?",
    a: "You keep everything you downloaded. If you're a Founding member and resubscribe within 90 days, your lifetime €7/month price is preserved. After 90 days inactive, Founding status expires and you'd rejoin at Standard pricing.",
  },
  {
    q: "Can I get drops from before I joined?",
    a: "No. This is the core rule of Drumzon Pro. Each month's drop is delivered only to members active that month. The members who were there own that drop forever. New members start their library from the month they join.",
  },
  {
    q: "Why no refunds?",
    a: "Because there's a full demo above. You can hear exactly what you're getting before you decide. If the sound is what you want, join. If not, don't. No need for refund policies when you can listen first.",
  },
  {
    q: "How do I download the drops?",
    a: "After subscribing, you receive an email with portal access. Each new drop becomes available on the 1st of the month. Download anytime while you're a member.",
  },
  {
    q: "What if a month's drop is delayed?",
    a: "Drumzon Pro commits to at least one drop per active member month. In rare cases of unavoidable delay, your subscription pauses (no charge) until delivery resumes. You're never charged for content you don't receive.",
  },
  {
    q: "Can I share files with other producers?",
    a: "The license is personal. Files include subtle metadata watermarks. We trust you — but please respect the work.",
  },
];

export default function FAQ() {
  return (
    <section
      id="faq"
      className="px-6 md:px-10 py-[clamp(80px,12vw,160px)]"
    >
      <div className="mx-auto max-w-[880px]">
        <div className="max-w-[680px] mb-12 lg:mb-14">
          <h2 className="display-2 text-ink">
            Frequently asked.
          </h2>
        </div>

        <ul className="flex flex-col">
          {FAQ_ITEMS.map((item, i) => (
            <li
              key={i}
              className={`${i === 0 ? "border-t" : ""} border-b border-black/[0.08]`}
            >
              <details className="group">
                <summary className="cursor-pointer list-none py-6 flex items-start justify-between gap-6 hover:opacity-80 transition-opacity">
                  <span className="text-ink text-[17px] sm:text-[18px] font-medium leading-snug tracking-[-0.015em]">
                    {item.q}
                  </span>
                  <span
                    aria-hidden
                    className="flex-shrink-0 w-5 h-5 grid place-items-center text-stone text-[18px] transition-transform group-open:rotate-45 select-none"
                  >
                    +
                  </span>
                </summary>
                <div className="pb-6 pr-12">
                  <p className="text-stone text-[15px] sm:text-[16px] leading-[1.6]">
                    {item.a}
                  </p>
                </div>
              </details>
            </li>
          ))}
        </ul>

        <p className="mt-12 text-stone text-[14px]">
          Still unsure? Email{" "}
          <a
            href="mailto:contact@drumzon.com"
            className="text-ink underline decoration-stone/30 hover:decoration-ink underline-offset-4"
          >
            contact@drumzon.com
          </a>
          .
        </p>
      </div>
    </section>
  );
}

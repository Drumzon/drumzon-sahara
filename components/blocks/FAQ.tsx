// BLOCK 8 — FAQ
// Native <details> for accordion behavior. Zero JS, zero a11y issues.
// 8 questions per brief, verbatim copy.

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
    a: "The license is personal. The files are tagged with subtle watermarking in metadata. We trust you — but please respect the work.",
  },
];

export default function FAQ() {
  return (
    <section
      id="faq"
      className="section-pad px-6 md:px-10"
    >
      <div className="max-w-[820px] mx-auto">
        <div className="text-center mb-12 lg:mb-16">
          <p className="eyebrow">Questions</p>
          <h2
            className="h-display-bold text-text mt-3"
            style={{ fontSize: "clamp(28px, 4.2vw, 48px)" }}
          >
            What you might be{" "}
            <span className="serif-em" style={{ color: "var(--color-accent)" }}>
              wondering
            </span>
          </h2>
        </div>

        <ul className="flex flex-col gap-2">
          {FAQ_ITEMS.map((item, i) => (
            <li
              key={i}
              className="card-elev overflow-hidden"
            >
              <details className="group">
                <summary className="cursor-pointer list-none p-5 sm:p-6 flex items-start justify-between gap-4 hover:bg-bg-elev-2 transition-colors">
                  <span className="text-text text-[15px] sm:text-[16px] font-semibold leading-snug">
                    {item.q}
                  </span>
                  <span
                    aria-hidden
                    className="shrink-0 w-6 h-6 grid place-items-center text-[18px] font-bold transition-transform group-open:rotate-45 select-none"
                    style={{ color: "var(--color-accent)" }}
                  >
                    +
                  </span>
                </summary>
                <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                  <p className="text-text-muted text-[14px] sm:text-[15px] leading-[1.7]">
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

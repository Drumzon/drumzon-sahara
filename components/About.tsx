// Apple-refined About — clean two-column problem/fix narrative.
// No eyebrow, no philosophy 3-stat strip noise.

export default function About() {
  return (
    <section
      id="about"
      className="px-6 md:px-10 py-[clamp(56px,8vw,110px)]"
    >
      <div className="mx-auto max-w-[1100px]">
        <div className="max-w-[760px] mb-10 lg:mb-14">
          <h2 className="display-2 text-ink">
            One genre. Done with depth.
          </h2>
          <p className="display-subhead mt-5">
            Built by a Barcelona-based producer with 20+ years inside Ableton.
            Drumzon Pro is the first time these sounds leave the hard drive.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <div className="flex flex-col gap-5">
            <h3 className="text-ink text-[20px] font-semibold tracking-[-0.015em]">
              The problem
            </h3>
            <p className="text-stone text-[16px] leading-[1.65]">
              Most Afro House packs are repurposed Deep House or generic
              &quot;world&quot; percussion with a marimba slapped on top. The
              kicks don&apos;t punch through a club system. The pads don&apos;t
              have the air. The percussion sits in front of the kick instead
              of wrapping around it.
            </p>
            <p className="text-stone text-[16px] leading-[1.65]">
              You spend three hours tuning and EQing before you can write a
              single bar.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            <h3 className="text-ink text-[20px] font-semibold tracking-[-0.015em]">
              The fix
            </h3>
            <p className="text-stone text-[16px] leading-[1.65]">
              Drumzon does Afro House. Only Afro House. Every kick is tuned
              for the low-end of the genre. Every log drum is hand-shaped,
              not pitched from a sample library. Every pad has the air of an
              open desert at night because that&apos;s where the genre lives.
            </p>
            <p className="text-stone text-[16px] leading-[1.65]">
              One drop a month. Studio-grade, dancefloor-ready, A/B tested on
              real systems. Made to help you finish tracks faster, not collect
              bigger sample libraries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

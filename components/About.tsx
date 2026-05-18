// Faceless brand pitch — no founder photo, no personal bio.
// Authority comes from technical specificity, not "trust me bro".

export default function About() {
  return (
    <section
      id="about"
      className="px-6 md:px-10 py-[clamp(56px,7vw,104px)]"
    >
      <div className="mx-auto max-w-[860px]">
        <div className="flex flex-col items-center text-center gap-4 mb-12 max-w-[720px] mx-auto">
          <p className="text-ash text-[11px] font-semibold tracking-[0.22em] uppercase">
            Why Drumzon
          </p>
          <h2
            className="h-display text-ink"
            style={{ fontSize: "clamp(30px, 4.4vw, 56px)" }}
          >
            One genre.{" "}
            <span className="serif-em gradient-text">Done right</span>.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-12">
          <div className="flex flex-col gap-4">
            <h3 className="text-ink text-[15px] font-semibold uppercase tracking-[0.14em]">
              The problem
            </h3>
            <p className="text-stone text-[15px] leading-[1.65]">
              Most Afro House packs are repurposed Deep House or generic
              "world" percussion with a marimba slapped on top. The kicks
              don't punch through a club system. The pads don't have the
              air. The percussion sits in front of the kick instead of
              wrapping around it.
            </p>
            <p className="text-stone text-[15px] leading-[1.65]">
              If you've tried building a track from a multi-genre pack,
              you know the feeling — you spend three hours tuning and EQing
              before you can write a single bar.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-ink text-[15px] font-semibold uppercase tracking-[0.14em]">
              The fix
            </h3>
            <p className="text-stone text-[15px] leading-[1.65]">
              Drumzon does Afro House. Only Afro House. Every kick is
              tuned for the low-end of the genre. Every log drum is
              hand-shaped, not pitched from a sample library. Every pad
              has the air of an open desert at night because that's
              where the genre lives sonically.
            </p>
            <p className="text-stone text-[15px] leading-[1.65]">
              One drop a month.{" "}
              <span className="text-ink font-medium">Studio-grade</span>,{" "}
              <span className="text-ink font-medium">dancefloor-ready</span>,
              and{" "}
              <span className="text-ink font-medium">A/B tested</span> on
              real systems before it ships. Made to help you finish tracks
              faster, not collect bigger sample libraries.
            </p>
          </div>
        </div>

        {/* Philosophy strip */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 border-y border-black/[0.08]">
          <div className="text-center px-4 py-7 sm:border-r border-black/[0.08]">
            <strong
              className="block font-serif text-orange-deep leading-none tracking-tight"
              style={{ fontSize: "clamp(20px, 2.2vw, 26px)" }}
            >
              No AI
            </strong>
            <span className="block mt-2 text-[10px] text-ash uppercase tracking-[0.14em] font-semibold">
              Every sound played, recorded, tuned
            </span>
          </div>
          <div className="text-center px-4 py-7 sm:border-r border-black/[0.08]">
            <strong
              className="block font-serif text-orange-deep leading-none tracking-tight"
              style={{ fontSize: "clamp(20px, 2.2vw, 26px)" }}
            >
              No filler
            </strong>
            <span className="block mt-2 text-[10px] text-ash uppercase tracking-[0.14em] font-semibold">
              Cut what doesn't ship tracks
            </span>
          </div>
          <div className="text-center px-4 py-7">
            <strong
              className="block font-serif text-orange-deep leading-none tracking-tight"
              style={{ fontSize: "clamp(20px, 2.2vw, 26px)" }}
            >
              No copy of a copy
            </strong>
            <span className="block mt-2 text-[10px] text-ash uppercase tracking-[0.14em] font-semibold">
              First-source, not Splice-recycled
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

// Centered, tighter About — Hormozi authority pitch: faceless but
// specific. The producer has 20+ years inside Ableton, ships under
// multiple aliases. That's the credibility line.

export default function About() {
  return (
    <section
      id="about"
      className="px-6 md:px-10 py-[clamp(56px,8vw,110px)]"
    >
      <div className="mx-auto max-w-[760px] text-center">
        <h2 className="display-2 text-ink mx-auto">
          One genre. Done with depth.
        </h2>
        <p className="display-subhead mx-auto mt-5">
          Built by a Barcelona-based producer with 20+ years inside Ableton
          and a catalog shipping on Spotify and SoundCloud under multiple
          aliases. Drumzon Pro is the first time these sounds leave the
          hard drive.
        </p>

        <div className="grid sm:grid-cols-2 gap-10 mt-12 text-left max-w-[640px] mx-auto">
          <div className="flex flex-col gap-3">
            <h3 className="text-ink text-[13px] font-semibold uppercase tracking-[0.06em]">
              Why monthly drops
            </h3>
            <p className="text-stone text-[14px] leading-[1.6]">
              A great Afro House pack takes three weeks of writing, recording,
              tuning, and A/B testing. One month is the cycle that holds the
              quality bar.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-ink text-[13px] font-semibold uppercase tracking-[0.06em]">
              Why one genre
            </h3>
            <p className="text-stone text-[14px] leading-[1.6]">
              Every kick tuned for the low-end of Afro House. Every log drum
              hand-shaped. Every pad has the air of an open desert because
              that&apos;s where the genre lives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// BLOCK 7 — ABOUT
// Faceless, no photo, no real name. Single editorial paragraph + closing.

export default function About() {
  return (
    <section
      id="about"
      className="px-6 md:px-10 py-[clamp(56px,8vw,112px)]"
    >
      <div className="max-w-[720px] mx-auto text-center">
        <p className="text-ash text-[11px] font-semibold tracking-[0.22em] uppercase mb-3">
          Why Drumzon
        </p>
        <h2
          className="h-display text-ink mb-8"
          style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
        >
          One genre.{" "}
          <span className="serif-em gradient-text">Done right</span>.
        </h2>

        <p className="lede mx-auto mb-7">
          Drumzon Pro is built by a Barcelona-based producer with 20+
          years inside Ableton and a catalog spanning Spotify and
          SoundCloud under multiple aliases. This is the first time
          these sounds leave the hard drive — curated, deconstructed,
          and delivered monthly for producers chasing the underground
          European-African Afro House sound.
        </p>

        <p className="text-ink text-[15px] leading-[1.7] font-medium">
          No videos. No tutorials. No community to manage.
        </p>
        <p
          className="h-display mt-2"
          style={{ fontSize: "clamp(22px, 2.8vw, 32px)" }}
        >
          Just sounds.{" "}
          <span className="serif-em gradient-text">Every month.</span>{" "}
          Forever (or until you cancel).
        </p>
      </div>
    </section>
  );
}

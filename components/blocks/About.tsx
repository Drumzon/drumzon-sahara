// BLOCK 7 — ABOUT (faceless but authoritative)
// Short. No photo. No real name. Single paragraph + closing lines.

export default function About() {
  return (
    <section
      id="about"
      className="section-pad-tight px-6 md:px-10"
    >
      <div className="max-w-[720px] mx-auto text-center">
        <p className="eyebrow mb-3">About Drumzon</p>
        <h2
          className="h-display-bold text-text mb-8"
          style={{ fontSize: "clamp(26px, 3.6vw, 40px)" }}
        >
          Built by a producer.{" "}
          <span className="serif-em" style={{ color: "var(--color-accent)" }}>
            For producers.
          </span>
        </h2>

        <p className="text-text-muted text-[16px] sm:text-[17px] leading-[1.75] mb-6">
          Drumzon is built by a Barcelona-based producer with 20+ years
          inside Ableton and a catalog spanning Spotify and SoundCloud
          under multiple aliases. Drumzon Pro is the first time these
          sounds leave my hard drive — curated, deconstructed, and
          delivered monthly for producers chasing the underground
          European-African Afro House sound.
        </p>

        <p className="text-text text-[15px] leading-[1.7] font-medium">
          No videos. No tutorials. No community to manage.
        </p>
        <p
          className="h-display mt-2"
          style={{ fontSize: "clamp(22px, 2.6vw, 28px)", color: "var(--color-accent)" }}
        >
          Just sounds. <span className="serif-em">Every month.</span>{" "}
          Forever (or until you cancel).
        </p>
      </div>
    </section>
  );
}

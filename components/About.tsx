// Single paragraph. No problem/fix 2-col, no philosophy strip, no
// 20-year credibility list. State who's behind it. Move on.

export default function About() {
  return (
    <section
      id="about"
      className="px-6 md:px-10 py-[clamp(56px,8vw,110px)]"
    >
      <div className="mx-auto max-w-[640px] text-center">
        <p className="display-subhead mx-auto text-ink">
          Drumzon is built in Barcelona by a producer who&apos;s spent twenty
          years inside Ableton shipping Afro House under multiple aliases.
          Drumzon Pro is the first time these sounds leave the hard drive.
        </p>
      </div>
    </section>
  );
}

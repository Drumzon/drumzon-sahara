// Film grain overlay — fixed full-viewport SVG noise blended over the page.
// Adds analog/tactile texture without darkening or color-shifting content.
// pointer-events:none so it never intercepts clicks. z-index 50 sits above
// content but below the navbar (z-100) and sticky CTA so floating UI stays crisp.
//
// SVG turbulence is generated inline as a data URI — no network request,
// no extra asset. baseFrequency 0.9 = fine 35mm-style grain.
export default function GrainOverlay() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0"
      style={{
        zIndex: 50,
        backgroundImage:
          "url(\"data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='240' height='240'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' seed='3' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0   0 0 0 0.55 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        backgroundSize: "240px 240px",
        backgroundRepeat: "repeat",
        opacity: 0.09,
        mixBlendMode: "overlay",
      }}
    />
  );
}

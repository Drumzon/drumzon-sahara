// Film grain overlay tuned for dark theme. Lower opacity than light theme
// because dark backgrounds amplify noise visibility. mix-blend-mode: soft-light
// adds texture without lifting the deep black.
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
        opacity: 0.06,
        mixBlendMode: "soft-light",
      }}
    />
  );
}

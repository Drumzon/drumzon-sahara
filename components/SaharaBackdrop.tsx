// Refined chromatic backdrop — 3 quiet orbs, low opacity, very slow
// drift. Refinement direction: backdrop is texture, not feature.
// Reference: Linear.app's hero mesh subtle warm-cool layer.
export default function SaharaBackdrop() {
  return (
    <div className="sahara-backdrop" aria-hidden>
      {/* Top-right — main anchor, soft warm orange */}
      <div
        className="sahara-sphere sphere-1"
        style={{
          width: 820,
          height: 820,
          top: "-15%",
          right: "-20%",
          background:
            "radial-gradient(circle at center, rgba(255,107,53,0.18) 0%, rgba(255,107,53,0.05) 40%, transparent 70%)",
          filter: "blur(90px)",
        }}
      />

      {/* Mid-left — soft coral, lower */}
      <div
        className="sahara-sphere sphere-3"
        style={{
          width: 700,
          height: 700,
          top: "35%",
          left: "-22%",
          background:
            "radial-gradient(circle at center, rgba(255,138,79,0.14) 0%, rgba(255,138,79,0.04) 40%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />

      {/* Bottom-center — amber depth */}
      <div
        className="sahara-sphere sphere-2"
        style={{
          width: 560,
          height: 560,
          bottom: "5%",
          right: "20%",
          background:
            "radial-gradient(circle at center, rgba(212,154,63,0.12) 0%, rgba(212,154,63,0.03) 45%, transparent 70%)",
          filter: "blur(110px)",
        }}
      />
    </div>
  );
}

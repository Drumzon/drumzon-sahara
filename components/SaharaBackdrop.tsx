// Symmetric lateral backdrop — two soft warm blurs drifting on opposite
// edges of the viewport. Different sizes + tones + animation timings so
// the eye reads "ambient atmosphere" not "two mirrored circles".
export default function SaharaBackdrop() {
  return (
    <div className="sahara-backdrop" aria-hidden>
      {/* RIGHT — orange dune glow */}
      <div
        className="sahara-sphere sphere-1"
        style={{
          width: 760,
          height: 760,
          top: "18%",
          right: "-22%",
          background:
            "radial-gradient(circle, rgba(255,107,53,0.20) 0%, transparent 65%)",
          filter: "blur(110px)",
        }}
      />

      {/* LEFT — warmer amber/clay tone, slightly smaller, different timing */}
      <div
        className="sahara-sphere sphere-3"
        style={{
          width: 680,
          height: 680,
          top: "42%",
          left: "-20%",
          background:
            "radial-gradient(circle, rgba(196,69,24,0.16) 0%, transparent 65%)",
          filter: "blur(120px)",
        }}
      />

      {/* LEFT-TOP accent — small soft cream-amber to balance the negative space */}
      <div
        className="sahara-sphere sphere-5"
        style={{
          width: 420,
          height: 420,
          top: "5%",
          left: "-10%",
          background:
            "radial-gradient(circle, rgba(212,154,63,0.14) 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />
    </div>
  );
}

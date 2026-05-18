// Modern chromatic backdrop — 4 stacked blurred orbs in a warm sunset
// palette (orange · coral · magenta · amber). Pure CSS, no WebGL/canvas.
// Pattern inspired by Linear.app, Apple Intelligence, Vercel hero backdrops.
//
// Each orb uses radial-gradient + heavy blur + low opacity, then drifts
// on a slow alternating loop so the composition breathes without
// distracting from content. mix-blend-mode kept default so the orbs
// layer additively over the cream base, building warmth not muddiness.
export default function SaharaBackdrop() {
  return (
    <div className="sahara-backdrop" aria-hidden>
      {/* Top-right — punchy orange anchor */}
      <div
        className="sahara-sphere sphere-1"
        style={{
          width: 760,
          height: 760,
          top: "-12%",
          right: "-18%",
          background:
            "radial-gradient(circle at center, rgba(255,107,53,0.32) 0%, rgba(255,107,53,0.10) 35%, transparent 65%)",
          filter: "blur(80px)",
        }}
      />

      {/* Mid-left — coral/magenta sunset hue */}
      <div
        className="sahara-sphere sphere-3"
        style={{
          width: 680,
          height: 680,
          top: "28%",
          left: "-18%",
          background:
            "radial-gradient(circle at center, rgba(255,94,126,0.24) 0%, rgba(255,94,126,0.08) 40%, transparent 65%)",
          filter: "blur(95px)",
        }}
      />

      {/* Bottom-right — golden amber */}
      <div
        className="sahara-sphere sphere-2"
        style={{
          width: 620,
          height: 620,
          bottom: "8%",
          right: "5%",
          background:
            "radial-gradient(circle at center, rgba(212,154,63,0.22) 0%, rgba(212,154,63,0.07) 40%, transparent 65%)",
          filter: "blur(100px)",
        }}
      />

      {/* Center accent — deep clay for depth */}
      <div
        className="sahara-sphere sphere-5"
        style={{
          width: 440,
          height: 440,
          top: "55%",
          left: "42%",
          background:
            "radial-gradient(circle at center, rgba(196,69,24,0.16) 0%, rgba(196,69,24,0.05) 45%, transparent 70%)",
          filter: "blur(90px)",
        }}
      />

      {/* Top-left small accent — soft peach */}
      <div
        className="sahara-sphere sphere-4"
        style={{
          width: 380,
          height: 380,
          top: "6%",
          left: "12%",
          background:
            "radial-gradient(circle at center, rgba(255,180,140,0.18) 0%, rgba(255,180,140,0.05) 45%, transparent 70%)",
          filter: "blur(90px)",
        }}
      />
    </div>
  );
}

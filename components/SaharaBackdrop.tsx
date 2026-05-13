// Fixed cinematic backdrop — 6 blurred orbs anchored to the edges of the
// viewport (corners + sides) for halo bleed, plus an animated sand-noise
// layer drifting horizontally to suggest wind. Pure CSS, GPU-only.
export default function SaharaBackdrop() {
  return (
    <div className="sahara-backdrop" aria-hidden>
      {/* top-left corner — strong orange */}
      <div
        className="sahara-sphere sphere-1"
        style={{
          width: 920,
          height: 920,
          top: "-28%",
          left: "-18%",
          background:
            "radial-gradient(circle, rgba(255,107,53,0.32) 0%, transparent 65%)",
        }}
      />
      {/* top-right corner — clay */}
      <div
        className="sahara-sphere sphere-2"
        style={{
          width: 820,
          height: 820,
          top: "-22%",
          right: "-22%",
          background:
            "radial-gradient(circle, rgba(196,69,24,0.24) 0%, transparent 65%)",
        }}
      />
      {/* mid-right — orange-deep */}
      <div
        className="sahara-sphere sphere-3"
        style={{
          width: 720,
          height: 720,
          top: "38%",
          right: "-25%",
          background:
            "radial-gradient(circle, rgba(229,90,43,0.22) 0%, transparent 70%)",
        }}
      />
      {/* bottom-center — large sand glow */}
      <div
        className="sahara-sphere sphere-4"
        style={{
          width: 1180,
          height: 1180,
          bottom: "-38%",
          left: "12%",
          background:
            "radial-gradient(circle, rgba(232,213,183,0.58) 0%, transparent 70%)",
        }}
      />
      {/* bottom-left corner — orange-soft */}
      <div
        className="sahara-sphere sphere-5"
        style={{
          width: 680,
          height: 680,
          bottom: "-18%",
          left: "-18%",
          background:
            "radial-gradient(circle, rgba(255,200,168,0.32) 0%, transparent 70%)",
        }}
      />
      {/* mid-left — terracotta */}
      <div
        className="sahara-sphere sphere-6"
        style={{
          width: 600,
          height: 600,
          top: "48%",
          left: "-18%",
          background:
            "radial-gradient(circle, rgba(196,69,24,0.18) 0%, transparent 70%)",
        }}
      />
      <div className="sahara-sand" />
    </div>
  );
}

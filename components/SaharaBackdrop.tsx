// Fixed cinematic backdrop — 6 blurred orbs anchored to the edges of the
// viewport (corners + sides) for halo bleed, plus an animated sand-noise
// layer drifting horizontally to suggest wind.
// Palette: earth, amber, clay — grounded Sahara, NO pink/peach pastels.
export default function SaharaBackdrop() {
  return (
    <div className="sahara-backdrop" aria-hidden>
      {/* top-left corner — strong orange (sun) */}
      <div
        className="sahara-sphere sphere-1"
        style={{
          width: 920,
          height: 920,
          top: "-28%",
          left: "-18%",
          background:
            "radial-gradient(circle, rgba(255,107,53,0.34) 0%, transparent 65%)",
        }}
      />
      {/* top-right corner — burnt clay */}
      <div
        className="sahara-sphere sphere-2"
        style={{
          width: 820,
          height: 820,
          top: "-22%",
          right: "-22%",
          background:
            "radial-gradient(circle, rgba(196,69,24,0.28) 0%, transparent 65%)",
        }}
      />
      {/* mid-right — golden amber */}
      <div
        className="sahara-sphere sphere-3"
        style={{
          width: 720,
          height: 720,
          top: "38%",
          right: "-25%",
          background:
            "radial-gradient(circle, rgba(212,154,63,0.30) 0%, transparent 70%)",
        }}
      />
      {/* bottom-center — large amber/sand glow (was peach-soft) */}
      <div
        className="sahara-sphere sphere-4"
        style={{
          width: 1180,
          height: 1180,
          bottom: "-38%",
          left: "12%",
          background:
            "radial-gradient(circle, rgba(184,151,100,0.55) 0%, transparent 70%)",
        }}
      />
      {/* bottom-left corner — burnt sienna earth (was peach pink) */}
      <div
        className="sahara-sphere sphere-5"
        style={{
          width: 680,
          height: 680,
          bottom: "-18%",
          left: "-18%",
          background:
            "radial-gradient(circle, rgba(180,100,50,0.32) 0%, transparent 70%)",
        }}
      />
      {/* mid-left — deep terracotta */}
      <div
        className="sahara-sphere sphere-6"
        style={{
          width: 600,
          height: 600,
          top: "48%",
          left: "-18%",
          background:
            "radial-gradient(circle, rgba(196,69,24,0.20) 0%, transparent 70%)",
        }}
      />
      <div className="sahara-sand" />
    </div>
  );
}

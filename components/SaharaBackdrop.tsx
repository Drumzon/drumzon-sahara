// Dark-theme atmospheric backdrop — drifting warm spheres on near-black.
// Subtle warmth to evoke the Sahara theme without sabotaging contrast.
export default function SaharaBackdrop() {
  return (
    <div
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
      aria-hidden
    >
      {/* RIGHT — desert orange glow */}
      <div
        className="absolute rounded-full"
        style={{
          width: 820,
          height: 820,
          top: "12%",
          right: "-24%",
          background:
            "radial-gradient(circle, rgba(224,122,60,0.16) 0%, transparent 65%)",
          filter: "blur(120px)",
          animation: "sphere-1 42s ease-in-out infinite alternate",
        }}
      />

      {/* LEFT-MID — deep ember */}
      <div
        className="absolute rounded-full"
        style={{
          width: 720,
          height: 720,
          top: "45%",
          left: "-22%",
          background:
            "radial-gradient(circle, rgba(184,93,40,0.14) 0%, transparent 65%)",
          filter: "blur(130px)",
          animation: "sphere-2 56s ease-in-out infinite alternate",
        }}
      />

      {/* TOP-LEFT — small warm accent */}
      <div
        className="absolute rounded-full"
        style={{
          width: 460,
          height: 460,
          top: "4%",
          left: "-12%",
          background:
            "radial-gradient(circle, rgba(224,177,90,0.10) 0%, transparent 70%)",
          filter: "blur(100px)",
          animation: "sphere-3 38s ease-in-out infinite alternate",
        }}
      />

      <style>{`
        @keyframes sphere-1 { 0% { transform: translate3d(0,0,0) scale(1); } 100% { transform: translate3d(120px,80px,0) scale(1.15); } }
        @keyframes sphere-2 { 0% { transform: translate3d(0,0,0) scale(1); } 100% { transform: translate3d(-100px,60px,0) scale(0.92); } }
        @keyframes sphere-3 { 0% { transform: translate3d(0,0,0) scale(1); } 100% { transform: translate3d(80px,-60px,0) scale(1.2); } }
      `}</style>
    </div>
  );
}

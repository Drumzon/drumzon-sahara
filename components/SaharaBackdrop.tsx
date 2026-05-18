// Very subtle backdrop — one quiet warm orb on the right edge of the
// viewport. Refined per Apple-feel: the visual interest comes from
// typography + product imagery, NOT from decorative motion.
export default function SaharaBackdrop() {
  return (
    <div className="sahara-backdrop" aria-hidden>
      <div
        className="sahara-sphere sphere-1"
        style={{
          width: 700,
          height: 700,
          top: "10%",
          right: "-30%",
          background:
            "radial-gradient(circle, rgba(255,107,53,0.08) 0%, transparent 60%)",
          filter: "blur(140px)",
        }}
      />
    </div>
  );
}

// Minimal lateral backdrop — a single soft orange blur on the right edge
// of the viewport. Subtle warm hint without overpowering the white body.
export default function SaharaBackdrop() {
  return (
    <div className="sahara-backdrop" aria-hidden>
      <div
        className="sahara-sphere"
        style={{
          width: 760,
          height: 760,
          top: "20%",
          right: "-22%",
          background:
            "radial-gradient(circle, rgba(255,107,53,0.18) 0%, transparent 65%)",
          filter: "blur(110px)",
          willChange: "transform",
        }}
      />
    </div>
  );
}

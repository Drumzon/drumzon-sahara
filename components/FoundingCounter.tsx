// Live Founding spots counter. Server-rendered value passed in; this is
// purely presentational with a subtle "counter tick" animation when the
// number changes due to revalidation.

export default function FoundingCounter({
  slotsClaimed,
  maxSlots,
  size = "lg",
}: {
  slotsClaimed: number;
  maxSlots: number;
  size?: "sm" | "lg";
}) {
  const remaining = Math.max(0, maxSlots - slotsClaimed);
  const isLow = remaining <= 20;

  if (size === "sm") {
    return (
      <span className="inline-flex items-center gap-2 text-[12px] text-text-muted font-mono uppercase tracking-[0.14em]">
        <span
          className="w-1.5 h-1.5 rounded-full pulse-accent"
          style={{ background: "var(--color-accent)" }}
          aria-hidden
        />
        <span className="tabular-nums text-text">
          {slotsClaimed} / {maxSlots}
        </span>
        <span>spots claimed</span>
      </span>
    );
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <p className="eyebrow flex items-center gap-2">
        <span
          className="w-1.5 h-1.5 rounded-full pulse-accent"
          style={{ background: "var(--color-accent)" }}
          aria-hidden
        />
        Founding spots
      </p>
      <p
        key={slotsClaimed}
        className="counter-tick font-serif text-text leading-none tabular-nums"
        style={{ fontSize: "clamp(40px, 5vw, 56px)" }}
      >
        <span style={{ color: "var(--color-accent)" }}>{slotsClaimed}</span>
        <span className="text-text-subtle"> / {maxSlots}</span>
      </p>
      {isLow && remaining > 0 && (
        <p className="text-[11px] uppercase tracking-[0.18em] font-semibold" style={{ color: "var(--color-accent-bright)" }}>
          Only {remaining} left
        </p>
      )}
    </div>
  );
}

// Live Founding spots counter — cream aesthetic.
// Two variants: `lg` for the pricing card hero treatment, `sm` for top-bar chips.

export default function FoundingCounter({
  slotsClaimed,
  maxSlots,
  size = "lg",
  onLight = false,
}: {
  slotsClaimed: number;
  maxSlots: number;
  size?: "sm" | "lg";
  /** True when rendered on cream/light surfaces (changes muted colors). */
  onLight?: boolean;
}) {
  const remaining = Math.max(0, maxSlots - slotsClaimed);
  const isLow = remaining <= 20;

  const labelColor = onLight ? "text-ash" : "text-text-dark";
  const numColor = onLight ? "text-ink" : "text-cream-base";

  if (size === "sm") {
    return (
      <span className={`inline-flex items-center gap-2 text-[12px] font-mono uppercase tracking-[0.14em] ${labelColor}`}>
        <span
          className="ab-dot w-1.5 h-1.5 rounded-full bg-orange"
          style={{ boxShadow: "0 0 6px rgba(255,107,53,0.8)" }}
          aria-hidden
        />
        <span className={`tabular-nums ${numColor}`}>
          {slotsClaimed} / {maxSlots}
        </span>
        <span>spots claimed</span>
      </span>
    );
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <p className={`text-[11px] font-semibold tracking-[0.22em] uppercase ${labelColor} flex items-center gap-2`}>
        <span
          className="ab-dot w-1.5 h-1.5 rounded-full bg-orange"
          style={{ boxShadow: "0 0 8px rgba(255,107,53,0.9)" }}
          aria-hidden
        />
        Founding spots
      </p>
      <p
        className="h-display leading-none tabular-nums"
        style={{ fontSize: "clamp(44px, 5.5vw, 64px)" }}
      >
        <span className="gradient-text">{slotsClaimed}</span>
        <span className={onLight ? "text-ash/60" : "text-text-dark/60"}> / {maxSlots}</span>
      </p>
      {isLow && remaining > 0 && (
        <p className="text-[11px] uppercase tracking-[0.18em] font-semibold text-orange-deep">
          Only {remaining} left
        </p>
      )}
    </div>
  );
}

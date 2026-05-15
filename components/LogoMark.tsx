// Drumzon wordmark logo — orange pill with "DRUMZON" centered in heavy
// bold sans, cream text. Same typography treatment as "SAHARA" on the
// album cover. Self-contained brand mark — replaces the prior icon+text
// combo. Three sizes for navbar / footer / standalone use.

type Size = "sm" | "md" | "lg";

const SIZES: Record<
  Size,
  { padX: string; padY: string; fontSize: string }
> = {
  sm: { padX: "12px", padY: "6px", fontSize: "13px" },
  md: { padX: "16px", padY: "9px", fontSize: "16px" },
  lg: { padX: "24px", padY: "13px", fontSize: "22px" },
};

export default function LogoMark({ size = "sm" }: { size?: Size }) {
  const { padX, padY, fontSize } = SIZES[size];
  return (
    <span
      className="inline-flex items-center justify-center rounded-full bg-orange text-cream-base font-black uppercase leading-none whitespace-nowrap select-none"
      style={{
        paddingLeft: padX,
        paddingRight: padX,
        paddingTop: padY,
        paddingBottom: padY,
        fontSize,
        letterSpacing: "-0.025em",
      }}
    >
      Drumzon
    </span>
  );
}

// Drumzon wordmark — heavy bold sans uppercase in solid orange.
// Same typography family/weight as "SAHARA" on the album cover, but
// in orange (no pill, no background) so it pops on the warm cream body.
// One coherent type system: cover = bold sans heavy, brand mark = same.

type Size = "sm" | "md" | "lg";

const SIZES: Record<Size, { fontSize: string; tracking: string }> = {
  sm: { fontSize: "18px", tracking: "-0.02em" },
  md: { fontSize: "26px", tracking: "-0.025em" },
  lg: { fontSize: "40px", tracking: "-0.03em" },
};

export default function LogoMark({ size = "sm" }: { size?: Size }) {
  const { fontSize, tracking } = SIZES[size];
  return (
    <span
      className="gradient-text font-sans font-black uppercase leading-none whitespace-nowrap select-none"
      style={{ fontSize, letterSpacing: tracking }}
    >
      Drumzon
    </span>
  );
}

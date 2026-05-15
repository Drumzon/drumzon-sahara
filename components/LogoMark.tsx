// Drumzon wordmark — italic serif "Drumzon" in solid orange. No pill,
// no background, no decoration. Pure typographic logo so it pops naturally
// against the warm cream-sand body. Same visual language as the italic
// gradient accents used throughout the site.

type Size = "sm" | "md" | "lg";

const SIZES: Record<Size, { fontSize: string; tracking: string }> = {
  sm: { fontSize: "22px", tracking: "-0.025em" },
  md: { fontSize: "30px", tracking: "-0.03em" },
  lg: { fontSize: "44px", tracking: "-0.035em" },
};

export default function LogoMark({ size = "sm" }: { size?: Size }) {
  const { fontSize, tracking } = SIZES[size];
  return (
    <span
      className="font-serif italic text-orange leading-none whitespace-nowrap select-none"
      style={{ fontSize, letterSpacing: tracking }}
    >
      Drumzon
    </span>
  );
}

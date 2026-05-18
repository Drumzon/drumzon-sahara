// Drumzon wordmark — restrained, mono-color (per brief: "small, restrained").
// Bold sans uppercase. No gradient. Used in hero top-left + footer.

type Size = "sm" | "md" | "lg";

const SIZES: Record<Size, { fontSize: string; tracking: string }> = {
  sm: { fontSize: "16px", tracking: "0.02em" },
  md: { fontSize: "22px", tracking: "0.015em" },
  lg: { fontSize: "34px", tracking: "0.01em" },
};

export default function LogoMark({
  size = "sm",
  color,
}: {
  size?: Size;
  color?: string;
}) {
  const { fontSize, tracking } = SIZES[size];
  return (
    <span
      className="font-sans font-black uppercase leading-none whitespace-nowrap select-none"
      style={{
        fontSize,
        letterSpacing: tracking,
        color: color || "var(--color-text)",
      }}
    >
      Drumzon
    </span>
  );
}

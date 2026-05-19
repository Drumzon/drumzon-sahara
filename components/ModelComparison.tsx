// Positioning block — frames Drumzon Pro against the two alternatives
// most Afro House producers already know: scattered free packs and
// mega bundles. The Drumzon Pro column is visually highlighted with
// an orange-tinted border + subtle background so the eye lands there
// even on a quick scan.

import { FOUNDING_MAX_SLOTS } from "@/lib/pricing";

const Check = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="shrink-0 mt-[3px] text-orange"
    aria-hidden
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const Dash = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    className="shrink-0 mt-[3px] text-ash"
    aria-hidden
  >
    <line x1="6" y1="12" x2="18" y2="12" />
  </svg>
);

type Column = {
  title: string;
  subtitle?: string;
  items: string[];
  highlighted?: boolean;
};

export default function ModelComparison({
  slotsClaimed,
  isFoundingOpen,
}: {
  slotsClaimed?: number;
  isFoundingOpen?: boolean;
}) {
  const remaining =
    typeof slotsClaimed === "number"
      ? Math.max(0, FOUNDING_MAX_SLOTS - slotsClaimed)
      : null;

  const columns: Column[] = [
    {
      title: "Free packs",
      items: [
        '"Free" but generic',
        "Same sounds everyone uses",
        "Hours of YouTube searches",
        "License often unclear",
        "Quality varies wildly",
      ],
    },
    {
      title: "Mega bundles",
      subtitle: "50 GB packs",
      items: [
        "Pay €80–150 once",
        "80% of files unusable",
        "No curation, just volume",
        "Outdated within 6 months",
        "Sound library bloat",
      ],
    },
    {
      title: "Drumzon Pro",
      items: [
        "€19/mo founding, locked for life",
        "Curated for Afro House specifically",
        "New drop every month, always fresh",
        "Royalty-free commercial use",
        "Cancel anytime, keep everything",
      ],
      highlighted: true,
    },
  ];

  return (
    <section
      id="model-comparison"
      className="px-6 md:px-10 py-[clamp(32px,5vw,64px)]"
    >
      <div className="mx-auto max-w-[1080px]">
        <div className="text-center mb-10 lg:mb-12 max-w-[760px] mx-auto">
          <h2 className="display-2 text-ink mx-auto">
            Three ways to source Afro House sounds.{" "}
            <span className="text-chroma">Only one keeps you producing.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 lg:gap-4">
          {columns.map((col) => {
            const Icon = col.highlighted ? Check : Dash;
            return (
              <article
                key={col.title}
                className={`relative p-6 lg:p-8 rounded-[20px] flex flex-col gap-5 bg-white border ${
                  col.highlighted
                    ? "border-orange/40 shadow-[0_8px_24px_-12px_rgba(255,107,53,0.20)]"
                    : "border-black/[0.08]"
                }`}
                style={
                  col.highlighted
                    ? {
                        background:
                          "linear-gradient(180deg, rgba(255,107,53,0.04) 0%, rgba(255,255,255,1) 60%)",
                      }
                    : undefined
                }
              >
                {col.highlighted &&
                  isFoundingOpen &&
                  remaining !== null &&
                  remaining > 0 && (
                    <span
                      className="absolute top-5 right-5 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-medium text-orange-deep"
                      style={{ background: "rgba(255,107,53,0.10)" }}
                    >
                      {remaining} of {FOUNDING_MAX_SLOTS} left
                    </span>
                  )}

                <header className="flex flex-col gap-1">
                  <h3
                    className={`text-[18px] font-semibold tracking-[-0.018em] ${
                      col.highlighted ? "text-ink" : "text-ink"
                    }`}
                  >
                    {col.title}
                  </h3>
                  {col.subtitle && (
                    <p className="text-stone text-[13px]">{col.subtitle}</p>
                  )}
                </header>

                <ul className="flex flex-col gap-2.5">
                  {col.items.map((item) => (
                    <li
                      key={item}
                      className={`flex items-start gap-2.5 text-[14px] leading-[1.5] ${
                        col.highlighted ? "text-ink" : "text-stone"
                      }`}
                    >
                      <Icon />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

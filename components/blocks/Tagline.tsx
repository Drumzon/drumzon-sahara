// BLOCK 2 — THE PROMISE (renamed Promise → Tagline to avoid shadowing
// the JS built-in). Brief editorial transition. Three lines, breathing.

export default function Tagline() {
  return (
    <section className="px-6 md:px-10 py-[clamp(48px,7vw,96px)]">
      <div className="max-w-[820px] mx-auto text-center flex flex-col gap-4">
        <p
          className="h-display text-stone"
          style={{ fontSize: "clamp(24px, 2.8vw, 36px)" }}
        >
          This isn&apos;t a sample pack subscription.
        </p>
        <p
          className="h-display text-ink"
          style={{ fontSize: "clamp(26px, 3.2vw, 42px)" }}
        >
          This is a curated{" "}
          <span className="serif-em gradient-text">label drop</span>,
          every month.
        </p>
        <p
          className="h-display text-stone"
          style={{ fontSize: "clamp(20px, 2.4vw, 28px)" }}
        >
          Built by a 20-year producer. Made for the next wave.
        </p>
      </div>
    </section>
  );
}

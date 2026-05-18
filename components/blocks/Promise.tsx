// BLOCK 2 — THE PROMISE
// Brief transition. Three short lines max. No card, no decoration.

export default function Promise() {
  return (
    <section className="section-pad-tight px-6 md:px-10">
      <div className="max-w-[760px] mx-auto text-center flex flex-col gap-3">
        <p
          className="h-display text-text"
          style={{ fontSize: "clamp(22px, 2.6vw, 32px)" }}
        >
          This isn't a sample pack subscription.
        </p>
        <p
          className="h-display text-text"
          style={{ fontSize: "clamp(22px, 2.6vw, 32px)" }}
        >
          This is a curated{" "}
          <span className="serif-em" style={{ color: "var(--color-accent)" }}>
            label drop
          </span>
          , every month.
        </p>
        <p
          className="h-display text-text-muted"
          style={{ fontSize: "clamp(22px, 2.6vw, 32px)" }}
        >
          Built by a 20-year producer. Made for the next wave.
        </p>
      </div>
    </section>
  );
}

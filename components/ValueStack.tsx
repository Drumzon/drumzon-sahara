// What's in the drop + the bonuses. No anchoring, no math, no
// "Solves:" rationale, no "€X value" labels. Apple-style: show the
// product, let it sell itself.

import { BONUS_STACK } from "@/lib/bonuses";

export default function ValueStack() {
  return (
    <section
      id="whats-included"
      className="px-6 md:px-10 py-[clamp(56px,8vw,110px)]"
    >
      <div className="mx-auto max-w-[860px] text-center">
        <h2 className="display-2 text-ink mx-auto">
          What lands in your DAW every month.
        </h2>

        {/* THE MONTHLY DROP */}
        <div className="mt-12 mx-auto max-w-[640px]">
          <div
            className="rounded-[20px] p-7 sm:p-8 text-left"
            style={{ background: "var(--color-cream-warm)" }}
          >
            <h3 className="text-ink text-[18px] font-semibold tracking-[-0.015em] mb-5">
              The monthly drop
            </h3>
            <ul className="flex flex-col gap-2.5 text-stone text-[15px] leading-[1.55]">
              <li>4 complete construction kits, stems pre-mixed</li>
              <li>~80 individual samples, BPM and key tagged</li>
              <li>~12 Serum, Vital and Diva presets</li>
              <li>~8 MIDI files — melodies, basslines, chord progressions</li>
            </ul>
          </div>
        </div>

        {/* PLUS THE BONUSES — no values, no "solves" — just names + descriptions */}
        <div className="mt-6 mx-auto max-w-[640px]">
          <div
            className="rounded-[20px] p-7 sm:p-8 text-left bg-white"
            style={{ border: "1px solid rgba(0,0,0,0.08)" }}
          >
            <h3 className="text-ink text-[18px] font-semibold tracking-[-0.015em] mb-5">
              Plus, every member gets
            </h3>
            <ul className="flex flex-col gap-4">
              {BONUS_STACK.map((b) => (
                <li key={b.name} className="flex flex-col gap-1">
                  <span className="text-ink text-[15px] font-medium tracking-[-0.012em]">
                    {b.name}
                  </span>
                  <span className="text-stone text-[14px] leading-[1.55]">
                    {b.what}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

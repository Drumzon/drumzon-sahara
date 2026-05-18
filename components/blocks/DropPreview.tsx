import Image from "next/image";
import AudioPlayer from "../AudioPlayer";

// BLOCK 6 — THE DROP PREVIEW
// Sahara cover + second audio player + expiration urgency text.

export default function DropPreview() {
  const audioSrc = process.env.NEXT_PUBLIC_SAHARA_DEMO_URL || undefined;

  return (
    <section
      id="drop-preview"
      className="section-pad px-6 md:px-10"
    >
      <div className="max-w-[860px] mx-auto text-center">
        <p className="eyebrow mb-3">May 31 drop</p>
        <h2
          className="h-display-bold text-text mb-10 lg:mb-12"
          style={{ fontSize: "clamp(28px, 4.2vw, 48px)" }}
        >
          Listen to{" "}
          <span className="serif-em" style={{ color: "var(--color-accent)" }}>
            Sahara
          </span>
        </h2>

        {/* Cover art — anchors the drop visually before the audio. Portrait
            4:5 ratio, modest max-width so it doesn't dominate. */}
        <div
          className="mx-auto mb-10 relative aspect-[4/5] w-full max-w-[280px] rounded-xl overflow-hidden"
          style={{
            border: "1px solid var(--color-border)",
            boxShadow:
              "0 30px 60px -15px rgba(224,122,60,0.18), 0 12px 24px -8px rgba(0,0,0,0.5)",
          }}
        >
          <Image
            src="/images/sahara-cover.png"
            alt="Sahara — Drumzon Pro Month 1 drop cover art"
            fill
            sizes="(max-width: 768px) 80vw, 280px"
            className="object-cover"
            priority={false}
          />
        </div>

        <AudioPlayer
          src={audioSrc}
          label="Sahara — full construction kit assembled"
        />

        <p className="text-text-muted text-[16px] leading-[1.65] max-w-[58ch] mx-auto mt-10">
          This is what you'll have in your DAW within 60 seconds of joining.
          The complete kit. Stems, samples, presets, MIDIs. The track above —
          broken down for you to rebuild, modify, sample, or learn from.
        </p>

        {/* Urgency callout */}
        <div
          className="mt-10 inline-block max-w-[60ch] text-left p-5 sm:p-6 rounded-lg"
          style={{
            background: "rgba(224,122,60,0.06)",
            border: "1px solid rgba(224,122,60,0.22)",
          }}
        >
          <p className="text-text text-[14px] sm:text-[15px] leading-[1.7] flex items-start gap-3">
            <span
              className="shrink-0 mt-0.5"
              style={{ color: "var(--color-accent)" }}
              aria-hidden
            >
              ⚠
            </span>
            <span>
              <span className="font-semibold">
                Sahara releases May 31.
              </span>{" "}
              Available only to members who join during May or June 2026.
              After June 30, Sahara leaves the catalog permanently. Members
              joining later will never have access.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import AudioPlayer from "../AudioPlayer";

// BLOCK 6 — THE DROP PREVIEW
// Cover art with floating glass tags (BPM, kit count), then second audio
// player + expiration urgency. Magazine-quality treatment.

const COVER_SHADOW =
  "0 30px 60px -10px rgba(26,17,8,0.30), 0 8px 16px -4px rgba(26,17,8,0.18), inset 0 0 0 1px rgba(255,107,53,0.10)";

export default function DropPreview() {
  const audioSrc = process.env.NEXT_PUBLIC_SAHARA_DEMO_URL || undefined;

  return (
    <section
      id="drop-preview"
      className="px-6 md:px-10 py-[clamp(64px,9vw,128px)]"
    >
      <div className="max-w-[1000px] mx-auto">
        <div className="text-center max-w-[680px] mx-auto mb-12 lg:mb-16">
          <p className="text-ash text-[11px] font-semibold tracking-[0.22em] uppercase mb-3">
            May 31 drop
          </p>
          <h2
            className="h-display text-ink"
            style={{ fontSize: "clamp(32px, 4.6vw, 60px)" }}
          >
            Listen to{" "}
            <span className="serif-em gradient-text">Sahara</span>.
          </h2>
        </div>

        {/* Cover + glass tags (2-col on desktop) */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-14 lg:mb-16">
          {/* Cover */}
          <div className="relative w-full max-w-[320px] aspect-[4/5] mx-auto">
            <div
              className="cover-2 relative w-full h-full rounded-[20px] overflow-hidden"
              style={{ boxShadow: COVER_SHADOW }}
            >
              <Image
                src="/images/sahara-cover.png"
                alt="Sahara — Drumzon Pro Month 1 drop cover"
                fill
                sizes="(max-width: 1024px) 80vw, 320px"
                className="object-cover"
                priority={false}
              />
            </div>

            {/* Glass tag — BPM */}
            <div
              className="hidden lg:flex absolute items-center gap-2.5 px-4 py-3 rounded-[20px] z-10"
              style={{
                top: "8%",
                left: "-18%",
                background: "rgba(250,247,242,0.85)",
                backdropFilter: "blur(30px) saturate(180%)",
                WebkitBackdropFilter: "blur(30px) saturate(180%)",
                border: "1px solid rgba(26,26,26,0.10)",
                boxShadow: "0 20px 40px -10px rgba(26,17,8,0.18)",
              }}
            >
              <span
                className="w-2 h-2 rounded-full bg-orange"
                style={{ boxShadow: "0 0 12px rgba(255,107,53,1)" }}
                aria-hidden
              />
              <div className="text-left">
                <strong className="block text-[13px] font-semibold text-ink">
                  120–125 BPM
                </strong>
                <em className="block text-[11px] not-italic text-stone uppercase tracking-[0.08em] mt-0.5">
                  Afro House
                </em>
              </div>
            </div>

            {/* Glass tag — kits */}
            <div
              className="hidden lg:flex absolute items-center gap-2.5 px-4 py-3 rounded-[20px] z-10"
              style={{
                bottom: "10%",
                right: "-14%",
                background: "rgba(250,247,242,0.85)",
                backdropFilter: "blur(30px) saturate(180%)",
                WebkitBackdropFilter: "blur(30px) saturate(180%)",
                border: "1px solid rgba(26,26,26,0.10)",
                boxShadow: "0 20px 40px -10px rgba(26,17,8,0.18)",
              }}
            >
              <span
                className="w-2 h-2 rounded-full bg-emerald"
                style={{ boxShadow: "0 0 12px rgba(45,132,102,1)" }}
                aria-hidden
              />
              <div className="text-left">
                <strong className="block text-[13px] font-semibold text-ink">
                  4 kits
                </strong>
                <em className="block text-[11px] not-italic text-stone uppercase tracking-[0.08em] mt-0.5">
                  Stems + MIDI
                </em>
              </div>
            </div>
          </div>

          {/* Audio + caption (right column) */}
          <div className="flex flex-col gap-6">
            <AudioPlayer
              src={audioSrc}
              label="Sahara — full construction kit assembled"
            />
            <p className="lede text-center lg:text-left">
              This is what you&apos;ll have in your DAW within 60 seconds of
              joining. Stems, samples, presets, MIDIs. Broken down for you to
              rebuild, modify, sample, or learn from.
            </p>
          </div>
        </div>

        {/* Urgency callout */}
        <div
          className="max-w-[680px] mx-auto p-6 sm:p-7 rounded-2xl text-left"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,107,53,0.06) 0%, rgba(196,69,24,0.04) 100%)",
            border: "1px solid rgba(255,107,53,0.20)",
          }}
        >
          <p className="text-stone text-[14px] sm:text-[15px] leading-[1.7] flex items-start gap-3">
            <span className="shrink-0 mt-0.5 text-orange-deep" aria-hidden>
              ⚠
            </span>
            <span>
              <span className="text-ink font-semibold">
                Sahara releases May 31.
              </span>{" "}
              Available only to members who join during May or June 2026.
              After June 30, Sahara leaves the catalog permanently — members
              joining later will never have access.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

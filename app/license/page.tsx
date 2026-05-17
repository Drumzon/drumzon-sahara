import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "License terms — Drumzon",
  description:
    "What you can and cannot do with Drumzon sample packs. Royalty-free for commercial use.",
};

export default function LicensePage() {
  return (
    <>
      <Navbar />
      <main>
        <div className="mx-auto max-w-[760px] px-6 md:px-10 pt-[clamp(108px,13vw,160px)] pb-[clamp(64px,9vw,120px)]">
          <p className="text-ash text-[11px] font-semibold tracking-[0.22em] uppercase mb-4">
            Legal
          </p>
          <h1
            className="h-display text-ink mb-8"
            style={{ fontSize: "clamp(40px, 6vw, 72px)" }}
          >
            <span className="serif-em gradient-text">License</span> terms.
          </h1>

          <div className="prose prose-sm flex flex-col gap-6 text-stone text-[15px] leading-[1.7]">
            <p className="text-ink font-medium">
              Last updated: May 2026
            </p>

            <p>
              When you buy a Drumzon sample pack or subscribe to Inner Circle,
              you receive a non-exclusive, royalty-free, perpetual,
              worldwide license to use the sounds in your music. The summary
              below covers 99% of producer use-cases.
            </p>

            <Section title="You CAN">
              <li>
                Use the sounds in original musical works (instrumentals,
                full tracks, remixes of your own work).
              </li>
              <li>
                Release tracks containing the sounds on any platform —
                Spotify, Apple Music, Beatport, SoundCloud, YouTube,
                Bandcamp, TikTok, Instagram Reels.
              </li>
              <li>
                Monetize those releases — collect royalties, get paid for
                streams, sell the track, sync it to film/TV/games.
              </li>
              <li>
                Use the sounds in client work for hire (producing for
                another artist, beats for sale).
              </li>
              <li>
                Modify, layer, pitch-shift, time-stretch, chop, resample,
                or otherwise transform the sounds.
              </li>
              <li>Keep the sounds forever, even if you cancel Inner Circle.</li>
            </Section>

            <Section title="You CANNOT">
              <li>
                Resell or redistribute the raw samples as a sample pack,
                Splice contribution, or any product where the samples
                themselves are the product.
              </li>
              <li>
                Share your download link or files with anyone else, even
                privately. Each license is per buyer.
              </li>
              <li>
                Use the sounds in AI training datasets or any machine
                learning model.
              </li>
              <li>
                Claim authorship of the raw sounds themselves
                (your musical arrangement of them is yours; the sound design
                is Drumzon's).
              </li>
              <li>
                Use the Drumzon name, logo, or branding to endorse your
                work without permission.
              </li>
            </Section>

            <Section title="Inner Circle exclusives">
              <li>
                Serum presets and exclusive MIDI packs are members-only.
                The same usage rights apply (use in music, release commercially,
                cannot resell as presets/MIDIs).
              </li>
              <li>
                If you cancel Inner Circle, your existing presets and MIDIs
                remain yours under this same license. Future months' content
                stops at your cancellation date.
              </li>
            </Section>

            <Section title="Disputes">
              <li>
                If you're unsure whether a use is allowed, email{" "}
                <a
                  href="mailto:itsdrumzon@gmail.com"
                  className="text-ink underline decoration-orange/40 hover:decoration-orange"
                >
                  itsdrumzon@gmail.com
                </a>{" "}
                before doing it. Faster than a takedown after release.
              </li>
              <li>
                License governed by Spanish law. Disputes settled in the
                courts of Madrid.
              </li>
            </Section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-ink text-[15px] font-semibold uppercase tracking-[0.14em]">
        {title}
      </h2>
      <ul className="flex flex-col gap-2.5 pl-5 list-disc marker:text-orange">
        {children}
      </ul>
    </div>
  );
}

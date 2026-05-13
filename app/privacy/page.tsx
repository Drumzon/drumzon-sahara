import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SaharaBackdrop from "@/components/SaharaBackdrop";

export const metadata: Metadata = {
  title: "Privacy — Drumzon",
  description: "How Drumzon collects, uses, and protects your data.",
};

export default function Privacy() {
  return (
    <>
      <SaharaBackdrop />
      <Navbar />
      <main className="flex-1">
        <div className="mx-auto max-w-[720px] px-6 md:px-12 lg:px-20 pt-[clamp(108px,13vw,160px)] pb-[clamp(64px,9vw,120px)]">
          <p className="text-ash text-[11px] font-semibold tracking-[0.2em] uppercase mb-4">
            Privacy
          </p>
          <h1
            className="h-display text-ink"
            style={{ fontSize: "clamp(40px, 6vw, 72px)" }}
          >
            Privacy <span className="serif-em gradient-text">Policy</span>.
          </h1>
          <p className="text-stone text-[13px] mt-4 mb-12 font-mono tracking-wide">
            Updated 13 May 2026
          </p>

          <div className="flex flex-col gap-10 text-graphite text-[16px] leading-[1.7]">
            <section className="flex flex-col gap-3">
              <h2 className="font-serif text-ink text-[28px] leading-[1.2]">
                Who we are
              </h2>
              <p>
                Drumzon is an independent sound-design project. You can reach
                us at{" "}
                <a
                  href="mailto:itsdrumzon@gmail.com"
                  className="text-orange hover:text-orange-deep underline underline-offset-4"
                >
                  itsdrumzon@gmail.com
                </a>
                .
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="font-serif text-ink text-[28px] leading-[1.2]">
                What we collect
              </h2>
              <p>
                When you sign up for the free Sahara Lite pack or buy Vol. 1,
                we collect your email address. That’s it. No tracking pixels,
                no behavioural profiling, no third-party data brokers.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="font-serif text-ink text-[28px] leading-[1.2]">
                How we use it
              </h2>
              <p>
                We use your email to deliver the pack you requested and to let
                you know when new releases drop (Vol. 2, free packs, occasional
                discount codes). Two emails a month, max.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="font-serif text-ink text-[28px] leading-[1.2]">
                Where it lives
              </h2>
              <p>
                Email lists are managed by{" "}
                <a
                  href="https://kit.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange hover:text-orange-deep underline underline-offset-4"
                >
                  Kit
                </a>{" "}
                (formerly ConvertKit). The website is hosted on Vercel. Both
                are GDPR-compliant.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="font-serif text-ink text-[28px] leading-[1.2]">
                Your rights
              </h2>
              <p>
                You can unsubscribe from any email with one click. You can ask
                us to delete your data at any time by emailing{" "}
                <a
                  href="mailto:itsdrumzon@gmail.com"
                  className="text-orange hover:text-orange-deep underline underline-offset-4"
                >
                  itsdrumzon@gmail.com
                </a>{" "}
                — we’ll do it within 7 days.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="font-serif text-ink text-[28px] leading-[1.2]">
                Cookies
              </h2>
              <p>
                We don’t use tracking cookies. The site uses essential cookies
                only (session, security).
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="font-serif text-ink text-[28px] leading-[1.2]">
                Changes
              </h2>
              <p>
                If we change this policy, we’ll update the date at the top.
                Material changes will be announced via email to existing
                subscribers.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

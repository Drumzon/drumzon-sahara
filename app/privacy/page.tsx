import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy — Drumzon",
  description: "How Drumzon collects, uses, and protects your data.",
};

export default function Privacy() {
  return (
    <>
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
            Updated May 2026
          </p>

          <div className="flex flex-col gap-10 text-graphite text-[16px] leading-[1.7]">
            <section className="flex flex-col gap-3">
              <h2 className="font-serif text-ink text-[28px] leading-[1.2]">
                Who we are
              </h2>
              <p>
                Drumzon is an independent sound-design project based in Spain.
                You can reach us at{" "}
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
                We collect your email when you sign up for the free Afrohouse
                MIDI starter pack or buy a monthly drop. Stripe collects card
                details for purchases — we never see them, Stripe handles all
                card data. That's it.
              </p>
              <p>
                No tracking pixels. No behavioural profiling. No third-party
                data brokers. No fingerprinting.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="font-serif text-ink text-[28px] leading-[1.2]">
                How we use it
              </h2>
              <p>
                Your email is used to: deliver what you bought or signed up
                for, send the monthly drop announcement, occasionally send
                discount codes or surveys.
              </p>
              <p>
                Maximum cadence: 1–2 emails a month. No spam, ever.
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
                (formerly ConvertKit). Payments processed by{" "}
                <a
                  href="https://stripe.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange hover:text-orange-deep underline underline-offset-4"
                >
                  Stripe
                </a>
                . Website hosted on Vercel. All three are GDPR-compliant.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="font-serif text-ink text-[28px] leading-[1.2]">
                Your rights
              </h2>
              <p>
                Unsubscribe from any email in one click. Ask us to delete your
                data at any time by emailing{" "}
                <a
                  href="mailto:itsdrumzon@gmail.com"
                  className="text-orange hover:text-orange-deep underline underline-offset-4"
                >
                  itsdrumzon@gmail.com
                </a>{" "}
                — we'll do it within 7 days.
              </p>
              <p>
                You have the right to access, correct, port, or delete your
                personal data under the GDPR. Contact us and we'll comply.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="font-serif text-ink text-[28px] leading-[1.2]">
                Cookies
              </h2>
              <p>
                We don't use tracking or marketing cookies. The site uses
                essential cookies only (session, security). Vercel sets a
                geolocation header (country only, no IP storage) so we can
                show you the right currency.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="font-serif text-ink text-[28px] leading-[1.2]">
                Changes
              </h2>
              <p>
                If we change this policy, we'll update the date at the top.
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

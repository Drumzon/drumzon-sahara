import type { Metadata } from "next";
import Link from "next/link";
import LogoMark from "@/components/LogoMark";
import Footer from "@/components/blocks/Footer";

export const metadata: Metadata = {
  title: "Refund policy — Drumzon Pro",
  description: "Drumzon Pro does not offer refunds. Listen to the demo before subscribing.",
};

export default function RefundPolicy() {
  return (
    <>
      <header className="px-6 md:px-10 pt-6 md:pt-8 max-w-[1200px] mx-auto w-full">
        <Link href="/" className="inline-flex hover:opacity-85 transition-opacity">
          <LogoMark size="sm" />
        </Link>
      </header>
      <main className="flex-1 px-6 md:px-10">
        <div className="max-w-[720px] mx-auto pt-16 lg:pt-24 pb-20">
          <p className="eyebrow mb-3">Legal</p>
          <h1
            className="h-display-bold text-text mb-2"
            style={{ fontSize: "clamp(40px, 6vw, 64px)" }}
          >
            Refund{" "}
            <span className="serif-em" style={{ color: "var(--color-accent)" }}>
              policy
            </span>
            .
          </h1>
          <p className="text-text-subtle text-[12px] font-mono uppercase tracking-[0.14em] mb-12">
            Updated May 2026
          </p>

          <div className="flex flex-col gap-8 text-text-muted text-[15px] leading-[1.75]">
            <p
              className="h-display text-text"
              style={{ fontSize: "clamp(24px, 3vw, 32px)" }}
            >
              No refunds.
            </p>

            <p>
              Drumzon Pro does not offer refunds. Here's why:
            </p>

            <p>
              The Sahara demo on the landing page is the entire product
              experience compressed into 60–90 seconds. You can hear the
              quality, the sound design, the mix, the genre. You know
              exactly what you're getting before you click subscribe.
            </p>

            <p>
              If the sound on the demo is what you want, join. If it isn't,
              don't. No need for refund policies when you can listen first.
            </p>

            <Section title="Cancel anytime">
              <p>
                Cancellation is different from refund. You can cancel your
                subscription anytime from your Stripe customer portal (link
                in your welcome email). Your access continues until the end
                of the current billing period — you receive the value you
                paid for. After that, billing stops and you keep every file
                you've downloaded.
              </p>
            </Section>

            <Section title="Disputed charges">
              <p>
                If something legitimately went wrong (e.g. you were charged
                after canceling, or a drop wasn't delivered while you were
                active), email{" "}
                <a
                  href="mailto:contact@drumzon.com"
                  className="text-text underline"
                  style={{ textDecorationColor: "rgba(224,122,60,0.4)" }}
                >
                  contact@drumzon.com
                </a>{" "}
                first. Chargebacks cost the business €15/dispute regardless
                of outcome and damage the Stripe account standing.
                Legitimate issues resolved within 48 hours by email.
              </p>
            </Section>

            <Section title="EU consumer law note">
              <p>
                Under EU consumer law, digital goods that have been
                downloaded technically lose refund rights. By subscribing,
                you acknowledge this and agree that delivery of any
                downloadable file begins immediately after subscription
                confirmation.
              </p>
            </Section>

            <Section title="Drop delays">
              <p>
                Drumzon Pro commits to at least one drop per active member
                month. In rare cases of unavoidable delay, your subscription
                pauses (no charge) until delivery resumes. You're never
                charged for content you don't receive.
              </p>
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
    <section className="flex flex-col gap-3">
      <h2 className="text-text text-[14px] font-semibold uppercase tracking-[0.16em]">
        {title}
      </h2>
      {children}
    </section>
  );
}

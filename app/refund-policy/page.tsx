import type { Metadata } from "next";
import Link from "next/link";
import LogoMark from "@/components/LogoMark";
import Footer from "@/components/Footer";

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
          <p className="text-ash text-[11px] font-semibold tracking-[0.22em] uppercase mb-3">
            Legal
          </p>
          <h1
            className="h-display text-ink mb-2"
            style={{ fontSize: "clamp(40px, 6vw, 72px)" }}
          >
            <span className="serif-em gradient-text">Refund</span> policy.
          </h1>
          <p className="text-ash text-[12px] font-mono uppercase tracking-[0.14em] mb-12">
            Updated May 2026
          </p>

          <div className="flex flex-col gap-8 text-stone text-[15px] leading-[1.75]">
            <p
              className="h-display text-ink"
              style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
            >
              <span className="serif-em gradient-text">No refunds.</span>
            </p>

            <p>Drumzon Pro does not offer refunds. Here&apos;s why:</p>

            <p>
              The Sahara demo on the landing page is the entire product
              experience compressed into 60–90 seconds. You can hear the
              quality, the sound design, the mix, the genre. You know exactly
              what you&apos;re getting before you click subscribe.
            </p>

            <p>
              If the sound on the demo is what you want, join. If it
              isn&apos;t, don&apos;t. No need for refund policies when you
              can listen first.
            </p>

            <Section title="Cancel anytime">
              <p>
                Cancellation is different from refund. You can cancel your
                subscription anytime from your Stripe customer portal (link
                in your welcome email). Your access continues until the end
                of the current billing period — you receive the value you
                paid for. After that, billing stops and you keep every file
                you&apos;ve downloaded.
              </p>
            </Section>

            <Section title="Disputed charges">
              <p>
                If something legitimately went wrong (you were charged after
                canceling, or a drop wasn&apos;t delivered while you were
                active), email{" "}
                <a
                  href="mailto:contact@drumzon.com"
                  className="text-ink underline decoration-orange/40 hover:decoration-orange"
                >
                  contact@drumzon.com
                </a>{" "}
                first. Chargebacks cost the business €15/dispute regardless
                of outcome and damage the Stripe account standing.
                Legitimate issues resolved within 48 hours by email.
              </p>
            </Section>

            <Section title="EU consumer law">
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
                pauses (no charge) until delivery resumes. You&apos;re never
                charged for content you don&apos;t receive.
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
      <h2 className="text-ink text-[14px] font-semibold uppercase tracking-[0.16em]">
        {title}
      </h2>
      {children}
    </section>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import LogoMark from "@/components/LogoMark";
import Footer from "@/components/blocks/Footer";

export const metadata: Metadata = {
  title: "Terms of service — Drumzon Pro",
  description: "Terms governing your Drumzon Pro subscription.",
};

export default function Terms() {
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
            <span className="serif-em gradient-text">Terms</span> of service.
          </h1>
          <p className="text-ash text-[12px] font-mono uppercase tracking-[0.14em] mb-12">
            Updated May 2026
          </p>

          <div className="flex flex-col gap-8 text-stone text-[15px] leading-[1.75]">
            <p>By subscribing to Drumzon Pro you agree to these terms.</p>

            <Section title="1. About us">
              <p>
                Drumzon Pro is operated by an independent producer based in
                Barcelona, Spain. Contact:{" "}
                <a href="mailto:contact@drumzon.com" className="text-ink underline decoration-orange/40 hover:decoration-orange">
                  contact@drumzon.com
                </a>.
              </p>
            </Section>

            <Section title="2. What you're buying">
              <p>
                A monthly subscription to receive curated Afro House
                construction kits, samples, presets, and MIDIs. You receive
                only drops released DURING your active subscription period.
                You don&apos;t get drops released before you joined. See the{" "}
                <Link href="/#how-it-works" className="text-ink underline decoration-orange/40 hover:decoration-orange">
                  How It Works
                </Link>{" "}
                section on the landing.
              </p>
            </Section>

            <Section title="3. License">
              <p>
                Every file you download under an active subscription is yours
                under a perpetual, non-exclusive, royalty-free license for
                commercial music use. You keep what you&apos;ve downloaded
                even after cancellation. You may not resell or redistribute
                the raw files. You may not use them in AI training datasets.
              </p>
            </Section>

            <Section title="4. Payment, renewal, cancellation">
              <p>
                Billed monthly or annually via Stripe at €7/month (Founding)
                or €14.95/month (Standard). You authorize Stripe to charge
                your card on the recurring schedule until you cancel.
              </p>
              <p>
                Cancel anytime from your Stripe customer portal (link in your
                welcome email). Access continues until the end of the paid
                period, then stops. You keep files already downloaded.
              </p>
            </Section>

            <Section title="5. Founding tier">
              <p>
                Limited to the first 100 paying subscribers. Slots are
                enforced atomically server-side — even simultaneous checkouts
                will only ever fill 100 total Founding spots. Founding
                members lock in €7/month for life provided they maintain
                active subscription. If a Founding member cancels and
                resubscribes within 90 days, the €7 price is preserved.
                After 90 days inactive, Founding status expires and they
                rejoin at Standard pricing.
              </p>
            </Section>

            <Section title="6. Failed payments">
              <p>
                Stripe Smart Retries handles 3 attempts over 7 days. After 7
                days of failed payment, the subscription is canceled
                automatically and portal access ends. Files downloaded prior
                remain on your device.
              </p>
            </Section>

            <Section title="7. Refunds">
              <p>
                <span className="text-ink font-medium">No refunds.</span> You
                can hear the full Sahara demo on the landing page before
                deciding. Listen first; if it&apos;s the sound, join. If not,
                don&apos;t. See{" "}
                <Link href="/refund-policy" className="text-ink underline decoration-orange/40 hover:decoration-orange">
                  refund policy
                </Link>.
              </p>
            </Section>

            <Section title="8. Prohibited use">
              <p>
                Don&apos;t share your download links or files. Don&apos;t
                resell as your own sample pack. Don&apos;t use in AI training
                datasets. Violations terminate your subscription without
                refund.
              </p>
            </Section>

            <Section title="9. Liability">
              <p>
                Service provided &quot;as-is&quot;. Total liability capped at
                what you paid us in the last 12 months.
              </p>
            </Section>

            <Section title="10. Changes">
              <p>
                We may update these terms. Material changes communicated via
                email to active members. Continuing the subscription after
                notice constitutes acceptance.
              </p>
            </Section>

            <Section title="11. Governing law">
              <p>Spanish law. Disputes settled in the courts of Madrid.</p>
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

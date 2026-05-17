import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of service — Drumzon",
  description: "Terms governing your use of Drumzon and its sample packs.",
};

export default function TermsPage() {
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
            <span className="serif-em gradient-text">Terms</span> of service.
          </h1>

          <div className="flex flex-col gap-6 text-stone text-[15px] leading-[1.7]">
            <p className="text-ink font-medium">Last updated: May 2026</p>

            <p>
              By using drumzon.com, buying a sample pack, or subscribing
              to Inner Circle, you agree to these terms.
            </p>

            <h2 className="text-ink text-[15px] font-semibold uppercase tracking-[0.14em] mt-4">
              1. About us
            </h2>
            <p>
              Drumzon is operated by [your registered business name],
              autónomo / SL registered in Spain. Contact:{" "}
              <a
                href="mailto:itsdrumzon@gmail.com"
                className="text-ink underline decoration-orange/40 hover:decoration-orange"
              >
                itsdrumzon@gmail.com
              </a>
              .
            </p>

            <h2 className="text-ink text-[15px] font-semibold uppercase tracking-[0.14em] mt-4">
              2. What you're buying
            </h2>
            <p>
              A non-exclusive license to use the sounds in your music, governed
              by our{" "}
              <Link
                href="/license"
                className="text-ink underline decoration-orange/40 hover:decoration-orange"
              >
                license terms
              </Link>
              . You don't own the copyright to the sounds themselves — you
              own the right to use them in your work.
            </p>

            <h2 className="text-ink text-[15px] font-semibold uppercase tracking-[0.14em] mt-4">
              3. Payment + delivery
            </h2>
            <p>
              Payments processed by Stripe. Your card details never touch our
              servers. Delivery is instant via email after Stripe confirms
              payment. If you don't receive the email within 10 minutes,
              check spam, then contact us.
            </p>

            <h2 className="text-ink text-[15px] font-semibold uppercase tracking-[0.14em] mt-4">
              4. Inner Circle subscription
            </h2>
            <p>
              Billed monthly via Stripe. You authorize Stripe to charge your
              card €34 (or $34) per month until you cancel. Cancel anytime
              from your Stripe customer portal — access continues until the
              end of the paid period.
            </p>

            <h2 className="text-ink text-[15px] font-semibold uppercase tracking-[0.14em] mt-4">
              5. Refunds
            </h2>
            <p>
              See our{" "}
              <Link
                href="/refund-policy"
                className="text-ink underline decoration-orange/40 hover:decoration-orange"
              >
                refund policy
              </Link>{" "}
              — 14 days no questions asked.
            </p>

            <h2 className="text-ink text-[15px] font-semibold uppercase tracking-[0.14em] mt-4">
              6. What you can't do
            </h2>
            <p>
              Don't share your download links, resell the raw samples as your
              own pack, use the sounds in AI training datasets, or do anything
              else the{" "}
              <Link
                href="/license"
                className="text-ink underline decoration-orange/40 hover:decoration-orange"
              >
                license
              </Link>{" "}
              prohibits. Doing so terminates your license without refund.
            </p>

            <h2 className="text-ink text-[15px] font-semibold uppercase tracking-[0.14em] mt-4">
              7. Liability
            </h2>
            <p>
              The packs are provided "as-is". We're not liable for any
              indirect or consequential damages from your use of them. Our
              total liability is capped at what you paid us in the last 12
              months.
            </p>

            <h2 className="text-ink text-[15px] font-semibold uppercase tracking-[0.14em] mt-4">
              8. Changes
            </h2>
            <p>
              We may update these terms. Material changes will be
              communicated via email to existing customers + Inner Circle
              members. Continuing to use the service after notice constitutes
              acceptance.
            </p>

            <h2 className="text-ink text-[15px] font-semibold uppercase tracking-[0.14em] mt-4">
              9. Governing law
            </h2>
            <p>
              Spanish law. Disputes settled in the courts of Madrid.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

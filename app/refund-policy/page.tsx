import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Refund policy — Drumzon",
  description: "14-day no-questions-asked refund on every Drumzon purchase.",
};

export default function RefundPage() {
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
            <span className="serif-em gradient-text">Refund</span> policy.
          </h1>

          <div className="flex flex-col gap-6 text-stone text-[15px] leading-[1.7]">
            <p className="text-ink font-medium">Last updated: May 2026</p>

            <p>
              I'd rather refund than have an unhappy producer in the list.
              The rules below apply to every Drumzon purchase.
            </p>

            <h2 className="text-ink text-[15px] font-semibold uppercase tracking-[0.14em] mt-4">
              14 days, no questions asked
            </h2>
            <p>
              Email{" "}
              <a
                href="mailto:itsdrumzon@gmail.com"
                className="text-ink underline decoration-orange/40 hover:decoration-orange"
              >
                itsdrumzon@gmail.com
              </a>{" "}
              with your Stripe order ID (in your receipt) and a refund hits
              your card within 48 hours. You don't need to give a reason.
              Note: under EU consumer law, digital products technically lose
              refund rights once downloaded — I waive that and refund anyway.
            </p>

            <h2 className="text-ink text-[15px] font-semibold uppercase tracking-[0.14em] mt-4">
              What you keep
            </h2>
            <p>
              Every pack you've downloaded stays yours forever under the{" "}
              <a
                href="/license"
                className="text-ink underline decoration-orange/40 hover:decoration-orange"
              >
                license terms
              </a>
              . Refunds don't revoke the files; they just return your money.
              I trust you to delete them in good faith if you've been refunded
              and never intend to use them.
            </p>

            <h2 className="text-ink text-[15px] font-semibold uppercase tracking-[0.14em] mt-4">
              Chargebacks
            </h2>
            <p>
              If something's wrong, email first. Chargebacks cost the
              business $15 per dispute regardless of outcome and damage the
              Stripe account standing. I respond to refund requests within
              48h — you'll get your money faster by emailing than by
              opening a dispute.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

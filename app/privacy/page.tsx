import type { Metadata } from "next";
import Link from "next/link";
import LogoMark from "@/components/LogoMark";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy — Drumzon Pro",
  description: "How Drumzon Pro collects, uses, and protects your data.",
};

export default function Privacy() {
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
            <span className="serif-em gradient-text">Privacy</span> policy.
          </h1>
          <p className="text-ash text-[12px] font-mono uppercase tracking-[0.14em] mb-12">
            Updated May 2026
          </p>

          <div className="flex flex-col gap-10 text-stone text-[15px] leading-[1.75]">
            <Section title="Who we are">
              <p>
                Drumzon Pro is operated by a Barcelona-based independent
                producer. Contact:{" "}
                <a
                  href="mailto:contact@drumzon.com"
                  className="text-ink underline decoration-orange/40 hover:decoration-orange"
                >
                  contact@drumzon.com
                </a>
                .
              </p>
            </Section>

            <Section title="What we collect">
              <p>
                When you subscribe to Drumzon Pro: your email address and
                billing details (the latter handled and stored by Stripe — we
                never see your card data). Country (via Vercel geo header) for
                tax calculation. That&apos;s it.
              </p>
              <p>
                No tracking pixels. No behavioural profiling. No third-party
                data brokers. No fingerprinting. No analytics scripts that
                follow you around the internet.
              </p>
            </Section>

            <Section title="How we use it">
              <p>
                Your email is used to deliver each monthly drop, send
                membership notifications (renewal receipts, failed payment
                alerts, drop delays), and occasionally send broadcasts about
                upcoming releases or Founding member updates.
              </p>
              <p>
                Maximum cadence: 4–6 emails per month for active members
                (drop arrival + membership ops). No marketing spam.
              </p>
            </Section>

            <Section title="Where it lives">
              <p>
                Email lists managed by{" "}
                <a
                  href="https://kit.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink underline decoration-orange/40 hover:decoration-orange"
                >
                  Kit
                </a>{" "}
                (formerly ConvertKit). Payments processed by{" "}
                <a
                  href="https://stripe.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink underline decoration-orange/40 hover:decoration-orange"
                >
                  Stripe
                </a>
                . Membership records via Supabase + file delivery via
                Cloudflare R2. Website hosted on Vercel. All GDPR-compliant.
              </p>
            </Section>

            <Section title="Your rights">
              <p>
                Unsubscribe from emails in one click. Cancel your subscription
                anytime from the Stripe customer portal (link in your welcome
                email). Request data deletion by emailing{" "}
                <a
                  href="mailto:contact@drumzon.com"
                  className="text-ink underline decoration-orange/40 hover:decoration-orange"
                >
                  contact@drumzon.com
                </a>{" "}
                — we comply within 7 days.
              </p>
              <p>
                Under GDPR you have the right to access, correct, port, or
                delete your personal data. Contact us and we&apos;ll comply.
              </p>
            </Section>

            <Section title="Cookies">
              <p>
                No tracking or marketing cookies. Essential cookies only
                (session, security). Vercel sets a geolocation header
                (country only, no IP storage) for currency display.
              </p>
            </Section>

            <Section title="Changes">
              <p>
                If we update this policy, the date at the top changes.
                Material changes are announced via email to active members.
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

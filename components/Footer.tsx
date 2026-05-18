import Link from "next/link";
import LogoMark from "./LogoMark";

// Apple-minimal footer — one row of nav + thin legal line.
// No 3-col, no orange hairline gradient, no big brand block.

export default function Footer() {
  return (
    <footer
      className="px-6 md:px-10 pt-16 pb-10 mt-[clamp(40px,6vw,80px)]"
      style={{ background: "var(--color-cream-subtle)" }}
    >
      <div className="mx-auto max-w-[1180px] flex flex-col gap-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div className="flex flex-col gap-3 max-w-[36ch]">
            <Link
              href="/"
              className="inline-flex w-fit hover:opacity-85 transition-opacity"
            >
              <LogoMark size="md" />
            </Link>
            <p className="text-stone text-[14px] leading-[1.55]">
              Curated Afro House label. One drop a month. Made in Barcelona.
            </p>
          </div>

          <nav
            aria-label="Footer"
            className="flex flex-wrap gap-x-7 gap-y-2 text-[14px]"
          >
            <Link
              href="/#whats-included"
              className="text-stone hover:text-ink transition-colors"
            >
              What you get
            </Link>
            <Link
              href="/#how-it-works"
              className="text-stone hover:text-ink transition-colors"
            >
              How it works
            </Link>
            <Link
              href="/#pricing"
              className="text-stone hover:text-ink transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/#faq"
              className="text-stone hover:text-ink transition-colors"
            >
              FAQ
            </Link>
            <a
              href="mailto:contact@drumzon.com"
              className="text-stone hover:text-ink transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>

        <div
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-6 border-t text-[12px] text-ash"
          style={{ borderColor: "rgba(0,0,0,0.06)" }}
        >
          <span>© Drumzon 2026 · DRZ-001</span>
          <div className="flex flex-wrap gap-x-5 gap-y-1">
            <Link href="/terms" className="hover:text-stone transition-colors">
              Terms
            </Link>
            <Link
              href="/refund-policy"
              className="hover:text-stone transition-colors"
            >
              Refund policy
            </Link>
            <Link href="/privacy" className="hover:text-stone transition-colors">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

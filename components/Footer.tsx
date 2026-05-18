import Link from "next/link";
import LogoMark from "./LogoMark";

// Refined footer — single compact row, no separate brand block.
// Logo + nav inline, legal microcopy below.

export default function Footer() {
  return (
    <footer
      className="px-6 md:px-10 pt-12 pb-10 mt-[clamp(32px,5vw,72px)] border-t border-black/[0.06]"
    >
      <div className="mx-auto max-w-[1180px] flex flex-col gap-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <Link
            href="/"
            className="inline-flex w-fit hover:opacity-85 transition-opacity"
          >
            <LogoMark size="sm" />
          </Link>

          <nav
            aria-label="Footer"
            className="flex flex-wrap gap-x-6 gap-y-2 text-[13px]"
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

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-[12px] text-ash">
          <span>© Drumzon 2026 · Curated Afro House label · Barcelona</span>
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            <Link href="/terms" className="hover:text-stone transition-colors">
              Terms
            </Link>
            <Link
              href="/refund-policy"
              className="hover:text-stone transition-colors"
            >
              Refunds
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

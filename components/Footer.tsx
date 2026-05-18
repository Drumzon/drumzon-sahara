import Link from "next/link";
import LogoMark from "./LogoMark";

// Centered minimal footer — logo + nav + legal, single column on mobile.

export default function Footer() {
  return (
    <footer className="px-6 md:px-10 pt-14 pb-10 mt-[clamp(32px,5vw,72px)] border-t border-black/[0.06]">
      <div className="mx-auto max-w-[920px] flex flex-col items-center gap-6 text-center">
        <Link
          href="/"
          className="inline-flex hover:opacity-85 transition-opacity"
        >
          <LogoMark size="sm" />
        </Link>

        <nav
          aria-label="Footer"
          className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[13px]"
        >
          <Link
            href="/#how-it-works"
            className="text-stone hover:text-ink transition-colors"
          >
            How it works
          </Link>
          <Link
            href="/#free-pack"
            className="text-stone hover:text-ink transition-colors"
          >
            Free pack
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

        <div className="text-[12px] text-ash">
          <span>© Drumzon 2026</span>
        </div>

        <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-[12px] text-ash">
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
    </footer>
  );
}

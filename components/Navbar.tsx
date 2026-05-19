import Link from "next/link";
import LogoMark from "./LogoMark";

// Refined navbar — subtle glass pill, no thick shadow, sits closer to
// the top now that the CountdownStrip is gone.
export default function Navbar() {
  return (
    <header
      className="fixed left-1/2 -translate-x-1/2 z-[100] flex items-center justify-between gap-6 w-[calc(100%-32px)] max-w-[1180px] py-2 pl-5 pr-2 rounded-full bg-cream-base/70 backdrop-blur-xl backdrop-saturate-150 border border-black/[0.06]"
      style={{
        // Sits 14px below the top on desktop; on iPhone (notch / Dynamic
        // Island) it's pushed below the status bar via safe-area-inset
        top: "max(14px, calc(env(safe-area-inset-top, 0px) + 8px))",
        boxShadow: "0 1px 2px rgba(26,26,26,0.04), 0 8px 24px rgba(26,26,26,0.05)",
      }}
    >
      <Link
        href="/"
        className="flex items-center flex-shrink-0 hover:opacity-90 transition-opacity"
      >
        <LogoMark size="sm" />
      </Link>

      <nav
        aria-label="Primary"
        className="hidden md:flex items-center gap-1 ml-auto"
      >
        <Link
          href="/#how-it-works"
          className="px-3 py-1.5 rounded-full text-[13px] font-medium text-stone hover:text-ink transition-colors"
        >
          How it works
        </Link>
        <Link
          href="/#free-pack"
          className="px-3 py-1.5 rounded-full text-[13px] font-medium text-stone hover:text-ink transition-colors"
        >
          Free pack
        </Link>
        <Link
          href="/#pricing"
          className="px-3 py-1.5 rounded-full text-[13px] font-medium text-stone hover:text-ink transition-colors"
        >
          Pricing
        </Link>
        <Link
          href="/#faq"
          className="px-3 py-1.5 rounded-full text-[13px] font-medium text-stone hover:text-ink transition-colors"
        >
          FAQ
        </Link>
      </nav>

      <Link
        href="/#pricing"
        className="inline-flex items-center justify-center h-9 px-4 rounded-full bg-ink text-white text-[13px] font-medium hover:bg-graphite transition-colors"
      >
        Subscribe
      </Link>
    </header>
  );
}

import Link from "next/link";
import { headers } from "next/headers";
import LogoMark from "./LogoMark";
import { detectCurrency } from "@/lib/currency";
import { getCurrentDrop, getDropBuyUrl } from "@/lib/drops";

// Server component — reads currency from request headers to point the
// "Get the Pack" CTA at the right Stripe Payment Link.
export default async function Navbar() {
  const h = await headers();
  const currency = detectCurrency(h.get("x-vercel-ip-country"));
  const drop = getCurrentDrop();
  const buyUrl = getDropBuyUrl(drop, currency);

  return (
    <header
      className="fixed left-1/2 -translate-x-1/2 z-[100] flex items-center justify-between gap-6 w-[calc(100%-32px)] max-w-[1180px] py-2.5 pl-6 pr-3 rounded-full bg-cream-base/65 backdrop-blur-xl backdrop-saturate-150 border border-black/[0.08]"
      style={{
        top: "calc(38px + 12px)",
        boxShadow:
          "0 1px 2px rgba(26,26,26,0.05), 0 8px 28px rgba(26,26,26,0.07)",
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
          href="/#current-drop"
          className="px-3.5 py-2 rounded-full text-[13px] font-medium text-stone hover:text-ink hover:bg-black/[0.05] transition-colors"
        >
          {drop.name}
        </Link>
        <Link
          href="/#inner-circle"
          className="px-3.5 py-2 rounded-full text-[13px] font-medium text-stone hover:text-ink hover:bg-black/[0.05] transition-colors"
        >
          Inner Circle
        </Link>
        <Link
          href="/#preview"
          className="px-3.5 py-2 rounded-full text-[13px] font-medium text-stone hover:text-ink hover:bg-black/[0.05] transition-colors"
        >
          Preview
        </Link>
        <Link
          href="/#faq"
          className="px-3.5 py-2 rounded-full text-[13px] font-medium text-stone hover:text-ink hover:bg-black/[0.05] transition-colors"
        >
          FAQ
        </Link>
      </nav>

      <a
        href={buyUrl}
        className="inline-flex items-center justify-center h-10 px-5 rounded-full bg-orange text-white text-[13px] font-medium hover:bg-orange-deep hover:-translate-y-px transition-all"
        style={{ boxShadow: "0 8px 24px -8px rgba(255,107,53,0.5)" }}
      >
        Get the Pack
      </a>
    </header>
  );
}

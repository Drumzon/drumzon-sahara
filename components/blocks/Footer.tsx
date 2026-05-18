import Link from "next/link";
import LogoMark from "../LogoMark";

// BLOCK 10 — FOOTER
// Cream styled, restrained. Brand + minimal nav + legal. Top edge has a
// subtle orange glow line to seal the page.

export default function Footer() {
  return (
    <footer
      className="relative px-6 md:px-10 pt-14 lg:pt-20 pb-8 mt-[clamp(56px,8vw,120px)] border-t border-black/[0.06]"
      style={{
        background: "rgba(245,240,230,0.45)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
      }}
    >
      <div
        aria-hidden
        className="absolute top-0 inset-x-0 h-px opacity-60"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--color-orange) 50%, transparent)",
        }}
      />

      <div className="mx-auto max-w-[1100px]">
        <div className="grid gap-10 md:grid-cols-12 pb-8 border-b border-black/[0.08]">
          {/* Brand */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <Link
              href="/"
              className="inline-flex w-fit hover:opacity-85 transition-opacity"
            >
              <LogoMark size="md" />
            </Link>
            <p className="text-stone text-[14px] leading-relaxed max-w-[36ch]">
              The first curated digital label for Afro House producers.
              One drop a month. <span className="text-ink">Time in the club = size of your library.</span>
            </p>
          </div>

          {/* Browse */}
          <nav
            aria-label="Browse"
            className="md:col-span-3 flex flex-col gap-2"
          >
            <h4 className="text-orange-deep text-[11px] font-bold tracking-[0.18em] uppercase mb-2">
              Browse
            </h4>
            <Link className="text-stone hover:text-ink text-[14px] transition-colors w-fit" href="/#drop-preview">
              May 31 — Sahara
            </Link>
            <Link className="text-stone hover:text-ink text-[14px] transition-colors w-fit" href="/#how-it-works">
              How it works
            </Link>
            <Link className="text-stone hover:text-ink text-[14px] transition-colors w-fit" href="/#pricing">
              Pricing
            </Link>
            <Link className="text-stone hover:text-ink text-[14px] transition-colors w-fit" href="/#faq">
              FAQ
            </Link>
          </nav>

          {/* Connect + legal */}
          <div className="md:col-span-4 flex flex-col gap-2">
            <h4 className="text-orange-deep text-[11px] font-bold tracking-[0.18em] uppercase mb-2">
              Connect
            </h4>
            <a
              href="mailto:contact@drumzon.com"
              className="text-stone hover:text-ink text-[14px] transition-colors w-fit"
            >
              contact@drumzon.com
            </a>

            <h4 className="text-orange-deep text-[11px] font-bold tracking-[0.18em] uppercase mt-4 mb-2">
              Legal
            </h4>
            <Link className="text-stone hover:text-ink text-[14px] transition-colors w-fit" href="/terms">
              Terms of service
            </Link>
            <Link className="text-stone hover:text-ink text-[14px] transition-colors w-fit" href="/refund-policy">
              Refund policy (= no refunds)
            </Link>
            <Link className="text-stone hover:text-ink text-[14px] transition-colors w-fit" href="/privacy">
              Privacy
            </Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3 pt-5 text-[12px] text-ash">
          <span>© Drumzon 2026</span>
          <span>Curated · Royalty-free · Made in Barcelona</span>
        </div>
      </div>
    </footer>
  );
}

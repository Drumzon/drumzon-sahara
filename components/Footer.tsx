import Link from "next/link";
import LogoMark from "./LogoMark";

// Literal 3-col footer from previous landing — brand + nav + connect/legal.

const Arrow = () => (
  <span
    aria-hidden
    className="ml-1 text-orange opacity-0 -translate-x-1.5 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
  >
    →
  </span>
);

const linkClass =
  "group inline-flex items-center text-stone hover:text-ink text-[14px] transition-colors w-fit";

export default function Footer() {
  return (
    <footer
      className="relative px-6 md:px-10 pt-16 lg:pt-20 pb-8 mt-[clamp(72px,10vw,140px)] border-t border-black/[0.06]"
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

      <div className="mx-auto max-w-[1180px]">
        <div className="grid gap-12 md:grid-cols-12 pb-10 border-b border-black/[0.08]">
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
              One drop a month.{" "}
              <span className="text-ink">
                Time in the club = size of your library.
              </span>
            </p>
          </div>

          {/* Browse */}
          <nav
            aria-label="Browse"
            className="md:col-span-3 flex flex-col gap-2.5"
          >
            <h4 className="text-orange-deep text-[11px] font-bold tracking-[0.18em] uppercase mb-3">
              Browse
            </h4>
            <Link className={linkClass} href="/#whats-included">
              <span>What you get</span>
              <Arrow />
            </Link>
            <Link className={linkClass} href="/#how-it-works">
              <span>How it works</span>
              <Arrow />
            </Link>
            <Link className={linkClass} href="/#preview">
              <span>Preview Sahara</span>
              <Arrow />
            </Link>
            <Link className={linkClass} href="/#pricing">
              <span>Pricing</span>
              <Arrow />
            </Link>
            <Link className={linkClass} href="/#faq">
              <span>FAQ</span>
              <Arrow />
            </Link>
          </nav>

          {/* Connect + legal */}
          <div className="md:col-span-4 flex flex-col gap-2.5">
            <h4 className="text-orange-deep text-[11px] font-bold tracking-[0.18em] uppercase mb-3">
              Connect
            </h4>
            <a href="mailto:contact@drumzon.com" className={linkClass}>
              <span>contact@drumzon.com</span>
              <Arrow />
            </a>

            <h4 className="text-orange-deep text-[11px] font-bold tracking-[0.18em] uppercase mt-5 mb-3">
              Legal
            </h4>
            <Link className={linkClass} href="/terms">
              <span>Terms of service</span>
              <Arrow />
            </Link>
            <Link className={linkClass} href="/refund-policy">
              <span>Refund policy</span>
              <Arrow />
            </Link>
            <Link className={linkClass} href="/privacy">
              <span>Privacy</span>
              <Arrow />
            </Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3 pt-5 text-[12px] text-ash">
          <span>© 2026 Drumzon</span>
          <span>Royalty-free for commercial use</span>
        </div>
      </div>
    </footer>
  );
}

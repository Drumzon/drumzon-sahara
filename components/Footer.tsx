import Link from "next/link";
import LogoMark from "./LogoMark";

// Restrained 3-col footer. Brand col with the new Sahara Solar Seal +
// tagline. Pack/Connect cols use a "slide-in arrow" hover detail and
// refined letter-spacing. Semi-transparent bg lets SaharaBackdrop bleed.
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
            <p className="text-stone text-[14px] leading-relaxed max-w-[34ch]">
              Afro House sounds, properly mixed. Stems on every loop.{" "}
              <span className="text-ink">Owned, not subscribed.</span>
            </p>
          </div>

          {/* The Pack */}
          <nav
            aria-label="The Pack"
            className="md:col-span-3 flex flex-col gap-2.5"
          >
            <h4 className="text-orange-deep text-[11px] font-bold tracking-[0.18em] uppercase mb-3">
              The Pack
            </h4>
            <Link className={linkClass} href="/#hero">
              <span>Vol. 1: Sahara</span>
              <Arrow />
            </Link>
            <Link className={linkClass} href="/#whats-included">
              <span>What’s Inside</span>
              <Arrow />
            </Link>
            <Link className={linkClass} href="/#preview">
              <span>Preview</span>
              <Arrow />
            </Link>
            <Link className={linkClass} href="/#lead-magnet">
              <span>Free Sample</span>
              <Arrow />
            </Link>
          </nav>

          {/* Connect */}
          <div className="md:col-span-4 flex flex-col gap-2.5">
            <h4 className="text-orange-deep text-[11px] font-bold tracking-[0.18em] uppercase mb-3">
              Connect
            </h4>
            <a
              href="https://instagram.com/drumzon"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              <span>Instagram</span>
              <Arrow />
            </a>
            <a
              href="https://tiktok.com/@drumzon"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              <span>TikTok</span>
              <Arrow />
            </a>
            <a href="mailto:itsdrumzon@gmail.com" className={linkClass}>
              <span>itsdrumzon@gmail.com</span>
              <Arrow />
            </a>
            <Link href="/privacy" className={`${linkClass} mt-2`}>
              <span>Privacy</span>
              <Arrow />
            </Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3 pt-5 text-[12px] text-ash">
          <span>© 2026 Drumzon</span>
          <span>All sounds 100% royalty-free</span>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";
import LogoMark from "./LogoMark";
import { getCurrentDrop } from "@/lib/drops";

// 3-col footer. Brand col reads from current drop. Sections col links
// to anchors. Connect col includes legal pages + socials + contact.
// Killed the old "Owned, not subscribed" tagline — contradicts Inner Circle.

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
  const drop = getCurrentDrop();

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
              Afro House sample packs, one drop a month. Stems on every loop,
              MIDI on every melody.{" "}
              <span className="text-ink">Built for producers shipping tracks.</span>
            </p>
          </div>

          {/* Sections */}
          <nav
            aria-label="Sections"
            className="md:col-span-3 flex flex-col gap-2.5"
          >
            <h4 className="text-orange-deep text-[11px] font-bold tracking-[0.18em] uppercase mb-3">
              Browse
            </h4>
            <Link className={linkClass} href="/#current-drop">
              <span>{drop.name} · {drop.monthLabel}</span>
              <Arrow />
            </Link>
            <Link className={linkClass} href="/#inner-circle">
              <span>Inner Circle</span>
              <Arrow />
            </Link>
            <Link className={linkClass} href="/#preview">
              <span>Audio preview</span>
              <Arrow />
            </Link>
            <Link className={linkClass} href="/#free-midi-pack">
              <span>Free MIDI pack</span>
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

            <h4 className="text-orange-deep text-[11px] font-bold tracking-[0.18em] uppercase mt-5 mb-3">
              Legal
            </h4>
            <Link className={linkClass} href="/license">
              <span>License terms</span>
              <Arrow />
            </Link>
            <Link className={linkClass} href="/refund-policy">
              <span>Refund policy</span>
              <Arrow />
            </Link>
            <Link className={linkClass} href="/terms">
              <span>Terms of service</span>
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

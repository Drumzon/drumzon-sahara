import Link from "next/link";

// BLOCK 10 — FOOTER
// Minimal. No newsletter signup (funnel stays focused on subscription).

export default function Footer() {
  return (
    <footer
      className="px-6 md:px-10 py-12 mt-12 border-t"
      style={{ borderColor: "var(--color-border)" }}
    >
      <div className="max-w-[1100px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-text-subtle text-[12px]">
          © Drumzon 2026
        </p>
        <a
          href="mailto:contact@drumzon.com"
          className="text-text-muted hover:text-text text-[12px] transition-colors"
        >
          contact@drumzon.com
        </a>
        <nav
          aria-label="Legal"
          className="flex items-center gap-4 text-text-subtle text-[12px]"
        >
          <Link href="/terms" className="hover:text-text transition-colors">
            Terms
          </Link>
          <Link href="/privacy" className="hover:text-text transition-colors">
            Privacy
          </Link>
          <Link
            href="/refund-policy"
            className="hover:text-text transition-colors"
          >
            Refund policy (= no refunds)
          </Link>
        </nav>
      </div>
    </footer>
  );
}

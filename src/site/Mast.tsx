import Link from "next/link";

import { Mark } from "@/site/Mark";

export function Mast() {
  return (
    <header className="sticky top-0 z-40 border-b border-rule/60 bg-paper/85 backdrop-blur-sm">
      <div className="wrap flex h-16 items-center justify-between gap-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2.5 no-underline"
          aria-label="Profitkit home"
        >
          <Mark className="size-7" />
          <span className="font-display text-lg font-semibold tracking-tight text-ink">
            Profitkit
          </span>
        </Link>

        <nav className="flex items-center gap-6">
          <Link
            href="/guide"
            className="hidden text-sm text-ink-soft transition-colors duration-200 hover:text-ink sm:block"
          >
            Guide
          </Link>
          <Link
            href="/#method"
            className="hidden text-sm text-ink-soft transition-colors duration-200 hover:text-ink sm:block"
          >
            Method
          </Link>
          <Link
            href="/#limits"
            className="hidden text-sm text-ink-soft transition-colors duration-200 hover:text-ink sm:block"
          >
            Limits
          </Link>
          <Link
            href="/#pricing"
            className="hidden text-sm text-ink-soft transition-colors duration-200 hover:text-ink sm:block"
          >
            Pricing
          </Link>
          <Link href="/#install" className="btn-solid text-sm">
            Install on Shopify
          </Link>
        </nav>
      </div>
    </header>
  );
}

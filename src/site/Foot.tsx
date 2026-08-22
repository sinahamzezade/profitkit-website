import Link from "next/link";

import { Mark } from "@/site/Mark";

/*
  Anchors here point at sections that exist. The previous footer linked #product,
  #plans and #questions, none of which are ids on this page.
*/
const COLUMNS = [
  {
    heading: "Product",
    links: [
      { label: "How to use it", href: "/guide" },
      { label: "Method", href: "/#method" },
      { label: "Limits", href: "/#limits" },
      { label: "Pricing", href: "/#pricing" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy policy", href: "/privacy" },
      { label: "Terms of service", href: "/terms" },
      { label: "Data handling", href: "/privacy#what-it-stores" },
    ],
  },
  {
    heading: "Contact",
    links: [
      { label: "profitkitapp@gmail.com", href: "mailto:profitkitapp@gmail.com" },
    ],
  },
];

export function Foot() {
  return (
    <footer className="border-t border-rule bg-surface/70 py-12">
      <div className="wrap grid grid-cols-2 gap-8 md:grid-cols-[minmax(0,1.4fr)_repeat(3,minmax(0,1fr))]">
        <div className="col-span-2 md:col-span-1">
          <Link
            href="/"
            className="inline-flex items-center gap-2.5 no-underline"
          >
            <Mark className="size-7" />
            <span className="font-display text-base font-semibold text-ink">
              Redline
            </span>
          </Link>
          <p className="mt-3 max-w-[26ch] text-sm leading-relaxed text-ink-soft">
            Contribution margin per product, for Shopify stores on thin margins.
          </p>
        </div>

        {COLUMNS.map((col) => (
          <div key={col.heading}>
            <p className="eyebrow">{col.heading}</p>
            <div className="mt-3 flex flex-col gap-2">
              {col.links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="cursor-pointer text-sm text-ink-soft no-underline transition-colors duration-200 hover:text-ink"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="wrap mt-10 border-t border-rule pt-5">
        <p className="num text-xs text-ink-soft">
          Redline reads your store. It never writes to it.
        </p>
      </div>
    </footer>
  );
}

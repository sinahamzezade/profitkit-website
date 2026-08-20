"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Mark } from "@/site/Mark";

const LINKS = [
  { href: "#product", label: "Product" },
  { href: "#plans", label: "Plans" },
  { href: "#questions", label: "Questions" },
  { href: "/privacy", label: "Privacy" },
];

export function Mast() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-ink/8 bg-canvas/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5">
        <a href="#top" className="flex items-center gap-2.5 no-underline">
          <Mark />
          <span className="font-display text-[1.2rem] font-bold">Profitkit</span>
        </a>

        <nav className="hidden items-center gap-7 text-[0.92rem] text-mute md:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="cursor-pointer no-underline transition-colors duration-200 hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <a
            href="#plans"
            className="cursor-pointer text-[0.92rem] text-mute no-underline transition-colors duration-200 hover:text-ink"
          >
            Compare plans
          </a>
          <a
            href="#install"
            className="cursor-pointer rounded-xl bg-spring px-4 py-2 text-[0.92rem] font-semibold text-ink no-underline transition-colors duration-200 hover:bg-forest hover:text-canvas"
          >
            Sign up
          </a>
        </div>

        <button
          type="button"
          className="cursor-pointer rounded-lg p-2 md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-ink/8 px-5 py-4 md:hidden">
          <div className="flex flex-col gap-3 text-mute">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="cursor-pointer no-underline"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#install"
              className="mt-2 inline-flex cursor-pointer justify-center rounded-xl bg-spring px-4 py-2.5 font-semibold text-ink no-underline"
              onClick={() => setOpen(false)}
            >
              Sign up
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}

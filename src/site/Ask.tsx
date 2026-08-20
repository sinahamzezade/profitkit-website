"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";

const FAQS = [
  {
    q: "Shopify already shows cost. Why this?",
    a: "Native unit cost is often empty. Fees, shipping paid, discounts and refunds never land on the product. Remainder is the number after those, not the price you typed in inventory.",
  },
  {
    q: "Do I enter 62 costs on day one?",
    a: "No. One catalog percent unlocks the ranking. Vendor overrides and a spreadsheet import come after you have seen the shape.",
  },
  {
    q: "Is free a trial?",
    a: "No. Free is the SKU remainder table on a trailing window, complete. Pro adds history, channels and export — not the basic answer.",
  },
  {
    q: "What customer data do you keep?",
    a: "Order economics and products. Not names, emails, addresses or cards. Deleted on uninstall.",
  },
];

export function Ask() {
  const [open, setOpen] = useState(0);

  return (
    <section id="questions" className="px-5 py-20">
      <div className="mx-auto max-w-6xl grid grid-cols-12 gap-8">
        <h2 className="col-span-12 font-display text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold md:col-span-4">
          Questions, answered
        </h2>
        <div className="col-span-12 md:col-span-8">
          {FAQS.map((item, i) => {
            const on = i === open;
            return (
              <div key={item.q} className="border-b border-ink/10">
                <button
                  type="button"
                  onClick={() => setOpen(on ? -1 : i)}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="font-display text-[1.05rem] font-bold">{item.q}</span>
                  {on ? (
                    <Minus className="size-5 shrink-0 text-spring" />
                  ) : (
                    <Plus className="size-5 shrink-0 text-mute" />
                  )}
                </button>
                {on ? (
                  <p className="pb-5 text-[0.95rem] text-mute">{item.a}</p>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

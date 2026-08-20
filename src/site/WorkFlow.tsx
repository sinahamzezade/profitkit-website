"use client";

import Image from "next/image";
import { useState } from "react";
import { SKUS } from "@/site/media";

const TABS = [
  {
    id: "drain",
    title: "Name the drainers",
    blurb: "Negative remainder, worst first, with the cost that is out of line.",
  },
  {
    id: "table",
    title: "Read the table",
    blurb: "Units, revenue, goods, fees, shipping, refunds, remainder — sortable.",
  },
  {
    id: "leaks",
    title: "Watch the leaks",
    blurb: "Discounts and refunds by month, so promotions stop hiding.",
  },
];

const PRODUCT_SHOT: Record<string, { src: string; alt: string }> = {
  "Field Parka": SKUS.parka,
  "Throw Kit": SKUS.kit,
  "Harbor Tote": SKUS.tote,
  "Kiln Mug": SKUS.mug,
  "Kiln Board": SKUS.kit,
  "Desk Caddy": SKUS.mug,
};

const ROWS = {
  drain: [
    ["Field Parka", "84", "−$428", "Loss"],
    ["Throw Kit", "41", "−$169", "Loss"],
    ["Harbor Tote", "61", "+$1,412", "Kept"],
    ["Kiln Mug", "120", "+$214", "Kept"],
  ],
  table: [
    ["Harbor Tote", "61", "$2,884", "+$1,412"],
    ["Kiln Board", "38", "$2,052", "+$1,012"],
    ["Field Parka", "84", "$3,196", "−$428"],
    ["Desk Caddy", "19", "$424", "+$217"],
  ],
  leaks: [
    ["March", "12 codes", "−$640", "Promo"],
    ["April", "9 codes", "−$410", "Promo"],
    ["May", "31 returns", "−$1,180", "Refund"],
    ["June", "22 returns", "−$890", "Refund"],
  ],
} as const;

const HEADS = {
  drain: ["Product", "Units", "Remainder", "State"],
  table: ["Product", "Units", "Revenue", "Remainder"],
  leaks: ["Month", "Volume", "Hit", "Kind"],
} as const;

export function WorkFlow() {
  const [tab, setTab] = useState<keyof typeof ROWS>("drain");

  return (
    <section className="px-5 py-8 md:py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold">
          One workflow. Three screens.
        </h2>
        <div className="mt-10 grid grid-cols-12 items-start gap-8">
          <div className="col-span-12 md:col-span-4">
            <div className="flex flex-col">
              {TABS.map((item) => {
                const on = item.id === tab;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setTab(item.id as keyof typeof ROWS)}
                    className={`cursor-pointer border-l-2 py-4 pr-3 pl-4 text-left transition-colors duration-200 ${
                      on
                        ? "border-spring bg-white"
                        : "border-ink/10 hover:border-ink/30"
                    }`}
                  >
                    <p className="font-display text-[1.05rem] font-bold">{item.title}</p>
                    <p className="mt-1 text-[0.88rem] text-mute">{item.blurb}</p>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="relative col-span-12 md:col-span-8 md:-mt-4">
            <div className="lift overflow-hidden rounded-2xl bg-white">
              <div className="flex items-center justify-between border-b border-ink/8 px-5 py-3">
                <p className="font-display text-[0.9rem] font-bold">Profitkit</p>
                <span className="rounded-full bg-wash px-2 py-0.5 text-[0.7rem] font-semibold text-forest">
                  Synced
                </span>
              </div>
              <table className="w-full text-left text-[0.88rem]">
                <thead className="bg-canvas text-mute">
                  <tr>
                    {HEADS[tab].map((h) => (
                      <th key={h} className="px-5 py-2.5 font-medium">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {ROWS[tab].map((row) => {
                    const shot = PRODUCT_SHOT[row[0]];
                    return (
                      <tr key={row[0]} className="border-t border-ink/6">
                        {row.map((cell, i) => (
                          <td key={i} className="px-5 py-3">
                            {i === 0 && shot ? (
                              <span className="inline-flex items-center gap-2.5">
                                <Image
                                  src={shot.src}
                                  alt={shot.alt}
                                  width={36}
                                  height={36}
                                  className="size-9 rounded-lg object-cover"
                                />
                                {cell}
                              </span>
                            ) : i === 3 && (cell === "Loss" || cell === "Refund") ? (
                              <span className="rounded-full bg-[#F8E4E1] px-2 py-0.5 text-[0.72rem] font-semibold text-[#C43C32]">
                                {cell}
                              </span>
                            ) : i === 3 && (cell === "Kept" || cell === "Promo") ? (
                              <span className="rounded-full bg-wash px-2 py-0.5 text-[0.72rem] font-semibold text-forest">
                                {cell}
                              </span>
                            ) : (
                              <span className={i > 0 ? "num" : ""}>{cell}</span>
                            )}
                          </td>
                        ))}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="lift absolute -right-3 -bottom-5 hidden rounded-xl bg-white px-3 py-2 sm:block">
              <p className="text-[0.72rem] font-semibold text-spring">Posted</p>
              <p className="text-[0.75rem] text-mute">Remainder refreshed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

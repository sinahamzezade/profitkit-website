"use client";

import { useState } from "react";
import { Check } from "lucide-react";

const FREE = [
  "SKU remainder table",
  "Trailing window",
  "Global cost estimate",
  "Drainers view",
];
const PRO = [
  "Everything in Free",
  "Full history",
  "Channel split",
  "CSV / Xero export",
];
const DESK = [
  "Everything in Pro",
  "Accountant pack",
  "Guided cost import",
  "Priority replies",
];

export function Plans() {
  const [yearly, setYearly] = useState(false);
  const proPrice = yearly ? "$290" : "$29";
  const deskPrice = yearly ? "$790" : "$79";
  const cadence = yearly ? "/yr" : "/mo";

  return (
    <section id="plans" className="px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center font-display text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold">
          Complete on free. Depth on Pro.
        </h2>
        <div className="mt-6 flex justify-center">
          <div className="inline-flex rounded-full bg-white p-1 lift">
            <button
              type="button"
              onClick={() => setYearly(false)}
              className={`cursor-pointer rounded-full px-4 py-1.5 text-[0.85rem] font-semibold transition-colors duration-200 ${yearly ? "text-mute" : "bg-spring text-ink"}`}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setYearly(true)}
              className={`cursor-pointer rounded-full px-4 py-1.5 text-[0.85rem] font-semibold transition-colors duration-200 ${yearly ? "bg-spring text-ink" : "text-mute"}`}
            >
              Yearly
            </button>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 items-stretch gap-5 md:grid-cols-3">
          <PlanCard
            name="Free"
            price="$0"
            cadence=""
            items={FREE}
            cta="Install free"
            href="#install"
            emphasis={false}
          />
          <PlanCard
            name="Pro"
            price={proPrice}
            cadence={cadence}
            items={PRO}
            cta="Start Pro"
            href="#install"
            emphasis
          />
          <PlanCard
            name="Desk"
            price={deskPrice}
            cadence={cadence}
            items={DESK}
            cta="Talk to us"
            href="mailto:support@profitkit.app"
            emphasis={false}
          />
        </div>
      </div>
    </section>
  );
}

function PlanCard({
  name,
  price,
  cadence,
  items,
  cta,
  href,
  emphasis,
}: {
  name: string;
  price: string;
  cadence: string;
  items: string[];
  cta: string;
  href: string;
  emphasis: boolean;
}) {
  return (
    <article
      className={`flex flex-col rounded-2xl p-7 lift ${emphasis ? "bg-forest text-canvas md:-translate-y-5 md:scale-[1.03]" : "bg-white"}`}
    >
      <p className="font-display text-[1.15rem] font-bold">{name}</p>
      <p className="mt-3 font-display text-[2.4rem] font-extrabold leading-none">
        {price}
        {cadence ? (
          <span className={`text-[1rem] font-medium ${emphasis ? "text-canvas/70" : "text-mute"}`}>
            {cadence}
          </span>
        ) : null}
      </p>
      <ul className="mt-6 flex flex-1 flex-col gap-2.5 text-[0.92rem]">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <Check className={`mt-0.5 size-4 shrink-0 ${emphasis ? "text-spring" : "text-[#C43C32]"}`} />
            {item}
          </li>
        ))}
      </ul>
      <a
        href={href}
        className={`mt-8 cursor-pointer rounded-xl px-4 py-2.5 text-center text-[0.92rem] font-semibold no-underline transition-colors duration-200 ${
          emphasis
            ? "bg-spring text-ink hover:bg-canvas"
            : "bg-canvas text-ink hover:bg-spring"
        }`}
      >
        {cta}
      </a>
    </article>
  );
}

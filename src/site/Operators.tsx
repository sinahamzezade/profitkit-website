import { FACES } from "@/site/media";
import { Portrait } from "@/site/Portrait";

/*
  Who this is for — deliberately not testimonials.

  The portraits are anonymous operator stills and the captions describe shapes of
  business, not people. Profitkit has not shipped, so attributing quotes and names
  to these faces would be inventing customer endorsements. landing.md also rules a
  testimonials carousel out for this page. This band does the same job honestly:
  a reader recognises their own store and keeps scrolling.
*/
const OPERATORS = [
  {
    shape: "Two-person studio",
    detail:
      "400 SKUs, one supplier, no analyst. The cost estimate is a guess and it needs to be a good one.",
  },
  {
    shape: "Heavy goods, thin margin",
    detail:
      "Furniture and textiles, where a single shipping label decides whether the order was worth taking.",
  },
  {
    shape: "Discount-led growth",
    detail:
      "Codes running most months, and no clear read on which ones paid for themselves.",
  },
  {
    shape: "High-return category",
    detail:
      "Apparel and homeware, where a fifth of revenue comes back and reasons are rarely recorded.",
  },
];

export function Operators() {
  return (
    <section className="border-t border-rule bg-surface/60 py-16 md:py-24">
      <div className="wrap">
        <div className="max-w-[44ch]">
          <p className="eyebrow">Who it is for</p>
          <h2 className="font-display mt-4 text-3xl font-semibold text-ink md:text-4xl">
            Stores where one product can eat the month.
          </h2>
        </div>

        {/* Two-up on tablet, four-up on desktop — portraits stay square. */}
        <ul className="mt-12 m-0 grid list-none grid-cols-1 gap-x-8 gap-y-10 p-0 sm:grid-cols-2 lg:grid-cols-4">
          {OPERATORS.map((op, i) => (
            <li key={op.shape}>
              <Portrait
                src={FACES[i % FACES.length].src}
                alt={FACES[i % FACES.length].alt}
                className="size-24"
              />
              <h3 className="font-display mt-5 text-base font-semibold text-ink">
                {op.shape}
              </h3>
              <p className="mt-2 max-w-[32ch] text-sm leading-relaxed text-ink-soft">
                {op.detail}
              </p>
            </li>
          ))}
        </ul>

        <p className="mt-12 max-w-[58ch] border-t border-rule pt-5 text-xs leading-relaxed text-ink-soft">
          Portraits are illustrative. Profitkit is new and has no customer
          testimonials to show yet — when it does, they will carry names.
        </p>
      </div>
    </section>
  );
}

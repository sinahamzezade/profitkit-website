/*
  Who this is for.

  Was four portraits with captions; now typography only. The captions were always
  doing the work — they describe shapes of business rather than people, which is
  what lets this section answer "is this aimed at me" without inventing customer
  endorsements for an app that has not shipped.

  Numbered rows rather than a card grid, matching the costs ledger, so the page
  keeps one structural vocabulary.
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
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[22rem_minmax(0,1fr)] lg:gap-16">
          <div className="lg:pt-2">
            <p className="eyebrow">Who it is for</p>
            <h2 className="font-display mt-4 max-w-[24ch] text-3xl font-semibold text-ink md:text-4xl">
              Stores where one product can eat the month.
            </h2>
          </div>

          <ul className="m-0 grid list-none grid-cols-1 gap-x-12 gap-y-0 p-0 sm:grid-cols-2">
            {OPERATORS.map((op, i) => (
              <li key={op.shape} className="border-t border-rule py-6">
                <span className="num text-xs text-ink-soft">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display mt-2 text-base font-semibold text-ink">
                  {op.shape}
                </h3>
                <p className="mt-2 max-w-[34ch] text-sm leading-relaxed text-ink-soft">
                  {op.detail}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

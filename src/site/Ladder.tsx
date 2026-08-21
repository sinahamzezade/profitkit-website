/*
  The method, and the objection it answers: "I don't have my costs in a spreadsheet."
  You don't need them. The ladder resolves each product's cost at the most precise
  rung available and says which rung it used, so a rough answer arrives first and
  gets sharper as you feed it.

  Zig-zag rather than a card row: rungs on the left, the guarantee on the right.
*/
const RUNGS = [
  {
    rung: "Per variant",
    detail: "A cost you typed or imported for that exact variant. Nothing outranks it.",
  },
  {
    rung: "Shopify's cost field",
    detail: "Used when it is filled in — for most stores that is a small minority of variants.",
  },
  {
    rung: "Per supplier",
    detail: "One percentage for everything from a vendor. Most catalogues have three or four cost tiers, not one per product.",
  },
  {
    rung: "Whole catalogue",
    detail: "A single percentage of price. This is where every store starts, and it is enough to rank losers correctly.",
  },
];

export function Ladder() {
  return (
    <section id="method" className="border-t border-rule bg-surface/60 py-16 md:py-24">
      <div className="wrap">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-20">
          <div>
            <h2 className="font-display max-w-[26ch] text-3xl font-semibold text-ink md:text-4xl">
              You do not need your costs ready.
            </h2>
            <p className="mt-4 max-w-[58ch] text-sm leading-relaxed text-ink-soft">
              Give it one number — roughly what a product costs you as a share of its
              price — and every figure on every screen becomes real. Refine it later,
              supplier by supplier, or upload a cost sheet when you have one.
            </p>

            <ol className="mt-10 m-0 list-none p-0">
              {RUNGS.map((r, i) => (
                <li
                  key={r.rung}
                  className="grid grid-cols-[1.75rem_minmax(0,1fr)] gap-x-6 border-t border-rule py-5 last:border-b"
                >
                  <span className="num text-xs text-ink-soft">{i + 1}</span>
                  <div>
                    <h3 className="text-sm font-semibold text-ink">{r.rung}</h3>
                    <p className="mt-1 max-w-[54ch] text-sm leading-relaxed text-ink-soft">
                      {r.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="lg:pt-16">
            <div className="border-l-2 border-loss pl-6">
              <p className="font-display text-xl font-semibold text-ink">
                Every row says how it was costed.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                A margin built on a catalogue-wide guess is labelled as one. A margin
                built on a real per-variant cost is labelled as that. You always know
                how much weight a number can carry, which is the difference between a
                report and a decision.
              </p>
            </div>

            <div className="mt-10 border-t border-rule pt-6">
              <p className="eyebrow">The formula, in full</p>
              <p className="num mt-3 text-xs leading-relaxed text-ink">
                revenue − discounts − cost of goods − payment fees − shipping gap −
                refunds
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                Contribution margin. Not gross margin, not revenue with a haircut. What
                the product actually left behind.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

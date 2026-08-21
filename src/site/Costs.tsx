/*
  What revenue hides. A ledger, not a card grid — four hairline rows, each naming
  the cost, what Shopify actually gives you, and what Profitkit does about it.
  The honesty here is the sales pitch: two of these four are things Shopify
  genuinely cannot tell anyone.
*/
const COSTS = [
  {
    name: "Cost of goods",
    shopify: "There is a cost field. Almost nobody fills it in.",
    fix: "Start with one percentage for the whole catalogue, then sharpen it per supplier when you care to.",
  },
  {
    name: "Payment fees",
    shopify:
      "Reported for Shopify Payments only — and only once a payout settles.",
    fix: "Set a rate per gateway you actually use. Without one, every non-Shopify-Payments order looks free to process.",
  },
  {
    name: "Shipping",
    shopify:
      "What fulfilment costs you is absent from the API. Not empty — absent.",
    fix: "You supply one figure per order. Until you do, shipping counts as nothing rather than as profit.",
  },
  {
    name: "Refunds",
    shopify: "The amount is there. The reason usually is not.",
    fix: "Refunds come off the line they belong to, and the report says plainly how much came back unexplained.",
  },
];

export function Costs() {
  return (
    <section className="wrap py-16 md:py-24">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[20rem_minmax(0,1fr)] lg:gap-16">
        <div className="lg:pt-2">
          <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">
            Four costs Shopify never subtracts.
          </h2>
          <p className="mt-4 max-w-[38ch] text-sm leading-relaxed text-ink-soft">
            Your dashboard stops at revenue. The rest lives in a supplier
            invoice, a payout summary, a shipping label, and a refund you would
            rather forget.
          </p>
        </div>

        <div>
          <ul className="m-0 list-none p-0">
            {COSTS.map((cost, i) => (
              <li
                key={cost.name}
                className="grid grid-cols-1 gap-x-8 gap-y-2 border-t border-rule py-6 last:border-b sm:grid-cols-[1.75rem_11rem_minmax(0,1fr)]"
              >
                <span className="num text-xs text-ink-soft">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-lg font-semibold text-ink">
                  {cost.name}
                </h3>
                <div className="max-w-[58ch]">
                  <p className="text-sm leading-relaxed text-ink">
                    {cost.shopify}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {cost.fix}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

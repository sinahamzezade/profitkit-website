/*
  Honest scope. This section exists because the alternative — discovering the limit
  after installing — is how analytics tools lose trust. Every item here is a real
  constraint of the Shopify Admin API or of this app, stated plainly.
*/
const LIMITS = [
  {
    claim: "History starts at 60 days",
    detail:
      "Shopify's read_orders scope cannot see further back without a written application. History accumulates forward from the day you install, so the sooner it is on, the more it knows.",
  },
  {
    claim: "Real payment fees, Shopify Payments only",
    detail:
      "Every other gateway reports nothing. You set a rate and the figure is labelled as modelled — never presented as settled fact.",
  },
  {
    claim: "Shipping cost is always your number",
    detail:
      "It does not exist in the API. Until you supply it the shipping term is zero, not a guess in your favour.",
  },
  {
    claim: "Most refunds carry no reason",
    detail:
      "Only returns processed through Shopify's Returns flow record one. A refund issued from the order page has none, and the report says what share that is instead of inventing categories.",
  },
];

export function Limits() {
  return (
    <section id="limits" className="wrap py-16 md:py-24">
      <div className="max-w-[46ch]">
        <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">
          What it cannot know.
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-ink-soft">
          Stated here rather than discovered later. If a number is an estimate, the app
          says so on the row it appears in.
        </p>
      </div>

      <dl className="mt-12 grid grid-cols-1 gap-x-16 gap-y-0 md:grid-cols-2">
        {LIMITS.map((limit) => (
          <div key={limit.claim} className="border-t border-rule py-6">
            <dt className="font-display text-base font-semibold text-ink">{limit.claim}</dt>
            <dd className="mt-2 max-w-[52ch] text-sm leading-relaxed text-ink-soft">
              {limit.detail}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

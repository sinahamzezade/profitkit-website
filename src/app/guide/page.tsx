import type { Metadata } from "next";
import Link from "next/link";

import { Foot } from "@/site/Foot";
import { Mast } from "@/site/Mast";

export const metadata: Metadata = {
  title: "How to use Redline",
  description:
    "Install, give it one cost estimate, read the ranking, then sharpen the costs that matter. The whole walkthrough in seven steps.",
};

/*
  The page the app's onboarding card links to (see profikit/app/docs.ts).

  Written as steps in the order a merchant actually meets them, not as a feature
  tour. Each step says what to do and what the screen will tell you afterwards,
  because the most common confusion with this app is not "where is the button" —
  it is "why is this number an estimate".
*/

type Step = {
  n: string;
  title: string;
  body: string;
  note?: string;
};

const STEPS: Step[] = [
  {
    n: "01",
    title: "Install, then wait about a minute",
    body: "Redline reads the last 60 days of orders and your whole product catalogue on install. That is Shopify's limit, not ours — read_orders cannot see further back without a written application. History accumulates forward from the day you install.",
    note: "The dashboard fills in on its own. You do not need to refresh.",
  },
  {
    n: "02",
    title: "Give it one cost number",
    body: "On the home screen, enter roughly what a product costs you as a share of its price. 45% is a common starting point. This one number applies to every product that has no cost of its own, and it is enough to rank your losers correctly.",
    note: "Shopify has a cost field, but almost no store fills it in. That is why this exists.",
  },
  {
    n: "03",
    title: "Read the ranking, not the revenue",
    body: "Product margin lists every product by what it actually left behind. Each row draws revenue as a bar split into cost of goods, payment fees, shipping and refunds; the unfilled part is what you kept. When the costs run past the revenue line, that product sold at a loss.",
    note: "Rows built entirely on measured data are marked. Everything else says which rung of the cost ladder supplied its number.",
  },
  {
    n: "04",
    title: "Fix the two costs Shopify cannot supply",
    body: "Open Cost settings. Payment fees are reported for Shopify Payments only, so set a rate for every other gateway you take money through — without one, those orders look free to process. Shipping cost is absent from Shopify's API entirely, so enter one average figure per order.",
    note: "Until you supply shipping cost, the shipping term counts as zero rather than as profit in your favour.",
  },
  {
    n: "05",
    title: "Sharpen only the costs that matter",
    body: "Look at the ranking and find the products where the answer would change if the cost were exact. Set those per supplier in Cost settings, or upload a cost sheet. Most catalogues have three or four cost tiers, not one per product.",
  },
  {
    n: "06",
    title: "Check what discounts and refunds took",
    body: "Discounts & refunds shows month by month what left through codes and returns, and tells you whether each code paid for itself against a no-code baseline. It also states plainly how much refunded money carries no reason at all — usually most of it, because only returns processed through Shopify's Returns flow record one.",
  },
  {
    n: "07",
    title: "Export it when someone asks",
    body: "Pro adds a CSV your accountant can read without translation, plus full history rather than the last 90 days. Everything else — the ranking, the loss attribution, the erosion report, the whole cost ladder — is in the free tier.",
  },
];

const LIMITS = [
  "History starts at 60 days and grows forward. Nothing can recover what came before install.",
  "Real payment fees exist for Shopify Payments only. Every other gateway is a rate you set.",
  "Shipping cost is always your figure. It is not in the API.",
  "Most refunds carry no reason. The report says what share, rather than inventing categories.",
];

export default function GuidePage() {
  return (
    <div className="flex min-h-full flex-col">
      <Mast />

      <main className="wrap flex-1 py-16 md:py-24">
        <div className="max-w-[70ch]">
          <p className="eyebrow">Walkthrough</p>
          <h1 className="font-display mt-4 text-4xl font-semibold text-ink md:text-5xl">
            How to use Redline
          </h1>
          <p className="mt-6 max-w-[58ch] text-base leading-relaxed text-ink">
            Seven steps, in the order you meet them. The whole thing takes an
            afternoon, and most of that is deciding how exact you want your
            costs to be.
          </p>
        </div>

        <ol className="mt-16 m-0 max-w-[76ch] list-none p-0">
          {STEPS.map((step) => (
            <li
              key={step.n}
              className="grid grid-cols-1 gap-x-8 gap-y-3 border-t border-rule py-8 last:border-b sm:grid-cols-[3rem_minmax(0,1fr)]"
            >
              <span className="num text-sm text-ink-soft">{step.n}</span>
              <div>
                <h2 className="font-display text-xl font-semibold text-ink">
                  {step.title}
                </h2>
                <p className="mt-3 max-w-[62ch] text-sm leading-relaxed text-ink-soft">
                  {step.body}
                </p>
                {step.note && (
                  <p className="mt-3 max-w-[62ch] border-l-2 border-loss pl-4 text-sm leading-relaxed text-ink">
                    {step.note}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ol>

        <section className="mt-20 max-w-[70ch]">
          <h2 className="font-display text-2xl font-semibold text-ink">
            Four things it will never guess for you
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft">
            Stated here so you meet them now rather than halfway through a
            month-end.
          </p>
          <ul className="mt-6 m-0 list-none p-0">
            {LIMITS.map((limit) => (
              <li
                key={limit}
                className="border-t border-rule py-4 text-sm leading-relaxed text-ink-soft last:border-b"
              >
                {limit}
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-16 flex flex-wrap items-center gap-4">
          <Link href="/#install" className="btn-solid">
            Install on Shopify
          </Link>
          <Link
            href="/"
            className="text-sm text-steel underline decoration-rule underline-offset-4 transition-colors duration-200 hover:text-ink"
          >
            Back to Redline
          </Link>
        </div>
      </main>

      <Foot />
    </div>
  );
}

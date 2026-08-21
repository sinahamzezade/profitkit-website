import Image from "next/image";

import { SCENES } from "@/site/media";

/*
  What the app looks like inside Shopify admin.

  Coded rather than screenshotted, deliberately: a screenshot goes stale the day
  the UI changes, softens on retina, and cannot be themed. This is a faithful
  recreation of the real Product margin view — the same columns, the same
  waterfall bar, the same "estimated" honesty labels.

  Every figure ties out: margin = revenue − discounts − cogs − fees − shipping −
  refunds, to the cent, on all three rows. A marketing mock that does not
  reconcile is the fastest way to lose a numerate buyer.
*/

type Row = {
  name: string;
  units: number;
  revenue: number;
  discounts: number;
  cogs: number;
  fees: number;
  shipping: number;
  refunds: number;
};

const ROWS: Row[] = [
  {
    name: "Wool Blanket",
    units: 41,
    revenue: 3196.47,
    discounts: 402.18,
    cogs: 1918.0,
    fees: 92.7,
    shipping: 138.46,
    refunds: 1075.0,
  },
  {
    name: "Alpine Tote",
    units: 63,
    revenue: 2883.89,
    discounts: 96.4,
    cogs: 1153.56,
    fees: 83.63,
    shipping: 84.96,
    refunds: 0,
  },
  {
    name: "Desk Organizer",
    units: 19,
    revenue: 424.42,
    discounts: 0,
    cogs: 190.99,
    fees: 12.31,
    shipping: 4.13,
    refunds: 0,
  },
];

const COST_KEYS = [
  { key: "cogs", label: "Cost of goods", tone: "var(--ink)" },
  { key: "fees", label: "Payment fees", tone: "var(--steel)" },
  { key: "shipping", label: "Shipping", tone: "var(--profit)" },
  { key: "refunds", label: "Refunds", tone: "var(--loss)" },
] as const;

function money(n: number) {
  const abs = Math.abs(n).toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return `${n < 0 ? "−$" : "$"}${abs}`;
}

function margin(r: Row) {
  return r.revenue - r.discounts - r.cogs - r.fees - r.shipping - r.refunds;
}

/** One product row: name, figures, and revenue drawn as a flattened waterfall. */
function ProductRow({ row }: { row: Row }) {
  const m = margin(row);
  const costs = COST_KEYS.map((c) => ({ ...c, value: row[c.key] }));
  const totalCost = costs.reduce((s, c) => s + c.value, 0) + row.discounts;
  // The track spans whichever is larger, so a product that spent more than it
  // earned still fits and the revenue line falls short of the end.
  const span = Math.max(row.revenue, totalCost);
  const loss = m < 0;

  return (
    <div className="grid grid-cols-[minmax(0,1fr)_7rem] items-center gap-4 border-t border-rule/70 py-3.5 sm:grid-cols-[11rem_minmax(0,1fr)_7rem]">
      <div className="min-w-0">
        <p className="truncate text-sm font-medium text-ink">{row.name}</p>
        <p className="num text-[0.6875rem] text-ink-soft">
          {row.units} units kept
        </p>
      </div>

      <div className="col-span-2 sm:col-span-1">
        <div className="flex h-2.5 w-full overflow-hidden bg-paper-deep">
          {costs
            .filter((c) => c.value > 0)
            .map((c) => (
              <span
                key={c.key}
                title={c.label}
                style={{
                  width: `${(c.value / span) * 100}%`,
                  background: c.tone,
                }}
              />
            ))}
        </div>
        <div className="mt-1.5 flex items-center gap-3">
          <span className="num text-[0.6875rem] text-ink-soft">
            {money(row.revenue)} revenue
          </span>
          {row.refunds > 0 && (
            <span className="num text-[0.6875rem] text-loss">
              {money(row.refunds)} returned
            </span>
          )}
        </div>
      </div>

      <div className="text-right">
        <p className={`num text-sm ${loss ? "text-loss" : "text-ink"}`}>
          {money(m)}
        </p>
        <p
          className={`num text-[0.6875rem] ${loss ? "text-loss" : "text-ink-soft"}`}
        >
          {loss ? "loss" : `${((m / row.revenue) * 100).toFixed(1)}%`}
        </p>
      </div>
    </div>
  );
}

export function DashPreview() {
  const totalRevenue = ROWS.reduce((s, r) => s + r.revenue, 0);
  const totalMargin = ROWS.reduce((s, r) => s + margin(r), 0);
  const losers = ROWS.filter((r) => margin(r) < 0).length;
  const returned = ROWS.reduce((s, r) => s + r.refunds, 0);

  return (
    <section
      aria-labelledby="dash-title"
      className="border-t border-rule py-16 md:py-24"
    >
      <div className="wrap">
        {/* Caption block sits left; the product frame takes the wider right column. */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[19rem_minmax(0,1fr)] lg:gap-14">
          <div className="lg:pt-2">
            <p className="eyebrow">Inside Shopify admin</p>
            <h2
              id="dash-title"
              className="font-display mt-4 text-3xl font-semibold text-ink md:text-4xl"
            >
              It lives where you already work.
            </h2>
            <p className="mt-4 max-w-[36ch] text-sm leading-relaxed text-ink-soft">
              Profitkit is an embedded app, not another tab with another login.
              The ranking, the cost settings and the export all sit inside your
              admin.
            </p>

            {/* A real workspace still, cropped tight — context without decoration. */}
            <div className="relative mt-8 aspect-[4/3] w-full overflow-hidden bg-paper-deep">
              <Image
                src={SCENES.desk.src}
                alt={SCENES.desk.alt}
                fill
                sizes="(min-width: 1024px) 19rem, 100vw"
                className="object-cover grayscale contrast-[1.05]"
              />
            </div>
          </div>

          {/* Admin chrome: enough to read as Shopify, not a pixel-perfect forgery. */}
          <div className="border border-ink/12 bg-surface">
            <div className="flex items-center gap-3 border-b border-rule/70 px-4 py-2.5">
              <span aria-hidden="true" className="flex gap-1.5">
                <span className="size-2 bg-rule" />
                <span className="size-2 bg-rule" />
                <span className="size-2 bg-rule" />
              </span>
              <span className="num text-[0.6875rem] text-ink-soft">
                admin.shopify.com / apps / profitkit
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-[8.5rem_minmax(0,1fr)]">
              {/* Nav rail — the app's real four items. */}
              <nav
                aria-hidden="true"
                className="hidden border-r border-rule/70 px-3 py-4 sm:block"
              >
                {[
                  "Home",
                  "Product margin",
                  "Discounts & refunds",
                  "Cost settings",
                ].map((item, i) => (
                  <p
                    key={item}
                    className={`px-2 py-1.5 text-[0.6875rem] ${
                      i === 1
                        ? "border-l-2 border-loss bg-paper font-medium text-ink"
                        : "text-ink-soft"
                    }`}
                  >
                    {item}
                  </p>
                ))}
              </nav>

              <div className="min-w-0 p-5 md:p-6">
                <h3 className="font-display text-lg font-semibold text-ink">
                  Product margin
                </h3>

                {/* The honesty banner the real app shows until costs are entered. */}
                <div className="mt-3 border-l-2 border-loss bg-paper px-3 py-2">
                  <p className="text-[0.6875rem] leading-relaxed text-ink">
                    Shipping cost is never available from Shopify and payment
                    fees are only reported for Shopify Payments — so almost
                    every figure here includes at least one estimate.
                  </p>
                </div>

                <dl className="mt-5 grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4">
                  {[
                    { label: "Revenue", value: money(totalRevenue) },
                    { label: "Contribution margin", value: money(totalMargin) },
                    {
                      label: "Losing money",
                      value: `${losers} of ${ROWS.length}`,
                    },
                    { label: "Given back", value: money(returned), loss: true },
                  ].map((kpi) => (
                    <div key={kpi.label}>
                      <dt className="text-[0.625rem] uppercase tracking-[0.1em] text-ink-soft">
                        {kpi.label}
                      </dt>
                      <dd
                        className={`num mt-1 text-base ${kpi.loss ? "text-loss" : "text-ink"}`}
                      >
                        {kpi.value}
                      </dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-6">
                  {ROWS.map((row) => (
                    <ProductRow key={row.name} row={row} />
                  ))}
                  <div className="border-t border-rule/70" />
                </div>

                {/* Legend, so the bar is readable without a tooltip. */}
                <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5">
                  {COST_KEYS.map((c) => (
                    <li key={c.key} className="flex items-center gap-1.5">
                      <span
                        aria-hidden="true"
                        className="size-2"
                        style={{ background: c.tone }}
                      />
                      <span className="text-[0.625rem] text-ink-soft">
                        {c.label}
                      </span>
                    </li>
                  ))}
                  <li className="flex items-center gap-1.5">
                    <span aria-hidden="true" className="size-2 bg-paper-deep" />
                    <span className="text-[0.625rem] text-ink-soft">
                      Unfilled is what is kept
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

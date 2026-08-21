/*
  Two plans, and the free one is finished software rather than a crippled demo.
  The paid tier buys depth — full history and the accountant export — not the
  removal of an artificial lock. Two columns split asymmetrically, no card
  chrome, no "most popular" sticker.
*/
const FREE = [
  "Every product ranked by contribution margin",
  "Loss attribution — which cost broke each product",
  "Discount and refund erosion, month by month",
  "The full cost ladder, including per-supplier overrides",
  "Last 90 days",
];

const PRO = [
  "Everything in Free",
  "Full history, accumulating from install",
  "Accountant-ready CSV export",
  "Per-gateway fee rules and shipping cost",
];

function Check({ className = "" }: { className?: string }) {
  // Inline SVG primitive rather than an icon dependency, and never an emoji.
  return (
    <svg
      viewBox="0 0 16 16"
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M3 8.5 L6.2 11.5 L13 4.5" strokeLinecap="square" />
    </svg>
  );
}

export function Plans() {
  return (
    <section id="pricing" className="border-t border-rule py-16 md:py-24">
      <div className="wrap">
        <div className="max-w-[42ch]">
          <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">
            Two plans. The free one is finished.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-ink-soft">
            No trial countdown, no feature held hostage. Free gives you the whole
            method on a shorter window.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-16">
          <div className="border-t-2 border-ink pt-6">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="font-display text-xl font-semibold text-ink">Free</h3>
              <p className="num text-2xl text-ink">$0</p>
            </div>
            <p className="mt-2 text-sm text-ink-soft">Last 90 days of orders.</p>
            <ul className="mt-6 m-0 list-none space-y-3 p-0">
              {FREE.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-ink-soft">
                  <Check className="mt-1 size-3.5 shrink-0 text-ink" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t-2 border-loss pt-6">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="font-display text-xl font-semibold text-ink">Pro</h3>
              <p className="num text-2xl text-ink">
                $29
                <span className="text-sm text-ink-soft"> / month</span>
              </p>
            </div>
            <p className="mt-2 text-sm text-ink-soft">
              Full history and the export your accountant asks for.
            </p>
            <ul className="mt-6 m-0 list-none space-y-3 p-0">
              {PRO.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-ink-soft">
                  <Check className="mt-1 size-3.5 shrink-0 text-loss" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#install" className="btn-solid">
                Install on Shopify
              </a>
              <span className="num text-xs text-ink-soft">
                Start free · upgrade inside the app
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

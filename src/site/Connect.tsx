const PILLS = [
  "Shopify",
  "Stripe",
  "Shop Pay",
  "Xero",
  "Sheets",
  "Carriers",
  "CSV",
  "Refunds",
  "Discounts",
  "Inventory cost",
];

export function Connect() {
  return (
    <section className="bg-wash px-5 py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-12 items-center gap-10">
        <div className="col-span-12 md:col-span-5">
          <h2 className="font-display text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold">
            Plugs into the money you already move
          </h2>
          <p className="mt-4 max-w-[36ch] text-mute">
            Read-only orders, products, inventory. Remainder math lives here —
            not in another pixel.
          </p>
          <a
            href="#install"
            className="mt-8 inline-flex cursor-pointer rounded-xl bg-spring px-5 py-3 text-[0.95rem] font-semibold text-ink no-underline transition-colors duration-200 hover:bg-forest hover:text-canvas"
          >
            See the scopes
          </a>
        </div>
        <div className="col-span-12 flex flex-wrap gap-3 md:col-span-7 md:col-start-6">
          {PILLS.map((name, i) => (
            <span
              key={name}
              className={`rounded-full bg-white px-5 py-2.5 text-[0.9rem] font-medium lift ${i % 3 === 0 ? "md:translate-y-2" : i % 3 === 1 ? "md:-translate-y-1" : ""}`}
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

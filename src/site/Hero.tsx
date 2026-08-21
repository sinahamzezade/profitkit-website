/*
  Hero budget is strict (landing.md): brand wordmark → one headline → one sentence
  → one CTA group. No stats strip, no pill cluster, no promo chip, no card. The
  product visual is the full-bleed band immediately below, not an inset here.

  Asymmetric rather than centred: the wordmark and headline hold the left twelve
  columns, the framing note sits low and right against deliberate white space.
*/
export function Hero() {
  return (
    <section className="wrap pt-16 pb-14 md:pt-24 md:pb-20">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-16">
        <div className="max-w-[54rem]">
          <p className="eyebrow rise" style={{ ["--rise-delay" as string]: "60ms" }}>
            Contribution margin for Shopify
          </p>

          {/* Brand sits above the headline in scale — remove the nav and this page
              still reads as Profitkit. */}
          <h1
            className="rise font-display mt-5 font-semibold text-ink"
            style={{
              ["--rise-delay" as string]: "160ms",
              fontSize: "clamp(3.2rem, 2rem + 8vw, 7.5rem)",
            }}
          >
            Profitkit
          </h1>

          <p
            className="rise font-display mt-6 max-w-[38ch] font-semibold text-ink"
            style={{
              ["--rise-delay" as string]: "260ms",
              fontSize: "clamp(1.85rem, 1.2rem + 2.4vw, 3.15rem)",
            }}
          >
            Your best seller might be your <span className="text-loss">worst product</span>.
          </p>

          <p
            className="rise mt-6 max-w-[62ch] text-ink-soft"
            style={{ ["--rise-delay" as string]: "380ms" }}
          >
            Shopify ranks products by revenue. Profitkit ranks them by what is left
            after cost of goods, payment fees, shipping and refunds. The order changes,
            and the product at the bottom is usually a surprise.
          </p>

          <div
            className="rise mt-9 flex flex-wrap items-center gap-4"
            style={{ ["--rise-delay" as string]: "380ms" }}
          >
            <a href="#install" className="btn-solid">
              Install on Shopify
            </a>
            <span className="num text-xs text-ink-soft">Free tier · no card</span>
          </div>
        </div>

        {/* Low-right framing note: fills the asymmetric column without becoming a
            stats strip or a badge. */}
        <div className="lg:self-end">
          <div className="border-t border-ink pt-4">
            <p className="max-w-[34ch] text-sm leading-relaxed text-ink-soft">
              Built for stores doing real volume on thin margins — where one heavy,
              discounted, frequently-returned product quietly eats the month.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

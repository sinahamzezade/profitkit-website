/*
  Hero budget is strict (landing.md): brand wordmark → one headline → one sentence
  → one CTA group. No stats strip, no pill cluster, no promo chip, no card.

  The right column now carries a figure as well as the framing note. landing.md says
  the product visual is the full-bleed band below and not an inset here, and that
  still holds: MarginSpread has no container, no labels and no money on it, so the
  band remains the only place the product is actually demonstrated.

  Asymmetric rather than centred: the wordmark and headline hold the left twelve
  columns, the framing note sits low and right against deliberate white space.
*/
import { MarginSpread } from "./MarginSpread";

export function Hero() {
  return (
    <section className="wrap pt-16 pb-14 md:pt-24 md:pb-20">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-16">
        <div className="max-w-[54rem]">
          <p className="eyebrow rise" style={{ ["--rise-delay" as string]: "60ms" }}>
            Contribution margin for Shopify
          </p>

          {/* Brand sits above the headline in scale — remove the nav and this page
              still reads as Redline. */}
          <h1
            className="rise font-display mt-5 font-semibold text-ink"
            style={{
              ["--rise-delay" as string]: "160ms",
              fontSize: "clamp(3.2rem, 2rem + 8vw, 7.5rem)",
            }}
          >
            Redline
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
            Shopify ranks products by revenue. Redline ranks them by what is left
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

        {/* The right column: figure above, framing note below, both hanging off the
            baseline of the left column. The figure carries no container and no
            numbers, so the column still reads as white space with a mark in it
            rather than the stats strip landing.md rules out. */}
        <div className="flex flex-col justify-end gap-10">
          {/*
            Capped below `lg`. The column is 18rem on desktop but full width when the
            grid collapses, and an unconstrained figure rendered ~375px tall on a
            phone — taller than the headline, and it pushed the CTA and the framing
            note off the first screen. It stays subordinate to the type at every
            width; the band below is still where the product gets demonstrated.
          */}
          <div
            className="rise max-w-[12rem] lg:max-w-none"
            style={{ ["--rise-delay" as string]: "500ms" }}
          >
            <MarginSpread />
          </div>

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

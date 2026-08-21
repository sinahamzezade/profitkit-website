/*
  The signature visual, restored from the first version of this page: the same six
  products ranked twice — by revenue, then by what survives cost of goods, payment
  fees, shipping and refunds. The crossing lines are the entire argument.

  Deliberately a server component. Pair-hover is CSS :has() on a shared data-p,
  the sort is pure computation, and the link draw is a CSS animation. That keeps
  the page's heaviest visual at zero client JavaScript.

  Link geometry is computed from row indices rather than measured from the DOM, so
  there is no ResizeObserver and nothing to desync. See the note on ROW for why the
  row height is pinned rather than left to the grid.
*/

type Product = {
  name: string;
  revenue: number;
  margin: number;
};

const PRODUCTS: Product[] = [
  { name: "Wool Blanket", revenue: 3196.47, margin: -429.87 },
  { name: "Alpine Tote", revenue: 2883.89, margin: 1465.34 },
  { name: "Cutting Board", revenue: 2051.62, margin: 1012.17 },
  { name: "Throw Pillow", revenue: 1384.48, margin: -169.34 },
  { name: "Ceramic Mug", revenue: 1203.72, margin: 213.87 },
  { name: "Desk Organizer", revenue: 424.42, margin: 216.99 },
];

/*
  Rows are a fixed pixel height and the link canvas is sized to match exactly.

  The first attempt let the grid decide: rows sized naturally and the SVG used
  h-full. Grid stretch made every cell as tall as the row box rather than as tall
  as its content, so the viewBox spread six rows across 528px of cell while the
  rows themselves occupied 290px — every curve landed below its row. Pinning the
  row height removes the inference entirely.
*/
const ROW = 48;

function money(n: number) {
  const abs = Math.abs(n).toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  // Minus sign, not hyphen — it sits on the digit baseline in tabular figures.
  return `${n < 0 ? "−$" : "$"}${abs}`;
}

const byRevenue = [...PRODUCTS].sort((a, b) => b.revenue - a.revenue);
const byMargin = [...PRODUCTS].sort((a, b) => b.margin - a.margin);
const marginRank = new Map(byMargin.map((p, i) => [p.name, i]));
const productId = new Map(PRODUCTS.map((p, i) => [p.name, i]));

/*
  Control points sit at mid-width, same x, opposite y. That is the bump-chart S:
  the whole vertical travel is spread across the gutter instead of collapsing into
  a near-vertical tangle at the centre (the 42/58 pair did that — 16% of a 12rem
  column is ~22px, and --steel at 0.62 on --band vanished there).
*/
function linkPath(from: number, to: number) {
  const y1 = from * ROW + ROW / 2;
  const y2 = to * ROW + ROW / 2;
  return `M 0 ${y1} C 50 ${y1}, 50 ${y2}, 100 ${y2}`;
}

function Row({
  pid,
  rank,
  name,
  figure,
  isLoss,
  align = "left",
}: {
  pid: number;
  rank: number;
  name: string;
  figure: string;
  isLoss: boolean;
  align?: "left" | "right";
}) {
  const right = align === "right";
  return (
    <div
      data-p={pid}
      tabIndex={0}
      style={{ height: ROW }}
      className={`rerank-row flex cursor-pointer items-center gap-3 border-t border-white/10 px-3 ${
        right ? "flex-row-reverse text-right" : ""
      }`}
    >
      <span className="num w-5 shrink-0 text-xs text-white/35">{rank}</span>
      <span className="min-w-0 flex-1 truncate text-sm text-ink-inverse">{name}</span>
      <span
        className={`num shrink-0 text-sm ${isLoss ? "text-loss-soft" : "text-ink-inverse/85"}`}
      >
        {figure}
      </span>
      {/* Colour is never the only loss signal. */}
      {isLoss && (
        <span className="num shrink-0 text-[0.625rem] uppercase tracking-[0.12em] text-loss-soft">
          loss
        </span>
      )}
    </div>
  );
}

const pairHover = PRODUCTS.map(
  (_, i) => `
    .rerank:has([data-p="${i}"]:is(:hover, :focus-visible)) [data-p="${i}"] {
      opacity: 1;
    }
    .rerank:has([data-p="${i}"]:is(:hover, :focus-visible)) .rerank-row[data-p="${i}"] {
      background: rgba(255, 255, 255, 0.07);
    }
    .rerank:has([data-p="${i}"]:is(:hover, :focus-visible)) .rerank-link[data-p="${i}"] [data-draw] {
      stroke-width: 2.5px;
    }
  `,
).join("");

export function Rerank() {
  const height = PRODUCTS.length * ROW;

  return (
    <section aria-labelledby="rerank-title" className="bg-band py-14 md:py-20">
      <div className="wrap">
        <h2 id="rerank-title" className="sr-only">
          The same six products, ranked by revenue and by profit
        </h2>

        <figure className="rerank m-0">
          {/* Column headings sit outside the data, gallery-style. px-3 matches the
              rows so the labels hang over the same inset, not the outer edge. */}
          <div className="grid grid-cols-1 gap-2 md:grid-cols-[1fr_12rem_1fr] md:gap-0">
            <span className="eyebrow px-3 text-white/45">Ranked by revenue</span>
            <span aria-hidden="true" />
            <span className="eyebrow hidden px-3 text-white/45 md:block md:text-right">
              Ranked by profit
            </span>
          </div>

          {/* self-start on every cell: without it the grid stretches each column
              to the row box and the bottom rule floats away from the last row. */}
          <div className="mt-3 grid grid-cols-1 items-start md:grid-cols-[1fr_12rem_1fr]">
            <div className="border-b border-white/10">
              {byRevenue.map((p, i) => (
                <Row
                  key={p.name}
                  pid={productId.get(p.name)!}
                  rank={i + 1}
                  name={p.name}
                  figure={money(p.revenue)}
                  isLoss={false}
                />
              ))}
            </div>

            {/* The crossing links. Hidden on narrow screens, where the two stacked
                lists carry the same fact without unreadable diagonals. Negative
                inline margin pulls the path ends under each column's px-3 so the
                curve meets the figure, not the padding. */}
            <div aria-hidden="true" className="hidden md:block">
              <svg
                viewBox={`0 0 100 ${height}`}
                preserveAspectRatio="none"
                style={{ height }}
                className="relative -mx-3 w-[calc(100%+1.5rem)] overflow-visible"
              >
                {byRevenue.map((p, from) => {
                  const to = marginRank.get(p.name) ?? from;
                  const pid = productId.get(p.name)!;
                  const loss = p.margin < 0;
                  const fell = to > from;
                  const d = linkPath(from, to);
                  return (
                    <g key={p.name} data-p={pid} className="rerank-link">
                      <path d={d} fill="none" stroke="transparent" strokeWidth={16} />
                      <path
                        d={d}
                        data-draw
                        fill="none"
                        stroke={
                          loss
                            ? "var(--loss-soft)"
                            : "color-mix(in srgb, var(--ink-inverse) 70%, var(--steel))"
                        }
                        strokeWidth={fell && loss ? 2.25 : 1.6}
                        strokeOpacity={loss ? 0.95 : 0.78}
                        vectorEffect="non-scaling-stroke"
                        pathLength={1}
                        style={{
                          strokeDasharray: 1,
                          strokeDashoffset: 0,
                          animation: `draw 900ms cubic-bezier(0.2, 0.7, 0.3, 1) ${480 + from * 70}ms both`,
                        }}
                      />
                    </g>
                  );
                })}
              </svg>
            </div>

            <p className="eyebrow mt-6 px-3 text-white/45 md:hidden">Ranked by profit</p>

            <div className="border-b border-white/10">
              {byMargin.map((p, i) => (
                <Row
                  key={p.name}
                  pid={productId.get(p.name)!}
                  rank={i + 1}
                  name={p.name}
                  figure={money(p.margin)}
                  isLoss={p.margin < 0}
                  align="right"
                />
              ))}
            </div>
          </div>

          <figcaption className="mt-8 max-w-[62ch] text-sm leading-relaxed text-white/55">
            <strong className="font-semibold text-ink-inverse">
              Wool Blanket sells the most and earns the least.
            </strong>{" "}
            It ships heavy, it gets discounted, and a fifth of it comes back. Desk
            Organizer is sixth on revenue and third on profit. Revenue never showed you
            either one.
          </figcaption>
        </figure>
      </div>

      {/* Scoped keyframes: the second and last motion on this page. */}
      <style>{`
        @keyframes draw {
          from { stroke-dashoffset: 1; }
          to { stroke-dashoffset: 0; }
        }
        .rerank-row,
        .rerank-link {
          transition: opacity 180ms ease, background-color 180ms ease;
        }
        .rerank-link [data-draw] {
          transition: stroke-width 180ms ease;
        }
        .rerank:has([data-p]:is(:hover, :focus-visible)) .rerank-row,
        .rerank:has([data-p]:is(:hover, :focus-visible)) .rerank-link {
          opacity: 0.22;
        }
        ${pairHover}
        @media (prefers-reduced-motion: reduce) {
          .rerank-row,
          .rerank-link,
          .rerank-link [data-draw] {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}

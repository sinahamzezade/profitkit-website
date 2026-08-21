/*
  The signature visual, restored from the first version of this page: the same six
  products ranked twice — by revenue, then by what survives cost of goods, payment
  fees, shipping and refunds. The crossing lines are the entire argument.

  Deliberately a server component. Nothing here is interactive: the sort is pure
  computation, row hover is CSS, and the link draw is a CSS animation. That keeps
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

function Row({
  rank,
  name,
  figure,
  isLoss,
  align = "left",
}: {
  rank: number;
  name: string;
  figure: string;
  isLoss: boolean;
  align?: "left" | "right";
}) {
  const right = align === "right";
  return (
    <div
      style={{ height: ROW }}
      className={`flex items-center gap-3 border-t border-white/10 px-3 transition-colors duration-200 hover:bg-white/[0.06] ${
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

export function Rerank() {
  const height = PRODUCTS.length * ROW;

  return (
    <section aria-labelledby="rerank-title" className="bg-band py-14 md:py-20">
      <div className="wrap">
        <h2 id="rerank-title" className="sr-only">
          The same six products, ranked by revenue and by profit
        </h2>

        <figure className="m-0">
          {/* Column headings sit outside the data, gallery-style. */}
          <div className="grid grid-cols-1 gap-2 md:grid-cols-[1fr_8.5rem_1fr] md:gap-0">
            <span className="eyebrow text-white/45">Ranked by revenue</span>
            <span aria-hidden="true" />
            <span className="eyebrow hidden text-white/45 md:block md:text-right">
              Ranked by profit
            </span>
          </div>

          {/* self-start on every cell: without it the grid stretches each column
              to the row box and the bottom rule floats away from the last row. */}
          <div className="mt-3 grid grid-cols-1 items-start md:grid-cols-[1fr_8.5rem_1fr]">
            <div className="border-b border-white/10">
              {byRevenue.map((p, i) => (
                <Row
                  key={p.name}
                  rank={i + 1}
                  name={p.name}
                  figure={money(p.revenue)}
                  isLoss={false}
                />
              ))}
            </div>

            {/* The crossing links. Hidden on narrow screens, where the two stacked
                lists carry the same fact without unreadable diagonals. */}
            <div aria-hidden="true" className="hidden md:block">
              <svg
                viewBox={`0 0 100 ${height}`}
                preserveAspectRatio="none"
                style={{ height, marginTop: 1 }}
                className="w-full overflow-visible"
              >
                {byRevenue.map((p, from) => {
                  const to = marginRank.get(p.name) ?? from;
                  const y1 = from * ROW + ROW / 2;
                  const y2 = to * ROW + ROW / 2;
                  const fell = to > from;
                  return (
                    <path
                      key={p.name}
                      data-draw
                      d={`M 0 ${y1} C 42 ${y1}, 58 ${y2}, 100 ${y2}`}
                      fill="none"
                      stroke={p.margin < 0 ? "var(--loss)" : "var(--steel)"}
                      strokeWidth={fell && p.margin < 0 ? 2.5 : 1.5}
                      strokeOpacity={p.margin < 0 ? 0.95 : 0.62}
                      vectorEffect="non-scaling-stroke"
                      pathLength={1}
                      style={{
                        strokeDasharray: 1,
                        strokeDashoffset: 0,
                        animation: `draw 900ms cubic-bezier(0.2, 0.7, 0.3, 1) ${480 + from * 70}ms both`,
                      }}
                    />
                  );
                })}
              </svg>
            </div>

            <p className="eyebrow mt-6 text-white/45 md:hidden">Ranked by profit</p>

            <div className="border-b border-white/10">
              {byMargin.map((p, i) => (
                <Row
                  key={p.name}
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
      `}</style>
    </section>
  );
}

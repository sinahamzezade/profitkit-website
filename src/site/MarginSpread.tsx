/*
  Margin spread — the hero's right-column figure.

  landing.md locks two things this has to work around: the product visual is the
  edge-to-edge band below, not an inset card, and nothing in the first viewport may
  read as a stats strip. So this carries no container, no fill, no border and no
  numbers. It is a figure, not a panel: hairline bars either side of a zero axis,
  and the one product that crosses furthest into the red is the one the headline is
  about.

  It must not compete with RerankChart below, which names six real products and
  their money twice over. This is deliberately abstract — no names, no currency,
  no axis labels. It states the shape of the finding; the band states the finding.

  Server component, zero client JavaScript, and no new keyframes: the whole figure
  rides the existing `.rise` cascade as one more step. The page's motion budget
  allows four, and a per-bar draw would have been a fifth competing with the chart.
*/

/*
  Margin as a share of the largest figure on the chart, sorted the way the app sorts.
  Both sides use the same scale — two scales would let the loss side be drawn more
  dramatically than it is, which is the exact dishonesty this product exists to undo.
*/
const SPREAD = [62, 55, 48, 44, 41, 36, 33, 27, 22, 18, 12, 8, -6, -9, -14, -73];

const SCALE = 1.7;
const AXIS_X = 134;
const ROW_H = 10;
const BAR_H = 3.5;
const TOP = 8;

const VIEW_W = 260;
const VIEW_H = TOP + SPREAD.length * ROW_H + 6;

export function MarginSpread() {
  // The deepest loss: what a merchant opens the app to find.
  const worst = SPREAD.indexOf(Math.min(...SPREAD));

  return (
    <figure className="m-0">
      <svg
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        role="img"
        aria-labelledby="spread-title spread-desc"
        className="w-full"
      >
        <title id="spread-title">Products ranked by contribution margin</title>
        <desc id="spread-desc">
          Sixteen products as horizontal bars either side of a break-even line. Most
          sit to the profitable side in short bars of similar length. Four fall the
          other way, and one falls far further than the rest — the product that loses
          the most money despite selling well.
        </desc>

        {SPREAD.map((value, i) => {
          const y = TOP + i * ROW_H;
          const length = Math.abs(value) * SCALE;
          const isLoss = value < 0;

          return (
            <rect
              key={i}
              x={isLoss ? AXIS_X - length : AXIS_X}
              y={y}
              width={length}
              height={BAR_H}
              fill={
                i === worst
                  ? "var(--loss)"
                  : isLoss
                    ? "var(--loss-soft)"
                    : "var(--ink)"
              }
              /*
                The profitable mass is held back so the red reads first. Opacity
                rather than a lighter grey token, so it stays correct against the
                atmosphere gradient the section sits on.
              */
              opacity={isLoss ? 1 : 0.3}
            />
          );
        })}

        {/* Break-even. The only rule on the figure, and the only thing it asserts. */}
        <line
          x1={AXIS_X}
          y1={0}
          x2={AXIS_X}
          y2={VIEW_H}
          stroke="var(--rule)"
          strokeWidth={1}
        />

        {/*
          Ties the deepest bar to the headline. One label, no figure — a caption, not
          a stat.

          It had a dashed leader line to the bar until the rendered geometry was
          measured: the worst bar ends at x=9.9 and the label starts at x=9.9, so the
          leader was 3.9px long. A connector that short is not read as a connector,
          it is read as a smudge, and it was the reason the corner looked muddled.
          The label sits directly above the bar it names instead.
        */}
        <text
          x={AXIS_X - Math.abs(SPREAD[worst]) * SCALE}
          y={TOP + worst * ROW_H - 6}
          fill="var(--loss)"
          fontSize={9}
          letterSpacing="0.09em"
          className="num"
        >
          BEST SELLER
        </text>
      </svg>
    </figure>
  );
}

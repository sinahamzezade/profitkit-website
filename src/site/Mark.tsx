/*
  The Redline monogram.

  Inline rather than an <img> so it inherits colour and needs no second request for
  something this small. The red arm is fixed; the leg is `currentColor`, so the mark
  works on paper and on ink from one component — the supplied transparent trace set its
  leg to near-white and was therefore invisible on this site's own background.

  The glyph replaces a mark that was drawn here in code: a flat rule with a margin line
  falling beneath it. Same thesis, and the monogram keeps it — the arm is the flat
  redline, the leg is a peak that doubles as the R's stem. It also now reads as an R,
  which the drawn version never did.

  No container square. The old version sat the glyph inside an ink tile at 62%, which
  made sense when the glyph was two thin strokes; this one carries its own weight, and
  a tile would just put a box round a logo.

  viewBox is the glyph's bounding box, so it fills whatever square it is given and
  letterboxes vertically — the glyph is wider than it is tall.
*/
export function Mark({ className = "size-10" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="47 66 142 106"
      fill="none"
      className={`shrink-0 ${className}`}
    >
      {/* The arm: a flat red rule, the redline itself. */}
      <path
        fill="var(--loss)"
        d="M 50,66 L 75,90 L 151,91 L 157,100 L 155,105 L 167,123 L 179,107 L 180,91 L 175,79 L 158,67 Z"
      />
      {/* The leg: the R's stem, and a margin line peaking. */}
      <path
        fill="currentColor"
        d="M 47,172 L 80,172 L 127,130 L 130,131 L 161,172 L 189,172 L 147,112 L 113,112 Z"
      />
    </svg>
  );
}

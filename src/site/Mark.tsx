/*
  Square, radius 0, per MASTER.md — the previous mark was a rounded pill with a
  hardcoded green stroke, both of which the system rejects.

  The glyph is the product's thesis: a flat revenue rule with a margin line
  falling away beneath it. Loss red appears here as data, not as logo ornament.
*/
export function Mark({ className = "size-10" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-flex shrink-0 items-center justify-center bg-ink ${className}`}
    >
      <svg viewBox="0 0 24 24" className="size-[62%]" fill="none">
        {/* Revenue: flat, unbothered. */}
        <path d="M4 9h16" stroke="var(--ink-inverse)" strokeWidth="2" />
        {/* Margin: the same period, falling. */}
        <path d="M4 13l5 1.6 5-3.2 6 5.6" stroke="var(--loss)" strokeWidth="2" />
      </svg>
    </span>
  );
}

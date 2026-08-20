export function Mark({ className = "size-10" }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`inline-flex shrink-0 items-center justify-center rounded-full bg-ink ${className}`}
    >
      <svg viewBox="0 0 24 24" className="size-[55%]" fill="none">
        <path
          d="M6 16.5c3.2-7 8.8-7 12 0"
          stroke="#00C56A"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <path
          d="M7.5 8.5h9"
          stroke="#F7F8F4"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}

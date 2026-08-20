const MARKS = [
  "NORTHMADE",
  "KILN GOODS",
  "HARBOR CO",
  "FIELD & FORM",
  "ALPINE RACK",
  "LOOM STUDIO",
];

export function TrustStrip() {
  const loop = [...MARKS, ...MARKS];
  return (
    <section className="border-y border-ink/8 py-8">
      <p className="mb-5 text-center text-[0.8rem] font-medium tracking-wide text-mute uppercase">
        Built for catalogs Shopify already has
      </p>
      <div className="overflow-hidden">
        <div className="marquee-track flex w-max gap-16 px-8">
          {loop.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="font-display text-[1.15rem] font-extrabold tracking-[0.18em] text-ink/25"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

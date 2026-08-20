import Image from "next/image";
import { SCENES } from "@/site/media";

const CARDS = [
  {
    title: "Estimate ladder",
    body: "One catalog percent first. Vendor overrides next. Spreadsheet last. Never a 62-SKU form on day one.",
    scene: SCENES.packing,
  },
  {
    title: "Field audit",
    body: "What Shopify actually returns. Nulls become inputs. No pretending inventory cost is always there.",
    scene: SCENES.desk,
  },
  {
    title: "Window, honest",
    body: "Free reads the trailing stretch. Pro opens history. Depth added — not a locked table.",
    scene: SCENES.floor,
  },
];

export function Ops() {
  return (
    <section className="px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="max-w-[16ch] font-display text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold">
          How the remainder gets honest
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {CARDS.map((card, i) => (
            <article
              key={card.title}
              className={`overflow-hidden rounded-2xl bg-white lift ${i === 1 ? "md:-translate-y-6" : ""} ${i === 2 ? "md:translate-y-4" : ""}`}
            >
              <div className="relative h-36">
                <Image
                  src={card.scene.src}
                  alt={card.scene.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-[1.2rem] font-bold">{card.title}</h3>
                <p className="mt-2 text-[0.92rem] text-mute">{card.body}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10">
          <a
            href="#plans"
            className="inline-flex cursor-pointer rounded-xl bg-spring px-5 py-3 text-[0.95rem] font-semibold text-ink no-underline transition-colors duration-200 hover:bg-forest hover:text-canvas"
          >
            See every plan
          </a>
        </div>
      </div>
    </section>
  );
}

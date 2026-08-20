import { Receipt, Scale, Truck, Undo2 } from "lucide-react";
import Image from "next/image";
import { SKUS } from "@/site/media";

const ITEMS = [
  {
    icon: Scale,
    wash: "bg-[#F8E4E1]",
    tint: "text-[#C43C32]",
    title: "True remainder",
    body: "Revenue after discounts, minus goods, fees, shipping gap and refunds. Tax stays out.",
  },
  {
    icon: Receipt,
    wash: "bg-wash",
    tint: "text-forest",
    title: "SKU P&L",
    body: "One sortable table. Worst first. The view that tells you which listing to kill or reprice.",
  },
  {
    icon: Truck,
    wash: "bg-[#F3E2C8]",
    tint: "text-amber",
    title: "Shipping gap",
    body: "What the buyer paid versus what the carrier billed. The silent tax on oversized kits.",
  },
  {
    icon: Undo2,
    wash: "bg-[#E4EEF6]",
    tint: "text-[#2F5563]",
    title: "Return echo",
    body: "Refunds attach to the product, not a mystery bucket. Monthly drain, named.",
  },
];

export function Apart() {
  return (
    <section id="product" className="px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-12 gap-6">
          <h2 className="col-span-12 font-display text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold md:col-span-5">
            What the admin never totals
          </h2>
          <p className="col-span-12 max-w-[42ch] self-end text-mute md:col-span-5 md:col-start-6">
            Four inputs Shopify leaves on the floor. One remainder per product.
          </p>
          <div className="col-span-12 flex justify-end -space-x-3 md:col-span-2">
            {[SKUS.parka, SKUS.tote, SKUS.mug].map((sku) => (
              <Image
                key={sku.src}
                src={sku.src}
                alt={sku.alt}
                width={48}
                height={48}
                className="size-12 rounded-full object-cover ring-2 ring-canvas"
              />
            ))}
          </div>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {ITEMS.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl bg-white p-7 lift"
            >
              <span
                className={`inline-flex size-11 items-center justify-center rounded-xl ${item.wash} ${item.tint}`}
              >
                <item.icon className="size-5" strokeWidth={1.8} />
              </span>
              <h3 className="mt-5 font-display text-[1.25rem] font-bold">
                {item.title}
              </h3>
              <p className="mt-2 text-[0.95rem] text-mute">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Play } from "lucide-react";
import { DashMock } from "@/site/DashMock";
import { Face } from "@/site/Face";
import { FACES, SKUS } from "@/site/media";
import Image from "next/image";

export function Lead() {
  return (
    <section className="relative overflow-hidden px-5 pt-12 pb-8 md:pt-20 md:pb-4">
      <div className="mx-auto grid max-w-6xl grid-cols-12 items-center gap-10">
        <div className="col-span-12 md:col-span-6 lg:col-span-5">
          <p className="inline-flex rounded-full bg-[#F3E2C8] px-3 py-1 text-[0.75rem] font-semibold tracking-wide text-ink">
            No. 1 job Shopify skips
          </p>
          <h1 className="mt-5 font-display text-[clamp(2.4rem,5vw,4.1rem)] font-extrabold text-ink">
            Name the SKUs that do not pay.
          </h1>
          <p className="mt-5 max-w-[38ch] text-[1.05rem] text-mute">
            Checkout is not contribution. Profitkit subtracts goods, gateway
            take, shipping gap, discounts and refunds — then sorts the catalog
            by what remains.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <a
              href="#install"
              className="cursor-pointer rounded-xl bg-spring px-5 py-3 text-[0.95rem] font-semibold text-ink no-underline transition-colors duration-200 hover:bg-forest hover:text-canvas"
            >
              Start free on Shopify
            </a>
            <a
              href="#product"
              className="inline-flex cursor-pointer items-center gap-2 text-[0.95rem] font-medium text-ink no-underline transition-colors duration-200 hover:text-spring"
            >
              <span className="inline-flex size-8 items-center justify-center rounded-full bg-ink text-canvas">
                <Play className="size-3.5 fill-canvas" />
              </span>
              See the walkthrough
            </a>
          </div>
          <div className="mt-6 flex items-center gap-3">
            <div className="flex -space-x-2">
              {FACES.slice(0, 3).map((face) => (
                <Face key={face.src} src={face.src} alt={face.alt} size={36} className="ring-2 ring-white" />
              ))}
            </div>
            <p className="max-w-[22ch] text-[0.8rem] text-mute">
              Operators who already sell — ranking remainder, not opening a new store.
            </p>
          </div>
        </div>

        <div className="relative col-span-12 md:col-span-6 lg:col-span-7">
          <div
            aria-hidden
            className="absolute -top-10 right-0 size-[18rem] rounded-full bg-spring/25 blur-2xl md:size-[22rem]"
          />
          <div className="pointer-events-none absolute -left-4 top-8 z-10 hidden size-24 overflow-hidden rounded-2xl lift md:block lg:-left-8">
            <Image
              src={SKUS.tote.src}
              alt={SKUS.tote.alt}
              width={96}
              height={96}
              className="size-full object-cover"
            />
          </div>
          <div className="relative md:translate-x-8 lg:translate-x-12">
            <DashMock />
          </div>
        </div>
      </div>
    </section>
  );
}

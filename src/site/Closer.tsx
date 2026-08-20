import { DashMock } from "@/site/DashMock";
import { Face } from "@/site/Face";
import { FACES } from "@/site/media";

export function Closer() {
  return (
    <section id="install" className="px-5 pb-10">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[1.75rem] bg-forest px-8 py-12 text-canvas md:px-12 md:py-16">
        <div className="grid grid-cols-12 items-center gap-8">
          <div className="relative z-10 col-span-12 md:col-span-6">
            <h2 className="font-display text-[clamp(1.8rem,3.4vw,3rem)] font-bold text-canvas">
              Take the catalog back from checkout.
            </h2>
            <p className="mt-4 max-w-[36ch] text-canvas/75">
              Install on the store you already run. Remainder on the products
              you already sell.
            </p>
            <div className="mt-6 flex -space-x-2">
              {FACES.map((face) => (
                <Face
                  key={face.src}
                  src={face.src}
                  alt={face.alt}
                  size={40}
                  className="ring-2 ring-canvas"
                />
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-8">
              <div>
                <p className="font-display text-[1.8rem] font-extrabold">62</p>
                <p className="text-[0.8rem] text-canvas/65">median SKUs</p>
              </div>
              <div>
                <p className="font-display text-[1.8rem] font-extrabold">$0</p>
                <p className="text-[0.8rem] text-canvas/65">to start</p>
              </div>
              <div>
                <p className="font-display text-[1.8rem] font-extrabold">$29</p>
                <p className="text-[0.8rem] text-canvas/65">Pro / month</p>
              </div>
            </div>
            <a
              href="#plans"
              className="mt-8 inline-flex cursor-pointer rounded-xl bg-white px-5 py-3 text-[0.95rem] font-semibold text-ink no-underline transition-colors duration-200 hover:bg-spring"
            >
              Get started
            </a>
          </div>
          <div className="col-span-12 md:col-span-6">
            <div className="origin-bottom-right scale-95 md:absolute md:-right-8 md:bottom-[-3rem] md:w-[28rem] md:rotate-6">
              <DashMock />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Mark } from "@/site/Mark";

export function Foot() {
  return (
    <footer className="border-t border-ink/8 bg-white px-5 py-12">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 md:grid-cols-5">
        <div className="col-span-2 md:col-span-1">
          <a href="#top" className="inline-flex items-center gap-2 no-underline">
            <Mark className="size-8" />
            <span className="font-display font-bold">Profitkit</span>
          </a>
          <p className="mt-3 max-w-[20ch] text-[0.85rem] text-mute">
            Contribution per product for Shopify catalogs.
          </p>
        </div>
        <div>
          <p className="font-display text-[0.85rem] font-bold">Product</p>
          <div className="mt-3 flex flex-col gap-2 text-[0.88rem] text-mute">
            <a href="#product" className="cursor-pointer no-underline hover:text-ink">
              Remainder
            </a>
            <a href="#plans" className="cursor-pointer no-underline hover:text-ink">
              Plans
            </a>
          </div>
        </div>
        <div>
          <p className="font-display text-[0.85rem] font-bold">Company</p>
          <div className="mt-3 flex flex-col gap-2 text-[0.88rem] text-mute">
            <a href="#questions" className="cursor-pointer no-underline hover:text-ink">
              Questions
            </a>
            <a href="mailto:support@profitkit.app" className="cursor-pointer no-underline hover:text-ink">
              Support
            </a>
          </div>
        </div>
        <div>
          <p className="font-display text-[0.85rem] font-bold">Legal</p>
          <div className="mt-3 flex flex-col gap-2 text-[0.88rem] text-mute">
            <a href="/privacy" className="cursor-pointer no-underline hover:text-ink">
              Privacy
            </a>
          </div>
        </div>
        <div>
          <p className="font-display text-[0.85rem] font-bold">Install</p>
          <div className="mt-3 flex flex-col gap-2 text-[0.88rem] text-mute">
            <a href="#install" className="cursor-pointer no-underline hover:text-ink">
              Shopify
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

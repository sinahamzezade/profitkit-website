/*
  Closing ask. Dark band bookends the page against the product demo band, so the
  composition opens and closes on the same instrument.
*/
export function Install() {
  return (
    <section id="install" className="bg-band py-16 md:py-24">
      <div className="wrap">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-end lg:gap-16">
          <div>
            <h2 className="font-display max-w-[30ch] text-3xl font-semibold text-ink-inverse md:text-5xl">
              Find out in an afternoon.
            </h2>
            <p className="mt-5 max-w-[54ch] text-sm leading-relaxed text-white/60">
              Install, give it one cost estimate, and the ranking is on screen before
              you have finished your coffee. Nothing to configure first, no data export,
              no spreadsheet.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="https://apps.shopify.com/"
                className="inline-flex cursor-pointer items-center justify-center border border-ink-inverse bg-ink-inverse px-5 py-3 font-semibold text-ink transition-colors duration-200 hover:border-loss hover:bg-loss hover:text-ink-inverse"
              >
                Install on Shopify
              </a>
              <span className="num text-xs text-white/50">Free tier · no card</span>
            </div>
          </div>

          <div className="border-t border-white/15 pt-5 lg:pb-2">
            <p className="max-w-[30ch] text-sm leading-relaxed text-white/50">
              Read-only. Profitkit never writes to your store, and stores no customer
              names, emails or addresses.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

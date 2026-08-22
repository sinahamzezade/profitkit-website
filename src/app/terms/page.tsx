import type { Metadata } from "next";
import Link from "next/link";

import { Foot } from "@/site/Foot";
import { Mast } from "@/site/Mast";

export const metadata: Metadata = {
  title: "Terms of service — Redline",
  description:
    "The agreement between Redline and the merchant, including the data processing terms that govern order data Redline handles on your behalf.",
};

const UPDATED = "22 August 2026";
const SUPPORT = "profitkitapp@gmail.com";

/*
  Terms of service, including the data processing agreement.

  Written because Shopify's protected customer data form asks "Do you have privacy
  and data protection agreements with your merchants?" and a privacy policy is not
  one — a policy is a notice the merchant reads, an agreement is terms the merchant
  accepts. Answering yes without this page would have been false on a compliance
  form.

  Everything factual here is drawn from what the app verifiably does, and the
  processing section deliberately mirrors /privacy rather than restating it loosely,
  because a reviewer reads both and any gap between them reads as carelessness.

  NOT LEGAL ADVICE AND NOT LAWYER-REVIEWED. This is a working draft grounded in the
  app's real behaviour. It should be read by someone qualified before it is relied
  on as a contract, and the governing-law clause in particular is a placeholder that
  has to match where the business is actually established.
*/

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="border-t border-rule pt-8">
      <h2 className="font-display text-xl font-semibold text-ink">{title}</h2>
      <div className="mt-4 space-y-4 text-sm leading-relaxed text-ink-soft">{children}</div>
    </section>
  );
}

function List({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="m-0 list-none space-y-2 p-0">
      {items.map((item, i) => (
        <li key={i} className="grid grid-cols-[0.75rem_minmax(0,1fr)] gap-x-3">
          <span aria-hidden="true" className="mt-2 h-px w-2.5 self-start bg-rule" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function TermsPage() {
  return (
    <div className="flex min-h-full flex-col">
      <Mast />

      <main className="wrap flex-1 py-16 md:py-24">
        <div className="max-w-[70ch]">
          <p className="eyebrow">Legal</p>
          <h1 className="font-display mt-4 text-4xl font-semibold text-ink md:text-5xl">
            Terms of service
          </h1>
          <p className="num mt-3 text-xs text-ink-soft">Last updated: {UPDATED}</p>

          <p className="mt-8 text-base leading-relaxed text-ink">
            These terms govern your use of Redline. Installing the app on your Shopify
            store means you accept them. They include the data processing terms in
            section 6, which set out how Redline handles the order data it reads on
            your behalf.
          </p>

          <div className="mt-14 space-y-12">
            <Section id="service" title="1. What Redline does">
              <p>
                Redline reads order, product and refund data from your Shopify store
                and calculates contribution margin per product — revenue less cost of
                goods, payment fees, the difference between shipping charged and
                shipping paid, discounts and refunds.
              </p>
              <p>
                Redline is read-only. It requests{" "}
                <span className="num">read_orders</span>,{" "}
                <span className="num">read_products</span>,{" "}
                <span className="num">read_inventory</span> and{" "}
                <span className="num">read_returns</span>, and holds no permission to
                change anything in your store.
              </p>
            </Section>

            <Section id="accuracy" title="2. Estimates, and the limits of the data">
              <p>
                Several figures Redline reports are estimates, because Shopify&apos;s
                API does not carry the underlying values. Redline labels these in the
                interface rather than presenting them as measured:
              </p>
              <List
                items={[
                  "Shipping cost. Shopify does not expose what fulfilment actually cost you. Redline uses a figure you supply, applied per order.",
                  "Payment fees. Real fees are reported for Shopify Payments only. For every other gateway, Redline applies rules you configure.",
                  "Cost of goods, where you have not supplied an exact per-product cost. Redline falls back to a percentage estimate you set.",
                ]}
              />
              <p>
                Redline is a reporting tool. It is not accounting, tax or financial
                advice, and its output should not be filed or relied on as a statutory
                record without checking it against your own books.
              </p>
            </Section>

            <Section id="plans" title="3. Plans, billing and cancellation">
              <p>
                The free plan shows every product&apos;s margin for the last 90 days.
                Pro is charged monthly through Shopify&apos;s Billing API — Redline
                never handles your payment details — and removes the 90-day limit so
                history accumulates from the day you installed, plus an export of the
                whole history.
              </p>
              <p>
                You can move between plans at any time from within the app, in either
                direction, without contacting support. Cancelling Pro takes effect at
                the end of the period you have already paid for; there is no partial
                refund for the remainder of that period. Cancelling deletes nothing —
                the view returns to the last 90 days and the export stops, and
                upgrading again restores access to the full history Redline has kept.
              </p>
            </Section>

            <Section id="availability" title="4. Availability">
              <p>
                Redline is provided as is. No specific uptime is guaranteed. Redline
                depends on Shopify&apos;s API, and periods where Shopify is unavailable
                or rate-limits requests will affect it.
              </p>
            </Section>

            <Section id="liability" title="5. Liability">
              <p>
                To the extent permitted by law, Redline&apos;s total liability arising
                from your use of the app is limited to the fees you paid for it in the
                twelve months before the claim. Redline is not liable for indirect or
                consequential loss, including lost profit or lost data, arising from
                decisions taken on the basis of its reports.
              </p>
            </Section>

            <Section id="dpa" title="6. Data processing">
              <p className="text-ink">
                This section is the data processing agreement between you and Redline.
                Where it conflicts with anything else in these terms, this section
                governs the handling of personal data.
              </p>

              <h3 className="pt-2 font-semibold text-ink">Roles</h3>
              <p>
                You are the controller of your store&apos;s data. Redline is a
                processor, acting only on your instructions, which you give by
                installing the app and configuring it.
              </p>

              <h3 className="pt-2 font-semibold text-ink">Scope and purpose</h3>
              <p>
                Redline processes order economics — order number, date, currency,
                totals, discounts, shipping charged, gateway, line items, and refunds —
                together with product and variant records, and the cost settings you
                enter. It processes these solely to calculate and display margin to
                you. It is not used for any other purpose, is never sold, and is never
                shared with advertising or analytics platforms.
              </p>
              <p className="text-ink">
                Redline requests no customer-identifying fields and stores none. There
                is no field in the database for a customer name, email address, phone
                number or postal address, and an automated test fails the build if one
                is ever added.
              </p>
              <p>
                Order data is nonetheless classified by Shopify as protected customer
                data, and Redline treats it as personal data throughout, which is why
                these terms exist.
              </p>

              <h3 className="pt-2 font-semibold text-ink">Sub-processors</h3>
              <List
                items={[
                  <>
                    <span className="text-ink">Railway</span> — application hosting and
                    the Postgres database. Data is encrypted at rest at the storage
                    level; Railway is SOC 2 Type II certified.
                  </>,
                  <>
                    <span className="text-ink">Shopify</span> — the source of the data
                    and the platform the app runs inside.
                  </>,
                ]}
              />
              <p>
                Redline will give notice on this page before adding a sub-processor.
              </p>

              <h3 className="pt-2 font-semibold text-ink">Security</h3>
              <p>
                All traffic runs over TLS. Data is encrypted at rest. Access to the
                production database is restricted to the operator of the service.
                Redline stores no payment credentials of any kind.
              </p>

              <h3 className="pt-2 font-semibold text-ink">Retention and deletion</h3>
              <p>
                Records are retained while the app is installed, so history
                accumulates. When you uninstall, Shopify sends a shop redaction request
                48 hours later, and on receiving it Redline permanently deletes every
                record belonging to your store — products, orders, refunds, cost
                settings and the session. You can request deletion sooner by
                uninstalling or by emailing the address below.
              </p>
              <p>
                Redline answers Shopify&apos;s customer data request and customer
                redaction webhooks by reporting that it holds no personal data for the
                individual, because it holds none.
              </p>

              <h3 className="pt-2 font-semibold text-ink">Assisting you</h3>
              <p>
                If a shopper exercises a data subject right against you, Redline will
                assist within a reasonable period. In practice there is usually nothing
                to return or erase, because Redline holds nothing that identifies an
                individual shopper.
              </p>

              <h3 className="pt-2 font-semibold text-ink">Breach notification</h3>
              <p>
                Redline will notify you without undue delay, and in any case within 72
                hours, of becoming aware of a personal data breach affecting your
                store&apos;s data.
              </p>
            </Section>

            <Section id="changes" title="7. Changes and termination">
              <p>
                These terms may change; the date at the top records the last revision,
                and material changes will be noted in the app. You may stop using
                Redline at any time by uninstalling it, which begins the deletion
                described in section 6.
              </p>
            </Section>

            <Section id="contact" title="8. Contact">
              <p>
                Questions about these terms, or a request relating to your data:{" "}
                <a
                  href={`mailto:${SUPPORT}`}
                  className="text-steel underline decoration-rule underline-offset-4 transition-colors duration-200 hover:text-ink"
                >
                  {SUPPORT}
                </a>
                .
              </p>
              <p>
                See also the{" "}
                <Link
                  href="/privacy"
                  className="text-steel underline decoration-rule underline-offset-4 transition-colors duration-200 hover:text-ink"
                >
                  privacy policy
                </Link>
                , which describes the same handling from the reader&apos;s side.
              </p>
            </Section>
          </div>

          <div className="mt-16 border-t border-rule pt-6">
            <Link
              href="/"
              className="text-sm text-steel underline decoration-rule underline-offset-4 transition-colors duration-200 hover:text-ink"
            >
              Back to Redline
            </Link>
          </div>
        </div>
      </main>

      <Foot />
    </div>
  );
}

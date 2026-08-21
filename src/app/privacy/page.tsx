import type { Metadata } from "next";
import Link from "next/link";

import { Foot } from "@/site/Foot";
import { Mast } from "@/site/Mast";

export const metadata: Metadata = {
  title: "Privacy policy — Profitkit",
  description:
    "What Profitkit stores, what it deliberately does not store, which permissions it asks for, and how deletion works.",
};

const UPDATED = "21 August 2026";

/*
  Full policy text, kept in step with profikit/PRIVACY.md. This page is the public
  URL Shopify's App Store review requires, so it has to be the complete document
  rather than a summary — a reviewer reads this, not the repository.
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

export default function PrivacyPage() {
  return (
    <div className="flex min-h-full flex-col">
      <Mast />

      <main className="wrap flex-1 py-16 md:py-24">
        <div className="max-w-[70ch]">
          <p className="eyebrow">Legal</p>
          <h1 className="font-display mt-4 text-4xl font-semibold text-ink md:text-5xl">
            Privacy policy
          </h1>
          <p className="num mt-3 text-xs text-ink-soft">Last updated: {UPDATED}</p>

          <p className="mt-8 text-base leading-relaxed text-ink">
            Profitkit analyses the money in your orders, not the people who placed them.
            It reads order economics and product data, and stores no customer identity of
            any kind.
          </p>

          <div className="mt-14 space-y-12">
            <Section id="what-it-stores" title="What Profitkit stores">
              <List
                items={[
                  "Products and variants: title, vendor, SKU, price, and Shopify's cost field",
                  "Orders: order number, date, currency, shipping charged, discount total and payment gateway",
                  "Order line items: title, SKU, quantity, line total, and discount allocated",
                  <>
                    Refunds: amount, quantity, date, and — where Shopify provides one —
                    the return reason
                  </>,
                  "Cost settings you enter: cost estimates, per-supplier overrides, imported costs, fee rules and shipping cost",
                ]}
              />
            </Section>

            <Section id="what-it-never-stores" title="What it never stores">
              <p className="text-ink">
                None of the following is read, stored, or derived. The database schema
                contains no field for any of it, and an automated test fails the build if
                one is ever added.
              </p>
              <List
                items={[
                  "Customer names, email addresses, phone numbers or postal addresses",
                  "Customer identifiers of any kind",
                  "Payment card details or any payment credentials",
                  "IP addresses or browsing behaviour of your shoppers",
                ]}
              />
            </Section>

            <Section id="permissions" title="What it requests access to">
              <p>Four read-only permissions:</p>
              <List
                items={[
                  <>
                    <code className="num text-ink">read_orders</code> — order totals,
                    discounts, refunds and payment fees
                  </>,
                  <>
                    <code className="num text-ink">read_products</code> — product titles,
                    vendors, SKUs and prices
                  </>,
                  <>
                    <code className="num text-ink">read_inventory</code> — Shopify&apos;s
                    per-variant unit cost field
                  </>,
                  <>
                    <code className="num text-ink">read_returns</code> — the reason
                    recorded against a return, where one exists
                  </>,
                ]}
              />
              <p className="text-ink">
                Profitkit has no write access. It cannot change anything in your store.
              </p>
            </Section>

            <Section id="protected-data" title="Access to protected customer data">
              <p>
                Shopify classifies order data as protected customer data. Profitkit
                requests access to it in order to read order financials. It does not
                request access to protected <em>customer fields</em> — name, email,
                phone, address — because it does not use them.
              </p>
            </Section>

            <Section id="use" title="How your data is used">
              <p>
                Only to produce the reports you see in the app: contribution margin per
                product, loss-making products, and discount and refund erosion. Your data
                is never sold, never shared with third parties, and never used to train
                anything.
              </p>
            </Section>

            <Section id="where" title="Where data is held">
              <p>
                Order and product records are stored in a Postgres database operated
                solely for running Profitkit, and are transmitted over TLS.
              </p>
            </Section>

            <Section id="retention" title="Retention and deletion">
              <List
                items={[
                  <>
                    <strong className="font-semibold text-ink">While installed:</strong>{" "}
                    records are retained so history accumulates over time.
                  </>,
                  <>
                    <strong className="font-semibold text-ink">On uninstall:</strong>{" "}
                    Shopify sends a shop redaction request 48 hours later. On receiving
                    it, Profitkit deletes every record belonging to your store — products,
                    orders, refunds, your cost settings, and the session — permanently.
                  </>,
                  <>
                    <strong className="font-semibold text-ink">
                      Customer data requests and customer redaction:
                    </strong>{" "}
                    Profitkit responds to both, reporting that it holds no personal data
                    for the customer, because it does not.
                  </>,
                ]}
              />
              <p>
                To request deletion sooner, uninstall the app or email the address below.
              </p>
            </Section>

            <Section id="merchant-data" title="Your merchant data">
              <p>
                The email address associated with your Shopify session is stored by
                Shopify&apos;s own app library for authentication. It is deleted when your
                shop&apos;s data is deleted.
              </p>
            </Section>

            <Section id="changes" title="Changes">
              <p>
                Material changes will be reflected here with an updated date, and where
                the change affects what is stored, communicated to installed merchants.
              </p>
            </Section>

            <Section id="contact" title="Contact">
              <p>
                <a
                  href="mailto:profitkitapp@gmail.com"
                  className="text-steel underline decoration-rule underline-offset-4 transition-colors duration-200 hover:text-ink"
                >
                  profitkitapp@gmail.com
                </a>
              </p>
            </Section>
          </div>

          <div className="mt-16 border-t border-rule pt-6">
            <Link
              href="/"
              className="text-sm text-steel underline decoration-rule underline-offset-4 transition-colors duration-200 hover:text-ink"
            >
              Back to Profitkit
            </Link>
          </div>
        </div>
      </main>

      <Foot />
    </div>
  );
}

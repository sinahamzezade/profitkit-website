import type { Metadata } from "next";
import Link from "next/link";
import { Mark } from "@/site/Mark";

export const metadata: Metadata = {
  title: "Privacy — Profitkit",
  description: "What Profitkit stores, why, and for how long.",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <Link href="/" className="inline-flex items-center gap-2 no-underline">
        <Mark className="size-8" />
        <span className="font-display font-bold text-ink">Profitkit</span>
      </Link>
      <h1 className="mt-10 font-display text-4xl font-bold">Privacy Policy</h1>
      <p className="num mt-2 text-sm text-mute">Last updated: 20 August 2026</p>
      <div className="mt-10 space-y-6 text-mute">
        <p>
          Profitkit analyses the money in your orders, not the people who placed
          them. It stores products, order economics, refunds, and the cost
          settings you enter — not customer names, emails, addresses, card
          details, or shopper browsing behaviour.
        </p>
        <p>
          Access is limited to read-only Shopify scopes for orders, products,
          and inventory. Data is retained while the app is installed and deleted
          on uninstall per Shopify&apos;s GDPR webhooks.
        </p>
        <p>
          Questions:{" "}
          <a
            href="mailto:support@profitkit.app"
            className="text-ink underline-offset-2 transition-colors duration-200 hover:text-spring hover:underline"
          >
            support@profitkit.app
          </a>
        </p>
      </div>
    </main>
  );
}

# App home — overrides MASTER

> Overrides `MASTER.md` for Shopify admin `/app` (embedded Polaris).

**Page:** `/app` — “The 10 products losing you money”  
**Stack constraint:** Polaris web components only (`s-*`). No custom fonts, no Tailwind, no OLED theme. Ledger Signal maps to: tables not cards, `borderRadius="none"`, critical tone = loss, tabular nums.

---

## Pattern

Data-dense ranking dashboard. One screen.

1. Page heading = the product promise  
2. Cost estimate **only if** COGS missing (blocks fake profit)  
3. KPI strip: lost $ · losers · catalog · window  
4. Ranked table (worst first)  
5. Suspect-cost holdouts (data errors, not losses)  
6. Cost estimate (if already set) as secondary, not hero

## Layout

- `s-page` `inlineSize="large"`
- Primary action: See every product
- **No cards** for the ranking — `s-table`
- KPI boxes: hairline `s-box`, `borderRadius="none"`, `background="subdued"`
- Loss: `tone="critical"` **and** the word “loss”
- Money: `fontVariantNumeric="tabular-nums"`

## Table columns (losers)

`#` · Product · Lost · Cause · Why

- Rank is kicker; product is primary; lost is secondary currency
- Cause badge + label (never color alone)
- Why = driver sentence (actionable)

## Empty / healthy

No losers → same KPI strip ($0 lost) + three thinnest margins. Never a blank page.

## Anti-patterns (this page)

- Stacked Polarise cards for the top 10
- Cost form competing with the ranking when costs already exist
- Aside sidebar (steals width from money columns)
- Emoji, glow, rounded SaaS cards

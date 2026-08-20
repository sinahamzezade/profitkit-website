# Design System Master File

> **LOGIC:** When building a specific page, first check `design-system/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.

---

**Project:** Profitkit  
**Generated:** 2026-08-20  
**Category:** Fintech / Shopify analytics (contribution margin)  
**Direction:** Ledger Signal — Swiss Industrial Print × data-dense P&L instrument  
**Stack:** Next.js App Router + Tailwind CSS v4

---

## Positioning (design implication)

Profitkit is a **P&L engine with a Shopify connector**, not a marketing dashboard.  
Visual language must feel like an **audit instrument**: sharp, numeric, loss-aware.  
Red = money leaving the store. Never spend red on decoration.

**Positioning line:** *Profit margin for stores that don't need Triple Whale.*

---

## Style

| Field | Choice |
|-------|--------|
| **Primary style** | Swiss Modernism 2.0 (light) |
| **Secondary influence** | Data-dense analytics (tables, rankings, KPIs) |
| **Substrate** | Light ledger only — never OLED / full-page dark |
| **Corners** | `0` (mechanical; no soft SaaS radius) |
| **Depth** | Hairline rules + ink bands — **no** multi-layer shadows, **no** glow |
| **Cards** | Default **off**. Cards only when wrapping a real interaction |

**Keywords:** grid, asymmetric hierarchy, tabular nums, signal accent, high contrast, ledger, ranking, contribution margin

---

## Color Palette

Semantic tokens (use these names in Tailwind/CSS — not raw hex in components).

| Role | Hex | CSS / Tailwind | Usage |
|------|-----|----------------|-------|
| Paper | `#E8ECF1` | `--paper` / `bg-paper` | Page substrate (cool zinc — not cream) |
| Paper deep | `#D5DCE6` | `--paper-deep` | Atmosphere wash, nested bands |
| Surface | `#F5F7FA` | `--surface` | Elevated panels inside light sections |
| Ink | `#0E1116` | `--ink` / `text-ink` | Primary text, rules, solid CTAs |
| Ink soft | `#5A6370` | `--ink-soft` | Body supporting copy (min contrast) |
| Ink inverse | `#F5F7FA` | `--ink-inverse` | Text on band |
| Loss | `#D41820` | `--loss` | **Only** accent: losses, “worst product”, CTA hover |
| Loss soft | `#F28B8F` | `--loss-soft` | Chart secondary / muted loss |
| Profit | `#0A6E6A` | `--profit` | Positive margin, “kept” column |
| Rule | `#B7C0CC` | `--rule` | Dividers on paper |
| Band | `#12151C` | `--band` | Full-bleed product demo strip only |
| Band soft | `#1C2230` | `--band-soft` | Nested dark UI inside band |
| Steel | `#2F5563` | `--steel` | Links, secondary focus (not bright SaaS blue) |

**Color rules**

1. **Single accent:** Loss red is the only vivid accent on marketing surfaces.
2. Profit teal appears in **data** (charts/tables), not as brand chrome.
3. No purple, no indigo gradients, no gold/amber CTA, no terracotta.
4. No warm cream `#F4F1EA` paper. Paper stays cool zinc.
5. Dark (`band`) is a **section instrument**, not a theme mode.

---

## Typography

| Role | Font | Weight | Notes |
|------|------|--------|-------|
| Display / brand | **Space Grotesk** | 500–700 | Hero wordmark + section titles. Tight tracking. |
| Body | **IBM Plex Sans** | 400–600 | Financial trust, readable UI |
| Data / nums | **IBM Plex Mono** | 400–600 | Margins, rankings, prices — always `tabular-nums` |

**Mood:** technical, precise, ledger-native — not “friendly SaaS”, not editorial serif broadsheet.

**Do not use:** Inter, Roboto, Arial, system-ui as brand faces; Plus Jakarta Sans; Fraunces / Newsreader (broadsheet cluster).

**Scale (marketing)**

| Token | Size | Use |
|-------|------|-----|
| Brand hero | `clamp(3.2rem, 2rem + 8vw, 7.5rem)` | Wordmark “Profitkit” — hero-level brand |
| Display | `clamp(1.85rem, 1.2rem + 2.4vw, 3.15rem)` | One headline under brand |
| Body | `clamp(1rem, 0.96rem + 0.2vw, 1.0625rem)` | Supporting sentence |
| Meta / mono | `0.75rem–0.875rem` | Labels, chart axes, footnotes |

**Display CSS**

```css
.font-display {
  font-family: var(--font-display), ui-sans-serif, sans-serif;
  font-weight: 600;
  letter-spacing: -0.035em;
  line-height: 0.95;
  text-wrap: balance;
}
.num {
  font-family: var(--font-mono), ui-monospace, monospace;
  font-variant-numeric: tabular-nums;
}
```

**Load via** `next/font/google` only (no external stylesheet links).

---

## Spacing & Layout

| Token | Value | Usage |
|-------|-------|-------|
| `--space-xs` | `0.25rem` | Tight inline |
| `--space-sm` | `0.5rem` | Icon / chip gaps |
| `--space-md` | `1rem` | Standard |
| `--space-lg` | `1.5rem` | Block padding |
| `--space-xl` | `2rem` | Section gaps |
| `--space-2xl` | `3rem` | Major section |
| `--space-3xl` | `4.5rem` | Hero vertical |

| Layout | Value |
|--------|-------|
| Measure | `max-w-6xl` (~72rem) |
| Gutter | `clamp(1.25rem, 5vw, 3.5rem)` |
| Grid | 12-col mental model; asymmetric hero OK |
| Radius | `0` everywhere on marketing |
| Shadow | none — use `border` / `border-ink` / `border-rule` |

**Atmosphere (required — not flat fill)**

Cool zinc paper + soft steel/teal radials + optional faint diagonal hatch.  
Must still pass as one composition, not a dashboard wallpaper.

---

## Motion

| Motion | Spec |
|--------|------|
| Enter | Opacity + `translateY(0.75rem)` → settle, `~620ms`, cubic-bezier(0.2, 0.7, 0.3, 1) |
| Stagger | Hero only: 60 / 160 / 260 / 380ms |
| Chart draw | Stroke dashoffset ~900ms after ready |
| Hover | Color/border only, `150–200ms` — **no** scale / lift |
| Reduced motion | Instant opacity; no path draw animation |

Ship **2–3** intentional motions max (hero rise, chart draw, optional section reveal). No bounce, no glow pulses.

---

## Components

### Buttons

```css
/* Solid — primary CTA */
.btn-solid {
  background: var(--ink);
  color: var(--ink-inverse);
  border: 1px solid var(--ink);
  padding: 0.62em 1.15em;
  font-weight: 600;
  border-radius: 0;
  cursor: pointer;
  transition: background 200ms ease, border-color 200ms ease, color 200ms ease;
}
.btn-solid:hover {
  background: var(--loss);
  border-color: var(--loss);
}

/* Ghost */
.btn-ghost {
  background: transparent;
  color: var(--ink);
  border: 1px solid var(--ink);
}
.btn-ghost:hover {
  background: var(--ink);
  color: var(--ink-inverse);
}
```

### Data tables / rankings (not “cards”)

- Hairline `border-rule` or `border-ink` on band
- Mono for all money / %
- Loss rows: `text-loss` — color **and** label (“loss”), never color alone
- Row hover: background tint only, no scale

### Links

- Default: `text-steel` or underline on ink
- Focus: `outline: 2px solid var(--loss); outline-offset: 3px`

### Inputs (if needed)

```css
.input {
  border: 1px solid var(--rule);
  border-radius: 0;
  padding: 12px 16px;
  background: var(--surface);
  font-size: 16px; /* mobile zoom guard */
}
.input:focus {
  border-color: var(--ink);
  outline: 2px solid var(--loss);
  outline-offset: 2px;
}
```

---

## Page Pattern (default marketing)

**Pattern:** Product Demo + Features (funnel-aware)

1. **Hero** — brand wordmark dominant → one headline → one sentence → one CTA group → full-bleed product demo band (rerank chart)
2. **Problem / costs** — what revenue hides
3. **Ladder / method** — how contribution margin is built
4. **Limits** — honest scope (builds trust)
5. **Pricing** — free tier complete; paid adds depth
6. **Install CTA**

**Hero budget (strict):** brand + one headline + one supporting sentence + one CTA group + one dominant product visual. No stats strips, pill clusters, or promo chips in first viewport.

**CTA:** Install on Shopify — ink solid; hover loss red. Secondary meta in mono (“Free tier · no card”).

---

## Charts

| Need | Type |
|------|------|
| Revenue rank → profit rank | Dual-column list + crossing links (custom SVG) or horizontal bar comparison |
| Loss callouts | Sorted descending by loss $; loss red labels |

Libraries OK for app UI later: Recharts / D3. Marketing hero stays custom lightweight SVG.

---

## Anti-Patterns (Do NOT Use)

### Rejected auto-recommendations

- ❌ Dark Mode (OLED) as default theme  
- ❌ Plus Jakarta Sans / generic “friendly SaaS” type  
- ❌ Blue primary + amber CTA (`#1E40AF` / `#F59E0B`)  
- ❌ AI Personalization landing pattern  
- ❌ Soft 8–16px card radius + drop shadows  
- ❌ Glow / neon / HUD sci-fi  

### Brand / taste rejects

- ❌ Purple / indigo gradient SaaS look  
- ❌ Warm cream paper + terracotta + display serif broadsheet  
- ❌ Flat single-color background with no atmosphere  
- ❌ Emoji icons  
- ❌ Scale transforms on hover  
- ❌ Inter / Roboto / Arial as brand fonts  
- ❌ Cards in the hero  
- ❌ Detached badges / promo stickers over hero media  

### UX / a11y

- ❌ Color as only loss indicator  
- ❌ Missing `cursor-pointer` on clickables  
- ❌ Instant state changes (use 150–300ms)  
- ❌ Ignoring `prefers-reduced-motion`  
- ❌ Focus outline removed without replacement  

---

## Pre-Delivery Checklist

- [ ] Brand wordmark is hero-level (not nav-only)
- [ ] Loss red used only for loss / CTA hover — never logo ornament
- [ ] No emojis as icons (SVG: Lucide / Heroicons)
- [ ] `cursor-pointer` on interactive elements
- [ ] Hover = color/border only (no layout shift)
- [ ] Text contrast ≥ 4.5:1 on paper
- [ ] Focus visible (`loss` outline)
- [ ] `prefers-reduced-motion` respected
- [ ] Responsive: 375 / 768 / 1024 / 1440
- [ ] No horizontal scroll on mobile
- [ ] Hero first viewport passes brand test (remove nav → still reads Profitkit)

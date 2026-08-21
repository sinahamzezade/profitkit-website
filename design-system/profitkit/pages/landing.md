# Landing — overrides MASTER

> Overrides `MASTER.md` for the marketing homepage only.

**Page:** `/` (marketing landing)  
**Pattern:** Product Demo + Features

---

## Section order (locked)

1. Sticky masthead (wordmark + Install)
2. Hero — brand → headline → sentence → CTA
3. Full-bleed band — RerankChart (product demo)
4. Dashboard preview — the app inside Shopify admin
5. Costs — what revenue hides
6. Ladder — contribution margin method
7. Operators — who it is for (anonymous portraits, no quotes)
8. Limits — honest scope
9. Pricing
10. Footer / install

## Hero overrides

- Brand “Profitkit” uses display scale — larger than headline
- Headline may italicize only the loss phrase via `text-loss` (not `<em>` serif)
- Product visual is **edge-to-edge band**, not inset card
- No stats, schedules, or social-proof chips in first viewport

## Motion budget (this page)

1. Staggered hero rise (4 steps)
2. Chart link-path draw after ready
3. Optional: section border/opacity on scroll — skip if it competes

## CTA copy

- Primary: `Install on Shopify`
- Meta: `Free tier · no card` (mono)

## Imagery

Local stills only, from `/public/media` — no remote hosts at runtime. One grade
across the page: light desaturation, no colour pops competing with loss red.

- Portraits are **anonymous operator stills**, square (radius 0), never circular
- No names, roles-as-people, or quotes attached to a face until real customers exist
- One full-bleed image moment only (the closing band), with a hard tonal wash

## Do not add on landing

- Testimonials carousel
- Logo cloud
- Feature icon grid with 6+ cards
- Dark full-page theme toggle

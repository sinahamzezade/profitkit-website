# Redline marketing — design

Source of truth for the public site (`src/site/`). Match this file before inventing a new look.

**Product:** Shopify SaaS. Contribution remainder per SKU after goods, fees, shipping gap, discounts, refunds.  
**Audience:** Catalogs Shopify already has — typically under 50K visits.  
**Primary CTA:** Start / install on Shopify. Free is complete; Pro ($29) adds depth.

---

## Direction

Luxury/refined conversion layout. White surfaces, soft lift, rounded-2xl shells, spring green as the only vivid accent. Forest for the closing band — not purple, not OLED black.

Inspired structurally by high-conversion ecommerce SaaS landings (sticky mast, split hero + mockup, marquee, 2×2, tabs + table, staggered ops, pill cloud, three plans, FAQ, closer). Visual identity is Redline: mark, spring, remainder language.

---

## Color

Use Tailwind tokens (`bg-canvas`, `text-ink`, …). Hex lives in `src/app/globals.css`.

| Token | Hex | Use |
|-------|-----|-----|
| `canvas` | `#F7F8F4` | Page substrate |
| `ink` | `#172018` | Text, mark disc, dark UI |
| `mute` | `#5C6A5F` | Supporting copy |
| `spring` | `#00C56A` | **Brand accent.** CTAs, active tabs, kept/success |
| `forest` | `#123528` | Closer band, Pro plan card, hover on spring buttons |
| `wash` | `#E7F4EC` | Green tint sections (integrations) |
| `amber` | `#E8A317` | Warning / shipping accents only |

**Rules**

- Spring is the only saturated accent on marketing.
- Loss in mock tables: `#C43C32` **and** the word Loss / Refund — never color alone.
- No purple, violet, indigo, fuchsia.
- Do not swap spring for generic blue.

---

## Logo

`src/site/Mark.tsx`

- Circle `bg-ink`.
- Spring arc (remainder) + canvas hairline.
- Wordmark: **Redline** in display, bold, next to the mark.
- Do not recolor the arc. Do not drop the disc.

---

## Type

Loaded in `src/app/layout.tsx` via `next/font/google`.

| Role | Font | CSS |
|------|------|-----|
| Display / headings | **Bricolage Grotesque** 500–800 | `.font-display` |
| Body | **Sora** 400–700 | `font-sans` / `--font-body` |
| Figures | **Spline Sans Mono** 400–600 | `.num` + `tabular-nums` |

Do not use Inter, Roboto, Arial, Helvetica, system-ui, Space Grotesk, or Syne.

Display: `letter-spacing: -0.03em`, `line-height: 1.05`, `text-wrap: balance`.

---

## Layout

- Max measure: `max-w-6xl`, horizontal padding `px-5`.
- 12-column grids with **asymmetric spans** (copy 5, mockup 7; tabs 4 / table 8).
- Break the grid: mockup `translate-x`, Pro card `-translate-y`, ops cards staggered, closer mockup rotated and hanging off the band.
- Radius: `rounded-xl` buttons, `rounded-2xl` surfaces, closer `rounded-[1.75rem]`.
- Depth: `.lift` (`0 18px 50px rgb(23 32 24 / 0.1)`). No neon glow.
- Sticky mast: `bg-canvas/90 backdrop-blur-md`.

---

## Motion

- Marquee: `.marquee-track`, 28s linear. Off under `prefers-reduced-motion`.
- Hovers: color only, `duration-200`. No scale that shifts layout.
- Focus: `outline: 2px solid spring; outline-offset: 3px`.
- Interactive rows / tabs / FAQ: color + border, not bounce.

---

## Components (page order)

`src/site/Site.tsx`

1. **Mast** — mark, Product / Plans / Questions / Privacy, Compare plans, Sign up (spring).
2. **Lead** — amber kicker, display headline, two CTAs, avatar stack, overlapping tote + `DashMock`.
3. **TrustStrip** — uppercase line + grayscale catalog wordmarks, marquee.
4. **Apart** — 2×2 feature tiles, Lucide icons in tinted squares, SKU coins in the heading row.
5. **WorkFlow** — three tabs (left accent bar = spring) + table mock with product thumbs.
6. **Ops** — three photo-header cards, middle lifted.
7. **Connect** — `bg-wash`, pill cloud of inputs (Shopify, Stripe, …).
8. **Plans** — monthly/yearly toggle; Free / **Pro** (forest, lifted) / Desk.
9. **Ask** — FAQ accordion, heading left, list right.
10. **Closer** — forest band, operator avatars, stats 62 / $0 / $29, tilted mockup.
11. **Foot** — multi-column, mark + legal.

Privacy: `/privacy`, same tokens + mark.

---

## Media

Local files only: `public/media/`. Paths in `src/site/media.ts`.

- Faces: `face-1.jpg` … `face-4.jpg` via `Face`.
- SKUs: `parka.jpg`, `tote.jpg`, `mug.jpg`, `kit.jpg`.
- Scenes: `packing.jpg`, `desk.jpg`, `floor.jpg`.

Do not hotlink Unsplash at runtime. Replace files in `public/media/` if a still needs updating. Avatars: `rounded-full` + `ring-2`. Product thumbs: `rounded-lg` in tables, `rounded-full` in the Apart coin row.

Icons: **Lucide** only. No emoji as UI.

---

## Copy voice

Remainder, SKU, drain, checkout vs contribution. Not “leftover,” not Triple Whale name-drops, not generic “streamline sales.”

Headline on Lead: *Name the SKUs that do not pay.*

---

## Anti-patterns

- Purple / indigo / fuchsia gradients
- Inter / Roboto / system-ui
- Cards in a perfectly centered equal grid with no overlap
- Scale transforms on hover
- Emoji icons
- Remote image URLs that 404
- Changing spring or the mark without an explicit brand decision

---

## Checklist

- [ ] Spring CTAs, forest closer / Pro
- [ ] Mark + Redline wordmark in mast and foot
- [ ] Display headings, Sora body, mono money
- [ ] Images from `/media/`
- [ ] Lucide icons
- [ ] `cursor-pointer` on clickables
- [ ] Focus ring spring
- [ ] Reduced motion: marquee off
- [ ] 375 / 768 / 1024 / 1440

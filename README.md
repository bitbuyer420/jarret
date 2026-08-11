# Merchant Frontier — Snapback Storefront

A complete, production-quality e-commerce storefront for a fictional
snapback-cap brand, **Merchant Frontier**, built with **Next.js (App Router)**,
**React**, **TypeScript**, and **Tailwind CSS**. It runs entirely on its own —
no external services, accounts, or API keys required.

The brand makes one thing — a structured flat-brim snapback — and differentiates
products by the **embroidered front graphic**. The catalog is organized by that
graphic: the animals of the range (**Buffalo, Elk, Longhorn**) plus heritage
**Frontier** marks, using the brand-mark system documented in
[`designs/`](designs/).

![Next.js](https://img.shields.io/badge/Next.js-14-black) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue) ![Tailwind](https://img.shields.io/badge/Tailwind-3-38bdf8)

## Features

- **Home page** — hero, value props, featured products, shoppable collections,
  best sellers, and an editorial brand section.
- **Shop All** — client-side filtering by front graphic (Buffalo, Elk, Longhorn,
  Frontier) and sorting (price, name, featured).
- **Collections** — dynamic pages for New Arrivals, The Herd, Frontier Series,
  and Everyday.
- **Product detail pages** — image gallery, colorway/size selectors with a live
  preview, quantity, product details, materials, and related products.
- **Cart** — slide-out drawer **and** a full cart page, with quantity controls,
  a free-shipping progress meter, and live totals.
- **Checkout** — a complete shipping/payment form with an order summary and a
  simulated order confirmation (no real payment is processed).
- **Persistent cart** — cart state is saved to `localStorage`, so it survives
  refreshes.
- **Self-contained imagery** — every product "photo" is a generated SVG snapback
  illustration that renders the selected colorway and the product's front
  graphic, so there are no external image dependencies.
- **Brand mark system** — five embroidery-ready vector marks in
  [`designs/`](designs/), plus a hosted brand board (`designs/brand-board.html`).
- **Responsive & accessible** — mobile menu, keyboard-focusable controls, ARIA
  labels, and a light, consistent design system.

## Tech stack

| Area        | Choice                              |
| ----------- | ----------------------------------- |
| Framework   | Next.js 14 (App Router, RSC)        |
| Language    | TypeScript                          |
| Styling     | Tailwind CSS 3                      |
| State       | React Context + `localStorage`      |
| Images      | Inline SVG (no external hosting)    |

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev
# → http://localhost:3000

# 3. Or build & run production
npm run build
npm start
```

## Brand marks

The [`designs/`](designs/) folder holds the Merchant Frontier brand-mark
system — embroidery-ready SVGs. The three animal marks lead; the frontier marks
(built on *the sun crossing the frontier*) round out the set.

| File | Mark | Used on |
| ---- | ---- | ------- |
| `mf-buffalo.svg` | Buffalo — live silhouette badge | Buffalo snapbacks |
| `mf-elk.svg` | Elk — live silhouette badge | Elk snapbacks |
| `mf-longhorn.svg` | Longhorn — live silhouette badge | Longhorn snapbacks |
| `mf-emblem-roundel.svg` | Frontier Emblem (crest) | Frontier snapbacks |
| `mf-compass-patch.svg` | Compass Star (woven patch) | Frontier snapbacks |
| `mf-wordmark.svg` | Stacked wordmark | Frontier snapbacks |
| `mf-icon-sun-horizon.svg` | Sun & Horizon (core icon) | — heritage bug |
| `mf-monogram.svg` | Interlocked MF | — heritage mark |

The store's cap graphics are the **live full-body animal silhouettes** (bold,
athletic-logo style) — buffalo, elk, and longhorn — rendered tonally on each
crown by [`ProductImage.tsx`](src/components/ProductImage.tsx).

`designs/brand-board.html` is a self-contained page presenting the marks with
their thread colors, placements, and on-cap mockups — open it in any browser.

### Animal design explorations

Further directions for the animal line — three **prairie scenes** (the animals
out in their country) and three **creative studies**:

| File | Design | Kind |
| ---- | ------ | ---- |
| `mf-buffalo-prairie.svg` | Buffalo on the plains | Prairie scene |
| `mf-elk-prairie.svg` | Elk at the ridge | Prairie scene |
| `mf-longhorn-prairie.svg` | Longhorn on the trail | Prairie scene |
| `mf-bison-geometric.svg` | Faceted low-poly bison | Creative |
| `mf-elk-constellation.svg` | Elk-rack constellation | Creative |
| `mf-longhorn-sunburst.svg` | Longhorn on a frontier sun | Creative |

`designs/explorations-board.html` presents all six with treatment notes.

## Two ways to run it

**1. The Next.js app** (this repo's main build) — the full multi-route site
described above. Run it with the commands in the previous section.

**2. A single-file, zero-build version** — [`standalone/index.html`](standalone/index.html)
is the entire store compiled into one self-contained HTML file (all styling and
JavaScript inlined, hash-based routing, product imagery, cart, and checkout). It
needs no Node, no build step, and no dependencies — just open the file, or drop
it on any static host:

```bash
# open locally
open standalone/index.html            # macOS  (use xdg-open on Linux)

# or serve it
npx serve standalone                  # → http://localhost:3000
```

Host it anywhere that serves a static file:

- **GitHub Pages** — enable Pages for this repo and point it at `/standalone`,
  or copy `standalone/index.html` to the repo root of a `gh-pages` branch.
- **Netlify / Vercel / Cloudflare Pages** — drag the `standalone/` folder into
  their dashboard, or set it as the publish directory.
- **Any web server** — copy `standalone/index.html` to the document root.

## Project structure

```
standalone/index.html         # Single-file, no-build version of the whole store
src/
├── app/                      # App Router pages
│   ├── layout.tsx            # Root layout: header, footer, cart provider
│   ├── page.tsx              # Home
│   ├── shop/                 # Shop All (filter + sort)
│   ├── collections/[handle]/ # Dynamic collection pages
│   ├── products/[handle]/    # Dynamic product detail pages
│   ├── cart/                 # Full cart page
│   ├── checkout/             # Checkout flow + confirmation
│   ├── about/                # Brand story
│   └── not-found.tsx         # Custom 404
├── components/               # UI: Header, Footer, CartDrawer, ProductCard, …
├── context/CartContext.tsx   # Cart state (add/update/remove, persistence)
└── lib/
    ├── products.ts           # Product & collection catalog + helpers
    └── types.ts              # Shared types
```

## Customizing the catalog

All products and collections live in [`src/lib/products.ts`](src/lib/products.ts).
Add or edit entries in the `products` array — each product supports colors,
sizes, pricing (with optional `compareAtPrice` for sales), collections, and
merchandising flags (`featured`, `bestSeller`). No database required.

## Notes

This is a **demo storefront**. Checkout is simulated — it does not process
payments or place real orders. To make it a live store you would connect a
commerce backend (e.g. Shopify's Storefront API, Stripe, or a headless CMS) in
place of the static catalog in `src/lib/products.ts`.

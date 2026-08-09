# Meridian — Apparel Storefront

A complete, production-quality e-commerce storefront for a fictional modern
apparel brand, built with **Next.js (App Router)**, **React**, **TypeScript**,
and **Tailwind CSS**. It runs entirely on its own — no external services,
accounts, or API keys required.

![Meridian](https://img.shields.io/badge/Next.js-14-black) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue) ![Tailwind](https://img.shields.io/badge/Tailwind-3-38bdf8)

## Features

- **Home page** — hero, value props, featured products, shoppable collections,
  best sellers, and an editorial brand section.
- **Shop All** — client-side category filtering and sorting (price, name,
  featured).
- **Collections** — dynamic pages for New Arrivals, Essentials, Outerwear, and
  Accessories.
- **Product detail pages** — image gallery, color/size selectors with a live
  preview, quantity, product details, materials & care, and related products.
- **Cart** — slide-out drawer **and** a full cart page, with quantity controls,
  a free-shipping progress meter, and live totals.
- **Checkout** — a complete shipping/payment form with an order summary and a
  simulated order confirmation (no real payment is processed).
- **Persistent cart** — cart state is saved to `localStorage`, so it survives
  refreshes.
- **Self-contained imagery** — every product "photo" is a generated SVG garment
  illustration rendered in the selected color, so there are no external image
  dependencies.
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

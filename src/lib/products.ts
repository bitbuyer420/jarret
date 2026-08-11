import type { Collection, Product, ProductCategory } from "./types";

export const collections: Collection[] = [
  {
    handle: "new-arrivals",
    title: "New Arrivals",
    description:
      "The newest snapbacks off the line — fresh front graphics and seasonal colorways.",
    accent: "#AC4E38",
  },
  {
    handle: "frontier-series",
    title: "Frontier Series",
    description:
      "Our flagship emblem caps, built around the Merchant Frontier crest. Bold fronts, structured crowns.",
    accent: "#AC4E38",
  },
  {
    handle: "trail-series",
    title: "Trail Series",
    description:
      "Made for the long way round — clean icons and earthy colorways for the trail.",
    accent: "#4B5240",
  },
  {
    handle: "everyday",
    title: "Everyday",
    description:
      "Clean wordmarks and monograms for the daily rotation. Grab-and-go snapbacks that never shout.",
    accent: "#7C8C6C",
  },
];

// Every product is a snapback — a structured 6-panel with a flat brim and a
// snap closure. Products are differentiated by their front graphic (category).
export const products: Product[] = [
  {
    id: "1",
    handle: "frontier-emblem-snapback",
    name: "Frontier Emblem Snapback",
    price: 42,
    category: "Emblem",
    collections: ["new-arrivals", "frontier-series"],
    colors: [
      { name: "Black", hex: "#211E1B" },
      { name: "Navy", hex: "#2C3444" },
      { name: "Loden", hex: "#4B5240" },
    ],
    sizes: ["One Size"],
    tagline: "The flagship crest, stitched front and center",
    description:
      "Our signature snapback: a structured six-panel crown with a flat brim and the full Merchant Frontier emblem embroidered across the front. The one that started it all.",
    details: [
      "Structured 6-panel crown, flat brim",
      "3D-embroidered front emblem",
      "Snapback closure — one size fits most",
      "Green undervisor, woven back label",
    ],
    materials: "Cotton twill with wool-blend front panels",
    featured: true,
    bestSeller: true,
  },
  {
    id: "2",
    handle: "trade-post-emblem-snapback",
    name: "Trade Post Emblem Snapback",
    price: 42,
    category: "Emblem",
    collections: ["frontier-series"],
    colors: [
      { name: "Charcoal", hex: "#3A3733" },
      { name: "Sand", hex: "#D9C9AE" },
      { name: "Rust", hex: "#A0522D" },
    ],
    sizes: ["One Size"],
    tagline: "A tonal take on the frontier crest",
    description:
      "The emblem, dialed back. A tonal embroidered crest on a clean crown for a subtler everyday version of the flagship. Same structure, quieter finish.",
    details: [
      "Structured 6-panel crown, flat brim",
      "Tonal embroidered crest",
      "Snapback closure — one size fits most",
      "Woven back label",
    ],
    materials: "100% cotton twill",
  },
  {
    id: "3",
    handle: "summit-emblem-snapback",
    name: "Summit Emblem Snapback",
    price: 44,
    category: "Emblem",
    collections: ["new-arrivals", "trail-series"],
    colors: [
      { name: "Forest", hex: "#33463A" },
      { name: "Bone", hex: "#EDE6D8" },
    ],
    sizes: ["One Size"],
    tagline: "The crest, reworked for the backcountry",
    description:
      "A trail-ready emblem cap with a woven summit patch and earthy colorways. Built for the miles between trailhead and trading post.",
    details: [
      "Structured 6-panel crown, flat brim",
      "Woven summit patch",
      "Snapback closure — one size fits most",
      "Moisture-wicking sweatband",
    ],
    materials: "Cotton twill with recycled backing",
  },
  {
    id: "4",
    handle: "merchant-wordmark-snapback",
    name: "Merchant Wordmark Snapback",
    price: 38,
    category: "Wordmark",
    collections: ["everyday", "new-arrivals"],
    colors: [
      { name: "Black", hex: "#211E1B" },
      { name: "Bone", hex: "#EDE6D8" },
      { name: "Rust", hex: "#A0522D" },
    ],
    sizes: ["One Size"],
    tagline: "The full name, stacked and clean",
    description:
      "The Merchant Frontier wordmark stacked across the front in bold, letter-spaced embroidery. Minimal, confident, and endlessly wearable.",
    details: [
      "Structured 6-panel crown, flat brim",
      "Stacked wordmark embroidery",
      "Snapback closure — one size fits most",
      "Flat-brim, wear it as-is or curved",
    ],
    materials: "100% cotton twill",
    bestSeller: true,
  },
  {
    id: "5",
    handle: "frontier-script-snapback",
    name: "Frontier Script Snapback",
    price: 38,
    category: "Wordmark",
    collections: ["everyday"],
    colors: [
      { name: "Navy", hex: "#2C3444" },
      { name: "Camel", hex: "#C19A6B" },
    ],
    sizes: ["One Size"],
    tagline: "A looser script across the front",
    description:
      "A relaxed script wordmark for a warmer, more casual take. The frontier name in a flowing hand, embroidered edge to edge.",
    details: [
      "Structured 6-panel crown, flat brim",
      "Script wordmark embroidery",
      "Snapback closure — one size fits most",
      "Woven back label",
    ],
    materials: "100% cotton twill",
  },
  {
    id: "6",
    handle: "sun-and-horizon-snapback",
    name: "Sun & Horizon Snapback",
    price: 36,
    category: "Icon",
    collections: ["trail-series", "everyday"],
    colors: [
      { name: "Loden", hex: "#4B5240" },
      { name: "Black", hex: "#211E1B" },
      { name: "Stone", hex: "#B7A98D" },
    ],
    sizes: ["One Size"],
    tagline: "The frontier icon — a sun on the horizon",
    description:
      "Our core icon: a rising sun crossing the frontier line, embroidered small and centered. Quiet, ownable, and the easiest cap to reach for.",
    details: [
      "Structured 6-panel crown, flat brim",
      "Embroidered sun-and-horizon icon",
      "Snapback closure — one size fits most",
      "Tonal undervisor",
    ],
    materials: "100% cotton twill",
    featured: true,
  },
  {
    id: "7",
    handle: "horizon-line-snapback",
    name: "Horizon Line Snapback",
    price: 36,
    category: "Icon",
    collections: ["everyday"],
    colors: [
      { name: "Sky", hex: "#6E8B8E" },
      { name: "Sand", hex: "#D9C9AE" },
    ],
    sizes: ["One Size"],
    tagline: "Just the line — minimal to the core",
    description:
      "The icon stripped to a single embroidered horizon line and a low sun. The most minimal cap in the range for people who like it plain.",
    details: [
      "Structured 6-panel crown, flat brim",
      "Single-line embroidered icon",
      "Snapback closure — one size fits most",
      "Lightweight cotton build",
    ],
    materials: "100% cotton twill",
  },
  {
    id: "8",
    handle: "trail-marker-snapback",
    name: "Trail Marker Snapback",
    price: 38,
    category: "Icon",
    collections: ["trail-series", "new-arrivals"],
    colors: [
      { name: "Rust", hex: "#A0522D" },
      { name: "Charcoal", hex: "#3A3733" },
    ],
    sizes: ["One Size"],
    tagline: "A blazed-trail marker for the outdoors",
    description:
      "A trail-blaze marker icon — the little painted rectangle that keeps you on-path — embroidered front and center. Made for the trail series.",
    details: [
      "Structured 6-panel crown, flat brim",
      "Embroidered trail-marker icon",
      "Snapback closure — one size fits most",
      "Moisture-wicking sweatband",
    ],
    materials: "Cotton twill with recycled backing",
  },
  {
    id: "9",
    handle: "mf-monogram-snapback",
    name: "MF Monogram Snapback",
    price: 38,
    category: "Monogram",
    collections: ["everyday"],
    colors: [
      { name: "Black", hex: "#211E1B" },
      { name: "Cream", hex: "#E8DFCB" },
    ],
    sizes: ["One Size"],
    tagline: "Interlocked initials, clean and bold",
    description:
      "The interlocked MF monogram, embroidered large on the front. A clean, badge-free way to rep the frontier.",
    details: [
      "Structured 6-panel crown, flat brim",
      "Interlocked MF monogram embroidery",
      "Snapback closure — one size fits most",
      "Flat brim, green undervisor",
    ],
    materials: "100% cotton twill",
    bestSeller: true,
  },
  {
    id: "10",
    handle: "stacked-mf-snapback",
    name: "Stacked MF Snapback",
    price: 40,
    category: "Monogram",
    collections: ["new-arrivals", "everyday"],
    colors: [
      { name: "Forest", hex: "#33463A" },
      { name: "Camel", hex: "#C19A6B" },
      { name: "Navy", hex: "#2C3444" },
    ],
    sizes: ["One Size"],
    tagline: "The initials, stacked in a block",
    description:
      "A blocky stacked-MF monogram with a boxed outline, for a heavier, more collegiate feel. A little louder than the interlocked version.",
    details: [
      "Structured 6-panel crown, flat brim",
      "Boxed stacked-MF embroidery",
      "Snapback closure — one size fits most",
      "Woven back label",
    ],
    materials: "100% cotton twill",
  },
  {
    id: "11",
    handle: "compass-star-patch-snapback",
    name: "Compass Star Patch Snapback",
    price: 44,
    compareAtPrice: 50,
    category: "Patch",
    collections: ["frontier-series", "new-arrivals"],
    colors: [
      { name: "Black", hex: "#211E1B" },
      { name: "Rust", hex: "#A0522D" },
    ],
    sizes: ["One Size"],
    tagline: "A woven compass patch for the wanderers",
    description:
      "A woven compass-star patch stitched to a structured crown. Point it any direction — it always reads north. The centerpiece of the patch line.",
    details: [
      "Structured 6-panel crown, flat brim",
      "Woven compass-star patch",
      "Snapback closure — one size fits most",
      "Merrow-edge patch, green undervisor",
    ],
    materials: "Cotton twill, woven-fabric patch",
    featured: true,
    bestSeller: true,
  },
  {
    id: "12",
    handle: "north-star-patch-snapback",
    name: "North Star Patch Snapback",
    price: 44,
    category: "Patch",
    collections: ["trail-series"],
    colors: [
      { name: "Navy", hex: "#2C3444" },
      { name: "Bone", hex: "#EDE6D8" },
    ],
    sizes: ["One Size"],
    tagline: "A single guiding star, woven and stitched",
    description:
      "A lone north-star patch on a clean crown — a quieter cousin to the compass. For following your own line to the frontier.",
    details: [
      "Structured 6-panel crown, flat brim",
      "Woven north-star patch",
      "Snapback closure — one size fits most",
      "Merrow-edge patch",
    ],
    materials: "Cotton twill, woven-fabric patch",
  },
];

export const categories: ProductCategory[] = [
  "Emblem",
  "Wordmark",
  "Icon",
  "Monogram",
  "Patch",
];

/** Color-name → swatch hex, derived from the catalog so it never drifts. */
export const swatchMap: Record<string, string> = products.reduce(
  (map, p) => {
    p.colors.forEach((c) => {
      map[c.name] = c.hex;
    });
    return map;
  },
  {} as Record<string, string>,
);

export function getProduct(handle: string): Product | undefined {
  return products.find((p) => p.handle === handle);
}

export function getCollection(handle: string): Collection | undefined {
  return collections.find((c) => c.handle === handle);
}

export function productsInCollection(handle: string): Product[] {
  return products.filter((p) => p.collections.includes(handle));
}

export function relatedProducts(product: Product, limit = 4): Product[] {
  return products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .concat(products.filter((p) => p.id !== product.id && p.category !== product.category))
    .slice(0, limit);
}

export function formatPrice(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: amount % 1 === 0 ? 0 : 2,
  }).format(amount);
}

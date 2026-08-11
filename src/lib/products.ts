import type { Collection, Product, ProductCategory } from "./types";

export const collections: Collection[] = [
  {
    handle: "new-arrivals",
    title: "New Arrivals",
    description:
      "The newest snapbacks off the line — fresh animal marks and seasonal colorways.",
    accent: "#AC4E38",
  },
  {
    handle: "the-herd",
    title: "The Herd",
    description:
      "Buffalo, elk, and longhorn — the animal marks that run the range, embroidered front and center.",
    accent: "#4B5240",
  },
  {
    handle: "frontier-series",
    title: "Frontier Series",
    description:
      "The heritage marks — emblem, compass, and wordmark — for a cleaner graphic front.",
    accent: "#C19A6B",
  },
  {
    handle: "everyday",
    title: "Everyday",
    description:
      "The daily rotation — earthy colorways you'll reach for on repeat.",
    accent: "#7C8C6C",
  },
];

// Every product is a snapback — a structured 6-panel with a flat brim and a
// snap closure. Products are differentiated by their embroidered front graphic
// (category): Buffalo, Elk, Longhorn, or a heritage Frontier mark.
export const products: Product[] = [
  {
    id: "1",
    handle: "buffalo-head-snapback",
    name: "Buffalo Head Snapback",
    price: 42,
    category: "Buffalo",
    collections: ["new-arrivals", "the-herd"],
    colors: [
      { name: "Black", hex: "#211E1B" },
      { name: "Loden", hex: "#4B5240" },
      { name: "Rust", hex: "#A0522D" },
    ],
    sizes: ["One Size"],
    tagline: "The head of the herd, stitched front and center",
    description:
      "Our flagship animal cap: a bold buffalo head embroidered across the front of a structured flat-brim snapback. Shaggy, horned, and unmistakable.",
    details: [
      "Structured 6-panel crown, flat brim",
      "3D-embroidered buffalo head",
      "Snapback closure — one size fits most",
      "Green undervisor, woven back label",
    ],
    materials: "Cotton twill with wool-blend front panels",
    featured: true,
    bestSeller: true,
  },
  {
    id: "2",
    handle: "great-plains-bison-snapback",
    name: "Great Plains Bison Snapback",
    price: 42,
    category: "Buffalo",
    collections: ["the-herd", "everyday"],
    colors: [
      { name: "Charcoal", hex: "#3A3733" },
      { name: "Sand", hex: "#D9C9AE" },
    ],
    sizes: ["One Size"],
    tagline: "The bison, in earthy plains colorways",
    description:
      "The buffalo mark in tonal, sun-bleached colors built for the open range. A subtler take on the flagship for everyday wear.",
    details: [
      "Structured 6-panel crown, flat brim",
      "Tonal embroidered bison head",
      "Snapback closure — one size fits most",
      "Woven back label",
    ],
    materials: "100% cotton twill",
  },
  {
    id: "3",
    handle: "standing-bison-snapback",
    name: "Standing Bison Snapback",
    price: 40,
    category: "Buffalo",
    collections: ["the-herd", "everyday"],
    colors: [
      { name: "Forest", hex: "#33463A" },
      { name: "Camel", hex: "#C19A6B" },
    ],
    sizes: ["One Size"],
    tagline: "A rugged bison for the backcountry",
    description:
      "The buffalo head on deep forest and camel crowns, with a recycled backing and a moisture-wicking band. Built for the trail.",
    details: [
      "Structured 6-panel crown, flat brim",
      "Embroidered bison head",
      "Snapback closure — one size fits most",
      "Moisture-wicking sweatband",
    ],
    materials: "Cotton twill with recycled backing",
  },
  {
    id: "4",
    handle: "bull-elk-snapback",
    name: "Bull Elk Snapback",
    price: 44,
    category: "Elk",
    collections: ["new-arrivals", "the-herd"],
    colors: [
      { name: "Loden", hex: "#4B5240" },
      { name: "Black", hex: "#211E1B" },
    ],
    sizes: ["One Size"],
    tagline: "Full rack, front and center",
    description:
      "A bull elk with a full branching rack, embroidered large on a structured snapback. The crown jewel of the herd.",
    details: [
      "Structured 6-panel crown, flat brim",
      "3D-embroidered bull elk",
      "Snapback closure — one size fits most",
      "Green undervisor, woven back label",
    ],
    materials: "Cotton twill with wool-blend front panels",
    featured: true,
    bestSeller: true,
  },
  {
    id: "5",
    handle: "bugling-elk-snapback",
    name: "Bugling Elk Snapback",
    price: 44,
    category: "Elk",
    collections: ["the-herd"],
    colors: [
      { name: "Charcoal", hex: "#3A3733" },
      { name: "Rust", hex: "#A0522D" },
    ],
    sizes: ["One Size"],
    tagline: "The call of the rut, in thread",
    description:
      "The elk mark in charcoal and rust — earthy autumn colorways for the season the woods come alive.",
    details: [
      "Structured 6-panel crown, flat brim",
      "Embroidered elk head",
      "Snapback closure — one size fits most",
      "Woven back label",
    ],
    materials: "100% cotton twill",
  },
  {
    id: "6",
    handle: "elk-ridge-snapback",
    name: "Elk Ridge Snapback",
    price: 42,
    category: "Elk",
    collections: ["the-herd", "everyday"],
    colors: [
      { name: "Navy", hex: "#2C3444" },
      { name: "Bone", hex: "#EDE6D8" },
    ],
    sizes: ["One Size"],
    tagline: "A cleaner elk for the daily rotation",
    description:
      "The elk head on navy and bone crowns for an everyday, dress-it-up-or-down take. Tonal stitching, quiet color.",
    details: [
      "Structured 6-panel crown, flat brim",
      "Tonal embroidered elk head",
      "Snapback closure — one size fits most",
      "Cotton sweatband",
    ],
    materials: "100% cotton twill",
  },
  {
    id: "7",
    handle: "longhorn-snapback",
    name: "Longhorn Snapback",
    price: 44,
    category: "Longhorn",
    collections: ["new-arrivals", "the-herd"],
    colors: [
      { name: "Rust", hex: "#A0522D" },
      { name: "Black", hex: "#211E1B" },
    ],
    sizes: ["One Size"],
    tagline: "Horns from ear to ear",
    description:
      "A wide-horn longhorn steer embroidered across the front — horns sweeping nearly the full width of the crown. Big, bold, and Texas-proud.",
    details: [
      "Structured 6-panel crown, flat brim",
      "3D-embroidered longhorn, wide horns",
      "Snapback closure — one size fits most",
      "Green undervisor, woven back label",
    ],
    materials: "Cotton twill with wool-blend front panels",
    featured: true,
    bestSeller: true,
  },
  {
    id: "8",
    handle: "texas-longhorn-snapback",
    name: "Texas Longhorn Snapback",
    price: 44,
    category: "Longhorn",
    collections: ["the-herd"],
    colors: [
      { name: "Charcoal", hex: "#3A3733" },
      { name: "Sand", hex: "#D9C9AE" },
    ],
    sizes: ["One Size"],
    tagline: "The steer, in dust-and-leather tones",
    description:
      "The longhorn in charcoal and sand — colors pulled straight from the cattle trail. Tonal embroidery, everyday build.",
    details: [
      "Structured 6-panel crown, flat brim",
      "Tonal embroidered longhorn",
      "Snapback closure — one size fits most",
      "Woven back label",
    ],
    materials: "100% cotton twill",
  },
  {
    id: "9",
    handle: "longhorn-steer-snapback",
    name: "Longhorn Steer Snapback",
    price: 46,
    category: "Longhorn",
    collections: ["the-herd", "everyday"],
    colors: [
      { name: "Black", hex: "#211E1B" },
      { name: "Bone", hex: "#EDE6D8" },
    ],
    sizes: ["One Size"],
    tagline: "Contrast horns on a clean crown",
    description:
      "A high-contrast longhorn — ivory horns on black, or ink horns on bone. The dressed-up steer for the everyday range.",
    details: [
      "Structured 6-panel crown, flat brim",
      "Two-color embroidered longhorn",
      "Snapback closure — one size fits most",
      "Cotton sweatband",
    ],
    materials: "100% cotton twill",
  },
  {
    id: "10",
    handle: "frontier-emblem-snapback",
    name: "Frontier Emblem Snapback",
    price: 42,
    category: "Frontier",
    collections: ["frontier-series", "new-arrivals"],
    colors: [
      { name: "Black", hex: "#211E1B" },
      { name: "Navy", hex: "#2C3444" },
      { name: "Loden", hex: "#4B5240" },
    ],
    sizes: ["One Size"],
    tagline: "The heritage crest — sun over the frontier",
    description:
      "The Merchant Frontier crest: a sun rising over the frontier, ringed by the name. The heritage mark for a cleaner, graphic front.",
    details: [
      "Structured 6-panel crown, flat brim",
      "3D-embroidered frontier crest",
      "Snapback closure — one size fits most",
      "Green undervisor, woven back label",
    ],
    materials: "Cotton twill with wool-blend front panels",
    featured: true,
  },
  {
    id: "11",
    handle: "compass-star-snapback",
    name: "Compass Star Snapback",
    price: 44,
    compareAtPrice: 50,
    category: "Frontier",
    collections: ["frontier-series", "new-arrivals"],
    colors: [
      { name: "Black", hex: "#211E1B" },
      { name: "Rust", hex: "#A0522D" },
    ],
    sizes: ["One Size"],
    tagline: "A woven compass patch for the wanderers",
    description:
      "A woven compass-star patch stitched to a structured crown. Point it any direction — it always reads north.",
    details: [
      "Structured 6-panel crown, flat brim",
      "Woven compass-star patch",
      "Snapback closure — one size fits most",
      "Merrow-edge patch, green undervisor",
    ],
    materials: "Cotton twill, woven-fabric patch",
    bestSeller: true,
  },
  {
    id: "12",
    handle: "frontier-wordmark-snapback",
    name: "Frontier Wordmark Snapback",
    price: 38,
    category: "Frontier",
    collections: ["frontier-series", "everyday"],
    colors: [
      { name: "Black", hex: "#211E1B" },
      { name: "Bone", hex: "#EDE6D8" },
    ],
    sizes: ["One Size"],
    tagline: "The name, stacked and clean",
    description:
      "The Merchant Frontier wordmark stacked across the front in bold, letter-spaced embroidery. Minimal and endlessly wearable.",
    details: [
      "Structured 6-panel crown, flat brim",
      "Stacked wordmark embroidery",
      "Snapback closure — one size fits most",
      "Woven back label",
    ],
    materials: "100% cotton twill",
  },
];

export const categories: ProductCategory[] = [
  "Buffalo",
  "Elk",
  "Longhorn",
  "Frontier",
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

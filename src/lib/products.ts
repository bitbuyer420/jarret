import type { Collection, Product, ProductCategory } from "./types";

export const collections: Collection[] = [
  {
    handle: "new-arrivals",
    title: "New Arrivals",
    description:
      "The latest additions to the Meridian lineup — fresh shapes, seasonal materials, and quiet color.",
    accent: "#AC4E38",
  },
  {
    handle: "everyday",
    title: "Everyday",
    description:
      "Caps and knits built for the daily rotation. Grab-and-go headwear that never shouts.",
    accent: "#7C8C6C",
  },
  {
    handle: "cold-weather",
    title: "Cold Weather",
    description:
      "Wool felt and warm knits for when the temperature drops. Built to layer and last.",
    accent: "#5B6B7B",
  },
  {
    handle: "sun-straw",
    title: "Sun & Straw",
    description:
      "Breathable straw and packable brims for long days in the sun.",
    accent: "#B08D57",
  },
];

export const products: Product[] = [
  {
    id: "1",
    handle: "wool-six-panel-ball-cap",
    name: "Wool 6-Panel Ball Cap",
    price: 42,
    category: "Caps",
    collections: ["new-arrivals", "everyday"],
    colors: [
      { name: "Navy", hex: "#2C3444" },
      { name: "Olive", hex: "#5F6647" },
      { name: "Charcoal", hex: "#3A3733" },
    ],
    sizes: ["S/M", "L/XL"],
    tagline: "The cap you'll reach for daily",
    description:
      "A structured six-panel cap in brushed wool with a curved brim and an adjustable strap. Holds its shape, sits low, and only gets better with wear.",
    details: [
      "Brushed wool-blend outer",
      "Structured six-panel crown, curved brim",
      "Adjustable antique-brass strap",
      "Cotton sweatband",
    ],
    materials: "80% wool, 20% nylon",
    featured: true,
    bestSeller: true,
  },
  {
    id: "2",
    handle: "washed-cotton-dad-cap",
    name: "Washed Cotton Dad Cap",
    price: 34,
    category: "Caps",
    collections: ["everyday"],
    colors: [
      { name: "Stone", hex: "#B7A98D" },
      { name: "Black", hex: "#211E1B" },
      { name: "Rust", hex: "#A0522D" },
    ],
    sizes: ["One Size"],
    tagline: "Soft, unstructured, broken-in from day one",
    description:
      "An unstructured six-panel in garment-washed cotton twill. The low profile and pre-softened fabric make it feel like an old favorite the moment you put it on.",
    details: [
      "Garment-washed cotton twill",
      "Unstructured low-profile crown",
      "Curved brim",
      "Adjustable metal buckle strap",
    ],
    materials: "100% washed cotton twill",
    bestSeller: true,
  },
  {
    id: "3",
    handle: "corduroy-trucker-cap",
    name: "Corduroy Trucker Cap",
    price: 40,
    category: "Caps",
    collections: ["new-arrivals", "everyday"],
    colors: [
      { name: "Camel", hex: "#C19A6B" },
      { name: "Forest", hex: "#33463A" },
      { name: "Ecru", hex: "#E2D8C3" },
    ],
    sizes: ["One Size"],
    tagline: "Fine-wale cord with a breathable mesh back",
    description:
      "A classic trucker built from fine-wale corduroy up front with a breathable mesh back and a snapback closure. Warm-weather ventilation, cool-weather texture.",
    details: [
      "Fine-wale corduroy front panels",
      "Breathable mesh back",
      "Mid-profile structured crown",
      "Snapback closure",
    ],
    materials: "Cotton corduroy front, polyester mesh back",
    featured: true,
  },
  {
    id: "4",
    handle: "ribbed-merino-beanie",
    name: "Ribbed Merino Beanie",
    price: 32,
    category: "Beanies",
    collections: ["everyday", "cold-weather"],
    colors: [
      { name: "Oat", hex: "#D6CBB6" },
      { name: "Clay", hex: "#B5533A" },
      { name: "Charcoal", hex: "#3A3733" },
      { name: "Sage", hex: "#8A9A7B" },
    ],
    sizes: ["One Size"],
    tagline: "Soft merino, cuffed and cozy",
    description:
      "A classic cuffed beanie knit from soft merino wool. Warm, itch-free, and endlessly wearable — the one you'll lose and immediately re-buy.",
    details: [
      "Soft merino wool rib knit",
      "Double-layer cuff",
      "One size, stretches to fit",
    ],
    materials: "100% merino wool",
    bestSeller: true,
  },
  {
    id: "5",
    handle: "chunky-fisherman-beanie",
    name: "Chunky Fisherman Beanie",
    price: 46,
    category: "Beanies",
    collections: ["new-arrivals", "cold-weather"],
    colors: [
      { name: "Ecru", hex: "#E2D8C3" },
      { name: "Navy", hex: "#2C3444" },
      { name: "Moss", hex: "#5A6350" },
    ],
    sizes: ["One Size"],
    tagline: "A hand-feel knit with a short, snug cuff",
    description:
      "A heavyweight fisherman knit with a short roll cuff that sits high on the head. Built from a lambswool blend for warmth without the itch.",
    details: [
      "Chunky lambswool-blend knit",
      "Short roll cuff",
      "Sits high and snug",
      "Fully-fashioned crown",
    ],
    materials: "70% lambswool, 30% nylon",
    featured: true,
  },
  {
    id: "6",
    handle: "cuffed-waffle-beanie",
    name: "Cuffed Waffle Beanie",
    price: 36,
    category: "Beanies",
    collections: ["cold-weather"],
    colors: [
      { name: "Fog", hex: "#C7C3BA" },
      { name: "Rust", hex: "#A0522D" },
      { name: "Black", hex: "#201D1A" },
    ],
    sizes: ["One Size"],
    tagline: "Textured waffle knit with a deep cuff",
    description:
      "A waffle-textured beanie with a deep cuff you can wear rolled or slouched. Cotton-forward for milder days and layering.",
    details: [
      "Thermal waffle-knit cotton blend",
      "Deep fold cuff",
      "Slouch or roll it",
    ],
    materials: "95% cotton, 5% elastane",
  },
  {
    id: "7",
    handle: "wide-brim-wool-fedora",
    name: "Wide-Brim Wool Fedora",
    price: 128,
    compareAtPrice: 148,
    category: "Brimmed",
    collections: ["new-arrivals"],
    colors: [
      { name: "Charcoal", hex: "#3A3733" },
      { name: "Camel", hex: "#C19A6B" },
      { name: "Black", hex: "#211E1B" },
    ],
    sizes: ["S/M", "L/XL"],
    tagline: "A structured felt brim with a pinched crown",
    description:
      "A wide-brim fedora blocked from 100% wool felt, with a teardrop pinch and a grosgrain band. Structured enough to hold its shape, soft enough to pack loosely.",
    details: [
      "100% wool felt, hand-blocked",
      "Wide 3\" brim",
      "Teardrop pinched crown",
      "Grosgrain ribbon band",
    ],
    materials: "100% wool felt",
    featured: true,
  },
  {
    id: "8",
    handle: "teardrop-felt-hat",
    name: "Teardrop Felt Hat",
    price: 118,
    category: "Brimmed",
    collections: ["new-arrivals", "cold-weather"],
    colors: [
      { name: "Slate", hex: "#4A4F57" },
      { name: "Tobacco", hex: "#7C5A3C" },
    ],
    sizes: ["S/M", "L/XL"],
    tagline: "A medium brim that works with everything",
    description:
      "A versatile medium-brim felt hat with a classic teardrop crown. The everyday brimmed hat — dressed up or thrown on with a tee.",
    details: [
      "Wool felt body",
      "Medium 2.5\" brim",
      "Teardrop crown",
      "Tonal grosgrain band",
    ],
    materials: "100% wool felt",
  },
  {
    id: "9",
    handle: "wool-felt-bucket-hat",
    name: "Wool-Felt Bucket Hat",
    price: 68,
    category: "Bucket",
    collections: ["everyday", "cold-weather"],
    colors: [
      { name: "Moss", hex: "#5A6350" },
      { name: "Charcoal", hex: "#3A3733" },
      { name: "Camel", hex: "#C19A6B" },
    ],
    sizes: ["S/M", "L/XL"],
    tagline: "The bucket, warmed up in wool felt",
    description:
      "A bucket hat blocked from soft wool felt for cooler days. A downturned brim and a clean crown make it the season's most versatile shape.",
    details: [
      "Soft wool-felt body",
      "Downturned brim",
      "Topstitched crown",
      "Sits close to the head",
    ],
    materials: "100% wool felt",
    bestSeller: true,
  },
  {
    id: "10",
    handle: "washed-cotton-bucket-hat",
    name: "Washed Cotton Bucket Hat",
    price: 48,
    category: "Bucket",
    collections: ["new-arrivals", "sun-straw"],
    colors: [
      { name: "Sand", hex: "#D9C9AE" },
      { name: "Olive", hex: "#6E7355" },
      { name: "Black", hex: "#211E1B" },
    ],
    sizes: ["One Size"],
    tagline: "Lightweight cotton for everyday shade",
    description:
      "A garment-washed cotton bucket with a soft, packable brim. Throw it in a bag, pull it out sun-ready. Broken-in from the first wear.",
    details: [
      "Garment-washed cotton twill",
      "Soft packable brim",
      "Ventilation eyelets",
      "Interior drawcord",
    ],
    materials: "100% washed cotton twill",
    featured: true,
  },
  {
    id: "11",
    handle: "packable-straw-sun-hat",
    name: "Packable Straw Sun Hat",
    price: 72,
    category: "Straw",
    collections: ["sun-straw"],
    colors: [
      { name: "Natural", hex: "#E2D8C3" },
      { name: "Wheat", hex: "#D8C9A9" },
    ],
    sizes: ["One Size"],
    tagline: "Wide shade that rolls up and travels",
    description:
      "A wide-brim sun hat woven from flexible paper straw that packs flat and springs back. Real coverage for the beach, the garden, or the long walk home.",
    details: [
      "Woven paper straw",
      "Wide 4\" shade brim",
      "Packs flat, springs back",
      "Adjustable inner band",
    ],
    materials: "100% paper straw",
  },
  {
    id: "12",
    handle: "panama-straw-hat",
    name: "Panama Straw Hat",
    price: 110,
    category: "Straw",
    collections: ["new-arrivals", "sun-straw"],
    colors: [
      { name: "Ivory", hex: "#EDE6D8" },
      { name: "Straw", hex: "#D6C199" },
    ],
    sizes: ["S/M", "L/XL"],
    tagline: "A hand-woven brim with a grosgrain band",
    description:
      "A finely hand-woven panama with a structured brim and a pinched crown. The dressed-up straw hat — for weddings, terraces, and warm evenings.",
    details: [
      "Hand-woven toquilla-style straw",
      "Structured 3\" brim",
      "Pinched crown",
      "Grosgrain band",
    ],
    materials: "100% woven straw",
    featured: true,
  },
];

export const categories: ProductCategory[] = [
  "Caps",
  "Beanies",
  "Brimmed",
  "Bucket",
  "Straw",
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

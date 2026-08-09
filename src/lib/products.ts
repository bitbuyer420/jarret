import type { Collection, Product, ProductCategory } from "./types";

export const collections: Collection[] = [
  {
    handle: "new-arrivals",
    title: "New Arrivals",
    description:
      "The latest additions to the Meridian wardrobe — fresh cuts, seasonal fabrics, and quiet color.",
    accent: "#B5533A",
  },
  {
    handle: "essentials",
    title: "The Essentials",
    description:
      "Everyday pieces built to be worn on repeat. Considered basics that never shout.",
    accent: "#8A9A7B",
  },
  {
    handle: "outerwear",
    title: "Outerwear",
    description:
      "Layers for the in-between seasons. Structured, durable, and made to travel.",
    accent: "#5B6B7B",
  },
  {
    handle: "accessories",
    title: "Accessories",
    description:
      "The finishing details — carry, cover, and complete the look.",
    accent: "#B08D57",
  },
];

export const products: Product[] = [
  {
    id: "1",
    handle: "everyday-crew-tee",
    name: "Everyday Crew Tee",
    price: 38,
    category: "Tees",
    collections: ["new-arrivals", "essentials"],
    colors: [
      { name: "Sand", hex: "#D9C9AE" },
      { name: "Ink", hex: "#26221E" },
      { name: "Sage", hex: "#8A9A7B" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    tagline: "The tee you'll reach for daily",
    description:
      "A midweight crewneck cut from long-staple combed cotton. Soft enough to sleep in, structured enough to wear out. The Everyday Crew is our most-loved piece for a reason.",
    details: [
      "Midweight 190gsm combed cotton",
      "Ribbed crew collar that holds its shape",
      "Pre-shrunk, garment-washed for softness",
      "Relaxed-but-tailored fit",
    ],
    materials: "100% organic combed cotton",
    featured: true,
    bestSeller: true,
  },
  {
    id: "2",
    handle: "heavyweight-pocket-tee",
    name: "Heavyweight Pocket Tee",
    price: 46,
    category: "Tees",
    collections: ["essentials"],
    colors: [
      { name: "Bone", hex: "#EDE6D8" },
      { name: "Olive", hex: "#6E7355" },
      { name: "Charcoal", hex: "#3A3733" },
    ],
    sizes: ["S", "M", "L", "XL"],
    tagline: "Structured cotton with a clean chest pocket",
    description:
      "Built from a dense 240gsm jersey that drapes with weight. A single chest pocket keeps it honest. This is the tee that gets better with every wash.",
    details: [
      "Heavyweight 240gsm cotton jersey",
      "Reinforced chest pocket",
      "Double-needle hem and sleeves",
      "Boxy, modern silhouette",
    ],
    materials: "100% heavyweight cotton",
    bestSeller: true,
  },
  {
    id: "3",
    handle: "merino-crewneck-sweater",
    name: "Merino Crewneck Sweater",
    price: 128,
    compareAtPrice: 148,
    category: "Knitwear",
    collections: ["new-arrivals", "essentials"],
    colors: [
      { name: "Oatmeal", hex: "#D6CBB6" },
      { name: "Navy", hex: "#2C3444" },
      { name: "Clay", hex: "#B5533A" },
    ],
    sizes: ["S", "M", "L", "XL"],
    tagline: "Fine-gauge merino for every season",
    description:
      "Knit from extra-fine merino wool that regulates temperature naturally — warm when it's cool, breathable when it's not. A wardrobe cornerstone.",
    details: [
      "Extra-fine 19.5 micron merino wool",
      "Fully-fashioned, seamless shoulders",
      "Ribbed collar, cuffs, and hem",
      "Naturally odor-resistant",
    ],
    materials: "100% extra-fine merino wool",
    featured: true,
  },
  {
    id: "4",
    handle: "waffle-knit-henley",
    name: "Waffle-Knit Henley",
    price: 72,
    category: "Knitwear",
    collections: ["essentials"],
    colors: [
      { name: "Fog", hex: "#C7C3BA" },
      { name: "Rust", hex: "#A0522D" },
      { name: "Black", hex: "#201D1A" },
    ],
    sizes: ["S", "M", "L", "XL"],
    tagline: "Textured layering with a three-button placket",
    description:
      "A waffle-textured henley that traps warmth without bulk. The perfect mid-layer, or a standalone on milder days.",
    details: [
      "Thermal waffle-knit cotton blend",
      "Three-button corozo placket",
      "Rib-knit cuffs",
      "Slim, layering-friendly fit",
    ],
    materials: "95% cotton, 5% elastane",
  },
  {
    id: "5",
    handle: "field-overshirt",
    name: "Field Overshirt",
    price: 148,
    category: "Outerwear",
    collections: ["new-arrivals", "outerwear"],
    colors: [
      { name: "Tobacco", hex: "#7C5A3C" },
      { name: "Olive", hex: "#5F6647" },
      { name: "Slate", hex: "#4A4F57" },
    ],
    sizes: ["S", "M", "L", "XL"],
    tagline: "A shirt-jacket that does the heavy lifting",
    description:
      "Part shirt, part jacket — the Field Overshirt is cut from brushed cotton twill with four utility pockets. Throw it over a tee or under a coat.",
    details: [
      "Brushed 8oz cotton twill",
      "Four button-through pockets",
      "Corozo buttons",
      "Relaxed overshirt fit",
    ],
    materials: "100% brushed cotton twill",
    featured: true,
    bestSeller: true,
  },
  {
    id: "6",
    handle: "quilted-liner-jacket",
    name: "Quilted Liner Jacket",
    price: 198,
    category: "Outerwear",
    collections: ["outerwear"],
    colors: [
      { name: "Moss", hex: "#5A6350" },
      { name: "Black", hex: "#211E1B" },
    ],
    sizes: ["S", "M", "L", "XL"],
    tagline: "Lightweight warmth that packs down small",
    description:
      "A diamond-quilted liner jacket with recycled insulation. Wear it solo in the shoulder seasons or zip it under a shell when it turns.",
    details: [
      "Diamond-quilted recycled shell",
      "Recycled synthetic insulation",
      "Two-way YKK zip",
      "Packs into its own pocket",
    ],
    materials: "Recycled polyester shell & fill",
  },
  {
    id: "7",
    handle: "selvedge-denim-jacket",
    name: "Selvedge Denim Jacket",
    price: 178,
    category: "Outerwear",
    collections: ["new-arrivals", "outerwear"],
    colors: [
      { name: "Indigo", hex: "#38455F" },
      { name: "Washed", hex: "#8592A6" },
    ],
    sizes: ["S", "M", "L", "XL"],
    tagline: "Raw selvedge denim that ages with you",
    description:
      "Cut from 13oz Japanese selvedge denim on vintage shuttle looms. It starts stiff and deep, then fades into something entirely your own.",
    details: [
      "13oz Japanese selvedge denim",
      "Copper rivets and branded shank buttons",
      "Chain-stitched hems",
      "Classic trucker silhouette",
    ],
    materials: "100% cotton selvedge denim",
    featured: true,
  },
  {
    id: "8",
    handle: "tapered-chino",
    name: "Tapered Chino",
    price: 98,
    category: "Bottoms",
    collections: ["essentials"],
    colors: [
      { name: "Stone", hex: "#B7A98D" },
      { name: "Navy", hex: "#2C3444" },
      { name: "Black", hex: "#211E1B" },
    ],
    sizes: ["28", "30", "32", "34", "36"],
    tagline: "A clean chino with just enough stretch",
    description:
      "The chino, refined. A tapered leg, a touch of stretch, and a fabric that holds a press without fuss. Dress it up or down.",
    details: [
      "Peached cotton twill with 2% stretch",
      "Tapered leg, mid rise",
      "Slant front, welt back pockets",
      "Wrinkle-resistant finish",
    ],
    materials: "98% cotton, 2% elastane",
    bestSeller: true,
  },
  {
    id: "9",
    handle: "relaxed-linen-trouser",
    name: "Relaxed Linen Trouser",
    price: 110,
    category: "Bottoms",
    collections: ["new-arrivals"],
    colors: [
      { name: "Flax", hex: "#D8C9A9" },
      { name: "Clay", hex: "#B5533A" },
      { name: "Sea", hex: "#6E8B8E" },
    ],
    sizes: ["28", "30", "32", "34", "36"],
    tagline: "Breezy European linen for warm days",
    description:
      "A relaxed, drawstring-waist trouser in breathable European linen. Effortless from the beach to dinner.",
    details: [
      "Garment-dyed European linen",
      "Elastic drawstring waist",
      "Relaxed straight leg",
      "Side seam pockets",
    ],
    materials: "100% European linen",
    featured: true,
  },
  {
    id: "10",
    handle: "ribbed-beanie",
    name: "Ribbed Beanie",
    price: 32,
    category: "Accessories",
    collections: ["accessories"],
    colors: [
      { name: "Oat", hex: "#D6CBB6" },
      { name: "Clay", hex: "#B5533A" },
      { name: "Charcoal", hex: "#3A3733" },
      { name: "Sage", hex: "#8A9A7B" },
    ],
    sizes: ["One Size"],
    tagline: "Soft merino, cuffed and cozy",
    description:
      "A classic cuffed beanie knit from soft merino wool. Warm, itch-free, and endlessly wearable.",
    details: [
      "Soft merino wool rib knit",
      "Double-layer cuff",
      "One size, stretches to fit",
    ],
    materials: "100% merino wool",
  },
  {
    id: "11",
    handle: "canvas-tote",
    name: "Heavy Canvas Tote",
    price: 44,
    category: "Accessories",
    collections: ["accessories", "essentials"],
    colors: [
      { name: "Natural", hex: "#E2D8C3" },
      { name: "Olive", hex: "#6E7355" },
      { name: "Black", hex: "#211E1B" },
    ],
    sizes: ["One Size"],
    tagline: "A do-everything bag built to last",
    description:
      "A structured 18oz canvas tote with an interior pocket and reinforced straps. Groceries, laptops, the lot — it carries the day.",
    details: [
      "18oz heavyweight cotton canvas",
      "Reinforced webbing straps",
      "Interior zip pocket",
      "Flat base holds its shape",
    ],
    materials: "100% heavyweight cotton canvas",
    bestSeller: true,
  },
  {
    id: "12",
    handle: "leather-card-holder",
    name: "Leather Card Holder",
    price: 58,
    category: "Accessories",
    collections: ["accessories"],
    colors: [
      { name: "Tan", hex: "#A9764A" },
      { name: "Black", hex: "#211E1B" },
      { name: "Cognac", hex: "#7C4A2D" },
    ],
    sizes: ["One Size"],
    tagline: "Full-grain leather that patinas beautifully",
    description:
      "A slim, four-pocket card holder in vegetable-tanned full-grain leather. It softens and deepens in color with every use.",
    details: [
      "Vegetable-tanned full-grain leather",
      "Four card slots + center pocket",
      "Edge-painted and hand-finished",
      "Ages to a rich patina",
    ],
    materials: "Full-grain vegetable-tanned leather",
  },
];

export const categories: ProductCategory[] = [
  "Tees",
  "Knitwear",
  "Outerwear",
  "Bottoms",
  "Accessories",
];

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

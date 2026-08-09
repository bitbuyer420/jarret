export type ColorOption = {
  name: string;
  /** Hex used to render the garment illustration and swatch. */
  hex: string;
};

export type Product = {
  id: string;
  handle: string;
  name: string;
  price: number;
  compareAtPrice?: number;
  category: ProductCategory;
  collections: string[];
  colors: ColorOption[];
  sizes: string[];
  /** Short one-line tagline for cards. */
  tagline: string;
  description: string;
  details: string[];
  materials: string;
  featured?: boolean;
  bestSeller?: boolean;
};

export type ProductCategory =
  | "Tees"
  | "Knitwear"
  | "Outerwear"
  | "Bottoms"
  | "Accessories";

export type Collection = {
  handle: string;
  title: string;
  description: string;
  /** Hero accent color for the collection banner. */
  accent: string;
};

export type CartLine = {
  productId: string;
  handle: string;
  name: string;
  price: number;
  color: string;
  size: string;
  quantity: number;
};

import type { Metadata } from "next";
import { categories, products } from "@/lib/products";
import ShopClient from "@/components/ShopClient";

export const metadata: Metadata = {
  title: "Shop All",
  description: "Browse the full Meridian collection of modern hats and headwear.",
};

export default function ShopPage() {
  return (
    <div className="container-site py-12 md:py-16">
      <header className="mb-8">
        <p className="eyebrow">Everything</p>
        <h1 className="mt-2 font-serif text-4xl">Shop All</h1>
        <p className="mt-3 max-w-xl text-stone">
          The complete Meridian lineup — considered hats in natural materials,
          designed to work with everything and worn often.
        </p>
      </header>

      <ShopClient products={products} categories={categories} />
    </div>
  );
}

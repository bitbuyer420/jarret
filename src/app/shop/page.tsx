import type { Metadata } from "next";
import { categories, products } from "@/lib/products";
import ShopClient from "@/components/ShopClient";

export const metadata: Metadata = {
  title: "Shop All",
  description: "Browse every Merchant Frontier snapback, sorted by front graphic.",
};

export default function ShopPage() {
  return (
    <div className="container-site py-12 md:py-16">
      <header className="mb-8">
        <p className="eyebrow">Everything</p>
        <h1 className="mt-2 font-serif text-4xl">Shop All</h1>
        <p className="mt-3 max-w-xl text-stone">
          One snapback, the whole herd. The complete Merchant Frontier lineup —
          filter by animal or heritage mark to find your cap.
        </p>
      </header>

      <ShopClient products={products} categories={categories} />
    </div>
  );
}

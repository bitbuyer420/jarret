import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  collections,
  getCollection,
  productsInCollection,
} from "@/lib/products";
import ProductGrid from "@/components/ProductGrid";

type Params = { params: { handle: string } };

export function generateStaticParams() {
  return collections.map((c) => ({ handle: c.handle }));
}

export function generateMetadata({ params }: Params): Metadata {
  const collection = getCollection(params.handle);
  if (!collection) return { title: "Collection" };
  return {
    title: collection.title,
    description: collection.description,
  };
}

export default function CollectionPage({ params }: Params) {
  const collection = getCollection(params.handle);
  if (!collection) notFound();

  const items = productsInCollection(params.handle);

  return (
    <div>
      {/* Banner */}
      <div
        className="border-b border-ink/10"
        style={{
          background: `linear-gradient(120deg, ${collection.accent}14, transparent 70%)`,
        }}
      >
        <div className="container-site py-14 md:py-20">
          <p className="eyebrow">Collection</p>
          <h1 className="mt-2 font-serif text-4xl md:text-5xl">{collection.title}</h1>
          <p className="mt-4 max-w-2xl text-stone">{collection.description}</p>
        </div>
      </div>

      <div className="container-site py-12">
        <p className="mb-6 text-sm text-stone">
          {items.length} {items.length === 1 ? "product" : "products"}
        </p>
        {items.length > 0 ? (
          <ProductGrid products={items} />
        ) : (
          <p className="text-stone">No products in this collection yet.</p>
        )}
      </div>
    </div>
  );
}

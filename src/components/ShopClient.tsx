"use client";

import { useMemo, useState } from "react";
import type { Product, ProductCategory } from "@/lib/types";
import ProductGrid from "./ProductGrid";

type SortKey = "featured" | "price-asc" | "price-desc" | "name";

const sortLabels: Record<SortKey, string> = {
  featured: "Featured",
  "price-asc": "Price: Low to High",
  "price-desc": "Price: High to Low",
  name: "Alphabetical",
};

export default function ShopClient({
  products,
  categories,
}: {
  products: Product[];
  categories: ProductCategory[];
}) {
  const [active, setActive] = useState<ProductCategory | "All">("All");
  const [sort, setSort] = useState<SortKey>("featured");

  const filtered = useMemo(() => {
    let list =
      active === "All"
        ? [...products]
        : products.filter((p) => p.category === active);

    switch (sort) {
      case "price-asc":
        list.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        list.sort((a, b) => b.price - a.price);
        break;
      case "name":
        list.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        list.sort((a, b) => Number(b.featured ?? 0) - Number(a.featured ?? 0));
    }
    return list;
  }, [products, active, sort]);

  return (
    <div>
      <div className="mb-8 flex flex-col gap-4 border-b border-ink/10 pb-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          {(["All", ...categories] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full px-4 py-1.5 text-sm transition ${
                active === cat
                  ? "bg-ink text-cloud"
                  : "border border-ink/15 text-ink/70 hover:border-ink"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <label htmlFor="sort" className="text-xs text-stone">
            Sort
          </label>
          <select
            id="sort"
            value={sort}
            onChange={(e) => setSort(e.target.value as SortKey)}
            className="rounded-full border border-ink/15 bg-transparent px-3 py-1.5 text-sm outline-none focus:border-ink"
          >
            {Object.entries(sortLabels).map(([k, v]) => (
              <option key={k} value={k}>
                {v}
              </option>
            ))}
          </select>
        </div>
      </div>

      <p className="mb-6 text-sm text-stone">
        {filtered.length} {filtered.length === 1 ? "product" : "products"}
      </p>

      <ProductGrid products={filtered} />
    </div>
  );
}

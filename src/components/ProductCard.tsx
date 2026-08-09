import Link from "next/link";
import type { Product } from "@/lib/types";
import { formatPrice } from "@/lib/products";
import ProductImage from "./ProductImage";

export default function ProductCard({ product }: { product: Product }) {
  const onSale = product.compareAtPrice && product.compareAtPrice > product.price;

  return (
    <Link
      href={`/products/${product.handle}`}
      className="group flex flex-col"
    >
      <div className="relative overflow-hidden rounded-xl">
        <ProductImage
          category={product.category}
          colorHex={product.colors[0].hex}
          handle={product.handle}
          className="aspect-[4/5] w-full transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div className="pointer-events-none absolute left-3 top-3 flex flex-col gap-1.5">
          {product.bestSeller && (
            <span className="rounded-full bg-ink px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-cloud">
              Best Seller
            </span>
          )}
          {onSale && (
            <span className="rounded-full bg-clay px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-cloud">
              Sale
            </span>
          )}
        </div>
      </div>

      <div className="mt-4 flex items-start justify-between gap-3">
        <div>
          <h3 className="text-sm font-medium text-ink group-hover:text-clay">
            {product.name}
          </h3>
          <p className="mt-0.5 text-xs text-stone">{product.category}</p>
        </div>
        <div className="text-right text-sm">
          <span className="font-medium">{formatPrice(product.price)}</span>
          {onSale && (
            <span className="ml-1.5 text-xs text-stone line-through">
              {formatPrice(product.compareAtPrice!)}
            </span>
          )}
        </div>
      </div>

      {/* Color swatches */}
      <div className="mt-2 flex gap-1.5">
        {product.colors.map((c) => (
          <span
            key={c.name}
            className="h-3.5 w-3.5 rounded-full border border-ink/15"
            style={{ backgroundColor: c.hex }}
            title={c.name}
          />
        ))}
      </div>
    </Link>
  );
}

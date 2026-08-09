"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import ProductImage from "./ProductImage";
import type { Product } from "@/lib/types";

export default function AddToCart({ product }: { product: Product }) {
  const { addLine } = useCart();
  const [color, setColor] = useState(product.colors[0]);
  const [size, setSize] = useState(
    product.sizes.length === 1 ? product.sizes[0] : "",
  );
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState(false);

  function handleAdd() {
    if (!size) {
      setError(true);
      return;
    }
    addLine({
      productId: product.id,
      handle: product.handle,
      name: product.name,
      price: product.price,
      color: color.name,
      size,
      quantity,
    });
  }

  return (
    <div>
      {/* Live preview swaps to the selected color */}
      <div className="mb-6 overflow-hidden rounded-xl lg:hidden">
        <ProductImage
          category={product.category}
          colorHex={color.hex}
          handle={product.handle}
          className="aspect-square w-full"
        />
      </div>

      {/* Color */}
      <div>
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Color</span>
          <span className="text-sm text-stone">{color.name}</span>
        </div>
        <div className="mt-3 flex flex-wrap gap-2.5">
          {product.colors.map((c) => (
            <button
              key={c.name}
              onClick={() => setColor(c)}
              aria-label={c.name}
              aria-pressed={color.name === c.name}
              className={`h-9 w-9 rounded-full border transition ${
                color.name === c.name
                  ? "ring-2 ring-ink ring-offset-2 ring-offset-paper"
                  : "border-ink/20"
              }`}
              style={{ backgroundColor: c.hex }}
            />
          ))}
        </div>
      </div>

      {/* Size */}
      <div className="mt-6">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Size</span>
          <button className="text-xs text-stone underline">Size guide</button>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {product.sizes.map((s) => (
            <button
              key={s}
              onClick={() => {
                setSize(s);
                setError(false);
              }}
              className={`min-w-12 rounded-md border px-3 py-2 text-sm transition ${
                size === s
                  ? "border-ink bg-ink text-cloud"
                  : "border-ink/20 hover:border-ink"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
        {error && (
          <p className="mt-2 text-xs text-clay">Please select a size.</p>
        )}
      </div>

      {/* Quantity + Add */}
      <div className="mt-8 flex items-center gap-3">
        <div className="flex items-center rounded-full border border-ink/20">
          <button
            className="px-4 py-3 text-sm"
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            aria-label="Decrease quantity"
          >
            −
          </button>
          <span className="min-w-8 text-center text-sm">{quantity}</span>
          <button
            className="px-4 py-3 text-sm"
            onClick={() => setQuantity((q) => q + 1)}
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
        <button onClick={handleAdd} className="btn-primary flex-1">
          Add to cart
        </button>
      </div>

      <p className="mt-4 flex items-center gap-2 text-xs text-stone">
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-sage" />
        In stock — ships within 1–2 business days
      </p>
    </div>
  );
}

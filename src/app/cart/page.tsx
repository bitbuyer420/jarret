"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { formatPrice, swatchMap } from "@/lib/products";

const FREE_SHIP_THRESHOLD = 75;
const SHIPPING_FLAT = 8;

export default function CartPage() {
  const { lines, subtotal, updateQuantity, removeLine, lineKey, count } =
    useCart();

  const shipping =
    subtotal === 0 || subtotal >= FREE_SHIP_THRESHOLD ? 0 : SHIPPING_FLAT;
  const estTax = Math.round(subtotal * 0.0825 * 100) / 100;
  const total = subtotal + shipping + estTax;

  if (lines.length === 0) {
    return (
      <div className="container-site flex min-h-[50vh] flex-col items-center justify-center gap-5 py-20 text-center">
        <h1 className="font-serif text-3xl">Your cart is empty</h1>
        <p className="max-w-sm text-stone">
          Looks like you haven&apos;t added anything yet. Let&apos;s fix that.
        </p>
        <Link href="/shop" className="btn-primary">
          Shop the collection
        </Link>
      </div>
    );
  }

  return (
    <div className="container-site py-12">
      <h1 className="font-serif text-4xl">Your Cart</h1>
      <p className="mt-2 text-stone">
        {count} {count === 1 ? "item" : "items"}
      </p>

      <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_360px]">
        {/* Line items */}
        <ul className="divide-y divide-ink/10 border-y border-ink/10">
          {lines.map((line) => {
            const key = lineKey(line);
            return (
              <li key={key} className="flex gap-5 py-6">
                <Link
                  href={`/products/${line.handle}`}
                  className="h-28 w-24 shrink-0 rounded-lg"
                  style={{ backgroundColor: swatchMap[line.color] ?? "#D6CBB6" }}
                />
                <div className="flex flex-1 flex-col">
                  <div className="flex justify-between gap-4">
                    <div>
                      <Link
                        href={`/products/${line.handle}`}
                        className="font-medium hover:text-clay"
                      >
                        {line.name}
                      </Link>
                      <p className="mt-1 text-sm text-stone">
                        {line.color} · {line.size}
                      </p>
                    </div>
                    <span className="font-medium">
                      {formatPrice(line.price * line.quantity)}
                    </span>
                  </div>
                  <div className="mt-auto flex items-center justify-between pt-4">
                    <div className="flex items-center rounded-full border border-ink/20">
                      <button
                        className="px-3.5 py-2 text-sm"
                        onClick={() => updateQuantity(key, line.quantity - 1)}
                        aria-label="Decrease quantity"
                      >
                        −
                      </button>
                      <span className="min-w-8 text-center text-sm">
                        {line.quantity}
                      </span>
                      <button
                        className="px-3.5 py-2 text-sm"
                        onClick={() => updateQuantity(key, line.quantity + 1)}
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => removeLine(key)}
                      className="text-sm text-stone underline hover:text-clay"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        {/* Summary */}
        <aside className="h-fit rounded-2xl border border-ink/10 bg-cloud p-6 lg:sticky lg:top-24">
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em]">
            Order Summary
          </h2>
          <dl className="mt-5 space-y-3 text-sm">
            <div className="flex justify-between">
              <dt className="text-stone">Subtotal</dt>
              <dd>{formatPrice(subtotal)}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-stone">Shipping</dt>
              <dd>{shipping === 0 ? "Free" : formatPrice(shipping)}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-stone">Estimated tax</dt>
              <dd>{formatPrice(estTax)}</dd>
            </div>
            <div className="flex justify-between border-t border-ink/10 pt-3 text-base font-semibold">
              <dt>Total</dt>
              <dd>{formatPrice(total)}</dd>
            </div>
          </dl>
          <Link href="/checkout" className="btn-primary mt-6 w-full">
            Proceed to checkout
          </Link>
          <Link
            href="/shop"
            className="mt-3 block text-center text-sm text-stone underline"
          >
            Continue shopping
          </Link>
        </aside>
      </div>
    </div>
  );
}

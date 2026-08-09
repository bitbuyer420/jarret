"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/products";

const FREE_SHIP_THRESHOLD = 75;

export default function CartDrawer() {
  const {
    lines,
    isOpen,
    closeCart,
    subtotal,
    updateQuantity,
    removeLine,
    lineKey,
    count,
  } = useCart();

  // Lock body scroll while the drawer is open.
  useEffect(() => {
    if (isOpen) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [isOpen]);

  const remaining = Math.max(0, FREE_SHIP_THRESHOLD - subtotal);
  const progress = Math.min(100, (subtotal / FREE_SHIP_THRESHOLD) * 100);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-ink/40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Panel */}
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-paper shadow-2xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-label="Shopping cart"
        aria-modal="true"
      >
        <div className="flex items-center justify-between border-b border-ink/10 px-6 py-4">
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em]">
            Your Cart ({count})
          </h2>
          <button onClick={closeCart} aria-label="Close cart" className="text-2xl leading-none">
            ×
          </button>
        </div>

        {lines.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
            <p className="text-stone">Your cart is empty.</p>
            <Link href="/shop" onClick={closeCart} className="btn-primary">
              Start shopping
            </Link>
          </div>
        ) : (
          <>
            {/* Free shipping progress */}
            <div className="border-b border-ink/10 px-6 py-4">
              <p className="text-xs text-stone">
                {remaining > 0 ? (
                  <>
                    You&apos;re <span className="font-semibold text-ink">{formatPrice(remaining)}</span> away
                    from free shipping
                  </>
                ) : (
                  <span className="font-semibold text-sage">You&apos;ve unlocked free shipping!</span>
                )}
              </p>
              <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-ink/10">
                <div
                  className="h-full rounded-full bg-sage transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            <ul className="flex-1 divide-y divide-ink/10 overflow-y-auto px-6">
              {lines.map((line) => {
                const key = lineKey(line);
                return (
                  <li key={key} className="flex gap-4 py-4">
                    <div
                      className="h-20 w-16 shrink-0 rounded-md"
                      style={{ backgroundColor: colorFor(line.color) }}
                    />
                    <div className="flex flex-1 flex-col">
                      <div className="flex justify-between gap-2">
                        <Link
                          href={`/products/${line.handle}`}
                          onClick={closeCart}
                          className="text-sm font-medium hover:text-clay"
                        >
                          {line.name}
                        </Link>
                        <span className="text-sm">{formatPrice(line.price * line.quantity)}</span>
                      </div>
                      <p className="mt-0.5 text-xs text-stone">
                        {line.color} · {line.size}
                      </p>
                      <div className="mt-auto flex items-center justify-between">
                        <div className="flex items-center rounded-full border border-ink/20">
                          <button
                            className="px-2.5 py-1 text-sm"
                            onClick={() => updateQuantity(key, line.quantity - 1)}
                            aria-label="Decrease quantity"
                          >
                            −
                          </button>
                          <span className="min-w-6 text-center text-sm">{line.quantity}</span>
                          <button
                            className="px-2.5 py-1 text-sm"
                            onClick={() => updateQuantity(key, line.quantity + 1)}
                            aria-label="Increase quantity"
                          >
                            +
                          </button>
                        </div>
                        <button
                          onClick={() => removeLine(key)}
                          className="text-xs text-stone underline hover:text-clay"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="border-t border-ink/10 px-6 py-5">
              <div className="flex items-center justify-between text-sm">
                <span className="text-stone">Subtotal</span>
                <span className="text-base font-semibold">{formatPrice(subtotal)}</span>
              </div>
              <p className="mt-1 text-xs text-stone">
                Shipping & taxes calculated at checkout.
              </p>
              <Link
                href="/checkout"
                onClick={closeCart}
                className="btn-primary mt-4 w-full"
              >
                Checkout
              </Link>
              <button
                onClick={closeCart}
                className="mt-2 w-full text-center text-xs text-stone underline"
              >
                Continue shopping
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}

/** Map a color name back to a swatch hex for the mini thumbnail. */
function colorFor(name: string): string {
  const map: Record<string, string> = {
    Sand: "#D9C9AE", Ink: "#26221E", Sage: "#8A9A7B", Bone: "#EDE6D8",
    Olive: "#6E7355", Charcoal: "#3A3733", Oatmeal: "#D6CBB6", Navy: "#2C3444",
    Clay: "#B5533A", Fog: "#C7C3BA", Rust: "#A0522D", Black: "#211E1B",
    Tobacco: "#7C5A3C", Slate: "#4A4F57", Moss: "#5A6350", Indigo: "#38455F",
    Washed: "#8592A6", Stone: "#B7A98D", Flax: "#D8C9A9", Sea: "#6E8B8E",
    Oat: "#D6CBB6", Natural: "#E2D8C3", Tan: "#A9764A", Cognac: "#7C4A2D",
  };
  return map[name] ?? "#D6CBB6";
}

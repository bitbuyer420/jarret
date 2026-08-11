"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { formatPrice, swatchMap } from "@/lib/products";

const FREE_SHIP_THRESHOLD = 75;
const SHIPPING_FLAT = 8;

export default function CheckoutPage() {
  const { lines, subtotal, clearCart, lineKey } = useCart();
  const [placed, setPlaced] = useState(false);
  const [orderId, setOrderId] = useState("");

  const shipping =
    subtotal >= FREE_SHIP_THRESHOLD ? 0 : SHIPPING_FLAT;
  const estTax = Math.round(subtotal * 0.0825 * 100) / 100;
  const total = subtotal + shipping + estTax;

  function placeOrder(e: React.FormEvent) {
    e.preventDefault();
    // Deterministic-ish order id from cart contents (no external calls).
    const id =
      "MER-" +
      Math.abs(
        lines.reduce((acc, l) => acc + l.name.length * l.quantity, subtotal | 0),
      )
        .toString()
        .padStart(6, "0")
        .slice(0, 6);
    setOrderId(id);
    setPlaced(true);
    clearCart();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (placed) {
    return (
      <div className="container-site flex min-h-[60vh] flex-col items-center justify-center py-16 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-sage/20 text-sage">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="m5 12 5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h1 className="mt-6 font-serif text-3xl">Thank you for your order</h1>
        <p className="mt-3 max-w-md text-stone">
          Your order <span className="font-semibold text-ink">{orderId}</span> is
          confirmed. We&apos;ve sent a receipt to your email and you&apos;ll get
          tracking as soon as it ships.
        </p>
        <div className="mt-8 flex gap-3">
          <Link href="/shop" className="btn-primary">
            Keep shopping
          </Link>
          <Link href="/" className="btn-secondary">
            Back home
          </Link>
        </div>
        <p className="mt-10 max-w-sm text-xs text-stone">
          This is a demo storefront — no payment was processed and no real order
          was placed.
        </p>
      </div>
    );
  }

  if (lines.length === 0) {
    return (
      <div className="container-site flex min-h-[50vh] flex-col items-center justify-center gap-5 py-20 text-center">
        <h1 className="font-serif text-3xl">Nothing to check out</h1>
        <p className="text-stone">Your cart is empty.</p>
        <Link href="/shop" className="btn-primary">
          Shop the collection
        </Link>
      </div>
    );
  }

  return (
    <div className="container-site py-12">
      <Link href="/cart" className="text-sm text-stone underline">
        ← Back to cart
      </Link>
      <h1 className="mt-4 font-serif text-4xl">Checkout</h1>

      <form
        onSubmit={placeOrder}
        className="mt-10 grid gap-12 lg:grid-cols-[1fr_380px]"
      >
        {/* Form fields */}
        <div className="space-y-10">
          <Section title="Contact">
            <Field label="Email" type="email" name="email" placeholder="you@example.com" full />
          </Section>

          <Section title="Shipping address">
            <Field label="First name" name="firstName" />
            <Field label="Last name" name="lastName" />
            <Field label="Address" name="address" full placeholder="123 Main St" />
            <Field label="Apartment, suite (optional)" name="apt" full required={false} />
            <Field label="City" name="city" />
            <div className="grid grid-cols-2 gap-4">
              <Field label="State" name="state" />
              <Field label="ZIP" name="zip" />
            </div>
          </Section>

          <Section title="Payment">
            <div className="rounded-xl border border-ink/15 bg-cloud p-4 sm:col-span-2">
              <div className="flex items-center gap-2 text-sm font-medium">
                <span className="inline-block h-2 w-2 rounded-full bg-sage" />
                Demo payment — no card required
              </div>
              <p className="mt-1 text-xs text-stone">
                This storefront is a demo. Placing the order simulates a
                successful checkout without processing any payment.
              </p>
            </div>
            <Field label="Name on card" name="cardName" full placeholder="Full name" required={false} />
            <Field label="Card number" name="card" full placeholder="4242 4242 4242 4242" required={false} />
            <div className="grid grid-cols-2 gap-4 sm:col-span-2">
              <Field label="Expiry" name="exp" placeholder="MM / YY" required={false} />
              <Field label="CVC" name="cvc" placeholder="123" required={false} />
            </div>
          </Section>

          <button type="submit" className="btn-primary w-full sm:w-auto">
            Place order · {formatPrice(total)}
          </button>
        </div>

        {/* Order summary */}
        <aside className="h-fit rounded-2xl border border-ink/10 bg-cloud p-6 lg:sticky lg:top-24">
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em]">
            Order Summary
          </h2>
          <ul className="mt-5 space-y-4">
            {lines.map((line) => (
              <li key={lineKey(line)} className="flex gap-3">
                <div className="relative">
                  <div
                    className="h-14 w-12 rounded-md"
                    style={{ backgroundColor: swatchMap[line.color] ?? "#D6CBB6" }}
                  />
                  <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-ink text-[10px] font-semibold text-cloud">
                    {line.quantity}
                  </span>
                </div>
                <div className="flex flex-1 justify-between text-sm">
                  <div>
                    <p className="font-medium">{line.name}</p>
                    <p className="text-xs text-stone">
                      {line.color} · {line.size}
                    </p>
                  </div>
                  <span>{formatPrice(line.price * line.quantity)}</span>
                </div>
              </li>
            ))}
          </ul>
          <dl className="mt-6 space-y-2 border-t border-ink/10 pt-4 text-sm">
            <Row label="Subtotal" value={formatPrice(subtotal)} />
            <Row label="Shipping" value={shipping === 0 ? "Free" : formatPrice(shipping)} />
            <Row label="Estimated tax" value={formatPrice(estTax)} />
          </dl>
          <div className="mt-3 flex justify-between border-t border-ink/10 pt-3 text-base font-semibold">
            <span>Total</span>
            <span>{formatPrice(total)}</span>
          </div>
        </aside>
      </form>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em]">
        {title}
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">{children}</div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  full,
  required = true,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  full?: boolean;
  required?: boolean;
}) {
  return (
    <label className={`block text-sm ${full ? "sm:col-span-2" : ""}`}>
      <span className="mb-1.5 block text-stone">{label}</span>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-lg border border-ink/15 bg-paper px-3.5 py-2.5 outline-none focus:border-ink"
      />
    </label>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between">
      <dt className="text-stone">{label}</dt>
      <dd>{value}</dd>
    </div>
  );
}

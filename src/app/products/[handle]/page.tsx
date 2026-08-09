import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  formatPrice,
  getProduct,
  products,
  relatedProducts,
} from "@/lib/products";
import ProductImage from "@/components/ProductImage";
import ProductGrid from "@/components/ProductGrid";
import AddToCart from "@/components/AddToCart";

type Params = { params: { handle: string } };

export function generateStaticParams() {
  return products.map((p) => ({ handle: p.handle }));
}

export function generateMetadata({ params }: Params): Metadata {
  const product = getProduct(params.handle);
  if (!product) return { title: "Product" };
  return {
    title: product.name,
    description: product.tagline,
  };
}

export default function ProductPage({ params }: Params) {
  const product = getProduct(params.handle);
  if (!product) notFound();

  const related = relatedProducts(product);
  const onSale =
    product.compareAtPrice && product.compareAtPrice > product.price;

  return (
    <div className="container-site py-8 md:py-12">
      {/* Breadcrumb */}
      <nav className="mb-6 text-xs text-stone">
        <Link href="/" className="hover:text-ink">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/shop" className="hover:text-ink">Shop</Link>
        <span className="mx-2">/</span>
        <span className="text-ink">{product.name}</span>
      </nav>

      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Gallery */}
        <div className="hidden lg:block">
          <div className="overflow-hidden rounded-2xl">
            <ProductImage
              category={product.category}
              colorHex={product.colors[0].hex}
              handle={product.handle}
              className="aspect-square w-full"
            />
          </div>
          <div className="mt-4 grid grid-cols-3 gap-4">
            {product.colors.slice(0, 3).map((c) => (
              <div key={c.name} className="overflow-hidden rounded-xl">
                <ProductImage
                  category={product.category}
                  colorHex={c.hex}
                  handle={product.handle}
                  className="aspect-square w-full"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Details */}
        <div className="lg:py-4">
          <p className="eyebrow">{product.category}</p>
          <h1 className="mt-2 font-serif text-3xl md:text-4xl">{product.name}</h1>
          <p className="mt-2 text-stone">{product.tagline}</p>

          <div className="mt-4 flex items-center gap-3">
            <span className="text-2xl font-medium">{formatPrice(product.price)}</span>
            {onSale && (
              <>
                <span className="text-lg text-stone line-through">
                  {formatPrice(product.compareAtPrice!)}
                </span>
                <span className="rounded-full bg-clay/10 px-2.5 py-1 text-xs font-semibold text-clay">
                  Save {formatPrice(product.compareAtPrice! - product.price)}
                </span>
              </>
            )}
          </div>

          <p className="mt-6 leading-relaxed text-ink/80">{product.description}</p>

          <div className="mt-8">
            <AddToCart product={product} />
          </div>

          {/* Details accordion-ish */}
          <div className="mt-10 space-y-5 border-t border-ink/10 pt-8">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wider">
                Details
              </h2>
              <ul className="mt-3 space-y-1.5 text-sm text-ink/75">
                {product.details.map((d) => (
                  <li key={d} className="flex gap-2">
                    <span className="mt-1.5 inline-block h-1 w-1 shrink-0 rounded-full bg-clay" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wider">
                Materials & Care
              </h2>
              <p className="mt-2 text-sm text-ink/75">{product.materials}</p>
              <p className="mt-1 text-sm text-ink/75">
                Machine wash cold, tumble dry low. Wash with like colors.
              </p>
            </div>
            <div className="flex gap-6 text-xs text-stone">
              <span>✓ Free shipping over $75</span>
              <span>✓ 30-day returns</span>
            </div>
          </div>
        </div>
      </div>

      {/* Related */}
      <section className="mt-20">
        <h2 className="mb-8 font-serif text-2xl">You might also like</h2>
        <ProductGrid products={related} />
      </section>
    </div>
  );
}

import Link from "next/link";
import { collections, products } from "@/lib/products";
import ProductGrid from "@/components/ProductGrid";
import ProductImage from "@/components/ProductImage";

export default function HomePage() {
  const featured = products.filter((p) => p.featured).slice(0, 8);
  const bestSellers = products.filter((p) => p.bestSeller).slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-cloud">
        <div className="container-site grid items-center gap-10 py-16 md:grid-cols-2 md:py-24">
          <div className="animate-fade-up">
            <p className="eyebrow">Snapbacks · Fall 2026</p>
            <h1 className="mt-4 font-serif text-4xl leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Wear the
              <br />
              wild.
            </h1>
            <p className="mt-6 max-w-md text-base text-stone">
              Merchant Frontier makes one thing — a structured flat-brim snapback
              — stitched with the animals of the range. Buffalo, elk, longhorn.
              Pick your mark.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/shop" className="btn-primary">
                Shop the collection
              </Link>
              <Link href="/collections/new-arrivals" className="btn-secondary">
                New arrivals
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {products.slice(0, 2).map((p, i) => (
                <Link
                  key={p.id}
                  href={`/products/${p.handle}`}
                  className={`overflow-hidden rounded-2xl ${i === 1 ? "mt-8" : ""}`}
                >
                  <ProductImage
                    category={p.category}
                    colorHex={p.colors[0].hex}
                    handle={p.handle}
                    className="aspect-[3/4] w-full transition-transform duration-500 hover:scale-105"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Value props */}
      <section className="border-y border-ink/10">
        <div className="container-site grid grid-cols-2 gap-6 py-8 text-center md:grid-cols-4">
          {[
            { t: "Animals of the range", d: "Buffalo, elk & longhorn marks" },
            { t: "One size fits most", d: "Snapback closure, always" },
            { t: "Free shipping", d: "On orders over $75" },
            { t: "30-day returns", d: "Easy, no-fuss exchanges" },
          ].map((v) => (
            <div key={v.t}>
              <p className="text-sm font-semibold">{v.t}</p>
              <p className="mt-1 text-xs text-stone">{v.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured products */}
      <section className="container-site py-16 md:py-20">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="eyebrow">Just landed</p>
            <h2 className="mt-2 font-serif text-3xl">Featured</h2>
          </div>
          <Link href="/shop" className="link-underline hidden text-sm sm:block">
            View all →
          </Link>
        </div>
        <ProductGrid products={featured} />
      </section>

      {/* Collections */}
      <section className="bg-cloud">
        <div className="container-site py-16 md:py-20">
          <div className="mb-8">
            <p className="eyebrow">Shop by category</p>
            <h2 className="mt-2 font-serif text-3xl">Collections</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {collections.map((c) => (
              <Link
                key={c.handle}
                href={`/collections/${c.handle}`}
                className="group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-2xl p-6 text-cloud"
                style={{
                  background: `linear-gradient(180deg, ${c.accent}00 30%, ${c.accent} 100%), ${c.accent}`,
                }}
              >
                <h3 className="text-lg font-semibold">{c.title}</h3>
                <p className="mt-1 text-sm text-cloud/80">Shop now →</p>
                <span
                  className="absolute inset-0 -z-0 opacity-20 transition-transform duration-500 group-hover:scale-110"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 30% 20%, #ffffff55, transparent 60%)",
                  }}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Best sellers */}
      <section className="container-site py-16 md:py-20">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="eyebrow">Tried & true</p>
            <h2 className="mt-2 font-serif text-3xl">Best sellers</h2>
          </div>
          <Link href="/shop" className="link-underline hidden text-sm sm:block">
            View all →
          </Link>
        </div>
        <ProductGrid products={bestSellers} />
      </section>

      {/* Editorial band */}
      <section className="bg-ink text-cloud">
        <div className="container-site grid items-center gap-10 py-16 md:grid-cols-2 md:py-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-clay">
              The Merchant Frontier promise
            </p>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl">
              One cap. The whole herd.
            </h2>
            <p className="mt-5 max-w-md text-cloud/70">
              We believe in doing one thing well. A single, perfected snapback —
              then the animals of the frontier stitched across the front:
              buffalo, elk, and longhorn, plus our heritage marks. Same great
              cap, your choice of beast.
            </p>
            <Link href="/about" className="btn mt-8 border border-cloud/30 text-cloud hover:bg-cloud hover:text-ink">
              Read our story
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {products.slice(2, 5).map((p) => (
              <div key={p.id} className="overflow-hidden rounded-xl">
                <ProductImage
                  category={p.category}
                  colorHex={p.colors[0].hex}
                  handle={p.handle}
                  className="aspect-[3/4] w-full"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "Meridian makes fewer, better things — considered apparel in natural fibers, made responsibly.",
};

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="border-b border-ink/10 bg-cloud">
        <div className="container-site py-16 md:py-24">
          <p className="eyebrow">Our Story</p>
          <h1 className="mt-3 max-w-3xl font-serif text-4xl leading-tight md:text-5xl">
            We started Meridian to make clothes worth keeping.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-stone">
            In a world of fast fashion and disposable trends, we chose a
            different path: a small, considered collection of essentials, built
            from natural fibers and made to last for years, not seasons.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="container-site grid gap-10 py-16 md:grid-cols-3">
        {[
          {
            t: "Considered design",
            d: "We release a tight collection of pieces designed to work together. No noise, no logos — just honest cuts and quiet color.",
          },
          {
            t: "Natural materials",
            d: "Organic cotton, extra-fine merino, and European linen. Fibers that feel good, breathe well, and age gracefully.",
          },
          {
            t: "Made responsibly",
            d: "We partner with a small number of factories we've visited and vetted, and we design out waste wherever we can.",
          },
        ].map((v) => (
          <div key={v.t}>
            <div className="mb-4 h-px w-10 bg-clay" />
            <h2 className="text-lg font-semibold">{v.t}</h2>
            <p className="mt-3 text-stone">{v.d}</p>
          </div>
        ))}
      </section>

      {/* Sustainability */}
      <section id="sustainability" className="bg-ink text-cloud">
        <div className="container-site grid items-center gap-10 py-16 md:grid-cols-2 md:py-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-clay">
              Sustainability
            </p>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl">
              Better by design, not by accident.
            </h2>
          </div>
          <div className="space-y-6">
            {[
              ["Natural & recycled fibers", "Over 90% of our line is natural or recycled materials."],
              ["Low-impact dyeing", "Garment-dyed in facilities that recycle water."],
              ["Built to last", "We design for durability, then repair rather than replace."],
              ["Plastic-free shipping", "Recycled, recyclable mailers — no single-use plastic."],
            ].map(([t, d]) => (
              <div key={t} className="border-t border-cloud/15 pt-4">
                <h3 className="font-medium">{t}</h3>
                <p className="mt-1 text-sm text-cloud/70">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section id="contact" className="container-site py-16 text-center md:py-24">
        <h2 className="font-serif text-3xl">Questions? We&apos;re here.</h2>
        <p className="mx-auto mt-4 max-w-md text-stone">
          Reach us at{" "}
          <a href="mailto:hello@meridian.example.com" className="link-underline text-ink">
            hello@meridian.example.com
          </a>
          . We answer every message within one business day.
        </p>
        <Link href="/shop" className="btn-primary mt-8">
          Explore the collection
        </Link>
      </section>
    </div>
  );
}

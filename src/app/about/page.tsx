import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "Merchant Frontier makes one thing — a great snapback — and a growing set of front graphics to put on it.",
};

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="border-b border-ink/10 bg-cloud">
        <div className="container-site py-16 md:py-24">
          <p className="eyebrow">Our Story</p>
          <h1 className="mt-3 max-w-3xl font-serif text-4xl leading-tight md:text-5xl">
            We started Merchant Frontier to perfect one cap.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-stone">
            Most brands make everything. We chose the opposite: one snapback,
            obsessed over until it was right — the crown, the brim, the fit —
            then a growing set of front graphics to make it yours.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="container-site grid gap-10 py-16 md:grid-cols-3">
        {[
          {
            t: "One perfected cap",
            d: "A single structured six-panel snapback with a flat brim and a true one-size fit. We got it right, then stopped fiddling with the cap.",
          },
          {
            t: "Animals of the range",
            d: "Buffalo, elk, and longhorn — drawn in-house and built for embroidery. Bold, tonal, and made to last as long as the cap they're on.",
          },
          {
            t: "Made responsibly",
            d: "We partner with a small number of workshops we've visited and vetted, and we design out waste wherever we can.",
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
              ["Natural & recycled materials", "Organic cotton twill and recycled backing across the line."],
              ["Low-impact dyeing", "Piece-dyed in facilities that recycle water."],
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
          <a href="mailto:hello@merchantfrontier.example.com" className="link-underline text-ink">
            hello@merchantfrontier.example.com
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

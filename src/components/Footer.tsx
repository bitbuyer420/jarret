import Link from "next/link";
import { collections } from "@/lib/products";
import NewsletterForm from "./NewsletterForm";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-ink/10 bg-cloud">
      <div className="container-site grid gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-1">
          <p className="text-xl font-semibold tracking-[0.28em]">MERIDIAN</p>
          <p className="mt-4 max-w-xs text-sm text-stone">
            Considered, well-made apparel built to be worn on repeat. Designed in
            Portland, made responsibly.
          </p>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink">
            Shop
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-stone">
            <li>
              <Link href="/shop" className="link-underline">
                All Products
              </Link>
            </li>
            {collections.map((c) => (
              <li key={c.handle}>
                <Link href={`/collections/${c.handle}`} className="link-underline">
                  {c.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink">
            Company
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-stone">
            <li>
              <Link href="/about" className="link-underline">
                Our Story
              </Link>
            </li>
            <li>
              <Link href="/about#sustainability" className="link-underline">
                Sustainability
              </Link>
            </li>
            <li>
              <Link href="/shop" className="link-underline">
                Size Guide
              </Link>
            </li>
            <li>
              <Link href="/about#contact" className="link-underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink">
            Stay in the loop
          </h3>
          <p className="mt-4 text-sm text-stone">
            Early access to drops and 10% off your first order.
          </p>
          <NewsletterForm />
        </div>
      </div>

      <div className="border-t border-ink/10">
        <div className="container-site flex flex-col items-center justify-between gap-3 py-6 text-xs text-stone sm:flex-row">
          <p>© {new Date().getFullYear()} Meridian Supply Co. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/about" className="link-underline">
              Privacy
            </Link>
            <Link href="/about" className="link-underline">
              Terms
            </Link>
            <Link href="/about" className="link-underline">
              Returns
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

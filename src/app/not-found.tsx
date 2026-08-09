import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-site flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-3 font-serif text-4xl">This page went out of stock</h1>
      <p className="mt-4 max-w-sm text-stone">
        We couldn&apos;t find the page you were looking for. It may have moved or
        never existed.
      </p>
      <div className="mt-8 flex gap-3">
        <Link href="/" className="btn-primary">
          Back home
        </Link>
        <Link href="/shop" className="btn-secondary">
          Shop all
        </Link>
      </div>
    </div>
  );
}

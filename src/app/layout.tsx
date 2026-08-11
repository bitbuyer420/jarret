import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import Announcement from "@/components/Announcement";

export const metadata: Metadata = {
  title: {
    default: "Merchant Frontier — Snapback Caps",
    template: "%s · Merchant Frontier",
  },
  description:
    "Merchant Frontier makes considered, well-made snapback caps built to be worn on repeat. Free shipping over $75.",
  metadataBase: new URL("https://merchantfrontier.example.com"),
  openGraph: {
    title: "Merchant Frontier — Snapback Caps",
    description:
      "Considered, well-made snapback caps built to be worn on repeat.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <CartProvider>
          <Announcement />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}

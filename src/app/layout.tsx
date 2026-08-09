import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import Announcement from "@/components/Announcement";

export const metadata: Metadata = {
  title: {
    default: "Meridian — Modern Essentials",
    template: "%s · Meridian",
  },
  description:
    "Meridian makes considered, well-made apparel built to be worn on repeat. Free shipping over $75.",
  metadataBase: new URL("https://meridian.example.com"),
  openGraph: {
    title: "Meridian — Modern Essentials",
    description:
      "Considered, well-made apparel built to be worn on repeat.",
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

import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "WhatBytes Frontend Assignment",
  description: "E-commerce product listing app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <CartProvider>
          <main className="flex-1">{children}</main>

          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}

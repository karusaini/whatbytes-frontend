"use client";
import Header from "@/components/layout/Header";
import ProductGrid from "@/components/product/ProductGrid";
import ProductFilters from "@/components/product/ProductFilters";
import { products } from "@/data/products";
import { filterProducts } from "@/lib/filters";
import { useSearchParams } from "next/navigation";

export default function HomePage() {
  const searchParams = useSearchParams();
  const filteredProducts = filterProducts(products, searchParams);

  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto p-4 grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <aside className="lg:col-span-1">
          <ProductFilters />
        </aside>

        {/* Product Grid */}
        <section className="lg:col-span-3">
          <ProductGrid products={filteredProducts} />
        </section>
      </main>
    </>
  );
}

"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { products } from "@/data/products";
import { filterProducts } from "@/lib/filters";
import ProductGrid from "@/components/product/ProductGrid";
import ProductFilters from "@/components/product/ProductFilters";

function Content() {
  const searchParams = useSearchParams();
  const filteredProducts = filterProducts(products, searchParams);

  return (
    <main className="max-w-7xl mx-auto p-4 grid grid-cols-1 lg:grid-cols-4 gap-6">
      <aside className="lg:col-span-1">
        <ProductFilters />
      </aside>

      <section className="lg:col-span-3">
        <ProductGrid products={filteredProducts} />
      </section>
    </main>
  );
}

export default function HomeClient() {
  return (
    <Suspense fallback={null}>
      <Content />
    </Suspense>
  );
}

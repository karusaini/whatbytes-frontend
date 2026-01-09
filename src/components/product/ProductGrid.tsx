import ProductCard from "./ProductCard";

type ProductGridProps = {
  products: any[];
};

export default function ProductGrid({ products }: ProductGridProps) {
  if (products.length === 0) {
    return <p className="text-center text-gray-500">No products found</p>;
  }

  return (
    <div
      className="grid gap-6
      grid-cols-1
      sm:grid-cols-2
      lg:grid-cols-3"
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

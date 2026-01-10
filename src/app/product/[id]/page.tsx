"use client";
export const dynamic = "force-dynamic";

import Image from "next/image";
import { useRouter, useParams } from "next/navigation";
import { useContext, useState } from "react";

import { products } from "@/data/products";
import { CartContext } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import StarRating from "@/components/common/StarRating";
import Reviews from "@/components/product/Reviews";
import { Minus, Plus } from "lucide-react";

export default function ProductDetailPage() {
  const params = useParams<{ id: string }>();

  const product = products.find((item) => item.id === params.id);

  const router = useRouter();
  const { addToCart } = useContext(CartContext);

  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <div className="p-10 text-center">Product not found</div>;
  }

  const increase = () => setQuantity((prev) => prev + 1);
  const decrease = () => setQuantity((prev) => Math.max(1, prev - 1));

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Button
        variant="outline"
        className="mb-6"
        onClick={() => router.push("/")}
      >
        ← Back to Home
      </Button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
        <div className="bg-white border rounded-lg p-4 flex justify-center">
          <Image
            src={product.image}
            alt={product.title}
            width={500}
            height={500}
            className="rounded-lg object-contain max-h-150 w-full"
          />
        </div>

        <div className="flex flex-col">
          <h1 className="text-2xl md:text-3xl font-bold">{product.title}</h1>

          <div className="mt-2 flex items-center gap-1">
            <StarRating rating={product.rating} />
            <span className="text-gray-500 text-sm"></span>
          </div>

          <p className="text-gray-600 mt-4 text-sm md:text-base">
            {product.description}
          </p>

          <p className="text-xl md:text-2xl font-semibold mt-6">
            ₹{product.price.toLocaleString()}
          </p>

          <p className="text-sm text-gray-500 mt-2 capitalize">
            Category: {product.category}
          </p>

          <div className="flex items-center gap-2 mt-4">
            <Button size="sm" variant="outline" onClick={decrease}>
              <Minus className="w-4 h-4" />
            </Button>
            <span className="w-8 text-center">{quantity}</span>
            <Button size="sm" variant="outline" onClick={increase}>
              <Plus className="w-4 h-4" />
            </Button>
          </div>

          <Button
            className="mt-6 w-full md:w-1/2 cursor-pointer"
            onClick={() => addToCart({ ...product, quantity })}
          >
            Add to Cart
          </Button>
        </div>
      </div>

      <div className="mt-10">
        <Reviews />
      </div>
    </div>
  );
}

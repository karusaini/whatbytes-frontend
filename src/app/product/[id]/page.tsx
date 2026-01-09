"use client";

import Image from "next/image";
import { notFound, useParams } from "next/navigation";
import { useContext } from "react";

import { products } from "@/data/products";
import { CartContext } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import StarRating from "@/components/common/StarRating";
import Reviews from "@/components/product/Reviews";

export default function ProductDetailPage() {
  const params = useParams(); // ✅ FIX
  const { addToCart } = useContext(CartContext);

  const product = products.find((item) => item.id === params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="grid md:grid-cols-2 gap-10">
        {/* Image */}
        <div className="border rounded-lg p-4">
          <Image
            src={product.image}
            alt={product.title}
            width={500}
            height={400}
            className="rounded-lg object-cover w-full"
          />
        </div>

        {/* Details */}
        <div>
          <h1 className="text-2xl font-bold">{product.title}</h1>

          <div className="mt-2">
            <StarRating rating={product.rating} />
          </div>

          <p className="text-gray-600 mt-4">{product.description}</p>

          <p className="text-xl font-semibold mt-6">
            ₹{product.price.toLocaleString()}
          </p>

          <p className="text-sm text-gray-500 mt-2 capitalize">
            Category: {product.category}
          </p>

          <Button
            className="mt-6"
            onClick={() => addToCart({ ...product, quantity: 1 })}
          >
            Add to Cart
          </Button>
        </div>
      </div>

      <Reviews />
    </div>
  );
}

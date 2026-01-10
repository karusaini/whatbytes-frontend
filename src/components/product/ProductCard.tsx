"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useContext } from "react";
import { CartContext } from "@/context/CartContext";
import StarRating from "@/components/common/StarRating";

export default function ProductCard({ product }: any) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="bg-white rounded-lg border p-4 hover:shadow-md transition flex flex-col">
      <Link
        href={`/product/${product.id}`}
        className="flex flex-col items-center text-center flex-1"
      >
        <img
          src={product.image}
          alt={product.title}
          className="rounded-md object-contain w-full h-55 md:h-65"
        />

        <h3 className="mt-3 font-medium line-clamp-1">{product.title}</h3>

        <div className="mt-1">
          <StarRating rating={product.rating} />
        </div>

        <p className="text-sm text-gray-500 mt-2 line-clamp-2">
          {product.description}
        </p>
      </Link>

      <p className="mt-3 font-semibold text-lg text-center">
        ₹{product.price.toLocaleString()}
      </p>

      <Button
        className="w-full mt-3 cursor-pointer"
        onClick={() => addToCart({ ...product, quantity: 1 })}
      >
        Add to Cart
      </Button>
    </div>
  );
}

"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useContext, Suspense } from "react";
import { CartContext } from "@/context/CartContext";
import SearchBar from "./SearchBar";

export default function Header() {
  const { cartItems } = useContext(CartContext);
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <Link href="/" className="text-xl font-bold">
          WhatBytes
        </Link>

        {/* ✅ FIX HERE */}
        <Suspense fallback={null}>
          <SearchBar />
        </Suspense>

        <div className="flex items-center gap-4">
          <Link href="/cart" className="relative">
            <ShoppingCart className="w-6 h-6" />
            {cartCount > 0 && (
              <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                {cartCount}
              </Badge>
            )}
          </Link>

          <Avatar>
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}

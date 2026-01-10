"use client";

import { useContext } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { CartContext } from "@/context/CartContext";
import CartItem from "@/components/cart/CartItem";
import { Button } from "@/components/ui/button";

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-blue-600 mb-6"
      >
        <ArrowLeft className="w-4 h-4" />
        Continue Shopping
      </Link>

      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-lg text-gray-500">Your cart is empty 🛒</p>
          <Link href="/">
            <Button className="mt-4">Go Shopping</Button>
          </Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-[1fr_300px] gap-6">
          <div className="space-y-4">
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onRemove={removeFromCart}
                onUpdateQuantity={updateQuantity}
              />
            ))}
          </div>

          <div className="border rounded-lg p-4 h-fit bg-white">
            <h2 className="font-semibold text-lg mb-4">Order Summary</h2>

            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>₹{subtotal.toLocaleString()}</span>
            </div>

            <div className="flex justify-between mb-4 text-gray-600">
              <span>Delivery</span>
              <span>Free</span>
            </div>

            <div className="flex justify-between font-bold text-lg border-t pt-4">
              <span>Total</span>
              <span>₹{subtotal.toLocaleString()}</span>
            </div>

            <Button className="w-full mt-6">Proceed to Checkout</Button>
          </div>
        </div>
      )}
    </div>
  );
}

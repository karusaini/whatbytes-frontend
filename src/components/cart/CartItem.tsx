"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Trash2 } from "lucide-react";

type CartItemProps = {
  item: {
    id: string;
    title: string;
    price: number;
    image: string;
    quantity: number;
  };
  onRemove: (id: string) => void;
  onUpdateQuantity: (id: string, quantity: number) => void;
};

export default function CartItem({
  item,
  onRemove,
  onUpdateQuantity,
}: CartItemProps) {
  return (
    <div className="flex gap-4 border rounded-lg p-4 items-center">
      <Image
        src={item.image}
        alt={item.title}
        width={80}
        height={80}
        className="rounded-md object-cover"
      />

      <div className="flex-1">
        <h3 className="font-medium">{item.title}</h3>
        <p className="text-gray-600">₹{item.price}</p>
      </div>

      <div className="flex items-center gap-2">
        <Button
          size="sm"
          variant="outline"
          onClick={() =>
            onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))
          }
        >
          -
        </Button>

        <span className="w-6 text-center">{item.quantity}</span>

        <Button
          size="sm"
          variant="outline"
          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
        >
          +
        </Button>
      </div>

      <Button
        size="icon"
        variant="destructive"
        onClick={() => onRemove(item.id)}
        className="cursor-pointer"
      >
        <Trash2 className="w-4 h-4" />
      </Button>
    </div>
  );
}

"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Slider } from "@/components/ui/slider";

const categories = ["electronics", "fashion", "books", "beauty"];

export default function ProductFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const selectedCategory = searchParams.get("category");
  const priceParam = searchParams.get("price") || "0-100000";
  const [minPrice, maxPrice] = priceParam.split("-").map(Number);

  const updateParams = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) params.set(key, value);
    else params.delete(key);

    router.push(`/?${params.toString()}`);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg border p-4 shadow-sm">
        <h3 className="font-semibold mb-3">Category</h3>
        <div className="space-y-2">
          {categories.map((cat) => (
            <label key={cat} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                checked={selectedCategory === cat}
                onChange={() => updateParams("category", cat)}
              />
              <span className="capitalize">{cat}</span>
            </label>
          ))}
          <button
            onClick={() => updateParams("category", "")}
            className="text-sm text-blue-600 mt-2"
          >
            Clear
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg border p-4 shadow-sm">
        <h3 className="font-semibold mb-3">Price Range</h3>
        <Slider
          defaultValue={[minPrice, maxPrice]}
          max={100000}
          step={1000}
          className="mt-4"
          onValueChange={(value) =>
            updateParams("price", `${value[0]}-${value[1]}`)
          }
        />
        <div className="flex justify-between text-sm mt-4 text-gray-700">
          <span>₹{minPrice}</span>
          <span>₹{maxPrice}</span>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState("");

  // initialize query on client
  useEffect(() => {
    setQuery(searchParams.get("search") || "");
  }, [searchParams]);

  // update URL param as user types
  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    if (query) params.set("search", query);
    else params.delete("search");

    router.replace(`/?${params.toString()}`);
  }, [query]);

  return (
    <div className="flex-1 max-w-md relative">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
      <Input
        placeholder="Search products..."
        className="pl-9"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}

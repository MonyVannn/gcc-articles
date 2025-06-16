"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { Input } from "@/components/ui/input"; // Tailwind UI input if you're using shadcn
import { useState, useEffect } from "react";

export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const defaultSearch = searchParams.get("search") || "";
  const [search, setSearch] = useState(defaultSearch);

  useEffect(() => {
    const debounce = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString());
      if (search) {
        params.set("search", search);
      } else {
        params.delete("search");
      }
      params.delete("page"); // Reset to page 1 on new search
      router.push(`?${params.toString()}`);
    }, 500); // debounce input

    return () => clearTimeout(debounce);
  }, [search]);

  return (
    <Input
      type="text"
      placeholder="Search articles..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full max-w-sm"
    />
  );
}

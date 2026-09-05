"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X } from "lucide-react";
import { products, categories, type Product, type ProductCategory } from "@/data/products";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";

type SortOption = "featured" | "az" | "za";

export default function ShopClient() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<"ALL" | ProductCategory>("ALL");
  const [sort, setSort] = useState<SortOption>("featured");
  const [active, setActive] = useState<Product | null>(null);

  const filtered = useMemo(() => {
    let list = products.filter((p) => {
      const matchesCategory = category === "ALL" || p.category === category;
      const matchesQuery =
        query.trim().length === 0 ||
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });

    if (sort === "az") {
      list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    } else if (sort === "za") {
      list = [...list].sort((a, b) => b.name.localeCompare(a.name));
    } else {
      list = [...list].sort((a, b) => Number(b.featured) - Number(a.featured));
    }
    return list;
  }, [query, category, sort]);

  const clearFilters = () => {
    setQuery("");
    setCategory("ALL");
    setSort("featured");
  };

  const hasActiveFilters = query.trim().length > 0 || category !== "ALL";

  return (
    <div>
      <div className="flex flex-col gap-5">
        <div className="relative w-full sm:max-w-md">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-seafoam-dim"
            aria-hidden="true"
          />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search fishes, tanks, filters…"
            aria-label="Search products"
            className="w-full rounded-full bg-navy/60 border border-ocean/70 focus:border-cyan pl-11 pr-4 py-3 text-base sm:text-sm text-pearl placeholder:text-seafoam-dim outline-none transition-colors min-h-[44px]"
          />
        </div>

        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 -my-1 max-w-full flex-nowrap sm:flex-wrap">
          {categories.map((c) => (
            <button
              key={c.value}
              type="button"
              onClick={() => setCategory(c.value)}
              aria-pressed={category === c.value}
              className={`shrink-0 rounded-full px-4 py-2.5 sm:py-2 text-sm border transition-colors min-h-[40px] sm:min-h-[36px] flex items-center justify-center ${
                category === c.value
                  ? "bg-cyan text-abyss-deep border-cyan font-medium"
                  : "border-ocean/70 text-seafoam hover:border-cyan/60 hover:text-pearl"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-seafoam-dim">
            {filtered.length} {filtered.length === 1 ? "product" : "products"}
          </p>
          <div className="flex items-center gap-3">
            {hasActiveFilters && (
              <button
                type="button"
                onClick={clearFilters}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-coral-soft hover:text-coral transition-colors min-h-[36px] px-2"
              >
                <X size={14} aria-hidden="true" />
                Clear filters
              </button>
            )}
            <label className="text-xs sm:text-sm text-seafoam-dim flex items-center gap-2">
              Sort
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as SortOption)}
                className="rounded-lg bg-navy/60 border border-ocean/70 text-pearl text-base sm:text-sm px-3 py-2 outline-none focus:border-cyan min-h-[38px]"
              >
                <option value="featured">Featured</option>
                <option value="az">Name A–Z</option>
                <option value="za">Name Z–A</option>
              </select>
            </label>
          </div>
        </div>
      </div>

      <div className="mt-8">
        {filtered.length === 0 ? (
          <div className="text-center py-16 sm:py-20 px-4 rounded-2xl border border-dashed border-ocean/60">
            <p className="text-pearl text-base sm:text-lg">No products match your search.</p>
            <p className="text-sm text-seafoam-dim mt-2">Try a different keyword or category.</p>
            <button
              type="button"
              onClick={clearFilters}
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-coral hover:bg-coral-soft text-abyss-deep font-semibold px-5 py-3 text-sm transition-colors min-h-[44px]"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            <AnimatePresence>
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} onOpen={() => setActive(product)} />
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>

      <ProductModal product={active} onClose={() => setActive(null)} />
    </div>
  );
}

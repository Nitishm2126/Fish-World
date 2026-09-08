"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import type { Product } from "@/data/products";
import { whatsapp } from "@/lib/whatsapp";

export default function ProductCard({
  product,
  onOpen,
}: {
  product: Product;
  onOpen: () => void;
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="tank-card group rounded-2xl overflow-hidden flex flex-col"
    >
      {/* Miniature Aquarium Display Image */}
      <button
        type="button"
        onClick={onOpen}
        className="relative aspect-[4/3] overflow-hidden block w-full text-left"
        aria-label={`View details for ${product.name}`}
      >
        <img
          src={product.image}
          alt={`${product.name} — ${product.category.toLowerCase()}`}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-600 group-hover:scale-108"
          loading="lazy"
          decoding="async"
        />
        {/* Subtle glass reflection highlight */}
        <div
          aria-hidden="true"
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.25) 50%, transparent)" }}
        />
        {/* Depth gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, rgba(3,21,34,0) 45%, rgba(3,21,34,0.7) 100%)",
          }}
        />
        {/* Category pill */}
        <span
          className="absolute top-3 left-3 rounded-full text-[0.65rem] tracking-wide text-aqua-bright px-3 py-1 font-semibold"
          style={{ background: "rgba(6,42,66,0.9)", border: "1px solid rgba(0,175,193,0.35)" }}
        >
          {product.category}
        </span>
      </button>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1 justify-between">
        <div>
          <button type="button" onClick={onOpen} className="text-left w-full">
            <h3 className="text-base sm:text-lg text-pearl font-semibold group-hover:text-aqua-bright transition-colors leading-snug">
              {product.name}
            </h3>
          </button>
          <p className="mt-2 text-xs sm:text-sm text-seafoam leading-relaxed line-clamp-2">
            {product.description}
          </p>
        </div>

        <div className="mt-4">
          <div className="flex items-center justify-between text-xs sm:text-sm mb-4">
            <span className="text-seafoam">{product.availability}</span>
            <span className="text-pearl font-semibold">{product.price ?? "Price on Enquiry"}</span>
          </div>
          <a
            href={whatsapp.product(product.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full text-ocean-navy text-sm font-bold px-4 py-3.5 transition-all min-h-[46px] bg-coral hover:bg-coral-hover shadow-[0_0_18px_rgba(255,112,72,0.3)]"
          >
            <MessageCircle size={16} aria-hidden="true" />
            Enquire on WhatsApp
          </a>
        </div>
      </div>
    </motion.div>
  );
}

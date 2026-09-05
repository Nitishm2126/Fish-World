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
      className="group rounded-2xl border border-ocean/60 bg-navy/40 overflow-hidden hover:border-cyan/50 transition-colors flex flex-col"
    >
      <button
        type="button"
        onClick={onOpen}
        className="relative aspect-[4/3] overflow-hidden block w-full text-left"
        aria-label={`View details for ${product.name}`}
      >
        <img
          src={product.image}
          alt={`${product.name} — ${product.category.toLowerCase()}`}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
                decoding="async"
        />
        <span className="absolute top-3 left-3 rounded-full bg-abyss-deep/80 text-[0.65rem] tracking-wide text-cyan-soft px-2.5 py-1">
          {product.category}
        </span>
      </button>

      <div className="p-5 flex flex-col flex-1 justify-between">
        <div>
          <button type="button" onClick={onOpen} className="text-left w-full">
            <h3 className="text-base sm:text-lg text-pearl font-medium group-hover:text-cyan-soft transition-colors">{product.name}</h3>
          </button>
          <p className="mt-2 text-xs sm:text-sm text-seafoam leading-relaxed line-clamp-2">{product.description}</p>
        </div>

        <div className="mt-4">
          <div className="flex items-center justify-between text-xs sm:text-sm">
            <span className="text-seafoam-dim">{product.availability}</span>
            <span className="text-pearl font-medium">{product.price ?? "Price on Enquiry"}</span>
          </div>

          <a
            href={whatsapp.product(product.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-coral/90 hover:bg-coral text-abyss-deep text-sm font-semibold px-4 py-3 transition-colors min-h-[44px]"
          >
            <MessageCircle size={16} aria-hidden="true" />
            Enquire on WhatsApp
          </a>
        </div>
      </div>
    </motion.div>
  );
}

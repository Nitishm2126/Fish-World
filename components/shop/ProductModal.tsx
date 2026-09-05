"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, MessageCircle, Check } from "lucide-react";
import type { Product } from "@/data/products";
import { whatsapp } from "@/lib/whatsapp";

export default function ProductModal({
  product,
  onClose,
}: {
  product: Product | null;
  onClose: () => void;
}) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (product) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [product, onClose]);

  return (
    <AnimatePresence>
      {product && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-abyss-deep/90 backdrop-blur-sm p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="product-modal-title"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.94, opacity: 0, y: 12 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.96, opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl max-h-[88vh] sm:max-h-[90vh] overflow-y-auto rounded-2xl border border-ocean bg-abyss-deep shadow-2xl"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close product details"
              className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 w-11 h-11 rounded-full bg-abyss-deep/90 border border-ocean flex items-center justify-center text-pearl hover:text-cyan-soft transition-colors shadow-lg"
            >
              <X size={19} />
            </button>

            <div className="aspect-[16/9] relative overflow-hidden bg-navy">
              <img
                src={product.image}
                alt={`${product.name} — ${product.category.toLowerCase()}`}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-5 sm:p-8">
              <span className="text-xs tracking-wide text-cyan-soft uppercase font-medium">{product.category}</span>
              <h3 id="product-modal-title" className="mt-2 font-[var(--font-display)] text-xl sm:text-2xl text-pearl">
                {product.name}
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-seafoam leading-relaxed">{product.description}</p>

              <ul className="mt-5 space-y-2">
                {product.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-xs sm:text-sm text-seafoam">
                    <Check size={15} className="text-cyan-soft mt-0.5 shrink-0" aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-ocean/60 pt-5">
                <div>
                  <p className="text-xs text-seafoam-dim">{product.availability}</p>
                  <p className="text-pearl font-semibold mt-0.5 text-base sm:text-lg">{product.price ?? "Price on Enquiry"}</p>
                </div>
                <a
                  href={whatsapp.product(product.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-coral hover:bg-coral-soft text-abyss-deep font-semibold px-5 py-3 text-sm transition-colors min-h-[44px] w-full sm:w-auto text-center"
                >
                  <MessageCircle size={17} aria-hidden="true" />
                  Enquire on WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

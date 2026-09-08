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
    const handleKeyDown = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
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
          className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-6"
          style={{ background: "rgba(3, 21, 34, 0.88)", backdropFilter: "blur(20px)" }}
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
            className="relative w-full max-w-2xl max-h-[88vh] sm:max-h-[90vh] overflow-y-auto rounded-2xl"
            style={{
              background: "rgba(6, 42, 66, 0.98)",
              border: "1px solid rgba(0, 175, 193, 0.25)",
              boxShadow: "0 24px 64px rgba(3, 21, 34, 0.9)",
              backdropFilter: "blur(24px)",
            }}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close product details"
              className="absolute top-4 right-4 z-20 w-11 h-11 rounded-full flex items-center justify-center text-pearl hover:text-aqua-bright transition-all shadow-lg"
              style={{
                background: "rgba(6, 42, 66, 0.85)",
                border: "1px solid rgba(0, 175, 193, 0.3)",
                backdropFilter: "blur(8px)",
              }}
            >
              <X size={19} />
            </button>

            {/* Image */}
            <div className="aspect-[16/9] relative overflow-hidden rounded-t-2xl bg-[#062A42]">
              <img
                src={product.image}
                alt={`${product.name} — ${product.category.toLowerCase()}`}
                className="w-full h-full object-cover"
              />
              {/* Gradient at bottom of image */}
              <div
                className="absolute bottom-0 left-0 right-0 h-24"
                style={{ background: "linear-gradient(to bottom, transparent, rgba(6, 42, 66, 0.98))" }}
              />
            </div>

            {/* Content */}
            <div className="p-5 sm:p-8">
              <span className="text-xs tracking-widest text-aqua uppercase font-semibold">{product.category}</span>
              <h3 id="product-modal-title" className="mt-2 font-[var(--font-display)] text-xl sm:text-2xl text-pearl leading-snug">
                {product.name}
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-seafoam leading-relaxed">{product.description}</p>

              <ul className="mt-5 space-y-2.5">
                {product.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-xs sm:text-sm text-seafoam">
                    <Check size={14} className="text-aqua shrink-0 mt-0.5" aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>

              <div
                className="mt-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-5"
                style={{ borderTop: "1px solid rgba(0, 175, 193, 0.14)" }}
              >
                <div>
                  <p className="text-xs text-seafoam">{product.availability}</p>
                  <p className="text-pearl font-bold mt-0.5 text-base sm:text-lg">
                    {product.price ?? "Price on Enquiry"}
                  </p>
                </div>
                <a
                  href={whatsapp.product(product.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full text-ocean-navy font-bold px-6 py-3.5 text-sm transition-all min-h-[46px] w-full sm:w-auto bg-coral hover:bg-coral-hover shadow-[0_0_24px_rgba(255,112,72,0.35)]"
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

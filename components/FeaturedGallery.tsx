"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { galleryItems, type GalleryItem } from "@/data/gallery";
import SectionHeading from "./SectionHeading";

export default function FeaturedGallery() {
  const [active, setActive] = useState<GalleryItem | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => { if (e.key === "Escape") setActive(null); };
    if (active) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [active]);

  return (
    <section
      id="gallery"
      className="scroll-mt-24 py-16 sm:py-24 lg:py-28 relative"
      style={{
        background: "linear-gradient(to bottom, rgba(6, 42, 66, 0.35) 0%, rgba(3, 21, 34, 0.65) 100%)",
        borderTop: "1px solid rgba(0, 175, 193, 0.12)",
        borderBottom: "1px solid rgba(0, 175, 193, 0.12)",
      }}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Our work"
          title="Featured aquarium setups"
          description="A look at the kind of home, office and custom builds our team puts together."
        />

        <div className="mt-10 sm:mt-14 grid grid-cols-2 md:grid-cols-4 auto-rows-[130px] sm:auto-rows-[160px] gap-3 sm:gap-4">
          {galleryItems.map((item, i) => (
            <motion.button
              key={item.id}
              type="button"
              onClick={() => setActive(item)}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.07 }}
              className={`group relative overflow-hidden rounded-xl focus-visible:outline-2 transition-all duration-500 ${
                item.span === "tall"
                  ? "row-span-2"
                  : item.span === "wide"
                  ? "col-span-2"
                  : ""
              }`}
              style={{
                border: "1px solid rgba(0, 175, 193, 0.18)",
              }}
              aria-label={`View ${item.category} example, larger`}
            >
              <img
                src={item.image}
                alt={`${item.category} example by Fish World Ambattur`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                loading="lazy"
                decoding="async"
              />
              {/* Dark ocean gradient reveal overlay */}
              <div
                className="absolute inset-0 transition-opacity duration-500"
                style={{
                  background:
                    "linear-gradient(to top, rgba(3, 21, 34, 0.85) 0%, rgba(3, 21, 34, 0.12) 60%, transparent 100%)",
                  opacity: 0.75,
                }}
              />
              {/* Hover aqua tint */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: "rgba(0, 175, 193, 0.08)", mixBlendMode: "screen" }}
              />
              {/* Hover border brightening */}
              <div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ border: "1px solid rgba(40, 215, 229, 0.45)" }}
              />
              <span className="absolute bottom-2.5 left-3 text-[0.7rem] sm:text-xs font-semibold text-pearl drop-shadow">
                {item.category}
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6"
            style={{ background: "rgba(3, 21, 34, 0.88)", backdropFilter: "blur(20px)" }}
            role="dialog"
            aria-modal="true"
            aria-label={`${active.category} — enlarged image`}
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-2xl p-2 sm:p-3"
              style={{
                background: "rgba(6, 42, 66, 0.96)",
                border: "1px solid rgba(0, 175, 193, 0.25)",
                boxShadow: "0 20px 60px rgba(3, 21, 34, 0.9)",
                backdropFilter: "blur(24px)",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActive(null)}
                aria-label="Close enlarged image"
                className="absolute top-4 right-4 z-20 w-11 h-11 rounded-full flex items-center justify-center text-pearl hover:text-aqua-bright transition-all shadow-lg"
                style={{
                  background: "rgba(6, 42, 66, 0.85)",
                  border: "1px solid rgba(0, 175, 193, 0.3)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <X size={20} />
              </button>
              <div className="overflow-hidden rounded-xl">
                <img
                  src={active.image}
                  alt={`${active.category} example by Fish World Ambattur`}
                  className="w-full h-auto max-h-[72vh] object-contain mx-auto rounded-xl"
                />
              </div>
              <p className="py-3 text-center text-seafoam text-sm font-semibold">{active.category}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { galleryItems, type GalleryItem } from "@/data/gallery";
import SectionHeading from "./SectionHeading";

export default function FeaturedGallery() {
  const [active, setActive] = useState<GalleryItem | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActive(null);
      }
    };
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
    <section id="gallery" className="scroll-mt-24 py-16 sm:py-24 lg:py-28 bg-navy/30 border-y border-ocean/60">
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
              transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
              className={`group relative overflow-hidden rounded-xl border border-ocean/60 focus-visible:outline-2 ${
                item.span === "tall"
                  ? "row-span-2"
                  : item.span === "wide"
                  ? "col-span-2"
                  : ""
              }`}
              aria-label={`View ${item.category} example, larger`}
            >
              <img
                src={item.image}
                alt={`${item.category} example by Fish World Ambattur`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-abyss-deep/80 via-abyss-deep/0 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
              <span className="absolute bottom-2.5 left-2.5 sm:bottom-3 sm:left-3 text-[0.7rem] sm:text-xs font-medium text-pearl drop-shadow-md">
                {item.category}
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-abyss-deep/90 backdrop-blur-sm p-4 sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-label={`${active.category} — enlarged image`}
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-2xl border border-ocean bg-abyss-deep p-2 sm:p-3"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActive(null)}
                aria-label="Close enlarged image"
                className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 w-11 h-11 rounded-full bg-abyss-deep/90 border border-ocean flex items-center justify-center text-pearl hover:text-cyan-soft transition-colors shadow-lg"
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
              <p className="py-3 text-center text-seafoam text-sm font-medium">{active.category}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

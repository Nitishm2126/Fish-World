"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { InstagramIcon } from "@/components/BrandIcons";
import { INSTAGRAM_URL } from "@/lib/whatsapp";
import { galleryItems } from "@/data/gallery";

export default function InstagramSection() {
  const tiles = galleryItems.slice(0, 6);
  return (
    <section className="py-16 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 sm:gap-6">
          <div>
            <p className="text-cyan text-xs sm:text-sm tracking-[0.2em] mb-2 sm:mb-3 font-medium">@fish_world_ambattur_</p>
            <h2 className="font-[var(--font-display)] text-2xl sm:text-3xl lg:text-4xl text-pearl">
              Follow our aquatic world
            </h2>
          </div>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-ocean-light hover:border-cyan text-pearl px-5 py-3 sm:py-2.5 text-sm transition-colors min-h-[44px] w-full sm:w-auto"
          >
            <InstagramIcon size={16} />
            View us on Instagram
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>

        <div className="mt-10 grid grid-cols-3 md:grid-cols-6 gap-3">
          {tiles.map((tile, i) => (
            <motion.a
              key={tile.id}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative aspect-square overflow-hidden rounded-lg border border-ocean/60"
            >
              <img
                src={tile.image}
                alt="Sample aquarium visual — connect on Instagram for real photos"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-abyss-deep/0 group-hover:bg-abyss-deep/40 flex items-center justify-center transition-colors">
                <InstagramIcon
                  size={18}
                  className="text-pearl opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </div>
            </motion.a>
          ))}
        </div>
        <p className="mt-4 text-xs text-seafoam-dim">
          Demo gallery shown above — follow on Instagram for real shop photos and videos.
        </p>
      </div>
    </section>
  );
}

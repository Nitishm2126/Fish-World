"use client";

import { motion } from "framer-motion";
import { Play, ArrowUpRight } from "lucide-react";
import { YoutubeIcon } from "@/components/BrandIcons";
import { YOUTUBE_URL } from "@/lib/whatsapp";

const VIDEO_CARDS = [
  "Aquarium setup walkthrough",
  "Fish selection tips",
  "Tank maintenance routine",
];

export default function YouTubeSection() {
  return (
    <section
      className="py-16 sm:py-24 lg:py-28 relative"
      style={{
        background: "rgba(6, 42, 66, 0.4)",
        borderTop: "1px solid rgba(0, 175, 193, 0.14)",
        borderBottom: "1px solid rgba(0, 175, 193, 0.14)",
      }}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 sm:gap-6">
          <div>
            <p className="text-aqua text-xs sm:text-sm tracking-[0.2em] mb-2 sm:mb-3 font-semibold flex items-center gap-2">
              <span className="inline-block w-4 h-px bg-aqua opacity-60" />
              On YouTube
            </p>
            <h2 className="font-[var(--font-display)] text-2xl sm:text-3xl lg:text-4xl text-pearl">
              See Fish World in action
            </h2>
          </div>
          <a
            href={YOUTUBE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-aqua/30 hover:border-aqua text-pearl bg-[rgba(6,42,66,0.5)] hover:bg-[rgba(6,42,66,0.8)] px-5 py-3 sm:py-2.5 text-sm transition-all min-h-[44px] w-full sm:w-auto"
          >
            <YoutubeIcon size={16} />
            Visit our channel
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
          {VIDEO_CARDS.map((title, i) => (
            <motion.a
              key={title}
              href={YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-aqua/20 hover:border-aqua/50 aspect-video bg-gradient-to-br from-[#062A42] to-[#074B68] flex items-center justify-center shadow-lg transition-all"
            >
              <span className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_30%_30%,rgba(40,215,229,0.4),transparent_65%)]" />
              <span className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#031522]/80 border border-aqua/60 group-hover:scale-105 group-hover:border-aqua transition-all shadow-[0_0_16px_rgba(0,175,193,0.3)]">
                <Play size={20} className="text-aqua-bright ml-1" aria-hidden="true" />
              </span>
              <span className="absolute bottom-3 left-4 text-sm text-pearl font-medium">{title}</span>
            </motion.a>
          ))}
        </div>
        <p className="mt-4 text-xs text-seafoam">
          Placeholder video cards — real videos link out to our YouTube channel above.
        </p>
      </div>
    </section>
  );
}

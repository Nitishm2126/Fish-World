"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowDown, MessageCircle } from "lucide-react";
import { whatsapp } from "@/lib/whatsapp";

const BUBBLES = Array.from({ length: 14 }).map((_, i) => ({
  left: `${(i * 37) % 100}%`,
  size: 4 + ((i * 13) % 10),
  duration: 6 + ((i * 7) % 9),
  delay: (i * 0.6) % 6,
}));

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-abyss-deep via-navy to-abyss min-h-[92vh] flex items-center pt-24 sm:pt-20 pb-16 sm:pb-20">
      {/* ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] sm:w-[900px] h-[600px] sm:h-[900px] rounded-full bg-cyan/10 blur-3xl"
      />

      {/* rising bubbles */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        {BUBBLES.map((b, i) => (
          <span
            key={i}
            className="absolute bottom-0 rounded-full bg-cyan-soft/40 animate-rise"
            style={{
              left: b.left,
              width: b.size,
              height: b.size,
              animationDuration: `${b.duration}s`,
              animationDelay: `${b.delay}s`,
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-7xl w-full px-5 sm:px-8 grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col"
        >
          <p className="text-cyan text-xs sm:text-sm tracking-[0.2em] mb-4 sm:mb-5 uppercase font-medium">
            Fish World Ambattur &middot; Chennai
          </p>
          <h1
            className="font-[var(--font-display)] text-balance leading-[1.08] text-pearl font-normal"
            style={{ fontSize: "clamp(2.35rem, 8.5vw, 4.5rem)" }}
          >
            Bring the ocean home.
          </h1>
          <p className="mt-5 sm:mt-6 text-base sm:text-lg text-seafoam max-w-xl leading-relaxed">
            Premium fishes, aquariums &amp; aquatic essentials from Fish World Ambattur —
            backed by 25+ years of experience.
          </p>

          <div className="mt-8 sm:mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <Link
              href="/shop"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-coral hover:bg-coral-soft text-abyss-deep font-semibold px-6 py-3.5 transition-colors min-h-[44px] text-center"
            >
              Explore Our Collection
            </Link>
            <a
              href={whatsapp.general()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-ocean-light hover:border-cyan text-pearl px-6 py-3.5 transition-colors min-h-[44px] text-center"
            >
              <MessageCircle size={18} aria-hidden="true" />
              Chat on WhatsApp
            </a>
          </div>

          {/* Desktop Trust Stats - Shown in column 1 on lg screens */}
          <dl className="hidden lg:grid mt-14 grid-cols-3 max-w-md gap-6 border-t border-ocean/60 pt-7">
            <div>
              <dt className="text-2xl font-[var(--font-display)] text-pearl">25+</dt>
              <dd className="text-xs text-seafoam-dim mt-1">Years Experience</dd>
            </div>
            <div>
              <dt className="text-2xl font-[var(--font-display)] text-pearl">TN</dt>
              <dd className="text-xs text-seafoam-dim mt-1">Wide Shipping</dd>
            </div>
            <div>
              <dt className="text-2xl font-[var(--font-display)] text-pearl">Expert</dt>
              <dd className="text-xs text-seafoam-dim mt-1">Aquarium Guidance</dd>
            </div>
          </dl>
        </motion.div>

        {/* Aquarium visual + Mobile Trust Stats */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="relative w-full max-w-sm sm:max-w-md lg:max-w-none mx-auto flex flex-col"
        >
          <div className="relative rounded-[2rem] border-4 border-ocean-light/60 bg-gradient-to-br from-navy-light to-ocean p-2 shadow-[0_30px_80px_rgba(0,0,0,0.5)]">
            <div className="relative aspect-[4/5] rounded-[1.5rem] overflow-hidden">
              <img
                src="/images/categories/fish.svg"
                alt="Illustration of aquarium fish and a planted tank"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-abyss-deep/70 via-transparent to-transparent" />
            </div>
          </div>
          <div className="absolute -bottom-3 left-4 sm:-bottom-6 sm:-left-6 flex items-center gap-2.5 sm:gap-3 rounded-2xl bg-abyss-deep/95 backdrop-blur border border-ocean px-3.5 py-2.5 sm:px-5 sm:py-4 shadow-xl max-w-[calc(100%-2rem)]">
            <div className="w-2 h-2 rounded-full bg-coral animate-pulse shrink-0" />
            <p className="text-xs sm:text-sm text-pearl truncate">Aquarium setups built to last</p>
          </div>

          {/* Mobile Trust Stats - Placed right below the visual for seamless mobile flow */}
          <dl className="lg:hidden mt-8 grid grid-cols-3 gap-2 sm:gap-4 border-t border-ocean/60 pt-6 w-full text-center sm:text-left">
            <div className="flex flex-col items-center sm:items-start">
              <dt className="text-xl sm:text-2xl font-[var(--font-display)] text-pearl">25+</dt>
              <dd className="text-[0.7rem] sm:text-xs text-seafoam-dim mt-1 leading-tight">
                Years<br className="sm:hidden" /> Experience
              </dd>
            </div>
            <div className="flex flex-col items-center sm:items-start">
              <dt className="text-xl sm:text-2xl font-[var(--font-display)] text-pearl">TN</dt>
              <dd className="text-[0.7rem] sm:text-xs text-seafoam-dim mt-1 leading-tight">
                Wide<br className="sm:hidden" /> Shipping
              </dd>
            </div>
            <div className="flex flex-col items-center sm:items-start">
              <dt className="text-xl sm:text-2xl font-[var(--font-display)] text-pearl">Expert</dt>
              <dd className="text-[0.7rem] sm:text-xs text-seafoam-dim mt-1 leading-tight">
                Aquarium<br className="sm:hidden" /> Guidance
              </dd>
            </div>
          </dl>
        </motion.div>
      </div>

      <a
        href="#stats"
        aria-label="Scroll to explore"
        className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-seafoam-dim hover:text-cyan-soft transition-colors"
      >
        <span className="text-[0.65rem] tracking-[0.2em]">SCROLL</span>
        <ArrowDown size={16} className="animate-bounce" />
      </a>
    </section>
  );
}

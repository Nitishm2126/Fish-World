"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowDown, MessageCircle } from "lucide-react";
import { whatsapp } from "@/lib/whatsapp";

// 22 bubbles of varying sizes and timings for a living underwater feel
const BUBBLES = Array.from({ length: 22 }).map((_, i) => ({
  left: `${(i * 29 + 7) % 100}%`,
  size: 3 + ((i * 11) % 9),
  duration: 7 + ((i * 6) % 11),
  delay: (i * 0.7) % 8,
  opacity: 0.2 + ((i * 0.15) % 0.4),
}));

// Subtle light rays — pure CSS cones
const RAYS = [
  { left: "20%", width: "80px", opacity: 0.07, rotation: -8 },
  { left: "42%", width: "60px", opacity: 0.1, rotation: 0 },
  { left: "62%", width: "90px", opacity: 0.06, rotation: 10 },
  { left: "80%", width: "50px", opacity: 0.08, rotation: -5 },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[100svh] flex items-center pt-20 pb-12 sm:pb-16">
      {/* ── Full-bleed deep ocean background ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-[#031522] via-[#062A42] to-[#031522]"
      />

      {/* ── Ambient aquatic glow pool ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[520px] rounded-full"
        style={{
          background:
            "radial-gradient(ellipse, rgba(0,175,193,0.18) 0%, rgba(6,42,66,0.15) 45%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* ── Page-wide rising bubbles (subtle, slow underwater feel) ── */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        {BUBBLES.map((b, i) => (
          <span
            key={i}
            className="absolute bottom-0 rounded-full border border-aqua-bright/35 bg-aqua-bright/15 animate-rise"
            style={{
              left: b.left,
              width: b.size,
              height: b.size,
              animationDuration: `${b.duration}s`,
              animationDelay: `${b.delay}s`,
              opacity: b.opacity,
            }}
          />
        ))}
      </div>

      {/* ── Main content grid ── */}
      <div className="relative mx-auto max-w-7xl w-full px-5 sm:px-8 grid lg:grid-cols-[1fr_1fr] gap-10 lg:gap-12 items-center">

        {/* ━━━ LEFT: Copy ━━━ */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="flex flex-col order-2 lg:order-1"
        >
          {/* Eyebrow */}
          <p className="text-aqua text-[0.65rem] sm:text-xs tracking-[0.3em] mb-5 uppercase font-semibold flex items-center gap-2">
            <span className="inline-block w-5 h-px bg-aqua opacity-60" />
            Fish World Ambattur · Chennai
          </p>

          {/* Headline */}
          <h1
            className="font-[var(--font-display)] leading-[1.05] text-pearl font-normal"
            style={{ fontSize: "clamp(2.6rem, 7.5vw, 5rem)" }}
          >
            Bring the{" "}
            <span
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #28D7E5 0%, #00AFC1 55%, #074B68 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              ocean
            </span>{" "}
            home.
          </h1>

          {/* Subheading */}
          <p className="mt-5 sm:mt-6 text-base sm:text-lg text-seafoam max-w-[46ch] leading-relaxed">
            Premium fishes, aquariums &amp; aquatic essentials from Fish World
            Ambattur — backed by 25+ years of experience.
          </p>

          {/* CTAs */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <Link
              href="/shop"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-coral hover:bg-coral-hover text-ocean-navy font-bold px-8 py-4 text-sm sm:text-base min-h-[50px] text-center transition-all shadow-[0_0_28px_rgba(255,112,72,0.38)]"
            >
              Explore Our Collection
            </Link>
            <a
              href={whatsapp.general()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-full border border-aqua/30 hover:border-aqua text-pearl bg-[rgba(6,42,66,0.55)] hover:bg-[rgba(6,42,66,0.8)] backdrop-blur-sm px-8 py-4 text-sm sm:text-base min-h-[50px] text-center transition-all shadow-[0_4px_16px_rgba(3,21,34,0.4)]"
            >
              <MessageCircle size={18} aria-hidden="true" />
              Chat on WhatsApp
            </a>
          </div>

          {/* Trust stats – desktop only */}
          <dl className="hidden lg:grid mt-12 grid-cols-3 max-w-sm gap-4 border-t border-aqua/15 pt-7">
            {[
              { stat: "25+", label: "Years Experience" },
              { stat: "TN", label: "Wide Shipping" },
              { stat: "Expert", label: "Aquarium Guidance" },
            ].map(({ stat, label }) => (
              <div key={label}>
                <dt className="text-xl font-[var(--font-display)] text-pearl tracking-tight flex items-baseline gap-1">
                  <span>{stat}</span>
                  {stat === "25+" && <span className="w-1.5 h-1.5 rounded-full bg-aqua" />}
                </dt>
                <dd className="text-[0.7rem] text-seafoam mt-1 leading-snug">{label}</dd>
              </div>
            ))}
          </dl>
        </motion.div>

        {/* ━━━ RIGHT: Aquarium Tank ━━━ */}
        <motion.div
          initial={{ opacity: 0, scale: 0.93 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.85, ease: "easeOut", delay: 0.18 }}
          className="relative w-full max-w-sm sm:max-w-md lg:max-w-none mx-auto order-1 lg:order-2"
        >
          {/* Tank outer frame — premium glass display tank feel */}
          <div
            className="relative rounded-[2.5rem] p-[3px] overflow-hidden"
            style={{
              background:
                "linear-gradient(145deg, rgba(40,215,229,0.45) 0%, rgba(7,75,104,0.6) 50%, rgba(40,215,229,0.25) 100%)",
              boxShadow:
                "0 30px 80px rgba(3,21,34,0.85), 0 0 40px -5px rgba(0,175,193,0.3), inset 0 1px 0 rgba(255,255,255,0.15)",
            }}
          >
            {/* Tank inner */}
            <div className="relative rounded-[2.2rem] overflow-hidden" style={{ aspectRatio: "3/4" }}>

              {/* ── THE PHOTOGRAPHIC AQUARIUM IMAGE ── */}
              <img
                src="/images/hero/aquarium-hero.jpg"
                alt="Premium tropical aquarium with clownfish, blue tang, corals and aquatic plants"
                className="absolute inset-0 w-full h-full object-cover object-center"
                loading="eager"
                decoding="async"
              />

              {/* Depth gradient overlay — creates deep water contrast */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(3,21,34,0.05) 0%, rgba(3,21,34,0.15) 40%, rgba(3,21,34,0.6) 80%, rgba(3,21,34,0.85) 100%)",
                }}
              />

              {/* Top underwater light bloom */}
              <div
                aria-hidden="true"
                className="absolute top-0 left-0 right-0 h-[45%]"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(40,215,229,0.16) 0%, transparent 100%)",
                  mixBlendMode: "screen",
                }}
              />

              {/* Cascading light rays */}
              {RAYS.map((ray, i) => (
                <div
                  key={i}
                  aria-hidden="true"
                  className="absolute top-0"
                  style={{
                    left: ray.left,
                    width: ray.width,
                    height: "65%",
                    opacity: ray.opacity,
                    transform: `rotate(${ray.rotation}deg)`,
                    transformOrigin: "top center",
                    background:
                      "linear-gradient(to bottom, rgba(40,215,229,0.85) 0%, transparent 100%)",
                    filter: "blur(12px)",
                    mixBlendMode: "screen",
                  }}
                />
              ))}

              {/* Bubble column inside the tank */}
              <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none">
                {[
                  { l: "18%", s: 5, dur: 3.5, del: 0 },
                  { l: "38%", s: 4, dur: 4.2, del: 1.2 },
                  { l: "55%", s: 6, dur: 3.8, del: 0.5 },
                  { l: "72%", s: 4, dur: 5.0, del: 2.1 },
                  { l: "85%", s: 5, dur: 4.5, del: 0.8 },
                  { l: "28%", s: 3, dur: 3.2, del: 1.8 },
                  { l: "65%", s: 4, dur: 4.8, del: 0.3 },
                ].map((b, i) => (
                  <span
                    key={i}
                    className="absolute bottom-0 rounded-full border border-white/40 bg-white/15 animate-rise"
                    style={{
                      left: b.l,
                      width: b.s,
                      height: b.s,
                      animationDuration: `${b.dur}s`,
                      animationDelay: `${b.del}s`,
                    }}
                  />
                ))}
              </div>

              {/* Glass reflection on left edge */}
              <div
                aria-hidden="true"
                className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-[2.2rem]"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 40%, transparent 100%)",
                }}
              />

              {/* Glass reflection top edge */}
              <div
                aria-hidden="true"
                className="absolute top-0 left-0 right-0 h-[2px]"
                style={{
                  background:
                    "linear-gradient(to right, transparent 0%, rgba(255,255,255,0.35) 30%, rgba(255,255,255,0.55) 50%, rgba(255,255,255,0.35) 70%, transparent 100%)",
                }}
              />

              {/* Bottom label overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                <p className="text-xs text-aqua-bright tracking-widest uppercase font-semibold">
                  Fish World Ambattur
                </p>
                <p className="text-sm text-pearl mt-0.5 font-medium">
                  Premium Aquarium Display
                </p>
              </div>
            </div>
          </div>

          {/* Floating badge */}
          <div
            className="absolute -bottom-4 -left-3 sm:-bottom-6 sm:-left-5 flex items-center gap-3 rounded-2xl px-4 py-3 sm:px-5 sm:py-4 max-w-[calc(100%-1.5rem)]"
            style={{
              background: "rgba(6,42,66,0.92)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(0,175,193,0.3)",
              boxShadow: "0 8px 32px rgba(3,21,34,0.6)",
            }}
          >
            <div className="w-2.5 h-2.5 rounded-full bg-aqua shrink-0 animate-pulse" />
            <p className="text-xs sm:text-sm text-pearl font-medium truncate">
              Aquarium setups built to last
            </p>
          </div>

          {/* Glow behind the tank */}
          <div
            aria-hidden="true"
            className="absolute inset-[-10%] -z-10 rounded-full"
            style={{
              background:
                "radial-gradient(ellipse, rgba(0,175,193,0.2) 0%, rgba(7,75,104,0.15) 50%, transparent 70%)",
              filter: "blur(40px)",
            }}
          />
        </motion.div>
      </div>

      {/* Trust stats — mobile only, below the tank */}
      <div className="lg:hidden relative mx-auto max-w-7xl w-full px-5 sm:px-8 mt-10">
        <dl className="grid grid-cols-3 gap-2 sm:gap-4 border-t border-aqua/15 pt-6 text-center">
          {[
            { stat: "25+", label: "Years Experience" },
            { stat: "TN", label: "Wide Shipping" },
            { stat: "Expert", label: "Guidance" },
          ].map(({ stat, label }) => (
            <div key={label} className="flex flex-col items-center">
              <dt className="text-xl font-[var(--font-display)] text-pearl">{stat}</dt>
              <dd className="text-[0.68rem] text-seafoam mt-1 leading-snug">{label}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Scroll indicator */}
      <a
        href="#stats"
        aria-label="Scroll to explore"
        className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-seafoam hover:text-aqua-bright transition-colors"
      >
        <span className="text-[0.6rem] tracking-[0.25em] uppercase">Scroll</span>
        <ArrowDown size={15} className="animate-bounce" />
      </a>
    </section>
  );
}

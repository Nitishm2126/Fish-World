"use client";

import { motion } from "framer-motion";

const STATS = [
  { value: "25+",       label: "Years of Experience" },
  { value: "1000s",     label: "Fish & Tanks Delivered" },
  { value: "Tamil Nadu", label: "Shipping Available" },
  { value: "Aquarium",  label: "Setup Experts" },
];

export default function Stats() {
  return (
    <section
      id="stats"
      className="relative z-10"
      style={{
        borderTop: "1px solid rgba(0, 175, 193, 0.14)",
        borderBottom: "1px solid rgba(0, 175, 193, 0.14)",
        background: "rgba(6, 42, 66, 0.45)",
        backdropFilter: "blur(6px)",
      }}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-10 sm:py-14 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {STATS.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="flex flex-col"
          >
            <p className="font-[var(--font-display)] text-2xl sm:text-3xl lg:text-4xl text-pearl leading-tight flex items-center gap-1.5">
              <span>{s.value}</span>
              {s.value === "25+" && (
                <span className="inline-block w-2 h-2 rounded-full bg-aqua shadow-[0_0_8px_rgba(0,175,193,0.6)]" />
              )}
            </p>
            <p className="text-xs sm:text-sm text-seafoam mt-1.5 leading-snug">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

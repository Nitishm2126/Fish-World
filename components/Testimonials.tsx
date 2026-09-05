"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonials } from "@/data/gallery";
import SectionHeading from "./SectionHeading";

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Customer voices"
          title="What customers say"
          description="Sample layout, shown with placeholder text until verified reviews are added."
        />

        <div className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-ocean/70 bg-navy/40 p-6 sm:p-7"
            >
              <Quote size={22} className="text-cyan/60" aria-hidden="true" />
              <p className="mt-4 text-sm text-seafoam leading-relaxed italic">{t.text}</p>
              <p className="mt-5 text-sm text-pearl">{t.name}</p>
              <p className="mt-1 text-[0.7rem] tracking-wide text-seafoam-dim uppercase">Demo placeholder</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/services";
import { whatsapp } from "@/lib/whatsapp";
import SectionHeading from "./SectionHeading";

export default function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-24 py-16 sm:py-24 lg:py-28 relative overflow-hidden"
    >
      {/* Subtle ambient deep ocean glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(7, 75, 104, 0.35) 0%, transparent 75%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="What we do"
          title="Aquarium services, handled properly"
          description="From a first-time tank to a full custom build, our team supports every stage of keeping fish."
        />

        <div className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="tank-card group rounded-2xl p-6 sm:p-7 flex flex-col justify-between"
              >
                <div>
                  {/* Icon with aqua container */}
                  <div
                    className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-5"
                    style={{
                      background: "rgba(0, 175, 193, 0.12)",
                      border: "1px solid rgba(0, 175, 193, 0.28)",
                    }}
                  >
                    <Icon size={22} className="text-aqua-bright" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg text-pearl font-semibold group-hover:text-aqua-bright transition-colors leading-snug">
                    {service.title}
                  </h3>
                  <p className="mt-2.5 text-sm text-seafoam leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <a
                  href={whatsapp.service(service.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-coral hover:text-coral-hover transition-colors w-fit min-h-[40px]"
                >
                  Enquire
                  <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

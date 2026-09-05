"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/services";
import { whatsapp } from "@/lib/whatsapp";
import SectionHeading from "./SectionHeading";

export default function Services() {
  return (
    <section id="services" className="scroll-mt-24 py-16 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
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
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="group rounded-2xl border border-ocean/70 bg-navy/40 p-6 sm:p-7 hover:border-cyan/60 hover:bg-navy/70 transition-colors flex flex-col justify-between"
              >
                <div>
                  <Icon size={26} className="text-cyan-soft" aria-hidden="true" />
                  <h3 className="mt-4 sm:mt-5 text-lg text-pearl font-medium">{service.title}</h3>
                  <p className="mt-2 text-sm text-seafoam leading-relaxed">{service.description}</p>
                </div>
                <a
                  href={whatsapp.service(service.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-coral-soft group-hover:text-coral transition-colors py-2 min-h-[44px] w-fit"
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

"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Fish, Wrench, Compass, Truck, MessageCircleHeart } from "lucide-react";
import { whatsapp } from "@/lib/whatsapp";
import SectionHeading from "./SectionHeading";

const REASONS = [
  { icon: ShieldCheck, label: "25+ Years Experience" },
  { icon: Fish, label: "Quality Aquarium Products" },
  { icon: Wrench, label: "Expert Setup Support" },
  { icon: Compass, label: "Fish & Aquarium Guidance" },
  { icon: Truck, label: "Tamil Nadu Shipping" },
  { icon: MessageCircleHeart, label: "Easy WhatsApp Enquiry" },
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-16 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        <div>
          <SectionHeading eyebrow="Since day one" title="25+ years of aquatic expertise" />
          <p className="mt-5 sm:mt-6 text-sm sm:text-base text-seafoam leading-relaxed">
            Fish World Ambattur has spent over 25 years serving aquarium enthusiasts across
            Chennai — helping customers choose the right fish, plan a tank that fits their
            space, and keep it healthy long after setup day.
          </p>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-seafoam leading-relaxed">
            Our focus stays on product knowledge, hands-on setup expertise and dependable
            support, with shipping available across Tamil Nadu and enquiries handled directly
            over WhatsApp.
          </p>
          <a
            href={whatsapp.general()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-coral hover:bg-coral-soft text-abyss-deep font-semibold px-6 py-3.5 transition-colors min-h-[44px] w-full sm:w-auto text-center"
          >
            Talk to our team
          </a>
        </div>

        <div>
          <p className="text-sm font-medium text-pearl mb-4 sm:mb-6">Why choose us</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {REASONS.map((r, i) => {
              const Icon = r.icon;
              return (
                <motion.div
                  key={r.label}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                  className="flex items-center sm:items-start gap-3 rounded-xl border border-ocean/60 bg-navy/40 p-4 sm:p-5"
                >
                  <Icon size={20} className="text-cyan-soft shrink-0" aria-hidden="true" />
                  <span className="text-sm text-pearl leading-snug">{r.label}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

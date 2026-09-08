"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Fish, Wrench, Compass, Truck, MessageCircleHeart } from "lucide-react";
import { whatsapp } from "@/lib/whatsapp";
import SectionHeading from "./SectionHeading";

const REASONS = [
  { icon: ShieldCheck, label: "25+ Years Experience" },
  { icon: Fish,        label: "Quality Aquarium Products" },
  { icon: Wrench,      label: "Expert Setup Support" },
  { icon: Compass,     label: "Fish & Aquarium Guidance" },
  { icon: Truck,       label: "Tamil Nadu Shipping" },
  { icon: MessageCircleHeart, label: "Easy WhatsApp Enquiry" },
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-16 sm:py-24 lg:py-28 relative overflow-hidden">
      {/* Deep ocean aquatic glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 w-[520px] h-[520px] opacity-40"
        style={{
          background:
            "radial-gradient(circle, rgba(0, 175, 193, 0.16) 0%, rgba(7, 75, 104, 0.12) 45%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left — copy */}
        <div className="relative">
          {/* Prominent watermark "25+" */}
          <span
            aria-hidden="true"
            className="absolute -top-10 -left-6 font-[var(--font-display)] select-none pointer-events-none leading-none"
            style={{
              fontSize: "clamp(7rem, 18vw, 13rem)",
              color: "rgba(40, 215, 229, 0.06)",
              fontWeight: 700,
            }}
          >
            25+
          </span>

          <div className="relative">
            <SectionHeading eyebrow="Since day one" title="25+ years of aquatic expertise" />
            <p className="mt-5 text-sm sm:text-base text-seafoam leading-relaxed">
              Fish World Ambattur has spent over 25 years serving aquarium enthusiasts across
              Chennai — helping customers choose the right fish, plan a tank that fits their
              space, and keep it healthy long after setup day.
            </p>
            <p className="mt-4 text-sm sm:text-base text-seafoam leading-relaxed">
              Our focus stays on product knowledge, hands-on setup expertise and dependable
              support, with shipping available across Tamil Nadu and enquiries handled directly
              over WhatsApp.
            </p>
            <a
              href={whatsapp.general()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full text-ocean-navy font-bold px-7 py-4 transition-all min-h-[50px] w-full sm:w-auto text-center bg-coral hover:bg-coral-hover shadow-[0_0_28px_rgba(255,112,72,0.35)]"
            >
              Talk to our team
            </a>
          </div>
        </div>

        {/* Right — reason badges */}
        <div>
          <p className="text-xs font-semibold text-aqua tracking-widest uppercase mb-6 flex items-center gap-2">
            <span className="inline-block w-4 h-px bg-aqua opacity-60" />
            Why choose us
          </p>
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
                  className="tank-card group flex items-center gap-3.5 rounded-xl p-4 sm:p-5"
                >
                  <div
                    className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center"
                    style={{ background: "rgba(0, 175, 193, 0.12)", border: "1px solid rgba(0, 175, 193, 0.22)" }}
                  >
                    <Icon size={18} className="text-aqua-bright group-hover:text-aqua transition-colors" aria-hidden="true" />
                  </div>
                  <span className="text-sm text-pearl font-medium leading-snug">{r.label}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

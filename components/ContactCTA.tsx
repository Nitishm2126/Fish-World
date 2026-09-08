"use client";

import { motion } from "framer-motion";
import { MessageCircle, Phone, MapPin, Navigation } from "lucide-react";
import { InstagramIcon, YoutubeIcon } from "@/components/BrandIcons";
import {
  whatsapp,
  CALL_URL,
  PHONE_DISPLAY,
  INSTAGRAM_URL,
  YOUTUBE_URL,
  MAPS_URL,
} from "@/lib/whatsapp";

export default function ContactCTA() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 py-16 sm:py-24 lg:py-28 relative overflow-hidden"
      style={{
        borderTop: "1px solid rgba(0, 175, 193, 0.14)",
        background: "linear-gradient(to bottom, transparent 0%, rgba(6, 42, 66, 0.6) 100%)",
      }}
    >
      {/* Bottom ocean depth gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-64"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(3, 21, 34, 0.7))" }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="font-[var(--font-display)] text-balance text-2xl sm:text-3xl lg:text-4xl text-pearl leading-tight">
            Ready to build your aquarium?
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-seafoam">
            Talk to Fish World Ambattur and bring your aquatic vision to life.
          </p>

          <div className="mt-8 sm:mt-9 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <a
              href={whatsapp.general()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-coral hover:bg-coral-hover text-ocean-navy font-bold px-6 py-3.5 transition-all min-h-[48px] shadow-[0_0_24px_rgba(255,112,72,0.35)]"
            >
              <MessageCircle size={18} aria-hidden="true" />
              WhatsApp Us
            </a>
            {[
              { href: CALL_URL, icon: <Phone size={17} aria-hidden="true" />, label: "Call Now" },
              { href: INSTAGRAM_URL, icon: <InstagramIcon size={17} />, label: "Instagram", external: true },
              { href: YOUTUBE_URL, icon: <YoutubeIcon size={17} />, label: "YouTube", external: true },
            ].map(({ href, icon, label, external }) => (
              <a
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="inline-flex items-center justify-center gap-2 rounded-full text-pearl px-6 py-3.5 transition-all min-h-[48px] font-medium text-sm"
                style={{
                  background: "rgba(6, 42, 66, 0.6)",
                  border: "1px solid rgba(0, 175, 193, 0.22)",
                  backdropFilter: "blur(8px)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(40, 215, 229, 0.5)";
                  (e.currentTarget as HTMLElement).style.background = "rgba(7, 75, 104, 0.7)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(0, 175, 193, 0.22)";
                  (e.currentTarget as HTMLElement).style.background = "rgba(6, 42, 66, 0.6)";
                }}
              >
                {icon}
                {label}
              </a>
            ))}
          </div>
          <p className="mt-5 text-seafoam text-xs sm:text-sm">{PHONE_DISPLAY}</p>
        </motion.div>

        {/* Location + shipping cards */}
        <div className="mt-14 sm:mt-16 grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-5 items-stretch">
          {/* Location card */}
          <div
            className="relative rounded-2xl min-h-[220px] sm:min-h-[260px] p-6 flex items-center justify-center overflow-hidden group"
            style={{
              background: "rgba(6, 42, 66, 0.6)",
              border: "1px solid rgba(0, 175, 193, 0.2)",
              backdropFilter: "blur(10px)",
              boxShadow: "0 10px 30px -10px rgba(3, 21, 34, 0.7)",
            }}
          >
            {/* Ambient glow */}
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-50 group-hover:opacity-80 transition-opacity duration-700"
              style={{
                background:
                  "radial-gradient(ellipse at 30% 40%, rgba(0, 175, 193, 0.16) 0%, transparent 60%), radial-gradient(ellipse at 70% 70%, rgba(255, 112, 72, 0.08) 0%, transparent 50%)",
              }}
            />
            {/* Glass edge highlight */}
            <div
              aria-hidden="true"
              className="absolute top-0 left-0 right-0 h-px"
              style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.2) 50%, transparent)" }}
            />
            <div className="relative text-center">
              <div
                className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mx-auto mb-4"
                style={{ background: "rgba(0, 175, 193, 0.12)", border: "1px solid rgba(0, 175, 193, 0.25)" }}
              >
                <MapPin size={26} className="text-aqua-bright" aria-hidden="true" />
              </div>
              <p className="text-lg text-pearl font-semibold">Fish World Ambattur</p>
              <p className="text-sm text-seafoam mt-1">Ambattur, Chennai, Tamil Nadu</p>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center justify-center gap-2 rounded-full text-pearl text-sm font-medium px-6 py-3 transition-all min-h-[44px]"
                style={{
                  background: "rgba(0, 175, 193, 0.15)",
                  border: "1px solid rgba(0, 175, 193, 0.3)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(0, 175, 193, 0.25)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(40, 215, 229, 0.6)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(0, 175, 193, 0.15)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(0, 175, 193, 0.3)";
                }}
              >
                <Navigation size={14} aria-hidden="true" />
                Get Directions
              </a>
            </div>
          </div>

          {/* Shipping card */}
          <div
            className="rounded-2xl p-6 sm:p-7 flex flex-col justify-center tank-card"
          >
            <p className="text-base font-semibold text-pearl">Shipping across Tamil Nadu</p>
            <p className="mt-2 text-sm text-seafoam leading-relaxed">
              Fish, tanks and equipment shipped to customers across the state — message us on
              WhatsApp to check delivery to your area.
            </p>
            <a
              href={whatsapp.shipping()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-coral hover:text-coral-hover transition-colors w-fit min-h-[40px] py-2"
            >
              Ask about shipping →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

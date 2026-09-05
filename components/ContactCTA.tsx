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
    <section id="contact" className="scroll-mt-24 py-16 sm:py-24 lg:py-28 bg-navy/30 border-t border-ocean/60">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="font-[var(--font-display)] text-balance text-2xl sm:text-3xl lg:text-4xl text-pearl">
            Ready to build your aquarium?
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-seafoam">
            Talk to Fish World Ambattur and bring your aquatic vision to life.
          </p>

          <div className="mt-8 sm:mt-9 grid grid-cols-1 sm:grid-cols-2 md:flex md:flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-md md:max-w-none mx-auto">
            <a
              href={whatsapp.general()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-coral hover:bg-coral-soft text-abyss-deep font-semibold px-6 py-3.5 transition-colors min-h-[44px] text-center"
            >
              <MessageCircle size={18} aria-hidden="true" />
              WhatsApp Us
            </a>
            <a
              href={CALL_URL}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-ocean-light hover:border-cyan text-pearl px-6 py-3.5 transition-colors min-h-[44px] text-center"
            >
              <Phone size={18} aria-hidden="true" />
              Call Now
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-ocean-light hover:border-cyan text-pearl px-6 py-3.5 transition-colors min-h-[44px] text-center"
            >
              <InstagramIcon size={18} />
              Instagram
            </a>
            <a
              href={YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-ocean-light hover:border-cyan text-pearl px-6 py-3.5 transition-colors min-h-[44px] text-center"
            >
              <YoutubeIcon size={18} />
              YouTube
            </a>
          </div>
          <p className="mt-5 sm:mt-6 text-seafoam-dim text-xs sm:text-sm">{PHONE_DISPLAY}</p>
        </motion.div>

        <div className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-6 items-stretch">
          <div className="relative rounded-2xl border border-ocean/60 bg-gradient-to-br from-navy-light to-ocean min-h-[240px] sm:min-h-[280px] p-6 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_20%_30%,rgba(86,214,224,0.25),transparent_55%),radial-gradient(circle_at_80%_70%,rgba(255,122,82,0.15),transparent_55%)]" />
            <div className="relative text-center w-full">
              <MapPin size={30} className="mx-auto text-cyan-soft" aria-hidden="true" />
              <p className="mt-3 text-base sm:text-lg text-pearl font-medium">Fish World Ambattur</p>
              <p className="text-xs sm:text-sm text-seafoam-dim mt-0.5">Ambattur, Chennai, Tamil Nadu</p>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-abyss-deep/70 border border-cyan-soft/50 hover:border-cyan text-pearl px-5 py-3 text-sm transition-colors min-h-[44px]"
              >
                <Navigation size={14} aria-hidden="true" />
                Get Directions
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-ocean/60 bg-navy/40 p-6 sm:p-7 flex flex-col justify-center">
            <p className="text-base font-medium text-pearl">Shipping across Tamil Nadu</p>
            <p className="mt-2 text-sm text-seafoam leading-relaxed">
              Fish, tanks and equipment shipped to customers across the state — message us on
              WhatsApp to check delivery to your area.
            </p>
            <a
              href={whatsapp.shipping()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-coral-soft hover:text-coral transition-colors w-fit min-h-[44px] py-2"
            >
              Ask about shipping →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

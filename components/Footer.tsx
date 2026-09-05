import Link from "next/link";
import { Phone, MessageCircle, MapPin } from "lucide-react";
import { InstagramIcon, YoutubeIcon } from "@/components/BrandIcons";
import { whatsapp, INSTAGRAM_URL, YOUTUBE_URL, MAPS_URL, PHONE_DISPLAY, CALL_URL } from "@/lib/whatsapp";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Contact", href: "/#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-abyss-deep border-t border-ocean/60">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-12 sm:py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
        <div>
          <p className="font-[var(--font-display)] text-xl text-pearl">Fish World</p>
          <p className="text-xs tracking-[0.25em] text-cyan mt-0.5">AMBATTUR</p>
          <p className="text-sm text-seafoam mt-4">Aquatic Pet Store</p>
          <p className="text-sm text-seafoam-dim mt-1">25+ Years Experience</p>
        </div>

        <div>
          <p className="text-sm font-medium text-pearl mb-4">Quick Links</p>
          <ul className="space-y-2.5">
            {QUICK_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="inline-block py-1 text-sm text-seafoam hover:text-cyan-soft transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-medium text-pearl mb-4">Reach Us</p>
          <ul className="space-y-3">
            <li>
              <a href={CALL_URL} className="inline-flex items-center gap-2 py-1 text-sm text-seafoam hover:text-cyan-soft transition-colors">
                <Phone size={15} aria-hidden="true" /> {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a
                href={whatsapp.general()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 py-1 text-sm text-seafoam hover:text-cyan-soft transition-colors"
              >
                <MessageCircle size={15} aria-hidden="true" /> WhatsApp
              </a>
            </li>
            <li>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 py-1 text-sm text-seafoam hover:text-cyan-soft transition-colors"
              >
                <MapPin size={15} aria-hidden="true" /> Ambattur, Chennai
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-medium text-pearl mb-4">Follow Along</p>
          <div className="flex items-center gap-3">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Fish World Ambattur on Instagram"
              className="flex items-center justify-center w-11 h-11 rounded-full border border-ocean hover:border-cyan hover:text-cyan-soft transition-colors text-seafoam"
            >
              <InstagramIcon size={18} />
            </a>
            <a
              href={YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Fish World Ambattur on YouTube"
              className="flex items-center justify-center w-11 h-11 rounded-full border border-ocean hover:border-cyan hover:text-cyan-soft transition-colors text-seafoam"
            >
              <YoutubeIcon size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-ocean/60">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-5 pb-24 sm:pb-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-seafoam-dim">
          <p className="text-center md:text-left leading-relaxed">
            <span className="block sm:inline">© 2026 Fish World Ambattur.</span>{" "}
            <span className="block sm:inline">All rights reserved.</span>
          </p>
          <p className="text-center md:text-right leading-relaxed">
            <span className="block sm:inline">Designed &amp; Developed by </span>
            <span className="inline font-medium text-pearl/80 hover:text-cyan transition-colors duration-200 cursor-default">
              Nitish — FineWorks
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}

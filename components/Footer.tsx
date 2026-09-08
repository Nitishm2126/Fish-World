import Link from "next/link";
import { Phone, MessageCircle, MapPin } from "lucide-react";
import { InstagramIcon, YoutubeIcon } from "@/components/BrandIcons";
import { whatsapp, INSTAGRAM_URL, YOUTUBE_URL, MAPS_URL, PHONE_DISPLAY, CALL_URL } from "@/lib/whatsapp";

const QUICK_LINKS = [
  { label: "Home",     href: "/" },
  { label: "Shop",     href: "/shop" },
  { label: "Services", href: "/#services" },
  { label: "About",    href: "/#about" },
  { label: "Gallery",  href: "/#gallery" },
  { label: "Contact",  href: "/#contact" },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "linear-gradient(to bottom, rgba(6, 42, 66, 0.75) 0%, #031522 100%)",
        borderTop: "1px solid rgba(0, 175, 193, 0.14)",
      }}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-12 sm:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <p className="font-[var(--font-display)] text-xl text-pearl">Fish World</p>
          <p className="text-[0.6rem] tracking-[0.3em] text-aqua mt-0.5 font-semibold">AMBATTUR</p>
          <p className="text-sm text-seafoam mt-5 leading-relaxed">
            Aquatic Pet Store<br />
            <span className="text-seafoam-dim">25+ Years Experience</span>
          </p>
        </div>

        {/* Quick links */}
        <div>
          <p className="text-xs font-semibold text-pearl mb-5 tracking-widest uppercase">Quick Links</p>
          <ul className="space-y-3">
            {QUICK_LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-sm text-seafoam hover:text-aqua-bright transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Reach us */}
        <div>
          <p className="text-xs font-semibold text-pearl mb-5 tracking-widest uppercase">Reach Us</p>
          <ul className="space-y-4">
            <li>
              <a href={CALL_URL} className="inline-flex items-center gap-2.5 text-sm text-seafoam hover:text-aqua-bright transition-colors">
                <Phone size={14} aria-hidden="true" className="shrink-0" />
                {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a
                href={whatsapp.general()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-sm text-seafoam hover:text-aqua-bright transition-colors"
              >
                <MessageCircle size={14} aria-hidden="true" className="shrink-0" />
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-sm text-seafoam hover:text-aqua-bright transition-colors"
              >
                <MapPin size={14} aria-hidden="true" className="shrink-0" />
                Ambattur, Chennai
              </a>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <p className="text-xs font-semibold text-pearl mb-5 tracking-widest uppercase">Follow Along</p>
          <div className="flex items-center gap-3">
            {[
              { href: INSTAGRAM_URL, icon: <InstagramIcon size={17} />, label: "Fish World Ambattur on Instagram" },
              { href: YOUTUBE_URL,   icon: <YoutubeIcon size={17} />,   label: "Fish World Ambattur on YouTube" },
            ].map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex items-center justify-center w-11 h-11 rounded-full text-seafoam hover:text-aqua-bright transition-all shadow-sm"
                style={{ border: "1px solid rgba(0, 175, 193, 0.22)", background: "rgba(6, 42, 66, 0.55)" }}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(0, 175, 193, 0.12)" }}>
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-5 pb-24 sm:pb-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-seafoam-dim">
          <p className="text-center md:text-left">
            © 2026 Fish World Ambattur. All rights reserved.
          </p>
          <p className="text-center md:text-right">
            Designed &amp; Developed by{" "}
            <span className="font-semibold text-pearl/75 tracking-wide hover:text-aqua transition-colors duration-300 cursor-default">
              Nitish — FineWorks
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}

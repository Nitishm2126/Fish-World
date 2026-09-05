"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
import { whatsapp } from "@/lib/whatsapp";

const LINKS = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };
    if (open) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "bg-abyss-deep/95 backdrop-blur-md border-b border-ocean/60 shadow-lg shadow-abyss-deep/40" : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto max-w-7xl px-5 sm:px-8 h-18 flex items-center justify-between"
        style={{ height: "4.5rem" }}
      >
        <Link href="/" className="flex flex-col leading-none group" onClick={() => setOpen(false)}>
          <span className="font-[var(--font-display)] text-lg sm:text-xl tracking-tight text-pearl group-hover:text-cyan-soft transition-colors">
            Fish World
          </span>
          <span className="text-[0.65rem] sm:text-xs tracking-[0.25em] text-cyan mt-0.5">
            AMBATTUR
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm text-seafoam hover:text-pearl transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center">
          <a
            href={whatsapp.general()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-coral hover:bg-coral-soft text-abyss-deep font-medium text-sm px-4 py-2 transition-colors min-h-[44px]"
          >
            <MessageCircle size={16} aria-hidden="true" />
            WhatsApp
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-nav-menu"
          className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-full border border-ocean/80 text-pearl hover:border-cyan hover:text-cyan-soft transition-colors focus-visible:outline-2"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Drawer & Backdrop */}
      <AnimatePresence>
        {open && (
          <>
            {/* Background Dim Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
              className="md:hidden fixed inset-0 top-[4.5rem] bg-abyss-deep/80 backdrop-blur-sm z-40"
              aria-hidden="true"
            />

            {/* Slide Down Menu Content */}
            <motion.div
              id="mobile-nav-menu"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="md:hidden relative z-50 overflow-hidden bg-abyss-deep/98 border-b border-ocean/80 shadow-2xl"
            >
              <ul className="px-5 pt-3 pb-2 flex flex-col gap-1">
                {LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between py-3.5 px-3 rounded-xl text-base text-pearl/90 hover:text-cyan-soft hover:bg-ocean/30 transition-colors border-b border-ocean/30 last:border-b-0 min-h-[44px]"
                    >
                      <span>{link.label}</span>
                      <span className="text-cyan text-xs opacity-60">→</span>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="px-5 pt-2 pb-6">
                <a
                  href={whatsapp.general()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-coral hover:bg-coral-soft text-abyss-deep font-semibold text-sm px-4 py-3.5 transition-colors shadow-lg shadow-coral/20 min-h-[44px]"
                >
                  <MessageCircle size={18} aria-hidden="true" />
                  Chat on WhatsApp
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

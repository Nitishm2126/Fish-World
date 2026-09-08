"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
import { whatsapp } from "@/lib/whatsapp";

const LINKS = [
  { label: "Home",     href: "/" },
  { label: "Shop",     href: "/shop" },
  { label: "Services", href: "/#services" },
  { label: "About",    href: "/#about" },
  { label: "Gallery",  href: "/#gallery" },
  { label: "Contact",  href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    if (open) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-400 ${
        scrolled || open
          ? "border-b"
          : "border-b border-transparent"
      }`}
      style={
        scrolled || open
          ? {
              background: "rgba(6, 42, 66, 0.88)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              borderColor: "rgba(0, 175, 193, 0.22)",
              boxShadow: "0 10px 30px -10px rgba(3, 21, 34, 0.8)",
            }
          : {}
      }
    >
      <nav
        aria-label="Primary"
        className="mx-auto max-w-7xl px-5 sm:px-8 flex items-center justify-between"
        style={{ height: "4.5rem" }}
      >
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none group" onClick={() => setOpen(false)}>
          <span className="font-[var(--font-display)] text-lg sm:text-xl tracking-tight text-pearl group-hover:text-aqua-bright transition-colors">
            Fish World
          </span>
          <span className="text-[0.6rem] sm:text-[0.65rem] tracking-[0.3em] text-aqua mt-0.5 font-semibold">
            AMBATTUR
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-7">
          {LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-seafoam hover:text-aqua-bright transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center">
          <a
            href={whatsapp.general()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-coral hover:bg-coral-hover text-ocean-navy font-bold text-sm px-5 py-2.5 transition-all min-h-[42px] shadow-[0_0_20px_rgba(255,112,72,0.32)]"
          >
            <MessageCircle size={15} aria-hidden="true" />
            WhatsApp
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-nav-menu"
          className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-full text-pearl transition-all"
          style={{ border: "1px solid rgba(0, 175, 193, 0.25)", background: "rgba(6, 42, 66, 0.65)" }}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
              className="md:hidden fixed inset-0 top-[4.5rem] z-40"
              style={{ background: "rgba(3, 21, 34, 0.8)", backdropFilter: "blur(10px)" }}
              aria-hidden="true"
            />
            <motion.div
              id="mobile-nav-menu"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: "easeInOut" }}
              className="md:hidden relative z-50"
              style={{
                background: "rgba(6, 42, 66, 0.98)",
                backdropFilter: "blur(24px)",
                borderBottom: "1px solid rgba(0, 175, 193, 0.22)",
                boxShadow: "0 20px 40px rgba(3, 21, 34, 0.8)",
              }}
            >
              <ul className="px-5 pt-2 pb-2 flex flex-col">
                {LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between py-4 px-2 text-base font-medium text-pearl/90 hover:text-aqua-bright transition-colors border-b last:border-b-0 min-h-[52px]"
                      style={{ borderColor: "rgba(0, 175, 193, 0.12)" }}
                    >
                      <span>{link.label}</span>
                      <span className="text-aqua/50 text-sm">›</span>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="px-5 py-5">
                <a
                  href={whatsapp.general()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-coral hover:bg-coral-hover text-ocean-navy font-bold text-sm px-4 py-4 transition-all min-h-[50px] shadow-[0_0_24px_rgba(255,112,72,0.35)]"
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

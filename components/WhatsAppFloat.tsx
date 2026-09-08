"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { whatsapp } from "@/lib/whatsapp";

export default function WhatsAppFloat() {
  return (
    <a
      href={whatsapp.general()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Fish World Ambattur on WhatsApp"
      style={{
        bottom: "max(1.5rem, env(safe-area-inset-bottom, 1.5rem))",
        right: "max(1.5rem, env(safe-area-inset-right, 1.5rem))",
        background: "linear-gradient(135deg, #1a9648 0%, #25D366 60%, #2de370 100%)",
        boxShadow: "0 10px 30px rgba(37,211,102,0.35), 0 0 20px rgba(0,175,193,0.25), 0 4px 12px rgba(3,21,34,0.6)",
        border: "1px solid rgba(255,255,255,0.25)",
      }}
      className="group fixed z-40 flex items-center gap-0 rounded-full text-white transition-all duration-300 hover:scale-105"
    >
      <span className="max-w-0 overflow-hidden whitespace-nowrap opacity-0 group-hover:max-w-[10rem] group-hover:opacity-100 group-hover:pl-5 transition-all duration-300 text-sm font-bold hidden sm:inline text-[#013813]">
        Chat with us
      </span>
      <span className="flex items-center justify-center w-[54px] h-[54px] sm:w-[58px] sm:h-[58px] rounded-full animate-drift">
        <MessageCircle size={26} aria-hidden="true" strokeWidth={2} className="text-[#013813]" />
      </span>
    </a>
  );
}

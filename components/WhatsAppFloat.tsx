"use client";

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
        bottom: "max(1.25rem, env(safe-area-inset-bottom, 1.25rem))",
        right: "max(1.25rem, env(safe-area-inset-right, 1.25rem))",
      }}
      className="group fixed z-40 flex items-center gap-0 rounded-full bg-[#25D366] text-abyss-deep shadow-[0_8px_30px_rgba(37,211,102,0.35)] hover:shadow-[0_8px_36px_rgba(37,211,102,0.55)] transition-all duration-300"
    >
      <span className="max-w-0 overflow-hidden whitespace-nowrap opacity-0 group-hover:max-w-[9rem] group-hover:opacity-100 group-hover:pl-4 transition-all duration-300 text-sm font-medium text-abyss-deep hidden sm:inline">
        Chat with us
      </span>
      <span className="flex items-center justify-center w-[52px] h-[52px] sm:w-14 sm:h-14 rounded-full animate-drift">
        <MessageCircle size={25} aria-hidden="true" strokeWidth={2.2} className="text-abyss-deep" />
      </span>
    </a>
  );
}

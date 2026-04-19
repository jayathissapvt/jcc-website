import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { whatsappUrl, DEFAULT_GREETING } from "@/lib/whatsapp";

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappUrl(DEFAULT_GREETING)}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.5)] hover:shadow-[0_4px_25px_rgba(37,211,102,0.7)] transition-all duration-300 hover:scale-110 flex items-center justify-center group"
      data-testid="floating-whatsapp"
    >
      <div className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite] opacity-75"></div>
      <FaWhatsapp size={32} className="relative z-10" />
      <span className="sr-only">Contact on WhatsApp</span>
    </a>
  );
}

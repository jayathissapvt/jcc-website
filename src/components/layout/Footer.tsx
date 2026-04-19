import React, { useState } from "react";
import { Link } from "wouter";
import { MapPin, Phone, Mail, Clock, X } from "lucide-react";
import { FaWhatsapp, FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { whatsappUrl, DEFAULT_GREETING } from "@/lib/whatsapp";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

type ConfirmKey = "maps" | "call" | "whatsapp" | "email";

const CONFIRM_CONFIG: Record<
  ConfirmKey,
  {
    icon: React.ComponentType<{ size?: number; className?: string }>;
    iconBg: string;
    title: string;
    description: React.ReactNode;
    actionLabel: string;
    actionClass: string;
    url: string;
    newTab: boolean;
  }
> = {
  maps: {
    icon: MapPin,
    iconBg: "from-blue-500 to-cyan-400 shadow-[0_8px_24px_rgba(37,99,235,0.25)]",
    title: "Open in Google Maps?",
    description: (
      <>This will open Google Maps in a new tab to show <span className="font-medium text-slate-800">Jayathissa Lanka Enterprises</span> in Dehiattakandiya, Sri Lanka.</>
    ),
    actionLabel: "Open Maps",
    actionClass: "from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 shadow-[0_4px_14px_rgba(37,99,235,0.35)]",
    url: "https://www.google.com/maps/search/?api=1&query=Jayathissa+Lanka+Enterprises+Dehiattakandiya",
    newTab: true,
  },
  call: {
    icon: Phone,
    iconBg: "from-emerald-500 to-teal-400 shadow-[0_8px_24px_rgba(16,185,129,0.25)]",
    title: "Call Jayathissa Lanka?",
    description: (
      <>This will start a phone call to <span className="font-medium text-slate-800">+94 77 437 0039</span>. Standard call rates apply.</>
    ),
    actionLabel: "Call Now",
    actionClass: "from-emerald-600 to-teal-500 hover:from-emerald-700 hover:to-teal-600 shadow-[0_4px_14px_rgba(16,185,129,0.35)]",
    url: "tel:+94774370039",
    newTab: false,
  },
  whatsapp: {
    icon: FaWhatsapp,
    iconBg: "from-[#25D366] to-[#128C7E] shadow-[0_8px_24px_rgba(37,211,102,0.25)]",
    title: "Chat on WhatsApp?",
    description: (
      <>This will open WhatsApp in a new tab and start a chat with <span className="font-medium text-slate-800">+94 77 437 0039</span>.</>
    ),
    actionLabel: "Open WhatsApp",
    actionClass: "from-[#25D366] to-[#128C7E] hover:from-[#1ebe5d] hover:to-[#0d6e63] shadow-[0_4px_14px_rgba(37,211,102,0.35)]",
    url: whatsappUrl(DEFAULT_GREETING),
    newTab: true,
  },
  email: {
    icon: Mail,
    iconBg: "from-rose-500 to-orange-400 shadow-[0_8px_24px_rgba(244,63,94,0.25)]",
    title: "Send us an email?",
    description: (
      <>This will open your email app to compose a message to <span className="font-medium text-slate-800 break-all">jayathissapvt@gmail.com</span>.</>
    ),
    actionLabel: "Open Email",
    actionClass: "from-rose-600 to-orange-500 hover:from-rose-700 hover:to-orange-600 shadow-[0_4px_14px_rgba(244,63,94,0.35)]",
    url: "mailto:jayathissapvt@gmail.com",
    newTab: false,
  },
};

const divisions = [
  { name: "Jayathissa Lanka Super", href: "/divisions/super" },
  { name: "Ezymart.lk", href: "/divisions/ezymart" },
  { name: "Jayathissa Lanka Agri", href: "/divisions/agri" },
  { name: "MyPhone.lk", href: "/divisions/myphone" },
  { name: "Jayathissa Laptop & PC Centre", href: "/divisions/laptops" },
  { name: "Jayathissa Lanka Technology", href: "/divisions/technology" },
  { name: "Jayathissa Lanka Academy", href: "/divisions/academy" },
  { name: "Jayathissa Lanka Communication", href: "/divisions/communication" },
  { name: "Jayathissa Lanka Express", href: "/divisions/express" },
  { name: "Jayathissa Lanka Motors", href: "/divisions/motors" },
  { name: "Jayathissa Apple Store", href: "/divisions/apple", soon: true },
  { name: "Jayathissa Digital Media", href: "/divisions/digital", soon: true },
];

const socials = [
  { icon: FaWhatsapp, href: whatsappUrl(DEFAULT_GREETING), label: "WhatsApp" },
  { icon: FaFacebookF, href: "https://facebook.com/jayathissalanka", label: "Facebook" },
  { icon: FaInstagram, href: "https://instagram.com/jayathissalanka", label: "Instagram" },
  { icon: FaTiktok, href: "https://tiktok.com/@jayathissalanka", label: "TikTok" },
  { icon: FaYoutube, href: "https://youtube.com/@jayathissalanka", label: "YouTube" },
];

export function Footer() {
  const [activeConfirm, setActiveConfirm] = useState<ConfirmKey | null>(null);

  const close = () => setActiveConfirm(null);

  const handleConfirm = () => {
    if (!activeConfirm) return;
    const cfg = CONFIRM_CONFIG[activeConfirm];
    if (cfg.newTab) {
      window.open(cfg.url, "_blank", "noopener,noreferrer");
    } else {
      window.location.href = cfg.url;
    }
    close();
  };

  const contactRow = (
    key: ConfirmKey,
    Icon: React.ComponentType<{ size?: number; className?: string }>,
    label: string,
  ) => (
    <li>
      <button
        type="button"
        onClick={() => setActiveConfirm(key)}
        className="group w-full flex items-start gap-3 text-left text-blue-100/60 text-sm font-light rounded-lg p-2 -m-2 hover:text-white hover:bg-white/5 transition-all"
        data-testid={`footer-${key}-button`}
        aria-label={CONFIRM_CONFIG[key].title}
      >
        <Icon size={16} className="text-cyan-400 mt-0.5 shrink-0" />
        <span className="flex-1 break-words">{label}</span>
      </button>
    </li>
  );

  const active = activeConfirm ? CONFIRM_CONFIG[activeConfirm] : null;
  const ActiveIcon = active?.icon;

  return (
    <footer className="bg-[#0A1638] text-white pt-12 md:pt-16 pb-6 md:pb-8 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12 mb-10 md:mb-12">
          <div className="lg:col-span-1">
            <img
              src="https://admin.jcc.lk/wp-content/uploads/2025/08/Jayathissa-Lanka-Logo-5-3-300x64.png"
              alt="Jayathissa Lanka Logo"
              className="h-10 object-contain mb-6 bg-white/10 p-2 rounded backdrop-blur-sm"
            />
            <p className="text-blue-100/60 text-sm mb-6 leading-relaxed font-light">
              Jayathissa City Center is the flagship online hub for Jayathissa Lanka Enterprises (PVT) LTD — a multi-division Sri Lankan business delivering excellence across transport, retail, tech, agriculture and more.
            </p>
            <div className="flex items-center gap-3">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all"
                    data-testid={`social-${s.label.toLowerCase()}`}
                  >
                    <Icon size={15} />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-5 text-white tracking-wider uppercase">Quick Links</h3>
            <ul className="grid grid-cols-2 lg:grid-cols-1 gap-x-4 gap-y-2.5">
              <li><a href="/#home" className="text-blue-100/60 hover:text-white transition-colors text-[13px] sm:text-sm font-light">Home</a></li>
              <li><a href="/#about" className="text-blue-100/60 hover:text-white transition-colors text-[13px] sm:text-sm font-light">About Us</a></li>
              <li><a href="/#services" className="text-blue-100/60 hover:text-white transition-colors text-[13px] sm:text-sm font-light">Our Divisions</a></li>
              <li><a href="/#contact" className="text-blue-100/60 hover:text-white transition-colors text-[13px] sm:text-sm font-light">Contact</a></li>
              <li><Link href="/terms" className="text-blue-100/60 hover:text-white transition-colors text-[13px] sm:text-sm font-light">Terms & Conditions</Link></li>
              <li><Link href="/privacy" className="text-blue-100/60 hover:text-white transition-colors text-[13px] sm:text-sm font-light">Privacy Policy</Link></li>
              <li><Link href="/refunds" className="text-blue-100/60 hover:text-white transition-colors text-[13px] sm:text-sm font-light">Returns & Refunds</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="text-sm font-semibold mb-5 text-white tracking-wider uppercase">Our Divisions</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-x-6 gap-y-2.5">
              {divisions.map((d) => (
                <li key={d.name} className="min-w-0">
                  <Link
                    href={d.href}
                    className="group inline-flex items-center gap-1.5 max-w-full text-blue-100/60 hover:text-white transition-colors text-[13px] sm:text-sm font-light"
                  >
                    <span className="min-w-0 break-words">{d.name}</span>
                    {d.soon && (
                      <span className="shrink-0 text-[8px] font-bold tracking-wider uppercase text-amber-300/90 bg-amber-500/15 border border-amber-400/20 rounded px-1 py-0.5">
                        Soon
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-5 text-white tracking-wider uppercase">Contact</h3>
            <ul className="space-y-3">
              {contactRow("maps", MapPin, "Dehiattakandiya, Sri Lanka")}
              {contactRow("call", Phone, "+94 77 437 0039")}
              {contactRow("whatsapp", FaWhatsapp, "WhatsApp Chat")}
              {contactRow("email", Mail, "jayathissapvt@gmail.com")}
              <li className="flex items-start gap-3 text-blue-100/60 text-sm font-light p-2 -m-2">
                <Clock size={16} className="text-cyan-400 mt-0.5 shrink-0" />
                <span>Mon – Sun: 8:30 AM – 7:30 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <Dialog open={activeConfirm !== null} onOpenChange={(open) => !open && close()}>
          <DialogContent
            className="max-w-[92vw] sm:max-w-md rounded-2xl bg-white text-slate-900 border-0 shadow-2xl p-0 overflow-hidden"
            data-testid="confirm-dialog"
          >
            <button
              type="button"
              onClick={close}
              className="absolute right-3 top-3 z-10 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 flex items-center justify-center transition-colors"
              aria-label="Close"
              data-testid="confirm-close"
            >
              <X size={16} />
            </button>
            {active && ActiveIcon && (
              <>
                <div className="px-5 sm:px-6 pt-7 pb-2">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${active.iconBg} flex items-center justify-center mb-4`}>
                    <ActiveIcon size={22} className="text-white" />
                  </div>
                  <DialogHeader className="text-left space-y-1.5">
                    <DialogTitle className="text-lg sm:text-xl font-semibold text-slate-900">
                      {active.title}
                    </DialogTitle>
                    <DialogDescription className="text-sm text-slate-600 leading-relaxed">
                      {active.description}
                    </DialogDescription>
                  </DialogHeader>
                </div>
                <DialogFooter className="flex flex-col-reverse sm:flex-row sm:justify-end gap-2 px-5 sm:px-6 pb-5 pt-4 bg-slate-50/50 border-t border-slate-100">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={close}
                    className="rounded-full border-slate-200 text-slate-700 hover:bg-slate-100 hover:text-slate-900 h-11 px-5 w-full sm:w-auto"
                    data-testid="confirm-cancel"
                  >
                    Cancel
                  </Button>
                  <Button
                    type="button"
                    onClick={handleConfirm}
                    className={`rounded-full bg-gradient-to-r ${active.actionClass} text-white h-11 px-5 w-full sm:w-auto`}
                    data-testid="confirm-action"
                  >
                    {active.actionLabel}
                  </Button>
                </DialogFooter>
              </>
            )}
          </DialogContent>
        </Dialog>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-blue-100/40 text-xs sm:text-sm text-center md:text-left font-light">
            &copy; {new Date().getFullYear()} Jayathissa Lanka Enterprises (PVT) LTD. All rights reserved.
          </p>
          <p className="text-blue-100/40 text-xs sm:text-sm font-light">
            Built with care for JCC.lk
          </p>
        </div>
      </div>
    </footer>
  );
}

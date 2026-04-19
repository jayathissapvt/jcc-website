import React from "react";
import { motion } from "framer-motion";
import { Banknote, CreditCard, QrCode, Building2, FileText, ShieldCheck, Lock } from "lucide-react";
import { TypewriterGradient } from "@/components/ui/typewriter-gradient";

const methods = [
  {
    icon: Banknote,
    title: "Cash",
    desc: "Pay in cash at any of our outlets, including Super, Ezymart and our Apple, Phone and Laptop centres.",
    accent: "from-emerald-500 to-teal-500",
    badge: "Most popular",
    badgeClass: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  {
    icon: CreditCard,
    title: "Credit / Debit Card",
    desc: "All major Visa, Mastercard and AMEX cards accepted in-store and online with secure 3-D Secure.",
    accent: "from-blue-600 to-indigo-600",
    badge: "Visa · Master · AMEX",
    badgeClass: "bg-blue-50 text-blue-700 border-blue-200",
  },
  {
    icon: QrCode,
    title: "QR Pay (LANKAQR)",
    desc: "Scan our LANKAQR code with any local banking app — instant payment, zero hassle.",
    accent: "from-cyan-500 to-sky-500",
    badge: "Instant",
    badgeClass: "bg-cyan-50 text-cyan-700 border-cyan-200",
  },
  {
    icon: Building2,
    title: "Online Bank Transfer",
    desc: "Direct transfer to our verified company bank accounts. We share account details on request.",
    accent: "from-violet-500 to-purple-600",
    badge: "All major banks",
    badgeClass: "bg-violet-50 text-violet-700 border-violet-200",
  },
  {
    icon: FileText,
    title: "Cheque",
    desc: "Cheque payments are available for selected corporate and long-standing trade customers only.",
    accent: "from-amber-500 to-orange-500",
    badge: "Selected customers",
    badgeClass: "bg-amber-50 text-amber-700 border-amber-200",
    restricted: true,
  },
];

export function Payments() {
  return (
    <section id="payments" className="relative py-20 md:py-24 overflow-hidden bg-gradient-to-b from-white via-blue-50/40 to-white">
      <div aria-hidden className="pointer-events-none absolute -top-40 -left-40 w-[480px] h-[480px] rounded-full bg-blue-500/10 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-40 -right-40 w-[480px] h-[480px] rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.15em] uppercase text-blue-700 bg-white border border-blue-200 shadow-sm mb-5">
            <ShieldCheck size={14} />
            Payment Options
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 leading-[1.1] tracking-tight">
            Pay your way —{" "}
            <TypewriterGradient phrases={["safe, fast & flexible", "secure & convenient", "made for everyone"]} />
          </h2>
          <p className="text-slate-600 text-base md:text-lg font-light leading-relaxed">
            We accept multiple payment methods across all Jayathissa Lanka divisions, in-store and online.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {methods.map((m, i) => {
            const Icon = m.icon;
            return (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group relative bg-white rounded-2xl border border-blue-100 p-6 md:p-7 shadow-[0_10px_30px_rgba(15,23,42,0.05)] hover:shadow-[0_18px_44px_rgba(37,99,235,0.18)] hover:-translate-y-1 hover:border-blue-200 transition-all duration-300 overflow-hidden"
              >
                <div aria-hidden className={`absolute -top-16 -right-16 w-40 h-40 rounded-full bg-gradient-to-br ${m.accent} opacity-0 group-hover:opacity-15 blur-2xl transition-opacity`} />

                <div className="flex items-start justify-between gap-3 mb-5 relative">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${m.accent} flex items-center justify-center text-white shadow-lg group-hover:scale-105 group-hover:rotate-3 transition-transform`}>
                    <Icon size={22} />
                  </div>
                  <span className={`text-[10px] font-bold tracking-wider uppercase border rounded-full px-2.5 py-1 ${m.badgeClass}`}>
                    {m.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-1.5 tracking-tight flex items-center gap-2">
                  {m.title}
                  {m.restricted && <Lock size={14} className="text-amber-600" />}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {m.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Trust strip */}
        <div className="mt-10 md:mt-12 flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-100 shadow-sm">
            <ShieldCheck size={16} className="text-emerald-600" />
            <span className="text-sm text-slate-700 font-medium">Secure payments · 3-D Secure</span>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-100 shadow-sm">
            <Lock size={16} className="text-blue-600" />
            <span className="text-sm text-slate-700 font-medium">Encrypted & PCI-aware</span>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-100 shadow-sm">
            <Banknote size={16} className="text-amber-600" />
            <span className="text-sm text-slate-700 font-medium">Receipts on every transaction</span>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-slate-500 max-w-xl mx-auto leading-relaxed">
          Cheque payments are subject to verification and credit approval, and are available only to selected corporate and trade customers. Please contact our team for details.
        </p>
      </div>
    </section>
  );
}

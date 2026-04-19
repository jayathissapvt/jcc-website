import React from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Bus, ShoppingBag, Sparkles, Leaf, GraduationCap, Car, Megaphone, ArrowRight, Laptop, Cctv, Printer, LayoutGrid } from "lucide-react";
import { FaApple, FaMobileAlt } from "react-icons/fa";
import { TypewriterGradient } from "@/components/ui/typewriter-gradient";

type Service = {
  id: string;
  category: string;
  title: string;
  description: string;
  bullets: string[];
  icon: React.ComponentType<{ size?: number; className?: string }>;
  iconBg: string;
  blob: string;
  comingSoon?: boolean;
  iconImage?: string;
  iconImageInvert?: boolean;
  cardClassName?: string;
  textTheme?: "light" | "mono";
};

const services: Service[] = [
  // ── Retail & Everyday Essentials ─────────────────────────────
  {
    id: "super",
    category: "Retail & Wholesale",
    title: "Jayathissa Lanka Super",
    description: "Supermarket, wholesale supply and daily bill payments.",
    bullets: [
      "Full retail supermarket experience",
      "Wholesale supply for shops & businesses",
      "Daily bill payments (electricity, water, etc.)",
    ],
    icon: ShoppingBag,
    iconBg: "from-indigo-500 to-blue-600",
    blob: "bg-indigo-200/60",
  },
  {
    id: "ezymart",
    category: "Beauty & Personal Care",
    title: "Ezymart.lk",
    description: "Cosmetics and skincare with home delivery.",
    bullets: [
      "Branded cosmetics & makeup",
      "Skincare for every skin type",
      "Personal care essentials",
    ],
    icon: Sparkles,
    iconImage: "https://cdn-icons-png.flaticon.com/512/1585/1585962.png",
    iconImageInvert: true,
    iconBg: "from-neutral-800 to-black",
    blob: "bg-neutral-900/15",
    cardClassName: "bg-white border-neutral-200",
    textTheme: "mono",
  },
  {
    id: "agri",
    category: "Agriculture",
    title: "Jayathissa Lanka Agri",
    description: "Buying and selling rice, paddy and farm produce.",
    bullets: [
      "Buying paddy from local farmers",
      "Selling premium quality rice",
      "Wholesale grain supply",
    ],
    icon: Leaf,
    iconBg: "from-orange-500 to-amber-500",
    blob: "bg-orange-200/60",
  },

  // ── Mobile, Tech & IT ────────────────────────────────────────
  {
    id: "myphone",
    category: "Mobile Phones",
    title: "MyPhone.lk",
    description: "Smartphones, accessories and expert phone repairs.",
    bullets: [
      "Brand-new and pre-owned iPhones",
      "Android smartphones & accessories",
      "Professional phone repair service",
    ],
    icon: FaMobileAlt,
    iconBg: "from-sky-500 to-blue-600",
    blob: "bg-sky-200/60",
  },
  {
    id: "laptops",
    category: "Computers & IT",
    title: "Jayathissa Laptop & PC Centre",
    description: "Laptops, desktops and accessories — sales and repairs.",
    bullets: [
      "Laptop & PC sales (new and refurbished)",
      "On-site repairs and upgrades",
      "Genuine accessories & peripherals",
    ],
    icon: Laptop,
    iconBg: "from-cyan-500 to-sky-700",
    blob: "bg-cyan-200/60",
  },
  {
    id: "technology",
    category: "CCTV & IT Solutions",
    title: "Jayathissa Lanka Technology",
    description: "CCTV systems, networking and complete IT solutions.",
    bullets: [
      "CCTV system sales and installation",
      "Network setup and configuration",
      "Business IT support and maintenance",
    ],
    icon: Cctv,
    iconBg: "from-emerald-500 to-teal-700",
    blob: "bg-emerald-200/60",
  },

  // ── Education & Office ───────────────────────────────────────
  {
    id: "academy",
    category: "Education",
    title: "Jayathissa Lanka Academy",
    description: "ICT training for the next generation.",
    bullets: [
      "Computer literacy & ICT basics",
      "Coding and programming courses",
      "Graphic & web design",
    ],
    icon: GraduationCap,
    iconBg: "from-violet-500 to-purple-600",
    blob: "bg-violet-200/60",
  },
  {
    id: "communication",
    category: "School & Office",
    title: "Jayathissa Lanka Communication",
    description: "School, office and preschool stationery, printouts and photocopies.",
    bullets: [
      "Wide range of stationery",
      "Printout and photocopy services",
      "School & office supply solutions",
    ],
    icon: Printer,
    iconBg: "from-teal-500 to-cyan-600",
    blob: "bg-teal-200/60",
  },

  // ── Transport & Automotive ───────────────────────────────────
  {
    id: "express",
    category: "Transport",
    title: "Jayathissa Lanka Express",
    description: "Route buses and special hires across Sri Lanka.",
    bullets: [
      "Routes: Yakkure–Siripura–Mahiyanganaya",
      "Routes: Dehiaththakandiya–Kandy",
      "School trips, staff transport & pilgrimages",
    ],
    icon: Bus,
    iconBg: "from-blue-500 to-blue-600",
    blob: "bg-blue-200/60",
  },
  {
    id: "motors",
    category: "Automotive",
    title: "Jayathissa Lanka Motors",
    description: "Vehicle sales and reliable after-sales support.",
    bullets: [
      "Quality vehicle sales",
      "Trusted, transparent dealings",
      "After-sales customer support",
    ],
    icon: Car,
    iconBg: "from-slate-700 to-slate-900",
    blob: "bg-slate-200/60",
  },

  // ── Coming Soon ──────────────────────────────────────────────
  {
    id: "apple",
    category: "Apple Authorised",
    title: "Jayathissa Apple Store",
    description: "Genuine iPhone, iPad, Mac and accessories store.",
    bullets: [
      "Latest iPhone models with full warranty",
      "iPad, MacBook & Apple Watch",
      "Original Apple accessories",
    ],
    icon: FaApple,
    iconBg: "from-zinc-800 to-black",
    blob: "bg-zinc-200/70",
    comingSoon: true,
  },
  {
    id: "digital",
    category: "Marketing Agency",
    title: "Jayathissa Digital Media",
    description: "Digital media consultancy and full-service agency.",
    bullets: [
      "Social media management & content",
      "Branding, logo & graphic design",
      "Website & e-commerce development",
    ],
    icon: Megaphone,
    iconBg: "from-fuchsia-500 to-pink-600",
    blob: "bg-fuchsia-200/60",
    comingSoon: true,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

export function Services() {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-slate-50 to-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase text-blue-700 bg-blue-100/80 border border-blue-200 mb-5">
            Our Divisions
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 leading-tight">
            Everything you need —{" "}
            <TypewriterGradient phrases={["in one trusted name", "under one roof", "from people you know"]} />
          </h2>
          <p className="text-slate-600 text-base md:text-lg font-light max-w-2xl mx-auto">
            Ten specialised divisions — plus our upcoming Apple Store and Digital Media Agency — each focused on quality and customer satisfaction.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service) => {
            const Icon = service.icon;
            const theme = (service as any).textTheme;
            const isLight = theme === "light";
            const isMono = theme === "mono";
            const cardClass = (service as any).cardClassName ?? "bg-white border-slate-200/80";

            const cardInner = (
              <div className={`relative h-full ${cardClass} border rounded-2xl p-7 shadow-[0_2px_12px_rgba(15,23,42,0.04)] transition-all duration-300 overflow-hidden group cursor-pointer
                hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(37,99,235,0.18)] hover:border-blue-300`}
              >
                {/* animated gradient ring on hover */}
                <div aria-hidden className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: "linear-gradient(135deg, rgba(37,99,235,0.10), rgba(6,182,212,0.10))",
                    WebkitMaskImage: "linear-gradient(#000,#000), linear-gradient(#000,#000)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                    padding: "1px",
                  }}
                />

                {!isLight && (
                  <div className={`absolute -top-8 -right-8 w-32 h-32 ${service.blob} rounded-full blur-2xl opacity-70 group-hover:opacity-100 group-hover:scale-125 transition-all duration-700`}></div>
                )}

                {/* shine sweep on hover */}
                <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
                  <div className="absolute -inset-y-10 -left-1/2 w-1/3 rotate-12 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-[400%] transition-all duration-1000 ease-out" />
                </div>

                {service.comingSoon && (
                  <span className="absolute top-5 right-5 z-10 inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase text-white bg-gradient-to-r from-orange-500 to-amber-500 shadow-md group-hover:scale-105 transition-transform">
                    Coming Soon
                  </span>
                )}

                <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-xl overflow-hidden ${isLight ? "bg-white/10 border border-white/20" : `bg-gradient-to-br ${service.iconBg}`} flex items-center justify-center text-white shadow-lg ${isMono ? "shadow-black/20" : "shadow-blue-500/20"} mb-5
                    transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6 group-hover:shadow-xl ${isMono ? "group-hover:shadow-black/30" : "group-hover:shadow-blue-500/40"}`}>
                    {(service as any).iconImage ? (
                      <img
                        src={(service as any).iconImage}
                        alt=""
                        className="w-6 h-6 object-contain"
                        style={(service as any).iconImageInvert ? { filter: "brightness(0) invert(1)" } : undefined}
                      />
                    ) : (
                      <Icon size={22} className="text-white" />
                    )}
                  </div>

                  <p className={`text-[10px] font-bold tracking-[0.12em] uppercase mb-1.5 ${isLight ? "text-white/80" : isMono ? "text-black/70" : "text-slate-500"}`}>
                    {service.category}
                  </p>
                  {(service as any).titleImage ? (
                    <h3 className="mb-2">
                      <img
                        src={(service as any).titleImage}
                        alt={service.title}
                        className="h-7 w-auto"
                        loading="lazy"
                      />
                    </h3>
                  ) : (
                    <h3
                      className={`text-lg font-bold mb-2 transition-colors duration-300 ${(service as any).titleClassName ?? "text-slate-900 group-hover:text-blue-700"}`}
                      style={(service as any).titleFont ? { fontFamily: (service as any).titleFont, fontWeight: 400, letterSpacing: "0.01em" } : undefined}
                    >
                      {service.title}
                    </h3>
                  )}
                  <p className={`text-sm mb-4 leading-relaxed ${isLight ? "text-white/90" : isMono ? "text-black/80" : "text-slate-600"}`}>
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-5">
                    {service.bullets.map((b, i) => (
                      <li key={i} className={`flex items-start gap-2 text-sm ${isLight ? "text-white/90" : isMono ? "text-black/80" : "text-slate-600"}`}>
                        <span className={`mt-1.5 w-1 h-1 rounded-full shrink-0 ${isLight ? "bg-white/70" : isMono ? "bg-black/60" : "bg-slate-400"}`}></span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <span
                    className={`inline-flex items-center gap-1.5 text-sm font-semibold transition-all duration-300 ${isLight ? "text-white" : isMono ? "text-black" : "text-blue-600 group-hover:text-blue-700"}`}
                    data-testid={`link-learn-more-${service.id}`}
                  >
                    {service.comingSoon ? "Notify me" : "Enquire now"}
                    <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1.5" />
                  </span>
                </div>
              </div>
            );

            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                whileHover={{ y: -2 }}
                className="h-full"
              >
                <a href="#contact" className="block h-full">{cardInner}</a>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Eye-catching CTA below the grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/#services"
            className="group relative inline-flex items-center gap-2.5 px-8 h-14 rounded-full bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 text-white font-semibold shadow-[0_10px_30px_rgba(37,99,235,0.35)] hover:shadow-[0_16px_40px_rgba(37,99,235,0.5)] transition-all duration-300 overflow-hidden"
            data-testid="btn-explore-all-divisions"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
            <LayoutGrid size={18} className="relative" />
            <span className="relative">Explore all divisions</span>
            <ArrowRight size={18} className="relative transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 h-14 rounded-full bg-white border border-slate-200 text-slate-800 font-semibold hover:border-blue-300 hover:text-blue-700 hover:shadow-md transition-all duration-300"
            data-testid="btn-talk-to-team"
          >
            Talk to our team
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

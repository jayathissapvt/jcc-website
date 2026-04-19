import React from "react";
import { motion } from "framer-motion";
import { Bus, ShoppingBag, Sparkles, Leaf, GraduationCap, Car } from "lucide-react";
import { FaMobileAlt } from "react-icons/fa";
import { TypewriterGradient } from "@/components/ui/typewriter-gradient";

const tiles = [
  { icon: Bus, label: "Transport" },
  { icon: FaMobileAlt, label: "MyPhone" },
  { icon: ShoppingBag, label: "Super" },
  { icon: Sparkles, label: "Ezymart" },
  { icon: Leaf, label: "Agri" },
  { icon: GraduationCap, label: "Academy" },
  { icon: Car, label: "Motors" },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase text-blue-700 bg-blue-100/80 border border-blue-200 mb-5">
              About Us
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
              One company.{" "}
              <TypewriterGradient phrases={["Many trusted services", "Many trusted brands", "Many happy customers"]} />{" "}
              across Sri Lanka.
            </h2>
            <p className="text-slate-600 text-base md:text-lg mb-5 leading-relaxed">
              Jayathissa Lanka Enterprises (PVT) LTD is a proudly Sri Lankan multi-division group built on trust, transparency and exceptional customer service. From everyday essentials to long-distance transport and complete IT solutions, we bring quality and convenience under one roof.
            </p>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              With more than ten specialised divisions, we serve thousands of families and businesses across the island — every single day.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4"
          >
            {tiles.map((tile, i) => {
              const Icon = tile.icon;
              return (
                <div
                  key={tile.label}
                  className={`bg-white border border-slate-200/80 rounded-2xl p-4 sm:p-5 flex flex-col items-center justify-center gap-3 shadow-[0_2px_10px_rgba(15,23,42,0.04)] hover:shadow-[0_8px_24px_rgba(37,99,235,0.12)] hover:-translate-y-0.5 hover:border-blue-200 transition-all duration-300 ${
                    i >= 4 ? "" : ""
                  }`}
                  data-testid={`tile-${tile.label.toLowerCase()}`}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
                    <Icon size={22} className="text-white" />
                  </div>
                  <p className="text-xs font-medium text-slate-700">{tile.label}</p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

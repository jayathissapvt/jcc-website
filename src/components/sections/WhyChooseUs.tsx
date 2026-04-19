import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Zap, Layers, MapPin, Heart } from "lucide-react";
import { TypewriterGradient } from "@/components/ui/typewriter-gradient";

const reasons = [
  {
    title: "Trust & Transparency",
    description: "Honest pricing and fair service every time.",
    icon: ShieldCheck,
  },
  {
    title: "Fast Service",
    description: "Quick response and on-time delivery, guaranteed.",
    icon: Zap,
  },
  {
    title: "All-in-One",
    description: "Multi-service convenience under a single brand.",
    icon: Layers,
  },
  {
    title: "Island-Wide Support",
    description: "Reach customers across all of Sri Lanka.",
    icon: MapPin,
  },
  {
    title: "Customer First",
    description: "Your satisfaction drives everything we do.",
    icon: Heart,
  },
];

const stats = [
  { value: "10,000+", label: "Happy Customers" },
  { value: "10+", label: "Business Divisions" },
  { value: "15+", label: "Years of Trust" },
  { value: "100%", label: "Customer Focus" },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase text-blue-700 bg-blue-100/80 border border-blue-200 mb-5">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight tracking-tight">
            Built on{" "}
            <TypewriterGradient phrases={["trust, speed and care", "honesty and quality", "customer-first values"]} />
          </h2>
        </div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5 mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
          }}
        >
          {reasons.map((reason, idx) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                }}
                className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-[0_2px_10px_rgba(15,23,42,0.04)] hover:shadow-[0_8px_24px_rgba(37,99,235,0.12)] hover:-translate-y-0.5 hover:border-blue-200 transition-all duration-300 text-center"
                data-testid={`why-card-${idx}`}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 mx-auto mb-3">
                  <Icon size={22} />
                </div>
                <h4 className="text-sm font-bold text-slate-900 mb-1.5">{reason.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{reason.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 p-8 md:p-10 shadow-[0_20px_60px_rgba(37,99,235,0.25)]"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center text-white">
                <p className="text-3xl md:text-4xl font-bold tracking-tight mb-1">
                  {stat.value}
                </p>
                <p className="text-xs md:text-sm font-medium text-white/80 uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

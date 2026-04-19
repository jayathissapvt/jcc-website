import React, { useEffect } from "react";
import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, Phone, MapPin, Clock, CheckCircle2, ShieldCheck, Award, Truck, Users } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import NotFound from "@/pages/not-found";
import { getDivision, divisions } from "@/data/divisions";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as any } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

export default function DivisionPage() {
  const params = useParams<{ slug: string }>();
  const division = getDivision(params.slug ?? "");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [params.slug]);

  if (!division) return <NotFound />;

  const Icon = division.icon;
  const related = divisions.filter((d) => d.group === division.group && d.slug !== division.slug).slice(0, 3);

  return (
    <MainLayout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#0E1E45] pt-32 pb-24 md:pt-40 md:pb-32 text-white">
        {/* Animated gradient orbs */}
        <motion.div
          aria-hidden
          className={`absolute -top-40 -right-32 w-[480px] h-[480px] rounded-full bg-gradient-to-br ${division.gradientFrom} ${division.gradientTo} opacity-30 blur-3xl`}
          animate={{ scale: [1, 1.1, 1], rotate: [0, 25, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden
          className="absolute -bottom-40 -left-32 w-[420px] h-[420px] rounded-full bg-cyan-500/20 blur-3xl"
          animate={{ scale: [1, 1.15, 1], rotate: [0, -20, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(59,130,246,0.18),_transparent_60%)]" />

        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <motion.div variants={stagger} initial="hidden" animate="visible" className="max-w-3xl">
            <motion.div variants={fadeUp}>
              <Link
                href="/#services"
                className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors mb-8"
                data-testid="link-back-services"
              >
                <ArrowLeft size={16} /> All Divisions
              </Link>
            </motion.div>

            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-6">
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${division.gradientFrom} ${division.gradientTo} flex items-center justify-center shadow-xl shadow-black/30`}
              >
                {division.iconImage ? (
                  <img
                    src={division.iconImage}
                    alt=""
                    className="w-7 h-7 object-contain"
                    style={division.iconImageInvert ? { filter: "brightness(0) invert(1)" } : undefined}
                  />
                ) : (
                  <Icon size={26} className="text-white" />
                )}
              </div>
              <div>
                <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-cyan-300/90">{division.category}</p>
                {division.comingSoon && (
                  <span className="inline-block mt-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase text-white bg-gradient-to-r from-orange-500 to-amber-500">
                    Coming Soon
                  </span>
                )}
              </div>
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-5">
              {division.name}
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg md:text-xl text-blue-100/80 font-light max-w-2xl">
              {division.tagline}
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mt-8">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white border-0 rounded-full px-7 shadow-[0_0_25px_rgba(56,189,248,0.45)]"
              >
                <a href={division.contact.whatsapp} target="_blank" rel="noopener noreferrer" data-testid="hero-whatsapp">
                  <FaWhatsapp className="mr-2 text-lg" /> Contact on WhatsApp
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 bg-white/5 text-white hover:bg-white/10 hover:text-white rounded-full px-7"
              >
                <a href={`tel:${division.contact.phone.replace(/\s/g, "")}`} data-testid="hero-call">
                  <Phone className="mr-2 h-4 w-4" /> Call Now
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* INTRO + BULLETS */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase text-blue-700 bg-blue-100/80 border border-blue-200 mb-5">
                About this division
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-5">
                What{" "}
                <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 text-transparent bg-clip-text">
                  {division.shortName}
                </span>{" "}
                offers
              </h2>
              <p className="text-slate-600 text-base md:text-lg font-light leading-relaxed mb-8">{division.intro}</p>

              <motion.ul
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-3"
              >
                {division.bullets.map((b, i) => (
                  <motion.li key={i} variants={fadeUp} className="flex items-start gap-3 text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
                    <span className="text-base">{b}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            {/* Contact card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-2 lg:sticky lg:top-28"
            >
              <div className="relative rounded-3xl bg-[#0E1E45] text-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.18)] overflow-hidden">
                <div
                  className={`absolute -top-16 -right-16 w-56 h-56 rounded-full bg-gradient-to-br ${division.gradientFrom} ${division.gradientTo} opacity-30 blur-2xl`}
                />
                <h3 className="relative text-xl font-bold mb-1">Get in touch</h3>
                <p className="relative text-blue-100/70 text-sm font-light mb-6">
                  Visit us or reach out — we’re happy to help.
                </p>

                <ul className="relative space-y-4 text-sm">
                  <li className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-4 w-4 text-cyan-300 shrink-0" />
                    <a href={`tel:${division.contact.phone.replace(/\s/g, "")}`} className="hover:text-cyan-300 transition-colors">
                      {division.contact.phone}
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaWhatsapp className="mt-0.5 h-4 w-4 text-emerald-400 shrink-0" />
                    <a href={division.contact.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-300 transition-colors">
                      Chat on WhatsApp
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 text-blue-300 shrink-0" />
                    <span className="text-blue-100/80">{division.contact.address}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="mt-0.5 h-4 w-4 text-blue-300 shrink-0" />
                    <span className="text-blue-100/80">{division.contact.hours}</span>
                  </li>
                </ul>

                <Button
                  asChild
                  className="relative mt-8 w-full bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white rounded-full"
                >
                  <a href={division.contact.whatsapp} target="_blank" rel="noopener noreferrer" data-testid="aside-whatsapp">
                    <FaWhatsapp className="mr-2 text-lg" /> Message Us Now
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="bg-white py-20 border-t border-slate-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase text-blue-700 bg-blue-100/80 border border-blue-200 mb-5">
              Our services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3 leading-tight">
              Key{" "}
              <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 text-transparent bg-clip-text">
                offerings
              </span>
            </h2>
            <p className="text-slate-600 font-light">Everything you can expect from {division.shortName}.</p>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {division.services.map((s, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="relative rounded-2xl border border-slate-200/80 bg-white p-7 shadow-[0_2px_12px_rgba(15,23,42,0.04)] hover:shadow-[0_12px_40px_rgba(37,99,235,0.12)] transition-all overflow-hidden group"
              >
                <div
                  className={`absolute -top-10 -right-10 w-28 h-28 ${division.blob} rounded-full blur-2xl opacity-70 group-hover:opacity-100 transition-opacity`}
                />
                <div
                  className={`relative w-11 h-11 rounded-xl bg-gradient-to-br ${division.gradientFrom} ${division.gradientTo} flex items-center justify-center text-white shadow-lg shadow-blue-500/10 mb-4`}
                >
                  <span className="font-bold text-lg">{i + 1}</span>
                </div>
                <h3 className="relative text-lg font-bold text-slate-900 mb-2">{s.title}</h3>
                <p className="relative text-slate-600 text-sm leading-relaxed">{s.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-20 border-t border-slate-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase text-blue-700 bg-blue-100/80 border border-blue-200 mb-5">
              Why choose us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3 leading-tight">
              The{" "}
              <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 text-transparent bg-clip-text">
                Jayathissa standard
              </span>
            </h2>
            <p className="text-slate-600 font-light">
              Backed by the trust and reach of Jayathissa Lanka Enterprises (PVT) LTD.
            </p>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { icon: ShieldCheck, title: "Trusted Service", desc: "A name families and businesses across Sri Lanka rely on every day." },
              { icon: Award, title: "Quality Assurance", desc: "Genuine products, verified suppliers and transparent dealings." },
              { icon: Truck, title: "Fast & Reliable", desc: "Quick service and dependable fulfilment, every single time." },
              { icon: Users, title: "Professional Team", desc: "Friendly, trained staff ready to help and advise you." },
            ].map((f, i) => {
              const FIcon = f.icon;
              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ y: -4 }}
                  className="relative rounded-2xl border border-slate-200/80 bg-white p-7 shadow-[0_2px_12px_rgba(15,23,42,0.04)] hover:shadow-[0_12px_40px_rgba(37,99,235,0.12)] transition-all overflow-hidden group"
                >
                  <div className={`absolute -top-10 -right-10 w-28 h-28 ${division.blob} rounded-full blur-2xl opacity-60 group-hover:opacity-90 transition-opacity`} />
                  <div className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${division.gradientFrom} ${division.gradientTo} flex items-center justify-center text-white shadow-lg shadow-blue-500/10 mb-4`}>
                    <FIcon size={22} className="text-white" />
                  </div>
                  <h3 className="relative text-base font-bold text-slate-900 mb-1.5">{f.title}</h3>
                  <p className="relative text-sm text-slate-600 leading-relaxed">{f.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="relative overflow-hidden bg-[#0E1E45] py-20 text-white">
        <motion.div
          aria-hidden
          className={`absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full bg-gradient-to-br ${division.gradientFrom} ${division.gradientTo} opacity-30 blur-3xl`}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden
          className="absolute -bottom-24 -right-24 w-[380px] h-[380px] rounded-full bg-cyan-500/25 blur-3xl"
          animate={{ scale: [1, 1.12, 1] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Ready to work with{" "}
            <span className="bg-gradient-to-r from-blue-300 to-cyan-300 text-transparent bg-clip-text">
              {division.shortName}
            </span>
            ?
          </h2>
          <p className="text-blue-100/80 max-w-xl mx-auto font-light mb-8">
            Visit Jayathissa City Center or message us — we’re open every day.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white border-0 rounded-full px-7 shadow-[0_0_25px_rgba(56,189,248,0.45)]"
            >
              <a href={division.contact.whatsapp} target="_blank" rel="noopener noreferrer" data-testid="cta-whatsapp">
                <FaWhatsapp className="mr-2 text-lg" /> Contact Us
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 bg-white/5 text-white hover:bg-white/10 hover:text-white rounded-full px-7"
            >
              <Link href="/#contact" data-testid="cta-learn-more">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* RELATED DIVISIONS */}
      {related.length > 0 && (
        <section className="bg-slate-50 py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
              <div>
                <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase text-blue-700 bg-blue-100/80 border border-blue-200 mb-3">
                  Related divisions
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900">More from the {division.group} group</h2>
              </div>
              <Link href="/#services" className="text-sm font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1.5 hover:gap-2.5 transition-all">
                View all divisions <ArrowRight size={14} />
              </Link>
            </div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-6"
            >
              {related.map((r) => {
                const RIcon = r.icon;
                return (
                  <motion.div key={r.slug} variants={fadeUp}>
                    <Link
                      href={`/divisions/${r.slug}`}
                      className="block h-full rounded-2xl border border-slate-200/80 bg-white p-7 shadow-[0_2px_12px_rgba(15,23,42,0.04)] hover:shadow-[0_12px_40px_rgba(37,99,235,0.12)] hover:-translate-y-1 transition-all relative overflow-hidden group"
                      data-testid={`related-${r.slug}`}
                    >
                      <div className={`absolute -top-8 -right-8 w-28 h-28 ${r.blob} rounded-full blur-2xl opacity-70 group-hover:opacity-100 transition-opacity`} />
                      <div className={`relative w-11 h-11 rounded-xl bg-gradient-to-br ${r.gradientFrom} ${r.gradientTo} flex items-center justify-center text-white shadow-lg shadow-blue-500/10 mb-4`}>
                        {r.iconImage ? (
                          <img
                            src={r.iconImage}
                            alt=""
                            className="w-5 h-5 object-contain"
                            style={r.iconImageInvert ? { filter: "brightness(0) invert(1)" } : undefined}
                          />
                        ) : (
                          <RIcon size={20} className="text-white" />
                        )}
                      </div>
                      <p className="relative text-[10px] font-bold tracking-[0.12em] uppercase text-slate-500 mb-1.5">{r.category}</p>
                      <h3 className="relative text-lg font-bold text-slate-900 mb-2">{r.name}</h3>
                      <p className="relative text-sm text-slate-600 mb-4 leading-relaxed">{r.tagline}</p>
                      <span className="relative inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 group-hover:gap-2.5 transition-all">
                        Visit page <ArrowRight size={14} />
                      </span>
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>
      )}
    </MainLayout>
  );
}

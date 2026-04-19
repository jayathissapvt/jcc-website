import React from "react";
import { TypewriterGradient } from "@/components/ui/typewriter-gradient";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Phone, Mail, Clock, MapPin, Send, MessageCircle, ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { buildContactMessage, openWhatsApp, whatsappUrl, DEFAULT_GREETING } from "@/lib/whatsapp";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(9, "Please enter a valid phone number"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const contactItems = [
  {
    icon: Phone,
    label: "Phone",
    value: "+94 77 437 0039",
    href: "tel:+94774370039",
    accent: "from-blue-500 to-blue-600",
  },
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    value: "Chat with us instantly",
    href: whatsappUrl(DEFAULT_GREETING),
    accent: "from-green-500 to-emerald-600",
    external: true,
  },
  {
    icon: Mail,
    label: "Email",
    value: "jayathissapvt@gmail.com",
    href: "mailto:jayathissapvt@gmail.com",
    accent: "from-cyan-500 to-sky-600",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon – Sun · 8:30 AM – 7:30 PM",
    accent: "from-violet-500 to-purple-600",
  },
  {
    icon: MapPin,
    label: "Head Office",
    value: "Jayathissa City Center, Dehiattakandiya, Sri Lanka",
    accent: "from-orange-500 to-amber-500",
  },
];

const inputClass =
  "h-12 bg-white border-blue-100 text-slate-900 placeholder:text-slate-400 rounded-xl px-4 " +
  "shadow-sm hover:border-blue-200 " +
  "focus-visible:ring-4 focus-visible:ring-blue-500/15 focus-visible:border-blue-500 focus-visible:shadow-md transition-all";

export function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", phone: "", service: "", message: "" },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const message = buildContactMessage(values);
    openWhatsApp(message);
    toast({
      title: "Opening WhatsApp…",
      description: "We've opened a chat with your enquiry pre-filled. Tap send to deliver it.",
    });
    form.reset();
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* soft brand accents */}
      <div aria-hidden className="pointer-events-none absolute -top-40 -left-40 w-[480px] h-[480px] rounded-full bg-blue-500/10 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-40 -right-40 w-[480px] h-[480px] rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative">
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.15em] uppercase text-blue-700 bg-white border border-blue-200 shadow-sm mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
            Get in touch
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 leading-[1.1] tracking-tight">
            Let&apos;s build something{" "}
            <TypewriterGradient phrases={["great together", "amazing together", "lasting together"]} />
          </h2>
          <p className="text-slate-600 text-base md:text-lg font-light leading-relaxed">
            Reach out for any service, partnership or enquiry — our team will respond promptly and personally.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8 items-stretch">
          {/* LEFT — Premium info panel */}
          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#0E1E45] via-[#11296a] to-[#0b1740] text-white p-8 md:p-10 shadow-[0_20px_60px_rgba(15,23,42,0.18)]"
          >
            {/* decorative orbs */}
            <div aria-hidden className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-blue-500/30 blur-3xl" />
            <div aria-hidden className="absolute -bottom-24 -left-16 w-72 h-72 rounded-full bg-cyan-400/20 blur-3xl" />

            <div className="relative">
              <h3 className="text-2xl md:text-3xl font-bold mb-2 leading-tight">Contact information</h3>
              <p className="text-blue-100/70 text-sm md:text-base mb-8 max-w-sm font-light">
                Visit our head office, message us on WhatsApp, or call directly — we&apos;re always happy to help.
              </p>

              <ul className="space-y-5 mb-10">
                {contactItems.map((item) => {
                  const Icon = item.icon;
                  const ContentTag: any = item.href ? "a" : "div";
                  const linkProps = item.href
                    ? {
                        href: item.href,
                        ...(item.external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {}),
                      }
                    : {};
                  return (
                    <li key={item.label}>
                      <ContentTag
                        {...linkProps}
                        className="group flex items-start gap-4 -mx-2 px-2 py-1.5 rounded-xl hover:bg-white/5 transition-colors"
                      >
                        <div
                          className={`shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br ${item.accent} flex items-center justify-center text-white shadow-lg shadow-black/20 group-hover:scale-105 transition-transform`}
                        >
                          <Icon size={18} />
                        </div>
                        <div className="min-w-0 pt-0.5">
                          <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-blue-200/70 mb-0.5">
                            {item.label}
                          </p>
                          <p className="text-white text-sm md:text-[15px] font-medium break-words leading-snug">
                            {item.value}
                          </p>
                        </div>
                      </ContentTag>
                    </li>
                  );
                })}
              </ul>

              {/* WhatsApp CTA inside panel */}
              <a
                href={whatsappUrl(DEFAULT_GREETING)}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 h-12 rounded-full bg-white text-[#0E1E45] font-semibold text-sm shadow-lg hover:shadow-xl hover:bg-blue-50 transition-all"
                data-testid="contact-panel-whatsapp"
              >
                <MessageCircle size={16} />
                Message us on WhatsApp
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </motion.aside>

          {/* RIGHT — Premium form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="relative h-full rounded-3xl overflow-hidden border border-blue-100 bg-gradient-to-br from-white via-white to-blue-50/60 shadow-[0_20px_60px_rgba(37,99,235,0.10)] p-7 md:p-10">
              {/* premium decorative accents */}
              <div aria-hidden className="pointer-events-none absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-700 via-blue-500 to-cyan-400" />
              <div aria-hidden className="pointer-events-none absolute -top-24 -right-24 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl" />
              <div aria-hidden className="pointer-events-none absolute -bottom-32 -left-20 w-72 h-72 rounded-full bg-cyan-400/10 blur-3xl" />

              <div className="relative mb-7 flex items-start justify-between gap-4">
                <div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/70 border border-blue-200/70 text-[10px] font-bold tracking-[0.14em] uppercase text-blue-700 mb-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                    Quick Response
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-1.5 tracking-tight">Send us a message</h3>
                  <p className="text-slate-500 text-sm">We typically reply within a few hours during business hours.</p>
                </div>
                <div className="hidden sm:flex shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 items-center justify-center text-white shadow-[0_10px_30px_rgba(37,99,235,0.35)]">
                  <Send size={20} />
                </div>
              </div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="relative space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-700 text-xs font-semibold uppercase tracking-wider">Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Kasun Perera" {...field} className={inputClass} data-testid="input-name" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-700 text-xs font-semibold uppercase tracking-wider">Email Address</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="kasun@example.com" {...field} className={inputClass} data-testid="input-email" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-700 text-xs font-semibold uppercase tracking-wider">Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="0774370039" {...field} className={inputClass} data-testid="input-phone" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-700 text-xs font-semibold uppercase tracking-wider">Division of Interest</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger
                                className="h-12 bg-white border-blue-100 text-slate-900 rounded-xl px-4 shadow-sm hover:border-blue-200 focus:ring-4 focus:ring-blue-500/15 focus:border-blue-500 focus:shadow-md transition-all"
                                data-testid="select-service"
                              >
                                <SelectValue placeholder="Select a division" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="super">Jayathissa Lanka Super</SelectItem>
                              <SelectItem value="ezymart">Ezymart.lk</SelectItem>
                              <SelectItem value="agri">Jayathissa Lanka Agri</SelectItem>
                              <SelectItem value="myphone">MyPhone.lk</SelectItem>
                              <SelectItem value="laptops">Jayathissa Laptop & PC Centre</SelectItem>
                              <SelectItem value="technology">Jayathissa Lanka Technology</SelectItem>
                              <SelectItem value="academy">Jayathissa Lanka Academy</SelectItem>
                              <SelectItem value="communication">Jayathissa Lanka Communication</SelectItem>
                              <SelectItem value="express">Jayathissa Lanka Express</SelectItem>
                              <SelectItem value="motors">Jayathissa Lanka Motors</SelectItem>
                              <SelectItem value="apple">Jayathissa Apple Store</SelectItem>
                              <SelectItem value="digital">Jayathissa Digital Media</SelectItem>
                              <SelectItem value="general">General Enquiry</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-700 text-xs font-semibold uppercase tracking-wider">Your Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us a little about what you're looking for..."
                            className="min-h-[140px] bg-white border-blue-100 text-slate-900 placeholder:text-slate-400 rounded-xl px-4 py-3 resize-none shadow-sm hover:border-blue-200 focus-visible:ring-4 focus-visible:ring-blue-500/15 focus-visible:border-blue-500 focus-visible:shadow-md transition-all"
                            {...field}
                            data-testid="input-message"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="pt-2 mt-2 border-t border-blue-100/80 flex flex-col sm:flex-row sm:items-center gap-4">
                    <Button
                      type="submit"
                      size="lg"
                      className="group relative w-full sm:w-auto h-14 px-9 rounded-full text-white font-semibold text-[15px] bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 hover:from-blue-800 hover:via-blue-700 hover:to-cyan-600 shadow-[0_12px_32px_rgba(37,99,235,0.4)] hover:shadow-[0_18px_44px_rgba(37,99,235,0.55)] hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
                      data-testid="btn-submit-contact"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/25 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                      <span className="relative inline-flex items-center justify-center gap-2">
                        <FaWhatsapp className="w-5 h-5" />
                        Send via WhatsApp
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </Button>
                    <p className="text-xs text-slate-500 leading-relaxed sm:max-w-[260px]">
                      By submitting, you agree to be contacted regarding your enquiry. Your information stays private.
                    </p>
                  </div>
                </form>
              </Form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

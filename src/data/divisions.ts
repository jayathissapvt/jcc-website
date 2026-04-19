import {
  Bus,
  ShoppingBag,
  Sparkles,
  Leaf,
  GraduationCap,
  Car,
  Megaphone,
  Laptop,
  Cctv,
  Printer,
} from "lucide-react";
import { FaApple, FaMobileAlt } from "react-icons/fa";
import type { ComponentType } from "react";

export type Division = {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  category: string;
  group: "Retail" | "Tech & IT" | "Education & Office" | "Transport & Auto" | "Coming Soon";
  intro: string;
  bullets: string[];
  services: { title: string; description: string }[];
  contact: { phone: string; whatsapp: string; address: string; hours: string };
  icon: ComponentType<{ size?: number; className?: string }>;
  iconImage?: string;
  iconImageInvert?: boolean;
  gradientFrom: string;
  gradientTo: string;
  blob: string;
  comingSoon?: boolean;
};

const sharedContact = {
  phone: "+94 77 437 0039",
  whatsapp: "https://wa.me/94774370039",
  address: "Jayathissa City Center, Dehiattakandiya, Sri Lanka",
  hours: "Mon – Sun · 8:30 AM – 7:30 PM",
};

export const divisions: Division[] = [
  // ── Retail & Everyday ───────────────────────────────────────
  {
    slug: "super",
    name: "Jayathissa Lanka Super",
    shortName: "Lanka Super",
    tagline: "Supermarket, wholesale supply and bill payments under one roof.",
    category: "Retail & Wholesale",
    group: "Retail",
    intro:
      "A full-service supermarket and wholesale hub serving households, shops and businesses across the region. From everyday groceries to bulk supply and convenient bill payments, we make daily life easier.",
    bullets: [
      "Wide selection of groceries, household items and fresh produce",
      "Wholesale pricing for retailers, restaurants and businesses",
      "Daily utility bill payments — electricity, water and more",
      "Friendly in-store service and quick checkout",
    ],
    services: [
      { title: "Retail Supermarket", description: "A complete shopping experience for families with everyday essentials." },
      { title: "Wholesale Supply", description: "Bulk-rate supply for shops, hotels and small businesses." },
      { title: "Bill Payments", description: "Pay electricity, water and other utility bills at the counter." },
    ],
    contact: sharedContact,
    icon: ShoppingBag,
    gradientFrom: "from-indigo-500",
    gradientTo: "to-blue-600",
    blob: "bg-indigo-200/60",
  },
  {
    slug: "ezymart",
    name: "Ezymart.lk",
    shortName: "Ezymart.lk",
    tagline: "Premium cosmetics and skincare with island-wide home delivery.",
    category: "Beauty & Personal Care",
    group: "Retail",
    intro:
      "Ezymart.lk brings genuine branded cosmetics, skincare and personal care products straight to your door. Curated selection, authentic brands, fast delivery.",
    bullets: [
      "Branded cosmetics and makeup essentials",
      "Skincare products for every skin type and concern",
      "Personal care and grooming essentials",
      "Convenient online ordering and home delivery",
    ],
    services: [
      { title: "Cosmetics & Makeup", description: "Foundations, lipsticks, palettes and tools from trusted brands." },
      { title: "Skincare", description: "Cleansers, moisturisers, sunscreens and treatments." },
      { title: "Home Delivery", description: "Fast, tracked delivery across Sri Lanka." },
    ],
    contact: sharedContact,
    icon: Sparkles,
    iconImage: "https://cdn-icons-png.flaticon.com/512/1585/1585962.png",
    iconImageInvert: true,
    gradientFrom: "from-neutral-800",
    gradientTo: "to-black",
    blob: "bg-neutral-900/15",
  },
  {
    slug: "agri",
    name: "Jayathissa Lanka Agri",
    shortName: "Lanka Agri",
    tagline: "Buying and selling rice, paddy and farm produce.",
    category: "Agriculture",
    group: "Retail",
    intro:
      "Supporting Sri Lankan farmers and feeding the nation. We buy paddy directly from local growers and supply premium-quality rice and grain to retailers and households.",
    bullets: [
      "Direct paddy purchasing from local farmers at fair rates",
      "Premium quality rice for households and shops",
      "Wholesale grain supply for businesses",
      "Trusted supply chain across the region",
    ],
    services: [
      { title: "Paddy Purchasing", description: "Fair, transparent buying from registered farmers." },
      { title: "Rice Sales", description: "Premium milled rice in retail and bulk packs." },
      { title: "Grain Wholesale", description: "Reliable supply for retailers and food businesses." },
    ],
    contact: sharedContact,
    icon: Leaf,
    gradientFrom: "from-orange-500",
    gradientTo: "to-amber-500",
    blob: "bg-orange-200/60",
  },

  // ── Mobile, Tech & IT ───────────────────────────────────────
  {
    slug: "myphone",
    name: "MyPhone.lk",
    shortName: "MyPhone.lk",
    tagline: "Smartphones, accessories and expert phone repairs.",
    category: "Mobile Phones",
    group: "Tech & IT",
    intro:
      "Your trusted destination for smartphones in Sri Lanka. Brand-new and pre-owned iPhones, Android handsets, accessories and a full-service repair workshop.",
    bullets: [
      "Brand-new and pre-owned iPhones with warranty",
      "Wide range of Android smartphones",
      "Genuine accessories — cases, chargers, audio",
      "Professional phone repair service",
    ],
    services: [
      { title: "iPhone Sales", description: "New and pre-owned iPhones with full quality checks." },
      { title: "Android Phones", description: "Top brands at competitive prices." },
      { title: "Repairs", description: "Screen, battery, charging port and software fixes by experts." },
    ],
    contact: sharedContact,
    icon: FaMobileAlt,
    gradientFrom: "from-sky-500",
    gradientTo: "to-blue-600",
    blob: "bg-sky-200/60",
  },
  {
    slug: "laptops",
    name: "Jayathissa Laptop & PC Centre",
    shortName: "Laptop & PC Centre",
    tagline: "Laptops, desktops and accessories — sales and repairs.",
    category: "Computers & IT",
    group: "Tech & IT",
    intro:
      "Whether you need a student laptop, a gaming rig or a business workstation, we have you covered. New and refurbished laptops and desktops, on-site repairs and genuine accessories — all in one place.",
    bullets: [
      "New and refurbished laptops from leading brands",
      "Custom-built and pre-built desktop PCs",
      "On-site repairs, upgrades and SSD installs",
      "Genuine accessories and peripherals",
    ],
    services: [
      { title: "Laptop Sales", description: "Brand-new and quality refurbished laptops with warranty." },
      { title: "Desktop PCs", description: "Custom builds for office, gaming and creative work." },
      { title: "Repairs & Upgrades", description: "RAM, SSD, screen and motherboard service." },
      { title: "Accessories", description: "Mice, keyboards, monitors and cables." },
    ],
    contact: sharedContact,
    icon: Laptop,
    gradientFrom: "from-cyan-500",
    gradientTo: "to-sky-700",
    blob: "bg-cyan-200/60",
  },
  {
    slug: "technology",
    name: "Jayathissa Lanka Technology",
    shortName: "Lanka Technology",
    tagline: "CCTV systems, networking and complete IT solutions.",
    category: "CCTV & IT Solutions",
    group: "Tech & IT",
    intro:
      "Protect what matters and keep your business running smoothly. We design, install and maintain CCTV systems, networks and complete IT infrastructure for homes, shops and offices.",
    bullets: [
      "CCTV system sales, installation and configuration",
      "Network setup — routers, switches and Wi-Fi coverage",
      "Business IT support and ongoing maintenance",
      "Remote monitoring and after-sales service",
    ],
    services: [
      { title: "CCTV Solutions", description: "Indoor, outdoor, IP and analogue camera systems with mobile viewing." },
      { title: "Networking", description: "Reliable wired and wireless networks for any space." },
      { title: "IT Support", description: "Maintenance contracts, software setup and troubleshooting." },
    ],
    contact: sharedContact,
    icon: Cctv,
    gradientFrom: "from-emerald-500",
    gradientTo: "to-teal-700",
    blob: "bg-emerald-200/60",
  },

  // ── Education & Office ──────────────────────────────────────
  {
    slug: "academy",
    name: "Jayathissa Lanka Academy",
    shortName: "Lanka Academy",
    tagline: "ICT training for the next generation.",
    category: "Education",
    group: "Education & Office",
    intro:
      "Empowering students and professionals with practical, future-ready technology skills. From computer basics to coding, design and beyond — taught by passionate instructors.",
    bullets: [
      "Computer literacy and ICT fundamentals",
      "Programming and software development courses",
      "Graphic design and web design training",
      "Hands-on labs with modern equipment",
    ],
    services: [
      { title: "ICT Fundamentals", description: "Computer literacy, MS Office and internet basics." },
      { title: "Coding & Programming", description: "Web, Python and software development tracks." },
      { title: "Design Courses", description: "Graphic design, UI design and web design programs." },
    ],
    contact: sharedContact,
    icon: GraduationCap,
    gradientFrom: "from-violet-500",
    gradientTo: "to-purple-600",
    blob: "bg-violet-200/60",
  },
  {
    slug: "communication",
    name: "Jayathissa Lanka Communication",
    shortName: "Lanka Communication",
    tagline: "School, office and preschool stationery, printouts and photocopies.",
    category: "School & Office",
    group: "Education & Office",
    intro:
      "Your one-stop shop for school, office and preschool needs. From a wide range of stationery to fast printout and photocopy services — we keep students and businesses moving.",
    bullets: [
      "Wide range of school and office stationery",
      "Printout, photocopy and scanning services",
      "Preschool learning materials and supplies",
      "Bulk supply for schools and offices",
    ],
    services: [
      { title: "Stationery", description: "Pens, books, files, art supplies and more." },
      { title: "Print & Copy", description: "Fast colour and black-and-white printing, photocopy and scanning." },
      { title: "School Supply", description: "Bulk supply for schools, preschools and tuition centres." },
    ],
    contact: sharedContact,
    icon: Printer,
    gradientFrom: "from-teal-500",
    gradientTo: "to-cyan-600",
    blob: "bg-teal-200/60",
  },

  // ── Transport & Automotive ──────────────────────────────────
  {
    slug: "express",
    name: "Jayathissa Lanka Express",
    shortName: "Lanka Express",
    tagline: "Route buses and special hires across Sri Lanka.",
    category: "Transport",
    group: "Transport & Auto",
    intro:
      "Reliable, comfortable transport for daily commuters, students, staff and pilgrims. Operating regular routes and offering special hires for any occasion.",
    bullets: [
      "Daily route: Yakkure – Siripura – Mahiyanganaya",
      "Daily route: Dehiaththakandiya – Kandy",
      "Special hires for school trips and pilgrimages",
      "Staff transport for businesses and institutions",
    ],
    services: [
      { title: "Route Buses", description: "Regular daily services on key Sri Lankan routes." },
      { title: "Special Hires", description: "Comfortable buses for trips, weddings and events." },
      { title: "Staff Transport", description: "Reliable daily transport for company employees." },
    ],
    contact: sharedContact,
    icon: Bus,
    gradientFrom: "from-blue-500",
    gradientTo: "to-blue-600",
    blob: "bg-blue-200/60",
  },
  {
    slug: "motors",
    name: "Jayathissa Lanka Motors",
    shortName: "Lanka Motors",
    tagline: "Vehicle sales and reliable after-sales support.",
    category: "Automotive",
    group: "Transport & Auto",
    intro:
      "Quality vehicles backed by transparent dealings and dependable after-sales care. We help you find the right vehicle and stay with you long after the sale.",
    bullets: [
      "Curated selection of quality vehicles",
      "Transparent pricing and honest dealings",
      "Trade-in and finance assistance",
      "Reliable after-sales support",
    ],
    services: [
      { title: "Vehicle Sales", description: "Cars, vans and commercial vehicles, inspected and ready." },
      { title: "Trade-in & Finance", description: "Helpful trade-in valuations and finance facilitation." },
      { title: "After-Sales Support", description: "Ongoing service guidance and customer care." },
    ],
    contact: sharedContact,
    icon: Car,
    gradientFrom: "from-slate-700",
    gradientTo: "to-slate-900",
    blob: "bg-slate-200/60",
  },

  // ── Coming Soon ─────────────────────────────────────────────
  {
    slug: "apple",
    name: "Jayathissa Apple Store",
    shortName: "Apple Store",
    tagline: "Genuine iPhone, iPad, Mac and accessories — coming soon.",
    category: "Apple Authorised",
    group: "Coming Soon",
    intro:
      "An Apple Authorised store coming to Jayathissa City Center. Latest iPhone, iPad, Mac and Apple Watch with full warranty and original accessories.",
    bullets: [
      "Latest iPhone models with full warranty",
      "iPad, MacBook and Apple Watch",
      "Original Apple accessories",
      "Expert advice and after-sales support",
    ],
    services: [
      { title: "iPhone", description: "Newest iPhone lineup with manufacturer warranty." },
      { title: "iPad & Mac", description: "iPad, MacBook Air and MacBook Pro for work and study." },
      { title: "Accessories", description: "AirPods, chargers, cables and protective gear." },
    ],
    contact: sharedContact,
    icon: FaApple,
    gradientFrom: "from-zinc-800",
    gradientTo: "to-black",
    blob: "bg-zinc-200/70",
    comingSoon: true,
  },
  {
    slug: "digital",
    name: "Jayathissa Digital Media",
    shortName: "Digital Media",
    tagline: "Digital media consultancy and full-service agency — coming soon.",
    category: "Marketing Agency",
    group: "Coming Soon",
    intro:
      "A full-service digital agency launching soon — combining strategy, design and technology to grow brands online.",
    bullets: [
      "Social media management and content creation",
      "Branding, logo design and graphic design",
      "Website and e-commerce development",
      "Performance marketing and SEO",
    ],
    services: [
      { title: "Social Media", description: "Content, scheduling and community management." },
      { title: "Branding & Design", description: "Logos, identity systems and creative assets." },
      { title: "Web Development", description: "Modern websites and online stores." },
    ],
    contact: sharedContact,
    icon: Megaphone,
    gradientFrom: "from-fuchsia-500",
    gradientTo: "to-pink-600",
    blob: "bg-fuchsia-200/60",
    comingSoon: true,
  },
];

export const divisionGroups: { label: string; key: Division["group"] }[] = [
  { label: "Retail & Everyday", key: "Retail" },
  { label: "Tech & IT", key: "Tech & IT" },
  { label: "Education & Office", key: "Education & Office" },
  { label: "Transport & Auto", key: "Transport & Auto" },
  { label: "Coming Soon", key: "Coming Soon" },
];

export function getDivision(slug: string): Division | undefined {
  return divisions.find((d) => d.slug === slug);
}

import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";
import { divisions, divisionGroups } from "@/data/divisions";
import { whatsappUrl, DEFAULT_GREETING } from "@/lib/whatsapp";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDivisionsOpen, setIsDivisionsOpen] = useState(false);
  const [isMobileDivisionsOpen, setIsMobileDivisionsOpen] = useState(false);
  const [location] = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsDivisionsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { name: "Home", href: "/#home" },
    { name: "About", href: "/#about" },
    { name: "Services", href: "/#services" },
    { name: "Contact", href: "/#contact" },
  ];

  const handleHashClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (location !== "/") {
      window.location.href = href;
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0E1E45]/90 backdrop-blur-md shadow-lg border-b border-white/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img
              src="https://admin.jcc.lk/wp-content/uploads/2025/08/Jayathissa-Lanka-Logo-5-3-300x64.png"
              alt="Jayathissa Lanka Logo"
              className="h-8 md:h-10 object-contain bg-white/10 p-1 rounded backdrop-blur-sm"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.slice(0, 2).map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleHashClick(link.href)}
                className="text-sm font-medium transition-colors hover:text-white text-white/70"
                data-testid={`nav-link-${link.name.toLowerCase()}`}
              >
                {link.name}
              </a>
            ))}

            {/* Divisions dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDivisionsOpen((v) => !v)}
                className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-white text-white/70"
                data-testid="nav-link-divisions"
              >
                Divisions
                <ChevronDown size={14} className={`transition-transform ${isDivisionsOpen ? "rotate-180" : ""}`} />
              </button>
              {isDivisionsOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[640px] bg-white rounded-2xl shadow-2xl border border-slate-200 p-5 grid grid-cols-2 gap-x-6 gap-y-5 animate-in fade-in slide-in-from-top-2 duration-200">
                  {divisionGroups.map((group) => {
                    const groupItems = divisions.filter((d) => d.group === group.key);
                    if (groupItems.length === 0) return null;
                    return (
                      <div key={group.key}>
                        <p className="text-[10px] font-bold tracking-[0.14em] uppercase text-slate-400 mb-2.5">
                          {group.label}
                        </p>
                        <ul className="space-y-1.5">
                          {groupItems.map((d) => {
                            const Icon = d.icon;
                            return (
                              <li key={d.slug}>
                                <Link
                                  href={`/divisions/${d.slug}`}
                                  onClick={() => setIsDivisionsOpen(false)}
                                  className="flex items-center gap-2.5 px-2 py-1.5 rounded-lg hover:bg-slate-50 transition-colors group"
                                  data-testid={`nav-division-${d.slug}`}
                                >
                                  <span
                                    className={`w-7 h-7 rounded-md bg-gradient-to-br ${d.gradientFrom} ${d.gradientTo} flex items-center justify-center text-white shrink-0`}
                                  >
                                    {d.iconImage ? (
                                      <img
                                        src={d.iconImage}
                                        alt=""
                                        className="w-3.5 h-3.5 object-contain"
                                        style={d.iconImageInvert ? { filter: "brightness(0) invert(1)" } : undefined}
                                      />
                                    ) : (
                                      <Icon size={14} className="text-white" />
                                    )}
                                  </span>
                                  <span className="text-sm font-medium text-slate-700 group-hover:text-blue-700 transition-colors">
                                    {d.shortName}
                                  </span>
                                  {d.comingSoon && (
                                    <span className="ml-auto text-[9px] font-bold tracking-wider uppercase text-amber-600 bg-amber-100 px-1.5 py-0.5 rounded-full">
                                      Soon
                                    </span>
                                  )}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {navLinks.slice(2).map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleHashClick(link.href)}
                className="text-sm font-medium transition-colors hover:text-white text-white/70"
                data-testid={`nav-link-${link.name.toLowerCase()}`}
              >
                {link.name}
              </a>
            ))}

            <Button
              asChild
              className="bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white border-0 rounded-full px-6 shadow-[0_0_15px_rgba(56,189,248,0.4)]"
            >
              <a href={whatsappUrl(DEFAULT_GREETING)} target="_blank" rel="noopener noreferrer" data-testid="nav-cta">
                <FaWhatsapp className="mr-2 text-lg" />
                WhatsApp Us
              </a>
            </Button>

            <Button
              asChild
              className="group relative overflow-hidden bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 hover:from-indigo-700 hover:via-blue-700 hover:to-cyan-600 text-white border-0 rounded-full px-5 shadow-[0_0_18px_rgba(37,99,235,0.45)] hover:shadow-[0_0_24px_rgba(37,99,235,0.6)] transition-all"
            >
              <a href="/staff-login" data-testid="nav-staff-login">
                <span aria-hidden className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/25 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                <Lock className="mr-2 h-4 w-4 relative z-10" />
                <span className="relative z-10">Staff Login</span>
              </a>
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 rounded-md text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="mobile-menu-toggle"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#0E1E45] shadow-2xl border-b border-white/10 py-4 px-4 flex flex-col gap-1 animate-in slide-in-from-top-2 max-h-[80vh] overflow-y-auto">
          {navLinks.slice(0, 2).map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => handleHashClick(link.href)}
              className="text-base font-medium text-white/80 hover:text-white py-3 border-b border-white/10"
            >
              {link.name}
            </a>
          ))}

          {/* Mobile Divisions accordion */}
          <button
            onClick={() => setIsMobileDivisionsOpen((v) => !v)}
            className="flex items-center justify-between text-base font-medium text-white/80 hover:text-white py-3 border-b border-white/10"
            data-testid="mobile-divisions-toggle"
          >
            Divisions
            <ChevronDown size={16} className={`transition-transform ${isMobileDivisionsOpen ? "rotate-180" : ""}`} />
          </button>
          {isMobileDivisionsOpen && (
            <div className="pl-3 py-2 border-b border-white/10 space-y-3">
              {divisionGroups.map((group) => {
                const groupItems = divisions.filter((d) => d.group === group.key);
                if (groupItems.length === 0) return null;
                return (
                  <div key={group.key}>
                    <p className="text-[10px] font-bold tracking-[0.14em] uppercase text-cyan-300/70 mb-1.5">
                      {group.label}
                    </p>
                    <ul className="space-y-0.5">
                      {groupItems.map((d) => (
                        <li key={d.slug}>
                          <Link
                            href={`/divisions/${d.slug}`}
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              setIsMobileDivisionsOpen(false);
                            }}
                            className="block py-2 text-sm text-white/75 hover:text-white"
                            data-testid={`mobile-division-${d.slug}`}
                          >
                            {d.shortName}
                            {d.comingSoon && (
                              <span className="ml-2 text-[9px] font-bold tracking-wider uppercase text-amber-300">
                                Soon
                              </span>
                            )}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          )}

          {navLinks.slice(2).map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => handleHashClick(link.href)}
              className="text-base font-medium text-white/80 hover:text-white py-3 border-b border-white/10"
            >
              {link.name}
            </a>
          ))}

          <Button asChild className="mt-3 w-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-full">
            <a href={whatsappUrl(DEFAULT_GREETING)} target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="mr-2 text-lg" />
              WhatsApp Us
            </a>
          </Button>

          <Button
            asChild
            className="group relative overflow-hidden mt-2 w-full bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 text-white rounded-full shadow-[0_0_18px_rgba(37,99,235,0.45)]"
          >
            <a
              href="/staff-login"
              onClick={() => setIsMobileMenuOpen(false)}
              data-testid="mobile-staff-login"
            >
              <span aria-hidden className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/25 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
              <Lock className="mr-2 h-4 w-4 relative z-10" />
              <span className="relative z-10">Staff Login</span>
            </a>
          </Button>
        </div>
      )}
    </header>
  );
}

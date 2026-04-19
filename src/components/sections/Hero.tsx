import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import { whatsappUrl, DEFAULT_GREETING } from "@/lib/whatsapp";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  isStar: boolean;
}

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationFrameId: number | null = null;
    let mouse = { x: -1000, y: -1000 };
    let isVisible = true;
    let isMobile = window.innerWidth < 768;
    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    const prefersReduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;

    const resizeCanvas = () => {
      isMobile = window.innerWidth < 768;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      // Much lower density on mobile for ultra-fast performance
      const density = isMobile ? 80000 : 22000;
      const cap = isMobile ? 28 : 100;
      const particleCount = Math.min(Math.floor((canvas.width * canvas.height) / density), cap);
      for (let i = 0; i < particleCount; i++) {
        const isStar = Math.random() > 0.92;
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          radius: isStar ? Math.random() * 1.8 + 1.2 : Math.random() * 1.2 + 0.4,
          alpha: Math.random() * 0.5 + 0.2,
          isStar
        });
      }
    };

    const MAX_DIST = isMobile ? 80 : 110;
    const MAX_DIST_SQ = MAX_DIST * MAX_DIST;
    const MOUSE_DIST = 120;
    const MOUSE_DIST_SQ = MOUSE_DIST * MOUSE_DIST;

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Particles
      ctx.shadowBlur = 0;
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = canvas.width;
        else if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        else if (p.y > canvas.height) p.y = 0;

        const mdx = mouse.x - p.x;
        const mdy = mouse.y - p.y;
        const mdSq = mdx * mdx + mdy * mdy;
        if (mdSq < MOUSE_DIST_SQ) {
          p.x -= mdx * 0.015;
          p.y -= mdy * 0.015;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.isStar
          ? `rgba(180, 220, 255, ${p.alpha * 1.4})`
          : `rgba(200, 230, 255, ${p.alpha})`;
        ctx.fill();
      }

      // Lines (use squared distance, skip if dx alone > MAX_DIST)
      ctx.strokeStyle = "rgba(255, 255, 255, 0.06)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const dx = a.x - b.x;
          if (dx > MAX_DIST || dx < -MAX_DIST) continue;
          const dy = a.y - b.y;
          if (dy > MAX_DIST || dy < -MAX_DIST) continue;
          if (dx * dx + dy * dy < MAX_DIST_SQ) {
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
          }
        }
      }
      ctx.stroke();

      animationFrameId = requestAnimationFrame(drawParticles);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const start = () => {
      if (animationFrameId == null) drawParticles();
    };
    const stop = () => {
      if (animationFrameId != null) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
      }
    };

    // Pause when tab hidden or hero scrolled off-screen
    const handleVisibility = () => {
      if (document.hidden) stop();
      else if (isVisible) start();
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        isVisible = entry.isIntersecting;
        if (isVisible && !document.hidden) start();
        else stop();
      },
      { threshold: 0 }
    );
    observer.observe(canvas);

    window.addEventListener("resize", resizeCanvas);
    document.addEventListener("visibilitychange", handleVisibility);
    if (!isTouch) {
      canvas.addEventListener("mousemove", handleMouseMove);
      canvas.addEventListener("mouseleave", handleMouseLeave);
    }

    resizeCanvas();
    if (!prefersReduced) start();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      document.removeEventListener("visibilitychange", handleVisibility);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      observer.disconnect();
      stop();
    };
  }, []);

  return (
    <section id="home" className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden bg-[#050B1F] pt-28 pb-32 md:pt-32 md:pb-24">
      {/* Deep navy → midnight → teal-glow gradient */}
      <div aria-hidden className="absolute inset-0 bg-gradient-to-br from-[#050B1F] via-[#0A1638] to-[#0E2A3F]" />
      {/* Soft teal glow accent (hidden on small screens for perf) */}
      <div aria-hidden className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-[#0EA5E9]/10 blur-[140px] pointer-events-none" />
      <div aria-hidden className="hidden md:block absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#1E40AF]/30 blur-[120px] pointer-events-none" />
      {/* Lightweight mobile glow */}
      <div aria-hidden className="md:hidden absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(14,165,233,0.18),transparent_60%)] pointer-events-none" />
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-auto"
        data-testid="hero-canvas"
      />
      
      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center text-white mt-16 md:mt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl mx-auto flex flex-col items-center"
        >
          <div className="inline-flex items-center py-1.5 px-4 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-sm font-medium mb-8 text-blue-100">
            <span className="w-2 h-2 rounded-full bg-green-400 mr-2"></span>
            Trusted Multi-Business Group · Sri Lanka
          </div>
          
          <h1 className="text-[2.5rem] xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold mb-4 tracking-tight leading-[1.05] break-words">
            <span className="text-white block">Jayathissa</span>
            <span className="bg-gradient-to-r from-[#A5C8FF] to-[#C7F0FF] text-transparent bg-clip-text block">
              City Center
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-blue-100/80 font-semibold tracking-wide mb-5">
            Jayathissa Lanka Enterprises (PVT) LTD
          </p>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-10 md:mb-12 text-blue-100/70 max-w-2xl mx-auto font-light leading-relaxed px-2">
            A multi-division business in Sri Lanka — transport, retail, wholesale, tech, agriculture, motors and education, all under one trusted name.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-16 w-full sm:w-auto">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-white text-[#0E1E45] hover:bg-gray-100 rounded-full h-14 px-8 text-base font-semibold shadow-[0_0_20px_rgba(255,255,255,0.15)]"
              asChild
            >
              <a href={whatsappUrl(DEFAULT_GREETING)} target="_blank" rel="noopener noreferrer" data-testid="btn-whatsapp">
                <MessageCircle className="mr-2 h-5 w-5" />
                Contact on WhatsApp
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto bg-white/5 border-white/20 text-white hover:bg-white/10 rounded-full h-14 px-8 text-base font-semibold backdrop-blur-sm transition-all"
              asChild
            >
              <a href="/#services" data-testid="btn-explore-services">
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto bg-transparent border-white/20 text-white hover:bg-white/10 rounded-full h-14 px-8 text-base font-semibold transition-all"
              asChild
            >
              <a href="tel:+94774370039" data-testid="btn-call-now">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </a>
            </Button>
          </div>
          
          {/* Stat Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full max-w-4xl mx-auto px-2 sm:px-0">
            {[
              { num: "10+", label: "Divisions" },
              { num: "10K+", label: "Happy Customers" },
              { num: "Island\u2011wide", label: "Coverage", small: true },
              { num: "8.30\u20137.30", label: "Open Daily", small: true }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + (i * 0.05) }}
                className="bg-white/5 border border-white/10 rounded-2xl p-3 sm:p-4 md:p-6 backdrop-blur-md flex flex-col items-center justify-center text-center min-h-[100px] sm:min-h-[110px] md:min-h-[130px] overflow-hidden"
              >
                <div
                  className={`font-bold text-white mb-1 leading-tight max-w-full ${
                    stat.small
                      ? "text-sm sm:text-base md:text-lg lg:text-2xl whitespace-nowrap"
                      : "text-2xl sm:text-3xl md:text-3xl lg:text-4xl"
                  }`}
                >
                  {stat.num}
                </div>
                <div className="text-[10px] sm:text-xs md:text-sm text-blue-200/70 font-medium uppercase tracking-wider leading-tight">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span className="text-[10px] uppercase tracking-widest font-medium">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent"></div>
      </motion.div>
    </section>
  );
}

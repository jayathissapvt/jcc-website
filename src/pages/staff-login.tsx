import React, { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Lock, Mail, ArrowLeft, ShieldCheck, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

export default function StaffLogin() {
  const { toast } = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast({
        title: "Staff portal coming soon",
        description: "The internal staff portal is being prepared. Please contact admin if you need access.",
      });
    }, 700);
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-16 bg-gradient-to-br from-[#0A1638] via-[#0E1E45] to-[#11296a] relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute -top-40 -left-40 w-[480px] h-[480px] rounded-full bg-blue-500/15 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-40 -right-40 w-[480px] h-[480px] rounded-full bg-cyan-400/15 blur-3xl" />

      <Link
        href="/"
        className="absolute top-6 left-6 inline-flex items-center gap-1.5 text-blue-100/70 hover:text-white text-sm font-medium transition-colors"
        data-testid="staff-login-back"
      >
        <ArrowLeft size={16} /> Back to website
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="relative w-full max-w-md"
      >
        <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/[0.04] backdrop-blur-xl shadow-[0_30px_80px_rgba(8,20,60,0.6)]">
          <div aria-hidden className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400" />

          <div className="px-7 sm:px-9 pt-9 pb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-600 via-blue-600 to-cyan-500 flex items-center justify-center text-white shadow-[0_8px_24px_rgba(37,99,235,0.45)]">
                <ShieldCheck size={22} />
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">Staff Login</h1>
                <p className="text-blue-100/60 text-xs sm:text-sm">Internal portal · Jayathissa Lanka</p>
              </div>
            </div>

            <form onSubmit={onSubmit} className="space-y-4">
              <div>
                <label className="text-blue-100/70 text-[11px] font-semibold uppercase tracking-wider block mb-2">
                  Staff Email
                </label>
                <div className="relative">
                  <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-blue-200/50" />
                  <Input
                    type="email"
                    required
                    placeholder="staff@jayathissalanka.lk"
                    className="h-12 pl-10 bg-white/5 border-white/10 text-white placeholder:text-blue-100/30 rounded-xl focus-visible:ring-4 focus-visible:ring-blue-500/25 focus-visible:border-blue-400 transition-all"
                    data-testid="staff-email"
                  />
                </div>
              </div>

              <div>
                <label className="text-blue-100/70 text-[11px] font-semibold uppercase tracking-wider block mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-blue-200/50" />
                  <Input
                    type={showPassword ? "text" : "password"}
                    required
                    placeholder="Enter your password"
                    className="h-12 pl-10 pr-11 bg-white/5 border-white/10 text-white placeholder:text-blue-100/30 rounded-xl focus-visible:ring-4 focus-visible:ring-blue-500/25 focus-visible:border-blue-400 transition-all"
                    data-testid="staff-password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-blue-200/60 hover:text-white transition-colors"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs">
                <label className="inline-flex items-center gap-2 text-blue-100/60 cursor-pointer">
                  <input type="checkbox" className="accent-blue-500 rounded" />
                  Remember me
                </label>
                <a href="#" className="text-cyan-300 hover:text-white transition-colors font-medium">
                  Forgot password?
                </a>
              </div>

              <Button
                type="submit"
                disabled={submitting}
                className="group relative w-full h-12 rounded-full text-white font-semibold bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 hover:from-indigo-700 hover:via-blue-700 hover:to-cyan-600 shadow-[0_10px_28px_rgba(37,99,235,0.45)] hover:shadow-[0_14px_36px_rgba(37,99,235,0.6)] hover:-translate-y-0.5 transition-all overflow-hidden disabled:opacity-70"
                data-testid="staff-submit"
              >
                <span aria-hidden className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/25 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                <span className="relative">{submitting ? "Signing in…" : "Sign in to Staff Portal"}</span>
              </Button>
            </form>

            <p className="mt-6 text-center text-xs text-blue-100/50 leading-relaxed">
              Only authorised Jayathissa Lanka staff may access this portal. Unauthorised access attempts are logged.
            </p>
          </div>
        </div>
      </motion.div>
    </main>
  );
}

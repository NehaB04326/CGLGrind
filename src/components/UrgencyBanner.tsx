"use client";

import React from "react";
import { ArrowRight, BellRing } from "lucide-react";
import { PRODUCT_APP_URL } from "./Navbar";

export default function UrgencyBanner() {
  return (
    <div className="w-full bg-gradient-to-r from-brand-primary via-[#6366f1] to-brand-accent text-white py-4 shadow-md overflow-hidden relative border-y border-white/10 select-none">
      {/* Dynamic background pulse */}
      <div className="absolute inset-0 bg-white/[0.04] animate-pulse pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Left Side: Alert indicator & Text */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-white border border-white/20">
            <BellRing className="h-4.5 w-4.5 animate-bounce" />
          </div>
          <p className="text-xs sm:text-sm md:text-base font-bold tracking-tight leading-relaxed">
            ⚡ <span className="underline decoration-wavy decoration-white/50">HURRY UP!</span> Join <span className="bg-white/20 px-2 py-0.5 rounded text-amber-250 font-black">4,892+ active aspirants</span> in the Live Mock Arena. Free registrations closing soon.
          </p>
        </div>

        {/* Right Side: CTA Button */}
        <div className="shrink-0 w-full md:w-auto">
          <a
            href={PRODUCT_APP_URL}
            className="flex w-full md:w-auto h-10 items-center justify-center rounded bg-white px-6 text-xs font-black text-brand-slate-950 shadow-premium-sm hover:scale-[1.02] active:scale-[0.99] transition-all gap-1.5 uppercase tracking-wider cursor-pointer"
          >
            Register Free Now
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>

      </div>
    </div>
  );
}

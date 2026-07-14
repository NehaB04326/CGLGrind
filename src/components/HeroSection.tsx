"use client";

import React, { useState, useEffect } from "react";
import { Clock, ShieldCheck, Zap, Award, ArrowRight, BarChart2 } from "lucide-react";
import { PRODUCT_APP_URL } from "./Navbar";

interface HeroSectionProps {
  onStartMock: () => void;
}

export default function HeroSection({ onStartMock }: HeroSectionProps) {
  const [timeLeft, setTimeLeft] = useState({ hours: 14, minutes: 32, seconds: 45 });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { hours: prev.hours, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          return { hours: 23, minutes: 59, seconds: 59 };
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number) => String(num).padStart(2, "0");

  return (
    <section className="relative overflow-hidden bg-brand-slate-50 py-16 lg:py-24 border-b border-brand-slate-200">
      {/* Delicate background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_80%,transparent_100%)] opacity-40"></div>
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading and Description */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 animate-fade-in-up">
            {/* Elite Badge */}
            <div className="inline-flex items-center gap-2 rounded bg-brand-slate-950 px-3.5 py-1 text-xs font-semibold text-brand-accent border border-brand-slate-800 shadow-premium-sm">
              <ShieldCheck className="h-4 w-4 text-brand-accent animate-pulse" />
              <span className="tracking-wide">2026 Exam Alignment Guarantee</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-brand-slate-955 leading-[1.1]">
              The Professional Choice <br />
              <span className="bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent">
                for SSC CGL Aspirants.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-medium">
              Elevate your preparation using our ultra-accurate, zero-gimmick computer-based exam simulators. Specially engineered to replicate exact interface dimensions, pacing triggers, and sectional locks, ensuring your practice is identical to the actual exam environment.
            </p>

            {/* Core Trust Factors */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-lg">
              <div className="flex items-start gap-3">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded bg-brand-slate-900 text-brand-accent mt-0.5">
                  <Zap className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-brand-slate-900 uppercase tracking-wider">Engine Precision</h4>
                  <p className="text-xs text-slate-500 mt-0.5 font-semibold">Replicating layouts, fonts, and scroll dynamics</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded bg-brand-slate-900 text-brand-accent mt-0.5">
                  <BarChart2 className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-brand-slate-900 uppercase tracking-wider">Active Percentile Analytics</h4>
                  <p className="text-xs text-slate-500 mt-0.5 font-semibold">Live competitive positioning metrics</p>
                </div>
              </div>
            </div>

            {/* Conversion CTA Actions */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={onStartMock}
                className="inline-flex h-12 items-center justify-center rounded bg-shimmer-btn px-8 text-xs font-bold text-white shadow-premium-md hover:scale-[1.01] active:scale-[0.99] transition-all gap-2 group tracking-wider uppercase cursor-pointer"
              >
                Start Free Mock Test
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <a
                href={PRODUCT_APP_URL}
                className="inline-flex h-12 items-center justify-center rounded bg-white border border-brand-slate-200 px-8 text-xs font-bold text-brand-slate-800 shadow-premium-sm hover:bg-brand-slate-100 hover:text-brand-slate-955 active:scale-[0.99] transition-all tracking-wider uppercase"
              >
                View Tier-I & II Cut-Offs
              </a>
            </div>
          </div>

          {/* Right Column: Premium Dashboard Widget */}
          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-xl border border-brand-slate-800 bg-brand-slate-900 text-slate-100 shadow-premium-lg">
              
              {/* Header: Countdown Title */}
              <div className="border-b border-brand-slate-800 bg-brand-slate-950 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-sonar rounded-full bg-red-500 opacity-75"></span>
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-500"></span>
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Live All India Mock Test
                  </span>
                </div>
                <span className="rounded bg-brand-slate-800 px-2 py-0.5 text-[9px] font-bold text-brand-accent uppercase tracking-wider">
                  Tier-I #14
                </span>
              </div>

              {/* Countdown Ticking */}
              <div className="px-6 py-8 text-center bg-gradient-to-b from-brand-slate-900 to-brand-slate-950">
                <p className="text-xs font-bold text-slate-400 mb-4 uppercase tracking-widest">
                  Registration Window Closes In
                </p>
                <div className="flex justify-center gap-3 sm:gap-4 select-none">
                  {/* Hours */}
                  <div className="flex flex-col">
                    <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded border border-brand-slate-800 bg-brand-slate-950 text-2xl sm:text-3xl font-extrabold text-white font-mono shadow-inner">
                      {formatNumber(timeLeft.hours)}
                    </div>
                    <span className="text-[9px] uppercase font-bold text-slate-500 tracking-wider mt-1.5">Hours</span>
                  </div>
                  {/* Colon */}
                  <div className="flex items-center text-xl font-bold text-slate-700 sm:text-2xl mt-[-10px]">:</div>
                  {/* Minutes */}
                  <div className="flex flex-col">
                    <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded border border-brand-slate-800 bg-brand-slate-950 text-2xl sm:text-3xl font-extrabold text-white font-mono shadow-inner">
                      {formatNumber(timeLeft.minutes)}
                    </div>
                    <span className="text-[9px] uppercase font-bold text-slate-500 tracking-wider mt-1.5">Mins</span>
                  </div>
                  {/* Colon */}
                  <div className="flex items-center text-xl font-bold text-slate-700 sm:text-2xl mt-[-10px]">:</div>
                  {/* Seconds */}
                  <div className="flex flex-col">
                    <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded border border-brand-accent/40 bg-brand-slate-950 text-2xl sm:text-3xl font-extrabold text-brand-accent font-mono shadow-inner">
                      {formatNumber(timeLeft.seconds)}
                    </div>
                    <span className="text-[9px] uppercase font-bold text-slate-500 tracking-wider mt-1.5">Secs</span>
                  </div>
                </div>

                <div className="mt-6">
                  <button
                    onClick={onStartMock}
                    className="inline-flex w-full items-center justify-center rounded bg-shimmer-btn py-3 text-xs font-bold text-white hover:opacity-95 transition-colors shadow-premium-sm uppercase tracking-wider cursor-pointer"
                  >
                    Secure Free Seat Now
                  </button>
                </div>
              </div>

              {/* Data Grid: CGL Parameters */}
              <div className="border-t border-brand-slate-800 bg-brand-slate-950/60 p-5 space-y-3.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Target Post & Syllabus Architecture
                </h4>
                
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="rounded border border-brand-slate-800 bg-brand-slate-950 p-2.5">
                    <div className="text-slate-500 font-bold uppercase tracking-wider text-[8px]">Syllabus Engine</div>
                    <div className="mt-0.5 font-bold text-slate-300">Pattern 2026 Ed.</div>
                  </div>
                  <div className="rounded border border-brand-slate-800 bg-brand-slate-950 p-2.5">
                    <div className="text-slate-500 font-bold uppercase tracking-wider text-[8px]">Exam Cycles</div>
                    <div className="mt-0.5 font-bold text-slate-300">Tier-I & II Complete</div>
                  </div>
                  <div className="rounded border border-brand-slate-800 bg-brand-slate-950 p-2.5 col-span-2 flex items-center justify-between">
                    <div>
                      <div className="text-slate-500 font-bold uppercase tracking-wider text-[8px]">Featured Target Post Simulations</div>
                      <div className="mt-0.5 font-bold text-brand-accent text-[11px] bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent font-sans">ASO (CSS/MEA), Income Tax & Excise Inspector</div>
                    </div>
                    <Award className="h-4 w-4 text-brand-accent shrink-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

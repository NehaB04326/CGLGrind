"use client";

import React, { useState, useEffect } from "react";
import Navbar, { PRODUCT_APP_URL } from "@/components/Navbar";
import FooterIntercept from "@/components/FooterIntercept";
import { Clock, CheckCircle } from "lucide-react";

export default function LiveTestsPage() {
  const [timeLeft, setTimeLeft] = useState({ hours: 14, minutes: 32, seconds: 45 });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { hours: prev.hours, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 23, minutes: 59, seconds: 59 };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number) => String(num).padStart(2, "0");

  const rules = [
    "One Single Attempt allowed per aspirant.",
    "Sectional locking is strictly enforced - 15 minutes per subject.",
    "All India Rank and detailed percentile analysis published at 10:00 PM.",
    "Mock engines prevent window navigation or tab switching during active testing."
  ];

  const schedule = [
    { name: "All India CGL Tier-I Mock #14", date: "Every Wednesday & Thursday", status: "Active Countdown" },
    { name: "CGL Tier-II Numerical special #6", date: "Every Friday", status: "Upcoming" },
    { name: "Mini GA & General Intelligence Sprint #21", date: "Every Sunday", status: "Upcoming" }
  ];

  return (
    <div className="min-h-screen bg-white text-brand-slate-900 flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Banner with Ticking Clock */}
        <section className="bg-brand-slate-950 text-white py-16 relative overflow-hidden border-b border-brand-slate-900">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,#161d2b_0%,#030712_100%)] opacity-80"></div>
          
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-4">
                <span className="inline-flex items-center gap-1.5 rounded bg-red-950 px-3 py-1 text-xs font-bold text-red-400 border border-red-900 animate-pulse-subtle">
                  <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse-white"></span>
                  ALL INDIA LIVE ARENA
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                  All India Live Mock Tests
                </h1>
                <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-medium">
                  Compete in real-time against tens of thousands of active SSC CGL candidates nationwide. Establish your actual percentile, view rank projections, and identify section-wise speed anomalies.
                </p>
              </div>

              {/* Live Timer Widget */}
              <div className="lg:col-span-5 bg-brand-slate-900 border border-brand-slate-800 rounded-xl p-6 text-center shadow-premium-lg">
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-2">
                  Window Closes In
                </span>
                <div className="flex justify-center gap-2 select-none">
                  <div className="flex flex-col">
                    <span className="h-12 w-12 rounded bg-brand-slate-950 border border-brand-slate-805 flex items-center justify-center font-mono text-xl font-bold">{formatNumber(timeLeft.hours)}</span>
                    <span className="text-[8px] uppercase tracking-wider text-slate-500 font-bold mt-1">Hrs</span>
                  </div>
                  <span className="text-slate-600 font-bold mt-2">:</span>
                  <div className="flex flex-col">
                    <span className="h-12 w-12 rounded bg-brand-slate-950 border border-brand-slate-805 flex items-center justify-center font-mono text-xl font-bold">{formatNumber(timeLeft.minutes)}</span>
                    <span className="text-[8px] uppercase tracking-wider text-slate-500 font-bold mt-1">Mins</span>
                  </div>
                  <span className="text-slate-600 font-bold mt-2">:</span>
                  <div className="flex flex-col">
                    <span className="h-12 w-12 rounded bg-brand-slate-950 border border-brand-accent/40 text-brand-accent flex items-center justify-center font-mono text-xl font-bold">{formatNumber(timeLeft.seconds)}</span>
                    <span className="text-[8px] uppercase tracking-wider text-slate-500 font-bold mt-1">Secs</span>
                  </div>
                </div>
                <div className="mt-4">
                  <a
                    href={PRODUCT_APP_URL}
                    className="inline-flex w-full items-center justify-center rounded bg-gradient-primary py-2.5 text-xs font-bold text-white hover:opacity-95 transition-all uppercase tracking-wider shadow"
                  >
                    Enter Live Arena
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Live Test Instructions & Schedule */}
        <section className="py-12 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              
              {/* Instructions */}
              <div className="lg:col-span-6 space-y-6">
                <h2 className="text-2xl font-black text-brand-slate-955 tracking-tight">
                  Simulator Regulations & Rules
                </h2>
                <ul className="space-y-4">
                  {rules.map((rule, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-brand-primary shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-600 leading-relaxed font-medium">{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Schedule */}
              <div className="lg:col-span-6 space-y-6">
                <h2 className="text-2xl font-black text-brand-slate-955 tracking-tight">
                  National Mock Test Schedule
                </h2>
                
                <div className="border border-brand-slate-200/60 rounded-xl overflow-hidden divide-y divide-brand-slate-150">
                  {schedule.map((sch, idx) => (
                    <div key={idx} className="p-4 bg-brand-slate-50/50 flex items-center justify-between gap-4 hover:bg-brand-slate-50 transition-colors">
                      <div className="space-y-0.5">
                        <h4 className="font-extrabold text-xs text-brand-slate-950 tracking-tight">{sch.name}</h4>
                        <p className="text-[10px] text-brand-slate-500 font-bold">{sch.date}</p>
                      </div>
                      <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                        sch.status === "Active Countdown"
                          ? "bg-red-50 text-red-500 border border-red-200"
                          : "bg-brand-slate-100 text-brand-slate-500"
                      }`}>
                        {sch.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      <FooterIntercept />
    </div>
  );
}

"use client";

import React from "react";
import { Award, ArrowRight } from "lucide-react";
import Link from "next/link";
import { PRODUCT_APP_URL } from "./Navbar";

export default function FooterIntercept() {
  return (
    <footer className="bg-brand-slate-950 text-slate-100 border-t border-brand-slate-200 mt-auto">
      
      {/* Footer Urgency Banner Section - Shifted to Light Theme */}
      <div className="relative overflow-hidden py-16 lg:py-20 bg-gradient-to-b from-white to-brand-slate-100 border-b border-brand-slate-200">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_80%,transparent_100%)] opacity-30"></div>

        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8 space-y-6">
          <span className="inline-flex items-center gap-2 rounded bg-white border border-brand-slate-200 px-3 py-1 text-xs font-semibold text-brand-primary shadow-premium-sm">
            <Award className="h-4 w-4 text-brand-primary animate-pulse" />
            <span className="tracking-wide">Target SSC CGL 2026</span>
          </span>

          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-brand-slate-950">
            Secure Your Target Grade Level.
          </h3>
          
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-medium">
            Stop practicing on generic, low-caliber simulators. Bridge the gap between mock scores and real performance. Create your free simulator account in less than 60 seconds.
          </p>

          {/* CTA & Micro-text */}
          <div className="pt-4 space-y-3">
            <a
              href={PRODUCT_APP_URL}
              className="inline-flex items-center justify-center gap-2 rounded bg-[#030712] px-8 py-3 text-xs font-bold text-white border border-brand-slate-800 shadow hover:bg-brand-slate-900 active:scale-[0.99] transition-all tracking-wider uppercase"
            >
              Access Complete Platform
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">
              No upfront payment card required. Zero obligation. 5 diagnostic mock tests are 100% free.
            </p>
          </div>
        </div>
      </div>

      {/* Trust & Links grid - High-contrast solid black background */}
      <div className="bg-black py-12 text-xs text-slate-400">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
            
            {/* Brand column */}
            <div className="space-y-4 md:col-span-1">
              <Link href="/" className="flex items-center gap-3">
                <div className="relative flex h-8 w-8 items-center justify-center rounded border border-slate-805 bg-brand-slate-900 font-serif text-base font-bold text-white">
                  C
                  <div className="absolute -bottom-1 -right-1 flex h-3.5 w-3.5 items-center justify-center rounded-sm bg-brand-primary font-sans text-[8px] font-black text-white">
                    V
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="font-sans text-sm font-bold text-white tracking-tight">
                    CGL<span className="text-brand-primary font-medium">Vault</span>
                  </span>
                  <span className="font-sans text-[7px] font-semibold tracking-widest text-slate-500 uppercase">
                    SSC CGL EXAM PREP
                  </span>
                </div>
              </Link>
              <p className="text-slate-400 text-xs leading-relaxed font-medium">
                The premier simulator platform for elite SSC CGL aspirants. Tailored specifically to exam layout constraints.
              </p>
            </div>

            {/* Quick links */}
            <div>
              <h4 className="font-bold text-white mb-3.5 uppercase tracking-widest text-[9px] border-b border-brand-slate-900 pb-1.5 max-w-[80px]">Products</h4>
              <ul className="space-y-2.5 font-medium text-slate-400">
                <li><Link href="/exams/tier-1" className="hover:text-white transition-colors">CGL Tier-I Mock Series</Link></li>
                <li><Link href="/exams/tier-2" className="hover:text-white transition-colors">CGL Tier-II Numerical Sets</Link></li>
                <li><Link href="/exams/sectional" className="hover:text-white transition-colors">General Awareness Quizzes</Link></li>
                <li><Link href="/live-tests" className="hover:text-white transition-colors">Previous Year Papers</Link></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-bold text-white mb-3.5 uppercase tracking-widest text-[9px] border-b border-brand-slate-900 pb-1.5 max-w-[80px]">Resources</h4>
              <ul className="space-y-2.5 font-medium text-slate-400">
                <li><Link href="/pricing" className="hover:text-white transition-colors">CGLGrind Premium Pricing</Link></li>
                <li><Link href="/current-affairs" className="hover:text-white transition-colors">Current Affairs Portal</Link></li>
                <li><Link href="/quiz-practice" className="hover:text-white transition-colors">Subject-Wise Practice</Link></li>
                <li><Link href="/live-tests" className="hover:text-white transition-colors">Live Mock Test Timers</Link></li>
              </ul>
            </div>

            {/* Disclaimer */}
            <div className="space-y-2">
              <h4 className="font-bold text-white mb-3.5 uppercase tracking-widest text-[9px] border-b border-brand-slate-900 pb-1.5 max-w-[80px]">Disclaimer</h4>
              <p className="text-slate-500 leading-normal font-medium text-[11px] font-sans">
                CGLGrind is an independent preparation platform. SSC CGL is a registered trademark of its respective owners. CGLGrind simulator is created for test preparation purposes and has no official affiliation with the Staff Selection Commission.
              </p>
            </div>

          </div>

          <div className="border-t border-brand-slate-900 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-600 font-semibold text-[11px]">
            <p>© {new Date().getFullYear()} CGLGrind. All rights reserved.</p>
            <div className="flex gap-6">
              <a href={PRODUCT_APP_URL} className="hover:text-white transition-colors">Terms of Service</a>
              <a href={PRODUCT_APP_URL} className="hover:text-white transition-colors">Privacy Policy</a>
              <a href={PRODUCT_APP_URL} className="hover:text-white transition-colors">Refund Policy</a>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
}

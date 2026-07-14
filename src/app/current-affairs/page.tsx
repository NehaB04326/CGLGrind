"use client";

import React from "react";
import Navbar, { PRODUCT_APP_URL } from "@/components/Navbar";
import FooterIntercept from "@/components/FooterIntercept";
import { BookOpen, FileText, ArrowRight } from "lucide-react";

export default function CurrentAffairsPage() {
  const bulletins = [
    { id: 1, category: "National", title: "New RBI Monetary Policy Guidelines for FY 2026-27", desc: "Repo rate revisions, inflation projections, and banking impact indices critical for CGL economy segments.", date: "July 12, 2026" },
    { id: 2, category: "Sports", title: "All India Chess Federation Rankings & Championships Setups", desc: "Grandmaster title wins, tournament venues, and upcoming international championships summary.", date: "July 10, 2026" },
    { id: 3, category: "Science & Tech", title: "ISRO Gaganyaan Crew Module Escape Trajectory Successful", desc: "Technical parameters, launcher details (LVM3), and command facility locations for space GK.", date: "July 08, 2026" }
  ];

  const digests = [
    { title: "Monthly Digest - June 2026 Edition", size: "4.2 MB", questions: "150 Qs Included", isFree: true },
    { title: "Monthly Digest - May 2026 Edition", size: "3.9 MB", questions: "150 Qs Included", isFree: true },
    { title: "Current Affairs Quarterly Compendium 2026", size: "12.4 MB", questions: "500 Qs Included", isFree: false }
  ];

  return (
    <div className="min-h-screen bg-white text-brand-slate-900 flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Banner */}
        <section className="bg-brand-slate-950 text-white py-16 relative overflow-hidden border-b border-brand-slate-900">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,#161d2b_0%,#030712_100%)] opacity-80"></div>
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-4">
            <span className="inline-flex items-center gap-1.5 rounded bg-brand-slate-900 border border-brand-slate-800 px-3 py-1 text-xs font-semibold text-brand-accent shadow">
              <BookOpen className="h-4 w-4 text-brand-accent" />
              Daily GK Bulletins
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              Current Affairs Portal
            </h1>
            <p className="text-slate-400 text-sm sm:text-base max-w-3xl leading-relaxed font-medium">
              Master the General Awareness module. We extract daily national affairs, economic reviews, awards, and sports records and organize them directly into practice sets matching TCS trends.
            </p>
          </div>
        </section>

        {/* Bulletins Section */}
        <section className="py-12 bg-white border-b border-brand-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-black text-brand-slate-950 mb-8 tracking-tight">
              Trending GK Bulletins for CGL GA
            </h2>
            
            <div className="space-y-6">
              {bulletins.map((bullet) => (
                <div key={bullet.id} className="bg-brand-slate-50 border border-brand-slate-200 rounded-xl p-5 hover:border-brand-primary transition-colors">
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-[9px] font-bold text-white bg-brand-primary px-2 py-0.5 rounded tracking-wide uppercase">
                        {bullet.category}
                      </span>
                      <h3 className="font-extrabold text-sm text-brand-slate-900 tracking-tight">
                        {bullet.title}
                      </h3>
                    </div>
                    <span className="text-[10px] text-slate-400 font-bold">{bullet.date}</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed mb-3 font-medium">{bullet.desc}</p>
                  <a 
                    href={PRODUCT_APP_URL}
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-brand-primary hover:text-brand-accent transition-colors"
                  >
                    Attempt Related Quiz
                    <ArrowRight className="h-3 w-3" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Monthly Digests */}
        <section className="py-12 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-black text-brand-slate-950 mb-8 tracking-tight">
              Monthly GK Capsules & PDF Compendiums
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {digests.map((dig, idx) => (
                <div 
                  key={idx}
                  className="border border-slate-200 bg-white rounded-xl p-5 hover:border-brand-primary transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-slate-500 bg-brand-slate-100 px-2 py-0.5 rounded uppercase tracking-wider">
                        PDF Compendium
                      </span>
                      <span className="text-[10px] text-slate-400 font-semibold">{dig.size}</span>
                    </div>

                    <div>
                      <h3 className="font-extrabold text-sm text-brand-slate-955 tracking-tight leading-snug">
                        {dig.title}
                      </h3>
                      <p className="text-[10px] text-slate-505 font-bold uppercase tracking-wider mt-2 flex items-center gap-1">
                        <FileText className="h-3.5 w-3.5" />
                        {dig.questions}
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-brand-slate-100 mt-6 pt-4">
                    <a
                      href={PRODUCT_APP_URL}
                      className="inline-flex w-full items-center justify-center gap-1 text-xs font-bold text-white bg-gradient-primary hover:opacity-95 py-2.5 rounded uppercase tracking-wider shadow"
                    >
                      {dig.isFree ? "Download Free PDF" : "Unlock PDF Compendium"}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <FooterIntercept />
    </div>
  );
}

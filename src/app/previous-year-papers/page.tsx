"use client";

import React, { useState } from "react";
import Navbar, { PRODUCT_APP_URL } from "@/components/Navbar";
import FooterIntercept from "@/components/FooterIntercept";
import { Play, Calendar, FileText, CheckCircle } from "lucide-react";

export default function PreviousYearPapersPage() {
  const [selectedYear, setSelectedYear] = useState<number>(2025);

  const years = [2025, 2024, 2023, 2022, 2021];

  const papers = [
    { id: 1, year: 2025, title: "SSC CGL 2025 Tier-I (Shift 1)", date: "Sept 12, 2025", shift: "09:00 AM - 10:00 AM", questions: 100, status: "Verified Answers" },
    { id: 2, year: 2025, title: "SSC CGL 2025 Tier-I (Shift 2)", date: "Sept 12, 2025", shift: "12:30 PM - 01:30 PM", questions: 100, status: "Verified Answers" },
    { id: 3, year: 2025, title: "SSC CGL 2025 Tier-I (Shift 3)", date: "Sept 12, 2025", shift: "04:00 PM - 05:00 PM", questions: 100, status: "Verified Answers" },
    { id: 4, year: 2024, title: "SSC CGL 2024 Tier-I Complete Shift Set", date: "Oct 2024 Exam", shift: "All shifts compiled", questions: 100, status: "Re-calibrated" },
    { id: 5, year: 2024, title: "SSC CGL 2024 Tier-II Mathematics Shift", date: "Dec 2024 Exam", shift: "Tier-2 Session Set", questions: 60, status: "Detailed Keys" },
    { id: 6, year: 2023, title: "SSC CGL 2023 Tier-I (All Shifts Compilation)", date: "July 2023 Exam", shift: "Combined papers", questions: 100, status: "Percentile Calibrated" },
    { id: 7, year: 2023, title: "SSC CGL 2023 Tier-II Full Exam Paper", date: "Oct 2023 Exam", shift: "All-in-One Sets", questions: 130, status: "Verified Solutions" },
    { id: 8, year: 2022, title: "SSC CGL 2022 Tier-I Shift 1 & 2 Combined", date: "Dec 2022 Exam", shift: "General shifts", questions: 100, status: "Verified Answers" },
    { id: 9, year: 2021, title: "SSC CGL 2021 Tier-I Official Set", date: "April 2022 Exam", shift: "Official shift key", questions: 100, status: "Historical Archive" }
  ];

  const filteredPapers = papers.filter(p => p.year === selectedYear);

  return (
    <div className="min-h-screen bg-white text-brand-slate-900 flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Banner */}
        <section className="bg-brand-slate-950 text-white py-16 relative overflow-hidden border-b border-brand-slate-900">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,#161d2b_0%,#030712_100%)] opacity-80"></div>
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-4">
            <span className="inline-flex items-center gap-1.5 rounded bg-brand-slate-905 border border-brand-slate-805 px-3 py-1 text-xs font-semibold text-brand-accent shadow">
              <Calendar className="h-4 w-4 text-brand-accent" />
              Official Archives
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              Previous Year Papers (2021-2025)
            </h1>
            <p className="text-slate-400 text-sm sm:text-base max-w-3xl leading-relaxed font-medium">
              Nothing beats official questions. Practice using historical SSC CGL papers mapped into our live simulation engine. Establish how you would rank compared to candidates from prior cycles.
            </p>
          </div>
        </section>

        {/* Tab Selection */}
        <section className="py-12 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-start gap-2 border-b border-brand-slate-200 pb-6 mb-8">
              <span className="text-xs font-bold uppercase text-brand-slate-400 tracking-wider mr-2">Select Exam Year:</span>
              {years.map((y) => (
                <button
                  key={y}
                  onClick={() => setSelectedYear(y)}
                  className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded transition-colors ${
                    selectedYear === y
                      ? "bg-brand-primary text-white border border-brand-primary shadow-premium-sm"
                      : "bg-brand-slate-50 border border-brand-slate-200 text-slate-500 hover:bg-brand-slate-100"
                  }`}
                >
                  {y} Papers
                </button>
              ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPapers.map((paper) => (
                <div 
                  key={paper.id}
                  className="bg-white border border-slate-200 rounded-xl p-5 hover:border-brand-primary transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] font-bold text-white bg-brand-primary px-2 py-0.5 rounded tracking-wide uppercase">
                        {paper.year} PYQ
                      </span>
                      <span className="text-[9px] font-bold text-brand-teal bg-teal-50 border border-teal-200 px-2 py-0.5 rounded flex items-center gap-1">
                        <CheckCircle className="h-3 w-3" />
                        {paper.status}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-extrabold text-sm text-brand-slate-950 tracking-tight leading-snug">
                        {paper.title}
                      </h3>
                      <div className="space-y-1 mt-3 text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                        <div className="flex items-center gap-1.5">Exam Date: <span className="text-brand-slate-800">{paper.date}</span></div>
                        <div className="flex items-center gap-1.5">Shift Window: <span className="text-brand-slate-800">{paper.shift}</span></div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-brand-slate-100 mt-6 pt-4 flex items-center justify-between">
                    <span className="text-[10px] text-slate-600 flex items-center gap-1">
                      <FileText className="h-3.5 w-3.5" />
                      {paper.questions} Questions
                    </span>
                    <a
                      href={PRODUCT_APP_URL}
                      className="inline-flex items-center gap-1 text-xs font-bold text-white bg-gradient-primary hover:opacity-95 px-3.5 py-2 rounded uppercase tracking-wider"
                    >
                      <Play className="h-3 w-3 fill-white" />
                      Run Simulator
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {filteredPapers.length === 0 && (
              <div className="text-center py-12 border border-dashed border-brand-slate-200 rounded-xl bg-brand-slate-50">
                <span className="text-xs text-brand-slate-500 font-bold">No papers loaded for this year selection. Checked soon!</span>
              </div>
            )}
          </div>
        </section>
      </main>

      <FooterIntercept />
    </div>
  );
}

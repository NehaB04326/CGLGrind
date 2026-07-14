"use client";

import React from "react";
import Navbar, { PRODUCT_APP_URL } from "@/components/Navbar";
import FooterIntercept from "@/components/FooterIntercept";
import { ShieldCheck, ArrowRight, Lock, Play, Clock, FileText } from "lucide-react";

export default function Tier1ExamsPage() {
  const sections = [
    { title: "General Intelligence & Reasoning", q: 25, m: 50, syllabus: "Analogy, Series, Coding-Decoding, Paper Folding, Non-verbal, Matrices, Blood Relations" },
    { title: "General Awareness", q: 25, m: 50, syllabus: "History, Polity, Geography, Economy, Science, Current Affairs, Static GK, Books & Authors" },
    { title: "Quantitative Aptitude", q: 25, m: 50, syllabus: "Percentage, Profit & Loss, Trigonometry, Geometry, Mensuration, Algebra, Data Interpretation" },
    { title: "English Comprehension", q: 25, m: 50, syllabus: "Spotting Errors, Cloze Test, Reading Comprehension, Synonyms & Antonyms, Active-Passive, Direct-Indirect" }
  ];

  const mocks = [
    { id: 1, name: "SSC CGL Tier-I 2026 - National Diagnostic Mock", difficulty: "Medium", duration: "60 mins", qCount: 100, isFree: true, takenBy: "45.2K students" },
    { id: 2, name: "SSC CGL Tier-I 2026 - High Calibration Practice Set 1", difficulty: "Hard", duration: "60 mins", qCount: 100, isFree: true, takenBy: "31.8K students" },
    { id: 3, name: "SSC CGL Tier-I 2026 - Quantitative Aptitude Heavy Mock 2", difficulty: "Very Hard", duration: "60 mins", qCount: 100, isFree: true, takenBy: "22.4K students" },
    { id: 4, name: "SSC CGL Tier-I 2026 - General Awareness Special Mock 3", difficulty: "Medium", duration: "60 mins", qCount: 100, isFree: false, takenBy: "19.5K students" },
    { id: 5, name: "SSC CGL Tier-I 2026 - Full Syllabus Challenge Mock 4", difficulty: "Exact exam", duration: "60 mins", qCount: 100, isFree: false, takenBy: "18.2K students" },
    { id: 6, name: "SSC CGL Tier-I 2026 - Reasoning Speed Booster Mock 5", difficulty: "Hard", duration: "60 mins", qCount: 100, isFree: false, takenBy: "14.9K students" },
    { id: 7, name: "SSC CGL Tier-I 2026 - English Vocabulary Intensive 6", difficulty: "Medium", duration: "60 mins", qCount: 100, isFree: false, takenBy: "12.7K students" },
    { id: 8, name: "SSC CGL Tier-I 2026 - Ultimate Percentile Challenger 7", difficulty: "Extremely Hard", duration: "60 mins", qCount: 100, isFree: false, takenBy: "9.3K students" }
  ];

  return (
    <div className="min-h-screen bg-white text-brand-slate-900 flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Banner Section */}
        <section className="bg-brand-slate-950 text-white py-16 relative overflow-hidden border-b border-brand-slate-900">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,#161d2b_0%,#030712_100%)] opacity-80"></div>
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-4">
            <span className="inline-flex items-center gap-1.5 rounded bg-brand-slate-900 border border-brand-slate-800 px-3 py-1 text-xs font-semibold text-brand-accent shadow">
              <ShieldCheck className="h-4 w-4 text-brand-accent" />
              Simulation Ready
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              SSC CGL Tier-I Mock Exams
            </h1>
            <p className="text-slate-400 text-sm sm:text-base max-w-3xl leading-relaxed font-medium">
              Exhaustive syllabus coverages, exact scroll dynamics, scoring algorithms, and rank computations based on real competitor records. Practice in conditions indistinguishable from the actual exam.
            </p>
          </div>
        </section>

        {/* CGL Tier 1 Exam Pattern & Syllabus Overview */}
        <section className="py-12 border-b border-brand-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-black text-brand-slate-950 mb-8 tracking-tight">
              Tier-I Exam Architecture & Topic Weightage
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {sections.map((sect, idx) => (
                <div key={idx} className="bg-brand-slate-50 border border-slate-205 rounded-xl p-5 hover:border-brand-primary transition-colors">
                  <div className="flex justify-between items-center border-b border-brand-slate-200 pb-3 mb-3">
                    <h3 className="font-extrabold text-xs text-brand-slate-950 tracking-tight leading-tight max-w-[70%]">
                      {sect.title}
                    </h3>
                    <span className="text-[9px] font-bold text-white bg-brand-primary px-2 py-0.5 rounded">
                      {sect.q} Qs | {sect.m} M
                    </span>
                  </div>
                  <div>
                    <div className="text-[9px] uppercase font-bold tracking-wider text-slate-400 mb-1">Topics Coverages</div>
                    <p className="text-xs text-slate-600 leading-relaxed font-medium">{sect.syllabus}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-brand-slate-900 text-slate-100 rounded-xl p-5 border border-brand-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-premium-sm">
              <div className="text-xs space-y-1">
                <span className="font-bold text-brand-accent block">CGL Tier-I Rule Index:</span>
                <span className="text-slate-400 block font-medium">100 questions | 200 marks | 60 minutes session lock | 0.50 negative marking penalty.</span>
              </div>
              <a 
                href={PRODUCT_APP_URL}
                className="inline-flex items-center gap-1.5 bg-gradient-primary text-white px-4 py-2.5 rounded text-xs font-bold hover:opacity-95 transition-all uppercase tracking-wider shadow"
              >
                Launch Simulator Console
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </section>

        {/* Live Active Mock Lists */}
        <section className="py-12 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-8">
              <div>
                <h2 className="text-2xl font-black text-brand-slate-950 tracking-tight">
                  Calibrated Mock Series Library
                </h2>
                <p className="text-brand-slate-500 text-xs mt-1">
                  15 test packages, continuously refreshed with current TCS pattern trends.
                </p>
              </div>
              <span className="text-xs font-bold text-brand-slate-805 bg-brand-slate-100 px-3 py-1 rounded">
                8 Active Mocks Displayed
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mocks.map((mock) => (
                <div 
                  key={mock.id}
                  className="flex flex-col justify-between border border-slate-200 bg-white rounded-xl p-5 hover:border-brand-primary hover:shadow-premium-md transition-all duration-300"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                        mock.isFree 
                          ? "bg-emerald-50 text-brand-teal border border-teal-200" 
                          : "bg-purple-50 text-brand-accent border border-purple-200"
                      }`}>
                        {mock.isFree ? "Free Access" : "Premium Lock"}
                      </span>
                      <div className="flex items-center gap-2 text-[10px] text-slate-400 font-semibold">
                        <Clock className="h-3.5 w-3.5" />
                        <span>{mock.duration}</span>
                        <span>•</span>
                        <FileText className="h-3.5 w-3.5" />
                        <span>{mock.qCount} Qs</span>
                      </div>
                    </div>

                    <h3 className="font-extrabold text-brand-slate-950 text-sm leading-snug tracking-tight">
                      {mock.name}
                    </h3>
                  </div>

                  <div className="flex items-center justify-between border-t border-brand-slate-100 mt-5 pt-4">
                    <div className="text-[10px] text-slate-600 font-medium">
                      Difficulty: <span className="font-bold text-brand-slate-950">{mock.difficulty}</span>
                      <span className="mx-2 text-slate-200">|</span>
                      Attempted: <span className="font-bold text-brand-slate-950">{mock.takenBy}</span>
                    </div>
                    
                    <a
                      href={PRODUCT_APP_URL}
                      className={`inline-flex items-center gap-1.5 text-xs font-bold px-3.5 py-2 rounded uppercase tracking-wider ${
                        mock.isFree 
                          ? "bg-brand-slate-950 text-white hover:bg-brand-slate-900" 
                          : "bg-gradient-primary text-white hover:opacity-95"
                      }`}
                    >
                      {mock.isFree ? (
                        <>
                          <Play className="h-3 w-3 fill-white" />
                          Start Free
                        </>
                      ) : (
                        <>
                          <Lock className="h-3 w-3" />
                          Unlock
                        </>
                      )}
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

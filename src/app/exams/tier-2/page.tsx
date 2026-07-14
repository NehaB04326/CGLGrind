"use client";

import React from "react";
import Navbar, { PRODUCT_APP_URL } from "@/components/Navbar";
import FooterIntercept from "@/components/FooterIntercept";
import { ShieldCheck, ArrowRight, Lock, Play, Clock, FileText } from "lucide-react";

export default function Tier2ExamsPage() {
  const sections = [
    { title: "Mathematical Abilities (Paper I - Sect I - Mod I)", q: 30, m: 90, weight: "3 marks each", syllabus: "Arithmetic, Trigonometry, Geometry, Algebra, Mensuration, Statistics & Probability" },
    { title: "Reasoning & Gen Intelligence (Paper I - Sect I - Mod II)", q: 30, m: 90, weight: "3 marks each", syllabus: "Critical Reasoning, Analytical puzzles, Syllogisms, Classification, Coding matrices, Seating layout" },
    { title: "English Language (Paper I - Sect II - Mod I)", q: 45, m: 135, weight: "3 marks each", syllabus: "Active-Passive, Vocabulary, Comprehension, Cloze, Sentence arrangement, Common errors" },
    { title: "General Awareness (Paper I - Sect II - Mod II)", q: 25, m: 75, weight: "3 marks each", syllabus: "Polity, Economics, Science, Current affairs, Historical trends, Environmental science" }
  ];

  const computerSection = {
    title: "Computer Knowledge Module (Paper I - Sect III - Mod I)",
    q: 20,
    m: 60,
    desc: "Qualifying only. Replicates exact difficulty of computer questions covering RAM/ROM, Windows OS, MS Word, MS Excel, Networking, and Cyber Security."
  };

  const mocks = [
    { id: 1, name: "SSC CGL Tier-II 2026 - Comprehensive Mock 1 (Free)", difficulty: "Actual exam", duration: "120 mins", qCount: 130, isFree: true, takenBy: "24.6K students" },
    { id: 2, name: "SSC CGL Tier-II 2026 - Math & Reasoning Focus Drill Set 2", difficulty: "Extremely Hard", duration: "60 mins", qCount: 60, isFree: true, takenBy: "19.3K students" },
    { id: 3, name: "SSC CGL Tier-II 2026 - Verbal Abilities Intensive Mock 3", difficulty: "Medium", duration: "60 mins", qCount: 70, isFree: false, takenBy: "15.4K students" },
    { id: 4, name: "SSC CGL Tier-II 2026 - High-Calibration Tier-II Mock 4", difficulty: "Exact exam", duration: "120 mins", qCount: 130, isFree: false, takenBy: "12.7K students" },
    { id: 5, name: "SSC CGL Tier-II 2026 - Probability & Statistics Special Mock 5", difficulty: "Very Hard", duration: "30 mins", qCount: 20, isFree: false, takenBy: "9.8K students" },
    { id: 6, name: "SSC CGL Tier-II 2026 - Computer Aptitude Drill Mock 6", difficulty: "Exam pattern", duration: "15 mins", qCount: 20, isFree: false, takenBy: "8.6K students" }
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
              Advanced Calibration Enabled
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              SSC CGL Tier-II Mock Exams
            </h1>
            <p className="text-slate-400 text-sm sm:text-base max-w-3xl leading-relaxed font-medium">
              Step up to the ultimate examination phase. Our Tier-II simulator features pace-locking mechanisms, strict sectional order rules, negative markings of 1 mark per wrong question, and Computer Knowledge qualifying tests.
            </p>
          </div>
        </section>

        {/* Tier II Schema */}
        <section className="py-12 border-b border-brand-slate-200 bg-brand-slate-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-black text-brand-slate-950 mb-6 tracking-tight">
              Tier-II Paper-I Structural Weightage
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sections.map((sect, idx) => (
                <div key={idx} className="bg-white border border-slate-200 rounded-xl p-5 hover:border-brand-primary transition-colors flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex justify-between items-start">
                      <h3 className="font-extrabold text-brand-slate-950 text-xs leading-tight max-w-[70%]">
                        {sect.title}
                      </h3>
                      <span className="text-[9px] font-bold text-white bg-brand-primary px-2 py-0.5 rounded shrink-0">
                        {sect.q} Qs | {sect.m} Marks
                      </span>
                    </div>
                    <div className="text-[9px] text-slate-400 font-bold tracking-wider uppercase">Module Syllabus Highlights</div>
                    <p className="text-xs text-slate-600 leading-relaxed font-medium">{sect.syllabus}</p>
                  </div>
                  <div className="border-t border-brand-slate-100 mt-4 pt-3 text-[10px] text-slate-500 font-semibold">
                    Scoring Rule: <span className="font-bold text-slate-800">{sect.weight}</span> (Negative Marking: -1 per wrong response)
                  </div>
                </div>
              ))}
            </div>

            {/* Computer Knowledge Module info */}
            <div className="mt-8 bg-brand-slate-900 text-slate-100 rounded-xl p-6 border border-brand-slate-800 grid grid-cols-1 lg:grid-cols-3 gap-6 items-center shadow-premium-sm">
              <div className="lg:col-span-2 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="bg-brand-primary text-white text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">
                    Qualifying Module
                  </span>
                  <h4 className="font-black text-sm text-slate-100 uppercase tracking-wide">
                    {computerSection.title}
                  </h4>
                </div>
                <p className="text-xs text-slate-405 leading-relaxed font-medium">
                  {computerSection.desc}
                </p>
              </div>
              <div className="flex lg:justify-end">
                <span className="text-xs font-bold text-brand-accent bg-brand-slate-950 px-4 py-2 border border-brand-slate-800 rounded">
                  {computerSection.q} Qs | {computerSection.m} Marks | 15 Mins
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Mock Exam Listings */}
        <section className="py-12 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-black text-brand-slate-955 mb-8 tracking-tight">
              Calibrated Tier-II Mock Packages
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mocks.map((mock) => (
                <div 
                  key={mock.id}
                  className="flex flex-col justify-between border border-slate-200 bg-white rounded-xl p-5 hover:border-brand-primary hover:shadow-premium-md transition-all duration-300"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className={`text-[9px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded ${
                        mock.isFree 
                          ? "bg-emerald-50 text-brand-teal border border-teal-200" 
                          : "bg-purple-50 text-brand-accent border border-purple-200"
                      }`}>
                        {mock.isFree ? "Free Access" : "Premium Lock"}
                      </span>
                      <span className="text-[10px] text-slate-500 font-semibold">{mock.takenBy} Attempts</span>
                    </div>

                    <div>
                      <h3 className="font-extrabold text-brand-slate-950 text-sm leading-snug tracking-tight mb-2">
                        {mock.name}
                      </h3>
                      <div className="flex gap-4 text-[10px] text-slate-600 font-semibold">
                        <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {mock.duration}</span>
                        <span className="flex items-center gap-1"><FileText className="h-3 w-3" /> {mock.qCount} Qs</span>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-brand-slate-100 mt-6 pt-4 flex items-center justify-between">
                    <span className="text-[10px] text-slate-600 font-medium">
                      Difficulty: <span className="font-bold text-brand-slate-950">{mock.difficulty}</span>
                    </span>
                    <a
                      href={PRODUCT_APP_URL}
                      className={`inline-flex items-center gap-1 text-xs font-bold px-4 py-2 rounded uppercase tracking-wider ${
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

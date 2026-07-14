"use client";

import React, { useState } from "react";
import { ArrowRight, BookOpen, Layers, CheckCircle } from "lucide-react";
import { PRODUCT_APP_URL } from "./Navbar";

export default function SyllabusExplorer() {
  const [selectedExam, setSelectedExam] = useState<"tier-1" | "tier-2">("tier-1");
  const [selectedSubTab, setSelectedSubTab] = useState<"syllabus" | "rules" | "about">("syllabus");

  const tier1Data = {
    title: "SSC CGL Tier-I",
    vacancies: "15,000+ Proj. Vacancies",
    syllabus: [
      { num: "01", name: "Quantitative Aptitude", weight: "25Q / 50M", desc: "Percentages, Profit & Loss, Trigonometry, Geometry, Mensuration, Algebra, Data Interpretation." },
      { num: "02", name: "Reasoning & Intelligence", weight: "25Q / 50M", desc: "Analogies, Series, Coding-Decoding, Non-Verbal, Matrices, Blood Relations." },
      { num: "03", name: "English Comprehension", weight: "25Q / 50M", desc: "Spotting Errors, Cloze Test, Reading Comprehension, Synonyms & Antonyms, Active-Passive." },
      { num: "04", name: "General Awareness", weight: "25Q / 50M", desc: "History, Polity, Geography, Economy, Physics, Chemistry, Biology, Current GK." }
    ],
    duration: "100 Questions • 200 Marks • 60 Minutes",
    stats: [
      { label: "Questions Count", value: "100 MCQs" },
      { label: "Total Max Marks", value: "200 Marks" },
      { label: "Duration Lock", value: "60 Minutes" },
      { label: "Negative Penalty", value: "-0.50 Mark" }
    ],
    about: "The Tier-I exam is a computer-based screening test. All questions are objective multiple-choice format. Marks scored in Tier-I are used as qualifying criteria to proceed to Tier-II, but do not contribute to final merit ranking."
  };

  const tier2Data = {
    title: "SSC CGL Tier-II",
    vacancies: "Merit Rankings Basis",
    syllabus: [
      { num: "01", name: "Mathematical Abilities", weight: "30Q / 90M", desc: "Arithmetic, Trigonometry, Advanced Geometry, Mensuration, Algebra, Statistics & Probability." },
      { num: "02", name: "Reasoning & Intelligence", weight: "30Q / 90M", desc: "Critical Reasoning, Analytical Puzzles, Syllogisms, Matrices, Statement-Assumptions." },
      { num: "03", name: "English Language", weight: "45Q / 135M", desc: "Vocabulary, Spotting Errors, Active/Passive, Reading Passages, Synonyms/Antonyms." },
      { num: "04", name: "General Awareness", weight: "25Q / 75M", desc: "Polity, Economics, Physics, Chemistry, Biology, Current Affairs, Finance, Government Schemes." }
    ],
    duration: "130 Questions • 390 Marks • 2 Hours 15 Mins",
    stats: [
      { label: "Questions Count", value: "130 MCQs" },
      { label: "Total Max Marks", value: "390 Marks" },
      { label: "Duration Lock", value: "135 Minutes" },
      { label: "Negative Penalty", value: "-1.00 Mark" }
    ],
    about: "Tier-II is the absolute decider for final selection. It consists of multiple sections. Mathematical Abilities and Reasoning carry 3 marks per question with -1 negative marking. Also features qualifying modules: Computer Knowledge (20Q / 60M) and Data Entry Speed Test (DEST)."
  };

  const currentData = selectedExam === "tier-1" ? tier1Data : tier2Data;
  const isTier1 = selectedExam === "tier-1";

  return (
    <section className="py-16 bg-brand-slate-50 border-b border-brand-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
          <span className="inline-flex items-center gap-1.5 rounded bg-brand-slate-100 border border-brand-slate-200 px-3 py-1 text-xs font-semibold text-brand-primary uppercase tracking-wider">
            <Layers className="h-4 w-4 text-brand-primary" />
            Exam weightage
          </span>
          <h2 className="text-3xl font-black tracking-tight text-brand-slate-950 sm:text-4xl">
            Exam Syllabus Weightage Explorer
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-medium">
            Toggle between Tier-I and Tier-II exam patterns to view question counts, score weightages, and section details.
          </p>
        </div>

        {/* Top Toggle: Tier-I vs Tier-II */}
        <div className="mx-auto max-w-2xl bg-white rounded-2xl border border-brand-slate-200 p-2.5 shadow-premium-sm mb-10 flex gap-2">
          <button
            onClick={() => {
              setSelectedExam("tier-1");
              setSelectedSubTab("syllabus");
            }}
            className={`flex-1 flex flex-col items-center justify-center py-3.5 px-4 rounded-xl transition-all duration-200 cursor-pointer ${
              isTier1
                ? "bg-brand-primary text-white shadow-premium-md"
                : "bg-transparent text-slate-500 hover:bg-brand-slate-50"
            }`}
          >
            <span className="text-sm font-extrabold">SSC CGL Tier-I</span>
            <span className={`text-[9px] font-bold uppercase tracking-wider mt-0.5 ${
              isTier1 ? "text-indigo-200" : "text-slate-400"
            }`}>
              {tier1Data.vacancies}
            </span>
          </button>

          <button
            onClick={() => {
              setSelectedExam("tier-2");
              setSelectedSubTab("syllabus");
            }}
            className={`flex-1 flex flex-col items-center justify-center py-3.5 px-4 rounded-xl transition-all duration-200 cursor-pointer ${
              !isTier1
                ? "bg-brand-teal text-white shadow-premium-md"
                : "bg-transparent text-slate-500 hover:bg-brand-slate-50"
            }`}
          >
            <span className="text-sm font-extrabold">SSC CGL Tier-II</span>
            <span className={`text-[9px] font-bold uppercase tracking-wider mt-0.5 ${
              !isTier1 ? "text-teal-100" : "text-slate-400"
            }`}>
              {tier2Data.vacancies}
            </span>
          </button>
        </div>

        {/* Full-width Details Block */}
        <div className="bg-white rounded-2xl border border-brand-slate-200 p-6 md:p-8 shadow-premium-sm space-y-8">
          
          {/* Horizontal Navigation Sub-tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 border-b border-brand-slate-100 pb-5">
            {[
              { id: "syllabus", label: "Syllabus Weightage" },
              { id: "rules", label: "Exam Rules" },
              { id: "about", label: "About This Stage" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedSubTab(tab.id as "syllabus" | "rules" | "about")}
                className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-lg transition-all duration-150 cursor-pointer border ${
                  selectedSubTab === tab.id
                    ? isTier1
                      ? "bg-indigo-50 border-brand-primary text-brand-primary shadow-premium-sm"
                      : "bg-teal-50 border-brand-teal text-brand-teal shadow-premium-sm"
                    : "bg-white border-brand-slate-200 text-slate-500 hover:bg-brand-slate-50"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Core Content Area */}
          <div>
            {/* Syllabus Weightage View: Responsive 4-Column Horizontal Stretch */}
            {selectedSubTab === "syllabus" && (
              <div className="space-y-6 animate-slide-in">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2">
                  <h3 className="text-sm font-black text-brand-slate-905 tracking-tight uppercase flex items-center gap-1.5">
                    <span className={`h-2 w-2 rounded-full ${isTier1 ? "bg-brand-primary" : "bg-brand-teal"}`}></span>
                    Syllabus & Sectional Distribution
                  </h3>
                  <span className={`inline-flex rounded px-3 py-1 text-[10px] font-bold uppercase tracking-wider border ${
                    isTier1
                      ? "bg-indigo-50 border-indigo-200 text-brand-primary"
                      : "bg-teal-50 border-teal-200 text-brand-teal"
                  }`}>
                    {currentData.duration}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {currentData.syllabus.map((s, idx) => (
                    <div 
                      key={idx} 
                      className="group bg-white border border-brand-slate-200 rounded-xl p-5 hover:border-brand-primary hover:shadow-premium-md transition-all duration-300 flex flex-col justify-between"
                    >
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className={`text-[15px] font-black font-mono transition-colors ${
                            isTier1 
                              ? "text-brand-primary group-hover:text-brand-accent" 
                              : "text-brand-teal group-hover:text-teal-650"
                          }`}>
                            {s.num}
                          </span>
                          <span className="text-[10px] font-bold text-slate-500 bg-brand-slate-100 px-2 py-0.5 rounded border border-brand-slate-200">
                            {s.weight}
                          </span>
                        </div>

                        <div>
                          <h4 className="font-extrabold text-xs text-brand-slate-950 tracking-tight">
                            {s.name}
                          </h4>
                          <p className="text-[11px] text-slate-500 mt-2 leading-relaxed font-medium">
                            {s.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Exam Rules View: Responsive 4-Column Horizontal Stretch */}
            {selectedSubTab === "rules" && (
              <div className="space-y-6 animate-slide-in">
                <h3 className="text-sm font-black text-brand-slate-905 tracking-tight uppercase flex items-center gap-1.5 mb-2">
                  <span className={`h-2 w-2 rounded-full ${isTier1 ? "bg-brand-primary" : "bg-brand-teal"}`}></span>
                  Official Exam Rules & Deductions
                </h3>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                  {currentData.stats.map((st, idx) => (
                    <div key={idx} className="bg-brand-slate-50 border border-brand-slate-250 p-5 rounded-xl flex flex-col justify-between min-h-[100px]">
                      <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">{st.label}</span>
                      <span className={`text-base font-black tracking-tight mt-2 ${isTier1 ? "text-brand-primary" : "text-brand-teal"}`}>
                        {st.value}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="rounded-xl border border-brand-slate-200 bg-brand-slate-50 px-4 py-3.5 text-xs font-semibold text-slate-500">
                  * Section-wise limits apply to Tier-II exam. Ensure your practice series reflects this constraints.
                </div>
              </div>
            )}

            {/* About Stage View */}
            {selectedSubTab === "about" && (
              <div className="space-y-6 animate-slide-in">
                <h3 className="text-sm font-black text-brand-slate-905 tracking-tight uppercase flex items-center gap-1.5 mb-2">
                  <span className={`h-2 w-2 rounded-full ${isTier1 ? "bg-brand-primary" : "bg-brand-teal"}`}></span>
                  About {currentData.title} Evaluation
                </h3>
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-8 space-y-4">
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                      {currentData.about}
                    </p>
                    <div className="flex flex-wrap gap-2 text-[10px] text-slate-550 font-bold uppercase tracking-wider">
                      <span className="flex items-center gap-1 text-slate-600"><CheckCircle className="h-3.5 w-3.5 text-brand-primary" /> CBT Mode</span>
                      <span className="flex items-center gap-1 text-slate-600"><CheckCircle className="h-3.5 w-3.5 text-brand-primary" /> Exam Questions</span>
                      <span className="flex items-center gap-1 text-slate-600"><CheckCircle className="h-3.5 w-3.5 text-brand-primary" /> Percentile Score</span>
                    </div>
                  </div>

                  <div className="lg:col-span-4 bg-brand-slate-50 p-5 rounded-xl border border-brand-slate-200 space-y-3">
                    <h5 className="font-extrabold text-[11px] text-brand-slate-950 uppercase tracking-wider flex items-center gap-1">
                      <BookOpen className="h-4 w-4 text-brand-primary" />
                      Mock Calibration
                    </h5>
                    <p className="text-[11px] text-slate-500 leading-relaxed font-medium">
                      CGLGrind simulator keys match this weights exactly to ensure score stability.
                    </p>
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Centered Register Free CTA */}
          <div className="pt-6 border-t border-brand-slate-100 flex items-center justify-center">
            <a
              href={PRODUCT_APP_URL}
              className="inline-flex items-center justify-center gap-2 rounded bg-gradient-primary px-8 py-3 text-xs font-bold text-white shadow-premium-md hover:opacity-95 active:scale-[0.99] transition-all tracking-wider uppercase"
            >
              Start Free Simulated Mocks
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}

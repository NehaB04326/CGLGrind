"use client";

import React, { useState } from "react";
import Navbar, { PRODUCT_APP_URL } from "@/components/Navbar";
import FooterIntercept from "@/components/FooterIntercept";
import { Play, Star, HelpCircle, Clock, Layers } from "lucide-react";

export default function SectionalQuizzesPage() {
  const [selectedSubject, setSelectedSubject] = useState("all");

  const subjects = [
    { id: "all", label: "All Subjects" },
    { id: "quant", label: "Quantitative Aptitude" },
    { id: "reasoning", label: "Reasoning & Intelligence" },
    { id: "english", label: "English Comprehension" },
    { id: "ga", label: "General Awareness" }
  ];

  const quizzes = [
    { id: 1, title: "Geometry: Triangle & Circle Properties", subject: "quant", questions: 20, time: "25 mins", level: "Hard", rating: 4.8 },
    { id: 2, title: "English: Cloze Test & Grammar Spotting", subject: "english", questions: 25, time: "15 mins", level: "Medium", rating: 4.9 },
    { id: 3, title: "Reasoning: Puzzles & Syllogisms Pack", subject: "reasoning", questions: 15, time: "20 mins", level: "Hard", rating: 4.7 },
    { id: 4, title: "GK: History & Ancient Civilizations", subject: "ga", questions: 30, time: "10 mins", level: "Easy", rating: 4.6 },
    { id: 5, title: "Quant: Profit, Loss & Discount Formulas", subject: "quant", questions: 15, time: "15 mins", level: "Medium", rating: 4.8 },
    { id: 6, title: "English: Idioms, Phrases & Word Match", subject: "english", questions: 30, time: "10 mins", level: "Easy", rating: 4.9 },
    { id: 7, title: "Reasoning: Coding-Decoding & Matrix", subject: "reasoning", questions: 25, time: "20 mins", level: "Medium", rating: 4.8 },
    { id: 8, title: "GK: Indian Polity & Amendments Act", subject: "ga", questions: 25, time: "12 mins", level: "Medium", rating: 4.7 },
    { id: 9, title: "Quant: Algebra & Quadratic Matrices", subject: "quant", questions: 20, time: "20 mins", level: "Hard", rating: 4.8 }
  ];

  const filteredQuizzes = selectedSubject === "all" 
    ? quizzes 
    : quizzes.filter(q => q.subject === selectedSubject);

  return (
    <div className="min-h-screen bg-white text-brand-slate-900 flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Banner */}
        <section className="bg-brand-slate-950 text-white py-16 relative overflow-hidden border-b border-brand-slate-900">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,#161d2b_0%,#030712_100%)] opacity-80"></div>
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-4">
            <span className="inline-flex items-center gap-1.5 rounded bg-brand-slate-905 border border-brand-slate-805 px-3 py-1 text-xs font-semibold text-brand-accent shadow">
              <Layers className="h-4 w-4 text-brand-accent" />
              Micro-calibration Drills
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              Sectional Practice Quizzes
            </h1>
            <p className="text-slate-400 text-sm sm:text-base max-w-3xl leading-relaxed font-medium">
              Target individual subject weaknesses. Our sectional modules feature individual timer locks and sub-topic telemetry feedback to patch accuracy gaps.
            </p>
          </div>
        </section>

        {/* Tab Filters */}
        <section className="py-12 bg-white border-b border-brand-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-start gap-2 border-b border-brand-slate-200 pb-6 mb-8">
              {subjects.map((sub) => (
                <button
                  key={sub.id}
                  onClick={() => setSelectedSubject(sub.id)}
                  className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded transition-colors ${
                    selectedSubject === sub.id
                      ? "bg-brand-primary text-white border border-brand-primary shadow-premium-sm"
                      : "bg-brand-slate-50 border border-brand-slate-200 text-slate-500 hover:bg-brand-slate-100 hover:text-brand-slate-950"
                  }`}
                >
                  {sub.label}
                </button>
              ))}
            </div>

            {/* List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredQuizzes.map((quiz) => (
                <div 
                  key={quiz.id}
                  className="bg-white border border-slate-200 rounded-xl p-5 hover:border-brand-primary hover:shadow-premium-md transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] font-bold text-white bg-brand-primary px-2.5 py-0.5 rounded uppercase tracking-wider">
                        {quiz.subject}
                      </span>
                      <div className="flex items-center gap-1 text-[11px] font-bold text-brand-slate-900">
                        <Star className="h-3.5 w-3.5 fill-brand-accent text-brand-accent" />
                        <span>{quiz.rating}</span>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-extrabold text-sm text-brand-slate-950 leading-snug tracking-tight">
                        {quiz.title}
                      </h3>
                      
                      <div className="flex gap-4 mt-3 text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                        <span className="flex items-center gap-1"><HelpCircle className="h-3.5 w-3.5 text-slate-300" /> {quiz.questions} Qs</span>
                        <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5 text-slate-300" /> {quiz.time}</span>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-brand-slate-100 mt-6 pt-4 flex items-center justify-between">
                    <span className="text-[10px] text-slate-600 font-medium">
                      Level: <span className="font-bold text-brand-slate-955">{quiz.level}</span>
                    </span>
                    <a
                      href={PRODUCT_APP_URL}
                      className="inline-flex items-center gap-1 text-xs font-bold text-white bg-gradient-primary hover:opacity-95 px-3.5 py-2 rounded uppercase tracking-wider"
                    >
                      <Play className="h-3 w-3 fill-white" />
                      Attempt Drill
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

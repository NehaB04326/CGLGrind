"use client";

import React from "react";
import Navbar, { PRODUCT_APP_URL } from "@/components/Navbar";
import FooterIntercept from "@/components/FooterIntercept";
import { Play, Zap, HelpCircle, Clock, Flame } from "lucide-react";

export default function QuizPracticePage() {
  const dailyQuizzes = [
    { id: 1, title: "English: Idioms & Vocabulary Speed Run", subject: "English", questions: 10, time: "5 mins", speedMode: true, attempts: "14.2K attempts" },
    { id: 2, title: "Quant: Quantitative Arithmetic Sprint", subject: "Mathematics", questions: 10, time: "8 mins", speedMode: true, attempts: "12.8K attempts" },
    { id: 3, title: "Reasoning: Series & Analogy Daily Challenge", subject: "Reasoning", questions: 10, time: "6 mins", speedMode: false, attempts: "10.4K attempts" },
    { id: 4, title: "GA: Static Biology & Chemistry Sprint", subject: "General Awareness", questions: 15, time: "7 mins", speedMode: false, attempts: "9.3K attempts" },
    { id: 5, title: "Quant: Geometry & Trigonometry Advanced Sprint", subject: "Mathematics", questions: 10, time: "10 mins", speedMode: true, attempts: "8.6K attempts" }
  ];

  return (
    <div className="min-h-screen bg-white text-brand-slate-900 flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Banner */}
        <section className="bg-brand-slate-950 text-white py-16 relative overflow-hidden border-b border-brand-slate-900">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,#161d2b_0%,#030712_100%)] opacity-80"></div>
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-4">
            <span className="inline-flex items-center gap-1.5 rounded bg-purple-950/80 px-3 py-1 text-xs font-bold text-purple-300 border border-purple-900/40 uppercase tracking-wider animate-pulse-subtle">
              <Zap className="h-4 w-4 text-purple-300" />
              Daily Sprint Engine
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              Quiz Practice Arena
            </h1>
            <p className="text-slate-400 text-sm sm:text-base max-w-3xl leading-relaxed font-medium">
              Maintain your daily solve streak. Daily sprints are bite-sized, high-intensity modules designed to train speed and rapid deduction without committing to a full 60-minute mock test.
            </p>
          </div>
        </section>

        {/* Daily Sprints */}
        <section className="py-12 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 gap-4">
              <div>
                <h2 className="text-2xl font-black text-brand-slate-950 tracking-tight flex items-center gap-2">
                  Today&apos;s High-Intensity Sprints
                  <Flame className="h-5 w-5 text-brand-primary fill-brand-primary animate-bounce" />
                </h2>
                <p className="text-slate-500 text-xs mt-1 font-medium">
                  New sprints compiled every morning at 06:00 AM based on trending question layouts.
                </p>
              </div>
              <span className="text-xs font-bold text-brand-slate-800 bg-brand-slate-100 px-3 py-1 rounded">
                Updated: Today
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dailyQuizzes.map((quiz) => (
                <div 
                  key={quiz.id}
                  className="bg-white border border-slate-205 rounded-xl p-5 hover:border-brand-primary transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] font-bold text-white bg-brand-primary px-2.5 py-0.5 rounded uppercase tracking-wider">
                        {quiz.subject}
                      </span>
                      {quiz.speedMode && (
                        <span className="text-[9px] font-bold text-red-500 bg-red-50 px-2 py-0.5 rounded border border-red-200 flex items-center gap-1 uppercase tracking-wider">
                          <Zap className="h-3 w-3 fill-red-500" />
                          Speed Booster
                        </span>
                      )}
                    </div>

                    <div>
                      <h3 className="font-extrabold text-sm text-brand-slate-950 tracking-tight leading-snug">
                        {quiz.title}
                      </h3>
                      <div className="flex gap-4 mt-3 text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                        <span className="flex items-center gap-1"><HelpCircle className="h-3.5 w-3.5 text-slate-300" /> {quiz.questions} Qs</span>
                        <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5 text-slate-300" /> {quiz.time}</span>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-brand-slate-100 mt-6 pt-4 flex items-center justify-between">
                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                      {quiz.attempts}
                    </span>
                    <a
                      href={PRODUCT_APP_URL}
                      className="inline-flex items-center gap-1 text-xs font-bold text-white bg-gradient-primary hover:opacity-95 px-3.5 py-2 rounded uppercase tracking-wider"
                    >
                      <Play className="h-3 w-3 fill-white" />
                      Start Quiz
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

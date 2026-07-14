"use client";

import React, { useState, useEffect } from "react";
import { MonitorPlay, ShieldCheck } from "lucide-react";

interface Question {
  id: number;
  subject: string;
  questionText: string;
  options: string[];
}

const sampleQuestions: Question[] = [
  {
    id: 1,
    subject: "Quantitative Aptitude",
    questionText: "If x + 1/x = 5, then find the value of (x² + 1/x²):",
    options: ["23", "25", "27", "21"]
  },
  {
    id: 2,
    subject: "General Intelligence & Reasoning",
    questionText: "Select the missing number from the given options in the series: 3, 7, 15, 31, 63, ?",
    options: ["95", "127", "115", "121"]
  },
  {
    id: 3,
    subject: "English Comprehension",
    questionText: "Choose the word that is nearest in meaning (Synonym) to the word: OBSTINATE",
    options: ["Flexible", "Stubborn", "Docile", "Pliant"]
  },
  {
    id: 4,
    subject: "General Awareness",
    questionText: "Which Article of the Indian Constitution guarantees the 'Right to Equality' to all its citizens?",
    options: ["Article 12", "Article 14", "Article 21", "Article 32"]
  },
  {
    id: 5,
    subject: "Computer Knowledge",
    questionText: "Which of the following is a shortcut key used to permanently delete files without sending them to the Recycle Bin in Windows?",
    options: ["Delete", "Shift + Delete", "Ctrl + Delete", "Alt + Delete"]
  }
];

interface SimulatorPreviewProps {
  onStartMock: () => void;
}

export default function SimulatorPreview({ onStartMock }: SimulatorPreviewProps) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [selectedOpt, setSelectedOpt] = useState<number | null>(null);
  const [isPressingSave, setIsPressingSave] = useState(false);
  const [answeredStates, setAnsweredStates] = useState<boolean[]>([false, false, false, false, false]);

  // Autoplay loop timer
  useEffect(() => {
    let step = 0; // 0: Read, 1: Select Option, 2: Click Save, 3: Next Question
    const interval = setInterval(() => {
      if (step === 0) {
        // Step 1: Simulate reading (reset button highlights)
        setIsPressingSave(false);
        setSelectedOpt(null);
        step = 1;
      } else if (step === 1) {
        // Step 2: Select the correct answer option (simulate click after 1s)
        // Correct options: Q1: 0 (23), Q2: 1 (127), Q3: 1 (Stubborn), Q4: 1 (Article 14), Q5: 1 (Shift+Delete)
        const answerKey = [0, 1, 1, 1, 1];
        setSelectedOpt(answerKey[activeIdx]);
        step = 2;
      } else if (step === 2) {
        // Step 3: Highlight Save & Next button (simulate click after 2s)
        setIsPressingSave(true);
        step = 3;
      } else if (step === 3) {
        // Step 4: Turn active grid item green, progress to next question (after 3s)
        setAnsweredStates((prev) => {
          const updated = [...prev];
          updated[activeIdx] = true;
          return updated;
        });

        if (activeIdx < sampleQuestions.length - 1) {
          setActiveIdx((prev) => prev + 1);
        } else {
          // Loop reset sequence: Wait and clear
          setTimeout(() => {
            setAnsweredStates([false, false, false, false, false]);
            setActiveIdx(0);
          }, 1000);
        }
        setIsPressingSave(false);
        setSelectedOpt(null);
        step = 0;
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [activeIdx]);

  return (
    <section className="py-16 bg-white border-b border-brand-slate-200">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
          <span className="inline-flex items-center gap-1.5 rounded bg-brand-slate-100 border border-brand-slate-200 px-3 py-1 text-xs font-semibold text-brand-primary uppercase tracking-wider">
            <MonitorPlay className="h-4 w-4" />
            Live Simulator Loop Demo
          </span>
          <h2 className="text-3xl font-black tracking-tight text-brand-slate-955 sm:text-4xl">
            Computer-Based Exam Simulation
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-medium">
            Review how CGLGrind maps layout coordinates, question timelines, and font scales. Click anywhere on the browser window to open the full interactive mock test.
          </p>
        </div>

        {/* Browser Mockup Container */}
        <div 
          onClick={onStartMock}
          className="group relative overflow-hidden rounded-2xl border border-brand-slate-200 bg-[#f4f4f4] p-2 shadow-premium-sm hover:shadow-premium-lg hover:border-brand-primary transition-all duration-300 cursor-pointer flex flex-col justify-between"
        >
          {/* Browser Header Bar */}
          <div className="flex items-center justify-between px-4 py-2 border-b border-brand-slate-200/80 bg-white rounded-t-xl select-none">
            <div className="flex gap-1.5 shrink-0">
              <span className="h-3 w-3 rounded-full bg-red-400"></span>
              <span className="h-3 w-3 rounded-full bg-amber-400"></span>
              <span className="h-3 w-3 rounded-full bg-emerald-400"></span>
            </div>
            {/* Mock URL bar */}
            <div className="hidden sm:block w-96 rounded-md bg-brand-slate-50 border border-slate-200/80 py-1 text-center text-[10px] font-bold text-slate-400">
              https://cglgrind.com/simulator/auto-run-loop
            </div>
            <span className="bg-red-600 text-white px-2 py-0.5 rounded text-[8px] font-bold animate-pulse">
              AUTO-PLAY DEMO
            </span>
          </div>

          {/* Code-based Auto-playing Simulation screen */}
          <div className="flex flex-col md:flex-row min-h-[340px] bg-white rounded-b-xl border-t border-slate-200 overflow-hidden font-sans">
            
            {/* Left Question Panel */}
            <div className="flex-1 bg-white p-5 flex flex-col justify-between border-r border-slate-200">
              <div className="space-y-4">
                {/* Header */}
                <div className="border-b border-slate-100 pb-2.5 flex items-center justify-between">
                  <span className="text-[10px] font-black text-[#1f3d7a] uppercase tracking-wider flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#1f3d7a]"></span>
                    Question No. {sampleQuestions[activeIdx].id}
                  </span>
                  <span className="text-[9px] font-bold text-slate-400 uppercase bg-slate-50 border border-slate-200 px-2 py-0.5 rounded">
                    Quantitative Aptitude & Logic
                  </span>
                </div>

                {/* Question text */}
                <div className="space-y-3">
                  <p className="text-xs sm:text-sm font-bold text-slate-800 leading-relaxed min-h-[40px]">
                    {sampleQuestions[activeIdx].questionText}
                  </p>

                  {/* Options List */}
                  <div className="space-y-2 pt-1">
                    {sampleQuestions[activeIdx].options.map((option, optIdx) => {
                      const isSelected = selectedOpt === optIdx;
                      return (
                        <div
                          key={optIdx}
                          className={`flex items-center gap-3 border rounded-lg p-3 text-left transition-all duration-200 text-xs font-semibold ${
                            isSelected
                              ? "border-brand-primary bg-indigo-50/20 text-brand-slate-950 scale-[1.005]"
                              : "border-slate-200 text-slate-500"
                          }`}
                        >
                          <div className={`h-4.5 w-4.5 rounded-full border flex items-center justify-center shrink-0 ${
                            isSelected ? "border-brand-primary" : "border-slate-300"
                          }`}>
                            {isSelected && <span className="h-2 w-2 rounded-full bg-brand-primary"></span>}
                          </div>
                          <span>{option}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Bottom controls panel */}
              <div className="border-t border-slate-100 pt-4 mt-4 flex items-center justify-between text-[11px] font-bold">
                <div className="flex gap-2">
                  <span className="bg-purple-50 text-purple-700 border border-purple-200 rounded px-3 py-2 opacity-50">
                    Mark for Review
                  </span>
                  <span className="bg-white border border-slate-200 text-slate-500 rounded px-3 py-2 opacity-50">
                    Clear Response
                  </span>
                </div>
                <span className={`rounded px-5 py-2 text-white shadow-sm transition-all duration-200 ${
                  isPressingSave ? "bg-emerald-700 scale-95" : "bg-emerald-600"
                }`}>
                  Save & Next
                </span>
              </div>
            </div>

            {/* Right Status Sidebar (Excludes Photo and Student Name) */}
            <div className="w-full md:w-60 bg-[#eaf1f9] p-4 flex flex-col justify-between border-t md:border-t-0 border-slate-250 select-none">
              <div className="space-y-5">
                {/* Status Counters */}
                <div className="grid grid-cols-2 gap-2 text-[9px] font-bold text-slate-500 uppercase tracking-wider">
                  <div className="flex items-center gap-1">
                    <span className="h-4.5 w-4.5 rounded bg-emerald-600 text-white flex items-center justify-center text-[9px] font-bold">
                      {answeredStates.filter(Boolean).length}
                    </span>
                    <span>Answered</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="h-4.5 w-4.5 rounded bg-red-600 text-white flex items-center justify-center text-[9px] font-bold">
                      {answeredStates.filter((s, idx) => !s && idx === activeIdx && selectedOpt !== null).length}
                    </span>
                    <span>Not Saved</span>
                  </div>
                  <div className="flex items-center gap-1 col-span-2">
                    <span className="h-4.5 w-4.5 rounded bg-[#f4f4f4] border border-slate-350 text-slate-600 flex items-center justify-center text-[9px] font-bold">
                      {25 - answeredStates.filter(Boolean).length}
                    </span>
                    <span>Not Visited Grid</span>
                  </div>
                </div>

                {/* 25-Cell Grid Palette */}
                <div className="space-y-2">
                  <h4 className="text-[10px] font-black uppercase tracking-wider text-slate-550 border-b border-slate-250 pb-1">
                    Question Paper Grid
                  </h4>
                  <div className="grid grid-cols-5 gap-1.5">
                    {Array.from({ length: 25 }).map((_, idx) => {
                      const isSample = idx < sampleQuestions.length;
                      const isAnswered = isSample && answeredStates[idx];
                      const isActive = activeIdx === idx;

                      let cellClass = "bg-[#f4f4f4] border-slate-300 text-slate-500";
                      if (isAnswered) {
                        cellClass = "bg-emerald-600 text-white border-emerald-700";
                      } else if (isActive && isSample) {
                        cellClass = "bg-red-600 text-white border-red-700 ring-1 ring-brand-primary";
                      }

                      return (
                        <div
                          key={idx}
                          className={`h-7.5 w-7.5 text-[10px] font-black border rounded flex items-center justify-center transition-all ${cellClass} ${
                            !isSample ? "opacity-30" : ""
                          }`}
                        >
                          {idx + 1}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Click to interactive trigger prompt */}
              <div className="pt-4 border-t border-slate-200 mt-4 text-center">
                <span className="text-[9px] font-black text-brand-primary uppercase tracking-wider animate-pulse bg-indigo-50 border border-indigo-200 px-2.5 py-1 rounded block">
                  Click to open Live simulator
                </span>
              </div>
            </div>

          </div>

        </div>

        {/* Feature quick flags */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8 text-center text-xs font-bold text-slate-500 uppercase tracking-wider">
          <div className="flex items-center justify-center gap-2">
            <ShieldCheck className="h-4.5 w-4.5 text-brand-teal" />
            <span>Layout matching index</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <ShieldCheck className="h-4.5 w-4.5 text-brand-teal" />
            <span>5 Interactive sample modules</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <ShieldCheck className="h-4.5 w-4.5 text-brand-teal" />
            <span>Tier-II scorecard compatibility</span>
          </div>
        </div>

      </div>
    </section>
  );
}

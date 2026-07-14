"use client";

import React, { useState, useEffect } from "react";
import { X, Check, Award, AlertCircle, RefreshCw } from "lucide-react";
import { PRODUCT_APP_URL } from "./Navbar";

interface Question {
  id: number;
  subject: string;
  questionText: string;
  options: string[];
  correctAnswer: number; // Index of correct option (0-3)
}

const sampleQuestions: Question[] = [
  {
    id: 1,
    subject: "Quantitative Aptitude",
    questionText: "If x + 1/x = 5, then find the value of (x² + 1/x²):",
    options: ["23", "25", "27", "21"],
    correctAnswer: 0
  },
  {
    id: 2,
    subject: "General Intelligence & Reasoning",
    questionText: "Select the missing number from the given options in the series: 3, 7, 15, 31, 63, ?",
    options: ["95", "127", "115", "121"],
    correctAnswer: 1
  },
  {
    id: 3,
    subject: "English Comprehension",
    questionText: "Choose the word that is nearest in meaning (Synonym) to the word: OBSTINATE",
    options: ["Flexible", "Stubborn", "Docile", "Pliant"],
    correctAnswer: 1
  },
  {
    id: 4,
    subject: "General Awareness",
    questionText: "Which Article of the Indian Constitution guarantees the 'Right to Equality' to all its citizens?",
    options: ["Article 12", "Article 14", "Article 21", "Article 32"],
    correctAnswer: 1
  },
  {
    id: 5,
    subject: "Computer Knowledge",
    questionText: "Which of the following is a shortcut key used to permanently delete files without sending them to the Recycle Bin in Windows?",
    options: ["Delete", "Shift + Delete", "Ctrl + Delete", "Alt + Delete"],
    correctAnswer: 1
  }
];

interface SimulatorState {
  selectedOption: number | null;
  status: "unvisited" | "not_answered" | "answered" | "marked" | "marked_answered";
}

interface TCSExamSimulatorProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TCSExamSimulator({ isOpen, onClose }: TCSExamSimulatorProps) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [states, setStates] = useState<SimulatorState[]>(
    sampleQuestions.map(() => ({ selectedOption: null, status: "unvisited" }))
  );
  const [secondsLeft, setSecondsLeft] = useState(1200); // 20 minutes demo timer
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [scoreReport, setScoreReport] = useState({ score: 0, accuracy: 0, correct: 0, wrong: 0, unanswered: 0 });

  // Clock Countdown
  useEffect(() => {
    if (!isOpen || isSubmitted) return;
    const interval = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [isOpen, isSubmitted]);

  if (!isOpen) return null;

  const formatTimer = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  };

  const handleSelectOption = (optIdx: number) => {
    const updated = [...states];
    updated[activeIdx].selectedOption = optIdx;
    if (updated[activeIdx].status === "unvisited" || updated[activeIdx].status === "not_answered") {
      updated[activeIdx].status = "not_answered"; // Option chosen but not saved yet
    }
    setStates(updated);
  };

  const handleClearResponse = () => {
    const updated = [...states];
    updated[activeIdx].selectedOption = null;
    updated[activeIdx].status = "not_answered";
    setStates(updated);
  };

  const handleSaveNext = () => {
    const updated = [...states];
    const isChosen = updated[activeIdx].selectedOption !== null;
    updated[activeIdx].status = isChosen ? "answered" : "not_answered";
    setStates(updated);

    if (activeIdx < sampleQuestions.length - 1) {
      setActiveIdx(activeIdx + 1);
    }
  };

  const handleMarkNext = () => {
    const updated = [...states];
    const isChosen = updated[activeIdx].selectedOption !== null;
    updated[activeIdx].status = isChosen ? "marked_answered" : "marked";
    setStates(updated);

    if (activeIdx < sampleQuestions.length - 1) {
      setActiveIdx(activeIdx + 1);
    }
  };

  const handleGridClick = (idx: number) => {
    if (idx >= sampleQuestions.length) return; // Only sample index
    const updated = [...states];
    if (updated[idx].status === "unvisited") {
      updated[idx].status = "not_answered";
    }
    setStates(updated);
    setActiveIdx(idx);
  };

  const handleSubmit = () => {
    let correct = 0;
    let wrong = 0;
    let unanswered = 0;

    states.forEach((s, idx) => {
      if (s.selectedOption === null) {
        unanswered++;
      } else if (s.selectedOption === sampleQuestions[idx].correctAnswer) {
        correct++;
      } else {
        wrong++;
      }
    });

    // Score based on Tier-II scoring format (+3 for correct, -1 for wrong)
    const score = correct * 3 - wrong * 1;
    const attempted = correct + wrong;
    const accuracy = attempted > 0 ? Math.round((correct / attempted) * 100) : 0;

    setScoreReport({ score, accuracy, correct, wrong, unanswered });
    setIsSubmitted(true);
  };

  const handleRestart = () => {
    setStates(sampleQuestions.map(() => ({ selectedOption: null, status: "unvisited" })));
    setActiveIdx(0);
    setSecondsLeft(1200);
    setIsSubmitted(false);
  };

  // Get status stats
  const answeredCount = states.filter(s => s.status === "answered").length;
  const notAnsweredCount = states.filter(s => s.status === "not_answered").length;
  const markedCount = states.filter(s => s.status === "marked" || s.status === "marked_answered").length;
  const unvisitedCount = states.filter(s => s.status === "unvisited").length + (20); // 25 total grid size

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 font-sans select-none">
      
      {/* Container */}
      <div className="w-full max-w-6xl h-[90vh] bg-[#f4f4f4] border border-slate-300 rounded-xl overflow-hidden flex flex-col justify-between shadow-premium-lg">
        
        {/* TCS Header Banner */}
        <div className="bg-[#1f3d7a] text-white px-4 py-2.5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-extrabold text-sm tracking-tight">SSC CGL Tier-II Mock Simulator</span>
            <span className="bg-amber-500 text-slate-900 text-[10px] font-black uppercase px-2 py-0.5 rounded">Engine v16</span>
          </div>

          <div className="flex items-center gap-4 text-xs font-bold">
            <span className="bg-red-600 text-white px-3 py-1 rounded border border-red-500 animate-pulse flex items-center gap-1.5">
              Time Left: {formatTimer(secondsLeft)}
            </span>
            <button 
              onClick={onClose} 
              className="text-slate-200 hover:text-white hover:bg-white/10 rounded-full p-1.5 cursor-pointer transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Section Navigation Tabs */}
        <div className="bg-slate-200 border-b border-slate-350 px-4 py-2 flex flex-wrap gap-2 text-xs font-bold text-slate-700">
          {sampleQuestions.map((q, idx) => (
            <button
              key={q.id}
              onClick={() => handleGridClick(idx)}
              className={`px-4 py-2 border rounded-md transition-all duration-150 cursor-pointer ${
                activeIdx === idx
                  ? "bg-[#1f3d7a] border-[#1f3d7a] text-white shadow-premium-sm"
                  : "bg-white border-slate-300 hover:bg-slate-50"
              }`}
            >
              {q.subject}
            </button>
          ))}
        </div>

        {/* Simulator Grid */}
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
          
          {/* Main Question Display Area */}
          <div className="flex-1 bg-white p-5 flex flex-col justify-between overflow-y-auto border-r border-slate-200">
            
            {/* Scorecard Summary Overlay */}
            {isSubmitted ? (
              <div className="flex-1 flex flex-col items-center justify-center p-6 text-center space-y-6">
                <div className="h-16 w-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 shadow-sm">
                  <Award className="h-9 w-9" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-black text-slate-900 tracking-tight">Mini Mock Submitted Successfully!</h3>
                  <p className="text-slate-500 text-sm max-w-md font-medium">
                    Here are your score diagnostics for the 5 sample questions under Tier-II (+3/-1) exam rules:
                  </p>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-xl w-full">
                  <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl text-center">
                    <span className="text-slate-400 block text-[9px] uppercase tracking-wider font-bold">Total Score</span>
                    <span className="text-xl font-black text-brand-primary mt-1 block">{scoreReport.score} M</span>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl text-center">
                    <span className="text-slate-400 block text-[9px] uppercase tracking-wider font-bold">Accuracy</span>
                    <span className="text-xl font-black text-brand-teal mt-1 block">{scoreReport.accuracy}%</span>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl text-center">
                    <span className="text-slate-400 block text-[9px] uppercase tracking-wider font-bold">Correct</span>
                    <span className="text-xl font-black text-emerald-600 mt-1 block">{scoreReport.correct} / 5</span>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl text-center">
                    <span className="text-slate-400 block text-[9px] uppercase tracking-wider font-bold">Unanswered</span>
                    <span className="text-xl font-black text-amber-600 mt-1 block">{scoreReport.unanswered}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full justify-center">
                  <button
                    onClick={handleRestart}
                    className="inline-flex h-11 items-center justify-center border border-slate-200 bg-white rounded px-6 text-xs font-bold text-slate-700 hover:bg-slate-50 cursor-pointer shadow-premium-sm transition-all gap-1.5"
                  >
                    <RefreshCw className="h-4 w-4" />
                    Restart Simulator
                  </button>
                  <a
                    href={PRODUCT_APP_URL}
                    className="inline-flex h-11 items-center justify-center bg-shimmer-btn rounded px-8 text-xs font-bold text-white shadow-premium-md transition-all uppercase tracking-wider"
                  >
                    Unlock 100+ Full Mocks
                  </a>
                </div>
              </div>
            ) : (
              /* Active Question View */
              <div className="space-y-6">
                {/* Question Info Header */}
                <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
                  <span className="text-xs font-black text-brand-slate-950 uppercase tracking-wider flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-[#1f3d7a]"></span>
                    Question No. {sampleQuestions[activeIdx].id}
                  </span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase bg-slate-50 border border-slate-200 px-2.5 py-0.5 rounded">
                    Single Choice Option (+3 / -1 Marks)
                  </span>
                </div>

                {/* Question Text */}
                <div className="space-y-4">
                  <p className="text-sm sm:text-base font-bold text-slate-805 leading-relaxed font-sans">
                    {sampleQuestions[activeIdx].questionText}
                  </p>

                  {/* Options Radio List */}
                  <div className="space-y-2.5 pt-2">
                    {sampleQuestions[activeIdx].options.map((option, optIdx) => {
                      const isSelected = states[activeIdx].selectedOption === optIdx;
                      return (
                        <button
                          key={optIdx}
                          onClick={() => handleSelectOption(optIdx)}
                          className={`w-full flex items-center gap-4 border rounded-lg p-4 text-left transition-all duration-150 cursor-pointer ${
                            isSelected
                              ? "border-brand-primary bg-indigo-50/20 font-bold text-brand-slate-955"
                              : "border-slate-200 hover:bg-slate-50/50 text-slate-655"
                          }`}
                        >
                          <div className={`h-5 w-5 rounded-full border flex items-center justify-center shrink-0 ${
                            isSelected ? "border-brand-primary text-brand-primary" : "border-slate-300"
                          }`}>
                            {isSelected && <span className="h-2.5 w-2.5 rounded-full bg-brand-primary"></span>}
                          </div>
                          <span className="text-sm font-semibold">{option}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* Bottom TCS Controls */}
            {!isSubmitted && (
              <div className="border-t border-slate-150 pt-5 mt-6 flex flex-wrap items-center justify-between gap-4 bg-slate-50 p-4 rounded-xl border border-slate-200">
                <div className="flex gap-2">
                  <button
                    onClick={handleMarkNext}
                    className="h-10 bg-purple-600 hover:bg-purple-700 text-white rounded px-4 text-xs font-bold cursor-pointer transition-colors shadow-premium-sm"
                  >
                    Mark for Review & Next
                  </button>
                  <button
                    onClick={handleClearResponse}
                    className="h-10 bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 rounded px-4 text-xs font-bold cursor-pointer transition-colors shadow-premium-sm"
                  >
                    Clear Response
                  </button>
                </div>

                <button
                  onClick={handleSaveNext}
                  className="h-10 bg-emerald-600 hover:bg-emerald-700 text-white rounded px-6 text-xs font-bold cursor-pointer transition-all shadow-premium-sm"
                >
                  Save & Next
                </button>
              </div>
            )}

          </div>

          {/* Right Sidelist candidate profile & question grids */}
          <div className="w-full md:w-72 bg-[#eaf1f9] p-5 flex flex-col justify-between border-t md:border-t-0 border-slate-250">
            <div className="space-y-6">

              {/* Status Indicators Summary */}
              <div className="grid grid-cols-2 gap-2 text-[10px] font-bold text-slate-600 uppercase tracking-wider">
                <div className="flex items-center gap-1.5">
                  <span className="h-5 w-5 rounded bg-emerald-600 text-white flex items-center justify-center text-[10px] font-bold">
                    {answeredCount}
                  </span>
                  <span>Answered</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="h-5 w-5 rounded bg-red-600 text-white flex items-center justify-center text-[10px] font-bold">
                    {notAnsweredCount}
                  </span>
                  <span>Not Answered</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="h-5 w-5 rounded bg-purple-600 text-white flex items-center justify-center text-[10px] font-bold">
                    {markedCount}
                  </span>
                  <span>Marked</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="h-5 w-5 rounded bg-[#f4f4f4] border border-slate-350 text-slate-700 flex items-center justify-center text-[10px] font-bold">
                    {unvisitedCount}
                  </span>
                  <span>Not Visited</span>
                </div>
              </div>

              {/* 25-Cell Question Grid */}
              <div className="space-y-3.5">
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-550 border-b border-slate-250 pb-1.5">
                  Question Paper Grid
                </h4>

                <div className="grid grid-cols-5 gap-2 max-h-[140px] overflow-y-auto">
                  {Array.from({ length: 25 }).map((_, idx) => {
                    const isSample = idx < sampleQuestions.length;
                    const qState = isSample ? states[idx] : null;
                    const isActive = activeIdx === idx;

                    let bgClass = "bg-[#f4f4f4] border-slate-350 text-slate-700";
                    if (isSample && qState) {
                      if (qState.status === "answered") {
                        bgClass = "bg-emerald-600 text-white border-emerald-700";
                      } else if (qState.status === "not_answered") {
                        bgClass = "bg-red-600 text-white border-red-700";
                      } else if (qState.status === "marked") {
                        bgClass = "bg-purple-600 text-white border-purple-700";
                      } else if (qState.status === "marked_answered") {
                        bgClass = "bg-purple-600 text-white border-purple-700 relative";
                      }
                    }

                    return (
                      <button
                        key={idx}
                        disabled={!isSample || isSubmitted}
                        onClick={() => handleGridClick(idx)}
                        className={`h-9 w-9 text-xs font-bold border rounded flex items-center justify-center transition-all ${
                          !isSample ? "opacity-40 cursor-not-allowed" : "cursor-pointer"
                        } ${bgClass} ${
                          isActive && isSample
                            ? "ring-2 ring-[#1f3d7a] ring-offset-1 font-black"
                            : ""
                        }`}
                      >
                        {idx + 1}
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Test Actions */}
            <div className="pt-6 border-t border-slate-250 mt-6 flex flex-col gap-2">
              {!isSubmitted && (
                <button
                  onClick={handleSubmit}
                  className="w-full h-11 bg-red-600 hover:bg-red-700 text-white text-xs font-bold uppercase tracking-wider rounded cursor-pointer transition-colors shadow-premium-sm"
                >
                  Submit Paper
                </button>
              )}
              <button
                onClick={onClose}
                className="w-full h-10 border border-slate-300 bg-white text-slate-700 text-xs font-bold rounded cursor-pointer hover:bg-slate-50 transition-colors shadow-premium-sm"
              >
                Close Simulator
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

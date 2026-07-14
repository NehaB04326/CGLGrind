"use client";

import React, { useState } from "react";
import { ChevronDown, Plus, Minus } from "lucide-react";

interface FaqItem {
  q: string;
  a: string;
}

const faqs: FaqItem[] = [
  {
    q: "How exactly does CGLGrind mimic the official exam interface?",
    a: "We have mapped the exact pixel layouts, color palette rules, and typography parameters used in the official exam centers. From the right-side question status palette (Answered, Not Answered, Marked for Review) to keyboard shortcuts and strict section locks, everything works exactly like the actual portal."
  },
  {
    q: "What is Sectional Pace Locking and why is it important?",
    a: "In the actual SSC CGL Tier-II exam, you cannot jump between sections at will; each module is locked to a specific duration. CGLGrind matches this regulatory lock. Training with sectional lockdowns prevents you from spending too much time on single questions, building real test pacing discipline."
  },
  {
    q: "How are the percentiles calculated on the mock dashboard?",
    a: "Instead of comparing your score to a static scale, our platform benchmarks your submission in real-time against all candidate attempts recorded in the database. This gives you a highly accurate percentile showing your rank as if you had taken the test alongside thousands of active competitors."
  },
  {
    q: "What does the personalized Error Book do?",
    a: "Every time you mark a wrong answer or fail to complete a task, the platform automatically catalogs the item under its specific syllabus sub-category in your custom Error Book. You can easily generate custom practice sheets consisting only of these past errors to systematically patch accuracy gaps."
  },
  {
    q: "Does the platform contain mock sets for computer knowledge?",
    a: "Yes. CGLGrind includes full simulators for both the Computer Knowledge module (20 questions / 60 marks) and sample modules matching the Data Entry Speed Test (DEST) typing benchmarks, ensuring you qualify for all Tier-II cutoff parameters."
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    if (openIndex === idx) {
      setOpenIndex(null);
    } else {
      setOpenIndex(idx);
    }
  };

  return (
    <section className="py-16 bg-brand-slate-50 border-b border-brand-slate-200">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <span className="inline-flex items-center gap-1.5 rounded bg-brand-slate-100 border border-brand-slate-200 px-3 py-1 text-xs font-semibold text-brand-primary uppercase tracking-wider">
            FAQ
          </span>
          <h2 className="text-3xl font-black tracking-tight text-brand-slate-950 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-medium">
            Learn more about our simulation technology and prep features.
          </p>
        </div>

        {/* Accordions Deck */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className="bg-white rounded-xl border border-brand-slate-200 overflow-hidden shadow-premium-sm"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between px-6 py-4.5 text-left transition-colors hover:bg-brand-slate-50/50 cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-bold text-brand-slate-950 pr-4">
                    {faq.q}
                  </span>
                  <div className="shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-brand-slate-100 text-brand-slate-700">
                    {isOpen ? <Minus className="h-4.5 w-4.5" /> : <Plus className="h-4.5 w-4.5" />}
                  </div>
                </button>

                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-[300px] border-t border-brand-slate-100 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="p-6 text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
                    {faq.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

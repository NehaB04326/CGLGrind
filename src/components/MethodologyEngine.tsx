"use client";

import React from "react";
import { Monitor, Lock, TrendingUp, AlertTriangle } from "lucide-react";

interface MethodologyItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  metric: string;
  badge: string;
}

const methodologies: MethodologyItem[] = [
  {
    icon: <Monitor className="h-5 w-5 text-brand-accent" />,
    title: "Interface Emulation",
    description: "Our exam screen precisely maps the official exam pattern down to the pixel. Features the exact navigation grid, font sizing, color codes, and button locations, eliminating surprises on exam day.",
    metric: "100% Layout Match",
    badge: "Visual Accuracy"
  },
  {
    icon: <Lock className="h-5 w-5 text-brand-accent" />,
    title: "Sectional Pace Locking",
    description: "Simulates actual exam regulations with automatic section switching, lock-out states, and real-time warnings. Train your internal clock to handle CGL's tight time constraints.",
    metric: "60-Min Strict Mode",
    badge: "Pacing Discipline"
  },
  {
    icon: <TrendingUp className="h-5 w-5 text-brand-accent" />,
    title: "Real Percentile Analytics",
    description: "Skip useless raw score metrics. Our platform benchmarks your test results immediately against thousands of active aspirants, rendering a true-to-life rank and percentile profile.",
    metric: "Instant Calibration",
    badge: "Peer Benchmarking"
  },
  {
    icon: <AlertTriangle className="h-5 w-5 text-brand-accent" />,
    title: "Active Error Logging",
    description: "Every wrong answer or skipped task is automatically sorted by category into your personalized Error Book. Review, re-attempt, and clear your weak spots before the final exam.",
    metric: "Auto-Compiled Log",
    badge: "Revision Optimizer"
  }
];

export default function MethodologyEngine() {
  return (
    <section className="bg-brand-slate-50 py-16 lg:py-24 border-b border-brand-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400 block">
              Behind the Simulator
            </span>
            <h2 className="text-3xl font-black tracking-tight text-brand-slate-955 sm:text-4xl">
              Our Methodology Engine
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-medium">
              Generic mocks build bad habits. Our simulator is built from the ground up to enforce true exam conditions, training both your logic and exam-day pacing.
            </p>
          </div>
          <div className="shrink-0 bg-brand-slate-900 text-white rounded-lg p-4 border border-brand-slate-800 flex items-center gap-4 shadow-premium-sm max-w-sm">
            <span className="text-2xl font-black text-brand-primary">99.8%</span>
            <div className="text-xs font-semibold leading-relaxed">
              <div className="text-slate-100 uppercase tracking-wider text-[10px]">Simulation Index</div>
              <div className="text-slate-405 font-normal">Score correlation to final CGL results</div>
            </div>
          </div>
        </div>

        {/* 4-Column Methodology Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {methodologies.map((item, idx) => (
            <div
              key={idx}
              className="group flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 shadow-premium-sm hover:shadow-premium-lg hover:-translate-y-1.5 transition-all duration-300 hover:border-brand-primary"
            >
              <div className="space-y-4">
                {/* Icon Container */}
                <div className="flex h-10 w-10 items-center justify-center rounded bg-brand-slate-950 shadow-md group-hover:bg-brand-slate-900 transition-colors">
                  {item.icon}
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-primary">
                    {item.badge}
                  </span>
                  <h3 className="text-lg font-bold text-brand-slate-955 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Metric Indicator */}
              <div className="mt-6 pt-4 border-t border-brand-slate-100 flex items-center justify-between text-xs font-bold uppercase text-slate-400 tracking-wider">
                <span>Metric:</span>
                <span className="text-brand-teal font-extrabold bg-teal-50 border border-teal-200 px-2.5 py-0.5 rounded">
                  {item.metric}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

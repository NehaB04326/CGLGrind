"use client";

import React from "react";
import { Star, CheckCircle, ArrowRight, BookOpen, Layers } from "lucide-react";
import { PRODUCT_APP_URL } from "./Navbar";

interface MockPackage {
  id: string;
  title: string;
  rating: number;
  reviewsCount: string;
  tasksCount: string;
  setsUnlocked: string;
  tier: string;
  tag: string;
  features: string[];
  isPopular?: boolean;
}

const mockPackages: MockPackage[] = [
  {
    id: "tier-1",
    title: "CGL Tier-I High-Calibration Mocks",
    rating: 4.9,
    reviewsCount: "12,480 reviews",
    tasksCount: "3,500+ Practice Tasks",
    setsUnlocked: "5 Full Mocks Unlocked",
    tier: "Tier-I Exam Preparation",
    tag: "High Calibration",
    features: [
      "Latest Exam Interface",
      "Comprehensive Sectional Diagnostics",
      "Detailed step-by-step video solutions",
      "All India Live Mock inclusion"
    ],
    isPopular: true
  },
  {
    id: "tier-2",
    title: "Mathematical & Reasoning Advanced Tier-II",
    rating: 4.8,
    reviewsCount: "8,920 reviews",
    tasksCount: "1,200+ Advanced Problems",
    setsUnlocked: "3 Full Mocks Unlocked",
    tier: "Tier-II Exam Prep",
    tag: "Advanced Pacing",
    features: [
      "High-difficulty level mathematics",
      "Critical reasoning & puzzle matrices",
      "Pace locking diagnostic tools",
      "Elite candidate benchmark data"
    ]
  },
  {
    id: "pyqs",
    title: "Official PYQs Solved (2021-2025)",
    rating: 4.9,
    reviewsCount: "15,620 reviews",
    tasksCount: "5 Years Verified Papers",
    setsUnlocked: "10 Previous Sets Unlocked",
    tier: "PYQ Archives",
    tag: "Official Papers",
    features: [
      "Fully interactive real-test mode",
      "Smart error analysis tracking",
      "Exact answer keys with shortcuts",
      "Historical percentile comparator"
    ]
  }
];

interface TestGridProps {
  onStartMock: () => void;
}

export default function TestGrid({ onStartMock }: TestGridProps) {
  return (
    <section className="bg-white py-16 lg:py-24 border-b border-brand-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl font-black tracking-tight text-brand-slate-955 sm:text-4xl">
            Elite Mock Test Library
          </h2>
          <p className="text-slate-655 text-sm sm:text-base font-medium">
            Calibrated specifically for official exam constraints. Practice in an exact replica of the official digital test layout.
          </p>
        </div>

        {/* 3-Column Package Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockPackages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative flex flex-col justify-between rounded-xl border bg-white p-6 shadow-premium-sm hover:shadow-premium-lg hover:-translate-y-1.5 transition-all duration-300 ${
                pkg.isPopular
                  ? "border-brand-primary ring-1 ring-brand-primary/10 shadow-glow-indigo"
                  : "border-slate-200"
              }`}
            >
              {/* Popular Tag Badge */}
              {pkg.isPopular && (
                <span className="absolute -top-3 left-6 inline-flex rounded bg-brand-primary px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-white shadow">
                  Recommended Set
                </span>
              )}

              {/* Package Header */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-brand-primary bg-brand-slate-100 px-2 py-0.5 rounded">
                    {pkg.tag}
                  </span>
                  <div className="flex items-center gap-1 text-xs font-bold text-brand-slate-900">
                    <Star className="h-3.5 w-3.5 fill-brand-accent text-brand-accent" />
                    <span>{pkg.rating}</span>
                    <span className="text-slate-400 font-normal">({pkg.reviewsCount})</span>
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block">
                    {pkg.tier}
                  </span>
                  <h3 className="text-xl font-bold tracking-tight text-brand-slate-950 leading-snug">
                    {pkg.title}
                  </h3>
                </div>

                {/* Calibration Highlights */}
                <div className="grid grid-cols-2 gap-2 border-y border-brand-slate-100 py-3.5 text-xs font-semibold">
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-slate-500 shrink-0" />
                    <span className="text-brand-slate-900">{pkg.tasksCount}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Layers className="h-4 w-4 text-slate-500 shrink-0" />
                    <span className="text-brand-teal bg-teal-50 border border-teal-200 px-1.5 py-0.5 rounded text-[10px]">{pkg.setsUnlocked}</span>
                  </div>
                </div>

                {/* Bullet Points */}
                <ul className="space-y-2.5 text-sm text-slate-600 pt-2">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle className="h-4 w-4 text-brand-primary mt-0.5 shrink-0" />
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="pt-6 mt-6 border-t border-brand-slate-100">
                <button
                  onClick={onStartMock}
                  className={`inline-flex w-full items-center justify-center rounded py-2.5 text-xs font-bold transition-all uppercase tracking-wider cursor-pointer ${
                    pkg.isPopular
                      ? "bg-shimmer-btn text-white shadow-premium-sm"
                      : "bg-white border border-slate-200 text-slate-800 hover:bg-slate-50 hover:border-slate-300"
                  }`}
                >
                  Start Practicing Free
                  <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

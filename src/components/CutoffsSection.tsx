"use client";

import React, { useState } from "react";
import { Star } from "lucide-react";

export default function CutoffsSection() {
  const [activeTab, setActiveTab] = useState<"tier-1" | "tier-2">("tier-1");

  const tier1Cutoffs = [
    { category: "General / UR", y2024: "142.23", y2023: "150.04", y2022: "114.27" },
    { category: "OBC", y2024: "138.45", y2023: "145.93", y2022: "114.27" },
    { category: "EWS", y2024: "133.22", y2023: "143.44", y2022: "102.35" },
    { category: "SC", y2024: "118.80", y2023: "126.29", y2022: "89.08" },
    { category: "ST", y2024: "110.15", y2023: "118.96", y2022: "77.57" }
  ];

  const tier2Cutoffs = [
    { category: "General / UR", y2024: "302.50", y2023: "310.00", y2022: "291.50" },
    { category: "OBC", y2024: "298.00", y2023: "305.50", y2022: "285.00" },
    { category: "EWS", y2024: "294.00", y2023: "302.00", y2022: "281.00" },
    { category: "SC", y2024: "276.50", y2023: "282.00", y2022: "258.50" },
    { category: "ST", y2024: "265.00", y2023: "270.50", y2022: "244.00" }
  ];

  const currentCutoffs = activeTab === "tier-1" ? tier1Cutoffs : tier2Cutoffs;
  const outOfMarks = activeTab === "tier-1" ? "Out of 200 Marks" : "Out of 390 Marks (Paper-I)";

  return (
    <section className="py-16 bg-white border-b border-brand-slate-200">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-4">
          <span className="inline-flex items-center gap-1.5 rounded bg-brand-slate-100 border border-brand-slate-200 px-3 py-1 text-xs font-semibold text-brand-primary uppercase tracking-wider">
            <Star className="h-3.5 w-3.5 fill-brand-primary" />
            Cut-off Marks
          </span>
          <h2 className="text-3xl font-black tracking-tight text-brand-slate-950 sm:text-4xl">
            SSC CGL Previous Year Cut-offs
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-medium">
            Analyze historical raw and normalized marks to establish target goals for your simulated test series.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex justify-center border-b border-brand-slate-200 mb-8 gap-6">
          <button
            onClick={() => setActiveTab("tier-1")}
            className={`pb-4 text-sm font-bold uppercase tracking-wider border-b-2 transition-all cursor-pointer ${
              activeTab === "tier-1"
                ? "border-brand-primary text-brand-primary"
                : "border-transparent text-slate-400 hover:text-brand-slate-900"
            }`}
          >
            Tier-I Cut-offs
          </button>
          <button
            onClick={() => setActiveTab("tier-2")}
            className={`pb-4 text-sm font-bold uppercase tracking-wider border-b-2 transition-all cursor-pointer ${
              activeTab === "tier-2"
                ? "border-brand-teal text-brand-teal"
                : "border-transparent text-slate-400 hover:text-brand-slate-900"
            }`}
          >
            Tier-II Cut-offs
          </button>
        </div>

        {/* Table View */}
        <div className="overflow-hidden rounded-2xl border border-brand-slate-200 bg-white shadow-premium-sm">
          <div className="bg-brand-slate-50 border-b border-brand-slate-200 px-6 py-4 flex items-center justify-between">
            <span className="text-xs font-black text-brand-slate-950 uppercase tracking-wider">
              Cut-off Distribution Table
            </span>
            <span className="text-[10px] text-brand-primary font-bold bg-indigo-50 border border-indigo-200 px-2.5 py-0.5 rounded">
              {outOfMarks}
            </span>
          </div>

          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-brand-slate-100 text-brand-slate-900 border-b border-brand-slate-200 font-extrabold uppercase tracking-wider">
                <th className="px-6 py-3.5">Category</th>
                <th className="px-6 py-3.5 text-center">2024 Cycle</th>
                <th className="px-6 py-3.5 text-center">2023 Cycle</th>
                <th className="px-6 py-3.5 text-center">2022 Cycle</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-slate-150 font-medium">
              {currentCutoffs.map((row, idx) => (
                <tr key={idx} className="hover:bg-brand-slate-50/50 transition-colors">
                  <td className="px-6 py-4 font-extrabold text-brand-slate-950">{row.category}</td>
                  <td className="px-6 py-4 text-center text-brand-slate-900 font-bold">{row.y2024}</td>
                  <td className="px-6 py-4 text-center text-slate-600">{row.y2023}</td>
                  <td className="px-6 py-4 text-center text-slate-500">{row.y2022}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}

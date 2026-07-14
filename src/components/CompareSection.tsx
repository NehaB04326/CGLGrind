"use client";

import React from "react";
import { CheckCircle2, ChevronRight } from "lucide-react";
import { PRODUCT_APP_URL } from "./Navbar";

export default function CompareSection() {
  const parameters = [
    { name: "Conducting Body", cgl: "Staff Selection Commission (SSC)", po: "SBI or IBPS (PSU Banks)" },
    { name: "Annual Vacancies", cgl: "15,000+ (Across 30+ posts)", po: "5,500+ (SBI + IBPS combined)", highlight: true },
    { name: "Starting Basic Pay", cgl: "₹44,900/month (Pay Level 7)", po: "₹36,000 - ₹41,960/month" },
    { name: "Gross In-Hand Salary", cgl: "₹75,000 – ₹85,000 (Class X Cities)", po: "₹55,000 – ₹68,000", highlight: true },
    { name: "Selection Stages", cgl: "Tier-I (CBT) → Tier-II (CBT + computer check)", po: "Prelims → Mains → GD/Interview" },
    { name: "Work-Life Balance", cgl: "Excellent (Desk jobs/5-day weeks, no public stress)", po: "Moderate (Public dealings, target pressures)", highlight: true },
    { name: "Prestige & Authority", cgl: "Very High (Central Govt. ministries & field inspectors)", po: "High (Nationalized Bank officer status)" },
    { name: "Transfer Frequency", cgl: "Very Low (Desk postings mostly in Delhi)", po: "High (Every 2-3 years, rural postings)" },
    { name: "Promotion Scope", cgl: "Group B Gazetted to Group A Officer tracks", po: "Scale I (PO) to Scale VII (General Manager)" }
  ];

  return (
    <section className="py-16 bg-white border-b border-brand-slate-200">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="inline-flex items-center gap-1.5 rounded bg-brand-slate-100 border border-brand-slate-200 px-3 py-1 text-xs font-semibold text-brand-primary uppercase tracking-wider">
            Career Comparison
          </span>
          <h2 className="text-3xl font-black tracking-tight text-brand-slate-950 sm:text-4xl">
            SSC CGL vs Bank PO — Which Should You Target?
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-medium">
            Both are prestigious, secure careers. Review how central government posts stack up against banking officer tracks to focus your energy.
          </p>
        </div>

        {/* Matrix Table - Hidden on Mobile (md:block) */}
        <div className="hidden md:block overflow-hidden rounded-2xl border border-brand-slate-200 bg-white shadow-premium-sm">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="bg-brand-slate-950 text-white font-bold border-b border-brand-slate-800">
                <th className="px-6 py-4 w-1/3 text-sm">Parameter</th>
                <th className="px-6 py-4 bg-brand-primary/20 w-1/3 text-center text-brand-primary font-black uppercase tracking-wider text-sm">
                  🎖️ SSC CGL (ASO/Inspector)
                </th>
                <th className="px-6 py-4 bg-brand-slate-900/40 w-1/3 text-center text-slate-300 w-1/3 text-sm">
                  🏦 Bank PO (SBI/IBPS)
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-slate-200">
              {parameters.map((row, idx) => (
                <tr 
                  key={idx} 
                  className={`transition-colors hover:bg-brand-slate-50/50 ${
                    row.highlight ? "bg-indigo-50/20 font-medium" : ""
                  }`}
                >
                  <td className="px-6 py-4 font-extrabold text-brand-slate-950">{row.name}</td>
                  <td className="px-6 py-4 text-center text-brand-slate-900 font-bold border-x border-brand-slate-100">
                    {row.cgl}
                  </td>
                  <td className="px-6 py-4 text-center text-slate-600 font-medium">
                    {row.po}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Responsive Mobile Layout - Displayed ONLY on Mobile (md:hidden) */}
        <div className="block md:hidden space-y-4">
          {parameters.map((row, idx) => (
            <div 
              key={idx} 
              className={`rounded-xl border p-4 space-y-3 bg-white shadow-premium-sm ${
                row.highlight ? "border-brand-primary/40 ring-1 ring-brand-primary/5" : "border-brand-slate-200"
              }`}
            >
              <h4 className="font-extrabold text-sm text-brand-slate-955 uppercase tracking-wider border-b border-slate-100 pb-1.5">
                {row.name}
              </h4>
              <div className="grid grid-cols-2 gap-4 text-xs leading-relaxed">
                <div>
                  <span className="font-bold text-brand-primary block uppercase tracking-widest text-[8px] mb-0.5">🎖️ CGL</span>
                  <span className="font-bold text-slate-800">{row.cgl}</span>
                </div>
                <div>
                  <span className="font-bold text-slate-400 block uppercase tracking-widest text-[8px] mb-0.5">🏦 Bank PO</span>
                  <span className="font-medium text-slate-600">{row.po}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Recommendation blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          <div className="bg-brand-slate-50 border border-brand-slate-200 rounded-xl p-5 space-y-3">
            <h4 className="font-extrabold text-sm text-brand-slate-950 uppercase tracking-wider flex items-center gap-1.5">
              <CheckCircle2 className="h-4.5 w-4.5 text-brand-primary" />
              Target SSC CGL if:
            </h4>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
              You value a balanced work life with a 5-day week, prefer desk jobs in central ministries (New Delhi), wish to avoid daily public dealing and commercial banking stress, or target executive fields (like Income Tax and Customs).
            </p>
          </div>

          <div className="bg-brand-slate-50 border border-brand-slate-200 rounded-xl p-5 space-y-3">
            <h4 className="font-extrabold text-sm text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
              <CheckCircle2 className="h-4.5 w-4.5 text-slate-400" />
              Target Bank PO if:
            </h4>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
              You want regular annual recruitment calendars, faster initial promotional scales, are comfortable working in retail finance environments, and do not mind relocating frequently across semi-urban or rural branches.
            </p>
          </div>
        </div>

        {/* Final target link */}
        <div className="text-center mt-10">
          <a
            href={PRODUCT_APP_URL}
            className="inline-flex items-center gap-1 text-sm font-bold text-brand-primary hover:text-brand-accent transition-colors"
          >
            Start Preparing For Both with CGLGrind Simulations
            <ChevronRight className="h-4 w-4" />
          </a>
        </div>

      </div>
    </section>
  );
}

"use client";

import React from "react";
import { Calendar, AlertCircle } from "lucide-react";

export default function ExamCalendar() {
  const events = [
    { phase: "Official CGL Notification Release", t1: "June 2026", status: "Upcoming", details: "SSC website notification published" },
    { phase: "Online Application Window", t1: "June – July 2026", status: "Upcoming", details: "Registration opens on ssc.gov.in" },
    { phase: "Tier-I Computer Based Test (CBT)", t1: "September – October 2026", status: "Scheduled", details: "4 sections, 60 minutes duration" },
    { phase: "Tier-I Scorecards & Cut-offs", t1: "November 2026", status: "Expected", details: "Qualifying status announced" },
    { phase: "Tier-II Mains Examination", t1: "January 2027", status: "Expected", details: "Deciding phase for final postings" },
    { phase: "Final Option Form & Merit List", t1: "March 2027", status: "Expected", details: "Departmental allocations finalized" }
  ];

  return (
    <section className="py-16 bg-brand-slate-50 border-b border-brand-slate-200">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <span className="inline-flex items-center gap-1.5 rounded bg-brand-slate-100 border border-brand-slate-200 px-3 py-1 text-xs font-semibold text-brand-primary uppercase tracking-wider">
            <Calendar className="h-3.5 w-3.5" />
            2026 Timeline
          </span>
          <h2 className="text-3xl font-black tracking-tight text-brand-slate-950 sm:text-4xl">
            SSC CGL 2026 Exam Calendar
          </h2>
          <p className="text-slate-605 text-sm sm:text-base font-medium">
            Keep track of the official dates to align your syllabus completion goals.
          </p>
        </div>

        {/* Timeline Table - Hidden on Mobile (md:block) */}
        <div className="hidden md:block overflow-hidden rounded-2xl border border-brand-slate-200 bg-white shadow-premium-sm">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="bg-brand-slate-950 text-white border-b border-brand-slate-800">
                <th className="py-4 px-6 font-bold uppercase tracking-wider text-sm">Exam Event / Phase</th>
                <th className="py-4 px-6 font-bold uppercase tracking-wider text-sm">Expected Window</th>
                <th className="py-4 px-6 font-bold uppercase tracking-wider text-sm">Status</th>
                <th className="py-4 px-6 font-bold uppercase tracking-wider text-sm">Details</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-slate-100 font-medium">
              {events.map((ev, idx) => (
                <tr key={idx} className="hover:bg-brand-slate-50/50 transition-colors">
                  <td className="py-4 px-6 font-extrabold text-brand-slate-950 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-primary shrink-0"></span>
                    {ev.phase}
                  </td>
                  <td className="py-4 px-6 text-brand-slate-900 font-bold">
                    {ev.t1}
                  </td>
                  <td className="py-4 px-6">
                    <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider border ${
                      ev.status === "Scheduled"
                        ? "bg-indigo-50 text-brand-primary border-indigo-200"
                        : "bg-brand-slate-100 text-slate-500 border-brand-slate-200"
                    }`}>
                      {ev.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-slate-500">
                    {ev.details}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Timeline Stepper List - Displayed ONLY on Mobile (md:hidden) */}
        <div className="block md:hidden space-y-6 relative pl-4 before:absolute before:left-6 before:top-2 before:bottom-2 before:w-0.5 before:bg-brand-slate-200">
          {events.map((ev, idx) => (
            <div key={idx} className="relative flex flex-col gap-1.5 bg-white border border-brand-slate-200 rounded-xl p-4 shadow-premium-sm pl-8">
              {/* Stepper Node Icon */}
              <div className="absolute left-[-10px] top-4 h-5.5 w-5.5 rounded-full bg-white border-2 border-brand-primary flex items-center justify-center font-bold text-[9px] text-brand-primary shadow">
                {idx + 1}
              </div>

              <div className="flex items-center justify-between gap-2">
                <h4 className="font-extrabold text-xs text-brand-slate-955 tracking-tight leading-tight">
                  {ev.phase}
                </h4>
                <span className={`inline-flex items-center rounded px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wider border shrink-0 ${
                  ev.status === "Scheduled"
                    ? "bg-indigo-50 text-brand-primary border-indigo-200"
                    : "bg-brand-slate-500 text-slate-500 border-brand-slate-200"
                }`}>
                  {ev.status}
                </span>
              </div>

              <div className="flex flex-col gap-1 text-xs font-medium leading-normal mt-1">
                <div className="text-brand-primary font-bold">
                  Expected: <span className="text-slate-800">{ev.t1}</span>
                </div>
                <p className="text-slate-500 text-[11px]">
                  {ev.details}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Notice alert */}
        <div className="mt-6 p-4 rounded-xl border border-amber-200 bg-amber-50/50 flex items-start gap-3 text-sm">
          <AlertCircle className="h-5 w-5 text-amber-700 shrink-0 mt-0.5" />
          <div className="text-slate-600 font-medium leading-relaxed">
            <span className="font-bold text-amber-800">Notice:</span> Dates are based on the latest Staff Selection Commission guidelines. The portal simulation keys are actively updated to align with notification revisions.
          </div>
        </div>

      </div>
    </section>
  );
}

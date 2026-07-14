"use client";

import React from "react";
import Navbar, { PRODUCT_APP_URL } from "@/components/Navbar";
import FooterIntercept from "@/components/FooterIntercept";
import { Check, ArrowRight, Award } from "lucide-react";

export default function PricingPage() {
  const plans = [
    {
      name: "Free Trial Plan",
      price: "₹0",
      period: "forever",
      desc: "Perfect for initial baseline metrics and diagnostic benchmarks.",
      features: [
        "5 Full CGL Tier-I Mock Tests",
        "3 CGL Tier-II Mock Tests",
        "Daily GK Bulletins access",
        "Basic score reports",
        "Exam interface"
      ],
      btnText: "Start Free Practice",
      isPopular: false
    },
    {
      name: "CGL Pro Plan",
      price: "₹1,499",
      period: "1-year access",
      desc: "Our most popular selection. Complete coverage of CGL Tier-I & II.",
      features: [
        "All 50+ CGL Tier-I Mock Tests",
        "All 30+ CGL Tier-II Numerical Mocks",
        "100+ Sectional practice quizzes",
        "Re-calibrated PYQs (2021-2025)",
        "Error tracking book",
        "Real-time Percentile benchmarking",
        "Detailed video explanations"
      ],
      btnText: "Get Pro Access",
      isPopular: true
    },
    {
      name: "CGL Ultimate Plan",
      price: "₹2,499",
      period: "2-year access",
      desc: "The professional choice for serious aspirants targeting top ranks.",
      features: [
        "Everything in CGL Pro Plan",
        "Computer Knowledge qualifying focus sets",
        "Data Entry Speed Test emulation packs",
        "Unlimited custom quiz compilations",
        "Personalized mock analysis mentorship",
        "High-priority server speed logs"
      ],
      btnText: "Get Ultimate Access",
      isPopular: false
    }
  ];

  const matrix = [
    { feature: "Simulator Screen Emulation", free: true, pro: true, ultimate: true },
    { feature: "Full Syllabus Tier-I Sets", free: "5 Mocks", pro: "50+ Mocks", ultimate: "50+ Mocks" },
    { feature: "Full Syllabus Tier-II Sets", free: "3 Mocks", pro: "30+ Mocks", ultimate: "30+ Mocks" },
    { feature: "Re-calibrated PYQ sets (2021-2025)", free: false, pro: true, ultimate: true },
    { feature: "Error Book Auto-Compiler", free: false, pro: true, ultimate: true },
    { feature: "Computer Aptitude qualifying sets", free: false, pro: false, ultimate: true },
    { feature: "Rank & Percentile Telemetry", free: "Basic", pro: "Real-time", proHighlight: true, ultimate: "Real-time" }
  ];

  return (
    <div className="min-h-screen bg-white text-brand-slate-900 flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Banner */}
        <section className="bg-brand-slate-950 text-white py-16 relative overflow-hidden border-b border-brand-slate-900">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,#161d2b_0%,#030712_100%)] opacity-80"></div>
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-4 text-center">
            <span className="inline-flex items-center gap-1.5 rounded bg-brand-slate-905 border border-brand-slate-805 px-3 py-1 text-xs font-semibold text-brand-accent mx-auto shadow">
              <Award className="h-4 w-4 text-brand-accent" />
              Transparent Pricing
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              Honest, Transparent Subscriptions
            </h1>
            <p className="text-slate-405 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-medium">
              No hidden fees, no auto-renewing traps. Choose the calibration level you need to bridge your performance gaps.
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-16 bg-white border-b border-brand-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
              {plans.map((plan, idx) => (
                <div 
                  key={idx}
                  className={`relative flex flex-col justify-between rounded-xl border bg-white p-6 shadow-premium-sm hover:shadow-premium-md hover:scale-[1.005] transition-all duration-350 ${
                    plan.isPopular
                      ? "border-brand-primary ring-2 ring-brand-primary/10 shadow-glow-indigo"
                      : "border-brand-slate-200/60"
                  }`}
                >
                  {plan.isPopular && (
                    <span className="absolute -top-3.5 left-6 inline-flex rounded bg-brand-primary px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-white shadow">
                      Most Selected Plan
                    </span>
                  )}

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-black text-brand-slate-950 uppercase tracking-wider">
                        {plan.name}
                      </h3>
                      <p className="text-xs text-slate-500 mt-1">{plan.desc}</p>
                    </div>

                    <div className="flex items-baseline gap-1.5">
                      <span className="text-4xl font-black text-brand-slate-950">{plan.price}</span>
                      <span className="text-xs font-bold text-slate-400">/ {plan.period}</span>
                    </div>

                    <ul className="space-y-2.5 text-xs text-slate-600 border-t border-brand-slate-100 pt-4">
                      {plan.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5">
                          <Check className="h-4 w-4 text-brand-primary mt-0.5 shrink-0" />
                          <span className="font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 mt-6 border-t border-brand-slate-100">
                    <a
                      href={PRODUCT_APP_URL}
                      className={`inline-flex w-full items-center justify-center rounded py-3 text-xs font-bold transition-all uppercase tracking-wider ${
                        plan.isPopular
                          ? "bg-gradient-primary text-white hover:opacity-95 shadow"
                          : "bg-white border border-slate-200 text-slate-800 hover:bg-slate-50"
                      }`}
                    >
                      {plan.btnText}
                      <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Feature Matrix Comparison */}
        <section className="py-16 bg-brand-slate-50">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-black text-brand-slate-950 text-center mb-12 tracking-tight">
              Detailed Feature Matrix Comparison
            </h2>

            <div className="overflow-hidden rounded-xl border border-brand-slate-200 bg-white shadow-premium-sm">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-brand-slate-950 text-slate-100 border-b border-brand-slate-800">
                    <th className="p-4 font-black uppercase tracking-wider">Features & Mocks</th>
                    <th className="p-4 font-black uppercase tracking-wider text-center">Free</th>
                    <th className="p-4 font-black uppercase tracking-wider text-center">Pro</th>
                    <th className="p-4 font-black uppercase tracking-wider text-center">Ultimate</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-brand-slate-200">
                  {matrix.map((row, idx) => (
                    <tr key={idx} className="hover:bg-brand-slate-50/50 transition-colors">
                      <td className="p-4 font-extrabold text-brand-slate-950">{row.feature}</td>
                      
                      {/* Free */}
                      <td className="p-4 text-center font-bold text-slate-500">
                        {typeof row.free === "boolean" ? (
                          row.free ? <Check className="h-4 w-4 text-brand-primary mx-auto" /> : <span className="text-slate-300">—</span>
                        ) : (
                          row.free
                        )}
                      </td>

                      {/* Pro */}
                      <td className="p-4 text-center font-extrabold text-brand-slate-950">
                        {typeof row.pro === "boolean" ? (
                          row.pro ? <Check className="h-4 w-4 text-brand-primary mx-auto" /> : <span className="text-slate-300">—</span>
                        ) : (
                          row.pro
                        )}
                      </td>

                      {/* Ultimate */}
                      <td className="p-4 text-center font-extrabold text-brand-slate-950">
                        {typeof row.ultimate === "boolean" ? (
                          row.ultimate ? <Check className="h-4 w-4 text-brand-primary mx-auto" /> : <span className="text-slate-300">—</span>
                        ) : (
                          row.ultimate
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>

      <FooterIntercept />
    </div>
  );
}

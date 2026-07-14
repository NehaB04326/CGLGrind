"use client";

import React, { useState, useEffect } from "react";
import { Users, BarChart3, Star } from "lucide-react";

export default function StatsSection() {
  const [onlineCount, setOnlineCount] = useState(4892);

  useEffect(() => {
    const interval = setInterval(() => {
      setOnlineCount((prev) => prev + Math.floor(Math.random() * 21) - 10);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    {
      icon: <Users className="h-5 w-5 text-brand-primary" />,
      value: "2,482,109+",
      label: "Mock Tests Attempted",
      desc: "Verified student submission logs"
    },
    {
      icon: <span className="relative flex h-2.5 w-2.5 mt-1.5"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span><span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span></span>,
      value: onlineCount.toLocaleString(),
      label: "Aspirants Online Now",
      desc: "Actively attempting mock tasks"
    },
    {
      icon: <BarChart3 className="h-5 w-5 text-brand-primary" />,
      value: "+18.4%",
      label: "Avg. Score Improvement",
      desc: "Tracked across 30 days of practice"
    },
    {
      icon: <Star className="h-5 w-5 text-brand-primary fill-brand-primary" />,
      value: "4.9 / 5.0",
      label: "Aspirant Rating",
      desc: "Based on 36,000+ verified ratings"
    }
  ];

  return (
    <section className="bg-brand-slate-950 text-white border-y border-brand-slate-900 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-brand-slate-800">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-4 first:border-t-0 first:pt-4 md:first:pt-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-slate-900 mb-3 border border-brand-slate-800 shadow-inner">
                {stat.icon}
              </div>
              <span className="text-2xl sm:text-3xl font-black text-white tracking-tight">{stat.value}</span>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-primary mt-1.5">{stat.label}</span>
              <span className="text-xs text-slate-400 mt-1 max-w-[220px] leading-relaxed font-medium">{stat.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

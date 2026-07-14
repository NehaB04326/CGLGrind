"use client";

import React from "react";
import { Star } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  rank: string;
  stars: number;
  text: string;
  avatarBg: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Rahul Sharma",
    role: "Income Tax Inspector",
    rank: "AIR 48, CGL 2024",
    stars: 5,
    text: "“CGLGrind's sectional mocks and auto-error books completely optimized my score from 135 to 178. The interface emulations let me handle my real test day with zero nerves.”",
    avatarBg: "bg-indigo-100 text-indigo-700"
  },
  {
    name: "Priya Patel",
    role: "ASO in Ministry of External Affairs",
    rank: "AIR 112, CGL 2024",
    stars: 5,
    text: "“The math level in the Tier-II advanced mocks was exactly what I needed. Normal test sites have outdated questions, but CGLGrind calibrates to real current trends.”",
    avatarBg: "bg-teal-100 text-teal-700"
  },
  {
    name: "Amit Verma",
    role: "Excise Inspector",
    rank: "AIR 240, CGL 2024",
    stars: 5,
    text: "“The auto-error tracking compiler saving my custom weak spots saved me weeks of manual logging. I just focused on patching my accuracy gaps.”",
    avatarBg: "bg-purple-100 text-purple-700"
  },
  {
    name: "Sneha Reddy",
    role: "ASO in CSS",
    rank: "AIR 84, CGL 2025",
    stars: 5,
    text: "“The sectional pace locking mimics the real SSC regulations perfectly. It trained my speed so I finished Section I with 5 minutes to spare on the exam day.”",
    avatarBg: "bg-amber-100 text-amber-700"
  },
  {
    name: "Vikram Singh",
    role: "Preventive Officer",
    rank: "AIR 304, CGL 2024",
    stars: 5,
    text: "“Best simulated mocks on the market. If you are serious about MEA or IT Inspector, CGLGrind is the only product you need. Worth every single rupee.”",
    avatarBg: "bg-rose-100 text-rose-700"
  }
];

// Double the list to create a seamless infinite scrolling effect
const marqueeItems = [...testimonials, ...testimonials];

export default function ReviewsSection() {
  return (
    <section className="py-16 bg-white border-b border-brand-slate-200 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
          <span className="inline-flex items-center gap-1.5 rounded bg-brand-slate-100 border border-brand-slate-200 px-3 py-1 text-xs font-semibold text-brand-primary uppercase tracking-wider">
            Student Proof
          </span>
          <h2 className="text-3xl font-black tracking-tight text-brand-slate-950 sm:text-4xl">
            Why Thousands of CGL Aspirants Choose CGLGrind
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-medium">
            Read real stories from candidates who cleared the exam and secured top posts using our simulator.
          </p>
        </div>

        {/* Trust Badges Row */}
        <div className="flex flex-wrap justify-center gap-12 md:gap-24 mb-14 mt-6">
          {/* G2 */}
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-2 mb-1">
              <span className="h-5 w-5 bg-orange-600 rounded-full flex items-center justify-center text-[10px] font-black text-white font-sans shadow-sm">G2</span>
              <span className="font-extrabold text-slate-800 text-sm tracking-wide">G2 Rating</span>
            </div>
            <div className="flex items-baseline mb-0.5">
              <span className="text-3xl font-black text-slate-900 tracking-tight">4.7</span>
              <span className="text-slate-400 text-sm font-medium ml-0.5">/5</span>
            </div>
            <span className="text-slate-400 text-xs font-semibold">(1,240 reviews)</span>
          </div>

          {/* Trustpilot */}
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-2 mb-1">
              <span className="h-5 w-5 bg-emerald-500 rounded flex items-center justify-center text-[12px] font-bold text-white shadow-sm">★</span>
              <span className="font-extrabold text-slate-800 text-sm tracking-wide">Trustpilot</span>
            </div>
            <div className="flex items-baseline mb-0.5">
              <span className="text-3xl font-black text-slate-900 tracking-tight">4.8</span>
              <span className="text-slate-400 text-sm font-medium ml-0.5">/5</span>
            </div>
            <span className="text-slate-400 text-xs font-semibold">(2,450 reviews)</span>
          </div>

          {/* Google */}
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-2 mb-1">
              <span className="h-5 w-5 bg-blue-600 rounded-full flex items-center justify-center text-[10px] font-bold text-white shadow-sm">G</span>
              <span className="font-extrabold text-slate-800 text-sm tracking-wide">Google Reviews</span>
            </div>
            <div className="flex items-baseline mb-0.5">
              <span className="text-3xl font-black text-slate-900 tracking-tight">4.9</span>
              <span className="text-slate-400 text-sm font-medium ml-0.5">/5</span>
            </div>
            <span className="text-slate-400 text-xs font-semibold">(8.5k reviews)</span>
          </div>
        </div>

        {/* Infinite Scrolling Marquee Wrapper */}
        <div className="relative w-full flex items-center overflow-hidden py-4 select-none">
          {/* Gradients to mask marquee edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          {/* Marquee list */}
          <div className="flex gap-6 animate-marquee w-max hover:[animation-play-state:paused]">
            {marqueeItems.map((item, idx) => (
              <div 
                key={idx}
                className="w-[360px] flex-shrink-0 bg-white border border-brand-slate-200 rounded-2xl p-6 shadow-premium-sm hover:shadow-premium-lg hover:-translate-y-1.5 hover:border-brand-primary transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Rating Stars */}
                  <div className="flex gap-0.5 text-amber-400">
                    {[...Array(item.stars)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  {/* Testimonial Text */}
                  <p className="text-sm sm:text-base text-slate-655 leading-relaxed font-medium italic min-h-[90px]">
                    {item.text}
                  </p>
                </div>

                {/* Candidate Info */}
                <div className="flex items-center gap-3 pt-4 border-t border-brand-slate-100 mt-4">
                  <div className={`h-10 w-10 rounded-full flex items-center justify-center font-bold text-sm shrink-0 ${item.avatarBg}`}>
                    {item.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-black text-brand-slate-955">{item.name}</span>
                    <span className="text-xs text-slate-400 font-bold">{item.role} ({item.rank})</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

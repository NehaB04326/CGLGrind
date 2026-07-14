"use client";

import React, { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";

// The product redirection URL
export const PRODUCT_APP_URL = "https://app.prepgrind.com/register";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/95 backdrop-blur-md text-slate-800 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative flex h-9 w-9 items-center justify-center rounded bg-gradient-to-br from-brand-slate-900 to-brand-slate-950 border border-white/[0.08] shadow-md font-serif text-xl font-bold tracking-tight text-white">
                C
                <div className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-sm bg-brand-primary font-sans text-[10px] font-black text-white shadow">
                  G
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-sans text-base font-black tracking-tight text-slate-900 group-hover:text-brand-primary transition-colors duration-200">
                  CGL<span className="text-brand-primary font-medium">Grind</span>
                </span>
                <span className="font-sans text-[8px] font-bold tracking-widest text-slate-400 uppercase">
                  SSC CGL EXAM PREP
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1.5">
            {/* Exams Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("exams")}
                onMouseEnter={() => setActiveDropdown("exams")}
                className="flex items-center gap-1 px-3.5 py-1.5 text-[15px] font-bold text-slate-600 hover:text-brand-primary hover:bg-slate-50 transition-all duration-150 rounded-md"
              >
                Exams
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === "exams" ? "rotate-180" : ""}`} />
              </button>

              {activeDropdown === "exams" && (
                <div 
                  className="absolute left-0 mt-2 w-64 origin-top-left rounded-lg border border-slate-200 bg-white p-2.5 shadow-premium-lg text-slate-900 animate-slide-in"
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="grid gap-1">
                    <Link
                      href="/exams/tier-1"
                      onClick={handleLinkClick}
                      className="group flex flex-col gap-0.5 rounded-md p-2 hover:bg-slate-50 transition-colors"
                    >
                      <span className="text-xs font-black text-brand-primary group-hover:text-brand-accent">SSC CGL Tier-I Mock Exams</span>
                      <span className="text-[10px] text-slate-500 font-medium">Exam Pattern: Math, Reasoning, English, GK</span>
                    </Link>
                    <Link
                      href="/exams/tier-2"
                      onClick={handleLinkClick}
                      className="group flex flex-col gap-0.5 rounded-md p-2 hover:bg-slate-50 transition-colors"
                    >
                      <span className="text-xs font-black text-slate-900 group-hover:text-brand-primary">SSC CGL Tier-II Advanced</span>
                      <span className="text-[10px] text-slate-500 font-medium">High-difficulty Mathematical & Reasoning sets</span>
                    </Link>
                    <Link
                      href="/exams/sectional"
                      onClick={handleLinkClick}
                      className="group flex flex-col gap-0.5 rounded-md p-2 hover:bg-slate-50 transition-colors"
                    >
                      <span className="text-xs font-black text-slate-900 group-hover:text-brand-primary">Sectional Practice Quizzes</span>
                      <span className="text-[10px] text-slate-500 font-medium">Topic-wise pace locking and diagnostics</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Live Tests */}
            <Link
              href="/live-tests"
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-[15px] font-bold text-slate-600 hover:text-brand-primary hover:bg-slate-50 transition-all duration-150 rounded-md"
            >
              <span>Live Tests</span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-red-50 px-1.5 py-0.5 text-[9px] font-bold text-red-500 border border-red-200">
                <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-sonar"></span>
                LIVE
              </span>
            </Link>

            {/* Previous Year Papers Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("pyq")}
                onMouseEnter={() => setActiveDropdown("pyq")}
                className="flex items-center gap-1 px-3.5 py-1.5 text-[15px] font-bold text-slate-600 hover:text-brand-primary hover:bg-slate-50 transition-all duration-150 rounded-md"
              >
                Previous Year Papers
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === "pyq" ? "rotate-180" : ""}`} />
              </button>

              {activeDropdown === "pyq" && (
                <div 
                  className="absolute left-0 mt-2 w-56 origin-top-left rounded-lg border border-slate-200 bg-white p-2 shadow-premium-lg text-slate-900 animate-slide-in"
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="flex flex-col gap-0.5">
                    <Link
                      href="/previous-year-papers"
                      onClick={handleLinkClick}
                      className="flex items-center justify-between rounded-md px-2.5 py-2 text-[10px] font-black text-brand-primary hover:bg-slate-50 transition-colors border-b border-slate-100"
                    >
                      <span>All Archives (2021-2025)</span>
                    </Link>
                    {[2025, 2024, 2023, 2022, 2021].map((year) => (
                      <Link
                        key={year}
                        href={`/previous-year-papers?year=${year}`}
                        onClick={handleLinkClick}
                        className="flex items-center justify-between rounded-md px-2.5 py-1.5 text-[10px] text-slate-600 hover:bg-slate-50 hover:text-brand-primary transition-colors"
                      >
                        <span>CGL PYQ {year}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Current Affairs */}
            <Link
              href="/current-affairs"
              className="px-3.5 py-1.5 text-[15px] font-bold text-slate-600 hover:text-brand-primary hover:bg-slate-50 transition-all duration-150 rounded-md"
            >
              Current Affairs
            </Link>

            {/* Quiz Practice */}
            <Link
              href="/quiz-practice"
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-[15px] font-bold text-slate-600 hover:text-brand-primary hover:bg-slate-50 transition-all duration-150 rounded-md"
            >
              <span>Quiz Practice</span>
              <span className="inline-flex items-center rounded-full bg-purple-50 px-1.5 py-0.5 text-[9px] font-bold text-brand-accent border border-purple-200 tracking-wider">
                NEW
              </span>
            </Link>

            {/* Pricing */}
            <Link
              href="/pricing"
              className="px-3.5 py-1.5 text-[15px] font-bold text-slate-600 hover:text-brand-primary hover:bg-slate-50 transition-all duration-150 rounded-md"
            >
              Pricing
            </Link>
          </nav>

          {/* CTA Section */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={PRODUCT_APP_URL}
              className="text-xs font-bold text-slate-500 hover:text-brand-slate-900 transition-colors"
            >
              Sign In
            </a>
            <a
              href={PRODUCT_APP_URL}
              className="inline-flex items-center justify-center rounded bg-gradient-primary px-4.5 py-2 text-xs font-bold text-white shadow-premium-sm hover:opacity-95 active:scale-[0.99] transition-all"
            >
              Register Free
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center rounded-md p-1.5 text-slate-600 hover:bg-slate-100 focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel - Light Theme */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-4 shadow-inner animate-slide-in">
          <nav className="flex flex-col gap-2">
            <div className="border-b border-slate-100 pb-2 mb-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-3">Exams</span>
              <div className="mt-1 pl-3 space-y-1">
                <Link href="/exams/tier-1" onClick={handleLinkClick} className="block py-1 text-xs text-brand-primary font-bold">CGL Tier-I Mock Exams</Link>
                <Link href="/exams/tier-2" onClick={handleLinkClick} className="block py-1 text-xs text-slate-700">CGL Tier-II Advanced</Link>
                <Link href="/exams/sectional" onClick={handleLinkClick} className="block py-1 text-xs text-slate-700">Sectional Practice Quizzes</Link>
              </div>
            </div>

            <Link
              href="/live-tests"
              onClick={handleLinkClick}
              className="flex items-center justify-between px-3 py-1.5 text-sm font-bold text-slate-700 hover:text-brand-primary rounded-md hover:bg-slate-50"
            >
              <span>Live Tests</span>
              <span className="inline-flex items-center gap-1 rounded-full bg-red-50 px-2 py-0.5 text-[9px] font-bold text-red-500 border border-red-200">
                <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-sonar"></span>
                LIVE
              </span>
            </Link>

            <div className="border-b border-slate-100 pb-2 mb-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-3">Previous Year Papers</span>
              <div className="mt-1 pl-3 grid grid-cols-2 gap-1">
                <Link href="/previous-year-papers" onClick={handleLinkClick} className="col-span-2 py-1 text-xs text-brand-primary font-bold">All Papers (2021-2025)</Link>
                {[2025, 2024, 2023, 2022, 2021].map((year) => (
                  <Link key={year} href={`/previous-year-papers?year=${year}`} onClick={handleLinkClick} className="py-1 text-xs text-slate-700">
                    CGL {year}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/current-affairs"
              onClick={handleLinkClick}
              className="px-3 py-1.5 text-sm font-bold text-slate-700 hover:text-brand-primary rounded-md hover:bg-slate-50"
            >
              Current Affairs
            </Link>

            <Link
              href="/quiz-practice"
              onClick={handleLinkClick}
              className="flex items-center justify-between px-3 py-1.5 text-sm font-bold text-slate-700 hover:text-brand-primary rounded-md hover:bg-slate-50"
            >
              <span>Quiz Practice</span>
              <span className="inline-flex items-center rounded-full bg-purple-50 px-2 py-0.5 text-[9px] font-bold text-brand-accent border border-purple-200">
                NEW
              </span>
            </Link>

            <Link
              href="/pricing"
              onClick={handleLinkClick}
              className="px-3 py-1.5 text-sm font-bold text-slate-700 hover:text-brand-primary rounded-md hover:bg-slate-50"
            >
              Pricing
            </Link>
          </nav>
          <div className="flex flex-col gap-2 pt-2 border-t border-slate-100">
            <a
              href={PRODUCT_APP_URL}
              className="flex h-10 items-center justify-center rounded border border-slate-200 text-sm font-bold text-slate-750 hover:bg-slate-50"
            >
              Sign In
            </a>
            <a
              href={PRODUCT_APP_URL}
              className="flex h-10 items-center justify-center rounded bg-gradient-primary text-sm font-bold text-white shadow"
            >
              Register Free
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

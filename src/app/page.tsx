"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import SyllabusExplorer from "@/components/SyllabusExplorer";
import TestGrid from "@/components/TestGrid";
import CompareSection from "@/components/CompareSection";
import ExamCalendar from "@/components/ExamCalendar";
import CutoffsSection from "@/components/CutoffsSection";
import MethodologyEngine from "@/components/MethodologyEngine";
import ReviewsSection from "@/components/ReviewsSection";
import FaqSection from "@/components/FaqSection";
import FooterIntercept from "@/components/FooterIntercept";
import TCSExamSimulator from "@/components/TCSExamSimulator";
import SimulatorPreview from "@/components/SimulatorPreview";

// Root component level global constant variable
export const PRODUCT_APP_URL = "https://app.prepgrind.com/register";

export default function Home() {
  const [isSimulatorOpen, setIsSimulatorOpen] = useState(false);

  const handleStartMock = () => {
    setIsSimulatorOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-brand-slate-900 flex flex-col">
      {/* Premium Sticky Header */}
      <Navbar />

      <main className="flex-grow">
        {/* Split Hero with Countdown */}
        <HeroSection onStartMock={handleStartMock} />

        {/* Live Platforms Metrics Banner */}
        <StatsSection />

        {/* CGL Syllabus explorer tab block */}
        <SyllabusExplorer />

        {/* 3-Column Mock Packages Grid */}
        <TestGrid onStartMock={handleStartMock} />

        {/* Live Graphical Preview of Simulator - Repositioned Mid-Page */}
        <SimulatorPreview onStartMock={handleStartMock} />

        {/* ASO vs Inspector Career parameter comparative grid */}
        <CompareSection />

        {/* CGL 2026 Exam event calendar timelines */}
        <ExamCalendar />

        {/* CGL Previous Year Cut-offs tab logs */}
        <CutoffsSection />

        {/* 4-Column Simulation engine details */}
        <MethodologyEngine />

        {/* Dynamic Reviews Marquee */}
        <ReviewsSection />

        {/* Clickable CGL exam accordion FAQs */}
        <FaqSection />
      </main>

      {/* Differentiated Footer Urgency & Sitemap Links */}
      <FooterIntercept />

      {/* Exam Simulator Modal Overlay */}
      <TCSExamSimulator isOpen={isSimulatorOpen} onClose={() => setIsSimulatorOpen(false)} />
    </div>
  );
}

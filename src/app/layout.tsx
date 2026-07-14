import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CGLGrind | Elite SSC CGL Test Preparation & Exam Simulator",
  description: "The professional choice for SSC CGL Tier-I and Tier-II aspirants. Practice using our exact exam interface emulator with pace locking and real percentile analytics.",
  keywords: "SSC CGL, SSC CGL Mocks, Pattern Simulator, CGL Tier 1, CGL Tier 2, Previous Year Papers, CGLGrind, CGL Mocks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-brand-slate-50 text-brand-slate-900 selection:bg-brand-primary selection:text-white">
        {children}
      </body>
    </html>
  );
}

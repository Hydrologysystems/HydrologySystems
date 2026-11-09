/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { 
  ArrowLeft, 
  CheckCircle2, 
  Check,
  AlertTriangle, 
  ShieldCheck, 
  Cpu, 
  HelpCircle, 
  Phone, 
  Calculator, 
  ArrowRight,
  Sliders,
  Share2,
  RefreshCw,
  Plus,
  Minus
} from "lucide-react";
import { APPLICATION_PAGES, ApplicationPageData } from "../data/applicationPagesData";
import { AgriculturePageView } from "./AgriculturePageView";

export type ApplicationSlug = "drilling" | "food-beverage" | "agriculture" | "general-industrial" | "refineries" | "cooling-towers" | "wastewater";

interface ApplicationPageViewProps {
  slug: ApplicationSlug;
  onBack: () => void;
  onNavigate: (slug: ApplicationSlug) => void;
  onBookCallClick: () => void;
  onCalculatorClick: () => void;
}

export default function ApplicationPageView({
  slug,
  onBack,
  onNavigate,
  onBookCallClick,
  onCalculatorClick,
}: ApplicationPageViewProps) {
  if (slug === "agriculture") {
    return (
      <AgriculturePageView
        slug={slug}
        onBack={onBack}
        onNavigate={onNavigate}
        onBookCallClick={onBookCallClick}
        onCalculatorClick={onCalculatorClick}
      />
    );
  }

  const data: ApplicationPageData = APPLICATION_PAGES[slug] || APPLICATION_PAGES["drilling"];
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    // Update document title for this specific application view
    const originalTitle = document.title;
    document.title = `${data.title} | Hydrology Systems Industrial Applications`;
    return () => {
      document.title = originalTitle;
    };
  }, [slug, data.title]);

  const allSlugs: ApplicationSlug[] = [
    "refineries",
    "drilling",
    "food-beverage",
    "agriculture",
    "cooling-towers",
    "wastewater"
  ];

  const scrollToProsAndCons = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    const el = document.getElementById("industry-pros-and-cons");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Render highlighted headline matching the reference design while strictly preserving text content
  const renderHighlightedHeadline = (headline: string) => {
    if (headline.includes(" for ")) {
      const [beforeFor, afterFor] = headline.split(" for ");
      if (afterFor && afterFor.includes(" & ")) {
        const [highlightPart, endPart] = afterFor.split(" & ");
        return (
          <>
            <span className="block sm:inline">{beforeFor} for </span>
            <span className="text-[#0066FF] block sm:inline">{highlightPart} &amp; </span>
            <span className="block sm:inline">{endPart}</span>
          </>
        );
      }
      return (
        <>
          <span>{beforeFor} for </span>
          <span className="text-[#0066FF]">{afterFor}</span>
        </>
      );
    }
    return headline;
  };

  const otherApplications = allSlugs
    .filter((s) => s !== slug)
    .map((s, idx) => ({
      slug: s,
      num: `0${idx + 1}`,
      badge: APPLICATION_PAGES[s].badge.split("&")[0].trim(),
      data: APPLICATION_PAGES[s],
      excerpt: APPLICATION_PAGES[s].metaDescription,
    }));

  return (
    <div className="min-h-screen bg-[#F4F6FA] text-[#101828] font-sans pt-16 sm:pt-20 md:pt-24 pb-0">
      
      {/* Sticky Top Sub-Nav */}
      <div 
        id="application-breadcrumb-bar"
        className="bg-white/95 backdrop-blur-md border-b border-[#DCE2EB] sticky top-[56px] sm:top-[60px] md:top-[68px] z-40 shadow-xs transition-all"
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between gap-2">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-1.5 sm:gap-2 text-xs font-mono font-bold tracking-wider uppercase text-[#101828] hover:text-[#0066FF] bg-white hover:bg-slate-50 px-2.5 sm:px-3 py-1.5 rounded-lg border border-[#DCE2EB] hover:border-[#0066FF]/40 transition-all cursor-pointer shrink-0"
            title="Return to Main Page Applications"
          >
            <ArrowLeft className="w-4 h-4 text-[#0066FF]" />
            <span className="hidden sm:inline">BACK TO MAIN PAGE</span>
            <span className="sm:hidden text-[11px]">BACK</span>
          </button>

          {/* Quick tab switcher between applications */}
          <div className="hidden md:flex items-center gap-1.5 lg:gap-2 overflow-x-auto">
            {allSlugs.map((s) => {
              const item = APPLICATION_PAGES[s];
              const isActive = s === slug;
              return (
                <button
                  key={s}
                  onClick={() => onNavigate(s)}
                  className={`px-2.5 lg:px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    isActive
                      ? "bg-[#0066FF] text-white shadow-xs font-bold"
                      : "text-[#667085] hover:text-[#0066FF] hover:bg-slate-100"
                  }`}
                >
                  {item.title.split("&")[0].trim()}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            <button
              onClick={onCalculatorClick}
              className="inline-flex items-center gap-1 px-2.5 sm:px-3.5 py-1.5 rounded-full border border-[#0066FF] text-[#0066FF] hover:bg-[#0066FF]/10 text-[11px] sm:text-xs font-bold font-sans cursor-pointer transition-colors"
            >
              <Calculator className="w-3.5 h-3.5" />
              <span className="hidden xs:inline sm:inline">ROI</span>
              <span className="hidden sm:inline"> Calculator</span>
            </button>
            <button
              onClick={onBookCallClick}
              className="inline-flex items-center gap-1 px-3 sm:px-4 py-1.5 rounded-full bg-[#0066FF] hover:bg-[#0052cc] text-white text-[11px] sm:text-xs font-bold font-sans cursor-pointer shadow-xs transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Talk to an Engineer</span>
              <span className="sm:hidden">Consult</span>
            </button>
          </div>
        </div>

        {/* Mobile Horizontal Quick-Category Scroller */}
        <div className="md:hidden border-t border-[#DCE2EB] px-3 py-1.5 flex items-center gap-1.5 overflow-x-auto no-scrollbar bg-[#F4F6FA]/70">
          <span className="text-[10px] font-mono text-[#667085] font-bold uppercase tracking-wider shrink-0 mr-1">
            SECTOR:
          </span>
          {allSlugs.map((s) => {
            const item = APPLICATION_PAGES[s];
            const isActive = s === slug;
            return (
              <button
                key={s}
                onClick={() => onNavigate(s)}
                className={`px-2.5 py-1 rounded-full text-[11px] font-medium whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#0066FF] text-white font-bold shadow-xs"
                    : "bg-white border border-[#DCE2EB] text-[#101828] hover:text-[#0066FF] hover:border-[#0066FF]/40"
                }`}
              >
                {item.title.split("&")[0].trim()}
              </button>
            );
          })}
        </div>
      </div>

      {/* Hero Header Section */}
      <section className="relative py-14 sm:py-20 md:py-24 bg-[#080B12] text-white overflow-hidden border-b border-white/10">
        {/* Background Image Overlay with Industrial Blend */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
          <img
            src={data.bgImage}
            alt={data.title}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="w-full h-full object-cover object-right md:object-center brightness-[0.85] contrast-[1.1] saturate-[1.15]"
          />
          {/* Seamless dark overlay from left: deep black on left for high-contrast legibility, revealing rich image on right */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#080B12] via-[#080B12]/85 via-40% md:via-[#080B12]/65 md:via-50% to-[#080B12]/20" />
          {/* Bottom soft transition into next section */}
          <div className="absolute inset-x-0 bottom-0 h-28 sm:h-36 bg-gradient-to-t from-[#080B12] via-[#080B12]/60 to-transparent" />
          {/* Subtle top edge blend */}
          <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-[#080B12]/70 to-transparent" />
          {/* Ambient royal blue glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,102,255,0.22),transparent_70%)]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-left">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#0066FF]/15 border border-[#0066FF]/35 text-[#0066FF] font-mono text-xs sm:text-[13px] font-bold tracking-widest uppercase mb-4 backdrop-blur-md max-w-full"
          >
            <span className="w-2 h-2 rounded-full bg-[#0066FF] ring-2 ring-[#0066FF]/40 animate-pulse shrink-0" />
            <span className="truncate">{data.badge}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-4xl md:text-5xl lg:text-[54px] font-display font-extrabold text-white tracking-tight max-w-4xl leading-[1.15] mb-4 sm:mb-5"
          >
            {renderHighlightedHeadline(data.heroHeadline)}
          </motion.h1>

          {/* Electric royal blue accent bar */}
          <div className="w-16 h-1 bg-[#0066FF] rounded-full mb-6" />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-slate-200/95 max-w-3xl leading-relaxed mb-8 font-normal"
          >
            {data.overview}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-3 sm:gap-4"
          >
            <button
              onClick={onBookCallClick}
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-full bg-[#0066FF] hover:bg-[#0052cc] text-white font-bold text-xs sm:text-sm tracking-wider uppercase shadow-lg shadow-[#0066FF]/30 hover:shadow-[#0066FF]/50 hover:-translate-y-0.5 active:translate-y-0 border border-white/20 transition-all cursor-pointer"
            >
              <span>Discuss Your Application</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onCalculatorClick}
              className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm tracking-wider uppercase border border-slate-700 hover:border-slate-500 backdrop-blur-md hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
            >
              <Calculator className="w-4 h-4 text-[#0066FF]" />
              <span>Calculate Plant OPEX Savings</span>
            </button>
            <button
              onClick={scrollToProsAndCons}
              className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm tracking-wider uppercase border border-slate-700 hover:border-slate-500 backdrop-blur-md hover:-translate-y-0.5 active:translate-y-0 transition-all text-center cursor-pointer"
            >
              <CheckCircle2 className="w-4 h-4 text-[#0066FF] shrink-0" />
              <span>Pros &amp; Cons Analysis</span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* 4 Technical Highlights Metric Cards */}
      <section className="relative z-20 py-8 sm:py-10 lg:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {data.technicalHighlights.map((highlight, idx) => {
            let IconComponent = Sliders;
            if (idx === 1) IconComponent = Share2;
            if (idx === 2) IconComponent = Cpu;
            if (idx === 3) IconComponent = ShieldCheck;

            return (
              <div
                key={idx}
                className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-[#DCE2EB] shadow-lg shadow-slate-900/5 flex items-center gap-4 transition-transform hover:-translate-y-0.5 text-left"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0066FF]/10 text-[#0066FF] flex items-center justify-center shrink-0 border border-[#0066FF]/20">
                  <IconComponent className="w-6 h-6 text-[#0066FF]" />
                </div>
                <div>
                  <div className="text-[10px] font-mono font-bold tracking-widest text-[#667085] uppercase">
                    {highlight.label}
                  </div>
                  <div className="text-base sm:text-lg font-extrabold text-[#101828] leading-snug mt-0.5">
                    {highlight.value}
                  </div>
                  <div className="text-xs text-[#667085] mt-0.5">
                    {highlight.detail}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Operational Challenges & Engineered Advantages (Two-Column Comparison Layout) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-16 sm:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch text-left">
          
          {/* Left Panel: Current Operational Challenges (Dark Navy / Charcoal Panel) */}
          <div className="bg-[#080B12] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 text-white relative overflow-hidden flex flex-col justify-between border border-white/10 shadow-xl">
            <div className="absolute inset-0 z-0">
              <img
                src={data.bgImage}
                alt={data.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover opacity-10 mix-blend-luminosity"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#080B12]/95 via-[#080B12] to-[#080B12]" />
            </div>

            <div className="relative z-10">
              {/* Header */}
              <div className="inline-flex items-center gap-2 text-red-500 text-xs font-mono font-bold tracking-wider uppercase mb-3">
                <AlertTriangle className="w-4 h-4 text-red-500 shrink-0" />
                <span>CURRENT OPERATIONAL CHALLENGES</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white leading-tight mb-3">
                The Burdens of Delivered Bulk Caustic in {data.title.split("&")[0].trim()}
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 sm:mb-8">
                Conventional chemical delivery introduces hazardous logistics, supply chain volatility, and acute personnel chemical exposure risks.
              </p>

              {/* Numbered Challenges 1, 2, 3 */}
              <div className="space-y-5 sm:space-y-6">
                {data.challenges.map((challenge, idx) => (
                  <div key={idx} className="flex items-start gap-3.5 sm:gap-4">
                    <div className="w-7 h-7 rounded-full bg-red-500/20 text-red-400 border border-red-500/30 flex items-center justify-center shrink-0 mt-0.5 font-mono font-bold text-xs">
                      {idx + 1}
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-white mb-1">
                        {challenge.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {challenge.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Tag */}
            <div className="relative z-10 mt-8 pt-6 border-t border-white/10 flex items-center gap-2 text-xs font-mono text-red-500 font-bold">
              <AlertTriangle className="w-4 h-4 text-red-500 shrink-0" />
              <span>DELIVERY BOTTLENECK &amp; HAZARDOUS EXPOSURE RISKS</span>
            </div>
          </div>

          {/* Right Panel: Engineered On-Site Advantage (Designed matching user reference image) */}
          <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-900 shadow-xl overflow-hidden flex flex-col justify-between">
            {/* Top Blue Header Bar */}
            <div className="bg-[#0066FF] py-3 px-4 text-center w-full">
              <span className="text-white font-mono font-bold text-xs sm:text-sm tracking-widest uppercase">
                ENGINEERED ON-SITE ADVANTAGE
              </span>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-8 md:p-10 flex-1 flex flex-col justify-start">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#101828] leading-tight mb-3">
                Automated Skid Generation &amp; Continuous pH Stabilization
              </h2>
              <p className="text-[#0066FF] text-xs sm:text-sm md:text-[14px] leading-relaxed mb-6 font-normal">
                Autonomous on-site electrochemical synthesis provides pure, micro-dispersed alkaline dosing on demand without hazardous tanker offloading.
              </p>

              {/* Solutions List */}
              <div className="space-y-5 sm:space-y-6">
                {data.solutions.map((solution, idx) => (
                  <div key={idx} className="space-y-1 text-left">
                    <h3 className="text-sm sm:text-base font-bold text-[#101828]">
                      {solution.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#0066FF] leading-relaxed font-normal">
                      {solution.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Blue Footer Bar */}
            <div className="bg-[#0066FF] py-3 px-4 text-center w-full mt-auto">
              <span className="text-white font-mono font-bold text-[11px] sm:text-xs tracking-widest uppercase">
                ENGINEERED FOR CONTINUOUS AUTONOMOUS FACILITY TRIM
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* Dramatic Pros & Cons Split Section (High-Contrast Split) */}
      {data.prosAndCons && (
        <section 
          id="industry-pros-and-cons" 
          className="relative py-16 sm:py-20 lg:py-24 bg-[#080B12] text-white overflow-hidden border-t border-white/10"
        >
          {/* Subtle industrial background image overlay on right */}
          <div className="absolute top-0 right-0 bottom-0 w-full md:w-3/5 lg:w-[55%] z-0 overflow-hidden pointer-events-none select-none">
            <img
              src={data.bgImage}
              alt={data.title}
              className="w-full h-full object-cover object-right md:object-[center_right] opacity-40 sm:opacity-50 contrast-[1.05] brightness-90"
              loading="lazy"
              decoding="async"
            />
            {/* Left blend into deep navy background */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#080B12] via-[#080B12]/85 via-25% md:via-transparent to-transparent" />
            {/* Bottom blend */}
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#080B12] via-[#080B12]/80 to-transparent" />
            {/* Top blend */}
            <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#080B12]/60 to-transparent" />
          </div>

          {/* Ambient radial glow */}
          <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_left,rgba(0,102,255,0.18),transparent_65%)]" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
            
            {/* Section Header (Center-aligned) */}
            <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">
              <div className="text-[#0066FF] font-mono text-xs sm:text-[13px] font-bold tracking-widest uppercase mb-2">
                OBJECTIVE ENGINEERING COMPARISON
              </div>
              <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-extrabold text-white tracking-tight leading-tight mb-3">
                Pros &amp; <span className="text-red-500">Cons</span> of Using Hydrology Systems in {data.title.split("&")[0].trim()}
              </h2>
              <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
                An honest, balanced evaluation of operational benefits versus site prerequisites and implementation considerations for plant managers and operating engineers.
              </p>
            </div>

            {/* Side-by-Side Unified Card Frame: Left (White) & Right (Dark Charcoal) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 shadow-2xl items-stretch">
              
              {/* Left Column: Advantages Panel (Pure White) */}
              <div className="bg-white text-slate-900 p-6 sm:p-8 md:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#DCE2EB]">
                <div>
                  {/* Header Row */}
                  <div className="text-[11px] font-mono font-bold text-[#0066FF] uppercase tracking-wider mb-2">
                    THE ADVANTAGES
                  </div>
                  <div className="flex items-center justify-between gap-4 mb-6 sm:mb-8 pb-4 border-b border-[#DCE2EB]">
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-full border-[3px] border-[#0066FF] flex items-center justify-center shrink-0">
                        <div className="w-2 h-2 rounded-full bg-[#0066FF]" />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-[#101828] tracking-tight">
                        Pros &amp; Operational Gains
                      </h3>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-[#0066FF]/10 text-[#0066FF] border border-[#0066FF]/20 text-xs font-semibold shrink-0">
                      {data.prosAndCons.pros.length} Key Pros
                    </span>
                  </div>

                  {/* Benefit Entries */}
                  <div className="space-y-6">
                    {data.prosAndCons.pros.map((pro, idx) => (
                      <div key={idx} className="flex items-start gap-3.5">
                        <div className="w-5 h-5 rounded-full bg-[#0066FF] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                            <h4 className="text-sm sm:text-[15px] font-bold text-[#101828]">
                              {pro.title}
                            </h4>
                            {pro.tag && (
                              <span className="text-[9.5px] font-mono uppercase px-2 py-0.5 rounded bg-[#0066FF]/10 text-[#0066FF] border border-[#0066FF]/20 font-bold tracking-wider">
                                {pro.tag}
                              </span>
                            )}
                          </div>
                          <p className="text-xs sm:text-[13px] text-[#667085] leading-relaxed font-sans">
                            {pro.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Note */}
                <div className="mt-8 pt-4 border-t border-[#DCE2EB] text-[11px] text-[#0066FF] font-mono font-semibold">
                  ENGINEERED WITH CLOSED-LOOP CATALYTIC HYDROXIDE FEEDBACK
                </div>
              </div>

              {/* Right Column: Trade-offs Panel (Dark Charcoal/Navy) */}
              <div className="bg-[#0c121e] text-white p-6 sm:p-8 md:p-10 flex flex-col justify-between">
                <div>
                  {/* Header Row */}
                  <div className="text-[11px] font-mono font-bold text-red-500 uppercase tracking-wider mb-2">
                    THE TRADE-OFFS
                  </div>
                  <div className="flex items-center justify-between gap-4 mb-6 sm:mb-8 pb-4 border-b border-white/10">
                    <div className="flex items-center gap-3">
                      <AlertTriangle className="w-7 h-7 text-red-500 shrink-0" />
                      <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                        <span className="text-red-500">Cons</span> &amp; Site Prerequisites
                      </h3>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-red-500/15 text-red-400 border border-red-500/30 text-xs font-semibold shrink-0">
                      {data.prosAndCons.cons.length} Considerations
                    </span>
                  </div>

                  {/* Consideration Entries */}
                  <div className="space-y-6">
                    {data.prosAndCons.cons.map((con, idx) => (
                      <div key={idx} className="flex items-start gap-3.5">
                        <div className="w-5 h-5 rounded-full bg-red-500/15 border border-red-500/30 text-red-400 flex items-center justify-center shrink-0 mt-0.5">
                          {idx === 0 || idx === 1 ? (
                            <RefreshCw className="w-2.5 h-2.5 text-red-400" />
                          ) : (
                            <AlertTriangle className="w-2.5 h-2.5 text-red-400" />
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                            <h4 className="text-sm sm:text-[15px] font-bold text-white">
                              {con.title}
                            </h4>
                            {con.tag && (
                              <span className="text-[9.5px] font-mono uppercase px-2 py-0.5 rounded bg-red-500/15 text-red-400 border border-red-500/30 font-bold tracking-wider">
                                {con.tag}
                              </span>
                            )}
                          </div>
                          <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed font-sans">
                            {con.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Note */}
                <div className="mt-8 pt-4 border-t border-white/10 text-[11px] text-red-400 font-mono font-semibold">
                  PREREQUISITES RESOLVED DURING SITE PLANNING &amp; ENGINEERING AUDIT
                </div>
              </div>

            </div>

            {/* Bottom Decision Summary Bar */}
            <div className="mt-8 sm:mt-10 p-5 sm:p-7 rounded-2xl bg-[#080B12] border border-white/10 shadow-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-4 sm:gap-6">
              <div className="space-y-1">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0066FF] flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#0066FF]" />
                  ENGINEERING VERDICT FOR {data.title.toUpperCase()}
                </span>
                <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
                  For operations requiring continuous, high-volume alkaline control, the minor requirement of a 480V utility drop and footprint is substantially outweighed by 60%–75% chemical OPEX savings, zero tanker logistics, and total elimination of personnel splash liabilities.
                </p>
              </div>
              <button
                onClick={onCalculatorClick}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0066FF] hover:bg-[#0052cc] text-white font-sans text-xs sm:text-sm font-bold shadow-xs hover:shadow-[#0066FF]/30 transition-colors shrink-0 cursor-pointer"
              >
                <Calculator className="w-4 h-4" />
                <span>Calculate Your Payback</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </section>
      )}

      {/* Frequently Asked Questions (12-Column Editorial Magazine Accordion) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* FAQ Intro (Left) */}
          <div className="lg:col-span-5">
            <div className="text-[#0066FF] font-mono text-[11px] font-bold tracking-widest uppercase mb-1.5">
              APPLICATION QUESTIONS
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#101828] leading-tight mb-3">
              Frequently Asked Questions for {data.title}
            </h2>
            <p className="text-[#667085] text-sm leading-relaxed">
              Clear answers to common technical, operational, and implementation questions.
            </p>
          </div>

          {/* Accordion List (Right) */}
          <div className="lg:col-span-7 space-y-3">
            {data.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-[#DCE2EB] shadow-xs overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-bold text-[#101828] text-sm sm:text-base hover:text-[#0066FF] transition-colors cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <span className="text-[#0066FF] font-mono text-xl shrink-0">
                      {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#667085] leading-relaxed border-t border-[#DCE2EB] bg-[#F4F6FA]/50">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Explore Other Industrial Deployments (Dark Navy Section) */}
      <section className="relative bg-[#070B14] text-white overflow-hidden py-16 sm:py-20 lg:py-24 border-t border-slate-800 text-left">
        {/* Subtle Industrial Background Overlay in Top Right */}
        <div className="absolute top-0 right-0 w-full md:w-3/5 lg:w-1/2 h-80 md:h-full z-0 overflow-hidden pointer-events-none select-none opacity-20 md:opacity-30 mix-blend-screen">
          <img
            src={data.bgImage}
            alt=""
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover object-right-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#070B14] via-[#070B14]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#070B14]/50 to-[#070B14]" />
        </div>

        {/* Ambient Glow */}
        <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_left,rgba(0,102,255,0.12),transparent_60%)]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
            <div>
              <div className="inline-flex items-center gap-2.5 text-amber-400 font-mono text-xs sm:text-[13px] font-bold tracking-widest uppercase mb-3">
                <span className="w-8 h-[2px] bg-amber-500 inline-block" />
                <span>EXPLORE OTHER INDUSTRIAL DEPLOYMENTS</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white tracking-tight leading-[1.15]">
                More Applications<br />
                <span className="text-[#0066FF]">Beyond</span> {data.title.split("&")[0].trim()}
              </h2>
            </div>

            <div className="hidden md:block border-l border-white/15 pl-6 max-w-sm">
              <p className="text-slate-400 text-xs sm:text-[13px] leading-relaxed">
                The same catalytic hydroxide technology that stabilizes pH in {data.title.toLowerCase().split("&")[0].trim()} delivers measurable value across multiple industrial settings.
              </p>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherApplications.map((app) => (
              <div
                key={app.slug}
                className="bg-[#0B101D]/90 hover:bg-[#0E1526] rounded-xl sm:rounded-2xl border border-slate-800 hover:border-slate-700 transition-all shadow-xl flex flex-col justify-between group overflow-hidden"
              >
                <div>
                  {/* Top Tag Bar with Gold/Amber Outline */}
                  <div className="p-4 pb-3 flex items-center justify-between">
                    <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded border border-amber-500/70 bg-[#070B14]/80">
                      <span className="font-mono text-xs font-bold text-amber-400">{app.num}</span>
                      <span className="font-mono text-[10px] sm:text-[11px] font-bold tracking-wider uppercase text-slate-200">
                        {app.badge}
                      </span>
                    </div>
                  </div>

                  {/* Preserved Card Image */}
                  <div className="h-44 sm:h-48 relative overflow-hidden bg-slate-950">
                    <img
                      src={app.data.bgImage}
                      alt={app.data.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B101D] via-transparent to-transparent pointer-events-none opacity-80" />
                  </div>

                  {/* Card Content */}
                  <div className="p-5 sm:p-6">
                    <div className="w-6 h-[2px] bg-amber-500 mb-3" />
                    <h3 className="font-extrabold text-white text-base sm:text-lg mb-2.5 group-hover:text-sky-300 transition-colors leading-snug">
                      {app.data.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-slate-400 leading-relaxed font-normal">
                      {app.excerpt}
                    </p>
                  </div>
                </div>

                {/* Bottom Link & Circular Button */}
                <div className="p-5 sm:p-6 pt-0">
                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                    <button
                      onClick={() => onNavigate(app.slug)}
                      className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-[#0066FF] group-hover:text-sky-400 transition-colors cursor-pointer"
                    >
                      <span>VIEW APPLICATION PAGE</span>
                    </button>
                    <button
                      onClick={() => onNavigate(app.slug)}
                      className="w-8 h-8 rounded-full border border-sky-600/60 group-hover:border-sky-400 flex items-center justify-center text-sky-400 group-hover:text-white group-hover:bg-sky-500/10 transition-colors cursor-pointer"
                      title={`View ${app.data.title}`}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Evaluate On-Site Alkaline Generator Skid Section (White background to provide high contrast against dark footer) */}
      <section className="relative bg-white text-[#101828] py-14 sm:py-16 lg:py-20 border-t border-[#DCE2EB] text-left">
        {/* Subtle decorative glow */}
        <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,rgba(0,102,255,0.04),transparent_60%)]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="rounded-2xl border border-[#DCE2EB] bg-white relative overflow-hidden p-6 sm:p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm hover:shadow-md transition-shadow">
            {/* Text content */}
            <div className="relative z-10 max-w-xl">
              <div className="inline-flex items-center gap-2 text-[#0066FF] font-mono text-[11px] font-bold tracking-widest uppercase mb-2">
                <span className="w-5 h-[2px] bg-[#0066FF] inline-block" />
                <span>READY TO GET STARTED?</span>
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-[26px] font-extrabold text-[#101828] leading-tight mb-2">
                Evaluate an On-Site Alkaline Generator Skid for Your Facility?
              </h3>
              <p className="text-[#667085] text-xs sm:text-sm leading-relaxed">
                Discuss target flow rates, raw water chemistry, and footprint requirements with our application engineers.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="relative z-10 flex flex-wrap items-center gap-3 shrink-0">
              <button
                onClick={onBookCallClick}
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 rounded-full bg-[#0066FF] hover:bg-[#0052cc] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#0066FF]/25 hover:shadow-[#0066FF]/40 transition-all cursor-pointer"
              >
                <span>DISCUSS YOUR APPLICATION</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onBack}
                className="inline-flex items-center gap-1.5 px-5 sm:px-6 py-3 rounded-full bg-slate-50 hover:bg-slate-100 text-[#101828] border border-[#DCE2EB] font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-xs"
              >
                <span>BACK TO OVERVIEW</span>
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

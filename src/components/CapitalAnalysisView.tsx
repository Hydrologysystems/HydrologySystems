/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from "react";
import { 
  ArrowLeft, 
  ShieldAlert, 
  ShieldCheck, 
  TrendingDown, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle2, 
  Flame, 
  Truck, 
  Zap, 
  Activity, 
  FileText, 
  ArrowRight,
  Calculator,
  Scale
} from "lucide-react";

// @ts-ignore
import burdenCardLeftBg from "../assets/images/burden_card_left_bg_1784051493337.jpg";
// @ts-ignore
import hydrologySkidDeploymentBg from "../assets/images/hydrology_real_skid_deployment_1783536634793.jpg";
// @ts-ignore
import filtrationArrayBg from "../assets/images/filtration_array_clean_1782937619957.jpg";
// @ts-ignore
import refineryEquipmentBg from "../assets/images/refinery_equipment_bg_1782937594866.jpg";

interface CapitalAnalysisViewProps {
  onBack: () => void;
  onBookCallClick: (presetSubject?: string) => void;
  onCalculatorClick: () => void;
  initialTab?: "comparison" | "risk" | "advantage";
}

export default function CapitalAnalysisView({
  onBack,
  onBookCallClick,
  onCalculatorClick,
  initialTab = "comparison",
}: CapitalAnalysisViewProps) {
  const [activeTab, setActiveTab] = useState<"comparison" | "risk" | "advantage">(initialTab);

  const handleTabChange = (tab: "comparison" | "risk" | "advantage") => {
    setActiveTab(tab);
    const el = document.getElementById("evaluation-breakdown-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const originalTitle = document.title;
    document.title = "US vs THEM: Detailed Risk vs. Advantage Analysis | Hydrology Systems";
    return () => {
      document.title = originalTitle;
    };
  }, []);

  const comparisonRows = [
    {
      category: "Annual Chemical OPEX",
      riskTitle: "Multi-Million Dollar Procurement Burden",
      riskText: "Continuous monthly purchasing of 50% membrane-grade liquid caustic soda (NaOH) or dry soda ash (Na2CO3). Subject to spot market price surges, freight surcharges, and escalating delivery tariffs.",
      riskBadge: "High Recurring Cost",
      advantageTitle: "Up to 70% Immediate Operating Cost Recovery",
      advantageText: "Generate high-purity alkaline buffering solution on-site directly from facility water. Eliminate third-party markups, freight costs, and bulk liquid chemical replenishment cycles.",
      advantageBadge: "70% Net Savings",
    },
    {
      category: "Chemical Waste & Efficiency",
      riskTitle: "10% to 15% Lost in Mixing & Degradation",
      riskText: "Manual shock dosing leads to extreme over-shooting and neutralization rebound. Significant product loss through tank bottom sludge, crystallization, unpumpable heels, and delivery line flushes.",
      riskBadge: "15% Chemical Loss",
      advantageTitle: "Zero Waste Automated Closed-Loop Dosing",
      advantageText: "Precision PLC blending with continuous sensor feedback (pH, TDS, temperature). Delivers exact micro-doses on demand without overshoot, thermal loss, or residual sludge.",
      advantageBadge: "Zero Residue Waste",
    },
    {
      category: "Workplace Safety & Hazard Liability",
      riskTitle: "Catastrophic Caustic Chemical Burn Risk",
      riskText: "50% liquid caustic soda causes rapid, deep-tissue liquefactive necrosis on skin and permanent blindness in seconds. Mandates full-body PPE suits, eye-wash stations, and high workers' compensation premiums.",
      riskBadge: "OSHA Hazard Liability",
      advantageTitle: "Zero Bulk Handling & Non-Hazardous Operation",
      advantageText: "On-site skids synthesize non-boiling, stable alkaline streams within enclosed 304/316 stainless steel reactors. Operators never handle, pump, or mix concentrated raw corrosive chemicals.",
      advantageBadge: "Inherently Safe Worksite",
    },
    {
      category: "Supply Chain & Storage Volatility",
      riskTitle: "Unpredictable Tanker Deliveries & Winter Freeze",
      riskText: "50% caustic freezes at 54°F (12°C), requiring heated tanks and heat-traced piping. Logistics strikes, regional rail congestion, and seasonal plant shutdowns create emergency downtime risks.",
      riskBadge: "Supply Fragility",
      advantageTitle: "100% On-Site Supply Autonomy",
      advantageText: "Your facility becomes its own chemical plant. Skids operate continuously on municipal or industrial feed water, insulating plant operations from regional commodity shortages.",
      advantageBadge: "100% Plant Independence",
    },
    {
      category: "Environmental & Permitting Burdens",
      riskTitle: "Secondary Containment & EPA SPCC Mandates",
      riskText: "Requires secondary containment berms, EPA Spill Prevention (SPCC) filings, hazardous waste transport manifests, and municipal wastewater discharge penalties for out-of-spec pH spikes.",
      riskBadge: "High Regulatory Risk",
      advantageTitle: "EPA / NSF / GMP Compliance Ready",
      advantageText: "Removes bulk hazardous chemical storage footprints. Meets strict industrial discharge standards and includes comprehensive Title 21 validation quality reports.",
      advantageBadge: "Green Facility ESG Credit",
    },
    {
      category: "Piping & Infrastructure Durability",
      riskTitle: "Caustic Embrittlement & Severe Scale Build-Up",
      riskText: "Hot caustic causes caustic cracking/embrittlement in carbon steel, eats pump seals, and leads to mineral precipitation that clogs cooling tower heat exchangers, spray nozzles, and drip lines.",
      riskBadge: "Asset Degradation",
      advantageTitle: "304/316 Stainless Steel Sanitary Metallurgy",
      advantageText: "Full stainless steel piping, reactors, and Tri-Clamp sanitary couplings designed for decades of trouble-free continuous duty. Produces buffered alkalinity that protects downstream assets.",
      advantageBadge: "30+ Year Equipment Life",
    }
  ];

  return (
    <div className="min-h-screen bg-[#F6F8FC] text-[#101828] font-sans pt-16 sm:pt-20 md:pt-24 pb-0">
      
      {/* Sticky Editorial Navigation & Quick Action Bar */}
      <div 
        id="capital-analysis-bar"
        className="bg-white/95 backdrop-blur-md border-b border-[#DCE2EB] sticky top-[56px] sm:top-[60px] md:top-[68px] z-40 shadow-xs transition-all"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-3">
          
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-[#101828] hover:text-[#0066FF] bg-[#F4F6FA] hover:bg-[#0066FF]/10 px-3 py-1.5 rounded-lg border border-[#DCE2EB] hover:border-[#0066FF]/30 transition-all cursor-pointer shrink-0"
            title="Return to Main Page"
          >
            <ArrowLeft className="w-4 h-4 text-[#0066FF]" />
            <span className="hidden sm:inline">BACK TO MAIN PAGE</span>
            <span className="sm:hidden text-[11px]">BACK</span>
          </button>

          {/* Sub-view Switcher Tabs: Editorial Segmented Control */}
          <div className="flex items-center bg-[#F4F6FA] p-1 rounded-full border border-[#DCE2EB] text-xs font-mono font-bold">
            <button
              onClick={() => handleTabChange("comparison")}
              className={`px-3 sm:px-4 py-1.5 rounded-full transition-all cursor-pointer ${
                activeTab === "comparison"
                  ? "bg-[#0066FF] text-white shadow-xs"
                  : "text-[#667085] hover:text-[#101828]"
              }`}
            >
              Comparison
            </button>
            <button
              onClick={() => handleTabChange("risk")}
              className={`px-3 sm:px-4 py-1.5 rounded-full transition-all cursor-pointer ${
                activeTab === "risk"
                  ? "bg-rose-600 text-white shadow-xs"
                  : "text-[#667085] hover:text-rose-600"
              }`}
            >
              Risk Today
            </button>
            <button
              onClick={() => handleTabChange("advantage")}
              className={`px-3 sm:px-4 py-1.5 rounded-full transition-all cursor-pointer ${
                activeTab === "advantage"
                  ? "bg-[#0066FF] text-white shadow-xs"
                  : "text-[#667085] hover:text-[#0066FF]"
              }`}
            >
              The Advantage
            </button>
          </div>
        </div>
      </div>

      {/* Editorial Hero Header Section: Magazine Cover Dossier */}
      <section className="relative py-16 sm:py-20 md:py-24 bg-[#080B12] text-white overflow-hidden border-b border-white/10">
        {/* Purposeful Background Image: US vs THEM Hazardous Bulk Caustic vs High-Tech On-Site Skid */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
          <picture>
            <source type="image/webp" srcSet="/assets/aistudio/Industrial_Systems_vs_Chemical_Drums_8f1d5131.webp" />
            <img
              src="/assets/aistudio/Industrial_Systems_vs_Chemical_Drums_8f1d5131.jpg"
              alt="US vs THEM: Automated High-Tech On-Site Skid vs Hazardous Bulk Chemical Drums"
              className="w-full h-full object-cover object-center opacity-80 sm:opacity-90 brightness-95 contrast-[1.05]"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </picture>
          {/* Softened shadow fade overlays allowing the background image to remain clearly visible */}
          <div className="absolute inset-0 bg-[#080B12]/15" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#080B12]/60 via-[#080B12]/25 via-45% to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080B12]/75 via-transparent via-15% to-transparent" />
        </div>

        {/* Subtle Ambient Radial Lighting */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#0066FF]/20 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-left">
          
          {/* Editorial Top Eyebrow / Dossier Tagging */}
          <div className="flex flex-wrap items-center gap-2.5 mb-5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white font-mono text-xs font-bold tracking-wider uppercase">
              <Scale className="w-3.5 h-3.5 text-[#0066FF]" />
              COMPREHENSIVE CAPITAL &amp; RISK AUDIT
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-rose-500/20 border border-rose-500/40 text-rose-300 font-mono text-xs font-semibold">
              Delivered Bulk Caustic
            </span>
            <span className="text-white/40 font-bold">vs</span>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#0066FF]/25 border border-[#0066FF]/40 text-blue-300 font-mono text-xs font-semibold">
              On-Site Hydrology Skids
            </span>
          </div>

          {/* Main Title & Lead Text */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight leading-[1.1] mb-5 max-w-4xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
            US vs THEM: Detailed Risk &amp; Advantage Breakdown
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/95 max-w-3xl leading-relaxed mb-10 font-normal drop-shadow-[0_1px_6px_rgba(0,0,0,0.8)]">
            An in-depth operational and financial examination comparing legacy delivered caustic procurement against automated on-site alkaline skid generation. Discover how modern industrial facilities eliminate hazardous chemistry, recover up to 70% of operating budgets, and achieve complete chemical supply chain sovereignty.
          </p>

          {/* Editorial Metrics Fact-Sheet Ledger */}
          <div className="rounded-2xl bg-[#0c121e]/90 border border-white/15 shadow-2xl backdrop-blur-md relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#0066FF] to-transparent opacity-80" />
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-white/10 p-2 sm:p-3">
              <div className="p-4 sm:p-5">
                <span className="text-xs font-mono text-white/60 block mb-1">OPEX RECOVERY</span>
                <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0066FF] font-display block">Up to 70%</span>
                <span className="text-[11px] text-white/50 block mt-1">Vs delivered 50% NaOH</span>
              </div>
              <div className="p-4 sm:p-5">
                <span className="text-xs font-mono text-white/60 block mb-1">CHEMICAL WASTE</span>
                <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-display block">0.0%</span>
                <span className="text-[11px] text-white/50 block mt-1">Automated PLC feedback</span>
              </div>
              <div className="p-4 sm:p-5">
                <span className="text-xs font-mono text-white/60 block mb-1">HAZARD EXPOSURE</span>
                <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-400 font-display block">ZERO</span>
                <span className="text-[11px] text-white/50 block mt-1">No bulk acid/base handling</span>
              </div>
              <div className="p-4 sm:p-5">
                <span className="text-xs font-mono text-white/60 block mb-1">AVERAGE PAYBACK</span>
                <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-display block">6–14 Mo</span>
                <span className="text-[11px] text-white/50 block mt-1">Rapid CapEx amortization</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Main Content Area based on activeTab */}
      <section id="evaluation-breakdown-section" className="py-16 sm:py-20 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 scroll-mt-24 sm:scroll-mt-28">
        
        {/* VIEW 1: SIDE-BY-SIDE COMPARISON TABLE (MAGAZINE SPREAD) */}
        {(activeTab === "comparison" || activeTab === undefined) && (
          <div className="space-y-10 text-left">
            
            {/* Section Header */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-[#DCE2EB]">
              <div>
                <span className="text-xs font-mono font-bold tracking-wider uppercase text-[#0066FF] block mb-1.5">
                  DIMENSIONAL COMPARISON MATRIX
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-[#101828] tracking-tight">
                  Direct Metric-By-Metric Evaluation
                </h2>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={onCalculatorClick}
                  className="px-5 py-2.5 rounded-full border border-[#0066FF] text-[#0066FF] hover:bg-[#0066FF]/10 text-xs font-bold font-mono uppercase tracking-wider flex items-center gap-2 cursor-pointer transition-all shadow-xs"
                >
                  <Calculator className="w-3.5 h-3.5" />
                  <span>Model Your Facility Savings</span>
                </button>
              </div>
            </div>

            {/* Comparison Cards: High-End Editorial Dossier Spread */}
            <div className="space-y-8">
              {comparisonRows.map((row, idx) => (
                <div 
                  key={idx} 
                  className="bg-white rounded-3xl border border-[#DCE2EB] shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  {/* Editorial Folio Header Bar */}
                  <div className="bg-[#F8FAFC] px-6 sm:px-8 py-4 border-b border-[#DCE2EB] flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#0066FF]" />
                      <h3 className="text-sm sm:text-base font-display font-extrabold uppercase tracking-wider text-[#101828]">
                        {row.category}
                      </h3>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-mono font-semibold text-[#0066FF] bg-[#0066FF]/10 px-3 py-1 rounded-full border border-[#0066FF]/20">
                        Area #{idx + 1}
                      </span>
                    </div>
                  </div>

                  {/* 2-Column Comparative Ledger Spread */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-[#DCE2EB]">
                    
                    {/* The Risk You Accept Today (Editorial Darkroom Plate) */}
                    <div className="p-7 sm:p-9 relative overflow-hidden flex flex-col justify-between bg-[#12070A] text-white min-h-[290px] group">
                      {/* Purposeful Background Image: Conventional Bulk Tankers & Chemical Hazard Footprint */}
                      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
                        <img 
                          src={burdenCardLeftBg} 
                          alt="Conventional Bulk Caustic Hazard Facility" 
                          className="w-full h-full object-cover opacity-20 filter contrast-125 brightness-90 group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-[#1C080E]/95 via-[#12070A]/95 to-[#0B0305]/98" />
                      </div>

                      <div className="relative z-10">
                        {/* Status Badges */}
                        <div className="flex items-center justify-between gap-2 mb-4">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-[10px] font-mono font-bold bg-rose-500/25 text-rose-300 border border-rose-500/40 uppercase tracking-wider">
                            <ShieldAlert className="w-3.5 h-3.5 text-rose-400" />
                            The Risk Today
                          </span>
                          <span className="text-[10px] font-mono font-bold text-rose-300 bg-rose-950/90 px-2.5 py-1 rounded border border-rose-800/60">
                            {row.riskBadge}
                          </span>
                        </div>

                        {/* Heading & Text */}
                        <h4 className="text-lg sm:text-xl font-display font-bold text-white mb-3 leading-snug tracking-tight">
                          {row.riskTitle}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                          {row.riskText}
                        </p>
                      </div>

                      {/* Editorial Footnote Accent */}
                      <div className="relative z-10 pt-5 mt-5 border-t border-rose-950/80 flex items-center justify-between text-[11px] font-mono text-rose-400/80">
                        <span>CONVENTIONAL PROCUREMENT</span>
                        <span>HAZARD TIER 1</span>
                      </div>
                    </div>

                    {/* The Hydrology System Advantage (Architectural Cleanroom Plate) */}
                    <div className="p-7 sm:p-9 relative overflow-hidden flex flex-col justify-between bg-[#061224] text-white min-h-[290px] group">
                      {/* Purposeful Background Image: Clean Stainless Steel Hydrology Skid Array */}
                      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
                        <img 
                          src={hydrologySkidDeploymentBg} 
                          alt="On-Site Hydrology Skid Reactor Array" 
                          className="w-full h-full object-cover opacity-25 filter contrast-125 brightness-95 group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-[#0B1E40]/90 via-[#071630]/95 to-[#040C1A]/98" />
                      </div>

                      <div className="relative z-10">
                        {/* Status Badges */}
                        <div className="flex items-center justify-between gap-2 mb-4">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-[10px] font-mono font-bold bg-[#0066FF]/25 text-blue-300 border border-[#0066FF]/50 uppercase tracking-wide">
                            <ShieldCheck className="w-3.5 h-3.5 text-[#0066FF]" />
                            Hydrology Advantage
                          </span>
                          <span className="text-[10px] font-mono font-bold text-blue-300 bg-[#0066FF]/20 px-2.5 py-1 rounded border border-[#0066FF]/40">
                            {row.advantageBadge}
                          </span>
                        </div>

                        {/* Heading & Text */}
                        <h4 className="text-lg sm:text-xl font-display font-bold text-white mb-3 leading-snug tracking-tight">
                          {row.advantageTitle}
                        </h4>
                        <p className="text-xs sm:text-sm text-blue-100/90 leading-relaxed font-normal">
                          {row.advantageText}
                        </p>
                      </div>

                      {/* Editorial Footnote Accent */}
                      <div className="relative z-10 pt-5 mt-5 border-t border-blue-950/80 flex items-center justify-between text-[11px] font-mono text-blue-300/80">
                        <span>AUTONOMOUS ON-SITE SYNTHESIS</span>
                        <span>0% RESIDUE</span>
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VIEW 2: THE RISK YOU ACCEPT TODAY (EDITORIAL INVESTIGATIVE DOSSIER) */}
        {activeTab === "risk" && (
          <div className="space-y-10 text-left">
            
            {/* Section Header */}
            <div className="pb-4 border-b border-[#DCE2EB]">
              <span className="text-xs font-mono font-bold tracking-wider uppercase text-rose-600 block mb-1.5">
                DETAILED RISK ASSESSMENT
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-[#101828] tracking-tight">
                The True Operational &amp; Financial Burden of Bulk Caustic
              </h2>
              <p className="text-sm sm:text-base text-[#667085] max-w-3xl mt-2 leading-relaxed">
                Why forward-thinking plant managers, wastewater engineers, and CFOs are actively migrating away from delivered bulk sodium hydroxide (NaOH) and bulk soda ash.
              </p>
            </div>

            {/* 4 Editorial Investigative Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              <div className="p-7 sm:p-9 rounded-3xl bg-white border border-rose-200/80 shadow-md relative overflow-hidden group hover:border-rose-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-60 h-60 opacity-[0.07] pointer-events-none select-none">
                  <img src={burdenCardLeftBg} alt="" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-rose-50 flex items-center justify-center text-rose-600 border border-rose-100 shadow-xs">
                      <TrendingDown className="w-5 h-5" />
                    </div>
                    <span className="text-3xl font-mono font-black text-rose-200">01</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-display font-bold text-[#101828] mb-3">
                    1. The Escalating OPEX Squeeze
                  </h3>
                  <p className="text-sm text-[#667085] leading-relaxed mb-6 font-normal">
                    Delivered bulk caustic is one of the most volatile industrial chemicals. Price fluctuations regularly swing 30% to 50% year-over-year depending on chlor-alkali plant power costs, chlorine co-product demand, and diesel freight tariffs.
                  </p>
                </div>
                <div className="pt-4 border-t border-rose-100">
                  <ul className="space-y-2.5 text-xs text-[#101828] font-mono">
                    <li className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0" />
                      <span>Uncontrollable quarterly price increases</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0" />
                      <span>Costly demurrage fees from tanker delays</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0" />
                      <span>Capital locked in stagnant bulk inventory</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="p-7 sm:p-9 rounded-3xl bg-white border border-rose-200/80 shadow-md relative overflow-hidden group hover:border-rose-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-60 h-60 opacity-[0.07] pointer-events-none select-none">
                  <img src={burdenCardLeftBg} alt="" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-rose-50 flex items-center justify-center text-rose-600 border border-rose-100 shadow-xs">
                      <Flame className="w-5 h-5" />
                    </div>
                    <span className="text-3xl font-mono font-black text-rose-200">02</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-display font-bold text-[#101828] mb-3">
                    2. Acute Personnel Safety &amp; Worker Comp
                  </h3>
                  <p className="text-sm text-[#667085] leading-relaxed mb-6 font-normal">
                    Liquid caustic soda at 50% concentration is an extreme base (pH 14) that penetrates deep into human tissue without immediate sensory warning, causing saponification of fats and irreversible corneal destruction.
                  </p>
                </div>
                <div className="pt-4 border-t border-rose-100">
                  <ul className="space-y-2.5 text-xs text-[#101828] font-mono">
                    <li className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0" />
                      <span>Mandatory chemical suit PPE &amp; eye-wash compliance</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0" />
                      <span>High OSHA incident reporting liabilities</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0" />
                      <span>Increased plant casualty insurance premiums</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="p-7 sm:p-9 rounded-3xl bg-white border border-rose-200/80 shadow-md relative overflow-hidden group hover:border-rose-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-60 h-60 opacity-[0.07] pointer-events-none select-none">
                  <img src={burdenCardLeftBg} alt="" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-rose-50 flex items-center justify-center text-rose-600 border border-rose-100 shadow-xs">
                      <AlertTriangle className="w-5 h-5" />
                    </div>
                    <span className="text-3xl font-mono font-black text-rose-200">03</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-display font-bold text-[#101828] mb-3">
                    3. Infrastructure Freezing &amp; Caustic Embrittlement
                  </h3>
                  <p className="text-sm text-[#667085] leading-relaxed mb-6 font-normal">
                    Standard 50% caustic freezes solid at 54°F (12°C). Facilities must invest hundreds of thousands in heated tanks, recirculating loops, and heat-traced stainless piping to prevent frozen line blockages during winter months.
                  </p>
                </div>
                <div className="pt-4 border-t border-rose-100">
                  <ul className="space-y-2.5 text-xs text-[#101828] font-mono">
                    <li className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0" />
                      <span>Piping fractures from thermal expansion</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0" />
                      <span>Caustic stress corrosion cracking in welds</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0" />
                      <span>Frequent pump seal failures &amp; downtime</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="p-7 sm:p-9 rounded-3xl bg-white border border-rose-200/80 shadow-md relative overflow-hidden group hover:border-rose-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-60 h-60 opacity-[0.07] pointer-events-none select-none">
                  <img src={burdenCardLeftBg} alt="" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-rose-50 flex items-center justify-center text-rose-600 border border-rose-100 shadow-xs">
                      <Truck className="w-5 h-5" />
                    </div>
                    <span className="text-3xl font-mono font-black text-rose-200">04</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-display font-bold text-[#101828] mb-3">
                    4. Supply Chain Fragility &amp; Delivery Dependence
                  </h3>
                  <p className="text-sm text-[#667085] leading-relaxed mb-6 font-normal">
                    When hazardous chemical freight carriers experience rail embargoes, driver shortages, or severe weather delays, plants face immediate production curtailment or non-compliant discharge shutdowns.
                  </p>
                </div>
                <div className="pt-4 border-t border-rose-100">
                  <ul className="space-y-2.5 text-xs text-[#101828] font-mono">
                    <li className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0" />
                      <span>Zero control over regional chemical supply</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0" />
                      <span>Emergency plant shutdowns due to empty day-tanks</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0" />
                      <span>Costly expedited freight fees during logistics crunches</span>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* VIEW 3: THE HYDROLOGY SYSTEM ADVANTAGE (EDITORIAL ENGINEERING MONOGRAPH) */}
        {activeTab === "advantage" && (
          <div className="space-y-10 text-left">
            
            {/* Section Header */}
            <div className="pb-4 border-b border-[#DCE2EB]">
              <span className="text-xs font-mono font-bold tracking-wider uppercase text-[#0066FF] block mb-1.5">
                ENGINEERING &amp; FINANCIAL EXCELLENCE
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-[#101828] tracking-tight">
                The Hydrology System Advantage
              </h2>
              <p className="text-sm sm:text-base text-[#667085] max-w-3xl mt-2 leading-relaxed">
                Transforming plant operations with automated, on-demand alkaline synthesis that cuts chemical operating expenses by up to 70% while improving safety.
              </p>
            </div>

            {/* 4 Editorial Engineering Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              <div className="p-7 sm:p-9 rounded-3xl bg-white border border-blue-200/80 shadow-md relative overflow-hidden group hover:border-[#0066FF] hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-60 h-60 opacity-[0.08] pointer-events-none select-none">
                  <img src={hydrologySkidDeploymentBg} alt="" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#0066FF]/10 flex items-center justify-center text-[#0066FF] border border-[#0066FF]/20 shadow-xs">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                    <span className="text-3xl font-mono font-black text-blue-200">01</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-display font-bold text-[#101828] mb-3">
                    1. Predictable Up to 70% Cost Recovery
                  </h3>
                  <p className="text-sm text-[#667085] leading-relaxed mb-6 font-normal">
                    By manufacturing alkaline buffering chemistry on-site using standard plant water and electricity, your operational costs drop to a small fraction of delivered bulk caustic.
                  </p>
                </div>
                <div className="pt-4 border-t border-blue-100">
                  <ul className="space-y-2.5 text-xs text-[#101828] font-mono">
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#0066FF] shrink-0" />
                      <span>Eliminate bulk distributor markup and freight premiums</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#0066FF] shrink-0" />
                      <span>Fixed, predictable operating expense structure</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#0066FF] shrink-0" />
                      <span>Average capital payback in just 6 to 14 months</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="p-7 sm:p-9 rounded-3xl bg-white border border-blue-200/80 shadow-md relative overflow-hidden group hover:border-[#0066FF] hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-60 h-60 opacity-[0.08] pointer-events-none select-none">
                  <img src={hydrologySkidDeploymentBg} alt="" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#0066FF]/10 flex items-center justify-center text-[#0066FF] border border-[#0066FF]/20 shadow-xs">
                      <Activity className="w-5 h-5" />
                    </div>
                    <span className="text-3xl font-mono font-black text-blue-200">02</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-display font-bold text-[#101828] mb-3">
                    2. Automated Closed-Loop Precision (Zero Waste)
                  </h3>
                  <p className="text-sm text-[#667085] leading-relaxed mb-6 font-normal">
                    Industrial PLC automation (Walchem &amp; AutomationDirect Touchscreen) continuously samples incoming water parameters and modulates dosing down to the millisecond.
                  </p>
                </div>
                <div className="pt-4 border-t border-blue-100">
                  <ul className="space-y-2.5 text-xs text-[#101828] font-mono">
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#0066FF] shrink-0" />
                      <span>PID micro-modulation stops pH overshoot</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#0066FF] shrink-0" />
                      <span>0% chemical loss from unpumpable tank bottoms</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#0066FF] shrink-0" />
                      <span>Autonomous 24/7 telemetry and alarm reporting</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="p-7 sm:p-9 rounded-3xl bg-white border border-blue-200/80 shadow-md relative overflow-hidden group hover:border-[#0066FF] hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-60 h-60 opacity-[0.08] pointer-events-none select-none">
                  <img src={hydrologySkidDeploymentBg} alt="" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#0066FF]/10 flex items-center justify-center text-[#0066FF] border border-[#0066FF]/20 shadow-xs">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <span className="text-3xl font-mono font-black text-blue-200">03</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-display font-bold text-[#101828] mb-3">
                    3. Inherent Plant Safety &amp; Risk Mitigation
                  </h3>
                  <p className="text-sm text-[#667085] leading-relaxed mb-6 font-normal">
                    Eliminates bulk hazardous corrosive chemical deliveries from your facility. Operators are completely protected from splash hazards, toxic fumes, and emergency containment drills.
                  </p>
                </div>
                <div className="pt-4 border-t border-blue-100">
                  <ul className="space-y-2.5 text-xs text-[#101828] font-mono">
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#0066FF] shrink-0" />
                      <span>No hazardous chemical transfer hose connections</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#0066FF] shrink-0" />
                      <span>Reduces worker compensation insurance tiers</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#0066FF] shrink-0" />
                      <span>Zero hazardous liquid bulk containment requirements</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="p-7 sm:p-9 rounded-3xl bg-white border border-blue-200/80 shadow-md relative overflow-hidden group hover:border-[#0066FF] hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-60 h-60 opacity-[0.08] pointer-events-none select-none">
                  <img src={hydrologySkidDeploymentBg} alt="" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#0066FF]/10 flex items-center justify-center text-[#0066FF] border border-[#0066FF]/20 shadow-xs">
                      <Zap className="w-5 h-5" />
                    </div>
                    <span className="text-3xl font-mono font-black text-blue-200">04</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-display font-bold text-[#101828] mb-3">
                    4. Unmatched Chemical Supply Autonomy
                  </h3>
                  <p className="text-sm text-[#667085] leading-relaxed mb-6 font-normal">
                    Generate the exact pH and volume of alkalinity required right at the point of use. Never worry about rail strikes, chemical tanker shortages, or price gouging during peak seasons.
                  </p>
                </div>
                <div className="pt-4 border-t border-blue-100">
                  <ul className="space-y-2.5 text-xs text-[#101828] font-mono">
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#0066FF] shrink-0" />
                      <span>100% on-demand production at the touch of an HMI</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#0066FF] shrink-0" />
                      <span>Scalable from 10 GPM to 500+ GPM skid arrays</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#0066FF] shrink-0" />
                      <span>Full 304/316 stainless steel engineering longevity</span>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        )}

      </section>

      {/* Editorial Amortization & ROI Callout: Executive Financial Summary */}
      <section className="relative py-16 sm:py-20 bg-[#091122] text-white overflow-hidden border-t border-b border-white/10 shadow-2xl">
        {/* Purposeful Background Image: Clean Water & Industrial Filtration Skid Array */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
          <img 
            src={filtrationArrayBg} 
            alt="Industrial Clean Water and Filtration Skid Array" 
            className="w-full h-full object-cover opacity-20 filter contrast-125 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#091122]/98 via-[#091122]/92 to-[#091122]/80" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-left relative z-10">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
            <div className="max-w-3xl">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0066FF] block mb-2.5">
                FINANCIAL AMORTIZATION SCENARIOS
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display text-white mb-4 tracking-tight">
                How Fast Does On-Site Skid Generation Pay for Itself?
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                For an industrial facility consuming an average of <strong className="text-white font-semibold">100 GPM</strong> of neutralizer or wastewater stream, typical delivered bulk caustic OPEX ranges from <strong className="text-white font-semibold">$280,000 to $450,000 annually</strong>. Switching to Hydrology Systems recovers an estimated <strong className="text-white font-semibold">$196,000 to $315,000/year</strong> in direct chemical savings.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <button
                onClick={onCalculatorClick}
                className="px-7 py-4 rounded-full bg-[#0066FF] hover:bg-[#0052cc] text-white font-bold text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-[#0066FF]/30 transition-all cursor-pointer"
              >
                <Calculator className="w-4 h-4" />
                <span>Run Detailed ROI Model</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Bottom CTA Box: Formal Site Audit Consultation Invitation */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="p-8 sm:p-12 md:p-16 rounded-3xl bg-[#080B12] text-white border border-white/10 shadow-2xl text-left relative overflow-hidden">
          {/* Purposeful Background Image: Refinery Chemical Processing Plant */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
            <img 
              src={refineryEquipmentBg} 
              alt="Refinery Chemical Processing Equipment" 
              className="w-full h-full object-cover opacity-20 filter contrast-125 scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#080B12]/98 via-[#080B12]/85 to-[#080B12]/70" />
          </div>

          <div className="absolute top-0 right-0 w-96 h-96 bg-[#0066FF]/20 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0066FF]/25 border border-[#0066FF]/40 text-blue-300 font-mono text-xs font-bold uppercase tracking-wider mb-5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#0066FF]" />
              SITE CHEMICAL &amp; SKID FEASIBILITY AUDIT
            </span>
            <h3 className="text-2xl sm:text-4xl md:text-5xl font-display font-extrabold text-white mb-5 tracking-tight leading-[1.15]">
              Ready to Stop Flushing Capital at Your Facility?
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed mb-10 font-normal">
              Speak directly with our senior chemical and wastewater engineers. We will analyze your facility's current chemical bills, wastewater discharge permits, and peak GPM specs to generate a comprehensive skid sizing and payback report.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => onBookCallClick("Detailed Capital & Risk Audit Consultation")}
                className="px-8 py-4 rounded-full bg-[#0066FF] hover:bg-[#0052cc] text-white font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-xl shadow-[#0066FF]/30 transition-all cursor-pointer text-center"
              >
                <span>Schedule Chemical Audit Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <button
                onClick={onBack}
                className="px-6 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-xs tracking-wider uppercase transition-colors cursor-pointer text-center"
              >
                Return to Overview
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

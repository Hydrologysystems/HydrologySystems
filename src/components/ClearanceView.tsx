/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { 
  ArrowLeft, 
  Tag, 
  CheckCircle2, 
  AlertCircle, 
  ShieldCheck, 
  Phone, 
  Wrench, 
  Layers, 
  Zap, 
  Droplet, 
  FileText, 
  MapPin, 
  Truck, 
  Clock, 
  Check, 
  ArrowRight,
  ExternalLink,
  Sparkles
} from "lucide-react";
import ClearanceMediaGallery from "./ClearanceMediaGallery";

interface ClearanceViewProps {
  onBack: () => void;
  onBookCallClick: (presetSubject?: string) => void;
  onCalculatorClick: () => void;
}

export default function ClearanceView({
  onBack,
  onBookCallClick,
  onCalculatorClick,
}: ClearanceViewProps) {
  const [copiedContact, setCopiedContact] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const originalTitle = document.title;
    document.title = "Clearance Asset: Model HAWS-120 Skid | Hydrology Systems";
    return () => {
      document.title = originalTitle;
    };
  }, []);

  const handleClaimClick = () => {
    onBookCallClick("HAWS-120 Clearance Skid Liquidation ($39,000)");
  };

  const specs = [
    { label: "Asset Condition", value: "Like New / Excellent", detail: "~5 years old with minimal runtime wear" },
    { label: "Footprint", value: "14' L x 4' W x 7' H", detail: "1,600 lbs empty | 3-piece modular frame" },
    { label: "Flow Capacity", value: "Max 75 GPM", detail: "75 GPM (at 9 pH) • 50 GPM (at 10 pH) • 10 GPM (at 11 pH)" },
    { label: "Construction", value: "99% 304 Stainless Steel", detail: "316 SS hardware, valves & Tri-Clamp fittings" },
    { label: "Reaction Vessels", value: "6 x 304 SS Reactors", detail: "500 lbs media capacity each (3,000 lbs total)" },
    { label: "Filtration", value: "53 High-Efficiency Filters", detail: "0.05-micron sediment filters (10–33 TDS output)" },
    { label: "UV Disinfection", value: "4 Integrated UV Lamps", detail: "12 ft total ultraviolet exposure" },
    { label: "Automation", value: "Walchem + 12\" HMI", detail: "Web-Master One & Automation Direct Touchscreen" },
    { label: "Power Draw", value: "110V, 40A Max", detail: "Extremely low electrical overhead" },
    { label: "Compliance", value: "EPA, FDA, NSF, GMP", detail: "Title 21 water quality validation reports included" },
  ];

  return (
    <div className="min-h-screen bg-[#F4F6FA] text-[#101828] font-sans pt-16 sm:pt-20 md:pt-24 pb-0">
      
      {/* Sticky Top Breadcrumb & Quick Action Bar */}
      <div 
        id="clearance-breadcrumb-bar"
        className="bg-white/95 backdrop-blur-md border-b border-[#DCE2EB] sticky top-[56px] sm:top-[60px] md:top-[68px] z-40 shadow-xs transition-all"
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between gap-2">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-1.5 sm:gap-2 text-xs font-mono font-bold tracking-wider uppercase text-[#101828] hover:text-[#0066FF] bg-white hover:bg-slate-50 px-2.5 sm:px-3 py-1.5 rounded-lg border border-[#DCE2EB] hover:border-[#0066FF]/40 transition-all cursor-pointer shrink-0"
            title="Return to Main Page"
          >
            <ArrowLeft className="w-4 h-4 text-[#0066FF]" />
            <span className="hidden sm:inline">BACK TO MAIN PAGE</span>
            <span className="sm:hidden text-[11px]">BACK</span>
          </button>

          {/* Asset tag pill */}
          <div className="flex items-center gap-2">
            <span className="hidden md:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0066FF]/10 border border-[#0066FF]/30 text-[#0066FF] text-xs font-mono font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#0066FF] animate-pulse" />
              1 UNIT AVAILABLE • IMMEDIATE PICKUP
            </span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handleClaimClick}
              className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#0066FF] hover:bg-[#0052cc] text-white text-xs font-bold font-sans cursor-pointer shadow-sm transition-all"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Inquire / Claim Asset</span>
            </button>
          </div>
        </div>
      </div>

      {/* Integrated Liquidation Hero & Media Inspection Showcase Section */}
      <section 
        id="clearance-media-showcase" 
        className="relative pt-12 sm:pt-16 md:pt-20 pb-12 sm:pb-16 md:pb-20 bg-[#080B12] text-white overflow-hidden"
      >

        {/* Background glow effects */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#0066FF]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#0066FF]/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-[#0066FF]/5 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-left">
          
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0066FF]/20 border border-[#0066FF]/40 text-white font-mono text-xs font-bold tracking-wider uppercase">
              <Tag className="w-3.5 h-3.5 text-[#0066FF]" />
              LIQUIDATION ASSET • MODEL HAWS-120
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/10 border border-white/20 text-slate-200 font-mono text-xs font-semibold">
              <MapPin className="w-3 h-3 text-[#0066FF]" />
              Escondido, San Diego, CA
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10 sm:mb-12">
            
            <div className="lg:col-span-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight leading-[1.15] mb-4">
                Industrial Stainless Steel pH Control &amp; Ion Exchange Skid
              </h1>
              <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed mb-6">
                Enterprise-grade hardware at a fraction of custom CapEx. Originally engineered for high-speed bottled water and beverage production (trusted by national brands like Kroger, Costco, and Whole Foods), now available for immediate liquidation following a client trade-up.
              </p>

              {/* Price Callout Banner */}
              <div className="p-5 sm:p-6 rounded-2xl bg-[#0c121e] border border-white/10 shadow-2xl backdrop-blur-md">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-baseline gap-3">
                      <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-display">
                        $39,000
                      </span>
                      <span className="text-slate-400 line-through text-lg sm:text-xl font-medium">
                        $150,000
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-[#0066FF]/20 border border-[#0066FF]/40 text-[#0066FF] font-mono text-xs font-bold">
                        OVER 75% OFF
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 mt-2 flex items-center gap-2">
                      <Truck className="w-4 h-4 text-[#0066FF] shrink-0" />
                      <span><strong>Availability:</strong> Immediate Pickup from Escondido, San Diego, CA (Loading assistance provided for freight carrier).</span>
                    </p>
                  </div>

                  <button
                    onClick={handleClaimClick}
                    className="px-6 py-3.5 rounded-full bg-[#0066FF] hover:bg-[#0052cc] text-white font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg shadow-[#0066FF]/30 transition-all cursor-pointer shrink-0"
                  >
                    <span>Claim This Asset ($39,000)</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Summary Card on Side */}
            <div className="lg:col-span-4 bg-[#0c121e]/75 backdrop-blur-md border border-white/15 rounded-2xl p-6 text-left shadow-2xl">
              <h3 className="text-xs font-mono font-bold tracking-wider uppercase text-[#0066FF] mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#0066FF]" />
                <span>KEY ASSET HIGHLIGHTS</span>
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-200">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0066FF] shrink-0 mt-0.5" />
                  <span><strong>Turnkey Hardware:</strong> 99% 304 SS construction with 316 SS wetted hardware</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0066FF] shrink-0 mt-0.5" />
                  <span><strong>Massive Capacity:</strong> 6 x 304 SS reactor vessels (3,000 lbs media total)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0066FF] shrink-0 mt-0.5" />
                  <span><strong>Pure Output:</strong> 53 x 0.05-micron sediment filters + 4 UV lamps</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0066FF] shrink-0 mt-0.5" />
                  <span><strong>Low Energy:</strong> 110V, 40 Amp Max power draw</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0066FF] shrink-0 mt-0.5" />
                  <span><strong>Mobility:</strong> 3-piece modular frame fits a standard pallet jack</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Integrated Visual & Technical Media Gallery */}
          <div className="relative z-20">
            <ClearanceMediaGallery />
          </div>

        </div>
      </section>

      {/* The Opportunity Section */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-[#DCE2EB] p-6 sm:p-10 shadow-sm text-left">
          <div className="inline-flex items-center gap-2 text-[#0066FF] text-xs font-mono font-bold tracking-wider uppercase mb-3">
            <ShieldCheck className="w-4 h-4 text-[#0066FF]" />
            <span>THE OPPORTUNITY</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#101828] mb-4">
            Enterprise-Grade Hardware at a Fraction of Custom CapEx
          </h2>
          <div className="space-y-4 text-[#101828] leading-relaxed text-sm sm:text-base">
            <p>
              We took this flagship unit back in a client trade-up as their facility scaled into a higher-capacity system. Originally engineered for high-speed bottled water and beverage production (trusted by national brands like Kroger, Costco, and Whole Foods), this premium, custom-fabricated skid is now available for immediate liquidation.
            </p>
            <p className="text-[#667085]">
              Whether you are looking to eliminate hazardous caustic soda and soda ash storage, control cooling tower corrosion, or optimize nutrient uptake in high-yield agricultural and cultivation operations, this unit delivers uncompromised industrial performance at an unbeatable price point.
            </p>
          </div>
        </div>
      </section>

      {/* Engineering Specifications Grid */}
      <section className="py-8 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-left mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 text-[#667085] text-xs font-mono font-bold tracking-wider uppercase mb-2">
            <Wrench className="w-4 h-4 text-[#0066FF]" />
            <span>BUILT FOR LIFETIME DURABILITY</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#101828]">
            Engineering Specifications: Model HAWS-120
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 text-left">
          {specs.map((item, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-white border border-[#DCE2EB] shadow-xs hover:border-[#0066FF]/40 transition-all">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#667085] block mb-1">
                {item.label}
              </span>
              <span className="text-lg font-bold font-display text-[#101828] block mb-1">
                {item.value}
              </span>
              <span className="text-xs text-[#667085] block leading-relaxed">
                {item.detail}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Operational Flexibility & The Transparency Discount */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 text-left">
          
          {/* Operational Flexibility */}
          <div className="bg-white rounded-2xl sm:rounded-3xl border border-[#DCE2EB] p-6 sm:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-[#0066FF] text-xs font-mono font-bold tracking-wider uppercase mb-3">
                <CheckCircle2 className="w-4 h-4 text-[#0066FF]" />
                <span>OPERATIONAL FLEXIBILITY</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-[#101828] mb-4">
                Manual Ready with Full Automation Potential
              </h3>
              <p className="text-sm sm:text-base text-[#101828] leading-relaxed mb-4">
                This unit is <strong>fully operational as-is in manual mode</strong>, instantly blending and producing the desired high-pH output without needing any immediate component changes.
              </p>
              <p className="text-sm text-[#667085] leading-relaxed">
                Run your target blends right away for testing, pilot runs, or immediate plant buffering while planning any facility-specific automated sensor integrations.
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-[#DCE2EB] flex items-center gap-3 text-xs text-[#667085]">
              <Clock className="w-4 h-4 text-[#0066FF] shrink-0" />
              <span>Ready for immediate deployment upon facility connection.</span>
            </div>
          </div>

          {/* The Transparency Discount */}
          <div className="bg-[#F4F6FA] rounded-2xl sm:rounded-3xl border border-[#DCE2EB] p-6 sm:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-[#101828] text-xs font-mono font-bold tracking-wider uppercase mb-3">
                <AlertCircle className="w-4 h-4 text-[#0066FF]" />
                <span>THE TRANSPARENCY DISCOUNT</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-[#101828] mb-4">
                Full Automated Closed-Loop Control Scope
              </h3>
              <p className="text-sm sm:text-base text-[#101828] leading-relaxed mb-4">
                To run the system in full automated closed-loop control, a local PLC technician will need to:
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-[#101828] mb-4">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF] mt-2 shrink-0" />
                  <span>Wire final connections to the installed HMI/controllers</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF] mt-2 shrink-0" />
                  <span>Replace sensor probes (pH, TDS, temperature) to match your specific facility parameters</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF] mt-2 shrink-0" />
                  <span>Refresh UV lamps and sediment filter cartridges</span>
                </li>
              </ul>
              <div className="p-4 rounded-xl bg-white border border-[#DCE2EB] text-xs text-[#101828] leading-relaxed">
                <strong className="text-[#0066FF] block mb-1">Expert Support Included:</strong>
                A Hydrology Systems technician is available for complimentary remote guidance during installation and startup. On-site engineering visits can also be arranged (buyer covers travel and lodging).
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Why This is a High-ROI Investment Across Sectors */}
      <section className="py-12 bg-[#F4F6FA] border-t border-b border-[#DCE2EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-left">
          <div className="text-left mb-8">
            <span className="text-xs font-mono font-bold tracking-wider uppercase text-[#0066FF] block mb-2">
              CROSS-INDUSTRY VALUE PROPOSITION
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#101828]">
              Why This is a High-ROI Investment Across Sectors
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#DCE2EB] shadow-xs">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0066FF] block mb-2">
                AGRICULTURE, CANNABIS &amp; HYDROPONICS
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-[#101828] mb-3">
                Stable, Buffered High-pH Source
              </h3>
              <p className="text-sm text-[#667085] leading-relaxed mb-4">
                Secure a stable, buffered, high-pH inlet source optimized for maximum nutrient uptake without the high recurring cost of delivered liquid buffering chemicals.
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-[#101828]">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#0066FF]" />
                  <span>Prevents scale buildup in drip emitters, lines, and reservoirs</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#0066FF]" />
                  <span>Eliminates dangerous employee chemical handling in grow rooms</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#0066FF]" />
                  <span>Micro-dispersed alkalinity protects root zones against caustic shock</span>
                </li>
              </ul>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#DCE2EB] shadow-xs">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0066FF] block mb-2">
                FOOD &amp; BEVERAGE &amp; COOLING TOWERS
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-[#101828] mb-3">
                Bypass Caustic Soda Delivery Liabilities
              </h3>
              <p className="text-sm text-[#667085] leading-relaxed mb-4">
                Completely bypass the safety liabilities, secondary containment berms, and volatile market pricing of bulk sodium hydroxide (caustic soda) delivery.
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-[#101828]">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#0066FF]" />
                  <span>Prevents mineral scaling in heat exchangers, chillers, and boilers</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#0066FF]" />
                  <span>Produces pure, food-grade compliant effluent neutralization streams</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#0066FF]" />
                  <span>Immediate $111,000 CapEx savings compared to newly fabricated skids</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Need a Custom Build? */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#DCE2EB] text-left flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <span className="text-xs font-mono font-bold text-[#0066FF] uppercase tracking-wider block mb-1">
              CUSTOM ENGINEERING OPTION
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-display text-[#101828] mb-2">
              Need a Custom Skid Build for Higher Flow or Specific Chemistry?
            </h3>
            <p className="text-xs sm:text-sm text-[#667085] max-w-2xl leading-relaxed">
              If this unit's capacity doesn't perfectly match your plant specs, Hydrology Systems routinely designs and fabricates custom industrial skids from scratch to your exact engineering requirements within a <strong>60-day turnaround</strong>.
            </p>
          </div>
          <button
            onClick={() => onBookCallClick("Custom Skid Fabrication Inquiry (60-Day Turnaround)")}
            className="px-5 py-3 rounded-full border border-[#0066FF] text-[#0066FF] hover:bg-[#0066FF]/10 font-bold text-xs tracking-wider uppercase transition-colors shrink-0 cursor-pointer"
          >
            Request Custom Build Quote
          </button>
        </div>
      </section>

      {/* CTA Box: Secure This Asset Today */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#080B12] text-white border border-white/10 shadow-2xl text-left relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#0066FF]/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0066FF]/20 border border-[#0066FF]/40 text-[#0066FF] font-mono text-xs font-bold uppercase tracking-wider mb-4">
              <Clock className="w-3.5 h-3.5 text-[#0066FF]" />
              LIMITED TIME LIQUIDATION
            </span>
            <h3 className="text-2xl sm:text-4xl font-display font-bold text-white mb-4">
              Secure This Asset Today
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8">
              Contact our engineering sales team directly to lock in the <strong>$39,000 liquidation price</strong> before freight dispatch from our San Diego facility. Loading assistance is provided for your freight carrier.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={handleClaimClick}
                className="px-8 py-4 rounded-full bg-[#0066FF] hover:bg-[#0052cc] text-white font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg shadow-[#0066FF]/30 transition-all cursor-pointer text-center"
              >
                <span>Contact Engineering Sales ($39,000)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <button
                onClick={onBack}
                className="px-6 py-4 rounded-full bg-white/10 hover:bg-white/20 text-slate-200 border border-white/20 font-bold text-xs tracking-wider uppercase transition-colors cursor-pointer text-center"
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

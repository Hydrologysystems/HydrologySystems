/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowLeft, 
  Cpu, 
  Sliders, 
  Gauge, 
  Zap, 
  CheckCircle2, 
  FileText, 
  ArrowRight, 
  ChevronDown, 
  ChevronUp, 
  Phone, 
  Calculator, 
  ShieldCheck, 
  Layers, 
  Activity, 
  Droplet, 
  Flame, 
  Check, 
  Clock 
} from "lucide-react";

interface SpecGroup {
  title: string;
  category: string;
  items: { label: string; value: string; note?: string }[];
}

const SPEC_GROUPS: SpecGroup[] = [
  {
    title: "Solution Output & Process Chemistry",
    category: "Chemistry",
    items: [
      { label: "Delivered Output pH", value: "Up to 12.0 pH", note: "Continuous automated adjustment with real-time feedback" },
      { label: "Active Chemistry", value: "High-Purity Hydroxide Solution (NaOH / Alkaline Stream)", note: "Direct 1:1 functional substitution for delivered bulk liquid caustic soda or dry soda ash" },
      { label: "Dosing Stability", value: "Automated PID Trim Control", note: "Eliminates localized high-pH chemical shock and hazardous neutralization rebound" },
      { label: "Target Water Recovery", value: "High-Efficiency Recirculation", note: "Engineered for both closed-loop recycling and continuous industrial effluent discharge" },
      { label: "Concentration Control", value: "Variable Dosing Rate (0.5 – 100+ GPM Dosed)", note: "Configurable setpoints managed automatically via onboard PLC" },
      { label: "Byproduct Generation", value: "Clean, Neutralized Spent Media", note: "Zero hazardous sludge or unpumpable tank-bottom heels" }
    ]
  },
  {
    title: "Skid Mechanical, Piping & Integration",
    category: "Mechanical",
    items: [
      { label: "Skid Footprint Format", value: "Modular, Factory-Assembled 304/316 Stainless Steel Frame", note: "Pre-wired, pre-plumbed, drop-in footprint ready for immediate forklift placement" },
      { label: "Process Fluid Connections", value: "Standard ANSI 150# Flanges & Sanitary Tri-Clamp Ports", note: "Drop-in tie-in to plant effluent manifolds and neutralization reaction tanks" },
      { label: "Feedwater Requirements", value: "Softened / Potable Industrial Feedwater (TDS < 300 ppm)", note: "Integrated brine conditioning and pre-filtration stages included on skid" },
      { label: "Wetted Materials of Construction", value: "CPVC, PTFE, PVDF & 316L Stainless Steel", note: "Full industrial chemical compatibility with high-pH alkaline media" },
      { label: "Containment Profile", value: "Zero Secondary Bulk Spill Containment Berm Required", note: "Eliminates EPA SPCC compliance and OSHA Process Safety Management (PSM) tank inspections" },
      { label: "Lifting & Rigging", value: "Integrated Forklift Pockets & Overhead Crane Hoist Eyes", note: "Rapid offloading and positioning with standard plant rigging equipment" }
    ]
  },
  {
    title: "Electrical, Automation & Instrumentation",
    category: "Electrical & Controls",
    items: [
      { label: "Control Architecture", value: "Allen-Bradley / Siemens Industrial PLC with Color Touchscreen HMI", note: "Live graphical process flow diagrams, setpoint adjustments, and event logging" },
      { label: "SCADA & Telemetry Integration", value: "Modbus TCP/IP, Ethernet/IP, 4-20mA Analog, Dry Alarm Contacts", note: "Seamless remote monitoring, automated alarming, and central control room handshakes" },
      { label: "Safety Interlock Matrix", value: "Fail-Safe Over-Pressure, Low-Flow & High-Temp Automatic Cutoffs", note: "Triple-redundant hardware safety shutoff valves and emergency-stop circuit" },
      { label: "Monitoring Sensors", value: "Dual Redundant In-Line pH & Conductivity Probes", note: "Self-cleaning electrodes with automated calibration drift alerts" },
      { label: "Power Requirements", value: "480V 3-Phase, 60 Hz (208V / 240V / 380V 50Hz options available)", note: "UL 508A certified industrial control panel with main circuit breaker disconnect" },
      { label: "Environmental Rating", value: "NEMA 4X / IP66 Watertight & Chemical-Resistant Enclosure", note: "Rated for indoor processing floors or shaded outdoor installation pads" }
    ]
  }
];

interface TechnicalSpecificationsViewProps {
  onBack: () => void;
  onBookCallClick: (presetSubject?: string) => void;
  onCalculatorClick: () => void;
}

export default function TechnicalSpecificationsView({
  onBack,
  onBookCallClick,
  onCalculatorClick,
}: TechnicalSpecificationsViewProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const originalTitle = document.title;
    document.title = "Engineering Specifications: On-Site Alkaline Skids | Hydrology Systems";
    return () => {
      document.title = originalTitle;
    };
  }, []);

  const categories = ["All", "Chemistry", "Mechanical", "Electrical & Controls"];

  const filteredGroups = selectedCategory === "All"
    ? SPEC_GROUPS
    : SPEC_GROUPS.filter(g => g.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#F4F6FA] text-[#101828] font-sans pt-16 sm:pt-20 md:pt-24 pb-16 sm:pb-20">
      
      {/* Sticky Top Breadcrumb Bar */}
      <div className="bg-white/95 backdrop-blur-md border-b border-[#DCE2EB] sticky top-14 sm:top-16 z-30 py-3 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={onBack}
              className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#667085] hover:text-[#0066FF] bg-white border border-[#DCE2EB] hover:bg-slate-50 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Overview</span>
            </button>
            <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-[#667085]">
              <span>/</span>
              <span className="text-[#101828] font-semibold">Engineering Specifications</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onCalculatorClick}
              className="hidden md:inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-wider text-[#0066FF] bg-[#0066FF]/10 hover:bg-[#0066FF]/20 border border-[#0066FF]/30 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
            >
              <Calculator className="w-3.5 h-3.5" />
              <span>ROI Calculator</span>
            </button>
            <button
              onClick={() => onBookCallClick("Engineering Spec Sheet & CAD Package Request")}
              className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-wider text-white bg-[#0066FF] hover:bg-[#0052cc] px-3.5 py-1.5 rounded-lg transition-colors cursor-pointer shadow-xs"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Request CAD &amp; Submittal</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12">
        
        {/* Header Hero Section */}
        <div className="mb-10 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0066FF]/10 border border-[#0066FF]/30 text-[#0066FF] text-xs font-mono font-bold tracking-wider uppercase mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>HYD-SPEC-2026 // ENGINEERING SPECIFICATIONS</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-[#101828] tracking-tight leading-tight">
            On-Site Alkaline Generator Skid Specifications
          </h1>
          <p className="text-[#667085] text-sm sm:text-base lg:text-lg mt-3 max-w-4xl leading-relaxed">
            Full engineering baselines, process chemistry parameters, skid footprints, electrical ratings, instrumentation, and drop-in integration guidelines for facility engineers, EPCs, and EHS managers sizing automated pH neutralization and chemical substitution skids.
          </p>
        </div>

        {/* Quick Highlights Summary Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          <div className="p-5 rounded-2xl bg-white border border-[#DCE2EB] shadow-xs">
            <div className="flex items-center gap-2 text-[#0066FF] mb-2">
              <Droplet className="w-4 h-4" />
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#667085]">Delivered Alkalinity</span>
            </div>
            <div className="text-2xl sm:text-3xl font-bold font-display text-[#101828]">Up to pH 12.0</div>
            <p className="text-xs text-[#667085] mt-1">Continuous automated generation on demand</p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-[#DCE2EB] shadow-xs">
            <div className="flex items-center gap-2 text-[#0066FF] mb-2">
              <Flame className="w-4 h-4" />
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#667085]">Chemical Elimination</span>
            </div>
            <div className="text-2xl sm:text-3xl font-bold font-display text-[#101828]">100% Bulk NaOH</div>
            <p className="text-xs text-[#667085] mt-1">Replaces delivered caustic soda &amp; soda ash</p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-[#DCE2EB] shadow-xs">
            <div className="flex items-center gap-2 text-[#0066FF] mb-2">
              <Activity className="w-4 h-4" />
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#667085]">Control &amp; SCADA</span>
            </div>
            <div className="text-2xl sm:text-3xl font-bold font-display text-[#101828]">PLC + HMI</div>
            <p className="text-xs text-[#667085] mt-1">Modbus TCP, 4-20mA, PID trim loops</p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-[#DCE2EB] shadow-xs">
            <div className="flex items-center gap-2 text-[#0066FF] mb-2">
              <Layers className="w-4 h-4" />
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#667085]">Mechanical Skid</span>
            </div>
            <div className="text-2xl sm:text-3xl font-bold font-display text-[#101828]">Drop-In Ready</div>
            <p className="text-xs text-[#667085] mt-1">Factory wet-tested 304/316 stainless</p>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#667085] mr-2">Filter Section:</span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold tracking-wider uppercase transition-colors cursor-pointer ${
                selectedCategory === cat
                  ? "bg-[#0066FF] text-white shadow-xs"
                  : "bg-white text-[#667085] border border-[#DCE2EB] hover:bg-slate-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Detailed Specification Cards */}
        <div className="space-y-8 mb-12">
          {filteredGroups.map((group) => (
            <div key={group.title} className="bg-white rounded-2xl border border-[#DCE2EB] overflow-hidden shadow-xs">
              <div className="px-6 py-4 bg-[#080B12] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#0066FF]/20 text-[#0066FF] border border-[#0066FF]/40 uppercase">
                    {group.category}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold font-display tracking-tight text-white">
                    {group.title}
                  </h3>
                </div>
                <span className="text-xs font-mono text-slate-400">Standard Production Skid Baseline</span>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {group.items.map((item) => (
                    <div key={item.label} className="p-4 rounded-xl bg-[#F4F6FA] border border-[#DCE2EB] hover:border-[#0066FF]/40 transition-colors">
                      <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#667085] mb-1">
                        {item.label}
                      </div>
                      <div className="text-base font-bold text-[#101828] mb-1.5">
                        {item.value}
                      </div>
                      {item.note && (
                        <p className="text-xs text-[#667085] leading-relaxed flex items-start gap-1.5">
                          <Check className="w-3.5 h-3.5 text-[#0066FF] shrink-0 mt-0.5" />
                          <span>{item.note}</span>
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Plant Integration & Tie-In Checklist */}
        <div className="bg-[#080B12] text-white rounded-3xl p-6 sm:p-10 mb-12 shadow-xl border border-white/10">
          <div className="max-w-3xl mb-8">
            <span className="text-[#0066FF] font-mono text-xs font-bold uppercase tracking-wider block mb-2">
              FACILITY INTEGRATION CHECKLIST
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
              Rapid Drop-In Skid Deployment Requirements
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-2">
              Our pre-plumbed, pre-wired skids are engineered to minimize plant downtime during retrofit. Typical mechanical and electrical commissioning takes less than 72 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
              <div className="w-8 h-8 rounded-lg bg-[#0066FF]/20 text-[#0066FF] flex items-center justify-center font-mono font-bold text-sm mb-3">
                01
              </div>
              <h4 className="font-bold text-sm text-white mb-2">Piping &amp; Hydraulics</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Connect incoming softened/potable supply line (1.5"–2" NPT) and tie the skid discharge manifold directly into existing neutralization tanks or inline dosing quills.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
              <div className="w-8 h-8 rounded-lg bg-[#0066FF]/20 text-[#0066FF] flex items-center justify-center font-mono font-bold text-sm mb-3">
                02
              </div>
              <h4 className="font-bold text-sm text-white mb-2">Power Supply Drop</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Provide single dedicated 480V 3-phase industrial power drop to the integrated UL-508A control panel. Built-in breaker switch provides local lock-out/tag-out.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
              <div className="w-8 h-8 rounded-lg bg-[#0066FF]/20 text-[#0066FF] flex items-center justify-center font-mono font-bold text-sm mb-3">
                03
              </div>
              <h4 className="font-bold text-sm text-white mb-2">SCADA &amp; pH Feedback</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Wire plant effluent pH probe signal (4-20mA) into the PLC input terminals, or connect via Modbus TCP/IP for supervisory plant control and 24/7 telemetry.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10">
            <div className="flex items-center gap-3">
              <FileText className="w-5 h-5 text-[#0066FF] shrink-0" />
              <span className="text-xs sm:text-sm text-slate-200">
                Need engineering submittal drawings, P&amp;ID schematics, or specific electrical load calculations?
              </span>
            </div>
            <button
              onClick={() => onBookCallClick("Engineering Submittal & Spec Sheet Package")}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#0066FF] hover:bg-[#0052cc] text-white font-bold text-xs font-mono uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer shrink-0 shadow-md shadow-[#0066FF]/25"
            >
              <span>Download Engineering Package</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

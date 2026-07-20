import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import skidImage from "../assets/images/hydrology_system_isolated_1783536156001.jpg";
import techBgImage from "../assets/images/refinery_equipment_bg_1782937594866.jpg";

export default function Technology() {
  const [activeTab, setActiveTab] = useState<"hcr" | "ehg">("hcr");
  const [selectedFlowStep, setSelectedFlowStep] = useState<string>("all");
  const [viewMode, setViewMode] = useState<"physical" | "cutaway">("physical");

  const techSpecs = {
    hcr: {
      title: "Hydroxide Catalyst Reactor (HCR)",
      subtitle: "Primary Phase Catalytic Extraction",
      description: "The Hydroxide Catalyst Reactor (HCR) is our first-stage proprietary catalyst column. It acts as an advanced molecular activator, using specialized catalytic media to break apart the ionic clusters of incoming water. This pre-conditions the fluid, facilitating the clean ionic separation of hydrogen and hydroxide ions without requiring hazardous feed chemicals.",
      specs: [
        { label: "Operating Mode", value: "Continuous Catalytic" },
        { label: "Inlet Fluid Compatibility", value: "Municipal or Softened Ground Water" },
        { label: "Response Threshold", value: "<15 Milliseconds" },
        { label: "Primary Catalyst Media", value: "Crystalline Lanthanide Core (HAS-Catalyst)" }
      ]
    },
    ehg: {
      title: "Electrochemical Hydroxide Generator (EHG)",
      subtitle: "Secondary Electrolytic Concentration Module",
      description: "The EHG Module is the electrochemical heart of the Hydrology platform. Utilizing state-of-the-art proton-exchange membranes and low-overpotential noble metal electrodes, it applies a controlled electromagnetic field to the pre-conditioned water stream. The EHG separates and concentrates hydroxide ions (OH⁻) to generate a stable, pure pH 12 neutralizing solution directly at your facility.",
      specs: [
        { label: "Separation Membrane", value: "Bipolar Ion-Exchange Membrane (BEM)" },
        { label: "Anode/Cathode Composition", value: "Titanium Substrate with Iridium Oxide Coating" },
        { label: "Power Efficiency", value: "94.2% DC-to-Chemical Conversion Rate" },
        { label: "Output Agent", value: "Stable pH 12 Hydroxide Solution" }
      ]
    }
  };

  const handleTabChange = (tab: "hcr" | "ehg") => {
    setActiveTab(tab);
    setSelectedFlowStep(tab);
  };

  const handleFlowStepChange = (step: string) => {
    setSelectedFlowStep(step);
    if (step === "hcr") setActiveTab("hcr");
    if (step === "ehg") setActiveTab("ehg");
  };

  return (
    <section
      id="technology"
      className="relative py-24 sm:py-32 bg-slate-950 border-t border-slate-900 overflow-hidden"
    >
      {/* Immersive Darkened Industrial Background Texture */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={techBgImage}
          alt="Stainless Steel Industrial Valves and Piping Background"
          className="w-full h-full object-cover opacity-10 filter brightness-[0.20] contrast-[1.2]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/80 to-slate-950" />
      </div>

      {/* Visual background flares */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(6,182,212,0.05),transparent_40%)] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-4xl mb-16 lg:mb-20">
          <h2
            className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mt-1"
            id="tech-headline"
          >
            Hydraulic pH Power:{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-cyan-300">
              Cleaner, Safer, Cheaper
            </span>
          </h2>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Interactive Engineering Tabs */}
          <div className="lg:col-span-4 flex flex-col">
            {/* Tab Selectors */}
            <div className="flex gap-2 p-1.5 rounded bg-slate-900 border border-slate-800 mb-8 max-w-md">
              <button
                onClick={() => handleTabChange("hcr")}
                className={`flex-1 py-2.5 px-4 rounded-sm text-xs font-sans font-bold tracking-wider transition-all cursor-pointer ${
                  activeTab === "hcr"
                    ? "bg-brand-teal text-slate-950 glow-teal font-extrabold"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                HCR REACTOR
              </button>
              <button
                onClick={() => handleTabChange("ehg")}
                className={`flex-1 py-2.5 px-4 rounded-sm text-xs font-sans font-bold tracking-wider transition-all cursor-pointer ${
                  activeTab === "ehg"
                    ? "bg-brand-teal text-slate-950 glow-teal font-extrabold"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                EHG MODULE
              </button>
            </div>

            {/* Dynamic Content Display */}
            <div className="min-h-[380px] flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col gap-6"
                >
                  <div>
                    <span className="font-mono text-[10px] text-brand-cyan tracking-widest uppercase block mb-1">
                      {techSpecs[activeTab].subtitle}
                    </span>
                    <h3 className="font-display text-2xl font-bold text-slate-100">
                      {techSpecs[activeTab].title}
                    </h3>
                  </div>

                  <p className="font-sans text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {techSpecs[activeTab].description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-slate-900">
                    {techSpecs[activeTab].specs.map((spec, i) => (
                      <div
                        key={i}
                        className="p-3.5 rounded bg-slate-900/60 border border-slate-800/60 flex flex-col gap-1"
                      >
                        <span className="font-mono text-[9px] text-slate-500 uppercase tracking-wider">
                          {spec.label}
                        </span>
                        <span className="font-sans text-xs font-bold text-slate-200">
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right: Cutaway Multi-Tank Skid Model showing inside the vessels */}
          <div className="lg:col-span-8 relative rounded-[1.5rem] border border-slate-800/80 bg-slate-950 overflow-hidden flex flex-col items-center justify-between p-4 shadow-2xl min-h-[500px] sm:min-h-[560px] group">
            
            {/* Technical Header details */}
            <div className="w-full flex justify-between items-start z-20 pb-2 border-b border-slate-900">
              <div className="flex flex-col gap-0.5">
                <span className="font-mono text-[8px] text-brand-teal uppercase tracking-widest font-black">
                  {viewMode === "physical" ? "SYSTEM HARDWARE MODEL" : "SYSTEM PID CUTAWAY DIAGRAM"}
                </span>
                <span className="font-sans text-xs font-bold text-slate-200">
                  {viewMode === "physical" ? "Original S-7 Physical Industrial Skid Platform" : "On-Site Hydrology Skid (MODEL-S7) • Internal Fluid Dynamics"}
                </span>
              </div>
              <div className="px-2 py-0.5 rounded bg-brand-emerald/10 border border-brand-emerald/20 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald animate-pulse" />
                <span className="font-mono text-[8px] text-brand-emerald tracking-wide uppercase font-bold">
                  {viewMode === "physical" ? "SKID HARDWARE: PHOTO REFERENCE" : "SKID TELEMETRY: ACTIVE CUTAWAY VIEW"}
                </span>
              </div>
            </div>

            {/* Toggle tabs to prioritize seeing the original model image first */}
            <div className="w-full flex gap-2 p-1 rounded bg-slate-900 border border-slate-800 mb-3 z-20 mt-3">
              <button
                onClick={() => setViewMode("physical")}
                className={`flex-1 py-2 px-3 rounded text-[10px] font-mono tracking-wider font-extrabold uppercase transition-all cursor-pointer text-center ${
                  viewMode === "physical"
                    ? "bg-brand-teal text-slate-950 font-black shadow-[0_0_12px_rgba(20,184,166,0.4)]"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                📷 PHYSICAL SYSTEM MODEL (S-7 SKID)
              </button>
              <button
                onClick={() => setViewMode("cutaway")}
                className={`flex-1 py-2 px-3 rounded text-[10px] font-mono tracking-wider font-extrabold uppercase transition-all cursor-pointer text-center ${
                  viewMode === "cutaway"
                    ? "bg-brand-teal text-slate-950 font-black shadow-[0_0_12px_rgba(20,184,166,0.4)]"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                ⚡ INTERACTIVE PROCESS FLOW DIAGRAM
              </button>
            </div>

            {/* Interactive Vector Skid Visualization */}
            <div className="relative w-full flex-grow flex items-center justify-center p-2 z-10 select-none min-h-[350px]">
              {viewMode === "physical" ? (
                <div className="relative rounded-xl border border-slate-800 bg-slate-950/40 p-1.5 overflow-hidden shadow-2xl group w-full flex items-center justify-center max-w-3xl">
                  <img
                    id="technology-skid-image"
                    src={skidImage}
                    alt="Hydrology On-site Physical Skid System S-7 Model"
                    referrerPolicy="no-referrer"
                    className="object-contain max-h-[400px] w-full rounded-lg transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                  />
                  <div className="absolute bottom-4 left-4 bg-slate-950/80 backdrop-blur-md border border-slate-800/80 rounded px-2.5 py-1.5 font-mono text-[9px] text-slate-300 flex items-center gap-1.5 shadow-lg">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-teal animate-pulse" />
                    <span>SYSTEM DEPLOYMENT SKU: HYD-S7-C</span>
                  </div>
                </div>
              ) : (
                <svg
                viewBox="0 0 800 480"
                fill="none"
                className="w-full h-auto max-h-[440px] transition-all duration-300"
                xmlns="http://www.w3.org/2000/svg"
              >
                <style>{`
                  @keyframes dash {
                    to {
                      stroke-dashoffset: -40;
                    }
                  }
                  @keyframes pulseGlow {
                    0%, 100% { filter: drop-shadow(0 0 2px rgba(6, 182, 212, 0.4)); opacity: 0.85; }
                    50% { filter: drop-shadow(0 0 8px rgba(6, 182, 212, 0.95)); opacity: 1; }
                  }
                  @keyframes bubbleUp {
                    0% { transform: translateY(0px) translateX(0px); opacity: 0; }
                    10% { opacity: 0.8; }
                    90% { opacity: 0.8; }
                    100% { transform: translateY(-70px) translateX(3px); opacity: 0; }
                  }
                  @keyframes fluidSwirl {
                    0%, 100% { transform: rotate(0deg) scale(1); }
                    50% { transform: rotate(3deg) scale(1.02); }
                  }
                  @keyframes ionFloat {
                    0%, 100% { transform: translateY(0) translateX(0); }
                    50% { transform: translateY(-10px) translateX(5px); }
                  }
                  .flow-line {
                    stroke-dasharray: 6, 8;
                    animation: dash 1.2s linear infinite;
                  }
                  .bubble {
                    animation: bubbleUp 3s ease-in-out infinite;
                  }
                  .bubble-fast {
                    animation: bubbleUp 1.8s ease-in-out infinite;
                  }
                  .swirling-fluid {
                    transform-origin: center;
                    animation: fluidSwirl 6s ease-in-out infinite;
                  }
                  .ion {
                    animation: ionFloat 4s ease-in-out infinite;
                  }
                `}</style>

                <defs>
                  {/* Polished Stainless Steel Gradients */}
                  <linearGradient id="metalSilver" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#1e293b" />
                    <stop offset="15%" stopColor="#475569" />
                    <stop offset="35%" stopColor="#cbd5e1" />
                    <stop offset="50%" stopColor="#f8fafc" />
                    <stop offset="65%" stopColor="#cbd5e1" />
                    <stop offset="85%" stopColor="#64748b" />
                    <stop offset="100%" stopColor="#0f172a" />
                  </linearGradient>

                  <linearGradient id="metalSilverDark" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#0f172a" />
                    <stop offset="50%" stopColor="#334155" />
                    <stop offset="100%" stopColor="#020617" />
                  </linearGradient>

                  {/* Translucent Cutaway Fluid Gradients */}
                  <linearGradient id="fluidBlue" x1="0%" y1="100%" x2="0%" y2="0%">
                    <stop offset="0%" stopColor="rgba(14, 165, 233, 0.45)" />
                    <stop offset="80%" stopColor="rgba(56, 189, 248, 0.3)" />
                    <stop offset="100%" stopColor="rgba(186, 230, 253, 0.1)" />
                  </linearGradient>

                  <linearGradient id="fluidTeal" x1="0%" y1="100%" x2="0%" y2="0%">
                    <stop offset="0%" stopColor="rgba(20, 184, 166, 0.5)" />
                    <stop offset="70%" stopColor="rgba(45, 212, 191, 0.35)" />
                    <stop offset="100%" stopColor="rgba(153, 246, 228, 0.15)" />
                  </linearGradient>

                  <linearGradient id="fluidIndigo" x1="0%" y1="100%" x2="0%" y2="0%">
                    <stop offset="0%" stopColor="rgba(99, 102, 241, 0.6)" />
                    <stop offset="70%" stopColor="rgba(129, 140, 248, 0.4)" />
                    <stop offset="100%" stopColor="rgba(199, 210, 254, 0.15)" />
                  </linearGradient>

                  {/* PLC Screen Gradient */}
                  <linearGradient id="screenGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#0284c7" />
                    <stop offset="100%" stopColor="#0c4a6e" />
                  </linearGradient>

                  {/* High-visibility Arrowheads */}
                  <marker id="arrow-intake" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto">
                    <path d="M 0 1.5 L 8 5 L 0 8.5 Z" fill="#38bdf8" />
                  </marker>
                  <marker id="arrow-hcr" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto">
                    <path d="M 0 1.5 L 8 5 L 0 8.5 Z" fill="#0ea5e9" />
                  </marker>
                  <marker id="arrow-ehg" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto">
                    <path d="M 0 1.5 L 8 5 L 0 8.5 Z" fill="#06b6d4" />
                  </marker>
                  <marker id="arrow-storage" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto">
                    <path d="M 0 1.5 L 8 5 L 0 8.5 Z" fill="#10b981" />
                  </marker>
                  <marker id="arrow-discharge" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto">
                    <path d="M 0 1.5 L 8 5 L 0 8.5 Z" fill="#6366f1" />
                  </marker>
                </defs>

                {/* Technical background grids */}
                <circle cx="400" cy="240" r="160" stroke="#334155" strokeWidth="0.5" strokeDasharray="3 6" opacity="0.15" />
                <line x1="400" y1="40" x2="400" y2="440" stroke="#334155" strokeWidth="0.5" strokeDasharray="2 4" opacity="0.15" />

                {/* 1. STRUCTURAL SLAB BASE & SUPPORT LEGS */}
                <rect x="40" y="420" width="720" height="15" fill="#1e293b" rx="2" stroke="#334155" strokeWidth="1" />
                <rect x="60" y="145" width="680" height="10" fill="url(#metalSilver)" rx="1" />

                {/* Vertical Support Beams */}
                <g fill="url(#metalSilver)" opacity="0.85">
                  <rect x="70" y="155" width="14" height="265" />
                  <rect x="230" y="155" width="14" height="265" />
                  <rect x="450" y="155" width="14" height="265" />
                  <rect x="650" y="155" width="14" height="265" />
                </g>

                {/* Top Handrails */}
                <g stroke="#475569" strokeWidth="1.5">
                  <line x1="60" y1="145" x2="60" y2="90" />
                  <line x1="160" y1="145" x2="160" y2="90" />
                  <line x1="260" y1="145" x2="260" y2="90" />
                  <line x1="360" y1="145" x2="360" y2="90" />
                  <line x1="460" y1="145" x2="460" y2="90" />
                  <line x1="560" y1="145" x2="560" y2="90" />
                  <line x1="650" y1="145" x2="650" y2="90" />
                  <line x1="60" y1="90" x2="650" y2="90" strokeWidth="2" />
                  <line x1="60" y1="118" x2="650" y2="118" />
                </g>

                {/* Staircase */}
                <g stroke="#475569" strokeWidth="1.5" strokeLinecap="round">
                  <line x1="650" y1="145" x2="710" y2="255" strokeWidth="2" />
                  <line x1="650" y1="90" x2="710" y2="200" strokeWidth="2" />
                  <line x1="655" y1="155" x2="670" y2="155" />
                  <line x1="660" y1="165" x2="675" y2="165" />
                  <line x1="665" y1="175" x2="680" y2="175" />
                  <line x1="670" y1="185" x2="685" y2="185" />
                  <line x1="675" y1="195" x2="690" y2="195" />
                  <line x1="680" y1="205" x2="695" y2="205" />
                  <line x1="685" y1="215" x2="700" y2="215" />
                  <line x1="690" y1="225" x2="705" y2="225" />
                  <line x1="695" y1="235" x2="710" y2="235" />
                </g>

                {/* 2. THREE LARGE TOP VESSELS WITH CUTAWAY INTERNAL VIEWS */}
                
                {/* --- VESSEL 1 (Left Tank): Hydrology Alkaline Product Storage --- */}
                <g opacity={selectedFlowStep === "discharge" || selectedFlowStep === "all" ? 1 : 0.6} className="transition-all duration-300">
                  {/* Outer Dome & Body backing */}
                  <path d="M 80 50 Q 150 22 220 50 Z" fill="#0c111d" />
                  <rect x="80" y="50" width="140" height="95" fill="#0c111d" />
                  
                  {/* Internal Swirling Fluid (Alkaline pH 12, Indigo/Violet theme) */}
                  <g clipPath="url(#vessel1Clip)">
                    <clipPath id="vessel1Clip">
                      <rect x="83" y="50" width="134" height="92" rx="3" />
                    </clipPath>
                    {/* Liquid Level representation */}
                    <rect x="83" y="75" width="134" height="67" fill="url(#fluidIndigo)" />
                    {/* Wavy top surface of the fluid */}
                    <path d="M 83 75 Q 115 70 150 75 T 217 75 L 217 80 L 83 80 Z" fill="rgba(129, 140, 248, 0.4)" className="swirling-fluid" />
                    
                    {/* Swirling active ions & microbubbles */}
                    <g opacity="0.8">
                      {/* OH- Ions floating */}
                      <g className="ion" style={{ animationDelay: "0s" }}>
                        <circle cx="110" cy="100" r="7" fill="#818cf8" opacity="0.7" />
                        <text x="110" y="103" fill="#ffffff" fontSize="8" fontWeight="bold" fontFamily="monospace" textAnchor="middle">OH⁻</text>
                      </g>
                      <g className="ion" style={{ animationDelay: "1.5s" }}>
                        <circle cx="180" cy="115" r="7" fill="#818cf8" opacity="0.7" />
                        <text x="180" y="118" fill="#ffffff" fontSize="8" fontWeight="bold" fontFamily="monospace" textAnchor="middle">OH⁻</text>
                      </g>
                      {/* Na+ ions floating */}
                      <g className="ion" style={{ animationDelay: "0.8s" }}>
                        <circle cx="150" cy="92" r="6" fill="#38bdf8" opacity="0.6" />
                        <text x="150" y="94" fill="#ffffff" fontSize="6.5" fontWeight="bold" fontFamily="monospace" textAnchor="middle">Na⁺</text>
                      </g>
                      <g className="ion" style={{ animationDelay: "2.3s" }}>
                        <circle cx="125" cy="122" r="6" fill="#38bdf8" opacity="0.6" />
                        <text x="125" y="124" fill="#ffffff" fontSize="6.5" fontWeight="bold" fontFamily="monospace" textAnchor="middle">Na⁺</text>
                      </g>
                      
                      {/* Micro bubbles rising */}
                      <circle cx="100" cy="130" r="1.5" fill="#ffffff" className="bubble-fast" style={{ animationDelay: "0.2s" }} />
                      <circle cx="140" cy="125" r="1" fill="#ffffff" className="bubble" style={{ animationDelay: "0.9s" }} />
                      <circle cx="165" cy="132" r="2.2" fill="#ffffff" className="bubble-fast" style={{ animationDelay: "1.4s" }} />
                    </g>

                    {/* Internal vertical discharge suction pipe */}
                    <rect x="147" y="55" width="6" height="85" fill="url(#metalSilver)" opacity="0.8" />
                    <circle cx="150" cy="138" r="4.5" fill="#cbd5e1" />
                  </g>

                  {/* Translucent Glass Rim Highlights & Label Overlay */}
                  <path d="M 80 50 Q 150 22 220 50" stroke="url(#metalSilver)" strokeWidth="3.5" fill="none" />
                  <rect x="80" y="50" width="140" height="95" stroke="url(#metalSilver)" strokeWidth="3" fill="none" rx="2" />
                  
                  {/* Subtle glass reflection highlight */}
                  <path d="M 85 55 L 85 140" stroke="#ffffff" strokeWidth="1.5" opacity="0.25" strokeLinecap="round" />
                  <path d="M 215 55 L 215 140" stroke="#cbd5e1" strokeWidth="1" opacity="0.15" />

                  {/* HUD Indicator Label on Left Glass */}
                  <rect x="105" y="112" width="90" height="22" rx="3" fill="rgba(15, 23, 42, 0.85)" stroke="#6366f1" strokeWidth="1" />
                  <text x="150" y="121" fill="#c7d2fe" fontSize="6" fontWeight="bold" fontFamily="monospace" textAnchor="middle">FINISHED NEUTRALIZER</text>
                  <text x="150" y="129" fill="#818cf8" fontSize="7.5" fontWeight="black" fontFamily="monospace" textAnchor="middle">pH 12.00 • BUFFERED</text>
                </g>

                {/* --- VESSEL 2 (Middle Tank): Swirling Prep / Catalyst Recycle Buffer --- */}
                <g opacity={selectedFlowStep === "storage" || selectedFlowStep === "all" ? 1 : 0.6} className="transition-all duration-300">
                  {/* Outer backing */}
                  <path d="M 275 42 Q 350 15 425 42 Z" fill="#0c111d" />
                  <rect x="275" y="42" width="150" height="103" fill="#0c111d" />

                  {/* Internal Swirling Fluid (Pre-conditioned Catalyst water, Teal Theme) */}
                  <g clipPath="url(#vessel2Clip)">
                    <clipPath id="vessel2Clip">
                      <rect x="278" y="42" width="144" height="100" rx="3" />
                    </clipPath>
                    {/* Liquid Level */}
                    <rect x="278" y="62" width="144" height="80" fill="url(#fluidTeal)" />
                    {/* Wavy top surface */}
                    <path d="M 278 62 Q 310 57 350 62 T 422 62 L 422 67 L 278 67 Z" fill="rgba(45, 212, 191, 0.4)" className="swirling-fluid" />
                    
                    {/* Activated energy particles swirling in middle tank */}
                    <g opacity="0.8">
                      {/* Active Catalyzed clusters */}
                      <g className="ion" style={{ animationDelay: "0.2s" }}>
                        <circle cx="310" cy="90" r="5" fill="#2dd4bf" opacity="0.6" />
                        <circle cx="316" cy="86" r="4.5" fill="#06b6d4" opacity="0.5" />
                        <line x1="310" y1="90" x2="316" y2="86" stroke="#ffffff" strokeWidth="0.8" opacity="0.6" />
                      </g>
                      <g className="ion" style={{ animationDelay: "1.8s" }}>
                        <circle cx="390" cy="110" r="5" fill="#2dd4bf" opacity="0.6" />
                        <circle cx="396" cy="106" r="4.5" fill="#06b6d4" opacity="0.5" />
                        <line x1="390" y1="110" x2="396" y2="106" stroke="#ffffff" strokeWidth="0.8" opacity="0.6" />
                      </g>
                      {/* H2O active split representation */}
                      <text x="350" y="105" fill="#99f6e4" fontSize="7" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle" className="ion">H₂O ACTIVATED</text>
                    </g>

                    {/* Internal vertical screen pipe core */}
                    <rect x="345" y="47" width="10" height="90" fill="url(#metalSilver)" opacity="0.8" />
                    <line x1="345" y1="65" x2="355" y2="65" stroke="#1e293b" strokeWidth="1" />
                    <line x1="345" y1="80" x2="355" y2="80" stroke="#1e293b" strokeWidth="1" />
                    <line x1="345" y1="95" x2="355" y2="95" stroke="#1e293b" strokeWidth="1" />
                  </g>

                  {/* Translucent Glass Rim Highlights & Dial Overlay */}
                  <path d="M 275 42 Q 350 15 425 42" stroke="url(#metalSilver)" strokeWidth="3.5" fill="none" />
                  <rect x="275" y="42" width="150" height="103" stroke="url(#metalSilver)" strokeWidth="3" fill="none" rx="2" />
                  
                  {/* Glass highlights */}
                  <path d="M 280 47 L 280 142" stroke="#ffffff" strokeWidth="1.5" opacity="0.25" strokeLinecap="round" />
                  <path d="M 420 47 L 420 142" stroke="#cbd5e1" strokeWidth="1" opacity="0.15" />

                  {/* HUD Label for Middle Tank */}
                  <rect x="305" y="112" width="90" height="22" rx="3" fill="rgba(15, 23, 42, 0.85)" stroke="#14b8a6" strokeWidth="1" />
                  <text x="350" y="121" fill="#99f6e4" fontSize="6" fontWeight="bold" fontFamily="monospace" textAnchor="middle">CATALYTIC RECYCLE</text>
                  <text x="350" y="129" fill="#2dd4bf" fontSize="7.5" fontWeight="black" fontFamily="monospace" textAnchor="middle">PRE-CONDITIONED</text>
                </g>

                {/* --- VESSEL 3 (Right Tank): Raw Water Intake Surge & Feed Buffer --- */}
                <g opacity={selectedFlowStep === "intake" || selectedFlowStep === "all" ? 1 : 0.6} className="transition-all duration-300">
                  {/* Outer backing */}
                  <path d="M 480 50 Q 550 22 620 50 Z" fill="#0c111d" />
                  <rect x="480" y="50" width="140" height="95" fill="#0c111d" />

                  {/* Internal Swirling Fluid (Raw input water, Blue Theme) */}
                  <g clipPath="url(#vessel3Clip)">
                    <clipPath id="vessel3Clip">
                      <rect x="483" y="50" width="134" height="92" rx="3" />
                    </clipPath>
                    {/* Liquid Level */}
                    <rect x="483" y="80" width="134" height="62" fill="url(#fluidBlue)" />
                    {/* Wavy surface */}
                    <path d="M 483 80 Q 515 75 550 80 T 617 80 L 617 85 L 483 85 Z" fill="rgba(56, 189, 248, 0.4)" className="swirling-fluid" />
                    
                    {/* Internal feed diffuser nozzle */}
                    <line x1="550" y1="52" x2="550" y2="92" stroke="url(#metalSilver)" strokeWidth="5.5" />
                    <path d="M 542 92 L 558 92 L 562 98 L 538 98 Z" fill="url(#metalSilver)" />
                    {/* Water spraying out of diffuser */}
                    <path d="M 538 98 Q 525 108 520 120 M 562 98 Q 575 108 580 120" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" opacity="0.8" className="animate-pulse" />
                    
                    {/* Swirling clean particles */}
                    <circle cx="510" cy="115" r="2.5" fill="#e0f2fe" opacity="0.6" className="ion" style={{ animationDelay: "0.5s" }} />
                    <circle cx="590" cy="105" r="2" fill="#e0f2fe" opacity="0.6" className="ion" style={{ animationDelay: "1.5s" }} />
                  </g>

                  {/* Translucent Glass Rim Highlights & Dial */}
                  <path d="M 480 50 Q 550 22 620 50" stroke="url(#metalSilver)" strokeWidth="3.5" fill="none" />
                  <rect x="480" y="50" width="140" height="95" stroke="url(#metalSilver)" strokeWidth="3" fill="none" rx="2" />
                  
                  {/* Glass highlights */}
                  <path d="M 485 55 L 485 140" stroke="#ffffff" strokeWidth="1.5" opacity="0.25" strokeLinecap="round" />
                  <path d="M 615 55 L 615 140" stroke="#cbd5e1" strokeWidth="1" opacity="0.15" />

                  {/* HUD Label for Right Tank */}
                  <rect x="505" y="112" width="90" height="22" rx="3" fill="rgba(15, 23, 42, 0.85)" stroke="#0ea5e9" strokeWidth="1" />
                  <text x="550" y="121" fill="#bae6fd" fontSize="6" fontWeight="bold" fontFamily="monospace" textAnchor="middle">INLET STORAGE SURGE</text>
                  <text x="550" y="129" fill="#38bdf8" fontSize="7.5" fontWeight="black" fontFamily="monospace" textAnchor="middle">pH 7.20 • RAW WATER</text>
                </g>


                {/* 3. BASE LEVEL UNITS (RE-ENGINEERED WITH TRANSPARENT INTERNAL GRAPHICS) */}

                {/* --- FEED PRE-FILTER COLUMN: CUTAWAY VIEW (Right, tall cylinder) --- */}
                <g opacity={selectedFlowStep === "intake" || selectedFlowStep === "all" ? 1 : 0.65} className="transition-all duration-300">
                  {/* Outer column backing */}
                  <rect x="580" y="190" width="46" height="210" fill="#090d16" stroke="url(#metalSilver)" strokeWidth="2.5" rx="4" />
                  
                  {/* Glass reflections */}
                  <path d="M 583 195 L 583 395" stroke="#ffffff" strokeWidth="1" opacity="0.2" />
                  <path d="M 623 195 L 623 395" stroke="#475569" strokeWidth="1" opacity="0.1" />

                  {/* Internal multi-layer filtration filter cores */}
                  <g opacity="0.85">
                    {/* Raw intake water flow path down column */}
                    <path d="M 603 195 L 603 395" stroke="#0ea5e9" strokeWidth="3" className="flow-line" opacity="0.3" />

                    {/* Filter Cartridge 1 (Coarse Sediment Mesh) */}
                    <rect x="584" y="215" width="38" height="30" fill="url(#metalSilverDark)" stroke="#334155" strokeWidth="1" rx="1" />
                    <line x1="584" y1="230" x2="622" y2="230" stroke="#64748b" strokeWidth="1.5" strokeDasharray="2 3" />
                    <text x="603" y="225" fill="#94a3b8" fontSize="5.5" fontWeight="bold" fontFamily="monospace" textAnchor="middle">50μ STAGE 1</text>

                    {/* Filter Cartridge 2 (Carbon Polishing Core) */}
                    <rect x="584" y="265" width="38" height="35" fill="#1e293b" stroke="#334155" strokeWidth="1" rx="1" />
                    {/* Carbon granules simulation inside */}
                    <circle cx="590" cy="282" r="1.2" fill="#94a3b8" />
                    <circle cx="616" cy="275" r="1.5" fill="#cbd5e1" />
                    <circle cx="602" cy="288" r="1" fill="#64748b" />
                    <circle cx="609" cy="281" r="1.3" fill="#cbd5e1" />
                    <text x="603" y="295" fill="#cbd5e1" fontSize="5.5" fontWeight="black" fontFamily="monospace" textAnchor="middle">CARBON CORE</text>

                    {/* Filter Cartridge 3 (Fine 5μ Micro-Fiber) */}
                    <rect x="584" y="320" width="38" height="30" fill="url(#metalSilverDark)" stroke="#334155" strokeWidth="1" rx="1" />
                    <line x1="584" y1="335" x2="622" y2="335" stroke="#38bdf8" strokeWidth="1.2" strokeDasharray="1 2" />
                    <text x="603" y="330" fill="#38bdf8" fontSize="5.5" fontWeight="bold" fontFamily="monospace" textAnchor="middle">5μ FINE CORE</text>

                    {/* Collected particulate sludge indicator on glass sides */}
                    <path d="M 581 200 L 581 215" stroke="#ea580c" strokeWidth="1.5" opacity="0.6" />
                    <path d="M 625 200 L 625 215" stroke="#ea580c" strokeWidth="1.5" opacity="0.6" />
                  </g>
                  
                  {/* Metal end caps */}
                  <rect x="576" y="210" width="54" height="6" fill="#475569" rx="1" />
                  <rect x="576" y="370" width="54" height="6" fill="#475569" rx="1" />
                </g>

                {/* --- CATALYST COLUMNS: HCR REACTORS WITH CUTAWAY INSIDE (Center-Left) --- */}
                <g opacity={selectedFlowStep === "hcr" || selectedFlowStep === "all" ? 1 : 0.55} className="transition-all duration-300">
                  
                  {/* Arched header pipes */}
                  <path d="M 324 195 C 324 180 364 180 364 195" fill="none" stroke="url(#metalSilver)" strokeWidth="5.5" />
                  <path d="M 364 195 C 364 180 404 180 404 195" fill="none" stroke="url(#metalSilver)" strokeWidth="5.5" />

                  {/* Reactor Glass Column 1 */}
                  <rect x="310" y="195" width="28" height="195" fill="#09141c" stroke="url(#metalSilver)" strokeWidth="2.5" rx="3" />
                  {/* Inside Catalyst Column 1: Small Sphere Beads (Crystalline Lanthanide Core) */}
                  <g opacity="0.8">
                    {/* Packed beads simulation */}
                    <circle cx="316" cy="230" r="2.5" fill="#2dd4bf" stroke="#0ea5e9" strokeWidth="0.5" />
                    <circle cx="321" cy="233" r="2.5" fill="#2dd4bf" stroke="#0ea5e9" strokeWidth="0.5" />
                    <circle cx="327" cy="228" r="2.5" fill="#2dd4bf" stroke="#0ea5e9" strokeWidth="0.5" />
                    <circle cx="318" cy="250" r="2.5" fill="#2dd4bf" stroke="#0ea5e9" strokeWidth="0.5" />
                    <circle cx="324" cy="254" r="2.5" fill="#2dd4bf" stroke="#0ea5e9" strokeWidth="0.5" />
                    <circle cx="315" cy="270" r="2.5" fill="#2dd4bf" stroke="#0ea5e9" strokeWidth="0.5" />
                    <circle cx="321" cy="275" r="2.5" fill="#2dd4bf" stroke="#0ea5e9" strokeWidth="0.5" />
                    <circle cx="326" cy="271" r="2.5" fill="#2dd4bf" stroke="#0ea5e9" strokeWidth="0.5" />
                    <circle cx="318" cy="300" r="2.5" fill="#2dd4bf" stroke="#0ea5e9" strokeWidth="0.5" />
                    <circle cx="324" cy="304" r="2.5" fill="#2dd4bf" stroke="#0ea5e9" strokeWidth="0.5" />
                    <circle cx="316" cy="325" r="2.5" fill="#2dd4bf" stroke="#0ea5e9" strokeWidth="0.5" />
                    <circle cx="322" cy="328" r="2.5" fill="#2dd4bf" stroke="#0ea5e9" strokeWidth="0.5" />
                    {/* Glowing flow passing through beads */}
                    <path d="M 324 200 L 324 380" stroke="#06b6d4" strokeWidth="1.5" strokeDasharray="3 4" className="flow-line" />
                  </g>

                  {/* Reactor Glass Column 2 */}
                  <rect x="350" y="195" width="28" height="195" fill="#09141c" stroke="url(#metalSilver)" strokeWidth="2.5" rx="3" />
                  {/* Inside Column 2 */}
                  <g opacity="0.8">
                    <circle cx="356" cy="240" r="2.5" fill="#2dd4bf" stroke="#0ea5e9" strokeWidth="0.5" />
                    <circle cx="362" cy="244" r="2.5" fill="#2dd4bf" stroke="#0ea5e9" strokeWidth="0.5" />
                    <circle cx="368" cy="239" r="2.5" fill="#2dd4bf" stroke="#0ea5e9" strokeWidth="0.5" />
                    <circle cx="358" cy="268" r="2.5" fill="#2dd4bf" stroke="#0ea5e9" strokeWidth="0.5" />
                    <circle cx="364" cy="272" r="2.5" fill="#2dd4bf" stroke="#0ea5e9" strokeWidth="0.5" />
                    <circle cx="356" cy="295" r="2.5" fill="#2dd4bf" stroke="#0ea5e9" strokeWidth="0.5" />
                    <circle cx="362" cy="298" r="2.5" fill="#2dd4bf" stroke="#0ea5e9" strokeWidth="0.5" />
                    <circle cx="367" cy="294" r="2.5" fill="#2dd4bf" stroke="#0ea5e9" strokeWidth="0.5" />
                    <circle cx="359" cy="318" r="2.5" fill="#2dd4bf" stroke="#0ea5e9" strokeWidth="0.5" />
                    <circle cx="365" cy="322" r="2.5" fill="#2dd4bf" stroke="#0ea5e9" strokeWidth="0.5" />
                    <path d="M 364 200 L 364 380" stroke="#06b6d4" strokeWidth="1.5" strokeDasharray="3 4" className="flow-line" />
                  </g>

                  {/* Reactor Glass Column 3 */}
                  <rect x="390" y="195" width="28" height="195" fill="#09141c" stroke="url(#metalSilver)" strokeWidth="2.5" rx="3" />
                  {/* Inside Column 3 */}
                  <g opacity="0.8">
                    <circle cx="396" cy="225" r="2.5" fill="#2dd4bf" stroke="#0ea5e9" strokeWidth="0.5" />
                    <circle cx="401" cy="229" r="2.5" fill="#2dd4bf" stroke="#0ea5e9" strokeWidth="0.5" />
                    <circle cx="407" cy="224" r="2.5" fill="#2dd4bf" stroke="#0ea5e9" strokeWidth="0.5" />
                    <circle cx="398" cy="255" r="2.5" fill="#2dd4bf" stroke="#0ea5e9" strokeWidth="0.5" />
                    <circle cx="404" cy="259" r="2.5" fill="#2dd4bf" stroke="#0ea5e9" strokeWidth="0.5" />
                    <circle cx="396" cy="285" r="2.5" fill="#2dd4bf" stroke="#0ea5e9" strokeWidth="0.5" />
                    <circle cx="402" cy="288" r="2.5" fill="#2dd4bf" stroke="#0ea5e9" strokeWidth="0.5" />
                    <circle cx="407" cy="284" r="2.5" fill="#2dd4bf" stroke="#0ea5e9" strokeWidth="0.5" />
                    <circle cx="399" cy="310" r="2.5" fill="#2dd4bf" stroke="#0ea5e9" strokeWidth="0.5" />
                    <circle cx="405" cy="314" r="2.5" fill="#2dd4bf" stroke="#0ea5e9" strokeWidth="0.5" />
                    <path d="M 404 200 L 404 380" stroke="#06b6d4" strokeWidth="1.5" strokeDasharray="3 4" className="flow-line" />
                  </g>

                  {/* Column metal flanges */}
                  <g fill="#475569">
                    <rect x="306" y="210" width="36" height="5" />
                    <rect x="306" y="360" width="36" height="5" />
                    <rect x="346" y="210" width="36" height="5" />
                    <rect x="346" y="360" width="36" height="5" />
                    <rect x="386" y="210" width="36" height="5" />
                    <rect x="386" y="360" width="36" height="5" />
                  </g>

                  <text x="364" y="295" fill="#22d3ee" fontSize="7.5" fontWeight="black" fontFamily="monospace" textAnchor="middle" letterSpacing="0.5" className="glow-active">HCR CATALYST CORE</text>
                </g>

                {/* --- ELECTROCHEMICAL CHAMBERS: EHG WITH MEMBRANES & CHARGE PLATES (Center-Right) --- */}
                <g opacity={selectedFlowStep === "ehg" || selectedFlowStep === "all" ? 1 : 0.55} className="transition-all duration-300">
                  
                  {/* EHG Glass Cylinder 1 */}
                  <rect x="445" y="205" width="22" height="185" fill="#110d1a" stroke="url(#metalSilver)" strokeWidth="2.5" rx="2" />
                  {/* Inside EHG 1: Vertical Center Membrane (Ion Separation) */}
                  <g opacity="0.8">
                    {/* Bipolar Ion Exchange Membrane channel */}
                    <line x1="456" y1="208" x2="456" y2="382" stroke="#ea580c" strokeWidth="1.5" strokeDasharray="4 2" />
                    {/* Anode positive terminal left (red), Cathode negative right (blue) */}
                    <line x1="449" y1="220" x2="449" y2="370" stroke="#ef4444" strokeWidth="1" />
                    <line x1="463" y1="220" x2="463" y2="370" stroke="#2563eb" strokeWidth="1" />
                    {/* Visual Ion attraction and separation */}
                    <circle cx="449" cy="245" r="1.5" fill="#ef4444" className="bubble-fast" />
                    <circle cx="463" cy="290" r="1.5" fill="#38bdf8" className="bubble" />
                  </g>

                  {/* EHG Glass Cylinder 2 */}
                  <rect x="480" y="205" width="22" height="185" fill="#110d1a" stroke="url(#metalSilver)" strokeWidth="2.5" rx="2" />
                  {/* Inside EHG 2 */}
                  <g opacity="0.8">
                    <line x1="491" y1="208" x2="491" y2="382" stroke="#ea580c" strokeWidth="1.5" strokeDasharray="4 2" />
                    <line x1="484" y1="220" x2="484" y2="370" stroke="#ef4444" strokeWidth="1" />
                    <line x1="498" y1="220" x2="498" y2="370" stroke="#2563eb" strokeWidth="1" />
                    <circle cx="484" cy="270" r="1.5" fill="#ef4444" className="bubble" />
                    <circle cx="498" cy="250" r="1.5" fill="#38bdf8" className="bubble-fast" />
                  </g>

                  {/* EHG Glass Cylinder 3 */}
                  <rect x="515" y="205" width="22" height="185" fill="#110d1a" stroke="url(#metalSilver)" strokeWidth="2.5" rx="2" />
                  {/* Inside EHG 3 */}
                  <g opacity="0.8">
                    <line x1="526" y1="208" x2="526" y2="382" stroke="#ea580c" strokeWidth="1.5" strokeDasharray="4 2" />
                    <line x1="519" y1="220" x2="519" y2="370" stroke="#ef4444" strokeWidth="1" />
                    <line x1="533" y1="220" x2="533" y2="370" stroke="#2563eb" strokeWidth="1" />
                    <circle cx="519" cy="295" r="1.5" fill="#ef4444" className="bubble-fast" />
                    <circle cx="533" cy="265" r="1.5" fill="#38bdf8" className="bubble" />
                  </g>

                  {/* Connection Wiring & Flanges */}
                  <path d="M 456 230 C 470 250 470 280 491 300" fill="none" stroke="#ef4444" strokeWidth="1.2" opacity="0.8" />
                  <path d="M 491 230 C 505 250 505 280 526 300" fill="none" stroke="#eab308" strokeWidth="1.2" opacity="0.8" />
                  
                  <g fill="#475569">
                    <rect x="442" y="220" width="28" height="4" />
                    <rect x="442" y="350" width="28" height="4" />
                    <rect x="477" y="220" width="28" height="4" />
                    <rect x="477" y="350" width="28" height="4" />
                    <rect x="512" y="220" width="28" height="4" />
                    <rect x="512" y="350" width="28" height="4" />
                  </g>

                  <text x="491" y="325" fill="#34d399" fontSize="7.5" fontWeight="black" fontFamily="monospace" textAnchor="middle" letterSpacing="0.5" className="glow-active">ELECTROMAGNETIC BEM</text>
                </g>

                {/* Controller Enclosure Cabinet */}
                <g transform="translate(100, 220)" className="transition-all duration-300">
                  <rect x="0" y="0" width="115" height="100" fill="#1e293b" stroke="#475569" strokeWidth="3" rx="4" />
                  <rect x="8" y="8" width="99" height="52" fill="#020617" rx="2" />
                  <rect x="11" y="11" width="93" height="46" fill="url(#screenGrad)" rx="1.5" />
                  <path d="M 16 42 L 30 33 L 42 45 L 56 22 L 68 35 L 80 18 L 92 28" fill="none" stroke="#22d3ee" strokeWidth="1.5" strokeLinecap="round" className="animate-pulse" />
                  <text x="16" y="21" fill="#38bdf8" fontSize="5" fontFamily="monospace" fontWeight="bold">FLOW: 45.0 GPM</text>
                  <text x="16" y="28" fill="#34d399" fontSize="5" fontFamily="monospace" fontWeight="bold">SYS: DUAL PHASE</text>
                  <circle cx="22" cy="78" r="6" fill="#10b981" stroke="#34d399" strokeWidth="1" />
                  <circle cx="38" cy="78" r="6" fill="#ef4444" stroke="#f87171" strokeWidth="1" />
                  <circle cx="54" cy="78" r="5" fill="#f59e0b" />
                  <text x="103" y="82" fill="#94a3b8" fontSize="6.5" fontWeight="bold" fontFamily="monospace" textAnchor="end">PLC CORE v4.0</text>
                </g>

                {/* Manifold pumps on the base floor */}
                <g fill="url(#metalSilver)" stroke="#475569" strokeWidth="1" opacity="0.9">
                  <rect x="235" y="375" width="45" height="28" rx="2" />
                  <circle cx="245" cy="389" r="8" fill="#1e293b" />
                  <line x1="245" y1="389" x2="251" y2="383" stroke="#94a3b8" strokeWidth="1.5" />
                  
                  <rect x="422" y="375" width="45" height="28" rx="2" />
                  <circle cx="432" cy="389" r="8" fill="#1e293b" />
                  <line x1="432" y1="389" x2="438" y2="383" stroke="#94a3b8" strokeWidth="1.5" />
                </g>

                {/* 4. HEAVY INDUSTRIAL PIPING BACKDROP LAYER */}
                <g stroke="#1e293b" strokeWidth="6" strokeLinecap="round" fill="none" opacity="0.35">
                  <path d="M 750 395 L 603 395 L 603 365" />
                  <path d="M 603 190 L 603 162 L 324 162 L 324 195" />
                  <path d="M 324 390 L 324 415 L 456 415 L 456 385" />
                  <path d="M 526 205 L 526 155 L 350 155 L 350 140" />
                  <path d="M 350 140 L 350 155 L 150 155 L 150 140" />
                  <path d="M 110 140 L 110 155 L 25 155 L 25 240 L 10 240" />
                </g>

                {/* 5. GLOWING FLUID STREAMS & LIVE ARROWS (WITH HIGH-VISIBILITY MARKERS & LABELS) */}
                {/* FLOW 01: Raw water intake (pH 7.00 - Cool Sky Blue) */}
                <g opacity={selectedFlowStep === "intake" || selectedFlowStep === "all" ? 1 : 0.15} className="transition-opacity duration-300">
                  <path
                    d="M 750 395 L 603 395 L 603 365"
                    fill="none"
                    stroke="#38bdf8"
                    strokeWidth="3.5"
                    className="flow-line"
                    style={{ filter: "drop-shadow(0 0 4px #0284c7)" }}
                    markerEnd="url(#arrow-intake)"
                  />
                  <polygon points="705,392 713,395 705,398" fill="#38bdf8" />
                  <polygon points="600,385 603,377 606,385" fill="#38bdf8" />
                </g>

                {/* FLOW 02: Catalyst pre-treatment feed (Teal-Blue) */}
                <g opacity={selectedFlowStep === "hcr" || selectedFlowStep === "all" ? 1 : 0.15} className="transition-opacity duration-300">
                  <path
                    d="M 603 190 L 603 162 L 324 162 L 324 195"
                    fill="none"
                    stroke="#0ea5e9"
                    strokeWidth="3.5"
                    className="flow-line"
                    style={{ filter: "drop-shadow(0 0 4px #0ea5e9)" }}
                    markerEnd="url(#arrow-hcr)"
                  />
                  <polygon points="600,182 603,174 606,182" fill="#0ea5e9" />
                  <polygon points="460,159 452,162 460,165" fill="#0ea5e9" />
                  <polygon points="321,178 324,186 327,178" fill="#0ea5e9" />
                </g>

                {/* FLOW 03: Electrochemical separations (Neon Cyan) */}
                <g opacity={selectedFlowStep === "ehg" || selectedFlowStep === "all" ? 1 : 0.15} className="transition-opacity duration-300">
                  <path
                    d="M 324 390 L 324 415 L 456 415 L 456 385"
                    fill="none"
                    stroke="#06b6d4"
                    strokeWidth="3.5"
                    className="flow-line"
                    style={{ filter: "drop-shadow(0 0 4px #06b6d4)" }}
                    markerEnd="url(#arrow-ehg)"
                  />
                  <polygon points="321,396 324,404 327,396" fill="#06b6d4" />
                  <polygon points="390,412 398,415 390,418" fill="#06b6d4" />
                  <polygon points="453,404 456,396 459,404" fill="#06b6d4" />
                </g>

                {/* FLOW 04: Recovery Storage Summary (Emerald Green) */}
                <g opacity={selectedFlowStep === "storage" || selectedFlowStep === "all" ? 1 : 0.15} className="transition-opacity duration-300">
                  <path
                    d="M 526 205 L 526 155 L 350 155 L 350 140"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="3.5"
                    className="flow-line"
                    style={{ filter: "drop-shadow(0 0 4px #10b981)" }}
                    markerEnd="url(#arrow-storage)"
                  />
                  <polygon points="523,185 526,177 529,185" fill="#10b981" />
                  <polygon points="440,152 432,155 440,158" fill="#10b981" />
                  <polygon points="347,148 350,140 353,148" fill="#10b981" />
                </g>

                {/* FLOW 05: Finished pH discharge stream (Royal Blue-Indigo) */}
                <g opacity={selectedFlowStep === "discharge" || selectedFlowStep === "all" ? 1 : 0.15} className="transition-opacity duration-300">
                  <path
                    d="M 350 140 L 350 155 L 150 155 L 150 140"
                    fill="none"
                    stroke="#6366f1"
                    strokeWidth="3.5"
                    className="flow-line"
                    style={{ filter: "drop-shadow(0 0 4px #6366f1)" }}
                    markerEnd="url(#arrow-discharge)"
                  />
                  <path
                    d="M 110 140 L 110 155 L 25 155 L 25 240 L 10 240"
                    fill="none"
                    stroke="#6366f1"
                    strokeWidth="3.5"
                    className="flow-line"
                    style={{ filter: "drop-shadow(0 0 4px #6366f1)" }}
                    markerEnd="url(#arrow-discharge)"
                  />
                  <polygon points="250,152 242,155 250,158" fill="#6366f1" />
                  <polygon points="90,152 82,155 90,158" fill="#6366f1" />
                  <polygon points="22,200 25,208 28,200" fill="#6366f1" />
                  <polygon points="18,237 10,240 18,243" fill="#6366f1" />
                </g>

                {/* 6. CLEAR FLOW START & END ANNOTATION INDICATOR BADGES */}
                {/* FLOW 01: Raw Intake Source & Destination */}
                <g opacity={selectedFlowStep === "intake" || selectedFlowStep === "all" ? 1 : 0} className="transition-opacity duration-300">
                  {/* Start at 750, 395 */}
                  <g transform="translate(750, 395)">
                    <circle r="11" fill="none" stroke="#38bdf8" strokeWidth="1" strokeDasharray="3 3" className="animate-spin" style={{ animationDuration: "10s" }} />
                    <circle r="6" fill="rgba(56, 189, 248, 0.4)" className="animate-pulse" />
                    <circle r="2.5" fill="#38bdf8" />
                  </g>
                  <g transform="translate(750, 368)">
                    <rect x="-42" y="-12" width="84" height="15" rx="3" fill="#090d16" stroke="#38bdf8" strokeWidth="1" />
                    <text x="0" y="-2" fill="#bae6fd" fontSize="6.5" fontWeight="bold" fontFamily="monospace" textAnchor="middle">01 START: RAW INLET</text>
                    <path d="M 0 3 L 0 16" stroke="#38bdf8" strokeWidth="0.75" />
                  </g>

                  {/* End at 603, 365 */}
                  <g transform="translate(603, 365)">
                    <circle r="11" fill="none" stroke="#38bdf8" strokeWidth="1" strokeDasharray="3 3" className="animate-spin" style={{ animationDuration: "10s" }} />
                    <circle r="5" fill="rgba(56, 189, 248, 0.4)" />
                    <circle r="2" fill="#ffffff" />
                  </g>
                  <g transform="translate(603, 415)">
                    <rect x="-40" y="-12" width="80" height="15" rx="3" fill="#090d16" stroke="#38bdf8" strokeWidth="1" />
                    <text x="0" y="-2" fill="#bae6fd" fontSize="6.5" fontWeight="bold" fontFamily="monospace" textAnchor="middle">01 END: PRE-FILTER</text>
                    <path d="M 0 -12 L 0 -38" stroke="#38bdf8" strokeWidth="0.75" />
                  </g>
                </g>

                {/* FLOW 02: Catalyst (HCR) Source & Destination */}
                <g opacity={selectedFlowStep === "hcr" || selectedFlowStep === "all" ? 1 : 0} className="transition-opacity duration-300">
                  {/* Start at 603, 190 */}
                  <g transform="translate(603, 190)">
                    <circle r="11" fill="none" stroke="#0ea5e9" strokeWidth="1" strokeDasharray="3 3" className="animate-spin" style={{ animationDuration: "10s" }} />
                    <circle r="6" fill="rgba(14, 165, 233, 0.4)" className="animate-pulse" />
                    <circle r="2.5" fill="#0ea5e9" />
                  </g>
                  <g transform="translate(603, 150)">
                    <rect x="-44" y="-12" width="88" height="15" rx="3" fill="#090d16" stroke="#0ea5e9" strokeWidth="1" />
                    <text x="0" y="-2" fill="#e0f2fe" fontSize="6.5" fontWeight="bold" fontFamily="monospace" textAnchor="middle">02 START: FILTER OUT</text>
                    <path d="M 0 3 L 0 28" stroke="#0ea5e9" strokeWidth="0.75" />
                  </g>

                  {/* End at 324, 195 */}
                  <g transform="translate(324, 195)">
                    <circle r="11" fill="none" stroke="#0ea5e9" strokeWidth="1" strokeDasharray="3 3" className="animate-spin" style={{ animationDuration: "10s" }} />
                    <circle r="5" fill="rgba(14, 165, 233, 0.4)" />
                    <circle r="2" fill="#ffffff" />
                  </g>
                  <g transform="translate(324, 225)">
                    <rect x="-44" y="-12" width="88" height="15" rx="3" fill="#090d16" stroke="#0ea5e9" strokeWidth="1" />
                    <text x="0" y="-2" fill="#e0f2fe" fontSize="6.5" fontWeight="bold" fontFamily="monospace" textAnchor="middle">02 END: CATALYSIS IN</text>
                    <path d="M 0 -12 L 0 -18" stroke="#0ea5e9" strokeWidth="0.75" />
                  </g>
                </g>

                {/* FLOW 03: Electrolysis (EHG) Source & Destination */}
                <g opacity={selectedFlowStep === "ehg" || selectedFlowStep === "all" ? 1 : 0} className="transition-opacity duration-300">
                  {/* Start at 324, 390 */}
                  <g transform="translate(324, 390)">
                    <circle r="11" fill="none" stroke="#06b6d4" strokeWidth="1" strokeDasharray="3 3" className="animate-spin" style={{ animationDuration: "10s" }} />
                    <circle r="6" fill="rgba(6, 182, 212, 0.4)" className="animate-pulse" />
                    <circle r="2.5" fill="#06b6d4" />
                  </g>
                  <g transform="translate(324, 345)">
                    <rect x="-44" y="-12" width="88" height="15" rx="3" fill="#090d16" stroke="#06b6d4" strokeWidth="1" />
                    <text x="0" y="-2" fill="#ecfeff" fontSize="6.5" fontWeight="bold" fontFamily="monospace" textAnchor="middle">03 START: CATALYZED</text>
                    <path d="M 0 3 L 0 33" stroke="#06b6d4" strokeWidth="0.75" />
                  </g>

                  {/* End at 456, 385 */}
                  <g transform="translate(456, 385)">
                    <circle r="11" fill="none" stroke="#06b6d4" strokeWidth="1" strokeDasharray="3 3" className="animate-spin" style={{ animationDuration: "10s" }} />
                    <circle r="5" fill="rgba(6, 182, 212, 0.4)" />
                    <circle r="2" fill="#ffffff" />
                  </g>
                  <g transform="translate(456, 425)">
                    <rect x="-44" y="-12" width="88" height="15" rx="3" fill="#090d16" stroke="#06b6d4" strokeWidth="1" />
                    <text x="0" y="-2" fill="#ecfeff" fontSize="6.5" fontWeight="bold" fontFamily="monospace" textAnchor="middle">03 END: MEMBRANE IN</text>
                    <path d="M 0 -12 L 0 -28" stroke="#06b6d4" strokeWidth="0.75" />
                  </g>
                </g>

                {/* FLOW 04: Recovery Storage Source & Destination */}
                <g opacity={selectedFlowStep === "storage" || selectedFlowStep === "all" ? 1 : 0} className="transition-opacity duration-300">
                  {/* Start at 526, 205 */}
                  <g transform="translate(526, 205)">
                    <circle r="11" fill="none" stroke="#10b981" strokeWidth="1" strokeDasharray="3 3" className="animate-spin" style={{ animationDuration: "10s" }} />
                    <circle r="6" fill="rgba(16, 185, 129, 0.4)" className="animate-pulse" />
                    <circle r="2.5" fill="#10b981" />
                  </g>
                  <g transform="translate(526, 235)">
                    <rect x="-44" y="-12" width="88" height="15" rx="3" fill="#090d16" stroke="#10b981" strokeWidth="1" />
                    <text x="0" y="-2" fill="#ecfdf5" fontSize="6.5" fontWeight="bold" fontFamily="monospace" textAnchor="middle">04 START: RECOVERY</text>
                    <path d="M 0 -12 L 0 -18" stroke="#10b981" strokeWidth="0.75" />
                  </g>

                  {/* End at 350, 140 */}
                  <g transform="translate(350, 140)">
                    <circle r="11" fill="none" stroke="#10b981" strokeWidth="1" strokeDasharray="3 3" className="animate-spin" style={{ animationDuration: "10s" }} />
                    <circle r="5" fill="rgba(16, 185, 129, 0.4)" />
                    <circle r="2" fill="#ffffff" />
                  </g>
                  <g transform="translate(305, 55)">
                    <rect x="-44" y="-12" width="88" height="15" rx="3" fill="#090d16" stroke="#10b981" strokeWidth="1" />
                    <text x="0" y="-2" fill="#ecfdf5" fontSize="6.5" fontWeight="bold" fontFamily="monospace" textAnchor="middle">04 END: RECYCLE TANK</text>
                    <path d="M 44 2 L 45 71" stroke="#10b981" strokeWidth="0.75" />
                  </g>
                </g>

                {/* FLOW 05: Finished pH discharge stream Source & Destination */}
                <g opacity={selectedFlowStep === "discharge" || selectedFlowStep === "all" ? 1 : 0} className="transition-opacity duration-300">
                  {/* Start at 350, 140 */}
                  <g transform="translate(350, 140)">
                    <circle r="11" fill="none" stroke="#6366f1" strokeWidth="1" strokeDasharray="3 3" className="animate-spin" style={{ animationDuration: "10s" }} />
                    <circle r="6" fill="rgba(99, 102, 241, 0.4)" className="animate-pulse" />
                    <circle r="2.5" fill="#6366f1" />
                  </g>
                  <g transform="translate(395, 55)">
                    <rect x="-44" y="-12" width="88" height="15" rx="3" fill="#090d16" stroke="#6366f1" strokeWidth="1" />
                    <text x="0" y="-2" fill="#e0e7ff" fontSize="6.5" fontWeight="bold" fontFamily="monospace" textAnchor="middle">05 START: BUFFER DRAW</text>
                    <path d="M -44 2 L -45 71" stroke="#6366f1" strokeWidth="0.75" />
                  </g>

                  {/* End of Path 5a at 150, 140 */}
                  <g transform="translate(150, 140)">
                    <circle r="11" fill="none" stroke="#6366f1" strokeWidth="1" strokeDasharray="3 3" className="animate-spin" style={{ animationDuration: "10s" }} />
                    <circle r="5" fill="rgba(99, 102, 241, 0.4)" />
                    <circle r="2" fill="#ffffff" />
                  </g>
                  <g transform="translate(150, 55)">
                    <rect x="-44" y="-12" width="88" height="15" rx="3" fill="#090d16" stroke="#6366f1" strokeWidth="1" />
                    <text x="0" y="-2" fill="#e0e7ff" fontSize="6.5" fontWeight="bold" fontFamily="monospace" textAnchor="middle">05 END: STORAGE TANK</text>
                    <path d="M 0 3 L 0 71" stroke="#6366f1" strokeWidth="0.75" />
                  </g>

                  {/* Start of Path 5b at 110, 140 */}
                  <g transform="translate(110, 140)">
                    <circle r="11" fill="none" stroke="#6366f1" strokeWidth="1" strokeDasharray="3 3" className="animate-spin" style={{ animationDuration: "10s" }} />
                    <circle r="6" fill="rgba(99, 102, 241, 0.4)" className="animate-pulse" />
                    <circle r="2.5" fill="#6366f1" />
                  </g>
                  <g transform="translate(110, 185)">
                    <rect x="-44" y="-12" width="88" height="15" rx="3" fill="#090d16" stroke="#6366f1" strokeWidth="1" />
                    <text x="0" y="-2" fill="#e0e7ff" fontSize="6.5" fontWeight="bold" fontFamily="monospace" textAnchor="middle">05b START: DISCHARGE</text>
                    <path d="M 0 -12 L 0 -33" stroke="#6366f1" strokeWidth="0.75" />
                  </g>

                  {/* End at 10, 240 */}
                  <g transform="translate(10, 240)">
                    <circle r="11" fill="none" stroke="#6366f1" strokeWidth="1" strokeDasharray="3 3" className="animate-spin" style={{ animationDuration: "10s" }} />
                    <circle r="5" fill="rgba(99, 102, 241, 0.4)" />
                    <circle r="2" fill="#ffffff" />
                  </g>
                  <g transform="translate(48, 275)">
                    <rect x="-44" y="-12" width="88" height="15" rx="3" fill="#090d16" stroke="#6366f1" strokeWidth="1" />
                    <text x="0" y="-2" fill="#e0e7ff" fontSize="6.5" fontWeight="bold" fontFamily="monospace" textAnchor="middle">05b END: OUTLET DELIV</text>
                    <path d="M -38 -12 L -38 -23" stroke="#6366f1" strokeWidth="0.75" />
                  </g>
                </g>
              </svg>
              )}
            </div>

            {/* Step-by-Step Flow Navigation Control Bar */}
            {viewMode === "cutaway" && (
              <div className="w-full mt-4 p-2 bg-slate-900/90 border border-slate-800 rounded-lg flex flex-col gap-2 z-20">
              <div className="flex items-center justify-between px-1">
                <span className="font-mono text-[8px] text-slate-500 uppercase tracking-widest font-black">
                  AUDIENCE PROCESS GUIDE CONTROLLER
                </span>
                <span className="font-mono text-[8px] text-brand-cyan tracking-wider font-semibold animate-pulse">
                  {selectedFlowStep === "all" && "CURRENT: ACTIVE RECIRCULATION CUTAWAY"}
                  {selectedFlowStep === "intake" && "CURRENT: RAW INTAKE FILTRATION INSIDE"}
                  {selectedFlowStep === "hcr" && "CURRENT: FIRST-STAGE CATALYSIS INSIDE"}
                  {selectedFlowStep === "ehg" && "CURRENT: ELECTROLYTIC SEPARATION INSIDE"}
                  {selectedFlowStep === "storage" && "CURRENT: RECOVERY STORAGE INSIDE"}
                  {selectedFlowStep === "discharge" && "CURRENT: pH OUTPUT DELIVERY INSIDE"}
                </span>
              </div>
              
              <div className="grid grid-cols-3 sm:flex sm:flex-wrap items-center gap-1.5">
                {[
                  { id: "all", label: "Show All" },
                  { id: "intake", label: "01 Filter" },
                  { id: "hcr", label: "02 Catalyst" },
                  { id: "ehg", label: "03 BEM Membrane" },
                  { id: "storage", label: "04 Recovers" },
                  { id: "discharge", label: "05 pH Output" }
                ].map((step) => (
                  <button
                    key={step.id}
                    onClick={() => handleFlowStepChange(step.id)}
                    className={`flex-1 min-w-[70px] py-2 rounded text-[9px] font-mono tracking-wider font-bold uppercase transition-all cursor-pointer text-center ${
                      selectedFlowStep === step.id
                        ? "bg-brand-teal text-slate-950 font-extrabold shadow-[0_0_12px_rgba(20,184,166,0.4)] border border-brand-teal"
                        : "bg-slate-950/60 text-slate-400 border border-slate-800 hover:text-slate-200 hover:bg-slate-800/40"
                    }`}
                  >
                    {step.label}
                  </button>
                ))}
              </div>
            </div>
            )}

          </div>

        </div>
      </div>
    </section>
  );
}

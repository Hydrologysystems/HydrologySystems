/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sliders, Cpu, Gauge, Zap, Check, ChevronDown, ChevronUp, FileText, ArrowRight } from "lucide-react";

interface SpecGroup {
  title: string;
  items: { label: string; value: string; note?: string }[];
}

const SPEC_GROUPS: SpecGroup[] = [
  {
    title: "Solution Output & Process Chemistry",
    items: [
      { label: "Delivered Output pH", value: "Up to 12.0 pH", note: "Continuous automated adjustment" },
      { label: "Active Chemistry", value: "High-Purity Hydroxide Solution (NaOH / Alkaline Stream)", note: "Direct substitution for bulk caustic / soda ash" },
      { label: "Dosing Stability", value: "Automated PID Trim Control", note: "Eliminates localized high-pH spikes" },
      { label: "Target Water Recovery", value: "High Efficiency Recirculation", note: "Optimized for closed-loop & continuous discharge" }
    ]
  },
  {
    title: "Skid Mechanical & Integration",
    items: [
      { label: "Footprint Format", value: "Modular, Factory-Assembled Stainless Skid", note: "Pre-wired, pre-plumbed, drop-in integration" },
      { label: "Fluid Connections", value: "Standard ANSI / NPT Industrial Flanges", note: "[VERIFY WITH HYDROLOGY SYSTEMS for pipe schedule]" },
      { label: "Supply Feed Water", value: "Softened / Potable Industrial Feedwater", note: "Integrated brine conditioning stages" },
      { label: "Materials of Construction", value: "Corrosion-Resistant Industrial Polymers & Stainless Steel", note: "Compatible with high alkaline media" }
    ]
  },
  {
    title: "Instrumentation, Electrical & Automation",
    items: [
      { label: "Control Architecture", value: "Industrial PLC with Integrated Touchscreen HMI", note: "Real-time telemetry and SCADA tie-in" },
      { label: "Safety Interlocks", value: "Automatic Low-Flow, Over-Pressure & Thermal Shutdown", note: "Multi-point failsafe sensor array" },
      { label: "Monitoring Sensors", value: "Dual Redundant In-Line pH & Conductivity Probes", note: "Continuous calibration monitoring" },
      { label: "Power Requirements", value: "Standard 3-Phase Industrial Power", note: "[VERIFY WITH HYDROLOGY SYSTEMS for voltage & amperage by skid size]" }
    ]
  }
];

interface TechnicalSpecificationsProps {
  onBookCallClick?: () => void;
}

export default function TechnicalSpecifications({ onBookCallClick }: TechnicalSpecificationsProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="technical-specifications" className="py-16 sm:py-20 bg-[#080B12] text-slate-200 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0066FF]/10 border border-[#0066FF]/30 text-[#0066FF] text-xs font-mono font-bold tracking-wider uppercase mb-3">
              <Cpu className="w-3.5 h-3.5" />
              <span>ENGINEERING SPECIFICATIONS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-white tracking-tight">
              On-Site Alkaline Generator Skid Parameters
            </h2>
            <p className="text-slate-400 text-sm mt-2 max-w-2xl">
              Engineering baselines for facility engineers, EPCs, and EHS managers sizing automated pH neutralization and chemical substitution skids.
            </p>
          </div>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="self-start md:self-auto inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 text-xs font-mono tracking-wider text-white transition-colors cursor-pointer"
          >
            <span>{isExpanded ? "CONDENSE SPECIFICATIONS" : "VIEW FULL ENGINEERING BREAKDOWN"}</span>
            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>

        {/* Quick Highlights Grid (Always Visible) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="p-4 rounded-xl bg-[#0c121e] border border-white/10">
            <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-1">Delivered Alkalinity</span>
            <span className="text-2xl font-bold font-display text-[#0066FF]">Up to pH 12.0</span>
            <span className="text-[11px] text-slate-400 block mt-1">Continuous on-demand</span>
          </div>
          <div className="p-4 rounded-xl bg-[#0c121e] border border-white/10">
            <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-1">Bulk Tank Replacement</span>
            <span className="text-2xl font-bold font-display text-white">100% Elimination</span>
            <span className="text-[11px] text-slate-400 block mt-1">Liquid NaOH &amp; soda ash</span>
          </div>
          <div className="p-4 rounded-xl bg-[#0c121e] border border-white/10">
            <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-1">Automation</span>
            <span className="text-2xl font-bold font-display text-[#0066FF]">PLC &amp; SCADA</span>
            <span className="text-[11px] text-slate-400 block mt-1">24/7 telemetry ready</span>
          </div>
          <div className="p-4 rounded-xl bg-[#0c121e] border border-white/10">
            <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-1">Skid Delivery</span>
            <span className="text-2xl font-bold font-display text-white">Pre-Plumbed</span>
            <span className="text-[11px] text-slate-400 block mt-1">Factory wet-tested</span>
          </div>
        </div>

        {/* Collapsible Detailed Specs */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-6 pt-4 border-t border-white/10"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {SPEC_GROUPS.map((group) => (
                  <div key={group.title} className="p-6 rounded-2xl bg-[#0c121e] border border-white/10 flex flex-col justify-between">
                    <div>
                      <h3 className="text-sm font-mono font-bold tracking-wider uppercase text-[#0066FF] mb-4 pb-2 border-b border-white/10">
                        {group.title}
                      </h3>
                      <dl className="space-y-3">
                        {group.items.map((item) => (
                          <div key={item.label} className="flex flex-col">
                            <dt className="text-xs text-slate-400 font-medium">{item.label}</dt>
                            <dd className="text-sm font-semibold text-white">{item.value}</dd>
                            {item.note && (
                              <span className="text-[11px] text-slate-400 mt-0.5">{item.note}</span>
                            )}
                          </div>
                        ))}
                      </dl>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-[#080B12] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-[#0066FF] shrink-0" />
                  <span className="text-xs text-slate-300">
                    Need full mechanical drawings, P&amp;ID schematics, or specific electrical load calculations for your plant?
                  </span>
                </div>
                {onBookCallClick && (
                  <button
                    onClick={onBookCallClick}
                    className="shrink-0 px-4 py-2 rounded-lg bg-[#0066FF] hover:bg-[#0052cc] text-white font-bold text-xs tracking-wider uppercase transition-colors flex items-center gap-1.5 cursor-pointer shadow-md shadow-[#0066FF]/20"
                  >
                    <span>Request Engineering Data</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}

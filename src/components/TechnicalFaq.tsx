/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, HelpCircle, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";

interface FAQItem {
  id: string;
  question: string;
  shortAnswer: string;
  detail: string;
  category: "Chemical Replacement" | "Wastewater & Compliance" | "Engineering & Skid Design" | "Cooling & Agriculture";
}

export const TECHNICAL_FAQS: FAQItem[] = [
  {
    id: "replace-bulk-caustic-soda",
    category: "Chemical Replacement",
    question: "How do Hydrology Systems skids eliminate delivered bulk caustic soda and soda ash?",
    shortAnswer: "On-site automated generation produces concentrated alkaline hydroxide (pH up to 12.0) on demand.",
    detail: "Instead of receiving, storing, and handling 25% or 50% delivered liquid caustic soda (NaOH) or dissolving bags of soda ash (Na₂CO₃), the skid generates high-purity alkaline streams on-site using automated electrochemical and catalytic cells. This removes tanker truck deliveries, hazardous unloading protocols, and chemical freeze protection storage requirements."
  },
  {
    id: "industrial-wastewater-neutralization",
    category: "Wastewater & Compliance",
    question: "How is on-demand alkaline solution applied in industrial wastewater pH neutralization?",
    shortAnswer: "Continuous automated dosing balances acidic effluent streams to maintain municipal discharge compliance.",
    detail: "Industrial effluents and rinse streams with variable acidic loads require continuous pH trim before municipal sewer or surface discharge. The automated skid doses on-demand alkaline water into neutralization tanks or continuous-flow manifolds, preventing localized over-dosing spikes and avoiding costly municipal surcharge penalties."
  },
  {
    id: "cooling-tower-blowdown-ph",
    category: "Cooling & Agriculture",
    question: "How does on-site pH control protect cooling towers and industrial process loops?",
    shortAnswer: "Maintains optimal alkalinity without erratic chemical slug dosing or pipe corrosion.",
    detail: "In recirculating cooling towers and heat exchangers, erratic pH swings cause severe mineral scaling or aggressive acidic corrosion. By providing continuous, automated alkalinity trim directly into makeup or circulating lines, facilities stabilize cycles of concentration and protect metallic infrastructure without hazardous manual chemical handling."
  },
  {
    id: "agriculture-cultivation-effluent",
    category: "Cooling & Agriculture",
    question: "Can these systems handle high-volume greenhouse, hydroponic, and cultivation runoff?",
    shortAnswer: "Delivers precision pH stabilization for irrigation manifolds, substrate runoff, and wastewater compliance.",
    detail: "Commercial greenhouses, hemp/CBD facilities, and indoor hydroponic operations require exact water and nutrient pH to prevent nutrient lockout and root burn. Our catalytic hydroxide technology stabilizes pH directly in primary manifolds and neutralizes runoff before discharge, eliminating erratic chemical swings without harsh liquid chemicals."
  },
  {
    id: "skid-footprint-and-integration",
    category: "Engineering & Skid Design",
    question: "What are the engineering footprint and integration requirements for an on-site skid?",
    shortAnswer: "Pre-plumbed, modular industrial skid with standard power, potable/softened water, and automated PLC control.",
    detail: "Systems arrive as self-contained, pre-tested skids designed for rapid tie-in to plant electrical, water supply, and process dosing lines. Built-in industrial PLC instrumentation monitors pH, flow rate, and cell parameters 24/7 with telemetry for remote operations [VERIFY WITH HYDROLOGY SYSTEMS]."
  },
  {
    id: "ehs-safety-and-storage-compliance",
    category: "Engineering & Skid Design",
    question: "What EHS safety advantages does on-site alkaline generation provide over bulk tanks?",
    shortAnswer: "Substantially reduces reportable hazardous chemical inventory and eliminates tanker offloading risks.",
    detail: "Eliminating bulk liquid caustic tanks (5,000–20,000 gallons) mitigates OSHA Process Safety Management (PSM) exposure, secondary containment inspection burdens, chemical burn risks during tanker offloading, and hazardous materials transportation liability."
  }
];

interface TechnicalFaqProps {
  onBookCallClick?: () => void;
}

export default function TechnicalFaq({ onBookCallClick }: TechnicalFaqProps) {
  const [openId, setOpenId] = useState<string | null>("replace-bulk-caustic-soda");

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="technical-faq" className="py-20 sm:py-24 bg-white border-t border-[#DCE2EB] relative">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0066FF]/10 border border-[#0066FF]/30 text-[#0066FF] text-xs font-semibold font-mono tracking-wider uppercase mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-[#0066FF]" />
            <span>ENGINEERING & TECHNICAL FAQ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#101828] tracking-tight mb-4">
            Industrial pH Control &amp; Chemical Replacement
          </h2>
          <p className="text-[#667085] text-sm sm:text-base leading-relaxed">
            Direct answers for plant managers, EHS directors, and environmental engineers evaluating on-site alkaline generation to eliminate delivered bulk chemicals.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {TECHNICAL_FAQS.map((faq, index) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-[#F4F6FA] border-[#0066FF]/50 shadow-sm"
                    : "bg-white border-[#DCE2EB] hover:border-slate-300"
                }`}
              >
                <button
                  onClick={() => toggleItem(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 cursor-pointer"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <span className="text-[11px] font-mono font-bold tracking-wider uppercase text-[#0066FF] bg-[#0066FF]/10 px-2.5 py-0.5 rounded-md self-start sm:self-auto">
                      {faq.category}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-[#101828]">
                      {faq.question}
                    </h3>
                  </div>
                  <div className={`p-1.5 rounded-full shrink-0 transition-transform duration-200 ${
                    isOpen ? "rotate-180 bg-[#0066FF]/15 text-[#0066FF]" : "bg-slate-100 text-[#667085]"
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="border-t border-[#DCE2EB] px-6 py-5 bg-white/70"
                    >
                      <p className="text-[#101828] text-sm font-semibold mb-2">
                        {faq.shortAnswer}
                      </p>
                      <p className="text-[#667085] text-sm leading-relaxed">
                        {faq.detail}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Technical Consultation Prompt */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#080B12] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md border border-white/10">
          <div className="text-left">
            <h4 className="text-lg font-bold text-white mb-1">
              Have a plant-specific pH control or wastewater specification?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Speak directly with our technical team to discuss flow rates, water chemistry, and skid integration requirements.
            </p>
          </div>
          {onBookCallClick && (
            <button
              onClick={onBookCallClick}
              className="shrink-0 px-6 py-3 rounded-full bg-[#0066FF] hover:bg-[#0052cc] text-white font-bold text-xs tracking-wider uppercase transition-all duration-200 flex items-center gap-2 cursor-pointer shadow-lg shadow-[#0066FF]/25"
            >
              <span>Discuss Your Application</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>

      </div>
    </section>
  );
}

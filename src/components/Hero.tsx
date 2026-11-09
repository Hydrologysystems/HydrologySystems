/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { ArrowRight, ShieldCheck, Zap, Droplet, Truck, CircleDollarSign, Calculator, Phone } from "lucide-react";

// @ts-ignore
import chemicalPlantBg from "../assets/images/chemical_plant_sunset_1783458445425.jpg";
// @ts-ignore
import processSchematic from "../assets/images/process_schematic_1782955547881.jpg";

interface HeroProps {
  onCalculateClick?: () => void;
  onBookCallClick?: () => void;
}

export default function Hero({ onCalculateClick, onBookCallClick }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-24 sm:pt-28 lg:pt-32 pb-20 sm:pb-24 lg:pb-28 flex items-center justify-center bg-[#080B12] overflow-hidden border-t border-[#DCE2EB]/20"
    >
      {/* Immersive Full-Bleed Background Image & Overlays */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none select-none">
        <div className="absolute inset-0 w-full h-full">
          <img
            src={chemicalPlantBg}
            alt="Hydrology Advanced Chemical Production Plant"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="w-full h-full object-cover object-center brightness-90 contrast-[1.08] saturate-[1.1]"
            referrerPolicy="no-referrer"
          />
        </div>
        {/* Cinematic dark scrim: keeps the sunset sky, glowing refinery lights, and water reflections clearly visible while preserving sharp text contrast */}
        <div className="absolute inset-0 bg-[#080B12]/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080B12]/75 via-[#080B12]/30 via-45% to-[#080B12]/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080B12]/70 via-transparent via-50% to-[#080B12]/70" />
        
        {/* Subtle royal blue glow accentuating bottom-left corner and top right */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(0,102,255,0.22)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,102,255,0.12)_0%,transparent_50%)]" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
        
        {/* Master Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black tracking-tight text-white max-w-5xl leading-[1.1] mb-6"
        >
          ON-SITE INDUSTRIAL pH CONTROL <br className="hidden sm:inline" />
          <span className="text-[#0066FF]">
            CUT BULK CAUSTIC OPEX BY UP TO 70%
          </span>
        </motion.h1>

        {/* Supporting Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg sm:text-xl text-slate-300 max-w-3xl leading-relaxed mb-10 font-normal"
        >
          Eliminate the logistics, safety risks, and expense of purchased Caustic Soda &amp; Soda Ash.{" "}
          <br className="hidden sm:inline" />
          Generate high-purity alkaline solutions on-demand directly at your plant.
        </motion.p>

        {/* Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-20"
        >
          {/* Main Royal Blue Button: Calculate Your Savings */}
          <button
            type="button"
            onClick={onCalculateClick}
            className="group w-full sm:w-auto flex items-center justify-center space-x-3 bg-[#0066FF] hover:bg-[#0052cc] text-white font-bold text-base px-8 py-4.5 rounded-full shadow-xl shadow-[#0066FF]/25 hover:shadow-[#0066FF]/40 transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
          >
            <Calculator className="w-5 h-5 text-white/90" />
            <span>Calculate Your Savings</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Secondary Button: Book a Consultation */}
          {onBookCallClick && (
            <button
              type="button"
              onClick={onBookCallClick}
              className="group w-full sm:w-auto flex items-center justify-center space-x-3 bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/40 font-bold text-base px-8 py-4.5 rounded-full shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer backdrop-blur-sm"
            >
              <Phone className="w-5 h-5 text-[#0066FF] group-hover:scale-110 transition-transform" />
              <span>Book a Consultation</span>
            </button>
          )}
        </motion.div>

        {/* Modern Live Benefit Highlights Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full text-left"
        >
          {/* Item 1 */}
          <div className="flex items-start space-x-4 bg-[#080B12]/80 border border-white/10 p-6 rounded-2xl backdrop-blur-sm hover:border-[#0066FF]/40 transition-colors">
            <div className="flex-shrink-0 p-3 bg-[#0066FF]/10 rounded-xl text-[#0066FF]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-white font-semibold text-base mb-1">Zero Chemical Handling</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Replaces hazards of bulk NaOH &amp; Soda Ash unloading and storage with safe, automated solid dissolution and metering.
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex items-start space-x-4 bg-[#080B12]/80 border border-white/10 p-6 rounded-2xl backdrop-blur-sm hover:border-[#0066FF]/40 transition-colors">
            <div className="flex-shrink-0 p-3 bg-[#0066FF]/10 rounded-xl text-[#0066FF]">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-white font-semibold text-base mb-1">On-Demand Synthesis</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Eliminate complex chemical deliveries, supply chain disruptions, storage freezing risks, and high local freight rates.
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex items-start space-x-4 bg-[#080B12]/80 border border-white/10 p-6 rounded-2xl backdrop-blur-sm hover:border-[#0066FF]/40 transition-colors">
            <div className="flex-shrink-0 p-3 bg-[#0066FF]/10 rounded-xl text-[#0066FF]">
              <CircleDollarSign className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-white font-semibold text-base mb-1">Substantial Cost Slashes</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Purchase chemical raw inputs directly without premium brand markup. Average plant payback is under 14 months.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, ShieldCheck, Zap, Droplet, Truck, CircleDollarSign } from "lucide-react";

// @ts-ignore
import chemicalPlantBg from "../assets/images/chemical_plant_sunset_1783458445425.jpg";
// @ts-ignore
import processSchematic from "../assets/images/process_schematic_1782955547881.jpg";

interface HeroProps {
  onCalculateClick?: () => void;
  onBookCallClick?: () => void;
}

export default function Hero({ onCalculateClick, onBookCallClick }: HeroProps) {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.0, 1.08]);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen pt-40 pb-20 sm:pb-24 lg:pb-28 flex items-center justify-center bg-[#050d18] overflow-hidden"
    >
      {/* Immersive Full-Bleed Background Image & Overlays */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        <motion.div
          style={{ y, scale }}
          className="absolute inset-0 w-full h-full"
        >
          <img
            src={chemicalPlantBg}
            alt="Hydrology Advanced Chemical Production Plant"
            loading="eager"
            className="w-full h-[120%] object-cover object-center scale-100 transition-transform duration-1000"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        {/* Navy gradient overlay: nearly transparent near top to keep sky/clouds visible, much darker towards bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1b2a]/15 via-[#0d1b2a]/55 to-[#050d18]/95" />
        
        {/* Subtle warm amber glow rising from bottom-left corner */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(234,119,4,0.18)_0%,transparent_60%)]" />
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
          CUT YOUR CAUSTIC SODA OPEX <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500">
            BY UP TO 70%.
          </span>
        </motion.h1>

        {/* Supporting Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg sm:text-xl text-slate-300 max-w-3xl leading-relaxed mb-10 font-normal"
        >
          Eliminate the logistics, safety risks, and multi-million dollar expense of purchased NaOH. 
          Generate high-purity alkaline solutions on-demand directly at your plant.
        </motion.p>

        {/* Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-20"
        >
          {/* Main Orange Button (Matches image focus but clean/polished) */}
          <button
            onClick={onCalculateClick}
            className="group w-full sm:w-auto flex items-center justify-center space-x-3 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-base px-8 py-4.5 rounded-full shadow-xl shadow-orange-950/20 hover:shadow-orange-500/20 transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Calculate Your NaOH Savings</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>


        </motion.div>

        {/* Modern Live Benefit Highlights Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full text-left"
        >
          {/* Item 1 */}
          <div className="flex items-start space-x-4 bg-slate-900/40 border border-slate-800/60 p-6 rounded-2xl backdrop-blur-sm hover:border-blue-500/20 transition-colors">
            <div className="flex-shrink-0 p-3 bg-blue-500/10 rounded-xl text-blue-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-white font-semibold text-base mb-1">Zero Chemical Handling</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Replaces hazards of bulk NaOH unloading and storage with safe, automated solid dissolution and metering.
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex items-start space-x-4 bg-slate-900/40 border border-slate-800/60 p-6 rounded-2xl backdrop-blur-sm hover:border-orange-500/20 transition-colors">
            <div className="flex-shrink-0 p-3 bg-orange-500/10 rounded-xl text-orange-400">
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
          <div className="flex items-start space-x-4 bg-slate-900/40 border border-slate-800/60 p-6 rounded-2xl backdrop-blur-sm hover:border-emerald-500/20 transition-colors">
            <div className="flex-shrink-0 p-3 bg-emerald-500/10 rounded-xl text-emerald-400">
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

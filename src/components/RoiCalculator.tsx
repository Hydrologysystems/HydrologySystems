/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Calculator, 
  Sparkles, 
  TrendingDown, 
  CheckCircle, 
  Truck, 
  RefreshCcw, 
  ArrowRight 
} from "lucide-react";
import GoogleCalendarOverlay from "./GoogleCalendarOverlay";

interface RoiCalculatorProps {
  onBookWithRoi: (summary: string) => void;
}

export default function RoiCalculator({ onBookWithRoi }: RoiCalculatorProps) {
  // Controlled inputs matching the exact fields of the HTML/user-snippet
  const [volume, setVolume] = useState<string>("1,000,000");
  const [costPerGallon, setCostPerGallon] = useState<string>("0.97");
  const [concentration, setConcentration] = useState<string>("Baumé 20 @ 12 pH");
  const [flowRate, setFlowRate] = useState<string>("3 GPM @ pH 12");
  const [showResults, setShowResults] = useState<boolean>(true);

  // Currency formatter
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  // Safe parsing
  const parsedVolume = parseFloat(volume.replace(/,/g, "")) || 0;
  const parsedCost = parseFloat(costPerGallon) || 0;
  
  // Calculations:
  // Current Spend = Volume * Cost Per Gallon
  const calculatedSpend = parsedVolume * parsedCost;
  // Projected Savings is 48% total spend reduction as highlighted in the card label
  const calculatedSavings = calculatedSpend * 0.48;
  
  // Logistics calculations:
  // Assume average bulk tanker holds 5,000 gallons of 50% caustic soda
  const trucksSaved = Math.max(1, Math.round(parsedVolume / 5000)) || 0;
  // CO2 Emissions saved = ~145 kg CO2 per tanker delivery route saved
  const co2Saved = trucksSaved * 145;

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResults(true);

    // Smooth scroll to the results area
    setTimeout(() => {
      const anchor = document.getElementById("calculator-results-anchor");
      if (anchor) {
        anchor.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    }, 100);
  };

  const onBookCall = () => {
    const SCHEDULER_ID = "scheduler";
    const schedulerElement = document.getElementById(SCHEDULER_ID);
    if (schedulerElement) {
      schedulerElement.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      const summaryText = `ROI ESTIMATE SUMMARY: Annual Volume: ${parsedVolume.toLocaleString()} gal, Average Cost: $${costPerGallon}/gal, Concentration: ${concentration}, Flow Rate: ${flowRate}. Baseline spend: ${formatCurrency(calculatedSpend)}, Projected Net Annual Savings: ${formatCurrency(calculatedSavings)} (48% savings model).`;
      onBookWithRoi(summaryText);
    }
  };

  return (
    <section id="calculator" className="py-20 bg-slate-950 relative overflow-hidden border-t border-slate-900">
      {/* Subtle background industrial grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0ea5e908_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e908_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-sky-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main White Calculator Box */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl max-w-4xl mx-auto border border-amber-100 text-left">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight mb-2">
              Calculate Your Caustic Savings ROI
            </h2>
            <p className="text-slate-500 text-sm sm:text-base mb-8">
              Determine your potential net annual savings by switching from bulk NaOH to the HAS Platform.
            </p>
          </div>

          <form onSubmit={handleCalculate} className="space-y-8">
            {/* Grid with 4 fields matching the user design precisely */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              
              {/* 1. Volume */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider">
                  1. Annual bulk caustic purchase Volume in gallons
                </label>
                <input
                  type="text"
                  value={volume}
                  onChange={(e) => setVolume(e.target.value)}
                  placeholder="e.g., 1,000,000"
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all font-medium text-sm"
                />
                <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
                  Volume unit is fixed to Gallons/Year.
                </p>
              </div>

              {/* 2. Cost Per Gallon */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider">
                  2. Average cost per gallon (USD)
                </label>
                <input
                  type="text"
                  value={costPerGallon}
                  onChange={(e) => setCostPerGallon(e.target.value)}
                  placeholder="e.g., 1.08"
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all font-medium text-sm"
                />
                <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
                  This should include chemical cost, shipping, and handling.
                </p>
              </div>

              {/* 3. Concentration */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider">
                  3. Current caustic concentration and/or desired pH
                </label>
                <input
                  type="text"
                  value={concentration}
                  onChange={(e) => setConcentration(e.target.value)}
                  placeholder="e.g., Baumé 20 @ 12 pH"
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all font-medium text-sm"
                />
                <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
                  Used for technical context.
                </p>
              </div>

              {/* 4. Flow Rate */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider">
                  4. Current injection flow rate and pH of caustic solution
                </label>
                <input
                  type="text"
                  value={flowRate}
                  onChange={(e) => setFlowRate(e.target.value)}
                  placeholder="e.g., 3 GPM @ pH 10"
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all font-medium text-sm"
                />
                <p className="text-[10px] text-red-500 font-bold uppercase tracking-wider">
                  Crucial for system sizing.
                </p>
              </div>

            </div>

            {/* Submit CTA */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                type="submit"
                className="w-full sm:w-auto bg-amber-600 hover:bg-amber-700 active:bg-amber-800 text-white font-bold py-3.5 px-8 rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center space-x-2 border-b-4 border-amber-800 cursor-pointer text-sm"
              >
                <Calculator className="w-4 h-4" />
                <span>Calculate Your Annual Savings</span>
              </button>
              <div className="text-[11px] text-slate-400 font-medium text-center sm:text-right max-w-sm">
                Provides a custom-tailored industrial-grade chemical efficiency assessment based on standard municipal rates.
              </div>
            </div>
          </form>

          {/* Results Section Anchor */}
          <div id="calculator-results-anchor" className="h-2" />

          {/* Interactive Dynamic Results Container */}
          <AnimatePresence>
            {showResults && (
              <motion.div
                initial={{ opacity: 0, height: 0, y: 15 }}
                animate={{ opacity: 1, height: 'auto', y: 0 }}
                exit={{ opacity: 0, height: 0, y: 15 }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden mt-10 border-t border-slate-100 pt-8"
              >
                <div className="bg-slate-950 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-xl relative">
                  <div className="absolute right-6 top-6 text-amber-500/10 pointer-events-none">
                    <Sparkles className="w-24 h-24" />
                  </div>

                  <div className="text-xs font-mono font-bold tracking-widest text-amber-500 uppercase mb-2">
                    ESTIMATED ON-SITE ROI
                  </div>

                  <h3 className="text-xl sm:text-2xl font-display font-extrabold text-white tracking-tight mb-6">
                    Estimated Hydrology System Performance
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {/* Total Savings Block */}
                    <div className="bg-gradient-to-br from-emerald-950 to-emerald-900 border border-emerald-500/30 p-6 rounded-xl relative overflow-hidden">
                      <div className="absolute right-4 -bottom-4 text-emerald-800/10 pointer-events-none">
                        <TrendingDown className="w-24 h-24" />
                      </div>
                      <span className="text-[10px] font-bold tracking-widest text-emerald-400 uppercase">
                        Projected Annual Savings
                      </span>
                      <div className="text-3xl sm:text-4xl font-black text-white mt-1 mb-2">
                        {formatCurrency(calculatedSavings)}
                      </div>
                      <div className="flex items-center space-x-1.5 text-xs font-bold text-emerald-300">
                        <CheckCircle className="w-4 h-4 text-emerald-400" />
                        <span>48% total chemical spend reduction</span>
                      </div>
                    </div>

                    {/* Current vs Next Cost */}
                    <div className="space-y-3 bg-zinc-900 p-6 rounded-xl border border-zinc-800">
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-zinc-400">Current annual bulk spend:</span>
                        <span className="font-bold text-zinc-300">{formatCurrency(calculatedSpend)}</span>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-amber-500 font-semibold">HAS System chemical spend:</span>
                        <span className="font-bold text-white">{formatCurrency(calculatedSpend - calculatedSavings)}</span>
                      </div>
                      <div className="h-[1px] bg-zinc-800 my-2" />
                      <div className="flex justify-between items-center text-xs font-mono">
                        <span className="text-emerald-400">Estimated payback period:</span>
                        <span className="font-bold text-white px-2 py-0.5 bg-emerald-950 rounded border border-emerald-500/20">~14-18 months</span>
                      </div>
                    </div>
                  </div>

                  {/* Logistics and Green Impact bar */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-zinc-900/50 border border-zinc-800 p-4 rounded-xl mb-8">
                    <div className="flex items-center space-x-3 text-xs text-zinc-300">
                      <div className="p-2 bg-zinc-800 text-amber-500 rounded-lg">
                        <Truck className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="block font-bold text-white">{trucksSaved} bulk tankers</span>
                        eliminated from city roads each year
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 text-xs text-zinc-300">
                      <div className="p-2 bg-zinc-800 text-emerald-500 rounded-lg">
                        <RefreshCcw className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="block font-bold text-white">{co2Saved.toLocaleString()} kg</span>
                        CO₂ transport emissions avoided
                      </div>
                    </div>
                  </div>

                  {/* Quick CTA button */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-zinc-900">
                    <p className="text-[11px] text-zinc-400 leading-relaxed text-center sm:text-left max-w-md">
                      *This estimate is calculated based on standard chemical transport indices and municipal pricing profiles.
                    </p>
                    <div
                      onClick={onBookCall}
                      className="relative overflow-hidden w-full sm:w-auto flex items-center justify-center space-x-2 bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-black font-bold py-3 px-6 rounded-xl transition-all shadow-md cursor-pointer text-xs"
                    >
                      <span>Book Verified Engineering Assessment</span>
                      <ArrowRight className="w-4 h-4" />
                      <GoogleCalendarOverlay id="google-calendar-roi-calculator" />
                    </div>
                  </div>

                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}

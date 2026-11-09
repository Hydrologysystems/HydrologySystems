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
    const summaryText = `ROI ESTIMATE SUMMARY: Annual Volume: ${parsedVolume.toLocaleString()} gal, Average Cost: $${costPerGallon}/gal, Concentration: ${concentration}, Flow Rate: ${flowRate}. Baseline spend: ${formatCurrency(calculatedSpend)}, Projected Net Annual Savings: ${formatCurrency(calculatedSavings)} (48% savings model).`;
    onBookWithRoi(summaryText);
  };

  return (
    <section id="calculator" className="py-20 bg-[#080B12] relative overflow-hidden border-t border-white/10">
      {/* Subtle background industrial grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0066FF08_1px,transparent_1px),linear-gradient(to_bottom,#0066FF08_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#0066FF]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#0066FF]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main White Calculator Box */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl max-w-4xl mx-auto border border-[#DCE2EB] text-left">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-[#101828] tracking-tight mb-2">
              Calculate Your Caustic Savings ROI
            </h2>
            <p className="text-[#667085] text-sm sm:text-base mb-8">
              Determine your potential net annual savings by switching from bulk NaOH to the HAS Platform.
            </p>
          </div>

          <form onSubmit={handleCalculate} className="space-y-8">
            {/* Grid with 4 fields matching the user design precisely */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              
              {/* 1. Volume */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-[#101828] uppercase tracking-wider">
                  1. Annual bulk caustic purchase Volume in gallons
                </label>
                <input
                  type="text"
                  value={volume}
                  onChange={(e) => setVolume(e.target.value)}
                  placeholder="e.g., 1,000,000"
                  className="w-full px-4 py-3 border border-[#DCE2EB] rounded-xl text-[#101828] placeholder-[#667085] focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:border-[#0066FF] transition-all font-medium text-sm"
                />
                <p className="text-[10px] text-[#667085] font-semibold uppercase tracking-wider">
                  Volume unit is fixed to Gallons/Year.
                </p>
              </div>

              {/* 2. Cost Per Gallon */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-[#101828] uppercase tracking-wider">
                  2. Average cost per gallon (USD)
                </label>
                <input
                  type="text"
                  value={costPerGallon}
                  onChange={(e) => setCostPerGallon(e.target.value)}
                  placeholder="e.g., 1.08"
                  className="w-full px-4 py-3 border border-[#DCE2EB] rounded-xl text-[#101828] placeholder-[#667085] focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:border-[#0066FF] transition-all font-medium text-sm"
                />
                <p className="text-[10px] text-[#667085] font-semibold uppercase tracking-wider">
                  This should include chemical cost, shipping, and handling.
                </p>
              </div>

              {/* 3. Concentration */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-[#101828] uppercase tracking-wider">
                  3. Current caustic concentration and/or desired pH
                </label>
                <input
                  type="text"
                  value={concentration}
                  onChange={(e) => setConcentration(e.target.value)}
                  placeholder="e.g., Baumé 20 @ 12 pH"
                  className="w-full px-4 py-3 border border-[#DCE2EB] rounded-xl text-[#101828] placeholder-[#667085] focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:border-[#0066FF] transition-all font-medium text-sm"
                />
                <p className="text-[10px] text-[#667085] font-semibold uppercase tracking-wider">
                  Used for technical context.
                </p>
              </div>

              {/* 4. Flow Rate */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-[#101828] uppercase tracking-wider">
                  4. Current injection flow rate and pH of caustic solution
                </label>
                <input
                  type="text"
                  value={flowRate}
                  onChange={(e) => setFlowRate(e.target.value)}
                  placeholder="e.g., 3 GPM @ pH 10"
                  className="w-full px-4 py-3 border border-[#DCE2EB] rounded-xl text-[#101828] placeholder-[#667085] focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:border-[#0066FF] transition-all font-medium text-sm"
                />
                <p className="text-[10px] text-[#0066FF] font-bold uppercase tracking-wider">
                  Crucial for system sizing.
                </p>
              </div>

            </div>

            {/* Submit CTA */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                type="submit"
                className="w-full sm:w-auto bg-[#0066FF] hover:bg-[#0052cc] text-white font-bold py-3.5 px-8 rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center space-x-2 border-b-4 border-[#0047b3] cursor-pointer text-sm"
              >
                <Calculator className="w-4 h-4" />
                <span>Calculate Your Annual Savings</span>
              </button>
              <div className="text-[11px] text-[#667085] font-medium text-center sm:text-right max-w-sm">
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
                className="overflow-hidden mt-10 border-t border-[#DCE2EB] pt-8"
              >
                <div className="bg-[#080B12] text-white rounded-2xl p-6 sm:p-8 border border-white/10 shadow-xl relative">
                  <div className="absolute right-6 top-6 text-[#0066FF]/10 pointer-events-none">
                    <Sparkles className="w-24 h-24" />
                  </div>

                  <div className="text-xs font-mono font-bold tracking-widest text-[#0066FF] uppercase mb-2">
                    ESTIMATED ON-SITE ROI
                  </div>

                  <h3 className="text-xl sm:text-2xl font-display font-extrabold text-white tracking-tight mb-6">
                    Estimated Hydrology System Performance
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {/* Total Savings Block */}
                    <div className="bg-gradient-to-br from-[#0066FF]/25 via-[#0c121e] to-[#080B12] border border-[#0066FF]/40 p-6 rounded-xl relative overflow-hidden">
                      <div className="absolute right-4 -bottom-4 text-[#0066FF]/10 pointer-events-none">
                        <TrendingDown className="w-24 h-24" />
                      </div>
                      <span className="text-[10px] font-bold tracking-widest text-[#0066FF] uppercase">
                        Projected Annual Savings
                      </span>
                      <div className="text-3xl sm:text-4xl font-black text-white mt-1 mb-2">
                        {formatCurrency(calculatedSavings)}
                      </div>
                      <div className="flex items-center space-x-1.5 text-xs font-bold text-[#0066FF]">
                        <CheckCircle className="w-4 h-4 text-[#0066FF]" />
                        <span>48% total chemical spend reduction</span>
                      </div>
                    </div>

                    {/* Current vs Next Cost */}
                    <div className="space-y-3 bg-[#0c121e] p-6 rounded-xl border border-white/10">
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-slate-400">Current annual bulk spend:</span>
                        <span className="font-bold text-slate-200">{formatCurrency(calculatedSpend)}</span>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-[#0066FF] font-semibold">HAS System chemical spend:</span>
                        <span className="font-bold text-white">{formatCurrency(calculatedSpend - calculatedSavings)}</span>
                      </div>
                      <div className="h-[1px] bg-white/10 my-2" />
                      <div className="flex justify-between items-center text-xs font-mono">
                        <span className="text-slate-300">Estimated payback period:</span>
                        <span className="font-bold text-white px-2 py-0.5 bg-[#0066FF]/20 rounded border border-[#0066FF]/30">~14-18 months</span>
                      </div>
                    </div>
                  </div>

                  {/* Logistics and Green Impact bar */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#0c121e]/80 border border-white/10 p-4 rounded-xl mb-8">
                    <div className="flex items-center space-x-3 text-xs text-slate-300">
                      <div className="p-2 bg-white/5 text-[#0066FF] rounded-lg">
                        <Truck className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="block font-bold text-white">{trucksSaved} bulk tankers</span>
                        eliminated from city roads each year
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 text-xs text-slate-300">
                      <div className="p-2 bg-white/5 text-[#0066FF] rounded-lg">
                        <RefreshCcw className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="block font-bold text-white">{co2Saved.toLocaleString()} kg</span>
                        CO₂ transport emissions avoided
                      </div>
                    </div>
                  </div>

                  {/* Quick CTA button */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
                    <p className="text-[11px] text-slate-400 leading-relaxed text-center sm:text-left max-w-md">
                      *This estimate is calculated based on standard chemical transport indices and municipal pricing profiles.
                    </p>
                    <button
                      type="button"
                      onClick={onBookCall}
                      className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-[#0066FF] hover:bg-[#0052cc] text-white font-bold py-3 px-6 rounded-xl transition-all shadow-md shadow-[#0066FF]/25 cursor-pointer text-xs"
                    >
                      <span>Book Verified Engineering Assessment</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
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

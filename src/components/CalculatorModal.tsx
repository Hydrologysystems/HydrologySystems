/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  X, 
  Calculator, 
  Sparkles, 
  TrendingDown, 
  CheckCircle, 
  Truck, 
  RefreshCcw, 
  ArrowRight,
  ShieldCheck,
  HelpCircle,
  Sun,
  Moon
} from "lucide-react";
import GoogleCalendarOverlay from "./GoogleCalendarOverlay";

interface CalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookWithRoi: (summary: string) => void;
}

export default function CalculatorModal({ isOpen, onClose, onBookWithRoi }: CalculatorModalProps) {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [volume, setVolume] = useState<string>("1,000,000");
  const [costPerGallon, setCostPerGallon] = useState<string>("1.08");
  const [concentration, setConcentration] = useState<string>("Baumé 20 @ 12 pH");
  const [flowRate, setFlowRate] = useState<string>("3 GPM @ pH 10");

  // Sync theme with system settings or default to dark (matches industrial aesthetic)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const isDarkPreferred = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(isDarkPreferred ? "dark" : "light");
    }
  }, [isOpen]);

  const isDark = theme === "dark";

  // Prevent background scrolling when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Safe parsing
  const parsedVolume = parseFloat(volume.replace(/,/g, "")) || 0;
  const parsedCost = parseFloat(costPerGallon) || 0;
  
  // Calculations
  const calculatedSpend = parsedVolume * parsedCost;
  const calculatedSavings = calculatedSpend * 0.48; // 48% total spend reduction
  const trucksSaved = Math.max(1, Math.round(parsedVolume / 5000)) || 0;
  const co2Saved = trucksSaved * 145;

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const handleBookCall = () => {
    const summaryText = `ROI ESTIMATE SUMMARY: Annual Volume: ${parsedVolume.toLocaleString()} gal, Average Cost: $${costPerGallon}/gal, Concentration: ${concentration}, Flow Rate: ${flowRate}. Baseline spend: ${formatCurrency(calculatedSpend)}, Projected Net Annual Savings: ${formatCurrency(calculatedSavings)} (48% savings model).`;
    onBookWithRoi(summaryText);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-sm overflow-y-auto"
          onClick={onClose}
        >
          {/* Modal Container Card */}
          <motion.div
            initial={{ scale: 0.95, y: 15 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 15 }}
            transition={{ type: "spring", duration: 0.45, bounce: 0.1 }}
            className={`w-full max-w-4xl rounded-3xl flex flex-col relative overflow-hidden transition-colors duration-300 shadow-2xl border ${
              isDark 
                ? "bg-[#0b0c10] border-white/10 text-slate-200" 
                : "bg-white border-slate-200 text-slate-800"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Ambient background glows for extra visual depth */}
            {isDark && (
              <>
                <div className="absolute top-0 right-0 w-80 h-80 bg-teal-500/5 blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-500/5 blur-3xl pointer-events-none" />
              </>
            )}

            {/* Modal Header */}
            <div className={`flex flex-row justify-between items-center p-4 sm:p-6 border-b relative z-10 gap-3 ${
              isDark ? "border-white/5 bg-black/20" : "border-slate-100 bg-slate-50/50"
            }`}>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border ${
                  isDark 
                    ? "bg-teal-500/10 border-teal-500/20 text-teal-400" 
                    : "bg-teal-500/5 border-teal-500/10 text-teal-600"
                }`}>
                  <Calculator className="w-5 h-5" />
                </div>
                <div>
                  <h3 className={`font-display text-base sm:text-lg font-bold uppercase tracking-tight ${
                    isDark ? "text-white" : "text-slate-900"
                  }`}>
                    Caustic Savings ROI Calculator
                  </h3>
                  <p className={`text-xs font-sans ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                    On-site chemical efficiency assessment
                  </p>
                </div>
              </div>

              {/* Toolbar Controls */}
              <div className="flex items-center gap-2">
                {/* Theme Selector Toggle */}
                <button
                  onClick={() => setTheme(isDark ? "light" : "dark")}
                  className={`p-2 rounded-lg border transition-all cursor-pointer flex items-center justify-center ${
                    isDark 
                      ? "bg-white/5 border-white/5 text-slate-400 hover:text-white hover:bg-white/10" 
                      : "bg-slate-100 border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-200"
                  }`}
                  title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
                  aria-label="Toggle modal theme"
                >
                  {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                </button>

                {/* Modal close button */}
                <button
                  onClick={onClose}
                  className={`p-2 rounded-lg border transition-all cursor-pointer flex items-center justify-center ${
                    isDark 
                      ? "bg-white/5 border-white/5 text-slate-400 hover:text-white hover:bg-white/10" 
                      : "bg-slate-100 border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-200"
                  }`}
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10 max-h-[75vh] overflow-y-auto">
              {/* Inputs Form */}
              <div className="lg:col-span-7 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* 1. Volume */}
                  <div className="space-y-1.5">
                    <label className={`block text-[11px] font-bold uppercase tracking-wider ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                      Annual Volume (Gallons)
                    </label>
                    <input
                      type="text"
                      value={volume}
                      onChange={(e) => setVolume(e.target.value)}
                      placeholder="e.g. 1,000,000"
                      className={`w-full px-3.5 py-2.5 border rounded-xl text-sm font-medium transition-all outline-none ${
                        isDark 
                          ? "bg-[#14161d] border-slate-800 text-white focus:border-teal-500 focus:ring-1 focus:ring-teal-500" 
                          : "bg-slate-50 border-slate-200 text-slate-800 focus:border-teal-600 focus:ring-1 focus:ring-teal-600"
                      }`}
                    />
                  </div>

                  {/* 2. Cost Per Gallon */}
                  <div className="space-y-1.5">
                    <label className={`block text-[11px] font-bold uppercase tracking-wider ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                      Cost Per Gallon (USD)
                    </label>
                    <input
                      type="text"
                      value={costPerGallon}
                      onChange={(e) => setCostPerGallon(e.target.value)}
                      placeholder="e.g. 1.08"
                      className={`w-full px-3.5 py-2.5 border rounded-xl text-sm font-medium transition-all outline-none ${
                        isDark 
                          ? "bg-[#14161d] border-slate-800 text-white focus:border-teal-500 focus:ring-1 focus:ring-teal-500" 
                          : "bg-slate-50 border-slate-200 text-slate-800 focus:border-teal-600 focus:ring-1 focus:ring-teal-600"
                      }`}
                    />
                  </div>

                  {/* 3. Concentration */}
                  <div className="space-y-1.5">
                    <label className={`block text-[11px] font-bold uppercase tracking-wider ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                      Caustic Concentration
                    </label>
                    <input
                      type="text"
                      value={concentration}
                      onChange={(e) => setConcentration(e.target.value)}
                      placeholder="e.g. Baumé 20 @ 12 pH"
                      className={`w-full px-3.5 py-2.5 border rounded-xl text-sm font-medium transition-all outline-none ${
                        isDark 
                          ? "bg-[#14161d] border-slate-800 text-white focus:border-teal-500 focus:ring-1 focus:ring-teal-500" 
                          : "bg-slate-50 border-slate-200 text-slate-800 focus:border-teal-600 focus:ring-1 focus:ring-teal-600"
                      }`}
                    />
                  </div>

                  {/* 4. Flow Rate */}
                  <div className="space-y-1.5">
                    <label className={`block text-[11px] font-bold uppercase tracking-wider ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                      Injection Flow Rate
                    </label>
                    <input
                      type="text"
                      value={flowRate}
                      onChange={(e) => setFlowRate(e.target.value)}
                      placeholder="e.g. 3 GPM @ pH 10"
                      className={`w-full px-3.5 py-2.5 border rounded-xl text-sm font-medium transition-all outline-none ${
                        isDark 
                          ? "bg-[#14161d] border-slate-800 text-white focus:border-teal-500 focus:ring-1 focus:ring-teal-500" 
                          : "bg-slate-50 border-slate-200 text-slate-800 focus:border-teal-600 focus:ring-1 focus:ring-teal-600"
                      }`}
                    />
                  </div>
                </div>

                <div className={`p-4 rounded-xl text-xs flex items-start gap-3 border ${
                  isDark 
                    ? "bg-slate-900/40 border-slate-800/80 text-slate-400" 
                    : "bg-slate-50 border-slate-200 text-slate-500"
                }`}>
                  <HelpCircle className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-700 dark:text-slate-200 block mb-0.5">Parameters Guide</span>
                    Our automated solid dissolution technology synthesizes pristine, non-spiking alkaline solutions on-demand at premium concentration rates.
                  </div>
                </div>
              </div>

              {/* Outputs Panel */}
              <div className="lg:col-span-5 flex flex-col justify-between">
                <div className={`p-6 rounded-2xl border flex-grow flex flex-col justify-center relative overflow-hidden ${
                  isDark 
                    ? "bg-gradient-to-br from-teal-950/40 to-slate-950 border-teal-500/20" 
                    : "bg-gradient-to-br from-teal-50/50 to-slate-50 border-teal-500/10"
                }`}>
                  <div className="absolute top-4 right-4 text-teal-500/10 pointer-events-none">
                    <Sparkles className="w-16 h-16" />
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-widest text-teal-600 block mb-1">
                    Projected Annual Savings
                  </span>
                  <div className={`text-3xl sm:text-4xl font-black mb-3 ${isDark ? "text-white" : "text-slate-900"}`}>
                    {formatCurrency(calculatedSavings)}
                  </div>

                  <div className="space-y-2 text-xs border-t border-teal-500/10 pt-3">
                    <div className="flex justify-between">
                      <span className={`${isDark ? "text-slate-400" : "text-slate-500"}`}>Current Annual Spend:</span>
                      <span className="font-bold">{formatCurrency(calculatedSpend)}</span>
                    </div>
                    <div className="flex justify-between text-teal-600">
                      <span>Projected HAS Cost:</span>
                      <span className="font-bold">{formatCurrency(calculatedSpend - calculatedSavings)}</span>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-teal-500/10 grid grid-cols-2 gap-3 text-[11px]">
                    <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
                      <Truck className="w-3.5 h-3.5 text-amber-500" />
                      <span>{trucksSaved} Trucks Saved</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
                      <RefreshCcw className="w-3.5 h-3.5 text-emerald-500" />
                      <span>{co2Saved} kg CO₂ Saved</span>
                    </div>
                  </div>
                </div>

                <div
                  onClick={handleBookCall}
                  className="relative overflow-hidden mt-4 w-full bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white font-bold py-3 px-4 rounded-xl transition-all shadow-md flex items-center justify-center space-x-2 border-b-4 border-teal-800 cursor-pointer text-sm"
                >
                  <span>Book Engineering Assessment</span>
                  <ArrowRight className="w-4 h-4" />
                  <GoogleCalendarOverlay id="google-calendar-modal-calculator" />
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className={`px-4 sm:px-6 py-3 border-t flex flex-row justify-between items-center text-[9px] sm:text-[10px] font-mono gap-1.5 transition-colors ${
              isDark ? "bg-[#08080a] border-white/5 text-slate-500" : "bg-slate-50 border-slate-100 text-slate-500"
            }`}>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>On-site chemical safety is guaranteed under ASME compliance standards</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Calendar, Sparkles, ShieldCheck, HelpCircle, Sun, Moon, ExternalLink } from "lucide-react";

interface BookCallModalProps {
  isOpen: boolean;
  onClose: () => void;
  roiSummary?: string;
}

export default function BookCallModal({ isOpen, onClose, roiSummary }: BookCallModalProps) {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("light");

  // Detect system color scheme preference on mount and when modal opens
  useEffect(() => {
    if (typeof window !== "undefined") {
      const isDarkPreferred = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(isDarkPreferred ? "dark" : "light");
    }
  }, [isOpen]);

  const bookingUrl = "https://calendar.google.com/calendar/appointments/schedules/AcZssZ3PvPiiOK85zougRr31Bl--l4BVe94HMIKZHNIlyHTp1ZbXSTj4paJKJORtJy5phUP7XHHq6_iz?gv=true";
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

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          {/* Main Container Card: responsive full-screen on mobile, optimized floating card on tablet/desktop */}
          <motion.div
            initial={{ scale: 0.95, y: 15 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 15 }}
            transition={{ type: "spring", duration: 0.45, bounce: 0.1 }}
            className={`w-full h-full sm:h-[88vh] md:h-[84vh] max-w-5xl flex flex-col relative overflow-hidden transition-colors duration-300 shadow-2xl sm:rounded-2xl border ${
              isDark 
                ? "bg-[#0b0b0e] border-white/10 text-slate-200" 
                : "bg-[#fcfcfd] border-slate-200 text-slate-800"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Ambient background glows for extra visual depth */}
            {isDark && (
              <>
                <div className="absolute top-0 right-0 w-80 h-80 bg-primary-500/5 blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-500/5 blur-3xl pointer-events-none" />
              </>
            )}

            {/* Modal Header: highly responsive, compact structure */}
            <div className={`flex flex-row justify-between items-center p-4 sm:p-5 border-b relative z-10 gap-3 ${
              isDark ? "border-white/5 bg-black/10" : "border-slate-200/60 bg-slate-50/50"
            }`}>
              <div className="flex items-center gap-2.5 min-w-0">
                <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shrink-0 border transition-colors ${
                  isDark 
                    ? "bg-primary-500/10 border-primary-500/20 text-primary-400" 
                    : "bg-primary-500/5 border-primary-500/10 text-primary-600"
                }`}>
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className={`font-mono text-[8px] sm:text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                      isDark ? "bg-primary-500/15 text-primary-400" : "bg-primary-500/10 text-primary-700"
                    }`}>
                      Secure Booking
                    </span>
                    {roiSummary && (
                      <span className={`font-mono text-[8px] sm:text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full flex items-center gap-1 ${
                        isDark ? "bg-emerald-500/15 text-emerald-400" : "bg-emerald-50/50 text-emerald-700"
                      }`}>
                        <Sparkles className="w-2.5 h-2.5 shrink-0" /> ROI Linked
                      </span>
                    )}
                  </div>
                  <h3 className={`font-display text-sm sm:text-base md:text-lg font-bold uppercase tracking-tight truncate ${
                    isDark ? "text-white" : "text-slate-900"
                  }`}>
                    Schedule Your Consultation
                  </h3>
                </div>
              </div>

              {/* Toolbar Controls */}
              <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                {/* Theme Selector Toggle */}
                <button
                  onClick={() => setTheme(isDark ? "light" : "dark")}
                  className={`p-1.5 sm:p-2 rounded-lg border transition-all cursor-pointer flex items-center justify-center ${
                    isDark 
                      ? "bg-white/5 border-white/5 text-slate-400 hover:text-white hover:bg-white/10" 
                      : "bg-slate-100 border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-200"
                  }`}
                  title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
                  aria-label="Toggle modal theme"
                >
                  {isDark ? <Sun className="w-4 h-4 sm:w-4.5 sm:h-4.5" /> : <Moon className="w-4 h-4 sm:w-4.5 sm:h-4.5" />}
                </button>

                {/* Open in new tab fallback option */}
                <a
                  href={bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-1.5 px-2.5 py-1.5 sm:px-3 text-[10px] sm:text-xs font-mono font-bold border rounded-lg transition-all cursor-pointer ${
                    isDark 
                      ? "bg-white/5 border-white/5 text-slate-400 hover:text-white hover:bg-white/10" 
                      : "bg-slate-100 border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-200"
                  }`}
                  title="Open direct scheduler page in a new window"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span className="hidden xs:inline">New Tab</span>
                </a>

                {/* Modal close button */}
                <button
                  onClick={onClose}
                  className={`p-1.5 sm:p-2 rounded-lg border transition-all cursor-pointer flex items-center justify-center ${
                    isDark 
                      ? "bg-white/5 border-white/5 text-slate-400 hover:text-white hover:bg-white/10" 
                      : "bg-slate-100 border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-200"
                  }`}
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                </button>
              </div>
            </div>



            {/* Calendar Frame Stage: takes remaining viewport space cleanly on all mobile aspects */}
            <div className={`flex-1 relative flex flex-col min-h-0 ${
              isDark ? "bg-[#111115]" : "bg-[#f8f9fa]"
            }`}>
              {/* Spinning/pulsing custom loading state */}
              {!iframeLoaded && (
                <div className={`absolute inset-0 flex flex-col items-center justify-center z-20 gap-3 px-4 text-center ${
                  isDark ? "bg-[#0b0b0e]" : "bg-[#fcfcfd]"
                }`}>
                  <div className={`w-8 h-8 rounded-full border-2 animate-spin ${
                    isDark ? "border-primary-500/20 border-t-primary-500" : "border-primary-500/10 border-t-primary-600"
                  }`} />
                  <p className={`font-mono text-[10px] tracking-wider uppercase ${
                    isDark ? "text-slate-500" : "text-slate-400"
                  }`}>
                    Establishing Secure Google Calendar Access...
                  </p>
                </div>
              )}

              {/* Google Calendar Iframe Integration */}
              <iframe
                src={bookingUrl}
                className="w-full h-full border-0 select-none bg-white"
                onLoad={() => setIframeLoaded(true)}
                title="Google Calendar Appointment Scheduling"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              />
            </div>

            {/* Modal Security & Help Footer - hidden or ultra-compact on extra-small heights */}
            <div className={`px-4 sm:px-5 py-2.5 sm:py-3 border-t flex flex-col sm:flex-row justify-between items-center text-[9px] sm:text-[10px] font-mono gap-1.5 transition-colors ${
              isDark ? "bg-[#08080a] border-white/5 text-slate-500" : "bg-slate-50 border-slate-100 text-slate-500"
            }`}>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>Encrypted direct-connect secure schedule with advisor calendar</span>
              </div>
              <div className="flex items-center gap-1">
                <HelpCircle className="w-3 h-3 text-slate-400 shrink-0" />
                <span>Timezone is synchronized automatically</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

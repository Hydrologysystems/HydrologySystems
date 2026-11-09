/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowLeft, 
  HelpCircle, 
  ChevronDown, 
  ShieldCheck, 
  CheckCircle2, 
  Phone, 
  Calculator, 
  ArrowRight, 
  Search, 
  Flame, 
  Droplet, 
  Cpu, 
  Building2,
  FileQuestion
} from "lucide-react";
import { TECHNICAL_FAQS } from "./TechnicalFaq";

interface TechnicalFaqViewProps {
  onBack: () => void;
  onBookCallClick: (presetSubject?: string) => void;
  onCalculatorClick: () => void;
}

export default function TechnicalFaqView({
  onBack,
  onBookCallClick,
  onCalculatorClick,
}: TechnicalFaqViewProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    "replace-bulk-caustic-soda": true,
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const originalTitle = document.title;
    document.title = "Technical FAQ & Caustic Replacement | Hydrology Systems";
    return () => {
      document.title = originalTitle;
    };
  }, []);

  const categories = [
    "All",
    "Chemical Replacement",
    "Wastewater & Compliance",
    "Engineering & Skid Design",
    "Cooling & Agriculture"
  ];

  const toggleItem = (id: string) => {
    setOpenIds(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const expandAll = () => {
    const all: Record<string, boolean> = {};
    TECHNICAL_FAQS.forEach(item => {
      all[item.id] = true;
    });
    setOpenIds(all);
  };

  const collapseAll = () => {
    setOpenIds({});
  };

  const filteredFaqs = TECHNICAL_FAQS.filter(faq => {
    const matchesCategory = activeCategory === "All" || faq.category === activeCategory;
    const query = searchQuery.toLowerCase().trim();
    const matchesQuery = query === "" || 
      faq.question.toLowerCase().includes(query) ||
      faq.shortAnswer.toLowerCase().includes(query) ||
      faq.detail.toLowerCase().includes(query) ||
      faq.category.toLowerCase().includes(query);
    return matchesCategory && matchesQuery;
  });

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
              <span className="text-[#101828] font-semibold">Technical FAQ</span>
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
              onClick={() => onBookCallClick("Technical FAQ Consultation Request")}
              className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-wider text-white bg-[#0066FF] hover:bg-[#0052cc] px-3.5 py-1.5 rounded-lg transition-colors cursor-pointer shadow-xs"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Talk with an Engineer</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12">
        
        {/* Header Hero Section */}
        <div className="mb-10 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0066FF]/10 border border-[#0066FF]/30 text-[#0066FF] text-xs font-mono font-bold tracking-wider uppercase mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>KNOWLEDGE BASE // REGULATORY & PROCESS FAQS</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-[#101828] tracking-tight leading-tight">
            Technical FAQ &amp; Caustic Replacement
          </h1>
          <p className="text-[#667085] text-sm sm:text-base lg:text-lg mt-3 max-w-3xl leading-relaxed">
            Direct, authoritative engineering answers for plant managers, environmental engineers, and EHS directors evaluating on-site alkaline generation to eliminate delivered bulk chemicals and maintain strict discharge compliance.
          </p>
        </div>

        {/* Search Bar & Category Filter Bar */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#DCE2EB] shadow-xs mb-8 space-y-4">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search technical questions, keywords (e.g. caustic soda, PSM, cooling tower, pH 12)..."
              className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-[#F4F6FA] border border-[#DCE2EB] rounded-xl focus:outline-none focus:border-[#0066FF] focus:bg-white transition-colors"
            />
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-100">
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold tracking-wider uppercase transition-colors cursor-pointer ${
                    activeCategory === cat
                      ? "bg-[#0066FF] text-white"
                      : "bg-[#F4F6FA] text-[#667085] border border-[#DCE2EB] hover:bg-slate-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={expandAll}
                className="text-[11px] font-mono text-[#667085] hover:text-[#0066FF] underline cursor-pointer"
              >
                Expand All
              </button>
              <span className="text-slate-300">|</span>
              <button
                onClick={collapseAll}
                className="text-[11px] font-mono text-[#667085] hover:text-[#0066FF] underline cursor-pointer"
              >
                Collapse All
              </button>
            </div>
          </div>
        </div>

        {/* FAQ Accordion Items */}
        <div className="space-y-4 mb-12">
          {filteredFaqs.length === 0 ? (
            <div className="p-12 text-center bg-white rounded-2xl border border-[#DCE2EB] text-[#667085]">
              <FileQuestion className="w-10 h-10 text-slate-300 mx-auto mb-3" />
              <p className="text-sm font-semibold text-[#101828]">No matching technical questions found</p>
              <p className="text-xs text-[#667085] mt-1">Try searching for other terms or reset the filter category.</p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("All");
                }}
                className="mt-4 px-4 py-2 bg-[#0066FF] text-white text-xs font-mono rounded-lg hover:bg-[#0052cc] transition-colors cursor-pointer"
              >
                Reset Search Filters
              </button>
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = !!openIds[faq.id];
              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? "bg-white border-[#0066FF]/60 shadow-sm"
                      : "bg-white border-[#DCE2EB] hover:border-slate-300 shadow-xs"
                  }`}
                >
                  <button
                    onClick={() => toggleItem(faq.id)}
                    aria-expanded={isOpen}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                      <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-[#0066FF] bg-[#0066FF]/10 border border-[#0066FF]/30 px-2.5 py-0.5 rounded-md self-start sm:self-auto shrink-0">
                        {faq.category}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-[#101828] leading-snug">
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
                        className="border-t border-[#DCE2EB] px-6 py-5 bg-[#F4F6FA]/50"
                      >
                        <div className="p-3.5 rounded-xl bg-[#0066FF]/10 border border-[#0066FF]/20 mb-3">
                          <p className="text-xs font-mono font-bold uppercase tracking-wider text-[#0066FF] mb-1">
                            Executive Technical Summary:
                          </p>
                          <p className="text-[#101828] text-sm font-semibold">
                            {faq.shortAnswer}
                          </p>
                        </div>
                        <p className="text-[#667085] text-sm leading-relaxed whitespace-pre-line">
                          {faq.detail}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })
          )}
        </div>

        {/* Direct Technical Consultation CTA Card */}
        <div className="rounded-3xl bg-[#080B12] text-white p-6 sm:p-10 shadow-xl border border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-xl text-left">
            <span className="text-[#0066FF] font-mono text-xs font-bold uppercase tracking-wider block mb-2">
              APPLICATION ENGINEERING DESK
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
              Have a plant-specific pH control or wastewater question?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
              Our engineering team analyzes site-specific water chemistry reports, acidic peak loading, and discharge compliance thresholds at zero charge.
            </p>
          </div>
          <button
            onClick={() => onBookCallClick("Technical Engineering Consultation on Plant Specs")}
            className="px-6 py-3.5 rounded-xl bg-[#0066FF] hover:bg-[#0052cc] text-white font-bold text-xs font-mono uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#0066FF]/25 shrink-0"
          >
            <span>Speak with an Application Engineer</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}

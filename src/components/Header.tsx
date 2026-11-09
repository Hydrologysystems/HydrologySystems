/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Droplet, Phone, MessageSquare, ChevronDown, Calculator } from "lucide-react";
import LogoIcon from "./LogoIcon";

interface HeaderProps {
  onBookCallClick: (presetSubject?: string) => void;
  onCalculatorClick: () => void;
  onSelectIndustry?: (industryId: any) => void;
  onClearanceClick?: () => void;
  isClearanceActive?: boolean;
  onCapitalAnalysisClick?: (subTab?: "comparison" | "risk" | "advantage") => void;
  isCapitalAnalysisActive?: boolean;
  onSpecsClick?: () => void;
  onFaqClick?: () => void;
  onHomeClick?: () => void;
}

export default function Header({ 
  onBookCallClick, 
  onCalculatorClick, 
  onSelectIndustry, 
  onClearanceClick,
  isClearanceActive = false,
  onCapitalAnalysisClick,
  isCapitalAnalysisActive = false,
  onSpecsClick,
  onFaqClick,
  onHomeClick 
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [mobileApplicationsOpen, setMobileApplicationsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "HOME", href: "#home" },
    { label: "TECHNOLOGY", href: "#technology" },
    { label: "APPLICATION", href: "#applications" },
    { label: "US vs. THEM", href: "#capital-analysis" },
    { label: "ABOUT US", href: "#about" },
    { label: "CLEARANCE", href: "#clearance" },
  ];

  const dropdownOptions = [
    { label: "Oil Refineries & Hydrocarbon", href: "#oil-refineries-hydrocarbon", industryId: "refineries" as const },
    { label: "Cooling Towers & Heat Exchangers", href: "#cooling-towers-industrial", industryId: "cooling-towers" as const },
    { label: "Wastewater & Effluent Neutralization", href: "#wastewater-treatment-effluent", industryId: "wastewater" as const },
    { label: "Lithium & Drilling Operations", href: "#drilling-lithium-extraction", industryId: "drilling" as const },
    { label: "Food & Beverage Compliance", href: "#food-beverage-compliance", industryId: "food-beverage" as const },
    { label: "Agriculture & Cultivation", href: "#agriculture-wastewater", industryId: "agriculture" as const },
    { label: "⚡ Model HAWS-120 Skid ($39K Clearance)", href: "#clearance" },
    { label: "📊 US vs. THEM: Risk vs Advantage", href: "#capital-analysis" },
    { label: "Engineering Specifications", href: "#technical-specifications" },
    { label: "Technical FAQ", href: "#technical-faq" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, industryId?: any) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setIsDropdownOpen(false);

    if (href === "#clearance" && onClearanceClick) {
      onClearanceClick();
      return;
    }

    if (href === "#capital-analysis" && onCapitalAnalysisClick) {
      onCapitalAnalysisClick();
      return;
    }

    if ((href === "#technical-specifications" || href === "#specifications") && onSpecsClick) {
      onSpecsClick();
      return;
    }

    if ((href === "#technical-faq" || href === "#faq") && onFaqClick) {
      onFaqClick();
      return;
    }

    if (industryId && onSelectIndustry) {
      onSelectIndustry(industryId);
      return;
    }

    if (href === "#home" && onHomeClick) {
      onHomeClick();
    }

    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // height of header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    } else if (onHomeClick) {
      onHomeClick();
      setTimeout(() => {
        const el = document.querySelector(href);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 50);
    }
  };

  return (
    <>
      <header
        id="header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md border-[#DCE2EB] shadow-xs py-2"
            : "bg-[#080B12]/80 backdrop-blur-md border-white/10 py-2.5 sm:py-3"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-3 lg:gap-6">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center gap-2 sm:gap-3 group shrink-0"
          >
            <LogoIcon
              variant={isScrolled ? "light" : "dark"}
              className={`h-9 sm:h-10 md:h-12 object-contain group-hover:scale-105 transition-transform duration-300 shrink-0 ${!isScrolled ? "drop-shadow-[0_0_12px_rgba(0,102,255,0.4)]" : ""}`}
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2.5 lg:gap-4 xl:gap-6 2xl:gap-7 shrink-0">
            {navItems.map((item) => {
              if (item.label === "APPLICATION") {
                return (
                  <div
                    key={item.label}
                    className="relative flex items-center shrink-0"
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                  >
                    <button
                      onClick={(e) => handleNavClick(e as any, item.href)}
                      className={`font-sans text-xs font-semibold tracking-wider transition-colors duration-200 relative py-1 px-1.5 group flex items-center gap-1 cursor-pointer whitespace-nowrap ${
                        isScrolled
                          ? "text-[#667085] hover:text-[#0066FF]"
                          : "text-white/85 hover:text-white"
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${
                        isScrolled
                          ? isDropdownOpen ? "rotate-180 text-[#0066FF]" : "text-[#667085]"
                          : isDropdownOpen ? "rotate-180 text-[#0066FF]" : "text-slate-400"
                      }`} />
                      <span className={`absolute bottom-0 left-0 h-[2px] transition-all duration-300 ${
                        isDropdownOpen ? "w-full" : "w-0 group-hover:w-full"
                      } bg-[#0066FF]`} />
                    </button>
                    <AnimatePresence>
                      {isDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.15, ease: "easeOut" }}
                          className={`absolute left-1/2 -translate-x-1/2 top-full mt-2 w-56 rounded-xl border p-2 shadow-xl z-50 flex flex-col gap-0.5 ${
                            isScrolled
                              ? "border-[#DCE2EB] bg-white shadow-slate-200/50"
                              : "border-white/10 bg-[#080B12]/95 backdrop-blur-md shadow-black/40"
                          }`}
                        >
                          {dropdownOptions.map((opt) => (
                            <a
                              key={opt.label}
                              href={opt.href}
                              onClick={(e) => handleNavClick(e, opt.href, opt.industryId)}
                              className={`px-3 py-2 text-[11px] font-semibold font-sans tracking-wider rounded-lg transition-colors duration-150 text-left ${
                                isScrolled
                                  ? "text-[#667085] hover:text-[#0066FF] hover:bg-[#F4F6FA]"
                                  : "text-slate-300 hover:text-white hover:bg-white/5"
                              }`}
                            >
                              {opt.label}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }
              if (item.label === "CLEARANCE") {
                return (
                  <a
                    key={item.label}
                    href="#clearance"
                    onClick={(e) => {
                      e.preventDefault();
                      if (onClearanceClick) onClearanceClick();
                    }}
                    className={`font-sans text-xs font-semibold tracking-wider transition-colors duration-200 relative py-1 px-1.5 group flex items-center gap-1.5 cursor-pointer whitespace-nowrap shrink-0 ${
                      isClearanceActive
                        ? "text-rose-600 font-bold"
                        : isScrolled
                        ? "text-[#667085] hover:text-rose-600"
                        : "text-white/90 hover:text-rose-400"
                    }`}
                  >
                    <span>CLEARANCE</span>
                    <span className="px-1.5 py-0.5 rounded text-[9px] font-mono font-bold bg-rose-500/15 text-rose-600 border border-rose-500/30">
                      $39K
                    </span>
                    <span className={`absolute bottom-0 left-0 h-[2px] transition-all duration-300 ${
                      isClearanceActive 
                        ? "w-full bg-rose-500" 
                        : "w-0 group-hover:w-full " + (isScrolled ? "bg-rose-500" : "bg-rose-400")
                    }`} />
                  </a>
                );
              }
              if (item.label === "US vs. THEM" || item.label === "US vs THEM" || item.label === "CAPITAL ANALYSIS") {
                return (
                  <a
                    key={item.label}
                    href="#capital-analysis"
                    onClick={(e) => {
                      e.preventDefault();
                      if (onCapitalAnalysisClick) onCapitalAnalysisClick();
                    }}
                    className={`font-sans text-xs font-semibold tracking-wider transition-colors duration-200 relative py-1 px-1.5 group flex items-center gap-1.5 cursor-pointer whitespace-nowrap shrink-0 ${
                      isCapitalAnalysisActive
                        ? "text-[#0066FF] font-bold"
                        : isScrolled
                        ? "text-[#667085] hover:text-[#0066FF]"
                        : "text-white/90 hover:text-[#0066FF]"
                    }`}
                  >
                    <span>US vs. THEM</span>
                    <span className={`absolute bottom-0 left-0 h-[2px] transition-all duration-300 ${
                      isCapitalAnalysisActive 
                        ? "w-full bg-[#0066FF]" 
                        : "w-0 group-hover:w-full bg-[#0066FF]"
                    }`} />
                  </a>
                );
              }
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    if (item.label === "CALCULATOR") {
                      e.preventDefault();
                      onCalculatorClick();
                    } else {
                      handleNavClick(e, item.href);
                    }
                  }}
                  className={`font-sans text-xs font-semibold tracking-wider transition-colors duration-200 relative py-1 px-1.5 group flex items-center cursor-pointer whitespace-nowrap shrink-0 ${
                    isScrolled
                      ? "text-[#667085] hover:text-[#0066FF]"
                      : "text-white/85 hover:text-white"
                  }`}
                >
                  <span>{item.label}</span>
                  <span className={`absolute bottom-0 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full bg-[#0066FF]`} />
                </a>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-2 lg:gap-3 shrink-0">
            <button
              onClick={onCalculatorClick}
              className={`px-3.5 lg:px-4.5 xl:px-5 py-2 lg:py-2.5 rounded-full font-sans text-xs font-bold tracking-wider transition-all duration-300 border flex items-center gap-1.5 lg:gap-2 cursor-pointer whitespace-nowrap ${
                isScrolled
                  ? "border-[#0066FF] text-[#0066FF] hover:bg-[#0066FF]/5 bg-white"
                  : "border-[#0066FF]/40 text-[#0066FF] hover:border-[#0066FF] bg-[#0066FF]/10 hover:bg-[#0066FF]/20 shadow-[0_0_15px_rgba(0,102,255,0.15)] hover:scale-[1.02]"
              }`}
            >
              <Calculator className="w-3.5 h-3.5" />
              <span>CALCULATOR</span>
            </button>
            <button
              type="button"
              onClick={() => onBookCallClick()}
              className="px-3.5 lg:px-4.5 xl:px-5 py-2 lg:py-2.5 rounded-full font-sans text-xs font-bold tracking-wider transition-all duration-300 border flex items-center gap-1.5 lg:gap-2 cursor-pointer whitespace-nowrap bg-[#0066FF] hover:bg-[#0052cc] text-white border-[#0066FF] shadow-[0_0_15px_rgba(0,102,255,0.35)] hover:scale-[1.02]"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>BOOK A CALL</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled
                ? "text-[#101828] hover:text-[#0066FF] hover:bg-slate-100"
                : "text-white hover:text-[#0066FF] hover:bg-white/5"
            }`}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className={`fixed inset-0 top-[56px] sm:top-[64px] z-40 backdrop-blur-3xl md:hidden flex flex-col px-5 sm:px-6 py-6 justify-between h-[calc(100vh-56px)] sm:h-[calc(100vh-64px)] overflow-y-auto border-b ${
              isScrolled
                ? "bg-white/98 border-[#DCE2EB]"
                : "bg-[#080B12]/98 border-white/10"
            }`}
          >
            <div className="flex flex-col gap-6">
              {navItems.map((item, index) => {
                if (item.label === "APPLICATION") {
                  return (
                    <div key={item.label} className="flex flex-col">
                      <button
                        onClick={() => setMobileApplicationsOpen(!mobileApplicationsOpen)}
                        className={`font-display text-xl font-bold tracking-wide py-2 flex items-center justify-between w-full text-left ${
                          isScrolled
                            ? "text-[#101828] hover:text-[#0066FF]"
                            : "text-white hover:text-[#0066FF]"
                        }`}
                      >
                        <span>{item.label}</span>
                        <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${
                          isScrolled
                            ? `text-[#667085] ${mobileApplicationsOpen ? "rotate-180 text-[#0066FF]" : ""}`
                            : `text-slate-400 ${mobileApplicationsOpen ? "rotate-180 text-[#0066FF]" : ""}`
                        }`} />
                      </button>
                      <AnimatePresence>
                        {mobileApplicationsOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className={`overflow-hidden pl-4 flex flex-col gap-3 mt-1 border-l ${
                              isScrolled ? "border-[#DCE2EB]" : "border-white/10"
                            }`}
                          >
                            {dropdownOptions.map((opt) => (
                              <a
                                key={opt.label}
                                href={opt.href}
                                onClick={(e) => handleNavClick(e, opt.href, opt.industryId)}
                                className={`font-sans text-sm font-semibold py-1 ${
                                  isScrolled
                                    ? "text-[#667085] hover:text-[#0066FF]"
                                    : "text-slate-300 hover:text-white"
                                }`}
                              >
                                {opt.label}
                              </a>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }
                if (item.label === "CLEARANCE") {
                  return (
                    <motion.a
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      key={item.label}
                      href="#clearance"
                      onClick={(e) => {
                        e.preventDefault();
                        setMobileMenuOpen(false);
                        if (onClearanceClick) onClearanceClick();
                      }}
                      className={`font-display text-xl font-bold tracking-wide py-2 flex items-center gap-2.5 ${
                        isClearanceActive
                          ? "text-rose-600"
                          : isScrolled
                          ? "text-[#101828] hover:text-rose-600"
                          : "text-white hover:text-rose-400"
                      }`}
                    >
                      <span>{item.label}</span>
                      <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-rose-500/20 text-rose-600 border border-rose-500/40">
                        $39K Liquidation
                      </span>
                    </motion.a>
                  );
                }
                if (item.label === "US vs. THEM" || item.label === "US vs THEM" || item.label === "CAPITAL ANALYSIS") {
                  return (
                    <motion.a
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      key={item.label}
                      href="#capital-analysis"
                      onClick={(e) => {
                        e.preventDefault();
                        setMobileMenuOpen(false);
                        if (onCapitalAnalysisClick) onCapitalAnalysisClick();
                      }}
                      className={`font-display text-xl font-bold tracking-wide py-2 flex items-center gap-2.5 ${
                        isCapitalAnalysisActive
                          ? "text-[#0066FF]"
                          : isScrolled
                          ? "text-[#101828] hover:text-[#0066FF]"
                          : "text-white hover:text-[#0066FF]"
                      }`}
                    >
                      <span>{item.label}</span>
                      <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#0066FF]/20 text-[#0066FF] border border-[#0066FF]/40">
                        Risk vs Advantage
                      </span>
                    </motion.a>
                  );
                }
                return (
                  <motion.a
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    key={item.label}
                    href={item.href}
                    onClick={(e) => {
                      if (item.label === "CALCULATOR") {
                        e.preventDefault();
                        setMobileMenuOpen(false);
                        onCalculatorClick();
                      } else {
                        handleNavClick(e, item.href);
                      }
                    }}
                    className={`font-display text-xl font-bold tracking-wide py-2 ${
                      isScrolled
                        ? "text-[#101828] hover:text-[#0066FF]"
                        : "text-white hover:text-white"
                    }`}
                  >
                    {item.label}
                  </motion.a>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className={`flex flex-col gap-3 border-t pt-6 ${
                isScrolled ? "border-[#DCE2EB]" : "border-white/10"
              }`}
            >
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onCalculatorClick();
                }}
                className={`w-full py-4 rounded-xl font-sans text-sm font-bold tracking-wider shadow-md cursor-pointer text-center block ${
                  isScrolled
                    ? "border border-[#0066FF] text-[#0066FF] bg-[#0066FF]/5 hover:bg-[#0066FF]/10"
                    : "border border-[#0066FF]/40 text-[#0066FF] bg-[#0066FF]/10 hover:bg-[#0066FF]/20"
                }`}
              >
                CALCULATOR
              </button>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onBookCallClick();
                }}
                className="w-full py-4 rounded-xl font-sans text-sm font-bold tracking-wider shadow-md cursor-pointer text-center flex items-center justify-center gap-2 bg-[#0066FF] hover:bg-[#0052cc] text-white shadow-[0_0_15px_rgba(0,102,255,0.35)]"
              >
                <MessageSquare className="w-4 h-4" />
                <span>BOOK A CALL</span>
              </button>
              <div className={`flex justify-between text-xs font-mono mt-4 ${
                isScrolled ? "text-[#667085]" : "text-slate-400"
              }`}>
                <span>Support@hydrologysystems.com</span>
                <span>949-478-2029</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

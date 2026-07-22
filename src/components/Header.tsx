/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Droplet, Phone, MessageSquare, ChevronDown, Calculator } from "lucide-react";
import LogoIcon from "./LogoIcon";
import GoogleCalendarOverlay from "./GoogleCalendarOverlay";

interface HeaderProps {
  onBookCallClick: () => void;
  onCalculatorClick: () => void;
}

export default function Header({ onBookCallClick, onCalculatorClick }: HeaderProps) {
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
    { label: "ABOUT US", href: "#about" },
  ];

  const dropdownOptions = [
    { label: "Lithium Extraction", href: "#applications" },
    { label: "Onshore/Offshore Drilling", href: "#applications" },
    { label: "Hydroponics - Cannabis", href: "#applications" },
    { label: "Waste Water Treatment", href: "#applications" },
    { label: "Food & Beverage", href: "#applications" },
    { label: "General Manufacturing", href: "#applications" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setIsDropdownOpen(false);
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
    }
  };

  return (
    <>
      <header
        id="header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md border-slate-200/80 shadow-sm shadow-slate-150/40 py-2"
            : "bg-[#050d18]/15 backdrop-blur-sm border-white/5 py-3"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center gap-3 group"
          >
            <LogoIcon
              variant={isScrolled ? "light" : "dark"}
              className={`h-10 md:h-12 object-contain group-hover:scale-105 transition-transform duration-300 shrink-0 ${!isScrolled ? "drop-shadow-[0_0_12px_rgba(79,209,197,0.4)]" : ""}`}
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              if (item.label === "APPLICATION") {
                return (
                  <div
                    key={item.label}
                    className="relative py-2"
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                  >
                    <button
                      onClick={(e) => handleNavClick(e as any, item.href)}
                      className={`font-sans text-xs font-semibold tracking-wider transition-colors duration-200 flex items-center gap-1 cursor-pointer ${
                        isScrolled
                          ? "text-slate-600 hover:text-primary-600"
                          : "text-[#f5f8f9]/85 hover:text-[#4fd1c5]"
                      }`}
                    >
                      {item.label}
                      <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${
                        isScrolled
                          ? isDropdownOpen ? "rotate-180 text-primary-600" : "text-slate-500"
                          : isDropdownOpen ? "rotate-180 text-[#4fd1c5]" : "text-[#b9c7cf]"
                      }`} />
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
                              ? "border-slate-200 bg-white shadow-slate-200/50"
                              : "border-slate-800 bg-[#0d1b2a]/95 backdrop-blur-md shadow-black/40"
                          }`}
                        >
                          {dropdownOptions.map((opt) => (
                            <a
                              key={opt.label}
                              href={opt.href}
                              onClick={(e) => handleNavClick(e, opt.href)}
                              className={`px-3 py-2 text-[11px] font-semibold font-sans tracking-wider rounded-lg transition-colors duration-150 text-left ${
                                isScrolled
                                  ? "text-slate-600 hover:text-primary-600 hover:bg-slate-50"
                                  : "text-[#b9c7cf] hover:text-[#4fd1c5] hover:bg-white/5"
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
                  className={`font-sans text-xs font-semibold tracking-wider transition-colors duration-200 relative py-1 group ${
                    isScrolled
                      ? "text-slate-600 hover:text-primary-600"
                      : "text-[#f5f8f9]/85 hover:text-[#4fd1c5]"
                  }`}
                >
                  {item.label}
                  <span className={`absolute bottom-0 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${
                    isScrolled ? "bg-primary-500" : "bg-[#4fd1c5]"
                  }`} />
                </a>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onCalculatorClick}
              className={`px-5 py-2.5 rounded-full font-sans text-xs font-bold tracking-wider transition-all duration-300 border flex items-center gap-2 cursor-pointer ${
                isScrolled
                  ? "border-teal-600 text-teal-600 hover:bg-teal-50 bg-white"
                  : "border-teal-500/30 text-teal-400 hover:border-teal-400/60 bg-teal-500/10 hover:bg-teal-500/20 shadow-[0_0_15px_rgba(20,184,166,0.15)] hover:scale-[1.02]"
              }`}
            >
              <Calculator className="w-3.5 h-3.5" />
              CALCULATOR
            </button>
            <div
              onClick={onBookCallClick}
              className={`relative overflow-hidden px-5 py-2.5 rounded-full font-sans text-xs font-bold tracking-wider transition-all duration-300 border flex items-center gap-2 cursor-pointer ${
                isScrolled
                  ? "bg-primary-600 hover:bg-primary-700 text-white border-primary-700 shadow-md"
                  : "bg-[#ea7704] hover:bg-[#ff8c1a] text-white border-[#f08518] shadow-[0_0_15px_rgba(234,119,4,0.3)] hover:scale-[1.02]"
              }`}
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>BOOK A CALL</span>
              <GoogleCalendarOverlay id="google-calendar-header-desktop" />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled
                ? "text-slate-600 hover:text-slate-950 hover:bg-slate-100"
                : "text-white hover:text-[#4fd1c5] hover:bg-white/5"
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
            className={`fixed inset-0 top-[72px] z-40 backdrop-blur-3xl md:hidden flex flex-col px-6 py-8 justify-between h-[calc(100vh-72px)] border-b ${
              isScrolled
                ? "bg-white/98 border-slate-200"
                : "bg-[#0d1b2a]/95 border-slate-800"
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
                            ? "text-slate-900 hover:text-primary-600"
                            : "text-white hover:text-[#4fd1c5]"
                        }`}
                      >
                        <span>{item.label}</span>
                        <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${
                          isScrolled
                            ? `text-slate-500 ${mobileApplicationsOpen ? "rotate-180 text-primary-600" : ""}`
                            : `text-[#b9c7cf] ${mobileApplicationsOpen ? "rotate-180 text-[#4fd1c5]" : ""}`
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
                              isScrolled ? "border-slate-200" : "border-slate-800"
                            }`}
                          >
                            {dropdownOptions.map((opt) => (
                              <a
                                key={opt.label}
                                href={opt.href}
                                onClick={(e) => handleNavClick(e, opt.href)}
                                className={`font-sans text-sm font-semibold py-1 ${
                                  isScrolled
                                    ? "text-slate-600 hover:text-primary-600"
                                    : "text-[#b9c7cf] hover:text-[#4fd1c5]"
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
                        ? "text-slate-900 hover:text-primary-600"
                        : "text-white hover:text-[#4fd1c5]"
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
                isScrolled ? "border-slate-100" : "border-slate-800"
              }`}
            >
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onCalculatorClick();
                }}
                className={`w-full py-4 rounded-xl font-sans text-sm font-bold tracking-wider shadow-md cursor-pointer text-center block ${
                  isScrolled
                    ? "border border-teal-500 text-teal-600 bg-teal-50 hover:bg-teal-100"
                    : "border border-teal-500/30 text-teal-400 bg-teal-500/10 hover:bg-teal-500/20"
                }`}
              >
                CALCULATOR
              </button>
              <div
                onClick={() => {
                  setMobileMenuOpen(false);
                  onBookCallClick();
                }}
                className={`relative overflow-hidden w-full py-4 rounded-xl font-sans text-sm font-bold tracking-wider shadow-md cursor-pointer text-center block ${
                  isScrolled
                    ? "bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white shadow-primary-500/15"
                    : "bg-[#ea7704] hover:bg-[#ff8c1a] text-white shadow-[0_0_15px_rgba(234,119,4,0.25)]"
                }`}
              >
                <span>BOOK A CALL</span>
                <GoogleCalendarOverlay id="google-calendar-header-mobile" />
              </div>
              <div className={`flex justify-between text-xs font-mono mt-4 ${
                isScrolled ? "text-slate-500" : "text-[#b9c7cf]"
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

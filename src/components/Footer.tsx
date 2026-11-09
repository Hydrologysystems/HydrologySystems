/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Droplet, Mail, Phone, ShieldCheck, MapPin } from "lucide-react";
import LogoIcon from "./LogoIcon";

interface FooterProps {
  onSelectIndustry?: (industryId: "drilling" | "food-beverage" | "agriculture" | "general-industrial") => void;
  onClearanceClick?: () => void;
  onCapitalAnalysisClick?: () => void;
  onSpecsClick?: () => void;
  onFaqClick?: () => void;
}

export default function Footer({ 
  onSelectIndustry, 
  onClearanceClick, 
  onCapitalAnalysisClick,
  onSpecsClick,
  onFaqClick
}: FooterProps) {
  return (
    <footer className="bg-[#080B12] text-white border-t border-white/10 pt-16 pb-12 relative overflow-hidden">
      {/* Background Highlight */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-[radial-gradient(circle_at_bottom,rgba(0,102,255,0.06),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 items-start pb-12 border-b border-white/10 text-left">
          
          {/* Col 1: Logo and Brand */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-3">
              <LogoIcon variant="footer" className="h-32 w-32 md:h-40 md:w-40 object-contain shrink-0" />
            </div>
            <p className="font-sans text-xs text-slate-400 max-w-xs mt-2 leading-relaxed">
              Automated on-site pH neutralization skids and alkaline generation systems for industrial wastewater, cooling towers, and commercial facilities.
            </p>
          </div>

          {/* Col 2: Industrial Applications & Tech */}
          <div className="flex flex-col items-start gap-2.5">
            <h4 className="font-mono text-[9px] text-white font-bold uppercase tracking-widest mb-2">
              APPLICATIONS &amp; SPECIFICATIONS
            </h4>
            <a 
              href="#agriculture-wastewater" 
              onClick={(e) => {
                if (onSelectIndustry) {
                  e.preventDefault();
                  onSelectIndustry("agriculture");
                }
              }}
              className="font-sans text-xs text-slate-300 hover:text-[#0066FF] transition-colors"
            >
              Agriculture &amp; Cultivation Runoff
            </a>
            <a 
              href="#cooling-towers-industrial" 
              onClick={(e) => {
                if (onSelectIndustry) {
                  e.preventDefault();
                  onSelectIndustry("general-industrial");
                }
              }}
              className="font-sans text-xs text-slate-300 hover:text-[#0066FF] transition-colors"
            >
              Cooling Tower Blowdown &amp; Industrial Wastewater
            </a>
            <a 
              href="#food-beverage-compliance" 
              onClick={(e) => {
                if (onSelectIndustry) {
                  e.preventDefault();
                  onSelectIndustry("food-beverage");
                }
              }}
              className="font-sans text-xs text-slate-300 hover:text-[#0066FF] transition-colors"
            >
              Food &amp; Beverage pH Compliance
            </a>
            <a 
              href="#drilling-lithium-extraction" 
              onClick={(e) => {
                if (onSelectIndustry) {
                  e.preventDefault();
                  onSelectIndustry("drilling");
                }
              }}
              className="font-sans text-xs text-slate-300 hover:text-[#0066FF] transition-colors"
            >
              Drilling &amp; Lithium Mineral Extraction
            </a>
            <a 
              href="#technical-specifications" 
              onClick={(e) => {
                if (onSpecsClick) {
                  e.preventDefault();
                  onSpecsClick();
                }
              }}
              className="font-sans text-xs text-slate-300 hover:text-[#0066FF] transition-colors"
            >
              On-Site Alkaline Skid Engineering Specs
            </a>
            <a 
              href="#technical-faq" 
              onClick={(e) => {
                if (onFaqClick) {
                  e.preventDefault();
                  onFaqClick();
                }
              }}
              className="font-sans text-xs text-slate-300 hover:text-[#0066FF] transition-colors"
            >
              Technical FAQ &amp; Caustic Replacement
            </a>
            <a 
              href="#clearance" 
              onClick={(e) => {
                if (onClearanceClick) {
                  e.preventDefault();
                  onClearanceClick();
                }
              }}
              className="font-sans text-xs text-[#0066FF] font-semibold hover:text-[#0052cc] transition-colors flex items-center gap-1 mt-1"
            >
              <span>⚡ Model HAWS-120 Skid (Clearance $39K)</span>
            </a>
            <a 
              href="#capital-analysis" 
              onClick={(e) => {
                if (onCapitalAnalysisClick) {
                  e.preventDefault();
                  onCapitalAnalysisClick();
                }
              }}
              className="font-sans text-xs text-[#0066FF] font-semibold hover:text-[#0052cc] transition-colors flex items-center gap-1 mt-1"
            >
              <span>📊 Stop Flushing Capital: Risk vs Advantage</span>
            </a>
          </div>

          {/* Col 3: Secure Contacts */}
          <div className="flex flex-col items-start gap-4">
            <h4 className="font-mono text-[9px] text-white font-bold uppercase tracking-widest mb-2">
              SECURE CONTACT & LOCATIONS
            </h4>
            
            <div className="flex items-center gap-3 font-sans text-xs text-slate-300">
              <Mail className="w-4 h-4 text-[#0066FF] flex-shrink-0" />
              <a href="mailto:Support@hydrologysystems.com" className="hover:text-[#0066FF] transition-colors">
                Support@hydrologysystems.com
              </a>
            </div>

            <div className="flex items-center gap-3 font-sans text-xs text-slate-300">
              <Phone className="w-4 h-4 text-[#0066FF] flex-shrink-0" />
              <a href="tel:949-478-2029" className="hover:text-[#0066FF] transition-colors">
                949-478-2029
              </a>
            </div>

            <div className="flex items-center gap-3 font-sans text-xs text-slate-400 font-light">
              <MapPin className="w-4 h-4 text-[#0066FF] flex-shrink-0" />
              <span>Irvine, California</span>
            </div>
          </div>

        </div>

        {/* Footer Bottom copyright and security validation */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-8 text-[11px] text-slate-400 font-mono">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#0066FF]" />
            <span>© Copyright 2026. Hydrology Systems. All rights reserved.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

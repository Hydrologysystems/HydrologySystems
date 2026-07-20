/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Droplet, Mail, Phone, ShieldCheck, MapPin } from "lucide-react";
import LogoIcon from "./LogoIcon";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-12 relative overflow-hidden">
      {/* Background Highlight */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-[radial-gradient(circle_at_bottom,rgba(0,128,128,0.01),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start pb-12 border-b border-slate-200 text-left">
          
          {/* Col 1: Logo and Brand */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-3">
              <LogoIcon variant="footer" className="h-32 w-32 md:h-40 md:w-40 object-contain shrink-0" />
            </div>
          </div>

          {/* Col 3: Secure Contacts */}
          <div className="flex flex-col items-start gap-4">
            <h4 className="font-mono text-[9px] text-slate-800 font-bold uppercase tracking-widest mb-2">
              SECURE CONTACT & LOCATIONS
            </h4>
            
            <div className="flex items-center gap-3 font-sans text-xs text-slate-600">
              <Mail className="w-4 h-4 text-primary-600 flex-shrink-0" />
              <a href="mailto:Support@hydrologysystems.com" className="hover:text-primary-600 transition-colors">
                Support@hydrologysystems.com
              </a>
            </div>

            <div className="flex items-center gap-3 font-sans text-xs text-slate-600">
              <Phone className="w-4 h-4 text-primary-600 flex-shrink-0" />
              <a href="tel:949-478-2029" className="hover:text-primary-600 transition-colors">
                949-478-2029
              </a>
            </div>

            <div className="flex items-center gap-3 font-sans text-xs text-slate-500 font-light">
              <MapPin className="w-4 h-4 text-slate-400 flex-shrink-0" />
              <span>Irvine, California</span>
            </div>
          </div>

        </div>

        {/* Footer Bottom copyright and security validation */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-8 text-[11px] text-slate-500 font-mono">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-primary-600" />
            <span>© Copyright 2026. Hydrology Systems. All rights reserved.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

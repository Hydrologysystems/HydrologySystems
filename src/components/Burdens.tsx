import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const leftCardBg = "https://res.cloudinary.com/ew2ztpgz/image/upload/f_auto,q_auto,w_1000/v1784733617/main_image_banner_good_and_bad_copy_1_hpsbbh.png";
const rightCardBg = "https://res.cloudinary.com/ew2ztpgz/image/upload/f_auto,q_auto/section_2.2_ugstne";

interface BurdensProps {
  onLearnMore?: (side?: "risk" | "advantage" | "comparison") => void;
}

export default function Burdens({ onLearnMore }: BurdensProps) {
  return (
    <section 
      id="burdens" 
      className="bg-white py-20 px-4 sm:px-6 lg:px-8 relative z-10 border-y border-[#DCE2EB]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Block */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[32px] sm:text-[40px] font-black text-[#101828] tracking-tight uppercase font-display"
            id="burdens-title"
          >
            STOP FLUSHING CAPITAL
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-2 text-[20px] sm:text-[25px] font-bold text-[#667085]"
            id="burdens-subtitle"
          >
            The True Burden of Bulk Caustic
          </motion.p>
        </div>

        {/* Core Layout Grid */}
        <div className="flex flex-col xl:flex-row items-stretch justify-center gap-6 xl:gap-8 relative" id="burdens-container">
          
          {/* ================= LEFT CARD: THE RISK YOU ACCEPT TODAY ================= */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            onClick={() => {
              if (onLearnMore) {
                onLearnMore("risk");
              } else {
                window.location.hash = "capital-analysis-risk";
              }
            }}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                if (onLearnMore) onLearnMore("risk");
                else window.location.hash = "capital-analysis-risk";
              }
            }}
            className="flex-1 relative flex flex-col rounded-[32px] bg-[#080B12] border border-white/10 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.12)] min-h-[580px] pt-20 pb-8 px-6 sm:px-8 cursor-pointer group hover:border-rose-500/50 hover:shadow-[0_25px_60px_rgba(225,29,72,0.15)] transition-all duration-300 select-none"
            id="burden-card-left"
            title="Click to view US vs. THEM Risk Analysis"
          >
            {/* Background image & gradient overlays */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <img 
                src={leftCardBg} 
                alt="Environmental Risk Background" 
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover opacity-[0.8] filter brightness-[0.75] contrast-[1.1] group-hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#080B12]/15 via-[#080B12]/70 to-[#080B12]/95" />
            </div>

            {/* Pill Header */}
            <div className="absolute top-6 left-0 right-0 flex justify-center z-20">
              <span className="bg-[#e11d48] text-white font-extrabold text-xs sm:text-sm px-6 py-2 rounded-full uppercase tracking-wider shadow-md border border-rose-500/20 group-hover:bg-rose-700 transition-colors flex items-center gap-1.5">
                <span>THE RISK YOU ACCEPT TODAY</span>
              </span>
            </div>

            {/* Card Inner Content */}
            <div className="flex flex-col md:flex-row items-center md:items-stretch h-full flex-1 relative z-10 gap-8 md:gap-4">
              
              {/* Graphic Side (Left columns on desktop) */}
              <div className="w-full md:w-[45%] flex flex-col justify-center items-center relative py-4">
              </div>

              {/* Text Side (Right columns on desktop) */}
              <div className="w-full md:w-[55%] flex flex-col justify-center gap-7 text-right pr-4 sm:pr-6 md:pr-8 lg:pr-10 xl:pr-12">
                
                {/* Item 1 */}
                <div className="flex flex-col items-end">
                  <h3 className="font-sans text-sm sm:text-base font-black text-white uppercase tracking-wider mb-1">
                    ANNUAL OPEX
                  </h3>
                  <p className="font-sans text-xs sm:text-[13px] text-slate-300 max-w-[340px] leading-relaxed">
                    Excessive Chemical OPEX: Multi-million dollar expense annually on third-party caustic chemical procurement, logistics, and storage.
                  </p>
                </div>

                {/* Item 2 */}
                <div className="flex flex-col items-end">
                  <h3 className="font-sans text-sm sm:text-base font-black text-white uppercase tracking-wider mb-1">
                    CHEMICAL WASTE
                  </h3>
                  <p className="font-sans text-xs sm:text-[13px] text-slate-300 max-w-[340px] leading-relaxed">
                    Up to 15% variance annually due to mixing, spills, and concentration control issues.
                  </p>
                </div>

                {/* Item 3 */}
                <div className="flex flex-col items-end">
                  <h3 className="font-sans text-sm sm:text-base font-black text-white uppercase tracking-wider mb-1">
                    SAFETY AND LOGISTICS
                  </h3>
                  <p className="font-sans text-xs sm:text-[13px] text-slate-300 max-w-[340px] leading-relaxed">
                    High risk of chemical burns, specialized storage, and continuous supply chain vulnerability.
                  </p>
                </div>

                {/* Item 4 */}
                <div className="flex flex-col items-end">
                  <h3 className="font-sans text-sm sm:text-base font-black text-white uppercase tracking-wider mb-1">
                    BUDGET VOLATILITY
                  </h3>
                  <p className="font-sans text-xs sm:text-[13px] text-slate-300 max-w-[340px] leading-relaxed">
                    Reliance on vendor supply chains leads to price spikes and unpredictable long lead times.
                  </p>
                </div>

                {/* Direct Link Cue to US vs THEM */}
                <div className="flex items-center justify-end gap-1.5 text-rose-400 group-hover:text-rose-300 text-xs font-semibold pt-1">
                  <span>View in US vs. THEM</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

            </div>
          </motion.div>

          {/* ================= CENTRAL VS BADGE ================= */}
          <div className="flex items-center justify-center py-4 xl:py-0 z-10" id="burdens-vs-container">
            <div className="bg-white border-4 border-[#080B12] text-[#080B12] font-sans text-3xl sm:text-4xl xl:text-5xl font-black w-14 h-14 sm:w-16 sm:h-16 xl:w-20 xl:h-20 rounded-full flex items-center justify-center shadow-lg select-none">
              VS
            </div>
          </div>

          {/* ================= RIGHT CARD: THE HYDROLOGY SYSTEM ADVANTAGE ================= */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            onClick={() => {
              if (onLearnMore) {
                onLearnMore("advantage");
              } else {
                window.location.hash = "capital-analysis-advantage";
              }
            }}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                if (onLearnMore) onLearnMore("advantage");
                else window.location.hash = "capital-analysis-advantage";
              }
            }}
            className="flex-1 relative flex flex-col rounded-[32px] bg-[#080B12] border border-white/10 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.12)] min-h-[580px] pt-20 pb-8 px-6 sm:px-8 cursor-pointer group hover:border-[#0066FF]/50 hover:shadow-[0_25px_60px_rgba(0,102,255,0.15)] transition-all duration-300 select-none"
            id="burden-card-right"
            title="Click to view US vs. THEM Advantage Analysis"
          >
            {/* Background image & gradient overlays */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <img 
                src={rightCardBg} 
                alt="Hydrology Reactor Plant Background" 
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover opacity-[0.75] filter brightness-[0.75] contrast-[1.1] group-hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#080B12]/90 via-[#080B12]/60 to-[#080B12]/20" />
            </div>

            {/* Pill Header */}
            <div className="absolute top-6 left-0 right-0 flex justify-center z-20">
              <span className="bg-[#0066FF] text-white font-extrabold text-xs sm:text-sm px-6 py-2 rounded-full uppercase tracking-wider shadow-md border border-[#0066FF]/20 group-hover:bg-[#0052cc] transition-colors flex items-center gap-1.5">
                <span>THE HYDROLOGY SYSTEM ADVANTAGE</span>
              </span>
            </div>

            {/* Card Inner Content */}
            <div className="flex flex-col md:flex-row items-center md:items-stretch h-full flex-1 relative z-10 gap-8 md:gap-4">
              
              {/* Text Side (Left columns on desktop) */}
              <div className="w-full md:w-[55%] flex flex-col justify-center gap-7 text-left pl-4 sm:pl-6 md:pl-8 lg:pl-10 xl:pl-12">
                
                {/* Item 1 */}
                <div className="flex flex-col items-start">
                  <h3 className="font-sans text-sm sm:text-base font-black text-white uppercase tracking-wider mb-1">
                    RECOVER UP TO 70% INSTANTLY
                  </h3>
                  <p className="font-sans text-xs sm:text-[13px] text-slate-300 max-w-[340px] leading-relaxed">
                    Immediately recover an average of up to 70% of your current bulk caustic cost by generating caustic on-site using water.
                  </p>
                </div>

                {/* Item 2 */}
                <div className="flex flex-col items-start">
                  <h3 className="font-sans text-sm sm:text-base font-black text-white uppercase tracking-wider mb-1">
                    ZERO WASTE
                  </h3>
                  <p className="font-sans text-xs sm:text-[13px] text-slate-300 max-w-[340px] leading-relaxed">
                    Automated PLC blending ensures precise pH mixing on demand and safely.
                  </p>
                </div>

                {/* Item 3 */}
                <div className="flex flex-col items-start">
                  <h3 className="font-sans text-sm sm:text-base font-black text-white uppercase tracking-wider mb-1">
                    ZERO HANDLING HAZARD
                  </h3>
                  <p className="font-sans text-xs sm:text-[13px] text-slate-300 max-w-[340px] leading-relaxed">
                    Hydrology Alkalinity Solution is generated safely, on-site, and on-demand.
                  </p>
                </div>

                {/* Item 4 */}
                <div className="flex flex-col items-start">
                  <h3 className="font-sans text-sm sm:text-base font-black text-white uppercase tracking-wider mb-1">
                    REDUCING SUPPLY CHAIN VOLATILITY
                  </h3>
                  <p className="font-sans text-xs sm:text-[13px] text-slate-300 max-w-[340px] leading-relaxed">
                    Lock in your cost base with predictable, on-site production.
                  </p>
                </div>

                {/* Direct Link Cue to US vs THEM */}
                <div className="flex items-center justify-start gap-1.5 text-[#0066FF] group-hover:text-[#3385ff] text-xs font-semibold pt-1">
                  <span>View in US vs. THEM</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Engineering Side (Right columns on desktop) */}
              <div className="w-full md:w-[45%] flex flex-col justify-center items-center relative py-4">
                {/* Stunning interactive representation of the PLC / Hydrology Controller Interface */}
              </div>

            </div>
          </motion.div>

        </div>

        {/* Bottom Learn More CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 sm:mt-12 flex justify-center items-center" 
          id="burdens-bottom-cta"
        >
          <button
            onClick={() => onLearnMore && onLearnMore("comparison")}
            id="burden-learn-more-btn"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#0066FF] hover:bg-[#0052cc] text-white font-mono text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-xl hover:shadow-[#0066FF]/30 border border-[#0066FF] cursor-pointer group"
          >
            <span>Learn More: US vs THEM</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

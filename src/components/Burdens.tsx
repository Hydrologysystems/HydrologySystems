import { motion } from "motion/react";

const leftCardBg = "https://res.cloudinary.com/ew2ztpgz/image/upload/v1784142440/main_image_banner_good_and_bad_copy_ppshvj.png";
const rightCardBg = "https://res.cloudinary.com/ew2ztpgz/image/upload/f_auto,q_auto/section_2.2_ugstne";

export default function Burdens() {
  return (
    <section 
      id="burdens" 
      className="bg-white py-20 px-4 sm:px-6 lg:px-8 relative z-10 border-y border-slate-100"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Block */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[32px] sm:text-[40px] font-black text-black tracking-tight uppercase font-display"
            id="burdens-title"
          >
            STOP FLUSHING CAPITAL
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-2 text-[20px] sm:text-[25px] font-bold text-slate-800"
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
            className="flex-1 relative flex flex-col rounded-[32px] bg-slate-950 border border-slate-900 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.12)] min-h-[580px] pt-20 pb-8 px-6 sm:px-8"
            id="burden-card-left"
          >
            {/* Background image & gradient overlays */}
            <div className="absolute inset-0 z-0 pointer-events-none">
              <img 
                src={leftCardBg} 
                alt="Environmental Risk Background" 
                className="w-full h-full object-cover opacity-[0.8] filter brightness-[0.75] contrast-[1.1]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/15 via-slate-950/70 to-slate-950/95" />
            </div>

            {/* Pill Header */}
            <div className="absolute top-6 left-0 right-0 flex justify-center z-20">
              <span className="bg-[#e11d48] text-white font-extrabold text-xs sm:text-sm px-6 py-2 rounded-full uppercase tracking-wider shadow-md border border-rose-500/20">
                THE RISK YOU ACCEPT TODAY
              </span>
            </div>

            {/* Card Inner Content */}
            <div className="flex flex-col md:flex-row items-center md:items-stretch h-full flex-1 relative z-10 gap-8 md:gap-4">
              
              {/* Graphic Side (Left columns on desktop) */}
              <div className="w-full md:w-[45%] flex flex-col justify-center items-center relative py-4">
              </div>

              {/* Text Side (Right columns on desktop) */}
              <div className="w-full md:w-[55%] flex flex-col justify-center gap-7 text-right">
                
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

              </div>

            </div>
          </motion.div>

          {/* ================= CENTRAL VS BADGE ================= */}
          <div className="flex items-center justify-center py-4 xl:py-0 z-10" id="burdens-vs-container">
            <div className="bg-white border-4 border-slate-950 text-slate-950 font-sans text-3xl sm:text-4xl xl:text-5xl font-black w-14 h-14 sm:w-16 sm:h-16 xl:w-20 xl:h-20 rounded-full flex items-center justify-center shadow-lg select-none">
              VS
            </div>
          </div>

          {/* ================= RIGHT CARD: THE HYDROLOGY SYSTEM ADVANTAGE ================= */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex-1 relative flex flex-col rounded-[32px] bg-slate-950 border border-slate-900 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.12)] min-h-[580px] pt-20 pb-8 px-6 sm:px-8"
            id="burden-card-right"
          >
            {/* Background image & gradient overlays */}
            <div className="absolute inset-0 z-0 pointer-events-none">
              <img 
                src={rightCardBg} 
                alt="Hydrology Reactor Plant Background" 
                className="w-full h-full object-cover opacity-[0.75] filter brightness-[0.75] contrast-[1.1]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-slate-950/20" />
            </div>

            {/* Pill Header */}
            <div className="absolute top-6 left-0 right-0 flex justify-center z-20">
              <span className="bg-emerald-600 text-white font-extrabold text-xs sm:text-sm px-6 py-2 rounded-full uppercase tracking-wider shadow-md border border-emerald-500/20">
                THE HYDROLOGY SYSTEM ADVANTAGE
              </span>
            </div>

            {/* Card Inner Content */}
            <div className="flex flex-col md:flex-row items-center md:items-stretch h-full flex-1 relative z-10 gap-8 md:gap-4">
              
              {/* Text Side (Left columns on desktop) */}
              <div className="w-full md:w-[55%] flex flex-col justify-center gap-7 text-left">
                
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

              </div>

              {/* Engineering Side (Right columns on desktop) */}
              <div className="w-full md:w-[45%] flex flex-col justify-center items-center relative py-4">
                {/* Stunning interactive representation of the PLC / Hydrology Controller Interface */}
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

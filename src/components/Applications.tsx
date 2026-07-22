/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Drill, Wine, Sprout, Factory, ArrowUpRight } from "lucide-react";

// @ts-ignore
import drillingBg from "../assets/images/drilling_rigs_split_1783610982614.jpg";
// @ts-ignore
import beverageBg from "../assets/images/beverage_bottling_plant_conveyor_1783611109275.jpg";
// @ts-ignore
import agricultureBg from "../assets/images/greenhouse_agriculture_cultivation_1783611464652.jpg";
// @ts-ignore
import chemicalPlantCleanBg from "../assets/images/chemical_plant_clean_1782937607997.jpg";
// @ts-ignore
import coolingTowerBg from "../assets/images/cooling_tower_industrial_1783982968793.jpg";

export default function Applications() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.12, 1.02]);
  const industries = [
    {
      id: "drilling",
      title: "Drilling",
      subtitle: "Onshore & Offshore Drilling Operations",
      desc: "Remote land rigs and offshore platforms face severe supply chain delays, high freight costs, and safety hazards from transporting liquid bulk caustic soda. Hydrology Systems’ on-site Alkaline Generator Skid technology generates high-purity NaOH (up to 12 pH) directly at the well-site. From critical mud stabilization and H2S sweetening to hardness precipitation and mineral/lithium extraction, our self-contained systems eliminate chemical logistics and deliver instant alkalinity control anywhere in the world.",
      icon: Drill,
      bgImage: drillingBg,
      accent: "from-blue-600/20 to-indigo-600/5"
    },
    {
      id: "food-beverage",
      title: "FOOD & BEVERAGE",
      subtitle: "Food & Beverage Production",
      desc: "From dairy and meat processing to breweries and commercial beverage facilities, maintaining precise, FDA-compliant pH control is critical to product quality and food safety. Hydrology Systems’ modular alkaline water skids generate purified, on-spec alkaline water from pH 7 to 12 directly on-site. Designed for precision sanitation and exact product pH adjustment, our automated systems eliminate the need for dangerous chemical handling while ensuring absolute batch-to-batch consistency.",
      icon: Wine,
      bgImage: beverageBg,
      accent: "from-amber-600/20 to-orange-600/5"
    },
    {
      id: "agriculture",
      title: "AGRICULTURE",
      subtitle: "Precision pH Stabilization for High-Yield Agriculture",
      desc: "From large-scale hydroponic facilities to specialized substrate farming, minor pH fluctuations can lead to nutrient lockout, root burning, and lost yields. Our Catalytic Hydroxide technology eliminates erratic chemical spikes by integrating directly into primary water and nutrient manifolds to deliver continuous, ultra-stable pH adjustment. Designed to meet the stringent demands of commercial greenhouses, hydroponic facilities, hemp/CBD operations, and mushroom farms, our automated systems ensure every drop of water hit your crops at the exact target pH—safely, reliably, and without harsh chemical handling.",
      icon: Sprout,
      bgImage: agricultureBg,
      accent: "from-emerald-600/20 to-teal-600/5"
    },
    {
      id: "general-industrial",
      title: "GENERAL INDUSTRIAL",
      subtitle: "General Industrial, Cooling Towers & Wastewater",
      desc: "From large refinery cooling towers to industrial manufacturing plants, inconsistent pH dosing leads to costly municipal surcharges, severe pipe corrosion, and chemical delivery headaches. Hydrology Systems provides on-demand, automated pH correction that eliminates the need to haul and store liquid caustic soda. By generating ultra-stable alkaline streams on-site, our systems protect municipal discharge permits, maintain optimal cooling tower water balance, and streamline industrial process chemistry—all without localized pH spikes or dangerous chemical handling.",
      icon: Factory,
      bgImage: "https://res.cloudinary.com/ew2ztpgz/image/upload/f_auto,q_auto/cooling_tower_mzwbby",
      accent: "from-cyan-600/20 to-sky-600/5"
    }
  ];

  return (
    <section ref={sectionRef} id="applications" className="relative py-20 sm:py-24 lg:py-28 bg-transparent overflow-hidden border-t border-slate-200">
      {/* Section Background Overlay with Parallax */}
      <div className="absolute inset-0 z-0 opacity-[0.20] pointer-events-none select-none overflow-hidden">
        <motion.div 
          style={{ y, scale }}
          className="absolute inset-0 w-full h-full"
        >
          <img 
            src={chemicalPlantCleanBg} 
            alt="Hydrology Industrial Clean Chemical System Backdrop" 
            width={1920}
            height={1080}
            loading="lazy"
            className="w-full h-[120%] object-cover grayscale brightness-95"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#f8f9fa] via-transparent to-[#f8f9fa]" />
      </div>

      {/* Background visual highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-96 bg-[radial-gradient(circle,rgba(0,128,128,0.01),transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary-600 font-mono text-[10px] tracking-[0.2em] font-bold uppercase mb-3"
          >
            VERSATILE DEPLOYMENT MARKETS
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-4"
          >
            APPLICATIONS BEYOND REFINERIES
          </motion.h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industries.map((ind, idx) => {
            const IconComponent = ind.icon;
            return (
              <motion.div
                key={ind.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group rounded-[2rem] border border-slate-200 bg-white hover:border-teal-500/30 hover:shadow-[0_15px_45px_rgba(13,148,136,0.04)] transition-all duration-500 overflow-hidden flex flex-col h-full shadow-sm cursor-pointer"
              >
                {/* Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={ind.bgImage}
                    alt={ind.title}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                  />
                  {/* Icon badge floating on the image */}
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-white/95 backdrop-blur-[2px] border border-slate-200 flex items-center justify-center text-teal-600 shadow-md group-hover:bg-teal-600 group-hover:text-white group-hover:border-teal-600 transition-all duration-300">
                    <IconComponent className="w-5 h-5" />
                  </div>
                </div>

                {/* Bottom Card Extension panel with descriptions */}
                <div className="p-6 sm:p-8 flex flex-col flex-grow text-left bg-white border-t border-slate-100 justify-between">
                  <div>
                    <span className="font-sans text-[10px] text-teal-600 font-bold uppercase tracking-widest block mb-2">
                      {ind.subtitle}
                    </span>

                    <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 mb-3 flex items-center justify-between group-hover:text-teal-600 transition-colors duration-300">
                      <span>{ind.title}</span>
                      <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 text-teal-600 shrink-0" />
                    </h3>
                  </div>

                  <p className="text-slate-500 text-[13.5px] leading-relaxed font-sans mt-1 whitespace-pre-line">
                    {ind.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion } from "motion/react";
import { Drill, Wine, Sprout, Factory, ArrowUpRight, CheckCircle2, AlertTriangle, Flame, Gauge, Droplets } from "lucide-react";
import { APPLICATION_PAGES } from "../data/applicationPagesData";

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
// @ts-ignore
import refineryClearBg from "../assets/images/refinery_tanks_clear_1793814180788.jpg";
// @ts-ignore
import wastewaterBg from "../assets/images/wastewater_clear_aeration_1793717063034.jpg";

interface ApplicationsProps {
  onSelectIndustry?: (industryId: any) => void;
}

export default function Applications({ onSelectIndustry }: ApplicationsProps) {
  const [cardTabs, setCardTabs] = useState<Record<string, "overview" | "pros-cons">>({
    refineries: "overview",
    drilling: "overview",
    "food-beverage": "overview",
    agriculture: "overview",
    "cooling-towers": "overview",
    wastewater: "overview"
  });

  const industries = [
    {
      id: "refineries",
      title: "OIL REFINERIES",
      subtitle: "Crude Desalting & Hydrocarbon Neutralization",
      desc: "Petroleum refineries spend millions annually on delivered bulk sodium hydroxide for crude desalting, atmospheric overhead acid control, and sour gas sweetening. Bulk caustic storage requires heated tanks, diking maintenance, and severe offloading hazards. Hydrology Systems’ on-site catalytic hydroxide generation synthesizes high-purity alkaline streams on-demand, eliminating bulk chemical tanker logistics while delivering continuous micro-dosed pH control that prevents overhead condensing unit chloride corrosion.",
      icon: Flame,
      bgImage: refineryClearBg,
      accent: "from-blue-700/20 to-slate-800/10"
    },
    {
      id: "drilling",
      title: "DRILLING & LITHIUM EXTRACTION",
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
      id: "cooling-towers",
      title: "COOLING TOWERS",
      subtitle: "Recirculating Water & Condenser Scale Prevention",
      desc: "Heavy industrial cooling circuits and refinery condenser loops suffer catastrophic acid corrosion or severe calcium scaling when conventional chemical pumps slug-dose bulk caustic. Hydrology Systems provides automated, closed-loop on-site pH trimming that maintains exact chemical equilibrium in recirculating cooling water without chemical overshoots. By generating ultra-stable alkaline streams on demand, our skids protect condenser tube metallurgies, maximize cycles of concentration, and eliminate hazardous bulk chemical deliveries.",
      icon: Gauge,
      bgImage: coolingTowerBg,
      accent: "from-cyan-600/20 to-sky-600/5"
    },
    {
      id: "wastewater",
      title: "WASTEWATER TREATMENT",
      subtitle: "Industrial Effluent & Environmental Discharge Compliance",
      desc: "Industrial manufacturing plants, chemical processors, and food processors face crushing municipal surcharge fines and permit violations when acidic batch dumps overpower traditional neutralization tanks. Hydrology Systems’ high-throughput modular alkaline generation skids instantly neutralize high-volume acid surges in wastewater retention basins. Generating hydroxide on-site on demand eliminates volatile delivered caustic bills, prevents thermal hot-spot reactions, and guarantees automated 24/7 compliance with EPA NPDES and municipal sewer limits.",
      icon: Droplets,
      bgImage: wastewaterBg,
      accent: "from-teal-600/20 to-emerald-600/5"
    }
  ];

  const handleCardClick = (id: string) => {
    if (!onSelectIndustry) return;
    if (id === "drilling") {
      onSelectIndustry("drilling");
    } else if (id === "food-beverage") {
      onSelectIndustry("food-beverage");
    } else if (id === "agriculture") {
      onSelectIndustry("agriculture");
    } else if (id === "cooling-towers") {
      onSelectIndustry("cooling-towers");
    } else if (id === "wastewater") {
      onSelectIndustry("wastewater");
    } else if (id === "refineries") {
      onSelectIndustry("refineries");
    }
  };

  return (
    <section id="applications" className="relative py-20 sm:py-24 lg:py-28 bg-[#F4F6FA] overflow-hidden border-t border-[#DCE2EB]">
      {/* Section Background Overlay with Parallax */}
      <div className="absolute inset-0 z-0 opacity-[0.20] pointer-events-none select-none overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <img 
            src={chemicalPlantCleanBg} 
            alt="Hydrology Industrial Clean Chemical System Backdrop" 
            width={1920}
            height={1080}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover grayscale brightness-95"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#F4F6FA] via-transparent to-[#F4F6FA]" />
      </div>

      {/* Background visual highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-96 bg-[radial-gradient(circle,rgba(0,102,255,0.02),transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#0066FF] font-mono text-[10px] tracking-[0.2em] font-bold uppercase mb-3"
          >
            VERSATILE DEPLOYMENT MARKETS
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#101828] mb-4"
          >
            APPLICATIONS BEYOND REFINERIES
          </motion.h2>
        </div>

        {/* Bento Grid - 6 Perfectly Symmetrical Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {industries.map((ind, idx) => {
            const IconComponent = ind.icon;
            const pageData = APPLICATION_PAGES[ind.id];
            const currentTab = cardTabs[ind.id] || "overview";

            return (
              <motion.div
                key={ind.id}
                id={
                  ind.id === "refineries"
                    ? "oil-refineries-hydrocarbon"
                    : ind.id === "drilling"
                    ? "drilling-lithium-extraction"
                    : ind.id === "food-beverage"
                    ? "food-beverage-compliance"
                    : ind.id === "agriculture"
                    ? "agriculture-wastewater"
                    : ind.id === "cooling-towers"
                    ? "cooling-towers-industrial"
                    : "wastewater-treatment-effluent"
                }
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                onClick={() => handleCardClick(ind.id)}
                className="group rounded-[2rem] border border-[#DCE2EB] bg-white hover:border-[#0066FF]/40 hover:shadow-[0_20px_50px_rgba(0,102,255,0.08)] transition-all duration-500 overflow-hidden flex flex-col h-full shadow-sm cursor-pointer scroll-mt-24"
              >
                {/* Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={ind.bgImage}
                    alt={ind.title}
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                  />
                  {/* Icon badge floating on the image */}
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-white/95 backdrop-blur-[2px] border border-[#DCE2EB] flex items-center justify-center text-[#0066FF] shadow-md group-hover:bg-[#0066FF] group-hover:text-white group-hover:border-[#0066FF] transition-all duration-300">
                    <IconComponent className="w-5 h-5" />
                  </div>

                  {/* Click indicator badge floating top right */}
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#080B12]/80 backdrop-blur-md text-[11px] font-mono font-bold text-white uppercase tracking-wider flex items-center gap-1.5 opacity-90 group-hover:bg-[#0066FF] transition-all">
                    <span>EXPLORE PAGE</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Bottom Card Extension panel with descriptions & Pros/Cons tab switcher */}
                <div className="p-6 sm:p-8 flex flex-col flex-grow text-left bg-white border-t border-[#DCE2EB] justify-between">
                  <div>
                    <span className="font-sans text-[10px] text-[#0066FF] font-bold uppercase tracking-widest block mb-2">
                      {ind.subtitle}
                    </span>

                    <h3 className="font-display text-xl sm:text-2xl font-bold text-[#101828] mb-3 flex items-center justify-between group-hover:text-[#0066FF] transition-colors duration-300">
                      <span>{ind.title}</span>
                      <ArrowUpRight className="w-5 h-5 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 text-[#0066FF] shrink-0" />
                    </h3>

                    {/* Interactive Tab Switcher between Overview and Pros & Cons */}
                    <div 
                      className="flex items-center gap-1 p-1 bg-[#F4F6FA] rounded-lg w-fit mb-4 border border-[#DCE2EB]"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <button
                        type="button"
                        onClick={() => setCardTabs(prev => ({ ...prev, [ind.id]: "overview" }))}
                        className={`px-3 py-1 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                          currentTab === "overview"
                            ? "bg-[#0066FF] text-white shadow-xs font-bold"
                            : "text-[#667085] hover:text-[#101828]"
                        }`}
                      >
                        Overview
                      </button>
                      <button
                        type="button"
                        onClick={() => setCardTabs(prev => ({ ...prev, [ind.id]: "pros-cons" }))}
                        className={`px-3 py-1 rounded-md text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                          currentTab === "pros-cons"
                            ? "bg-[#0066FF] text-white shadow-xs font-bold"
                            : "text-[#667085] hover:text-[#0066FF]"
                        }`}
                      >
                        <span>Pros &amp; Cons</span>
                        <span className={`px-1.5 py-0.5 rounded text-[9.5px] font-mono uppercase tracking-wider font-bold ${
                          currentTab === "pros-cons"
                            ? "bg-[#0047b3] text-white"
                            : "bg-[#0066FF]/10 text-[#0066FF]"
                        }`}>
                          Product Fit
                        </span>
                      </button>
                    </div>

                    {/* Tab Content Display */}
                    {currentTab === "overview" ? (
                      <div>
                        <p className="text-[#667085] text-[13.5px] leading-relaxed font-sans mt-1 whitespace-pre-line">
                          {ind.desc}
                        </p>
                        
                        {/* Quick Pros/Cons Highlight Strip */}
                        {pageData?.prosAndCons && (
                          <div 
                            onClick={(e) => {
                              e.stopPropagation();
                              setCardTabs(prev => ({ ...prev, [ind.id]: "pros-cons" }));
                            }}
                            className="mt-4 p-2.5 rounded-xl bg-[#F4F6FA] border border-[#DCE2EB] hover:border-[#0066FF]/40 transition-colors flex items-center justify-between gap-2 text-[11.5px] cursor-pointer group/strip"
                          >
                            <div className="flex items-center gap-2 truncate">
                              <span className="inline-flex items-center gap-1 text-emerald-700 font-bold font-mono text-[10px] uppercase">
                                <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                                PROS:
                              </span>
                              <span className="text-[#667085] truncate">
                                {pageData.prosAndCons.pros[0]?.title}
                              </span>
                            </div>
                            <span className="text-[#0066FF] font-bold font-mono text-[10px] uppercase shrink-0 group-hover/strip:underline">
                              See Pros/Cons &rarr;
                            </span>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="space-y-3 pt-1" onClick={(e) => e.stopPropagation()}>
                        {/* Pros Box */}
                        <div className="p-3.5 rounded-xl bg-emerald-50/80 border border-emerald-200/90 text-left">
                          <div className="flex items-center justify-between mb-2">
                            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-900 font-mono uppercase tracking-wider">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                              PROS (HYDROLOGY ADVANTAGE)
                            </span>
                            <span className="text-[10px] font-mono text-emerald-800 font-bold bg-emerald-100/90 px-1.5 py-0.5 rounded">
                              + Value
                            </span>
                          </div>
                          <ul className="space-y-2 text-xs text-slate-700">
                            {pageData?.prosAndCons.pros.slice(0, 2).map((pro, pIdx) => (
                              <li key={pIdx} className="flex items-start gap-2">
                                <span className="text-emerald-600 font-bold mt-0.5">&bull;</span>
                                <span className="leading-snug">
                                  <strong className="text-slate-900 font-semibold">{pro.title}:</strong>{" "}
                                  <span className="text-slate-600">{pro.description}</span>
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Cons / Considerations Box */}
                        <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200/90 text-left">
                          <div className="flex items-center justify-between mb-2">
                            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-950 font-mono uppercase tracking-wider">
                              <AlertTriangle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                              CONS (SITE CONSIDERATIONS)
                            </span>
                            <span className="text-[10px] font-mono text-amber-900 font-bold bg-amber-100/90 px-1.5 py-0.5 rounded">
                              Requirements
                            </span>
                          </div>
                          <ul className="space-y-2 text-xs text-slate-700">
                            {pageData?.prosAndCons.cons.slice(0, 2).map((con, cIdx) => (
                              <li key={cIdx} className="flex items-start gap-2">
                                <span className="text-amber-600 font-bold mt-0.5">&bull;</span>
                                <span className="leading-snug">
                                  <strong className="text-slate-900 font-semibold">{con.title}:</strong>{" "}
                                  <span className="text-slate-600">{con.description}</span>
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="mt-5 pt-4 border-t border-[#DCE2EB] flex items-center justify-between text-xs font-bold text-[#0066FF]">
                    <span>Read Full Industry Case &amp; Technical Specs</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

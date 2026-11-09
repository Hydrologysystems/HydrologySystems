/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";

// Sector images for mobile cards & fallbacks
// @ts-ignore
import refineryImg from "../assets/images/chemical_plant_sunset_1783458445425.jpg";
// @ts-ignore
import beverageImg from "../assets/images/beverage_bottling_plant_conveyor_1783611109275.jpg";
// @ts-ignore
import agricultureImg from "../assets/images/greenhouse_agriculture_cultivation_1783611464652.jpg";
// @ts-ignore
import wastewaterImg from "../assets/images/wastewater_clear_aeration_1793717063034.jpg";
// @ts-ignore
import coolingTowerImg from "../assets/images/cooling_tower_industrial_1783982968793.jpg";

interface StripedTechnologiesSectionProps {
  onSelectIndustry?: (industryId: any) => void;
}

export default function StripedTechnologiesSection({ onSelectIndustry }: StripedTechnologiesSectionProps) {
  const sectors = [
    {
      id: "refineries",
      name: "Oil Refineries",
      image: refineryImg,
      alt: "Oil Refineries Catalytic Neutralization",
      industrySlug: "refineries" as const,
      customLabel: "Oil Refineries",
      clip: "polygon(0% 0%, 23% 0%, 10.9% 100%, 0% 100%)",
      cueLeft: "10%",
      cueBottom: "bottom-24 lg:bottom-28",
    },
    {
      id: "drilling",
      name: "Drilling",
      image: "https://res.cloudinary.com/ew2ztpgz/image/upload/v1793352916/Desert_Drilling_Rig_Under_Blue_Skies_sdpurs.png",
      alt: "Onshore & Offshore Drilling Alkalinity Skid",
      industrySlug: "drilling" as const,
      customLabel: "Drilling",
      clip: "polygon(23% 0%, 44.1% 0%, 32.8% 100%, 10.9% 100%)",
      cueLeft: "28%",
      cueBottom: "bottom-24 lg:bottom-28",
    },
    {
      id: "beverage",
      name: "Food & Beverages",
      image: beverageImg,
      alt: "Food & Beverage pH Compliance",
      industrySlug: "food-beverage" as const,
      customLabel: "Food &\nBeverages",
      clip: "polygon(44.1% 0%, 64.8% 0%, 54.7% 100%, 32.8% 100%)",
      cueLeft: "49%",
      cueBottom: "bottom-24 lg:bottom-28",
    },
    {
      id: "agriculture",
      name: "Agriculture",
      image: agricultureImg,
      alt: "Commercial Agriculture pH Stabilization",
      industrySlug: "agriculture" as const,
      customLabel: "Agriculture",
      clip: "polygon(64.8% 0%, 86.5% 0%, 74.6% 100%, 54.7% 100%)",
      cueLeft: "69%",
      cueBottom: "bottom-24 lg:bottom-28",
    },
    {
      id: "wastewater",
      name: "Wastewater Treatment",
      image: wastewaterImg,
      alt: "Industrial Wastewater Treatment and Effluent Neutralization",
      industrySlug: "wastewater" as const,
      customLabel: "Wastewater Treatment",
      clip: "polygon(86.5% 0%, 100% 0%, 100% 47.8%, 80.8% 47.8%)",
      cueLeft: "91%",
      cueTop: "top-[20%]",
    },
    {
      id: "cooling-towers",
      name: "Cooling Towers",
      image: coolingTowerImg,
      alt: "Industrial Cooling Towers & Recirculating Loops",
      industrySlug: "cooling-towers" as const,
      customLabel: "Cooling Towers",
      clip: "polygon(80.8% 47.8%, 100% 47.8%, 100% 100%, 74.6% 100%)",
      cueLeft: "88%",
      cueBottom: "bottom-24 lg:bottom-28",
    },
  ];

  const [hoveredSectorId, setHoveredSectorId] = useState<string | null>(null);

  const handleSectorClick = (slug: string | null) => {
    if (slug && onSelectIndustry) {
      onSelectIndustry(slug);
    } else {
      const el = document.getElementById("technology");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section
      id="onsite-ph-control-technologies"
      aria-label="Industrial Commercial Onsite pH Control Technologies"
      className="relative w-full bg-[#050811] overflow-hidden select-none pt-[58px] sm:pt-[66px] md:pt-[72px]"
    >
      {/* Screen Reader & Accessible SEO Headings */}
      <div className="sr-only">
        <h1>INDUSTRIAL - COMMERCIAL ONSITE pH CONTROL TECHNOLOGIES</h1>
        <h2>Autonomous Onsite Alkaline Chemical Synthesis and Continuous pH Stabilization</h2>
        <p>Specialized industrial deployments for Oil Refineries, Drilling, Food &amp; Beverages, Agriculture, Wastewater Treatment, and Cooling Towers.</p>
      </div>

      {/* ========================================================================= */}
      {/* DESKTOP HERO COMPOSITION (md: and above): Exact match to user design mockup */}
      {/* ========================================================================= */}
      <div className="hidden md:block relative w-full bg-[#050811] overflow-hidden">
        
        {/* Exact Graphic Asset uploaded by User - Fast WebP with PNG Fallback */}
        <picture>
          <source type="image/webp" srcSet="/assets/aistudio/image_24f5ed5a.webp" />
          <img
            src="/assets/aistudio/image_24f5ed5a.png"
            alt="Industrial Commercial Onsite pH Control Technologies"
            className="w-full h-auto block pointer-events-none select-none"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </picture>

        {/* Interactive Diagonal Clickable Hotspots overlaying each stripe */}
        <div className="absolute inset-0 z-20">
          {sectors.map((sec) => {
            const isHovered = hoveredSectorId === sec.id;
            return (
              <div
                key={`hotspot-${sec.id}`}
                onClick={() => handleSectorClick(sec.industrySlug)}
                onMouseEnter={() => setHoveredSectorId(sec.id)}
                onMouseLeave={() => setHoveredSectorId(null)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleSectorClick(sec.industrySlug);
                  }
                }}
                className="absolute inset-0 cursor-pointer transition-all duration-300 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0099FF]"
                style={{
                  clipPath: sec.clip,
                  WebkitClipPath: sec.clip,
                }}
                title={`Click to explore ${sec.name} Solution`}
                aria-label={`Explore ${sec.name} solution`}
              >
                {/* Subtle Interactive Illumination overlay on hover */}
                <div 
                  className={`absolute inset-0 transition-opacity duration-300 pointer-events-none ${
                    isHovered 
                      ? "opacity-100 bg-gradient-to-t from-[#0099FF]/20 via-[#0099FF]/5 to-transparent" 
                      : "opacity-0"
                  }`} 
                />

                {/* Floating "Explore Solution" Cue button appearing smoothly on hover */}
                <div 
                  className={`absolute ${sec.cueTop ? sec.cueTop : sec.cueBottom || "bottom-24 lg:bottom-28"} pointer-events-none transition-all duration-300 ${
                    isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                  }`}
                  style={{ left: sec.cueLeft, transform: "translateX(-50%)" }}
                >
                  <span className="text-[11px] lg:text-xs font-mono font-bold text-white uppercase tracking-wider flex items-center gap-1.5 bg-[#0066FF] hover:bg-[#0052cc] px-3.5 py-1.5 rounded-full shadow-2xl border border-blue-400/50 whitespace-nowrap">
                    <span>Explore Solution</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* ========================================================================= */}
      {/* MOBILE COMPOSITION (below md): Clean stacked dark theme matching design    */}
      {/* ========================================================================= */}
      <div className="md:hidden flex flex-col w-full py-12 px-4 bg-[#050811] text-white">
        
        {/* Mobile Central Header Banner matching design */}
        <div className="flex flex-col items-center text-center mb-8">
          <div className="mb-2">
            <span className="font-mono font-bold text-xs tracking-widest uppercase text-slate-300">
              INDUSTRIAL - COMMERCIAL
            </span>
          </div>

          <h2 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight uppercase mb-3">
            ONSITE pH CONTROL
          </h2>

          <div className="border border-[#0099FF] px-8 py-2 bg-[#050811]/90 shadow-[0_0_20px_rgba(0,153,255,0.3)]">
            <span className="font-display font-black text-lg sm:text-xl text-[#0099FF] tracking-[0.2em] uppercase">
              TECHNOLOGIES
            </span>
          </div>
        </div>

        {/* 5 Sector Cards in dark theme */}
        <div className="flex flex-col gap-3.5 w-full">
          {sectors.map((sec, idx) => {
            return (
              <div
                key={`mobile-${sec.id}`}
                onClick={() => handleSectorClick(sec.industrySlug)}
                className="relative flex items-center justify-between p-3.5 rounded-2xl bg-[#090D1A] border border-white/10 hover:border-[#0099FF] transition-all cursor-pointer shadow-lg active:scale-[0.99]"
              >
                {/* Sector image thumbnail */}
                <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0 border border-white/15 shadow-sm">
                  <img
                    src={sec.image}
                    alt={sec.alt}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Sector details */}
                <div className="flex-1 px-4 text-left">
                  <div className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#0099FF] mb-0.5 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0099FF]" />
                    <span>Sector 0{idx + 1}</span>
                  </div>
                  <h3 className="font-sans font-bold text-base text-white leading-tight">
                    {sec.name}
                  </h3>
                </div>

                {/* Arrow cue */}
                <div className="w-8 h-8 rounded-full bg-[#0066FF]/20 border border-[#0066FF]/40 flex items-center justify-center text-[#0099FF] shrink-0 shadow-sm">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

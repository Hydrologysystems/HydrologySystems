/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { Award, Briefcase, History, Scale, ShieldCheck, X, Maximize2 } from "lucide-react";
import MasonryGallery, { MasonryItem } from "./MasonryGallery";

// @ts-ignore
// import threeTankImg from "../assets/images/hydrology_three_tank_system_1783609951806.jpg";
// @ts-ignore
import realSkidImg from "../assets/images/hydrology_real_skid_deployment_1783536634793.jpg";
// @ts-ignore
import vesselCloseupImg from "../assets/images/hydrology_vessel_closeup_1783609972356.jpg";
// @ts-ignore
import containerInteriorImg from "../assets/images/hydrology_container_interior_1783609991345.jpg";
// @ts-ignore
import containerAttachedImg from "../assets/images/hydrology_container_attached_reconstructed_1783537520196.jpg";
// @ts-ignore
import bottlingPlantImg from "../assets/images/beverage_bottling_plant_conveyor_1783611109275.jpg";
// @ts-ignore
import refineryBg from "../assets/images/refinery_equipment_bg_1782937594866.jpg";

export default function Expertise() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.12, 1.02]);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const masonryItems: MasonryItem[] = [
    {
      id: "bottling-plant",
      img: "https://res.cloudinary.com/ew2ztpgz/image/upload/f_auto,q_auto/ChatGPT_Image_Jul_14_2026_08_19_05_AM_aku4ed",
      alt: "On-site industrial beverage bottling plant integration",
      title: "Bottling Plant Integration",
      role: "On-Site SACMI Line"
    },
    {
      id: "vessel-closeup",
      img: "https://res.cloudinary.com/ew2ztpgz/image/upload/f_auto,q_auto/container_klifpp",
      alt: "Close-up of polished HCR pressure vessel with glass viewport",
      title: "HCR Pressure Vessel",
      role: "Glass Viewport & Diagnostics"
    },
    {
      id: "container-unit",
      img: containerAttachedImg,
      alt: "Mobile containerized pH control system",
      title: "Mobile Containerized Unit",
      role: "On-Site Exterior Shell"
    },
    {
      id: "container-interior",
      img: containerInteriorImg,
      alt: "Interior of containerized pH control system showing control room",
      title: "Container Control Room",
      role: "PLC Panels & Climate Control"
    },
    {
      id: "automation-panel",
      img: "https://res.cloudinary.com/ew2ztpgz/image/upload/f_auto,q_auto/ChatGPT_Image_Jul_15_2026_12_09_44_AM_og8mz8",
      alt: "Industrial electrical automation control panel and wiring",
      title: "Automation Panel",
      role: "Climate Control & Diagnostics"
    },
    {
      id: "main-system-cop-2",
      img: "https://res.cloudinary.com/ew2ztpgz/image/upload/f_auto,q_auto/main_image_3_copy_2_ga1e8f",
      alt: "Main industrial filtration and treatment system",
      title: "Primary Treatment Array",
      role: "High-Performance Filtration"
    },
    {
      id: "control-system-monitor",
      img: "https://res.cloudinary.com/ew2ztpgz/image/upload/v1784043080/awdas_2_vvbkgh.png",
      alt: "Real-time control system dashboard with metrics",
      title: "Control System Dashboard",
      role: "Real-Time PLC HMI"
    },
    {
      id: "main-control-facility",
      img: "https://res.cloudinary.com/ew2ztpgz/image/upload/v1784141993/control_room_2_muyxdi.png",
      alt: "Main command center and operation panels",
      title: "Main Control Room",
      role: "Operations Console"
    },
    {
      id: "neutralization-system-skid",
      img: "https://res.cloudinary.com/ew2ztpgz/image/upload/v1784142001/create_2_w8oda9.png",
      alt: "Modular neutralization skid platform assembly",
      title: "Neutralization Skid",
      role: "Pre-Assembled Assembly"
    },
    {
      id: "equalization-tank-array",
      img: "https://res.cloudinary.com/ew2ztpgz/image/upload/v1784142003/tank_2_fc4u5p.png",
      alt: "On-site industrial equalization storage tanks",
      title: "Equalization Tanks",
      role: "Volume Balancing"
    },
    {
      id: "hydrology-systems-skid",
      img: "https://res.cloudinary.com/ew2ztpgz/image/upload/v1784140444/Gemini_Generated_Image_3byrq63byrq63byr_zyhwdd.png",
      alt: "Hydrology Systems Skid and Filtration Assembly",
      title: "Hydrology Systems Skid",
      role: "Modular Filtration & Neutralization"
    }
  ];

  return (
    <section ref={sectionRef} id="about" className="relative py-20 sm:py-24 lg:py-28 bg-transparent border-t border-slate-200">
      {/* Background Image Overlay with Parallax */}
      <div className="absolute inset-0 z-0 opacity-[0.10] pointer-events-none select-none overflow-hidden">
        <motion.div 
          style={{ y, scale }}
          className="absolute inset-0 w-full h-full"
        >
          <img 
            src={refineryBg} 
            alt="Hydrology Industrial Refinery Equipment Backdrop" 
            width={1920}
            height={1280}
            loading="lazy"
            className="w-full h-[120%] object-cover grayscale brightness-75"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#f8f9fa] via-transparent to-[#f8f9fa]" />
      </div>

      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[radial-gradient(circle_at_top_left,rgba(0,128,128,0.01),transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Main layout container - stacked vertically */}
        <div className="flex flex-col items-center">
          
          {/* Top text content and compliance badges block */}
          <div className="w-full max-w-3xl text-center mb-8">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary-600 font-mono text-[10px] tracking-[0.2em] font-bold uppercase mb-3"
            >
              ENGINEERING CREDENTIALS & COMPLIANCE
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 mb-6"
            >
              Our Expertise & Commitment
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-sans text-xs sm:text-sm text-slate-700 font-normal leading-relaxed mb-4"
            >
              Our team brings over 60 years of combined experience in industrial water purification, high-pH technology, and industrial processes. We combine deep knowledge of regulatory compliance with a specialization in proprietary Hydroxide Catalyst Reactor (HCR) technology.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-sans text-xs sm:text-sm text-slate-500 font-normal leading-relaxed"
            >
              This HCR is integrated with an advanced electrochemical separation process, creating an efficient, closed-loop system for on-site NaOH production. We have been developing this pH control platform since 2015, leveraging our prior success in commercial and consumer alkaline pH water brands.
            </motion.p>

            {/* Micro badges showing regulatory and engineering strengths */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 pt-8 border-t border-slate-200 max-w-2xl mx-auto">
              <div className="flex items-start text-left gap-3">
                <div className="p-2 rounded-lg bg-primary-50 border border-primary-200 text-primary-600 shadow-sm shrink-0">
                  <Scale className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-display text-xs font-bold text-slate-800 mb-1">Strict Compliance</h4>
                  <p className="font-sans text-[11px] text-slate-500 font-normal leading-snug">Engineered to meet EPA & state wastewater discharge regulations.</p>
                </div>
              </div>
              <div className="flex items-start text-left gap-3">
                <div className="p-2 rounded-lg bg-primary-50 border border-primary-200 text-primary-600 shadow-sm shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-display text-xs font-bold text-slate-800 mb-1">60+ Years Combined</h4>
                  <p className="font-sans text-[11px] text-slate-500 font-normal leading-snug">Experienced team specializing in water treatment engineering.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom visual section: full-width curved portrait gallery */}
          <div className="w-full relative overflow-visible">
            {/* Decorative accent behind the gallery */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary-500/5 to-transparent rounded-3xl filter blur-xl opacity-35 pointer-events-none" />

            <MasonryGallery
              items={masonryItems}
              onItemClick={(item) => setSelectedImage(item.img)}
            />
          </div>

        </div>

      </div>

      {/* Lightbox Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 backdrop-blur-md p-4 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl max-h-[90vh] bg-slate-900 border border-white/10 rounded-2xl overflow-hidden shadow-2xl relative flex items-center justify-center p-2"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 p-2 rounded-lg bg-slate-900/80 border border-white/10 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors z-10 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <img
                src={selectedImage}
                alt="Enlarged view"
                className="max-w-full max-h-[80vh] rounded-lg object-contain"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

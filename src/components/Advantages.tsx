import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Zap, 
  ShieldCheck, 
  Activity, 
  Play, 
  X
} from "lucide-react";

// Image imports
import skidTourImg from "../assets/images/hydrology_skid_tour_thumbnail_1783537068561.jpg";
import demoImg from "../assets/images/hydrology_real_skid_deployment_1783536634793.jpg";
import containerImg from "../assets/images/hydrology_container_unit_thumbnail_1783537326111.jpg";
import techBgImage from "../assets/images/refinery_equipment_bg_1782937594866.jpg";
import attachedImg from "../assets/images/hydrology_container_attached_reconstructed_1783537520196.jpg";

export default function Advantages() {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  interface VideoData {
    id: string;
    title: string;
    label: string;
    thumbnail: string;
    duration?: string;
  }

  interface CardData {
    id: string;
    icon: any;
    title: string;
    description: string;
    video?: VideoData;
    hidePlayOverlay?: boolean;
  }

  const cards: CardData[] = [
    {
      id: "ph-output",
      icon: Zap,
      title: "Guaranteed pH 12 Output",
      description: "Our blended system is engineered to match or exceed the neutralizing power of traditional Baumé 20 caustic mix for absolute wastewater treatment reliability.",
      video: {
        id: "nHc9g0SmMek",
        title: "Hydrology Systems Equipment Tour",
        label: "EQUIPMENT TOUR",
        thumbnail: "https://res.cloudinary.com/ew2ztpgz/image/upload/v1784140444/Gemini_Generated_Image_3byrq63byrq63byr_zyhwdd.png",
        duration: "2:14"
      }
    },
    {
      id: "uptime",
      icon: ShieldCheck,
      title: "100% Operational Uptime",
      description: "On-site production uses proprietary chemical precursors and water to create NaOH, ensuring an uninterrupted supply that eliminates risk from vendor failure or logistics delays.",
      video: {
        id: "7DYzEgF0Gog",
        title: "On-Site Operational Demonstration",
        label: "OPERATIONAL PROOF",
        thumbnail: "https://res.cloudinary.com/ew2ztpgz/image/upload/v1784140915/no_play_button_boyz10.png"
      }
    },
    {
      id: "compliance",
      icon: Activity,
      title: "Superior Compliance & Consistency",
      description: "Automated, precise pH control minimizes fluctuations, protecting your discharge permit and reducing the risk of costly environmental fines.",
      video: {
        id: "gW7O8T8vG0k",
        title: "On-Site Containerized Unit Overview",
        label: "SOFTWARE & CONTROL SYSTEMS",
        thumbnail: "https://res.cloudinary.com/ew2ztpgz/image/upload/f_auto,q_auto/awdas_2_vvbkgh",
        duration: "2:40"
      }
    }
  ];

  return (
    <section 
      id="advantages" 
      className="relative py-24 bg-[#F4F6FA] border-t border-[#DCE2EB] overflow-hidden"
    >
      {/* Blueprint background overlay to replicate the light machinery technical layout */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={techBgImage}
          alt="Technical Piping Blueprint"
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover opacity-[0.035] filter grayscale"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F4F6FA] via-transparent to-[#F4F6FA]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Label: "KEY SYSTEM ADVANTAGES" */}
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0, y: -8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-[11px] font-bold tracking-[0.25em] text-[#667085] uppercase mb-3"
          >
            KEY SYSTEM ADVANTAGES
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-display font-bold text-[#101828] tracking-tight mb-8"
          >
            Alkaline Systems Specifications
          </motion.h2>

          {/* Specifications Grid */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-white border border-[#DCE2EB] rounded-2xl p-4 sm:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4"
          >
            <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-[#F4F6FA] border border-[#DCE2EB]">
              <span className="text-[10px] sm:text-[11px] font-mono font-semibold uppercase tracking-wider text-[#667085] mb-1 text-center">
                pH Production Range
              </span>
              <span className="text-sm sm:text-base font-bold text-[#101828] font-mono text-center">
                7pH to 12pH
              </span>
            </div>

            <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-[#F4F6FA] border border-[#DCE2EB]">
              <span className="text-[10px] sm:text-[11px] font-mono font-semibold uppercase tracking-wider text-[#667085] mb-1 text-center">
                Flow Rate Range
              </span>
              <span className="text-sm sm:text-base font-bold text-[#101828] font-mono text-center">
                3 GPM To 120 GPM
              </span>
            </div>

            <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-[#F4F6FA] border border-[#DCE2EB]">
              <span className="text-[10px] sm:text-[11px] font-mono font-semibold uppercase tracking-wider text-[#667085] mb-1 text-center">
                Total Dissolved Solids
              </span>
              <span className="text-sm sm:text-base font-bold text-[#101828] font-mono text-center">
                15 to 150 TDS
              </span>
            </div>

            <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-[#F4F6FA] border border-[#DCE2EB]">
              <span className="text-[10px] sm:text-[11px] font-mono font-semibold uppercase tracking-wider text-[#667085] mb-1 text-center">
                Output Temperature
              </span>
              <span className="text-sm sm:text-base font-bold text-[#101828] font-mono text-center">
                80° F
              </span>
            </div>
          </motion.div>
        </div>

        {/* Top Row: Three Advantage Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            const isMiddle = idx === 1;
            const hasVideo = !!card.video;

            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`bg-white border border-[#DCE2EB] rounded-[2.5rem] shadow-[0_15px_40px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgba(0,102,255,0.06)] transition-all duration-500 hover:-translate-y-1 overflow-hidden flex flex-col ${
                  hasVideo ? "p-3" : "p-10 items-center text-center"
                }`}
              >
                {hasVideo ? (
                  <>
                    {/* Content Section on top */}
                    <div className="pt-6 px-5 pb-5 flex flex-col items-center text-center flex-grow">
                      <div className="flex items-center justify-center space-x-2 mb-3">
                        <div className="w-8 h-8 rounded-full bg-[#0066FF]/10 text-[#0066FF] flex items-center justify-center">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="font-mono text-[9px] font-extrabold tracking-[0.18em] text-[#0066FF] uppercase">
                          {card.video!.label}
                        </span>
                      </div>
                      
                      <h3 className="font-display text-[18px] font-bold text-[#101828] mb-3 tracking-tight">
                        {card.title}
                      </h3>
                      
                      <p className="font-sans text-[13px] text-[#667085] leading-[1.6] font-normal">
                        {card.description}
                      </p>
                    </div>

                    {/* Embedded Video Thumbnail at the bottom */}
                    <div 
                      onClick={() => !card.hidePlayOverlay && setActiveVideoId(card.video!.id)}
                      className={`relative aspect-[16/10] rounded-[1.8rem] overflow-hidden bg-slate-100 w-full ${!card.hidePlayOverlay ? "cursor-pointer group" : ""}`}
                    >
                      <img 
                        src={card.video!.thumbnail} 
                        alt={card.video!.title} 
                        loading="lazy"
                        decoding="async"
                        className={`w-full h-full object-cover transition-transform duration-700 ${!card.hidePlayOverlay ? "group-hover:scale-105" : ""}`}
                        referrerPolicy="no-referrer"
                      />
                      {!card.hidePlayOverlay && (
                        <div className="absolute inset-0 bg-[#080B12]/20 group-hover:bg-[#080B12]/40 transition-colors duration-300 flex items-center justify-center">
                          <div className="w-12 h-12 rounded-full bg-white/95 shadow-lg flex items-center justify-center text-[#0066FF] transition-transform duration-300 group-hover:scale-110">
                            <Play className="w-4 h-4 fill-[#0066FF] text-[#0066FF] ml-0.5" />
                          </div>
                        </div>
                      )}
                    </div>
                  </>
                ) : (
                  <>
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-colors duration-300 ${
                      isMiddle 
                        ? "bg-[#0066FF] text-white shadow-[0_8px_20px_rgba(0,102,255,0.25)]" 
                        : "bg-[#0066FF]/10 text-[#0066FF] border border-[#0066FF]/20"
                    }`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    
                    <h3 className="font-display text-[20px] font-bold text-[#101828] mb-4 tracking-tight">
                      {card.title}
                    </h3>
                    
                    <p className="font-sans text-[14px] text-[#667085] leading-[1.65] font-normal">
                      {card.description}
                    </p>
                  </>
                )}
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Interactive YouTube Video Modal */}
      <AnimatePresence>
        {activeVideoId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm"
            onClick={() => setActiveVideoId(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="relative w-full max-w-4xl bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setActiveVideoId(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-950/60 hover:bg-slate-950 text-slate-400 hover:text-white transition-all cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Player Aspect-Video */}
              <div className="aspect-video w-full bg-black">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1&rel=0`}
                  title="Hydrology System Walkthrough"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

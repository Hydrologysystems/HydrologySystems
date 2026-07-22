import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Pause, Play, RotateCcw, ShieldCheck } from "lucide-react";

export default function HowItWorks() {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [simulationTime, setSimulationTime] = useState<number>(0);
  const [activeStage, setActiveStage] = useState<string>("stage1");
  const [hoveredStage, setHoveredStage] = useState<string | null>(null);

  const currentStage = hoveredStage || activeStage;

  useEffect(() => {
    if (!isPlaying) return;
    let frameId: number;
    let lastTime = performance.now();

    const animate = (time: number) => {
      const delta = time - lastTime;
      // Increment simulationTime smoothly at ~60fps
      setSimulationTime((prev) => (prev + delta * 0.1) % 1000);
      lastTime = time;
      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [isPlaying]);

  return (
    <section id="how-it-works" className="py-24 bg-slate-950 text-slate-100 relative overflow-hidden border-t border-slate-900">
      
      {/* Background elegant architectural line grids */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0ea5e908_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e908_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-sky-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white tracking-tight uppercase">
            How It Works
          </h2>
        </div>

        {/* Master Control and Interactive Platform Container */}
        <div className="w-full bg-slate-900/60 rounded-[2.5rem] border border-slate-800/80 p-6 sm:p-8 shadow-2xl backdrop-blur-md">
          
          {/* Header Controls Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 mb-8 border-b border-slate-800/80">
            <div className="flex items-center space-x-3">
              <span className="relative flex h-3.5 w-3.5">
                {isPlaying && (
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                )}
                <span className={`relative inline-flex rounded-full h-3.5 w-3.5 ${isPlaying ? 'bg-sky-500' : 'bg-slate-500'}`}></span>
              </span>
              <div className="text-xs sm:text-sm font-mono tracking-wider text-slate-400 font-bold">
                SIMPLE PROCESS ILLUSTRATION
              </div>
            </div>

            {/* Sim Control Actions */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="flex items-center space-x-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 active:bg-slate-600 text-slate-200 hover:text-white rounded-xl border border-slate-700 shadow-sm transition-all text-xs font-bold cursor-pointer"
                title={isPlaying ? "Pause Flow Animation" : "Play Flow Animation"}
                id="toggle-sim-btn-light"
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-3.5 h-3.5 text-slate-300" />
                    <span>PAUSE FLOWS</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 text-sky-400" />
                    <span>PLAY FLOWS</span>
                  </>
                )}
              </button>

              <button
                onClick={() => {
                  setActiveStage('stage1');
                  setIsPlaying(true);
                }}
                className="flex items-center space-x-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-slate-200 rounded-xl border border-slate-700 shadow-sm transition-all text-xs font-bold cursor-pointer"
                title="Reset active highlights"
                id="reset-sim-btn-light"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>RESET</span>
              </button>
            </div>
          </div>

          {/* Fully Vectorized Interactive Diagram Canvas */}
          <div className="relative w-full overflow-x-auto rounded-2xl border border-slate-800 bg-slate-950/90 p-4 shadow-inner" id="how-it-works-diagram-card">
            <div className="min-w-[1150px] h-[520px] relative overflow-hidden select-none">
              
              {/* BACK BACKGROUND PROCESS CONNECTIONS & ANIMATED CHANNELS */}
              <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none">
                <defs>
                  {/* Glowing Arrowheads and markers */}
                  <marker id="arrow-cyan" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 1 L 10 5 L 0 9 z" fill="#0ea5e9" />
                  </marker>
                  <marker id="arrow-purple" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 1 L 10 5 L 0 9 z" fill="#a855f7" />
                  </marker>
                  <marker id="arrow-red" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 1 L 10 5 L 0 9 z" fill="#ef4444" />
                  </marker>
                  <marker id="arrow-green" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 1 L 10 5 L 0 9 z" fill="#22c55e" />
                  </marker>

                  {/* Flow dashed lines gradient templates */}
                  <linearGradient id="gradient-cyan" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.4" />
                    <stop offset="50%" stopColor="#0284c7" stopOpacity="1" />
                    <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.4" />
                  </linearGradient>
                  <linearGradient id="gradient-purple" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#a855f7" stopOpacity="0.4" />
                    <stop offset="50%" stopColor="#8b5cf6" stopOpacity="1" />
                    <stop offset="100%" stopColor="#a855f7" stopOpacity="0.4" />
                  </linearGradient>
                  <linearGradient id="gradient-red" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#f87171" stopOpacity="0.4" />
                    <stop offset="50%" stopColor="#ef4444" stopOpacity="1" />
                    <stop offset="100%" stopColor="#f87171" stopOpacity="0.4" />
                  </linearGradient>
                  <linearGradient id="gradient-green" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#4ade80" stopOpacity="0.4" />
                    <stop offset="50%" stopColor="#22c55e" stopOpacity="1" />
                    <stop offset="100%" stopColor="#4ade80" stopOpacity="0.4" />
                  </linearGradient>
                </defs>

                {/* 1. OVERHEAD FLOW: PRE-TREATED SOURCE WATER (Branching upwards from x=210 y=225 to top y=70, then right to cabinet top x=785 y=140) */}
                <path
                  d="M 210,225 L 210,70 L 785,70 L 785,140"
                  fill="none"
                  stroke="url(#gradient-cyan)"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="opacity-90"
                />
                {/* Flow motion dots */}
                <path
                  d="M 210,225 L 210,70 L 785,70 L 785,140"
                  fill="none"
                  stroke="#38bdf8"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="12,18"
                  strokeDashoffset={isPlaying ? simulationTime * -2 : 0}
                />
                {/* Overhead Arrowhead indicator */}
                <path
                  d="M 590,70 L 602,70"
                  fill="none"
                  stroke="#0ea5e9"
                  strokeWidth="4"
                  markerEnd="url(#arrow-cyan)"
                />
                {/* Labeled text: PRE-TREATED SOURCE WATER */}
                <text x="500" y="55" fill="#38bdf8" className="font-sans font-black text-[13px] tracking-widest uppercase">
                  PRE-TREATED SOURCE WATER
                </text>

                {/* 2. STAGE 1 -> STAGE 2 HORIZONTAL BLUE PIPE */}
                <path
                  d="M 170,225 L 270,225"
                  fill="none"
                  stroke="#0ea5e9"
                  strokeWidth="10"
                />
                <path
                  d="M 170,225 L 270,225"
                  fill="none"
                  stroke="#38bdf8"
                  strokeWidth="4"
                  strokeDasharray="8,10"
                  strokeDashoffset={isPlaying ? simulationTime * -3 : 0}
                />
                <path
                  d="M 230,225 L 245,225"
                  fill="none"
                  stroke="#0ea5e9"
                  strokeWidth="4"
                  markerEnd="url(#arrow-cyan)"
                />

                {/* 3. STAGE 2 -> STAGE 3 PURPLE PIPE */}
                <path
                  d="M 420,225 L 470,225"
                  fill="none"
                  stroke="#a855f7"
                  strokeWidth="10"
                />
                <path
                  d="M 420,225 L 470,225"
                  fill="none"
                  stroke="#c084fc"
                  strokeWidth="4"
                  strokeDasharray="8,10"
                  strokeDashoffset={isPlaying ? simulationTime * -3 : 0}
                />
                <path
                  d="M 440,225 L 455,225"
                  fill="none"
                  stroke="#a855f7"
                  strokeWidth="4"
                  markerEnd="url(#arrow-purple)"
                />

                {/* 4. STAGE 3 -> SMART pH MIXING LOGIC CABINET */}
                <path
                  d="M 620,225 L 690,225"
                  fill="none"
                  stroke="#a855f7"
                  strokeWidth="10"
                />
                <path
                  d="M 620,225 L 690,225"
                  fill="none"
                  stroke="#c084fc"
                  strokeWidth="4"
                  strokeDasharray="8,10"
                  strokeDashoffset={isPlaying ? simulationTime * -3 : 0}
                />
                <path
                  d="M 650,225 L 665,225"
                  fill="none"
                  stroke="#a855f7"
                  strokeWidth="4"
                  markerEnd="url(#arrow-purple)"
                />

                {/* 5. SMART pH CABINET -> 12 pH CONTROLLER */}
                <path
                  d="M 880,225 L 930,225"
                  fill="none"
                  stroke="#a855f7"
                  strokeWidth="10"
                />
                <path
                  d="M 880,225 L 930,225"
                  fill="none"
                  stroke="#c084fc"
                  strokeWidth="4"
                  strokeDasharray="8,10"
                  strokeDashoffset={isPlaying ? simulationTime * -3 : 0}
                />
                <path
                  d="M 900,225 L 915,225"
                  fill="none"
                  stroke="#a855f7"
                  strokeWidth="4"
                  markerEnd="url(#arrow-purple)"
                />

                {/* 6. 12 pH CONTROLLER -> DROP BASIN PIPELINE */}
                <path
                  d="M 1000,215 L 1010,215 L 1010,270"
                  fill="none"
                  stroke="#a855f7"
                  strokeWidth="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M 1000,215 L 1010,215 L 1010,270"
                  fill="none"
                  stroke="#c084fc"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="8,10"
                  strokeDashoffset={isPlaying ? simulationTime * -3 : 0}
                />
                <path
                  d="M 1010,255 L 1010,270"
                  fill="none"
                  stroke="#a855f7"
                  strokeWidth="4"
                  markerEnd="url(#arrow-purple)"
                />

                {/* Animated Flow from the pipe to the drainage basin */}
                <path
                  d="M 1010,270 L 1010,320"
                  fill="none"
                  stroke="#a855f7"
                  strokeWidth="10"
                />
                <path
                  d="M 1010,270 L 1010,320"
                  fill="none"
                  stroke="#c084fc"
                  strokeWidth="4"
                  strokeDasharray="8,10"
                  strokeDashoffset={isPlaying ? simulationTime * -3 : 0}
                />
                <path
                  d="M 1010,295 L 1010,315"
                  fill="none"
                  stroke="#a855f7"
                  strokeWidth="4"
                  markerEnd="url(#arrow-purple)"
                />

                {/* Vertical drainage pipe under basin */}
                <path
                  d="M 1010,320 L 1010,445"
                  fill="none"
                  stroke="#a855f7"
                  strokeWidth="10"
                />
                <path
                  d="M 1010,320 L 1010,445"
                  fill="none"
                  stroke="#c084fc"
                  strokeWidth="4"
                  strokeDasharray="8,10"
                  strokeDashoffset={isPlaying ? simulationTime * -3 : 0}
                />

                {/* 7. RED RECYCLE WASTE LOOP (Stage 3 bottom x=545 y=300 down to 385, left to Recycle block x=500 y=385. Left from Recycle block x=350 y=385 to left x=320, then up to bottom of Stage 2 x=320 y=300) */}
                {/* Leg 1: Stage 3 to Recycle Box (Down & Left) */}
                <path
                  d="M 545,300 L 545,385 L 500,385"
                  fill="none"
                  stroke="url(#gradient-red)"
                  strokeWidth="6"
                  strokeLinejoin="round"
                />
                <path
                  d="M 545,300 L 545,385 L 500,385"
                  fill="none"
                  stroke="#f87171"
                  strokeWidth="2.5"
                  strokeLinejoin="round"
                  strokeDasharray="8,10"
                  strokeDashoffset={isPlaying ? simulationTime * -2 : 0}
                />
                <path
                  d="M 545,330 L 545,345"
                  fill="none"
                  stroke="#ef4444"
                  strokeWidth="3"
                  markerEnd="url(#arrow-red)"
                />
                <path
                  d="M 525,385 L 515,385"
                  fill="none"
                  stroke="#ef4444"
                  strokeWidth="3"
                  markerEnd="url(#arrow-red)"
                />

                {/* Leg 2: Recycle Box to Stage 2 (Left & Up) */}
                <path
                  d="M 350,385 L 320,385 L 320,300"
                  fill="none"
                  stroke="url(#gradient-red)"
                  strokeWidth="6"
                  strokeLinejoin="round"
                />
                <path
                  d="M 350,385 L 320,385 L 320,300"
                  fill="none"
                  stroke="#f87171"
                  strokeWidth="2.5"
                  strokeLinejoin="round"
                  strokeDasharray="8,10"
                  strokeDashoffset={isPlaying ? simulationTime * -2 : 0}
                />
                <path
                  d="M 335,385 L 325,385"
                  fill="none"
                  stroke="#ef4444"
                  strokeWidth="3"
                  markerEnd="url(#arrow-red)"
                />
                <path
                  d="M 320,335 L 320,320"
                  fill="none"
                  stroke="#ef4444"
                  strokeWidth="3"
                  markerEnd="url(#arrow-red)"
                />

                {/* 8. BOTTOM ACIDIC & NEUTRAL WASTEWATER PIPELINE */}
                {/* Acidic Stream (Right of basin, going Left) */}
                <path
                  d="M 1130,445 L 1010,445"
                  fill="none"
                  stroke="url(#gradient-red)"
                  strokeWidth="8"
                />
                <path
                  d="M 1130,445 L 1010,445"
                  fill="none"
                  stroke="#f87171"
                  strokeWidth="3"
                  strokeDasharray="8,10"
                  strokeDashoffset={isPlaying ? simulationTime * -3 : 0}
                />
                <path
                  d="M 1080,445 L 1065,445"
                  fill="none"
                  stroke="#ef4444"
                  strokeWidth="4"
                  markerEnd="url(#arrow-red)"
                />
                <text x="1090" y="475" fill="#ef4444" className="font-sans font-black text-[12px] tracking-wider uppercase text-right">
                  ACIDIC STREAM
                </text>

                {/* Neutralized stream (Left of basin, going Left) */}
                <path
                  d="M 1010,445 L 750,445"
                  fill="none"
                  stroke="url(#gradient-green)"
                  strokeWidth="8"
                />
                <path
                  d="M 1010,445 L 750,445"
                  fill="none"
                  stroke="#4ade80"
                  strokeWidth="3"
                  strokeDasharray="8,10"
                  strokeDashoffset={isPlaying ? simulationTime * -3 : 0}
                />
                <path
                  d="M 880,445 L 865,445"
                  fill="none"
                  stroke="#22c55e"
                  strokeWidth="4"
                  markerEnd="url(#arrow-green)"
                />
                <text x="825" y="430" fill="#4ade80" className="font-sans font-black text-[12px] tracking-wider uppercase">
                  NEUTRALIZE ACIDIC PROCESS
                </text>
              </svg>

              {/* WATER DRIPPING AND SPLASH ANIMATIONS */}
              <div className="absolute left-[1007px] top-[270px] w-[6px] h-[75px] overflow-hidden pointer-events-none z-10">
                {isPlaying && (
                  <div className="w-full h-full relative">
                    <div className="absolute w-[4px] h-[8px] bg-sky-300 rounded-full left-[1px] animate-bounce" style={{ animationDuration: '0.8s', animationDelay: '0s' }} />
                    <div className="absolute w-[4px] h-[8px] bg-sky-400 rounded-full left-[1px] animate-bounce" style={{ animationDuration: '0.6s', animationDelay: '0.2s' }} />
                    <div className="absolute w-[4px] h-[8px] bg-purple-400 rounded-full left-[1px] animate-bounce" style={{ animationDuration: '0.9s', animationDelay: '0.4s' }} />
                  </div>
                )}
              </div>

              {/* FRONT INTERACTIVE SCHEMATIC BLOCKS */}

              {/* Block 1: Source Water Pre-Treatment Stage (Teal block) */}
              <motion.div 
                className={`absolute left-[20px] top-[150px] w-[150px] h-[150px] rounded-2xl border-2 transition-all duration-300 flex flex-col items-center justify-center p-3 text-center cursor-pointer ${
                  currentStage === 'stage1' 
                    ? 'border-teal-300 bg-gradient-to-br from-teal-400 via-teal-500 to-teal-600 shadow-[0_8px_25px_rgba(20,184,166,0.4)] scale-102' 
                    : 'border-teal-600/30 bg-gradient-to-br from-teal-500 via-teal-600 to-teal-700 hover:border-teal-300 shadow-md'
                }`}
                whileHover={{ y: -2 }}
                onClick={() => setActiveStage('stage1')}
                onMouseEnter={() => setHoveredStage('stage1')}
                onMouseLeave={() => setHoveredStage(null)}
                id="stage-block-1"
              >
                {/* Clean metallic shine reflection overlay */}
                <div className="absolute inset-x-0 top-0 h-1/2 bg-white/10 rounded-t-2xl pointer-events-none" />
                
                <h3 className="font-sans font-black text-white text-[15px] sm:text-[16px] leading-tight tracking-tight drop-shadow-md">
                  Source Water<br/>
                  Pre-Treatment<br/>
                  Stage
                </h3>
              </motion.div>

              {/* Block 2: Hydroxyl Ion Enrichment Stage (Silver metal block) */}
              <motion.div 
                className={`absolute left-[270px] top-[150px] w-[150px] h-[150px] rounded-2xl border-2 transition-all duration-300 flex flex-col items-center justify-center p-3 text-center cursor-pointer ${
                  currentStage === 'stage2' 
                    ? 'border-blue-400 bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300 shadow-[0_8px_25px_rgba(148,163,184,0.3)] scale-102' 
                    : 'border-slate-400 bg-gradient-to-br from-slate-200 via-slate-300 to-slate-400 hover:border-blue-400 shadow-md'
                }`}
                whileHover={{ y: -2 }}
                onClick={() => setActiveStage('stage2')}
                onMouseEnter={() => setHoveredStage('stage2')}
                onMouseLeave={() => setHoveredStage(null)}
                id="stage-block-2"
              >
                <div className="absolute inset-x-0 top-0 h-1/2 bg-white/20 rounded-t-2xl pointer-events-none" />
                
                <h3 className="font-sans font-black text-slate-800 text-[14px] sm:text-[15px] leading-tight tracking-tight">
                  Hydroxyl Ion<br/>
                  Enrichment<br/>
                  Stage
                </h3>
              </motion.div>

              {/* Block 3: Electrochemical Separation Stage (Silver metal block) */}
              <motion.div 
                className={`absolute left-[470px] top-[150px] w-[150px] h-[150px] rounded-2xl border-2 transition-all duration-300 flex flex-col items-center justify-center p-3 text-center cursor-pointer ${
                  currentStage === 'stage3' 
                    ? 'border-blue-400 bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300 shadow-[0_8px_25px_rgba(148,163,184,0.3)] scale-102' 
                    : 'border-slate-400 bg-gradient-to-br from-slate-200 via-slate-300 to-slate-400 hover:border-blue-400 shadow-md'
                }`}
                whileHover={{ y: -2 }}
                onClick={() => setActiveStage('stage3')}
                onMouseEnter={() => setHoveredStage('stage3')}
                onMouseLeave={() => setHoveredStage(null)}
                id="stage-block-3"
              >
                <div className="absolute inset-x-0 top-0 h-1/2 bg-white/20 rounded-t-2xl pointer-events-none" />
                
                <h3 className="font-sans font-black text-slate-800 text-[14px] sm:text-[15px] leading-tight tracking-tight">
                  Electrochemical<br/>
                  Separation<br/>
                  Stage
                </h3>
              </motion.div>

              {/* Block 4: Recycle Waste Stream (Silver metal block, bottom) */}
              <motion.div 
                className={`absolute left-[350px] top-[340px] w-[150px] h-[90px] rounded-2xl border-2 transition-all duration-300 flex flex-col items-center justify-center p-3 text-center cursor-pointer ${
                  currentStage === 'stage4' 
                    ? 'border-red-400 bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300 shadow-[0_8px_20px_rgba(239,68,68,0.2)] scale-102' 
                    : 'border-slate-400 bg-gradient-to-br from-slate-200 via-slate-300 to-slate-400 hover:border-red-400 shadow-md'
                }`}
                whileHover={{ y: -2 }}
                onClick={() => setActiveStage('stage4')}
                onMouseEnter={() => setHoveredStage('stage4')}
                onMouseLeave={() => setHoveredStage(null)}
                id="stage-block-4"
              >
                <div className="absolute inset-x-0 top-0 h-1/2 bg-white/20 rounded-t-2xl pointer-events-none" />
                
                <h3 className="font-sans font-black text-slate-800 text-[14px] leading-tight tracking-tight">
                  Recyle<br/>
                  Waste<br/>
                  Stream
                </h3>
              </motion.div>

              {/* Block 5: SMART pH MIXING LOGIC (Industrial Double-Door Cabinet) */}
              <div className="absolute left-[690px] top-[140px] w-[190px] h-[190px] flex flex-col items-center justify-between">
                <motion.div 
                  className={`w-full h-[155px] rounded-xl border-2 bg-gradient-to-r from-slate-300 via-slate-100 to-slate-400 shadow-lg relative p-2.5 transition-all duration-300 cursor-pointer ${
                    currentStage === 'stage5' ? 'border-sky-400 ring-2 ring-sky-400/20 shadow-xl' : 'border-slate-500 hover:border-sky-400'
                  }`}
                  onClick={() => setActiveStage('stage5')}
                  onMouseEnter={() => setHoveredStage('stage5')}
                  onMouseLeave={() => setHoveredStage(null)}
                  id="stage-block-5"
                >
                  {/* Stainless texture split line representing double doors */}
                  <div className="absolute inset-y-0 left-1/2 w-[2px] bg-slate-400/80 shadow-[1px_0_1px_rgba(255,255,255,0.6)]" />

                  {/* Left Door Handle */}
                  <div className="absolute right-[52%] top-[40%] w-[4px] h-[22px] bg-slate-600 rounded" />
                  {/* Right Door Handle */}
                  <div className="absolute left-[52%] top-[40%] w-[4px] h-[22px] bg-slate-600 rounded" />

                  {/* Touchscreen PLC controller on Left door */}
                  <div className="absolute left-[8px] top-[24px] w-[74px] h-[58px] bg-slate-800 rounded-md border-2 border-slate-600 p-[3px] shadow-inner flex flex-col justify-between">
                    {/* Glowing LCD Screen with telemetry */}
                    <div className="w-full h-full bg-blue-950/90 rounded border border-blue-900 overflow-hidden flex flex-col justify-between p-[2px] text-[6px] font-mono leading-none">
                      <div className="flex justify-between items-center text-blue-300 border-b border-blue-900 pb-[1px] font-black uppercase text-[5px]">
                        <span>TELEMETRY</span>
                        <span className="text-emerald-400 text-[4px]">● ON</span>
                      </div>
                      <div className="flex flex-col justify-center items-center py-[2px]">
                        {/* Interactive live graph waves */}
                        <svg className="w-full h-[16px]" viewBox="0 0 50 16">
                          <path
                            d={`M 0 8 Q 12.5 ${isPlaying ? 1 + (simulationTime % 14) : 8} 25 8 T 50 8`}
                            fill="none"
                            stroke="#06b6d4"
                            strokeWidth="1.5"
                          />
                        </svg>
                      </div>
                      <div className="flex justify-between text-cyan-300 font-extrabold text-[5px]">
                        <span>REG: 92%</span>
                        <span>45 GPM</span>
                      </div>
                    </div>
                  </div>

                  {/* Emergency Red Push Button with Yellow backing ring on Right door */}
                  <div className="absolute right-[18px] top-[55px] flex items-center justify-center">
                    {/* Yellow ring */}
                    <div className="w-[18px] h-[18px] bg-yellow-400 rounded-full border border-yellow-600 flex items-center justify-center shadow-sm">
                      {/* Red button */}
                      <div className="w-[10px] h-[10px] bg-red-600 rounded-full shadow-[0_1px_3px_rgba(0,0,0,0.4)] border border-red-800 animate-pulse" />
                    </div>
                  </div>
                </motion.div>

                {/* Sub-label underneath cabinet */}
                <h4 className="text-center font-sans font-black text-slate-200 text-[13px] tracking-tight leading-tight uppercase select-none mt-1.5">
                  SMART pH<br/>MIXING LOGIC
                </h4>
              </div>

              {/* Block 6: 12 pH Digital Dosing Controller (Mounted on Pipe) */}
              <motion.div 
                className={`absolute left-[930px] top-[175px] w-[80px] h-[85px] rounded-xl border-2 bg-gradient-to-b from-blue-600 to-blue-800 transition-all duration-300 p-2 text-center cursor-pointer flex flex-col justify-between shadow-md ${
                  currentStage === 'stage6' 
                    ? 'border-blue-300 ring-2 ring-blue-500/20 shadow-[0_6px_20px_rgba(37,99,235,0.4)] scale-102' 
                    : 'border-blue-700 hover:border-blue-300'
                }`}
                onClick={() => setActiveStage('stage6')}
                onMouseEnter={() => setHoveredStage('stage6')}
                onMouseLeave={() => setHoveredStage(null)}
                id="stage-block-6"
              >
                {/* Controller screen */}
                <div className="w-full bg-slate-900 rounded border border-blue-900 py-1 px-1 flex flex-col items-center justify-center shadow-inner">
                  <span className="text-[12px] font-mono font-black text-cyan-400 leading-none drop-shadow-[0_0_4px_rgba(34,211,238,0.5)]">
                    12 pH
                  </span>
                </div>

                {/* Micro push buttons */}
                <div className="grid grid-cols-5 gap-[1px] px-1 py-[2px]">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="h-[3px] bg-slate-400 rounded-[1px] border border-slate-500" />
                  ))}
                </div>

                {/* Cable entries underneath */}
                <div className="flex justify-around items-center pt-[2px]">
                  <span className="w-[5px] h-[6px] bg-slate-700 rounded-b" />
                  <span className="w-[5px] h-[6px] bg-slate-700 rounded-b" />
                  <span className="w-[5px] h-[6px] bg-slate-700 rounded-b" />
                </div>
              </motion.div>

              {/* Block 7: Neutralization Drop Basin / Splash sink */}
              <div 
                className="absolute left-[920px] top-[245px] w-[170px] h-[115px] flex flex-col justify-end items-center cursor-pointer group"
                onClick={() => setActiveStage('stage7')}
                onMouseEnter={() => setHoveredStage('stage7')}
                onMouseLeave={() => setHoveredStage(null)}
                id="stage-block-7"
              >
                {/* Realistically Crafted 3D Industrial Water Drainage Basin */}
                <div className="relative w-full flex flex-col items-center justify-end">
                  
                  {/* Glowing Active Aura / Feedback Ring when Stage 7 is highlighted */}
                  <div className={`absolute -inset-4 rounded-full blur-xl transition-all duration-300 pointer-events-none -z-10 ${
                    currentStage === 'stage7' 
                      ? 'bg-emerald-400/20 opacity-100 scale-105' 
                      : 'bg-sky-400/10 opacity-0 group-hover:opacity-70 group-hover:scale-102'
                  }`} />

                  {/* 1. Heavy Base Metal Slab (Perspective Support Plate) */}
                  <div className={`w-[130px] h-[14px] bg-gradient-to-b from-slate-600 via-slate-700 to-slate-900 rounded-b-lg border-x border-b border-slate-950/40 shadow-xl transition-all duration-300 ${
                    currentStage === 'stage7' ? 'brightness-110 border-sky-400/50' : ''
                  }`} />

                  {/* 2. Beveled Metallic Basin Rim (Top horizontal shelf of the sink) */}
                  <div className={`absolute bottom-[10px] w-[124px] h-[28px] bg-gradient-to-b from-slate-300 via-slate-400 to-slate-600 rounded-full border border-slate-400 flex items-center justify-center shadow-lg transition-all duration-300 ${
                    currentStage === 'stage7' ? 'border-emerald-400 ring-1 ring-emerald-400/30' : 'group-hover:border-slate-300'
                  }`}>
                    
                    {/* Inner Recessed Sink Pit (Dark metal gradient) */}
                    <div className="w-[114px] h-[20px] bg-gradient-to-b from-slate-900 via-slate-800 to-slate-950 rounded-full shadow-inner relative flex items-center justify-center overflow-hidden">
                      
                      {/* Swirling/Pulsing Water level backdrop */}
                      <div className="absolute inset-0 bg-gradient-to-r from-sky-500/20 via-emerald-400/15 to-purple-500/20 mix-blend-screen opacity-90" />
                      
                      {/* Water concentric ripple animation */}
                      {isPlaying && (
                        <>
                          <div className="absolute w-[80px] h-[12px] rounded-full border border-sky-400/30 animate-ping opacity-60" style={{ animationDuration: '1.8s' }} />
                          <div className="absolute w-[45px] h-[8px] rounded-full border border-emerald-400/40 animate-ping opacity-70" style={{ animationDuration: '1.2s', animationDelay: '0.4s' }} />
                        </>
                      )}

                      {/* 3. The Industrial Drainage Grate (Steel Plate with multiple physically laid out dark water drain holes) */}
                      <div className="absolute inset-x-2 inset-y-[2px] rounded-full flex flex-col justify-between py-[2px] px-3 z-10 opacity-75 pointer-events-none">
                        
                        {/* Grate Slots Row 1 */}
                        <div className="flex justify-around items-center px-4">
                          <span className="w-[5px] h-[3px] bg-slate-950/90 rounded-full border-t border-white/10" />
                          <span className="w-[5px] h-[3px] bg-slate-950/90 rounded-full border-t border-white/10" />
                          <span className="w-[5px] h-[3px] bg-slate-950/90 rounded-full border-t border-white/10" />
                        </div>

                        {/* Grate Slots Row 2 (Middle, wider) */}
                        <div className="flex justify-around items-center px-1">
                          <span className="w-[5px] h-[3.5px] bg-slate-950/90 rounded-full border-t border-white/10" />
                          <span className="w-[5px] h-[3.5px] bg-slate-950/90 rounded-full border-t border-white/10" />
                          <span className="w-[6px] h-[4px] bg-slate-950/90 rounded-full border-t border-white/20 shadow-inner" /> {/* Main Center Drain Hole */}
                          <span className="w-[5px] h-[3.5px] bg-slate-950/90 rounded-full border-t border-white/10" />
                          <span className="w-[5px] h-[3.5px] bg-slate-950/90 rounded-full border-t border-white/10" />
                        </div>

                        {/* Grate Slots Row 3 */}
                        <div className="flex justify-around items-center px-4">
                          <span className="w-[5px] h-[3px] bg-slate-950/90 rounded-full border-t border-white/10" />
                          <span className="w-[5px] h-[3px] bg-slate-950/90 rounded-full border-t border-white/10" />
                          <span className="w-[5px] h-[3px] bg-slate-950/90 rounded-full border-t border-white/10" />
                        </div>

                      </div>

                    </div>
                  </div>

                  {/* 4. Active Interactive Label with state highlights */}
                  <div className={`absolute -bottom-7 flex flex-col items-center transition-all duration-300 ${
                    currentStage === 'stage7' ? 'scale-105' : ''
                  }`}>
                    <span className={`text-[10px] font-mono font-black tracking-widest uppercase transition-colors duration-200 ${
                      currentStage === 'stage7' ? 'text-emerald-400' : 'text-slate-300 group-hover:text-slate-200'
                    }`}>
                      DISCHARGE DRAINAGE
                    </span>
                    <span className="text-[8px] text-slate-400 font-mono font-bold uppercase tracking-wider">
                      NEUTRALIZATION ZONE
                    </span>
                  </div>

                  {/* 5. Fluid Water Fountain Splash Particle System exploding upwards from the drain holes */}
                  {isPlaying && (
                    <div className="absolute -top-[16px] w-[100px] h-[35px] flex items-end justify-center pointer-events-none z-20">
                      
                      {/* Water Foam splash core */}
                      <div className="absolute bottom-0 w-[24px] h-[12px] bg-sky-200/40 rounded-full blur-sm animate-pulse" />
                      
                      {/* Dynamic Splash droplets with staggered speeds & trajectories */}
                      <span className="absolute w-[4px] h-[8px] bg-sky-300/90 rounded-full animate-bounce left-[25px]" style={{ animationDuration: '0.45s', animationDelay: '0s' }} />
                      <span className="absolute w-[3.5px] h-[7px] bg-emerald-300/80 rounded-full animate-bounce left-[38px]" style={{ animationDuration: '0.55s', animationDelay: '0.1s' }} />
                      <span className="absolute w-[4.5px] h-[9px] bg-sky-200/95 rounded-full animate-bounce left-[48px]" style={{ animationDuration: '0.38s', animationDelay: '0.05s' }} />
                      <span className="absolute w-[3px] h-[6px] bg-purple-300/70 rounded-full animate-bounce left-[58px]" style={{ animationDuration: '0.62s', animationDelay: '0.15s' }} />
                      <span className="absolute w-[4px] h-[8px] bg-sky-300/90 rounded-full animate-bounce left-[70px]" style={{ animationDuration: '0.48s', animationDelay: '0.08s' }} />
                      
                      {/* Upward tiny bubble sparks */}
                      <span className="absolute w-[2px] h-[2px] bg-white rounded-full left-[30px] bottom-[15px] animate-ping" style={{ animationDuration: '0.7s' }} />
                      <span className="absolute w-[2px] h-[2px] bg-white rounded-full left-[65px] bottom-[18px] animate-ping" style={{ animationDuration: '0.9s', animationDelay: '0.2s' }} />
                    </div>
                  )}

                </div>
              </div>

              {/* SCHEMATIC COLOR KEY PANEL (Bottom Left) */}
              <div className="absolute left-[20px] bottom-[20px] bg-slate-900 border border-slate-800 rounded-2xl p-4 shadow-md w-[220px]">
                {/* Gold header block exactly like the image */}
                <div className="bg-amber-400/90 border border-amber-500 text-slate-950 font-sans font-black text-[12px] py-1 px-3 text-center rounded-lg uppercase tracking-wider mb-3 shadow-sm">
                  Color Key
                </div>
                
                <div className="grid grid-cols-2 gap-x-3 gap-y-2 text-[10px] font-sans font-black">
                  <div className="flex items-center space-x-2 text-slate-300">
                    <span className="h-5 w-6 bg-[#0ea5e9]/20 border border-[#0ea5e9] rounded flex items-center justify-center text-[10px] text-sky-400 font-black shadow-sm">SW</span>
                    <span className="leading-tight text-[9px] uppercase tracking-wide">SOURCE<br/>WATER</span>
                  </div>
                  <div className="flex items-center space-x-2 text-slate-300">
                    <span className="h-5 w-6 bg-red-500/20 border border-red-500 rounded flex items-center justify-center text-[10px] text-red-400 font-black shadow-sm">PH</span>
                    <span className="leading-tight text-[9px] uppercase tracking-wide">ACIDIC</span>
                  </div>
                  <div className="flex items-center space-x-2 text-slate-300">
                    <span className="h-5 w-6 bg-emerald-500/20 border border-emerald-500 rounded flex items-center justify-center text-[10px] text-emerald-400 font-black shadow-sm">pH</span>
                    <span className="leading-tight text-[9px] uppercase tracking-wide">NEUTRAL</span>
                  </div>
                  <div className="flex items-center space-x-2 text-slate-300">
                    <span className="h-5 w-6 bg-purple-500/20 border border-purple-500 rounded flex items-center justify-center text-[10px] text-purple-400 font-black shadow-sm">pH</span>
                    <span className="leading-tight text-[9px] uppercase tracking-wide">ALKALINE</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Master platform description footer panel */}
        <div className="max-w-5xl mx-auto mt-16">
          <div className="relative rounded-[2.5rem] p-6 sm:p-10 bg-slate-950 border border-slate-900 shadow-2xl overflow-hidden text-center md:text-left group">
            {/* Corner highlights */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-sky-500/20 rounded-tl-[2.5rem] pointer-events-none group-hover:border-sky-400 transition-colors duration-500" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-sky-500/20 rounded-br-[2.5rem] pointer-events-none group-hover:border-sky-400 transition-colors duration-500" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 sm:gap-8">
              <div className="p-4 bg-sky-500/10 rounded-2xl text-sky-400 shrink-0">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                The Hydrology Process Platform transforms readily available site water into a high-purity neutralizing agent via our proprietary <strong className="text-white font-semibold">Hydroxide Catalyst Reactor (HCR)</strong> and <strong className="text-white font-semibold">Electrochemical Hydroxide Generator (EHG)</strong> Module. This closed-loop system provides precise, adjustable pH control (7-12) on demand, completely eliminating the need for hazardous bulk caustic deliveries.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

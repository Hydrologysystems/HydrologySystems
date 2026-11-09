/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize2, 
  Share2, 
  Check, 
  ChevronLeft, 
  ChevronRight, 
  X,
  Sparkles,
  Info,
  RotateCcw,
  Sliders,
  Shield,
  FileVideo,
  CheckCircle2,
  Trash2
} from "lucide-react";

import { saveVideoBlob, deleteVideoBlob, getAllVideoBlobs } from "../utils/videoStorage";

import imageMedia1 from "../assets/images/regenerated_image_1789667219205.webp";
import imageMedia2 from "../assets/images/regenerated_image_1789667223199.webp";
import imageMedia3 from "../assets/images/regenerated_image_1789667584975.webp";
import imageMedia4 from "../assets/images/regenerated_image_1789667590159.webp";
import videoThumb2 from "../assets/images/video_reactors_battery_1789669241094.jpg";
import videoThumb3 from "../assets/images/video_facility_walkaround_1789669273389.jpg";

export interface MediaItem {
  id: string;
  type: "image" | "video";
  title: string;
  headerTitle: string;
  headerSubtitle: string;
  calloutBadge: string;
  thumbnailUrl: string;
  fullUrl: string;
  videoUrl?: string;
  videoDuration?: string;
  videoLabel?: string;
  description: string;
  specsSummary?: string;
}

const CLEARANCE_MEDIA: MediaItem[] = [
  // ================= 6 IMAGES =================
  {
    id: "media-img-1",
    type: "image",
    title: "Primary Skid Architecture",
    headerTitle: "Comprehensive Protection with Industrial Precision",
    headerSubtitle: "99% 304 stainless steel frame with 316 SS wetted hardware for harsh chemical environments.",
    calloutBadge: "304 SS Modular Skid",
    thumbnailUrl: imageMedia1,
    fullUrl: imageMedia1,
    description: "Full front elevation of the Model HAWS-120 showing all 6 stainless reactor vessels, integrated UV disinfection rack, and pre-wired controller mounting plate.",
    specsSummary: "14' L x 4' W x 7' H • 1,600 lbs empty • Standard pallet jack compatible"
  },
  {
    id: "media-img-2",
    type: "image",
    title: "Reactor Vessel Core",
    headerTitle: "Maximum Media Volume with Zero Channeling",
    headerSubtitle: "Six heavy-wall 304 SS reaction vessels with sanitary Tri-Clamp top & bottom ports.",
    calloutBadge: "6x Reaction Columns",
    thumbnailUrl: imageMedia2,
    fullUrl: imageMedia2,
    description: "Close-up view of the reaction columns holding up to 3,000 lbs of high-capacity alkalinity generating media with precision flow distribution.",
    specsSummary: "3,000 lbs media capacity • True Tri-Clamp fittings • 150 PSI test rating"
  },
  {
    id: "media-img-3",
    type: "image",
    title: "Filtration & UV Stage",
    headerTitle: "53 Ultra-Fine Cartridges + 4 UV Disinfection Lamps",
    headerSubtitle: "Multi-stage polishing down to 0.05-micron with 12 ft continuous ultraviolet exposure.",
    calloutBadge: "0.05µ Polish & UV",
    thumbnailUrl: imageMedia3,
    fullUrl: imageMedia3,
    description: "Detail of the 53 high-efficiency cartridge filter bank and 4 integrated UV sterilization tubes ensuring pure 10–33 TDS output.",
    specsSummary: "53 filter housings • 4 UV lamps (12 ft exposure) • Sanitary sampling valves"
  },
  {
    id: "media-img-4",
    type: "image",
    title: "Walchem HMI & Controls",
    headerTitle: "Precision Web-Master & Touchscreen Control",
    headerSubtitle: "Pre-wired industrial PLC enclosure ready for closed-loop pH and flow rate integration.",
    calloutBadge: "Walchem + 12\" HMI",
    thumbnailUrl: imageMedia4,
    fullUrl: imageMedia4,
    description: "Control interface featuring Walchem Web-Master One and Automation Direct 12-inch touchscreen with manual bypass switches.",
    specsSummary: "110V, 40A max draw • Ethernet/Modbus capability • Auto/Manual toggles"
  },
  {
    id: "media-img-5",
    type: "image",
    title: "Sanitary Manifold & Piping",
    headerTitle: "316 Stainless Steel Tri-Clamp Flow Distribution",
    headerSubtitle: "Seamless sanitary welds, isolation valves, and calibrated flow-meter ports.",
    calloutBadge: "75 GPM Flow Header",
    thumbnailUrl: "https://res.cloudinary.com/krul0atu/image/upload/v1789750828/HAWS-120-3.jpg",
    fullUrl: "https://res.cloudinary.com/krul0atu/image/upload/v1789750828/HAWS-120-3.jpg",
    description: "Inspection of the bottom discharge header, pressure relief loops, and rapid-clean drain ports for zero downtime sanitization.",
    specsSummary: "2\" sanitary inlet/outlet • Pressure rated to 125 PSI continuous"
  },
  {
    id: "media-img-6",
    type: "image",
    title: "Engineering Schematics (+4)",
    headerTitle: "P&ID Schematics, CAD Blueprints & Manuals",
    headerSubtitle: "Complete original technical documentation, wiring schematics, and water analysis logs.",
    calloutBadge: "Full CAD & P&ID",
    thumbnailUrl: "https://res.cloudinary.com/krul0atu/image/upload/v1789750828/HAAWS-120-1.jpg",
    fullUrl: "https://res.cloudinary.com/krul0atu/image/upload/v1789750828/HAAWS-120-1.jpg",
    description: "Certified documentation packet including FDA Title 21 water validation test results, electrical ladder diagrams, and spare parts catalog.",
    specsSummary: "Full documentation binder • Title 21 certified • Spare O-ring kit included"
  },

  // ================= 2 VIDEOS =================
  {
    id: "media-vid-2",
    type: "video",
    title: "Video 1: 6-Reactor Battery & Process Demo",
    headerTitle: "Multi-Column Reactor Vessels & Acid Neutralization Flow",
    headerSubtitle: "Detailed inspection of Reactors 1 through 6, sanitary Tri-Clamp distribution manifolds, flow directional arrows, and live HMI process screen.",
    calloutBadge: "6 Reactors + Process (00:51)",
    thumbnailUrl: videoThumb2,
    fullUrl: videoThumb2,
    videoUrl: "https://res.cloudinary.com/krul0atu/video/upload/v1789752505/HAWS-120_VIDEO_DEMO_1.mp4",
    videoDuration: "00:51",
    videoLabel: "Reactor Battery",
    description: "Inspection tour along the 6-reactor battery showing mirror-finish stainless steel vessel columns, sanitary Tri-Clamp distribution manifolds, and live touch HMI monitoring the 'Hydrology Acid Neutralization Process'.",
    specsSummary: "6 stainless reaction columns • Tri-Clamp manifolds • HMI process graphic • High-volume neutralizer"
  },
  {
    id: "media-vid-3",
    type: "video",
    title: "Video 2: Full Facility & Skid Walkaround",
    headerTitle: "360° Facility Floor & High-Angle Skid Inspection",
    headerSubtitle: "Complete plant floor walkaround showing full 8-reactor skid footprint, yellow power module, pressure gauges, and cleanroom staging.",
    calloutBadge: "360° Facility Tour (01:36)",
    thumbnailUrl: videoThumb3,
    fullUrl: videoThumb3,
    videoUrl: "https://res.cloudinary.com/krul0atu/video/upload/v1789753225/RAW_VIDEO_DEMO_1.mp4",
    videoDuration: "01:36",
    videoLabel: "Plant Walkaround",
    description: "Comprehensive facility walkthrough showing the 8-reactor skid architecture, auxiliary yellow power module, pneumatic actuators, operator station with emergency stop, and full-plant elevated view.",
    specsSummary: "Full 8-reactor layout • Auxiliary power unit • High-angle facility perspective • Industrial footprint"
  }
];

export default function ClearanceMediaGallery() {
  const firstVideoIndex = CLEARANCE_MEDIA.findIndex((m) => m.type === "video");
  const [selectedIndex, setSelectedIndex] = useState(firstVideoIndex !== -1 ? firstVideoIndex : 0);
  const [activeFilter, setActiveFilter] = useState<"all" | "image" | "video">("all");
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [copiedShare, setCopiedShare] = useState(false);
  
  // Video player state
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [videoProgress, setVideoProgress] = useState(18); // percentage

  // Refs for scroll and DOM tracking
  const galleryContainerRef = useRef<HTMLDivElement | null>(null);
  const thumbnailStripRef = useRef<HTMLDivElement | null>(null);
  const thumbItemRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // Custom uploaded videos state (persisted via IndexedDB)
  const [customVideos, setCustomVideos] = useState<Record<string, { url: string; name: string; size: number }>>({});
  const [isUploading, setIsUploading] = useState(false);
  const [isDraggingOver, setIsDraggingOver] = useState(false);
  const fileInputRefs = useRef<Record<string, HTMLInputElement | null>>({});
  const videoPlayerRef = useRef<HTMLVideoElement | null>(null);

  // Auto-switch to and play video once scrolled into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const firstVidIdx = CLEARANCE_MEDIA.findIndex((m) => m.type === "video");
            if (firstVidIdx !== -1) {
              setSelectedIndex((prev) => {
                // If user was on an image, ensure the video is displayed once scrolled down here
                if (CLEARANCE_MEDIA[prev]?.type !== "video") {
                  return firstVidIdx;
                }
                return prev;
              });
            }
            setIsPlaying(true);
            if (videoPlayerRef.current) {
              videoPlayerRef.current.muted = true;
              videoPlayerRef.current.play().catch(() => {});
            }
          }
        });
      },
      { threshold: 0.15 }
    );

    if (galleryContainerRef.current) {
      observer.observe(galleryContainerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Smooth scroll thumbnail strip to keep the active video/image thumbnail centered
  useEffect(() => {
    const currentItem = CLEARANCE_MEDIA[selectedIndex];
    if (currentItem && thumbItemRefs.current[currentItem.id]) {
      thumbItemRefs.current[currentItem.id]?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [selectedIndex]);

  // Load custom videos from IndexedDB
  useEffect(() => {
    let isMounted = true;
    getAllVideoBlobs().then((blobs) => {
      if (!isMounted) return;
      const loaded: Record<string, { url: string; name: string; size: number }> = {};
      Object.entries(blobs).forEach(([id, blob]) => {
        const url = URL.createObjectURL(blob);
        loaded[id] = {
          url,
          name: `${id}.mp4`,
          size: blob.size
        };
      });
      setCustomVideos(loaded);
    });

    return () => {
      isMounted = false;
    };
  }, []);

  const handleVideoUpload = async (mediaId: string, file: File) => {
    if (!file) return;
    setIsUploading(true);
    try {
      await saveVideoBlob(mediaId, file);
      const url = URL.createObjectURL(file);
      setCustomVideos((prev) => ({
        ...prev,
        [mediaId]: {
          url,
          name: file.name,
          size: file.size
        }
      }));
      const targetIdx = CLEARANCE_MEDIA.findIndex((m) => m.id === mediaId);
      if (targetIdx !== -1) {
        setSelectedIndex(targetIdx);
      }
      setIsPlaying(true);
    } catch (err) {
      console.error("Error saving video:", err);
    } finally {
      setIsUploading(false);
    }
  };

  const handleBatchUpload = async (files: FileList | File[]) => {
    if (!files || files.length === 0) return;
    setIsUploading(true);
    try {
      const videoItems = CLEARANCE_MEDIA.filter(m => m.type === "video");
      const videoMediaIds = videoItems.map(m => m.id);
      const fileArray = Array.from(files).slice(0, videoMediaIds.length);
      const newVideos = { ...customVideos };

      for (let i = 0; i < fileArray.length; i++) {
        const mediaId = videoMediaIds[i];
        const file = fileArray[i];
        await saveVideoBlob(mediaId, file);
        const url = URL.createObjectURL(file);
        newVideos[mediaId] = {
          url,
          name: file.name,
          size: file.size
        };
      }
      setCustomVideos(newVideos);
      const firstVidIdx = CLEARANCE_MEDIA.findIndex((m) => m.type === "video");
      if (firstVidIdx !== -1) {
        setSelectedIndex(firstVidIdx);
      }
      setIsPlaying(true);
    } catch (err) {
      console.error("Batch upload failed:", err);
    } finally {
      setIsUploading(false);
    }
  };

  const handleRemoveVideo = async (mediaId: string) => {
    await deleteVideoBlob(mediaId);
    setCustomVideos((prev) => {
      const next = { ...prev };
      delete next[mediaId];
      return next;
    });
  };

  const currentMedia = CLEARANCE_MEDIA[selectedIndex] || CLEARANCE_MEDIA[0];

  const totalImages = CLEARANCE_MEDIA.filter(m => m.type === "image").length;
  const totalVideos = CLEARANCE_MEDIA.filter(m => m.type === "video").length;

  // Filtered media list
  const displayedMedia = CLEARANCE_MEDIA.filter(item => {
    if (activeFilter === "image") return item.type === "image";
    if (activeFilter === "video") return item.type === "video";
    return true;
  });

  // Handle simulated video playback progress
  useEffect(() => {
    let timer: any;
    if (currentMedia.type === "video" && isPlaying) {
      timer = setInterval(() => {
        setVideoProgress((prev) => (prev >= 100 ? 0 : prev + 1));
      }, 300);
    }
    return () => clearInterval(timer);
  }, [currentMedia.type, isPlaying]);

  // Handle Escape key to exit full view modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isLightboxOpen) {
        setIsLightboxOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isLightboxOpen]);

  const handleShareClick = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedShare(true);
    setTimeout(() => setCopiedShare(false), 2200);
  };

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev === 0 ? CLEARANCE_MEDIA.length - 1 : prev - 1));
    setIsPlaying(false);
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev === CLEARANCE_MEDIA.length - 1 ? 0 : prev + 1));
    setIsPlaying(false);
  };

  const totalSeconds = useMemo(() => {
    if (!currentMedia.videoDuration) return 60;
    const parts = currentMedia.videoDuration.split(":").map(Number);
    if (parts.length === 2 && !isNaN(parts[0]) && !isNaN(parts[1])) {
      return parts[0] * 60 + parts[1];
    }
    return 60;
  }, [currentMedia.videoDuration]);

  const currentSeconds = Math.floor((videoProgress / 100) * totalSeconds);
  const formatDuration = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  return (
    <div ref={galleryContainerRef} className="w-full max-w-7xl mx-auto bg-white rounded-3xl border border-[#DCE2EB] shadow-xl p-6 sm:p-8 md:p-10 lg:p-12 relative overflow-hidden">
      
      {/* Decorative ambient background glows */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#0066FF]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      {/* Gallery Header Info */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 mb-5 border-b border-[#DCE2EB] relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0066FF]/10 border border-[#0066FF]/20 text-[#0066FF] text-xs font-mono font-bold tracking-wider uppercase mb-2">
            <span className="w-2 h-2 rounded-full bg-[#0066FF] animate-pulse" />
            <span>EQUIPMENT ASSET GALLERY • {totalImages} IMAGES &amp; {totalVideos} VIDEOS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-[#101828] tracking-tight">
            Full Visual &amp; Technical Inspection Gallery
          </h2>
          <p className="text-sm sm:text-base text-[#667085] mt-1 max-w-2xl">
            Click any thumbnail below to inspect full skid architecture, reaction vessel columns, electrical controls, and {totalVideos} factory run-test videos.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <span className="text-xs sm:text-sm font-mono text-[#667085] bg-[#F4F6FA] px-3.5 py-1.5 rounded-full border border-[#DCE2EB] shadow-xs">
            Viewing Asset #{selectedIndex + 1} of {CLEARANCE_MEDIA.length} • {currentMedia.type === "video" ? "Video Run Test" : "Inspection Photo"}
          </span>
          <button
            onClick={() => setIsLightboxOpen(true)}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#080B12] hover:bg-black text-white text-xs sm:text-sm font-medium transition-colors shadow-sm cursor-pointer"
          >
            <Maximize2 className="w-3.5 h-3.5 text-[#0066FF]" />
            <span>Fullscreen Mode</span>
          </button>
        </div>
      </div>

      {/* Media Type Filter Tabs & Batch Video Upload Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6 relative z-10">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveFilter("all")}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold cursor-pointer transition-all ${
              activeFilter === "all"
                ? "bg-[#0066FF] text-white shadow-xs"
                : "bg-[#F4F6FA] text-[#667085] hover:bg-[#DCE2EB]"
            }`}
          >
            All Assets ({CLEARANCE_MEDIA.length})
          </button>
          <button
            onClick={() => {
              setActiveFilter("image");
              if (CLEARANCE_MEDIA[selectedIndex]?.type !== "image") {
                setSelectedIndex(0);
                setIsPlaying(false);
              }
            }}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold cursor-pointer transition-all ${
              activeFilter === "image"
                ? "bg-[#0066FF] text-white shadow-xs"
                : "bg-[#F4F6FA] text-[#667085] hover:bg-[#DCE2EB]"
            }`}
          >
            {totalImages} Images
          </button>
          <button
            onClick={() => {
              setActiveFilter("video");
              if (CLEARANCE_MEDIA[selectedIndex]?.type !== "video") {
                const firstVid = CLEARANCE_MEDIA.findIndex(m => m.type === "video");
                if (firstVid !== -1) {
                  setSelectedIndex(firstVid);
                  setIsPlaying(true);
                }
              }
            }}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold cursor-pointer transition-all flex items-center gap-1.5 ${
              activeFilter === "video"
                ? "bg-[#0066FF] text-white shadow-xs"
                : "bg-[#F4F6FA] text-[#667085] hover:bg-[#DCE2EB]"
            }`}
          >
            <Play className="w-2.5 h-2.5 fill-current" />
            <span>{totalVideos} Videos</span>
          </button>
        </div>
      </div>

      {/* Main Grid: Left Thumbnails + Center Main Display */}
      <div className="flex flex-col lg:flex-row gap-5 sm:gap-8 lg:gap-10 items-start justify-center relative z-10">
        
        {/* ================= LEFT THUMBNAILS COLUMN ================= */}
        {/* Mobile: Horizontal scroll / Desktop: Large Vertical column */}
        <div ref={thumbnailStripRef} className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-x-visible pb-3 lg:pb-0 w-full lg:w-auto shrink-0 justify-start items-center lg:items-start order-2 lg:order-1 scroll-smooth">
          {displayedMedia.map((item) => {
            const originalIndex = CLEARANCE_MEDIA.findIndex(m => m.id === item.id);
            const isSelected = selectedIndex === originalIndex;
            const isVideo = item.type === "video";
            const isMoreCard = item.id === "media-img-6";
            const hasCustomVideo = isVideo && !!customVideos[item.id];
            const hasActiveVideo = isVideo && (!!customVideos[item.id] || !!item.videoUrl);

            return (
              <div key={item.id} ref={(el) => { thumbItemRefs.current[item.id] = el; }} className="relative shrink-0">
                {/* Hidden file input for this video slot */}
                {isVideo && (
                  <input
                    type="file"
                    ref={(el) => { fileInputRefs.current[item.id] = el; }}
                    accept="video/mp4,video/quicktime,video/webm,video/*"
                    className="hidden"
                    onChange={(e) => {
                      if (e.target.files?.[0]) {
                        handleVideoUpload(item.id, e.target.files[0]);
                      }
                    }}
                  />
                )}

                <button
                  onClick={() => {
                    setSelectedIndex(originalIndex);
                    if (isVideo) {
                      setIsPlaying(true);
                    } else {
                      setIsPlaying(false);
                    }
                  }}
                  onDragOver={(e) => {
                    if (isVideo) {
                      e.preventDefault();
                      e.dataTransfer.dropEffect = "copy";
                    }
                  }}
                  onDrop={(e) => {
                    if (isVideo && e.dataTransfer.files?.[0]) {
                      e.preventDefault();
                      handleVideoUpload(item.id, e.dataTransfer.files[0]);
                    }
                  }}
                  className={`group relative w-16 h-16 sm:w-20 sm:h-20 lg:w-22 lg:h-22 rounded-xl sm:rounded-2xl overflow-hidden border-2 transition-all cursor-pointer block focus:outline-none ${
                    isSelected 
                      ? "border-[#0066FF] ring-4 ring-[#0066FF]/30 shadow-lg scale-102" 
                      : hasActiveVideo
                      ? "border-[#0066FF]/80 hover:border-[#0066FF] bg-[#080B12] shadow-sm"
                      : "border-[#DCE2EB] hover:border-[#0066FF] hover:shadow-md bg-[#F4F6FA] opacity-85 hover:opacity-100"
                  }`}
                  title={isVideo ? `${item.title} (Click to play, drop video file to upload)` : item.title}
                  aria-label={`View ${item.title}`}
                >
                  {/* Thumbnail Image */}
                  <img
                    src={item.thumbnailUrl}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    className={`w-full h-full object-cover transition-transform duration-300 ${
                      isSelected ? "scale-105 brightness-100" : "group-hover:scale-105 brightness-95"
                    }`}
                    referrerPolicy="no-referrer"
                  />

                  {/* "+4" More Indicator Badge overlay */}
                  {isMoreCard && (
                    <div className="absolute inset-0 bg-black/75 flex items-center justify-center text-white font-mono font-bold text-sm sm:text-base tracking-wider">
                      4+
                    </div>
                  )}

                  {/* Video Play Badge overlay (Amazon Style) */}
                  {isVideo && (
                    <>
                      <div className="absolute inset-0 bg-black/45 flex flex-col items-center justify-center text-white">
                        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/95 text-black flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                          <Play className="w-3.5 h-3.5 fill-black translate-x-0.3" />
                        </div>
                      </div>

                      {/* Video Status Badge */}
                      {hasCustomVideo ? (
                        <span className="absolute top-1 right-1 bg-[#0066FF] text-white text-[8px] font-mono font-bold px-1 py-0.5 rounded leading-none flex items-center gap-0.5 shadow-sm">
                          <CheckCircle2 className="w-2.5 h-2.5" /> MP4
                        </span>
                      ) : item.videoUrl ? (
                        <span className="absolute top-1 right-1 bg-[#0066FF] text-white text-[8px] font-mono font-bold px-1.5 py-0.5 rounded leading-none flex items-center gap-0.5 shadow-sm">
                          <Play className="w-2 h-2 fill-white" /> MP4
                        </span>
                      ) : (
                        <span className="absolute top-1 right-1 bg-[#0066FF] text-white text-[8px] font-mono font-bold px-1.5 py-0.5 rounded leading-none flex items-center gap-0.5 shadow-sm">
                          <Play className="w-2 h-2 fill-white" /> MP4
                        </span>
                      )}

                      {item.videoDuration && (
                        <span className="absolute bottom-1 right-1 bg-black/80 text-white text-[9px] font-mono px-1 py-0.5 rounded leading-none">
                          {item.videoDuration}
                        </span>
                      )}
                    </>
                  )}

                  {/* Selection indicator pill */}
                  {isSelected && (
                    <div className="absolute top-1.5 left-1.5 w-2 h-2 rounded-full bg-[#0066FF] ring-2 ring-white" />
                  )}
                </button>
              </div>
            );
          })}

          {/* Video Count indicator badge under the video thumbs */}
          <div className="hidden lg:flex flex-col items-center justify-center w-22 pt-1.5">
            <span className="text-xs font-mono font-bold text-[#0066FF] bg-[#0066FF]/10 px-2 py-1 rounded-md border border-[#0066FF]/20 uppercase tracking-tight text-center leading-tight shadow-xs">
              {totalVideos} VIDEOS<br />
              {Object.keys(customVideos).length > 0 ? (
                <span className="text-[#0066FF] text-[10px]">
                  {Object.keys(customVideos).length}/{totalVideos} ACTIVE
                </span>
              ) : (
                "AVAILABLE"
              )}
            </span>
          </div>
        </div>

        {/* ================= RIGHT / MAIN DISPLAY VIEWPORT ================= */}
        <div className="flex-1 w-full relative flex flex-col items-center order-1 lg:order-2">
          
          <div 
            className="relative w-full max-w-4xl aspect-[16/10] sm:aspect-[16/10] md:aspect-[16/10] min-h-[440px] sm:min-h-[520px] md:min-h-[600px] rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-950 border border-slate-200/90 shadow-2xl group"
          >
            {/* Share Button (Top Right) */}
            <div className="absolute top-4 right-4 z-30">
              <button
                onClick={handleShareClick}
                className="w-10 h-10 rounded-full bg-white/90 hover:bg-white text-slate-800 hover:text-slate-950 shadow-md border border-slate-200/80 flex items-center justify-center transition-all cursor-pointer"
                title="Share or Copy Link"
                aria-label="Share"
              >
                {copiedShare ? (
                  <Check className="w-4 h-4 text-emerald-600" />
                ) : (
                  <Share2 className="w-4 h-4" />
                )}
              </button>
              {copiedShare && (
                <div className="absolute top-12 right-0 bg-slate-900 text-white text-xs font-mono px-2.5 py-1 rounded shadow-lg whitespace-nowrap">
                  Link Copied!
                </div>
              )}
            </div>

            {/* Navigation Arrows for convenient browsing */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/85 hover:bg-white text-slate-900 shadow-lg flex items-center justify-center opacity-80 hover:opacity-100 transition-all cursor-pointer"
              title="Previous Media"
              aria-label="Previous Media"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/85 hover:bg-white text-slate-900 shadow-lg flex items-center justify-center opacity-80 hover:opacity-100 transition-all cursor-pointer"
              title="Next Media"
              aria-label="Next Media"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Content Display: Image vs Video */}
            <AnimatePresence mode="wait">
              {currentMedia.type === "image" ? (
                /* ============= IMAGE DISPLAY MODE ============= */
                <motion.div
                  key={currentMedia.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full relative flex items-center justify-center cursor-pointer"
                  onClick={() => setIsLightboxOpen(true)}
                >
                  {/* Background High-Res Image */}
                  <img
                    src={currentMedia.fullUrl}
                    alt={currentMedia.title}
                    decoding="async"
                    className="w-full h-full object-cover select-none filter contrast-[1.05]"
                    referrerPolicy="no-referrer"
                  />

                  {/* Gradient overlays for readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/60 pointer-events-none" />

                  {/* Top Overlay Banner (Matching user screenshot: "Comprehensive Protection with No Angles Missed...") */}
                  <div className="absolute top-4 sm:top-6 left-4 sm:left-6 right-16 sm:right-20 z-20 pointer-events-none">
                    <div className="p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-lg text-left max-w-2xl">
                      <h3 className="font-serif text-slate-900 text-base sm:text-xl md:text-2xl font-bold leading-snug">
                        {currentMedia.headerTitle}
                      </h3>
                      <p className="text-xs sm:text-sm md:text-base text-slate-600 mt-1.5 leading-relaxed">
                        {currentMedia.headerSubtitle}
                      </p>
                    </div>
                  </div>

                  {/* Bottom-Left Feature Callout Badge (Matching user screenshot: "4D U-Shape Inlet" badge) */}
                  <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 z-20 pointer-events-none">
                    <div className="flex items-center gap-2.5 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-[#080B12]/95 border border-[#0066FF]/50 text-white shadow-2xl backdrop-blur-md">
                      <span className="font-display font-black text-sm sm:text-lg tracking-wider text-[#0066FF] border-r border-[#0066FF]/40 pr-2.5">
                        HAWS-120
                      </span>
                      <div className="flex flex-col text-left">
                        <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white leading-tight">
                          {currentMedia.calloutBadge}
                        </span>
                        <span className="text-[10px] sm:text-xs font-mono text-blue-200 leading-tight">
                          Certified Skid Sub-Assembly
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Hover Zoom Hint */}
                  <div className="absolute inset-0 bg-[#0066FF]/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                    <span className="bg-[#080B12]/90 backdrop-blur-md text-white px-4 py-2 rounded-full text-xs sm:text-sm font-mono font-bold flex items-center gap-2 border border-white/20 shadow-xl">
                      <Maximize2 className="w-4 h-4 text-[#0066FF]" />
                      <span>Click for Fullscreen Inspection</span>
                    </span>
                  </div>
                </motion.div>
              ) : (
                /* ============= VIDEO DISPLAY MODE ============= */
                <motion.div
                  key={currentMedia.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  onDragOver={(e) => {
                    e.preventDefault();
                    setIsDraggingOver(true);
                  }}
                  onDragLeave={() => setIsDraggingOver(false)}
                  onDrop={(e) => {
                    e.preventDefault();
                    setIsDraggingOver(false);
                    if (e.dataTransfer.files?.[0]) {
                      handleVideoUpload(currentMedia.id, e.dataTransfer.files[0]);
                    }
                  }}
                  className="w-full h-full relative flex flex-col justify-between bg-slate-950 overflow-hidden"
                >
                  {/* If custom video or configured video stream is available, play real HTML5 video */}
                  {(customVideos[currentMedia.id]?.url || currentMedia.videoUrl) ? (
                    <div className="relative w-full h-full flex items-center justify-center bg-black">
                      <video
                        key={customVideos[currentMedia.id]?.url || currentMedia.videoUrl}
                        ref={videoPlayerRef}
                        src={customVideos[currentMedia.id]?.url || currentMedia.videoUrl}
                        poster={currentMedia.fullUrl}
                        controls
                        autoPlay
                        muted={isMuted}
                        playsInline
                        className="w-full h-full object-contain"
                        onPlay={() => setIsPlaying(true)}
                        onPause={() => setIsPlaying(false)}
                      />

                      {/* Unmute floating trigger button */}
                      {isMuted && (
                        <button
                          type="button"
                          onClick={() => {
                            setIsMuted(false);
                            if (videoPlayerRef.current) {
                              videoPlayerRef.current.muted = false;
                            }
                          }}
                          className="absolute bottom-16 right-4 z-30 px-3.5 py-1.5 rounded-full bg-slate-950/85 hover:bg-slate-900 border border-teal-500/60 text-teal-300 hover:text-white font-mono text-xs flex items-center gap-2 shadow-lg backdrop-blur-md transition-all cursor-pointer pointer-events-auto"
                        >
                          <VolumeX className="w-4 h-4 text-rose-400" />
                          <span>Click to Unmute Audio</span>
                        </button>
                      )}

                      {/* Top Bar Floating Status for Video */}
                      <div className="absolute top-4 left-4 right-4 z-30 flex flex-wrap items-center justify-between gap-2 pointer-events-none">
                        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950/85 backdrop-blur-md border border-emerald-500/50 shadow-lg text-xs font-mono text-white pointer-events-auto">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                          <span className="font-bold text-emerald-300">
                            {customVideos[currentMedia.id] ? "CUSTOM VIDEO ACTIVE:" : "FACTORY DEMO FOOTAGE:"}
                          </span>
                          <span className="truncate max-w-[140px] sm:max-w-[220px] text-slate-200">
                            {customVideos[currentMedia.id]?.name || (currentMedia.videoUrl ? currentMedia.videoUrl.split("/").pop() : "VIDEO_DEMO.mp4")}
                          </span>
                          {customVideos[currentMedia.id] && (
                            <span className="text-slate-400 text-[10px]">
                              ({(customVideos[currentMedia.id].size / (1024 * 1024)).toFixed(1)} MB)
                            </span>
                          )}
                        </div>

                        {customVideos[currentMedia.id] && (
                          <div className="flex items-center gap-2 pointer-events-auto">
                            <button
                              type="button"
                              onClick={() => handleRemoveVideo(currentMedia.id)}
                              className="px-2.5 py-1.5 rounded-full bg-slate-900/90 hover:bg-rose-600 text-slate-300 hover:text-white border border-slate-700 text-xs font-mono transition-colors shadow-md cursor-pointer"
                              title="Remove uploaded video file"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  ) : (
                    <>
                      {/* Background Video Poster / Frame */}
                      <div className="absolute inset-0 z-0">
                        <img
                          src={currentMedia.fullUrl}
                          alt="Video Poster"
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover opacity-60 filter brightness-90"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/70" />
                      </div>

                      {/* Video Top Banner */}
                      <div className="relative z-20 p-4 sm:p-6 text-left">
                        <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80 shadow-lg max-w-xl">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                            <span className="text-[11px] font-mono uppercase tracking-wider text-rose-400 font-bold">
                              FACTORY ACCEPTANCE TEST FOOTAGE
                            </span>
                          </div>
                          <h3 className="text-base sm:text-lg font-bold text-white leading-tight">
                            {currentMedia.headerTitle}
                          </h3>
                          <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                            {currentMedia.headerSubtitle}
                          </p>
                        </div>
                      </div>

                      {/* Drag and Drop Upload Dropzone Overlay */}
                      <div className="relative z-20 px-4 sm:px-6 my-auto flex flex-col items-center">
                        <div className="w-full max-w-xl p-6 rounded-2xl bg-[#080B12]/90 border border-slate-700/80 shadow-2xl backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-[#0066FF]/20 border border-[#0066FF]/40 flex items-center justify-center text-[#0066FF] shrink-0">
                              <Play className="w-6 h-6 fill-current" />
                            </div>
                            <div>
                              <div className="flex items-center gap-2 justify-center sm:justify-start">
                                <span className="text-white font-mono font-bold text-sm sm:text-base">
                                  {currentMedia.title}
                                </span>
                              </div>
                              <p className="text-xs text-slate-300 mt-1">
                                {currentMedia.description}
                              </p>
                            </div>
                          </div>

                          <button
                            type="button"
                            onClick={() => setIsPlaying(true)}
                            className="px-4 py-2 rounded-xl bg-[#0066FF] hover:bg-[#0052cc] text-white text-xs font-mono font-bold uppercase tracking-wider transition-all shadow-md shrink-0 cursor-pointer flex items-center gap-2"
                          >
                            <Play className="w-3.5 h-3.5 fill-current" />
                            <span>Play Video</span>
                          </button>
                        </div>

                        {/* Or Play Simulation Indicator */}
                        <div className="mt-4 flex items-center gap-3">
                          <button
                            onClick={() => setIsPlaying(!isPlaying)}
                            className="px-4 py-1.5 rounded-full bg-slate-900/90 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white font-mono text-xs flex items-center gap-2 cursor-pointer shadow-md"
                          >
                            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
                            <span>{isPlaying ? "Pause Factory Simulation" : "Preview Factory Walkthrough Simulation"}</span>
                          </button>
                        </div>
                      </div>

                      {/* Video Bottom Player Control Bar */}
                      <div className="relative z-20 p-4 sm:p-5 bg-gradient-to-t from-slate-950 to-transparent">
                        {/* Progress Bar */}
                        <div 
                          className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden mb-3 cursor-pointer"
                          onClick={(e) => {
                            const rect = e.currentTarget.getBoundingClientRect();
                            const clickX = e.clientX - rect.left;
                            const newPct = Math.max(0, Math.min(100, Math.round((clickX / rect.width) * 100)));
                            setVideoProgress(newPct);
                          }}
                        >
                          <div 
                            className="h-full bg-gradient-to-r from-teal-400 to-emerald-400 transition-all duration-150"
                            style={{ width: `${videoProgress}%` }}
                          />
                        </div>

                        <div className="flex items-center justify-between text-xs sm:text-sm font-mono text-slate-300">
                          <div className="flex items-center gap-3">
                            <button
                              onClick={() => setIsPlaying(!isPlaying)}
                              className="hover:text-white transition-colors cursor-pointer"
                            >
                              {isPlaying ? <Pause className="w-4 h-4 sm:w-5 sm:h-5" /> : <Play className="w-4 h-4 sm:w-5 sm:h-5" />}
                            </button>
                            <button
                              onClick={() => setIsMuted(!isMuted)}
                              className="hover:text-white transition-colors cursor-pointer"
                            >
                              {isMuted ? <VolumeX className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400" /> : <Volume2 className="w-4 h-4 sm:w-5 sm:h-5 text-teal-400" />}
                            </button>
                            <span className="text-xs font-mono">
                              {formatDuration(currentSeconds)} / {currentMedia.videoDuration || "01:00"}
                            </span>
                          </div>

                          <div className="flex items-center gap-3">
                            <span className="text-xs bg-teal-500/20 text-teal-300 px-2.5 py-1 rounded border border-teal-500/40">
                              {currentMedia.calloutBadge}
                            </span>
                            <button 
                              onClick={() => setIsLightboxOpen(true)}
                              className="hover:text-white transition-colors cursor-pointer"
                              title="Fullscreen View"
                            >
                              <Maximize2 className="w-4 h-4 sm:w-5 sm:h-5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ================= BOTTOM "CLICK TO SEE FULL VIEW" (MATCHING SCREENSHOT) ================= */}
          <button
            onClick={() => setIsLightboxOpen(true)}
            id="clearance-full-view-btn"
            className="mt-4 inline-flex items-center gap-2 text-teal-700 hover:text-teal-900 text-sm sm:text-base font-semibold underline underline-offset-4 decoration-teal-400/80 cursor-pointer transition-colors text-center group"
          >
            <Maximize2 className="w-4 h-4 text-teal-600 group-hover:scale-110 transition-transform" />
            <span>Click to see full view (Fullscreen Lightbox &amp; Blueprint Zoom)</span>
          </button>

          {/* Asset Technical Subtext */}
          <div className="mt-2 text-center text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
            <span><strong>{currentMedia.title}:</strong> {currentMedia.description}</span>
          </div>

        </div>

      </div>

      {/* ================= LIGHTBOX MODAL ================= */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6"
            onClick={() => setIsLightboxOpen(false)}
          >
            {/* Modal Header Bar */}
            <div 
              className="flex items-center justify-between text-white pb-3 border-b border-slate-800"
              onClick={(e) => e.stopPropagation()}
            >
              <div>
                <span className="text-xs font-mono uppercase text-teal-400 block font-bold">
                  MODEL HAWS-120 • FULL VIEW INSPECTION
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white">
                  {currentMedia.title}
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsLightboxOpen(false)}
                  id="lightbox-header-exit-btn"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-rose-600/90 hover:bg-rose-600 text-white text-xs font-mono font-bold tracking-wider uppercase transition-colors shadow-sm cursor-pointer"
                  title="Exit Full View (Esc)"
                  aria-label="Exit Full View"
                >
                  <X className="w-4 h-4" />
                  <span>EXIT (ESC)</span>
                </button>
              </div>
            </div>

            {/* Modal Center Media Stage */}
            <div 
              className="flex-1 flex items-center justify-center relative my-4 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Prominent Floating Exit Button on Stage */}
              <button
                onClick={() => setIsLightboxOpen(false)}
                id="clearance-lightbox-exit-btn"
                className="absolute top-2 right-2 sm:top-4 sm:right-4 z-30 inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-full bg-slate-900/90 hover:bg-rose-600 text-white border border-slate-700/80 hover:border-rose-500 shadow-2xl backdrop-blur-md text-xs sm:text-sm font-mono font-bold uppercase tracking-wider transition-all hover:scale-105 cursor-pointer group"
                title="Exit Full View (Esc)"
                aria-label="Exit Full View"
              >
                <X className="w-4 h-4 text-slate-300 group-hover:text-white group-hover:rotate-90 transition-transform" />
                <span>EXIT FULL VIEW</span>
              </button>

              {/* Prev / Next controls inside modal */}
              <button
                onClick={handlePrev}
                className="absolute left-2 sm:left-4 z-20 w-11 h-11 rounded-full bg-slate-900/80 hover:bg-teal-600 text-white border border-slate-700 flex items-center justify-center transition-all cursor-pointer"
                title="Previous item"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-2 sm:right-4 z-20 w-11 h-11 rounded-full bg-slate-900/80 hover:bg-teal-600 text-white border border-slate-700 flex items-center justify-center transition-all cursor-pointer"
                title="Next item"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {currentMedia.type === "image" ? (
                <img
                  src={currentMedia.fullUrl}
                  alt={currentMedia.title}
                  decoding="async"
                  className="max-h-[75vh] max-w-[90vw] object-contain rounded-xl shadow-2xl"
                  referrerPolicy="no-referrer"
                />
              ) : (customVideos[currentMedia.id]?.url || currentMedia.videoUrl) ? (
                <div className="max-w-4xl w-full aspect-video bg-black rounded-2xl overflow-hidden border border-slate-700 shadow-2xl flex items-center justify-center relative">
                  <video
                    src={customVideos[currentMedia.id]?.url || currentMedia.videoUrl}
                    poster={currentMedia.fullUrl}
                    controls
                    autoPlay
                    playsInline
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full border border-emerald-500/50 text-emerald-300 font-mono text-xs flex items-center gap-1.5 pointer-events-none">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{customVideos[currentMedia.id]?.name || (currentMedia.videoUrl ? currentMedia.videoUrl.split("/").pop() : "VIDEO_DEMO.mp4")}</span>
                  </div>
                </div>
              ) : (
                <div className="max-w-3xl w-full aspect-video bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 flex flex-col items-center justify-center relative">
                  <img
                    src={currentMedia.fullUrl}
                    alt="Video Fullscreen"
                    className="w-full h-full object-cover opacity-50"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                    <div className="w-16 h-16 rounded-full bg-teal-500 text-slate-950 flex items-center justify-center shadow-xl mb-3">
                      <Play className="w-7 h-7 fill-slate-950 translate-x-0.5" />
                    </div>
                    <span className="text-white font-mono text-base font-bold">
                      {currentMedia.title} ({currentMedia.videoDuration || "01:00"})
                    </span>
                    <p className="text-xs text-slate-300 mt-1 max-w-md">
                      {currentMedia.description}
                    </p>
                    <button
                      onClick={() => setIsPlaying(true)}
                      className="mt-4 px-5 py-2.5 rounded-xl bg-[#0066FF] hover:bg-[#0052cc] text-white font-mono font-bold text-xs uppercase tracking-wider transition-colors shadow-md cursor-pointer flex items-center gap-2"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>Play Inspection Video</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer Filmstrip Thumbnails */}
            <div 
              className="flex items-center justify-center gap-2 overflow-x-auto py-2 border-t border-slate-800"
              onClick={(e) => e.stopPropagation()}
            >
              {CLEARANCE_MEDIA.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => setSelectedIndex(idx)}
                  className={`relative w-12 h-12 rounded-lg overflow-hidden border-2 transition-all cursor-pointer shrink-0 ${
                    selectedIndex === idx ? "border-teal-400 scale-105" : "border-slate-700 opacity-60 hover:opacity-100"
                  }`}
                >
                  <img
                    src={item.thumbnailUrl}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  {item.type === "video" && (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <Play className="w-3 h-3 fill-white text-white" />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

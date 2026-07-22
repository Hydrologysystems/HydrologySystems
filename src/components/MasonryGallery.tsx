import React, { useRef, useState, useEffect, useMemo } from 'react';
import { motion } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface MasonryItem {
  id: string;
  img: string;
  title?: string;
  alt?: string;
  role?: string;
}

export interface MasonryGalleryProps {
  items: MasonryItem[];
  className?: string;
  onItemClick?: (item: MasonryItem) => void;
}

interface CardProps {
  item: MasonryItem;
  index: number;
  containerRef: React.RefObject<HTMLDivElement | null>;
  scrollX: number;
  containerWidth: number;
  onItemClick?: (item: MasonryItem) => void;
}

const GalleryCard: React.FC<CardProps> = ({
  item,
  index,
  containerRef,
  scrollX,
  containerWidth,
  onItemClick,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transformStyles, setTransformStyles] = useState({
    rotate: 0,
    translateY: 0,
    scale: 1,
    zIndex: 1,
  });

  useEffect(() => {
    const card = cardRef.current;
    const container = containerRef.current;
    if (!card || !container) return;

    const cardRect = card.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    // Calculate center positions
    const cardCenter = cardRect.left + cardRect.width / 2;
    const containerCenter = containerRect.left + containerRect.width / 2;

    const diff = cardCenter - containerCenter;
    // Normalize distance relative to half the container width
    const normalizedDistance = Math.min(Math.max(diff / (containerRect.width / 2 || 1), -2), 2);

    // Subtle curved rotation
    const maxRotation = 14;
    const rotation = normalizedDistance * maxRotation;

    // Smile shape (parabolic curve upwards for outer cards)
    const maxTranslateY = 24; // positive is down, negative is up
    // We want a standard smile: center is lowest (0), outer sides are curved upwards (negative translateY)
    const translateY = -Math.pow(Math.abs(normalizedDistance), 1.6) * maxTranslateY;

    // Center card feels slightly more prominent
    const scale = 1 - Math.abs(normalizedDistance) * 0.05;
    
    // Custom stacking: center card on top, edges layered underneath
    const zIndex = Math.round((2 - Math.abs(normalizedDistance)) * 100);

    setTransformStyles({
      rotate: rotation,
      translateY: translateY,
      scale: scale,
      zIndex: zIndex,
    });
  }, [scrollX, containerWidth, containerRef]);

  return (
    <motion.div
      ref={cardRef}
      className="shrink-0 mx-[-6px] sm:mx-[-8px] md:mx-[-10px] select-none"
      style={{
        zIndex: transformStyles.zIndex,
        rotate: transformStyles.rotate,
        y: transformStyles.translateY,
        scale: transformStyles.scale,
      }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{
        opacity: 1,
        transition: {
          duration: 0.8,
          delay: (index % 6) * 0.08,
          ease: [0.16, 1, 0.3, 1],
        },
      }}
      viewport={{ once: true, margin: "-20px" }}
      whileHover={{
        y: transformStyles.translateY - 14,
        scale: transformStyles.scale * 1.06,
        zIndex: transformStyles.zIndex + 200,
        transition: { duration: 0.3, ease: [0.25, 1, 0.5, 1] }
      }}
    >
      <div
        onClick={() => onItemClick && onItemClick(item)}
        className="relative w-[130px] sm:w-[150px] md:w-[170px] lg:w-[190px] aspect-[3/4] rounded-[22px] overflow-hidden shadow-[0_12px_32px_-4px_rgba(15,23,42,0.12)] cursor-pointer group bg-slate-100 border-0"
      >
        <img
          src={item.img}
          alt={item.alt || item.title}
          loading="lazy"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-[0.98] contrast-[1.02] saturate-[0.92]"
        />
        
        {/* Soft elegant vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-75 pointer-events-none" />
        <div className="absolute inset-0 bg-primary-950/5 mix-blend-color pointer-events-none" />

        {/* Outer Micro Border Highlight */}
        <div className="absolute inset-0 rounded-[22px] border border-white/10 pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </motion.div>
  );
};

export const MasonryGallery: React.FC<MasonryGalleryProps> = ({
  items,
  className,
  onItemClick,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollX, setScrollX] = useState(0);
  const [containerWidth, setContainerWidth] = useState(1200);
  const [isHovered, setIsHovered] = useState(false);

  // Quadruple items array to guarantee a seamless, endless loop with perfect wrap-around margins
  const duplicatedItems = useMemo(() => {
    if (!items || items.length === 0) return [];
    return [...items, ...items, ...items, ...items];
  }, [items]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updateDimensions = () => {
      setContainerWidth(container.clientWidth);
    };

    updateDimensions();
    const resizeObserver = new ResizeObserver(updateDimensions);
    resizeObserver.observe(container);

    const handleScroll = () => {
      const sLeft = container.scrollLeft;
      const singleSetWidth = container.scrollWidth / 4;

      // Wrap around logic for clean infinite scrolling
      if (sLeft < singleSetWidth * 0.5) {
        container.scrollLeft = sLeft + singleSetWidth * 2;
      } else if (sLeft > singleSetWidth * 2.5) {
        container.scrollLeft = sLeft - singleSetWidth * 2;
      }

      setScrollX(container.scrollLeft);
    };

    container.addEventListener('scroll', handleScroll, { passive: true });

    // Initial scroll setup to land perfectly in the repeating middle set
    const timer = setTimeout(() => {
      const singleSetWidth = container.scrollWidth / 4;
      container.scrollLeft = singleSetWidth * 1.5;
      setScrollX(container.scrollLeft);
    }, 150);

    return () => {
      container.removeEventListener('scroll', handleScroll);
      resizeObserver.disconnect();
      clearTimeout(timer);
    };
  }, [duplicatedItems]);

  // Smooth frame-based continuous auto-scroll loop
  useEffect(() => {
    let animationFrameId: number;
    const speed = 0.35; // Scroll rate (px per frame)
    let remainder = 0;

    const tick = () => {
      const container = containerRef.current;
      if (container && !isHovered) {
        remainder += speed;
        if (remainder >= 1) {
          const pxToScroll = Math.floor(remainder);
          container.scrollLeft += pxToScroll;
          remainder -= pxToScroll;
        }
      } else if (container && isHovered) {
        remainder = 0;
      }
      animationFrameId = requestAnimationFrame(tick);
    };

    animationFrameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered]);

  if (!items || items.length === 0) return null;

  return (
    <div 
      className={cn("w-full overflow-visible py-16 px-4 md:px-0 select-none", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
    >
      <div 
        ref={containerRef}
        className="flex flex-row items-center justify-start overflow-x-auto overflow-y-visible pb-16 pt-10 px-8 md:px-12 gap-3 md:gap-0 scrollbar-none"
        style={{ scrollBehavior: 'auto' }}
      >
        {duplicatedItems.map((item, index) => (
          <GalleryCard
            key={`${item.id}-${index}`}
            item={item}
            index={index}
            containerRef={containerRef}
            scrollX={scrollX}
            containerWidth={containerWidth}
            onItemClick={onItemClick}
          />
        ))}
      </div>
      
      {/* Scrollbar hide styling */}
      <style>{`
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-none {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default MasonryGallery;

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
  onItemClick?: (item: MasonryItem) => void;
}

const GalleryCard: React.FC<CardProps> = ({
  item,
  index,
  onItemClick,
}) => {
  return (
    <div
      className="gallery-card-item shrink-0 mx-[-6px] sm:mx-[-8px] md:mx-[-10px] select-none will-change-transform"
      style={{ zIndex: 1 }}
    >
      <div
        onClick={() => onItemClick && onItemClick(item)}
        className="relative w-[130px] sm:w-[150px] md:w-[170px] lg:w-[190px] aspect-[3/4] rounded-[22px] overflow-hidden shadow-[0_12px_32px_-4px_rgba(15,23,42,0.12)] cursor-pointer group bg-slate-100 border-0 transition-transform duration-300 hover:scale-105"
      >
        <img
          src={item.img}
          alt={item.alt || item.title}
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-[0.98] contrast-[1.02] saturate-[0.92]"
        />
        
        {/* Soft elegant vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-75 pointer-events-none" />
        <div className="absolute inset-0 bg-primary-950/5 mix-blend-color pointer-events-none" />

        {/* Outer Micro Border Highlight */}
        <div className="absolute inset-0 rounded-[22px] border border-white/10 pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </div>
  );
};

export const MasonryGallery: React.FC<MasonryGalleryProps> = ({
  items,
  className,
  onItemClick,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Quadruple items array to guarantee a seamless, endless loop with perfect wrap-around margins
  const duplicatedItems = useMemo(() => {
    if (!items || items.length === 0) return [];
    return [...items, ...items, ...items, ...items];
  }, [items]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updateCardTransforms = () => {
      const containerRect = container.getBoundingClientRect();
      const containerCenter = containerRect.left + containerRect.width / 2;
      const halfWidth = containerRect.width / 2 || 1;

      const cardElements = container.querySelectorAll<HTMLElement>('.gallery-card-item');
      cardElements.forEach((card) => {
        const cardRect = card.getBoundingClientRect();
        const cardCenter = cardRect.left + cardRect.width / 2;
        const diff = cardCenter - containerCenter;
        const normalizedDistance = Math.min(Math.max(diff / halfWidth, -2), 2);

        const rotation = normalizedDistance * 14;
        const translateY = -Math.pow(Math.abs(normalizedDistance), 1.6) * 24;
        const scale = 1 - Math.abs(normalizedDistance) * 0.05;
        const zIndex = Math.round((2 - Math.abs(normalizedDistance)) * 100);

        card.style.transform = `translateY(${translateY}px) rotate(${rotation}deg) scale(${scale})`;
        card.style.zIndex = `${zIndex}`;
      });
    };

    const handleScroll = () => {
      const sLeft = container.scrollLeft;
      const singleSetWidth = container.scrollWidth / 4;

      // Wrap around logic for clean infinite scrolling
      if (sLeft < singleSetWidth * 0.5) {
        container.scrollLeft = sLeft + singleSetWidth * 2;
      } else if (sLeft > singleSetWidth * 2.5) {
        container.scrollLeft = sLeft - singleSetWidth * 2;
      }

      updateCardTransforms();
    };

    container.addEventListener('scroll', handleScroll, { passive: true });

    // Initial scroll setup to land perfectly in the repeating middle set
    const timer = setTimeout(() => {
      const singleSetWidth = container.scrollWidth / 4;
      container.scrollLeft = singleSetWidth * 1.5;
      updateCardTransforms();
    }, 150);

    return () => {
      container.removeEventListener('scroll', handleScroll);
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

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mouseCoords = useRef({ x: 0, y: 0 });
  const ringCoords = useRef({ x: 0, y: 0 });
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkViewport = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    
    checkViewport();
    window.addEventListener("resize", checkViewport);
    
    return () => {
      window.removeEventListener("resize", checkViewport);
    };
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseCoords.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    let animationFrameId: number;

    const updateRing = () => {
      const targetX = mouseCoords.current.x;
      const targetY = mouseCoords.current.y;
      
      const dx = targetX - ringCoords.current.x;
      const dy = targetY - ringCoords.current.y;
      
      ringCoords.current.x += dx * 0.1;
      ringCoords.current.y += dy * 0.1;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringCoords.current.x}px, ${ringCoords.current.y}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(updateRing);
    };

    animationFrameId = requestAnimationFrame(updateRing);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isDesktop]);

  if (!isDesktop) return null;

  return (
    <>
      {/* 10px filled dot following exactly */}
      <div
        ref={dotRef}
        id="custom-cursor-dot"
        className="fixed top-0 left-0 pointer-events-none rounded-full"
        style={{
          width: "10px",
          height: "10px",
          backgroundColor: "var(--color-accent-500)",
          zIndex: "var(--z-cursor)",
          marginLeft: "-5px",
          marginTop: "-5px",
          willChange: "transform",
        }}
      />
      {/* 28px ring following with lerp lag */}
      <div
        ref={ringRef}
        id="custom-cursor-ring"
        className="fixed top-0 left-0 pointer-events-none rounded-full border"
        style={{
          width: "28px",
          height: "28px",
          borderColor: "rgba(234, 119, 4, 0.45)",
          borderWidth: "1.5px",
          zIndex: "var(--z-cursor)",
          marginLeft: "-14px",
          marginTop: "-14px",
          willChange: "transform",
        }}
      />
    </>
  );
}

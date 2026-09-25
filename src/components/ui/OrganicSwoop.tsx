'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface OrganicSwoopProps {
  position?: 'left' | 'right';
  variant?: 'green' | 'slate' | 'soft';
  className?: string;
  parallaxSpeed?: number; // e.g. 30 or 50
  scale?: number;
}

export default function OrganicSwoop({
  position = 'left',
  variant = 'green',
  className = '',
  parallaxSpeed = 35,
  scale = 1
}: OrganicSwoopProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-parallaxSpeed, parallaxSpeed]);
  const rotate = useTransform(
    scrollYProgress, 
    [0, 1], 
    position === 'left' ? [-3, 5] : [3, -5]
  );

  const isLeft = position === 'left';

  // Theme palettes matching client brochure
  const primaryColor = variant === 'slate' ? '#1F2633' : '#65B32E';
  const secondaryColor = variant === 'slate' ? '#2B3445' : '#82D645';
  const outerBandColor = variant === 'slate' ? '#E2E8F0' : '#EAF4E3';

  return (
    <div
      ref={ref}
      className={`absolute pointer-events-none select-none z-0 ${
        isLeft ? 'left-[-40px] sm:left-[-20px] lg:left-0' : 'right-[-40px] sm:right-[-20px] lg:right-0'
      } ${className}`}
      style={{
        transform: `scale(${scale}) ${isLeft ? '' : 'scaleX(-1)'}`,
      }}
    >
      <motion.div style={{ y, rotate }} className="relative will-change-transform">
        <svg
          width="360"
          height="320"
          viewBox="0 0 360 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-sm"
        >
          {/* 1. Fine Hairline Filament Contour Arc Line */}
          <path
            d="M -30 20 C 120 40, 220 120, 290 280"
            stroke={primaryColor}
            strokeWidth="1.5"
            strokeDasharray="6 6"
            strokeOpacity="0.4"
          />

          {/* 2. Outer Smooth Light-Tint Curved Track Band (from Reference Image 1) */}
          <path
            d="M -50 40 
               C 80 50, 180 110, 250 240 
               C 285 305, 230 330, 180 290 
               C 120 180, 40 120, -50 95 
               Z"
            fill={outerBandColor}
            fillOpacity="0.85"
          />

          {/* 3. Inner Saturated Curved Capsule / Pill Shape (from Reference Image 1) */}
          <path
            d="M -40 70 
               C 60 78, 140 130, 200 230 
               C 225 270, 185 290, 155 260 
               C 105 170, 40 125, -40 115 
               Z"
            fill={primaryColor}
            fillOpacity="0.9"
          />

          {/* 4. Subtle Inner Highlight Crescent / Shading */}
          <path
            d="M -35 75 
               C 50 82, 120 128, 175 215 
               C 185 230, 170 245, 150 230 
               C 100 155, 45 115, -35 105 
               Z"
            fill={secondaryColor}
            fillOpacity="0.35"
          />

          {/* 5. Precision Engineering Node Dot Accent */}
          <circle cx="200" cy="230" r="4" fill={primaryColor} />
          <circle cx="290" cy="280" r="3" fill={primaryColor} fillOpacity="0.6" />
        </svg>
      </motion.div>
    </div>
  );
}

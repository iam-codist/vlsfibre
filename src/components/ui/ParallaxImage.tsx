'use client';

import React, { useRef } from 'react';
import Image, { ImageProps } from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxImageProps extends Omit<ImageProps, 'src'> {
  src: string;
  alt: string;
  parallaxOffset?: number; // How many pixels to translate (e.g. 35)
  containerClassName?: string;
}

export default function ParallaxImage({
  src,
  alt,
  parallaxOffset = 30,
  containerClassName = '',
  className = '',
  ...props
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-parallaxOffset, parallaxOffset]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1.04, 1.08]);

  return (
    <div ref={ref} className={`overflow-hidden relative ${containerClassName}`}>
      <motion.div
        style={{ y, scale }}
        className="w-full h-full relative will-change-transform"
      >
        <Image
          src={src}
          alt={alt}
          fill
          className={`object-cover ${className}`}
          {...props}
        />
      </motion.div>
    </div>
  );
}

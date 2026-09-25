'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface VLSLogoProps {
  variant?: 'light' | 'dark'; // 'light' for dark backgrounds (footer), 'dark' for white backgrounds (navbar)
  showSubtext?: boolean;
  className?: string;
}

export default function VLSLogo({ 
  variant = 'dark', 
  showSubtext = true,
  className = '' 
}: VLSLogoProps) {
  const isLight = variant === 'light'; // On dark background

  if (!isLight) {
    // Official Full Transparent Logo for White Navbar
    return (
      <Link href="/" className={`inline-flex items-center group ${className}`} aria-label="VLS Fibre Home">
        <div className="relative h-11 sm:h-12 w-auto aspect-[1024/342] transition-transform duration-200 group-hover:scale-[1.02]">
          <Image
            src="/images/brand/vls-full-logo.png"
            alt="VLS Fibre Composite Logo"
            width={180}
            height={60}
            priority
            className="h-full w-auto object-contain"
          />
        </div>
      </Link>
    );
  }

  // Dark Footer: Official Brand Logo uploaded by user (vls-footer-brand-logo.png)
  return (
    <Link href="/" className={`inline-flex items-center group ${className}`} aria-label="VLS Fibre Home">
      <div className="relative h-12 sm:h-14 w-auto aspect-[1024/342] transition-transform duration-200 group-hover:scale-[1.03]">
        <Image
          src="/images/brand/vls-footer-brand-logo.png"
          alt="VLS Fibre Industrial Lining Logo"
          width={220}
          height={74}
          priority
          className="h-full w-auto object-contain brightness-105"
        />
      </div>
    </Link>
  );
}

'use client';

import React from 'react';

interface CountryFlagProps {
  countryCode: string;
  className?: string;
}

export default function CountryFlag({ countryCode, className = 'w-5 h-3.5' }: CountryFlagProps) {
  const code = countryCode.toLowerCase();

  return (
    <span className={`inline-block rounded-xs overflow-hidden shrink-0 shadow-xs border border-slate-200/80 align-middle ${className}`}>
      {code === 'gb' && (
        <svg viewBox="0 0 60 40" className="w-full h-full block">
          <rect width="60" height="40" fill="#012169" />
          <path d="M0,0 L60,40 M60,0 L0,40" stroke="#fff" strokeWidth="8" />
          <path d="M0,0 L60,40 M60,0 L0,40" stroke="#C8102E" strokeWidth="4" />
          <path d="M30,0 v40 M0,20 h60" stroke="#fff" strokeWidth="12" />
          <path d="M30,0 v40 M0,20 h60" stroke="#C8102E" strokeWidth="7" />
        </svg>
      )}

      {(code === 'in' || code === 'in-ta') && (
        <svg viewBox="0 0 60 40" className="w-full h-full block">
          <rect width="60" height="13.33" fill="#FF9933" />
          <rect y="13.33" width="60" height="13.34" fill="#FFFFFF" />
          <rect y="26.67" width="60" height="13.33" fill="#138808" />
          <circle cx="30" cy="20" r="4.5" fill="none" stroke="#000080" strokeWidth="0.8" />
          <circle cx="30" cy="20" r="1.2" fill="#000080" />
        </svg>
      )}

      {code === 'de' && (
        <svg viewBox="0 0 60 40" className="w-full h-full block">
          <rect width="60" height="13.33" fill="#000000" />
          <rect y="13.33" width="60" height="13.34" fill="#DD0000" />
          <rect y="26.67" width="60" height="13.33" fill="#FFCE00" />
        </svg>
      )}

      {code === 'fr' && (
        <svg viewBox="0 0 60 40" className="w-full h-full block">
          <rect width="20" height="40" fill="#002654" />
          <rect x="20" width="20" height="40" fill="#FFFFFF" />
          <rect x="40" width="20" height="40" fill="#ED2939" />
        </svg>
      )}

      {code === 'es' && (
        <svg viewBox="0 0 60 40" className="w-full h-full block">
          <rect width="60" height="10" fill="#AA151B" />
          <rect y="10" width="60" height="20" fill="#F1BF00" />
          <rect y="30" width="60" height="10" fill="#AA151B" />
          <circle cx="18" cy="20" r="3" fill="#AA151B" />
        </svg>
      )}

      {code === 'ae' && (
        <svg viewBox="0 0 60 40" className="w-full h-full block">
          <rect x="15" width="45" height="13.33" fill="#00732F" />
          <rect x="15" y="13.33" width="45" height="13.34" fill="#FFFFFF" />
          <rect x="15" y="26.67" width="45" height="13.33" fill="#000000" />
          <rect width="15" height="40" fill="#FF0000" />
        </svg>
      )}

      {code === 'jp' && (
        <svg viewBox="0 0 60 40" className="w-full h-full block">
          <rect width="60" height="40" fill="#FFFFFF" />
          <circle cx="30" cy="20" r="10" fill="#BC002D" />
        </svg>
      )}

      {/* Fallback default */}
      {!['gb', 'in', 'in-ta', 'de', 'fr', 'es', 'ae', 'jp'].includes(code) && (
        <svg viewBox="0 0 60 40" className="w-full h-full block bg-slate-200">
          <circle cx="30" cy="20" r="12" fill="#004b87" />
        </svg>
      )}
    </span>
  );
}

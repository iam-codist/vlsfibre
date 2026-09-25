'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function SiteLoader() {
  const [phase, setPhase] = useState<'loading' | 'reveal' | 'done'>('loading');

  useEffect(() => {
    // Lock body scroll during loading
    document.body.style.overflow = 'hidden';

    // Phase 1: Show loader for 2.2 seconds
    const revealTimer = setTimeout(() => {
      setPhase('reveal');
    }, 2200);

    // Phase 2: After reveal animation completes (~800ms), remove loader
    const doneTimer = setTimeout(() => {
      setPhase('done');
      document.body.style.overflow = '';
    }, 3000);

    return () => {
      clearTimeout(revealTimer);
      clearTimeout(doneTimer);
      document.body.style.overflow = '';
    };
  }, []);

  if (phase === 'done') return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
        phase === 'reveal'
          ? 'opacity-0 scale-[1.02] pointer-events-none'
          : 'opacity-100 scale-100'
      }`}
      aria-hidden="true"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#1F2633]" />

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(rgba(101,179,46,0.3) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      {/* Animated glow rings */}
      <div className="absolute w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] rounded-full border border-[#65B32E]/15 animate-[loaderPulse_2s_ease-in-out_infinite]" />
      <div className="absolute w-[200px] h-[200px] sm:w-[260px] sm:h-[260px] rounded-full border border-[#65B32E]/20 animate-[loaderPulse_2s_ease-in-out_0.3s_infinite]" />
      <div className="absolute w-[120px] h-[120px] sm:w-[160px] sm:h-[160px] rounded-full bg-[#65B32E]/5 animate-[loaderPulse_2s_ease-in-out_0.6s_infinite]" />

      {/* Central content */}
      <div className="relative z-10 flex flex-col items-center gap-7">
        {/* Logo with shimmer */}
        <div className="relative">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white/[0.07] backdrop-blur-xl border border-white/10 p-3 sm:p-4 shadow-2xl shadow-[#65B32E]/10 flex items-center justify-center animate-[loaderFloat_3s_ease-in-out_infinite]">
            <Image
              src="/images/brand/vls-favicon.png"
              alt="VLS Fibre"
              width={80}
              height={80}
              className="w-full h-full object-contain drop-shadow-lg"
              priority
            />
          </div>
          {/* Shimmer sweep */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full animate-[loaderShimmer_2s_ease-in-out_infinite]" />
          </div>
        </div>

        {/* Brand text */}
        <div className="text-center space-y-2">
          <h2 className="text-white/90 text-sm sm:text-base font-extrabold tracking-[0.25em] uppercase font-display">
            VLS Fibre
          </h2>
          <p className="text-white/30 text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] uppercase">
            Composite Engineering Excellence
          </p>
        </div>

        {/* Loading bar */}
        <div className="w-40 sm:w-48 h-[3px] bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#65B32E] via-[#82D645] to-[#65B32E] rounded-full animate-[loaderBar_2s_ease-in-out_forwards]"
          />
        </div>
      </div>

      {/* Corner accents */}
      <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-[#65B32E]/30 rounded-tl-lg" />
      <div className="absolute top-6 right-6 w-8 h-8 border-t-2 border-r-2 border-[#65B32E]/30 rounded-tr-lg" />
      <div className="absolute bottom-6 left-6 w-8 h-8 border-b-2 border-l-2 border-[#65B32E]/30 rounded-bl-lg" />
      <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-[#65B32E]/30 rounded-br-lg" />
    </div>
  );
}

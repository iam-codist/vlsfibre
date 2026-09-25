'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function SiteLoader() {
  const [phase, setPhase] = useState<'loading' | 'reveal' | 'done'>('loading');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    document.body.style.overflow = 'hidden';

    const revealTimer = setTimeout(() => {
      setPhase('reveal');
    }, 2200);

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

  if (!mounted || phase === 'done') return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
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

      {/* ── Center point: Logo sits at exact center, rings orbit around it ── */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Glow rings — all centered on this same point */}
        <div className="absolute w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] rounded-full border border-[#65B32E]/15 animate-[loaderPulse_2s_ease-in-out_infinite]" />
        <div className="absolute w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] rounded-full border border-[#65B32E]/20 animate-[loaderPulse_2s_ease-in-out_0.3s_infinite]" />
        <div className="absolute w-[120px] h-[120px] sm:w-[160px] sm:h-[160px] rounded-full bg-[#65B32E]/5 animate-[loaderPulse_2s_ease-in-out_0.6s_infinite]" />

        {/* Logo — sits at the dead center of all rings */}
        <div className="relative">
          <div className="w-[88px] h-[88px] sm:w-[104px] sm:h-[104px] rounded-2xl bg-white/[0.07] backdrop-blur-xl border border-white/10 shadow-2xl shadow-[#65B32E]/10 animate-[loaderFloat_3s_ease-in-out_infinite] flex items-center justify-center">
            <div className="w-14 h-14 sm:w-16 sm:h-16 relative">
              <Image
                src="/images/brand/vls-favicon.png"
                alt="VLS Fibre"
                fill
                className="object-contain drop-shadow-lg"
                sizes="64px"
                priority
              />
            </div>
          </div>
          {/* Shimmer sweep */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full animate-[loaderShimmer_2s_ease-in-out_infinite]" />
          </div>
        </div>
      </div>

      {/* ── Text + bar: positioned below the rings, NOT part of the centered group ── */}
      <div className="absolute inset-x-0 bottom-0 flex flex-col items-center" style={{ top: 'calc(50% + 190px)' }}>
        <h2 className="text-white/90 text-sm sm:text-base font-extrabold tracking-[0.25em] uppercase font-display mb-2">
          VLS Fibre
        </h2>
        <p className="text-white/30 text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] uppercase mb-6">
          Composite Engineering Excellence
        </p>
        <div className="w-40 sm:w-48 h-[3px] bg-white/10 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-[#65B32E] via-[#82D645] to-[#65B32E] rounded-full animate-[loaderBar_2s_ease-in-out_forwards]" />
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

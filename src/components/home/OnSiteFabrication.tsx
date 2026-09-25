'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { ChevronRight, ArrowRight, ShieldCheck, Wrench, Factory } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ParallaxImage from '@/components/ui/ParallaxImage';
import OrganicSwoop from '@/components/ui/OrganicSwoop';
import { useLanguage } from '@/context/LanguageContext';

export default function OnSiteFabrication() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const cardY = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const imageY = useTransform(scrollYProgress, [0, 1], [-25, 25]);

  return (
    <section ref={sectionRef} className="py-24 sm:py-32 bg-[#F8FAFC] relative overflow-hidden">
      {/* 1. Floating Organic Swoop Background Patterns (Matching Reference Image 2 & 3) */}
      <OrganicSwoop 
        position="left" 
        variant="green" 
        scale={1.25}
        parallaxSpeed={45} 
        className="top-10 -left-12 opacity-80" 
      />
      <OrganicSwoop 
        position="right" 
        variant="soft" 
        scale={1.1} 
        parallaxSpeed={35} 
        className="bottom-12 -right-12 opacity-70" 
      />

      {/* Subtle background technical grid & fiber weave */}
      <div className="absolute inset-0 pattern-dots opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Asymmetric Architectural Panel matching Plasticon Reference Image 3 & 4 */}
        <div className="relative rounded-3xl lg:rounded-br-[100px] bg-[#1F2633] border-t-4 border-[#65B32E] text-white shadow-2xl overflow-hidden">
          {/* Internal Watermark Organic Swoosh Motif inside the panel (from Image 3 left edge) */}
          <div className="absolute -left-16 -top-16 w-80 h-80 pointer-events-none opacity-20">
            <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <path
                d="M -30 20 C 60 30, 130 90, 170 170 C 185 200, 160 215, 135 195 C 105 130, 50 85, -30 75 Z"
                fill="#65B32E"
              />
              <path
                d="M -20 10 C 80 20, 150 90, 190 190"
                stroke="#65B32E"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
            </svg>
          </div>

          {/* Secondary radial glow accent */}
          <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-[#65B32E]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-8 sm:p-12 lg:p-16 relative z-10">
            {/* Left Content Column */}
            <motion.div 
              style={{ y: cardY }}
              className="lg:col-span-6 space-y-6"
            >
              <div className="space-y-3">
                <span className="text-xs uppercase font-extrabold tracking-wider text-[#82D645] font-mono block">
                  {t('onsite.tag')}
                </span>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.08] tracking-tight font-display uppercase notranslate" translate="no">
                  {t('onsite.title')}
                </h2>
              </div>

              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                <p>
                  {t('onsite.desc1')}
                </p>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {t('onsite.desc2')}
                </p>
              </div>

              {/* Distinctive Pill Button matching Reference Image 3 & 4 */}
              <div className="pt-4 flex items-center gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#65B32E] hover:bg-[#549824] text-white font-extrabold text-xs tracking-wider uppercase transition-all shadow-lg shadow-[#65B32E]/30 group"
                >
                  <span>{t('onsite.read_more')}</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-slate-600 hover:border-[#65B32E] text-slate-300 hover:text-white text-xs font-bold tracking-wider uppercase transition-colors"
                >
                  <span>{t('onsite.rfq_btn')}</span>
                </Link>
              </div>

              {/* Key Highlights Bar */}
              <div className="pt-6 border-t border-slate-700/60 grid grid-cols-2 gap-4 text-xs font-mono">
                <div className="flex items-center gap-2 text-slate-300">
                  <ShieldCheck className="w-4 h-4 text-[#65B32E] shrink-0" />
                  <span>{t('onsite.feat_diameter')}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <Wrench className="w-4 h-4 text-[#65B32E] shrink-0" />
                  <span>{t('onsite.feat_fusion')}</span>
                </div>
              </div>
            </motion.div>

            {/* Right Photographic Visual Column overlapping with rounded architecture */}
            <motion.div 
              style={{ y: imageY }}
              className="lg:col-span-6 relative aspect-[4/3] sm:aspect-[16/11] rounded-3xl overflow-hidden shadow-2xl border-2 border-white/10 bg-slate-900 group"
            >
              <ParallaxImage
                src="/images/products/frp-vertical-storage-tank-crane-hoist.jpeg"
                alt="On-Site Tank Fabrication & Heavy Crane Rigging"
                parallaxOffset={35}
                sizes="(max-width: 1024px) 100vw, 50vw"
                containerClassName="w-full h-full"
              />

              {/* Subtle visual gradient vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

              {/* Bottom In-Situ Badge */}
              <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between p-3 rounded-2xl bg-[#1F2633]/90 backdrop-blur-md border border-slate-700 text-white text-xs">
                <div className="flex items-center gap-2">
                  <Factory className="w-4 h-4 text-[#65B32E]" />
                  <span className="font-bold notranslate" translate="no">Heavy Site Erection &amp; Crane Rigging</span>
                </div>
                <span className="text-[#82D645] font-mono font-bold text-[11px]">Turnkey Commissioning</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

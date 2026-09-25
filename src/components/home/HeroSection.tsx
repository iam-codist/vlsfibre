'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { 
  ChevronRight, 
  ChevronLeft,
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Sparkles,
  Layers,
  Thermometer,
  Anchor,
  Globe2,
  CheckCircle2,
  FileText,
  Pause,
  Play
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import OrganicSwoop from '@/components/ui/OrganicSwoop';

// Dynamically import WebGL Three.js Fiber Canvas for zero SSR issues
const HeroCanvas = dynamic(() => import('@/components/canvas/HeroCanvas'), {
  ssr: false,
  loading: () => null
});

interface HeroProduct {
  src: string;
  title: string;
  shortLabel: string;
  tag: string;
  spec: string;
  capacity: string;
  link: string;
  keyBadge: string;
}

const HERO_PRODUCTS: HeroProduct[] = [
  {
    src: '/images/products/pp-frp-chemical-reaction-vessel-blue.jpeg',
    title: 'Dual-Laminate Reaction Vessels',
    shortLabel: 'Reaction Vessels',
    tag: 'IS 2825 & ASME RTP-1',
    spec: 'PPH / PVDF Liner + Derakane 411 Vinyl Ester',
    capacity: 'Up to 50,000 Litres (50 kL)',
    link: '/products/pp-frp-chemical-reaction-vessel',
    keyBadge: '20 kV Spark Tested'
  },
  {
    src: '/images/products/frp-vertical-storage-tank-crane-hoist.jpeg',
    title: 'Vertical Chemical Storage Tanks',
    shortLabel: 'Storage Tanks',
    tag: 'IS 10661 & BS 4994',
    spec: 'Continuous Filament Helical Winding',
    capacity: 'Up to 120,000 Litres (120 kL)',
    link: '/products/frp-vertical-chemical-storage-tank',
    keyBadge: 'Hydrotested Shell'
  },
  {
    src: '/images/products/pp-frp-scrubber-packed-columns-towers.jpeg',
    title: 'Packed Bed Fume Scrubbers',
    shortLabel: 'Gas Scrubbers',
    tag: 'IS 10661 & CPCB Norms',
    spec: 'Multi-Stage Absorption Columns & Blowers',
    capacity: '500 to 65,000 CFM',
    link: '/products/pp-frp-packed-bed-scrubber',
    keyBadge: '99.7% Abatement'
  },
  {
    src: '/images/products/hdpe-spiral-acid-tanker.jpeg',
    title: 'Seamless HDPE Spiral Road Tankers',
    shortLabel: 'Road Tankers',
    tag: 'PESO & CMVR Approved',
    spec: 'Single-Piece Continuous Profile Wound Body',
    capacity: '10 to 35 kL Payloads',
    link: '/products/hdpe-spiral-acid-tanker',
    keyBadge: 'Weldless Monolithic'
  }
];

export default function HeroSection() {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  const heroRef = useRef<HTMLDivElement>(null);
  const cardContainerRef = useRef<HTMLDivElement>(null);

  // Scroll Parallax
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  });

  const bgRingsRotate = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const bgRingsY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const parallaxOffset = useTransform(scrollYProgress, [0, 1], [0, 50]);

  // Luxury Interactive 3D Card Tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['7deg', '-7deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-7deg', '7deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardContainerRef.current) return;
    const rect = cardContainerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsPaused(false);
  };

  // Carousel Autoplay & Progress Timer
  useEffect(() => {
    if (isPaused) return;

    const intervalTime = 4800;
    const stepTime = 50;
    let elapsed = 0;

    const interval = setInterval(() => {
      elapsed += stepTime;
      setProgress((elapsed / intervalTime) * 100);

      if (elapsed >= intervalTime) {
        elapsed = 0;
        setProgress(0);
        setActiveIndex((prev) => (prev + 1) % HERO_PRODUCTS.length);
      }
    }, stepTime);

    return () => clearInterval(interval);
  }, [isPaused, activeIndex]);

  const goToSlide = (idx: number) => {
    setActiveIndex(idx);
    setProgress(0);
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % HERO_PRODUCTS.length);
    setProgress(0);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + HERO_PRODUCTS.length) % HERO_PRODUCTS.length);
    setProgress(0);
  };

  const activeProduct = HERO_PRODUCTS[activeIndex];

  return (
    <section 
      ref={heroRef} 
      className="relative pt-28 sm:pt-32 lg:pt-34 pb-16 lg:pb-20 bg-gradient-to-b from-white via-[#fafbfa] to-white overflow-hidden"
    >
      {/* 1. Interactive 3D WebGL Filament Particle Cloud Background */}
      <HeroCanvas />

      {/* 2. Precision Engineering Grid & Fiber Weave Overlay */}
      <motion.div style={{ y: bgRingsY }} className="absolute inset-0 pattern-dots opacity-35 pointer-events-none" />
      <div className="absolute inset-0 pattern-fiber-weave opacity-20 pointer-events-none" />

      {/* Signature Organic Swoop Accent */}
      <OrganicSwoop
        position="right"
        variant="green"
        scale={1.25}
        parallaxSpeed={35}
        className="top-20 -right-20 opacity-70"
      />

      {/* Soft Ambient Radial Glows */}
      <div className="absolute top-10 left-1/4 w-[550px] h-[550px] bg-[#65B32E]/8 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-28 right-10 w-[600px] h-[600px] bg-[#1F2633]/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Luxury Industrial Engineering Presentation */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Pre-Header Luxury Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-[#65B32E]/35 text-[#549824] shadow-xs">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#65B32E] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#65B32E]" />
              </span>
              <span className="text-[11px] font-extrabold uppercase tracking-wider font-mono text-[#1F2633] notranslate" translate="no">
                PRECISION COMPOSITE ENGINEERING &bull; ASME RTP-1 &bull; BS 4994
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-extrabold text-[#1F2633] leading-[1.12] tracking-tight font-display">
              {t('hero.title')}
            </h1>

            {/* Subtitle Description */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl font-normal">
              {t('hero.subtitle')}
            </p>

            {/* High-Impact Luxury Action Buttons */}
            <div className="pt-1 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#65B32E] hover:bg-[#549824] text-white font-extrabold text-xs tracking-wider uppercase shadow-md shadow-[#65B32E]/30 hover:shadow-lg hover:shadow-[#65B32E]/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 group"
              >
                <span>{t('hero.brochure')}</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/80 hover:bg-white border border-slate-300 text-slate-800 hover:text-[#65B32E] hover:border-[#65B32E] text-xs font-extrabold tracking-wider uppercase transition-all duration-200 shadow-2xs hover:shadow-sm"
              >
                <span>{t('hero.explore')}</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#65B32E]" />
              </Link>
            </div>

            {/* Elevated Luxury Metric Cards Ribbon (Spacious & Clean) */}
            <div className="pt-5 border-t border-slate-100 grid grid-cols-3 gap-3.5 max-w-xl">
              <div className="bg-white/90 backdrop-blur-md rounded-2xl p-3 sm:p-3.5 border border-slate-200/90 shadow-2xs hover:border-[#65B32E]/40 hover:shadow-xs transition-all duration-200">
                <span className="text-lg sm:text-xl font-extrabold text-[#1F2633] block tracking-tight font-display notranslate" translate="no">
                  120 kL
                </span>
                <span className="text-[11px] text-slate-500 font-semibold block leading-tight mt-0.5">
                  {t('hero.metric_volume')}
                </span>
              </div>

              <div className="bg-white/90 backdrop-blur-md rounded-2xl p-3 sm:p-3.5 border border-slate-200/90 shadow-2xs hover:border-[#65B32E]/40 hover:shadow-xs transition-all duration-200">
                <span className="text-lg sm:text-xl font-extrabold text-[#65B32E] block tracking-tight font-display notranslate" translate="no">
                  15–20 kV
                </span>
                <span className="text-[11px] text-slate-500 font-semibold block leading-tight mt-0.5">
                  {t('hero.metric_spark')}
                </span>
              </div>

              <div className="bg-white/90 backdrop-blur-md rounded-2xl p-3 sm:p-3.5 border border-slate-200/90 shadow-2xs hover:border-[#65B32E]/40 hover:shadow-xs transition-all duration-200">
                <span className="text-lg sm:text-xl font-extrabold text-[#1F2633] block tracking-tight font-display notranslate" translate="no">
                  +110°C
                </span>
                <span className="text-[11px] text-slate-500 font-semibold block leading-tight mt-0.5">
                  {t('hero.metric_temp')}
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: High-End Interactive 3D Photographic Showcase */}
          <div className="lg:col-span-6 relative flex flex-col items-center">
            
            {/* Soft Ambient Card Glow */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#65B32E]/15 via-transparent to-blue-500/10 rounded-3xl blur-2xl -z-10 pointer-events-none" />

            {/* Clean Floating Export Badge (Positioned Above without overlapping image content) */}
            <motion.div 
              style={{ y: parallaxOffset }}
              className="w-full max-w-lg mb-3 flex items-center justify-between"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-xs text-[11px] font-bold text-[#1F2633]">
                <div className="w-5 h-5 rounded-full bg-[#F2F8EC] flex items-center justify-center text-[#65B32E]">
                  <Anchor className="w-3 h-3" />
                </div>
                <span>{t('hero.export_badge')}</span>
              </div>

              {/* Pause / Autoplay Indicator */}
              <button
                onClick={() => setIsPaused(!isPaused)}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 text-[10px] font-mono font-bold text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
                title={isPaused ? 'Resume Autoplay' : 'Pause Autoplay'}
              >
                {isPaused ? <Play className="w-3 h-3 text-[#65B32E]" /> : <Pause className="w-3 h-3 text-slate-400" />}
                <span>{isPaused ? 'Paused' : 'Auto'}</span>
              </button>
            </motion.div>

            {/* Main Interactive 3D Perspective Card */}
            <div 
              ref={cardContainerRef}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={handleMouseLeave}
              className="w-full max-w-lg perspective-[1200px]"
            >
              <motion.div
                style={{ rotateX, rotateY }}
                className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-slate-900/15 border-2 border-white bg-slate-900 group transition-transform duration-200 ease-out"
              >
                {/* Images Layer */}
                {HERO_PRODUCTS.map((prod, idx) => {
                  const isActive = activeIndex === idx;
                  return (
                    <div
                      key={idx}
                      className={`absolute inset-0 transition-opacity duration-600 ease-in-out ${
                        isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                      }`}
                    >
                      <Image
                        src={prod.src}
                        alt={prod.title}
                        fill
                        priority={idx === 0}
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />

                      {/* Smooth Vignette and Gradient Overlay for Pristine Readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-slate-900/15 pointer-events-none" />

                      {/* Top Glassmorphic Standards Ribbon inside Image */}
                      <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20 pointer-events-none">
                        <span className="px-3 py-1.5 rounded-full bg-slate-950/70 backdrop-blur-md border border-white/20 text-white text-[10px] font-extrabold uppercase tracking-wider font-mono flex items-center gap-1.5 shadow-sm notranslate" translate="no">
                          <ShieldCheck className="w-3.5 h-3.5 text-[#65B32E]" />
                          <span>{prod.tag}</span>
                        </span>

                        <span className="px-2.5 py-1 rounded-full bg-[#65B32E]/90 backdrop-blur-md text-white text-[10px] font-bold font-mono shadow-sm flex items-center gap-1 notranslate" translate="no">
                          <CheckCircle2 className="w-3 h-3" />
                          <span>{prod.keyBadge}</span>
                        </span>
                      </div>

                      {/* Bottom Floating Engineering Glass Drawer */}
                      <div className="absolute bottom-4 left-4 right-4 z-20">
                        <div className="bg-slate-950/80 backdrop-blur-md border border-white/15 rounded-2xl p-4 text-white shadow-xl space-y-1.5">
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-[10px] uppercase tracking-wider font-mono font-bold text-[#82d645] block notranslate" translate="no">
                              {prod.spec}
                            </span>
                            <span className="text-[10px] font-mono text-slate-300 bg-white/10 px-2 py-0.5 rounded-md notranslate" translate="no">
                              {prod.capacity}
                            </span>
                          </div>

                          <div className="flex items-center justify-between gap-3">
                            <h3 className="text-base sm:text-lg font-bold font-display leading-tight truncate notranslate" translate="no">
                              {prod.title}
                            </h3>

                            <Link
                              href={prod.link}
                              className="inline-flex items-center gap-1 text-[11px] font-bold text-[#65B32E] hover:text-[#82d645] transition-colors shrink-0 group/link"
                            >
                              <span>Specs</span>
                              <ChevronRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}

                {/* Quick Prev / Next Overlay Arrows on Hover */}
                <div className="absolute inset-y-0 left-2 flex items-center z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      prevSlide();
                    }}
                    className="w-8 h-8 rounded-full bg-slate-950/60 backdrop-blur-md text-white border border-white/20 flex items-center justify-center hover:bg-slate-900 transition-colors cursor-pointer"
                    aria-label="Previous Slide"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                </div>

                <div className="absolute inset-y-0 right-2 flex items-center z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      nextSlide();
                    }}
                    className="w-8 h-8 rounded-full bg-slate-950/60 backdrop-blur-md text-white border border-white/20 flex items-center justify-center hover:bg-slate-900 transition-colors cursor-pointer"
                    aria-label="Next Slide"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            </div>

            {/* Interactive Luxury Unclipped Thumbnail Selector Tabs */}
            <div className="mt-4 grid grid-cols-4 gap-2 w-full max-w-lg">
              {HERO_PRODUCTS.map((prod, idx) => {
                const isActive = activeIndex === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => goToSlide(idx)}
                    className={`p-2 sm:p-2.5 rounded-xl text-left transition-all duration-200 border cursor-pointer ${
                      isActive
                        ? 'bg-white border-[#65B32E] shadow-sm ring-1 ring-[#65B32E]'
                        : 'bg-white/80 border-slate-200 hover:bg-white hover:border-slate-300 text-slate-600'
                    }`}
                  >
                    {/* Clean unclipped label */}
                    <span 
                      className={`text-[11px] font-bold block truncate leading-tight notranslate ${
                        isActive ? 'text-[#65B32E]' : 'text-slate-700'
                      }`} 
                      translate="no"
                    >
                      {prod.shortLabel}
                    </span>

                    {/* Animated Progress Bar */}
                    <div className="w-full bg-slate-100 h-1 rounded-full mt-1.5 overflow-hidden">
                      <div 
                        className={`h-full bg-[#65B32E] transition-all ${
                          isActive ? 'duration-75' : 'duration-300'
                        }`}
                        style={{
                          width: isActive ? `${progress}%` : '0%'
                        }}
                      />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

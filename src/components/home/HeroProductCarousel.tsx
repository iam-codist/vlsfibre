'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ChevronLeft, 
  ChevronRight, 
  ShieldCheck, 
  ArrowRight, 
  Pause, 
  Play, 
  Gauge, 
  Layers, 
  Thermometer, 
  Zap 
} from 'lucide-react';

interface Slide {
  id: string;
  name: string;
  tag: string;
  category: string;
  image: string;
  capacity: string;
  temp: string;
  standard: string;
  slug: string;
}

const SLIDES: Slide[] = [
  {
    id: 'slide-1',
    name: 'PP-FRP Agitated Reaction Vessel',
    tag: 'Chemical Synthesis & API Reactors',
    category: 'Dual-Laminate Reaction Systems',
    image: '/images/products/pp-frp-chemical-reaction-vessel-blue.jpeg',
    capacity: '500 L to 40,000 L',
    temp: '-10°C to +110°C',
    standard: 'BS 4994:1987 / ASME Section X',
    slug: 'pp-frp-chemical-reaction-vessel'
  },
  {
    id: 'slide-2',
    name: 'Dual-Column Packed Bed Fume Scrubber',
    tag: 'Toxic & Acid Gas Abatement',
    category: 'Air Pollution Control',
    image: '/images/products/pp-frp-scrubber-packed-columns-towers.jpeg',
    capacity: '1,000 to 65,000 CFM',
    temp: '99.8% Removal Rate',
    standard: 'CPCB & Pollution Board Compliant',
    slug: 'pp-frp-packed-bed-scrubber'
  },
  {
    id: 'slide-3',
    name: 'Filament-Wound Vertical Storage Tank',
    tag: 'Bulk Chemical & Acid Storage',
    category: 'Corrosive Liquid Storage',
    image: '/images/products/frp-vertical-storage-tank-crane-hoist.jpeg',
    capacity: 'Up to 120,000 Liters (120 kL)',
    temp: '220 - 310 MPa Tensile',
    standard: 'ASTM D3299 / ASME RTP-1',
    slug: 'frp-vertical-chemical-storage-tank'
  },
  {
    id: 'slide-4',
    name: 'Seamless HDPE Spiral Road Tanker',
    tag: 'Hazardous Chemical Logistics',
    category: 'Liquid Transportation',
    image: '/images/products/hdpe-spiral-acid-tanker.jpeg',
    capacity: '10,000 L to 35,000 L',
    temp: 'Seamless PE-100 Extrusion',
    standard: 'PESO & Petroleum Rules Compliant',
    slug: 'hdpe-spiral-acid-tanker'
  },
  {
    id: 'slide-5',
    name: 'Heavy-Duty PP/FRP Pickling Dip Tanks',
    tag: 'Steel Tube & Wire Surface Treatment',
    category: 'Hot Acid Dip Systems',
    image: '/images/products/pp-rectangular-pickling-tanks.jpeg',
    capacity: 'Lengths up to 18 Meters',
    temp: 'Hot HCl/H2SO4 up to 85°C',
    standard: 'DVS 2205 / Steel Caged',
    slug: 'pp-rectangular-pickling-tank'
  },
  {
    id: 'slide-6',
    name: 'High-Pressure Centrifugal Fume Blower',
    tag: 'Corrosive Exhaust Air Movement',
    category: 'Industrial Ventilation',
    image: '/images/products/pp-frp-centrifugal-exhaust-blower.jpeg',
    capacity: 'Static Pressure up to 650 mm WG',
    temp: 'ISO 1940 Dynamic Balance',
    standard: 'AMCA 210 Rated',
    slug: 'pp-frp-centrifugal-blower'
  }
];

export default function HeroProductCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(nextSlide, 5000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, currentIndex]);

  const current = SLIDES[currentIndex];

  return (
    <div 
      className="relative rounded-3xl overflow-hidden bg-white border border-slate-200/80 shadow-2xl shadow-slate-900/10 group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Main Photographic Slide */}
      <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-slate-100">
        <Image
          src={current.image}
          alt={current.name}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 55vw"
          className="object-cover object-center transition-all duration-700 ease-out"
        />

        {/* Soft daylight gradient overlay for semantic readibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent pointer-events-none" />

        {/* Semantic Top Badges */}
        <div className="absolute top-4 left-4 z-20 flex flex-wrap gap-2">
          <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#3B6E16] border border-[#65B32E]/30 font-bold text-xs shadow-md flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#65B32E] animate-pulse" />
            <span>FABRICATION WORKS SHOWCASE</span>
          </span>
          <span className="px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-amber-300 font-mono text-xs font-semibold shadow-md">
            {current.category}
          </span>
        </div>

        {/* Floating Slide Overlay Information (Zero Raw Text On Media) */}
        <div className="absolute bottom-6 left-6 right-6 z-20 text-white space-y-3">
          <div className="inline-block px-2.5 py-0.5 rounded bg-[#65B32E] text-white font-mono text-[11px] font-bold uppercase tracking-wider">
            {current.tag}
          </div>
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white leading-tight drop-shadow-md">
            {current.name}
          </h3>

          {/* Quick Spec Matrix */}
          <div className="grid grid-cols-3 gap-2 pt-1 max-w-xl text-xs font-mono">
            <div className="p-2.5 rounded-xl bg-slate-900/80 backdrop-blur-md border border-white/10">
              <span className="text-slate-400 block text-[10px]">CAPACITY / SIZING</span>
              <span className="text-white font-bold truncate block">{current.capacity}</span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-900/80 backdrop-blur-md border border-white/10">
              <span className="text-slate-400 block text-[10px]">RATING / LIMIT</span>
              <span className="text-amber-300 font-bold truncate block">{current.temp}</span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-900/80 backdrop-blur-md border border-white/10">
              <span className="text-slate-400 block text-[10px]">DESIGN CODE</span>
              <span className="text-[#82d645] font-bold truncate block">{current.standard}</span>
            </div>
          </div>

          <div className="pt-2 flex items-center justify-between">
            <Link
              href={`/products/${current.slug}`}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white hover:bg-[#F2F8EC] text-slate-900 font-bold text-xs shadow-lg transition-all"
            >
              <span>View Technical Sizing &amp; Specs</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#65B32E]" />
            </Link>

            <span className="text-[11px] font-mono text-slate-300 flex items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-[#65B32E]" />
              <span>100% Spark Tested</span>
            </span>
          </div>
        </div>

        {/* Previous / Next Arrow Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-white/90 hover:bg-white text-slate-800 shadow-lg transition-transform hover:scale-110"
          aria-label="Previous product"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-white/90 hover:bg-white text-slate-800 shadow-lg transition-transform hover:scale-110"
          aria-label="Next product"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Bottom Thumbnail Strip & Auto-Play Indicator */}
      <div className="p-3 bg-slate-50 border-t border-slate-200/80 flex items-center justify-between gap-2 overflow-x-auto">
        <div className="flex items-center gap-2">
          {SLIDES.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => setCurrentIndex(idx)}
              className={`relative w-14 h-11 sm:w-16 sm:h-12 rounded-lg overflow-hidden border-2 transition-all shrink-0 ${
                currentIndex === idx
                  ? 'border-[#65B32E] shadow-md ring-2 ring-[#65B32E]/30 scale-105'
                  : 'border-slate-300 opacity-60 hover:opacity-100'
              }`}
            >
              <Image
                src={slide.image}
                alt={slide.name}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>

        {/* Progress & Pause toggle */}
        <div className="flex items-center gap-3 pr-2">
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="p-1.5 rounded-md text-slate-500 hover:text-slate-800 hover:bg-slate-200 text-xs"
            title={isPaused ? 'Resume Carousel' : 'Pause Carousel'}
          >
            {isPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
          </button>
          <span className="text-[11px] font-mono text-slate-500 font-bold">
            0{currentIndex + 1} / 0{SLIDES.length}
          </span>
        </div>
      </div>
    </div>
  );
}

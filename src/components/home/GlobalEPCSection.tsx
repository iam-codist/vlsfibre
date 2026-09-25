'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Globe2, 
  Ship, 
  ShieldCheck, 
  Cpu, 
  FileCheck2, 
  Wrench, 
  ArrowRight, 
  CheckCircle2, 
  Anchor, 
  Factory,
  Layers,
  Sparkles
} from 'lucide-react';
import ParallaxImage from '@/components/ui/ParallaxImage';
import { useLanguage } from '@/context/LanguageContext';

const EPC_PILLARS = [
  {
    icon: Ship,
    tag: 'GLOBAL LOGISTICS',
    title: 'Dual Coastal Deep-Water Port Gateways',
    desc: 'Located adjacent to Dahej, Kandla, and Mundra ports (Gujarat) and Chennai & Tuticorin ports (Tamil Nadu). We engineer breakbulk crane rigging and seaworthy timber saddle crating with moisture-barrier VCI foil wrapping for breakbulk and open-top flat-rack containers.',
    highlight: 'FOB / CIF Global Dispatches',
    image: '/images/products/frp-vertical-storage-tank-crane-hoist.jpeg'
  },
  {
    icon: ShieldCheck,
    tag: 'NON-DESTRUCTIVE QA',
    title: '100% Dielectric High-Voltage Spark Testing',
    desc: 'Zero tolerance for liner porosity. All dual-laminate thermoplastic weld seams (PP / PVDF / ECTFE) are continuously scanned with high-frequency spark probes at 15 to 20 kV in accordance with German DVS 2206 and ASTM standards.',
    highlight: '20,000 V Pinhole-Free Seam Guarantee',
    image: '/images/products/pp-frp-chemical-reaction-vessel-blue.jpeg'
  },
  {
    icon: FileCheck2,
    tag: 'INTERNATIONAL CODES',
    title: 'ASME RTP-1 & BS 4994 FEA Sizing',
    desc: 'Finite Element Analysis (FEA) models stress distributions across nozzle necks, limpet coils, and skirt supports. Certified for operating pressures up to 10 Bar, full vacuum (-760 mm Hg), and ambient temperatures from -20°C to +130°C.',
    highlight: 'Third-Party TPI: TÜV, SGS, BV, DNV',
    image: '/images/products/pp-frp-scrubber-packed-columns-towers.jpeg'
  },
  {
    icon: Wrench,
    tag: 'SITE MOBILIZATION',
    title: 'PPRC & HDPE Electro-Fusion Field Crews',
    desc: 'Our specialized mobile site squads travel worldwide with computerized butt-welding and electro-fusion machines to execute large-diameter acid effluent lines, trench piping, and dual-laminate vessel tie-ins directly on client sites.',
    highlight: 'Turnkey Field Pipeline Erection',
    image: '/images/products/pp-rectangular-pickling-tanks.jpeg'
  }
];

const GLOBAL_STANDARDS = [
  { code: 'ASME Section X', detail: 'Fiberglass Pressure Vessels' },
  { code: 'ASME RTP-1', detail: 'Corrosion Resistant Thermoset' },
  { code: 'BS 4994:1987', detail: 'British Standard Plastics Vessels' },
  { code: 'DIN / DVS 2205', detail: 'Thermoplastic Welded Tanks' },
  { code: 'ASTM D3299', detail: 'Filament-Wound Chemical Tanks' },
  { code: 'ISO 9001:2015', detail: 'Certified Quality Management' }
];

export default function GlobalEPCSection() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const rotateRing = useTransform(scrollYProgress, [0, 1], [0, 90]);

  return (
    <section ref={containerRef} className="py-28 bg-[#1F2633] text-white relative overflow-hidden border-t border-b border-slate-700/80">
      {/* Background Engineering Atmosphere & Parallax Grid */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 pattern-technical-grid opacity-15 pointer-events-none" />
      <div className="absolute inset-0 pattern-fiber-weave opacity-10 pointer-events-none" />

      {/* Parallax Radial Glow Accents */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#65B32E]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#65B32E]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Rotating Background CAD Compass Ring */}
      <motion.svg
        style={{ rotate: rotateRing }}
        className="absolute -right-24 top-1/2 -translate-y-1/2 w-[550px] h-[550px] stroke-[#65B32E]/15 fill-none pointer-events-none hidden lg:block"
        viewBox="0 0 400 400"
      >
        <circle cx="200" cy="200" r="180" strokeWidth="1" strokeDasharray="6 6" />
        <circle cx="200" cy="200" r="130" strokeWidth="1.5" />
        <circle cx="200" cy="200" r="80" strokeWidth="0.8" strokeDasharray="3 3" />
        <path d="M 200 10 L 200 390 M 10 200 L 390 200" strokeWidth="0.8" />
      </motion.svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#65B32E]/15 text-[#82d645] border border-[#65B32E]/30 text-xs font-bold font-mono tracking-wider uppercase">
            <Globe2 className="w-3.5 h-3.5 text-[#65B32E]" />
            <span>{t('epc.tag')}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display leading-[1.15]">
            {t('epc.title')}
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
            {t('epc.desc')}
          </p>
        </div>

        {/* 4 Large EPC Capability Cards with Parallax Imagery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {EPC_PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="group rounded-3xl bg-[#2B3445]/80 hover:bg-[#2B3445] border border-slate-700/80 hover:border-[#65B32E] transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-xl"
              >
                {/* Visual Parallax Window */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900">
                  <ParallaxImage
                    src={pillar.image}
                    alt={pillar.title}
                    parallaxOffset={25}
                    containerClassName="w-full h-full"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2B3445] via-transparent to-transparent pointer-events-none" />

                  {/* Top Floating Badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 rounded-full bg-[#1F2633]/90 backdrop-blur-md border border-slate-700 text-[#82d645] text-[10px] font-mono font-bold tracking-wider uppercase flex items-center gap-1.5">
                      <Icon className="w-3.5 h-3.5 text-[#65B32E]" />
                      <span>{pillar.tag}</span>
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#65B32E] transition-colors font-display">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                      {pillar.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-700/60 flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#82d645] flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-[#65B32E]" />
                      <span>{pillar.highlight}</span>
                    </span>

                    <Link
                      href="/contact"
                      className="text-xs font-bold text-white group-hover:text-[#65B32E] inline-flex items-center gap-1 transition-colors"
                    >
                      <span>Inquire Specs</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* International Standards & TPI Acceptance Bar */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#171D27] border-t-2 border-[#65B32E] space-y-6 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-700/70">
            <div>
              <span className="text-[11px] font-mono text-[#82d645] uppercase tracking-wider font-bold block">
                {t('epc.standards_tag')}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                Accepted by International Inspection Agencies
              </h3>
            </div>
            <div className="flex flex-wrap items-center gap-2 notranslate" translate="no">
              {['TÜV Rheinland', 'Bureau Veritas', 'SGS', 'DNV GL', 'Lloyds Register'].map((tpi) => (
                <span
                  key={tpi}
                  className="px-2.5 py-1 rounded-lg bg-[#2B3445] text-slate-200 text-[11px] font-mono font-bold border border-slate-700"
                >
                  {tpi}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 text-xs font-mono notranslate" translate="no">
            {GLOBAL_STANDARDS.map((s, i) => (
              <div key={i} className="p-3.5 rounded-xl bg-[#222A38] border border-slate-700/60 space-y-1">
                <span className="text-[#82d645] font-bold block">{s.code}</span>
                <span className="text-slate-400 text-[10px] block leading-tight">{s.detail}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Global Client Engagement Callout */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-8 rounded-3xl bg-gradient-to-r from-[#2B3445] to-[#1F2633] border border-slate-700">
          <div className="space-y-1 max-w-xl">
            <h4 className="text-lg font-bold text-white font-display">
              Executing a Greenfield or Plant Expansion Project?
            </h4>
            <p className="text-xs text-slate-300">
              Our engineering desk provides formal ASME RTP-1 calculation packages, nozzle orientation drawings, and custom export crating dimensions within 24 hours.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-xl bg-[#65B32E] hover:bg-[#549824] text-white font-extrabold text-xs tracking-wider uppercase transition-all shadow-md shadow-[#65B32E]/30"
            >
              Contact Global EPC Desk
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

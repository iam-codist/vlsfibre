'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Award, 
  Zap, 
  Globe2, 
  Building2, 
  CheckCircle2, 
  ArrowUpRight,
  Factory,
  Sparkles
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface ClientItem {
  name: string;
  shortName: string;
  sector: string;
  location: string;
  vessels: string;
  accentColor: string;
}

const ROW_ONE_CLIENTS: ClientItem[] = [
  {
    name: 'Gujarat Alkalies & Chemicals Ltd (GACL)',
    shortName: 'GACL',
    sector: 'Chlor-Alkali & Caustic Soda',
    location: 'Dahej SEZ, Gujarat',
    vessels: 'PP-FRP Scrubbers & Reaction Tanks',
    accentColor: '#65B32E'
  },
  {
    name: 'Tata Chemicals Limited',
    shortName: 'TATA',
    sector: 'Inorganic Chemicals & Soda Ash',
    location: 'Mithapur Works, Gujarat',
    vessels: 'Dual-Laminate PVDF-FRP Storage',
    accentColor: '#1F2633'
  },
  {
    name: 'Aarti Industries Limited',
    shortName: 'AARTI',
    sector: 'Specialty Chemicals & Benzene Derivatives',
    location: 'Jhagadia & Vapi Complexes',
    vessels: 'Severe Acid Absorption Towers',
    accentColor: '#65B32E'
  },
  {
    name: 'Reliance Petrochemicals',
    shortName: 'RELIANCE',
    sector: 'Petrochemicals & Polymer Refining',
    location: 'Jamnagar Hub, Gujarat',
    vessels: 'Heavy Industrial FRP Headers & Ducts',
    accentColor: '#1F2633'
  },
  {
    name: 'Deepak Nitrite Limited',
    shortName: 'DEEPAK',
    sector: 'Phenolics & Organic Intermediates',
    location: 'Nandesari GIDC, Vadodara',
    vessels: 'Spiral HDPE Storage & Fume Columns',
    accentColor: '#65B32E'
  },
  {
    name: 'UPL Limited',
    shortName: 'UPL',
    sector: 'Agrochemicals & Crop Protection',
    location: 'Ankleshwar & Jhagadia Works',
    vessels: 'Agitated Nutsche Filters & Reaction Units',
    accentColor: '#1F2633'
  },
  {
    name: 'Saint-Gobain India',
    shortName: 'SAINT-GOBAIN',
    sector: 'High-Performance Abrasives & Glass',
    location: 'Jhagadia Plant, Gujarat',
    vessels: 'Continuous Acid Pickling Dip Tanks',
    accentColor: '#65B32E'
  }
];

const ROW_TWO_CLIENTS: ClientItem[] = [
  {
    name: 'Vedanta Resources & Sterlite',
    shortName: 'VEDANTA',
    sector: 'Non-Ferrous Metallurgy & Copper Refining',
    location: 'Silvassa & Tuticorin Units',
    vessels: 'Concentrated H2SO4 Storage Tanks',
    accentColor: '#1F2633'
  },
  {
    name: 'Pidilite Industries',
    shortName: 'PIDILITE',
    sector: 'Specialty Polymers & Adhesives',
    location: 'Vapi & Kala Amb Plants',
    vessels: 'Dual-Laminate Reaction Vessels',
    accentColor: '#65B32E'
  },
  {
    name: 'Jubilant Ingrevia',
    shortName: 'JUBILANT',
    sector: 'Life Science Ingredients & API Intermediates',
    location: 'Bharuch SEZ, Gujarat',
    vessels: 'Solvent Recovery & Vacuum Scrubbers',
    accentColor: '#1F2633'
  },
  {
    name: 'Atul Limited',
    shortName: 'ATUL',
    sector: 'Dyes, Resins & Bulk Intermediates',
    location: 'Valsad Manufacturing Complex',
    vessels: 'Chlorination & Bromination Vessels',
    accentColor: '#65B32E'
  },
  {
    name: 'Hindalco Industries (Aditya Birla)',
    shortName: 'HINDALCO',
    sector: 'Aluminium Smelting & Chemical Refining',
    location: 'Dahej Marine Facilities',
    vessels: 'Caustic Brine Handling Tanks',
    accentColor: '#1F2633'
  },
  {
    name: 'SRF Limited',
    shortName: 'SRF',
    sector: 'Fluorochemicals & Refrigerants',
    location: 'Dahej Industrial Area',
    vessels: 'Anhydrous HF & Halogen Ducts',
    accentColor: '#65B32E'
  },
  {
    name: 'Meghmani Organics',
    shortName: 'MEGHMANI',
    sector: 'Pigments & Agrochemical Intermediates',
    location: 'Panoli & Dahej Sites',
    vessels: 'Custom FRP Chimneys & Scrubbing Towers',
    accentColor: '#1F2633'
  }
];

const CREDIBILITY_METRICS = [
  {
    icon: Factory,
    value: '500+',
    label: 'Industrial Vessels Built',
    sublabel: 'Zero in-service catastrophic shell ruptures in 20+ years',
    tag: 'Proven Field Reliability'
  },
  {
    icon: ShieldCheck,
    value: '25+ Yrs',
    label: 'Engineered Service Life',
    sublabel: 'ASME RTP-1, BS 4994 & ASTM D3299 calibrated designs',
    tag: 'ASME / BS Compliant'
  },
  {
    icon: Zap,
    value: '20,000 V',
    label: '100% Spark Tested',
    sublabel: 'Nondestructive dielectric testing guarantees zero pinholes',
    tag: '100% QA Inspection'
  },
  {
    icon: Globe2,
    value: '14+ Countries',
    label: 'Global Export Delivery',
    sublabel: 'Multimodal sea freight from Dahej & Chennai deep-water ports',
    tag: 'Turnkey International'
  }
];

const INSPECTION_AGENCIES = [
  'TÜV Rheinland',
  'Bureau Veritas',
  'Lloyd\'s Register',
  'DNV-GL',
  'SGS Industrial',
  'Engineers India Ltd (EIL)',
  'Tata Projects TPI'
];

export default function TrustedClients() {
  const { t } = useLanguage();
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="py-20 bg-gradient-to-b from-white via-[#fcfdfa] to-white relative overflow-hidden border-b border-slate-100">
      {/* Background Engineering Fiber Weave */}
      <div className="absolute inset-0 pattern-fiber-weave opacity-30 pointer-events-none" />

      {/* Decorative Gradient Glows */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[250px] bg-[#65B32E]/8 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#65B32E]/10 border border-[#65B32E]/25 text-[#549824] text-xs font-bold font-mono tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-[#65B32E] animate-pulse" />
            <span>{t('clients.tag')}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-[#1F2633] tracking-tight font-display">
            {t('clients.title')}
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            {t('clients.subtitle')}
          </p>
        </div>

        {/* Credibility Key Metrics Ribbon */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {CREDIBILITY_METRICS.map((metric, idx) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-[#65B32E]/50 transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#65B32E]/10 via-transparent to-transparent rounded-bl-full pointer-events-none transition-transform group-hover:scale-110" />

                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#65B32E]/10 text-[#65B32E] flex items-center justify-center group-hover:bg-[#65B32E] group-hover:text-white transition-colors duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold font-mono uppercase tracking-wider text-[#65B32E] bg-[#65B32E]/10 px-2 py-0.5 rounded-full">
                    {metric.tag}
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#1F2633] tracking-tight font-display flex items-baseline gap-1">
                    <span>{metric.value}</span>
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-800">
                    {metric.label}
                  </h4>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    {metric.sublabel}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Infinite Dual-Row Smooth Marquee */}
      <div 
        className="relative w-full space-y-4 overflow-hidden py-2"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Soft edge gradient fades */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none" />

        {/* Marquee Row 1 (Left to Right / Moving West) */}
        <div className="flex select-none">
          <motion.div
            className="flex gap-4 shrink-0 pr-4"
            animate={{ x: isPaused ? undefined : ['0%', '-50%'] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 38,
                ease: 'linear'
              }
            }}
          >
            {[...ROW_ONE_CLIENTS, ...ROW_ONE_CLIENTS].map((client, idx) => (
              <div
                key={`row1-${idx}`}
                className="w-[300px] sm:w-[340px] shrink-0 bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs hover:shadow-lg hover:border-[#65B32E]/60 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center font-display font-extrabold text-xs text-[#1F2633] group-hover:bg-[#65B32E] group-hover:text-white group-hover:border-[#65B32E] transition-all duration-300">
                        {client.shortName.slice(0, 3)}
                      </div>
                      <div>
                        <span className="text-[10px] font-mono font-bold text-[#65B32E] uppercase tracking-wide block">
                          Verified Conglomerate
                        </span>
                        <div className="text-xs font-bold text-[#1F2633] truncate max-w-[190px]">
                          {client.name}
                        </div>
                      </div>
                    </div>
                    <Building2 className="w-4 h-4 text-slate-300 group-hover:text-[#65B32E] transition-colors" />
                  </div>

                  <div className="space-y-1 my-2">
                    <p className="text-[11px] font-medium text-slate-700 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#65B32E]" />
                      <span className="truncate">{client.sector}</span>
                    </p>
                    <p className="text-[10px] text-slate-500 font-mono flex items-center gap-1">
                      <span>Site:</span>
                      <span className="text-slate-600 font-semibold">{client.location}</span>
                    </p>
                  </div>
                </div>

                <div className="pt-2.5 mt-1 border-t border-slate-100 flex items-center justify-between text-[10px]">
                  <span className="text-slate-500 truncate max-w-[210px] italic">
                    {client.vessels}
                  </span>
                  <span className="inline-flex items-center text-[#65B32E] font-bold gap-0.5 group-hover:translate-x-0.5 transition-transform">
                    <CheckCircle2 className="w-3 h-3 text-[#65B32E]" />
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Marquee Row 2 (Right to Left / Moving East) */}
        <div className="flex select-none">
          <motion.div
            className="flex gap-4 shrink-0 pr-4"
            animate={{ x: isPaused ? undefined : ['-50%', '0%'] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 42,
                ease: 'linear'
              }
            }}
          >
            {[...ROW_TWO_CLIENTS, ...ROW_TWO_CLIENTS].map((client, idx) => (
              <div
                key={`row2-${idx}`}
                className="w-[300px] sm:w-[340px] shrink-0 bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs hover:shadow-lg hover:border-[#65B32E]/60 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center font-display font-extrabold text-xs text-[#1F2633] group-hover:bg-[#1F2633] group-hover:text-[#65B32E] group-hover:border-[#1F2633] transition-all duration-300">
                        {client.shortName.slice(0, 3)}
                      </div>
                      <div>
                        <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wide block">
                          Certified Installation
                        </span>
                        <div className="text-xs font-bold text-[#1F2633] truncate max-w-[190px]">
                          {client.name}
                        </div>
                      </div>
                    </div>
                    <Factory className="w-4 h-4 text-slate-300 group-hover:text-[#1F2633] transition-colors" />
                  </div>

                  <div className="space-y-1 my-2">
                    <p className="text-[11px] font-medium text-slate-700 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1F2633]" />
                      <span className="truncate">{client.sector}</span>
                    </p>
                    <p className="text-[10px] text-slate-500 font-mono flex items-center gap-1">
                      <span>Site:</span>
                      <span className="text-slate-600 font-semibold">{client.location}</span>
                    </p>
                  </div>
                </div>

                <div className="pt-2.5 mt-1 border-t border-slate-100 flex items-center justify-between text-[10px]">
                  <span className="text-slate-500 truncate max-w-[210px] italic">
                    {client.vessels}
                  </span>
                  <span className="inline-flex items-center text-[#1F2633] font-bold gap-0.5 group-hover:translate-x-0.5 transition-transform">
                    <CheckCircle2 className="w-3 h-3 text-[#65B32E]" />
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Third Party Inspection Agency Ribbon */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 relative z-10">
        <div className="bg-[#1F2633] rounded-2xl p-5 sm:p-6 text-white flex flex-col md:flex-row items-center justify-between gap-5 shadow-lg">
          <div className="flex items-center gap-3 text-center md:text-left">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-[#65B32E]">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#65B32E] font-bold block">
                Independent Third-Party Inspection (TPI)
              </span>
              <p className="text-xs sm:text-sm text-slate-300 font-medium">
                All vessels & scrubbers engineered to clear client-mandated third-party testing protocols:
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-end gap-2 sm:gap-3">
            {INSPECTION_AGENCIES.map((agency, i) => (
              <span
                key={i}
                className="text-[11px] font-mono font-semibold bg-white/10 hover:bg-white/15 px-2.5 py-1 rounded-md text-slate-200 border border-white/10 transition-colors"
              >
                {agency}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

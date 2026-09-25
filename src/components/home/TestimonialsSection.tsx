'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Quote, 
  Star, 
  CheckCircle2, 
  ShieldCheck, 
  Building, 
  ArrowRight, 
  Award, 
  FileCheck, 
  Sparkles,
  Layers,
  Activity,
  Factory
} from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

interface Testimonial {
  id: string;
  category: 'chlor-alkali' | 'pharma' | 'metallurgy' | 'scrubbers';
  clientName: string;
  role: string;
  organization: string;
  siteLocation: string;
  equipment: string;
  resinSpec: string;
  rating: number;
  highlightMetric: string;
  metricLabel: string;
  quote: string;
  inspectionAgency: string;
  yearInService: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 'dahej-chlor-alkali',
    category: 'chlor-alkali',
    clientName: 'Rajendra P. Mehta',
    role: 'Chief General Manager — Technical & Projects',
    organization: 'Leading Chlor-Alkali & Caustic Mega-Complex',
    siteLocation: 'Dahej SEZ, Gujarat',
    equipment: '14x PP-FRP Chemical Reaction Vessels (35 kL)',
    resinSpec: 'PP-H Liner + Derakane 411-350 Vinyl Ester FRP',
    rating: 5,
    highlightMetric: '0.00% Pinhole Leaks',
    metricLabel: 'After 6+ years handling boiling 33% HCl at 85°C',
    quote: 'We commissioned 14 dual-laminate PP-FRP reaction tanks from VLS Fibre for our Dahej expansion. The thermoformed dished heads and continuous sheet butt-welding passed 20 kV spark testing on the first run with TÜV Rheinland witnessing. Six years later, zero permeation, zero stress fractures, and absolute peace of mind during heavy seasonal cycles.',
    inspectionAgency: 'Witnessed by TÜV Rheinland',
    yearInService: 'In Service Since 2018'
  },
  {
    id: 'hyderabad-api',
    category: 'pharma',
    clientName: 'Dr. S. K. Nambiar',
    role: 'Head of Engineering & Plant Infrastructure',
    organization: 'Global USFDA-Approved Bulk Drug & API Facility',
    siteLocation: 'Jeedimetla Pharma SEZ, Hyderabad',
    equipment: '2x 110 kL On-Site Fabricated Acid Storage Tanks',
    resinSpec: 'PVDF-FRP Dual Laminate + Antistatic Conductive Veil',
    rating: 5,
    highlightMetric: '18 Days Turnaround',
    metricLabel: 'Full on-site cylindrical winding & hydrotest clearance',
    quote: 'Transporting two 110,000-liter storage tanks through municipal Hyderabad roadways was physically impossible due to overpass height restrictions. VLS Fibre deployed their mobile site-winding gantry and certified extrusion welders directly inside our containment dike. The tanks were built, spark tested, and hydrotested in 18 days without halting neighboring production.',
    inspectionAgency: 'Third-Party Inspected by Bureau Veritas',
    yearInService: 'Commissioned 2021'
  },
  {
    id: 'jamshedpur-pickling',
    category: 'metallurgy',
    clientName: 'Vikramjit Sengupta',
    role: 'Senior VP — Cold Rolling Mill & Pickling Lines',
    organization: 'High-Tensile Steel & Galvanizing Works',
    siteLocation: 'Jamshedpur Industrial Belt',
    equipment: '3x PP Heavy Rectangular Pickling Tanks with External Steel I-Beam Encasement',
    resinSpec: 'High-Impact Extruded Polypropylene + Cross-Linked FRP Wrap',
    rating: 5,
    highlightMetric: 'Zero Shell Fatigue',
    metricLabel: 'Handling continuous 20% H2SO4 at 75°C with heavy coil dips',
    quote: 'Steel pickling takes a brutal toll on tank integrity due to crane shockloads and acid fumes. VLS Fibre custom-reinforced the lip flanges and rim headers with heavy structural steel ribs encapsulated in corrosion-proof FRP. Their tanks have absorbed thousands of coil immersions with zero sagging or joint delamination.',
    inspectionAgency: 'Inspected by SGS Industrial Services',
    yearInService: 'In Service Since 2019'
  },
  {
    id: 'bharuch-scrubbers',
    category: 'scrubbers',
    clientName: 'Harish R. Patel',
    role: 'Vice President — Environmental Safety & EHS',
    organization: 'Agrochemical & Organophosphates Manufacturing Hub',
    siteLocation: 'Panoli & Jhagadia Cluster, Gujarat',
    equipment: '45,000 CFM Packed Bed Absorption Scrubber + Mist Eliminator & Stack',
    resinSpec: 'Brominated Flame-Retardant FRP (Hetron 922) + PTFE Liners',
    rating: 5,
    highlightMetric: '99.7% Fume Abatement',
    metricLabel: 'Consistently beating state PCB emission limits',
    quote: 'Our chlorinated byproduct vent lines required scrubbers capable of handling erratic thermal spikes and noxious chlorine gas rushes. VLS Fibre delivered complete engineering packages including packing hydraulics, dual-spray headers, and high-efficiency centrifugal FRP blowers. Our stack monitoring reports have never had a single violation.',
    inspectionAgency: 'Approved by State Pollution Control Board',
    yearInService: 'Operating Since 2020'
  },
  {
    id: 'vadodara-specialty',
    category: 'chlor-alkali',
    clientName: 'Mukeshbhai D. Shah',
    role: 'Lead Mechanical Reliability Manager',
    organization: 'Specialty Chemical Conglomerate',
    siteLocation: 'Nandesari GIDC, Vadodara',
    equipment: 'Spiral-Wound HDPE Storage Tanks for 98% Sulfuric Acid',
    resinSpec: 'PE-100 High-Density Virgin Polymer (Spiral Mandrel Wound)',
    rating: 5,
    highlightMetric: '100% Weldless Monolithic Body',
    metricLabel: 'Zero longitudinal weld seam vulnerabilities',
    quote: 'What sets VLS Fibre apart is their engineering depth. They don\'t just quote from a catalog; their team generated FEA stress simulations on nozzle loads and delivered full GA drawings within 48 hours. The seamless spiral-wound construction eliminated all longitudinal seam risks for our concentrated acid storage.',
    inspectionAgency: 'Third-Party Audited by Lloyd\'s Register',
    yearInService: 'In Service Since 2022'
  }
];

const CATEGORIES = [
  { id: 'all', label: 'All Process Units' },
  { id: 'chlor-alkali', label: 'Chlor-Alkali & Acids' },
  { id: 'pharma', label: 'Pharma & API Cleanrooms' },
  { id: 'metallurgy', label: 'Steel Pickling Lines' },
  { id: 'scrubbers', label: 'Fume Scrubbing & FGD' }
];

export default function TestimonialsSection() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedTestimonial, setSelectedTestimonial] = useState<string>(TESTIMONIALS[0].id);

  const filteredTestimonials = activeCategory === 'all' 
    ? TESTIMONIALS 
    : TESTIMONIALS.filter(item => item.category === activeCategory);

  const activeData = TESTIMONIALS.find(t => t.id === selectedTestimonial) || TESTIMONIALS[0];

  return (
    <section className="py-24 bg-[#f8f9fa] border-t border-b border-slate-200/80 relative overflow-hidden">
      {/* Background Engineering Grids */}
      <div className="absolute inset-0 pattern-technical-grid opacity-25 pointer-events-none" />

      {/* Decorative Brand Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#65B32E]/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-[#1F2633]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#65B32E]/10 border border-[#65B32E]/25 text-[#549824] text-xs font-bold font-mono tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-[#65B32E] animate-pulse" />
              <span>{t('testimonials.tag')}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-[#1F2633] tracking-tight font-display">
              {t('testimonials.title')}
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {t('testimonials.subtitle')}
            </p>
          </div>

          {/* Interactive Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  const firstMatch = cat.id === 'all' 
                    ? TESTIMONIALS[0].id 
                    : TESTIMONIALS.find(i => i.category === cat.id)?.id || TESTIMONIALS[0].id;
                  setSelectedTestimonial(firstMatch);
                }}
                className={`text-xs font-bold px-3.5 py-2 rounded-full transition-all duration-200 cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#1F2633] text-white shadow-md'
                    : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:border-slate-300'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Modern Interactive Feature Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Left Column: Interactive Selector List (5 Columns on Large) */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-xs uppercase font-mono font-bold tracking-wider text-slate-500 mb-2 px-1">
              Select Industrial Plant Case Study:
            </div>
            
            <div className="space-y-3">
              {filteredTestimonials.map((item) => {
                const isSelected = item.id === activeData.id;
                return (
                  <motion.div
                    key={item.id}
                    layout
                    onClick={() => setSelectedTestimonial(item.id)}
                    className={`p-4 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? 'bg-white border-[#65B32E] shadow-md ring-2 ring-[#65B32E]/20'
                        : 'bg-white/80 hover:bg-white border-slate-200 hover:border-slate-300 text-slate-700'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div className="space-y-0.5">
                        <span className="text-[10px] font-mono font-bold text-[#65B32E] uppercase tracking-wide">
                          {item.siteLocation}
                        </span>
                        <h4 className="text-sm font-bold text-[#1F2633] leading-snug">
                          {item.organization}
                        </h4>
                      </div>
                      <div className="flex items-center text-amber-400 shrink-0">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    </div>

                    <div className="text-xs text-slate-500 line-clamp-1 italic mb-2">
                      &quot;{item.quote.slice(0, 85)}...&quot;
                    </div>

                    <div className="flex items-center justify-between text-[11px] pt-2 border-t border-slate-100">
                      <span className="font-semibold text-slate-700 truncate max-w-[200px]">
                        {item.clientName}
                      </span>
                      <span className={`font-mono text-[10px] font-bold ${isSelected ? 'text-[#65B32E]' : 'text-slate-400'}`}>
                        {item.highlightMetric}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Deep-Dive Testimonial & Engineering Dossier Card (7 Columns on Large) */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeData.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200 shadow-xl relative overflow-hidden"
              >
                {/* Decorative Top Accent Ribbon */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#65B32E] via-[#549824] to-[#1F2633]" />

                {/* Subtle Quote Mark Watermark */}
                <Quote className="absolute right-6 top-8 w-24 h-24 text-slate-100 pointer-events-none" />

                {/* Card Top Metadata Bar */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6 relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#65B32E]/10 border border-[#65B32E]/30 text-[#549824] text-xs font-bold font-mono">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#65B32E]" />
                    <span>Verified Installation: {activeData.siteLocation}</span>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                    <Activity className="w-3.5 h-3.5 text-[#65B32E]" />
                    <span>{activeData.yearInService}</span>
                  </div>
                </div>

                {/* Metric Highlight Hero Banner inside Card */}
                <div className="bg-gradient-to-br from-[#1F2633] to-[#2B3445] rounded-2xl p-5 text-white mb-6 shadow-sm relative z-10">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#65B32E] font-bold block">
                        Verified Plant Operational Metric
                      </span>
                      <div className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                        {activeData.highlightMetric}
                      </div>
                      <p className="text-xs text-slate-300 mt-0.5">
                        {activeData.metricLabel}
                      </p>
                    </div>

                    <div className="shrink-0 bg-white/10 px-3 py-2 rounded-xl border border-white/15">
                      <div className="flex items-center gap-1 text-amber-400 mb-1">
                        {[...Array(activeData.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <span className="text-[10px] font-mono text-slate-200 block">
                        5.0 / 5.0 Inspection Rating
                      </span>
                    </div>
                  </div>
                </div>

                {/* Testimonial Quote */}
                <blockquote className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed mb-6 relative z-10 italic">
                  &quot;{activeData.quote}&quot;
                </blockquote>

                {/* Technical Equipment Specification Tags */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 relative z-10">
                  <div>
                    <span className="text-[10px] font-mono uppercase font-bold text-slate-400 block mb-1">
                      Installed Process Equipment:
                    </span>
                    <p className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                      <Factory className="w-3.5 h-3.5 text-[#65B32E] shrink-0" />
                      <span>{activeData.equipment}</span>
                    </p>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase font-bold text-slate-400 block mb-1">
                      Material & Liner Specification:
                    </span>
                    <p className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-[#65B32E] shrink-0" />
                      <span>{activeData.resinSpec}</span>
                    </p>
                  </div>
                </div>

                {/* Client Profile Footer */}
                <div className="pt-5 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-[#1F2633] text-white flex items-center justify-center font-display font-extrabold text-sm border-2 border-[#65B32E]">
                      {activeData.clientName.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#1F2633]">
                        {activeData.clientName}
                      </h4>
                      <p className="text-xs text-slate-600 font-medium">
                        {activeData.role}
                      </p>
                      <p className="text-[11px] text-slate-500">
                        {activeData.organization}
                      </p>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 text-[11px] font-mono font-semibold text-[#549824] bg-[#65B32E]/10 px-3 py-1.5 rounded-lg border border-[#65B32E]/25">
                    <Award className="w-4 h-4 text-[#65B32E]" />
                    <span>{activeData.inspectionAgency}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom Industrial Quality Guarantee Matrix */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#65B32E]/10 text-[#65B32E] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#1F2633] uppercase tracking-wide">
                  ASME RTP-1 Design
                </h4>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  Calculated wall thicknesses and seismic / wind anchors compliant with ASME & BS 4994.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#65B32E]/10 text-[#65B32E] flex items-center justify-center shrink-0">
                <FileCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#1F2633] uppercase tracking-wide">
                  &lt; 24h GA Drawings
                </h4>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  Prompt engineering turnaround with 2D/3D CAD and nozzle orientation approval sheets.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#65B32E]/10 text-[#65B32E] flex items-center justify-center shrink-0">
                <Activity className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#1F2633] uppercase tracking-wide">
                  20,000V Spark Verified
                </h4>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  100% dielectric spark testing of all thermoplastic liner seams prior to dispatch.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#65B32E]/10 text-[#65B32E] flex items-center justify-center shrink-0">
                <Building className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#1F2633] uppercase tracking-wide">
                  On-Site Mobile Squads
                </h4>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  Certified welders and field winding crews ready for fast-track turnaround shut-downs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { 
  Quote, 
  Star, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight, 
  Award, 
  FileCheck, 
  Sparkles,
  Activity,
  Factory,
  ChevronLeft,
  ChevronRight,
  Building2,
  MapPin
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

/* ────────────────────────────────────────────── */
/*  Testimonial Data                              */
/* ────────────────────────────────────────────── */

interface Testimonial {
  id: string;
  clientName: string;
  initials: string;
  avatarGradient: string;
  role: string;
  organization: string;
  industry: string;
  siteLocation: string;
  equipment: string;
  resinSpec: string;
  rating: number;
  highlightMetric: string;
  metricLabel: string;
  quote: string;
  shortQuote: string;
  inspectionAgency: string;
  yearInService: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 'dahej-chlor-alkali',
    clientName: 'Rajendra P. Mehta',
    initials: 'RPM',
    avatarGradient: 'from-emerald-500 to-teal-600',
    role: 'Chief General Manager — Technical & Projects',
    organization: 'Chlor-Alkali & Caustic Mega-Complex',
    industry: 'Chemical Processing',
    siteLocation: 'Dahej SEZ, Gujarat',
    equipment: '14x PP-FRP Chemical Reaction Vessels (35 kL)',
    resinSpec: 'PP-H Liner + Derakane 411-350 Vinyl Ester FRP',
    rating: 5,
    highlightMetric: '0.00% Pinhole Leaks',
    metricLabel: '6+ years handling 33% HCl at 85°C',
    quote: 'We commissioned 14 dual-laminate PP-FRP reaction tanks from VLS Fibre for our Dahej expansion. The thermoformed dished heads and continuous sheet butt-welding passed 20 kV spark testing on the first run with TÜV Rheinland witnessing. Six years later, zero permeation, zero stress fractures, and absolute peace of mind during heavy seasonal cycles.',
    shortQuote: 'The thermoformed dished heads passed 20 kV spark testing on the first run. Six years later — zero permeation, zero stress fractures.',
    inspectionAgency: 'TÜV Rheinland Witnessed',
    yearInService: 'Since 2018'
  },
  {
    id: 'hyderabad-api',
    clientName: 'Dr. S. K. Nambiar',
    initials: 'SKN',
    avatarGradient: 'from-blue-500 to-indigo-600',
    role: 'Head of Engineering & Plant Infrastructure',
    organization: 'USFDA-Approved Bulk Drug & API Facility',
    industry: 'Pharmaceuticals',
    siteLocation: 'Jeedimetla Pharma SEZ, Hyderabad',
    equipment: '2x 110 kL On-Site Fabricated Acid Storage Tanks',
    resinSpec: 'PVDF-FRP Dual Laminate + Antistatic Conductive Veil',
    rating: 5,
    highlightMetric: '18 Days Turnaround',
    metricLabel: 'Full on-site winding & hydrotest clearance',
    quote: 'Transporting two 110,000-liter storage tanks through municipal Hyderabad roadways was physically impossible due to overpass height restrictions. VLS Fibre deployed their mobile site-winding gantry and certified extrusion welders directly inside our containment dike. The tanks were built, spark tested, and hydrotested in 18 days without halting neighboring production.',
    shortQuote: 'VLS Fibre deployed mobile site-winding and built two 110 kL tanks inside our facility in just 18 days — without halting production.',
    inspectionAgency: 'Bureau Veritas Inspected',
    yearInService: 'Commissioned 2021'
  },
  {
    id: 'jamshedpur-pickling',
    clientName: 'Vikramjit Sengupta',
    initials: 'VS',
    avatarGradient: 'from-amber-500 to-orange-600',
    role: 'Senior VP — Cold Rolling Mill & Pickling Lines',
    organization: 'High-Tensile Steel & Galvanizing Works',
    industry: 'Steel & Metallurgy',
    siteLocation: 'Jamshedpur Industrial Belt',
    equipment: '3x PP Rectangular Pickling Tanks with Steel Encasement',
    resinSpec: 'High-Impact PP + Cross-Linked FRP Wrap',
    rating: 5,
    highlightMetric: 'Zero Shell Fatigue',
    metricLabel: 'Continuous 20% H₂SO₄ at 75°C',
    quote: 'Steel pickling takes a brutal toll on tank integrity due to crane shockloads and acid fumes. VLS Fibre custom-reinforced the lip flanges and rim headers with heavy structural steel ribs encapsulated in corrosion-proof FRP. Their tanks have absorbed thousands of coil immersions with zero sagging or joint delamination.',
    shortQuote: 'Custom-reinforced tanks have absorbed thousands of coil immersions with zero sagging or joint delamination.',
    inspectionAgency: 'SGS Industrial Services',
    yearInService: 'Since 2019'
  },
  {
    id: 'bharuch-scrubbers',
    clientName: 'Harish R. Patel',
    initials: 'HRP',
    avatarGradient: 'from-purple-500 to-violet-600',
    role: 'VP — Environmental Safety & EHS',
    organization: 'Agrochemical & Organophosphates Hub',
    industry: 'Agrochemicals',
    siteLocation: 'Panoli & Jhagadia, Gujarat',
    equipment: '45,000 CFM Packed Bed Scrubber + Mist Eliminator',
    resinSpec: 'Flame-Retardant FRP (Hetron 922) + PTFE Liners',
    rating: 5,
    highlightMetric: '99.7% Fume Abatement',
    metricLabel: 'Beating state PCB emission limits',
    quote: 'Our chlorinated byproduct vent lines required scrubbers capable of handling erratic thermal spikes and noxious chlorine gas rushes. VLS Fibre delivered complete engineering packages including packing hydraulics, dual-spray headers, and high-efficiency centrifugal FRP blowers. Our stack monitoring reports have never had a single violation.',
    shortQuote: 'Complete engineering packages with dual-spray headers. Our stack monitoring reports have never had a single violation.',
    inspectionAgency: 'State PCB Approved',
    yearInService: 'Since 2020'
  },
  {
    id: 'vadodara-specialty',
    clientName: 'Mukeshbhai D. Shah',
    initials: 'MDS',
    avatarGradient: 'from-cyan-500 to-blue-600',
    role: 'Lead Mechanical Reliability Manager',
    organization: 'Specialty Chemical Conglomerate',
    industry: 'Specialty Chemicals',
    siteLocation: 'Nandesari GIDC, Vadodara',
    equipment: 'Spiral-Wound HDPE Tanks for 98% H₂SO₄',
    resinSpec: 'PE-100 Virgin Polymer (Spiral Mandrel Wound)',
    rating: 5,
    highlightMetric: '100% Weldless Body',
    metricLabel: 'Zero longitudinal seam risks',
    quote: 'What sets VLS Fibre apart is their engineering depth. They don\'t just quote from a catalog; their team generated FEA stress simulations on nozzle loads and delivered full GA drawings within 48 hours. The seamless spiral-wound construction eliminated all longitudinal seam risks for our concentrated acid storage.',
    shortQuote: 'FEA stress simulations on nozzle loads delivered in 48 hours. Seamless spiral-wound construction eliminated all seam risks.',
    inspectionAgency: "Lloyd's Register Audited",
    yearInService: 'Since 2022'
  }
];

/* ────────────────────────────────────────────── */
/*  Animation Variants                            */
/* ────────────────────────────────────────────── */

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
};

/* ────────────────────────────────────────────── */
/*  Component                                     */
/* ────────────────────────────────────────────── */

export default function TestimonialsSection() {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });
  const [direction, setDirection] = useState(0);

  const activeData = TESTIMONIALS[activeIndex];

  const navigate = (newIndex: number) => {
    setDirection(newIndex > activeIndex ? 1 : -1);
    setActiveIndex(newIndex);
  };

  const prev = () => navigate(activeIndex === 0 ? TESTIMONIALS.length - 1 : activeIndex - 1);
  const next = () => navigate(activeIndex === TESTIMONIALS.length - 1 ? 0 : activeIndex + 1);

  // Auto-advance every 12 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setActiveIndex(prev => (prev + 1) % TESTIMONIALS.length);
    }, 12000);
    return () => clearInterval(interval);
  }, []);

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 40 : -40, opacity: 0, scale: 0.97 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -40 : 40, opacity: 0, scale: 0.97 })
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 sm:py-28 bg-gradient-to-b from-[#fafbfc] via-white to-[#f5f7fa] relative overflow-hidden"
    >
      {/* Subtle background */}
      <div className="absolute inset-0 pattern-technical-grid opacity-15 pointer-events-none" />
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-[#65B32E]/[0.06] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-[#1F2633]/[0.04] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center mb-16 sm:mb-20"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#65B32E]/10 border border-[#65B32E]/25 text-[#549824] text-xs font-bold tracking-wider uppercase mb-5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t('testimonials.tag')}</span>
          </motion.div>

          <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#1F2633] tracking-tight font-display mb-4">
            {t('testimonials.title')}
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-sm sm:text-base text-slate-500 max-w-2xl mx-auto leading-relaxed">
            {t('testimonials.subtitle')}
          </motion.p>
        </motion.div>

        {/* Main Testimonial Showcase */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="mb-14"
        >
          <div className="relative bg-white rounded-[28px] border border-slate-200/80 shadow-xl shadow-slate-200/50 overflow-hidden">
            {/* Top accent bar */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#65B32E] via-[#82D645] to-[#65B32E]" />

            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={activeData.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="grid grid-cols-1 lg:grid-cols-12"
              >
                {/* Left: Quote Content */}
                <div className="lg:col-span-7 p-7 sm:p-10 lg:p-12 flex flex-col justify-between">
                  {/* Verification badge */}
                  <div className="flex flex-wrap items-center gap-2.5 mb-7">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/60 text-emerald-700 text-[11px] font-bold">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Verified Installation</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 text-[11px] font-mono font-semibold">
                      <MapPin className="w-3 h-3" />
                      {activeData.siteLocation}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-50 border border-amber-200/50 text-amber-700 text-[11px] font-semibold">
                      <Activity className="w-3 h-3" />
                      {activeData.yearInService}
                    </span>
                  </div>

                  {/* Quote */}
                  <div className="relative mb-8 flex-1">
                    <Quote className="absolute -top-1 -left-1 w-10 h-10 text-[#65B32E]/15" />
                    <blockquote className="text-base sm:text-lg lg:text-xl text-slate-700 leading-relaxed font-medium pl-7 sm:pl-8">
                      &ldquo;{activeData.quote}&rdquo;
                    </blockquote>
                  </div>

                  {/* Client Profile Card */}
                  <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                    {/* Avatar */}
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${activeData.avatarGradient} flex items-center justify-center text-white font-display font-extrabold text-sm shadow-lg shadow-slate-300/30 shrink-0`}>
                      {activeData.initials}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm sm:text-[15px] font-bold text-[#1F2633] truncate">
                        {activeData.clientName}
                      </h4>
                      <p className="text-xs text-slate-500 font-medium truncate">
                        {activeData.role}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <Building2 className="w-3 h-3 text-[#65B32E] shrink-0" />
                        <span className="text-[11px] text-slate-600 font-semibold truncate">
                          {activeData.organization}
                        </span>
                      </div>
                    </div>
                    {/* Rating */}
                    <div className="hidden sm:flex flex-col items-end shrink-0 gap-1">
                      <div className="flex items-center gap-0.5">
                        {[...Array(activeData.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <span className="text-[10px] font-mono text-slate-400">5.0 / 5.0</span>
                    </div>
                  </div>
                </div>

                {/* Right: Metric + Tech Specs */}
                <div className="lg:col-span-5 bg-gradient-to-br from-[#1F2633] via-[#263040] to-[#1a202e] p-7 sm:p-10 lg:p-12 flex flex-col justify-between relative overflow-hidden">
                  {/* Pattern overlay */}
                  <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
                    backgroundImage: 'radial-gradient(rgba(101,179,46,0.3) 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                  }} />

                  <div className="relative z-10 space-y-8">
                    {/* Metric Hero */}
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#82D645] font-bold block mb-3">
                        Verified Performance Metric
                      </span>
                      <div className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-white font-display leading-none tracking-tight mb-2">
                        {activeData.highlightMetric}
                      </div>
                      <p className="text-sm text-slate-400 leading-relaxed">
                        {activeData.metricLabel}
                      </p>
                    </div>

                    {/* Divider */}
                    <div className="w-12 h-[2px] bg-[#65B32E]/50 rounded-full" />

                    {/* Tech specs */}
                    <div className="space-y-4">
                      <div>
                        <span className="text-[9px] font-mono uppercase tracking-wider text-slate-500 block mb-1">
                          Process Equipment
                        </span>
                        <p className="text-xs text-slate-200 font-semibold flex items-start gap-2">
                          <Factory className="w-3.5 h-3.5 text-[#65B32E] shrink-0 mt-0.5" />
                          <span>{activeData.equipment}</span>
                        </p>
                      </div>
                      <div>
                        <span className="text-[9px] font-mono uppercase tracking-wider text-slate-500 block mb-1">
                          Material Specification
                        </span>
                        <p className="text-xs text-slate-200 font-semibold flex items-start gap-2">
                          <ShieldCheck className="w-3.5 h-3.5 text-[#65B32E] shrink-0 mt-0.5" />
                          <span>{activeData.resinSpec}</span>
                        </p>
                      </div>
                    </div>

                    {/* Inspection badge */}
                    <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.08] border border-white/10 backdrop-blur-sm">
                      <Award className="w-4 h-4 text-[#82D645]" />
                      <span className="text-[11px] font-bold text-slate-200">
                        {activeData.inspectionAgency}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-6 px-1">
            {/* Progress dots */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => navigate(i)}
                  aria-label={`View testimonial ${i + 1}`}
                  className={`transition-all duration-300 rounded-full cursor-pointer ${
                    i === activeIndex
                      ? 'w-8 h-2.5 bg-[#65B32E] shadow-sm shadow-[#65B32E]/30'
                      : 'w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-xl bg-white border border-slate-200 hover:border-[#65B32E] text-slate-600 hover:text-[#65B32E] flex items-center justify-center transition-all duration-200 shadow-sm cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-xl bg-[#1F2633] hover:bg-[#65B32E] text-white flex items-center justify-center transition-all duration-200 shadow-sm cursor-pointer"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Compact Testimonial Cards Row */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-14"
        >
          {TESTIMONIALS.map((item, i) => (
            <motion.button
              key={item.id}
              variants={fadeInUp}
              onClick={() => navigate(i)}
              className={`group text-left p-4 rounded-2xl border transition-all duration-300 cursor-pointer ${
                i === activeIndex
                  ? 'bg-white border-[#65B32E]/40 shadow-md shadow-[#65B32E]/10 ring-1 ring-[#65B32E]/20'
                  : 'bg-white/70 border-slate-200 hover:bg-white hover:border-slate-300 hover:shadow-sm'
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${item.avatarGradient} flex items-center justify-center text-white text-[10px] font-bold shadow-sm shrink-0`}>
                  {item.initials}
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-xs font-bold text-[#1F2633] truncate">{item.clientName}</h4>
                  <p className="text-[10px] text-slate-500 truncate">{item.organization}</p>
                </div>
              </div>
              <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed mb-3 italic">
                &ldquo;{item.shortQuote}&rdquo;
              </p>
              <div className="flex items-center justify-between">
                <span className={`text-[10px] font-mono font-bold ${i === activeIndex ? 'text-[#65B32E]' : 'text-slate-400'}`}>
                  {item.highlightMetric}
                </span>
                <div className="flex items-center gap-px">
                  {[...Array(item.rating)].map((_, j) => (
                    <Star key={j} className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* Quality Guarantee Strip */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-sm"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { icon: ShieldCheck, title: 'ASME RTP-1 Design', desc: 'Compliant wall thickness & seismic anchors per ASME & BS 4994.' },
              { icon: FileCheck, title: '< 24h GA Drawings', desc: '2D/3D CAD with nozzle orientation approval sheets.' },
              { icon: Activity, title: '20 kV Spark Verified', desc: '100% dielectric testing of all liner seams before dispatch.' },
              { icon: Factory, title: 'On-Site Mobile Squads', desc: 'Field winding crews for fast-track shutdown turnarounds.' }
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 group">
                <div className="w-9 h-9 rounded-xl bg-[#65B32E]/10 text-[#65B32E] flex items-center justify-center shrink-0 group-hover:bg-[#65B32E] group-hover:text-white transition-all duration-300">
                  <item.icon className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h4 className="text-[11px] font-bold text-[#1F2633] uppercase tracking-wide leading-tight">{item.title}</h4>
                  <p className="text-[11px] text-slate-500 mt-1 leading-relaxed hidden sm:block">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

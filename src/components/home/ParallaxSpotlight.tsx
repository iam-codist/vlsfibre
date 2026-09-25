'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowRight, 
  ShieldCheck, 
  Layers, 
  Flame, 
  Zap, 
  Thermometer, 
  FileSpreadsheet,
  CheckCircle2,
  Factory
} from 'lucide-react';
import { PRODUCTS } from '@/data/products';
import ParallaxImage from '@/components/ui/ParallaxImage';

export default function ParallaxSpotlight() {
  const spotlightProducts = PRODUCTS.filter((p) => p.featured).slice(0, 4);
  const [activeTab, setActiveTab] = useState(0);
  const current = spotlightProducts[activeTab] || spotlightProducts[0];

  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F2F8EC] text-[#3B6E16] text-xs font-bold border border-[#65B32E]/30">
            <Factory className="w-3.5 h-3.5 text-[#65B32E]" />
            <span>HEAVY FABRICATION SPOTLIGHT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F2633] tracking-tight font-display">
            Flagship Process Equipment &amp; Vessels
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Manufactured with dual-laminate thermoplastic chemical barriers (PP / PVDF / PTFE) and filament-wound vinyl ester structural shells. Built to outlast aggressive chemical processes.
          </p>
        </div>

        {/* Product Navigation Pills */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
          {spotlightProducts.map((p, idx) => (
            <button
              key={p.id}
              onClick={() => setActiveTab(idx)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                activeTab === idx
                  ? 'bg-[#65B32E] text-white shadow-md shadow-[#65B32E]/25 scale-105'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 shadow-xs'
              }`}
            >
              <span className="notranslate" translate="no">{p.name.split(' ')[0]} {p.name.split(' ')[1]}</span>
              {activeTab === idx && <CheckCircle2 className="w-4 h-4 text-white" />}
            </button>
          ))}
        </div>

        {/* Flagship Product Showcase Card (Light Theme) */}
        <div className="bg-white border border-slate-200/90 rounded-3xl overflow-hidden shadow-xl shadow-slate-900/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Visual Column */}
            <div className="lg:col-span-7 relative min-h-[380px] sm:min-h-[480px] bg-slate-100 group overflow-hidden">
              <ParallaxImage
                key={current.id}
                src={current.image}
                alt={current.name}
                parallaxOffset={25}
                priority
                sizes="(max-width: 1024px) 100vw, 58vw"
                containerClassName="w-full h-full min-h-[380px] sm:min-h-[480px]"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

              {/* Semantic Badges */}
              <div className="absolute top-4 left-4 z-20 flex flex-wrap gap-2 notranslate" translate="no">
                <span className="px-3 py-1.5 rounded-lg bg-white/95 backdrop-blur-md border border-slate-200 text-slate-800 text-xs font-mono font-bold shadow-md">
                  {current.materialType}
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-amber-500 text-slate-950 text-xs font-mono font-bold shadow-md">
                  {current.resinGrade}
                </span>
              </div>

              {/* Bottom In-Situ Verified Label */}
              <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between p-3.5 rounded-xl bg-slate-950/85 backdrop-blur-md text-white text-xs">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#65B32E]" />
                  <span className="font-semibold notranslate" translate="no">100% Spark Tested Seams</span>
                </div>
                <span className="text-amber-300 font-mono font-bold notranslate" translate="no">15 - 20 kV Non-Destructive</span>
              </div>
            </div>

            {/* Technical Detail Column */}
            <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between bg-white border-t lg:border-t-0 lg:border-l border-slate-200">
              <div className="space-y-6">
                <div>
                  <span className="text-xs uppercase font-mono text-[#65B32E] tracking-wider font-bold block mb-1 notranslate" translate="no">
                    {current.subCategory}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight notranslate" translate="no">
                    {current.name}
                  </h3>
                  <p className="text-slate-600 text-sm mt-3 leading-relaxed">
                    {current.fullDesc}
                  </p>
                </div>

                {/* Technical Specifications Matrix */}
                <div className="space-y-2.5 pt-2">
                  <div className="flex items-center justify-between py-2 border-b border-slate-100 text-xs">
                    <span className="text-slate-500 flex items-center gap-1.5 font-medium">
                      <Zap className="w-3.5 h-3.5 text-[#65B32E]" /> Tensile Strength
                    </span>
                    <span className="font-mono font-bold text-slate-900 text-right notranslate" translate="no">
                      {current.specs.tensileStrength}
                    </span>
                  </div>

                  <div className="flex items-center justify-between py-2 border-b border-slate-100 text-xs">
                    <span className="text-slate-500 flex items-center gap-1.5 font-medium">
                      <Thermometer className="w-3.5 h-3.5 text-amber-600" /> Temperature Tolerance
                    </span>
                    <span className="font-mono font-bold text-amber-700 text-right notranslate" translate="no">
                      {current.specs.temperatureRange}
                    </span>
                  </div>

                  <div className="flex items-center justify-between py-2 border-b border-slate-100 text-xs">
                    <span className="text-slate-500 flex items-center gap-1.5 font-medium">
                      <Flame className="w-3.5 h-3.5 text-[#65B32E]" /> Resin Matrix
                    </span>
                    <span className="font-mono font-bold text-slate-900 text-right notranslate" translate="no">
                      {current.specs.resinMatrix}
                    </span>
                  </div>

                  <div className="flex items-center justify-between py-2 border-b border-slate-100 text-xs">
                    <span className="text-slate-500 flex items-center gap-1.5 font-medium">
                      <FileSpreadsheet className="w-3.5 h-3.5 text-[#65B32E]" /> Capacities Available
                    </span>
                    <span className="font-mono font-bold text-[#3B6E16] text-right notranslate" translate="no">
                      {current.specs.capacitiesAvailable}
                    </span>
                  </div>
                </div>

                {/* Key Engineered Features */}
                <div className="space-y-2">
                  <span className="text-xs uppercase font-mono text-slate-500 font-bold block">
                    Engineering Highlights:
                  </span>
                  <ul className="space-y-1.5">
                    {current.features.slice(0, 3).map((f, i) => (
                      <li key={i} className="text-xs text-slate-700 flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#65B32E] shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  href={`/products/${current.slug}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#65B32E] hover:bg-[#549824] text-white font-bold text-xs shadow-md shadow-[#65B32E]/25 transition-all"
                >
                  <span>Detailed 360 &amp; CAD Specs</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center py-3 px-4 rounded-xl bg-[#F2F8EC] hover:bg-[#65B32E] hover:text-white border border-[#65B32E]/30 text-[#3B6E16] font-bold text-xs transition-all"
                >
                  <span>Request Custom RFQ</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

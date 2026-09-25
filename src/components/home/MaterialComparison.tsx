'use client';

import React, { useState } from 'react';
import { 
  Check, 
  X, 
  Layers, 
  Sliders, 
  ShieldCheck, 
  Gauge 
} from 'lucide-react';
import { MATERIAL_COMPARISON } from '@/data/products';

export default function MaterialComparison() {
  const [activeMaterial, setActiveMaterial] = useState<'mildSteel' | 'ss316' | 'aluminum'>('mildSteel');

  const materialNames = {
    mildSteel: 'Mild Steel (Rubber Lined)',
    ss316: 'Stainless Steel 316L',
    aluminum: 'Structural Aluminum'
  };

  return (
    <section id="comparison" className="py-20 bg-white relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F2F8EC] text-[#3B6E16] text-xs font-bold border border-[#65B32E]/30">
            <Sliders className="w-3.5 h-3.5 text-[#65B32E]" />
            <span>METALLURGY VS COMPOSITES SPECIFICATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F2633] tracking-tight">
            VLS Dual-Laminate FRP vs Traditional Metals
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Why leading chemical plants, pickling lines, and pharma facilities are replacing metallic vessels and rubber-lined steel with VLS dual-laminate composites.
          </p>

          {/* Interactive Material Selector */}
          <div className="pt-3 flex justify-center">
            <div className="inline-flex p-1.5 rounded-2xl bg-slate-100 border border-slate-200">
              {(['mildSteel', 'ss316', 'aluminum'] as const).map((mat) => (
                <button
                  key={mat}
                  onClick={() => setActiveMaterial(mat)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                    activeMaterial === mat
                      ? 'bg-[#65B32E] text-white shadow-md shadow-[#65B32E]/25'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  vs {materialNames[mat]}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Comparison Grid (Clean Light Theme) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* VLS FRP Composites Card */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#F2F8EC]/60 border-2 border-[#65B32E] shadow-xl shadow-[#65B32E]/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 px-4 py-1.5 bg-[#65B32E] text-white font-extrabold text-xs uppercase tracking-wider rounded-bl-xl shadow-md">
              ENGINEERED ADVANTAGE
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-[#65B32E] text-white shadow-sm">
                  <ShieldCheck className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-slate-900">VLS Dual-Laminate FRP</h3>
                  <p className="text-xs text-[#3B6E16] font-mono font-semibold">Polypropylene / PVDF + Vinyl Ester Shell</p>
                </div>
              </div>

              <div className="space-y-3 pt-1">
                {MATERIAL_COMPARISON.map((row, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-white border border-[#65B32E]/20 shadow-xs space-y-1">
                    <span className="text-[11px] font-mono text-[#3B6E16] font-bold block">
                      {row.metric}
                    </span>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span className="text-sm font-bold text-slate-900">{row.frp}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex items-center justify-between border-t border-[#65B32E]/20 text-xs">
                <span className="text-slate-600 font-medium">Total Lifecycle Savings:</span>
                <span className="text-emerald-700 font-mono font-bold text-sm">60% to 75% Lower TCO</span>
              </div>
            </div>
          </div>

          {/* Traditional Metal Competitor Card */}
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200 shadow-md relative flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-slate-200 text-slate-700">
                  <Gauge className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-slate-700">
                    {materialNames[activeMaterial]}
                  </h3>
                  <p className="text-xs text-slate-500 font-mono">Traditional Material Specification</p>
                </div>
              </div>

              <div className="space-y-3 pt-1">
                {MATERIAL_COMPARISON.map((row, idx) => {
                  const compValue = row[activeMaterial];
                  return (
                    <div key={idx} className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-1">
                      <span className="text-[11px] font-mono text-slate-500 font-semibold block">
                        {row.metric}
                      </span>
                      <div className="flex items-center gap-2">
                        <X className="w-4 h-4 text-rose-500 shrink-0" />
                        <span className="text-sm font-semibold text-slate-600">{compValue}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200 flex items-center justify-between text-xs">
              <span className="text-slate-500">Failure Risks:</span>
              <span className="text-rose-600 font-mono font-bold">Pitting, Rust, Relining Costs</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

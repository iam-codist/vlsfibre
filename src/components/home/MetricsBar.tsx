'use client';

import React from 'react';
import { Award, ShieldAlert, Cpu, Wrench, CheckCircle, Factory } from 'lucide-react';

export default function MetricsBar() {
  const metrics = [
    {
      label: 'Plant Heritage',
      value: '18+ Years',
      detail: 'Fabrication & Commissioning',
      icon: Award,
      color: 'text-[#65B32E]',
      bg: 'bg-[#F2F8EC]'
    },
    {
      label: 'Vessels Commissioned',
      value: '2,400+',
      detail: 'Across Pharma, Steel & Chemicals',
      icon: Wrench,
      color: 'text-amber-600',
      bg: 'bg-amber-50'
    },
    {
      label: 'Acid Immunity',
      value: '100%',
      detail: 'Zero Corrosion Rate vs Mild Steel',
      icon: ShieldAlert,
      color: 'text-emerald-600',
      bg: 'bg-emerald-50'
    },
    {
      label: 'Max Monolithic Tank',
      value: '120 kL',
      detail: 'Continuous Filament Winding',
      icon: Cpu,
      color: 'text-[#1F2633]',
      bg: 'bg-slate-100'
    },
    {
      label: 'Dielectric Verification',
      value: '20 kV',
      detail: '100% High-Voltage Seam Spark Tested',
      icon: CheckCircle,
      color: 'text-[#65B32E]',
      bg: 'bg-[#F2F8EC]'
    }
  ];

  return (
    <section className="relative z-20 -mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-900/5">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 divide-y lg:divide-y-0 lg:divide-x divide-slate-200/80">
          {metrics.map((m, idx) => {
            const Icon = m.icon;
            return (
              <div
                key={idx}
                className={`pt-4 lg:pt-0 ${idx > 0 ? 'lg:pl-6' : ''} space-y-2 group`}
              >
                <div className="flex items-center gap-2">
                  <div className={`p-1.5 rounded-lg ${m.bg}`}>
                    <Icon className={`w-4 h-4 ${m.color}`} />
                  </div>
                  <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider font-semibold">
                    {m.label}
                  </span>
                </div>
                <div className={`text-2xl sm:text-3xl font-extrabold ${m.color} font-mono tracking-tight group-hover:scale-105 transition-transform`}>
                  {m.value}
                </div>
                <p className="text-xs text-slate-600 leading-snug">
                  {m.detail}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

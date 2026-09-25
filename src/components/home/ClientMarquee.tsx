import React from 'react';
import { CLIENT_SECTORS } from '@/data/products';
import { Factory } from 'lucide-react';

export default function ClientMarquee() {
  const sectors = [...CLIENT_SECTORS, ...CLIENT_SECTORS];

  return (
    <section className="py-10 bg-slate-100/70 border-b border-slate-200 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-5 text-center">
        <p className="text-xs uppercase tracking-widest font-mono text-slate-500 font-bold">
          Trusted Across Severe Chemical Environments in Leading Industrial Sectors
        </p>
      </div>

      <div className="relative w-full overflow-hidden">
        {/* Gradient edge masks */}
        <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-slate-100/90 to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-slate-100/90 to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center gap-4">
          {sectors.map((s, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-800 shadow-xs hover:border-[#65B32E] hover:text-[#65B32E] transition-all shrink-0 group"
            >
              <Factory className="w-4 h-4 text-[#65B32E] group-hover:scale-110 transition-transform" />
              <span className="text-xs font-bold font-mono tracking-wide">
                {s.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import ParallaxImage from '@/components/ui/ParallaxImage';

const MARKETS = [
  {
    name: 'Chemical & Chlor-Alkali',
    desc: 'Bulk storage of hydrochloric, sulfuric, and nitric acids, caustic soda, and chlorine gas scrubbing.',
    image: '/images/products/pp-frp-vertical-storage-tanks-grey-truck.jpeg'
  },
  {
    name: 'Pharmaceutical & API',
    desc: 'High-purity dual laminate reaction vessels, Nutsche vacuum filters, and solvent recovery lines.',
    image: '/images/products/pp-frp-nutsche-filter-bottom-grid.jpeg'
  },
  {
    name: 'Steel Pickling & Galvanizing',
    desc: 'Heavy-duty steel-caged PP pickling dip tanks and acid fume exhaust extraction ducting.',
    image: '/images/products/pp-rectangular-pickling-tanks.jpeg'
  },
  {
    name: 'Hazardous Chemical Logistics',
    desc: 'Seamless HDPE spiral road tankers for long-haul inter-plant bulk corrosive chemical transport.',
    image: '/images/products/hdpe-spiral-acid-tanker.jpeg'
  }
];

import { useLanguage } from '@/context/LanguageContext';

export default function MarketsSection() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-[#f8f9fa] border-t border-b border-slate-100 relative overflow-hidden">
      {/* Subtle Composite Fiber Weave Accent */}
      <div className="absolute inset-0 pattern-fiber-weave opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-2">
            <span className="text-xs uppercase font-extrabold tracking-wider text-[#65B32E] font-mono">
              {t('markets.tag')}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F2633] tracking-tight font-display">
              {t('markets.title')}
            </h2>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#65B32E] hover:underline"
          >
            <span>{t('markets.view_all')}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {MARKETS.map((m, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 hover:border-[#65B32E]/60 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  <ParallaxImage
                    src={m.image}
                    alt={m.name}
                    parallaxOffset={20}
                    sizes="(max-width: 768px) 100vw, 25vw"
                    containerClassName="w-full h-full"
                  />
                </div>
                <div className="p-5 space-y-2">
                  <h3 className="text-base font-bold text-slate-900 font-display group-hover:text-[#65B32E] transition-colors">
                    {m.name}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

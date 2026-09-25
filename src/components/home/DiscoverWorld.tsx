'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import ParallaxImage from '@/components/ui/ParallaxImage';
import OrganicSwoop from '@/components/ui/OrganicSwoop';
import { useLanguage } from '@/context/LanguageContext';

const CATEGORIES = [
  {
    title: 'Storage & Process Tanks',
    desc: 'Vertical, horizontal, and spiral-wound tanks engineered for bulk hazardous acid storage.',
    image: '/images/products/frp-vertical-storage-tank-crane-hoist.jpeg',
    href: '/products/frp-vertical-chemical-storage-tank'
  },
  {
    title: 'Dual-Laminate Reaction Vessels',
    desc: 'Agitated reactors with virgin Polypropylene and PVDF liners for aggressive synthesis.',
    image: '/images/products/pp-frp-chemical-reaction-vessel-blue.jpeg',
    href: '/products/pp-frp-chemical-reaction-vessel'
  },
  {
    title: 'Air Pollution & Fume Scrubbers',
    desc: 'Packed bed absorption columns and high-efficiency centrifugal blowers for emission control.',
    image: '/images/products/pp-frp-scrubber-packed-columns-towers.jpeg',
    href: '/products/pp-frp-packed-bed-scrubber'
  }
];

export default function DiscoverWorld() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Signature Organic Swoop Pattern on Left Margin (Matching Reference Image 2) */}
      <OrganicSwoop
        position="left"
        variant="green"
        scale={1.15}
        parallaxSpeed={40}
        className="top-1/4 -left-10 opacity-75"
      />
      <OrganicSwoop
        position="right"
        variant="soft"
        scale={0.9}
        parallaxSpeed={25}
        className="bottom-10 -right-10 opacity-50"
      />

      {/* Subtle Blueprint Pattern Accent */}
      <div className="absolute inset-0 pattern-dots opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Centered Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <p className="text-xs uppercase font-extrabold tracking-wider text-[#65B32E] font-mono">
            {t('discover.tag')}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1F2633] leading-tight tracking-tight font-display">
            {t('discover.title')}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed pt-1">
            {t('discover.desc')}
          </p>
        </div>

        {/* 3 Large Clean Photographic Cards with Smooth Parallax Depth */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CATEGORIES.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
            >
              <Link
                href={item.href}
                className="group block rounded-3xl overflow-hidden bg-slate-50 border border-slate-200/80 hover:border-[#65B32E]/60 hover:shadow-2xl transition-all duration-300 h-full flex flex-col justify-between"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-200">
                  <ParallaxImage
                    src={item.image}
                    alt={item.title}
                    parallaxOffset={20}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    containerClassName="w-full h-full"
                  />
                </div>
                <div className="p-6 space-y-2 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-[#1F2633] group-hover:text-[#65B32E] transition-colors font-display notranslate" translate="no">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="pt-4 inline-flex items-center gap-1.5 text-xs font-bold text-[#65B32E] group-hover:underline">
                    <span>{t('discover.explore_cad')}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

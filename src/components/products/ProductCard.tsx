'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Zap, Thermometer } from 'lucide-react';
import { Product } from '@/types';
import { useLanguage } from '@/context/LanguageContext';

export default function ProductCard({ product }: { product: Product }) {
  const { t } = useLanguage();

  return (
    <div className="group rounded-2xl bg-white border border-slate-200/90 hover:border-[#65B32E] transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-xs hover:shadow-xl hover:shadow-[#65B32E]/10">
      <div>
        {/* Product Visual Container with ZERO RAW TEXT ON IMAGE */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          />

          {/* Semantic Backdrop-Blur Badges */}
          <div className="absolute top-3 left-3 z-10 flex flex-wrap gap-1.5 notranslate" translate="no">
            <span className="px-2.5 py-1 rounded-md bg-[#F2F8EC]/95 backdrop-blur-md border border-[#65B32E]/30 text-[#3B6E16] text-[10px] font-mono font-bold shadow-xs">
              {product.materialType}
            </span>
            <span className="px-2.5 py-1 rounded-md bg-slate-900/90 backdrop-blur-md text-amber-300 text-[10px] font-mono font-bold shadow-xs">
              {product.resinGrade.split(' ')[0]}
            </span>
          </div>

          <div className="absolute bottom-3 right-3 z-10">
            <span className="px-2.5 py-1 rounded-md bg-slate-950/85 backdrop-blur-md text-emerald-400 text-[10px] font-mono font-semibold flex items-center gap-1 shadow-xs notranslate" translate="no">
              <ShieldCheck className="w-3 h-3 text-[#65B32E]" />
              <span>{t('products.spark_tested')}</span>
            </span>
          </div>
        </div>

        {/* Info */}
        <div className="p-5 space-y-2.5">
          <span className="text-[11px] font-mono text-[#65B32E] font-bold uppercase tracking-wider block notranslate" translate="no">
            {product.subCategory}
          </span>
          <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#65B32E] transition-colors line-clamp-1 notranslate" translate="no">
            {product.name}
          </h3>
          <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
            {product.shortDesc}
          </p>

          {/* Quick Specs Snippet */}
          <div className="pt-2 border-t border-slate-100 grid grid-cols-2 gap-2 text-[11px] text-slate-600 font-mono notranslate" translate="no">
            <div className="flex items-center gap-1 truncate font-medium">
              <Zap className="w-3 h-3 text-[#65B32E] shrink-0" />
              <span className="truncate">{product.specs.tensileStrength.split(' ')[0]} MPa</span>
            </div>
            <div className="flex items-center gap-1 truncate font-medium">
              <Thermometer className="w-3 h-3 text-amber-600 shrink-0" />
              <span className="truncate">{product.specs.temperatureRange.split(' ')[2] || '95°C'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="p-5 pt-0 flex items-center justify-between gap-2 border-t border-slate-100 mt-2">
        <Link
          href={`/products/${product.slug}`}
          className="text-xs font-bold text-[#65B32E] hover:text-[#549824] flex items-center gap-1 py-2 transition-colors"
        >
          <span>{t('products.view_cad')}</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
        <Link
          href="/contact"
          className="px-3.5 py-1.5 rounded-lg bg-[#F2F8EC] hover:bg-[#65B32E] hover:text-white border border-[#65B32E]/30 text-[11px] font-bold text-[#3B6E16] transition-all"
        >
          {t('products.enquire')}
        </Link>
      </div>
    </div>
  );
}

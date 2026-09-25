'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import WhatsAppIcon from '@/components/ui/WhatsAppIcon';

export default function HomeCTA() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#1F2633] border-t-4 border-[#65B32E] text-white p-10 sm:p-14 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
          {/* Subtle Blueprint & Engineering Pattern Overlays */}
          <div className="absolute inset-0 pattern-technical-grid opacity-10 pointer-events-none" />
          <div className="absolute -top-16 -right-16 w-64 h-64 bg-[#65B32E]/20 rounded-full blur-2xl pointer-events-none" />

          <div className="space-y-3 max-w-xl relative z-10">
            <span className="text-xs uppercase font-extrabold tracking-wider text-[#65B32E] font-mono">
              {t('cta.tag')}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-display">
              {t('cta.title')}
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              {t('cta.desc')}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 relative z-10 w-full sm:w-auto">
            <Link
              href="/contact"
              className="w-full sm:w-auto text-center px-8 py-3.5 rounded-full bg-[#65B32E] hover:bg-[#549824] text-white font-extrabold text-xs tracking-wider uppercase transition-all shadow-md shadow-[#65B32E]/25"
            >
              {t('cta.button')}
            </Link>
            <a
              href="https://wa.me/919898426164?text=Hello%20VLS%20Fibre,%20I%20would%20like%20to%20request%20a%20turnkey%20FRP%20quote."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-center px-6 py-3.5 rounded-full border border-[#25D366] text-white hover:bg-[#25D366]/20 text-xs font-extrabold tracking-wider uppercase transition-colors flex items-center justify-center gap-2"
            >
              <WhatsAppIcon className="w-4 h-4 fill-[#25D366]" />
              <span>{t('cta.whatsapp')}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

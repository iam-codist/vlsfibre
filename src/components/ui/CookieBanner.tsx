'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Cookie, X, ShieldCheck } from 'lucide-react';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if consent has already been recorded
    const consent = localStorage.getItem('vls_cookie_consent');
    if (!consent) {
      // Delay display slightly for smooth page entrance
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('vls_cookie_consent', 'accepted');
    setIsVisible(false);
  };

  const handleEssentialOnly = () => {
    localStorage.setItem('vls_cookie_consent', 'essential');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Cookie Consent"
      className="fixed bottom-4 left-4 z-40 sm:bottom-6 sm:left-6 max-w-[340px] sm:max-w-md bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-2xl shadow-2xl p-4 sm:p-5 animate-in fade-in slide-in-from-bottom-5 duration-300"
    >
      <div className="flex items-start justify-between gap-3 mb-2.5">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-[#F2F8EC] text-[#65B32E] border border-[#65B32E]/30 flex items-center justify-center shrink-0">
            <Cookie className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-slate-900 leading-tight">
              Cookie Preferences
            </h4>
            <span className="text-[10px] text-slate-500 block">
              ASME &bull; ISO Data Governance
            </span>
          </div>
        </div>

        <button
          onClick={handleEssentialOnly}
          className="text-slate-400 hover:text-slate-600 p-1 rounded-full hover:bg-slate-100 transition-colors"
          aria-label="Dismiss cookie notice"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>

      <p className="text-xs text-slate-600 leading-relaxed mb-3">
        We use cookies to deliver multilingual localization, remember your technical inquiry parameters, and optimize site telemetry. Read our{' '}
        <Link href="/privacy" className="text-[#65B32E] font-semibold underline hover:text-[#549824]">
          Privacy Policy
        </Link>{' '}
        and{' '}
        <Link href="/terms" className="text-[#65B32E] font-semibold underline hover:text-[#549824]">
          Terms &amp; Conditions
        </Link>.
      </p>

      <div className="flex items-center gap-2 pt-1">
        <button
          onClick={handleAcceptAll}
          className="flex-1 py-2 px-3 bg-[#65B32E] hover:bg-[#549824] text-white rounded-xl text-xs font-bold transition-all shadow-md shadow-[#65B32E]/25 text-center"
        >
          Accept All
        </button>
        <button
          onClick={handleEssentialOnly}
          className="py-2 px-3 border border-slate-200 hover:bg-slate-50 text-slate-700 rounded-xl text-xs font-semibold transition-all text-center"
        >
          Essential Only
        </button>
      </div>
    </aside>
  );
}

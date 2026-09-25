'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { 
  Menu, 
  X, 
  ChevronDown, 
  ArrowRight, 
  MessageSquare,
  Globe,
  Phone,
  Factory,
  ShieldCheck,
  Sparkles,
  ExternalLink,
  Layers,
  Wrench,
  CheckCircle2
} from 'lucide-react';
import { PRODUCTS } from '@/data/products';
import LanguageSelector from '@/components/ui/LanguageSelector';
import { useLanguage } from '@/context/LanguageContext';
import VLSLogo from '@/components/ui/VLSLogo';
import WhatsAppIcon from '@/components/ui/WhatsAppIcon';

export default function Navbar() {
  const { t } = useLanguage();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [productsOpen, setProductsOpen] = useState(false);
  const [marketsOpen, setMarketsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/';
    return pathname.startsWith(path);
  };
  
  const lastScrollY = useRef(0);
  const menuTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Smart Scroll Direction & Reading Progress
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // 1. IsScrolled threshold
      setIsScrolled(currentScrollY > 25);

      // 2. Reading progress calculation
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress(Math.min(100, Math.max(0, (currentScrollY / totalHeight) * 100)));
      }

      // 3. Smart sticky navbar auto-hide on scroll down, instant reveal on scroll up
      if (currentScrollY > 120) {
        if (currentScrollY > lastScrollY.current + 10) {
          // Scrolling down -> hide navbar smoothly
          setIsVisible(false);
          setProductsOpen(false);
          setMarketsOpen(false);
        } else if (currentScrollY < lastScrollY.current - 10) {
          // Scrolling up -> reveal navbar immediately
          setIsVisible(true);
        }
      } else {
        // At or near top -> always visible
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleProductsEnter = () => {
    if (menuTimeoutRef.current) clearTimeout(menuTimeoutRef.current);
    setProductsOpen(true);
    setMarketsOpen(false);
  };

  const handleProductsLeave = () => {
    menuTimeoutRef.current = setTimeout(() => {
      setProductsOpen(false);
    }, 150);
  };

  const handleMarketsEnter = () => {
    if (menuTimeoutRef.current) clearTimeout(menuTimeoutRef.current);
    setMarketsOpen(true);
    setProductsOpen(false);
  };

  const handleMarketsLeave = () => {
    menuTimeoutRef.current = setTimeout(() => {
      setMarketsOpen(false);
    }, 150);
  };

  const marketList = [
    { title: 'Chemical & Petrochemical', desc: 'Concentrated acids, alkalis & chlor-alkali bulk storage', icon: '⚗️' },
    { title: 'Pharmaceutical & API', desc: 'Ultra-pure dual laminate reactors & Nutsche filters', icon: '💊' },
    { title: 'Steel & Pickling Mills', desc: 'Heavy-duty PP pickling lines & acid fume ducting', icon: '🏗️' },
    { title: 'Water & Wastewater', desc: 'Odor control packed bed scrubbers & coagulant tanks', icon: '💧' },
    { title: 'Hazardous Chemical Logistics', desc: 'Seamless HDPE spiral road tankers for acid transport', icon: '🚛' }
  ];

  // Core 6 flagship manufactured products for the mega menu
  const megaMenuProducts = PRODUCTS.slice(0, 6);

  return (
    <>
      {/* 0. Top-Fixed Reading Scroll Progress Bar - ALWAYS visible during all scroll directions */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-[3px] bg-slate-200/50 pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-[#65B32E] via-[#82D645] to-[#65B32E] shadow-xs shadow-[#65B32E]/40 transition-all duration-75 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        {/* 1. Ultra-Luxury Pre-Header Utility Bar (Collapses smoothly on scroll) */}
        <div
          className={`transition-all duration-300 ease-in-out overflow-hidden border-b border-slate-100 bg-[#1F2633] text-slate-300 text-[11px] hidden lg:block ${
            isScrolled ? 'max-h-0 py-0 opacity-0' : 'max-h-10 py-1.5 opacity-100'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5 font-medium">
                <Factory className="w-3.5 h-3.5 text-[#65B32E]" />
                <span>Vadodara (Gujarat) &amp; Cuddalore (TN) Works &bull; ISO 9001:2015</span>
              </span>
              <span className="text-slate-600">&bull;</span>
              <span className="flex items-center gap-1.5 font-medium text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-[#65B32E]" />
                <span>IS 2825 / IS 10661 &bull; ASME RTP-1 &bull; CPCB Compliant</span>
              </span>
            </div>

            <div className="flex items-center gap-5">
              <a
                href="tel:+919898426164"
                className="flex items-center gap-1.5 hover:text-[#65B32E] transition-colors"
              >
                <Phone className="w-3 h-3 text-[#65B32E]" />
                <span className="font-semibold text-white">+91 9898 426 164</span>
              </a>
              <span className="text-slate-600">&bull;</span>
              <a
                href="https://wa.me/919898426164?text=Hello%20VLS%20Fibre,%20I%20would%20like%20to%20request%20a%20turnkey%20FRP%20quote."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[#82D645] hover:text-white font-bold transition-colors"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 fill-[#25D366]" />
                <span>WhatsApp Desk</span>
              </a>
            </div>
          </div>
        </div>

        {/* 2. Main Luxury Header Navigation Bar */}
        <div
          className={`transition-all duration-300 ease-in-out ${
            isScrolled
              ? 'bg-white/92 backdrop-blur-xl shadow-lg shadow-slate-900/5 border-b border-slate-200/80 py-3 sm:py-3.5'
              : 'bg-white py-4 sm:py-5 border-b border-slate-100'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              {/* Authentic Client Brand Logo */}
              <VLSLogo variant="dark" />

              {/* Desktop Navigation Links */}
              <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-[13px] font-semibold text-slate-700">
                {/* Home Link */}
                <Link
                  href="/"
                  className={`px-3.5 py-2 rounded-full transition-all duration-200 ${
                    isActive('/')
                      ? 'bg-[#F2F8EC] text-[#3B6E16] font-bold border border-[#65B32E]/30 shadow-2xs'
                      : 'hover:text-[#65B32E] hover:bg-slate-50'
                  }`}
                >
                  {t('nav.home')}
                </Link>

                {/* Markets Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={handleMarketsEnter}
                  onMouseLeave={handleMarketsLeave}
                >
                  <button
                    className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full transition-all duration-200 ${
                      marketsOpen
                        ? 'bg-[#F2F8EC] text-[#3B6E16] font-bold'
                        : 'hover:text-[#65B32E] hover:bg-slate-50'
                    }`}
                    onClick={() => setMarketsOpen(!marketsOpen)}
                    aria-expanded={marketsOpen}
                  >
                    <span>{t('nav.markets')}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-300 ${
                        marketsOpen ? 'rotate-180 text-[#65B32E]' : ''
                      }`}
                    />
                  </button>

                  {marketsOpen && (
                    <div className="absolute top-full -left-4 w-80 bg-white rounded-3xl shadow-2xl border border-slate-200/90 p-3 z-50 animate-in fade-in zoom-in-95 duration-200 ring-1 ring-black/5">
                      <div className="px-3 py-2 border-b border-slate-100 text-[10px] uppercase font-bold tracking-wider text-slate-400 font-mono">
                        Key Industry Sectors
                      </div>
                      <ul className="space-y-1 mt-1.5">
                        {marketList.map((m, idx) => (
                          <li key={idx}>
                            <Link
                              href="/products"
                              className="group flex items-start gap-3 p-2.5 rounded-2xl hover:bg-[#F2F8EC]/70 transition-all border border-transparent hover:border-[#65B32E]/30"
                              onClick={() => setMarketsOpen(false)}
                            >
                              <span className="text-base p-1.5 rounded-xl bg-slate-50 group-hover:bg-white shrink-0 border border-slate-200/60 shadow-2xs">
                                {m.icon}
                              </span>
                              <div className="min-w-0 flex-1">
                                <span className="text-xs font-bold text-slate-900 group-hover:text-[#65B32E] transition-colors block leading-tight">
                                  {m.title}
                                </span>
                                <span className="text-[11px] text-slate-500 block leading-tight mt-0.5 line-clamp-1">
                                  {m.desc}
                                </span>
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-2 pt-2 border-t border-slate-100 px-3 py-1 flex items-center justify-between text-[11px]">
                        <Link
                          href="/products"
                          className="font-bold text-[#65B32E] hover:underline flex items-center gap-1"
                          onClick={() => setMarketsOpen(false)}
                        >
                          <span>Explore all sector solutions</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>
                  )}
                </div>

                {/* Products MEGA MENU (Enterprise-Grade, Perfectly Aligned, No Overflow) */}
                <div
                  className="relative"
                  onMouseEnter={handleProductsEnter}
                  onMouseLeave={handleProductsLeave}
                >
                  <button
                    className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full transition-all duration-200 ${
                      productsOpen || isActive('/products')
                        ? 'bg-[#F2F8EC] text-[#3B6E16] font-bold border border-[#65B32E]/30 shadow-2xs'
                        : 'hover:text-[#65B32E] hover:bg-slate-50'
                    }`}
                    onClick={() => setProductsOpen(!productsOpen)}
                    aria-expanded={productsOpen}
                  >
                    <span>{t('nav.products')}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-300 ${
                        productsOpen ? 'rotate-180 text-[#65B32E]' : (isActive('/products') ? 'text-[#3B6E16]' : 'text-slate-400')
                      }`}
                    />
                  </button>

                  {productsOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-[860px] xl:w-[900px] bg-white rounded-3xl shadow-2xl border border-slate-200/90 overflow-hidden z-50 animate-in fade-in zoom-in-95 duration-200 ring-1 ring-black/5">
                      {/* Mega Menu Top Context Strip */}
                      <div className="px-6 py-2.5 bg-slate-50/90 border-b border-slate-100 flex items-center justify-between">
                        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#65B32E] animate-pulse" />
                          Custom Engineered FRP &bull; Virgin Thermoplastic Liners (PP / PVDF / PTFE)
                        </span>
                        <span className="text-[10px] font-mono text-[#3B6E16] bg-[#F2F8EC] px-2 py-0.5 rounded-full font-bold">
                          100% Spark Tested Seams
                        </span>
                      </div>

                      {/* Mega Menu Grid Container */}
                      <div className="grid grid-cols-12 gap-0">
                        {/* Left Featured Process Card (4 of 12 cols = ~280px) */}
                        <div className="col-span-4 p-5 bg-gradient-to-b from-[#1F2633] to-[#171D27] text-white flex flex-col justify-between border-r border-slate-700/60 relative overflow-hidden">
                          <div className="absolute -top-12 -left-12 w-40 h-40 bg-[#65B32E]/20 rounded-full blur-2xl pointer-events-none" />

                          <div className="space-y-3 relative z-10">
                            <span className="px-2.5 py-1 rounded-full bg-white/10 text-[#82D645] text-[10px] font-mono font-bold uppercase tracking-wider inline-flex items-center gap-1">
                              <Sparkles className="w-3 h-3 text-[#65B32E]" />
                              <span>Dual-Laminate Specialists</span>
                            </span>

                            <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-white/10 shadow-lg bg-slate-800">
                              <Image
                                src="/images/products/pp-frp-chemical-reaction-vessel-blue.jpeg"
                                alt="Reaction Vessel Spotlight"
                                fill
                                sizes="280px"
                                className="object-cover hover:scale-105 transition-transform duration-500"
                              />
                            </div>

                            <div className="space-y-1">
                              <h4 className="text-sm font-bold text-white font-display leading-snug">
                                PP-FRP Reaction Vessels &amp; Agitation Systems
                              </h4>
                              <p className="text-[11px] text-slate-300 leading-relaxed font-normal">
                                Built with Derakane 411/470 vinyl ester resins for aggressive synthesis and severe acid containment.
                              </p>
                            </div>
                          </div>

                          <div className="pt-4 relative z-10 border-t border-slate-700/60 mt-3">
                            <Link
                              href="/products/pp-frp-chemical-reaction-vessel"
                              className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-[#65B32E] hover:bg-[#549824] text-white font-extrabold text-[11px] tracking-wider uppercase transition-all shadow-md"
                              onClick={() => setProductsOpen(false)}
                            >
                              <span>Explore CAD Specs</span>
                              <ArrowRight className="w-3 h-3" />
                            </Link>
                          </div>
                        </div>

                        {/* Right Products Columns (8 of 12 cols = 6 products arranged cleanly with min-w-0) */}
                        <div className="col-span-8 p-5 sm:p-6 bg-white flex flex-col justify-between">
                          <div className="space-y-2.5">
                            <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400 font-mono pb-1 border-b border-slate-100 flex items-center justify-between">
                              <span>Process Vessels, Scrubbers &amp; Tanks</span>
                              <span className="text-[#65B32E]">ASME RTP-1 &bull; BS 4994</span>
                            </div>

                            {/* 2-Column Product Items Grid with Strict Width & No Overflow */}
                            <div className="grid grid-cols-2 gap-3">
                              {megaMenuProducts.map((prod) => (
                                <Link
                                  key={prod.id}
                                  href={`/products/${prod.slug}`}
                                  className="group flex items-start gap-3 p-2.5 rounded-2xl hover:bg-[#F2F8EC]/60 transition-all border border-transparent hover:border-[#65B32E]/30 min-w-0"
                                  onClick={() => setProductsOpen(false)}
                                >
                                  {/* Thumbnail */}
                                  <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-slate-100 shrink-0 border border-slate-200 group-hover:border-[#65B32E]/40 shadow-2xs">
                                    <Image
                                      src={prod.image}
                                      alt={prod.name}
                                      fill
                                      sizes="48px"
                                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                  </div>

                                  {/* Text Box with Crucial min-w-0 to prevent flex blowout */}
                                  <div className="min-w-0 flex-1">
                                    <span className="text-xs font-bold text-slate-900 group-hover:text-[#65B32E] transition-colors block leading-tight truncate notranslate" translate="no">
                                      {prod.name}
                                    </span>
                                    <span className="text-[10px] text-slate-500 font-mono block mt-1 truncate notranslate" translate="no">
                                      {prod.materialType} &bull; {prod.resinGrade.split(' ')[0]}
                                    </span>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>

                          {/* Mega Menu Footer Banner */}
                          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                            <Link
                              href="/products"
                              className="font-extrabold text-[#65B32E] hover:text-[#549824] flex items-center gap-1.5 transition-colors"
                              onClick={() => setProductsOpen(false)}
                            >
                              <span>{t('nav.view_all_products')}</span>
                              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                            </Link>

                            <span className="text-[11px] text-slate-400 font-mono notranslate" translate="no">
                              DIN/DVS 2205 &bull; ASTM D3299 &bull; ISO 9001
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <Link 
                  href="/gallery" 
                  className={`px-3.5 py-2 rounded-full transition-all duration-200 ${
                    isActive('/gallery')
                      ? 'bg-[#F2F8EC] text-[#3B6E16] font-bold border border-[#65B32E]/30 shadow-2xs'
                      : 'hover:text-[#65B32E] hover:bg-slate-50'
                  }`}
                >
                  {t('nav.projects')}
                </Link>

                <Link 
                  href="/about" 
                  className={`px-3.5 py-2 rounded-full transition-all duration-200 ${
                    isActive('/about')
                      ? 'bg-[#F2F8EC] text-[#3B6E16] font-bold border border-[#65B32E]/30 shadow-2xs'
                      : 'hover:text-[#65B32E] hover:bg-slate-50'
                  }`}
                >
                  {t('nav.about')}
                </Link>
              </nav>

              {/* Right: Language Selector & Luxury Contact CTA Button */}
              <div className="hidden sm:flex items-center gap-3.5">
                <LanguageSelector />

                <Link
                  href="/contact"
                  className={`relative group overflow-hidden px-7 py-2.5 rounded-full bg-gradient-to-r from-[#65B32E] to-[#549824] hover:from-[#549824] hover:to-[#437a1c] text-white text-xs font-extrabold tracking-wider uppercase transition-all duration-300 shadow-md shadow-[#65B32E]/25 hover:shadow-lg hover:shadow-[#65B32E]/35 active:scale-95 ${
                    isActive('/contact') ? 'ring-2 ring-[#65B32E] ring-offset-2 ring-offset-white' : ''
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <span>{t('nav.contact')}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                </Link>
              </div>

              {/* Mobile Menu Toggle Button */}
              <div className="flex lg:hidden items-center gap-2.5">
                <LanguageSelector />
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="p-2.5 rounded-2xl bg-slate-50 hover:bg-slate-100 text-slate-800 border border-slate-200 transition-colors"
                  aria-label="Toggle navigation"
                >
                  {mobileMenuOpen ? <X className="w-5 h-5 text-[#65B32E]" /> : <Menu className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </div>
        </div>

      </header>

      {/* 4. Luxury Full-Screen Mobile Drawer */}
      {mobileMenuOpen && (
        <div 
          data-lenis-prevent="true"
          onWheel={(e) => e.stopPropagation()}
          className="fixed inset-0 z-40 bg-white/98 backdrop-blur-2xl flex flex-col pt-24 pb-8 px-6 overflow-y-auto lg:hidden animate-in fade-in duration-200 overscroll-contain lenis-prevent"
        >
          <div className="space-y-2">
            <Link
              href="/"
              className={`flex items-center justify-between text-base font-bold py-3 px-3.5 rounded-2xl transition-all border ${
                isActive('/')
                  ? 'bg-[#F2F8EC] text-[#3B6E16] border-[#65B32E]/40 font-extrabold shadow-2xs'
                  : 'text-slate-800 hover:text-[#65B32E] hover:bg-slate-50 border-slate-100'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>{t('nav.home')}</span>
              {isActive('/') && <span className="w-2 h-2 rounded-full bg-[#65B32E]" />}
            </Link>

            <Link
              href="/products"
              className={`flex items-center justify-between text-base font-bold py-3 px-3.5 rounded-2xl transition-all border ${
                isActive('/products')
                  ? 'bg-[#F2F8EC] text-[#3B6E16] border-[#65B32E]/40 font-extrabold shadow-2xs'
                  : 'text-slate-800 hover:text-[#65B32E] hover:bg-slate-50 border-slate-100'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>{t('nav.products')}</span>
              {isActive('/products') && <span className="w-2 h-2 rounded-full bg-[#65B32E]" />}
            </Link>

            {/* Quick Mobile Product Chips */}
            <div className="grid grid-cols-2 gap-2 pl-1 py-1">
              <Link
                href="/products/pp-frp-chemical-reaction-vessel"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[11px] font-semibold text-slate-600 bg-slate-50 p-2.5 rounded-xl border border-slate-200 hover:text-[#65B32E] hover:border-[#65B32E]/30 transition-colors"
              >
                🧪 Reaction Vessels
              </Link>
              <Link
                href="/products/frp-vertical-chemical-storage-tank"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[11px] font-semibold text-slate-600 bg-slate-50 p-2.5 rounded-xl border border-slate-200 hover:text-[#65B32E] hover:border-[#65B32E]/30 transition-colors"
              >
                🛢️ Storage Tanks
              </Link>
              <Link
                href="/products/pp-frp-packed-bed-scrubber"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[11px] font-semibold text-slate-600 bg-slate-50 p-2.5 rounded-xl border border-slate-200 hover:text-[#65B32E] hover:border-[#65B32E]/30 transition-colors"
              >
                💨 Fume Scrubbers
              </Link>
              <Link
                href="/products/hdpe-spiral-acid-tanker"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[11px] font-semibold text-slate-600 bg-slate-50 p-2.5 rounded-xl border border-slate-200 hover:text-[#65B32E] hover:border-[#65B32E]/30 transition-colors"
              >
                🚚 Road Tankers
              </Link>
            </div>

            <Link
              href="/gallery"
              className={`flex items-center justify-between text-base font-bold py-3 px-3.5 rounded-2xl transition-all border ${
                isActive('/gallery')
                  ? 'bg-[#F2F8EC] text-[#3B6E16] border-[#65B32E]/40 font-extrabold shadow-2xs'
                  : 'text-slate-800 hover:text-[#65B32E] hover:bg-slate-50 border-slate-100'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>{t('nav.projects')}</span>
              {isActive('/gallery') && <span className="w-2 h-2 rounded-full bg-[#65B32E]" />}
            </Link>

            <Link
              href="/about"
              className={`flex items-center justify-between text-base font-bold py-3 px-3.5 rounded-2xl transition-all border ${
                isActive('/about')
                  ? 'bg-[#F2F8EC] text-[#3B6E16] border-[#65B32E]/40 font-extrabold shadow-2xs'
                  : 'text-slate-800 hover:text-[#65B32E] hover:bg-slate-50 border-slate-100'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>{t('nav.about')}</span>
              {isActive('/about') && <span className="w-2 h-2 rounded-full bg-[#65B32E]" />}
            </Link>

            <Link
              href="/contact"
              className={`flex items-center justify-between text-base font-bold py-3 px-3.5 rounded-2xl transition-all border ${
                isActive('/contact')
                  ? 'bg-[#F2F8EC] text-[#3B6E16] border-[#65B32E]/40 font-extrabold shadow-2xs'
                  : 'text-[#65B32E] bg-white hover:bg-[#F2F8EC]/50 border-[#65B32E]/30'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>{t('nav.contact')}</span>
              <ArrowRight className="w-4 h-4 text-[#65B32E]" />
            </Link>
          </div>

          <div className="mt-6 p-4 rounded-2xl bg-[#F2F8EC] border border-[#65B32E]/30 space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-[#3B6E16]">
              <Factory className="w-4 h-4 text-[#65B32E]" />
              <span>Plant Engineering Helpline</span>
            </div>
            <p className="text-xs text-slate-600">
              Speak directly with our senior process engineers for tank sizing and GA drawings.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href="tel:+919898426164"
                className="flex-1 py-2.5 px-3 rounded-xl bg-white border border-[#65B32E]/40 text-xs font-bold text-slate-800 text-center flex items-center justify-center gap-1.5 shadow-xs"
              >
                <Phone className="w-3.5 h-3.5 text-[#65B32E]" />
                <span>Call Plant</span>
              </a>
              <a
                href="https://wa.me/919898426164"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold text-center flex items-center justify-center gap-1.5 shadow-xs transition-colors"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 fill-white" />
                <span>WhatsApp RFQ</span>
              </a>
            </div>
          </div>

          <div className="mt-auto pt-6 space-y-4">
            <LanguageSelector isMobile />

            <Link
              href="/contact"
              className="w-full flex items-center justify-center gap-2 py-3.5 bg-gradient-to-r from-[#65B32E] to-[#549824] text-white font-bold rounded-full text-sm shadow-md active:scale-98 transition-all"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Contact Engineering Desk</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

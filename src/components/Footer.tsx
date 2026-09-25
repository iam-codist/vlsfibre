import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, Globe, ArrowRight } from 'lucide-react';
import VLSLogo from '@/components/ui/VLSLogo';
import WhatsAppIcon from '@/components/ui/WhatsAppIcon';

export default function Footer() {
  return (
    <footer className="bg-[#1F2633] text-slate-300 pt-16 pb-12 border-t border-slate-700/80 relative overflow-hidden">
      {/* Subtle Pattern Accent */}
      <div className="absolute inset-0 pattern-fiber-weave opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-700/60">
          {/* Col 1: Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <VLSLogo variant="light" />
            <p className="text-sm text-slate-300 leading-relaxed max-w-sm pt-2">
              Premier manufacturer of industrial FRP/GRP composites, custom dual-laminate chemical reaction vessels, pickling tanks, and emission control scrubbers.
            </p>
            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <p className="text-[#65B32E] font-bold">PPRC &bull; HDPE Electric Fusion Pipe Line Work</p>
              <p>Standards: ASME Section X &bull; ASME RTP-1 &bull; BS 4994:1987</p>
              <p>Quality: ISO 9001:2015 &bull; 100% Spark Tested Seams</p>
            </div>
          </div>

          {/* Col 2: Products (2.5 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold tracking-wider uppercase text-[#65B32E]">PRODUCTS</h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <Link href="/products/frp-vertical-chemical-storage-tank" className="hover:text-[#65B32E] transition-colors">
                  FRP Storage Tanks
                </Link>
              </li>
              <li>
                <Link href="/products/pp-frp-chemical-reaction-vessel" className="hover:text-[#65B32E] transition-colors">
                  PP-FRP Reaction Vessels
                </Link>
              </li>
              <li>
                <Link href="/products/pp-frp-packed-bed-scrubber" className="hover:text-[#65B32E] transition-colors">
                  Fume Scrubbers &amp; Ducting
                </Link>
              </li>
              <li>
                <Link href="/products/pp-rectangular-pickling-tank" className="hover:text-[#65B32E] transition-colors">
                  Pickling &amp; Dip Tanks
                </Link>
              </li>
              <li>
                <Link href="/products/hdpe-spiral-acid-tanker" className="hover:text-[#65B32E] transition-colors">
                  Seamless HDPE Road Tankers
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Markets (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold tracking-wider uppercase text-[#65B32E]">MARKETS</h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>Chemical &amp; Petrochemical</li>
              <li>Pharmaceuticals &amp; API</li>
              <li>Steel &amp; Wire Pickling</li>
              <li>Water &amp; Effluent Treatment</li>
              <li>Hazardous Acid Logistics</li>
            </ul>
          </div>

          {/* Col 4: Manufacturing Works & Contact (4 cols - Exact Client Brochure) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold tracking-wider uppercase text-[#65B32E]">MANUFACTURING WORKS</h4>
            <ul className="space-y-3 text-xs text-slate-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#65B32E] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-semibold">VLS Fibre Industrial Lining</strong>
                  <span className="text-slate-400">72 - Durga Industrial Estate, Near Padamla Village, Sakarda, Vadodara, Gujarat, India</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#65B32E] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-semibold">VLS Fibre Composite</strong>
                  <span className="text-slate-400">86 - Madha Koil Street, Agara Alampadi Post, Thattanodai, Sethiathoppu, Cuddalore, Tamil Nadu, India</span>
                </div>
              </li>
              <li className="flex items-center gap-2.5 pt-1">
                <Phone className="w-4 h-4 text-[#65B32E] shrink-0" />
                <span className="font-semibold text-white">+91 9898 426 164 &bull; +91 9054 436 164</span>
              </li>
              <li className="flex items-center gap-2.5">
                <WhatsAppIcon className="w-4 h-4 fill-[#25D366] shrink-0" />
                <a
                  href="https://wa.me/919898426164?text=Hello%20VLS%20Fibre,%20I%20would%20like%20to%20request%20a%20turnkey%20FRP%20quote."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#82D645] hover:text-white transition-colors"
                >
                  WhatsApp: +91 9898 426 164
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#65B32E] shrink-0" />
                <span>sales@vlsfibreindlining.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>&copy; {new Date().getFullYear()} VLS Fibre Projects. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-6">
            <Link href="/about" className="hover:text-white transition-colors">About VLS</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
            <Link href="/products" className="hover:text-white transition-colors">Brochure</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

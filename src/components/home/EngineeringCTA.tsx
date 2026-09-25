import React from 'react';
import Link from 'next/link';
import { 
  PackageOpen, 
  ArrowRight, 
  PhoneCall, 
  FileCheck, 
  ShieldCheck, 
  Send 
} from 'lucide-react';

export default function EngineeringCTA() {
  return (
    <section className="py-16 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-3xl p-8 sm:p-12 lg:p-14 bg-[#1F2633] text-white border-t-2 border-[#65B32E] shadow-2xl shadow-slate-900/15 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#65B32E]/20 border border-[#65B32E]/40 text-[#82d645] text-xs font-bold">
                <PackageOpen className="w-3.5 h-3.5 text-[#65B32E]" />
                <span>COMPLIMENTARY MATERIAL SAMPLE KIT</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Request an Engineering Consultation &amp; Instant Composite Sample Kit
              </h2>
              <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
                Test our spark-tested dual-laminate coupons (PP-FRP, PVDF-FRP) in your plant's actual chemical bath. Receive custom GA engineering drawings and ASME RTP-1 wall thickness calculations within 24 hours.
              </p>

              <div className="flex flex-wrap items-center gap-6 pt-2 text-xs text-slate-300 font-medium">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#65B32E]" />
                  <span>Free Immersion Coupon Test Kit</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-amber-400" />
                  <span>Formal GA Drawings in 24h</span>
                </div>
                <div className="flex items-center gap-2">
                  <Send className="w-4 h-4 text-[#82d645]" />
                  <span>Turnkey Plant Dispatch Across India &amp; Global</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-[#65B32E] hover:bg-[#549824] text-white font-extrabold text-sm shadow-xl shadow-[#65B32E]/30 transition-all hover:scale-105"
              >
                <span>Request Sample Kit &amp; Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/919898426164?text=Hello%20VLS%20Fibre%2C%20I%20would%20like%20to%20request%20an%20engineering%20consultation%20and%20sample%20test%20kit."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-slate-800/90 border border-slate-700 hover:border-[#65B32E] text-white font-bold text-xs transition-all"
              >
                <PhoneCall className="w-4 h-4 text-[#65B32E]" />
                <span>Instant WhatsApp: +91 9898 426 164</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

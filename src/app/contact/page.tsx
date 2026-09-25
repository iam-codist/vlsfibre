import React from 'react';
import RFQWizard from '@/components/forms/RFQWizard';
import { 
  MapPin, 
  Phone, 
  Mail, 
  MessageSquare, 
  Clock, 
  ShieldCheck, 
  Factory,
  ArrowRight
} from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact & RFQ Consultation | VLS Fibre Industrial Composites',
  description: 'Connect with VLS Fibre application engineers in Vadodara and Cuddalore for custom FRP tank, reaction vessel, and scrubber quotations and GA drawings.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white pt-36 sm:pt-40 pb-20 relative overflow-hidden">
      {/* Background Engineering Pattern */}
      <div className="absolute inset-0 pattern-dots opacity-30 pointer-events-none" />
      <div className="absolute inset-0 pattern-fiber-weave opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F2F8EC] text-[#437D1D] text-xs font-bold border border-[#65B32E]/30">
            <Factory className="w-3.5 h-3.5 text-[#65B32E]" />
            <span>INTERACTIVE REQUEST FOR QUOTATION (RFQ) ENGINE</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1F2633] tracking-tight">
            Engineering Consultation &amp; Turnkey RFQ
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Specify your required chemical media, tank volume, temperature, and operating pressure. Our engineering desk will deliver a comprehensive GA drawing and quotation within 24 hours.
          </p>
        </div>

        {/* Main Grid: RFQ Wizard + Brochure-Style Contact Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* RFQ 4-Step Wizard */}
          <div className="lg:col-span-7">
            <RFQWizard />
          </div>

          {/* Plant & Engineering Desk Details (Direct Brochure Styling) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Dark Slate "Contact Us" Card Matching Client Brochure */}
            <div className="p-7 rounded-3xl bg-[#1F2633] text-white space-y-6 shadow-2xl border-t-4 border-[#65B32E] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#65B32E]/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 space-y-1 pb-4 border-b border-slate-700/80">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#65B32E] block">
                  CLIENT BROCHURE DIRECTORY
                </span>
                <h2 className="text-3xl font-extrabold text-[#65B32E] tracking-tight">
                  Contact Us
                </h2>
              </div>

              {/* Manufacturing Plants */}
              <div className="space-y-5 relative z-10">
                {/* Plant 1: Gujarat */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-[#65B32E]/20 text-[#65B32E] flex items-center justify-center shrink-0 border border-[#65B32E]/40 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="space-y-1 text-xs">
                    <h3 className="font-bold text-white text-sm">VLS FIBRE INDUSTRIAL LINING</h3>
                    <p className="text-slate-300 leading-relaxed">
                      72 - Durga Industrial Estate, Near Padamla Village, Sakarda, Vadodara, Gujarat, India
                    </p>
                  </div>
                </div>

                {/* Plant 2: Tamil Nadu */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-[#65B32E]/20 text-[#65B32E] flex items-center justify-center shrink-0 border border-[#65B32E]/40 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="space-y-1 text-xs">
                    <h3 className="font-bold text-white text-sm">VLS FIBRE COMPOSITE</h3>
                    <p className="text-slate-300 leading-relaxed">
                      86 - Madha Koil Street, Agara Alampadi Post, Thattanodai, Sethiathoppu, Cuddalore, Tamil Nadu, India
                    </p>
                  </div>
                </div>

                {/* Direct Call Numbers */}
                <div className="flex items-start gap-3.5 pt-2 border-t border-slate-700/60">
                  <div className="w-9 h-9 rounded-full bg-[#65B32E]/20 text-[#65B32E] flex items-center justify-center shrink-0 border border-[#65B32E]/40 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="space-y-1 text-xs">
                    <h3 className="font-bold text-white text-sm">Call Us Directly</h3>
                    <div className="space-y-1">
                      <a href="tel:+919898426164" className="block text-slate-200 hover:text-[#65B32E] font-bold">
                        +91 9898 426 164
                      </a>
                      <a href="tel:+919054436164" className="block text-slate-200 hover:text-[#65B32E] font-bold">
                        +91 9054 436 164
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email Contacts */}
                <div className="flex items-start gap-3.5 pt-2 border-t border-slate-700/60">
                  <div className="w-9 h-9 rounded-full bg-[#65B32E]/20 text-[#65B32E] flex items-center justify-center shrink-0 border border-[#65B32E]/40 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="space-y-1 text-xs">
                    <h3 className="font-bold text-white text-sm">Email Us</h3>
                    <div className="space-y-0.5">
                      <a href="mailto:sales@vlsfibreindlining.com" className="block text-slate-300 hover:text-[#65B32E] truncate">
                        sales@vlsfibreindlining.com
                      </a>
                      <a href="mailto:wilsoniya94.lvv@gmail.com" className="block text-slate-400 hover:text-[#65B32E] truncate">
                        wilsoniya94.lvv@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Action Button */}
              <div className="pt-2 relative z-10">
                <a
                  href="https://wa.me/919898426164?text=Hello%20VLS%20Fibre%2C%20I%20have%20an%20urgent%20chemical%20equipment%20inquiry."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 py-3 px-4 rounded-2xl bg-[#65B32E] hover:bg-[#549824] text-white font-extrabold text-xs tracking-wider uppercase transition-all shadow-lg shadow-[#65B32E]/25"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Open WhatsApp Direct Chat</span>
                </a>
              </div>
            </div>

            {/* Specialization Highlight Card (from Brochure Header) */}
            <div className="p-5 rounded-2xl bg-[#F2F8EC] border border-[#65B32E]/30 space-y-2">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#437D1D] block">
                SPECIALIZED SITE WORK
              </span>
              <h3 className="text-base font-extrabold text-[#1F2633]">
                PPRC &amp; HDPE Electric Fusion Pipe Line Work
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Turnkey electro-fusion welding, buried acid effluent pipelines, manifold manifolds, and dual-laminate header installations performed on-site by certified fusion technicians.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

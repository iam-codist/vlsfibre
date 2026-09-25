import React from 'react';
import Link from 'next/link';
import { FileText, ArrowLeft, CheckCircle2, AlertTriangle, ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions | VLS Fibre Industrial Composites',
  description: 'Terms and Conditions governing engineering fabrication, quotation validity, ASME RTP-1 certifications, spark testing, and commercial sales of VLS Fibre equipment.',
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white text-slate-800 pt-40 sm:pt-44 pb-24">
      {/* Header Banner */}
      <div className="bg-[#F2F8EC] border-b border-[#65B32E]/20 py-14 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30 pattern-dots pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#65B32E] hover:underline mb-6"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-[#1F2633] text-white flex items-center justify-center shadow-sm">
              <FileText className="w-5 h-5 text-[#65B32E]" />
            </div>
            <span className="text-xs uppercase font-bold tracking-wider text-[#3B6E16]">
              Commercial &amp; Contractual Terms
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1F2633] tracking-tight">
            Terms &amp; Conditions
          </h1>
          <p className="text-xs text-slate-500 mt-2 font-medium">
            Effective as of January 1, 2026 &bull; VLS Fibre (Industrial Lining &amp; Composite)
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-12 space-y-10 text-sm leading-relaxed text-slate-700">
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
            1. Acceptance of Terms
          </h2>
          <p>
            By accessing this website, requesting technical sizing, downloading CAD drawings, or submitting purchase orders for equipment manufactured by VLS Fibre Projects (&quot;VLS Fibre&quot;), the purchaser (&quot;Buyer&quot; or &quot;Client&quot;) agrees to be bound by these Terms &amp; Conditions.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
            2. Quotation Validity &amp; Pricing
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-slate-600">
            <li>
              <strong className="text-slate-900">Quotation Validity:</strong> Unless explicitly stated otherwise in our formal proposal, all budgetary and commercial quotations are valid for thirty (30) calendar days from the date of issue.
            </li>
            <li>
              <strong className="text-slate-900">Resin Matrix Cost Adjustments:</strong> Because specialized vinyl esters (e.g., Derakane 411, Derakane 470, Ashland Hetron) and fluoropolymers (PVDF, PTFE) are tied to global petrochemical indexes, prices are subject to formal confirmation prior to purchase order placement.
            </li>
            <li>
              <strong className="text-slate-900">Taxes &amp; Freight:</strong> Unless specified as CIF/FOB, all prices exclude GST, import tariffs, crane rigging, transit insurance, and freight from our South India headworks.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
            3. Engineering Standards, Fabrication &amp; Tolerances
          </h2>
          <p>
            All custom FRP, PP-FRP, PVDF-FRP, and HDPE equipment is engineered in accordance with agreed governing standards:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="p-3.5 rounded-xl border border-slate-200 bg-[#F2F8EC]/50">
              <span className="font-bold text-[#65B32E] block text-xs">ASME RTP-1 &amp; Section X</span>
              <p className="text-xs text-slate-600 mt-1">Reinforced Thermoset Plastic Corrosion-Resistant Equipment design and qualifying tests.</p>
            </div>
            <div className="p-3.5 rounded-xl border border-slate-200 bg-[#F2F8EC]/50">
              <span className="font-bold text-[#65B32E] block text-xs">BS 4994:1987 / EN 13121</span>
              <p className="text-xs text-slate-600 mt-1">Vessels and tanks in reinforced plastics, including dual-laminate thermoplastic construction.</p>
            </div>
            <div className="p-3.5 rounded-xl border border-slate-200 bg-[#F2F8EC]/50">
              <span className="font-bold text-[#65B32E] block text-xs">DVS 2205 Standards</span>
              <p className="text-xs text-slate-600 mt-1">Calculation of thermoplastic tanks, weld factors, and thermal expansion relief.</p>
            </div>
            <div className="p-3.5 rounded-xl border border-slate-200 bg-[#F2F8EC]/50">
              <span className="font-bold text-[#65B32E] block text-xs">100% Spark Testing</span>
              <p className="text-xs text-slate-600 mt-1">All dual-laminate thermoplastic weld seams are non-destructively high-voltage spark tested at 15–20 kV.</p>
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
            4. General Arrangement (GA) Drawing Approvals
          </h2>
          <p>
            Fabrication initiates strictly upon receipt of the Buyer’s formal signed approval of the General Arrangement (GA) drawing and nozzle orientation schedule. Any design changes requested subsequent to GA sign-off may incur revisions to delivery schedules and bill of materials costs.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
            5. Warranty &amp; Operational Limitations
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-slate-600">
            <li>
              <strong className="text-slate-900">Standard Warranty:</strong> VLS Fibre warrants all equipment against defective materials and workmanship for twelve (12) months from commissioning or eighteen (18) months from dispatch, whichever occurs first.
            </li>
            <li>
              <strong className="text-slate-900">Exclusions:</strong> Warranty is null and void if equipment is operated outside designated design parameters (e.g., higher chemical concentration, higher temperature, unauthorized vacuum or overpressure, or mechanical impact during field rigging).
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
            6. Limitation of Liability &amp; Governing Law
          </h2>
          <p>
            In no event shall VLS Fibre be liable for consequential, indirect, special, punitive, or downtime losses arising out of equipment operation. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the competent courts of Vadodara, Gujarat or Cuddalore, Tamil Nadu, India.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
            7. Contact Commercial Operations
          </h2>
          <div className="p-6 rounded-2xl bg-[#1F2633] text-white border-t-2 border-[#65B32E] space-y-3 text-xs">
            <p className="font-bold text-base text-white">VLS Fibre Commercial &amp; Plant Operations</p>
            <div className="space-y-1 text-slate-300">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#65B32E] shrink-0 mt-0.5" />
                <span><strong>Vadodara Plant:</strong> 72 - Durga Industrial Estate, Near Padamla Village, Sakarda, Vadodara, Gujarat, India</span>
              </p>
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#65B32E] shrink-0 mt-0.5" />
                <span><strong>Cuddalore Plant:</strong> 86 - Madha Koil Street, Agara Alampadi Post, Thattanodai, Sethiathoppu, Cuddalore, Tamil Nadu, India</span>
              </p>
            </div>
            <div className="pt-2 border-t border-slate-700/80 flex flex-wrap gap-4 text-slate-300">
              <p className="flex items-center gap-2"><Mail className="w-3.5 h-3.5 text-[#65B32E]" /> sales@vlsfibreindlining.com / wilsoniya94.lvv@gmail.com</p>
              <p className="flex items-center gap-2"><Phone className="w-3.5 h-3.5 text-[#65B32E]" /> +91 9898 426 164 / +91 9054 436 164</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

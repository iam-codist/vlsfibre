import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Award, 
  ShieldCheck, 
  CheckCircle2, 
  Cpu, 
  Factory, 
  Calendar, 
  ArrowRight, 
  Zap, 
  MapPin, 
  Building 
} from 'lucide-react';

export default function AboutPage() {
  const milestones = [
    {
      year: '2006',
      title: 'Foundation of VLS Fibre Composites',
      desc: 'Established with specialized custom hand lay-up chemical tanks and motor pump canopies for South Indian chemical and electroplating clusters.'
    },
    {
      year: '2012',
      title: 'Dual-Laminate Thermoforming & Spark Testing Facility',
      desc: 'Pioneered pure Polypropylene (PPH) and PVDF thermoforming with 100% dielectric 20 kV non-destructive testing, replacing rubber-lined steel across major pickling mills.'
    },
    {
      year: '2017',
      title: 'Automated Continuous Filament Winding Commissioning',
      desc: 'Commissioned large-diameter helical filament winding CNC machinery, expanding vertical storage tank capabilities up to 120,000 Liters (120 kL).'
    },
    {
      year: '2021',
      title: 'ASME Section X & BS 4994 Quality Standardization',
      desc: 'Formalized advanced FEA structural calculations and CPCB-compliant packed bed fume scrubber systems reaching 99.8% acid gas abatement.'
    },
    {
      year: 'Present',
      title: 'Leading Process Equipment Supplier & Global Exports',
      desc: 'Over 2,400 chemical vessels, reaction columns, and road tankers operating continuously in pharma, chlor-alkali, and steel plants across India and overseas.'
    }
  ];

  const machinery = [
    {
      name: 'CNC 4-Axis Helical Filament Winding Machine',
      capability: 'Tanks up to 4.5m Diameter x 14m Length',
      purpose: 'Applies continuous resin-impregnated E-glass roving under tension to achieve hoop tensile strength exceeding 300 MPa.'
    },
    {
      name: 'Automated Thermoplastic Butt-Welding Platen',
      capability: 'PP/PVDF Sheets up to 30mm Thickness',
      purpose: 'Heated tool butt-welding with computerized weld pressure and cool-down profiles conforming to German DVS 2207 standards.'
    },
    {
      name: 'High-Voltage Dielectric Spark Test Bays (20 kV)',
      capability: '100% Non-Destructive Seam Verification',
      purpose: 'Every weld seam and thermoformed corner is tested with high-frequency arc probes to guarantee absolute pinhole-free containment.'
    },
    {
      name: 'Controlled Post-Curing Thermal Chambers',
      capability: 'Elevated Post-Cure up to 90°C',
      purpose: 'Maximizes Barcol hardness, cross-link density, and heat distortion temperature (HDT) of Derakane vinyl ester resin systems.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] pt-28 pb-20 industrial-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F2F8EC] text-[#3B6E16] text-xs font-bold border border-[#65B32E]/30">
            <Factory className="w-3.5 h-3.5 text-[#65B32E]" />
            <span>ENGINEERING HERITAGE &amp; PLANT INFRASTRUCTURE</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1F2633] tracking-tight leading-tight">
            18+ Years of Precision Composite Fabrication &amp; Chemical Defense
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            VLS Fibre operates across two dedicated manufacturing divisions — <strong>VLS Fibre Industrial Lining</strong> (Vadodara, Gujarat) and <strong>VLS Fibre Composite</strong> (Cuddalore, Tamil Nadu) — eliminating corrosion-induced plant downtime through state-of-the-art dual-laminates, heavy industrial lining, and PPRC &amp; HDPE electro-fusion pipelines.
          </p>
        </div>

        {/* Plant Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 rounded-3xl bg-white border border-slate-200 space-y-3 shadow-md">
            <span className="text-3xl font-black text-[#65B32E] font-mono">45,000+</span>
            <h4 className="text-base font-bold text-slate-900">Sq. Ft. Twin Manufacturing Plants</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Equipped with overhead gantry cranes (20 Ton capacity) in Gujarat &amp; Tamil Nadu for handling and dispatch of mega-diameter reaction vessels and vertical tanks.
            </p>
          </div>
          <div className="p-8 rounded-3xl bg-white border border-slate-200 space-y-3 shadow-md">
            <span className="text-3xl font-black text-amber-600 font-mono">100%</span>
            <h4 className="text-base font-bold text-slate-900">In-House FEA Structural Engineering</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Every vessel design is validated for seismic zone ratings, wind loadings, nozzle bending moments, and full vacuum collapse prevention.
            </p>
          </div>
          <div className="p-8 rounded-3xl bg-white border border-slate-200 space-y-3 shadow-md">
            <span className="text-3xl font-black text-[#65B32E] font-mono">20 kV</span>
            <h4 className="text-base font-bold text-slate-900">Dielectric Seam Verification Standard</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Zero tolerance for liner defects. Third-party inspection reports (TPI: TUV, Bureau Veritas, DNV, SGS) provided with every dispatch.
            </p>
          </div>
        </div>

        {/* Virtual Machinery & Factory Tour */}
        {/* Virtual Machinery & Factory Tour */}
        <div className="space-y-6">
          <div className="max-w-2xl space-y-1">
            <span className="text-xs font-mono text-[#65B32E] uppercase tracking-wider font-bold block">
              INFRASTRUCTURE &amp; CAPITAL EQUIPMENT
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Advanced Machinery &amp; Clean Fabrication Bays
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Our heavy manufacturing plant integrates automated composite winding with precision thermoplastic fabrication.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {machinery.map((m, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2.5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[#65B32E] font-bold">CAPABILITY 0{idx + 1}</span>
                  <span className="text-[11px] px-2.5 py-0.5 rounded bg-slate-100 text-slate-700 font-mono border border-slate-200 font-medium">
                    {m.capability}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900">{m.name}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{m.purpose}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Manufacturing Plants & Divisions from Brochure */}
        <div className="space-y-6">
          <div className="max-w-2xl space-y-1">
            <span className="text-xs font-mono text-[#65B32E] uppercase tracking-wider font-bold block">
              MANUFACTURING DIVISIONS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Dual Heavy Fabrication Footprint in India
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Two specialized facilities serving industrial chemical corridors across North, West, and South India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-7 rounded-3xl bg-white border-2 border-[#65B32E]/30 shadow-md space-y-3 relative overflow-hidden">
              <div className="w-9 h-9 rounded-xl bg-[#F2F8EC] text-[#3B6E16] flex items-center justify-center">
                <Building className="w-5 h-5 text-[#65B32E]" />
              </div>
              <h3 className="text-lg font-bold text-[#1F2633]">VLS FIBRE INDUSTRIAL LINING</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                72 - Durga Industrial Estate, Near Padamla Village, Sakarda, Vadodara, Gujarat, India
              </p>
              <div className="pt-2 border-t border-slate-100 flex flex-wrap gap-2 text-[11px] font-mono">
                <span className="px-2.5 py-1 rounded bg-[#F2F8EC] text-[#3B6E16] font-semibold border border-[#65B32E]/30">
                  Heavy Dual-Laminates
                </span>
                <span className="px-2.5 py-1 rounded bg-[#F2F8EC] text-[#3B6E16] font-semibold border border-[#65B32E]/30">
                  Pickling Bath Lining
                </span>
              </div>
            </div>

            <div className="p-7 rounded-3xl bg-white border-2 border-[#65B32E]/30 shadow-md space-y-3 relative overflow-hidden">
              <div className="w-9 h-9 rounded-xl bg-[#F2F8EC] text-[#3B6E16] flex items-center justify-center">
                <Building className="w-5 h-5 text-[#65B32E]" />
              </div>
              <h3 className="text-lg font-bold text-[#1F2633]">VLS FIBRE COMPOSITE</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                86 - Madha Koil Street, Agara Alampadi Post, Thattanodai, Sethiathoppu, Cuddalore, Tamil Nadu, India
              </p>
              <div className="pt-2 border-t border-slate-100 flex flex-wrap gap-2 text-[11px] font-mono">
                <span className="px-2.5 py-1 rounded bg-[#F2F8EC] text-[#3B6E16] font-semibold border border-[#65B32E]/30">
                  Custom Composite Mouldings
                </span>
                <span className="px-2.5 py-1 rounded bg-[#F2F8EC] text-[#3B6E16] font-semibold border border-[#65B32E]/30">
                  Scrubber Systems
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Timeline */}
        <div className="space-y-6">
          <div className="max-w-2xl space-y-1">
            <span className="text-xs font-mono text-[#65B32E] uppercase tracking-wider font-bold block">
              18 YEARS OF INNOVATION
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              VLS Fibre Evolution Timeline
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Key milestones shaping our position as India’s premier chemical composite equipment engineering partner.
            </p>
          </div>

          <div className="relative border-l-2 border-[#65B32E]/30 pl-6 sm:pl-8 space-y-8 ml-3">
            {milestones.map((m, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-white border-3 border-[#65B32E] group-hover:bg-[#65B32E] transition-colors" />
                <span className="text-xs font-mono font-bold text-[#65B32E]">{m.year}</span>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-[#65B32E] transition-colors mt-0.5">
                  {m.title}
                </h3>
                <p className="text-xs text-slate-600 mt-1 max-w-2xl leading-relaxed">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Quality Certifications & Standards Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#1F2633] text-white border-t-2 border-[#65B32E] space-y-6 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-700/80">
            <div>
              <h3 className="text-xl font-bold text-white">Governing Design Standards &amp; QA Protocols</h3>
              <p className="text-xs text-slate-400 font-mono">THIRD PARTY INSPECTION (TPI) COMPLIANT</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-[#82d645] bg-[#65B32E]/20 px-3 py-1.5 rounded-lg border border-[#65B32E]/40 font-bold">
                ISO 9001:2015 CERTIFIED
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
            <div className="p-3.5 rounded-xl bg-[#2B3445] border border-slate-700/60 space-y-1">
              <span className="text-[#82d645] font-bold block">BS 4994:1987</span>
              <span className="text-slate-300 text-[11px]">Vessels &amp; Tanks in Reinforced Plastics</span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#2B3445] border border-slate-700/60 space-y-1">
              <span className="text-amber-400 font-bold block">ASME RTP-1</span>
              <span className="text-slate-300 text-[11px]">Reinforced Thermoset Corrosion Equipment</span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#2B3445] border border-slate-700/60 space-y-1">
              <span className="text-[#82d645] font-bold block">ASTM D3299</span>
              <span className="text-slate-300 text-[11px]">Filament-Wound Glass-Fiber Tanks</span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#2B3445] border border-slate-700/60 space-y-1">
              <span className="text-[#82d645] font-bold block">DVS 2205</span>
              <span className="text-slate-300 text-[11px]">Thermoplastic Welded Container Calculation</span>
            </div>
          </div>
        </div>

        {/* Schedule Plant Audit CTA */}
        <div className="p-8 rounded-3xl bg-white border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-slate-900">Schedule a Factory Visit or Third-Party Inspection</h3>
            <p className="text-xs text-slate-600">
              Witness spark testing, tensile peel tests, and filament winding in real-time at our fabrication plant.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-6 py-3 rounded-xl bg-[#65B32E] hover:bg-[#549824] text-white font-bold text-xs shrink-0 shadow-md shadow-[#65B32E]/25 transition-all"
          >
            Book Plant Inspection
          </Link>
        </div>
      </div>
    </div>
  );
}

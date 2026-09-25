import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PRODUCTS } from '@/data/products';
import InteractiveExplodedView from '@/components/products/InteractiveExplodedView';
import { 
  ShieldCheck, 
  ArrowLeft, 
  FileText, 
  Download, 
  Zap, 
  Thermometer, 
  Layers, 
  CheckCircle2, 
  MessageSquare,
  Award,
  Factory
} from 'lucide-react';

export async function generateStaticParams() {
  return PRODUCTS.map((p) => ({
    slug: p.slug,
  }));
}

export default async function ProductDetailPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#f8fafc] pt-40 sm:pt-44 pb-20 industrial-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Back Link */}
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#65B32E] hover:text-[#549824] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Complete Equipment Catalog</span>
        </Link>

        {/* Hero Product Overview Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Visual */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-slate-100 border border-slate-200 shadow-xl shadow-slate-900/5 group">
              <Image
                src={product.image}
                alt={product.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

              {/* Semantic Badges */}
              <div className="absolute top-4 left-4 z-20 flex flex-wrap gap-2">
                <span className="px-3 py-1.5 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 text-slate-800 text-xs font-mono font-bold shadow-md">
                  {product.materialType}
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-amber-500 text-slate-950 text-xs font-mono font-bold shadow-md">
                  {product.resinGrade}
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between p-3.5 rounded-2xl bg-slate-950/85 backdrop-blur-md text-white text-xs">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#65B32E]" />
                  <span className="font-semibold">100% Spark Tested</span>
                </div>
                <span className="text-amber-300 font-mono font-bold">
                  {product.specs.sparkTestVoltage}
                </span>
              </div>
            </div>

            {/* Quick Trust Bar */}
            <div className="grid grid-cols-3 gap-3">
              <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-center shadow-xs">
                <span className="text-[10px] font-mono text-slate-500 font-semibold block">DESIGN CODE</span>
                <span className="text-xs font-bold text-[#3B6E16] font-mono">BS 4994 &amp; ASME</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-center shadow-xs">
                <span className="text-[10px] font-mono text-slate-500 font-semibold block">CHEMICAL LINER</span>
                <span className="text-xs font-bold text-amber-800 font-mono">Pure Virgin PPH</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-center shadow-xs">
                <span className="text-[10px] font-mono text-slate-500 font-semibold block">GA DRAWING</span>
                <span className="text-xs font-bold text-[#3B6E16] font-mono">Dispatched in 24h</span>
              </div>
            </div>
          </div>

          {/* Product Specifications & Purchasing Gate */}
          <div className="lg:col-span-5 space-y-6 bg-white border border-slate-200 p-8 rounded-3xl shadow-xl shadow-slate-900/5">
            <div className="space-y-2">
              <span className="text-xs font-mono text-[#65B32E] font-bold uppercase tracking-wider block">
                {product.subCategory}
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                {product.name}
              </h1>
              <p className="text-slate-600 text-sm leading-relaxed pt-1">
                {product.fullDesc}
              </p>
            </div>

            {/* Key Features List */}
            <div className="space-y-2 pt-2">
              <span className="text-xs font-mono uppercase text-slate-500 font-bold block">
                Engineered Parameters:
              </span>
              <ul className="space-y-2">
                {product.features.map((f, i) => (
                  <li key={i} className="text-xs text-slate-700 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#65B32E] shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bulk Pricing / Instant CAD Spec Lead Gate */}
            <div className="pt-6 border-t border-slate-100 space-y-3">
              <Link
                href={`/contact?product=${encodeURIComponent(product.name)}`}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#65B32E] hover:bg-[#549824] text-white font-extrabold text-xs shadow-lg shadow-[#65B32E]/25 transition-all"
              >
                <FileText className="w-4 h-4" />
                <span>Get Instant Bulk Pricing &amp; CAD Spec</span>
              </Link>

              <a
                href={`https://wa.me/919898426164?text=Hello%20VLS%20Fibre%2C%20I%20am%20reviewing%20the%20${encodeURIComponent(product.name)}%20and%20require%20technical%20specs.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-[#F2F8EC] border border-[#65B32E]/40 text-[#3B6E16] font-bold text-xs hover:bg-[#65B32E] hover:text-white transition-all group"
              >
                <MessageSquare className="w-4 h-4 text-[#65B32E] group-hover:text-white transition-colors" />
                <span>Discuss with Lead Engineer on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* 360 Interactive Exploded Cross-Section */}
        <InteractiveExplodedView product={product} />

        {/* Technical Specification Matrix Table */}
        <div className="p-6 sm:p-10 rounded-3xl bg-white border border-slate-200 space-y-6 shadow-xl shadow-slate-900/5">
          <div className="flex items-center gap-3 pb-4 border-b border-slate-200">
            <Award className="w-6 h-6 text-[#65B32E]" />
            <div>
              <h3 className="text-xl font-bold text-slate-900">Full Technical Specifications Table</h3>
              <p className="text-xs text-slate-500 font-mono">ASME RTP-1 / BS 4994 COMPLIANCE SHEET</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex justify-between items-center text-xs">
              <span className="text-slate-500 font-mono">Tensile Strength</span>
              <span className="font-bold text-slate-900 font-mono">{product.specs.tensileStrength}</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex justify-between items-center text-xs">
              <span className="text-slate-500 font-mono">Temperature Range</span>
              <span className="font-bold text-amber-700 font-mono">{product.specs.temperatureRange}</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex justify-between items-center text-xs">
              <span className="text-slate-500 font-mono">Resin Matrix</span>
              <span className="font-bold text-slate-900 font-mono">{product.specs.resinMatrix}</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex justify-between items-center text-xs">
              <span className="text-slate-500 font-mono">Wall Thickness</span>
              <span className="font-bold text-[#3B6E16] font-mono">{product.specs.wallThickness}</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex justify-between items-center text-xs">
              <span className="text-slate-500 font-mono">Spark Testing</span>
              <span className="font-bold text-[#3B6E16] font-mono">{product.specs.sparkTestVoltage}</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex justify-between items-center text-xs">
              <span className="text-slate-500 font-mono">Capacity Range</span>
              <span className="font-bold text-slate-900 font-mono">{product.specs.capacitiesAvailable}</span>
            </div>
          </div>

          {/* Chemical Compatibility Tags */}
          <div className="pt-4 border-t border-slate-100 space-y-2">
            <span className="text-xs font-mono uppercase text-slate-500 font-bold block">
              Proven Chemical Media Resistance:
            </span>
            <div className="flex flex-wrap gap-2">
              {product.specs.chemicalResistance.map((chem, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-lg bg-[#F2F8EC] border border-[#65B32E]/30 text-[#3B6E16] text-xs font-mono font-semibold"
                >
                  {chem}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

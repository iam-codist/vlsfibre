'use client';

import React, { useState } from 'react';
import { 
  Layers, 
  RotateCw, 
  ShieldCheck, 
  Zap, 
  Info, 
  Flame, 
  CheckCircle2 
} from 'lucide-react';
import { Product } from '@/types';

export default function InteractiveExplodedView({ product }: { product: Product }) {
  const [activeLayer, setActiveLayer] = useState<number>(0);
  const [rotationAngle, setRotationAngle] = useState<number>(45);

  const layers = [
    {
      title: 'Complete Composite Cross-Section',
      subtitle: 'Monolithic Dual-Laminate Assembly',
      description: 'Combines the ultimate chemical resistance of an inner thermoplastic liner with the structural rigidity and pressure capability of a filament-wound outer FRP matrix.',
      thickness: product.specs.wallThickness,
      tensile: product.specs.tensileStrength,
      testStandard: 'ASME Section X / BS 4994:1987'
    },
    {
      title: 'Layer 1: Inner Thermoplastic Barrier',
      subtitle: 'Virgin Polypropylene (PPH) or PVDF',
      description: 'Solid thermoformed thermoplastic sheet (3 mm - 8 mm) acting as the direct barrier against concentrated acids (HCl, H₂SO₄, Cl₂). 100% dielectric spark tested with zero pinhole tolerance.',
      thickness: '5 mm - 8 mm PPH Liner',
      tensile: '32 MPa Yield Strength',
      testStandard: 'DVS 2205 / ASTM D1788'
    },
    {
      title: 'Layer 2: Chemical Bonding & Corrosion Veil',
      subtitle: 'C-Glass / Synthetic Veil + Derakane 411',
      description: 'Resin-rich corrosion barrier with 75% to 85% pure vinyl ester resin content. Eliminates micro-fissuring and prevents fluid wicking into the structural glass reinforcement.',
      thickness: '2.5 mm Resin-Rich Veil',
      tensile: '85 MPa Tensile Strength',
      testStandard: 'ASTM C581 Chemical Immersion'
    },
    {
      title: 'Layer 3: Outer Structural FRP Shell',
      subtitle: 'Continuous Filament-Wound E-Glass Roving',
      description: 'High-density multi-axial filament wound casing engineered for external hydrostatic head, wind gusts, seismic forces, and mechanical pipe loads.',
      thickness: '12 mm - 28 mm Structural Matrix',
      tensile: '220 - 310 MPa Hoop Tensile',
      testStandard: 'ASTM D3299 / ASTM D2584'
    }
  ];

  const current = layers[activeLayer];

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 space-y-6 shadow-xl shadow-slate-900/5">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div className="flex items-center gap-2.5">
          <div className="p-2.5 rounded-xl bg-[#F2F8EC] text-[#3B6E16]">
            <Layers className="w-5 h-5 text-[#65B32E]" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              Interactive Composite Layer &amp; 360° Slicing Analysis
            </h3>
            <p className="text-xs text-slate-500 font-mono">
              SPECIFICATION: {product.name.toUpperCase()}
            </p>
          </div>
        </div>

        {/* 360 Rotation Dial Control */}
        <div className="flex items-center gap-3 bg-slate-50 px-3.5 py-1.5 rounded-xl border border-slate-200">
          <RotateCw className="w-4 h-4 text-[#65B32E]" />
          <span className="text-xs text-slate-600 font-mono">Orientation:</span>
          <input
            type="range"
            min="0"
            max="360"
            value={rotationAngle}
            onChange={(e) => setRotationAngle(Number(e.target.value))}
            className="w-24 accent-[#65B32E] cursor-pointer"
          />
          <span className="text-xs font-mono font-bold text-[#65B32E]">{rotationAngle}°</span>
        </div>
      </div>

      {/* Layer Navigation Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {layers.map((l, idx) => (
          <button
            key={idx}
            onClick={() => setActiveLayer(idx)}
            className={`p-3 rounded-xl text-left text-xs font-semibold transition-all border ${
              activeLayer === idx
                ? 'bg-[#F2F8EC] border-[#65B32E] text-[#1F2633] shadow-xs ring-1 ring-[#65B32E]/30'
                : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300'
            }`}
          >
            <div className="text-[10px] font-mono text-[#65B32E] font-bold">LAYER 0{idx}</div>
            <div className="truncate font-bold mt-0.5">{l.title.split(':')[0]}</div>
          </button>
        ))}
      </div>

      {/* Graphic Exploded Representation */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Dynamic Diagram Visualizer */}
        <div className="lg:col-span-6 relative aspect-square sm:aspect-[4/3] rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center p-6 overflow-hidden">
          <div className="absolute inset-0 industrial-dots opacity-50" />

          {/* Concentric Cylinders representing laminate layers */}
          <div
            className="relative w-64 h-64 flex items-center justify-center transition-transform duration-500"
            style={{ transform: `rotate(${rotationAngle}deg)` }}
          >
            {/* Outer Structural FRP Shell */}
            <div
              className={`absolute w-60 h-60 rounded-full border-4 border-dashed transition-all duration-300 flex items-center justify-center ${
                activeLayer === 0 || activeLayer === 3
                  ? 'border-[#65B32E] bg-[#F2F8EC]/60 shadow-md'
                  : 'border-slate-300 opacity-40'
              }`}
            >
              <span className="absolute top-2 text-[9px] font-mono font-bold text-[#3B6E16] bg-white px-1.5 py-0.5 rounded shadow-xs">
                Outer Filament FRP
              </span>
            </div>

            {/* Chemical Barrier Veil */}
            <div
              className={`absolute w-44 h-44 rounded-full border-3 border-dotted transition-all duration-300 flex items-center justify-center ${
                activeLayer === 0 || activeLayer === 2
                  ? 'border-emerald-600 bg-emerald-100/50 shadow-md'
                  : 'border-slate-300 opacity-40'
              }`}
            >
              <span className="absolute top-2 text-[9px] font-mono font-bold text-emerald-800 bg-white px-1.5 py-0.5 rounded shadow-xs">
                Vinyl Ester Veil
              </span>
            </div>

            {/* Inner Thermoplastic Liner (PP / PVDF) */}
            <div
              className={`absolute w-28 h-28 rounded-full border-4 transition-all duration-300 flex items-center justify-center ${
                activeLayer === 0 || activeLayer === 1
                  ? 'border-amber-500 bg-amber-100/60 shadow-lg'
                  : 'border-slate-300 opacity-40'
              }`}
            >
              <span className="text-[10px] font-mono font-extrabold text-amber-900 text-center px-1">
                Inner Liner (PP/PVDF)
              </span>
            </div>

            {/* Center Core */}
            <div className="w-3.5 h-3.5 rounded-full bg-[#65B32E] animate-ping pointer-events-none" />
          </div>

          <div className="absolute bottom-3 left-3 text-[10px] text-slate-500 font-mono font-bold">
            AXIAL SECTION &bull; ROTATION: {rotationAngle}°
          </div>
        </div>

        {/* Layer Technical Metadata */}
        <div className="lg:col-span-6 space-y-4">
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
            <span className="text-xs font-mono text-[#65B32E] font-bold block">
              {current.subtitle}
            </span>
            <h4 className="text-lg font-bold text-slate-900">{current.title}</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              {current.description}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
              <span className="text-slate-500 block text-[10px] font-mono font-semibold">WALL THICKNESS</span>
              <span className="text-sm font-bold text-slate-900 font-mono">{current.thickness}</span>
            </div>

            <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
              <span className="text-slate-500 block text-[10px] font-mono font-semibold">TENSILE RATING</span>
              <span className="text-sm font-bold text-[#3B6E16] font-mono">{current.tensile}</span>
            </div>

            <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs col-span-2">
              <span className="text-slate-500 block text-[10px] font-mono font-semibold">GOVERNING CODE</span>
              <span className="text-xs font-bold text-amber-800 font-mono">{current.testStandard}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

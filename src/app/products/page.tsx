'use client';

import React, { useState, useMemo } from 'react';
import { PRODUCTS, CATEGORIES } from '@/data/products';
import ProductCard from '@/components/products/ProductCard';
import { 
  Filter, 
  Search, 
  Layers, 
  ShieldCheck, 
  FileSpreadsheet, 
  SlidersHorizontal,
  Factory
} from 'lucide-react';
import Link from 'next/link';

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedMaterial, setSelectedMaterial] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const materials = [
    'all',
    'PP-FRP',
    'PVDF-FRP',
    'HDPE Spiral',
    'MS-PTFE Lined',
    'Pure FRP/GRP'
  ];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchCat = selectedCategory === 'all' || p.category === selectedCategory;
      const matchMat = selectedMaterial === 'all' || p.materialType === selectedMaterial;
      const matchSearch =
        !searchQuery.trim() ||
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.subCategory.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchMat && matchSearch;
    });
  }, [selectedCategory, selectedMaterial, searchQuery]);

  return (
    <div className="min-h-screen bg-[#f8fafc] pt-36 sm:pt-40 pb-20 industrial-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F2F8EC] text-[#3B6E16] text-xs font-bold border border-[#65B32E]/30">
            <Factory className="w-3.5 h-3.5 text-[#65B32E]" />
            <span>VLS FIBRE HEAVY ENGINEERING CATALOG</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1F2633] tracking-tight">
            Industrial Composites &amp; Dual-Laminate Systems
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            All equipment is designed to ASME Section X, ASME RTP-1, and BS 4994:1987 standards. 100% spark tested up to 20 kV for zero pinhole reliability.
          </p>
        </div>

        {/* Filter Controls Bar (Light Theme) */}
        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-md mb-10 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            {/* Search Input */}
            <div className="md:col-span-4 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by equipment, HCl, scrubber..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs placeholder-slate-400 focus:outline-none focus:border-[#65B32E]"
              />
            </div>

            {/* Category Filter Pills */}
            <div className="md:col-span-8 flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedCategory === 'all'
                    ? 'bg-[#65B32E] text-white shadow-md shadow-[#65B32E]/25'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                All Systems ({PRODUCTS.length})
              </button>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-[#65B32E] text-white shadow-md shadow-[#65B32E]/25'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
                  }`}
                >
                  {cat.title.split('&')[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Material Sub-Filter */}
          <div className="pt-3 border-t border-slate-100 flex items-center gap-2 overflow-x-auto text-xs">
            <span className="text-slate-500 font-mono flex items-center gap-1 shrink-0 font-medium">
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#65B32E]" />
              <span>Material Base:</span>
            </span>
            {materials.map((mat) => (
              <button
                key={mat}
                onClick={() => setSelectedMaterial(mat)}
                className={`px-3 py-1 rounded-lg font-mono text-[11px] shrink-0 transition-colors ${
                  selectedMaterial === mat
                    ? 'bg-amber-100 text-amber-900 border border-amber-300 font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {mat === 'all' ? 'All Materials' : mat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        ) : (
          <div className="p-16 rounded-3xl bg-white border border-slate-200 text-center space-y-3 shadow-sm">
            <p className="text-slate-500 text-sm">
              No equipment matched the current filters.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedMaterial('all');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-xl bg-[#65B32E] hover:bg-[#549824] text-white font-bold text-xs shadow-md"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Quick Help Banner */}
        <div className="mt-16 p-8 rounded-3xl bg-white border border-slate-200 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-slate-900">Need a Non-Standard Diameter or Pressure Rating?</h3>
            <p className="text-xs text-slate-600">
              Our engineering team custom designs reaction vessels and scrubbers up to 120 kL with tailor-made nozzle configurations.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-6 py-3 rounded-xl bg-[#65B32E] hover:bg-[#549824] text-white font-bold text-xs shrink-0 shadow-md shadow-[#65B32E]/25 transition-all"
          >
            Request Custom Calculation
          </Link>
        </div>
      </div>
    </div>
  );
}

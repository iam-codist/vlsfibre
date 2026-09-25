'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  X, 
  MapPin, 
  ArrowRight, 
  Layers, 
  MessageSquare, 
  Maximize2,
  Factory
} from 'lucide-react';

interface GalleryItem {
  id: string;
  title: string;
  category: 'industrial' | 'architectural' | 'bespoke';
  location: string;
  image: string;
  spec: string;
  clientSector: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'Dual 25 kL Reaction Vessels with Top Agitator Drive',
    category: 'industrial',
    location: 'Dahej SEZ, Gujarat',
    image: '/images/products/pp-frp-chemical-reaction-vessel-blue.jpeg',
    spec: 'PP-FRP / Derakane 411 / 20 kV Spark Tested',
    clientSector: 'Active Pharma Ingredients'
  },
  {
    id: 'g-2',
    title: 'Twin Packed-Bed Chemical Fume Scrubber Columns',
    category: 'industrial',
    location: 'Ranipet Industrial Estate, Tamil Nadu',
    image: '/images/products/pp-frp-scrubber-packed-columns-towers.jpeg',
    spec: '35,000 CFM / 99.8% HCl Acid Mist Abatement',
    clientSector: 'Chemical Processing'
  },
  {
    id: 'g-3',
    title: '50 kL Filament-Wound Vertical Acid Storage Tank Installation',
    category: 'industrial',
    location: 'Visakhapatnam Pharma City, Andhra Pradesh',
    image: '/images/products/frp-vertical-storage-tank-crane-hoist.jpeg',
    spec: 'ASME RTP-1 / ASTM D3299 Continuous Helix Winding',
    clientSector: 'Bulk Acid Tank Farm'
  },
  {
    id: 'g-4',
    title: 'Continuous Steel Pickling Bath Dip Tanks with Rib Reinforcements',
    category: 'industrial',
    location: 'Bellary Steel Hub, Karnataka',
    image: '/images/products/pp-rectangular-pickling-tanks.jpeg',
    spec: '25mm PP Homopolymer + External FRP Encapsulation',
    clientSector: 'Hot Dip Galvanizing & Tube Mills'
  },
  {
    id: 'g-5',
    title: '30 kL Seamless HDPE Spiral Road Acid Haulage Tanker',
    category: 'bespoke',
    location: 'Chennai Chemical Logistics Hub',
    image: '/images/products/hdpe-spiral-acid-tanker.jpeg',
    spec: 'PESO Compliant / Spiral Extrusion PE-100',
    clientSector: 'Hazardous Chemical Haulage'
  },
  {
    id: 'g-6',
    title: 'High-Static Pressure Centrifugal Exhaust Fume Blower',
    category: 'industrial',
    location: 'Sri City Industrial Corridor',
    image: '/images/products/pp-frp-centrifugal-exhaust-blower.jpeg',
    spec: '22 kW Flameproof Drive / AMCA 210 Tested',
    clientSector: 'Acid Pickling Exhaust'
  },
  {
    id: 'g-7',
    title: 'High-Temperature PVDF Jacketed Thermal Process Reactor',
    category: 'industrial',
    location: 'Hyderabad Pharma Cluster, Telangana',
    image: '/images/products/pvdf-jacketed-tank.jpeg',
    spec: 'PVDF-FRP / Derakane 470 / Rated for 135°C',
    clientSector: 'Bromination Synthesis'
  },
  {
    id: 'g-8',
    title: 'Carbon Steel Spool Pipes Paste-Extruded with Virgin PTFE',
    category: 'industrial',
    location: 'Vapi Industrial Estate, Gujarat',
    image: '/images/products/ms-ptfe-teflon-lined-spool-pipes.jpeg',
    spec: 'ASTM F1545 / Full Vacuum Resistant / 15 kV Spark Tested',
    clientSector: 'Corrosive Transfer Manifolds'
  },
  {
    id: 'g-9',
    title: 'Multi-Unit High-Capacity Vertical Storage Tank Battery',
    category: 'industrial',
    location: 'Tuticorin Coastal Chemical Zone',
    image: '/images/products/pp-frp-vertical-storage-tanks-grey-truck.jpeg',
    spec: 'Helical Winding / UV Resistant Gelcoat',
    clientSector: 'Chlor-Alkali Storage'
  },
  {
    id: 'g-10',
    title: 'Precision Moulded FRP Motor Weather Canopies & Pump Guards',
    category: 'bespoke',
    location: 'Mangalore Coastal Refinery Zone',
    image: '/images/products/frp-motor-canopies-pump-guards.jpeg',
    spec: 'IP55 Outdoor Weatherproof / UV-Stabilized Gelcoat',
    clientSector: 'Refinery Pump Yards'
  },
  {
    id: 'g-11',
    title: 'Agitated Nutsche Filter Solid-Liquid Separation Grid',
    category: 'industrial',
    location: 'Tarapur Chemical Zone, Maharashtra',
    image: '/images/products/pp-frp-nutsche-filter-bottom-grid.jpeg',
    spec: 'Vacuum Rated to 720 mm Hg / Zero Metal Contact',
    clientSector: 'Pharma API Recovery'
  },
  {
    id: 'g-12',
    title: 'Internal Helical Cooling & Heating Coil Manifold System',
    category: 'bespoke',
    location: 'Ankleshwar Special Economic Zone',
    image: '/images/products/tank-internal-cooling-coil-system.jpeg',
    spec: 'Titanium & PVDF Coils / Rapid Exotherm Dissipation',
    clientSector: 'Chemical Reaction Synthesis'
  }
];

export default function GalleryPage() {
  const [filter, setFilter] = useState<'all' | 'industrial' | 'architectural' | 'bespoke'>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  const filteredItems = GALLERY_ITEMS.filter(
    (item) => filter === 'all' || item.category === filter
  );

  return (
    <div className="min-h-screen bg-[#f8fafc] pt-40 sm:pt-44 pb-20 industrial-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F2F8EC] text-[#3B6E16] text-xs font-bold border border-[#65B32E]/30">
            <Factory className="w-3.5 h-3.5 text-[#65B32E]" />
            <span>IN-SITU FIELD INSTALLATION PHOTOGRAPHY</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1F2633] tracking-tight">
            Factory Fabrication &amp; Plant Commissioning Gallery
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Real photography of VLS Fibre reaction vessels, scrubbers, storage tanks, and dual-laminates during workshop fabrication, crane rigging, and client plant handovers across India.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2.5">
          {[
            { id: 'all', label: 'All Installations' },
            { id: 'industrial', label: 'Industrial & Chemical Vessels' },
            { id: 'architectural', label: 'Architectural & Panels' },
            { id: 'bespoke', label: 'Bespoke Custom Engineering' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as any)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                filter === tab.id
                  ? 'bg-[#65B32E] text-white shadow-md shadow-[#65B32E]/25 scale-105'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 shadow-xs'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Masonry-Style Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              className="group cursor-pointer rounded-2xl bg-white border border-slate-200 hover:border-[#65B32E] overflow-hidden shadow-xs hover:shadow-xl hover:shadow-[#65B32E]/10 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />

                {/* Semantic Backdrop-Blur Badges */}
                <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/95 backdrop-blur-md border border-slate-200 text-slate-800 text-[10px] font-mono font-bold shadow-xs">
                  <MapPin className="w-3 h-3 text-[#65B32E]" />
                  <span>{item.location}</span>
                </div>

                <div className="absolute inset-0 bg-slate-950/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-xs">
                  <span className="p-3 rounded-full bg-[#65B32E] text-white shadow-lg">
                    <Maximize2 className="w-5 h-5" />
                  </span>
                </div>
              </div>

              <div className="p-5 space-y-2">
                <span className="text-[10px] font-mono uppercase text-amber-700 font-bold block">
                  {item.clientSector}
                </span>
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#65B32E] transition-colors line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 font-mono line-clamp-1">
                  {item.spec}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal with Zoom */}
        {selectedPhoto && (
          <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
            <div className="relative w-full max-w-4xl bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
              {/* Modal Top Bar */}
              <div className="p-4 sm:p-5 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#65B32E]" />
                  <span className="text-xs font-mono text-slate-900 font-bold">
                    {selectedPhoto.location}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedPhoto(null)}
                  className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Photo View */}
              <div className="relative w-full h-[380px] sm:h-[480px] bg-slate-950">
                <Image
                  src={selectedPhoto.image}
                  alt={selectedPhoto.title}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Modal Bottom Metadata & Action */}
              <div className="p-6 bg-white border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <h4 className="text-base font-bold text-slate-900">{selectedPhoto.title}</h4>
                  <p className="text-xs text-slate-500 font-mono">
                    SPECIFICATION: {selectedPhoto.spec} &bull; {selectedPhoto.clientSector}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Link
                    href={`/contact?product=${encodeURIComponent(selectedPhoto.title)}`}
                    onClick={() => setSelectedPhoto(null)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#65B32E] hover:bg-[#549824] text-white font-bold text-xs shadow-md shadow-[#65B32E]/25 transition-all"
                  >
                    <span>Inquire Similar Spec</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href={`https://wa.me/919898426164?text=Hello%20VLS%20Fibre%2C%20I%20am%20interested%20in%20the%20${encodeURIComponent(selectedPhoto.title)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-[#F2F8EC] border border-[#65B32E]/40 text-[#3B6E16] hover:bg-[#65B32E] hover:text-white transition-colors group"
                    title="Ask on WhatsApp"
                  >
                    <MessageSquare className="w-4 h-4 text-[#65B32E] group-hover:text-white transition-colors" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

'use client';

import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, MessageSquare, ArrowRight, ShieldCheck, Sparkles, Building2, Phone, User, Layers } from 'lucide-react';
import WhatsAppIcon from '@/components/ui/WhatsAppIcon';

export default function AutoLeadModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [waLink, setWaLink] = useState('');

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    companyName: '',
    productCategory: 'FRP Storage Tank (up to 120 kL)',
    capacityOrMedia: ''
  });

  useEffect(() => {
    // Check if dismissed in this session
    const dismissed = sessionStorage.getItem('vls_lead_popup_dismissed');
    if (!dismissed) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 5500); // 5.5 seconds after landing

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('vls_lead_popup_dismissed', 'true');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.phone.trim() || !formData.fullName.trim()) return;

    setLoading(true);
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.fullName,
          phone: formData.phone,
          companyName: formData.companyName,
          productCategory: formData.productCategory,
          projectDetails: formData.capacityOrMedia,
          leadSource: 'auto_popup_modal'
        })
      });

      const data = await res.json();
      setIsSubmitted(true);
      sessionStorage.setItem('vls_lead_popup_dismissed', 'true');

      if (data.waDispatchUrl) {
        setWaLink(data.waDispatchUrl);
      }
    } catch (err) {
      console.error('Lead submission failed', err);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        data-lenis-prevent="true"
        onWheel={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 animate-in zoom-in-95 duration-200 overscroll-contain lenis-prevent max-h-[90vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header matching Client Brochure */}
        <div className="bg-[#1F2633] text-white p-6 sm:p-7 relative overflow-hidden border-b-2 border-[#65B32E]">
          <div className="absolute top-0 right-0 w-40 h-40 bg-[#65B32E]/15 rounded-full blur-2xl pointer-events-none" />
          <div className="relative z-10 space-y-1.5">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 text-[#65B32E] text-[10px] font-extrabold uppercase tracking-wider">
              <Sparkles className="w-3 h-3 text-[#65B32E]" />
              <span>Turnkey Engineering Consultation</span>
            </span>
            <h3 id="modal-title" className="text-xl sm:text-2xl font-extrabold tracking-tight leading-snug">
              Request Instant Sizing &amp; Price Quote
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Connect with our chemical process engineers for ASME RTP-1 calculations, preliminary GA drawings, and budget estimates.
            </p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-7">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {/* Full Name */}
                <div className="space-y-1">
                  <label className="font-semibold text-slate-700 flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-[#65B32E]" />
                    <span>Your Name *</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Patel"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-300 focus:outline-none focus:border-[#65B32E] focus:bg-white transition-colors"
                  />
                </div>

                {/* WhatsApp / Phone */}
                <div className="space-y-1">
                  <label className="font-semibold text-slate-700 flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5 text-[#65B32E]" />
                    <span>WhatsApp / Phone *</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-300 focus:outline-none focus:border-[#65B32E] focus:bg-white transition-colors"
                  />
                </div>
              </div>

              {/* Company & Location */}
              <div className="space-y-1">
                <label className="font-semibold text-slate-700 flex items-center gap-1">
                  <Building2 className="w-3.5 h-3.5 text-[#65B32E]" />
                  <span>Company Name &amp; Plant Location (Optional)</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Gujarat Alkalies / Dahej Plant"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-300 focus:outline-none focus:border-[#65B32E] focus:bg-white transition-colors"
                />
              </div>

              {/* Product Category */}
              <div className="space-y-1">
                <label className="font-semibold text-slate-700 flex items-center gap-1">
                  <Layers className="w-3.5 h-3.5 text-[#65B32E]" />
                  <span>Equipment of Interest</span>
                </label>
                <select
                  value={formData.productCategory}
                  onChange={(e) => setFormData({ ...formData, productCategory: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-300 focus:outline-none focus:border-[#65B32E] focus:bg-white transition-colors notranslate"
                  translate="no"
                >
                  <option value="FRP Storage Tank (up to 120 kL)">FRP Storage Tank (Vertical / Horizontal up to 120 kL)</option>
                  <option value="PP-FRP Reaction Vessel">PP-FRP Reaction Vessel with Agitator / Dimple Jacket</option>
                  <option value="Packed Bed Fume Scrubber">Air Pollution Packed Bed Fume Scrubber &amp; Blower</option>
                  <option value="Seamless HDPE Spiral Road Tanker">Seamless HDPE Spiral Road Tanker (Corrosive Transport)</option>
                  <option value="PP Pickling Dip Tank">PP Rectangular Steel-Caged Pickling Dip Tank</option>
                  <option value="On-Site Tank Fabrication">Large Diameter Field / On-Site Tank Fabrication</option>
                </select>
              </div>

              {/* Media & Capacity */}
              <div className="space-y-1">
                <label className="font-semibold text-slate-700">
                  Chemical Media, Capacity or Operating Temp (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. HCl 33%, 30 kL, 45°C ambient"
                  value={formData.capacityOrMedia}
                  onChange={(e) => setFormData({ ...formData, capacityOrMedia: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-300 focus:outline-none focus:border-[#65B32E] focus:bg-white transition-colors"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 px-4 rounded-xl bg-[#65B32E] hover:bg-[#549824] text-white font-extrabold text-xs tracking-wider uppercase transition-all shadow-md shadow-[#65B32E]/25 flex items-center justify-center gap-2"
                >
                  <span>{loading ? 'Submitting Inquiry...' : 'Submit & Receive Technical Quote'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>100% Confidential &bull; Non-Disclosure Guaranteed</span>
                </span>
                <button
                  type="button"
                  onClick={handleClose}
                  className="hover:underline text-slate-500"
                >
                  Maybe Later
                </button>
              </div>
            </form>
          ) : (
            /* Submission Success State */
            <div className="py-6 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-inner">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <h4 className="text-lg font-bold text-slate-900">
                  Inquiry Dispatched Successfully!
                </h4>
                <p className="text-xs text-slate-600 max-w-sm mx-auto">
                  Our Lead Chemical Process Engineer has received your specifications and is formulating preliminary sizing and pricing.
                </p>
              </div>

              {waLink && (
                <div className="pt-2">
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 py-3 px-6 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-xl text-xs shadow-md transition-all"
                  >
                    <WhatsAppIcon className="w-4 h-4 fill-white" />
                    <span>Open Direct WhatsApp Sales Chat</span>
                  </a>
                </div>
              )}

              <div className="pt-2">
                <button
                  onClick={handleClose}
                  className="text-xs font-semibold text-slate-500 hover:text-slate-800 underline"
                >
                  Return to Website
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

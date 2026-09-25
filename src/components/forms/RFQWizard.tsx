'use client';

import React, { useState } from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  Layers, 
  Ruler, 
  Clock, 
  UserCheck, 
  Send, 
  MessageSquare, 
  Building2, 
  AlertCircle 
} from 'lucide-react';
import { LeadFormData } from '@/types';

const CATEGORIES = [
  'PP-FRP Reaction Vessel (With Agitator)',
  'FRP Vertical Chemical Storage Tank',
  'Dual-Column Packed Bed Fume Scrubber',
  'PP-FRP Centrifugal Exhaust Blower',
  'Heavy-Duty Acid Pickling & Dip Tank',
  'HDPE Spiral Wound Road Tanker',
  'MS PTFE/Teflon Lined Spool Pipes',
  'PVDF-FRP Jacketed High-Temp Tank',
  'FRP Industrial Roofing & Cladding Sheets',
  'Custom Moulded Acoustic Enclosure / Canopy'
];

export default function RFQWizard() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [waLink, setWaLink] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [formData, setFormData] = useState<LeadFormData>({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    productCategory: CATEGORIES[0],
    capacityOrSize: '10,000 Liters (10 kL)',
    chemicalMedia: 'Hydrochloric Acid (HCl 33%)',
    operatingTemp: 'Ambient to 65°C',
    deliveryTimeline: 'Standard (4 - 6 Weeks)',
    projectLocation: '',
    projectDetails: '',
    leadSource: 'rfq_wizard'
  });

  const validateStep = (step: number) => {
    const errs: Record<string, string> = {};
    if (step === 1 && !formData.productCategory) {
      errs.productCategory = 'Please select a product category';
    }
    if (step === 4) {
      if (!formData.fullName.trim()) errs.fullName = 'Full Name is required';
      if (!formData.phone.trim() || formData.phone.length < 8) {
        errs.phone = 'Valid phone or WhatsApp number is required';
      }
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 4));
    }
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(4)) return;

    setIsSubmitting(true);
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
        if (data.waDispatchUrl) {
          setWaLink(data.waDispatchUrl);
        }
      }
    } catch (err) {
      console.error('Lead error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 text-center space-y-6 shadow-xl">
        <div className="w-16 h-16 mx-auto rounded-full bg-[#F2F8EC] text-[#3B6E16] flex items-center justify-center border border-[#65B32E]/40">
          <CheckCircle2 className="w-8 h-8 text-[#65B32E]" />
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl font-black text-[#1F2633]">RFQ Specifications Transmitted!</h3>
          <p className="text-slate-600 text-sm max-w-md mx-auto">
            Our Senior Chemical Equipment Application Engineer is reviewing your parameters for{' '}
            <strong className="text-[#3B6E16]">{formData.productCategory}</strong>.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-left max-w-md mx-auto space-y-1.5 font-mono text-slate-700">
          <div><span className="text-slate-400 font-semibold">Contact:</span> {formData.fullName} ({formData.phone})</div>
          <div><span className="text-slate-400 font-semibold">Company:</span> {formData.companyName || 'Private Inquiry'}</div>
          <div><span className="text-slate-400 font-semibold">Media/Capacity:</span> {formData.chemicalMedia} | {formData.capacityOrSize}</div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
          {waLink && (
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#65B32E] hover:bg-[#549824] text-white font-bold text-xs shadow-md shadow-[#65B32E]/25 transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Connect on WhatsApp Now</span>
            </a>
          )}
          <button
            onClick={() => {
              setSubmitted(false);
              setCurrentStep(1);
            }}
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs transition-all"
          >
            Submit Another Specification
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-xl shadow-slate-900/5">
      {/* Step Indicators */}
      <div className="mb-8">
        <div className="flex items-center justify-between text-xs font-semibold mb-3">
          <span className="text-[#65B32E] font-bold">STEP 0{currentStep} OF 04</span>
          <span className="text-slate-500 font-medium">
            {currentStep === 1 && 'System Category'}
            {currentStep === 2 && 'Dimensions & Media'}
            {currentStep === 3 && 'Timeline & Site'}
            {currentStep === 4 && 'Engineering Contact'}
          </span>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {[1, 2, 3, 4].map((step) => (
            <div
              key={step}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                step <= currentStep
                  ? 'bg-[#65B32E] shadow-xs'
                  : 'bg-slate-200'
              }`}
            />
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Step 1: Product Category */}
        {currentStep === 1 && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <Layers className="w-5 h-5 text-[#65B32E]" />
                <span>Select Equipment / Solution Category</span>
              </h3>
              <p className="text-xs text-slate-500">
                Choose the primary composite system or dual-laminate specification required.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
              {CATEGORIES.map((cat) => (
                <button
                  type="button"
                  key={cat}
                  onClick={() => setFormData({ ...formData, productCategory: cat })}
                  className={`p-3.5 rounded-xl text-left text-xs font-semibold transition-all border ${
                    formData.productCategory === cat
                      ? 'bg-[#F2F8EC] border-[#65B32E] text-[#1F2633] font-bold shadow-xs'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            {errors.productCategory && (
              <p className="text-xs text-rose-600">{errors.productCategory}</p>
            )}
          </div>
        )}

        {/* Step 2: Dimensions & Quantity */}
        {currentStep === 2 && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <Ruler className="w-5 h-5 text-amber-600" />
                <span>Dimensions, Capacity & Chemical Media</span>
              </h3>
              <p className="text-xs text-slate-500">
                Provide operational parameters so our engineers can calculate wall thicknesses.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="space-y-1.5">
                <label className="text-xs font-mono font-semibold text-slate-700">Capacity or Size Dimensions</label>
                <input
                  type="text"
                  placeholder="e.g. 5 kL, 20 kL, 10,000 CFM, or 3m x 2m"
                  value={formData.capacityOrSize}
                  onChange={(e) => setFormData({ ...formData, capacityOrSize: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-[#65B32E] focus:ring-1 focus:ring-[#65B32E]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono font-semibold text-slate-700">Chemical Media & Concentration</label>
                <input
                  type="text"
                  placeholder="e.g. HCl 33%, H2SO4 70%, Nitric Acid, Bleach"
                  value={formData.chemicalMedia}
                  onChange={(e) => setFormData({ ...formData, chemicalMedia: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-[#65B32E] focus:ring-1 focus:ring-[#65B32E]"
                />
              </div>

              <div className="space-y-1.5 sm:col-span-2">
                <label className="text-xs font-mono font-semibold text-slate-700">Operating Temperature & Pressure</label>
                <input
                  type="text"
                  placeholder="e.g. 60°C to 85°C continuous | Atmospheric or 2.5 Bar"
                  value={formData.operatingTemp}
                  onChange={(e) => setFormData({ ...formData, operatingTemp: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-[#65B32E] focus:ring-1 focus:ring-[#65B32E]"
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Delivery Timeline & Location */}
        {currentStep === 3 && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#65B32E]" />
                <span>Delivery Timeline & Plant Location</span>
              </h3>
              <p className="text-xs text-slate-500">
                Indicate delivery urgency for production queue prioritization.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <label className="text-xs font-mono font-semibold text-slate-700 block">Required Dispatch Timeline</label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {[
                  'Urgent Breakdown (< 3 Weeks)',
                  'Standard (4 - 6 Weeks)',
                  'Planned Expansion (> 2 Months)'
                ].map((time) => (
                  <button
                    type="button"
                    key={time}
                    onClick={() => setFormData({ ...formData, deliveryTimeline: time })}
                    className={`p-3 rounded-xl text-left text-xs font-semibold border transition-all ${
                      formData.deliveryTimeline === time
                        ? 'bg-[#F2F8EC] border-[#65B32E] text-[#1F2633] font-bold'
                        : 'bg-slate-50 border-slate-200 text-slate-700'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>

              <div className="space-y-1.5 pt-3">
                <label className="text-xs font-mono font-semibold text-slate-700">Project / Site Location</label>
                <input
                  type="text"
                  placeholder="e.g. Dahej, Gujarat / Visakhapatnam / Chennai / International"
                  value={formData.projectLocation}
                  onChange={(e) => setFormData({ ...formData, projectLocation: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-[#65B32E] focus:ring-1 focus:ring-[#65B32E]"
                />
              </div>

              <div className="space-y-1.5 pt-2">
                <label className="text-xs font-mono font-semibold text-slate-700">Specific Application Notes / Drawings</label>
                <textarea
                  rows={2}
                  placeholder="Mention nozzles, agitator motor HP, limpet coil needs, or inspection requirements..."
                  value={formData.projectDetails}
                  onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-[#65B32E] focus:ring-1 focus:ring-[#65B32E]"
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 4: Contact & Company Info */}
        {currentStep === 4 && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <UserCheck className="w-5 h-5 text-[#65B32E]" />
                <span>Contact & Engineering Details</span>
              </h3>
              <p className="text-xs text-slate-500">
                Where should we transmit the preliminary GA drawing and pricing quotation?
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="space-y-1.5">
                <label className="text-xs font-mono font-semibold text-slate-700">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Kumar"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-[#65B32E] focus:ring-1 focus:ring-[#65B32E]"
                />
                {errors.fullName && <p className="text-[11px] text-rose-600">{errors.fullName}</p>}
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono font-semibold text-slate-700">WhatsApp / Phone *</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 XXXXX XXXXX"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-[#65B32E] focus:ring-1 focus:ring-[#65B32E]"
                />
                {errors.phone && <p className="text-[11px] text-rose-600">{errors.phone}</p>}
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono font-semibold text-slate-700">Corporate Email</label>
                <input
                  type="email"
                  placeholder="ramesh@chemicalcorp.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-[#65B32E] focus:ring-1 focus:ring-[#65B32E]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono font-semibold text-slate-700">Company / Plant Name</label>
                <input
                  type="text"
                  placeholder="e.g. Apex Chemicals Ltd"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-[#65B32E] focus:ring-1 focus:ring-[#65B32E]"
                />
              </div>
            </div>
          </div>
        )}

        {/* Wizard Controls */}
        <div className="pt-6 border-t border-slate-200 flex items-center justify-between">
          {currentStep > 1 ? (
            <button
              type="button"
              onClick={handleBack}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-100 border border-slate-300 text-slate-700 hover:text-slate-900 text-xs font-bold"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>
          ) : (
            <div />
          )}

          {currentStep < 4 ? (
            <button
              type="button"
              onClick={handleNext}
              className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-xl bg-[#65B32E] hover:bg-[#549824] text-white font-bold text-xs shadow-md shadow-[#65B32E]/25 transition-all"
            >
              <span>Continue Step 0{currentStep + 1}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-[#65B32E] hover:bg-[#549824] text-white font-black text-xs shadow-lg shadow-[#65B32E]/30 transition-all disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
              <span>{isSubmitting ? 'Transmitting RFQ...' : 'Submit & Receive CAD Spec'}</span>
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

import React from 'react';
import Link from 'next/link';
import { Shield, Lock, FileText, ArrowLeft, Mail, Phone, MapPin } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | VLS Fibre Industrial Composites',
  description: 'Privacy Policy and data governance practices for VLS Fibre Projects regarding RFQ requests, technical drawings, and website analytics.',
};

export default function PrivacyPolicyPage() {
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
              <Shield className="w-5 h-5 text-[#65B32E]" />
            </div>
            <span className="text-xs uppercase font-bold tracking-wider text-[#3B6E16]">
              Legal &amp; Compliance
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1F2633] tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xs text-slate-500 mt-2 font-medium">
            Last Updated &amp; Effective: January 1, 2026 &bull; VLS Fibre (Industrial Lining &amp; Composite)
          </p>
        </div>
      </div>

      {/* Policy Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-12 space-y-10 text-sm leading-relaxed text-slate-700">
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
            1. Overview & Scope
          </h2>
          <p>
            VLS Fibre Projects (&quot;VLS Fibre&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates as a premier industrial manufacturer of fiberglass reinforced plastic (FRP/GRP), dual-laminate chemical reaction vessels, storage tanks, and fume scrubbers. This Privacy Policy details how we collect, process, store, and safeguard your personal information and technical project data when you visit our website, submit requests for quotations (RFQs), interact with our AI Sales Desk, or exchange engineering files.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
            2. Information We Collect
          </h2>
          <p>We collect information in the following business contexts:</p>
          <ul className="list-disc pl-5 space-y-2 text-slate-600">
            <li>
              <strong className="text-slate-900">RFQ & Commercial Inquiries:</strong> Full name, corporate email address, WhatsApp / direct phone number, company name, plant site location, project timelines, and technical requirements (chemical media, temperatures, and vessel capacities).
            </li>
            <li>
              <strong className="text-slate-900">Proprietary Engineering Drawings:</strong> CAD drawings (DWG, DXF, STP), process and instrumentation diagrams (P&amp;ID), and civil foundation schematics voluntarily shared for sizing calculations and ASME RTP-1 compliance.
            </li>
            <li>
              <strong className="text-slate-900">Automated Technical &amp; Telemetry Data:</strong> IP address, browser type, preferred language settings, device operating system, referring URL, and session analytics collected via essential and analytical cookies.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
            3. How We Use Your Data
          </h2>
          <p>Your data is collected strictly for industrial engineering, commercial estimating, and customer service purposes:</p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
            <li>To formulate engineering calculations (wall thickness, hoop stress, nozzle loads) and generate turnkey commercial quotations.</li>
            <li>To transmit GA drawings, chemical compatibility matrices, and sample immersion kits via WhatsApp, email, or courier.</li>
            <li>To route your project inquiry to our regional senior application engineers.</li>
            <li>To maintain audit trails required by international ISO 9001:2015 quality management procedures and ASME Section X tracking.</li>
            <li>We do <strong>not</strong> sell, rent, lease, or monetize your contact or business data to any third-party advertisers.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
            4. Cookie Policy & Tracking Technologies
          </h2>
          <p>
            Our website utilizes cookies and similar local storage mechanisms to guarantee optimal site operation. These include:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
            <li><strong>Essential Cookies:</strong> Required for site navigation, security token validation, and cookie consent management.</li>
            <li><strong>Localization Cookies:</strong> Storing your preferred language (e.g. English, Hindi, Tamil, German) and Google Translate preferences.</li>
            <li><strong>Analytical Cookies:</strong> Measuring page performance, load times, and interactive feature usage to refine our digital catalog.</li>
          </ul>
          <p>
            You can modify your cookie choices at any time through our on-screen Cookie Consent Banner or by adjusting your browser settings.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
            5. Intellectual Property & Confidentiality of Client CAD Files
          </h2>
          <p>
            All technical schematics, chemical formulations, and plant layouts provided to VLS Fibre are treated under strict industrial confidentiality. They are stored on encrypted internal drives accessible exclusively by accredited design engineers bound by non-disclosure agreements (NDAs).
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
            6. Data Retention & Security
          </h2>
          <p>
            We implement TLS 1.3 encryption across all website communications and maintain strict role-based access control. Commercial RFQ data is retained for a period of five (5) years to fulfill equipment warranty validation, spark test traceability, and recurring maintenance re-orders.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
            7. Contact Us &amp; Data Protection Officer
          </h2>
          <p>
            If you have questions regarding this Privacy Policy, wish to access or purge your data, or need to execute a formal Non-Disclosure Agreement (NDA) prior to CAD submission, please contact:
          </p>
          <div className="p-6 rounded-2xl bg-[#1F2633] text-white border-t-2 border-[#65B32E] space-y-3 text-xs">
            <p className="font-bold text-base text-white">VLS Fibre Compliance &amp; Plant Operations</p>
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

'use client';

import React, { useState, useRef, useEffect } from 'react';
import { 
  Bot, 
  X, 
  Send, 
  MessageSquare, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  PhoneCall,
  FileSpreadsheet
} from 'lucide-react';
import { ChatMessage } from '@/types';
import { useLanguage } from '@/context/LanguageContext';
import WhatsAppIcon from '@/components/ui/WhatsAppIcon';

export default function AIChatWidget() {
  const { t, currentLang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [showTeaser, setShowTeaser] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [unreadCount, setUnreadCount] = useState(1);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [leadSuccess, setLeadSuccess] = useState(false);
  const [waLink, setWaLink] = useState('');
  const [selectedProduct, setSelectedProduct] = useState('FRP Chemical Equipment');

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'init-1',
      role: 'assistant',
      content: 'Hi! I am VLS Fibre’s Sales & Application Bot. Looking for instant pricing, ASME RTP-1 wall thickness sizing, or CAD drawings?',
      timestamp: 'Live'
    }
  ]);

  const [leadForm, setLeadForm] = useState({
    nameOrCompany: '',
    phone: ''
  });

  const chatEndRef = useRef<HTMLDivElement>(null);

  // Automatic popup trigger after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasInteracted) {
        setShowTeaser(true);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [hasInteracted]);

  useEffect(() => {
    if (isOpen) {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen, showLeadForm]);

  const openChat = (initialPrompt?: string, productCategory?: string) => {
    setIsOpen(true);
    setShowTeaser(false);
    setHasInteracted(true);
    setUnreadCount(0);

    if (productCategory) {
      setSelectedProduct(productCategory);
    }

    if (initialPrompt) {
      handleQuickPrompt(initialPrompt);
    }
  };

  const handleQuickPrompt = async (text: string) => {
    const userMsg: ChatMessage = {
      id: `u-${Date.now()}`,
      role: 'user',
      content: text,
      timestamp: 'Just now'
    };

    setMessages((prev) => [...prev, userMsg]);
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [{ role: 'user', content: text }],
          language: currentLang.label
        })
      });

      const data = await res.json();
      const reply = data.reply || 'Our engineering desk designs and manufactures custom FRP storage tanks, PP-FRP reaction vessels, and scrubbers.';

      setMessages((prev) => [
        ...prev,
        {
          id: `bot-${Date.now()}`,
          role: 'assistant',
          content: reply,
          timestamp: 'Just now'
        }
      ]);

      // Automatically trigger interactive lead-to-sales conversion
      setTimeout(() => {
        setShowLeadForm(true);
      }, 500);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: `bot-${Date.now()}`,
          role: 'assistant',
          content: 'We provide ASME RTP-1 and BS 4994 compliant FRP & PP-FRP solutions. Please enter your contact number below so our application engineer can dispatch drawings and formal quotation.',
          timestamp: 'Just now'
        }
      ]);
      setShowLeadForm(true);
    } finally {
      setLoading(false);
    }
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const text = input.trim();
    setInput('');
    handleQuickPrompt(text);
  };

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadForm.phone.trim()) return;

    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: leadForm.nameOrCompany || 'Sales Inquiry Lead',
          phone: leadForm.phone,
          companyName: leadForm.nameOrCompany || '',
          productCategory: selectedProduct,
          deliveryTimeline: 'Urgent Sales Quotation',
          leadSource: 'compact_ai_bot'
        })
      });

      const data = await res.json();
      setLeadSuccess(true);
      setShowLeadForm(false);

      const customWaUrl = data.waDispatchUrl || `https://wa.me/919898426164?text=${encodeURIComponent(`Hello VLS Fibre Sales Team, I submitted an inquiry for ${selectedProduct}. My contact: ${leadForm.phone}. Please send formal quotation and GA drawings.`)}`;
      setWaLink(customWaUrl);

      setMessages((prev) => [
        ...prev,
        {
          id: `ack-${Date.now()}`,
          role: 'assistant',
          content: `✅ Success! Your inquiry has been routed directly to our Lead Sales Engineer. Tap the WhatsApp button below for immediate real-time chat with our engineering desk.`,
          timestamp: 'Just now'
        }
      ]);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end">
      {/* 1. Automatic Pop-up Teaser (Bot-like, Engaging & Interactive) */}
      {!isOpen && showTeaser && (
        <div className="mb-3 w-[280px] sm:w-[310px] p-3.5 bg-white rounded-2xl shadow-2xl border border-slate-200/90 animate-in fade-in slide-in-from-bottom-3 duration-300 relative text-left">
          {/* Dismiss button */}
          <button
            onClick={() => {
              setShowTeaser(false);
              setHasInteracted(true);
            }}
            className="absolute top-2.5 right-2.5 text-slate-400 hover:text-slate-600 p-1 rounded-full hover:bg-slate-100 transition-colors"
            aria-label="Dismiss teaser"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          
          {/* Header */}
          <div className="flex items-center gap-2 mb-2">
            <div className="w-7 h-7 rounded-full bg-[#65B32E] text-white flex items-center justify-center shrink-0">
              <Bot className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-bold text-[#1F2633] block leading-tight">
                {t('bot.header')}
              </span>
              <span className="text-[10px] text-emerald-600 font-semibold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Online &bull; Instant Quote
              </span>
            </div>
          </div>

          {/* Teaser Message */}
          <p className="text-xs text-slate-700 leading-snug mb-3">
            {t('bot.teaser')}
          </p>

          {/* 1-Click Interactive Lead Conversion Options */}
          <div className="space-y-1.5 notranslate" translate="no">
            <button
              onClick={() => openChat('I need a quick quote for chemical storage tanks (up to 120 kL).', 'FRP Storage Tanks')}
              className="w-full py-1.5 px-2.5 bg-[#F2F8EC] hover:bg-[#E4F2DC] text-[#1F2633] border border-[#65B32E]/30 rounded-xl text-[11px] font-semibold text-left transition-colors flex items-center justify-between"
            >
              <span>🛢️ Storage Tank Sizing &amp; Price</span>
              <ArrowRight className="w-3 h-3 opacity-60 text-[#65B32E]" />
            </button>
            <button
              onClick={() => openChat('I need specs and pricing for PP-FRP reaction vessels with agitator.', 'PP-FRP Reaction Vessels')}
              className="w-full py-1.5 px-2.5 bg-[#F2F8EC] hover:bg-[#E4F2DC] text-[#1F2633] border border-[#65B32E]/30 rounded-xl text-[11px] font-semibold text-left transition-colors flex items-center justify-between"
            >
              <span>🧪 PP-FRP Reaction Vessel CAD</span>
              <ArrowRight className="w-3 h-3 opacity-60 text-[#65B32E]" />
            </button>
            <button
              onClick={() => openChat('I need scrubber CFM sizing and acid fume removal efficiency.', 'Fume Scrubbers')}
              className="w-full py-1.5 px-2.5 bg-[#F2F8EC] hover:bg-[#E4F2DC] text-[#1F2633] border border-[#65B32E]/30 rounded-xl text-[11px] font-semibold text-left transition-colors flex items-center justify-between"
            >
              <span>💨 Scrubber Sizing &amp; Blowers</span>
              <ArrowRight className="w-3 h-3 opacity-60 text-[#65B32E]" />
            </button>
          </div>

          <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px]">
            <a
              href="https://wa.me/919898426164?text=Hello%20VLS%20Fibre,%20I%20would%20like%20to%20request%20a%20turnkey%20FRP%20equipment%20quote."
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#65B32E] hover:text-[#549824] font-bold flex items-center gap-1.5"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 fill-[#25D366]" />
              <span>WhatsApp Direct</span>
            </a>
            <button
              onClick={() => openChat()}
              className="text-[#1F2633] font-bold hover:text-[#65B32E] transition-colors"
            >
              Open Full Chat &rarr;
            </button>
          </div>
        </div>
      )}

      {/* 2. Compact Round Floating Bot Launcher */}
      {!isOpen && (
        <button
          onClick={() => openChat()}
          className="relative w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#65B32E] hover:bg-[#549824] text-white shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center group shadow-[#65B32E]/30"
          aria-label="Chat with VLS Application Bot"
        >
          <Bot className="w-6 h-6 sm:w-7 sm:h-7 text-white transition-transform group-hover:rotate-6" />
          
          {/* Live indicator dot */}
          <span className="absolute top-0 right-0 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400 border-2 border-white" />
          </span>

          {/* Unread badge if closed */}
          {unreadCount > 0 && !showTeaser && (
            <span className="absolute -top-1 -left-1 px-1.5 py-0.5 bg-rose-500 text-white text-[10px] font-bold rounded-full border-2 border-white shadow-sm">
              {unreadCount}
            </span>
          )}
        </button>
      )}

      {/* 3. Sleek, Compact Bot Chat Window */}
      {isOpen && (
        <div 
          data-lenis-prevent="true"
          onWheel={(e) => e.stopPropagation()}
          className="w-[320px] sm:w-[350px] max-w-[94vw] h-[450px] bg-white border border-slate-200 rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200 overscroll-contain lenis-prevent"
        >
          {/* Header */}
          <div className="px-4 py-3 bg-[#1F2633] border-b-2 border-[#65B32E] text-white flex items-center justify-between shadow-xs select-none">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white">
                <Bot className="w-4 h-4 text-[#65B32E]" />
              </div>
              <div>
                <h4 className="text-xs font-bold leading-tight flex items-center gap-1.5">
                  <span>VLS Sales Bot</span>
                  <span className="px-1.5 py-0.2 rounded-full bg-[#65B32E]/20 text-[#65B32E] text-[9px] font-semibold border border-[#65B32E]/40">
                    Live
                  </span>
                </h4>
                <span className="text-[10px] text-slate-300 block">
                  ASME RTP-1 &bull; Instant RFQ
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <a
                href="https://wa.me/919898426164?text=Hello%20VLS%20Fibre,%20I%20would%20like%20to%20request%20a%20turnkey%20FRP%20equipment%20quote."
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg text-emerald-400 hover:text-white hover:bg-white/10 transition-colors flex items-center justify-center"
                title="Switch to WhatsApp"
              >
                <WhatsAppIcon className="w-4 h-4 fill-[#25D366]" />
              </a>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Close Chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages Body */}
          <div 
            data-lenis-prevent="true"
            onWheel={(e) => e.stopPropagation()}
            className="flex-1 overflow-y-auto p-3.5 space-y-3 bg-[#f8fafc] text-xs overscroll-contain lenis-prevent"
          >
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex flex-col ${
                  m.role === 'user' ? 'items-end' : 'items-start'
                }`}
              >
                <div
                  className={`max-w-[88%] p-3 rounded-2xl leading-relaxed ${
                    m.role === 'user'
                      ? 'bg-[#65B32E] text-white font-medium rounded-tr-xs shadow-xs'
                      : 'bg-white border border-slate-200 text-slate-800 rounded-tl-xs shadow-xs'
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}

            {/* Quick Interactive Prompt Suggestions (When starting) */}
            {messages.length === 1 && !loading && (
              <div className="space-y-1.5 pt-1">
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                  Select Product for Sizing & Quote:
                </p>
                <div className="flex flex-col gap-1.5">
                  <button
                    onClick={() => {
                      setSelectedProduct('PP-FRP Reaction Vessels');
                      handleQuickPrompt('Tell me about PP-FRP Reaction Vessels with agitator & heating jacket.');
                    }}
                    className="p-2 rounded-xl bg-white border border-slate-200 hover:border-[#65B32E] text-slate-700 hover:text-[#65B32E] text-left transition-colors font-medium text-[11px] shadow-xs"
                  >
                    🧪 PP-FRP Reaction Vessels
                  </button>
                  <button
                    onClick={() => {
                      setSelectedProduct('FRP Storage Tanks');
                      handleQuickPrompt('What are your chemical storage tank capacities up to 120 kL?');
                    }}
                    className="p-2 rounded-xl bg-white border border-slate-200 hover:border-[#65B32E] text-slate-700 hover:text-[#65B32E] text-left transition-colors font-medium text-[11px] shadow-xs"
                  >
                    🛢️ Storage Tanks (up to 120 kL)
                  </button>
                  <button
                    onClick={() => {
                      setSelectedProduct('Air Pollution Scrubbers');
                      handleQuickPrompt('I need scrubber CFM sizing and acid fume removal efficiency.');
                    }}
                    className="p-2 rounded-xl bg-white border border-slate-200 hover:border-[#65B32E] text-slate-700 hover:text-[#65B32E] text-left transition-colors font-medium text-[11px] shadow-xs"
                  >
                    💨 Fume Scrubbers & Ducting
                  </button>
                  <button
                    onClick={() => {
                      setSelectedProduct('Seamless Road Tankers');
                      handleQuickPrompt('Details on Seamless HDPE Spiral Road Tankers for bulk acid.');
                    }}
                    className="p-2 rounded-xl bg-white border border-slate-200 hover:border-[#65B32E] text-slate-700 hover:text-[#65B32E] text-left transition-colors font-medium text-[11px] shadow-xs"
                  >
                    🚚 Seamless HDPE Road Tankers
                  </button>
                </div>
              </div>
            )}

            {loading && (
              <div className="flex items-center gap-2 text-slate-500 text-[11px] p-2 bg-white rounded-xl border border-slate-200 w-fit">
                <Sparkles className="w-3.5 h-3.5 text-[#65B32E] animate-spin" />
                <span>Calculating engineering specs...</span>
              </div>
            )}

            {/* High-Converting Lead Capture Form (Automatically displayed upon inquiry) */}
            {showLeadForm && !leadSuccess && (
              <div className="p-3 bg-white rounded-2xl border-2 border-[#65B32E]/40 shadow-md space-y-2 animate-in fade-in duration-300">
                <div className="flex items-center gap-1.5 text-[#65B32E]">
                  <FileSpreadsheet className="w-4 h-4" />
                  <span className="text-[11px] font-bold">
                    Receive Quotation & GA Drawings:
                  </span>
                </div>
                <p className="text-[10px] text-slate-500 leading-snug">
                  Enter your WhatsApp/Phone number. Our process engineers will send the formal quotation & CAD specs within 15 minutes.
                </p>
                <form onSubmit={handleLeadSubmit} className="space-y-2 pt-1">
                  <input
                    type="tel"
                    required
                    placeholder={t('bot.enter_phone')}
                    value={leadForm.phone}
                    onChange={(e) => setLeadForm({ ...leadForm, phone: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 border border-slate-300 focus:outline-none focus:border-[#65B32E] focus:bg-white transition-colors"
                  />
                  <input
                    type="text"
                    placeholder="Name / Company (Optional)"
                    value={leadForm.nameOrCompany}
                    onChange={(e) => setLeadForm({ ...leadForm, nameOrCompany: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 border border-slate-300 focus:outline-none focus:border-[#65B32E] focus:bg-white transition-colors"
                  />
                  <button
                    type="submit"
                    className="w-full py-2 px-3 bg-[#65B32E] hover:bg-[#549824] text-white font-bold text-xs rounded-xl shadow-sm transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>{t('bot.quote_btn')}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              </div>
            )}

            {/* Post-Submission Direct Sales Action (Converts to live WhatsApp sales chat) */}
            {leadSuccess && waLink && (
              <div className="pt-1 space-y-1.5">
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2 px-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-xl text-xs shadow-md transition-all"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-white" />
                  <span>Chat on WhatsApp Directly</span>
                </a>
                <a
                  href="tel:+919898426164"
                  className="w-full flex items-center justify-center gap-2 py-1.5 px-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl text-[11px] transition-colors"
                >
                  <PhoneCall className="w-3 h-3 text-[#65B32E]" />
                  <span>Call Plant (+91 9898 426 164)</span>
                </a>
              </div>
            )}

            <div ref={chatEndRef} />
          </div>

          {/* Compact Input */}
          <form
            onSubmit={handleSendMessage}
            className="p-2.5 bg-white border-t border-slate-200 flex items-center gap-1.5"
          >
            <input
              type="text"
              placeholder={t('bot.placeholder')}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 px-3 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#65B32E] focus:bg-white transition-colors"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="p-2 rounded-xl bg-[#65B32E] text-white hover:bg-[#549824] disabled:opacity-40 transition-all shrink-0 shadow-xs"
              aria-label="Send Message"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

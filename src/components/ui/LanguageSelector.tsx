'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useLanguage, Language } from '@/context/LanguageContext';
import CountryFlag from './CountryFlag';
import { ChevronDown, Check, Globe } from 'lucide-react';

interface LanguageSelectorProps {
  className?: string;
  isMobile?: boolean;
}

export default function LanguageSelector({ className = '', isMobile = false }: LanguageSelectorProps) {
  const { currentLang, setLanguage, languages } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (lang: Language) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  if (isMobile) {
    return (
      <div className="w-full pt-4 border-t border-slate-100">
        <div className="flex items-center gap-2 mb-3 text-xs font-bold uppercase tracking-wider text-slate-500">
          <Globe className="w-4 h-4 text-[#65B32E]" />
          <span>Select Language</span>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {languages.map((lang) => {
            const isSelected = currentLang.code === lang.code;
            return (
              <button
                key={lang.code}
                onClick={() => handleSelect(lang)}
                className={`flex items-center gap-2.5 p-2 rounded-xl border text-xs font-semibold transition-all text-left ${
                  isSelected
                    ? 'border-[#65B32E] bg-[#F2F8EC] text-[#3B6E16] font-bold shadow-xs'
                    : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                }`}
              >
                <CountryFlag countryCode={lang.countryCode} className="w-4.5 h-3" />
                <div className="truncate">
                  <span className="block leading-tight">{lang.nativeName}</span>
                  <span className="text-[10px] text-slate-400 block">{lang.label}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700 hover:text-[#65B32E] transition-all cursor-pointer shadow-2xs"
        aria-label="Select website language"
        aria-expanded={isOpen}
      >
        <CountryFlag countryCode={currentLang.countryCode} className="w-4.5 h-3" />
        <span className="font-bold tracking-wide text-[11px] text-slate-800">
          {currentLang.code.toUpperCase()}
        </span>
        <ChevronDown
          className={`w-3 h-3 text-slate-400 transition-transform duration-200 ${
            isOpen ? 'rotate-180 text-[#65B32E]' : ''
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div 
          data-lenis-prevent="true"
          onWheel={(e) => e.stopPropagation()}
          className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-slate-200/90 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150 overscroll-contain lenis-prevent"
        >
          <div className="px-3.5 py-1.5 border-b border-slate-100 text-[10px] uppercase font-bold tracking-wider text-slate-400 select-none">
            Select Language / भाषा / மொழி
          </div>

          <div 
            data-lenis-prevent="true"
            onWheel={(e) => e.stopPropagation()}
            className="max-h-72 overflow-y-auto py-1 overscroll-contain lenis-prevent"
          >
            {languages.map((lang) => {
              const isSelected = currentLang.code === lang.code;
              return (
                <button
                  key={lang.code}
                  onClick={() => handleSelect(lang)}
                  className={`w-full flex items-center justify-between px-3.5 py-2 text-xs transition-colors hover:bg-slate-50 ${
                    isSelected ? 'bg-[#F2F8EC] text-[#3B6E16] font-bold' : 'text-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <CountryFlag countryCode={lang.countryCode} className="w-5 h-3.5" />
                    <div className="text-left">
                      <span className="block font-semibold leading-tight">
                        {lang.nativeName}
                      </span>
                      <span className="text-[10px] text-slate-400 block">
                        {lang.label}
                      </span>
                    </div>
                  </div>

                  {isSelected && (
                    <Check className="w-4 h-4 text-[#65B32E] shrink-0" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

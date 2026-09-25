'use client';

import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 600px
      setVisible(window.scrollY > 600);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`fixed left-5 sm:left-6 bottom-6 z-50 group cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        visible
          ? 'translate-y-0 opacity-100 pointer-events-auto'
          : 'translate-y-4 opacity-0 pointer-events-none'
      }`}
    >
      <div className="w-11 h-11 rounded-xl bg-[#1F2633]/90 backdrop-blur-md border border-white/10 shadow-lg shadow-slate-900/20 flex items-center justify-center text-white/70 group-hover:text-white group-hover:bg-[#65B32E] group-hover:border-[#65B32E]/50 group-hover:shadow-[#65B32E]/25 transition-all duration-200">
        <ArrowUp className="w-4.5 h-4.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
      </div>
    </button>
  );
}

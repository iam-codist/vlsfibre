'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      syncTouch: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.0,
      prevent: (node) => {
        if (!node) return false;
        const el = node as HTMLElement;
        return (
          Boolean(el.hasAttribute?.('data-lenis-prevent')) ||
          Boolean(el.classList?.contains('lenis-prevent')) ||
          Boolean(el.closest?.('[data-lenis-prevent]')) ||
          Boolean(el.closest?.('.lenis-prevent'))
        );
      },
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}

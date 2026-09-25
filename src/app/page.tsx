import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import TrustedClients from '@/components/home/TrustedClients';
import DiscoverWorld from '@/components/home/DiscoverWorld';
import GlobalEPCSection from '@/components/home/GlobalEPCSection';
import ParallaxSpotlight from '@/components/home/ParallaxSpotlight';
import OnSiteFabrication from '@/components/home/OnSiteFabrication';
import MarketsSection from '@/components/home/MarketsSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import HomeCTA from '@/components/home/HomeCTA';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      {/* 1. Plasticon-Style Hero Section with Parallax */}
      <HeroSection />

      {/* 2. Trusted By Industry Conglomerates (Infinite Marquee & Credibility Metrics) */}
      <TrustedClients />

      {/* 3. Discover the World of VLS Fibre (3 Large Clean Parallax Cards) */}
      <DiscoverWorld />

      {/* 4. Flagship Process Equipment & Vessels Spotlight with Parallax & CAD Specs */}
      <ParallaxSpotlight />

      {/* 5. International EPC Contracts, Deep-Water Ports & 20kV QA Testing */}
      <GlobalEPCSection />

      {/* 6. On-Site Tank Fabrication (Slate Card & Photographic Banner) */}
      <OnSiteFabrication />

      {/* 7. Markets Served Worldwide */}
      <MarketsSection />

      {/* 8. Verified Plant Installation Case Studies & Client Testimonials */}
      <TestimonialsSection />

      {/* 9. Localized Enterprise CTA Section */}
      <HomeCTA />
    </main>
  );
}

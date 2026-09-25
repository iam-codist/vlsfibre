import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AIChatWidget from '@/components/ai/AIChatWidget';
import SmoothScroll from '@/components/SmoothScroll';
import { LanguageProvider } from '@/context/LanguageContext';
import CookieBanner from '@/components/ui/CookieBanner';
import AutoLeadModal from '@/components/forms/AutoLeadModal';
import SiteLoader from '@/components/ui/SiteLoader';
import BackToTop from '@/components/ui/BackToTop';
import Script from 'next/script';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
});

const SITE_URL = 'https://vlsfibre.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'VLS Fibre | Industrial FRP & Dual-Laminate Process Equipment',
    template: '%s | VLS Fibre'
  },
  description:
    'VLS Fibre — India\'s leading manufacturer of custom FRP & dual-laminate chemical process equipment. Storage tanks up to 120 kL, reaction vessels, fume scrubbers, HDPE spiral tankers. ASME RTP-1 & BS 4994 compliant.',
  keywords: [
    'VLS Fibre',
    'FRP tanks India',
    'dual laminate tanks',
    'chemical reaction vessels',
    'FRP storage tank manufacturer',
    'fume scrubbers',
    'HDPE spiral acid tanker',
    'PP FRP vessel',
    'industrial lining',
    'ASME RTP-1',
    'BS 4994',
    'corrosion resistant equipment',
    'PPRC HDPE electro fusion pipelines'
  ],
  authors: [{ name: 'VLS Fibre Engineering Desk' }],
  creator: 'VLS Fibre Industries',
  publisher: 'VLS Fibre Industries',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: 'VLS Fibre Industries',
    title: 'VLS Fibre — Custom FRP & Dual-Laminate Process Equipment',
    description: 'India\'s premier manufacturer of corrosion-resistant FRP storage tanks, reaction vessels, fume scrubbers & HDPE spiral tankers. ASME RTP-1 | BS 4994 | ISO 9001:2015 certified.',
    images: [
      {
        url: '/images/brand/og-cover.jpg',
        width: 1200,
        height: 630,
        alt: 'VLS Fibre — Industrial FRP & Dual-Laminate Process Equipment | Storage Tanks, Reaction Vessels, Fume Scrubbers',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VLS Fibre — Custom FRP & Dual-Laminate Process Equipment',
    description: 'India\'s premier manufacturer of corrosion-resistant FRP storage tanks, reaction vessels & fume scrubbers. ASME RTP-1 | BS 4994.',
    images: ['/images/brand/og-cover.jpg'],
    creator: '@vlsfibre',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico?v=3', sizes: 'any' },
      { url: '/favicon.png?v=3', sizes: '32x32', type: 'image/png' },
      { url: '/icon-192.png?v=3', sizes: '192x192', type: 'image/png' },
      { url: '/images/brand/vls-favicon.png?v=3', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: '/favicon.ico?v=3',
    apple: '/apple-touch-icon.png?v=3',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${plusJakarta.variable} antialiased`}
    >
      <head>
        <link rel="icon" href="/favicon.ico?v=3" sizes="any" />
        <link rel="icon" href="/favicon.png?v=3" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png?v=3" sizes="180x180" />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-screen bg-white text-slate-800 flex flex-col font-sans selection:bg-[#65B32E] selection:text-white"
      >
        <SiteLoader />
        <LanguageProvider>
          <SmoothScroll>
            <Navbar />
            <div className="flex-1">{children}</div>
            <Footer />
            <AIChatWidget />
            <AutoLeadModal />
            <CookieBanner />
            <BackToTop />
          </SmoothScroll>
        </LanguageProvider>

        {/* Hidden Google Translate Mount Point for Instant Multi-Language Support */}
        <div id="google_translate_element" style={{ display: 'none' }} />
        <Script
          id="google-translate-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              function googleTranslateElementInit() {
                if (window.google && window.google.translate) {
                  new window.google.translate.TranslateElement({
                    pageLanguage: 'en',
                    includedLanguages: 'en,hi,ta,de,fr,es,ar,ja',
                    autoDisplay: false
                  }, 'google_translate_element');
                }
              }
            `,
          }}
        />
        <Script
          src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}

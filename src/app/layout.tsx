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

export const metadata: Metadata = {
  title: 'VLS Fibre | Industrial Lining & Composite Manufacturing',
  description:
    'VLS Fibre is an industry-leading manufacturer of industrial FRP & dual-laminate solutions, reaction vessels, storage tanks, scrubbers, and PPRC & HDPE electro-fusion pipelines across India.',
  keywords: [
    'VLS Fibre',
    'Industrial Lining',
    'FRP tanks',
    'chemical reaction vessels',
    'dual laminate tanks',
    'fume scrubbers',
    'PPRC HDPE electro fusion pipelines'
  ],
  authors: [{ name: 'VLS Fibre Engineering Desk' }],
  openGraph: {
    title: 'VLS Fibre | Industrial Lining & Composite Manufacturing',
    description: 'Corrosion resistant solutions for storage, process vessels, and electro-fusion pipeline engineering.',
    type: 'website',
  },
  icons: {
    icon: [
      { url: '/favicon.ico?v=2', sizes: 'any' },
      { url: '/favicon.png?v=2', sizes: '32x32', type: 'image/png' },
      { url: '/icon-192.png?v=2', sizes: '192x192', type: 'image/png' },
      { url: '/images/brand/vls-favicon.png?v=2', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: '/favicon.ico?v=2',
    apple: '/apple-touch-icon.png?v=2',
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
        <link rel="icon" href="/favicon.ico?v=2" sizes="any" />
        <link rel="icon" href="/favicon.png?v=2" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png?v=2" sizes="180x180" />
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

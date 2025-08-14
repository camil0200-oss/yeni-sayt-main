import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Header from '@/components/Header'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
  adjustFontFallback: false,
  variable: '--font-inter'
})

export const metadata = {
  metadataBase: new URL('https://smartkilid.az'),
  title: 'Smart Kilid Sistemləri - Təhlükəsizlik və Avtomatlaşdırma Sistemləri',
  description:
    'Bakıda elektron qapılar, smart kilidlər, domofon sistemləri, barmaq izi və üz tanıma cihazları ilə giriş sistemləri, kartla lift idarəetmə və access control sistemlərinin satışı və quraşdırılması.',
  keywords:
    'smart kilidlər, elektron qapılar, domofon sistemləri, video domofon, audio domofon, barmaq izi giriş, access control, liftlər üçün kart ilə idarəetmə, Barmaq izi və üz tanıma cihazları, Bakı',
  authors: [{ name: 'Smart Kilid Sistemləri' }],
  alternates: { canonical: '/' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    url: 'https://smartkilid.az',
    title: 'Smart Kilid Sistemləri - Təhlükəsizlik Sistemləri',
    description:
      'Bakıda Domofon, Turniket və Şlaqbaum sistemləri, smart kilidlər və access control sistemlərinin satışı və quraşdırılması.',
    siteName: 'Smart Kilid Sistemləri',
    type: 'website',
    locale: 'az_AZ',
    images: [
      { url: '/og-image.jpg', width: 1200, height: 630, alt: 'Smart Kilid Sistemləri' }
    ]
  },
  icons: {
    icon: '/icon.svg'
  }
}

export default function RootLayout({ children }) {
  // JSON-LD obyektləri (səhvsiz olması üçün JSON.stringify ilə çıxarılacaq)
  const ldLocalBusiness = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Smart Kilid Sistemləri',
    url: 'https://smartkilid.az',
    description: 'Təhlükəsizlik və avtomatlaşdırma sistemlərinin satışı və quraşdırılması - domofon, smart kilid, access control',
    email: 'smartkilid.az@gmail.com',
    telephone: ['+994552370200', '+994708001000'],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bakı',
      addressCountry: 'AZ'
    },
    openingHours: 'Mo-Su 09:00-21:00',
    areaServed: 'AZ',
    logo: 'https://smartkilid.az/logo.png',
    image: 'https://smartkilid.az/og-image.jpg',
    // varsa sosial linklər:
    // sameAs: ['https://facebook.com/..','https://instagram.com/..']
  }

  const ldWebsite = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: 'https://smartkilid.az',
    name: 'Smart Kilid Sistemləri',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://smartkilid.az/?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  }

  return (
    <html lang="az">
      <head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google.com" />
        <link rel="preconnect" href="https://wa.me" />
        
        {/* DNS prefetch for critical resources */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//www.google.com" />
        <link rel="dns-prefetch" href="//wa.me" />
        
        {/* Preload critical resources */}
        <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Critical CSS inline - Above the fold styles */
            * { margin: 0; padding: 0; box-sizing: border-box; }
            html { scroll-behavior: smooth; }
            body { 
              font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; 
              line-height: 1.6;
              color: #374151;
            }
            .font-inter { font-family: 'Inter', system-ui, -apple-system, sans-serif; }
            img { height: auto; max-width: 100%; }
            .container { 
              margin: 0 auto; 
              padding: 0 1rem; 
              max-width: 1200px;
            }
            @media (min-width: 640px) { .container { padding: 0 2rem; } }
            @media (min-width: 1024px) { .container { padding: 0 2rem; } }
            @media (min-width: 1280px) { .container { max-width: 1400px; } }
            
            /* Critical layout styles */
            .fixed { position: fixed; }
            .top-0 { top: 0; }
            .w-full { width: 100%; }
            .z-50 { z-index: 50; }
            .flex { display: flex; }
            .items-center { align-items: center; }
            .justify-between { justify-content: space-between; }
            .text-2xl { font-size: 1.5rem; }
            .font-bold { font-weight: 700; }
            .text-blue-600 { color: #2563eb; }
            .bg-white { background-color: #ffffff; }
            .bg-transparent { background-color: transparent; }
            .transition-all { transition: all 0.3s; }
            .duration-300 { transition-duration: 300ms; }
            
            /* Critical button styles */
            .bg-green-700 { background-color: #15803d; }
            .text-white { color: #ffffff; }
            .px-8 { padding-left: 2rem; padding-right: 2rem; }
            .py-4 { padding-top: 1rem; padding-bottom: 1rem; }
            .rounded-lg { border-radius: 0.5rem; }
            .font-semibold { font-weight: 600; }
            
            /* Critical responsive styles */
            @media (max-width: 768px) {
              .md\\:hidden { display: none; }
            }
            @media (min-width: 768px) {
              .md\\:flex { display: flex; }
            }
          `
        }} />
      </head>
      <body className={`${inter.className} font-inter`}>
        {/* JSON-LD blokları — HTML entity problemi olmaması üçün Script + dangerouslySetInnerHTML */}
        <Script
          id="ld-localbusiness"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ldLocalBusiness) }}
        />
        <Script
          id="ld-website"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ldWebsite) }}
        />
        <Header />
        <main className="page-with-sticky-header">{children}</main>
        
      </body>
    </html>
  )
}

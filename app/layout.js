import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL('https://smartkilid.az'),
  title: {
    default: 'Smart Kilid Sistemləri Bakı - Elektron Kilid, Access Control, Turniket, Şlaqbaum Satışı və Quraşdırılması | Smartkilid.az',
    template: '%s | Smart Kilid Sistemləri Bakı'
  },
  description:
    'Bakıda smart kilid satışı, elektron kilid, access control, turniket satışı və quraşdırılması, kartlı lift, şlaqbaum satışı, avtomatik qapı və domofon sistemlərinin satışı, quraşdırılması, servisi və təmiri. 24/7 texniki dəstək. Pulsuz konsultasiya və məsləhət.',
  keywords:
    'smart kilid satışı Bakı, smart kilid quraşdırılması, elektron kilid Bakı, access control satışı, access control quraşdırılması, turniket satışı, turniket quraşdırılması, turniket servisi, turniket qiymətləri, şlaqbaum satışı, şlaqbaum quraşdırılması, şlaqbaum servisi, şlaqbaum qiymətləri, kartlı lift, domofon sistemləri, təhlükəsizlik sistemləri Bakı, Azərbaycan access control, elektron qapı sistemi, avtomatik qapı, biometrik giriş, elektron qapılar, Bakı smart kilid, smart kilid təmiri, access control təmiri, turniket təmiri, şlaqbaum təmiri',
  authors: [{ name: 'Smart Kilid Sistemləri' }],
  creator: 'Smart Kilid Sistemləri',
  publisher: 'Smart Kilid Sistemləri',
  alternates: { 
    canonical: 'https://smartkilid.az',
    languages: {
      'az': 'https://smartkilid.az',
      'az-AZ': 'https://smartkilid.az'
    }
  },
  robots: { 
    index: true, 
    follow: true, 
    nocache: false,
    googleBot: { 
      index: true, 
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    } 
  },
  openGraph: {
    url: 'https://smartkilid.az',
    title: 'Smart Kilid Sistemləri Bakı - Elektron Kilid, Access Control, Turniket, Şlaqbaum Satışı və Quraşdırılması',
    description:
      'Bakıda smart kilid satışı, elektron kilid, access control, turniket satışı və quraşdırılması, şlaqbaum satışı, avtomatik qapı və domofon sistemlərinin satışı, quraşdırılması və servisi. 24/7 texniki dəstək. Pulsuz konsultasiya.',
    siteName: 'Smart Kilid Sistemləri',
    type: 'website',
    locale: 'az_AZ',
    images: [
      { 
        url: 'https://smartkilid.az/images/hero-security.webp', 
        width: 1200, 
        height: 630, 
        alt: 'Smart Kilid Sistemləri - Bakıda Smart Kilid, Access Control, Turniket və Şlaqbaum Satışı' 
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Smart Kilid Sistemləri Bakı - Elektron Kilid, Access Control, Turniket, Şlaqbaum Satışı',
    description: 'Bakıda smart kilid satışı, access control, turniket və şlaqbaum satışı və quraşdırılması. 24/7 texniki dəstək.',
    images: ['https://smartkilid.az/images/hero-security.webp'],
    creator: '@smartkilid'
  },
  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code'
  },
  category: 'Təhlükəsizlik Sistemləri',
  classification: 'Təhlükəsizlik və Avtomatlaşdırma Sistemləri',
  icons: {
    icon: '/icon.svg',
    apple: '/apple-touch-icon.png'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="az">
      <head>
        {/* Preconnect to external domains for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        
        {/* Preload critical CSS */}
        <link rel="preload" href="/globals.css" as="style" onLoad="this.onload=null;this.rel='stylesheet'" />
        <noscript><link rel="stylesheet" href="/globals.css" /></noscript>
        
        {/* Critical CSS for LCP optimization */}
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Critical CSS for above-the-fold content */
            html { scroll-behavior: smooth; }
            body { 
              font-family: 'Inter', system-ui, -apple-system, sans-serif;
              margin: 0;
              padding: 0;
              line-height: 1.6;
              color: #374151;
            }
            .container {
              max-width: 72rem;
              margin: 0 auto;
              padding: 0 1rem;
            }
            @media (min-width: 640px) { .container { padding: 0 2rem; } }
            @media (min-width: 1024px) { .container { padding: 0 2rem; } }
            @media (min-width: 1280px) { .container { max-width: 1400px; } }
            
            /* Hero section critical styles */
            .hero-section {
              background: linear-gradient(135deg, #eff6ff 0%, #f9fafb 100%);
              min-height: 100vh;
              display: flex;
              align-items: center;
              padding-top: 5rem;
            }
            @media (min-width: 768px) {
              .hero-section { padding-top: 6rem; }
            }
            .hero-content h1 {
              font-size: 2.25rem;
              font-weight: bold;
              line-height: 1.2;
              color: #111827;
              margin-bottom: 2rem;
            }
            @media (min-width: 1024px) {
              .hero-content h1 {
                font-size: 3.75rem;
              }
            }
            .hero-content p {
              font-size: 1.25rem;
              color: #4b5563;
              line-height: 1.6;
              margin-bottom: 2rem;
            }
            
            /* Critical button styles */
            .btn-primary {
              background-color: #059669;
              color: white;
              padding: 1rem 2rem;
              border-radius: 0.5rem;
              font-weight: 600;
              text-decoration: none;
              display: inline-flex;
              align-items: center;
              gap: 0.5rem;
              transition: background-color 0.2s;
              margin-right: 1rem;
              margin-bottom: 1rem;
            }
            .btn-primary:hover {
              background-color: #047857;
            }
            .btn-secondary {
              border: 2px solid #2563eb;
              color: #2563eb;
              padding: 1rem 2rem;
              border-radius: 0.5rem;
              font-weight: 600;
              text-decoration: none;
              display: inline-flex;
              align-items: center;
              gap: 0.5rem;
              transition: all 0.2s;
              margin-bottom: 1rem;
            }
            .btn-secondary:hover {
              background-color: #2563eb;
              color: white;
            }
            
            /* Critical image styles */
            .hero-image {
              width: 100%;
              height: auto;
              border-radius: 1rem;
              box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
            }
            
            /* Critical grid styles */
            .grid-2 {
              display: grid;
              gap: 3rem;
            }
            @media (min-width: 1024px) {
              .grid-2 {
                grid-template-columns: 1fr 1fr;
              }
            }
            
            /* Critical spacing */
            .pt-header {
              padding-top: 5rem;
            }
            @media (min-width: 768px) {
              .pt-header {
                padding-top: 6rem;
              }
            }
            
            /* Critical text styles */
            .text-blue-600 { color: #2563eb; }
            .text-gray-900 { color: #111827; }
            .text-gray-600 { color: #4b5563; }
            .text-gray-700 { color: #374151; }
            .text-white { color: white; }
            
            /* Critical background styles */
            .bg-white { background-color: white; }
            .bg-gray-50 { background-color: #f9fafb; }
            .bg-blue-50 { background-color: #eff6ff; }
            
            /* Critical flex styles */
            .flex { display: flex; }
            .flex-col { flex-direction: column; }
            .items-center { align-items: center; }
            .justify-center { justify-content: center; }
            .justify-between { justify-content: space-between; }
            
            /* Critical spacing utilities */
            .space-y-8 > * + * { margin-top: 2rem; }
            .mb-4 { margin-bottom: 1rem; }
            .mb-6 { margin-bottom: 1.5rem; }
            .mb-8 { margin-bottom: 2rem; }
            .mt-8 { margin-top: 2rem; }
            .p-6 { padding: 1.5rem; }
            .p-8 { padding: 2rem; }
            
            /* Critical responsive utilities */
            /* Responsive utilities: ensure md: prefixed classes only apply at >=768px */
            @media (max-width: 767px) {
              .md\\:hidden { display: none !important; }
              .md\\:flex { display: none !important; }
              .md\\:grid-cols-2 { grid-template-columns: 1fr !important; }
            }
            @media (min-width: 768px) {
              .md\\:flex { display: flex !important; }
              .md\\:grid-cols-2 { grid-template-columns: 1fr 1fr !important; }
            }
            @media (min-width: 1024px) {
              .lg\\:grid-cols-2 { grid-template-columns: 1fr 1fr; }
              .lg\\:text-6xl { font-size: 3.75rem; }
            }
            
            /* Critical shadow and border styles */
            .shadow-xl { box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); }
            .rounded-2xl { border-radius: 1rem; }
            .rounded-lg { border-radius: 0.5rem; }
            
            /* Critical transition styles */
            .transition-colors { transition: color 0.2s, background-color 0.2s; }
            .transition-all { transition: all 0.3s; }
            .duration-300 { transition-duration: 300ms; }
            
            /* Critical hover effects */
            .hover\\:bg-green-800:hover { background-color: #047857; }
            .hover\\:bg-blue-700:hover { background-color: #1d4ed8; }
            .hover\\:bg-blue-600:hover { background-color: #2563eb; }
            .hover\\:text-white:hover { color: white; }
            .hover\\:text-blue-700:hover { color: #1d4ed8; }
            .hover\\:shadow-2xl:hover { box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); }
            .hover\\:-translate-y-2:hover { transform: translateY(-0.5rem); }
            .hover\\:scale-105:hover { transform: scale(1.05); }
            .hover\\:scale-110:hover { transform: scale(1.1); }
            .hover\\:translate-x-1:hover { transform: translateX(0.25rem); }
            
            /* Critical group styles */
            .group:hover .group-hover\\:scale-105 { transform: scale(1.05); }
            .group:hover .group-hover\\:scale-110 { transform: scale(1.1); }
            .group:hover .group-hover\\:translate-x-1 { transform: translateX(0.25rem); }
            .group:hover .group-hover\\:text-blue-700 { color: #1d4ed8; }
            .group:hover .group-hover\\:shadow-2xl { box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); }
            .group:hover .group-hover\\:-translate-y-2 { transform: translateY(-0.5rem); }
            
            /* Critical loading styles */
            .loading-lazy { opacity: 0; transition: opacity 0.3s; }
            .loading-lazy.loaded { opacity: 1; }
            
            /* Critical font weights */
            .font-bold { font-weight: 700; }
            .font-semibold { font-weight: 600; }
            .font-medium { font-weight: 500; }
            
            /* Critical text sizes */
            .text-4xl { font-size: 2.25rem; }
            .text-xl { font-size: 1.25rem; }
            .text-lg { font-size: 1.125rem; }
            .text-base { font-size: 1rem; }
            
            /* Critical leading */
            .leading-tight { line-height: 1.25; }
            .leading-relaxed { line-height: 1.625; }
            
            /* Critical overflow */
            .overflow-hidden { overflow: hidden; }
            
            /* Critical cursor */
            .cursor-pointer { cursor: pointer; }
            
            /* Critical block display */
            .block { display: block; }
            
            /* Critical object fit */
            .object-cover { object-fit: cover; }
            
            /* Critical w-full */
            .w-full { width: 100%; }
            
            /* Critical h-auto */
            .h-auto { height: auto; }
            
            /* Critical sizes attribute support */
            img { max-width: 100%; height: auto; }
          `
        }} />
      </head>
      <body className={inter.className}>
        <Header />
        <div className="pt-20 md:pt-24">
          {children}
        </div>

        {/* Google Analytics (load lazily and only when real ID is configured) */}
        {process.env.NEXT_PUBLIC_GA && process.env.NEXT_PUBLIC_GA !== 'G-XXXXXXXXXX' && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA}`}
              strategy="lazyOnload"
            />
            <Script id="ga-init" strategy="lazyOnload">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);} 
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA}', { send_page_view: false });
              `}
            </Script>
          </>
        )}

        {/* JSON-LD Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Smart Kilid Sistemləri",
              "alternateName": ["Smartkilid.az", "Smart Kilid Bakı"],
              "description": "Bakıda smart kilid satışı, elektron kilid, access control, turniket satışı və quraşdırılması, şlaqbaum satışı, avtomatik qapı və domofon sistemlərinin satışı, quraşdırılması, servisi və təmiri",
              "url": "https://smartkilid.az",
              "logo": "https://smartkilid.az/icon.svg",
              "image": "https://smartkilid.az/images/hero-security.webp",
              "telephone": ["+994552370200", "+994708001000"],
              "email": "smartkilid.az@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Bakı",
                "addressRegion": "Bakı",
                "addressCountry": "AZ"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 40.394734,
                "longitude": 49.73893
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                  "opens": "09:00",
                  "closes": "21:00"
                }
              ],
              "priceRange": "$$",
              "areaServed": [
                {
                  "@type": "City",
                  "name": "Bakı",
                  "addressCountry": "AZ"
                },
                {
                  "@type": "Country",
                  "name": "Azərbaycan"
                }
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "127",
                "bestRating": "5",
                "worstRating": "1"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Təhlükəsizlik və Avtomatlaşdırma Sistemləri",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Smart Kilid Satışı və Quraşdırılması",
                      "description": "Bakıda smart kilid satışı və quraşdırılması, elektron kilid sistemləri",
                      "provider": {
                        "@type": "Organization",
                        "name": "Smart Kilid Sistemləri"
                      }
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Access Control Satışı və Quraşdırılması",
                      "description": "Bakıda access control sistemlərinin satışı və quraşdırılması",
                      "provider": {
                        "@type": "Organization",
                        "name": "Smart Kilid Sistemləri"
                      }
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Turniket Satışı və Quraşdırılması",
                      "description": "Bakıda turniket satışı, quraşdırılması və servisi",
                      "provider": {
                        "@type": "Organization",
                        "name": "Smart Kilid Sistemləri"
                      }
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Şlaqbaum Satışı və Quraşdırılması",
                      "description": "Bakıda şlaqbaum satışı, quraşdırılması, servisi və təmiri",
                      "provider": {
                        "@type": "Organization",
                        "name": "Smart Kilid Sistemləri"
                      }
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Kartla Lift İdarəetmə",
                      "description": "Bakıda kartla lift idarəetmə sistemlərinin quraşdırılması",
                      "provider": {
                        "@type": "Organization",
                        "name": "Smart Kilid Sistemləri"
                      }
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Biometrik Giriş Sistemləri",
                      "description": "Bakıda biometrik giriş sistemlərinin satışı və quraşdırılması",
                      "provider": {
                        "@type": "Organization",
                        "name": "Smart Kilid Sistemləri"
                      }
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Elektron Qapı və Avtomatik Qapı Sistemləri",
                      "description": "Bakıda elektron qapı və avtomatik qapı sistemlərinin satışı və quraşdırılması",
                      "provider": {
                        "@type": "Organization",
                        "name": "Smart Kilid Sistemləri"
                      }
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Domofon Sistemləri",
                      "description": "Bakıda domofon sistemlərinin satışı və quraşdırılması",
                      "provider": {
                        "@type": "Organization",
                        "name": "Smart Kilid Sistemləri"
                      }
                    }
                  }
                ]
              },
              "sameAs": [
                "https://www.facebook.com/smartkilid",
                "https://www.instagram.com/smartkilid",
                "https://wa.me/994552370200"
              ]
            })
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Smart Kilid Sistemləri",
              "url": "https://smartkilid.az",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://smartkilid.az/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </body>
    </html>
  )
}

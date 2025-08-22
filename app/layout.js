import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL('https://smartkilid.az'),
  title: 'Smart Kilid Sistemləri Bakı - Elektron Kilid, Access Control, Turniket, Avtomatik Qapı | Smartkilid.az',
  description:
    'Bakıda smart kilid, elektron kilid, access control, turniket sistemi, kartlı lift, avtomatik qapı və domofon sistemlərinin satışı və quraşdırılması. 24/7 texniki dəstək. Pulsuz konsultasiya.',
  keywords:
    'smart kilid Bakı, elektron kilid, access control sistemi, turniket sistemi, kartlı lift, domofon sistemi, təhlükəsizlik sistemləri, Bakı smart kilid, Azərbaycan access control, elektron qapı sistemi, avtomatik qapı, biometrik giriş, şlaqbaum sistemi, elektron qapılar',
  authors: [{ name: 'Smart Kilid Sistemləri' }],
  alternates: { canonical: '/' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    url: 'https://smartkilid.az',
    title: 'Smart Kilid Sistemləri Bakı - Elektron Kilid, Access Control və Avtomatik Qapı',
    description:
      'Bakıda smart kilid, elektron kilid, access control, turniket sistemi, avtomatik qapı və domofon sistemlərinin satışı və quraşdırılması. 24/7 texniki dəstək.',
    siteName: 'Smart Kilid Sistemləri',
    type: 'website',
    locale: 'az_AZ',
    images: [
      { url: '/og-image.jpg', width: 1200, height: 630, alt: 'Smart Kilid Sistemləri - Bakıda Təhlükəsizlik və Avtomatik Qapı Sistemləri' }
    ]
  },
  icons: {
    icon: '/icon.svg'
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
        
        {/* Critical CSS for LCP optimization */}
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Critical CSS for above-the-fold content */
            html { scroll-behavior: smooth; }
            body { 
              font-family: 'Inter', system-ui, -apple-system, sans-serif;
              margin: 0;
              padding: 0;
            }
            .container {
              max-width: 72rem;
              margin: 0 auto;
              padding: 0 1rem;
            }
            /* Header critical styles */
            header {
              position: fixed;
              top: 0;
              left: 0;
              right: 0;
              z-index: 50;
              background-color: white;
              box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
              border-bottom: 1px solid #e5e7eb;
            }
            /* Hero section critical styles */
            .hero-section {
              background: linear-gradient(135deg, #eff6ff 0%, #f9fafb 100%);
              min-height: 100vh;
              display: flex;
              align-items: center;
            }
            .hero-content h1 {
              font-size: 2.25rem;
              font-weight: bold;
              line-height: 1.2;
              color: #111827;
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
          `
        }} />
      </head>
      <body className={inter.className}>
        <Header />
        <div className="pt-header">
          {children}
        </div>

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Smart Kilid Sistemləri",
              "description": "Bakıda smart kilid, access control, turniket sistemi və elektron kilid sistemlərinin satışı və quraşdırılması",
              "url": "https://smartkilid.az",
              "telephone": ["+994552370200", "+994708001000"],
              "email": "smartkilid.az@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Bakı",
                "addressCountry": "AZ"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 40.394734,
                "longitude": 49.73893
              },
              "openingHours": "Mo-Su 09:00-21:00",
              "priceRange": "$$",
              "areaServed": {
                "@type": "City",
                "name": "Bakı",
                "addressCountry": "AZ"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Təhlükəsizlik Sistemləri",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Smart Kilid Sistemləri"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Access Control Sistemləri"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Turniket Sistemləri"
                    }
                  }
                ]
              }
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

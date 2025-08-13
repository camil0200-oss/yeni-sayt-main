import './globals.css'
import { Inter } from 'next/font/google'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

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
      <body className={inter.className}>
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
        {children}
        
      </body>
    </html>
  )
}

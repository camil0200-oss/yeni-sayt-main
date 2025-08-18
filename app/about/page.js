export const metadata = {
  title: 'Smart Kilid Sistemləri Haqqında - Bakıda Təhlükəsizlik Sistemləri Uzmanları | Smartkilid.az',
  description: 'Bakıda smart kilid, access control, turniket sistemi və elektron kilid sahəsində 10+ illik təcrübə. Peşəkar komanda, 24/7 dəstək və keyfiyyətli xidmət.',
  keywords: 'Smart Kilid Sistemləri, Bakı təhlükəsizlik sistemləri, access control uzmanları, smart kilid komandası, Bakı elektron kilid, təhlükəsizlik sistemləri şirkəti',
  alternates: { canonical: '/about' },
  openGraph: {
    type: 'website',
    url: 'https://smartkilid.az/about',
    title: 'Smart Kilid Sistemləri Haqqında - Bakıda Təhlükəsizlik Sistemləri Uzmanları',
    description: 'Bakıda smart kilid, access control, turniket sistemi və elektron kilid sahəsində 10+ illik təcrübə. Peşəkar komanda və keyfiyyətli xidmət.',
    siteName: 'Smart Kilid Sistemləri',
    locale: 'az_AZ',
    images: [{ 
      url: '/images/about-team.webp', 
      width: 1200, 
      height: 630, 
      alt: 'Smart Kilid Sistemləri komandası - Bakıda təhlükəsizlik sistemləri uzmanları' 
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Smart Kilid Sistemləri Haqqında - Bakıda Təhlükəsizlik Sistemləri Uzmanları',
    description: 'Bakıda smart kilid, access control, turniket sistemi və elektron kilid sahəsində 10+ illik təcrübə.',
    images: ['/images/about-team.webp']
  }
};

import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <nav className="text-gray-500 text-base mb-8" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2">
          <li><a href="/" className="hover:underline hover:text-blue-600">Əsas səhifə</a></li>
          <li><span className="mx-2">›</span></li>
          <li><span className="text-gray-700 font-medium">Haqqımızda</span></li>
        </ol>
      </nav>

      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Bakıda <span className="text-blue-600">Smart Kilid</span> və <span className="text-blue-600">Access Control</span> Uzmanları
        </h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          <strong>Smart Kilid Sistemləri</strong> olaraq, Bakıda <strong>smart kilid</strong>, <strong>access control</strong>, 
          <strong> turniket sistemi</strong> və <strong>elektron kilid</strong> sahəsində ən keyfiyyətli xidmət təqdim edirik.
        </p>
      </section>

      {/* Komanda və Təcrübə */}
      <section className="grid lg:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Peşəkar Komandamız və Təcrübəmiz</h2>
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              <strong>Smart Kilid Sistemləri</strong> komandası <strong>smart kilid</strong>, <strong>access control</strong> və 
              <strong> təhlükəsizlik sistemləri</strong> sahəsində 10+ illik təcrübəyə malikdir. Bakıda yüzlərlə layihə 
              uğurla tamamlayaraq müştərilərimizin etimadını qazandıq.
            </p>
            <p>
              Komandamız yüksək ixtisaslı mühəndislər, texniki mütəxəssislər və quraşdırma ustalarından ibarətdir. 
              Hər bir üzvümüz <strong>elektron kilid</strong>, <strong>turniket sistemi</strong> və <strong>biometrik giriş</strong> 
              sistemləri sahəsində geniş bilikə malikdir.
            </p>
            <p>
              Bakı şəraitinə uyğunlaşdırılmış həllər təqdim edərək, müştərilərimizin təhlükəsizlik ehtiyaclarını 
              tam şəkildə ödəyirik. <strong>Smart kilid</strong> və <strong>access control</strong> sistemlərimiz 
              ən son texnologiyalarla təchiz edilib.
            </p>
          </div>
        </div>

        <div className="relative">
          <Image 
            src="/images/about-team.webp" 
            alt="Smart Kilid Sistemləri komandası - Bakıda təhlükəsizlik sistemləri uzmanları və peşəkar quraşdırma komandası" 
            width={800} 
            height={600} 
            className="rounded-2xl shadow-xl" 
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
      </section>

      {/* Xidmət Sahələrimiz */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Xidmət Sahələrimiz</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg border">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Smart Kilid Sistemləri</h3>
            <p className="text-gray-700 mb-4">
              Bakıda <strong>smart kilid</strong> və <strong>elektron kilid</strong> sistemlərinin satışı, 
              quraşdırılması və texniki dəstəyi. Mənzil, ofis və kommersiya obyektləri üçün həllər.
            </p>
            <Link href="/services/smart-lock" className="text-blue-600 hover:text-blue-700 font-medium">
              Ətraflı məlumat →
            </Link>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Access Control Sistemləri</h3>
            <p className="text-gray-700 mb-4">
              <strong>Access control</strong> və <strong>davamiyyət sistemi</strong> həllləri. 
              Ofis, zavod və ticarət obyektləri üçün mərkəzləşdirilmiş idarəetmə.
            </p>
            <Link href="/services/access-control" className="text-blue-600 hover:text-blue-700 font-medium">
              Ətraflı məlumat →
            </Link>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Turniket Sistemləri</h3>
            <p className="text-gray-700 mb-4">
              <strong>Turniket sistemi</strong> və <strong>giriş idarəetmə</strong> həllləri. 
              Yüksək axınlı obyektlər üçün təhlükəsiz giriş-buraxılış.
            </p>
            <Link href="/services/turnstile" className="text-blue-600 hover:text-blue-700 font-medium">
              Ətraflı məlumat →
            </Link>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Kartlı Lift Sistemləri</h3>
            <p className="text-gray-700 mb-4">
              <strong>Kartlı lift</strong> və <strong>mərtəbə icazə</strong> idarəetmə sistemləri. 
              Yaşayış kompleksləri və otellər üçün təhlükəsizlik.
            </p>
            <Link href="/services/lift" className="text-blue-600 hover:text-blue-700 font-medium">
              Ətraflı məlumat →
            </Link>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Biometrik Giriş</h3>
            <p className="text-gray-700 mb-4">
              <strong>Biometrik giriş</strong> və <strong>üz tanıma</strong> sistemləri. 
              Yüksək təhlükəsizlik tələb olunan obyektlər üçün.
            </p>
            <Link href="/services/biometrics" className="text-blue-600 hover:text-blue-700 font-medium">
              Ətraflı məlumat →
            </Link>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Domofon Sistemləri</h3>
            <p className="text-gray-700 mb-4">
              <strong>Domofon sistemi</strong> və <strong>video domofon</strong> həllləri. 
              Yaşayış kompleksləri və villalar üçün təhlükəsizlik.
            </p>
            <Link href="/services/intercom" className="text-blue-600 hover:text-blue-700 font-medium">
              Ətraflı məlumat →
            </Link>
          </div>
        </div>
      </section>

      {/* Dəyərlərimiz */}
      <section className="mb-16 bg-gray-50 rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Dəyərlərimiz və Prinsiplərimiz</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-blue-600 text-2xl font-bold">✓</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Keyfiyyət</h3>
            <p className="text-gray-700">
              Ən yüksək keyfiyyət standartları ilə <strong>smart kilid</strong> və <strong>access control</strong> sistemləri.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-green-600 text-2xl font-bold">⚡</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Sürət</h3>
            <p className="text-gray-700">
              Sürətli quraşdırma və <strong>turniket sistemi</strong> konfiqurasiyası.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-purple-600 text-2xl font-bold">🛡️</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Təhlükəsizlik</h3>
            <p className="text-gray-700">
              Maksimum təhlükəsizlik təmin edən <strong>elektron kilid</strong> sistemləri.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-orange-600 text-2xl font-bold">🎯</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Peşəkarlıq</h3>
            <p className="text-gray-700">
              Peşəkar komanda ilə <strong>kartlı lift</strong> və <strong>biometrik giriş</strong> həllləri.
            </p>
          </div>
        </div>
      </section>

      {/* Əlaqə CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Bakıda Smart Kilid Sistemləri ilə Əlaqə</h2>
        <p className="text-xl mb-6 opacity-90">
          Layihəniz üçün pulsuz konsultasiya və yerində baxış xidməti. 
          Peşəkar komandamızla tanış olun.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="https://wa.me/994552370200"
            className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            WhatsApp Konsultasiya
          </a>
          <a 
            href="/contact"
            className="bg-black/20 px-8 py-4 rounded-lg font-semibold hover:bg-black/30 transition-colors"
          >
            Əlaqə Forması
          </a>
        </div>
      </section>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Smart Kilid Sistemləri",
            "url": "https://smartkilid.az",
            "logo": "https://smartkilid.az/logo.png",
            "description": "Bakıda smart kilid, access control, turniket sistemi və elektron kilid sahəsində peşəkar xidmət",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Bakı",
              "addressCountry": "AZ"
            },
            "telephone": "+994552370200",
            "email": "smartkilid.az@gmail.com",
            "openingHours": "Mo-Su 09:00-21:00",
            "areaServed": {
              "@type": "City",
              "name": "Bakı",
              "addressCountry": "AZ"
            },
            "serviceArea": {
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

      {/* BreadcrumbList JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Əsas səhifə", "item": "https://smartkilid.az/" },
              { "@type": "ListItem", "position": 2, "name": "Haqqımızda", "item": "https://smartkilid.az/about" }
            ]
          })
        }}
      />
    </main>
  );
}

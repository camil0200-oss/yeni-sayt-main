// app/services/page.js
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Smart Kilid Satışı, Turniket və Şlaqbaum Satışı Bakı - 9 Əsas Xidmət | Smartkilid.az',
  description: 'Bakıda smart kilid satışı, access control, turniket satışı və quraşdırılması, şlaqbaum satışı, kartlı lift, domofon və biometrik sistemlərin satışı, quraşdırılması, servisi və təmiri. 9 əsas xidmət. Pulsuz konsultasiya və texniki dəstək.',
  keywords: 'smart kilid satışı, turniket satışı, şlaqbaum satışı, access control, turniket quraşdırılması, şlaqbaum quraşdırılması, turniket servisi, şlaqbaum servisi, turniket qiymətləri, şlaqbaum qiymətləri, Bakı',
  alternates: { canonical: 'https://smartkilid.az/services' },
  openGraph: {
    title: 'Smart Kilid Satışı, Turniket və Şlaqbaum Satışı Bakı - 9 Əsas Xidmət',
    description: 'Bakıda smart kilid satışı, turniket və şlaqbaum satışı və quraşdırılması. 9 əsas xidmət. Pulsuz konsultasiya.',
    url: 'https://smartkilid.az/services',
    type: 'website',
    images: [{ url: 'https://smartkilid.az/images/hero-security.webp', width: 1200, height: 630 }]
  }
}

const services = [
  { slug: 'smart-lock',       title: 'Smart Kilidlər',            img: '/images/service-smart-lock.webp' },
  { slug: 'access-control',   title: 'Access Control Sistemləri', img: '/images/service-access-control.webp' },
  { slug: 'turnstile',        title: 'Turniket Sistemləri',       img: '/images/service-turnstile.webp' },
  { slug: 'barrier',          title: 'Şlaqbaum Sistemləri',       img: '/images/service-barrier.webp' },
  { slug: 'lift',             title: 'Lift Kart Sistemi',     img: '/images/service-lift.webp' },
  { slug: 'biometrics',       title: 'Biometrik Giriş',           img: '/images/service-biometrics.webp' },
  { slug: 'gate',             title: 'Elektron Qapı',        img: '/images/service-gate.webp' },
  { slug: 'keypad',           title: 'Kodlayıcı Sistemlər',       img: '/images/service-keypad.webp' },
  { slug: 'hotel-card',       title: 'Otel Kart Sistemi',        img: '/images/service-smart-lock.webp' },
  { slug: 'intercom',         title: 'Domofon Sistemləri',        img: '/images/service-intercom.webp' },
]

export default function ServicesPage() {
  return (
    <main className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Smart Kilid Satışı, Turniket və Şlaqbaum Satışı - Xidmətlərimiz</h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Bakıda 9 əsas xidmət üzrə <strong>satış, quraşdırılma, servis və təmir</strong> — <strong>smart kilid satışı</strong>, <strong>turniket satışı</strong>, <strong>şlaqbaum satışı</strong> və daha çox. Klikləyin, detalları görün.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              prefetch
              className="group block rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300 overflow-hidden bg-white"
            >
              <div className="h-56 overflow-hidden">
                <Image
                  src={s.img}
                  alt={s.title}
                  width={380}
                  height={253}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">{s.title}</h3>
                <p className="text-base text-gray-600 mt-2">Ətraflı məlumat üçün klikləyin</p>
                {/* Intent anchors for SEO */}
              <div className="mt-3 text-sm text-blue-600">
                {s.slug === 'turnstile' && (
                  <a href={`/services/${s.slug}#`} className="hover:underline">Turniket satışı və quraşdırılması →</a>
                )}
                {s.slug === 'barrier' && (
                  <a href={`/services/${s.slug}#`} className="hover:underline">Şlaqbaum servisi və qiymətləri →</a>
                )}
                {s.slug === 'access-control' && (
                  <a href={`/services/${s.slug}#`} className="hover:underline">Access Control quraşdırılması →</a>
                )}
                {s.slug === 'biometrics' && (
                  <a href={`/services/${s.slug}#`} className="hover:underline">Biometrik giriş və servisi →</a>
                )}
                {s.slug === 'gate' && (
                  <a href={`/services/${s.slug}#`} className="hover:underline">Elektron qapı və kilid sistemləri →</a>
                )}
                {s.slug === 'keypad' && (
                  <a href={`/services/${s.slug}#`} className="hover:underline">Kodlayıcı sistemlər və quraşdırma →</a>
                )}
                {s.slug === 'lift' && (
                  <a href={`/services/${s.slug}#`} className="hover:underline">Kartla lift idarəetmə və qiymətlər →</a>
                )}
                {s.slug === 'intercom' && (
                  <a href={`/services/${s.slug}#`} className="hover:underline">Domofon sistemləri və quraşdırma →</a>
                )}
              </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}

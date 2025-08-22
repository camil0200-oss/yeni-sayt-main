// app/services/page.js
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Smart Kilid və Access Control Xidmətləri Bakı - Elektron Kilid, Turniket, Kartlı Lift | Smartkilid.az',
  description: 'Bakıda smart kilid, access control, turniket sistemi, kartlı lift, domofon və biometrik sistemlərin satışı və quraşdırılması. 9 əsas xidmət. Pulsuz konsultasiya.',
  alternates: { canonical: '/services' },
}

const services = [
  { slug: 'smart-lock',       title: 'Smart Kilidlər',            img: '/images/service-smart-lock.webp' },
  { slug: 'access-control',   title: 'Access Control Sistemləri', img: '/images/service-access-control.webp' },
  { slug: 'turnstile',        title: 'Turniket Sistemləri',       img: '/images/service-turnstile.webp' },
  { slug: 'barrier',          title: 'Şlaqbaum Sistemləri',       img: '/images/service-barrier.webp' },
  { slug: 'lift',             title: 'Kartla Lift İdarəetmə',     img: '/images/service-lift.webp' },
  { slug: 'biometrics',       title: 'Biometrik Giriş',           img: '/images/service-biometrics.webp' },
  { slug: 'gate',             title: 'Elektron Kilid Sistemləri',        img: '/images/service-gate.webp' },
  { slug: 'keypad',           title: 'Kodlayıcı Sistemlər',       img: '/images/service-keypad.webp' },
  { slug: 'hotel-card',       title: 'Otel Kart Sistemi',        img: '/images/service-smart-lock.webp' },
  { slug: 'intercom',         title: 'Domofon Sistemləri',        img: '/images/service-intercom.webp' },
]

export default function ServicesPage() {
  return (
    <main className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Xidmətlər</h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            9 əsas xidmət üzrə satış və quraşdırma — klikləyin, detalları görün.
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
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}

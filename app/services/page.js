// app/services/page.js
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Xidmətlər — Smart Kilid Sistemləri',
  description: 'Elektron kilid, access control, turniket, şlaqbaum, biometrik sistemlər və lift kart sistemi.',
  alternates: { canonical: '/services' },
}

const services = [
  { slug: 'smart-lock',       title: 'Smart Kilidlər',            img: '/images/service-smart-lock.webp' },
  { slug: 'access-control',   title: 'Access Control Sistemləri', img: '/images/service-access-control.webp' },
  { slug: 'turnstile',        title: 'Turniket Sistemləri',       img: '/images/service-turnstile.webp' },
  { slug: 'barrier',          title: 'Şlaqbaum Sistemləri',       img: '/images/service-barrier.webp' },
  { slug: 'lift',             title: 'Kartla Lift İdarəetmə',     img: '/images/service-lift.webp' },
  { slug: 'biometrics',       title: 'Biometrik Giriş',           img: '/images/service-biometrics.webp' },
  { slug: 'gate',             title: 'Elektron Darvaza',          img: '/images/service-gate.webp' },
  { slug: 'keypad',           title: 'Kodlayıcı Sistemlər',       img: '/images/service-keypad.webp' },
  { slug: 'intercom',         title: 'Domofon Sistemləri',        img: '/images/service-intercom.webp' },
]

export default function ServicesPage() {
  return (
    <main className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Xidmətlər</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            9 əsas xidmət üzrə satış və quraşdırma — klikləyin, detalları görün.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              prefetch
              className="group block rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-md transition overflow-hidden bg-white"
            >
              <div className="h-48 overflow-hidden">
                <Image
                  src={s.img}
                  alt={s.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:underline">{s.title}</h3>
                <p className="text-sm text-gray-600 mt-1">Ətraflı məlumat üçün klikləyin</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}

import ServiceContent, { getService } from '@/components/ServiceContent'
import Image from 'next/image'
import Link from 'next/link'

export async function generateStaticParams() {
  const { SERVICES } = await import('@/components/ServiceContent')
  return SERVICES.map(s => ({ slug: s.slug }))
}

export async function generateMetadata({ params }) {
  const item = getService(params.slug)
  if (!item) {
    return {
      title: 'Xidmət Tapılmadı - Smart Kilid Sistemləri',
      description: 'Axtardığınız xidmət tapılmadı. Bakıda smart kilid, access control və təhlükəsizlik sistemləri.',
    }
  }

  const title = `${item.title} Bakı - ${item.title} Satışı və Quraşdırma | Smartkilid.az`
  const description = `Bakıda ${item.title} satışı və peşəkar quraşdırma xidməti. ${item.short} 24/7 texniki dəstək. Pulsuz konsultasiya.`
  const url = `https://smartkilid.az/services/${params.slug}`

  return {
    title,
    description,
    keywords: item.keywords?.join(', '),
    alternates: { canonical: `/services/${params.slug}` },
    openGraph: {
      type: 'article',
      url,
      title,
      description,
      siteName: 'Smart Kilid Sistemləri',
      locale: 'az_AZ',
      images: [{ 
        url: item.heroImg, 
        width: 1200, 
        height: 630, 
        alt: `${item.title} - Bakıda ${item.title} satışı və quraşdırma` 
      }],
    },
    twitter: { 
      card: 'summary_large_image', 
      title, 
      description, 
      images: [item.heroImg] 
    },
  }
}

export default function ServicePage({ params }) {
  const svc = getService(params.slug)
  
  if (!svc) {
    return (
      <main className="container mx-auto max-w-6xl px-4 py-10">
        <div className="text-center py-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Xidmət Tapılmadı</h1>
          <p className="text-xl text-gray-600 mb-8">Axtardığınız xidmət tapılmadı. Digər xidmətlərimizə baxın.</p>
          <a href="/services" className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors">
            Bütün Xidmətlər
          </a>
        </div>
      </main>
    )
  }

  return (
    <main className="container mx-auto max-w-6xl px-4 py-10">
      {/* Breadcrumb */}
      <nav className="text-gray-500 text-base md:text-lg mb-6" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2">
          <li><a href="/" className="hover:underline hover:text-blue-600">Əsas səhifə</a></li>
          <li><span className="mx-2">›</span></li>
          <li><a href="/services" className="hover:underline hover:text-blue-600">Xidmətlər</a></li>
          <li><span className="mx-2">›</span></li>
          <li><span className="text-gray-700 font-medium">{svc.title}</span></li>
        </ol>
      </nav>

      <ServiceContent slug={params.slug} />

      {/* Əlavə SEO Məzmunu */}
      <section className="mt-16 bg-gray-50 rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Bakıda {svc.title} Haqqında Ətraflı Məlumat</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Niyə {svc.title} Seçməlisiniz?</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Bakıda <strong>{svc.title}</strong> sahəsində ən keyfiyyətli xidmət təqdim edirik. Peşəkar komandamız 
              <strong> {svc.title}</strong> sistemlərinin quraşdırılması və texniki dəstəyi sahəsində geniş təcrübəyə malikdir.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>{svc.title}</strong> sistemlərimiz ən son texnologiyalarla təchiz edilib və Bakı şəraitinə uyğunlaşdırılıb. 
              24/7 texniki dəstək və uzunmüddətli zəmanət ilə <strong>{svc.title}</strong> xidmətimizə etibar edə bilərsiniz.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Bakıda {svc.title} Xidmətimizin Üstünlükləri</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Peşəkar quraşdırma komandası</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>24/7 texniki dəstək xidməti</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Uzunmüddətli zəmanət</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Keyfiyyətli məhsullar</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Razılıq qiymətləri</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Pulsuz konsultasiya</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Əlaqə CTA */}
      <section className="mt-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-4">Bakıda {svc.title} üçün Peşəkar Məsləhət</h2>
        <p className="text-lg mb-6 opacity-90">
          Layihəniz üçün ən yaxşı {svc.title} həllini təklif edirik. Pulsuz konsultasiya və yerində baxış üçün bizimlə əlaqə saxlayın.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="https://wa.me/994552370200" 
            className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            WhatsApp (055) - +994 55 237 02 00
          </a>
          <a 
            href="https://wa.me/994708001000" 
            className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            WhatsApp (070) - +994 70 800 10 00
          </a>
          <a 
            href="/contact" 
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Əlaqə Səhifəsi
          </a>
        </div>
      </section>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": `${svc.title}`,
            "description": `${svc.short}`,
            "url": `https://smartkilid.az/services/${params.slug}`,
            "provider": {
              "@type": "LocalBusiness",
              "name": "Smart Kilid Sistemləri",
              "url": "https://smartkilid.az",
              "telephone": ["+994552370200", "+994708001000"],
              "email": "smartkilid.az@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Bakı",
                "addressCountry": "AZ"
              },
              "areaServed": {
                "@type": "City",
                "name": "Bakı",
                "addressCountry": "AZ"
              }
            },
            "image": svc.heroImg,
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "AZN",
              "description": `${svc.title} satışı və quraşdırma xidməti`,
              "availability": "https://schema.org/InStock"
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
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Əsas səhifə",
                "item": "https://smartkilid.az/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Xidmətlər",
                "item": "https://smartkilid.az/services"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": svc.title,
                "item": `https://smartkilid.az/services/${params.slug}`
              }
            ]
          })
        }}
      />

      {/* FAQPage JSON-LD */}
      {svc.faq && svc.faq.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": svc.faq.map(([question, answer]) => ({
                "@type": "Question",
                "name": question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": answer
                }
              }))
            })
          }}
        />
      )}
    </main>
  )
}

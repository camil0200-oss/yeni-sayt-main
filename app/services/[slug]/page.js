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

  const base = 'https://smartkilid.az'
  const title = `${item.title} — Satışı, Quraşdırılması və Servis | SmartKilid.az`
  const description = `${item.title} satışı, quraşdırılması və servisi. ${item.short} Ətraflı məlumat və pulsuz konsultasiya üçün əlaqə saxlayın.`
  const url = `${base}/services/${params.slug}`

  return {
    title,
    description,
    keywords: item.keywords?.join(', '),
    alternates: { canonical: url },
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
        alt: `${item.title} - ${item.title} satışı və quraşdırma` 
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

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": svc.title,
    "description": svc.short,
    "url": `https://smartkilid.az/services/${params.slug}`,
    "provider": {
      "@type": "Organization",
      "name": "Smart Kilid Sistemləri",
      "url": "https://smartkilid.az",
      "telephone": ["+994552370200", "+994708001000"],
      "email": "smartkilid.az@gmail.com"
    },
    "serviceType": svc.title,
    "areaServed": "Bakı, Azərbaycan",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Smart Kilid Xidmətləri"
    }
  }

  return (
    <main className="container mx-auto max-w-6xl px-4 py-10 relative z-1">
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
      <section className="mt-8 prose max-w-none">
        <h2>Əlavə məlumat — {svc.title}</h2>
        <p>
          {svc.title} satışı, quraşdırılması və servisi üzrə ekspert xidmətləri. Xidmətlərimizə <strong>satışı</strong>, <strong>quraşdırılması</strong>, <strong>təkmilləşdirmə</strong> və <strong>təmiri</strong> daxildir. Biz layihəyə görə ən uyğun məhsulu təklif edir və peşəkar quraşdırma həyata keçiririk.
        </p>
        <p>
          Açar sözlər: {svc.keywords?.slice(0,6).join(', ')}
        </p>
        <h3>Turniket və digər əlaqəli sistemlər</h3>
        <p>
          Biz həmçinin turniket, access control, şlaqbaum və lift kart idarəetmə sistemləri üzrə dəstək veririk. Ətraflı məlumat üçün <a href="/services">Xidmətlərimiz</a> səhifəsinə baxın.
        </p>
      </section>

      {/* Related services */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Əlaqəli Xidmətlər</h2>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li><a href="/services/access-control" className="hover:underline">Access Control Sistemləri</a></li>
          <li><a href="/services/turnstile" className="hover:underline">Turniket Sistemləri</a></li>
          <li><a href="/services/barrier" className="hover:underline">Şlaqbaum Sistemləri</a></li>
        </ul>
      </section>

      {/* Service JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

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

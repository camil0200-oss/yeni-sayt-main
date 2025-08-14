import ServiceContent, { getService } from '@/components/ServiceContent'

export async function generateStaticParams() {
  const { SERVICES } = await import('@/components/ServiceContent')
  return SERVICES.map(s => ({ slug: s.slug }))
}

export async function generateMetadata({ params }) {
  const item = getService(params.slug)
  const title = item ? `${item.title} — Smart Kilid Sistemləri` : 'Xidmət'
  const description = item ? (item.short || item.intro?.slice(0, 160)) : 'Xidmət haqqında məlumat'
  const url = `https://smartkilid.az/services/${params.slug}`

  return {
    title,
    description,
    alternates: { canonical: `/services/${params.slug}` },
    openGraph: {
      type: 'article',
      url,
      title,
      description,
      images: item ? [{ url: item.heroImg, width: 1200, height: 630, alt: item.title }] : [],
    },
    twitter: { card: 'summary_large_image', title, description, images: item ? [item.heroImg] : [] },
    keywords: item?.keywords,
  }
}

export default function ServicePage({ params }) {
  const svc = getService(params.slug)
  return (
    <main className="container mx-auto max-w-6xl px-4 py-10">
      {/* Breadcrumb */}
      <nav className="text-gray-500 text-base md:text-lg mb-6">
        <a href="/" className="hover:underline">Əsas səhifə</a>
        <span className="mx-2">›</span>
        <a href="/services" className="hover:underline">Xidmətlər</a>
        <span className="mx-2">›</span>
        <span className="text-gray-700 font-medium capitalize">{params.slug.replace('-', ' ')}</span>
      </nav>

      <ServiceContent slug={params.slug} />

      {/* JSON-LD (Service) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": getService(params.slug)?.title || "Xidmət",
            "provider": { "@type": "Organization", "name": "Smart Kilid Sistemləri", "url": "https://smartkilid.az" },
            "areaServed": "Bakı, Azərbaycan",
            "url": `https://smartkilid.az/services/${params.slug}`
          })
        }}
      />
      {/* JSON-LD (BreadcrumbList) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Əsas səhifə", "item": "https://smartkilid.az/" },
              { "@type": "ListItem", "position": 2, "name": "Xidmətlər", "item": "https://smartkilid.az/services" },
              { "@type": "ListItem", "position": 3, "name": getService(params.slug)?.title || params.slug, "item": `https://smartkilid.az/services/${params.slug}` }
            ]
          })
        }}
      />
      {/* JSON-LD (FAQPage) */}
      {svc?.faq?.length ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": svc.faq.map(([q, a]) => ({
                "@type": "Question",
                "name": q,
                "acceptedAnswer": { "@type": "Answer", "text": a }
              }))
            })
          }}
        />
      ) : null}
    </main>
  )
}

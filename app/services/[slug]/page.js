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
  return (
    <main className="container mx-auto px-4 py-10">
      <nav className="text-sm text-gray-500 mb-6">
        <a href="/" className="hover:underline">Əsas səhifə</a>
        <span className="mx-2">/</span>
        <a href="/services" className="hover:underline">Xidmətlər</a>
        <span className="mx-2">/</span>
        <span className="text-gray-700 font-medium">{params.slug}</span>
      </nav>

      <ServiceContent slug={params.slug} />

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
    </main>
  )
}

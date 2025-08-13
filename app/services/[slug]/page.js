import ServiceContent, { getService } from '@/components/ServiceContent'

export function generateStaticParams() {
  return [
    'smart-lock','access-control','barrier','turnstile','lift','biometrics','gate','keypad'
  ].map(slug => ({ slug }))
}

export async function generateMetadata({ params }) {
  const item = getService(params.slug)
  if(!item) return { title: 'Xidmət tapılmadı' }
  const title = `${item.title} — Smart Kilid Sistemləri`
  const description = `${item.title} xidməti: təhlükəsizlik, quraşdırma və servis. Bakı və bütün Azərbaycan üçün.`
  const url = `https://smartkilid.az/services/${params.slug}`
  return {
    title, description,
    alternates: { canonical: `/services/${params.slug}` },
    openGraph: {
      type: 'article',
      url, title, description,
      images: [{ url: item.img, width: 1200, height: 630, alt: item.alt }]
    },
    twitter: {
      card: 'summary_large_image',
      title, description,
      images: [item.img]
    }
  }
}

export default function ServicePage({ params }) {
  return (
    <main className="container mx-auto px-4 py-12">
      <ServiceContent slug={params.slug} />
    </main>
  )
}

export default async function sitemap() {
  const base = 'https://smartkilid.az'
  const now = new Date()
  
  const staticEntries = [
    { url: `${base}/`, changefreq: 'daily', priority: 1.0, lastModified: now },
    { url: `${base}/services`, changefreq: 'weekly', priority: 0.9, lastModified: now },
    { url: `${base}/about`, changefreq: 'monthly', priority: 0.7, lastModified: now },
    { url: `${base}/contact`, changefreq: 'monthly', priority: 0.8, lastModified: now },
  ]

  // Bütün xidmətləri sitemap-a əlavə et (prioritet açar sözlərə görə)
  const { SERVICES } = await import('@/components/ServiceContent')
  
  // Prioritet xidmətlər üçün yüksək priority
  const highPriorityServices = ['barrier', 'turnstile', 'access-control', 'lift', 'gate']
  
  const serviceEntries = SERVICES.map((s) => ({
    url: `${base}/services/${s.slug}`,
    changefreq: 'weekly',
    priority: highPriorityServices.includes(s.slug) ? 0.9 : 0.8,
    lastModified: now,
  }))

  return [...staticEntries, ...serviceEntries]
}

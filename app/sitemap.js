export default async function sitemap() {
  const base = 'https://smartkilid.az'
  const now = new Date()
  const staticEntries = [
    { url: `${base}/`, changefreq: 'weekly', priority: 1.0, lastModified: now },
    { url: `${base}/services`, changefreq: 'weekly', priority: 0.9, lastModified: now },
    { url: `${base}/blog`, changefreq: 'weekly', priority: 0.8, lastModified: now },
    { url: `${base}/about`, changefreq: 'monthly', priority: 0.7, lastModified: now },
    { url: `${base}/contact`, changefreq: 'monthly', priority: 0.6, lastModified: now },
  ]

  // Xidmətlərin hamısını sitemap-a əlavə et
  const { SERVICES } = await import('@/components/ServiceContent')
  const serviceEntries = SERVICES.map((s) => ({
    url: `${base}/services/${s.slug}`,
    changefreq: 'weekly',
    priority: 0.8,
    lastModified: now,
  }))

  // Blog yazılarını sitemap-a əlavə et
  const blogPosts = [
    'smart-kilid-secimi',
    'access-control-avantajlari', 
    'turniket-sistemi-tipleri',
    'kartli-lift-sistemi'
  ]
  const blogEntries = blogPosts.map((slug) => ({
    url: `${base}/blog/${slug}`,
    changefreq: 'monthly',
    priority: 0.6,
    lastModified: now,
  }))

  return [...staticEntries, ...serviceEntries, ...blogEntries]
}

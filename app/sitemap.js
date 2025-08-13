export default function sitemap() {
  const base = 'https://smartkilid.az';
  const now = new Date();
  return [
    { url: `${base}/`, changefreq: 'weekly', priority: 1.0, lastModified: now },
    { url: `${base}/services`, changefreq: 'weekly', priority: 0.9, lastModified: now },
    { url: `${base}/services/intercom`, changefreq: 'weekly', priority: 0.8, lastModified: now },
    { url: `${base}/about`, changefreq: 'monthly', priority: 0.7, lastModified: now },
    { url: `${base}/contact`, changefreq: 'monthly', priority: 0.6, lastModified: now },
  ];
}

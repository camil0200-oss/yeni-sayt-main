export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: 'https://smartkilid.az/sitemap.xml',
    host: 'https://smartkilid.az',
  };
}

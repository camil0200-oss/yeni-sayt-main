export default function manifest() {
  return {
    name: 'Smart Kilid Sistemləri',
    short_name: 'SmartKilid',
    description: 'Ağıllı kilid, access control, turniket/şlaqbaum, lift kart sistemi və quraşdırma xidmətləri.',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    theme_color: '#111827',
    background_color: '#0F172A',
    icons: [
      // SVG ikonun var: brauzerlər tərəfindən dəstəklənir, ancaq bəzi cihazlar PNG istəyir.
      { src: '/icon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any maskable' }
      // İstəsən sonra PNG icon-ları da əlavə edək: 192x192, 512x512
    ],
    screenshots: [
      { src: '/images/hero-security.webp', type: 'image/webp', sizes: '1600x900', form_factor: 'wide' }
    ],
    shortcuts: [
      { name: 'Xidmətlər', url: '/services', description: 'Elektron kilid, access control, turniket' },
      { name: 'Əlaqə', url: '/contact', description: 'Bizimlə əlaqə saxlayın' }
    ]
  }
}

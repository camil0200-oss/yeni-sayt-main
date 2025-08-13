export const metadata = {
  title: 'Əlaqə — Smart Kilid Sistemləri',
  description: 'Bizimlə əlaqə saxlayın: zəng, WhatsApp, e-poçt və ünvan.',
  alternates: { canonical: '/contact' },
  openGraph: {
    type: 'website',
    url: 'https://smartkilid.az/contact',
    title: 'Əlaqə — Smart Kilid Sistemləri',
    description: 'Bizimlə əlaqə saxlayın: zəng, WhatsApp, e-poçt və ünvan.',
    images: [{ url: '/images/service-keypad.webp', width: 1200, height: 630, alt: 'Əlaqə' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Əlaqə — Smart Kilid Sistemləri',
    description: 'Bizimlə əlaqə saxlayın: zəng, WhatsApp, e-poçt və ünvan.',
    images: ['/images/service-keypad.webp']
  }
};

export default function ContactPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-semibold mb-6">Əlaqə</h1>
      <div className="space-y-2">
        <p>Telefon: +994 55 237 02 00</p>
        <p>WhatsApp: +99470 800 10 00X</p>
        <p>E-poçt: smartkilid.az@gmail.com</p>
        <p>Ünvan: Bakı, Azərbaycan</p>
      </div>
    </main>
  );
}

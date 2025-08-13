export const metadata = {
  title: 'Əlaqə — Smart Kilid Sistemləri',
  description: 'Bizimlə əlaqə saxlayın: zəng, WhatsApp, e-poçt və ünvan.',
  alternates: { canonical: '/contact' },
};
export default function ContactPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-semibold mb-6">Əlaqə</h1>
      <div className="space-y-2">
        <p>Telefon: +994 XX XXX XX XX</p>
        <p>WhatsApp: +994 XX XXX XX XX</p>
        <p>E-poçt: info@smartkilid.az</p>
        <p>Ünvan: Bakı, Azərbaycan</p>
      </div>
    </main>
  );
}

export const metadata = {
  title: 'Xidmətlər — Smart Kilid Sistemləri',
  description: 'Elektron kilid, access control, turniket, şlaqbaum, biometrik sistemlər və quraşdırma.',
  alternates: { canonical: '/services' },
};
import Image from 'next/image';
export default function ServicesPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-semibold mb-6">Xidmətlər</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <section>
          <h2 className="text-xl font-medium mb-2">Access Control</h2>
          <p className="mb-4">Kart, barmaq izi, üz tanıma ilə giriş nəzarəti sistemləri.</p>
          <Image src="/images/service-access-control.webp" alt="Access control sistemi" width={1200} height={800} className="rounded-xl shadow" />
        </section>
        <section>
          <h2 className="text-xl font-medium mb-2">Smart Kilid</h2>
          <p className="mb-4">Telefonla idarə olunan ağıllı qapı kilidləri və quraşdırma.</p>
          <Image src="/images/service-smart-lock.webp" alt="Smart kilid" width={1200} height={800} className="rounded-xl shadow" />
        </section>
        <section>
          <h2 className="text-xl font-medium mb-2">Turniket / Şlaqbaum</h2>
          <p className="mb-4">Avtomobil və piyada keçid həlləri.</p>
          <Image src="/images/service-barrier.webp" alt="Şlaqbaum sistemi" width={1200} height={800} className="rounded-xl shadow" />
        </section>
        <section>
          <h2 className="text-xl font-medium mb-2">Liftin kartla idarəsi</h2>
          <p className="mb-4">Mərtəbə əsaslı icazələr və mərkəzləşdirilmiş idarəetmə.</p>
          <Image src="/images/service-lift.webp" alt="Liftin kartla idarəsi" width={1200} height={800} className="rounded-xl shadow" />
        </section>
      </div>
    </main>
  );
}

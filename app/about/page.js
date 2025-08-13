export const metadata = {
  title: 'Haqqımızda — Smart Kilid Sistemləri',
  description: 'Smart kilid və giriş nəzarəti üzrə komanda və dəyərlərimiz.',
  alternates: { canonical: '/about' },
};
import Image from 'next/image';
export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-semibold mb-6">Haqqımızda</h1>
      <p className="mb-8">Biz təhlükəsizlik və avtomatlaşdırma üzrə həllər təqdim edirik.</p>
      <Image src="/images/about-team.webp" alt="Komandamız" width={1200} height={800} className="rounded-xl shadow" />
    </main>
  );
}

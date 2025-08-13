export const metadata = {
  title: 'Haqqımızda — Smart Kilid Sistemləri',
  description: 'Təhlükəsizlik və avtomatlaşdırma üzrə komandamız və dəyərlərimiz.',
  alternates: { canonical: '/about' },
  openGraph: {
    type: 'website',
    url: 'https://smartkilid.az/about',
    title: 'Haqqımızda — Smart Kilid Sistemləri',
    description: 'Təhlükəsizlik və avtomatlaşdırma üzrə komandamız və dəyərlərimiz.',
    images: [{ url: '/images/about-team.webp', width: 1200, height: 630, alt: 'Komandamız' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Haqqımızda — Smart Kilid Sistemləri',
    description: 'Təhlükəsizlik və avtomatlaşdırma üzrə komandamız və dəyərlərimiz.',
    images: ['/images/about-team.webp']
  }
};

import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-semibold mb-6">Haqqımızda</h1>
      <p className="mb-8">Biz təhlükəsizlik və avtomatlaşdırma üzrə həllər təqdim edirik.</p>
      <Image 
        src="/images/about-team.webp" 
        alt="Komandamız" 
        width={800} 
        height={600} 
        className="rounded-xl shadow" 
        sizes="(max-width: 768px) 100vw, 800px"
      />
    </main>
  );
}

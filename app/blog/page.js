export const metadata = {
  title: 'Smart Kilid və Access Control Blog - Bakıda Təhlükəsizlik Sistemləri | Smartkilid.az',
  description: 'Smart kilid, access control, turniket sistemi və elektron kilid haqqında faydalı məlumatlar. Bakıda təhlükəsizlik sistemləri üzrə peşəkar məsləhətlər.',
  alternates: { canonical: '/blog' },
}

const blogPosts = [
  {
    slug: 'smart-kilid-secimi',
    title: 'Bakıda Smart Kilid Seçimi: Nəyi Nəzərə Almaq Lazımdır?',
    excerpt: 'Smart kilid seçərkən texniki xüsusiyyətlər, təhlükəsizlik səviyyəsi və quraşdırma xidməti haqqında ətraflı məlumat.',
    date: '2024-01-15',
    readTime: '5 dəqiqə',
    category: 'Smart Kilid'
  },
  {
    slug: 'access-control-avantajlari',
    title: 'Access Control Sistemlərinin Biznesə Avantajları',
    excerpt: 'Ofis və müəssisələrdə access control sistemlərinin tətbiqi ilə əldə edilən faydalar və təhlükəsizlik təminatı.',
    date: '2024-01-10',
    readTime: '7 dəqiqə',
    category: 'Access Control'
  },
  {
    slug: 'turniket-sistemi-tipleri',
    title: 'Turniket Sistemlərinin Növləri və Tətbiq Sahələri',
    excerpt: 'Tripod, qapı və tam boy turniketlər. Hansı obyekt üçün hansı turniket sistemi uyğundur?',
    date: '2024-01-05',
    readTime: '6 dəqiqə',
    category: 'Turniket'
  },
  {
    slug: 'kartli-lift-sistemi',
    title: 'Kartlı Lift Sistemi: Yaşayış Kompleksləri üçün Həll',
    excerpt: 'Kartlı lift sistemlərinin yaşayış binalarında tətbiqi və təhlükəsizlik təminatı.',
    date: '2024-01-01',
    readTime: '4 dəqiqə',
    category: 'Lift Sistemi'
  }
]

export default function BlogPage() {
  return (
    <main className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Smart Kilid və Access Control Blog</h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Bakıda <strong>smart kilid</strong>, <strong>access control</strong> və <strong>turniket sistemi</strong> haqqında faydalı məlumatlar və peşəkar məsləhətlər
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.slug} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-sm">{post.readTime}</span>
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <time className="text-sm text-gray-500">{post.date}</time>
                  <a 
                    href={`/blog/${post.slug}`}
                    className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                  >
                    Ətraflı oxu →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-semibold mb-4">Layihəniz üçün Peşəkar Məsləhət</h2>
            <p className="text-lg mb-6 opacity-90">
              Bakıda <strong>smart kilid</strong>, <strong>access control</strong> və <strong>turniket sistemi</strong> layihələriniz üçün pulsuz konsultasiya
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/994552370200"
                className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                WhatsApp Konsultasiya
              </a>
              <a 
                href="/contact"
                className="bg-black/20 px-6 py-3 rounded-lg font-semibold hover:bg-black/30 transition-colors"
              >
                Əlaqə Forması
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

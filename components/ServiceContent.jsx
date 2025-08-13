import Image from 'next/image'

/** Xidmətlər kataloqu — SEO üçün uzun təsvirlər, xüsusiyyətlər, FAQ */
export const SERVICES = [
  {
    slug: 'smart-lock',
    title: 'Smart Kilidlər',
    heroImg: '/images/service-smart-lock.webp',
    short: 'Açar daşımağa ehtiyac yoxdur — qapını telefon, kart və ya kodla açın.',
    intro: `Mənzillər, ofislər və müəssisələr üçün ağıllı giriş sistemi. Onlayn/offsayt idarəetmə, müvəqqəti kodlar, loglama və uzaqdan icazələr.`,
    features: [
      'Mobil tətbiq, kart, şifrə və biometrika ilə giriş',
      'Uzaqdan açma/qapama və vaxt məhdudiyyətləri',
      'Loglama: kim, nə vaxt, hansı qapıdan keçdi',
      'Mexaniki emergency açar dəstəyi',
    ],
    usecases: [
      'Mənzil və ofis girişində rahat idarəetmə',
      'Airbnb/qonaq evi üçün müvəqqəti kodlar',
      'Kiçik ofislərdə HR olmadan davamiyyət izləmə',
    ],
    faq: [
      ['Elektrik kəsiləndə nə olur?', 'Mexaniki açar və ya UPS dəstəyi ilə giriş mümkündür.'],
      ['Mövcud qapıya quraşdırıla bilər?', 'Bəli, çoxu standart qapı ilə uyğun gəlir.'],
    ],
    keywords: ['smart kilid', 'elektron kilid', 'ağıllı qapı'],
  },
  {
    slug: 'access-control',
    title: 'Access Control Sistemləri',
    heroImg: '/images/service-access-control.webp',
    short: 'Giriş-çıxışı kart/biometrika ilə idarə edin, hesabatları mərkəzdən alın.',
    intro: `Ofis, zavod və ticarət obyektlərində giriş icazələri, zonalar və işçi davamiyyətini mərkəzləşdirilmiş platformada idarə edin.`,
    features: [
      'Kart, barmaq izi və üz tanıma dəstəyi',
      'Zonalar, cədvəllər, qonaq profili',
      'Turniket, şlaqbaum, lift ilə inteqrasiya',
      'Hesabatlar və real-time monitorinq',
    ],
    usecases: [
      'Ofislərdə şöbə/zona əsaslı icazələr',
      'Müəssisələrdə növbə və davamiyyət hesabatı',
      'Obyektlərdə ziyarətçi idarəetməsi',
    ],
    faq: [
      ['Bulud yoxsa lokaldır?', 'Hər iki variant mövcuddur, ehtiyacınıza uyğun seçirik.'],
      ['CRM/HR ilə inteqrasiya?', 'REST API vasitəsilə inteqrasiya mümkündür.'],
    ],
    keywords: ['access control', 'davamiyyət', 'turniket inteqrasiya'],
  },
  {
    slug: 'turnstile',
    title: 'Turniket Sistemləri',
    heroImg: '/images/service-turnstile.webp',
    short: 'Ofis və obyektlər üçün təhlükəsiz giriş-buraxılış həlli.',
    intro: `Tripod, qapı, tam boy turniketlər — kart/biometrika/QR ilə inteqrasiya. Axını idarə edin, sıxlığın qarşısını alın.`,
    features: ['Kart/biometrika/QR modulları', 'İkitərəfli keçid, anti-passback', 'Paslanmayan polad korpus'],
    usecases: ['Ofislər', 'İstehsal sahələri', 'Təhsil müəssisələri'],
    faq: [['Zəmanət nə qədərdir?', 'Adətən 12–24 ay, layihəyə görə dəyişir.']],
    keywords: ['turniket', 'giriş sistemləri'],
  },
  {
    slug: 'barrier',
    title: 'Şlaqbaum Sistemləri',
    heroImg: '/images/service-barrier.webp',
    short: 'Dayanacaq və ərazi girişlərini avtomatlaşdırın.',
    intro: `Pult, UHF tag, nömrə tanıma (ANPR) və access control ilə inteqrasiya olunan şlaqbaum həllləri.`,
    features: ['ANPR inteqrasiyası', 'UHF uzun məsafəli oxu', 'Təcili rejim və təhlükəsizlik sensorları'],
    usecases: ['Biznes mərkəzləri', 'Yaşayış kompleksləri', 'Məhdud girişli ərazilər'],
    faq: [['Soyuq/isti iqlimə davamlıdır?', 'IP54+ sinif, iqlimə uyğun model seçirik.']],
    keywords: ['şlaqbaum', 'dayanacaq idarəetmə'],
  },
  {
    slug: 'lift',
    title: 'Kartla Lift İdarəetmə',
    heroImg: '/images/service-lift.webp',
    short: 'Mərtəbə üzrə giriş icazələrini idarə edin.',
    intro: `Sakin və ya əməkdaş yalnız icazə verilən mərtəbəyə çıxa bilir. Access control və domofonlarla birlikdə işləyir.`,
    features: ['Mərtəbə əsaslı icazə', 'Zaman cədvəlləri', 'Brend lift panelləri ilə uyğunluq'],
    usecases: ['Yaşayış binaları', 'Otel və biznes mərkəzləri'],
    faq: [['Bütün liftlərdə olur?', 'Əksər brendlərlə uyğundur, yerdə baxış tələb oluna bilər.']],
    keywords: ['lift kart sistemi', 'mərtəbə icazəsi'],
  },
  {
    slug: 'biometrics',
    title: 'Biometrik Giriş',
    heroImg: '/images/service-biometrics.webp',
    short: 'Yüksək dəqiqliklə üz/barmaq izi identifikasiyası.',
    intro: `Biometrika ilə yalnız icazəli şəxslər daxil olur. Sürətli keçid, dövri hesabat, kart/kodla kombinə edilə bilər.`,
    features: ['Üz/barmaq izi, palma damarı', 'Anti-spoofing alqoritmləri', 'Offline işləmə rejimi'],
    usecases: ['Ofis/istehsal girişləri', 'Datacenter və kritik zonalar'],
    faq: [['Məlumat harada saxlanır?', 'Şirkət siyasətinə görə local və ya şifrəli bazada.']],
    keywords: ['biometrika', 'üz tanıma', 'barmaq izi'],
  },
  {
    slug: 'gate',
    title: 'Elektron Darvaza',
    heroImg: '/images/service-gate.webp',
    short: 'Pult, tətbiq və ya nömrə tanıma ilə idarəetmə.',
    intro: `Elektron darvaza motorları, məsafədən idarəetmə modulları və təhlükəsizlik sensorları ilə tam həll.`,
    features: ['Wi-Fi/4G modul', 'Hərəkət sensorları', 'Manual açma'],
    usecases: ['Private həyətlər', 'Anbar/loqistika girişləri'],
    faq: [['Elektrik kəsiləndə?', 'Manual açma və ya UPS dəstəyi ilə.']],
    keywords: ['elektron darvaza', 'avtomatik qapı'],
  },
  {
    slug: 'keypad',
    title: 'Kodlayıcı Sistemlər',
    heroImg: '/images/service-keypad.webp',
    short: 'Pin, kart və biometrika kombinasiyası.',
    intro: `Sadə və sərfəli giriş üçün kodlayıcı klaviaturalar — müvəqqəti kodlar, vaxt məhdudiyyəti və loglama.`,
    features: ['Müvəqqəti kodlar', 'Zaman cədvəli', 'Suya/toza davamlı korpus (IP65)'],
    usecases: ['Kiçik ofislər', 'Anbar və yardımçı otaqlar'],
    faq: [['Tək qapıda işləyir?', 'Bəli, tək qapı və ya çoxqapı sistemlərinə uyğundur.']],
    keywords: ['kodlu qapı', 'klaviatura giriş sistemi'],
  },
]

export function getService(slug) {
  return SERVICES.find(s => s.slug === slug)
}

export default function ServiceContent({ slug }) {
  const svc = getService(slug)
  if (!svc) return <p className="text-red-600">Xidmət tapılmadı.</p>

  return (
    <article className="space-y-10">
      {/* Başlıq */}
      <header className="space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{svc.title}</h1>
        <p className="text-lg text-gray-600 max-w-3xl">{svc.short}</p>
      </header>

      {/* Hero şəkil — məhdud en + səliqəli */}
      <div className="mx-auto max-w-4xl">
        <div className="relative w-full overflow-hidden rounded-2xl shadow-lg">
          <Image
            src={svc.heroImg}
            alt={svc.title}
            width={1200}
            height={675}
            className="h-auto w-full object-cover"
            sizes="(min-width: 1280px) 1024px, (min-width: 768px) 768px, 100vw"
            priority
          />
        </div>
      </div>

      {/* Intro + Features */}
      <section className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-3">Xidmət haqqında</h2>
          <p className="text-gray-700 leading-relaxed">{svc.intro}</p>
          {svc.usecases?.length ? (
            <>
              <h3 className="text-xl font-semibold mt-6 mb-2">İstifadə ssenariləri</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                {svc.usecases.map((u, i) => <li key={i}>{u}</li>)}
              </ul>
            </>
          ) : null}
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-3">Xüsusiyyətlər</h2>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            {svc.features.map((f, i) => <li key={i}>{f}</li>)}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      {svc.faq?.length ? (
        <section>
          <h2 className="text-2xl font-semibold mb-4">Sual–Cavab</h2>
          <div className="space-y-2">
            {svc.faq.map(([q, a], i) => (
              <details key={i} className="group rounded-lg border p-4">
                <summary className="cursor-pointer font-medium">{q}</summary>
                <p className="mt-2 text-gray-700">{a}</p>
              </details>
            ))}
          </div>
        </section>
      ) : null}

      {/* Güclü CTA */}
      <section className="rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-6 md:p-8 text-white">
        <h2 className="text-2xl font-semibold mb-2">Layihəniz üçün məsləhət alaq</h2>
        <p className="opacity-90 mb-4">Ödənişsiz konsultasiya və yerində baxış mümkündür. WhatsApp və ya email ilə zəng edin.</p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a href="https://wa.me/994552370200" className="bg-white text-blue-700 px-5 py-3 rounded-lg text-center font-semibold">WhatsApp (055)</a>
          <a href="https://wa.me/994708001000" className="bg-white/15 px-5 py-3 rounded-lg text-center font-semibold">WhatsApp (070)</a>
          <a href="/#contact" className="bg-black/20 px-5 py-3 rounded-lg text-center">Əlaqə forması</a>
        </div>
      </section>
    </article>
  )
}

import Image from 'next/image'

/** Xidmətlər kataloqu — SEO üçün uzun təsvirlər, xüsusiyyətlər, FAQ */
export const SERVICES = [
  {
    slug: 'smart-lock',
    title: 'Smart Kilidlər',
    heroImg: '/images/service-smart-lock.webp',
    short: 'Açar daşımağa ehtiyac yoxdur — qapını telefon, kart və ya kodla açın. Bakıda smart kilid satışı və quraşdırma.',
    intro: `Mənzillər, ofislər və müəssisələr üçün ağıllı giriş sistemi. Onlayn/offsayt idarəetmə, müvəqqəti kodlar, loglama və uzaqdan icazələr. Bakıda smart kilid sistemlərinin satışı və peşəkar quraşdırma xidməti təqdim edirik.`,
    features: [
      'Mobil tətbiq, kart, şifrə və biometrika ilə giriş',
      'Uzaqdan açma/qapama və vaxt məhdudiyyətləri',
      'Loglama: kim, nə vaxt, hansı qapıdan keçdi',
      'Mexaniki emergency açar dəstəyi',
      'Bakıda 24/7 texniki dəstək və quraşdırma',
      'Zəmanətli smart kilid sistemləri'
    ],
    usecases: [
      'Mənzil və ofis girişində rahat idarəetmə',
      'Airbnb/qonaq evi üçün müvəqqəti kodlar',
      'Kiçik ofislərdə HR olmadan davamiyyət izləmə',
      'Bakıda villa və yaşayış kompleksləri',
      'Ofis binaları və biznes mərkəzləri'
    ],
    faq: [
      ['Elektrik kəsiləndə nə olur?', 'Mexaniki açar və ya UPS dəstəyi ilə giriş mümkündür.'],
      ['Mövcud qapıya quraşdırıla bilər?', 'Bəli, çoxu standart qapı ilə uyğun gəlir.'],
      ['Bakıda quraşdırma xidməti var?', 'Bəli, Bakı və ətraf ərazilərdə peşəkar quraşdırma xidməti göstəririk.'],
      ['Zəmanət müddəti nə qədərdir?', 'Bütün smart kilid sistemlərimizə 12-24 ay zəmanət veririk.']
    ],
    keywords: ['smart kilid', 'elektron kilid', 'ağıllı qapı', 'Bakı smart kilid', 'smart kilid satışı', 'smart kilid quraşdırma', 'elektron kilid Bakı', 'ağıllı qapı sistemi'],
  },
  {
    slug: 'access-control',
    title: 'Access Control Sistemləri',
    heroImg: '/images/service-access-control.webp',
    short: 'Giriş-çıxışı kart/biometrika ilə idarə edin, hesabatları mərkəzdən alın. Bakıda access control sistemləri.',
    intro: `Ofis, zavod və ticarət obyektlərində giriş icazələri, zonalar və işçi davamiyyətini mərkəzləşdirilmiş platformada idarə edin. Bakıda access control sistemlərinin satışı və quraşdırılması üzrə peşəkar xidmət.`,
    features: [
      'Kart, barmaq izi və üz tanıma dəstəyi',
      'Zonalar, cədvəllər, qonaq profili',
      'Turniket, şlaqbaum, lift ilə inteqrasiya',
      'Hesabatlar və real-time monitorinq',
      'Bakıda 24/7 texniki dəstək',
      'Mərkəzləşdirilmiş idarəetmə sistemi'
    ],
    usecases: [
      'Ofislərdə şöbə/zona əsaslı icazələr',
      'Müəssisələrdə növbə və davamiyyət hesabatı',
      'Obyektlərdə ziyarətçi idarəetməsi',
      'Bakıda sənaye müəssisələri',
      'Ticarət mərkəzləri və ofis binaları'
    ],
    faq: [
      ['Bulud yoxsa lokaldır?', 'Hər iki variant mövcuddur, ehtiyacınıza uyğun seçirik.'],
      ['CRM/HR ilə inteqrasiya?', 'REST API vasitəsilə inteqrasiya mümkündür.'],
      ['Bakıda quraşdırma mümkündür?', 'Bəli, Bakı və ətraf ərazilərdə tam quraşdırma xidməti.'],
      ['Neçə istifadəçi dəstəklənir?', 'Sistemdə 1000-dən çox istifadəçi qeydiyyatı mümkündür.']
    ],
    keywords: ['access control', 'işçidavamiyyəti quraşdırılma', 'turniket quraşdırılması', 'Bakı access control', 'elektron giriş sistemi', 'davamiyyət sistemi', 'kart sistemi Bakı'],
  },
  {
    slug: 'turnstile',
    title: 'Turniket Sistemləri',
    heroImg: '/images/service-turnstile.webp',
    short: 'Ofis və obyektlər üçün təhlükəsiz giriş-buraxılış həlli. Bakıda turniket sistemləri.',
    intro: `Tripod, qapı, tam boy turniketlər — kart/biometrika/QR ilə inteqrasiya. Axını idarə edin, sıxlığın qarşısını alın. Bakıda turniket sistemlərinin satışı və quraşdırılması üzrə keyfiyyətli xidmət.`,
    features: ['Kart/biometrika/QR modulları', 'İkitərəfli keçid, anti-passback', 'Paslanmayan polad korpus'],
    usecases: ['Ofislər', 'İstehsal sahələri', 'Təhsil müəssisələri'],
    faq: [
      ['Zəmanət nə qədərdir?', 'Adətən 12–24 ay, layihəyə görə dəyişir.'],
      ['Bakıda quraşdırma xidməti var?', 'Bəli, Bakı və ətraf ərazilərdə peşəkar quraşdırma.'],
      ['Neçə nəfər keçid edə bilər?', 'Saatda 1000-dən çox keçid mümkündür.']
    ],
    keywords: ['turniket', 'giriş sistemləri', 'Bakı turniket qiyməti', 'turniket satışı', 'turniket quraşdırma', 'giriş turniketi sistemlər'],
  },
  {
    slug: 'barrier',
    title: 'Şlaqbaum Sistemləri',
    heroImg: '/images/service-barrier.webp',
    short: 'Dayanacaq və ərazi girişlərini avtomatlaşdırın. Bakıda şlaqbaum sistemləri.',
    intro: `Pult, UHF tag, nömrə tanıma (ANPR) və access control ilə inteqrasiya olunan şlaqbaum həllləri. Bakıda şlaqbaum sistemlərinin satışı və quraşdırılması üzrə etibarlı xidmət.`,
    features: ['ANPR inteqrasiyası', 'UHF uzun məsafəli oxu', 'Təcili rejim və təhlükəsizlik sensorları'],
    usecases: ['Biznes mərkəzləri', 'Yaşayış kompleksləri', 'Məhdud girişli ərazilər'],
    faq: [
      ['Soyuq/isti iqlimə davamlıdır?', 'IP54+ sinif, iqlimə uyğun model seçirik.'],
      ['Bakıda quraşdırma mümkündür?', 'Bəli, Bakı və ətraf ərazilərdə tam quraşdırma.'],
      ['Neçə avtomobil dəstəklənir?', 'Saatda 500-dən çox avtomobil keçidi mümkündür.']
    ],
    keywords: ['şlaqbaum qiymeti', 'parking şlaqbaum sistemi', 'Bakı şlaqbaum', 'şlaqbaum satışı', 'avtomatik qapılar', 'Bariyer sistemləri'],
  },
  {
    slug: 'lift',
    title: 'Kartla Lift İdarəetmə',
    heroImg: '/images/service-lift.webp',
    short: 'Mərtəbə üzrə giriş icazələrini idarə edin. lift kart sistemi.Bakıda lift kart sistemlərinin quraşdırılması.',
    intro: `Sakin və ya əməkdaş yalnız icazə verilən mərtəbəyə çıxa bilir. Access control və domofonlarla birlikdə işləyir. Bakıda lift kart sistemlərinin satışı və quraşdırılması üzrə peşəkar xidmət.`,
    features: ['Mərtəbə əsaslı icazə', 'Zaman cədvəlləri', 'Brend lift panelləri ilə uyğunluq'],
    usecases: ['Yaşayış binaları', 'Otel və biznes mərkəzləri'],
    faq: [
      ['Bütün liftlərdə olur?', 'Əksər brendlərlə uyğundur, yerdə baxış tələb oluna bilər.'],
      ['Bakıda quraşdırma xidməti var?', 'Bəli, Bakı və ətraf ərazilərdə peşəkar quraşdırma.'],
      ['Neçə mərtəbə dəstəklənir?', '100-dən çox mərtəbəli binalarda işləyir.']
    ],
    keywords: ['lift kart sistemi', 'mərtəbə icazəsi', 'Bakı lift sistemi', 'lift kart', 'mərtəbə idarəetmə', 'lift access control'],
  },
  {
    slug: 'biometrics',
    title: 'Biometrik Giriş',
    heroImg: '/images/service-biometrics.webp',
    short: 'Yüksək dəqiqliklə üz/barmaq izi identifikasiyası. Bakıda biometrik sistemlər.',
    intro: `Biometrika ilə yalnız icazəli şəxslər daxil olur. Sürətli keçid, dövri hesabat, kart/kodla kombinə edilə bilər. Bakıda biometrik giriş sistemlərinin satışı və quraşdırılması üzrə keyfiyyətli xidmət.`,
    features: ['Üz/barmaq izi, palma damarı', 'Anti-spoofing alqoritmləri', 'Offline işləmə rejimi'],
    usecases: ['Ofis/istehsal girişləri', 'Datacenter və kritik zonalar'],
    faq: [
      ['Məlumat harada saxlanır?', 'Şirkət siyasətinə görə local və ya şifrəli bazada.'],
      ['Bakıda quraşdırma mümkündür?', 'Bəli, Bakı və ətraf ərazilərdə peşəkar quraşdırma.'],
      ['Dəqiqlik faizi nə qədərdir?', '99.9% dəqiqlik ilə işləyir.']
    ],
    keywords: ['biometrik giriş sistemləri', 'üz tanıma aparatı', 'barmaq izi cihazı', 'Bakı biometrik qapı sistemləri', 'biometrik giriş', 'üz tanıma sistemi', 'barmaq izi sistemi'],
  },
  {
    slug: 'gate',
    title: 'Elektron Qapılar',
    heroImg: '/images/service-gate.webp',
    short: 'Pult, tətbiq və ya nömrə tanıma ilə idarəetmə. Bakıda elektron qapılar. Avtomatiq Jaluz qapıları',
    intro: `Elektron darvaza motorları, məsafədən idarəetmə modulları və təhlükəsizlik sensorları ilə tam həll. Bakıda elektron qapı sistemlərinin satışı və quraşdırılması üzrə etibarlı xidmət.`,
    features: ['Elektron kilid', 'Hərəkət sensorları', 'Manual açma', 'Manual açma', 'Maqnit kilid'],
    usecases: ['Ofis qapıları', 'Anbar/loqistika girişləri'],
    faq: [
      ['Elektrik kəsiləndə?', 'Manual açma və ya UPS dəstəyi ilə.'],
      ['Bakıda quraşdırma xidməti var?', 'Bəli, Bakı və ətraf ərazilərdə peşəkar quraşdırma.'],
      ['Neçə metr məsafədən idarə olunur?', '100 metrə qədər məsafədən idarəetmə mümkündür.']
    ],
    keywords: ['elektron darvaza', 'avtomatik qapı', 'Bakı elektron darvaza', 'darvaza sistemi', 'avtomatik darvaza', 'elektron qapı'],
  },
  {
    slug: 'keypad',
    title: 'Kodlayıcı Sistemlər',
    heroImg: '/images/service-keypad.webp',
    short: 'Pin, kart və biometrika kombinasiyası. Bakıda kodlayıcı sistemlər.',
    intro: `Sadə və sərfəli giriş üçün kodlayıcı klaviaturalar — müvəqqəti kodlar, vaxt məhdudiyyəti və loglama. Bakıda kodlayıcı sistemlərin satışı və quraşdırılması üzrə keyfiyyətli xidmət.`,
    features: ['Müvəqqəti kodlar', 'Zaman cədvəli', 'Suya/toza davamlı korpus (IP65)'],
    usecases: ['Kiçik ofislər', 'Anbar və yardımçı otaqlar'],
    faq: [
      ['Tək qapıda işləyir?', 'Bəli, tək qapı və ya çoxqapı sistemlərinə uyğundur.'],
      ['Bakıda quraşdırma mümkündür?', 'Bəli, Bakı və ətraf ərazilərdə peşəkar quraşdırma.'],
      ['Neçə kod dəstəklənir?', '1000-dən çox fərqli kod qeydiyyatı mümkündür.']
    ],
    keywords: ['kodlu qapı', 'klaviatura giriş sistemi', 'Bakı kodlayıcı', 'kod sistemi', 'klaviatura sistemi', 'pin sistemi'],
  },
  {
    slug: 'intercom',
    title: 'Domofon Sistemləri',
    heroImg: '/images/service-intercom.webp',
    short: 'Video və audio domofon sistemləri ilə təhlükəsiz giriş. Bakıda domofon sistemləri.',
    intro: `Müasir domofon sistemləri yaşayış kompleksləri, villalar və ofis binaları üçün ən yaxşı təhlükəsizlik həllidir. Video görüntü, yüksək keyfiyyətli audio əlaqə və smart telefon inteqrasiyası ilə girişləri tam idarə edin. Bakıda domofon sistemlərinin satışı və quraşdırılması üzrə peşəkar xidmət təqdim edirik.`,
    features: [
      'HD video görüntü və yüksək keyfiyyətli audio',
      'Smart telefon tətbiqi ilə uzaqdan idarəetmə',
      'Çoxqapı və çoxmərtəbə dəstəyi',
      'Gecə görüşü və hərəkət sensorları',
      'PoE (Power over Ethernet) dəstəyi',
      'Cloud və local video qeydiyyatı',
      'QR kod və NFC inteqrasiyası',
      'Təcili çağırış düyməsi'
    ],
    usecases: [
      'Yaşayış kompleksləri və çoxmərtəbəli binalar',
      'Villa və özəl evlər',
      'Ofis binaları və biznes mərkəzləri',
      'Otel və sanatoriya müəssisələri',
      'Təhsil müəssisələri və xəstəxanalar'
    ],
    faq: [
      ['Mövcud binaya quraşdırıla bilər?', 'Bəli, mövcud elektrik və şəbəkə infrastrukturu ilə uyğunlaşdırılır.'],
      ['Smart telefon tətbiqi pulsuzdur?', 'Bəli, əsas funksiyalar pulsuz, əlavə xüsusiyyətlər üçün kiçik ödəniş tələb oluna bilər.'],
      ['Video qeydiyyatı nə qədər saxlanılır?', 'Lokal qeydiyyat 30 gün, cloud qeydiyyat 7-90 gün arası seçilə bilər.'],
      ['Elektrik kəsiləndə işləyir?', 'UPS dəstəyi ilə 2-4 saat işləmə mümkündür.'],
      ['Çoxdilli dəstək var?', 'Bəli, Azərbaycan, Rus və İngilis dilləri dəstəklənir.'],
      ['Bakıda quraşdırma xidməti var?', 'Bəli, Bakı və ətraf ərazilərdə peşəkar quraşdırma xidməti.'],
      ['Neçə mərtəbə dəstəklənir?', '100-dən çox mərtəbəli binalarda işləyir.']
    ],
    keywords: ['domofon', 'video domofon', 'audio domofon', 'yaşayış kompleksi domofon', 'villa domofon', 'ofis domofon', 'smart domofon', 'HD domofon', 'PoE domofon', 'cloud domofon', 'domofon quraşdırma', 'domofon satışı', 'Bakı domofon', 'Bakı domofon sistemi', 'domofon quraşdırma Bakı', 'video domofon Bakı'],
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
            width={800}
            height={450}
            className="h-auto w-full object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 800px"
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

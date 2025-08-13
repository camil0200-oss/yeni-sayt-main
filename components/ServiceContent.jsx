import Image from 'next/image'

const data = {
  'smart-lock': {
    title: 'Smart Kilid',
    img: '/images/service-smart-lock.webp',
    alt: 'Telefonla idarə olunan smart kilid',
    seo: [
      'Telefonla idarəetmə, uzaqdan açma/bağlama, birdəfəlik kodlar.',
      'Məkanlar: mənzillər, ofislər, icarə obyektləri.',
      'Quraşdırma: mövcud qapılara uyğunlaşdırma, zəmanət və servis.'
    ]
  },
  'access-control': {
    title: 'Access Control',
    img: '/images/service-access-control.webp',
    alt: 'Kart və biometrik giriş nəzarəti',
    seo: [
      'Kart, barmaq izi, üz tanıma ilə təhlükəsiz giriş.',
      'İcazə səviyyələri, loglama, turniket/lift inteqrasiyası.',
      'Şirkətlər və yaşayış kompleksləri üçün.'
    ]
  },
  'barrier': {
    title: 'Şlaqbaum',
    img: '/images/service-barrier.webp',
    alt: 'Avtomobil keçid nəzarəti',
    seo: [
      'Avtopark, yaşayış kompleksləri üçün giriş-çıxış nəzarəti.',
      'Uzaqdan idarəetmə, plaka tanıma inteqrasiyası.',
      'Zəmanət və servis dəstəyi.'
    ]
  },
  'turnstile': {
    title: 'Turniket',
    img: '/images/service-turnstile.webp',
    alt: 'Piyada keçid turniketi',
    seo: [
      'Ofis, kampus, fabriklər üçün piyada axınının idarəsi.',
      'Kart/biometrik modullarla tam inteqrasiya.',
      'Yüksək davamlılıq və servis.'
    ]
  },
  'lift': {
    title: 'Lift Kart Sistemi',
    img: '/images/service-lift.webp',
    alt: 'Kartla mərtəbə nəzarəti',
    seo: [
      'Mərtəbə əsaslı icazələr, qonaq/restriksiya qaydaları.',
      'Access control ilə vahid idarəetmə paneli.',
      'Yeni və mövcud lift markaları ilə inteqrasiya.'
    ]
  },
  'biometrics': {
    title: 'Biometrika',
    img: '/images/service-biometrics.webp',
    alt: 'Barmaq izi və üz tanıma',
    seo: [
      'Yüksək dəqiqlik, sürətli keçid.',
      'Daxili/external terminallar, loglama.',
      'Müxtəlif cihazlarla uyğunluq.'
    ]
  },
  'gate': {
    title: 'Elektron Darvaza',
    img: '/images/service-gate.webp',
    alt: 'Elektron darvaza idarəetməsi',
    seo: [
      'Pult, tətbiq və ya nömrə ilə idarəetmə.',
      'Şlaqbaum və access control ilə birlikdə.',
      'Mühafizə sistemi inteqrasiyası.'
    ]
  },
  'keypad': {
    title: 'Klaviş İdarəetmə',
    img: '/images/service-keypad.webp',
    alt: 'Kod klaviş paneli',
    seo: [
      'Birdəfəlik/vaxt məhdud kodlar.',
      'Qapı, ofis, anbar girişləri üçün praktik həll.',
      'Məlumatların təhlükəsiz saxlanması.'
    ]
  }
}

export function getService(slug){ return data[slug] || null }

export default function ServiceContent({ slug }) {
  const item = getService(slug)
  if(!item) return <p>Xidmət tapılmadı.</p>
  return (
    <div className="space-y-4">
      <Image src={item.img} alt={item.alt} width={1200} height={800} className="rounded-xl shadow" />
      <div className="prose max-w-none dark:prose-invert">
        <p><strong>{item.title}</strong> — təhlükəsizlik və rahatlıq üçün müasir həll.</p>
        <ul>
          {item.seo.map((t,i)=>(<li key={i}>{t}</li>))}
        </ul>
      </div>
    </div>
  )
}

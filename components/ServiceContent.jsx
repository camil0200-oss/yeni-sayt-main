import Image from 'next/image'
import dynamic from 'next/dynamic'

// Gallery component optional — guard import to avoid build errors if missing
let Gallery = null
try {
  // Optional: only used when present; dynamic import removed to keep build deterministic
  // If you add a heavy Gallery component, prefer dynamic import with ssr:false
  // Gallery = dynamic(() => import('./Gallery'), { ssr: false, loading: () => null })
} catch (e) {
  Gallery = null
}

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
    synonyms: ['smart kilid', 'elektron kilid', 'ağıllı qapı']
  },
  {
    slug: 'access-control',
    title: 'Access Control Sistemləri',
    heroImg: '/images/service-access-control.webp',
    short: 'Giriş-çıxışı kart/biometrika, barmaq izi və üz tanıma ilə idarə edin, hesabatları mərkəzdən alın. Bakıda access control satışı və quraşdırma.',
    intro: `Bakıda access control satışı və quraşdırılması üzrə peşəkar xidmət. Müasir access control sistemləri ofislər, zavod və ticarət obyektlərində giriş icazələri, zonalar və işçi davamiyyətini mərkəzləşdirilmiş platformada idarə etməyə imkan verir. Access control quraşdırılması zamanı kart, barmaq izi və üz tanıma texnologiyaları birləşdirilərək maksimum təhlükəsizlik təmin edilir. Access control servisi və təmiri daxil olmaqla bütün xidmətləri təqdim edirik. Zonalar, cədvəllər və qonaq profili modulları ilə müxtəlif şəxslərə fərqli icazələr verilə bilər. Turniket, şlaqbaum və lift ilə tam inteqrasiya sayəsində bina daxilində hər hərəkət nəzarət altında saxlanılır. Real-time monitorinq və hesabat sistemləri ilə işçi davamiyyəti, ziyarətçi qeydiyyatı və təhlükəsizlik hadisələri üzrə ətraflı məlumat əldə edilir. Mərkəzləşdirilmiş idarəetmə paneli vasitəsilə bütün giriş-çıxış nöqtələri tək yerden idarə olunur. Access control qiymətləri barədə ətraflı məlumat üçün bizimlə əlaqə saxlayın.`,
    features: [
      'Kart, barmaq izi və üz tanıma dəstəyi',
      'Zonalar, cədvəllər, qonaq profili',
      'Turniket, şlaqbaum, lift ilə inteqrasiya',
      'Hesabatlar və real-time monitorinq',
      'Bakıda 24/7 texniki dəstək və servis',
      'Mərkəzləşdirilmiş idarəetmə sistemi',
      'Zəmanətli access control satışı və quraşdırılması'
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
    keywords: ['access control satışı', 'access control quraşdırılması', 'access control servisi', 'access control təmiri', 'access control qiymətləri', 'Bakı access control', 'access control', 'davamiyyət sistemi', 'giriş sistemi', 'kart sistemi', 'Bakı access control satışı', 'Bakı access control quraşdırma', 'turniket inteqrasiya', 'biometrik access control'],
    synonyms: ['access control', 'giriş sistemi', 'kart sistemi', 'access control sistemləri']
  },
  {
    slug: 'turnstile',
    title: 'Turniket Sistemləri',
    synonyms: ['turniket', 'turnstile', 'giriş turniketi', 'turniket sistemləri'],
    heroImg: '/images/service-turnstile.webp',
    short: 'Ofis və obyektlər üçün təhlükəsiz giriş-buraxılış həlli. Bakıda turniket satışı və quraşdırma.',
    intro: `Bakıda turniket satışı və quraşdırılması üzrə peşəkar xidmət. Müasir turniket sistemləri ofislər, sənaye müəssisələri və ictimai binalar üçün ən etibarlı giriş idarəetmə həllidir. Tripod, qapı və tam boy turniketlər kart, biometrika və QR kod modulları ilə inteqrasiya olunaraq təhlükəsiz və sürətli keçid təmin edir. Turniket quraşdırılması zamanı yalnız icazəli şəxslərin daxil olmasına imkan verilir və axın idarə olunaraq sıxlığın qarşısı alınır. Turniket servisi və təmiri daxil olmaqla bütün xidmətləri təqdim edirik. İkitərəfli keçid nəzarəti və anti-passback funksiyası ilə təhlükəsizlik maksimum səviyyədə təmin edilir. Paslanmayan polad korpus istənilən hava şəraitində uzunmüddətli istifadəyə uyğundur. Saatda 1000-dən çox keçid dəstəyi ilə yüksək axınlı obyektlərdə effektiv işləyir. Turniket qiymətləri barədə ətraflı məlumat üçün bizimlə əlaqə saxlayın.`,
    features: [
      'Kart/biometrika/QR modulları',
      'İkitərəfli keçid, anti-passback',
      'Paslanmayan polad korpus',
      'Saatda 1000+ keçid dəstəyi',
      'Access control sistemi ilə inteqrasiya',
      'Real-time hesabat və monitorinq',
      'Bakıda 24/7 texniki dəstək və servis',
      'Zəmanətli turniket satışı və quraşdırılması'
    ],
    usecases: [
      'Ofislər və biznes mərkəzləri',
      'İstehsal sahələri və zavodlar',
      'Təhsil müəssisələri və məktəblər',
      'Xəstəxana və tibbi müəssisələr',
      'Ticarət mərkəzləri və mağazalar',
      'Otel və restoran müəssisələri',
      'Sənaye müəssisələri və anbarlar'
    ],
    faq: [
      ['Zəmanət nə qədərdir?', 'Adətən 12–24 ay, layihəyə görə dəyişir.'],
      ['Bakıda quraşdırma xidməti var?', 'Bəli, Bakı və ətraf ərazilərdə peşəkar quraşdırma.'],
      ['Neçə nəfər keçid edə bilər?', 'Saatda 1000-dən çox keçid mümkündür.'],
      ['Access control ilə inteqrasiya?', 'Bəli, bütün access control sistemləri ilə uyğun gəlir.'],
      ['Elektrik kəsiləndə işləyir?', 'UPS dəstəyi ilə normal işləmə davam edir.'],
      ['Neçə turniket eyni anda idarə oluna bilər?', 'Sistemdə 50-dən çox turniket eyni anda idarə oluna bilər.']
    ],
    keywords: ['turniket satışı', 'turniket quraşdırılması', 'turniket servisi', 'turniket təmiri', 'turniket qiymətləri', 'Bakı turniket', 'turniket', 'giriş sistemləri', 'giriş turniketi', 'turniket sistemi', 'Bakı turniket satışı', 'Bakı turniket quraşdırma', 'turniket access control', 'turniket biometrik'],
  },
  {
    slug: 'barrier',
    title: 'Şlaqbaum Sistemləri',
    synonyms: ['şlaqbaum', 'shlagbaum', 'barrier', 'şlaqbaum sistemləri'],
    heroImg: '/images/service-barrier.webp',
    short: 'Dayanacaq və ərazi girişlərini avtomatlaşdırın. Bakıda şlaqbaum satışı və quraşdırma.',
    intro: `Bakıda şlaqbaum satışı və quraşdırılması üzrə peşəkar xidmət. Dayanacaq və ərazi girişlərinin avtomatlaşdırılması üçün ən müasir həllər. Pult, UHF tag, nömrə tanıma (ANPR) və access control ilə inteqrasiya olunan şlaqbaum sistemləri. Şlaqbaum quraşdırılması zamanı UHF uzun məsafəli oxu texnologiyası ilə 10-15 metr məsafədən avtomatik keçidə imkan verilir. ANPR (Avtomatik Nömrə Tanıma) inteqrasiyası sayəsində avtomobil nömrələri avtomatik tanınaraq 95%+ dəqiqliklə giriş və ya çıxışa icazə verilir. Şlaqbaum servisi və təmiri daxil olmaqla bütün xidmətləri təqdim edirik. Təcili rejim və təhlükəsizlik sensorları ilə obyekt təhlükəsizliyi maksimum səviyyədə təmin edilir. Saatda 500-dən çox avtomobil keçidi dəstəyi ilə yüksək axınlı dayanacaqlarda effektiv işləyir. Şlaqbaum qiymətləri barədə ətraflı məlumat üçün bizimlə əlaqə saxlayın.`,
    features: [
      'ANPR (Avtomatik Nömrə Tanıma) inteqrasiyası',
      'UHF uzun məsafəli oxu (10-15 metr)',
      'Təcili rejim və təhlükəsizlik sensorları',
      'Saatda 500+ avtomobil keçidi dəstəyi',
      'Access control sistemi ilə tam inteqrasiya',
      'IP54+ su və toz davamlılığı',
      'Bakıda 24/7 texniki dəstək və servis',
      'Zəmanətli şlaqbaum satışı və quraşdırılması'
    ],
    usecases: [
      'Biznes mərkəzləri və ofis binaları',
      'Yaşayış kompleksləri və villalar',
      'Məhdud girişli ərazilər və zavodlar',
      'Otel və restoran dayanacaqları',
      'Xəstəxana və tibbi müəssisələr',
      'Təhsil müəssisələri və məktəblər',
      'Sənaye müəssisələri və anbarlar'
    ],
    faq: [
      ['Soyuq/isti iqlimə davamlıdır?', 'IP54+ sinif, iqlimə uyğun model seçirik.'],
      ['Bakıda quraşdırma mümkündür?', 'Bəli, Bakı və ətraf ərazilərdə tam quraşdırma.'],
      ['Neçə avtomobil dəstəklənir?', 'Saatda 500-dən çox avtomobil keçidi mümkündür.'],
      ['ANPR sistemi nə qədər dəqiqdir?', '95%+ dəqiqlik ilə nömrə tanıma mümkündür.'],
      ['Elektrik kəsiləndə nə olur?', 'Manual açma və ya UPS dəstəyi ilə normal işləmə.'],
      ['Neçə şlaqbaum eyni anda idarə oluna bilər?', 'Sistemdə 20-dən çox şlaqbaum eyni anda idarə oluna bilər.']
    ],
    keywords: ['şlaqbaum satışı', 'şlaqbaum quraşdırılması', 'şlaqbaum servisi', 'şlaqbaum təmiri', 'şlaqbaum qiymətləri', 'Bakı şlaqbaum', 'şlaqbaum', 'dayanacaq idarəetmə', 'avtomatik şlaqbaum', 'dayanacaq sistemi', 'ANPR sistemi', 'UHF şlaqbaum', 'Bakı şlaqbaum satışı', 'Bakı şlaqbaum quraşdırma'],
  },
  {
    slug: 'lift',
    title: 'Lift Kart Sistemi',
    synonyms: ['lift kart sistemi', 'kartla lift', 'lift üçün kart sistemləri', 'liftlərə kart sistemi quraşdırılması', 'kartla lift idarəetmə', 'lift üçün access control'],
    heroImg: '/images/service-lift.webp',
    short: 'Mərtəbə üzrə giriş icazələrini idarə edin. Bakıda lift kart sistemi satışı və quraşdırılması.',
    intro: `Bakıda lift kart sistemi satışı və liftlərə kart sistemi quraşdırılması üzrə peşəkar xidmət. Müasir lift üçün kart sistemləri yaşayış binaları və çoxmərtəbəli komplekslərdə mərtəbə üzrə giriş icazələrini idarə etməyə imkan verir. Lift kart sistemi quraşdırılması zamanı sakin və ya əməkdaş yalnız icazə verilən mərtəbəyə çıxa bilər. Lift avtomatlaşdırma və access control sistemləri ilə tam inteqrasiya. Kartla lift idarəetmə servisi və təmiri daxil olmaqla bütün xidmətləri təqdim edirik. Mərtəbə əsaslı icazə və zaman cədvəlləri ilə hər sakinə və ya işçiyə müxtəlif vaxtlarda fərqli mərtəbələrə çıxış icazəsi verilə bilər. RFID kart və biometrik daxələtmə sistemləri ilə təhlükəsizlik və rahatlıq bir arada təmin edilir. Qonaq və müvəqqəti icazələr vasitəsilə ziyarətçilərə məhdud vaxtlı çıxış icazəsi verilə bilər. Emergency rejim və təcili açma funksiyası ilə fövqəladə hallarda sistem avtomatik olaraq açılır. Lift kart sistemi qiymətləri barədə ətraflı məlumat üçün bizimlə əlaqə saxlayın.`,
    features: [
      'Mərtəbə əsaslı icazə və zaman cədvəlləri',
      'Brend lift panelləri ilə uyğunluq',
      'RFID kart və biometrik daxəletmə sistemləri',
      'Qonaq və müvəqqəti icazələr',
      'Real-time monitorinq və hesabatlar',
      'Emergency rejim və təcili açma',
      'Access control sistemi ilə tam inteqrasiya',
      'Bakıda 24/7 texniki dəstək və quraşdırma',
      'Lift avtomatlaşdırma və smart inteqrasiya',
      'Zəmanətli lift kart sistemi satışı və quraşdırılması'
    ],
    usecases: [
      'Yaşayış binaları və çoxmərtəbəli komplekslər',
      'Otel və biznes mərkəzləri',
      'Xəstəxana və tibbi müəssisələr',
      'Təhsil müəssisələri və məktəblər',
      'Ticaret mərkəzləri və offis binaları',
      'Sənaye müəssisələri və anbarlar'
    ],
    faq: [
      ['Bütün liftlərdə olur?', 'Əksər brendlərlə uyğundur, yerdə baxış tələb oluna bilər.'],
      ['Bakıda quraşdırma xidməti var?', 'Bəli, Bakı və ətraf ərazilərdə peşəkar quraşdırma.'],
      ['Neçə mərtəbə dəstəklənir?', '100-dən çox mərtəbəli binalarda işləyir.'],
      ['Kartların növü hansidır?', 'RFID, NFC və ya biometrik variant movcuddur.'],
      ['Zəman məhdudiyyəti qoya bilərik?', 'Bəli, hər kart üçün ayrı saatlar və günlər təyin edilə bilər.'],
      ['Qonaq kart sistemi var?', 'Bəli, müvəqqəti və məhdud vaxtlı qonaq kartları verilə bilər.'],
      ['Zəmanət müddəti nə qədərdir?', 'Bütün lift kart sistemlərimizə 24 ay zəmanət veririk.']
    ],
    keywords: ['lift kart sistemi', 'lift kart sistemi satışı', 'liftlərə kart sistemi quraşdırılması', 'lift üçün kart sistemləri', 'lift avtomatlaşdırma', 'kartla lift idarəetmə', 'lift kart sistemi quraşdırılması', 'lift kart sistemi servisi', 'lift kart sistemi təmiri', 'lift kart sistemi qiymətləri', 'Bakı lift kart sistemi', 'mərtəbə icazəsi', 'lift access control', 'RFID lift sistemi', 'kartla lift', 'Bakı lift avtomatlaşdırma'],
  },
  {
    slug: 'biometrics',
    title: 'Barmaq İzi ilə Giriş Sistemləri',
    synonyms: ['biometrik', 'barmaq izi', 'üz tanıma'],
    heroImg: '/images/service-biometrics.webp',
    short: 'Yüksək dəqiqliklə üz/barmaq izi identifikasiyası. Bakıda biometrik sistemlər.',
    intro: `Müasir biometrik giriş sistemləri yüksək dəqiqliklə üz və barmaq izi identifikasiyası ilə yalnız icazəli şəxslərin daxil olmasına imkan verir. Biometrika ilə yalnız icazəli şəxslər daxil olur. Sürətli keçid, dövri hesabat, kart/kodla kombinə edilə bilər. Bakıda biometrik giriş sistemlərinin satışı və quraşdırılması üzrə keyfiyyətli xidmət təqdim edirik. Üz/barmaq izi, palma damarı identifikasiyası ilə 99.9% dəqiqlik əldə edilir. Anti-spoofing alqoritmlləri və təhlükəsizlik tədbirləri ilə saxta identifikasiyanın qarşısı alınır. Offline işləmə rejimi və backup sistemləri ilə şəbəkə bağlantısı olmadan da normal işləmə davam edir. Sürətli identifikasiya (1-2 saniyə) ilə axını lənğitmir. Access control sistemi ilə tam inteqrasiya sayəsində biometrik giriş digər təhlükəsizlik sistemləri ilə birgə işləyir.`,
    features: [
      'Üz/barmaq izi, palma damarı identifikasiyası',
      'Anti-spoofing alqoritmləri və təhlükəsizlik',
      'Offline işləmə rejimi və backup sistemləri',
      'Sürətli identifikasiya (1-2 saniyə)',
      'Access control sistemi ilə tam inteqrasiya',
      '99.9% dəqiqlik ilə işləmə',
      'Bakıda 24/7 texniki dəstək',
      'Zəmanətli biometrik sistemlər'
    ],
    usecases: [
      'Ofis/istehsal girişləri və qapılar',
      'Datacenter və kritik zonalar',
      'Xəstəxana və tibbi müəssisələr',
      'Bank və maliyyə müəssisələri',
      'Hərbi və təhlükəsizlik obyektləri',
      'Təhsil müəssisələri və məktəblər',
      'Otel və restoran müəssisələri'
    ],
    faq: [
      ['Məlumat harada saxlanılır?', 'Şirkət siyasətinə görə local və ya şifrəli bazada.'],
      ['Bakıda quraşdırma mümkündür?', 'Bəli, Bakı və ətraf ərazilərdə peşəkar quraşdırma.'],
      ['Dəqiqlik faizi nə qədərdir?', '99.9% dəqiqlik ilə işləyir.'],
      ['Neçə istifadəçi dəstəklənir?', 'Sistemdə 10,000-dən çox istifadəçi qeydiyyatı mümkündür.'],
      ['Elektrik kəsiləndə işləyir?', 'UPS dəstəyi ilə normal işləmə davam edir.'],
      ['Neçə biometrik cihaz eyni anda idarə oluna bilər?', 'Sistemdə 100-dən çox biometrik cihaz eyni anda idarə oluna bilər.']
    ],
    keywords: ['biometrika', 'üz tanıma', 'barmaq izi', 'Bakı biometrik', 'biometrik giriş', 'üz tanıma sistemi', 'barmaq izi sistemi', 'biometrik access control', 'biometrik quraşdırma', 'Bakı biometrik sistemi'],
  },
  {
    slug: 'gate',
    title: 'Elektron Qapılar',
    synonyms: ['elektron qapı', 'avtomatik qapı', 'elektron kilid', 'elektron qapılar', 'avtomatik qapı sistemləri', 'ofis qapısı', 'smart qapı'],
    heroImg: '/images/service-gate.webp',
    short: 'Ofis qapıları üçün uzaqdan pult ilə idarəetmə, domofon üçün elektron kilid və avtomatik qapılar. Bakıda elektron qapı satışı və quraşdırılması.',
    intro: `Bakıda elektron qapı satışı və quraşdırılması üzrə peşəkar xidmət. Müasir elektron qapılar və avtomatik qapı sistemləri ofis binaları, yaşayış kompleksləri və sənaye müəssisələri üçün ən etibarlı təhlükəsizlik həllidir. Elektron qapı quraşdırılması zamanı uzaqdan pult ilə idarəetmə, domofon inteqrasiyası və avtomatik qapı motorları ilə tam avtomatlaşdırılmış giriş sistemi təmin edilir. Elektron kilid və smart qapı texnologiyaları ilə maksimum təhlükəsizlik. Elektron qapı servisi və təmiri daxil olmaqla bütün xidmətləri təqdim edirik. Avtomatik qapı sistemləri sliding, swing və folding tiplərdə mövcuddur. Ofis qapısı üçün smart idarəetmə, domofon kilid inteqrasiyası və uzaqdan pult ilə tam nəzarət. Wi-Fi və 4G modul dəstəyi ilə smart telefon tətbiqindən idarəetmə mümkündür. Elektron qapı qiymətləri və avtomatik qapı quraşdırılması barədə ətraflı məlumat üçün bizimlə əlaqə saxlayın.`,
    features: [
      'Ofis qapıları üçün uzaqdan pult ilə idarəetmə',
      'Domofon üçün elektron kilid sistemləri',
      'Avtomatik qapı motorları və sürücüləri',
      'Wi-Fi/4G modul ilə smart telefon idarəetməsi',
      'Hərəkət sensorları və təhlükəsizlik sistemləri',
      'Manual açma və təcili rejim dəstəyi',
      'UPS dəstəyi ilə elektrik kəsintisində işləmə',
      'Bakıda 24/7 texniki dəstək və quraşdırma',
      'Zəmanətli elektron qapı satışı və quraşdırılması'
    ],
    usecases: [
      'Ofis binaları və biznes mərkəzləri',
      'Yaşayış kompleksləri və villalar',
      'Ticarət mərkəzləri və mağazalar',
      'Anbar və loqistika mərkəzləri',
      'Xəstəxana və tibbi müəssisələr',
      'Təhsil müəssisələri və məktəblər',
      'Otel və restoran müəssisələri',
      'Sənaye müəssisələri və zavodlar'
    ],
    faq: [
      ['Ofis qapıları üçün uzaqdan pult işləyir?', 'Bəli, 100 metrə qədər məsafədən pult ilə idarəetmə mümkündür.'],
      ['Domofon üçün elektron kilid sistemləri var?', 'Bəli, domofon ilə inteqrasiya olunan elektron kilid sistemləri təqdim edirik.'],
      ['Avtomatik qapılar hansı tiplərdə mövcuddur?', 'Sliding, swing, folding və revolving qapı tipləri mövcuddur.'],
      ['Elektrik kəsiləndə nə olur?', 'Manual açma və ya UPS dəstəyi ilə normal işləmə davam edir.'],
      ['Smart telefon ilə idarəetmə mümkündür?', 'Bəli, Wi-Fi və ya 4G modul ilə smart telefon tətbiqindən idarəetmə.'],
      ['Bakıda quraşdırma xidməti var?', 'Bəli, Bakı və ətraf ərazilərdə peşəkar quraşdırma xidməti.'],
      ['Neçə qapı eyni anda idarə oluna bilər?', 'Sistemdə 10-dan çox qapı eyni anda idarə oluna bilər.'],
      ['Zəmanət müddəti nə qədərdir?', 'Bütün elektron qapı sistemlərimizə 24 ay zəmanət veririk.']
    ],
    keywords: ['elektron qapı satışı', 'avtomatik qapı satışı', 'elektron qapı quraşdırılması', 'avtomatik qapı quraşdırılması', 'elektron qapı servisi', 'avtomatik qapı təmiri', 'elektron qapı qiymətləri', 'avtomatik qapı qiymətləri', 'Bakı elektron qapı', 'Bakı avtomatik qapı', 'elektron qapı', 'avtomatik qapı', 'ofis qapısı', 'uzaqdan pult qapı', 'domofon kilid', 'avtomatik qapı motoru', 'smart qapı', 'sliding qapı', 'elektron kilid', 'Bakı elektron qapı satışı'],
  },
  {
    slug: 'keypad',
    title: 'Kodlayıcı Sistemlər',
    synonyms: ['kodlayıcı', 'klaviatura giriş', 'PIN sistemi'],
    heroImg: '/images/service-keypad.webp',
    short: 'Pin, kart və biometrika kombinasiyası. Bakıda kodlayıcı sistemlər.',
    intro: `Sadə və sərfəli giriş üçün kodlayıcı klaviaturalar — müvəqqəti kodlar, vaxt məhdudiyyəti və loglama. Bakıda kodlayıcı sistemlərin satışı və quraşdırılması üzrə keyfiyyətli xidmət. Kodlayıcı qapı sistemləri ofis, anbar və yaşayış kompleksləri üçün ideal həlldir. Təhlükəsizlik və rahatlıq bir arada – istifadəçilər sadəcə PIN kod daxil edərək giriş edə bilərlər. Sistem vandalizm‌ə dayan‌ıqlı, hava şəraitin‌ə uyğunlaşmış və 24/7 işləyə bilər. İP65 qoruma sinfi ilə hər cür hava şəraitində etibarlı işləmə təmin edilir.`,
    features: [
      'Müvəqqəti kodlar və vaxt məhdudiyyəti',
      'Zaman cədvəli və loglama sistemi',
      'Suya/toza davamlı korpus (IP65)',
      '1000+ fərqli kod qeydiyyatı dəstəyi',
      'Access control sistemi ilə inteqrasiya',
      'Anti-vandalizm və təhlükəsizlik',
      'Bakıda 24/7 texniki dəstək',
      'Zəmanətli kodlayıcı sistemlər'
    ],
    usecases: [
      'Kiçik ofislər və biznes mərkəzləri',
      'Anbar və yardımçı otaqlar',
      'Yaşayış kompleksləri və villalar',
      'Otel və restoran müəssisələri',
      'Xəstəxana və tibbi müəssisələr',
      'Təhsil müəssisələri və məktəblər',
      'Sənaye müəssisələri və zavodlar'
    ],
    faq: [
      ['Tək qapıda işləyir?', 'Bəli, tək qapı və ya çoxqapı sistemlərinə uyğundur.'],
      ['Bakıda quraşdırma mümkündür?', 'Bəli, Bakı və ətraf ərazilərdə peşəkar quraşdırma.'],
      ['Neçə kod dəstəklənir?', '1000-dən çox fərqli kod qeydiyyatı mümkündür.'],
      ['Elektrik kəsiləndə işləyir?', 'UPS dəstəyi ilə normal işləmə davam edir.'],
      ['Neçə kodlayıcı eyni anda idarə oluna bilər?', 'Sistemdə 50-dən çox kodlayıcı eyni anda idarə oluna bilər.'],
      ['Zəmanət müddəti nə qədərdir?', 'Bütün kodlayıcı sistemlərimizə 24 ay zəmanət veririk.']
    ],
    keywords: ['kodlu qapı', 'klaviatura giriş sistemi', 'Bakı kodlayıcı', 'kod sistemi', 'klaviatura sistemi', 'pin sistemi', 'kodlayıcı quraşdırma', 'Bakı kodlayıcı sistemi', 'kodlayıcı access control'],
  },
  {
    slug: 'hotel-card',
    title: 'Otel Kart Sistemi',
    synonyms: ['otel kart', 'hotel card', 'otel giriş sistemi'],
    heroImg: '/images/service-hotel-lock.webp',
    short: 'Otel otaqları üçün ağıllı kartla idarəetmə sistemi. Bakıda otel kart sistemi.',
    intro: `Otel sənayesi üçün xüsusi hazırlanmış ağıllı kart sistemi. Qonaqların otaq girişi, lift istifadəsi, restoran və spa xidmətlərinə çıxışı təhlükəsiz və rahat şəkildə idarə edilir. Bakıda otel kart sistemlərinin satışı və quraşdırılması üzrə peşəkar xidmət təqdim edirik.`,
    features: [
      'Otaq girişi üçün RFID kart sistemi',
      'Lift və mərtəbə icazə idarəetməsi',
      'Restoran, spa və əlavə xidmətlərə çıxış',
      'Qonaq hesabatı və analitika',
      'Otel PMS sistemi ilə inteqrasiya',
      'Bakıda 24/7 texniki dəstək',
      'Zəmanətli otel kart sistemləri',
      'Çoxdilli dəstək (Azərbaycan, Rus, İngilis)'
    ],
    usecases: [
      'Bakıda 5 ulduzlu otellər',
      'Biznes otelləri və konfrans mərkəzləri',
      'Resort və spa otelləri',
      'Apartament otelləri',
      'Hostel və qonaq evləri',
      'Otel şəbəkələri və franchise'
    ],
    faq: [
      ['Neçə otaq dəstəklənir?', '1000-dən çox otaqlı otellərdə işləyir.'],
      ['Kartlar təhlükəsizdir?', 'Bəli, şifrəli RFID texnologiyası ilə maksimum təhlükəsizlik.'],
      ['Bakıda quraşdırma xidməti var?', 'Bəli, Bakı və ətraf ərazilərdə peşəkar quraşdırma xidməti.'],
      ['PMS sistemi ilə inteqrasiya?', 'Bəli, əksər otel idarəetmə sistemləri ilə uyğun gəlir.'],
      ['Kartların müddəti nə qədərdir?', 'Qonağın qalış müddətinə görə avtomatik təyin olunur.'],
      ['Neçə dildə dəstək var?', 'Azərbaycan, Rus və İngilis dillərində tam dəstək.'],
      ['Zəmanət müddəti nə qədərdir?', 'Bütün otel kart sistemlərimizə 24 ay zəmanət veririk.']
    ],
    keywords: ['otel kart sistemi', 'hotel card system', 'Bakı otel kart', 'otel giriş sistemi', 'otel lift kart', 'otel access control', 'otel təhlükəsizlik', 'otel idarəetmə sistemi', 'otel RFID kart', 'otel PMS inteqrasiya', 'Bakı otel sistemləri', 'otel quraşdırma Bakı'],
  },
  {
    slug: 'intercom',
    title: 'Domofon Sistemləri',
    synonyms: ['domofon', 'video domofon', 'audio domofon'],
    heroImg: '/images/service-intercom.webp',
    short: 'Video və audio domofon sistemləri ilə təhlükəsiz giriş. Bakıda domofon sistemləri.',
    intro: `Müasir domofon sistemləri yaşayış kompleksləri, villalar və ofis binaları üçün ən yaxşı təhlükəsizlik həllidir. Video görüntü, yüksək keyfiyyətli audio əlaqə və smart telefon inteqrasiyası ilə girişləri tam idarə edin. Bakıda domofon sistemlərinin satışı və quraşdırılması üzrə peşəkar xidmət təqdim edirik. HD video görüntü və yüksək keyfiyyətli audio ilə ziyarətçiləri görmək və onlarla danişmaq mümkündür. Smart telefon tətbiqi ilə uzaqdan idarəetmə sayesinə evdə olmasanız belə qapını aça bilərsiniz. Çoxqapı və çoxmərtəbə dəstəyi ilə böyük binalar üçün uyğundur. Gecə görüşü və hərəkət sensorları ilə hər vaxt keyfiyyətli görüntü əldə edilir. PoE (Power over Ethernet) dəstəyi ilə quraşdırma asan və etibarlıdır.`,
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

  // Ensure H1 reads as "[Xidmət adı] Sistemləri" unless it already contains the word 'Sistem'
  // Exception: only 'gate' slug should NOT have "Sistemləri" added
  const noSistemiSlugs = ['gate']
  const h1Title = noSistemiSlugs.includes(svc.slug) || /Sistem/i.test(svc.title) 
    ? svc.title 
    : `${svc.title} Sistemləri`

  // Exceptions: do not create full H2 breakdown for these slugs; only add short SEO paragraph
  const shortOnlySlugs = ['smart-lock', 'gate']
  const isShortOnly = shortOnlySlugs.includes(svc.slug)

  return (
    <article className="space-y-10">
      {/* Başlıq */}
      <header className="space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{h1Title}</h1>
        <p className="text-lg text-gray-600 max-w-3xl">{svc.short}</p>
      </header>

      {/* Hero şəkil */}
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

      {/* Main content: either full H2 sections or short SEO paragraph for exceptions */}
      {isShortOnly ? (
        <section className="prose">
          <h2 className="text-2xl font-semibold">Qısa SEO məlumat</h2>
          <p className="text-gray-700 leading-relaxed">
            {svc.title} üzrə ekspert xidmətləri: <strong>{svc.title} satışı</strong>, <strong>{svc.title} quraşdırılması</strong>, <strong>{svc.title} təkmilləşdirmə</strong> və <strong>{svc.title} servis/təmiri</strong>. Biz layihəyə uyğun məhsul seçimi və peşəkar quraşdırma təqdim edirik. Əlavə məlumat üçün <a href="/contact" className="text-blue-600 hover:underline">əlaqə</a> saxlayın.
          </p>
        </section>
      ) : (
        <>
      <section className="grid md:grid-cols-2 gap-8">
        <div>
              <h2 className="text-2xl font-semibold mb-3">{svc.title} satışı</h2>
              <p className="text-gray-700 leading-relaxed">
                {svc.title} satışı üzrə müxtəlif modellər təklif edirik: giriş səviyyəsindən tutmuş daha zəngin funksiyalı enterprise həllərə qədər. Məhsullarımızda zəmanət, ehtiyat hissələri və texniki dəstək mövcuddur. Satış prosesi zamanı müştərinin ehtiyacına uyğun konfiqurasiya və əlavə modullar tövsiyə olunur.
              </p>

              <h2 className="text-2xl font-semibold mt-6 mb-3">{svc.title} quraşdırılması</h2>
              <p className="text-gray-700 leading-relaxed">
                Quraşdırma addımları layihə qiymətləndirilməsi, avadanlıq seçimi, montaj və konfiqurasiya mərhələlərindən ibarətdir. Peşəkar komandamız quraşdırma zamanı təhlükəsizlik və uyğunluq standartlarına riayət edir. Quraşdırma müddəti sistemin kompleksliyindən asılı olaraq dəyişir.
              </p>
        </div>

        <div>
              <h2 className="text-2xl font-semibold mb-3">{svc.title} servisi və təmiri</h2>
              <p className="text-gray-700 leading-relaxed">
                Texniki xidmət və təmir xidmətlərimizə periodik baxış, proqram təminatı yeniləmələri və qəza vəziyyətində təcili müdaxilə daxildir. Bütün servis işləri keyfiyyət zəmanəti ilə həyata keçirilir və ehtiyat hissələri orijinal və ya yüksək keyfiyyətli alternativlərlə təmin olunur.
              </p>

              <h2 className="text-2xl font-semibold mt-6 mb-3">{svc.title} qiymətləri</h2>
              <p className="text-gray-700 leading-relaxed">
                {svc.title} qiymətləri model, funksionallıq və quraşdırma tələblərinə görə dəyişir. Ən doğru qiymət təklifini əldə etmək üçün layihə məlumatlarını göndərin və ya bizimlə <a href="/contact" className="text-blue-600 hover:underline">əlaqə</a> saxlayın. Qiymət aralığı və təklif forması müştəri tələblərinə uyğun hazırlanır.
              </p>
            </div>
          </section>

          {/* Istifadə ssenariləri və xüsusiyyətlər */}
          <section className="mt-8">
            <h3 className="text-xl font-semibold mb-3">İstifadə ssenariləri</h3>
            <p className="text-gray-700">{svc.usecases?.slice(0,4).join(', ')} və digər senarilər üçün uyğundur.</p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Xüsusiyyətlər</h3>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            {svc.features.map((f, i) => <li key={i}>{f}</li>)}
          </ul>
      </section>
        </>
      )}

      {/* FAQ */}
      {svc.faq?.length ? (
        <section>
          <h2 className="text-2xl font-semibold mb-4">Tez-tez verilən suallar</h2>
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

      {/* CTA */}
      <section className="rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-6 md:p-8 text-white">
        <h2 className="text-2xl font-semibold mb-2">Layihəniz üçün məsləhət alaq</h2>
        <p className="opacity-90 mb-4">Ödənişsiz konsultasiya və yerində baxış mümkündür. WhatsApp və ya email ilə zəng edin.</p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a href="https://wa.me/994552370200" className="bg-white text-blue-700 px-5 py-3 rounded-lg text-center font-semibold">WhatsApp (055)</a>
          <a href="https://wa.me/994708001000" className="bg-white/15 px-5 py-3 rounded-lg text-center font-semibold">WhatsApp (070)</a>
          <a href="/contact#contact-form" className="bg-black/20 px-5 py-3 rounded-lg text-center">Əlaqə forması</a>
        </div>
      </section>

      {/* Related services */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Əlaqəli Xidmətlər</h2>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li><a href="/services/access-control" className="hover:underline">Access Control Sistemləri</a></li>
          <li><a href="/services/turnstile" className="hover:underline">Turniket Sistemləri</a></li>
          <li><a href="/services/barrier" className="hover:underline">Şlaqbaum Sistemləri</a></li>
        </ul>
      </section>

      {/* Alternative search terms as H2 for SEO */}
      {svc.synonyms && svc.synonyms.length > 0 && (
        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Əlaqəli Axtarış Terminləri</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {svc.synonyms.slice(0, 6).map((synonym, idx) => (
              <div key={idx} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h3 className="text-lg font-medium text-gray-900 capitalize">{synonym}</h3>
                <p className="text-sm text-gray-600 mt-1">Bakıda satış və quraşdırma</p>
              </div>
            ))}
          </div>
        </section>
      )}

    </article>
  )
}

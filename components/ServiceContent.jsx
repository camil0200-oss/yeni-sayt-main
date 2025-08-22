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
    intro: `Müasir access control sistemləri ofislər, zavod və ticarət obyektlərində giriş icazələri, zonalar və işçi davamiyyətini mərkəzləşdirilmiş platformada idarə etməyə imkan verir. Bakıda access control sistemlərinin satışı və quraşdırılması üzrə peşəkar xidmət təqdim edirik. Access control sistemləri kart, barmaq izi və üz tanıma texnologiyalarını birləşdirərək maksimum təhlükəsizlik təmin edir. Zonalar, cədvəllər və qonaq profili modulları ilə müxtəlif şəxslərə fərqli icazələr verilə bilər. Turniket, şlaqbaum və lift ilə tam inteqrasiya sayəsində bina daxilində hər hərəkət nəzarət altında saxlanılır. Real-time monitorinq və hesabat sistemləri ilə işçi davamiyyəti, ziyarətçi qeydiyyatı və təhlükəsizlik hadisələri üzrə ətraflı məlumat əldə edilir. Mərkəzləşdirilmiş idarəetmə paneli vasitəsilə bütün giriş-çıxış nöqtələri tək yerden idarə olunur.`,
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
    keywords: ['access control', 'davamiyyət', 'turniket inteqrasiya', 'Bakı access control', 'giriş sistemi', 'davamiyyət sistemi', 'kart sistemi Bakı'],
  },
  {
    slug: 'turnstile',
    title: 'Turniket Sistemləri',
    heroImg: '/images/service-turnstile.webp',
    short: 'Ofis və obyektlər üçün təhlükəsiz giriş-buraxılış həlli. Bakıda turniket sistemləri.',
    intro: `Müasir turniket sistemləri ofislər, sənaye müəssisələri və ictimai binalar üçün ən etibarlı giriş idarəetmə həllidir. Tripod, qapı və tam boy turniketlər kart, biometrika və QR kod modulları ilə inteqrasiya olunaraq təhlükəsiz və sürətli keçid təmin edir. Bakıda turniket sistemlərinin satışı və quraşdırılması üzrə peşəkar xidmət təqdim edirik. Turniket sistemləri yalnız icazəli şəxslərin daxil olmasına imkan verir və axını idarə edərək sıxlığın qarşısını alır. İkitərəfli keçid nəzarəti və anti-passback funksiyası ilə təhlükəsizlik maksimum səviyyədə təmin edilir. Paslanmayan polad korpus istənilən hava şəraitində uzunmüddətli istifadəyə uyğundur. Saatda 1000-dən çox keçid dəstəyi ilə yüksək axınlı obyektlərdə effektiv işləyir.`,
    features: [
      'Kart/biometrika/QR modulları',
      'İkitərəfli keçid, anti-passback',
      'Paslanmayan polad korpus',
      'Saatda 1000+ keçid dəstəyi',
      'Access control sistemi ilə inteqrasiya',
      'Real-time hesabat və monitorinq',
      'Bakıda 24/7 texniki dəstək',
      'Zəmanətli turniket sistemləri'
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
    keywords: ['turniket', 'giriş sistemləri', 'Bakı turniket', 'turniket satışı', 'turniket quraşdırma', 'giriş turniketi', 'turniket sistemi', 'Bakı turniket sistemi', 'turniket access control', 'turniket biometrik'],
  },
  {
    slug: 'barrier',
    title: 'Şlaqbaum Sistemləri',
    heroImg: '/images/service-barrier.webp',
    short: 'Dayanacaq və ərazi girişlərini avtomatlaşdırın. Bakıda şlaqbaum sistemləri.',
    intro: `Müasir şlaqbaum sistemləri dayanacaq və ərazi girişlərinin avtomatlaşdırılması üçün ən effektiv həlldir. Pult, UHF tag, nömrə tanıma (ANPR) və access control ilə inteqrasiya olunan şlaqbaum həllləri. Bakıda şlaqbaum sistemlərinin satışı və quraşdırılması üzrə etibarlı xidmət təqdim edirik. Şlaqbaum sistemləri UHF uzun məsafəli oxu texnologiyası ilə 10-15 metr məsafədən avtomatik keçidə imkan verir. ANPR (Avtomatik Nömrə Tanıma) inteqrasiyası sayəsində avtomobil nömrələri avtomatik tanınarəq 95%+ dəqiqliklə giriş və ya çıxışa icazə verilir. Təcili rejim və təhlükəsizlik sensorları ilə obyekt təhlükəsizliyi maksimum səviyyədə təmin edilir. Saatda 500-dən çox avtomobil keçidi dəstəyi ilə yüksək axınlı dayanacaqlarda effektiv işləyir.`,
    features: [
      'ANPR (Avtomatik Nömrə Tanıma) inteqrasiyası',
      'UHF uzun məsafəli oxu (10-15 metr)',
      'Təcili rejim və təhlükəsizlik sensorları',
      'Saatda 500+ avtomobil keçidi dəstəyi',
      'Access control sistemi ilə tam inteqrasiya',
      'IP54+ su və toz davamlılığı',
      'Bakıda 24/7 texniki dəstək',
      'Zəmanətli şlaqbaum sistemləri'
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
    keywords: ['şlaqbaum', 'dayanacaq idarəetmə', 'Bakı şlaqbaum', 'şlaqbaum satışı', 'avtomatik qapı', 'dayanacaq sistemi', 'ANPR sistemi', 'UHF şlaqbaum', 'şlaqbaum quraşdırma', 'Bakı şlaqbaum sistemi'],
  },
  {
    slug: 'lift',
    title: 'Kartla Lift İdarəetmə',
    heroImg: '/images/service-lift.webp',
    short: 'Mərtəbə üzrə giriş icazələrini idarə edin. Bakıda lift kart sistemi.',
    intro: `Müasir kartla lift idarəetmə sistemləri yaşayış binaları və çoxmərtəbəli komplekslərdə mərtəbə üzrə giriş icazələrini idarə etməyə imkan verir. Sakin və ya əməkdaş yalnız icazə verilən mərtəbəyə çıxa bilər. Access control və domofonlarla birlikdə işləyir. Bakıda lift kart sistemlərinin satışı və quraşdırılması üzrə peşəkar xidmət təqdim edirik. Mərtəbə əsaslı icazə və zaman cədvəlləri ilə hər sakinə və ya işçiyə müxtəlif vaxtlarda fərqli mərtəbələrə çıxış icazəsi verilə bilər. RFID kart və biometrik daxələtmə sistemləri ilə təhlükəsizlik və rahatlıq bir arada təmin edilir. Qonaq və müvəqqəti icazələr vasitəsilə ziyarətçilərə məhdud vaxtlı çıxış icazəsi verilə bilər. Emergency rejim və təcili açma funksiyası ilə fövqəladə hallarda sistem avtomatik olaraq açılır.`,
    features: [
      'Mərtəbə əsaslı icazə və zaman cədvəlləri',
      'Brend lift panelləri ilə uyğunluq',
      'RFID kart və biometrik daxəletmə sistemləri',
      'Qonaq və müvəqqəti icazələr',
      'Real-time monitorinq və hesabatlar',
      'Emergency rejim və təcili açma',
      'Access control sistemi ilə tam inteqrasiya',
      'Bakıda 24/7 texniki dəstək və quraşdırma',
      'Zəmanətli lift kart sistemləri'
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
    keywords: ['lift kart sistemi', 'mərtəbə icazəsi', 'Bakı lift sistemi', 'lift kart', 'mərtəbə idarəetmə', 'lift access control'],
  },
  {
    slug: 'biometrics',
    title: 'Barmaq İzi ilə Giriş Sistemləri',
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
    title: 'Elektron Kilid Sistemləri',
    heroImg: '/images/service-gate.webp',
    short: 'Ofis qapıları üçün uzaqdan pult ilə idarəetmə sistemləri, domofon üçün elektron kilidlər və avtomatik qapılar. Bakıda elektron kilid sistemləri.',
    intro: `Müasir elektron kilid sistemləri ofis binaları, yaşayış kompleksləri və sənaye müəssisələri üçün ən etibarlı təhlükəsizlik həllidir. Elektron kilidlər uzaqdan pult ilə idarəetmə, domofon inteqrasiyası və avtomatik qapı motorları ilə tam avtomatlaşdırılmış giriş sistemi təmin edir. Bakıda elektron kilid sistemlərinin satışı, quraşdırılması və texniki dəstəyi üzrə ən keyfiyyətli xidmət təqdim edirik. Elektron kilid sistemləri ənənəvi açar kilidlərindən fərqli olaraq uzaqdan idarəetmə, vaxt planlaması və icazə idarəetməsi imkanları təqdim edir. Wi-Fi və 4G modul dəstəyi ilə smart telefon tətbiqindən tam idarəetmə mümkündür.`,
    features: [
      'Ofis qapıları üçün uzaqdan pult ilə idarəetmə',
      'Domofon üçün elektron kilid sistemləri',
      'Avtomatik qapı motorları və sürücüləri',
      'Wi-Fi/4G modul ilə smart telefon idarəetməsi',
      'Hərəkət sensorları və təhlükəsizlik sistemləri',
      'Manual açma və təcili rejim dəstəyi',
      'UPS dəstəyi ilə elektrik kəsintisində işləmə',
      'Bakıda 24/7 texniki dəstək və quraşdırma',
      'Zəmanətli elektron qapı sistemləri'
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
    keywords: ['elektron qapılar', 'avtomatik qapı', 'Bakı elektron qapı', 'qapı sistemi', 'avtomatik qapı', 'elektron qapı', 'ofis qapısı', 'uzaqdan pult', 'domofon kilid', 'avtomatik qapı motoru', 'smart qapı', 'Bakı avtomatik qapı', 'elektron qapı quraşdırma'],
  },
  {
    slug: 'keypad',
    title: 'Kodlayıcı Sistemlər',
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
          <a href="/contact" className="bg-black/20 px-5 py-3 rounded-lg text-center">Əlaqə forması</a>
        </div>
      </section>
    </article>
  )
}

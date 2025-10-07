'use client'
import Image from 'next/image'
import Link from 'next/link'

import { useState, useEffect } from 'react'
import {
  Shield, Lock, Smartphone, Users, Settings, Clock,
  ChevronRight, Phone, Mail, MapPin, Star
} from 'lucide-react'
import dynamic from 'next/dynamic'

const CategoryCarousel = dynamic(() => import('@/components/CategoryCarousel'), { ssr: false, loading: () => null })
// no optional heavy icons import here to avoid build-time resolution errors

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Mobil menyu açıqkən səhifə scroll-unun qarşısını al
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
  }, [isMenuOpen])

  const openWhatsApp = (number) => {
    window.open(`https://wa.me/${number}`, '_blank')
  }

  // XİDMƏTLƏR (slug-larla)
  const services = [
    { slug: 'smart-lock', title: 'Smart Kilidlər', img: '/images/service-smart-lock.webp' },
    { slug: 'access-control', title: 'Access Control', img: '/images/service-access-control.webp' },
    { slug: 'turnstile', title: 'Turniket Sistemləri', img: '/images/service-turnstile.webp' },
    { slug: 'barrier', title: 'Şlaqbaum Sistemləri', img: '/images/service-barrier.webp' },
    { slug: 'lift', title: 'Kartla Lift İdarəetmə', img: '/images/service-lift.webp' },
    { slug: 'biometrics', title: 'Biometrik Giriş', img: '/images/service-biometrics.webp' },
    { slug: 'gate', title: 'Elektron Kilid Sistemləri', img: '/images/service-gate.webp' },
    { slug: 'keypad', title: 'Kodlayıcı Sistemlər', img: '/images/service-keypad.webp' },
    { slug: 'hotel-card', title: 'Otel Kart Sistemi', img: '/images/service-smart-lock.webp' },
    { slug: 'intercom', title: 'Domofon Sistemləri', img: '/images/service-intercom.webp' },
  ]

  const benefits = [
    { icon: <Shield className="w-6 h-6" />, title: "Yüksək Təhlükəsizlik", description: "Ən son texnologiyalarla maksimum müdafiə" },
    { icon: <Clock className="w-6 h-6" />, title: "Sürətli Quraşdırma", description: "Peşəkar komanda ilə tez və keyfiyyətli xidmət" },
    { icon: <Settings className="w-6 h-6" />, title: "24/7 Texniki Dəstək", description: "Hər zaman əlçatan texniki yardım" },
    { icon: <Star className="w-6 h-6" />, title: "Zəmanət", description: "Bütün məhsul və xidmətlərə uzunmüddətli zəmanət" }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header artıq layout-da göstərilir */}
      <main className="relative z-1">
        {/* Hero Section */}
        <section id="home" className="hero-section bg-gradient-to-br from-blue-50 to-gray-50 min-h-screen flex items-center">
          <div className="container">
            <div className="grid-2 grid items-center gap-12 lg:grid-cols-2">
              <div className="hero-content space-y-8">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Bakıda <span className="text-blue-600">Smart Kilid</span> və <span className="text-blue-600">Access Control</span> Sistemləri
                </h1>

                <p className="text-xl text-gray-600 leading-relaxed">
                  <strong>Smart kilidlər</strong>, <strong>elektron kilidlər</strong>, <strong>access control</strong>, <strong>turniket sistemi</strong>, <strong>kartlı lift</strong>, <strong>avtomatik qapı</strong> və <strong>elektron qapılar</strong> sistemləri ilə təhlükəsizliyinizi bizə etibar edin. Bakıda ən keyfiyyətli təhlükəsizlik sistemləri.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://wa.me/994552370200"
                    target="_blank"
                    rel="noopener"
                    className="btn-primary bg-green-700 text-white px-8 py-4 rounded-lg hover:bg-green-800 transition-colors flex items-center justify-center gap-2 font-semibold"
                  >
                    <Phone className="w-5 h-5" />
                    <span>WhatsApp: +994 55 237 02 00</span>
                  </a>

                  <Link
                    href="/services"
                    className="btn-secondary border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-600 hover:text-white transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Bütün Xidmətlər</span>
                    <ChevronRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>

              <div className="relative">
                <Image
                  src="/images/hero-security.webp"
                  alt="Bakıda Smart Kilid və Access Control Sistemləri - Təhlükəsizlik və Avtomatlaşdırma"
                  width={800}
                  height={600}
                  className="hero-image w-full h-auto rounded-2xl shadow-xl"
                  loading="eager"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Category carousel (dynamically loaded) */}
        <section className="container">
          <CategoryCarousel items={[
            { href: '/services/turnstile', title: 'Turniket Sistemləri', img: '/images/service-turnstile.webp', alt: 'Turniket sistemləri' },
            { href: '/services/barrier', title: 'Şlaqbaum Sistemləri', img: '/images/service-barrier.webp', alt: 'Şlaqbaum sistemləri' },
            { href: '/services/access-control', title: 'Access Control', img: '/images/service-access-control.webp', alt: 'Access control sistemi' },
            { href: '/services/smart-lock', title: 'Smart Kilidlər', img: '/images/service-smart-lock.webp', alt: 'Smart kilidlər' }
          ]} />
        </section>

        {/* Services Section (homepage showcase) */}
        <section id="services" className="py-20 bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Bakıda Smart Kilid və Access Control Xidmətləri</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Müasir təhlükəsizlik və avtomatlaşdırma sistemlərinin tam spektri - <strong>elektron kilid</strong>, <strong>turniket sistemi</strong>, <strong>kartlı lift</strong>, <strong>avtomatik qapı</strong>, <strong>elektron qapılar</strong> və <strong>domofon sistemləri</strong>
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  prefetch
                  className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer block"
                >
                  <div className="h-48 overflow-hidden">
                    <Image
                      src={service.img}
                      alt={`${service.title} - Bakıda ${service.title} satışı və quraşdırma`}
                      width={380}
                      height={253}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Shield className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Bakıda {service.title} satışı və peşəkar quraşdırma xidməti
                    </p>
                    <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700">
                      <span>Ətraflı məlumat</span>
                      <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-gray-50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Niyə Smart Kilid Sistemləri?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Bakıda <strong>smart kilid</strong> və <strong>access control</strong> sahəsində keyfiyyət, etibarlılıq və peşəkarlıq bizim əsas prinsiplərimizdir
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
<section id="about" className="py-20 bg-white">
  <div className="container mx-auto px-4">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Bakıda Smart Kilid və Access Control Uzmanları</h2>
        <div className="space-y-4 text-gray-600 text-lg">
          <p><strong>Smart Kilid Sistemləri</strong> olaraq, biz Azərbaycanda müasir təhlükəsizlik və avtomatlaşdırma sistemlərinin satışı və quraşdırılması sahəsində fəaliyyət göstəririk.</p>
          <p>Komandamız yüksək ixtisaslı mütəxəssislərdən ibarətdir və müştərilərimizə ən keyfiyyətli <strong>smart kilid</strong>, <strong>access control</strong> və <strong>turniket sistemi</strong> xidməti göstərməyə çalışır.</p>
          <p>Məqsədimiz müştərilərimizin təhlükəsizliyini təmin etmək və ən son texnologiyalardan istifadə edərək rahatlıq yaratmaqdır.</p>
          <p className="font-semibold text-blue-600">Smart Kilid Sistemləri – Bakıda <strong>elektron kilid</strong>, <strong>access control</strong> və <strong>təhlükəsizlik sistemləri</strong> sahəsində etibarlı partnyorunuz.</p>
        </div>
        <div className="mt-8">
          <a
            href="https://wa.me/994552370200"
            target="_blank"
            rel="noopener"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79a15.09 15.09 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1-.25 11.72 11.72 0 0 0 3.68.59 1 1 0 0 1 1 1v3.68a1 1 0 0 1-1 1A17 17 0 0 1 3 7a1 1 0 0 1 1-1h3.72a1 1 0 0 1 1 1 11.72 11.72 0 0 0 .59 3.68 1 1 0 0 1-.25 1z"/></svg>
            <span>Bakıda Smart Kilid Konsultasiyası</span>
          </a>
        </div>
      </div>

      <div className="card-img relative aspect-[16/10]">
        <img
          src="/images/about-team.webp"
          alt="Smart Kilid Sistemləri komandası - Bakıda təhlükəsizlik sistemləri uzmanları"
          className="w-full h-full object-cover rounded-xl shadow-xl"
          loading="lazy"
        />
      </div>
    </div>
  </div>
</section>

{/* FAQ Section */}
<section className="py-20 bg-gray-50">
  <div className="container">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">Smart Kilid və Access Control Haqqında Suallar</h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Bakıda <strong>smart kilid</strong>, <strong>access control</strong> və <strong>turniket sistemi</strong> haqqında ən çox verilən suallar
      </p>
    </div>

    <div className="max-w-4xl mx-auto space-y-6">
      <details className="group bg-white rounded-lg border p-6">
        <summary className="cursor-pointer font-semibold text-lg text-gray-900 flex items-center justify-between">
          <span>Bakıda smart kilid quraşdırma xidməti nə qədər çəkir?</span>
          <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
        </summary>
        <p className="mt-4 text-gray-700 leading-relaxed">
          Bakıda <strong>smart kilid</strong> quraşdırma xidməti 1-3 saat çəkir. Mövcud qapının vəziyyətindən asılı olaraq vaxt dəyişə bilər. Peşəkar komandamız sürətli və keyfiyyətli quraşdırma təmin edir.
        </p>
      </details>

      <details className="group bg-white rounded-lg border p-6">
        <summary className="cursor-pointer font-semibold text-lg text-gray-900 flex items-center justify-between">
          <span>Access control sistemi neçə istifadəçi dəstəkləyir?</span>
          <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
        </summary>
        <p className="mt-4 text-gray-700 leading-relaxed">
          <strong>Access control</strong> sistemlərimiz 1000-dən çox istifadəçi qeydiyyatını dəstəkləyir. Sistemin ölçüsündən asılı olaraq bu say artırıla bilər. Bakıda böyük ofis binaları və yaşayış kompleksləri üçün xüsusi həllər təklif edirik.
        </p>
      </details>

      <details className="group bg-white rounded-lg border p-6">
        <summary className="cursor-pointer font-semibold text-lg text-gray-900 flex items-center justify-between">
          <span>Turniket sistemi neçə nəfər keçid edə bilər?</span>
          <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
        </summary>
        <p className="mt-4 text-gray-700 leading-relaxed">
          <strong>Turniket sistemi</strong> saatda 1000-dən çox keçid edə bilər. Sistemin növündən və konfiqurasiyasından asılı olaraq bu göstərici dəyişə bilər. Bakıda yüksək axınlı obyektlər üçün xüsusi <strong>turniket sistemi</strong> həllləri təklif edirik.
        </p>
      </details>

      <details className="group bg-white rounded-lg border p-6">
        <summary className="cursor-pointer font-semibold text-lg text-gray-900 flex items-center justify-between">
          <span>Elektron kilid elektrik kəsiləndə işləyir?</span>
          <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
        </summary>
        <p className="mt-4 text-gray-700 leading-relaxed">
          Bəli, <strong>elektron kilid</strong> sistemlərimiz UPS dəstəyi ilə elektrik kəsiləndə də işləyir. Həmçinin mexaniki açar dəstəyi də mövcuddur. Bakıda təhlükəsizlik təmin etmək üçün bütün hallar nəzərə alınır.
        </p>
      </details>

      <details className="group bg-white rounded-lg border p-6">
        <summary className="cursor-pointer font-semibold text-lg text-gray-900 flex items-center justify-between">
          <span>Kartlı lift sistemi bütün liftlərdə işləyir?</span>
          <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
        </summary>
        <p className="mt-4 text-gray-700 leading-relaxed">
          <strong>Kartlı lift sistemi</strong> əksər lift brendləri ilə uyğun gəlir. Sistemin quraşdırılması üçün əvvəlcədən texniki baxış tələb oluna bilər. Bakıda bütün əsas lift brendləri üçün <strong>kartlı lift</strong> həllləri təklif edirik.
        </p>
      </details>

      <details className="group bg-white rounded-lg border p-6">
        <summary className="cursor-pointer font-semibold text-lg text-gray-900 flex items-center justify-between">
          <span>Smart kilid sistemlərinə zəmanət verirsiniz?</span>
          <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
        </summary>
        <p className="mt-4 text-gray-700 leading-relaxed">
          Bəli, bütün <strong>smart kilid</strong> və <strong>access control</strong> sistemlərimizə 12-24 ay zəmanət veririk. Bakıda 24/7 texniki dəstək xidməti də mövcuddur. Keyfiyyətli məhsullar və peşəkar xidmət bizim əsas prinsiplərimizdir.
        </p>
      </details>

      <details className="group bg-white rounded-lg border p-6">
        <summary className="cursor-pointer font-semibold text-lg text-gray-900 flex items-center justify-between">
          <span>Elektron qapılar və avtomatik qapı sistemləri hansı tiplərdə mövcuddur?</span>
          <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
        </summary>
        <p className="mt-4 text-gray-700 leading-relaxed">
          <strong>Elektron qapılar</strong> və <strong>avtomatik qapı</strong> sistemlərimiz sliding, swing, folding və revolving tiplərində mövcuddur. Ofis qapıları üçün uzaqdan pult ilə idarəetmə, domofon üçün elektron kilidlər və smart telefon inteqrasiyası ilə tam həll təqdim edirik. Bakıda bütün növ qapılar üçün <strong>avtomatik qapı</strong> sistemləri quraşdırırıq.
        </p>
      </details>
    </div>
  </div>
</section>

{/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-900 text-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Bizimlə Əlaqə</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Suallarınız üçün bizimlə əlaqə saxlayın. Pulsuz məsləhət üçün WhatsApp yazın!
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Contact Info */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-blue-400 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Telefon</h3>
                    <p className="text-gray-300">+994 55 237 02 00</p>
                    <p className="text-gray-300">+994 70 800 10 00</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-blue-400 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Email</h3>
                    <p className="text-gray-300">smartkilid.az@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-blue-400 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Ünvan</h3>
                    <p className="text-gray-300">Bakı, Azərbaycan</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-blue-400 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">İş Saatları</h3>
                    <p className="text-gray-300">Hər gün, 09:00–21:00</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Buttons */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold mb-6">WhatsApp Əlaqə</h3>

                <button
                  onClick={() => openWhatsApp('994552370200')}
                  aria-label="WhatsApp ilə əlaqə saxla: +994 55 237 02 00"
                  className="w-full text-lg px-6 py-5 rounded-xl bg-green-700 text-white hover:bg-green-800 transition-colors flex items-center justify-center gap-3 shadow-lg font-semibold"
                >
                  <Phone className="w-5 h-5" />
                  <span>WhatsApp (055)</span>
                </button>

                <button
                  onClick={() => openWhatsApp('994708001000')}
                  aria-label="WhatsApp ilə əlaqə saxla: +994 70 800 10 00"
                  className="w-full text-lg px-6 py-5 rounded-xl bg-green-700 text-white hover:bg-green-800 transition-colors flex items-center justify-center gap-3 shadow-lg font-semibold"
                >
                  <Phone className="w-5 h-5" />
                  <span>WhatsApp (070)</span>
                </button>

                <a
                  href="mailto:smartkilid.az@gmail.com"
                  className="w-full text-lg px-6 py-5 rounded-xl bg-blue-700 text-white hover:bg-blue-800 transition-colors flex items-center justify-center gap-3 shadow-lg font-semibold"
                >
                  <Mail className="w-5 h-5" />
                  <span>Email Göndər</span>
                </a>
              </div>

              {/* Map */}
              <div>
                <h3 className="text-xl font-semibold mb-6">Xəritə</h3>
                <div className="bg-gray-800 rounded-lg p-4 h-64 flex items-center justify-center">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194473.42201399864!2d49.73893!3d40.394734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d6bd6211cf9%3A0x343f6b5e7ae56c6b!2sBaku%2C%20Azerbaijan!5e0!3m2!1sen!2s!4v1633024800000!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                    title="Smart Kilid Sistemləri - Bakı xəritəsi"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-8">
        <div className="container">
          <div className="text-center">
            <p>&copy; 2024 Smart Kilid Sistemləri. Bütün hüquqlar qorunur.</p>
            <p className="mt-2">Təhlükəsizlik və Avtomatlaşdırma Sistemləri</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

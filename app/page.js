'use client'
import Image from 'next/image'
import Link from 'next/link'

import { useState, useEffect } from 'react'
import {
  Menu, X, Shield, Lock, Smartphone, Users, Settings, Clock,
  ChevronRight, Phone, Mail, MapPin, Star
} from 'lucide-react'

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const openWhatsApp = (number) => {
    window.open(`https://wa.me/${number}`, '_blank')
  }

  // XİDMƏTLƏR (slug-larla)
  const services = [
    {
      slug: "gate",
      icon: <Shield className="w-8 h-8" />,
      title: "Elektron Kilid Sistemləri",
      description: "Qapılar üçün elektron kilid və idarəetmə həllləri",
      detailedDescription: "Evinizdə və iş yerinizdə girişləri təhlükəsiz idarə edin. Elektron kilid sistemləri ilə icazəsiz girişlərin qarşısını alın, rahatlığı artırın.",
      cta: "Məsləhət üçün WhatsApp-da yazın.",
      image: "/images/service-gate.webp"
    },
    {
      slug: "biometrics",
      icon: <Smartphone className="w-8 h-8" />,
      title: "Barmaq İzi ilə Giriş Sistemləri",
      description: "Biometrik təhlükəsizlik barmaq izi və üz tanıma",
      detailedDescription: "Biometrik texnologiya ilə yalnız icazəli şəxslərə giriş verin. Sürətli və dəqiq identifikasiya.",
      cta: "İndi sifariş edin – təhlükəsizlik səviyyənizi artırın!",
      image: "/images/service-biometrics.webp"
    },
    {
      slug: "lift",
      icon: <Settings className="w-8 h-8" />,
      title: "Kartla Lift İdarəetmə",
      description: "Liftlərdə mərtəbə üzrə giriş nəzarəti",
      detailedDescription: "Kart əsaslı lift nəzarəti ilə yalnız səlahiyyətli şəxslər istənilən mərtəbəyə çata bilər. Binalar üçün təhlükəsiz və rahat həll.",
      cta: "Layihəniz üçün uyğun konfiqurasiya təklif edək.",
      image: "/images/service-lift.webp"
    },
    {
      slug: "turnstile",
      icon: <Users className="w-8 h-8" />,
      title: "Turniket Sistemləri",
      description: "Ofis, müəssisə və obyektlər üçün giriş-buraxılış",
      detailedDescription: "Turniketlər ilə işçi və ziyarətçi axınını idarə edin. Kart, biometrik və QR girişləri ilə inteqrasiya mümkündür.",
      cta: "Obyektiniz üçün uyğun turniket tipini seçək.",
      image: "/images/service-turnstile.webp"
    },
    {
      slug: "barrier",
      icon: <Shield className="w-8 h-8" />,
      title: "Şlaqbaum Sistemləri",
      description: "Dayanacaq və ərazi girişlərinin idarə edilməsi",
      detailedDescription: "Avtomatik şlaqbaumlar ilə nəqliyyat axınını təhlükəsiz və rahat idarə edin. Pult, karta və ANPR (nömrə tanıma) inteqrasiyası.",
      cta: "Məkanınıza uyğun şlaqbaum seçimində kömək edək.",
      image: "/images/service-barrier.webp"
    },
    {
      slug: "access-control",
      icon: <Users className="w-8 h-8" />,
      title: "Access Control Sistemləri",
      description: "İşçi davamiyyəti və giriş nəzarəti",
      detailedDescription: "Ofislər, müəssisələr və obyektlər üçün giriş-çıxışların mərkəzləşdirilmiş idarə edilməsi və hesabatlandırma.",
      cta: "İş yerinizə tam nəzarət üçün bu gün əlaqə saxlayın.",
      image: "/images/service-access-control.webp"
    },
    {
      slug: "smart-lock",
      icon: <Lock className="w-8 h-8" />,
      title: "Smart Kilidlər",
      description: "Elektron kilidlər və smart giriş sistemləri",
      detailedDescription: "Açar daşımağa ehtiyac yoxdur — qapınızı telefon, kart və ya kodla açın. Təhlükəsiz, rahat, estetik.",
      cta: "Eviniz üçün ən uyğun smart kilidi seçək.",
      image: "/images/service-smart-lock.webp"
    },
    {
      slug: "keypad",
      icon: <Clock className="w-8 h-8" />,
      title: "Kodlayıcı Sistemlər",
      description: "Pin-klaviatura, kart və biometrika kombinasiyası",
      detailedDescription: "Şifrələr, kartlar və biometrik həllər – hamısı bir sistemdə. Giriş ssenarilərini sərbəst qurun.",
      cta: "Mütəxəssis məsləhəti üçün bizə yazın.",
      image: "/images/service-keypad.webp"
    },
    {
      slug: "intercom",
      icon: <Phone className="w-8 h-8" />,
      title: "Domofon Sistemləri",
      description: "Video və audio domofon sistemləri",
      detailedDescription: "Müasir domofon sistemləri ilə girişləri təhlükəsiz idarə edin. Video görüntü, audio əlaqə və smart telefon inteqrasiyası.",
      cta: "Yaşayış kompleksiniz üçün domofon sistemi quraşdıraq.",
      image: "/images/service-intercom.webp"
    }
  ]

  const benefits = [
    { icon: <Shield className="w-6 h-6" />, title: "Yüksək Təhlükəsizlik", description: "Ən son texnologiyalarla maksimum müdafiə" },
    { icon: <Clock className="w-6 h-6" />, title: "Sürətli Quraşdırma", description: "Peşəkar komanda ilə tez və keyfiyyətli xidmət" },
    { icon: <Settings className="w-6 h-6" />, title: "24/7 Texniki Dəstək", description: "Hər zaman əlçatan texniki yardım" },
    { icon: <Star className="w-6 h-6" />, title: "Zəmanət", description: "Bütün məhsul və xidmətlərə uzunmüddətli zəmanət" }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-blue-600">
              Smart Kilid Sistemləri
            </div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Əsas Səhifə</a>
              <a href="/#services" className="text-gray-700 hover:text-blue-600 transition-colors">Xidmətlərimiz</a>
              <a href="/#about" className="text-gray-700 hover:text-blue-600 transition-colors">Haqqımızda</a>
              <a href="/#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Əlaqə</a>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Menyunu bağla" : "Menyunu aç"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div id="mobile-menu" className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4">
              <div className="flex flex-col space-y-4">
                <a href="#home" onClick={() => setIsMenuOpen(false)} className="text-left text-gray-700 hover:bg-gray-100 rounded px-3 py-2">Əsas Səhifə</a>
                <a href="/#services" onClick={() => setIsMenuOpen(false)} className="text-left text-gray-700 hover:bg-gray-100 rounded px-3 py-2">Xidmətlərimiz</a>
                <a href="/#about" onClick={() => setIsMenuOpen(false)} className="text-left text-gray-700 hover:bg-gray-100 rounded px-3 py-2">Haqqımızda</a>
                <a href="/#contact" onClick={() => setIsMenuOpen(false)} className="text-left text-gray-700 hover:bg-gray-100 rounded px-3 py-2">Əlaqə</a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-24 lg:pt-28 bg-gradient-to-br from-blue-50 to-gray-50 min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Müasir <span className="text-blue-600">Təhlükəsizlik</span> Sistemləri
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Smart kilidlər, <b>elektron kilidlər</b>, domofon sistemləri, turniket və şlaqbaum sistemləri, eləcə də access control həlləri ilə təhlükəsizliyinizi bizə etibar edin.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/994552370200"
                  target="_blank"
                  rel="noopener"
                  className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>WhatsApp: +994 55 237 02 00</span>
                </a>

                <a
                  href="/#services"
                  className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-600 hover:text-white transition-colors flex items-center justify-center gap-2"
                >
                  <span>Xidmətlər</span>
                  <ChevronRight className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="relative">
              <Image 
                src="/images/hero-security.webp" 
                alt="Təhlükəsizlik Sistemləri" 
                width={800} 
                height={600} 
                className="w-full h-auto rounded-2xl shadow-xl" 
                loading="eager" 
                priority 
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Xidmətlərimiz</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Müasir təhlükəsizlik və avtomatlaşdırma sistemlərinin tam spektri
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
                    src={service.image}
                    alt={service.title}
                    width={380}
                    height={253}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </div>
                <div className="p-6">
                  <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
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
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Niyə Bizi Seçməlisiniz?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Keyfiyyət, etibarlılıq və peşəkarlıq bizim əsas prinsiplərimizdir
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
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Haqqımızda</h2>
              <div className="space-y-4 text-gray-600 text-lg">
                <p>Smart Kilid Sistemləri olaraq, biz Azərbaycanda müasir təhlükəsizlik və avtomatlaşdırma sistemlərinin satışı və quraşdırılması sahəsində fəaliyyət göstəririk.</p>
                <p>Komandamız yüksək ixtisaslı mütəxəssislərdən ibarətdir və müştərilərimizə ən keyfiyyətli xidmət göstərməyə çalışır. Biz həm ev, həm də kommersiya obyektləri üçün həllər təklif edirik.</p>
                <p>Məqsədimiz müştərilərimizin təhlükəsizliyini təmin etmək və ən son texnologiyalardan istifadə edərək rahatlıq yaratmaqdır.</p>
                <p className="font-semibold text-blue-600">Smart Kilid Sistemləri – təhlükəsizlik və avtomatlaşdırma sahəsində etibarlı partnyorunuz, peşəkar satış və quraşdırma xidmətləri təqdim edirik.</p>
              </div>
              <div className="mt-8">
                <a
                  href="https://wa.me/994552370200"
                  target="_blank"
                  rel="noopener"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Bizimlə Əlaqə</span>
                </a>
              </div>
            </div>
            <div>
              <Image src="/images/about-team.webp" alt="About team" width={1400} height={933} className="w-full h-auto rounded-xl shadow-xl" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
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
                  <h3 className="font-semibold mb-2">Telefon</h3>
                  <p className="text-gray-300">+994 55 237 02 00</p>
                  <p className="text-gray-300">+994 70 800 10 00</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-blue-400 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p className="text-gray-300">smartkilid.az@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-blue-400 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Ünvan</h3>
                  <p className="text-gray-300">Bakı, Azərbaycan</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-blue-400 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">İş Saatları</h3>
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
                className="w-full text-lg px-6 py-5 rounded-xl bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white/20 transition-colors flex items-center justify-center gap-3 shadow-lg shadow-green-500/20 ring-1 ring-green-500/50"
              >
                <Phone className="w-5 h-5" />
                <span>WhatsApp (055)</span>
              </button>

              <button
                onClick={() => openWhatsApp('994708001000')}
                aria-label="WhatsApp ilə əlaqə saxla: +994 70 800 10 00"
                className="w-full text-lg px-6 py-5 rounded-xl bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white/20 transition-colors flex items-center justify-center gap-3 shadow-lg shadow-green-500/20 ring-1 ring-green-500/50"
              >
                <Phone className="w-5 h-5" />
                <span>WhatsApp (070)</span>
              </button>

              <a
                href="mailto:smartkilid.az@gmail.com"
                className="w-full text-lg px-6 py-5 rounded-xl bg-blue-600/90 hover:bg-blue-600 transition-colors flex items-center justify-center gap-3 shadow-lg"
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

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p>&copy; 2024 Smart Kilid Sistemləri. Bütün hüquqlar qorunur.</p>
            <p className="mt-2">Təhlükəsizlik və Avtomatlaşdırma Sistemləri</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

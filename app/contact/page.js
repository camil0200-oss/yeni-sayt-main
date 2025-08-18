'use client'

export default function ContactPage() {
  const openWhatsApp = (number) => {
    window.open(`https://wa.me/${number}`, '_blank')
  }

  return (
    <main className="container mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <nav className="text-gray-500 text-base mb-8" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2">
          <li><a href="/" className="hover:underline hover:text-blue-600">Əsas səhifə</a></li>
          <li><span className="mx-2">›</span></li>
          <li><span className="text-gray-700 font-medium">Əlaqə</span></li>
        </ol>
      </nav>

      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Bakıda <span className="text-blue-600">Smart Kilid</span> və <span className="text-blue-600">Access Control</span> ilə Əlaqə
        </h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          <strong>Smart kilid</strong>, <strong>access control</strong>, <strong>turniket sistemi</strong> və 
          <strong> elektron kilid</strong> layihələriniz üçün bizimlə əlaqə saxlayın. 24/7 texniki dəstək və pulsuz konsultasiya.
        </p>
      </section>

      {/* Əlaqə Məlumatları */}
      <section className="grid lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Əlaqə Məlumatları</h2>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600 text-xl">📞</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Telefon</h3>
                <p className="text-gray-700 text-lg mb-2">+994 55 237 02 00</p>
                <p className="text-gray-700 text-lg mb-2">+994 70 800 10 00</p>
                <p className="text-gray-600">Hər gün, 09:00–21:00</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-green-600 text-xl">💬</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">WhatsApp</h3>
                <p className="text-gray-700 text-lg mb-2">+994 55 237 02 00</p>
                <p className="text-gray-700 text-lg mb-2">+994 70 800 10 00</p>
                <p className="text-gray-600">24/7 WhatsApp dəstəyi</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-purple-600 text-xl">📧</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-700 text-lg mb-2">smartkilid.az@gmail.com</p>
                <p className="text-gray-600">Texniki dəstək və layihə məsləhətləri</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-orange-600 text-xl">📍</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Ünvan</h3>
                <p className="text-gray-700 text-lg mb-2">Bakı, Azərbaycan</p>
                <p className="text-gray-600">Bakı və ətraf ərazilərdə xidmət</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Xidmət Sahələrimiz</h2>
          
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-xl shadow-lg border">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Smart Kilid və Elektron Kilid</h3>
              <p className="text-gray-700 mb-3">
                Bakıda <strong>smart kilid</strong> və <strong>elektron kilid</strong> sistemlərinin satışı, 
                quraşdırılması və texniki dəstəyi.
              </p>
              <a href="/services/smart-lock" className="text-blue-600 hover:text-blue-700 font-medium">
                Ətraflı məlumat →
              </a>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Access Control Sistemləri</h3>
              <p className="text-gray-700 mb-3">
                <strong>Access control</strong> və <strong>davamiyyət sistemi</strong> həllləri. 
                Ofis və müəssisələr üçün mərkəzləşdirilmiş idarəetmə.
              </p>
              <a href="/services/access-control" className="text-blue-600 hover:text-blue-700 font-medium">
                Ətraflı məlumat →
              </a>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Turniket və Kartlı Lift</h3>
              <p className="text-gray-700 mb-3">
                <strong>Turniket sistemi</strong> və <strong>kartlı lift</strong> idarəetmə həllləri. 
                Yaşayış kompleksləri və ticarət mərkəzləri üçün.
              </p>
              <a href="/services/turnstile" className="text-blue-600 hover:text-blue-700 font-medium">
                Ətraflı məlumat →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Buttons */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">WhatsApp ilə Əlaqə</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <button
            onClick={() => openWhatsApp('994552370200')}
            className="bg-green-600 text-white p-6 rounded-xl hover:bg-green-700 transition-colors text-center"
          >
            <div className="text-2xl mb-2">📱</div>
            <div className="font-semibold text-lg">WhatsApp (055)</div>
            <div className="text-sm opacity-90">+994 55 237 02 00</div>
          </button>

          <button
            onClick={() => openWhatsApp('994708001000')}
            className="bg-green-600 text-white p-6 rounded-xl hover:bg-green-700 transition-colors text-center"
          >
            <div className="text-2xl mb-2">📱</div>
            <div className="font-semibold text-lg">WhatsApp (070)</div>
            <div className="text-sm opacity-90">+994 70 800 10 00</div>
          </button>
        </div>
      </section>

      {/* Xəritə */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Bakıda Xidmət Sahələrimiz</h2>
        <div className="bg-gray-100 rounded-2xl p-8">
          <div className="aspect-video rounded-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194473.42201399864!2d49.73893!3d40.394734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d6bd6211cf9%3A0x343f6b5e7ae56c6b!2sBaku%2C%20Azerbaijan!5e0!3m2!1sen!2s!4v1633024800000!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Smart Kilid Sistemləri - Bakı xəritəsi və xidmət sahələri"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Tez-tez Verilən Suallar</h2>
        <div className="max-w-4xl mx-auto space-y-4">
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
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Layihəniz üçün Peşəkar Məsləhət</h2>
        <p className="text-xl mb-6 opacity-90">
          Bakıda <strong>smart kilid</strong>, <strong>access control</strong> və <strong>turniket sistemi</strong> 
          layihələriniz üçün pulsuz konsultasiya və yerində baxış xidməti.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="https://wa.me/994552370200"
            className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            WhatsApp Konsultasiya
          </a>
          <a 
            href="tel:+994552370200"
            className="bg-black/20 px-8 py-4 rounded-lg font-semibold hover:bg-black/30 transition-colors"
          >
            Telefon: +994 55 237 02 00
          </a>
        </div>
      </section>
    </main>
  );
}

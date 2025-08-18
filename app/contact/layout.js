export const metadata = {
  title: 'Smart Kilid Sistemləri ilə Əlaqə - Bakıda Təhlükəsizlik Sistemləri | Smartkilid.az',
  description: 'Bakıda smart kilid, access control və turniket sistemi üçün əlaqə. WhatsApp, telefon və email. 24/7 texniki dəstək. Pulsuz konsultasiya.',
  keywords: 'Smart Kilid Sistemləri əlaqə, Bakı smart kilid telefon, access control əlaqə, turniket sistemi əlaqə, Bakı təhlükəsizlik sistemləri əlaqə',
  alternates: { canonical: '/contact' },
  openGraph: {
    type: 'website',
    url: 'https://smartkilid.az/contact',
    title: 'Smart Kilid Sistemləri ilə Əlaqə - Bakıda Təhlükəsizlik Sistemləri',
    description: 'Bakıda smart kilid, access control və turniket sistemi üçün əlaqə. WhatsApp, telefon və email. 24/7 texniki dəstək.',
    siteName: 'Smart Kilid Sistemləri',
    locale: 'az_AZ',
    images: [{ 
      url: '/images/service-keypad.webp', 
      width: 1200, 
      height: 630, 
      alt: 'Smart Kilid Sistemləri əlaqə məlumatları - Bakıda təhlükəsizlik sistemləri' 
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Smart Kilid Sistemləri ilə Əlaqə - Bakıda Təhlükəsizlik Sistemləri',
    description: 'Bakıda smart kilid, access control və turniket sistemi üçün əlaqə. WhatsApp, telefon və email.',
    images: ['/images/service-keypad.webp']
  }
};

export default function ContactLayout({ children }) {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Smart Kilid Sistemləri Əlaqə",
            "description": "Bakıda smart kilid, access control və turniket sistemi üçün əlaqə məlumatları",
            "url": "https://smartkilid.az/contact",
            "mainEntity": {
              "@type": "Organization",
              "name": "Smart Kilid Sistemləri",
              "url": "https://smartkilid.az",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Bakı",
                "addressCountry": "AZ"
              },
              "telephone": ["+994552370200", "+994708001000"],
              "email": "smartkilid.az@gmail.com",
              "openingHours": "Mo-Su 09:00-21:00",
              "areaServed": {
                "@type": "City",
                "name": "Bakı",
                "addressCountry": "AZ"
              }
            }
          })
        }}
      />

      {/* BreadcrumbList JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Əsas səhifə", "item": "https://smartkilid.az/" },
              { "@type": "ListItem", "position": 2, "name": "Əlaqə", "item": "https://smartkilid.az/contact" }
            ]
          })
        }}
      />
      {children}
    </>
  );
}

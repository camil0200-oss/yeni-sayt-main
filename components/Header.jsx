'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Mobil menyu açıqkən səhifə scroll-unun qarşısını al
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  // Səhifə dəyişəndə mobil menyunu bağla
  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className={`fixed top-0 inset-x-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="text-2xl md:text-3xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
            Smart Kilid Sistemləri
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            <Link 
              href="/" 
              className="px-3 py-2 rounded-md text-sm lg:text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
            >
              Əsas Səhifə
            </Link>
            <Link 
              href="/services" 
              className="px-3 py-2 rounded-md text-sm lg:text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
            >
              Xidmətlərimiz
            </Link>
            <Link 
              href="/about" 
              className="px-3 py-2 rounded-md text-sm lg:text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
            >
              Haqqımızda
            </Link>
            <Link 
              href="/contact" 
              className="px-3 py-2 rounded-md text-sm lg:text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
            >
              Əlaqə
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Menyunu bağla' : 'Menyunu aç'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          id="mobile-menu" 
          className="md:hidden fixed inset-0 z-50 bg-white"
          style={{ top: '72px' }} // Header hündürlüyünə uyğun
        >
          <div className="container mx-auto px-4 py-6">
            <nav className="flex flex-col space-y-2">
              <Link 
                href="/" 
                onClick={handleLinkClick}
                className="px-4 py-3 text-lg font-medium text-gray-900 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
              >
                Əsas Səhifə
              </Link>
              <Link 
                href="/services" 
                onClick={handleLinkClick}
                className="px-4 py-3 text-lg font-medium text-gray-900 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
              >
                Xidmətlərimiz
              </Link>
              <Link 
                href="/about" 
                onClick={handleLinkClick}
                className="px-4 py-3 text-lg font-medium text-gray-900 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
              >
                Haqqımızda
              </Link>
              <Link 
                href="/contact" 
                onClick={handleLinkClick}
                className="px-4 py-3 text-lg font-medium text-gray-900 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
              >
                Əlaqə
              </Link>
              
              {/* Mobile Contact Info */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <span className="text-green-600">📞</span>
                    <a 
                      href="tel:+994552370200" 
                      className="text-lg font-medium text-gray-900 hover:text-blue-600"
                    >
                      +994 55 237 02 00
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-green-600">💬</span>
                    <a 
                      href="https://wa.me/994552370200" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-medium text-gray-900 hover:text-green-600"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}



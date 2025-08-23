'use client'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-[9999] bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-3 sm:px-4">
          <div className="flex items-center justify-between py-3 sm:py-4">
            {/* Logo */}
            <Link href="/" className="text-lg sm:text-xl md:text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors flex-shrink-0">
              <span className="hidden sm:inline">Smart Kilid Sistemləri</span>
              <span className="sm:hidden">Smart Kilid</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors whitespace-nowrap">
                Əsas Səhifə
              </Link>
              <Link href="/services" className="text-gray-700 hover:text-blue-600 font-medium transition-colors whitespace-nowrap">
                Xidmətlərimiz
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors whitespace-nowrap">
                Haqqımızda
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors whitespace-nowrap">
                Əlaqə
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 ml-2 text-gray-700 hover:text-blue-600 transition-colors relative z-[10000] flex-shrink-0"
              onClick={toggleMenu}
              aria-label="Menyunu aç/bağla"
            >
              {isMenuOpen ? <X size={20} className="sm:w-6 sm:h-6" /> : <Menu size={20} className="sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-16 sm:top-20 z-[9998] bg-white lg:hidden overflow-y-auto">
          <div className="max-w-6xl mx-auto px-3 sm:px-4 py-4 sm:py-6">
            <nav className="flex flex-col space-y-1 sm:space-y-2">
              <Link
                href="/"
                onClick={closeMenu}
                className="text-base sm:text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors py-2 sm:py-3 px-3 sm:px-4 rounded-lg hover:bg-gray-50"
              >
                Əsas Səhifə
              </Link>
              <Link
                href="/services"
                onClick={closeMenu}
                className="text-base sm:text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors py-2 sm:py-3 px-3 sm:px-4 rounded-lg hover:bg-gray-50"
              >
                Xidmətlərimiz
              </Link>
              <Link
                href="/about"
                onClick={closeMenu}
                className="text-base sm:text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors py-2 sm:py-3 px-3 sm:px-4 rounded-lg hover:bg-gray-50"
              >
                Haqqımızda
              </Link>
              <Link
                href="/contact"
                onClick={closeMenu}
                className="text-base sm:text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors py-2 sm:py-3 px-3 sm:px-4 rounded-lg hover:bg-gray-50"
              >
                Əlaqə
              </Link>

              {/* Contact Info */}
              <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-gray-200">
                <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-2 sm:mb-3 px-3 sm:px-0">
                  Əlaqə
                </h3>
                <div className="space-y-1 sm:space-y-2">
                  <a
                    href="tel:+994552370200"
                    className="flex items-center space-x-2 sm:space-x-3 text-sm sm:text-base text-gray-700 hover:text-blue-600 transition-colors py-2 px-3 sm:px-4 rounded-lg hover:bg-gray-50"
                  >
                    <span className="text-lg">📞</span>
                    <span>+994 55 237 02 00</span>
                  </a>
                  <a
                    href="https://wa.me/994552370200"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 sm:space-x-3 text-sm sm:text-base text-gray-700 hover:text-blue-600 transition-colors py-2 px-3 sm:px-4 rounded-lg hover:bg-gray-50"
                  >
                    <span className="text-lg">💬</span>
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}



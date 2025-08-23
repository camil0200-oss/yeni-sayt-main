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
      <header className="fixed top-0 left-0 right-0 z-[9999] bg-gradient-to-r from-white via-blue-50 to-white backdrop-blur-md bg-white/90 shadow-lg border-b border-blue-100">
        <div className="max-w-6xl mx-auto px-3 sm:px-4">
          <div className="flex items-center justify-between py-3 sm:py-4">
            {/* Logo */}
            <Link href="/" className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 transition-all duration-300 flex-shrink-0 group">
              <div className="relative">
                <span className="hidden sm:inline">Smart Kilid Sistemləri</span>
                <span className="sm:hidden">Smart Kilid</span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-2 xl:space-x-4">
              <Link href="/" className="relative text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 px-4 py-2 rounded-full hover:bg-blue-50 whitespace-nowrap group">
                <span>Əsas Səhifə</span>
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-blue-600 group-hover:w-3/4 transition-all duration-300"></div>
              </Link>
              <Link href="/services" className="relative text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 px-4 py-2 rounded-full hover:bg-blue-50 whitespace-nowrap group">
                <span>Xidmətlərimiz</span>
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-blue-600 group-hover:w-3/4 transition-all duration-300"></div>
              </Link>
              <Link href="/about" className="relative text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 px-4 py-2 rounded-full hover:bg-blue-50 whitespace-nowrap group">
                <span>Haqqımızda</span>
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-blue-600 group-hover:w-3/4 transition-all duration-300"></div>
              </Link>
              <Link href="/contact" className="relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold transition-all duration-300 px-6 py-2 rounded-full hover:from-blue-700 hover:to-indigo-700 hover:scale-105 hover:shadow-lg whitespace-nowrap transform">
                <span>Əlaqə</span>
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-3 ml-2 text-gray-700 hover:text-blue-600 transition-all duration-300 relative z-[10000] flex-shrink-0 rounded-full hover:bg-blue-50 hover:scale-110 transform group"
              onClick={toggleMenu}
              aria-label="Menyunu aç/bağla"
            >
              <div className="relative">
                {isMenuOpen ? (
                  <X size={20} className="sm:w-6 sm:h-6 transform rotate-180 transition-transform duration-300" />
                ) : (
                  <Menu size={20} className="sm:w-6 sm:h-6 group-hover:animate-pulse" />
                )}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-16 sm:top-20 z-[9998] bg-gradient-to-br from-white/95 via-blue-50/95 to-indigo-50/95 backdrop-blur-lg lg:hidden overflow-y-auto animate-in slide-in-from-top-2 duration-300">
          <div className="max-w-6xl mx-auto px-3 sm:px-4 py-4 sm:py-6">
            <nav className="flex flex-col space-y-1 sm:space-y-2">
              <Link
                href="/"
                onClick={closeMenu}
                className="text-base sm:text-lg font-medium text-gray-900 hover:text-blue-600 transition-all duration-300 py-2 sm:py-3 px-3 sm:px-4 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:scale-105 transform group relative overflow-hidden"
              >
                <span className="relative z-10">Əsas Səhifə</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"></div>
              </Link>
              <Link
                href="/services"
                onClick={closeMenu}
                className="text-base sm:text-lg font-medium text-gray-900 hover:text-blue-600 transition-all duration-300 py-2 sm:py-3 px-3 sm:px-4 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:scale-105 transform group relative overflow-hidden"
              >
                <span className="relative z-10">Xidmətlərimiz</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"></div>
              </Link>
              <Link
                href="/about"
                onClick={closeMenu}
                className="text-base sm:text-lg font-medium text-gray-900 hover:text-blue-600 transition-all duration-300 py-2 sm:py-3 px-3 sm:px-4 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:scale-105 transform group relative overflow-hidden"
              >
                <span className="relative z-10">Haqqımızda</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"></div>
              </Link>
              <Link
                href="/contact"
                onClick={closeMenu}
                className="text-base sm:text-lg font-semibold text-white transition-all duration-300 py-2 sm:py-3 px-3 sm:px-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 hover:scale-105 transform hover:shadow-lg mt-2"
              >
                Əlaqə
              </Link>

              {/* Contact Info */}
              <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-gradient-to-r from-blue-200 to-indigo-200">
                <h3 className="text-sm sm:text-base font-semibold bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent mb-2 sm:mb-3 px-3 sm:px-0">
                  Əlaqə Məlumatları
                </h3>
                <div className="space-y-1 sm:space-y-2">
                  <a
                    href="tel:+994552370200"
                    className="flex items-center space-x-2 sm:space-x-3 text-sm sm:text-base text-gray-700 hover:text-blue-600 transition-all duration-300 py-2 px-3 sm:px-4 rounded-xl hover:bg-gradient-to-r hover:from-green-50 hover:to-blue-50 hover:scale-105 transform group"
                  >
                    <span className="text-lg group-hover:animate-bounce">📞</span>
                    <span className="font-medium">+994 55 237 02 00</span>
                  </a>
                  <a
                    href="https://wa.me/994552370200"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 sm:space-x-3 text-sm sm:text-base text-gray-700 hover:text-green-600 transition-all duration-300 py-2 px-3 sm:px-4 rounded-xl hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 hover:scale-105 transform group"
                  >
                    <span className="text-lg group-hover:animate-bounce">💬</span>
                    <span className="font-medium">WhatsApp</span>
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



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
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link href="/" className="text-2xl md:text-3xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
              Smart Kilid Sistemləri
            </Link>

            {/* Desktop Navigation */}
            <nav className="desktop-nav hidden md:flex items-center space-x-6">
              <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Əsas Səhifə
              </Link>
              <Link href="/services" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Xidmətlərimiz
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Haqqımızda
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Əlaqə
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="mobile-menu-button block md:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
              onClick={toggleMenu}
              aria-label="Menyunu aç/bağla"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="mobile-menu-overlay block md:hidden">
          <div className="max-w-6xl mx-auto px-4 py-8">
            <nav className="flex flex-col space-y-4">
              <Link 
                href="/" 
                onClick={closeMenu}
                className="text-xl font-medium text-gray-900 hover:text-blue-600 py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Əsas Səhifə
              </Link>
              <Link 
                href="/services" 
                onClick={closeMenu}
                className="text-xl font-medium text-gray-900 hover:text-blue-600 py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Xidmətlərimiz
              </Link>
              <Link 
                href="/about" 
                onClick={closeMenu}
                className="text-xl font-medium text-gray-900 hover:text-blue-600 py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Haqqımızda
              </Link>
              <Link 
                href="/contact" 
                onClick={closeMenu}
                className="text-xl font-medium text-gray-900 hover:text-blue-600 py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Əlaqə
              </Link>
              
              {/* Contact Info */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Əlaqə</h3>
                <div className="space-y-3">
                  <a 
                    href="tel:+994552370200" 
                    className="flex items-center space-x-3 text-lg text-gray-700 hover:text-blue-600"
                  >
                    <span>📞</span>
                    <span>+994 55 237 02 00</span>
                  </a>
                  <a 
                    href="https://wa.me/994552370200" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-lg text-gray-700 hover:text-green-600"
                  >
                    <span>💬</span>
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



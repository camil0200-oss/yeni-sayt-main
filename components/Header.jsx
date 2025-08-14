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

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
  }, [isMenuOpen])

  return (
    <header className={`site-header transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''}`}>
      <div className="container py-4">
        <div className="flex items-center justify-between">
          <div className="text-3xl font-bold text-blue-600">Smart Kilid Sistemləri</div>

          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            <Link href="/" className="px-3 py-2 rounded-md text-base md:text-lg font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50 transition-colors">Əsas Səhifə</Link>
            <Link href="/services" className="px-3 py-2 rounded-md text-base md:text-lg font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50 transition-colors">Xidmətlərimiz</Link>
            <Link href="/about" className="px-3 py-2 rounded-md text-base md:text-lg font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50 transition-colors">Haqqımızda</Link>
            <Link href="/contact" className="px-3 py-2 rounded-md text-base md:text-lg font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50 transition-colors">Əlaqə</Link>
          </nav>

          <button
            className="md:hidden p-2 mobile-menu-trigger"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Menyunu bağla' : 'Menyunu aç'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div id="mobile-menu" className="mobile-menu-overlay md:hidden">
          <div className="container py-6">
            <div className="flex flex-col space-y-4">
              <Link href="/" onClick={() => setIsMenuOpen(false)} className="text-left text-gray-800 hover:bg-gray-100 rounded-lg px-4 py-3 text-lg">Əsas Səhifə</Link>
              <Link href="/services" onClick={() => setIsMenuOpen(false)} className="text-left text-gray-800 hover:bg-gray-100 rounded-lg px-4 py-3 text-lg">Xidmətlərimiz</Link>
              <Link href="/about" onClick={() => setIsMenuOpen(false)} className="text-left text-gray-800 hover:bg-gray-100 rounded-lg px-4 py-3 text-lg">Haqqımızda</Link>
              <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="text-left text-gray-800 hover:bg-gray-100 rounded-lg px-4 py-3 text-lg">Əlaqə</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}



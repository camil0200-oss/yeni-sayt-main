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
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: 'white',
        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
        borderBottom: '1px solid #e5e7eb'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1rem'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '1rem 0'
          }}>
            {/* Logo */}
            <Link href="/" style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: '#2563eb',
              textDecoration: 'none'
            }}>
              Smart Kilid Sistemləri
            </Link>

            {/* Desktop Navigation */}
            <nav style={{
              display: 'none',
              alignItems: 'center',
              gap: '1.5rem'
            }} className="md:flex">
              <Link href="/" style={{
                color: '#374151',
                textDecoration: 'none',
                fontWeight: '500'
              }}>
                Əsas Səhifə
              </Link>
              <Link href="/services" style={{
                color: '#374151',
                textDecoration: 'none',
                fontWeight: '500'
              }}>
                Xidmətlərimiz
              </Link>
              <Link href="/about" style={{
                color: '#374151',
                textDecoration: 'none',
                fontWeight: '500'
              }}>
                Haqqımızda
              </Link>
              <Link href="/contact" style={{
                color: '#374151',
                textDecoration: 'none',
                fontWeight: '500'
              }}>
                Əlaqə
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              style={{
                display: 'block',
                padding: '0.5rem',
                color: '#374151',
                border: 'none',
                background: 'none',
                cursor: 'pointer'
              }}
              className="md:hidden"
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
        <div style={{
          position: 'fixed',
          top: '72px',
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 40,
          backgroundColor: 'white',
          overflowY: 'auto',
          padding: '2rem 1rem'
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            <nav style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}>
              <Link 
                href="/" 
                onClick={closeMenu}
                style={{
                  fontSize: '1.25rem',
                  fontWeight: '500',
                  color: '#111827',
                  textDecoration: 'none',
                  padding: '0.75rem 1rem',
                  borderRadius: '0.5rem',
                  backgroundColor: '#f9fafb'
                }}
              >
                Əsas Səhifə
              </Link>
              <Link 
                href="/services" 
                onClick={closeMenu}
                style={{
                  fontSize: '1.25rem',
                  fontWeight: '500',
                  color: '#111827',
                  textDecoration: 'none',
                  padding: '0.75rem 1rem',
                  borderRadius: '0.5rem',
                  backgroundColor: '#f9fafb'
                }}
              >
                Xidmətlərimiz
              </Link>
              <Link 
                href="/about" 
                onClick={closeMenu}
                style={{
                  fontSize: '1.25rem',
                  fontWeight: '500',
                  color: '#111827',
                  textDecoration: 'none',
                  padding: '0.75rem 1rem',
                  borderRadius: '0.5rem',
                  backgroundColor: '#f9fafb'
                }}
              >
                Haqqımızda
              </Link>
              <Link 
                href="/contact" 
                onClick={closeMenu}
                style={{
                  fontSize: '1.25rem',
                  fontWeight: '500',
                  color: '#111827',
                  textDecoration: 'none',
                  padding: '0.75rem 1rem',
                  borderRadius: '0.5rem',
                  backgroundColor: '#f9fafb'
                }}
              >
                Əlaqə
              </Link>
              
              {/* Contact Info */}
              <div style={{
                marginTop: '2rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid #e5e7eb'
              }}>
                <h3 style={{
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  color: '#111827',
                  marginBottom: '1rem'
                }}>
                  Əlaqə
                </h3>
                <div style={{ gap: '0.75rem', display: 'flex', flexDirection: 'column' }}>
                  <a 
                    href="tel:+994552370200" 
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      fontSize: '1.125rem',
                      color: '#374151',
                      textDecoration: 'none',
                      padding: '0.5rem',
                      borderRadius: '0.5rem',
                      backgroundColor: '#f9fafb'
                    }}
                  >
                    <span>📞</span>
                    <span>+994 55 237 02 00</span>
                  </a>
                  <a 
                    href="https://wa.me/994552370200" 
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      fontSize: '1.125rem',
                      color: '#374151',
                      textDecoration: 'none',
                      padding: '0.5rem',
                      borderRadius: '0.5rem',
                      backgroundColor: '#f9fafb'
                    }}
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



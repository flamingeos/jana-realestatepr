'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/properties', label: 'Properties' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ]

  const isTransparent = isHome && !scrolled
  const navBg = isTransparent ? 'bg-transparent' : 'bg-white shadow-sm'

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="font-bold text-xl tracking-tight">
            <span style={{ color: isTransparent ? 'white' : '#466D7A' }}>Jana</span>
            <span style={{ color: '#1EB39F' }}>PR</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-all"
                style={{
                  color: pathname === link.href
                    ? '#1EB39F'
                    : isTransparent ? 'rgba(255,255,255,0.85)' : '#466D7A',
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="text-sm font-semibold px-5 py-2.5 rounded-full text-white transition-all hover:opacity-90"
              style={{ backgroundColor: '#EF8853' }}
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg"
            style={{ color: isTransparent ? 'white' : '#466D7A' }}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t px-6 py-5 space-y-1" style={{ borderColor: '#F1E7D6' }}>
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-sm font-medium rounded-lg px-3 transition-colors"
              style={{
                color: pathname === link.href ? '#1EB39F' : '#466D7A',
                backgroundColor: pathname === link.href ? '#F1E7D6' : 'transparent',
              }}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3">
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="block text-center text-white font-semibold px-5 py-3 rounded-full transition-all hover:opacity-90"
              style={{ backgroundColor: '#EF8853' }}
            >
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const serviceAreas = ['Moca', 'San Sebastián', 'Isabela', 'Aguada', 'Añasco', 'Mayagüez', 'Hatillo', 'Arecibo']

  return (
    <footer style={{ backgroundColor: '#466D7A' }} className="text-white/70">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="font-bold text-2xl tracking-tight">
              <span className="text-white">Jana</span>
              <span style={{ color: '#1EB39F' }}>PR</span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed max-w-sm text-white/60">
              Specialists in western Puerto Rico real estate. Serving Moca, San Sebastián, Isabela, Aguada, Mayagüez and surrounding municipalities.
            </p>
            <div className="mt-4 space-y-1.5 text-sm">
              <p>
                <span style={{ color: '#1EB39F' }}>📞</span>{' '}
                <a href="tel:+17876242956" className="hover:text-white transition-colors">(787) 624-2956</a>
                <span className="text-white/30 mx-2">·</span>
                <a href="tel:+19394383061" className="hover:text-white transition-colors">(939) 438-3061</a>
              </p>
              <p className="text-white/60">
                <span style={{ color: '#1EB39F' }}>📍</span>{' '}
                HC 05 Box 10620, Moca, PR 00676
              </p>
            </div>

            {/* Socials */}
            <div className="mt-5 flex items-center gap-3">
              <a href="https://www.facebook.com/Janarealestatee/" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:opacity-80"
                style={{ backgroundColor: 'rgba(255,255,255,0.15)' }} aria-label="Facebook">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/jana.realestatepr/" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:opacity-80"
                style={{ backgroundColor: 'rgba(255,255,255,0.15)' }} aria-label="Instagram">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a href="https://www.youtube.com/@janarealestate" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:opacity-80"
                style={{ backgroundColor: 'rgba(255,255,255,0.15)' }} aria-label="YouTube">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-xs tracking-widest uppercase">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              {[
                { href: '/', label: 'Home' },
                { href: '/properties', label: 'All Properties' },
                { href: '/about', label: 'About Us' },
                { href: '/contact', label: 'Contact Us' },
              ].map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-xs tracking-widest uppercase">Service Areas</h3>
            <ul className="space-y-3 text-sm">
              {serviceAreas.map(loc => (
                <li key={loc}>
                  <Link href={`/properties?location=${encodeURIComponent(loc)}`} className="hover:text-white transition-colors">
                    {loc}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t space-y-2" style={{ borderColor: 'rgba(255,255,255,0.15)' }}>
          <p className="text-center text-xs text-white/40">
            José L. González Reyes, Lic. C21635 &nbsp;|&nbsp; JANA REAL ESTATE LLC &nbsp;|&nbsp; Puerto Rico Realtors® MLS Office #436
          </p>
          <p className="text-center text-xs text-white/40">
            © {currentYear} Jana Real Estate LLC. All rights reserved. · Licensed Real Estate Broker · Puerto Rico Dept. of State
          </p>
        </div>
      </div>
    </footer>
  )
}

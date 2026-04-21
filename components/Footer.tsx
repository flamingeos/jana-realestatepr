import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="text-white font-bold text-2xl tracking-tight">
              Jana<span style={{color: 'var(--gold)'}}>PR</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed max-w-sm">
              Puerto Rico&apos;s premier luxury real estate platform. Connecting discerning buyers and sellers with exceptional properties across the island.
            </p>
            <p className="mt-4 text-sm">
              <span style={{color: 'var(--gold)'}}>📞</span>{' '}
              <a href="tel:+17875550100" className="hover:text-white transition-colors">+1 (787) 555-0100</a>
            </p>
            <p className="mt-1 text-sm">
              <span style={{color: 'var(--gold)'}}>✉️</span>{' '}
              <a href="mailto:hello@janarealestate.pr" className="hover:text-white transition-colors">hello@janarealestate.pr</a>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              {[
                { href: '/', label: 'Home' },
                { href: '/properties', label: 'All Properties' },
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

          {/* Locations */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase">Locations</h3>
            <ul className="space-y-3 text-sm">
              {['San Juan', 'Dorado', 'Condado', 'Isla Verde', 'Rincón', 'Humacao'].map(loc => (
                <li key={loc}>
                  <Link href={`/properties?location=${encodeURIComponent(loc)}`} className="hover:text-white transition-colors">
                    {loc}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>© {currentYear} Jana RealestatePR. All rights reserved.</p>
          <p>Licensed Real Estate Broker · Puerto Rico</p>
        </div>
      </div>
    </footer>
  )
}

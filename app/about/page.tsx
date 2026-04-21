'use client'

import Link from 'next/link'
import Image from 'next/image'
import LeadForm from '@/components/LeadForm'

const agentStats = [
  { value: '11', label: 'Ventas Cerradas' },
  { value: '$2M+', label: 'Volumen Total' },
  { value: '~$180K', label: 'Precio Promedio' },
  { value: '2+', label: 'Años Activo' },
]

const team = [
  {
    name: 'José L. González Reyes',
    license: 'C21635',
    phone: '(787) 624-2956',
    phone2: '(939) 438-3061',
    role: 'Broker / Owner',
    bio: 'José dirige Jana Real Estate LLC con enfoque en el occidente de Puerto Rico. Registrado en el Puerto Rico Realtors® MLS (Oficina #436) y partner verificado de ClasificadosOnline desde 2022, ha cerrado 11 transacciones por más de $2M.',
    primary: true,
  },
  {
    name: 'Carlos Javier González',
    license: 'V4106',
    phone: '(787) 955-8021',
    phone2: null,
    role: 'Sales Associate',
    bio: 'Carlos aporta conocimiento profundo de la región occidental y se especializa en transacciones residenciales y de propiedades rurales.',
    primary: false,
  },
  {
    name: 'James Jiménez Chaparro',
    license: 'C26382',
    phone: '(787) 942-4642',
    phone2: null,
    role: 'Sales Associate',
    bio: 'James se enfoca en propiedades de inversión y adquisición de terrenos en el oeste de Puerto Rico, ayudando a clientes a identificar oportunidades de alto valor.',
    primary: false,
  },
]

const serviceAreas = ['Moca', 'San Sebastián', 'Isabela', 'Aguada', 'Añasco', 'Mayagüez', 'Hatillo', 'Arecibo']

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="pt-28 pb-16 px-6" style={{ backgroundColor: '#466D7A' }}>
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#1EB39F' }}>
            Bienes Raíces en el Oeste de PR
          </span>
          <h1 className="mt-3 text-5xl font-bold text-white tracking-tight">Conoce al Equipo</h1>
          <p className="mt-4 text-lg" style={{ color: 'rgba(255,255,255,0.65)' }}>
            Licenciados, locales y dedicados a ayudarte a comprar, vender o invertir en el occidente de Puerto Rico.
          </p>
        </div>
      </div>

      {/* Lead Agent */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Photo */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden" style={{ backgroundColor: '#F1E7D6' }}>
              <Image
                src="/jose-gonzalez.png"
                alt="José L. González Reyes — Jana Real Estate PR"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white rounded-xl px-5 py-3 shadow-lg border" style={{ borderColor: 'rgba(179,179,179,0.2)' }}>
              <p className="text-xs font-medium uppercase tracking-wider" style={{ color: '#B3B3B3' }}>Licencia</p>
              <p className="font-bold" style={{ color: '#466D7A' }}>C21635</p>
            </div>
          </div>

          {/* Bio */}
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#1EB39F' }}>
              Broker · Owner
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight" style={{ color: '#466D7A' }}>
              José L. González Reyes
            </h2>
            <p className="mt-1 text-sm" style={{ color: '#B3B3B3' }}>JANA REAL ESTATE LLC · MLS Oficina #436</p>

            <p className="mt-5 leading-relaxed text-sm" style={{ color: '#466D7A', opacity: 0.85 }}>
              José dirige Jana Real Estate LLC con enfoque en el occidente de Puerto Rico. Registrado en el Puerto Rico Realtors® MLS (Oficina #436) y partner verificado de ClasificadosOnline desde 2022, ha cerrado 11 transacciones por más de $2M — ayudando a familias e inversores a encontrar la propiedad correcta en Moca, San Sebastián, Isabela, Aguada, Mayagüez y más.
            </p>
            <p className="mt-4 leading-relaxed text-sm" style={{ color: '#466D7A', opacity: 0.85 }}>
              Ya sea que busques una vivienda familiar, un proyecto de remodelación, un terreno o una propiedad de inversión — José aporta conocimiento local honesto y orientación práctica en cada transacción.
            </p>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {agentStats.map(stat => (
                <div key={stat.label} className="rounded-xl p-4 text-center" style={{ backgroundColor: '#F1E7D6' }}>
                  <p className="text-2xl font-bold" style={{ color: '#EF8853' }}>{stat.value}</p>
                  <p className="text-xs mt-0.5" style={{ color: '#B3B3B3' }}>{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Contact buttons */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="tel:+17876242956"
                className="flex items-center gap-2 px-5 py-3 rounded-xl text-white text-sm font-semibold transition-all hover:opacity-90"
                style={{ backgroundColor: '#EF8853' }}>
                📞 (787) 624-2956
              </a>
              <a href="tel:+19394383061"
                className="flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition-all hover:opacity-90"
                style={{ backgroundColor: '#F1E7D6', color: '#466D7A' }}>
                📞 (939) 438-3061
              </a>
            </div>

            {/* Badges */}
            <div className="mt-6 flex flex-wrap gap-2">
              {['PR Realtors® MLS #436', 'ClasificadosOnline 2022', 'Depto. de Estado PR', 'Lic. C21635'].map(badge => (
                <span key={badge} className="text-xs font-medium px-3 py-1.5 rounded-full border"
                  style={{ backgroundColor: '#F1E7D6', color: '#466D7A', borderColor: 'rgba(70,109,122,0.2)' }}>
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-6" style={{ backgroundColor: '#F1E7D6' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#1EB39F' }}>
              Nuestros Agentes
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight" style={{ color: '#466D7A' }}>El Equipo Jana</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {team.map(member => (
              <div
                key={member.name}
                className="bg-white rounded-2xl p-6 transition-all hover:shadow-md"
                style={{
                  border: member.primary ? '2px solid #1EB39F' : '1px solid rgba(179,179,179,0.2)',
                }}
              >
                {/* Avatar */}
                <div className="w-16 h-16 rounded-full overflow-hidden mb-4" style={{ backgroundColor: '#F1E7D6' }}>
                  {member.primary ? (
                    <Image
                      src="/jose-gonzalez.png"
                      alt={member.name}
                      width={64} height={64}
                      className="w-full h-full object-cover object-top"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-2xl">👤</div>
                  )}
                </div>

                {member.primary && (
                  <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-3 text-white" style={{ backgroundColor: '#1EB39F' }}>
                    Broker · Owner
                  </span>
                )}

                <h3 className="font-bold text-lg" style={{ color: '#466D7A' }}>{member.name}</h3>
                <p className="text-sm" style={{ color: '#B3B3B3' }}>{member.role} · Lic. {member.license}</p>
                <p className="mt-3 text-sm leading-relaxed" style={{ color: '#466D7A', opacity: 0.8 }}>{member.bio}</p>

                <div className="mt-4 pt-4 space-y-1" style={{ borderTop: '1px solid rgba(179,179,179,0.2)' }}>
                  <a href={`tel:+1${member.phone.replace(/\D/g, '')}`}
                    className="block text-sm font-medium transition-colors hover:opacity-80"
                    style={{ color: '#1EB39F' }}>
                    📞 {member.phone}
                  </a>
                  {member.phone2 && (
                    <a href={`tel:+1${member.phone2.replace(/\D/g, '')}`}
                      className="block text-sm font-medium transition-colors hover:opacity-80"
                      style={{ color: '#1EB39F' }}>
                      📞 {member.phone2}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#1EB39F' }}>
            Dónde Trabajamos
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight" style={{ color: '#466D7A' }}>Área de Servicio</h2>
          <p className="mt-3 text-sm" style={{ color: '#B3B3B3' }}>
            Nos especializamos en transacciones residenciales, comerciales y de terrenos en el occidente de Puerto Rico.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {serviceAreas.map(area => (
              <Link
                key={area}
                href={`/properties?location=${encodeURIComponent(area)}`}
                className="group flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium transition-all border"
                style={{ backgroundColor: '#F1E7D6', color: '#466D7A', borderColor: 'rgba(179,179,179,0.2)' }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#1EB39F'
                  ;(e.currentTarget as HTMLAnchorElement).style.color = 'white'
                  ;(e.currentTarget as HTMLAnchorElement).style.borderColor = '#1EB39F'
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#F1E7D6'
                  ;(e.currentTarget as HTMLAnchorElement).style.color = '#466D7A'
                  ;(e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(179,179,179,0.2)'
                }}
              >
                <span>📍</span>
                <span>{area}</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>

          <div className="mt-10 h-48 rounded-2xl flex items-center justify-center border" style={{ backgroundColor: '#F1E7D6', borderColor: 'rgba(179,179,179,0.2)' }}>
            <div className="text-center">
              <p className="text-3xl mb-2">🗺️</p>
              <p className="font-medium" style={{ color: '#466D7A' }}>Occidente de Puerto Rico</p>
              <p className="text-sm mt-1" style={{ color: '#B3B3B3' }}>Moca · San Sebastián · Isabela · Aguada · Añasco · Mayagüez · Hatillo · Arecibo</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6" style={{ backgroundColor: '#466D7A' }}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#1EB39F' }}>
              ¿Listo para Trabajar Juntos?
            </span>
            <h2 className="mt-3 text-3xl font-bold text-white leading-tight">
              Encontremos Tu Propiedad en el Occidente de Puerto Rico
            </h2>
            <p className="mt-4 text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
              Contáctanos hoy para una consulta gratuita sin compromiso.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {[
                { href: 'https://www.facebook.com/Janarealestatee/', label: 'Facebook' },
                { href: 'https://www.instagram.com/jana.realestatepr/', label: 'Instagram' },
                { href: 'https://www.youtube.com/@janarealestate', label: 'YouTube' },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="text-sm transition-colors hover:text-white"
                  style={{ color: 'rgba(255,255,255,0.6)' }}>
                  {s.label} ↗
                </a>
              ))}
            </div>
          </div>
          <div className="rounded-2xl p-8" style={{ backgroundColor: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)' }}>
            <LeadForm
              variant="dark"
              title="Contacta al Equipo"
              subtitle="Respondemos en pocas horas."
              assignedAgent="José L. González Reyes"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

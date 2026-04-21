import Link from 'next/link'
import Image from 'next/image'
import { getFeaturedProperties } from '@/lib/properties'
import PropertyCard from '@/components/PropertyCard'
import SearchBar from '@/components/SearchBar'
import LeadForm from '@/components/LeadForm'
import FeatureCard from '@/components/FeatureCard'
import { Property } from '@/types'

const stats = [
  { value: '11', label: 'Ventas Cerradas' },
  { value: '$2M+', label: 'Volumen Total' },
  { value: '~$180K', label: 'Precio Promedio' },
  { value: '2+', label: 'Años en PR' },
]

const features = [
  {
    icon: '🏡',
    title: 'Especialistas en el Oeste',
    description: 'Conocimiento profundo de Moca, San Sebastián, Isabela, Aguada, Mayagüez y municipios del occidente.',
  },
  {
    icon: '🤝',
    title: 'Oficina MLS Registrada',
    description: 'Registrados oficialmente en el Puerto Rico Realtors® MLS (Oficina #436) con acceso completo al mercado.',
  },
  {
    icon: '📋',
    title: 'Partner ClasificadosOnline',
    description: 'Verificados desde 2022 — tu propiedad llega a miles de compradores en el portal líder de Puerto Rico.',
  },
  {
    icon: '🔒',
    title: 'Licenciados y Confiables',
    description: 'José L. González Reyes, Lic. C21635. JANA REAL ESTATE LLC — regulado por el Depto. de Estado de PR.',
  },
]

export default async function HomePage() {
  let featuredProperties: Property[] = []
  try {
    featuredProperties = await getFeaturedProperties() as Property[]
  } catch {
    // DB not yet seeded
  }

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1800&q=80"
          alt="Propiedad en Puerto Rico"
          fill priority
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, rgba(70,109,122,0.75) 0%, rgba(70,109,122,0.55) 40%, rgba(70,109,122,0.80) 100%)' }}
        />

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase mb-6 px-4 py-2 rounded-full border text-white/80"
            style={{ borderColor: 'rgba(255,255,255,0.3)', backdropFilter: 'blur(8px)' }}
          >
            Especialistas en el Oeste de Puerto Rico
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight">
            Encuentra tu Hogar<br />
            <span style={{ color: '#1EB39F' }}>en el Oeste de PR</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Casas, terrenos y propiedades de inversión en Moca, San Sebastián, Isabela, Aguada, Mayagüez y más. MLS registrado · Partner ClasificadosOnline desde 2022.
          </p>

          <div className="mt-10">
            <SearchBar />
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-8">
            {stats.map(stat => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl font-bold" style={{ color: '#1EB39F' }}>{stat.value}</p>
                <p className="text-xs text-white/60 mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* Featured Listings */}
      {featuredProperties.length > 0 && (
        <section className="py-24 px-6" style={{ backgroundColor: '#F1E7D6' }}>
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
              <div>
                <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#1EB39F' }}>
                  Seleccionadas para Ti
                </span>
                <h2 className="mt-2 text-4xl font-bold tracking-tight" style={{ color: '#466D7A' }}>
                  Propiedades Destacadas
                </h2>
              </div>
              <Link
                href="/properties"
                className="mt-4 md:mt-0 text-sm font-semibold flex items-center gap-2 transition-all hover:gap-3"
                style={{ color: '#1EB39F' }}
              >
                Ver todas las propiedades
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProperties.map(property => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Why Choose Us */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#1EB39F' }}>
              Por qué Jana RealestatePR
            </span>
            <h2 className="mt-2 text-4xl font-bold tracking-tight" style={{ color: '#466D7A' }}>
              Tus Expertos Locales en el Oeste de PR
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-sm leading-relaxed" style={{ color: '#B3B3B3' }}>
              Jana Real Estate LLC se especializa en Moca, San Sebastián, Isabela, Aguada, Añasco, Mayagüez, Hatillo y Arecibo — con acceso MLS y un historial probado.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map(feature => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
          </div>
        </div>
      </section>

      {/* CTA / Lead Capture */}
      <section className="py-24 px-6" style={{ backgroundColor: '#466D7A' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#1EB39F' }}>
                ¿Listo para Comenzar?
              </span>
              <h2 className="mt-3 text-4xl font-bold text-white tracking-tight leading-tight">
                Encontremos Tu Propiedad Ideal Juntos
              </h2>
              <p className="mt-4 leading-relaxed text-sm" style={{ color: 'rgba(255,255,255,0.65)' }}>
                Ya sea comprando, vendiendo o invirtiendo — nuestro equipo está listo para guiarte. Déjanos tus datos y te conectamos con el especialista correcto.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  'Consulta de propiedad gratuita',
                  'Análisis de mercado sin compromiso',
                  'Agente dedicado asignado a ti',
                ].map(item => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#1EB39F' }}>
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm" style={{ color: 'rgba(255,255,255,0.8)' }}>{item}</span>
                  </div>
                ))}
              </div>

              {/* Quick contact */}
              <div className="mt-10 flex flex-wrap gap-3">
                <a href="tel:+17876242956"
                  className="flex items-center gap-2 px-5 py-3 rounded-xl text-white text-sm font-semibold transition-all hover:opacity-90"
                  style={{ backgroundColor: '#1EB39F' }}>
                  📞 (787) 624-2956
                </a>
                <a href="tel:+19394383061"
                  className="flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition-all hover:opacity-90"
                  style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: 'white' }}>
                  📞 (939) 438-3061
                </a>
              </div>
            </div>

            <div
              className="rounded-2xl p-8"
              style={{ backgroundColor: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)' }}
            >
              <LeadForm
                variant="dark"
                title="Consulta Gratuita"
                subtitle="Nuestro equipo responde en menos de 2 horas."
                assignedAgent="José L. González Reyes"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

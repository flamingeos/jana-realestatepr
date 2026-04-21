import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getPropertyById, getProperties } from '@/lib/properties'
import ImageGallery from '@/components/ImageGallery'
import LeadForm from '@/components/LeadForm'
import PropertyCard from '@/components/PropertyCard'
import { Property } from '@/types'

function formatPrice(price: number) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(price)
}

export async function generateStaticParams() {
  return []
}

export default async function PropertyDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  let property: Property | null = null
  let similar: Property[] = []

  try {
    property = await getPropertyById(id) as Property | null
    if (!property) notFound()
    const all = await getProperties() as Property[]
    similar = all.filter(p => p.id !== id && p.propertyType === property!.propertyType).slice(0, 3)
  } catch {
    notFound()
  }

  if (!property) notFound()

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="pt-24 pb-4 px-6 border-b" style={{ backgroundColor: '#F1E7D6', borderColor: 'rgba(179,179,179,0.2)' }}>
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center gap-2 text-sm" style={{ color: '#B3B3B3' }}>
            <Link href="/" className="transition-colors hover:text-[#1EB39F]">Inicio</Link>
            <span>/</span>
            <Link href="/properties" className="transition-colors hover:text-[#1EB39F]">Propiedades</Link>
            <span>/</span>
            <span className="font-medium truncate max-w-xs" style={{ color: '#466D7A' }}>{property.title}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <ImageGallery images={property.imageUrls} title={property.title} />

            {/* Title & Price */}
            <div>
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h1 className="text-3xl font-bold tracking-tight" style={{ color: '#466D7A' }}>{property.title}</h1>
                  <p className="mt-2 text-sm flex items-center gap-1.5" style={{ color: '#B3B3B3' }}>
                    <svg className="w-4 h-4 flex-shrink-0" style={{ color: '#1EB39F' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {property.location}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-4xl font-bold" style={{ color: '#EF8853' }}>{formatPrice(property.price)}</p>
                  {property.sqft && (
                    <p className="text-sm mt-1" style={{ color: '#B3B3B3' }}>
                      ${Math.round(property.price / property.sqft).toLocaleString()} / sqft
                    </p>
                  )}
                </div>
              </div>

              {/* Specs Bar */}
              {property.bedrooms > 0 && (
                <div className="mt-6 flex flex-wrap gap-6 p-6 rounded-2xl" style={{ backgroundColor: '#F1E7D6' }}>
                  <div className="text-center">
                    <p className="text-2xl font-bold" style={{ color: '#466D7A' }}>{property.bedrooms}</p>
                    <p className="text-xs mt-0.5" style={{ color: '#B3B3B3' }}>Habitaciones</p>
                  </div>
                  <div className="w-px" style={{ backgroundColor: 'rgba(179,179,179,0.3)' }} />
                  <div className="text-center">
                    <p className="text-2xl font-bold" style={{ color: '#466D7A' }}>{property.bathrooms}</p>
                    <p className="text-xs mt-0.5" style={{ color: '#B3B3B3' }}>Baños</p>
                  </div>
                  {property.sqft && (
                    <>
                      <div className="w-px" style={{ backgroundColor: 'rgba(179,179,179,0.3)' }} />
                      <div className="text-center">
                        <p className="text-2xl font-bold" style={{ color: '#466D7A' }}>{property.sqft.toLocaleString()}</p>
                        <p className="text-xs mt-0.5" style={{ color: '#B3B3B3' }}>Sq. Ft.</p>
                      </div>
                    </>
                  )}
                  <div className="w-px" style={{ backgroundColor: 'rgba(179,179,179,0.3)' }} />
                  <div className="text-center">
                    <p className="text-lg font-bold capitalize" style={{ color: '#466D7A' }}>{property.propertyType}</p>
                    <p className="text-xs mt-0.5" style={{ color: '#B3B3B3' }}>Tipo</p>
                  </div>
                </div>
              )}
            </div>

            {/* Description */}
            <div>
              <h2 className="text-xl font-bold mb-4" style={{ color: '#466D7A' }}>Sobre Esta Propiedad</h2>
              <p className="leading-relaxed text-sm" style={{ color: '#466D7A', opacity: 0.8 }}>{property.description}</p>
            </div>

            {/* Map Placeholder */}
            <div>
              <h2 className="text-xl font-bold mb-4" style={{ color: '#466D7A' }}>Ubicación</h2>
              <div className="h-64 rounded-2xl flex items-center justify-center border" style={{ backgroundColor: '#F1E7D6', borderColor: 'rgba(179,179,179,0.2)' }}>
                <div className="text-center">
                  <div className="text-4xl mb-2">📍</div>
                  <p className="font-medium" style={{ color: '#466D7A' }}>{property.location}</p>
                  <p className="text-sm mt-1" style={{ color: '#B3B3B3' }}>Integración de mapa próximamente</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <div className="sticky top-24 bg-white rounded-2xl p-6 shadow-sm border" style={{ borderColor: 'rgba(179,179,179,0.2)' }}>
              <LeadForm
                propertyId={property.id}
                assignedAgent="José L. González Reyes"
                title="Agenda una Visita"
                subtitle="¿Interesado en esta propiedad? Coordinamos una visita privada."
              />
            </div>
          </div>
        </div>

        {/* Similar Properties */}
        {similar.length > 0 && (
          <div className="mt-20">
            <h2 className="text-2xl font-bold mb-8" style={{ color: '#466D7A' }}>Propiedades Similares</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {similar.map(p => (
                <PropertyCard key={p.id} property={p} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Mobile Sticky CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t p-4 z-40" style={{ borderColor: 'rgba(179,179,179,0.3)' }}>
        <div className="flex gap-3">
          <a
            href="tel:+17876242956"
            className="flex-1 py-3 text-sm font-semibold rounded-xl text-center transition-colors text-white"
            style={{ backgroundColor: '#1EB39F' }}
          >
            📞 Llamar
          </a>
          <Link
            href="/contact"
            className="flex-1 py-3 text-white text-sm font-semibold rounded-xl text-center transition-colors"
            style={{ backgroundColor: '#EF8853' }}
          >
            Consultar
          </Link>
        </div>
      </div>
    </div>
  )
}

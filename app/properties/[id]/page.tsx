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
      <div className="bg-slate-50 pt-24 pb-4 px-6 border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-slate-500">
            <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/properties" className="hover:text-slate-900 transition-colors">Properties</Link>
            <span>/</span>
            <span className="text-slate-900 font-medium truncate max-w-xs">{property.title}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Gallery */}
            <ImageGallery images={property.imageUrls} title={property.title} />

            {/* Title & Price */}
            <div>
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h1 className="text-3xl font-bold text-slate-900 tracking-tight">{property.title}</h1>
                  <p className="mt-2 text-slate-500 flex items-center gap-1.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    {property.location}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-4xl font-bold" style={{color: 'var(--gold)'}}>{formatPrice(property.price)}</p>
                  {property.sqft && (
                    <p className="text-sm text-slate-500 mt-1">
                      ${Math.round(property.price / property.sqft).toLocaleString()} / sqft
                    </p>
                  )}
                </div>
              </div>

              {/* Specs Bar */}
              <div className="mt-6 flex flex-wrap gap-6 p-6 bg-slate-50 rounded-2xl">
                <div className="text-center">
                  <p className="text-2xl font-bold text-slate-900">{property.bedrooms}</p>
                  <p className="text-xs text-slate-500 mt-0.5">Bedrooms</p>
                </div>
                <div className="w-px bg-slate-200" />
                <div className="text-center">
                  <p className="text-2xl font-bold text-slate-900">{property.bathrooms}</p>
                  <p className="text-xs text-slate-500 mt-0.5">Bathrooms</p>
                </div>
                {property.sqft && (
                  <>
                    <div className="w-px bg-slate-200" />
                    <div className="text-center">
                      <p className="text-2xl font-bold text-slate-900">{property.sqft.toLocaleString()}</p>
                      <p className="text-xs text-slate-500 mt-0.5">Sq. Ft.</p>
                    </div>
                  </>
                )}
                <div className="w-px bg-slate-200" />
                <div className="text-center">
                  <p className="text-lg font-bold text-slate-900 capitalize">{property.propertyType}</p>
                  <p className="text-xs text-slate-500 mt-0.5">Type</p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4">About This Property</h2>
              <p className="text-slate-600 leading-relaxed">{property.description}</p>
            </div>

            {/* Map Placeholder */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4">Location</h2>
              <div className="h-64 bg-slate-100 rounded-2xl flex items-center justify-center border border-slate-200">
                <div className="text-center">
                  <div className="text-4xl mb-2">📍</div>
                  <p className="font-medium text-slate-700">{property.location}</p>
                  <p className="text-sm text-slate-400 mt-1">Map integration coming soon</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Form */}
            <div className="sticky top-24 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <LeadForm
                propertyId={property.id}
                title="Schedule a Viewing"
                subtitle="Interested in this property? We'll arrange a private showing."
              />
            </div>
          </div>
        </div>

        {/* Similar Properties */}
        {similar.length > 0 && (
          <div className="mt-20">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Similar Properties</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {similar.map(p => (
                <PropertyCard key={p.id} property={p} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Mobile Sticky CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-4 z-40">
        <div className="flex gap-3">
          <a
            href="tel:+17875550100"
            className="flex-1 py-3 bg-slate-100 text-slate-900 text-sm font-semibold rounded-xl text-center hover:bg-slate-200 transition-colors"
          >
            📞 Call Agent
          </a>
          <Link
            href="/contact"
            className="flex-1 py-3 text-white text-sm font-semibold rounded-xl text-center transition-colors"
            style={{backgroundColor: 'var(--gold)'}}
          >
            Inquire Now
          </Link>
        </div>
      </div>
    </div>
  )
}

import Link from 'next/link'
import Image from 'next/image'
import { Property } from '@/types'

function formatPrice(price: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(price)
}

export default function PropertyCard({ property }: { property: Property }) {
  const imageUrl = property.imageUrls[0] || 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80'

  return (
    <Link href={`/properties/${property.id}`} className="group block">
      <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100">
        {/* Image */}
        <div className="relative h-60 overflow-hidden bg-slate-100">
          <Image
            src={imageUrl}
            alt={property.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {property.featured && (
            <span className="absolute top-4 left-4 text-white text-xs font-semibold px-3 py-1.5 rounded-full" style={{backgroundColor: 'var(--gold)'}}>
              Featured
            </span>
          )}
          <span className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-slate-900 text-xs font-semibold px-3 py-1.5 rounded-full capitalize">
            {property.propertyType}
          </span>
        </div>

        {/* Content */}
        <div className="p-5">
          <p className="text-2xl font-bold text-slate-900">{formatPrice(property.price)}</p>
          <h3 className="mt-1 text-base font-semibold text-slate-800 line-clamp-1 group-hover:text-amber-600 transition-colors">
            {property.title}
          </h3>
          <p className="mt-1 text-sm text-slate-500 flex items-center gap-1">
            <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {property.location}
          </p>

          {/* Specs */}
          <div className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-4 text-sm text-slate-600">
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              {property.bedrooms} bd
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {property.bathrooms} ba
            </span>
            {property.sqft && (
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </svg>
                {property.sqft.toLocaleString()} sqft
              </span>
            )}
          </div>
        </div>
      </article>
    </Link>
  )
}

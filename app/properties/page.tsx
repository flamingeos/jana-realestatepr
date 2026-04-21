import { Suspense } from 'react'
import { getProperties } from '@/lib/properties'
import PropertyGrid from '@/components/PropertyGrid'
import FilterBar from '@/components/FilterBar'
import { Property } from '@/types'

interface SearchParams {
  location?: string
  minPrice?: string
  maxPrice?: string
  bedrooms?: string
  propertyType?: string
}

async function PropertiesList({ searchParams }: { searchParams: SearchParams }) {
  let properties: Property[] = []
  try {
    properties = await getProperties({
      location: searchParams.location,
      minPrice: searchParams.minPrice ? parseInt(searchParams.minPrice) : undefined,
      maxPrice: searchParams.maxPrice ? parseInt(searchParams.maxPrice) : undefined,
      bedrooms: searchParams.bedrooms ? parseInt(searchParams.bedrooms) : undefined,
      propertyType: searchParams.propertyType,
    }) as Property[]
  } catch {
    // DB not seeded
  }

  return <PropertyGrid properties={properties} />
}

export default async function PropertiesPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>
}) {
  const params = await searchParams
  const hasFilters = Object.values(params).some(Boolean)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="pt-28 pb-12 px-6" style={{ backgroundColor: '#466D7A' }}>
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-white tracking-tight">
            {hasFilters ? 'Resultados de Búsqueda' : 'Todas las Propiedades'}
          </h1>
          <p className="mt-2 text-sm" style={{ color: 'rgba(255,255,255,0.65)' }}>
            {hasFilters
              ? 'Propiedades que coinciden con tu búsqueda'
              : 'Explora nuestro portafolio completo en el occidente de Puerto Rico'}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="w-full lg:w-72 flex-shrink-0">
            <div className="sticky top-24">
              <Suspense>
                <FilterBar />
              </Suspense>
            </div>
          </aside>

          {/* Listings */}
          <div className="flex-1">
            <Suspense
              fallback={
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="h-72 rounded-2xl animate-pulse" style={{ backgroundColor: '#F1E7D6' }} />
                  ))}
                </div>
              }
            >
              <PropertiesList searchParams={params} />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  )
}

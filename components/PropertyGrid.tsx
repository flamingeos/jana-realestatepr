import { Property } from '@/types'
import PropertyCard from './PropertyCard'

interface PropertyGridProps {
  properties: Property[]
  emptyMessage?: string
}

export default function PropertyGrid({ properties, emptyMessage }: PropertyGridProps) {
  if (properties.length === 0) {
    return (
      <div className="text-center py-20">
        <div className="text-5xl mb-4">🏠</div>
        <h3 className="text-xl font-semibold text-slate-700">{emptyMessage || 'No properties found'}</h3>
        <p className="mt-2 text-slate-500">Try adjusting your search filters.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {properties.map(property => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  )
}

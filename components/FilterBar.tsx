'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useCallback } from 'react'

export default function FilterBar() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const updateFilter = useCallback((key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString())
    if (value) {
      params.set(key, value)
    } else {
      params.delete(key)
    }
    router.push(`/properties?${params.toString()}`)
  }, [router, searchParams])

  const clearAll = () => router.push('/properties')
  const hasFilters = searchParams.toString() !== ''

  const isActive = (key: string, value: string) => {
    const current = searchParams.get(key)
    return value === '' ? !current : current === value
  }

  return (
    <div className="bg-white rounded-2xl p-6" style={{ border: '1px solid #d0dade' }}>
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-semibold text-base" style={{ color: '#466D7A' }}>Filtros</h2>
        {hasFilters && (
          <button onClick={clearAll} className="text-xs font-medium text-red-400 hover:text-red-600 transition-colors">
            Limpiar todo
          </button>
        )}
      </div>

      {/* Location */}
      <div className="mb-6">
        <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: '#5e7a87' }}>Ubicación</label>
        <input
          type="text"
          placeholder="Pueblo, barrio..."
          defaultValue={searchParams.get('location') || ''}
          onChange={e => updateFilter('location', e.target.value)}
          className="w-full px-4 py-2.5 text-sm rounded-xl border focus:outline-none focus:ring-2 transition-all"
          style={{ backgroundColor: '#F1E7D6', borderColor: '#c4d0d5', color: '#466D7A' }}
        />
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: '#5e7a87' }}>Rango de Precio</label>
        <div className="space-y-2">
          <select
            defaultValue={searchParams.get('minPrice') || ''}
            onChange={e => updateFilter('minPrice', e.target.value)}
            className="w-full px-4 py-2.5 text-sm rounded-xl border focus:outline-none transition-all"
            style={{ backgroundColor: '#F1E7D6', borderColor: '#c4d0d5', color: '#466D7A' }}
          >
            <option value="">Precio mínimo</option>
            <option value="50000">$50,000</option>
            <option value="100000">$100,000</option>
            <option value="200000">$200,000</option>
            <option value="300000">$300,000</option>
            <option value="400000">$400,000</option>
          </select>
          <select
            defaultValue={searchParams.get('maxPrice') || ''}
            onChange={e => updateFilter('maxPrice', e.target.value)}
            className="w-full px-4 py-2.5 text-sm rounded-xl border focus:outline-none transition-all"
            style={{ backgroundColor: '#F1E7D6', borderColor: '#c4d0d5', color: '#466D7A' }}
          >
            <option value="">Precio máximo</option>
            <option value="150000">$150,000</option>
            <option value="300000">$300,000</option>
            <option value="400000">$400,000</option>
            <option value="500000">$500,000</option>
            <option value="750000">$750,000</option>
          </select>
        </div>
      </div>

      {/* Bedrooms */}
      <div className="mb-6">
        <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: '#5e7a87' }}>Habitaciones</label>
        <div className="flex gap-2 flex-wrap">
          {['', '1', '2', '3', '4', '5'].map(num => (
            <button
              key={num}
              onClick={() => updateFilter('bedrooms', num)}
              className="px-3.5 py-2 text-sm rounded-xl border transition-all font-medium"
              style={
                isActive('bedrooms', num)
                  ? { backgroundColor: '#1EB39F', color: 'white', borderColor: '#1EB39F' }
                  : { backgroundColor: '#F1E7D6', color: '#466D7A', borderColor: '#c4d0d5' }
              }
            >
              {num === '' ? 'Todas' : `${num}+`}
            </button>
          ))}
        </div>
      </div>

      {/* Property Type */}
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: '#5e7a87' }}>Tipo de Propiedad</label>
        <div className="space-y-1.5">
          {[
            { value: '', label: 'Todos los tipos' },
            { value: 'house', label: 'Casa' },
            { value: 'condo', label: 'Condominio' },
            { value: 'land', label: 'Terreno / Solar' },
            { value: 'multi-family', label: 'Multifamiliar' },
            { value: 'commercial', label: 'Comercial' },
          ].map(({ value, label }) => (
            <button
              key={value}
              onClick={() => updateFilter('propertyType', value)}
              className="w-full text-left px-4 py-2.5 text-sm rounded-xl transition-all font-medium"
              style={
                isActive('propertyType', value)
                  ? { backgroundColor: '#1EB39F', color: 'white' }
                  : { backgroundColor: '#F1E7D6', color: '#466D7A' }
              }
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

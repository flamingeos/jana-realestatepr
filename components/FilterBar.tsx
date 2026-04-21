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

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6">
      <div className="flex items-center justify-between mb-5">
        <h2 className="font-semibold text-slate-900">Filters</h2>
        {hasFilters && (
          <button onClick={clearAll} className="text-sm text-slate-500 hover:text-red-500 transition-colors">
            Clear all
          </button>
        )}
      </div>

      {/* Location */}
      <div className="mb-6">
        <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Location</label>
        <input
          type="text"
          placeholder="City, neighborhood..."
          defaultValue={searchParams.get('location') || ''}
          onChange={e => updateFilter('location', e.target.value)}
          className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
        />
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Price Range</label>
        <div className="space-y-2">
          <select
            defaultValue={searchParams.get('minPrice') || ''}
            onChange={e => updateFilter('minPrice', e.target.value)}
            className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400"
          >
            <option value="">Min Price</option>
            <option value="200000">$200,000</option>
            <option value="400000">$400,000</option>
            <option value="600000">$600,000</option>
            <option value="800000">$800,000</option>
            <option value="1000000">$1,000,000</option>
          </select>
          <select
            defaultValue={searchParams.get('maxPrice') || ''}
            onChange={e => updateFilter('maxPrice', e.target.value)}
            className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400"
          >
            <option value="">Max Price</option>
            <option value="500000">$500,000</option>
            <option value="750000">$750,000</option>
            <option value="1000000">$1,000,000</option>
            <option value="1500000">$1,500,000</option>
            <option value="2000000">$2,000,000</option>
          </select>
        </div>
      </div>

      {/* Bedrooms */}
      <div className="mb-6">
        <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Bedrooms</label>
        <div className="flex gap-2 flex-wrap">
          {['', '1', '2', '3', '4', '5'].map(num => (
            <button
              key={num}
              onClick={() => updateFilter('bedrooms', num)}
              className={`px-4 py-2 text-sm rounded-xl border transition-all ${
                searchParams.get('bedrooms') === num || (!searchParams.get('bedrooms') && num === '')
                  ? 'text-white border-transparent'
                  : 'text-slate-700 border-slate-200 bg-white hover:border-amber-400'
              }`}
              style={
                searchParams.get('bedrooms') === num || (!searchParams.get('bedrooms') && num === '')
                  ? { backgroundColor: 'var(--gold)' }
                  : {}
              }
            >
              {num === '' ? 'Any' : `${num}+`}
            </button>
          ))}
        </div>
      </div>

      {/* Property Type */}
      <div>
        <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Property Type</label>
        <div className="space-y-2">
          {['', 'house', 'condo', 'villa', 'apartment', 'townhome', 'estate'].map(type => (
            <button
              key={type}
              onClick={() => updateFilter('propertyType', type)}
              className={`w-full text-left px-4 py-2.5 text-sm rounded-xl transition-all capitalize ${
                searchParams.get('propertyType') === type || (!searchParams.get('propertyType') && type === '')
                  ? 'text-white'
                  : 'text-slate-700 bg-slate-50 hover:bg-slate-100'
              }`}
              style={
                searchParams.get('propertyType') === type || (!searchParams.get('propertyType') && type === '')
                  ? { backgroundColor: 'var(--gold)' }
                  : {}
              }
            >
              {type === '' ? 'All Types' : type}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

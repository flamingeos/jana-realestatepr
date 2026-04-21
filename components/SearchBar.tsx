'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function SearchBar() {
  const router = useRouter()
  const [location, setLocation] = useState('')
  const [maxPrice, setMaxPrice] = useState('')
  const [bedrooms, setBedrooms] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const params = new URLSearchParams()
    if (location) params.set('location', location)
    if (maxPrice) params.set('maxPrice', maxPrice)
    if (bedrooms) params.set('bedrooms', bedrooms)
    router.push(`/properties?${params.toString()}`)
  }

  return (
    <form
      onSubmit={handleSearch}
      className="bg-white rounded-2xl shadow-2xl p-2 flex flex-col md:flex-row gap-2 w-full max-w-3xl mx-auto"
    >
      <div className="flex-1 relative">
        <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: '#1EB39F' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <input
          type="text"
          placeholder="Pueblo o barrio (ej. Moca, Isabela)"
          value={location}
          onChange={e => setLocation(e.target.value)}
          className="w-full pl-9 pr-4 py-3.5 text-sm rounded-xl border-0 focus:outline-none focus:ring-2"
          style={{ backgroundColor: '#F1E7D6', color: '#466D7A' }}
        />
      </div>

      <select
        value={maxPrice}
        onChange={e => setMaxPrice(e.target.value)}
        className="flex-1 px-4 py-3.5 text-sm rounded-xl border-0 focus:outline-none focus:ring-2"
        style={{ backgroundColor: '#F1E7D6', color: '#466D7A' }}
      >
        <option value="">Precio máximo</option>
        <option value="100000">$100,000</option>
        <option value="200000">$200,000</option>
        <option value="300000">$300,000</option>
        <option value="400000">$400,000</option>
        <option value="500000">$500,000</option>
        <option value="750000">$750,000</option>
      </select>

      <select
        value={bedrooms}
        onChange={e => setBedrooms(e.target.value)}
        className="flex-1 px-4 py-3.5 text-sm rounded-xl border-0 focus:outline-none focus:ring-2"
        style={{ backgroundColor: '#F1E7D6', color: '#466D7A' }}
      >
        <option value="">Habitaciones</option>
        <option value="1">1+ hab</option>
        <option value="2">2+ hab</option>
        <option value="3">3+ hab</option>
        <option value="4">4+ hab</option>
        <option value="5">5+ hab</option>
      </select>

      <button
        type="submit"
        className="px-8 py-3.5 text-white font-semibold rounded-xl transition-all hover:opacity-90 active:scale-95 whitespace-nowrap"
        style={{ backgroundColor: '#EF8853' }}
      >
        Buscar
      </button>
    </form>
  )
}

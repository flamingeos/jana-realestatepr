export interface Property {
  id: string
  title: string
  price: number
  location: string
  bedrooms: number
  bathrooms: number
  sqft: number | null
  imageUrls: string[]
  description: string
  featured: boolean
  propertyType: string
  status: string
  createdAt: Date
  updatedAt: Date
}

export interface Lead {
  id: string
  name: string
  email: string
  phone?: string | null
  message?: string | null
  propertyId?: string | null
  createdAt: Date
}

export interface PropertyFilters {
  location?: string
  minPrice?: number
  maxPrice?: number
  bedrooms?: number
  propertyType?: string
}

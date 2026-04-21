/**
 * Property data fetching layer.
 *
 * MLS/IDX READY: Replace the prisma calls below with your IDX API calls.
 * The function signatures and return types remain the same — only the
 * data source changes.
 */

import { prisma } from './prisma'

export interface PropertyFilters {
  location?: string
  minPrice?: number
  maxPrice?: number
  bedrooms?: number
  propertyType?: string
}

export async function getProperties(filters?: PropertyFilters) {
  const where: Record<string, unknown> = { status: 'active' }

  if (filters?.location) {
    where.location = { contains: filters.location, mode: 'insensitive' }
  }
  if (filters?.minPrice || filters?.maxPrice) {
    where.price = {
      ...(filters.minPrice && { gte: filters.minPrice }),
      ...(filters.maxPrice && { lte: filters.maxPrice }),
    }
  }
  if (filters?.bedrooms) {
    where.bedrooms = { gte: filters.bedrooms }
  }
  if (filters?.propertyType) {
    where.propertyType = filters.propertyType
  }

  return prisma.property.findMany({
    where,
    orderBy: { createdAt: 'desc' },
  })
}

export async function getFeaturedProperties() {
  return prisma.property.findMany({
    where: { featured: true, status: 'active' },
    orderBy: { createdAt: 'desc' },
    take: 6,
  })
}

export async function getPropertyById(id: string) {
  return prisma.property.findUnique({ where: { id } })
}

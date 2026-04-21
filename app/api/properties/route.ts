import { NextRequest, NextResponse } from 'next/server'
import { getProperties } from '@/lib/properties'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)

  try {
    const properties = await getProperties({
      location: searchParams.get('location') || undefined,
      minPrice: searchParams.get('minPrice') ? parseInt(searchParams.get('minPrice')!) : undefined,
      maxPrice: searchParams.get('maxPrice') ? parseInt(searchParams.get('maxPrice')!) : undefined,
      bedrooms: searchParams.get('bedrooms') ? parseInt(searchParams.get('bedrooms')!) : undefined,
      propertyType: searchParams.get('propertyType') || undefined,
    })
    return NextResponse.json(properties)
  } catch (error) {
    console.error('GET /api/properties error:', error)
    return NextResponse.json({ error: 'Failed to fetch properties' }, { status: 500 })
  }
}

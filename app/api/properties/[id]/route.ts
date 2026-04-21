import { NextRequest, NextResponse } from 'next/server'
import { getPropertyById } from '@/lib/properties'

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  try {
    const property = await getPropertyById(id)
    if (!property) return NextResponse.json({ error: 'Not found' }, { status: 404 })
    return NextResponse.json(property)
  } catch (error) {
    console.error('GET /api/properties/[id] error:', error)
    return NextResponse.json({ error: 'Failed to fetch property' }, { status: 500 })
  }
}

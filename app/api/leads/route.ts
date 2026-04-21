import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, message, propertyId, assignedAgent } = body

    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email are required' }, { status: 400 })
    }

    const lead = await prisma.lead.create({
      data: { name, email, phone, message, propertyId, assignedAgent },
    })

    return NextResponse.json(lead, { status: 201 })
  } catch (error) {
    console.error('POST /api/leads error:', error)
    return NextResponse.json({ error: 'Failed to save lead' }, { status: 500 })
  }
}

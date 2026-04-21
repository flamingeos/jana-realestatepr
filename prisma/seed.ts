import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const properties = [
  {
    title: 'Luxury Oceanfront Villa in Dorado',
    price: 1850000,
    location: 'Dorado, Puerto Rico',
    bedrooms: 5,
    bathrooms: 4,
    sqft: 4200,
    imageUrls: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80',
    ],
    description: 'Stunning oceanfront villa with panoramic Caribbean views. Features an open floor plan, chef\'s kitchen, infinity pool, and direct beach access. This masterpiece offers the ultimate luxury island living experience with high-end finishes throughout.',
    featured: true,
    propertyType: 'villa',
    status: 'active',
  },
  {
    title: 'Modern Penthouse in Condado',
    price: 975000,
    location: 'Condado, San Juan, PR',
    bedrooms: 3,
    bathrooms: 3,
    sqft: 2100,
    imageUrls: [
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=1200&q=80',
    ],
    description: 'Top-floor penthouse in the heart of Condado with breathtaking ocean and city views. Fully renovated with Italian marble, smart home system, private rooftop terrace, and resort-style amenities.',
    featured: true,
    propertyType: 'condo',
    status: 'active',
  },
  {
    title: 'Contemporary Home in Guaynabo',
    price: 625000,
    location: 'Guaynabo, Puerto Rico',
    bedrooms: 4,
    bathrooms: 3,
    sqft: 3100,
    imageUrls: [
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200&q=80',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80',
    ],
    description: 'Beautiful contemporary home in a prestigious gated community. Features an open-concept design, gourmet kitchen, resort-style pool, and lush tropical landscaping. Perfect for families seeking privacy and luxury.',
    featured: true,
    propertyType: 'house',
    status: 'active',
  },
  {
    title: 'Beachfront Condo in Isla Verde',
    price: 485000,
    location: 'Isla Verde, Carolina, PR',
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1400,
    imageUrls: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
    ],
    description: 'Direct beachfront condo with unobstructed ocean views from every room. Fully furnished, private balcony, pool, gym, and 24/7 security. Ideal as a primary residence or vacation rental investment.',
    featured: false,
    propertyType: 'condo',
    status: 'active',
  },
  {
    title: 'Tropical Estate in Rincon',
    price: 1250000,
    location: 'Rincón, Puerto Rico',
    bedrooms: 6,
    bathrooms: 5,
    sqft: 5500,
    imageUrls: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1200&q=80',
      'https://images.unsplash.com/photo-1576941089067-2de3c901e126?w=1200&q=80',
    ],
    description: 'Magnificent tropical estate in world-famous Rincón, the surf capital of the Caribbean. Expansive grounds with multiple outbuildings, private pool, outdoor kitchen, and spectacular sunset views.',
    featured: false,
    propertyType: 'estate',
    status: 'active',
  },
  {
    title: 'Luxury Apartment in Miramar',
    price: 320000,
    location: 'Miramar, San Juan, PR',
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1100,
    imageUrls: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80',
    ],
    description: 'Elegant apartment in prestigious Miramar with high ceilings, designer finishes, and city views. Walking distance to fine dining, boutique shopping, and the waterfront. A rare urban luxury opportunity.',
    featured: false,
    propertyType: 'apartment',
    status: 'active',
  },
  {
    title: 'Hillside Villa with Pool in Humacao',
    price: 795000,
    location: 'Humacao, Puerto Rico',
    bedrooms: 4,
    bathrooms: 4,
    sqft: 3800,
    imageUrls: [
      'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=1200&q=80',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80',
    ],
    description: 'Spectacular hillside villa boasting breathtaking views of the Caribbean Sea. Infinity-edge pool, outdoor entertainment area, and lush tropical gardens. A serene retreat just minutes from Palmas del Mar.',
    featured: false,
    propertyType: 'villa',
    status: 'active',
  },
  {
    title: 'New Construction Townhome in Bayamón',
    price: 389000,
    location: 'Bayamón, Puerto Rico',
    bedrooms: 3,
    bathrooms: 3,
    sqft: 1800,
    imageUrls: [
      'https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=1200&q=80',
      'https://images.unsplash.com/photo-1555636222-cae831e670b3?w=1200&q=80',
    ],
    description: 'Brand new townhome in a modern gated community. Open floor plan, energy-efficient design, quartz countertops, and private patio. Community pool and playground. Move-in ready.',
    featured: false,
    propertyType: 'townhome',
    status: 'active',
  },
]

async function main() {
  console.log('Seeding database...')

  await prisma.property.deleteMany()
  await prisma.lead.deleteMany()

  for (const property of properties) {
    await prisma.property.create({ data: property })
  }

  console.log(`✅ Seeded ${properties.length} properties`)
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())

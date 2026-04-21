import { config } from 'dotenv'
config({ path: '.env.local' })
config({ path: '.env' })

import { PrismaNeonHttp } from '@prisma/adapter-neon'
import { PrismaClient } from '@prisma/client'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const adapter = new PrismaNeonHttp(process.env.DATABASE_URL!, {} as any)
const prisma = new PrismaClient({ adapter })

const properties = [
  // ── FEATURED ──────────────────────────────────────────────────────────────
  {
    title: 'Casa de Campo con Piscina — Bo. Corcovado, Hatillo',
    price: 387000,
    location: 'Bo. Corcovado, Hatillo, Puerto Rico',
    bedrooms: 3,
    bathrooms: 2,
    sqft: null,
    imageUrls: [
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200&q=80',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80',
    ],
    description: 'Hermosa casa de campo en Hatillo con amplio lote y piscina privada. Terreno espacioso ideal para disfrutar de la tranquilidad del campo mientras permaneces cerca de todos los servicios. Una inversión de primera clase en el noroeste de Puerto Rico.',
    featured: true,
    propertyType: 'house',
    status: 'active',
  },
  {
    title: 'Casa de Lujo en el Campo — Bo. Saltos, San Sebastián',
    price: 500000,
    location: 'Bo. Saltos, San Sebastián, Puerto Rico',
    bedrooms: 4,
    bathrooms: 3,
    sqft: null,
    imageUrls: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1200&q=80',
      'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=1200&q=80',
    ],
    description: 'Exclusiva residencia de lujo en el campo de San Sebastián. Diseño premium, acabados de alta calidad y vistas panorámicas al campo puertorriqueño. Ideal para quien busca privacidad, espacio y confort en el occidente de la Isla.',
    featured: true,
    propertyType: 'house',
    status: 'active',
  },
  {
    title: 'Casa Renovada con 4 Habitaciones — Urb. Medina, Isabela',
    price: 265000,
    location: 'Urb. Medina, Isabela, Puerto Rico',
    bedrooms: 4,
    bathrooms: 3,
    sqft: 1600,
    imageUrls: [
      'https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
    ],
    description: 'Casa completamente renovada en Isabela, cerca de las playas y el centro del pueblo. 4 habitaciones, 3 baños, 1,600 sq/ft. Acabados modernos, cocina actualizada y espacios amplios. A minutos de la playa Jobos y todos los servicios.',
    featured: true,
    propertyType: 'house',
    status: 'active',
  },

  // ── ACTIVE LISTINGS ───────────────────────────────────────────────────────
  {
    title: 'Proyecto Ideal en Moca — Bo. Naranjo',
    price: 150000,
    location: 'Bo. Naranjo, Moca, Puerto Rico',
    bedrooms: 3,
    bathrooms: 3,
    sqft: null,
    imageUrls: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80',
      'https://images.unsplash.com/photo-1555636222-cae831e670b3?w=1200&q=80',
    ],
    description: 'Tu oportunidad de proyecto ideal en Moca. Propiedad tipo fixer-upper con 3 habitaciones y 3 baños, ubicada en Bo. Naranjo con acceso conveniente a las carreteras 111 y 110. Enorme potencial para remodelar y revalorizar. Precio agresivo para inversionistas.',
    featured: false,
    propertyType: 'house',
    status: 'active',
  },
  {
    title: 'Casa en el Campo — Carr. 448 Km 2, Bo. Eneas, San Sebastián',
    price: 347000,
    location: 'Bo. Eneas, San Sebastián, Puerto Rico',
    bedrooms: 4,
    bathrooms: 2,
    sqft: 1680,
    imageUrls: [
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80',
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200&q=80',
    ],
    description: 'Preciosa casa de campo en Carr. 448 Km 2, Bo. Eneas. 4 habitaciones, 2 baños, 1,680 sq/ft en ambiente campestre. A solo 13 minutos del pueblo de San Sebastián y 3 minutos de la PR-111. Perfecta para familias que buscan tranquilidad sin sacrificar accesibilidad.',
    featured: false,
    propertyType: 'house',
    status: 'active',
  },
  {
    title: 'Multifamiliar de Inversión — Bo. Saltos, San Sebastián',
    price: 385000,
    location: 'Bo. Saltos, San Sebastián, Puerto Rico',
    bedrooms: 5,
    bathrooms: 2,
    sqft: null,
    imageUrls: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80',
    ],
    description: 'Oportunidad multifamiliar en Bo. Saltos, San Sebastián. Ideal para inversionistas o familia numerosa. 5 habitaciones y 2 baños con posibilidad de generar ingreso de renta. El occidente de Puerto Rico ofrece mercado de alquiler en crecimiento.',
    featured: false,
    propertyType: 'multi-family',
    status: 'active',
  },
  {
    title: 'Casa Flamboyán — Airbnb Ready, Bo. Aibonito Beltrán, San Sebastián',
    price: 325000,
    location: 'Bo. Aibonito Beltrán, San Sebastián, Puerto Rico',
    bedrooms: 3,
    bathrooms: 1,
    sqft: null,
    imageUrls: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80',
      'https://images.unsplash.com/photo-1576941089067-2de3c901e126?w=1200&q=80',
    ],
    description: '"Casa Flamboyán" — encantadora residencia en Bo. Aibonito Beltrán lista para uso de Airbnb o residencia familiar. 3 habitaciones, 1 baño, con el carácter y encanto del campo puertorriqueño. Excelente para generar ingresos pasivos en el creciente mercado de turismo rural.',
    featured: false,
    propertyType: 'house',
    status: 'active',
  },
  {
    title: 'Penthouse Exclusivo — Puerta del Sol, Mayagüez',
    price: 225000,
    location: 'Puerta del Sol, Mayagüez, Puerto Rico',
    bedrooms: 3,
    bathrooms: 2,
    sqft: null,
    imageUrls: [
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=1200&q=80',
    ],
    description: 'Penthouse exclusivo en la urbanización Puerta del Sol de Mayagüez. 3 habitaciones, 2 baños, con vistas privilegiadas y acabados premium. Ubicado en la ciudad más grande del occidente, cerca de universidades, hospitales, centros comerciales y el malecón.',
    featured: false,
    propertyType: 'condo',
    status: 'active',
  },
  {
    title: 'Oportunidad Única en el Pueblo — San Sebastián',
    price: 133000,
    location: 'Pueblo, San Sebastián, Puerto Rico',
    bedrooms: 3,
    bathrooms: 1,
    sqft: null,
    imageUrls: [
      'https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=1200&q=80',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80',
    ],
    description: 'Oportunidad única en el casco urbano de San Sebastián. Casa de 3 habitaciones y 1 baño a precio accesible. Ideal para primera vivienda o proyecto de remodelación. Camina a escuelas, comercios, farmacias y la plaza del pueblo.',
    featured: false,
    propertyType: 'house',
    status: 'active',
  },
  {
    title: 'Solar Residencial 2.06 Cuerdas — Bo. Pueblo, Moca',
    price: 117000,
    location: 'Bo. Pueblo, Moca, Puerto Rico',
    bedrooms: 0,
    bathrooms: 0,
    sqft: null,
    imageUrls: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&q=80',
      'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=1200&q=80',
    ],
    description: 'Solar residencial de 2.06 cuerdas (8,371 m²) en Bo. Pueblo, Moca. Lote amplio cerca del centro de Moca, ideal para construir tu hogar o como inversión. Zonificación residencial con excelente acceso vial. Una de las pocas oportunidades de terreno disponibles en el pueblo.',
    featured: false,
    propertyType: 'land',
    status: 'active',
  },
  {
    title: 'Solar con Vista y Privacidad — Bo. Rocha, Moca',
    price: 120000,
    location: 'Bo. Rocha, Moca, Puerto Rico',
    bedrooms: 0,
    bathrooms: 0,
    sqft: null,
    imageUrls: [
      'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=1200&q=80',
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&q=80',
    ],
    description: 'Amplio solar en Bo. Rocha, Moca con vistas al campo y total privacidad. Ideal para construir la casa de tus sueños lejos del ruido urbano. Lote ancho con acceso cómodo y conexión a servicios básicos disponibles en el área.',
    featured: false,
    propertyType: 'land',
    status: 'active',
  },
  {
    title: 'Propiedad de Inversión — Malpaso, Aguada',
    price: 280000,
    location: 'Malpaso, Aguada, Puerto Rico',
    bedrooms: 3,
    bathrooms: 2,
    sqft: null,
    imageUrls: [
      'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=1200&q=80',
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200&q=80',
    ],
    description: 'Propiedad de inversión en Malpaso, Aguada. 3 habitaciones, 2 baños, con potencial de ingreso por alquiler. Aguada está experimentando un auge en desarrollo inmobiliario, haciendo de esta una oportunidad estratégica. Cerca de playas, comercios y acceso a PR-2.',
    featured: false,
    propertyType: 'house',
    status: 'active',
  },
  {
    title: 'Solar para Inversión — Arenales Bajos, Isabela',
    price: 230000,
    location: 'Arenales Bajos, Isabela, Puerto Rico',
    bedrooms: 0,
    bathrooms: 0,
    sqft: null,
    imageUrls: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&q=80',
      'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=1200&q=80',
    ],
    description: 'Excelente solar de inversión en Arenales Bajos, Isabela. Cerca de las mejores playas del noroeste: Jobos, Shacks y Middles. Zona en constante crecimiento con alta demanda para construcción residencial y turística. Ideal para desarrolladores o inversores a largo plazo.',
    featured: false,
    propertyType: 'land',
    status: 'active',
  },
  {
    title: 'Negocio en Venta: Panadería Diego\'s Bakery — Ext. El Pepino, San Sebastián',
    price: 50000,
    location: 'Ext. El Pepino, San Sebastián, Puerto Rico',
    bedrooms: 0,
    bathrooms: 0,
    sqft: null,
    imageUrls: [
      'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=1200&q=80',
      'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1200&q=80',
    ],
    description: 'Se vende la llave de Diego\'s Bakery en la Ext. El Pepino, San Sebastián. Negocio en operación con clientela establecida, equipo incluido y buena ubicación comercial. Oportunidad para emprendedor gastronómico en uno de los pueblos más activos del occidente.',
    featured: false,
    propertyType: 'commercial',
    status: 'active',
  },
  {
    title: 'Solar en Bo. Marías — Moca',
    price: 53000,
    location: 'Bo. Marías, Moca, Puerto Rico',
    bedrooms: 0,
    bathrooms: 0,
    sqft: null,
    imageUrls: [
      'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=1200&q=80',
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&q=80',
    ],
    description: 'Solar en Bo. Marías, Moca. Lote accesible en un barrio tranquilo con buenas vías de acceso. Precio de entrada perfecto para construir tu primera vivienda o para inversión en el floreciente mercado inmobiliario de Moca.',
    featured: false,
    propertyType: 'land',
    status: 'active',
  },
]

async function main() {
  console.log('Seeding database with real Jana Real Estate listings...')

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

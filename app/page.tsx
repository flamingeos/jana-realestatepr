import Link from 'next/link'
import Image from 'next/image'
import { getFeaturedProperties } from '@/lib/properties'
import PropertyCard from '@/components/PropertyCard'
import SearchBar from '@/components/SearchBar'
import LeadForm from '@/components/LeadForm'
import { Property } from '@/types'

const stats = [
  { value: '500+', label: 'Properties Sold' },
  { value: '$2B+', label: 'Total Volume' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '15+', label: 'Years Experience' },
]

const features = [
  {
    icon: '🏆',
    title: 'Exclusive Listings',
    description: 'Access to off-market and exclusive properties not found anywhere else in Puerto Rico.',
  },
  {
    icon: '🤝',
    title: 'Expert Guidance',
    description: 'Our certified agents provide personalized guidance through every step of the process.',
  },
  {
    icon: '📊',
    title: 'Market Intelligence',
    description: 'Data-driven insights and market analysis to help you make informed decisions.',
  },
  {
    icon: '🔒',
    title: 'Trusted & Secure',
    description: 'Licensed and regulated, ensuring every transaction is safe, transparent, and protected.',
  },
]

export default async function HomePage() {
  let featuredProperties: Property[] = []
  try {
    featuredProperties = await getFeaturedProperties() as Property[]
  } catch {
    // DB not yet seeded
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1800&q=80"
          alt="Luxury property in Puerto Rico"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase mb-6 px-4 py-2 rounded-full border border-white/30 text-white/80 backdrop-blur-sm">
            Puerto Rico&apos;s Premier Real Estate
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight">
            Find Your Dream<br />
            <span style={{color: 'var(--gold-light)'}}>Property in PR</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Discover luxury homes, waterfront villas, and investment properties across Puerto Rico&apos;s most sought-after locations.
          </p>

          <div className="mt-10">
            <SearchBar />
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-6">
            {stats.map(stat => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl font-bold text-white" style={{color: 'var(--gold-light)'}}>{stat.value}</p>
                <p className="text-xs text-white/60 mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* Featured Listings */}
      {featuredProperties.length > 0 && (
        <section className="py-24 px-6 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
              <div>
                <span className="text-xs font-semibold tracking-widest uppercase" style={{color: 'var(--gold)'}}>
                  Handpicked for You
                </span>
                <h2 className="mt-2 text-4xl font-bold text-slate-900 tracking-tight">Featured Properties</h2>
              </div>
              <Link
                href="/properties"
                className="mt-4 md:mt-0 text-sm font-semibold flex items-center gap-2 hover:gap-3 transition-all"
                style={{color: 'var(--gold)'}}
              >
                View all listings
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProperties.map(property => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Why Choose Us */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold tracking-widest uppercase" style={{color: 'var(--gold)'}}>
              Why Jana RealestatePR
            </span>
            <h2 className="mt-2 text-4xl font-bold text-slate-900 tracking-tight">
              The Standard in Luxury Real Estate
            </h2>
            <p className="mt-4 text-slate-500 max-w-xl mx-auto">
              We combine deep local expertise with world-class service to deliver an unparalleled real estate experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map(feature => (
              <div
                key={feature.title}
                className="group p-8 rounded-2xl border border-slate-100 hover:border-amber-200 hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Lead Capture */}
      <section className="py-24 px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-semibold tracking-widest uppercase" style={{color: 'var(--gold)'}}>
                Ready to Start?
              </span>
              <h2 className="mt-3 text-4xl font-bold text-white tracking-tight leading-tight">
                Let&apos;s Find Your Perfect Property Together
              </h2>
              <p className="mt-4 text-slate-400 leading-relaxed">
                Whether you&apos;re buying, selling, or investing — our team is ready to guide you. Leave your details and we&apos;ll connect you with the right specialist.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  'Free property consultation',
                  'No-obligation market analysis',
                  'Dedicated agent assigned to you',
                ].map(item => (
                  <div key={item} className="flex items-center gap-3 text-slate-300">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{backgroundColor: 'var(--gold)'}}>
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <LeadForm
                variant="dark"
                title="Get a Free Consultation"
                subtitle="Our team typically responds within 2 hours."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

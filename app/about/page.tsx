import Link from 'next/link'
import Image from 'next/image'
import LeadForm from '@/components/LeadForm'

const agentStats = [
  { value: '11', label: 'Closed Sales' },
  { value: '$2M+', label: 'Total Volume' },
  { value: '~$180K', label: 'Avg. Sale Price' },
  { value: '2+', label: 'Years Active' },
]

const team = [
  {
    name: 'José L. González Reyes',
    license: 'C21635',
    phone: '(787) 624-2956',
    phone2: '(939) 438-3061',
    role: 'Broker / Owner',
    bio: 'José leads Jana Real Estate LLC with a focus on western Puerto Rico. Registered with Puerto Rico Realtors® MLS (Office #436) and a verified ClasificadosOnline partner since 2022, he has closed 11 transactions totaling over $2M — helping families and investors find the right property across Moca, San Sebastián, Isabela, Aguada, Mayagüez and beyond.',
    primary: true,
  },
  {
    name: 'Carlos Javier González',
    license: 'V4106',
    phone: '(787) 955-8021',
    role: 'Sales Associate',
    bio: 'Carlos brings deep community knowledge of the western region and specializes in residential and rural property transactions.',
    primary: false,
  },
  {
    name: 'James Jiménez Chaparro',
    license: 'C26382',
    phone: '(787) 942-4642',
    role: 'Sales Associate',
    bio: 'James focuses on investment properties and land acquisitions throughout western Puerto Rico, helping clients identify high-value opportunities.',
    primary: false,
  },
]

const serviceAreas = [
  'Moca', 'San Sebastián', 'Isabela', 'Aguada',
  'Añasco', 'Mayagüez', 'Hatillo', 'Arecibo',
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-slate-900 pt-28 pb-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-xs font-semibold tracking-widest uppercase" style={{color: 'var(--gold)'}}>
            Western Puerto Rico Real Estate
          </span>
          <h1 className="mt-3 text-5xl font-bold text-white tracking-tight">Meet the Team</h1>
          <p className="mt-4 text-slate-400 text-lg">
            Licensed, local, and dedicated to helping you buy, sell, or invest in western Puerto Rico.
          </p>
        </div>
      </div>

      {/* Lead Agent */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Photo */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-slate-100">
              <Image
                src="/jose-gonzalez.png"
                alt="José L. González Reyes — Jana Real Estate PR"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            {/* License badge */}
            <div className="absolute -bottom-4 -right-4 bg-white border border-slate-200 rounded-xl px-5 py-3 shadow-lg">
              <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">License</p>
              <p className="text-slate-900 font-bold">C21635</p>
            </div>
          </div>

          {/* Bio */}
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase" style={{color: 'var(--gold)'}}>
              Broker · Owner
            </span>
            <h2 className="mt-2 text-3xl font-bold text-slate-900 tracking-tight">
              José L. González Reyes
            </h2>
            <p className="mt-1 text-slate-500 text-sm">JANA REAL ESTATE LLC · MLS Office #436</p>

            <p className="mt-5 text-slate-600 leading-relaxed">
              José leads Jana Real Estate LLC with a focus on western Puerto Rico. Registered with Puerto Rico Realtors® MLS (Office #436) and a verified ClasificadosOnline partner since 2022, he has closed 11 transactions totaling over $2M — helping families and investors find the right property across Moca, San Sebastián, Isabela, Aguada, Mayagüez and beyond.
            </p>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Whether you&apos;re looking for a family home, a fixer-upper project, agricultural land, or an investment property, José brings hands-on local knowledge and honest guidance to every transaction.
            </p>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {agentStats.map(stat => (
                <div key={stat.label} className="bg-slate-50 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold" style={{color: 'var(--gold)'}}>{stat.value}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Contact */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="tel:+17876242956"
                className="flex items-center gap-2 px-5 py-3 rounded-xl text-white text-sm font-semibold transition-all hover:opacity-90"
                style={{backgroundColor: 'var(--gold)'}}
              >
                📞 (787) 624-2956
              </a>
              <a
                href="tel:+19394383061"
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-100 text-slate-900 text-sm font-semibold transition-all hover:bg-slate-200"
              >
                📞 (939) 438-3061
              </a>
            </div>

            {/* Badges */}
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                'PR Realtors® MLS #436',
                'ClasificadosOnline Partner 2022',
                'Puerto Rico Dept. of State',
                'Lic. C21635',
              ].map(badge => (
                <span key={badge} className="text-xs font-medium px-3 py-1.5 bg-amber-50 text-amber-800 border border-amber-200 rounded-full">
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-slate-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-widest uppercase" style={{color: 'var(--gold)'}}>
              Our Agents
            </span>
            <h2 className="mt-2 text-3xl font-bold text-slate-900 tracking-tight">The Jana Team</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {team.map(member => (
              <div
                key={member.name}
                className={`bg-white rounded-2xl p-6 border transition-all hover:shadow-md ${
                  member.primary ? 'border-amber-200 ring-1 ring-amber-200' : 'border-slate-100'
                }`}
              >
                {/* Avatar */}
                <div className="w-16 h-16 rounded-full overflow-hidden bg-slate-100 mb-4">
                  {member.primary ? (
                    <Image
                      src="/jose-gonzalez.png"
                      alt={member.name}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover object-top"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-2xl">👤</div>
                  )}
                </div>

                {member.primary && (
                  <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-3" style={{backgroundColor: 'var(--gold)', color: 'white'}}>
                    Broker · Owner
                  </span>
                )}

                <h3 className="font-bold text-slate-900 text-lg">{member.name}</h3>
                <p className="text-sm text-slate-500">{member.role} · Lic. {member.license}</p>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">{member.bio}</p>

                <div className="mt-4 pt-4 border-t border-slate-100 space-y-1">
                  <a href={`tel:+1${member.phone.replace(/\D/g, '')}`} className="block text-sm font-medium hover:text-amber-600 transition-colors" style={{color: 'var(--gold)'}}>
                    📞 {member.phone}
                  </a>
                  {member.phone2 && (
                    <a href={`tel:+1${member.phone2.replace(/\D/g, '')}`} className="block text-sm font-medium hover:text-amber-600 transition-colors" style={{color: 'var(--gold)'}}>
                      📞 {member.phone2}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-semibold tracking-widest uppercase" style={{color: 'var(--gold)'}}>
            Where We Work
          </span>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 tracking-tight">Service Area</h2>
          <p className="mt-3 text-slate-500">
            We specialize in residential, commercial, and land transactions across western Puerto Rico.
          </p>

          {/* Municipality tag cloud */}
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {serviceAreas.map(area => (
              <Link
                key={area}
                href={`/properties?location=${encodeURIComponent(area)}`}
                className="group flex items-center gap-2 px-5 py-3 bg-slate-50 hover:bg-amber-50 border border-slate-200 hover:border-amber-300 rounded-xl text-slate-700 font-medium text-sm transition-all"
              >
                <span>📍</span>
                <span>{area}</span>
                <svg className="w-3.5 h-3.5 text-slate-400 group-hover:text-amber-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>

          {/* Map placeholder */}
          <div className="mt-10 h-48 bg-slate-50 border border-slate-200 rounded-2xl flex items-center justify-center">
            <div className="text-center">
              <p className="text-3xl mb-2">🗺️</p>
              <p className="text-slate-500 font-medium">Western Puerto Rico</p>
              <p className="text-slate-400 text-sm mt-1">Moca · San Sebastián · Isabela · Aguada · Añasco · Mayagüez · Hatillo · Arecibo</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-slate-900">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase" style={{color: 'var(--gold)'}}>
              Ready to Work Together?
            </span>
            <h2 className="mt-3 text-3xl font-bold text-white leading-tight">
              Let&apos;s Find Your Property in Western Puerto Rico
            </h2>
            <p className="mt-4 text-slate-400">
              Contact José and the Jana team today for a free, no-obligation consultation.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="https://www.facebook.com/Janarealestatee/" target="_blank" rel="noopener noreferrer"
                className="text-sm text-slate-300 hover:text-white transition-colors">Facebook ↗</a>
              <span className="text-slate-700">·</span>
              <a href="https://www.instagram.com/jana.realestatepr/" target="_blank" rel="noopener noreferrer"
                className="text-sm text-slate-300 hover:text-white transition-colors">Instagram ↗</a>
              <span className="text-slate-700">·</span>
              <a href="https://www.youtube.com/@janarealestate" target="_blank" rel="noopener noreferrer"
                className="text-sm text-slate-300 hover:text-white transition-colors">YouTube ↗</a>
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <LeadForm
              variant="dark"
              title="Contact the Team"
              subtitle="We respond within a few hours."
              assignedAgent="José L. González Reyes"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

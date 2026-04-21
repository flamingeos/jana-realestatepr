import LeadForm from '@/components/LeadForm'

const contactInfo = [
  { icon: '📞', label: 'José (Main)', value: '(787) 624-2956', href: 'tel:+17876242956' },
  { icon: '📞', label: 'Secondary', value: '(939) 438-3061', href: 'tel:+19394383061' },
  { icon: '📍', label: 'Address', value: 'HC 05 Box 10620, Moca, PR 00676', href: null },
  { icon: '🕐', label: 'Hours', value: 'Mon–Sat, 8am – 7pm', href: null },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-slate-900 pt-28 pb-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-xs font-semibold tracking-widest uppercase" style={{color: 'var(--gold)'}}>
            We&apos;re Here to Help
          </span>
          <h1 className="mt-3 text-5xl font-bold text-white tracking-tight">Get in Touch</h1>
          <p className="mt-4 text-slate-400 text-lg">
            Specialists in western Puerto Rico. Serving Moca, San Sebastián, Isabela, Aguada, Mayagüez and surrounding towns.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-6">Contact Information</h2>
              <div className="space-y-4">
                {contactInfo.map(item => (
                  <div key={item.label} className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="font-medium text-slate-900 hover:text-amber-600 transition-colors mt-0.5 block">
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-medium text-slate-900 mt-0.5">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl text-white" style={{backgroundColor: 'var(--gold)'}}>
              <h3 className="font-bold text-lg">Free Consultation</h3>
              <p className="mt-2 text-sm text-white/90 leading-relaxed">
                Not sure where to start? Schedule a free 30-minute consultation with one of our experts.
              </p>
              <p className="mt-4 font-semibold text-sm">No commitment required.</p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
            <LeadForm
              title="Send Us a Message"
              subtitle="Fill out the form and we'll get back to you within 24 hours."
              assignedAgent="José L. González Reyes"
            />
            <p className="mt-6 text-xs text-slate-400 text-center">
              José L. González Reyes, Lic. C21635 &nbsp;·&nbsp; JANA REAL ESTATE LLC &nbsp;·&nbsp; MLS Office #436
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

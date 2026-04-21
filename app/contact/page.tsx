import LeadForm from '@/components/LeadForm'

const contactInfo = [
  { icon: '📞', label: 'José (Principal)', value: '(787) 624-2956', href: 'tel:+17876242956' },
  { icon: '📞', label: 'Secundario', value: '(939) 438-3061', href: 'tel:+19394383061' },
  { icon: '📍', label: 'Dirección', value: 'HC 05 Box 10620, Moca, PR 00676', href: null },
  { icon: '🕐', label: 'Horario', value: 'Lun–Sáb, 8am – 7pm', href: null },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="pt-28 pb-16 px-6" style={{ backgroundColor: '#466D7A' }}>
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#1EB39F' }}>
            Estamos Para Ayudarte
          </span>
          <h1 className="mt-3 text-5xl font-bold text-white tracking-tight">Contáctanos</h1>
          <p className="mt-4 text-lg" style={{ color: 'rgba(255,255,255,0.90)' }}>
            Especialistas en el occidente de Puerto Rico. Moca, San Sebastián, Isabela, Aguada, Mayagüez y más.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-xl font-bold mb-6" style={{ color: '#466D7A' }}>Información de Contacto</h2>
            {contactInfo.map(item => (
              <div key={item.label} className="flex items-start gap-4 p-4 rounded-xl" style={{ backgroundColor: '#F1E7D6' }}>
                <span className="text-xl">{item.icon}</span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#5e7a87' }}>{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="font-medium mt-0.5 block transition-colors hover:opacity-80" style={{ color: '#466D7A' }}>
                      {item.value}
                    </a>
                  ) : (
                    <p className="font-medium mt-0.5" style={{ color: '#466D7A' }}>{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="p-6 rounded-2xl text-white mt-6" style={{ backgroundColor: '#EF8853' }}>
              <h3 className="font-bold text-lg">Consulta Gratuita</h3>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.9)' }}>
                ¿No sabes por dónde empezar? Agenda una consulta gratuita de 30 minutos sin compromiso.
              </p>
              <p className="mt-4 font-semibold text-sm">Sin compromiso. 100% gratuito.</p>
            </div>

            {/* Social links */}
            <div className="pt-4">
              <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: '#5e7a87' }}>Síguenos</p>
              <div className="flex gap-3">
                {[
                  { href: 'https://www.facebook.com/Janarealestatee/', label: 'Facebook' },
                  { href: 'https://www.instagram.com/jana.realestatepr/', label: 'Instagram' },
                  { href: 'https://www.youtube.com/@janarealestate', label: 'YouTube' },
                ].map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                    className="text-xs font-medium px-3 py-2 rounded-lg transition-all hover:opacity-80"
                    style={{ backgroundColor: '#F1E7D6', color: '#466D7A' }}>
                    {s.label} ↗
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 bg-white rounded-2xl p-8 shadow-sm border" style={{ borderColor: '#d0dade' }}>
            <LeadForm
              title="Envíanos un Mensaje"
              subtitle="Completa el formulario y te respondemos en menos de 24 horas."
              assignedAgent="José L. González Reyes"
            />
            <p className="mt-6 text-xs text-center" style={{ color: '#5e7a87' }}>
              José L. González Reyes, Lic. C21635 · JANA REAL ESTATE LLC · MLS Office #436
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

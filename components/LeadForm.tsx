'use client'

import { useState } from 'react'

interface LeadFormProps {
  propertyId?: string
  assignedAgent?: string
  title?: string
  subtitle?: string
  variant?: 'default' | 'dark'
}

export default function LeadForm({
  propertyId,
  assignedAgent,
  title = 'Get in Touch',
  subtitle = "Fill out the form and we'll get back to you within 24 hours.",
  variant = 'default',
}: LeadFormProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, propertyId, assignedAgent }),
      })
      if (!res.ok) throw new Error('Failed')
      setStatus('success')
      setForm({ name: '', email: '', phone: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  const isDark = variant === 'dark'

  const inputStyle = isDark
    ? { backgroundColor: 'rgba(255,255,255,0.1)', borderColor: 'rgba(255,255,255,0.2)', color: 'white' }
    : { backgroundColor: '#F1E7D6', borderColor: '#b8c8ce', color: '#466D7A' }

  const labelColor = isDark ? 'rgba(255,255,255,0.90)' : '#466D7A'
  const inputClass = 'w-full px-4 py-3 text-sm rounded-xl border focus:outline-none focus:ring-2 transition-all placeholder:opacity-50'

  if (status === 'success') {
    return (
      <div className="text-center py-12">
        <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#1EB39F' }}>
          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold" style={{ color: isDark ? 'white' : '#466D7A' }}>¡Mensaje Recibido!</h3>
        <p className="mt-2 text-sm" style={{ color: isDark ? 'rgba(255,255,255,0.90)' : '#B3B3B3' }}>
          Nos pondremos en contacto contigo en menos de 24 horas.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-6 text-sm underline opacity-70 hover:opacity-100 transition-opacity"
          style={{ color: '#1EB39F' }}
        >
          Enviar otro mensaje
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {title && (
        <div className="mb-5">
          <h3 className="text-xl font-bold" style={{ color: isDark ? 'white' : '#466D7A' }}>{title}</h3>
          {subtitle && <p className="mt-1 text-sm" style={{ color: isDark ? 'rgba(255,255,255,0.90)' : '#B3B3B3' }}>{subtitle}</p>}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: labelColor }}>Nombre *</label>
          <input
            required type="text" name="name" value={form.name} onChange={handleChange}
            placeholder="Tu nombre completo"
            className={inputClass} style={inputStyle}
          />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: labelColor }}>Email *</label>
          <input
            required type="email" name="email" value={form.email} onChange={handleChange}
            placeholder="tu@email.com"
            className={inputClass} style={inputStyle}
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: labelColor }}>Teléfono</label>
        <input
          type="tel" name="phone" value={form.phone} onChange={handleChange}
          placeholder="(787) 000-0000"
          className={inputClass} style={inputStyle}
        />
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: labelColor }}>Mensaje</label>
        <textarea
          name="message" value={form.message} onChange={handleChange}
          placeholder="¿Qué estás buscando?"
          rows={4} className={inputClass} style={inputStyle}
        />
      </div>

      {status === 'error' && (
        <p className="text-red-400 text-sm">Algo salió mal. Por favor intenta de nuevo.</p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full py-4 text-white font-semibold rounded-xl transition-all hover:opacity-90 active:scale-[0.99] disabled:opacity-60"
        style={{ backgroundColor: '#EF8853' }}
      >
        {status === 'loading' ? 'Enviando...' : 'Enviar Mensaje'}
      </button>
    </form>
  )
}

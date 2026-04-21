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
  subtitle = 'Fill out the form and we\'ll get back to you within 24 hours.',
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
  const inputClass = `w-full px-4 py-3 text-sm rounded-xl border focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all ${
    isDark
      ? 'bg-white/10 border-white/20 text-white placeholder-white/50'
      : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
  }`
  const labelClass = `block text-xs font-semibold uppercase tracking-wider mb-1.5 ${isDark ? 'text-white/70' : 'text-slate-500'}`

  if (status === 'success') {
    return (
      <div className="text-center py-12">
        <div className="text-5xl mb-4">✅</div>
        <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Message Received!</h3>
        <p className={`mt-2 ${isDark ? 'text-white/70' : 'text-slate-500'}`}>We&apos;ll reach out to you within 24 hours.</p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-6 text-sm underline opacity-70 hover:opacity-100 transition-opacity"
          style={{color: 'var(--gold)'}}
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {title && (
        <div className="mb-6">
          <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{title}</h3>
          {subtitle && <p className={`mt-1 text-sm ${isDark ? 'text-white/70' : 'text-slate-500'}`}>{subtitle}</p>}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Name *</label>
          <input
            required
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your full name"
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Email *</label>
          <input
            required
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className={labelClass}>Phone</label>
        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="+1 (787) 000-0000"
          className={inputClass}
        />
      </div>

      <div>
        <label className={labelClass}>Message</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us what you're looking for..."
          rows={4}
          className={inputClass}
        />
      </div>

      {status === 'error' && (
        <p className="text-red-500 text-sm">Something went wrong. Please try again.</p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full py-4 text-white font-semibold rounded-xl transition-all hover:opacity-90 active:scale-[0.99] disabled:opacity-60"
        style={{backgroundColor: 'var(--gold)'}}
      >
        {status === 'loading' ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  )
}

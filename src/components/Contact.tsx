'use client'

import { useState } from 'react'
import { useLanguage } from '@/lib/language'

interface FormState {
  name: string
  company: string
  messenger: string
  task: string
}

export default function Contact() {
  const { t } = useLanguage()
  const [form, setForm] = useState<FormState>({
    name: '',
    company: '',
    messenger: '',
    task: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!res.ok) throw new Error()
      setStatus('success')
      setForm({ name: '', company: '', messenger: '', task: '' })
    } catch {
      setStatus('error')
    }
  }

  const inputClass =
    'w-full bg-transparent border-b border-white/20 py-4 font-inter text-sm text-muted-white placeholder:text-silver/50 focus:outline-none focus:border-white/60 transition-colors'

  return (
    <section
      id="contact"
      className="min-h-screen bg-surface flex flex-col justify-center px-8 md:px-16 py-24"
    >
      <div className="max-w-2xl">
        <p className="font-inter text-xs tracking-[0.3em] text-silver mb-12">
          CONTACT
        </p>
        <h2 className="font-unbounded font-bold text-4xl md:text-6xl text-muted-white leading-tight mb-16">
          {t.contact.title}
        </h2>

        {status === 'success' ? (
          <p className="font-inter text-sm text-cyan-accent tracking-wide">
            {t.contact.success}
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder={t.contact.name}
              required
              className={inputClass}
            />
            <input
              name="company"
              value={form.company}
              onChange={handleChange}
              placeholder={t.contact.company}
              className={inputClass}
            />
            <input
              name="messenger"
              value={form.messenger}
              onChange={handleChange}
              placeholder={t.contact.messenger}
              required
              className={inputClass}
            />
            <textarea
              name="task"
              value={form.task}
              onChange={handleChange}
              placeholder={t.contact.task}
              required
              rows={4}
              className={`${inputClass} resize-none`}
            />

            {status === 'error' && (
              <p className="font-inter text-xs text-red-400">
                {t.contact.error}
              </p>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="font-unbounded text-sm tracking-[0.2em] text-graphite bg-muted-white px-10 py-4 hover:bg-white transition-colors disabled:opacity-50"
            >
              {status === 'loading' ? '...' : t.contact.submit}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

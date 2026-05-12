'use client'

import { useState } from 'react'
import { useLanguage } from '@/lib/language'

interface FormState {
  name: string
  company: string
  phone: string
  messenger: string
  task: string
}

export default function Contact() {
  const { t } = useLanguage()
  const [form, setForm] = useState<FormState>({ name: '', company: '', phone: '', messenger: '', task: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
      setForm({ name: '', company: '', phone: '', messenger: '', task: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section
      id="contact"
      className="page-pad flex flex-col justify-center py-16"
    >
      <div className="w-full max-w-2xl">
        <p className="font-unbounded text-xs tracking-[0.3em] text-silver mb-4">CONTACT</p>
        <h2 className="font-unbounded font-bold text-3xl md:text-5xl text-muted-white leading-tight mb-10">
          {t.contact.title}
        </h2>

        <p className="font-unbounded text-xs text-silver/40 mb-10">
          или напишите на{' '}
          <a
            href="mailto:sd.5431433@gmail.com"
            className="text-silver/60 hover:text-muted-white transition-colors underline underline-offset-4"
          >
            sd.5431433@gmail.com
          </a>
        </p>

        {status === 'success' ? (
          <p className="font-unbounded text-base text-muted-white">{t.contact.success}</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {[
              { id: 'name', label: t.contact.name, required: true, multiline: false },
              { id: 'company', label: t.contact.company, required: false, multiline: false },
              { id: 'phone', label: t.contact.phone, required: false, multiline: false },
              { id: 'messenger', label: t.contact.messenger, required: true, multiline: false },
              { id: 'task', label: t.contact.task, required: true, multiline: true },
            ].map(({ id, label, required, multiline }) => (
              <div key={id} className="relative pt-5">
                {multiline ? (
                  <textarea
                    id={id}
                    name={id}
                    value={form[id as keyof FormState]}
                    onChange={handleChange}
                    placeholder=" "
                    required={required}
                    rows={3}
                    className="peer w-full bg-transparent border-b border-white/20 pt-1 pb-3 font-unbounded text-base text-muted-white placeholder-transparent focus:outline-none focus:border-white/60 transition-colors resize-none"
                  />
                ) : (
                  <input
                    id={id}
                    name={id}
                    value={form[id as keyof FormState]}
                    onChange={handleChange}
                    placeholder=" "
                    required={required}
                    className="peer w-full bg-transparent border-b border-white/20 pt-1 pb-3 font-unbounded text-base text-muted-white placeholder-transparent focus:outline-none focus:border-white/60 transition-colors"
                  />
                )}
                <label
                  htmlFor={id}
                  className="absolute left-0 top-5 font-unbounded text-base text-silver/40 transition-all duration-200 peer-focus:top-0 peer-focus:text-xs peer-focus:text-silver/70 peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-silver/70 pointer-events-none"
                >
                  {label}
                </label>
              </div>
            ))}

            {status === 'error' && (
              <p className="font-unbounded text-xs text-red-400">{t.contact.error}</p>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="font-unbounded text-sm tracking-[0.2em] text-graphite bg-muted-white px-10 py-4 hover:bg-white hover:scale-[1.02] transition-all duration-200 disabled:opacity-50"
            >
              {status === 'loading' ? '...' : t.contact.submit}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

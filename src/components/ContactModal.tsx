'use client'

import { useState, useEffect, useCallback } from 'react'
import { useLanguage } from '@/lib/language'

interface FormState {
  name: string
  company: string
  phone: string
  messenger: string
  task: string
}

export default function ContactModal() {
  const { t } = useLanguage()
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState<FormState>({ name: '', company: '', phone: '', messenger: '', task: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const close = useCallback(() => {
    setOpen(false)
    setStatus('idle')
  }, [])

  useEffect(() => {
    const handler = () => setOpen(true)
    window.addEventListener('openContactModal', handler)
    return () => window.removeEventListener('openContactModal', handler)
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') close() }
    if (open) {
      window.addEventListener('keydown', onKey)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => window.removeEventListener('keydown', onKey)
  }, [open, close])

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

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-graphite/90 backdrop-blur-sm"
        onClick={close}
      />

      {/* Modal */}
      <div className="relative w-full max-w-xl bg-surface border border-white/10 px-8 md:px-12 py-10 md:py-14">
        {/* Close */}
        <button
          onClick={close}
          className="absolute top-5 right-5 font-unbounded text-xs tracking-[0.2em] text-silver/50 hover:text-white transition-colors"
        >
          ESC ✕
        </button>

        <p className="font-unbounded text-[10px] tracking-[0.3em] text-silver mb-3">CONTACT</p>
        <h2 className="font-unbounded font-bold text-2xl md:text-3xl text-muted-white leading-tight mb-10">
          {t.contact.title}
        </h2>

        {status === 'success' ? (
          <div className="py-8">
            <p className="font-unbounded text-sm text-muted-white">{t.contact.success}</p>
            <button onClick={close} className="mt-8 font-unbounded text-[10px] tracking-[0.2em] text-silver hover:text-white transition-colors">
              ← {t.nav.work === 'РАБОТЫ' ? 'Закрыть' : 'Close'}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
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
                    id={`modal-${id}`}
                    name={id}
                    value={form[id as keyof FormState]}
                    onChange={handleChange}
                    placeholder=" "
                    required={required}
                    rows={4}
                    className="peer w-full bg-transparent border-b border-white/20 pt-1 pb-3 font-unbounded text-base text-muted-white placeholder-transparent focus:outline-none focus:border-white/50 transition-colors resize-none"
                  />
                ) : (
                  <input
                    id={`modal-${id}`}
                    name={id}
                    value={form[id as keyof FormState]}
                    onChange={handleChange}
                    placeholder=" "
                    required={required}
                    className="peer w-full bg-transparent border-b border-white/20 pt-1 pb-3 font-unbounded text-base text-muted-white placeholder-transparent focus:outline-none focus:border-white/50 transition-colors"
                  />
                )}
                <label
                  htmlFor={`modal-${id}`}
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
              className="w-full font-unbounded text-sm tracking-[0.2em] text-graphite bg-muted-white py-4 hover:bg-white transition-colors disabled:opacity-50 mt-2"
            >
              {status === 'loading' ? '...' : t.contact.submit}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

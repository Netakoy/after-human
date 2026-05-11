'use client'

import { useEffect, useState } from 'react'
import { useLanguage } from '@/lib/language'

export default function Nav() {
  const { t, language, toggle } = useLanguage()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 transition-all duration-500 ${
        scrolled ? 'border-b border-white/10 bg-graphite/80 backdrop-blur-sm' : ''
      }`}
    >
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="font-unbounded text-sm tracking-[0.2em] text-muted-white hover:opacity-70 transition-opacity"
      >
        AFTER HUMAN
      </button>

      <div className="flex items-center gap-8">
        {[
          { label: t.nav.work, id: 'cases' },
          { label: t.nav.process, id: 'process' },
          { label: t.nav.studio, id: 'studio' },
          { label: t.nav.contact, id: 'contact' },
        ].map(({ label, id }) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className="font-inter text-xs tracking-[0.2em] text-silver hover:text-muted-white transition-colors hidden md:block"
          >
            {label}
          </button>
        ))}

        <button
          onClick={toggle}
          className="font-unbounded text-xs tracking-[0.2em] text-silver hover:text-muted-white transition-colors border border-white/20 px-3 py-1.5"
        >
          {language === 'ru' ? 'EN' : 'RU'}
        </button>
      </div>
    </nav>
  )
}

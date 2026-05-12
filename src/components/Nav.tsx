'use client'

import { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { useLanguage } from '@/lib/language'

export default function Nav() {
  const { t, language, toggle } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const isHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navigateTo = (id: string) => {
    if (isHome) {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      router.push(`/#${id}`)
    }
  }

  const navigateHome = () => {
    if (isHome) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      router.push('/')
    }
  }

  return (
    <nav
      className={`page-pad fixed top-0 left-0 right-0 z-50 flex items-center justify-between py-[30px] transition-all duration-500 bg-graphite/60 backdrop-blur-sm ${
        scrolled ? 'border-b border-white/10 bg-graphite/90' : ''
      }`}
    >
      <button
        onClick={navigateHome}
        className="font-unbounded text-sm tracking-[0.2em] text-muted-white hover:opacity-70 transition-opacity"
      >
        AFTER HUMAN
      </button>

      <div className="flex items-center gap-8">
        {[
          { label: t.nav.work, id: 'cases' },
          { label: t.nav.process, id: 'process' },
          { label: t.nav.pricing, id: 'pricing' },
          { label: t.nav.contact, id: 'contact' },
        ].map(({ label, id }) => (
          <button
            key={id}
            onClick={() => navigateTo(id)}
            className="font-unbounded text-sm tracking-[0.15em] text-white/70 hover:text-white transition-colors hidden md:block"
          >
            {label}
          </button>
        ))}

        <button
          onClick={toggle}
          className="font-unbounded text-sm tracking-[0.15em] text-silver hover:text-muted-white transition-colors border border-white/20 px-3 py-1.5"
        >
          {language.toUpperCase()}
        </button>
      </div>
    </nav>
  )
}

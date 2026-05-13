'use client'

import { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { useLanguage } from '@/lib/language'

export default function Nav() {
  const { t, language, toggle } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const isHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const navigateTo = (id: string) => {
    setMenuOpen(false)
    if (isHome) {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      router.push(`/#${id}`)
    }
  }

  const navigateHome = () => {
    setMenuOpen(false)
    if (isHome) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      router.push('/')
    }
  }

  const navItems = [
    { label: t.nav.work, id: 'cases' },
    { label: t.nav.process, id: 'process' },
    { label: t.nav.pricing, id: 'pricing' },
    { label: t.nav.contact, id: 'contact' },
  ]

  return (
    <>
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

        <div className="flex items-center gap-4 md:gap-8">
          {navItems.map(({ label, id }) => (
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

          {/* Hamburger — только на мобильном */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden flex flex-col justify-center gap-[5px] w-7 h-7 shrink-0"
            aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
          >
            <span
              className="block h-px bg-muted-white transition-all duration-300 origin-center"
              style={{ transform: menuOpen ? 'rotate(45deg) translateY(6px)' : 'none' }}
            />
            <span
              className="block h-px bg-muted-white transition-all duration-300"
              style={{ opacity: menuOpen ? 0 : 1, transform: menuOpen ? 'scaleX(0)' : 'none' }}
            />
            <span
              className="block h-px bg-muted-white transition-all duration-300 origin-center"
              style={{ transform: menuOpen ? 'rotate(-45deg) translateY(-6px)' : 'none' }}
            />
          </button>
        </div>
      </nav>

      {/* Мобильное меню */}
      <div
        className="fixed inset-0 z-40 flex flex-col page-pad pt-28 pb-12 md:hidden transition-all duration-300 bg-graphite/95 backdrop-blur-sm"
        style={{
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'auto' : 'none',
          transform: menuOpen ? 'translateY(0)' : 'translateY(-8px)',
        }}
      >
        <nav className="flex flex-col gap-8 mt-4">
          {navItems.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => navigateTo(id)}
              className="font-unbounded text-2xl tracking-[0.2em] text-white/60 hover:text-white transition-colors text-left"
            >
              {label}
            </button>
          ))}
        </nav>
      </div>
    </>
  )
}

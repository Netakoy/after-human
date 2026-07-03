'use client'

import { useEffect, useRef } from 'react'
import { useLanguage } from '@/lib/language'
import { initGSAP, gsap } from '@/lib/gsap-init'

export default function Formats() {
  const { t } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    initGSAP()
    if (!gridRef.current) return
    const items = Array.from(gridRef.current.children)

    const tween = gsap.fromTo(
      items,
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: 'power2.out',
        stagger: 0.08,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
      }
    )

    return () => {
      tween.scrollTrigger?.kill()
      tween.kill()
    }
  }, [])

  const openModal = () => window.dispatchEvent(new CustomEvent('openContactModal'))

  return (
    <section id="formats" ref={sectionRef} className="page-pad py-24">
      <p className="font-unbounded text-xs tracking-[0.3em] text-silver mb-16">{t.formats.title}</p>

      <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
        {t.formats.items.map((item) => (
          <div
            key={item.title}
            className="border-t border-white/10 pt-6 flex flex-col gap-3"
            style={{ opacity: 0 }}
          >
            <h3 className="font-unbounded text-base md:text-lg tracking-[0.1em] text-muted-white">{item.title}</h3>
            <p className="font-unbounded text-sm text-silver/70 leading-relaxed flex-1">{item.description}</p>
            <p className="font-unbounded text-[10px] tracking-[0.25em] text-silver/40 uppercase">{item.timeline}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 flex flex-col md:flex-row md:items-center justify-between gap-5">
        <p className="font-unbounded text-sm text-silver/60">{t.formats.note}</p>
        <button
          onClick={openModal}
          className="self-start font-unbounded text-sm tracking-[0.15em] px-8 py-4 bg-muted-white text-graphite hover:opacity-90 transition-opacity"
        >
          {t.formats.cta} →
        </button>
      </div>
    </section>
  )
}

'use client'

import { useEffect, useRef } from 'react'
import { useLanguage } from '@/lib/language'
import { initGSAP, gsap } from '@/lib/gsap-init'

export default function Scenarios() {
  const { t } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)
  const rowsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    initGSAP()
    if (!rowsRef.current) return
    const items = Array.from(rowsRef.current.children)

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

  return (
    <section ref={sectionRef} className="page-pad py-24">
      <p className="font-unbounded text-xs tracking-[0.3em] text-silver mb-4">{t.scenarios.label}</p>
      <h2 className="font-unbounded font-bold text-3xl md:text-5xl text-muted-white leading-tight mb-16">
        {t.scenarios.title}
      </h2>

      <div ref={rowsRef} className="border-t border-white/10">
        {t.scenarios.items.map((item) => (
          <div
            key={item.number}
            className="border-b border-white/10 py-9 flex flex-col md:flex-row gap-3 md:gap-6 md:items-baseline"
            style={{ opacity: 0 }}
          >
            <span className="font-unbounded text-xs text-white/20 w-7 shrink-0">{item.number}</span>
            <span className="font-unbounded text-lg tracking-[0.15em] text-muted-white md:w-1/3 shrink-0">{item.label}</span>
            <p className="font-unbounded text-sm text-silver/70 leading-relaxed flex-1">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

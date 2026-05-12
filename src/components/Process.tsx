'use client'

import { useState, useRef, useEffect } from 'react'
import { useLanguage } from '@/lib/language'
import { initGSAP, gsap } from '@/lib/gsap-init'

export default function Process() {
  const { t } = useLanguage()
  const [openIndices, setOpenIndices] = useState<Set<number>>(new Set())
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

  const toggle = (i: number) => {
    setOpenIndices(prev => {
      const next = new Set(prev)
      if (next.has(i)) next.delete(i)
      else next.add(i)
      return next
    })
  }

  return (
    <section
      id="process"
      ref={sectionRef}
      className="page-pad py-24"
    >
      <p className="font-unbounded text-xs tracking-[0.3em] text-silver mb-16">
        {t.process.title}
      </p>

      <div ref={rowsRef} className="border-t border-white/[0.1]">
        {t.process.steps.map((step, i) => (
          <div
            key={step.number}
            className="relative border-b border-white/[0.1] cursor-pointer group"
            style={{ opacity: 0 }}
            onClick={() => toggle(i)}
          >
            {/* left accent bar on hover */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-silver/0 group-hover:bg-silver/30 transition-colors duration-500" />

            {/* row header */}
            <div className="flex items-center gap-6 py-9 pl-4 select-none">
              <span className="font-unbounded text-xs text-white/20 w-7 shrink-0 transition-colors duration-300 group-hover:text-white/40">
                {step.number}
              </span>
              <span className="font-unbounded text-lg tracking-[0.15em] text-muted-white flex-1 transition-colors duration-300 group-hover:text-white">
                {step.label}
              </span>
              <span
                className="font-unbounded text-base text-silver/40 group-hover:text-silver/80 transition-colors duration-300"
                style={{
                  display: 'inline-block',
                  transform: openIndices.has(i) ? 'rotate(45deg)' : 'rotate(0deg)',
                  transition: 'transform 0.35s ease, color 0.3s ease',
                }}
              >
                +
              </span>
            </div>

            {/* expandable description */}
            <div
              style={{
                display: 'grid',
                gridTemplateRows: openIndices.has(i) ? '1fr' : '0fr',
                transition: 'grid-template-rows 0.4s ease',
              }}
            >
              <div style={{ overflow: 'hidden' }}>
                <div className="flex gap-6 pb-10 pl-4">
                  <span className="w-7 shrink-0" />
                  <p className="font-unbounded text-sm text-silver/70 leading-[1.9] flex-1">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

'use client'

import { useRef, useEffect } from 'react'
import { useLanguage } from '@/lib/language'
import { initGSAP, gsap } from '@/lib/gsap-init'

export default function Process() {
  const { t } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)
  const stepsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    initGSAP()

    if (!stepsRef.current) return
    const items = stepsRef.current.children

    const tween = gsap.fromTo(
      Array.from(items),
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out',
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
        },
      }
    )

    return () => {
      tween.scrollTrigger?.kill()
      tween.kill()
    }
  }, [])

  return (
    <section
      id="process"
      ref={sectionRef}
      className="min-h-screen bg-surface flex flex-col justify-center px-8 md:px-16 py-24"
    >
      <p className="font-inter text-xs tracking-[0.3em] text-silver mb-16">
        {t.process.title}
      </p>

      <div
        ref={stepsRef}
        className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8"
      >
        {t.process.steps.map((step) => (
          <div key={step.number} style={{ opacity: 0 }}>
            <p className="font-unbounded text-5xl md:text-6xl text-white/10 font-bold mb-6">
              {step.number}
            </p>
            <h3 className="font-unbounded text-lg tracking-[0.15em] text-muted-white mb-4">
              {step.label}
            </h3>
            <p className="font-inter text-sm text-silver leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

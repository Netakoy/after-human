'use client'

import { useRef, useEffect } from 'react'
import { useLanguage } from '@/lib/language'
import { initGSAP, gsap } from '@/lib/gsap-init'

export default function Studio() {
  const { t } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    initGSAP()

    const tween = gsap.fromTo(
      textRef.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
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
      id="studio"
      ref={sectionRef}
      className="min-h-screen bg-graphite flex flex-col md:flex-row overflow-hidden"
    >
      <div
        ref={textRef}
        className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-16 py-24"
        style={{ opacity: 0 }}
      >
        <p className="font-inter text-xs tracking-[0.3em] text-silver mb-12">
          STUDIO
        </p>
        <h2 className="font-unbounded font-bold text-4xl md:text-6xl text-muted-white leading-tight mb-8">
          {t.studio.title}
        </h2>
        <p className="font-inter text-base text-silver leading-relaxed max-w-md">
          {t.studio.text}
        </p>
      </div>

      <div className="w-full md:w-1/2 min-h-[50vh] md:min-h-full relative">
        <img
          src="/images/studio.jpg"
          alt="After Human Studio"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-graphite/40 to-transparent" />
      </div>
    </section>
  )
}

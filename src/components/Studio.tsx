'use client'

import { useRef, useEffect } from 'react'
import { initGSAP, gsap } from '@/lib/gsap-init'

export default function Studio() {
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
      className="min-h-screen bg-graphite flex items-center px-8 md:px-16 py-24"
    >
      <div
        ref={textRef}
        className="max-w-3xl"
        style={{ opacity: 0 }}
      >
        <p className="font-unbounded text-xs tracking-[0.3em] text-silver mb-12">
          STUDIO
        </p>
        <h2 className="font-unbounded font-bold text-4xl md:text-7xl text-muted-white leading-tight mb-10">
          AFTER HUMAN
        </h2>
        <p className="font-unbounded text-base md:text-lg text-silver leading-relaxed max-w-xl">
        </p>
      </div>
    </section>
  )
}

'use client'

import { useEffect, useRef } from 'react'
import { useLanguage } from '@/lib/language'
import { initGSAP, gsap } from '@/lib/gsap-init'

export default function Hero() {
  const { t } = useLanguage()
  const titleRef = useRef<HTMLDivElement>(null)
  const taglineRef = useRef<HTMLParagraphElement>(null)
  const scrollRef = useRef<HTMLSpanElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    initGSAP()

    const tl = gsap.timeline({ delay: 0.2 })

    tl.fromTo(
      titleRef.current,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: 'power2.out' }
    )
      .fromTo(
        taglineRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
        '-=0.8'
      )
      .fromTo(
        scrollRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.6 },
        '-=0.4'
      )
      .fromTo(
        imageRef.current,
        { opacity: 0, scale: 1.05 },
        { opacity: 1, scale: 1, duration: 1.4, ease: 'power2.out' },
        0.3
      )

    gsap.to(imageRef.current, {
      y: -80,
      ease: 'none',
      scrollTrigger: {
        trigger: imageRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    })

    return () => { tl.kill() }
  }, [])

  return (
    <section className="relative h-screen flex overflow-hidden bg-graphite">
      {/* Left half */}
      <div className="w-full md:w-1/2 flex flex-col justify-end pb-16 pl-8 md:pl-16 z-10">
        <div ref={titleRef} style={{ opacity: 0 }}>
          <h1 className="font-unbounded font-bold text-[18vw] md:text-[10vw] leading-[0.9] tracking-tight text-muted-white">
            AFTER<br />HUMAN
          </h1>
        </div>
        <p
          ref={taglineRef}
          className="font-inter text-xs md:text-sm tracking-[0.3em] text-silver mt-6"
          style={{ opacity: 0 }}
        >
          {t.hero.tagline}
        </p>
        <span
          ref={scrollRef}
          className="font-inter text-xs tracking-[0.3em] text-silver/40 mt-16"
          style={{ opacity: 0 }}
        >
          ↓ {t.hero.scroll}
        </span>
      </div>

      {/* Right half — visual */}
      <div
        ref={imageRef}
        className="absolute right-0 top-0 w-full md:w-1/2 h-full"
        style={{ opacity: 0 }}
      >
        <img
          src="/images/hero.jpg"
          alt="After Human"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-graphite via-graphite/60 to-transparent md:via-transparent" />
      </div>
    </section>
  )
}

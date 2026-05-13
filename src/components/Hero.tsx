'use client'

import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '@/lib/language'
import { initGSAP, gsap } from '@/lib/gsap-init'
import KinescopePlayer from '@/components/KinescopePlayer'

export default function Hero() {
  const { t } = useLanguage()
  const badgeRef = useRef<HTMLSpanElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const [videoReady, setVideoReady] = useState(false)

  useEffect(() => {
    initGSAP()

    if (!titleRef.current) return

    const tl = gsap.timeline({ delay: 0.2 })
    tl.fromTo(badgeRef.current, { y: 12, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' })
      .fromTo(
        titleRef.current.querySelectorAll('span'),
        { y: 8, opacity: 0, filter: 'blur(14px)' },
        { y: 0, opacity: 1, filter: 'blur(0px)', duration: 0.75, ease: 'power2.out', stagger: 0.07 },
        '-=0.4'
      )
      .fromTo(contentRef.current, { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' }, '-=0.5')
      .fromTo(imageRef.current, { opacity: 0, scale: 1.04 }, { opacity: 1, scale: 1, duration: 1.4, ease: 'power2.out' }, 0.3)

    const parallax = gsap.to(imageRef.current, {
      y: -60, ease: 'none',
      scrollTrigger: { trigger: imageRef.current, start: 'top top', end: 'bottom top', scrub: true },
    })

    return () => {
      tl.kill()
      parallax.scrollTrigger?.kill()
      parallax.kill()
    }
  }, [])

  const openModal = () => window.dispatchEvent(new CustomEvent('openContactModal'))

  return (
    <section className="relative min-h-screen flex overflow-hidden bg-graphite">
      {/* Left column */}
      <div className="page-pad relative w-full md:w-1/2 flex flex-col justify-center pt-28 pb-16 z-10 gap-8">
        <span
          ref={badgeRef}
          style={{ opacity: 0, alignSelf: 'flex-start' }}
          className="font-unbounded text-sm tracking-[0.15em] text-silver uppercase"
        >
          {t.hero.badge}
        </span>

        <div ref={titleRef}>
          <h1 className="font-unbounded font-bold leading-[0.88] tracking-tight text-muted-white"
            style={{ fontSize: 'clamp(3rem, 10vw, 8rem)', whiteSpace: 'nowrap' }}>
            {'AFTER'.split('').map((ch, i) => (
              <span key={i} style={{ opacity: 0, display: 'inline-block' }}>{ch}</span>
            ))}
            <br />
            {'HUMAN'.split('').map((ch, i) => (
              <span key={5 + i} style={{ opacity: 0, display: 'inline-block' }}>{ch}</span>
            ))}
          </h1>
        </div>

        <div ref={contentRef} style={{ opacity: 0 }} className="flex flex-col gap-6">
          <p className="font-unbounded text-sm text-muted-white leading-relaxed">
            {t.hero.description}
          </p>

          <hr className="border-t border-white/10" />

          <div className="flex items-start gap-10">
            {t.hero.stats.map((stat, i) => (
              <div key={i} className="flex flex-col gap-1">
                <span className="font-unbounded text-sm text-muted-white">
                  {stat.value}{stat.unit ? <> {stat.unit}</> : null}
                </span>
                <span className="font-unbounded text-sm text-silver/50">{stat.label}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => document.getElementById('showreel')?.scrollIntoView({ behavior: 'smooth' })}
              className="font-unbounded text-sm tracking-[0.1em] border border-white/30 text-muted-white hover:border-white/60 transition-colors"
              style={{ padding: '15px' }}
            >
              {t.hero.cta.showreel}
            </button>
            <button
              onClick={openModal}
              className="font-unbounded text-sm tracking-[0.1em] bg-muted-white text-graphite hover:opacity-90 transition-opacity"
              style={{ padding: '15px' }}
            >
              {t.hero.cta.contact}
            </button>
          </div>

        </div>
      </div>

      {/* Full-screen background video */}
      <div
        ref={imageRef}
        className="absolute inset-0"
        style={{ opacity: 0 }}
      >
        {/* Видео на весь фон */}
        <KinescopePlayer
          videoId="gqsQsTUNV6KKiByk6C7yQY"
          autoplay
          muted
          loop
          showControls={false}
          onReady={() => setVideoReady(true)}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            opacity: videoReady ? 1 : 0,
            transition: 'opacity 0.8s ease',
          }}
        />
        {/* Градиент: слева чёрный (100%), справа прозрачный (0%) */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(to right, #000 0%, #000 35%, rgba(0,0,0,0.5) 60%, transparent 100%)' }}
        />
      </div>
    </section>
  )
}

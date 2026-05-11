'use client'

import { useRef, useEffect } from 'react'
import { useLanguage } from '@/lib/language'
import KinescopePlayer from './KinescopePlayer'
import { initGSAP, gsap } from '@/lib/gsap-init'

const SHOWREEL_KINESCOPE_ID = 'PLACEHOLDER_SHOWREEL_ID'

export default function Showreel() {
  const { t } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    initGSAP()

    const tween = gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      }
    )

    return () => {
      tween.scrollTrigger?.kill()
      tween.kill()
    }
  }, [])

  return (
    <section ref={sectionRef} className="relative h-screen bg-graphite" style={{ opacity: 0 }}>
      <KinescopePlayer
        videoId={SHOWREEL_KINESCOPE_ID}
        poster="/images/showreel-poster.jpg"
        showPlayButton={true}
        playLabel={t.showreel.label}
        className="w-full h-full"
      />
      <div className="absolute inset-0 pointer-events-none border border-white/5" />
    </section>
  )
}

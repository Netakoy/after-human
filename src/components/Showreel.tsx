'use client'

import { useRef, useEffect } from 'react'
import { useLanguage } from '@/lib/language'
import KinescopePlayer from './KinescopePlayer'
import { initGSAP, gsap } from '@/lib/gsap-init'

const SHOWREEL_RU_ID = 'dkH3YyoUNNbtjFtX6VLfar'
const SHOWREEL_EN_ID = '6gAh4x55piyA3zZ9FEw5YL'

export default function Showreel() {
  const { t, language } = useLanguage()
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
    <section id="showreel" ref={sectionRef} className="relative h-screen bg-graphite" style={{ opacity: 0 }}>
      <KinescopePlayer
        videoId={language === 'ru' ? SHOWREEL_RU_ID : SHOWREEL_EN_ID}
        poster="/images/cases/showreel-poster.png"
        showPlayButton={true}
        playLabel={t.showreel.label}
        className="w-full h-full"
      />
      <div className="absolute inset-0 pointer-events-none border border-white/5" />
    </section>
  )
}

'use client'

import { useRef, useEffect } from 'react'
import { initGSAP, gsap, ScrollTrigger } from '@/lib/gsap-init'
import KinescopePlayer from './KinescopePlayer'

interface CaseSectionProps {
  index: string
  title: string
  description: string
  posterSrc: string
  kinescopeId?: string
  gallery: string[]
}

export default function CaseSection({
  index,
  title,
  description,
  posterSrc,
  kinescopeId,
  gallery,
}: CaseSectionProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const galleryRef = useRef<HTMLDivElement>(null)

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
    <section ref={sectionRef} className="relative min-h-screen bg-graphite overflow-hidden">
      {kinescopeId ? (
        <KinescopePlayer
          videoId={kinescopeId}
          autoplay
          muted
          loop
          className="absolute inset-0 w-full h-full"
          poster={posterSrc}
        />
      ) : (
        <img
          src={posterSrc}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-graphite/90 via-graphite/30 to-transparent" />

      <div ref={textRef} className="absolute bottom-0 left-0 right-0 p-8 md:p-16" style={{ opacity: 0 }}>
        <p className="font-inter text-xs tracking-[0.3em] text-silver mb-4">
          {index}
        </p>
        <h2 className="font-unbounded font-bold text-3xl md:text-5xl text-muted-white mb-4 leading-tight">
          {title}
        </h2>
        <p className="font-inter text-sm text-silver max-w-md leading-relaxed">
          {description}
        </p>
      </div>

      {gallery.length > 0 && (
        <div className="absolute bottom-36 left-0 right-0 overflow-x-auto">
          <div
            ref={galleryRef}
            className="flex gap-4 px-8 md:px-16"
            style={{ width: 'max-content' }}
          >
            {gallery.map((src, i) => (
              <img
                key={i}
                src={src}
                alt=""
                className="h-40 w-auto object-cover opacity-70 hover:opacity-100 transition-opacity flex-shrink-0"
              />
            ))}
          </div>
        </div>
      )}
    </section>
  )
}

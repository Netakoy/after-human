'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/lib/language'
import { initGSAP, gsap } from '@/lib/gsap-init'
import KinescopePlayer from './KinescopePlayer'
import Nav from './Nav'
import { casesData, type CaseData } from '@/data/cases'

interface CasePageProps {
  caseData: CaseData
}

export default function CasePage({ caseData }: CasePageProps) {
  const { language } = useLanguage()
  const [openPipeline, setOpenPipeline] = useState<Set<number>>(new Set([0]))
  const [lightbox, setLightbox] = useState<number | null>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const pipelineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (lightbox === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null)
      if (e.key === 'ArrowRight') setLightbox(i => i !== null && i < caseData.gallery.length - 1 ? i + 1 : i)
      if (e.key === 'ArrowLeft') setLightbox(i => i !== null && i > 0 ? i - 1 : i)
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [lightbox, caseData.gallery.length])

  const title = language === 'ru' ? caseData.titleRu : caseData.titleEn
  const paragraphs = language === 'ru' ? caseData.descriptionRu : caseData.descriptionEn

  useEffect(() => {
    initGSAP()
    if (!headerRef.current) return

    const tl = gsap.timeline()
    tl.fromTo(
      headerRef.current.querySelectorAll('.animate-in'),
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: 'power2.out', stagger: 0.12 }
    )

    return () => { tl.kill() }
  }, [])

  useEffect(() => {
    initGSAP()
    if (!pipelineRef.current) return

    const items = Array.from(pipelineRef.current.children)
    const tween = gsap.fromTo(
      items,
      { y: 20, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.5, ease: 'power2.out', stagger: 0.08,
        scrollTrigger: { trigger: pipelineRef.current, start: 'top 75%' },
      }
    )

    return () => { tween.scrollTrigger?.kill(); tween.kill() }
  }, [])

  const togglePipeline = (i: number) => {
    setOpenPipeline(prev => {
      const next = new Set(prev)
      if (next.has(i)) next.delete(i)
      else next.add(i)
      return next
    })
  }

  return (
    <main className="bg-graphite min-h-screen">
      <Nav />

      {/* Header */}
      <section className="page-pad pt-32 pb-12" ref={headerRef}>
        <p className="animate-in font-unbounded text-xs tracking-[0.3em] text-silver mb-5" style={{ opacity: 0 }}>
          {caseData.index}
        </p>
        <h1 className="animate-in font-unbounded font-bold text-5xl md:text-7xl text-muted-white leading-[1.05] max-w-4xl mb-10" style={{ opacity: 0 }}>
          {title}
        </h1>
        {paragraphs.map((para, i) => (
          <p
            key={i}
            className="animate-in font-unbounded text-sm md:text-base text-silver/80 leading-[1.9] mb-6 last:mb-0"
            style={{ opacity: 0 }}
          >
            {para}
          </p>
        ))}
      </section>

      {/* Videos */}
      <section className="page-pad pb-4 space-y-4">
        {caseData.videos.map((videoId, i) => (
          <div key={videoId} className="w-full aspect-video">
            <KinescopePlayer
              videoId={videoId}
              showPlayButton={true}
              poster={caseData.videoPosters?.[i] ?? (i === 0 ? caseData.posterSrc : undefined)}
              className="w-full h-full"
            />
          </div>
        ))}
      </section>

      {/* Gallery */}
      {caseData.gallery.length > 0 && (
        <section className="page-pad py-4">
          <div className={`grid gap-2 ${caseData.gallery.length >= 4 ? 'grid-cols-4' : caseData.gallery.length === 3 ? 'grid-cols-3' : 'grid-cols-2'}`}>
            {caseData.gallery.map((src, i) => (
              <div
                key={i}
                className="aspect-video overflow-hidden cursor-zoom-in relative group"
                onClick={() => setLightbox(i)}
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Pipeline */}
      {caseData.pipeline.length > 0 && (
        <section className="page-pad pt-20 pb-16">
          <p className="font-unbounded text-xs tracking-[0.3em] text-silver mb-12">
            {language === 'ru' ? 'ПАЙПЛАЙН ПРОЕКТА' : 'PROJECT PIPELINE'}
          </p>

          <div ref={pipelineRef} className="border-t border-white/[0.1]">
            {caseData.pipeline.map((section, i) => {
              const isOpen = openPipeline.has(i)
              const items = language === 'ru' ? section.items : section.itemsEn
              const categoryLabel = language === 'ru' ? section.category : section.categoryEn

              return (
                <div
                  key={i}
                  className="relative border-b border-white/[0.1] cursor-pointer group"
                  style={{ opacity: 0 }}
                  onClick={() => togglePipeline(i)}
                >
                  <div className="absolute left-0 top-0 bottom-0 w-px bg-silver/0 group-hover:bg-silver/30 transition-colors duration-500" />

                  <div className="flex items-center gap-6 py-9 pl-4 select-none">
                    <span className="font-unbounded text-xs text-white/20 w-7 shrink-0 transition-colors duration-300 group-hover:text-white/40">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="font-unbounded text-lg tracking-[0.15em] text-muted-white flex-1 transition-colors duration-300 group-hover:text-white">
                      {categoryLabel}
                    </span>
                    <span
                      className="font-unbounded text-base text-silver/40 group-hover:text-silver/80 transition-colors duration-300"
                      style={{
                        display: 'inline-block',
                        transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                        transition: 'transform 0.35s ease, color 0.3s ease',
                      }}
                    >
                      +
                    </span>
                  </div>

                  <div
                    style={{
                      display: 'grid',
                      gridTemplateRows: isOpen ? '1fr' : '0fr',
                      transition: 'grid-template-rows 0.4s ease',
                    }}
                  >
                    <div style={{ overflow: 'hidden' }}>
                      <div className="flex gap-6 pb-10 pl-4">
                        <span className="w-7 shrink-0" />
                        <ul className="flex-1 space-y-3">
                          {items.map((item, j) => (
                            <li key={j} className="flex items-start gap-3">
                              <span className="font-unbounded text-xs text-silver/30 mt-1 shrink-0">—</span>
                              <span className="font-unbounded text-sm text-silver/70 leading-[1.9]">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>
      )}

      {/* All cases horizontal scroll */}
      <section className="pt-16 pb-24">
        <div className="page-pad mb-12 flex items-center justify-between">
          <p className="font-unbounded text-xs tracking-[0.3em] text-silver">
            {language === 'ru' ? 'ЕЩЁ КЕЙСЫ' : 'MORE CASES'}
          </p>
          <Link
            href="/#cases"
            className="font-unbounded text-xs tracking-[0.2em] text-silver/50 hover:text-silver transition-colors"
          >
            {language === 'ru' ? 'СМОТРЕТЬ ВСЕ →' : 'VIEW ALL →'}
          </Link>
        </div>

        <div
          className="flex gap-3 overflow-x-auto pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', paddingLeft: 'max(1.5rem, 8vw)', paddingRight: 'max(1.5rem, 8vw)' }}
        >
          {casesData.map((c) => {
            const isCurrent = c.id === caseData.id
            return (
              <Link
                key={c.id}
                href={`/cases/${c.id}`}
                className={`group relative flex-shrink-0 overflow-hidden block cursor-pointer transition-opacity duration-300 ${isCurrent ? 'opacity-40 pointer-events-none' : 'hover:opacity-90'}`}
                style={{ width: '320px', aspectRatio: '16/10' }}
              >
                <Image
                  src={c.posterSrc}
                  alt=""
                  fill
                  sizes="320px"
                  className="object-cover md:grayscale transition-[transform,filter] duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 p-5">
                  <p className="font-unbounded text-xs tracking-[0.3em] text-silver/50 mb-1.5">
                    {c.index}
                  </p>
                  <p className="font-unbounded text-base text-white leading-tight">
                    {language === 'ru' ? c.titleRu : c.titleEn}
                  </p>
                </div>
                {isCurrent && (
                  <div className="absolute inset-0 border border-white/20" />
                )}
              </Link>
            )
          })}
        </div>
      </section>
      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ background: 'rgba(0,0,0,0.92)' }}
          onClick={() => setLightbox(null)}
        >
          {/* Close */}
          <button
            className="absolute top-6 right-6 font-unbounded text-silver/60 hover:text-white text-2xl transition-colors duration-200 w-10 h-10 flex items-center justify-center"
            onClick={() => setLightbox(null)}
          >
            ×
          </button>

          {/* Prev */}
          {lightbox > 0 && (
            <button
              className="absolute left-4 md:left-8 font-unbounded text-silver/50 hover:text-white text-3xl transition-colors duration-200 w-12 h-12 flex items-center justify-center"
              onClick={(e) => { e.stopPropagation(); setLightbox(lightbox - 1) }}
            >
              ‹
            </button>
          )}

          {/* Image */}
          <img
            src={caseData.gallery[lightbox]}
            alt=""
            className="max-w-[90vw] max-h-[88vh] object-contain select-none"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Next */}
          {lightbox < caseData.gallery.length - 1 && (
            <button
              className="absolute right-4 md:right-8 font-unbounded text-silver/50 hover:text-white text-3xl transition-colors duration-200 w-12 h-12 flex items-center justify-center"
              onClick={(e) => { e.stopPropagation(); setLightbox(lightbox + 1) }}
            >
              ›
            </button>
          )}

          {/* Counter */}
          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 font-unbounded text-xs tracking-[0.2em] text-silver/40">
            {lightbox + 1} / {caseData.gallery.length}
          </p>
        </div>
      )}
    </main>
  )
}

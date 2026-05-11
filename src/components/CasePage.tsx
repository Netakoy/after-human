'use client'

import Link from 'next/link'
import { useLanguage } from '@/lib/language'
import KinescopePlayer from './KinescopePlayer'
import Nav from './Nav'
import type { CaseData } from '@/data/cases'

interface CasePageProps {
  caseData: CaseData
}

export default function CasePage({ caseData }: CasePageProps) {
  const { language } = useLanguage()

  const title = language === 'ru' ? caseData.titleRu : caseData.titleEn
  const description = language === 'ru' ? caseData.descriptionRu : caseData.descriptionEn

  return (
    <main className="bg-graphite min-h-screen">
      <Nav />

      {/* Hero */}
      <section className="relative h-[60vh] overflow-hidden">
        <img
          src={caseData.posterSrc}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-graphite via-graphite/40 to-transparent" />
        <div className="absolute bottom-0 left-0 px-8 md:px-16 pb-12">
          <p className="font-inter text-xs tracking-[0.3em] text-silver mb-4">
            {caseData.index}
          </p>
          <h1 className="font-unbounded font-bold text-4xl md:text-6xl text-muted-white leading-tight">
            {title}
          </h1>
        </div>
      </section>

      {/* Description */}
      <section className="px-8 md:px-16 py-16 max-w-3xl">
        <p className="font-inter text-base md:text-lg text-silver leading-relaxed">
          {description}
        </p>
      </section>

      {/* Videos */}
      <section className="px-8 md:px-16 pb-16 space-y-8">
        {caseData.videos.map((videoId, i) => (
          <div key={videoId} className="w-full aspect-video">
            <KinescopePlayer
              videoId={videoId}
              showPlayButton={true}
              poster={i === 0 ? caseData.posterSrc : undefined}
              className="w-full h-full"
            />
          </div>
        ))}
      </section>

      {/* Gallery */}
      {caseData.gallery.length > 0 && (
        <section className="px-8 md:px-16 pb-16">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {caseData.gallery.map((src, i) => (
              <img
                key={i}
                src={src}
                alt=""
                className="w-full aspect-video object-cover"
              />
            ))}
          </div>
        </section>
      )}

      {/* Back */}
      <section className="px-8 md:px-16 pb-24">
        <Link
          href="/#cases"
          className="font-unbounded text-xs tracking-[0.2em] text-silver hover:text-muted-white transition-colors border border-white/20 px-6 py-3 inline-block"
        >
          ← {language === 'ru' ? 'ВСЕ РАБОТЫ' : 'ALL WORK'}
        </Link>
      </section>
    </main>
  )
}

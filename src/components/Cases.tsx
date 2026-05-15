'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/lib/language'
import { casesData } from '@/data/cases'

export default function Cases() {
  const { language, t } = useLanguage()

  return (
    <section id="cases" className="page-pad py-24">
      <p className="font-unbounded text-xs tracking-[0.3em] text-silver mb-16">
        {t.cases.title}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {casesData.map((c) => (
          <Link
            key={c.id}
            href={`/cases/${c.id}`}
            className={`group relative aspect-video overflow-hidden block${c.fullWidth ? ' md:col-span-2' : ''}`}
          >
            <Image
              src={c.posterSrc}
              alt={language === 'ru' ? c.titleRu : c.titleEn}
              fill
              sizes={c.fullWidth ? '100vw' : '(max-width: 768px) 100vw, 50vw'}
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-graphite/90 via-graphite/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 md:p-8">
              <p className="font-unbounded text-xs tracking-[0.3em] text-silver mb-2">
                {c.index}
              </p>
              <h3 className="font-unbounded font-bold text-xl md:text-2xl text-muted-white leading-tight">
                {language === 'ru' ? c.titleRu : c.titleEn}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

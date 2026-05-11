'use client'

import { useLanguage } from '@/lib/language'
import CaseSection from './CaseSection'

const casesData = [
  {
    id: 'oxyterra',
    index: '001',
    titleRu: 'OXYTERRA',
    titleEn: 'OXYTERRA',
    descriptionRu: 'Cinematic product визуализация для промышленного бренда. Macro-съёмка и AI-motion.',
    descriptionEn: 'Cinematic product visualization for an industrial brand. Macro shots and AI motion.',
    kinescopeId: 'PLACEHOLDER_OXYTERRA_ID',
    posterSrc: '/images/cases/oxyterra.png',
    gallery: [
      '/images/cases/oxyterra-1.png',
      '/images/cases/oxyterra-2.png',
    ],
  },
  {
    id: 'kinopoisk',
    index: '002',
    titleRu: 'КИНОПОИСК',
    titleEn: 'KINOPOISK',
    descriptionRu: 'Motion graphics и анимация для крупнейшей кинобазы Рунета.',
    descriptionEn: "Motion graphics and animation for Russia's largest film database.",
    kinescopeId: 'PLACEHOLDER_KINOPOISK_ID',
    posterSrc: '/images/cases/kinopoisk.png',
    gallery: [],
  },
  {
    id: 'technopark',
    index: '003',
    titleRu: 'ТЕХНОПАРК',
    titleEn: 'TECHNOPARK',
    descriptionRu: 'Architectural render и cinematic presentation технопарка.',
    descriptionEn: 'Architectural render and cinematic presentation of a technology park.',
    kinescopeId: 'PLACEHOLDER_TECHNOPARK_ID',
    posterSrc: '/images/cases/technopark-1.png',
    gallery: [],
  },
  {
    id: 'african-clip',
    index: '004',
    titleRu: 'АФРИКАНСКИЙ КЛИП',
    titleEn: 'AFRICAN MUSIC VIDEO',
    descriptionRu: 'Музыкальный клип с AI-генерацией и кинематографической режиссурой.',
    descriptionEn: 'Music video with AI generation and cinematic direction.',
    kinescopeId: 'PLACEHOLDER_AFRICAN_CLIP_ID',
    posterSrc: '/images/cases/african-clip.png',
    gallery: [
      '/images/cases/african-clip-1.png',
    ],
  },
]

export default function Cases() {
  const { language } = useLanguage()

  return (
    <section id="cases">
      {casesData.map((c) => (
        <CaseSection
          key={c.id}
          index={c.index}
          title={language === 'ru' ? c.titleRu : c.titleEn}
          description={language === 'ru' ? c.descriptionRu : c.descriptionEn}
          posterSrc={c.posterSrc}
          kinescopeId={c.kinescopeId}
          gallery={c.gallery}
        />
      ))}
    </section>
  )
}

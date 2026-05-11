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
    kinescopeId: 'iQrV4TBCLccUmq1HiDSGYG',
    posterSrc: '/images/cases/oxyterra.png',
    gallery: [
      '/images/cases/oxyterra-1.png',
      '/images/cases/oxyterra-2.png',
    ],
  },
  {
    id: 'ai-doc',
    index: '002',
    titleRu: 'ДОКУМЕНТАЛЬНАЯ КОРОТКОМЕТРАЖКА',
    titleEn: 'AI SHORT DOCUMENTARY',
    descriptionRu: 'Короткометражный документальный фильм о развитии искусственного интеллекта.',
    descriptionEn: 'A short documentary film about the development of artificial intelligence.',
    kinescopeId: 'woSrEnNNVNBtD4gSbskW1q',
    posterSrc: '/images/cases/oxyterra.png',
    gallery: [],
  },
  {
    id: 'kinopoisk',
    index: '003',
    titleRu: 'КИНОПОИСК',
    titleEn: 'KINOPOISK',
    descriptionRu: 'Motion graphics и анимация для крупнейшей кинобазы Рунета.',
    descriptionEn: "Motion graphics and animation for Russia's largest film database.",
    kinescopeId: '5xC7AXeEZeKy2PtU4sszQA',
    posterSrc: '/images/cases/kinopoisk.png',
    gallery: [],
  },
  {
    id: 'technopark',
    index: '004',
    titleRu: 'ТЕХНОПАРК',
    titleEn: 'TECHNOPARK',
    descriptionRu: 'Architectural render и cinematic presentation технопарка.',
    descriptionEn: 'Architectural render and cinematic presentation of a technology park.',
    kinescopeId: '36PmNJH1rdbUswU7UHodLL',
    posterSrc: '/images/cases/technopark-1.png',
    gallery: [],
  },
  {
    id: 'african-clip',
    index: '005',
    titleRu: 'АФРИКАНСКИЙ КЛИП',
    titleEn: 'AFRICAN MUSIC VIDEO',
    descriptionRu: 'Музыкальный клип с AI-генерацией и кинематографической режиссурой.',
    descriptionEn: 'Music video with AI generation and cinematic direction.',
    kinescopeId: 'eUfwrUseNsesFui2zqBBUg',
    posterSrc: '/images/cases/african-clip.png',
    gallery: [
      '/images/cases/african-clip-1.png',
    ],
  },
  {
    id: 'bali',
    index: '006',
    titleRu: 'ДЖИН НА БАЛИ',
    titleEn: 'GIN IN BALI',
    descriptionRu: 'Cinematic AI-видео для алкогольного бренда на Бали.',
    descriptionEn: 'Cinematic AI-video for a spirits brand in Bali.',
    kinescopeId: 'fq94xmGyhYV8hD5J1FC2Kg',
    posterSrc: '/images/cases/Bali.png',
    gallery: [],
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

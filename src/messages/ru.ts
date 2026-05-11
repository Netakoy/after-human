import type { Messages } from '@/types'

export const ru: Messages = {
  nav: {
    work: 'РАБОТЫ',
    process: 'ПРОЦЕСС',
    studio: 'СТУДИЯ',
    contact: 'КОНТАКТ',
  },
  hero: {
    tagline: 'AI PRODUCTION STUDIO',
    scroll: 'SCROLL',
  },
  showreel: {
    label: 'SHOWREEL',
  },
  cases: {
    title: 'РАБОТЫ',
  },
  process: {
    title: 'КАК МЫ РАБОТАЕМ',
    steps: [
      {
        number: '01',
        label: 'ИДЕЯ',
        description: 'Погружаемся в задачу, формируем визуальную концепцию',
      },
      {
        number: '02',
        label: 'РЕЖИССУРА',
        description: 'Разрабатываем storyboard, референсы, visual direction',
      },
      {
        number: '03',
        label: 'ПРОДАКШЕН',
        description: 'Генерация, монтаж, motion, финальная обработка',
      },
      {
        number: '04',
        label: 'ФИНАЛ',
        description: 'Сдача материалов в нужных форматах, адаптации',
      },
    ],
  },
  studio: {
    title: 'AFTER HUMAN',
    text: 'Мы делаем cinematic AI-video для агентств и брендов. Наш продукт — визуальный вкус, режиссура и production quality. AI — только инструмент.',
  },
  contact: {
    title: 'ОБСУДИТЬ ПРОЕКТ',
    name: 'Имя',
    company: 'Компания',
    messenger: 'Telegram / Email',
    task: 'Опишите задачу',
    submit: 'ОТПРАВИТЬ',
    success: 'Заявка отправлена. Свяжемся в течение 24 часов.',
    error: 'Ошибка отправки. Напишите нам напрямую.',
  },
}

import type { Messages } from '@/types'

export const ru: Messages = {
  nav: {
    work: 'РАБОТЫ',
    process: 'ПРОЦЕСС',
    pricing: 'ЦЕНЫ',
    contact: 'КОНТАКТ',
  },
  hero: {
    tagline: 'AI-FIRST CREATIVE PRODUCTION',
    scroll: 'SCROLL',
    badge: 'PRODUCTION-ПАРТНЁР ДЛЯ РЕКЛАМНЫХ АГЕНТСТВ',
    description: 'Помогаем агентствам быстро превращать идеи в ролики, pitch films, key visuals и визуальные миры для кампаний.',
    stats: [
      { value: '3–7', unit: 'ДНЕЙ', label: 'на 1 мин. видео' },
      { value: '4K', unit: '', label: 'финальный мастер' },
      { value: '0', unit: 'ПЕРЕСЪЁМОК', label: 'правки без нового бюджета' },
    ],
    cta: {
      showreel: 'СМОТРЕТЬ ШОУРИЛЛ',
      contact: 'ОБСУДИТЬ ПРОЕКТ',
    },
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
        label: 'БРИФИНГ',
        description: 'Установочная встреча, на которой мы выясняем цели проекта',
      },
      {
        number: '02',
        label: 'ИДЕЯ',
        description: 'Погружаемся в задачу и создаём полноценную концепцию проекта: смысл, драматургию, визуальный стиль, персонажей, ключевые сцены, эмоциональные хуки и общую режиссёрскую логику ролика.',
      },
      {
        number: '03',
        label: 'РЕЖИССУРА',
        description: 'Разрабатываем storyboard, референсы, visual direction',
      },
      {
        number: '04',
        label: 'ПРОДАКШЕН',
        description: 'Генерация сцен, анимация, монтаж, звук и финальная обработка',
      },
      {
        number: '05',
        label: 'ФИНАЛ',
        description: 'Сдача материалов в нужных форматах, адаптации',
      },
    ],
  },
  contact: {
    title: 'ОБСУДИТЬ ПРОЕКТ',
    name: 'Имя',
    company: 'Компания',
    phone: 'Номер телефона',
    messenger: 'Telegram / Email',
    task: 'Опишите задачу',
    submit: 'ОТПРАВИТЬ',
    success: 'Заявка отправлена. Свяжемся в течение 24 часов.',
    error: 'Ошибка отправки. Напишите нам напрямую.',
  },
  pricing: {
    title: 'ЦЕНЫ',
    subtitle: 'Рассчитайте стоимость вашего проекта',
    slider: { label: 'Длительность видео', unit: 'сек' },
    options: {
      script: 'Сценарий',
      character: 'Персонажи',
      extraCharacters: 'доп. персонажей',
      soundDesign: 'Sound design',
      musicAi: 'Музыка (AI)',
      musicLicensed: 'Лицензированная музыка',
      editing: 'Монтаж',
    },
    total: 'ИТОГО',
    disclaimer: '* Ориентировочная стоимость. Финальная цена рассчитывается индивидуально под задачу.',
    cta: 'ОБСУДИТЬ ПРОЕКТ',
  },
}

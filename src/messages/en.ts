import type { Messages } from '@/types'

export const en: Messages = {
  nav: {
    work: 'WORK',
    process: 'PROCESS',
    pricing: 'PRICING',
    contact: 'CONTACT',
  },
  hero: {
    tagline: 'AI PRODUCTION STUDIO',
    scroll: 'SCROLL',
    badge: 'AI FULL-CYCLE PRODUCTION',
    description: 'After Human — a studio that solves briefs for agencies and brands. One contractor from idea to final cut.',
    stats: [
      { value: '3–7', unit: 'DAYS', label: 'per 1 min. video' },
      { value: '4K', unit: '', label: 'final master' },
      { value: '10–20×', unit: '', label: 'vs. traditional' },
    ],
    cta: {
      showreel: 'WATCH SHOWREEL',
      contact: 'DISCUSS A PROJECT',
    },
  },
  showreel: {
    label: 'SHOWREEL',
  },
  cases: {
    title: 'WORK',
  },
  process: {
    title: 'HOW WE WORK',
    steps: [
      {
        number: '01',
        label: 'BRIEFING',
        description: 'A kick-off meeting where we clarify the project goals and vision',
      },
      {
        number: '02',
        label: 'IDEA',
        description: 'We dive into the brief and form a visual concept',
      },
      {
        number: '03',
        label: 'DIRECTION',
        description: 'Storyboard, references, visual direction development',
      },
      {
        number: '04',
        label: 'PRODUCTION',
        description: 'Generation, editing, motion, final processing',
      },
      {
        number: '05',
        label: 'DELIVERY',
        description: 'Files delivered in required formats and adaptations',
      },
    ],
  },
  contact: {
    title: 'DISCUSS A PROJECT',
    name: 'Name',
    company: 'Company',
    phone: 'Phone number',
    messenger: 'Telegram / Email',
    task: 'Describe your project',
    submit: 'SEND',
    success: 'Request sent. We will get back to you within 24 hours.',
    error: 'Send error. Please contact us directly.',
  },
  pricing: {
    title: 'PRICING',
    subtitle: 'Calculate your project cost',
    slider: { label: 'Video duration', unit: 'sec' },
    options: {
      script: 'Script',
      character: 'Characters',
      extraCharacters: 'extra characters',
      soundDesign: 'Sound design',
      musicAi: 'Music (AI)',
      musicLicensed: 'Licensed music',
      editing: 'Editing',
      colorGrading: 'Color grading',
    },
    total: 'TOTAL',
    cta: 'DISCUSS A PROJECT',
  },
}

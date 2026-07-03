import type { Messages } from '@/types'

export const en: Messages = {
  nav: {
    work: 'WORK',
    process: 'PROCESS',
    formats: 'FORMATS',
    contact: 'CONTACT',
  },
  hero: {
    tagline: 'AI-FIRST CREATIVE PRODUCTION',
    scroll: 'SCROLL',
    badge: 'PRODUCTION PARTNER FOR AD AGENCIES',
    description: 'We help agencies quickly turn ideas into films, pitch films, key visuals and visual worlds for campaigns.',
    stats: [
      { value: '3–7', unit: 'DAYS', label: 'per 1 min. video' },
      { value: '4K', unit: '', label: 'final master' },
      { value: '0', unit: 'RESHOOTS', label: 'revisions without a new budget' },
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
  formats: {
    title: 'FORMATS',
    items: [
      {
        title: 'BRAND FILM / COMMERCIAL',
        description: 'From idea to a 4K master: concept, direction, generation, editing, sound.',
        timeline: '1–2 weeks',
      },
      {
        title: 'PITCH / MOOD FILM',
        description: 'Show the client the idea before full production: tenders, pitches, presentations.',
        timeline: '3–7 days',
      },
      {
        title: 'KEY VISUALS + SOCIAL',
        description: "The campaign's visual language: key images and social media adaptations.",
        timeline: '3–5 days',
      },
      {
        title: 'SCREEN CONTENT / VISUAL WORLDS',
        description: "Content for events, screens and installations: worlds that can't be filmed.",
        timeline: 'scoped per brief',
      },
    ],
    note: 'Cost is estimated per brief',
    cta: 'DISCUSS A PROJECT',
  },
}

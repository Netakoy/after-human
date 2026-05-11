import type { Messages } from '@/types'

export const en: Messages = {
  nav: {
    work: 'WORK',
    process: 'PROCESS',
    studio: 'STUDIO',
    contact: 'CONTACT',
  },
  hero: {
    tagline: 'AI PRODUCTION STUDIO',
    scroll: 'SCROLL',
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
        label: 'IDEA',
        description: 'We dive into the brief and form a visual concept',
      },
      {
        number: '02',
        label: 'DIRECTION',
        description: 'Storyboard, references, visual direction development',
      },
      {
        number: '03',
        label: 'PRODUCTION',
        description: 'Generation, editing, motion, final processing',
      },
      {
        number: '04',
        label: 'DELIVERY',
        description: 'Files delivered in required formats and adaptations',
      },
    ],
  },
  studio: {
    title: 'AFTER HUMAN',
    text: 'We create cinematic AI-video for agencies and brands. Our product is visual taste, direction and production quality. AI is just a tool.',
  },
  contact: {
    title: 'DISCUSS A PROJECT',
    name: 'Name',
    company: 'Company',
    messenger: 'Telegram / Email',
    task: 'Describe your project',
    submit: 'SEND',
    success: 'Request sent. We will get back to you within 24 hours.',
    error: 'Send error. Please contact us directly.',
  },
}

export type Language = 'ru' | 'en'

export interface Case {
  id: string
  index: string
  titleRu: string
  titleEn: string
  descriptionRu: string
  descriptionEn: string
  kinescopeId?: string
  posterSrc: string
  gallery: string[]
}

export interface ProcessStep {
  number: string
  labelRu: string
  labelEn: string
  descriptionRu: string
  descriptionEn: string
}

export interface Messages {
  nav: {
    work: string
    process: string
    studio: string
    contact: string
  }
  hero: {
    tagline: string
    scroll: string
  }
  showreel: {
    label: string
  }
  cases: {
    title: string
  }
  process: {
    title: string
    steps: {
      number: string
      label: string
      description: string
    }[]
  }
  studio: {
    title: string
    text: string
  }
  contact: {
    title: string
    name: string
    company: string
    messenger: string
    task: string
    submit: string
    success: string
    error: string
  }
}

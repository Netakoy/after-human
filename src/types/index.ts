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
    pricing: string
    contact: string
  }
  hero: {
    tagline: string
    scroll: string
    badge: string
    description: string
    stats: {
      value: string
      unit: string
      label: string
    }[]
    cta: {
      showreel: string
      contact: string
    }
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
  contact: {
    title: string
    name: string
    company: string
    phone: string
    messenger: string
    task: string
    submit: string
    success: string
    error: string
  }
  pricing: {
    title: string
    subtitle: string
    slider: { label: string; unit: string }
    options: {
      script: string
      character: string
      extraCharacters: string
      soundDesign: string
      musicAi: string
      musicLicensed: string
      editing: string
      colorGrading: string
    }
    total: string
    cta: string
  }
}

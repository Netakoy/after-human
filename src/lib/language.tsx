'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import type { Language, Messages } from '@/types'
import { ru } from '@/messages/ru'
import { en } from '@/messages/en'

interface LanguageContextValue {
  language: Language
  t: Messages
  toggle: () => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

const STORAGE_KEY = 'ah-lang'

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('ru')

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Language | null
    if (stored === 'en') setLanguage('en')
  }, [])

  const toggle = () => {
    const next: Language = language === 'ru' ? 'en' : 'ru'
    setLanguage(next)
    localStorage.setItem(STORAGE_KEY, next)
  }

  const t = language === 'ru' ? ru : en

  return (
    <LanguageContext.Provider value={{ language, t, toggle }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}

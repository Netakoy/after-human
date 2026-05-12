import type { Metadata } from 'next'
import { Unbounded } from 'next/font/google'
import { LanguageProvider } from '@/lib/language'
import SoundProvider from '@/components/SoundProvider'
import NoiseOverlay from '@/components/NoiseOverlay'
import GradientBackground from '@/components/GradientBackground'
import TelegramPopup from '@/components/TelegramPopup'
import './globals.css'

const unbounded = Unbounded({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-unbounded',
  weight: ['300', '400', '700'],
})

export const metadata: Metadata = {
  title: 'After Human — AI Production Studio',
  description: 'Cinematic AI-video для агентств и брендов. Визуальная режиссура и production quality.',
  openGraph: {
    title: 'After Human — AI Production Studio',
    description: 'Cinematic AI-video для агентств и брендов.',
    url: 'https://afterhuman.pro',
    siteName: 'After Human',
    locale: 'ru_RU',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className={unbounded.variable}>
      <body>
        <LanguageProvider>
          <SoundProvider />
          <GradientBackground />
          <NoiseOverlay />
          <TelegramPopup />
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}

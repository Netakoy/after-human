import type { Metadata } from 'next'
import { Unbounded, Inter } from 'next/font/google'
import { LanguageProvider } from '@/lib/language'
import './globals.css'

const unbounded = Unbounded({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-unbounded',
  weight: ['300', '400', '700'],
})

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  weight: ['300', '400', '500'],
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
    <html lang="ru" className={`${unbounded.variable} ${inter.variable}`}>
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}

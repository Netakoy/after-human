import type { Metadata } from 'next'
import { Unbounded } from 'next/font/google'
import { LanguageProvider } from '@/lib/language'
import SoundProvider from '@/components/SoundProvider'
import ScrollIndicator from '@/components/ScrollIndicator'
import NoiseOverlay from '@/components/NoiseOverlay'
import GradientBackground from '@/components/GradientBackground'
import TelegramPopup from '@/components/TelegramPopup'
import Script from 'next/script'
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
      <head>
        <link rel="preconnect" href="https://kinescope.io" />
        <link rel="dns-prefetch" href="https://kinescope.io" />
      </head>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-6VC4169TRT" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-6VC4169TRT');
      `}</Script>
      <body>
        <LanguageProvider>
          <SoundProvider />
          <ScrollIndicator />
          <GradientBackground />
          <NoiseOverlay />
          <TelegramPopup />
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}

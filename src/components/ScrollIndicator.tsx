'use client'

import { useEffect, useState } from 'react'

export default function ScrollIndicator() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY < 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-2 pointer-events-none select-none"
      style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.6s ease' }}
      aria-hidden="true"
    >
      <div className="w-px h-6 bg-white/25" />
      <svg
        width="14"
        height="9"
        viewBox="0 0 14 9"
        fill="none"
        className="text-white/40 animate-bounce"
        style={{ animationDuration: '1.6s' }}
      >
        <path d="M1 1L7 7L13 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  )
}

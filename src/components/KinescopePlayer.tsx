'use client'

import { useState } from 'react'

interface KinescopePlayerProps {
  videoId: string
  poster?: string
  autoplay?: boolean
  muted?: boolean
  loop?: boolean
  className?: string
  showPlayButton?: boolean
  playLabel?: string
}

export default function KinescopePlayer({
  videoId,
  poster,
  autoplay = false,
  muted = false,
  loop = false,
  className = '',
  showPlayButton = false,
  playLabel = 'PLAY',
}: KinescopePlayerProps) {
  const [playing, setPlaying] = useState(autoplay)

  const params = new URLSearchParams({
    ...(autoplay ? { autoplay: '1' } : {}),
    ...(muted ? { muted: '1' } : {}),
    ...(loop ? { loop: '1' } : {}),
    controls: '1',
    ui_lang: 'ru',
  })

  const src = `https://kinescope.io/embed/${videoId}?${params}`

  if (!playing && showPlayButton) {
    return (
      <div
        className={`relative cursor-pointer group ${className}`}
        onClick={() => setPlaying(true)}
      >
        {poster && (
          <img
            src={poster}
            alt=""
            className="w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 flex items-center justify-center">
          <button className="flex items-center gap-4 text-white font-unbounded text-sm tracking-[0.3em] transition-opacity group-hover:opacity-70">
            <span className="w-16 h-16 rounded-full border border-white/40 flex items-center justify-center">
              ▶
            </span>
            {playLabel}
          </button>
        </div>
      </div>
    )
  }

  return (
    <iframe
      src={src}
      className={className}
      allow="autoplay; fullscreen; picture-in-picture"
      allowFullScreen
      style={{ border: 'none' }}
    />
  )
}

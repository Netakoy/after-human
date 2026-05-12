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
  showControls?: boolean
  playLabel?: string
  onReady?: () => void
  style?: React.CSSProperties
}

export default function KinescopePlayer({
  videoId,
  poster,
  autoplay = false,
  muted = false,
  loop = false,
  className = '',
  showPlayButton = false,
  showControls = true,
  playLabel = 'PLAY',
  onReady,
  style,
}: KinescopePlayerProps) {
  const [playing, setPlaying] = useState(autoplay)
  const [clickedPlay, setClickedPlay] = useState(false)

  const params = new URLSearchParams({
    ...((autoplay || clickedPlay) ? { autoplay: '1' } : {}),
    ...(muted ? { muted: '1' } : {}),
    ...(loop ? { loop: '1' } : {}),
    controls: showControls ? '1' : '0',
    ui_lang: 'ru',
  })

  const src = `https://kinescope.io/embed/${videoId}?${params}`

  if (!playing && showPlayButton) {
    return (
      <div
        className={`relative cursor-pointer group ${className}`}
        onClick={() => { setClickedPlay(true); setPlaying(true) }}
      >
        {poster && (
          <img
            src={poster}
            alt=""
            className="w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            className="flex items-center gap-4 text-white font-unbounded text-sm tracking-[0.3em] transition-opacity group-hover:opacity-70"
            style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}
          >
            <span className="w-16 h-16 rounded-full border border-white/70 bg-black/50 flex items-center justify-center" style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.6)' }}>
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
      onLoad={onReady}
      style={{ border: 'none', display: 'block', ...style }}
    />
  )
}

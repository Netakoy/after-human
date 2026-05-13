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
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            className="flex flex-col md:flex-row items-center gap-4 md:gap-5 text-white font-unbounded text-xs md:text-sm tracking-[0.3em] transition-opacity group-hover:opacity-60 active:opacity-60"
          >
            <span className="w-14 h-14 md:w-16 md:h-16 border border-white/40 flex items-center justify-center">
              <svg width="14" height="16" viewBox="0 0 14 16" fill="none" aria-hidden="true">
                <path d="M1 1L13 8L1 15V1Z" fill="white" fillOpacity="0.85" />
              </svg>
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

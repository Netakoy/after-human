'use client'

import { useEffect, useRef } from 'react'

export default function NoiseOverlay() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!

    let raf: number
    let frame = 0

    const resize = () => {
      canvas.width = Math.ceil(window.innerWidth / 2)
      canvas.height = Math.ceil(window.innerHeight / 2)
    }

    const draw = () => {
      frame++
      if (frame % 2 === 0) {
        const { width: w, height: h } = canvas
        const imageData = ctx.createImageData(w, h)
        const data = imageData.data
        for (let i = 0; i < data.length; i += 4) {
          const v = (Math.random() * 255) | 0
          data[i] = v
          data[i + 1] = v
          data[i + 2] = v
          data[i + 3] = 255
        }
        ctx.putImageData(imageData, 0, 0)
      }
      raf = requestAnimationFrame(draw)
    }

    resize()
    window.addEventListener('resize', resize)
    raf = requestAnimationFrame(draw)

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 5,
        opacity: 0.055,
        mixBlendMode: 'overlay',
        imageRendering: 'pixelated',
      }}
    />
  )
}

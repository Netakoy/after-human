'use client'

import { useEffect, useRef, useState } from 'react'

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t
}

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return

    let mx = -100, my = -100
    let rx = -100, ry = -100
    let raf: number

    const onMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
      if (!visible) setVisible(true)
    }

    const tick = () => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mx}px, ${my}px)`
      }
      rx = lerp(rx, mx, 0.12)
      ry = lerp(ry, my, 0.12)
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${rx}px, ${ry}px)`
      }
      raf = requestAnimationFrame(tick)
    }

    document.addEventListener('mousemove', onMove)
    raf = requestAnimationFrame(tick)

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  if (!visible) return null

  return (
    <>
      <div
        ref={dotRef}
        style={{
          position: 'fixed', top: 0, left: 0,
          width: 5, height: 5,
          marginLeft: -2.5, marginTop: -2.5,
          background: 'rgba(240,240,240,0.9)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 99999,
          willChange: 'transform',
        }}
      />
      <div
        ref={ringRef}
        style={{
          position: 'fixed', top: 0, left: 0,
          width: 32, height: 32,
          marginLeft: -16, marginTop: -16,
          border: '1px solid rgba(240,240,240,0.25)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 99999,
          willChange: 'transform',
        }}
      />
    </>
  )
}

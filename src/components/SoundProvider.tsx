'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

let ctx: AudioContext | null = null
const buffers: Record<string, AudioBuffer> = {}

async function loadBuffer(src: string) {
  if (buffers[src]) return
  ctx ??= new AudioContext()
  const res = await fetch(src)
  const arr = await res.arrayBuffer()
  buffers[src] = await ctx.decodeAudioData(arr)
}

async function play(src: string) {
  const buf = buffers[src]
  if (!buf || !ctx) return
  if (ctx.state !== 'running') await ctx.resume()
  const node = ctx.createBufferSource()
  node.buffer = buf
  const gain = ctx.createGain()
  gain.gain.value = 0.125
  node.connect(gain)
  gain.connect(ctx.destination)
  node.start()
}

export default function SoundProvider() {
  const router = useRouter()

  useEffect(() => {
    ctx ??= new AudioContext()
    loadBuffer('/click.aac')

    const onDown = (e: PointerEvent) => {
      if (e.pointerType === 'touch') {
        const el = e.target as Element
        if (!el.closest('button, a, input, select, [role="button"]')) return
      }
      play('/click.aac')
    }
    document.addEventListener('pointerdown', onDown)

    // Для внутренних ссылок (<Link>) задерживаем навигацию на 150ms
    // чтобы звук успел воспроизвестись до смены страницы
    const onLinkClick = (e: MouseEvent) => {
      const link = (e.target as Element).closest('a[href]') as HTMLAnchorElement | null
      if (!link) return
      const href = link.getAttribute('href')
      if (!href || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
      if (link.target === '_blank') return
      if (/^(https?|mailto|tel):/.test(href)) return

      e.preventDefault()
      setTimeout(() => router.push(href), 150)
    }

    document.addEventListener('click', onLinkClick, true)

    return () => {
      document.removeEventListener('pointerdown', onDown)
      document.removeEventListener('click', onLinkClick, true)
    }
  }, [router])

  return null
}

'use client'

import { useState, useEffect, useRef } from 'react'
import { useLanguage } from '@/lib/language'

interface Options {
  script: boolean
  character: boolean
  extraCharacters: number
  soundDesign: boolean
  musicAi: boolean
  musicLicensed: boolean
  editing: boolean
  colorGrading: boolean
}

function calcTotal(duration: number, opts: Options): number {
  const base = (duration / 5) * 10_000
  const script = opts.script ? Math.max(15_000, Math.ceil(duration / 30) * 15_000) : 0
  const character = opts.character ? 5_000 : 0
  const extraChars = opts.character ? opts.extraCharacters * 5_000 : 0
  const soundDesign = opts.soundDesign ? Math.max(5_000, Math.ceil(duration / 10) * 1_000) : 0
  const musicAi = opts.musicAi ? Math.max(3_000, Math.ceil(duration / 10) * 500) : 0
  const musicLicensed = opts.musicLicensed ? 3_000 : 0
  const editing = opts.editing ? Math.max(5_000, Math.ceil(duration / 10) * 1_000) : 0
  const colorGrading = opts.colorGrading ? Math.max(3_000, Math.ceil(duration / 10) * 1_000) : 0
  return base + script + character + extraChars + soundDesign + musicAi + musicLicensed + editing + colorGrading
}

function formatPrice(total: number, lang: string): string {
  if (lang === 'ru') return total.toLocaleString('ru-RU') + ' ₽'
  return '$' + Math.round(total / 100).toLocaleString('en-US')
}

export default function Pricing() {
  const { t, language } = useLanguage()
  const [duration, setDuration] = useState(30)
  const [opts, setOpts] = useState<Options>({
    script: false, character: false, extraCharacters: 0,
    soundDesign: false, musicAi: false, musicLicensed: false,
    editing: false, colorGrading: false,
  })
  const [displayPrice, setDisplayPrice] = useState('')
  const priceRef = useRef<HTMLSpanElement>(null)
  const total = calcTotal(duration, opts)

  useEffect(() => {
    setDisplayPrice(formatPrice(total, language))
    if (priceRef.current) {
      priceRef.current.style.opacity = '0.3'
      priceRef.current.style.transform = 'translateY(-4px)'
      requestAnimationFrame(() => {
        if (priceRef.current) {
          priceRef.current.style.transition = 'opacity 150ms ease, transform 150ms ease'
          priceRef.current.style.opacity = '1'
          priceRef.current.style.transform = 'translateY(0)'
        }
      })
    }
  }, [total, language])

  const toggle = (key: keyof Pick<Options, 'script' | 'character' | 'soundDesign' | 'musicAi' | 'musicLicensed' | 'editing' | 'colorGrading'>) => {
    setOpts((prev) => {
      const next = { ...prev, [key]: !prev[key] }
      if (key === 'musicAi' && next.musicAi) next.musicLicensed = false
      if (key === 'musicLicensed' && next.musicLicensed) next.musicAi = false
      return next
    })
  }

  const openModal = () => window.dispatchEvent(new CustomEvent('openContactModal'))

  const Checkbox = ({ checked }: { checked: boolean }) => (
    <div className={`w-4 h-4 border flex-shrink-0 flex items-center justify-center transition-colors ${checked ? 'border-muted-white bg-muted-white' : 'border-white/30 bg-transparent'}`}>
      {checked && <span className="text-graphite text-[9px] font-bold leading-none">✓</span>}
    </div>
  )

  const Row = ({ optKey, label }: { optKey: keyof Pick<Options, 'script' | 'character' | 'soundDesign' | 'musicAi' | 'musicLicensed' | 'editing' | 'colorGrading'>, label: string }) => (
    <div className="flex items-center gap-3 cursor-pointer group" onClick={() => toggle(optKey)}>
      <Checkbox checked={opts[optKey] as boolean} />
      <span className="font-unbounded text-sm text-silver/70 group-hover:text-white transition-colors">{label}</span>
    </div>
  )

  return (
    <section
      id="pricing"
      className="page-pad flex flex-col justify-center py-10"
    >
      <div className="w-full max-w-3xl">
        <p className="font-unbounded text-xs tracking-[0.3em] text-silver mb-3">{t.pricing.title}</p>
        <p className="font-unbounded font-bold text-xl md:text-3xl text-muted-white mb-4">
          {t.pricing.subtitle}
        </p>
        <div className="w-12 h-px bg-white/20 mb-6" />

        {/* Calculator card */}
        <div className="border border-white/10 p-5 md:p-8 bg-white/[0.02]">

          {/* Slider */}
          <div className="mb-5">
            <div className="flex justify-between items-baseline mb-3">
              <span className="font-unbounded text-xs text-silver/70">{t.pricing.slider.label}</span>
              <span className="font-unbounded text-sm text-muted-white">{duration} {t.pricing.slider.unit}</span>
            </div>
            <input
              type="range"
              min={30}
              max={600}
              step={5}
              value={duration}
              onChange={(e) => setDuration(Number(e.target.value))}
              className="w-full accent-white cursor-pointer"
              style={{ height: '2px', appearance: 'auto' }}
            />
          </div>

          {/* Options */}
          <div className="space-y-3 mb-5">
            <Row optKey="script" label={t.pricing.options.script} />

            <div>
              <Row optKey="character" label={t.pricing.options.character} />
              {opts.character && (
                <div className="flex items-center gap-3 mt-2 ml-7">
                  <button
                    onClick={() => setOpts((p) => ({ ...p, extraCharacters: Math.max(0, p.extraCharacters - 1) }))}
                    className="w-7 h-7 border border-white/20 text-silver hover:border-white/50 transition-colors flex items-center justify-center font-unbounded text-base"
                  >−</button>
                  <span className="font-unbounded text-sm text-muted-white w-5 text-center">{opts.extraCharacters}</span>
                  <button
                    onClick={() => setOpts((p) => ({ ...p, extraCharacters: p.extraCharacters + 1 }))}
                    className="w-7 h-7 border border-white/20 text-silver hover:border-white/50 transition-colors flex items-center justify-center font-unbounded text-base"
                  >+</button>
                  <span className="font-unbounded text-xs text-silver/40">{t.pricing.options.extraCharacters}</span>
                </div>
              )}
            </div>

            <Row optKey="soundDesign" label={t.pricing.options.soundDesign} />
            <Row optKey="musicAi" label={t.pricing.options.musicAi} />
            <Row optKey="musicLicensed" label={t.pricing.options.musicLicensed} />
            <Row optKey="editing" label={t.pricing.options.editing} />
            <Row optKey="colorGrading" label={t.pricing.options.colorGrading} />
          </div>

          {/* Total */}
          <div className="border-t border-white/10 pt-5 flex items-center justify-between">
            <span className="font-unbounded text-xs tracking-[0.3em] text-silver">{t.pricing.total}</span>
            <span ref={priceRef} className="font-unbounded font-bold text-2xl md:text-3xl text-muted-white">
              {displayPrice}
            </span>
          </div>
        </div>

        {/* CTA */}
        <button
          onClick={openModal}
          className="mt-6 font-unbounded text-sm tracking-[0.15em] px-8 py-4 bg-muted-white text-graphite hover:opacity-90 transition-opacity"
        >
          {t.pricing.cta} →
        </button>
      </div>
    </section>
  )
}

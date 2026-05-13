'use client'

const rows = [
  { label: 'СРОКИ',        ai: '3–14 дней',                classic: '4–12 недель' },
  { label: 'СТОИМОСТЬ',    ai: 'от 150 000 ₽',             classic: 'от 1 500 000 ₽' },
  { label: 'ПРАВКИ',       ai: 'Быстро, без доп. затрат',  classic: 'Пересъёмка = новый бюджет' },
  { label: 'ЛОКАЦИИ',      ai: 'Любые, без аренды',         classic: 'Аренда, логистика, погода' },
  { label: 'МАСШТАБ',      ai: 'Неограниченный',            classic: 'Зависит от бюджета' },
  { label: 'УНИКАЛЬНОСТЬ', ai: 'Любой мир и атмосфера',    classic: 'Ограничен физическим миром' },
]

export default function Comparison() {
  return (
    <section className="page-pad py-24">
      <p className="font-unbounded text-xs tracking-[0.3em] text-silver mb-4">СРАВНЕНИЕ</p>
      <h2 className="font-unbounded font-bold text-3xl md:text-5xl text-muted-white leading-tight mb-16">
        AI VS КЛАССИКА
      </h2>

      {/* Header row — desktop */}
      <div className="grid grid-cols-[1fr_1fr_1fr] gap-4 mb-2 hidden md:grid">
        <div />
        <p className="font-unbounded text-[10px] tracking-[0.25em] text-white pb-3 border-b border-white/20">
          AI PRODUCTION
        </p>
        <p className="font-unbounded text-[10px] tracking-[0.25em] text-white/60 pb-3 border-b border-white/10">
          КЛАССИКА
        </p>
      </div>

      {/* Header row — mobile */}
      <div className="grid grid-cols-[1fr_1fr] gap-4 mb-2 md:hidden">
        <p className="font-unbounded text-[9px] tracking-[0.25em] text-white pb-3 border-b border-white/20">
          AI
        </p>
        <p className="font-unbounded text-[9px] tracking-[0.25em] text-white/50 pb-3 border-b border-white/10">
          КЛАССИКА
        </p>
      </div>

      {/* Data rows */}
      <div className="divide-y divide-white/10">
        {rows.map((row) => (
          <div key={row.label} className="py-5">
            <p className="font-unbounded text-[10px] tracking-[0.25em] text-white/50 mb-3 md:hidden">
              {row.label}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr] gap-1 md:gap-4">
              <p className="font-unbounded text-[10px] tracking-[0.25em] text-white/70 hidden md:block self-center">
                {row.label}
              </p>

              {/* Mobile: 2-col */}
              <div className="md:hidden grid grid-cols-[1fr_1fr] gap-4">
                <p className="font-unbounded text-sm text-white leading-snug">{row.ai}</p>
                <p className="font-unbounded text-sm text-white/40 line-through decoration-white/20 leading-snug">{row.classic}</p>
              </div>

              {/* Desktop */}
              <p className="hidden md:block font-unbounded text-sm text-white self-center">{row.ai}</p>
              <p className="hidden md:block font-unbounded text-sm text-white/50 line-through decoration-white/30 self-center">
                {row.classic}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

import { createContext, useContext, type ReactNode } from 'react'
import { motion } from 'framer-motion'
import { img, shot } from '../data'

export const ZoomCtx = createContext<(file: string) => void>(() => {})

export function Reveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div className={className} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6, delay }}>{children}</motion.div>
  )
}

export function Section({ id, title, kicker, children, alt = false }: { id?: string; title: string; kicker?: string; children: ReactNode; alt?: boolean }) {
  return (
    <section id={id} className={`relative px-5 py-20 md:py-28 ${alt ? 'bg-emerald-deep/40 pattern' : ''}`}>
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-12 text-center">
          {kicker && <p className="mb-2 text-sm font-semibold tracking-wide text-gold">{kicker}</p>}
          <h2 className="gold-text text-3xl font-extrabold md:text-5xl">{title}</h2>
          <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-l from-transparent via-gold to-transparent" />
        </Reveal>
        {children}
      </div>
    </section>
  )
}

export function Phone({ file, className = '', zoom = true }: { file: string; className?: string; zoom?: boolean }) {
  const open = useContext(ZoomCtx)
  const s = shot(file)
  return (
    <button type="button" aria-label={`تكبير: ${s.title}`} onClick={() => zoom && open(file)}
      className={`relative mx-auto block w-full max-w-[270px] rounded-[2.6rem] border-2 border-gold/50 bg-black p-2 text-start shadow-[0_0_60px_rgba(90,216,155,.15)] transition hover:border-gold ${zoom ? 'cursor-zoom-in' : 'cursor-default'} ${className}`}>
      <span className="absolute left-1/2 top-3 z-10 h-4 w-16 -translate-x-1/2 rounded-full bg-black" />
      <img src={img(file)} alt={s.title} width={720} height={1600} loading="lazy" decoding="async" className="block aspect-[720/1600] w-full rounded-[2.1rem] object-cover" />
    </button>
  )
}

export function Stars() {
  const pts = [[8, 12], [20, 70], [35, 25], [55, 8], [70, 60], [85, 20], [92, 75], [12, 45], [60, 85]]
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {pts.map(([x, y], i) => <span key={i} className="twinkle absolute text-gold-light" style={{ left: `${x}%`, top: `${y}%`, animationDelay: `${i * 0.5}s`, fontSize: 10 + (i % 3) * 5 }}>✦</span>)}
    </div>
  )
}

export function Crescent({ className = '' }: { className?: string }) {
  return <svg viewBox="0 0 100 100" className={className} aria-hidden fill="currentColor"><path d="M62 8a42 42 0 1 0 0 84 34 34 0 1 1 0-84z" /></svg>
}

export function Lantern({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 120" className={className} aria-hidden fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M30 0v14M22 14h16l4 8H18zM18 22h24l6 40-18 12-18-12zM30 74v14M24 88h12l-3 14h-6z" />
      <path d="M30 24v46M22 30l-2 30M38 30l2 30" strokeOpacity=".6" />
      <circle cx="30" cy="48" r="5" fill="currentColor" fillOpacity=".5" />
    </svg>
  )
}

export function Skyline({ className = '' }: { className?: string }) {
  return <svg viewBox="0 0 400 60" preserveAspectRatio="none" className={className} aria-hidden fill="currentColor"><path d="M0 60V44h20V30l4-8 4 8v14h18V36q10-24 20 0v8h14V20l3-10 3 10v24h30V34q22-34 44 0v10h24V26l3-12 3 12v18h26V38q16-20 32 0v6h22V28l3-10 3 10v16h20V40h30v20z" /></svg>
}

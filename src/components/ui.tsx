import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

export function Reveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div className={className} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6, delay }}>
      {children}
    </motion.div>
  )
}

export function Section({ id, title, kicker, children, alt = false }: { id: string; title: string; kicker?: string; children: ReactNode; alt?: boolean }) {
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

export function Phone({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`relative mx-auto w-full max-w-[270px] rounded-[2.6rem] border-2 border-gold/50 bg-black p-2 shadow-[0_0_60px_rgba(90,216,155,.18)] ${className}`}>
      <div className="absolute left-1/2 top-3 z-10 h-4 w-16 -translate-x-1/2 rounded-full bg-black" />
      <img src={src} alt={alt} loading="lazy" className="block aspect-[1080/2400] w-full rounded-[2.1rem] object-cover" />
    </div>
  )
}

export function Stars() {
  const pts = [[8, 12], [20, 70], [35, 25], [55, 8], [70, 60], [85, 20], [92, 75], [12, 45], [60, 85]]
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {pts.map(([x, y], i) => (
        <span key={i} className="twinkle absolute text-gold-light" style={{ left: `${x}%`, top: `${y}%`, animationDelay: `${i * 0.5}s`, fontSize: 10 + (i % 3) * 5 }}>✦</span>
      ))}
    </div>
  )
}

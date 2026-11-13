import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Section, Phone } from './ui'
import { SHOTS, img } from '../data'

export default function Gallery() {
  const [i, setI] = useState(0)
  const cur = SHOTS[i]
  return (
    <Section id="gallery" kicker="من داخل التطبيق" title="صور التطبيق">
      <div className="flex flex-wrap justify-center gap-2">
        {SHOTS.map((s, k) => (
          <button key={s.id} onClick={() => setI(k)} className={`rounded-full border px-4 py-2 text-sm transition ${k === i ? 'border-gold bg-gold text-emerald-deep font-bold' : 'border-gold/30 text-cream/80 hover:border-gold'}`}>{s.title}</button>
        ))}
      </div>
      <div className="mt-10 min-h-[560px]">
        <AnimatePresence mode="wait">
          <motion.div key={cur.id} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.3 }}>
            <Phone src={img(cur.file)} alt={cur.title} className="max-w-[300px]" />
            <p className="mt-5 text-center text-lg font-semibold text-gold-light">{cur.title}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </Section>
  )
}

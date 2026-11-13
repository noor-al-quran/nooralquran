import { useEffect } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { SHOTS, img } from '../data'

export default function Lightbox({ index, onChange }: { index: number | null; onChange: (i: number | null) => void }) {
  const n = SHOTS.length
  useEffect(() => {
    if (index === null) return
    const k = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onChange(null)
      if (e.key === 'ArrowLeft') onChange((index + 1) % n)
      if (e.key === 'ArrowRight') onChange((index - 1 + n) % n)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', k)
    return () => { window.removeEventListener('keydown', k); document.body.style.overflow = '' }
  }, [index, n, onChange])
  if (index === null) return null
  const s = SHOTS[index]
  const btn = 'absolute top-1/2 -translate-y-1/2 rounded-full bg-card/90 p-3 text-gold-light hover:bg-emerald'
  return (
    <div className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-black/90 p-4" role="dialog" aria-modal="true" aria-label={s.title} onClick={() => onChange(null)}>
      <button aria-label="إغلاق" className="absolute left-4 top-4 rounded-full bg-card/90 p-3 text-gold-light" onClick={() => onChange(null)}><X /></button>
      <button aria-label="السابقة" className={`${btn} right-3`} onClick={e => { e.stopPropagation(); onChange((index - 1 + n) % n) }}><ChevronRight /></button>
      <button aria-label="التالية" className={`${btn} left-3`} onClick={e => { e.stopPropagation(); onChange((index + 1) % n) }}><ChevronLeft /></button>
      <img src={img(s.file)} alt={s.title} className="max-h-[78vh] max-w-full rounded-3xl border border-gold/40 object-contain" onClick={e => e.stopPropagation()} />
      <div className="mt-4 max-w-xl text-center" onClick={e => e.stopPropagation()}>
        <h3 className="font-bold text-gold-light">{s.title}</h3>
        <p className="mt-1 text-sm text-cream/70">{s.desc}</p>
        <p className="mt-1 text-xs text-cream/40">{index + 1} / {n}</p>
      </div>
    </div>
  )
}

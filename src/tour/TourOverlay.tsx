import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp, Download, FolderOpen, Smartphone, X } from 'lucide-react'
import { Phone, Stars } from '../components/ui'
import { img } from '../data'
import { useTour } from './TourContext'
import { STEPS, type Step } from './steps'

type P = { step: Step; index: number; total: number; onNext: () => void; onPrev: () => void; onClose: () => void }

function Nav({ index, total, onPrev, onNext, onClose, label }: Omit<P, 'step'> & { label?: string }) {
  const last = index === total - 1
  return (
    <div className="mt-4">
      <div className="mb-2 flex items-center justify-between text-xs text-cream/60">
        <span>{index + 1} من {total}</span>
        <button onClick={onClose} className="underline hover:text-gold-light">تخطي الجولة</button>
      </div>
      <div className="mb-3 h-1.5 overflow-hidden rounded-full bg-emerald-deep">
        <div className="h-full rounded-full bg-gradient-to-l from-gold to-gold-light transition-all" style={{ width: `${((index + 1) / total) * 100}%` }} />
      </div>
      <div className="flex gap-2">
        {index > 0 && <button onClick={onPrev} className="flex items-center gap-1 rounded-full border border-gold/40 px-4 py-2 text-sm text-cream/90 hover:border-gold"><ArrowRight size={16} /> السابق</button>}
        <button onClick={onNext} className="flex flex-1 items-center justify-center gap-1 rounded-full bg-gradient-to-l from-gold to-gold-light px-5 py-2 text-sm font-bold text-emerald-deep">
          {label ?? (last ? 'إنهاء' : 'التالي')} {!last && <ArrowLeft size={16} />}
        </button>
      </div>
    </div>
  )
}

function Illu({ kind }: { kind: 'download' | 'folder' | 'install' }) {
  const reduce = useReducedMotion()
  const Icon = kind === 'download' ? Download : kind === 'folder' ? FolderOpen : Smartphone
  return (
    <div className="mx-auto my-3 flex h-40 w-24 flex-col items-center justify-center rounded-3xl border-2 border-gold/60 bg-night shadow-[0_0_40px_rgba(90,216,155,.2)]" aria-hidden>
      <motion.div animate={reduce ? undefined : { y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.4 }}><Icon size={40} className="text-gold-light" /></motion.div>
      <div className="mt-3 h-1.5 w-12 rounded-full bg-emerald" />
    </div>
  )
}

// صور الدليل: إن لم تكن موجودة يظهر رسم توضيحي بدلاً منها
function Media({ step }: { step: Step }) {
  const [status, setStatus] = useState<Record<string, 'ok' | 'bad'>>({})
  const [zoom, setZoom] = useState<string | null>(null)
  const imgs = step.images ?? []
  const anyOk = imgs.some(i => status[i.file] === 'ok')
  return (
    <>
      {!anyOk && step.illu && <Illu kind={step.illu} />}
      {imgs.length > 0 && (
        <div className={anyOk ? 'mt-3 flex snap-x gap-3 overflow-x-auto pb-1' : 'hidden'}>
          {imgs.map(i => status[i.file] === 'bad' ? null : (
            <figure key={i.file} className={`w-[78%] shrink-0 snap-center sm:w-56 ${status[i.file] === 'ok' ? 'block' : 'hidden'}`}>
              <img src={img(`download-guide/${i.file}`)} alt={i.caption} onClick={() => setZoom(i.file)}
                onLoad={() => setStatus(s => ({ ...s, [i.file]: 'ok' }))} onError={() => setStatus(s => ({ ...s, [i.file]: 'bad' }))}
                className="w-full cursor-zoom-in rounded-2xl border border-gold/40" />
              <figcaption className="mt-1 text-center text-xs text-cream/70">{i.caption}</figcaption>
            </figure>
          ))}
        </div>
      )}
      {zoom && (
        <div className="fixed inset-0 z-[90] flex items-center justify-center bg-black/90 p-3" onClick={() => setZoom(null)} role="dialog" aria-label="تكبير الصورة">
          <button aria-label="إغلاق" className="absolute left-4 top-4 rounded-full bg-card p-3 text-gold-light"><X /></button>
          <img src={img(`download-guide/${zoom}`)} alt="" className="max-h-full max-w-full rounded-2xl object-contain" />
        </div>
      )}
    </>
  )
}

function CardView({ step, ...nav }: P) {
  const t = useTour()
  const reduce = useReducedMotion()
  const done = step.kind === 'done'
  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/80 p-4" role="dialog" aria-modal="true" aria-label={step.title}>
      <motion.div initial={reduce ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
        className="pattern relative max-h-[92vh] w-full max-w-md overflow-y-auto rounded-3xl border border-gold/50 bg-card p-6 text-center shadow-[0_0_60px_rgba(212,175,55,.2)]">
        {done && <Stars />}
        <button onClick={nav.onClose} aria-label="إغلاق" className="absolute left-4 top-4 z-10 rounded-full p-2 text-cream/60 hover:text-gold-light"><X size={20} /></button>
        <div className="relative z-10">
          {done && <img src={img('logo.jpg')} alt="شعار نور القرآن" width={80} height={80} className="mx-auto rounded-3xl border-2 border-gold/60 object-cover shadow-[0_0_50px_rgba(243,202,82,.5)]" style={{ width: 80, height: 80 }} />}
          <h2 className={`font-extrabold ${done ? 'gold-text mt-4 text-2xl' : 'mt-1 text-xl text-gold-light'}`}>{step.title}</h2>
          {step.shot && <div className="my-3"><Phone file={step.shot} zoom={false} className="max-w-[150px]" /></div>}
          <Media step={step} />
          <p className="mt-3 leading-loose text-cream/85">{step.text}</p>
          {step.note && <p className="mt-3 rounded-xl border border-gold/30 bg-emerald-deep/60 p-3 text-start text-sm leading-relaxed text-cream/80">{step.note}</p>}
          {step.link && <a href={step.link} onClick={t.finish} className="mt-3 inline-block text-sm text-gold-light underline">اعرف المزيد عن هذه الميزة</a>}
          {done ? (
            <div className="mt-5 grid gap-3">
              <button onClick={() => { t.complete(); t.start('features') }} className="rounded-full bg-gradient-to-l from-gold to-gold-light px-6 py-3 font-bold text-emerald-deep">اكتشف مميزات التطبيق</button>
              <button onClick={t.finish} className="rounded-full border border-gold/60 px-6 py-3 font-semibold text-gold-light hover:bg-gold hover:text-emerald-deep">استكشف الموقع</button>
            </div>
          ) : <Nav {...nav} />}
        </div>
      </motion.div>
    </div>
  )
}

function SpotView(props: P) {
  const { step, onNext } = props
  const reduce = useReducedMotion()
  const [rect, setRect] = useState<DOMRect | null>(null)
  const [missing, setMissing] = useState(false)
  const nextRef = useRef(onNext)
  nextRef.current = onNext

  useEffect(() => {
    let tries = 0
    let timer = 0
    let raf = 0
    let el: HTMLElement | null = null
    const measure = () => { if (el) setRect(el.getBoundingClientRect()) }
    const onMove = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(measure) }
    const clicked = () => nextRef.current()
    const find = () => {
      el = document.querySelector<HTMLElement>(step.target ?? '')
      if (el) {
        el.scrollIntoView({ block: 'center', behavior: reduce ? 'auto' : 'smooth' })
        measure()
        el.addEventListener('click', clicked)
        window.addEventListener('scroll', onMove, { passive: true })
        window.addEventListener('resize', onMove)
        timer = window.setTimeout(measure, 500)
      } else if (++tries < 25) {
        timer = window.setTimeout(find, 100)
      } else {
        setMissing(true)
      }
    }
    find()
    return () => {
      window.clearTimeout(timer)
      cancelAnimationFrame(raf)
      el?.removeEventListener('click', clicked)
      window.removeEventListener('scroll', onMove)
      window.removeEventListener('resize', onMove)
    }
  }, [step.target, reduce])

  if (missing) return <CardView {...props} />
  if (!rect) return <div className="fixed inset-0 z-[70] touch-none bg-black/75" />

  const vw = window.innerWidth
  const vh = window.innerHeight
  const pad = 8
  const top = Math.max(0, rect.top - pad)
  const left = Math.max(0, rect.left - pad)
  const right = Math.min(vw, rect.right + pad)
  const bottom = Math.min(vh, rect.bottom + pad)
  const cardBottom = rect.top + rect.height / 2 < vh * 0.5
  const arrowX = Math.min(Math.max(rect.left + rect.width / 2 - 22, 8), vw - 52)
  const dim = 'fixed z-[70] touch-none bg-black/75'

  return (
    <>
      <div className={dim} style={{ top: 0, left: 0, right: 0, height: top }} />
      <div className={dim} style={{ top: bottom, left: 0, right: 0, bottom: 0 }} />
      <div className={dim} style={{ top, left: 0, width: left, height: bottom - top }} />
      <div className={dim} style={{ top, left: right, right: 0, height: bottom - top }} />
      <div className="tour-ring pointer-events-none fixed z-[71] rounded-full border-2 border-gold-light" style={{ top, left, width: right - left, height: bottom - top }} />
      <motion.div className="pointer-events-none fixed z-[72] text-gold-light drop-shadow-[0_0_10px_rgba(243,202,82,.9)]"
        style={{ left: arrowX, top: cardBottom ? bottom + 4 : top - 52 }}
        animate={reduce ? undefined : { y: cardBottom ? [0, 8, 0] : [0, -8, 0] }} transition={{ repeat: Infinity, duration: 1.1 }}>
        {cardBottom ? <ArrowUp size={44} strokeWidth={3} /> : <ArrowDown size={44} strokeWidth={3} />}
      </motion.div>
      <div className={`pointer-events-none fixed inset-x-0 z-[73] flex justify-center px-4 ${cardBottom ? 'bottom-4' : 'top-4'}`}>
        <motion.div initial={reduce ? false : { opacity: 0, y: cardBottom ? 20 : -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
          className="pointer-events-auto relative w-full max-w-sm rounded-2xl border border-gold/50 bg-card p-5 shadow-[0_0_40px_rgba(212,175,55,.25)]" role="dialog" aria-label={step.title}>
          <button onClick={props.onClose} aria-label="إغلاق" className="absolute left-3 top-3 rounded-full p-1 text-cream/60 hover:text-gold-light"><X size={18} /></button>
          <h2 className="text-lg font-extrabold text-gold-light">{step.title}</h2>
          <p className="mt-2 leading-relaxed text-cream/90">{step.text}</p>
          <Nav index={props.index} total={props.total} onPrev={props.onPrev} onNext={props.onNext} onClose={props.onClose} />
        </motion.div>
      </div>
    </>
  )
}

export default function TourOverlay() {
  const t = useTour()
  useEffect(() => {
    if (!t.kind) return
    const k = (e: KeyboardEvent) => { if (e.key === 'Escape') t.close() }
    window.addEventListener('keydown', k)
    return () => window.removeEventListener('keydown', k)
  }, [t.kind, t.close])
  if (!t.kind) return null
  const steps = STEPS[t.kind]
  const step = steps[t.index]
  if (!step) return null
  const p: P = { step, index: t.index, total: steps.length, onNext: t.next, onPrev: t.prev, onClose: t.close }
  return step.kind === 'spot' ? <SpotView key={step.id} {...p} /> : <CardView key={step.id} {...p} />
}

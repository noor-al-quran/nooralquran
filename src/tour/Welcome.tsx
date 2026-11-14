import { motion, useReducedMotion } from 'framer-motion'
import { X } from 'lucide-react'
import { Stars } from '../components/ui'
import { img } from '../data'
import { useTour } from './TourContext'

export default function Welcome() {
  const t = useTour()
  const reduce = useReducedMotion()
  if (!t.welcome) return null
  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/80 p-4" role="dialog" aria-modal="true" aria-labelledby="welcome-title">
      <motion.div
        initial={reduce ? false : { opacity: 0, scale: 0.92, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.5 }}
        className="pattern relative max-h-[92vh] w-full max-w-md overflow-y-auto rounded-3xl border border-gold/50 bg-gradient-to-b from-emerald-deep to-night p-7 text-center shadow-[0_0_80px_rgba(212,175,55,.25)]"
      >
        <Stars />
        <button onClick={t.close} aria-label="تخطي" className="absolute left-4 top-4 z-10 rounded-full p-2 text-cream/60 hover:text-gold-light"><X size={20} /></button>
        <div className="relative z-10">
          <img src={img('logo.jpg')} alt="شعار نور القرآن" width={88} height={88} className="mx-auto h-22 w-22 rounded-3xl border-2 border-gold/60 object-cover shadow-[0_0_40px_rgba(212,175,55,.3)]" style={{ height: 88, width: 88 }} />
          <h2 id="welcome-title" className="gold-text mt-4 text-3xl font-extrabold">مرحباً بك في نور القرآن</h2>
          <p className="mt-3 leading-loose text-cream/85">رفيقك في رحلتك مع القرآن الكريم، والأذكار، والعبادات اليومية</p>
          <p className="mt-2 text-sm leading-relaxed text-cream/60">هنا تتعرف على التطبيق وتحمّله بسهولة، وسنرشدك خطوة بخطوة.</p>
          <p className="mt-5 text-lg font-bold text-gold-light">هل ترغب في تحميل تطبيق نور القرآن الآن؟</p>
          <div className="mt-4 grid gap-3">
            <button autoFocus onClick={() => t.start('download')} className="rounded-full bg-gradient-to-l from-gold to-gold-light px-6 py-3 font-bold text-emerald-deep shadow-lg transition hover:scale-[1.02]">نعم، أريد تحميل التطبيق الآن</button>
            <button onClick={t.close} className="rounded-full border border-gold/60 px-6 py-3 font-semibold text-gold-light transition hover:bg-gold hover:text-emerald-deep">لا، أريد استكشاف الموقع أولاً</button>
            <button onClick={t.close} className="text-sm text-cream/60 underline hover:text-gold-light">تخطي</button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

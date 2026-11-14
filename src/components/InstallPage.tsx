import { useState } from 'react'
import { ArrowRight, Download } from 'lucide-react'
import { DOWNLOAD_STEPS } from '../tour/steps'
import { useTour } from '../tour/TourContext'
import { APK_URL } from '../config'
import { img } from '../data'
import { Reveal, Skyline } from './ui'

function Shot({ file, caption }: { file: string; caption: string }) {
  const [bad, setBad] = useState(false)
  if (bad) return null
  return (
    <figure className="mx-auto max-w-sm">
      <img src={img(`download-guide/${file}`)} alt={caption} loading="lazy" onError={() => setBad(true)} className="w-full rounded-2xl border border-gold/40" />
      <figcaption className="mt-2 text-sm leading-relaxed text-cream/75">{caption}</figcaption>
    </figure>
  )
}

export default function InstallPage() {
  const t = useTour()
  const steps = DOWNLOAD_STEPS.filter(s => s.kind !== 'done')
  return (
    <>
      <header className="relative overflow-hidden bg-emerald-deep/50 px-5 pb-16 pt-32 pattern">
        <div className="relative mx-auto max-w-3xl text-center">
          <a href="#top" className="mb-6 inline-flex items-center gap-2 text-sm text-gold-light hover:underline"><ArrowRight size={16} /> الرئيسية</a>
          <p className="mb-2 text-sm font-semibold text-gold">دليل التحميل والتثبيت</p>
          <h1 className="gold-text text-3xl font-extrabold md:text-5xl">كيف أحمّل تطبيق نور القرآن؟</h1>
          <p className="mt-5 text-lg leading-loose text-cream/75">خطوات بسيطة بالصور لتحميل التطبيق وتثبيته على هاتف أندرويد. قد يختلف شكل الشاشات قليلاً حسب نوع هاتفك.</p>
          <button onClick={() => t.start('download')} className="mt-6 rounded-full border border-gold px-7 py-2 font-semibold text-gold-light hover:bg-gold hover:text-emerald-deep">ابدأ الدليل التفاعلي</button>
        </div>
        <Skyline className="absolute inset-x-0 bottom-0 h-10 w-full text-night" />
      </header>
      <section className="px-5 py-14">
        <ol className="mx-auto max-w-2xl space-y-8">
          {steps.map((s, i) => (
            <Reveal key={s.id}>
              <li className="rounded-2xl border border-gold/15 bg-card p-6">
                <div className="mb-3 flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-gold to-gold-light font-extrabold text-emerald-deep">{i + 1}</span>
                  <h2 className="text-xl font-bold text-gold-light">{s.title}</h2>
                  {s.tag && <span className="rounded-full border border-gold/40 px-3 py-0.5 text-xs text-gold-light">{s.tag}</span>}
                </div>
                <p className="leading-loose text-cream/85">{s.text}</p>
                {s.kind === 'spot' && (
                  <a href={APK_URL} className="mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-l from-gold to-gold-light px-7 py-3 font-bold text-emerald-deep shadow-lg"><Download size={18} /> تحميل التطبيق</a>
                )}
                {s.note && <p className="mt-3 rounded-xl border border-gold/30 bg-emerald-deep/60 p-3 text-sm leading-relaxed text-cream/80">{s.note}</p>}
                {s.images && <div className="mt-4 space-y-4">{s.images.map(m => <Shot key={m.file} file={m.file} caption={m.caption} />)}</div>}
              </li>
            </Reveal>
          ))}
        </ol>
        <p className="mx-auto mt-10 max-w-xl text-center text-lg leading-loose text-gold-light">مبارك! أصبح تطبيق نور القرآن جاهزاً على هاتفك. نتمنى لك رحلة إيمانية مليئة بالخير والطمأنينة.</p>
      </section>
    </>
  )
}

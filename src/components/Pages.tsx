import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { Reveal, Phone, Skyline } from './ui'
import { GROUPS, PAGES, ROUTES, SHOTS, shot, type PageCfg } from '../data'

function Head({ kicker, title, intro, icon }: { kicker: string; title: string; intro: string; icon?: PageCfg['icon'] }) {
  const Icon = icon
  return (
    <header className="relative overflow-hidden bg-emerald-deep/50 px-5 pb-16 pt-32 pattern">
      <div className="relative mx-auto max-w-3xl text-center">
        <a href="#top" className="mb-6 inline-flex items-center gap-2 text-sm text-gold-light hover:underline"><ArrowRight size={16} /> الرئيسية</a>
        {Icon && <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald text-gold-light"><Icon size={28} /></div>}
        <p className="mb-2 text-sm font-semibold text-gold">{kicker}</p>
        <h1 className="gold-text text-3xl font-extrabold md:text-5xl">{title}</h1>
        <p className="mt-5 text-lg leading-loose text-cream/75">{intro}</p>
      </div>
      <Skyline className="absolute inset-x-0 bottom-0 h-10 w-full text-night" />
    </header>
  )
}

export function FeaturePage({ k }: { k: string }) {
  const p = PAGES[k]
  const others = ROUTES.filter(r => r.key !== k && PAGES[r.key]).slice(0, 4)
  return (
    <>
      <Head kicker={p.kicker} title={p.title} intro={p.intro} icon={p.icon} />
      <section className="px-5 py-16">
        <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {p.points.map((x, i) => <Reveal key={x.t} delay={i * 0.06}><div className="h-full rounded-2xl border border-gold/15 bg-card p-6"><h3 className="mb-2 text-lg font-bold text-gold-light">{x.t}</h3><p className="leading-relaxed text-cream/70">{x.d}</p></div></Reveal>)}
        </div>
      </section>
      <section className="bg-emerald-deep/40 px-5 py-16 pattern">
        <div className={`mx-auto grid max-w-5xl gap-10 ${p.shots.length > 2 ? 'sm:grid-cols-2 lg:grid-cols-3' : 'sm:grid-cols-2'}`}>
          {p.shots.map((f, i) => <Reveal key={f} delay={i * 0.08} className="text-center"><Phone file={f} /><h3 className="mt-5 font-bold text-gold-light">{shot(f).title}</h3><p className="mx-auto mt-1 max-w-xs text-sm leading-relaxed text-cream/65">{shot(f).desc}</p></Reveal>)}
        </div>
        {p.note && <p className="mx-auto mt-8 max-w-xl text-center text-sm text-cream/50">{p.note}</p>}
      </section>
      <section className="px-5 py-14"><div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-3">{others.map(o => <a key={o.key} href={`#/${o.key}`} className="rounded-full border border-gold/30 px-5 py-2 text-sm text-cream/80 hover:border-gold hover:text-gold-light">{o.label}</a>)}</div></section>
    </>
  )
}

export function GalleryPage() {
  const [g, setG] = useState('all')
  const list = SHOTS.filter(s => g === 'all' || s.group === g)
  return (
    <>
      <Head kicker="من داخل التطبيق" title="معرض صور التطبيق" intro="لقطات حقيقية من تطبيق نور القرآن على أندرويد، مرتبة حسب الميزة. اضغط أي صورة لتكبيرها وتصفح البقية." />
      <section className="px-5 py-14">
        <div className="mx-auto mb-10 flex max-w-5xl flex-wrap justify-center gap-2">
          {GROUPS.map(([id, l]) => <button key={id} onClick={() => setG(id)} className={`rounded-full border px-4 py-2 text-sm transition ${g === id ? 'border-gold bg-gold font-bold text-emerald-deep' : 'border-gold/30 text-cream/80 hover:border-gold'}`}>{l}</button>)}
        </div>
        <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {list.map(s => <div key={s.file} className="text-center"><Phone file={s.file} /><h3 className="mt-5 font-bold text-gold-light">{s.title}</h3><p className="mx-auto mt-1 max-w-xs text-sm leading-relaxed text-cream/65">{s.desc}</p></div>)}
        </div>
      </section>
    </>
  )
}

export function PrivacyPage() {
  const B = [['مقدمة', 'تهتم نور القرآن بخصوصية مستخدميها. هذه الصفحة قالب أولي سيُستكمل بالتفاصيل الدقيقة عن التطبيق.'], ['البيانات التي يتعامل معها التطبيق', 'سيتم هنا توضيح أنواع البيانات (إن وجدت) بعد مراجعتها وتأكيدها من المطور.'], ['كيفية الاستخدام والتخزين', 'سيُضاف هنا شرح لكيفية استخدام البيانات وتخزينها بعد اعتماد الصياغة النهائية.'], ['التواصل', 'ستُضاف وسيلة التواصل الرسمية لاحقاً.']]
  return (
    <>
      <Head kicker="خصوصيتك" title="سياسة الخصوصية" intro="نور القرآن · Noor Al-Qur'an" />
      <main className="mx-auto max-w-3xl space-y-8 px-5 py-14">{B.map(([h, t]) => <section key={h}><h2 className="mb-2 text-xl font-bold text-gold-light">{h}</h2><p className="leading-loose text-cream/75">{t}</p></section>)}</main>
    </>
  )
}

export function DeveloperPage() {
  return (
    <>
      <Head kicker="خلف التطبيق" title="عن المطور" intro="" />
      <main className="mx-auto max-w-2xl px-5 py-14">
        <div className="rounded-2xl border border-gold/15 bg-card p-8 text-center">
          <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-gold to-gold-light text-3xl font-extrabold text-emerald-deep">ح</div>
          <h2 className="text-2xl font-bold">حمزة أملال</h2>
          <p className="mt-3 leading-loose text-cream/75">مطور ومهتم ببرمجة المواقع والتطبيقات والبرمجيات، وأسعى إلى تقديم تجارب رقمية تجمع بين الجودة التقنية والفائدة.</p>
        </div>
      </main>
    </>
  )
}

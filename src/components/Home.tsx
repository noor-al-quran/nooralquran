import { Link2 } from 'lucide-react'
import { Reveal, Section, Phone } from './ui'
import { PAGES, ROUTES, img } from '../data'

const card = 'rounded-2xl border border-gold/15 bg-card p-6 transition hover:-translate-y-1 hover:border-gold/50 hover:shadow-[0_10px_40px_rgba(212,175,55,.12)]'
const TOUR = ['01-home', '02-services', '03-mushaf-surahs', '06-adhkar-morning', '10-prayer-times', '11-qibla', '13-assistant', '15-asma-allah']

export function Tour() {
  return (
    <Section title="جولة داخل التطبيق" kicker="لقطات حقيقية">
      <div className="-mx-5 flex snap-x gap-6 overflow-x-auto px-5 pb-6">
        {TOUR.map(n => <div key={n} className="w-56 shrink-0 snap-center md:w-64"><Phone file={`shots/${n}.jpg`} /></div>)}
      </div>
      <div className="mt-6 text-center"><a href="#/gallery" className="inline-block rounded-full border border-gold px-7 py-2 font-semibold text-gold-light hover:bg-gold hover:text-emerald-deep">افتح معرض الصور الكامل</a></div>
    </Section>
  )
}

export function Features() {
  return (
    <Section id="features" kicker="خدمات متكاملة" title="مميزات التطبيق" alt>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {Object.entries(PAGES).filter(([k]) => k !== 'about' && k !== 'offline').map(([k, p], i) => (
          <Reveal key={k} delay={(i % 3) * 0.08}>
            <a href={`#/${k}`} className={`${card} block h-full`}>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald text-gold-light"><p.icon size={24} /></div>
              <h3 className="mb-2 text-xl font-bold">{p.label}</h3>
              <p className="leading-relaxed text-cream/70">{p.intro}</p>
              <span className="mt-4 inline-block text-sm text-gold-light">اقرأ المزيد ←</span>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

export function AboutTeaser() {
  return (
    <Section kicker="تعرّف علينا" title="عن نور القرآن">
      <div className="grid items-center gap-10 md:grid-cols-[1fr_auto]">
        <Reveal className="space-y-5 text-lg leading-loose text-cream/80">
          <p>{PAGES.about.intro}</p>
          <p>رسالتنا أن نقرّب القرآن الكريم والعبادات اليومية من كل مسلم بتصميم هادئ وواضح، يجعل الرجوع إلى كتاب الله عادة يومية سهلة.</p>
          <a href="#/about" className="inline-block rounded-full border border-gold px-7 py-2 font-semibold text-gold-light hover:bg-gold hover:text-emerald-deep">المزيد عن التطبيق</a>
        </Reveal>
        <Reveal><img src={img('logo.jpg')} alt="هوية نور القرآن" width={288} height={280} loading="lazy" className="mx-auto w-64 rounded-[2rem] border border-gold/40 shadow-[0_0_60px_rgba(212,175,55,.2)] md:w-72" /></Reveal>
      </div>
    </Section>
  )
}

export function Teasers() {
  return (
    <Section kicker="معلومات" title="الخصوصية والمطور" alt>
      <div className="mx-auto grid max-w-3xl gap-5 md:grid-cols-2">
        <a href="#/privacy" className={card}><Link2 className="mb-3 text-gold-light" /><h3 className="mb-2 text-xl font-bold">خصوصية المستخدم</h3><p className="text-cream/70">صفحة مستقلة لسياسة الخصوصية.</p></a>
        <a href="#/developer" className={card}><Link2 className="mb-3 text-gold-light" /><h3 className="mb-2 text-xl font-bold">عن المطور</h3><p className="text-cream/70">حمزة أملال.</p></a>
      </div>
      <p className="mt-8 text-center text-sm text-cream/40">{ROUTES.length} صفحة في الموقع · القائمة الكاملة من زر «الصفحات»</p>
    </Section>
  )
}

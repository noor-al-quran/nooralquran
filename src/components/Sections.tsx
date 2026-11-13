import { Bot, BookOpen, Download, Languages, Mic, Rows3, Star, Moon } from 'lucide-react'
import { Reveal, Section, Phone } from './ui'
import { FEATURES, img } from '../data'

const card = 'rounded-2xl border border-gold/15 bg-card p-6 transition hover:-translate-y-1 hover:border-gold/50 hover:shadow-[0_10px_40px_rgba(212,175,55,.12)]'

export function About() {
  return (
    <Section id="about" kicker="تعرّف علينا" title="عن نور القرآن">
      <div className="grid items-center gap-10 md:grid-cols-[1fr_auto]">
        <Reveal className="space-y-5 text-lg leading-loose text-cream/80">
          <p>نور القرآن تطبيق إسلامي يجمع في مكان واحد ما يحتاجه المسلم في يومه: كتاب الله، والأذكار، ومواقيت الصلاة، واتجاه القبلة، والتقويم الهجري.</p>
          <p>رسالتنا أن نقرّب القرآن الكريم والعبادات اليومية من كل مسلم بتصميم هادئ وواضح ومريح للعين، يجعل الرجوع إلى كتاب الله عادة يومية سهلة.</p>
          <div className="flex flex-wrap gap-3 pt-2">
            {['تصميم هادئ', 'واجهة عربية بالكامل', 'خدمات متكاملة'].map(t => <span key={t} className="rounded-full border border-gold/30 px-4 py-1 text-sm text-gold-light">{t}</span>)}
          </div>
        </Reveal>
        <Reveal><img src={img('logo.jpg')} alt="هوية نور القرآن" className="mx-auto w-64 rounded-[2rem] border border-gold/40 shadow-[0_0_60px_rgba(212,175,55,.2)] md:w-72" /></Reveal>
      </div>
    </Section>
  )
}

export function Features() {
  return (
    <Section id="features" kicker="خدمات متكاملة" title="مميزات التطبيق" alt>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((f, i) => (
          <Reveal key={f.title} delay={(i % 3) * 0.08}>
            <div className={card}>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald text-gold-light"><f.icon size={24} /></div>
              <h3 className="mb-2 text-xl font-bold">{f.title}</h3>
              <p className="leading-relaxed text-cream/70">{f.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

export function Quran() {
  const items = [
    { icon: BookOpen, t: 'المصحف الشريف', d: '114 سورة و30 جزءاً مع بحث سريع وعلامات محفوظة.' },
    { icon: Rows3, t: 'القراءة المتصلة', d: 'اقرأ بشكل متصل كالمصحف أو آية بآية.' },
    { icon: Languages, t: 'الترجمات', d: 'ترجمات تساعدك على فهم المعاني.' },
    { icon: Mic, t: 'القراء', d: 'ثمانية قراء مشهورين للاستماع.' },
    { icon: Download, t: 'استماع دون إنترنت', d: 'نزّل السور واستمع إليها بدون اتصال.' },
  ]
  return (
    <Section id="quran" kicker="القرآن الكريم" title="بين يديك كتاب الله أينما كنت">
      <div className="grid items-center gap-10 lg:grid-cols-[auto_1fr]">
        <Reveal><Phone src={img('mushaf.jpg')} alt="فهرس المصحف في التطبيق" /></Reveal>
        <div className="grid gap-4 sm:grid-cols-2">
          {items.map((x, i) => (
            <Reveal key={x.t} delay={i * 0.07}>
              <div className={card}><x.icon className="mb-3 text-glow" /><h3 className="mb-1 text-lg font-bold">{x.t}</h3><p className="text-cream/70">{x.d}</p></div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}

export function Assistant() {
  return (
    <Section id="assistant" kicker="تعريفي" title="مساعدك الإسلامي الذكي" alt>
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <Reveal className="space-y-5 text-lg leading-loose text-cream/80">
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/20 text-gold-light"><Bot size={30} /></div>
          <p>مساعد داخل التطبيق يساعدك في الإجابة عن الأسئلة المتعلقة بالقرآن الكريم والأحاديث والأذكار والموضوعات الإسلامية، مع اختصارات سريعة مثل مواقيت الصلاة اليوم والأذكار والأدعية المأثورة.</p>
          <p className="text-sm text-cream/50">قسم تعريفي فقط؛ لا يتصل الموقع بأي خدمة ذكاء اصطناعي.</p>
        </Reveal>
        <Reveal><Phone src={img('assistant.jpg')} alt="واجهة المساعد الإسلامي الذكي" /></Reveal>
      </div>
    </Section>
  )
}

export function Adhkar() {
  const rows = [
    { f: 'adhkar.jpg', t: 'الأذكار', d: 'أذكار الصباح والمساء وبعد الصلاة، مع الاستماع المتسلسل والتسبيح بالعدّاد.' },
    { f: 'prayer.jpg', t: 'مواقيت الصلاة', d: 'أوقات الصلاة اليومية مع عدّ تنازلي للصلاة القادمة.' },
    { f: 'qibla.jpg', t: 'اتجاه القبلة', d: 'بوصلة إلكترونية تحدد زاوية الكعبة المشرفة من موقعك.' },
  ]
  return (
    <Section id="adhkar" kicker="عبادات يومية" title="الأذكار والصلاة والقبلة">
      <div className="grid gap-10 md:grid-cols-3">
        {rows.map((r, i) => (
          <Reveal key={r.t} delay={i * 0.1} className="text-center">
            <Phone src={img(r.f)} alt={r.t} />
            <h3 className="mt-6 text-xl font-bold gold-text">{r.t}</h3>
            <p className="mt-2 leading-relaxed text-cream/70">{r.d}</p>
          </Reveal>
        ))}
      </div>
      <Reveal className="mx-auto mt-14 max-w-xl">
        <div className={`${card} text-center`}><Star className="mx-auto mb-3 text-gold-light" /><h3 className="text-xl font-bold">المسبحة الإلكترونية</h3><p className="mt-2 text-cream/70">عداد تسبيح وأهداف قابلة للتخصيص تناسب وردك اليومي.</p></div>
      </Reveal>
    </Section>
  )
}

export function PrivacyTeaser() {
  return (
    <Section id="privacy" kicker="خصوصيتك" title="خصوصية المستخدم" alt>
      <Reveal className="mx-auto max-w-2xl text-center">
        <Moon className="mx-auto mb-4 text-gold-light" />
        <p className="text-lg leading-loose text-cream/80">نهتم بخصوصية مستخدمي نور القرآن. سنوضح في صفحة الخصوصية كيف يتعامل التطبيق مع البيانات بعد اعتماد صياغتها النهائية.</p>
        <a href="#/privacy" className="mt-6 inline-block rounded-full border border-gold px-7 py-2 font-semibold text-gold-light transition hover:bg-gold hover:text-emerald-deep">صفحة الخصوصية</a>
      </Reveal>
    </Section>
  )
}

export function Developer() {
  return (
    <Section id="developer" kicker="خلف التطبيق" title="المطور">
      <Reveal className="mx-auto max-w-2xl">
        <div className={`${card} text-center`}>
          <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-gold to-gold-light text-3xl font-extrabold text-emerald-deep">ح</div>
          <h3 className="text-2xl font-bold">حمزة أملال</h3>
          <p className="mt-3 leading-loose text-cream/75">مطور ومهتم ببرمجة المواقع والتطبيقات والبرمجيات، وأسعى إلى تقديم تجارب رقمية تجمع بين الجودة التقنية والفائدة.</p>
        </div>
      </Reveal>
    </Section>
  )
}

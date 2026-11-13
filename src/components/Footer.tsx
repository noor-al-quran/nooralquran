import { NAV, img } from '../data'

export default function Footer() {
  return (
    <footer className="border-t border-gold/20 bg-emerald-deep/50 px-5 py-12">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
        <div>
          <div className="mb-3 flex items-center gap-3"><img src={img('logo.jpg')} alt="شعار نور القرآن" className="h-12 w-12 rounded-xl border border-gold/40" /><span className="text-xl font-extrabold gold-text">نور القرآن</span></div>
          <p className="leading-relaxed text-cream/65">تطبيق إسلامي يجمع القرآن الكريم والأذكار ومواقيت الصلاة واتجاه القبلة في مكان واحد.</p>
        </div>
        <div>
          <h4 className="mb-3 font-bold text-gold-light">الأقسام</h4>
          <ul className="grid grid-cols-2 gap-2 text-cream/70">{NAV.map(n => <li key={n.id}><a className="hover:text-gold-light" href={`#${n.id}`}>{n.label}</a></li>)}</ul>
        </div>
        <div>
          <h4 className="mb-3 font-bold text-gold-light">روابط</h4>
          <ul className="space-y-2 text-cream/70"><li><a className="hover:text-gold-light" href="#/privacy">صفحة الخصوصية</a></li><li>المطور: حمزة أملال</li></ul>
        </div>
      </div>
      <p className="mt-10 text-center text-sm text-cream/50">© 2026 نور القرآن · Noor Al-Qur'an. جميع الحقوق محفوظة.</p>
    </footer>
  )
}

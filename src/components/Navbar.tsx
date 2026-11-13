import { useEffect, useState } from 'react'
import { LayoutGrid, X } from 'lucide-react'
import { ROUTES, img } from '../data'

const TOP = [['#features', 'المميزات'], ['#/quran', 'القرآن'], ['#/adhkar', 'الأذكار'], ['#/prayer', 'الصلاة'], ['#/gallery', 'الصور']]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [solid, setSolid] = useState(false)
  useEffect(() => {
    const f = () => setSolid(window.scrollY > 20)
    f(); window.addEventListener('scroll', f, { passive: true })
    return () => window.removeEventListener('scroll', f)
  }, [])
  useEffect(() => { const c = () => setOpen(false); window.addEventListener('hashchange', c); return () => window.removeEventListener('hashchange', c) }, [])
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition ${solid || open ? 'bg-night/95 backdrop-blur border-b border-gold/20' : ''}`}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <a href="#top" onClick={() => window.location.hash === '' || (window.location.hash = '')} className="flex items-center gap-3">
          <img src={img('logo.jpg')} alt="شعار نور القرآن" width={40} height={40} className="h-10 w-10 rounded-xl border border-gold/40 object-cover" />
          <span className="text-lg font-extrabold gold-text">نور القرآن</span>
        </a>
        <nav className="hidden items-center gap-6 lg:flex">
          {TOP.map(([h, l]) => <a key={h} href={h} className="text-sm text-cream/80 transition hover:text-gold-light">{l}</a>)}
        </nav>
        <button className="flex items-center gap-2 rounded-full border border-gold/40 px-4 py-2 text-sm text-gold-light" aria-label="كل الصفحات" onClick={() => setOpen(!open)}>
          {open ? <X size={18} /> : <LayoutGrid size={18} />} <span>الصفحات</span>
        </button>
      </div>
      {open && (
        <nav className="mx-auto grid max-w-6xl grid-cols-2 gap-2 px-5 pb-5 sm:grid-cols-3 lg:grid-cols-4">
          {ROUTES.map(r => <a key={r.key} href={`#/${r.key}`} className="flex items-center gap-2 rounded-xl bg-card px-4 py-3 text-cream/90 hover:bg-emerald">{r.icon && <r.icon size={18} className="text-gold-light" />}{r.label}</a>)}
        </nav>
      )}
    </header>
  )
}

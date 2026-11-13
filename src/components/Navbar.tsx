import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { NAV, img } from '../data'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [solid, setSolid] = useState(false)
  useEffect(() => {
    const f = () => setSolid(window.scrollY > 20)
    f(); window.addEventListener('scroll', f, { passive: true })
    return () => window.removeEventListener('scroll', f)
  }, [])
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition ${solid || open ? 'bg-night/90 backdrop-blur border-b border-gold/20' : ''}`}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <a href="#top" className="flex items-center gap-3">
          <img src={img('logo.jpg')} alt="شعار نور القرآن" className="h-10 w-10 rounded-xl border border-gold/40" />
          <span className="text-lg font-extrabold gold-text">نور القرآن</span>
        </a>
        <nav className="hidden items-center gap-5 lg:flex">
          {NAV.map(n => <a key={n.id} href={`#${n.id}`} className="text-sm text-cream/80 transition hover:text-gold-light">{n.label}</a>)}
        </nav>
        <button className="rounded-lg p-2 text-gold lg:hidden" aria-label="القائمة" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </div>
      {open && (
        <nav className="grid gap-1 border-t border-gold/10 px-5 pb-4 lg:hidden">
          {NAV.map(n => <a key={n.id} href={`#${n.id}`} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 text-cream/90 hover:bg-card">{n.label}</a>)}
        </nav>
      )}
    </header>
  )
}

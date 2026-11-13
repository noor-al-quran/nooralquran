import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import PrivacyPage from './components/PrivacyPage'
import { About, Features, Quran, Assistant, Adhkar, PrivacyTeaser, Developer } from './components/Sections'

export default function App() {
  const [hash, setHash] = useState(window.location.hash)
  const [showTop, setShowTop] = useState(false)
  useEffect(() => {
    const h = () => {
      setHash(window.location.hash)
      const id = window.location.hash.slice(1)
      if (id && !id.startsWith('/')) setTimeout(() => document.getElementById(id)?.scrollIntoView(), 50)
      else window.scrollTo(0, 0)
    }
    const s = () => setShowTop(window.scrollY > 600)
    window.addEventListener('hashchange', h); window.addEventListener('scroll', s, { passive: true })
    return () => { window.removeEventListener('hashchange', h); window.removeEventListener('scroll', s) }
  }, [])

  if (hash === '#/privacy') return <><PrivacyPage /><Footer /></>
  return (
    <>
      <Navbar />
      <main>
        <Hero /><About /><Features /><Gallery /><Quran /><Assistant /><Adhkar /><PrivacyTeaser /><Developer />
      </main>
      <Footer />
      {showTop && <button aria-label="العودة إلى الأعلى" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-5 left-5 z-50 rounded-full bg-gold p-3 text-emerald-deep shadow-lg transition hover:scale-110"><ArrowUp /></button>}
    </>
  )
}

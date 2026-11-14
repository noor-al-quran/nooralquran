import { useCallback, useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Lightbox from './components/Lightbox'
import { ZoomCtx } from './components/ui'
import { Tour, Features, AboutTeaser, Teasers } from './components/Home'
import { FeaturePage, GalleryPage, PrivacyPage, DeveloperPage } from './components/Pages'
import { PAGES, SHOTS } from './data'
import { TourProvider } from './tour/TourContext'
import Welcome from './tour/Welcome'
import TourOverlay from './tour/TourOverlay'
import HowToButton from './tour/HowToButton'

const TITLES: Record<string, string> = { gallery: 'معرض الصور', privacy: 'الخصوصية', developer: 'عن المطور' }

export default function App() {
  const [hash, setHash] = useState(window.location.hash)
  const [zoom, setZoom] = useState<number | null>(null)
  const [showTop, setShowTop] = useState(false)
  const route = hash.startsWith('#/') ? hash.slice(2) : ''
  const open = useCallback((f: string) => setZoom(SHOTS.findIndex(s => s.file === f)), [])

  useEffect(() => {
    const h = () => {
      setHash(window.location.hash)
      const id = window.location.hash.slice(1)
      if (id && !id.startsWith('/')) setTimeout(() => document.getElementById(id)?.scrollIntoView(), 60)
      else window.scrollTo(0, 0)
    }
    const s = () => setShowTop(window.scrollY > 600)
    window.addEventListener('hashchange', h); window.addEventListener('scroll', s, { passive: true })
    return () => { window.removeEventListener('hashchange', h); window.removeEventListener('scroll', s) }
  }, [])

  useEffect(() => {
    const t = PAGES[route]?.title ?? TITLES[route]
    document.title = t ? `${t} | نور القرآن` : "نور القرآن | Noor Al-Qur'an"
  }, [route])

  let page
  if (PAGES[route]) page = <FeaturePage k={route} />
  else if (route === 'gallery') page = <GalleryPage />
  else if (route === 'privacy') page = <PrivacyPage />
  else if (route === 'developer') page = <DeveloperPage />
  else page = <><Hero /><Tour /><Features /><AboutTeaser /><Teasers /></>

  return (
    <TourProvider>
    <ZoomCtx.Provider value={open}>
      <Navbar />
      <main key={route}>{page}</main>
      <Footer />
      <Lightbox index={zoom} onChange={setZoom} />
      <Welcome />
      <TourOverlay />
      <HowToButton />
      {showTop && <button aria-label="العودة إلى الأعلى" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-5 left-5 z-50 rounded-full bg-gold p-3 text-emerald-deep shadow-lg transition hover:scale-110"><ArrowUp /></button>}
    </ZoomCtx.Provider>
    </TourProvider>
  )
}

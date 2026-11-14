import { Download } from 'lucide-react'
import { useTour } from './TourContext'

export default function HowToButton() {
  const t = useTour()
  if (t.kind || t.welcome) return null
  return (
    <button onClick={() => t.start('download')} className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full border border-gold/60 bg-night/90 px-4 py-2 text-sm font-semibold text-gold-light shadow-lg backdrop-blur transition hover:bg-gold hover:text-emerald-deep">
      <Download size={16} /> كيف أحمل التطبيق؟
    </button>
  )
}

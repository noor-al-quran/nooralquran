import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { getStatus, setStatus } from './storage'
import { STEPS, type TourKind } from './steps'

type Ctx = {
  kind: TourKind | null
  index: number
  welcome: boolean
  start: (k: TourKind) => void
  next: () => void
  prev: () => void
  close: () => void // إغلاق من الزائر: لا تظهر الجولة تلقائياً بعدها
  finish: () => void // إتمام الجولة
  complete: () => void // تسجيل الإتمام دون إغلاق
}

const C = createContext<Ctx | null>(null)

export function useTour(): Ctx {
  const c = useContext(C)
  if (!c) throw new Error('TourProvider is missing')
  return c
}

export function TourProvider({ children }: { children: ReactNode }) {
  const [kind, setKind] = useState<TourKind | null>(null)
  const [index, setIndex] = useState(0)
  const [welcome, setWelcome] = useState(false)

  // أول زيارة فقط: لم يُكمل الزائر الجولة ولم يتخطّها من قبل
  useEffect(() => {
    if (getStatus() !== null) return
    const t = window.setTimeout(() => setWelcome(true), 700)
    return () => window.clearTimeout(t)
  }, [])

  useEffect(() => {
    document.body.style.overflow = kind !== null || welcome ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [kind, welcome])

  const start = useCallback((k: TourKind) => {
    setWelcome(false)
    setIndex(0)
    if (k === 'download' && window.location.hash !== '' && window.location.hash !== '#') window.location.hash = ''
    setKind(k)
  }, [])

  const complete = useCallback(() => setStatus('completed'), [])
  const finish = useCallback(() => { setStatus('completed'); setKind(null); setWelcome(false) }, [])
  const close = useCallback(() => {
    if (getStatus() !== 'completed') setStatus('skipped')
    setKind(null)
    setWelcome(false)
  }, [])
  const next = useCallback(() => {
    if (kind === null) return
    if (index >= STEPS[kind].length - 1) { finish(); return }
    setIndex(index + 1)
  }, [kind, index, finish])
  const prev = useCallback(() => setIndex(i => Math.max(0, i - 1)), [])

  const value = useMemo(() => ({ kind, index, welcome, start, next, prev, close, finish, complete }), [kind, index, welcome, start, next, prev, close, finish, complete])
  return <C.Provider value={value}>{children}</C.Provider>
}

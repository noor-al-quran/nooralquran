const KEY = 'noor.tour.status.v1'
export type TourStatus = 'completed' | 'skipped' | null

export function getStatus(): TourStatus {
  try {
    const v = window.localStorage.getItem(KEY)
    return v === 'completed' || v === 'skipped' ? v : null
  } catch {
    return null
  }
}

export function setStatus(s: 'completed' | 'skipped') {
  try { window.localStorage.setItem(KEY, s) } catch { /* التخزين غير متاح */ }
}

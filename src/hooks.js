import { useEffect, useRef } from 'react'

export const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v))
export const lerp = (a, b, t) => a + (b - a) * t
export const easeOut = (t) => 1 - Math.pow(1 - t, 3)
export const easeInOut = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2)

/**
 * Calls cb(el, p) on every scroll frame. p goes 0 -> 1 while the top of the
 * element travels from `start` * viewport height to `end` * viewport height.
 */
export function useScrollProgress(cb, { start = 0.95, end = 0.4 } = {}) {
  const ref = useRef(null)
  const cbRef = useRef(cb)
  cbRef.current = cb
  useEffect(() => {
    const el = ref.current
    if (!el) return
    let raf = 0
    const update = () => {
      raf = 0
      const r = el.getBoundingClientRect()
      const vh = window.innerHeight
      const p = clamp((vh * start - r.top) / (vh * (start - end)))
      cbRef.current(el, p, r)
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [start, end])
  return ref
}

/** Pinned (sticky) section progress: 0 when section top hits the pinned point, 1 at the end of the track */
export function usePinProgress(cb) {
  const ref = useRef(null)
  const cbRef = useRef(cb)
  cbRef.current = cb
  useEffect(() => {
    const el = ref.current
    if (!el) return
    let raf = 0
    const update = () => {
      raf = 0
      const r = el.getBoundingClientRect()
      const topOffset = window.innerWidth <= 820 ? 68 : 0
      const total = r.height - (window.innerHeight - topOffset)
      const p = total > 0 ? clamp((topOffset - r.top) / total) : 0
      cbRef.current(el, p, r)
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])
  return ref
}

/** Adds the class "in" once the element is visible */
export function useInView(threshold = 0.25) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add('in')
          io.disconnect()
        }
      },
      { threshold }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [threshold])
  return ref
}

export const mixHex = (a, b, t) => {
  const pa = [1, 3, 5].map((i) => parseInt(a.slice(i, i + 2), 16))
  const pb = [1, 3, 5].map((i) => parseInt(b.slice(i, i + 2), 16))
  return `rgb(${pa.map((v, i) => Math.round(lerp(v, pb[i], t))).join(',')})`
}

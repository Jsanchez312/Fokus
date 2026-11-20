import { useScrollProgress, easeOut, mixHex, useInView } from '../hooks'
import { Arrow, Pinwheel } from './icons'

/** Section title: blurred lime -> sharp black, scrubbed with scroll */
export function ScrollTitle({ children, badge, className = '', from = '#ff6a2b', to = '#101114', size, onBadgeClick }) {
  const ref = useScrollProgress((el, p) => {
    const e = easeOut(p)
    el.style.filter = `blur(${(1 - e) * 16}px)`
    el.style.color = mixHex(from, to, e)
    el.style.transform = `translateY(${(1 - e) * 40}px) scale(${0.94 + 0.06 * e})`
    el.style.opacity = String(0.25 + 0.75 * Math.min(1, p * 3))
  }, { start: 1, end: 0.45 })
  return (
    <h2 ref={ref} className={`scroll-title ${className}`} style={size ? { fontSize: size } : undefined}>
      <span>{children}</span>
      {badge && (
        <em
          className="badge"
          role={onBadgeClick ? 'button' : undefined}
          onClick={onBadgeClick}
          style={onBadgeClick ? { cursor: 'pointer' } : undefined}
        >
          {badge}
        </em>
      )}
    </h2>
  )
}

export function Btn({ children, dark, className = '', href = '#', onClick }) {
  return (
    <a href={href} className={`btn ${dark ? 'btn-dark' : ''} ${className}`} onClick={onClick}>
      <span className="btn-circle">
        <Arrow size={15} />
      </span>
      <span className="btn-label">{children}</span>
    </a>
  )
}

export function Marquee({ items, className = '', speed = 28 }) {
  const row = (k) => (
    <div className="marquee-row" key={k} aria-hidden={k > 0}>
      {items.map((t, i) => (
        <span className="marquee-item" key={i}>
          <Pinwheel className="marquee-icon" />
          <b>{t}</b>
        </span>
      ))}
    </div>
  )
  return (
    <div className={`marquee ${className}`}>
      <div className="marquee-track" style={{ animationDuration: `${speed}s` }}>
        {row(0)}
        {row(1)}
        {row(2)}
      </div>
    </div>
  )
}

/** Dark tile grid with pulsing neon edges (hero + footer background) */
const GLOW = [
  { i: 2, c: '#5b7cff', d: 0 }, { i: 5, c: '#2ee59d', d: 1.4 }, { i: 7, c: '#ff6a2b', d: 2.6 },
  { i: 14, c: '#5b7cff', d: 0.7 }, { i: 17, c: '#2ee59d', d: 3.1 }, { i: 20, c: '#ff6a2b', d: 1.9 },
  { i: 26, c: '#5b7cff', d: 4.1 }, { i: 29, c: '#ff6a2b', d: 2.2 }, { i: 33, c: '#2ee59d', d: 0.3 },
  { i: 38, c: '#ff6a2b', d: 3.6 }, { i: 41, c: '#5b7cff', d: 1.1 },
]
export function TileBg({ cols = 11, rows = 6 }) {
  const n = cols * rows
  return (
    <div className="tilebg" style={{ gridTemplateColumns: `repeat(${cols},1fr)`, gridTemplateRows: `repeat(${rows},1fr)` }} aria-hidden="true">
      {Array.from({ length: n }, (_, k) => {
        const g = GLOW.find((x) => x.i === k)
        return (
          <i
            key={k}
            className={g ? 'tile glow' : 'tile'}
            style={g ? { '--c': g.c, animationDelay: `${g.d}s` } : undefined}
          />
        )
      })}
      <i className="spot" />
    </div>
  )
}

export { useInView }

import { useEffect, useRef } from 'react'
import { TileBg } from './shared'
import { Pinwheel, Plus, Calendar } from './icons'
import { navigate } from '../navigation'
import { useLanguage } from '../context/LanguageContext'
import maya from '../assets/hero-maya.jpg'
import statue from '../assets/hero-statue.jpg'

export default function Hero() {
  const root = useRef(null)
  const { isEn, t } = useLanguage()

  // mouse parallax for floating cards + headline
  useEffect(() => {
    const el = root.current
    if (!el) return
    let tx = 0, ty = 0, cx = 0, cy = 0, raf
    const move = (e) => {
      const r = el.getBoundingClientRect()
      tx = (e.clientX - r.left) / r.width - 0.5
      ty = (e.clientY - r.top) / r.height - 0.5
    }
    const tick = () => {
      cx += (tx - cx) * 0.06
      cy += (ty - cy) * 0.06
      el.style.setProperty('--mx', cx.toFixed(4))
      el.style.setProperty('--my', cy.toFixed(4))
      raf = requestAnimationFrame(tick)
    }
    el.addEventListener('mousemove', move)
    raf = requestAnimationFrame(tick)
    return () => {
      el.removeEventListener('mousemove', move)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <section className="hero" ref={root} id="top">
      <TileBg cols={11} rows={6} />

      <div className="hero-stage">
        <h1 className="hero-title">
          <span className="w1 word">
            <span className="parallax" style={{ '--k': 14 }}>
              <span className="swing-a">{t('hero.word1')}</span>
            </span>
          </span>
          <span className="w2 word">
            <span className="parallax" style={{ '--k': -10 }}>
              <span className="swing-b">{t('hero.word2')}</span>
            </span>
          </span>
        </h1>

        <div className="float statue parallax" style={{ '--k': -24 }}>
          <div className="statue-card">
            <img src={statue} alt="Pieza visual Fokus" />
          </div>
          <Pinwheel className="spinner" />
        </div>

        <div className="float maya parallax" style={{ '--k': 20 }}>
          <div className="maya-card swing-c">
            <img src={maya} alt="Equipo Fokus trabajando" />
            <div className="maya-info">
              <h4>{t('hero.maya.title')}</h4>
              <p>{t('hero.maya.desc')}</p>
            </div>
            <button
              className="maya-row"
              onClick={() => navigate('digital')}
            >
              <span>{t('hero.maya.explore')}</span>
              <Plus />
            </button>
            <button
              className="maya-row maya-white"
              onClick={() => navigate('contact')}
            >
              <span>{t('hero.maya.start')}</span>
              <Calendar />
            </button>
          </div>
        </div>

        <p className="hero-tag">
          {isEn ? (
            <>
              ONE SHARP FOCUS. TWO SPECIALIZED DIVISIONS.
              <br />
              WE ENGINEER WHAT <span className="hl hl-run">PROPELS YOUR BUSINESS</span>.
            </>
          ) : (
            <>
              UN SOLO ENFOQUE. DOS EQUIPOS ESPECIALIZADOS.
              <br />
              CONSTRUIMOS LO QUE HACE <span className="hl hl-run">AVANZAR TU NEGOCIO</span>.
            </>
          )}
        </p>
      </div>
    </section>
  )
}

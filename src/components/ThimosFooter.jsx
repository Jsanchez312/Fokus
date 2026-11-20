import { useRef } from 'react'
import { Arrow, Pinwheel } from './icons'
import { navigate } from '../navigation'

export default function ThimosFooter() {
  const footerRef = useRef(null)

  const handleMouseMove = (e) => {
    if (!footerRef.current) return
    const rect = footerRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    footerRef.current.style.setProperty('--fx', `${x}px`)
    footerRef.current.style.setProperty('--fy', `${y}px`)
    footerRef.current.style.setProperty('--glow-opacity', '1')
  }

  const handleMouseLeave = () => {
    if (!footerRef.current) return
    footerRef.current.style.setProperty('--glow-opacity', '0')
  }

  const onNav = (path) => (e) => {
    e.preventDefault()
    navigate(path)
  }

  return (
    <footer
      className="thimos-footer"
      ref={footerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Interactive fine-line grid with mouse-reactive blue glow */}
      <div className="footer-grid-bg" aria-hidden="true">
        <div className="grid-lines" />
        <div className="grid-glow" />
      </div>

      <div className="container footer-content">
        <div className="footer-top-row">
          <div className="footer-hero-left">
            <h3 className="footer-tagline">
              SOMOS UNA AGENCIA QUE CONVIERTE
              <br />
              IDEAS EN EXPERIENCIAS DIGITALES
              <br />
              QUE DEJAN HUELLA.
            </h3>
            <a href="/contact" onClick={onNav('contact')} className="thimos-cta-btn footer-btn">
              <span className="cta-circle">
                <Arrow size={14} />
              </span>
              <span className="cta-text">CONTÁCTANOS</span>
            </a>
          </div>

          <div className="footer-columns">
            <div className="footer-col">
              <a href="/" onClick={onNav('')}>Inicio</a>
              <a href="/about" onClick={onNav('about')}>Nosotros</a>
              <a href="/digital" onClick={onNav('digital')}>Servicios</a>
            </div>
            <div className="footer-col">
              <a href="/digital" onClick={onNav('digital')}>
                Detalle de servicio
              </a>
              <a href="/projects" onClick={onNav('projects')}>Proyectos</a>
              <a href="/projects" onClick={onNav('projects')}>
                Detalle de proyecto
              </a>
            </div>
            <div className="footer-col">
              <a href="/#articles" onClick={onNav('')}>Artículos</a>
              <a href="/contact" onClick={onNav('contact')}>Contacto</a>
              <a href="/about" onClick={onNav('about')}>Licencias</a>
            </div>
          </div>
        </div>

        {/* Wordmark THIMOS gigante apilado/duplicado que se revela al hacer scroll */}
        <div className="thimos-wordmark-container">
          <div className="thimos-wordmark-track">
            <div className="thimos-wordmark-layer layer-back">THIMOS</div>
            <div className="thimos-wordmark-layer layer-main">THIMOS</div>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <p className="copyright-text">
            Copyright © fokus. Un solo enfoque. Dos divisiones expertas.
          </p>
        </div>
      </div>

      {/* Banda lime con marquee horizontal */}
      <div className="footer-lime-band">
        <div className="lime-marquee-track">
          {[0, 1, 2, 3].map((k) => (
            <div className="lime-marquee-group" key={k} aria-hidden={k > 0}>
              <span className="lime-item">
                <b>CONTÁCTANOS</b>
                <Pinwheel className="lime-star" />
              </span>
              <span className="lime-item">
                <b>HABLEMOS</b>
                <Pinwheel className="lime-star" />
              </span>
              <span className="lime-item">
                <b>CONTÁCTANOS</b>
                <Pinwheel className="lime-star" />
              </span>
              <span className="lime-item">
                <b>HABLEMOS</b>
                <Pinwheel className="lime-star" />
              </span>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}

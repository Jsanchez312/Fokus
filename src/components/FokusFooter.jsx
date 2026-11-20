import { useRef } from 'react'
import { Arrow, Pinwheel, LogoMark } from './icons'
import { navigate } from '../navigation'
import { useLanguage } from '../context/LanguageContext'

export default function FokusFooter({ brand = 'fokus' }) {
  const footerRef = useRef(null)
  const { lang, isEn, t } = useLanguage()

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

  const accentColor =
    brand === 'digital'
      ? '#5B7CFF'
      : brand === 'automations'
      ? '#2EE59D'
      : '#FF6A2B'

  const glowRgb =
    brand === 'digital'
      ? '91, 124, 255'
      : brand === 'automations'
      ? '46, 229, 157'
      : '255, 106, 43'

  const tagline = isEn
    ? brand === 'digital'
      ? 'WE ACCELERATE BRANDS INTO THE DIGITAL ERA WITH HIGH-IMPACT PLATFORMS THAT DRIVE MEASURABLE REVENUE.'
      : brand === 'automations'
      ? 'WE REPLACE REPETITIVE MANUAL WORK WITH RESILIENT AUTOMATED SYSTEMS OPERATING SEAMLESSLY.'
      : 'FOKUS IS A SPECIALIZED GROUP BUILDING DIGITAL EXPERIENCES AND AUTOMATED SYSTEMS THAT ADVANCE YOUR BUSINESS.'
    : brand === 'digital'
      ? 'LLEVAMOS MARCAS Y EMPRESAS AL ENTORNO DIGITAL CON UNA PRESENCIA QUE IMPACTA Y GENERA RESULTADOS.'
      : brand === 'automations'
      ? 'REEMPLAZAMOS EL TRABAJO MANUAL REPETITIVO CON SISTEMAS AUTOMATIZADOS CONFIABLES QUE OPERAN SOLOS.'
      : 'FOKUS ES UN GRUPO ESPECIALIZADO QUE CONSTRUYE EXPERIENCIAS DIGITALES Y SISTEMAS QUE HACEN AVANZAR TU NEGOCIO.'

  return (
    <footer
      className={`fokus-footer brand-${brand}`}
      ref={footerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        '--brand-accent': accentColor,
        '--glow-rgb': glowRgb
      }}
    >
      <div className="footer-grid-bg" aria-hidden="true">
        <div className="grid-lines" />
        <div className="grid-glow" />
      </div>

      <div className="container footer-content">
        <div className="footer-top-row">
          <div className="footer-hero-left">
            <div className="footer-brand-badge">
              <LogoMark className="footer-mini-mark" variant={brand} accent={accentColor} />
              <span>
                fokus {brand === 'digital' ? 'DIGITAL' : brand === 'automations' ? (isEn ? 'AUTOMATIONS' : 'AUTOMATIZACIONES') : ''}
              </span>
            </div>
            <h3 className="footer-tagline">{tagline}</h3>
            <a
              href="/contact"
              onClick={onNav('contact')}
              className="fokus-cta-btn footer-btn"
            >
              <span className="fokus-cta-circle">
                <Arrow size={14} />
              </span>
              <span className="fokus-cta-label">
                {isEn ? 'START A CONVERSATION' : 'INICIAR CONVERSACIÓN'}
              </span>
            </a>
          </div>

          <div className="footer-columns">
            <div className="footer-col">
              <span className="col-heading">{isEn ? 'NAVIGATION' : 'NAVEGACIÓN'}</span>
              <a href="/" onClick={onNav('')}>{isEn ? 'Home' : 'Inicio'}</a>
              <a href="/about" onClick={onNav('about')}>{isEn ? 'About Fokus' : 'Sobre Fokus'}</a>
              <a href="/digital" onClick={onNav('digital')}>{isEn ? 'Digital Division' : 'División Digital'}</a>
              <a href="/automations" onClick={onNav('automations')}>{isEn ? 'Automations Division' : 'División Automatizaciones'}</a>
              <a href="/projects" onClick={onNav('projects')}>{isEn ? 'Projects' : 'Proyectos'}</a>
              <a href="/articles" onClick={onNav('articles')}>{isEn ? 'Articles & Blog' : 'Artículos & Blog'}</a>
              <a href="/contact" onClick={onNav('contact')}>{isEn ? 'Contact' : 'Contacto'}</a>
            </div>
            <div className="footer-col">
              <span className="col-heading">{isEn ? 'DIGITAL SERVICES' : 'SERVICIOS DIGITALES'}</span>
              <a href="/digital/web-development" onClick={onNav('digital/web-development')}>
                {isEn ? 'Web Platforms' : 'Plataformas Web'}
              </a>
              <a href="/digital/digital-branding" onClick={onNav('digital/digital-branding')}>
                {isEn ? 'Brand Systems' : 'Sistemas de Marca'}
              </a>
              <a href="/digital/ux-ui-design" onClick={onNav('digital/ux-ui-design')}>
                {isEn ? 'UX/UI Architecture' : 'Diseño UX/UI'}
              </a>
              <a href="/digital/seo-performance" onClick={onNav('digital/seo-performance')}>
                {isEn ? 'Technical SEO' : 'Arquitectura SEO'}
              </a>
            </div>
            <div className="footer-col">
              <span className="col-heading">{isEn ? 'AUTOMATIONS' : 'AUTOMATIZACIONES'}</span>
              <a href="/automations/crm-pipeline" onClick={onNav('automations/crm-pipeline')}>
                {isEn ? 'CRM & Pipelines' : 'CRM & Pipelines'}
              </a>
              <a href="/automations/workflow-integrations" onClick={onNav('automations/workflow-integrations')}>
                {isEn ? 'Multi-App Workflows' : 'Integraciones Multi-App'}
              </a>
              <a href="/automations/ai-support-operations" onClick={onNav('automations/ai-support-operations')}>
                {isEn ? 'Operational AI' : 'Asistentes IA Operativos'}
              </a>
              <a href="/automations/data-telemetry" onClick={onNav('automations/data-telemetry')}>
                {isEn ? 'Data Telemetry' : 'Telemetría de Datos'}
              </a>
            </div>
          </div>
        </div>

        <div className="fokus-wordmark-container">
          <div className="fokus-wordmark-track">
            <div className="fokus-wordmark-layer layer-back">
              <span>fokus</span>
            </div>
            <div className="fokus-wordmark-layer layer-main">
              <span>fokus</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <p className="copyright-text">
            Copyright © Fokus Group.{' '}
            {isEn
              ? 'One sharp focus. Two specialized divisions. Attention where it matters.'
              : 'Un solo enfoque. Dos divisiones expertas. La atención, puesta donde cuenta.'}
          </p>
        </div>
      </div>

      <div
        className="footer-accent-band clickable-band"
        style={{ background: accentColor, cursor: 'pointer' }}
        onClick={onNav('contact')}
      >
        <div className="accent-marquee-track">
          {[0, 1, 2, 3].map((k) => (
            <div className="accent-marquee-group" key={k} aria-hidden={k > 0}>
              {(isEn
                ? ['CONTACT US', "LET'S TALK", 'FOKUS DIGITAL', 'FOKUS AUTOMATIONS', 'START PROJECT']
                : ['CONTÁCTANOS', 'HABLEMOS', 'FOKUS DIGITAL', 'FOKUS AUTOMATIONS', 'ESCRÍBENOS']
              ).map((item, idx) => (
                <span className="accent-marquee-item" key={idx}>
                  <b>{item}</b>
                  <Pinwheel className="accent-pinwheel" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}

import { useEffect, useRef } from 'react'
import FokusNavbar from '../components/FokusNavbar'
import FokusFooter from '../components/FokusFooter'
import { Arrow, SvcIcon, LogoMark } from '../components/icons'
import { DIGITAL_SERVICES } from '../data/servicesData'
import { navigate } from '../navigation'
import { useLanguage } from '../context/LanguageContext'

export default function DigitalPage() {
  const cardsRef = useRef([])
  const { lang, isEn, t } = useLanguage()

  useEffect(() => {
    window.scrollTo(0, 0)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    )

    cardsRef.current.forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const handleExplore = (id) => (e) => {
    e.preventDefault()
    navigate(`digital/${id}`)
  }

  return (
    <div className="thimos-page services-page brand-digital-page">
      <FokusNavbar brand="fokus" theme="dark" active="digital" />

      {/* Hero Section */}
      <section className="services-hero-section">
        <div className="container">
          <div className="services-hero-top-badge">
            <span className="brand-tag-chip digital-chip">
              <span className="pixel-box" /> FOKUS DIGITAL · 01
            </span>
            <span className="brand-purpose-label">
              {isEn ? 'Brands engineered for the digital era.' : 'Marcas creadas para el mundo digital.'}
            </span>
          </div>

          <h1 className="giant-services-title blur-reveal digital-headline">
            {isEn ? 'DIGITAL PRESENCE' : 'PRESENCIA DIGITAL'}
          </h1>
          <p className="services-lead-subtext">
            {isEn
              ? 'Digitalization for high-growth brands: bespoke web platforms, living design systems, and conversion UX/UI engineered to be seen, trusted, and chosen.'
              : 'Digitalización para marcas y empresas: sitios web, interfaces de producto y todo lo digital que necesitan para ser vistas, generar confianza y ser encontradas.'}
          </p>
        </div>
      </section>

      {/* Grid de servicios */}
      <section className="services-grid-section">
        <div className="container">
          <div className="services-grid-2col">
            {DIGITAL_SERVICES.map((svc, index) => {
              const iconType =
                index === 0 ? 'code' : index === 1 ? 'award' : index === 2 ? 'hand' : 'net'

              return (
                <article
                  key={svc.id}
                  ref={(el) => (cardsRef.current[index] = el)}
                  className="thimos-service-card digital-service-card"
                  onClick={handleExplore(svc.id)}
                >
                  <div
                    className="service-card-media"
                    style={{
                      backgroundImage: `url(${svc.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  >
                    <div className="card-veil" />
                    <div className="card-badge-icon digital-badge" aria-hidden="true">
                      <SvcIcon name={iconType} />
                    </div>
                  </div>

                  <div className="service-card-info">
                    <span className="service-category-tag">{svc.category}</span>
                    <h3 className="service-card-title">{svc.title}</h3>
                    <p className="service-card-desc">{svc.summary}</p>

                    <div className="service-card-action">
                      <a
                        href={`/digital/${svc.id}`}
                        onClick={handleExplore(svc.id)}
                        className="thimos-pill-btn digital-btn"
                      >
                        <span className="pill-circle">
                          <Arrow size={13} />
                        </span>
                        <span className="pill-label">
                          {isEn ? 'Explore Capability' : 'Explorar Servicio'}
                        </span>
                      </a>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>

          {/* Switcher Card */}
          <div className="arm-switcher-card">
            <div className="switcher-info">
              <span className="switcher-subtitle">
                {isEn ? 'THE OTHER ARM OF FOKUS' : 'EL OTRO BRAZO DE FOKUS'}
              </span>
              <h3>
                {isEn ? 'Automations & Systems' : 'Automatizaciones y Sistemas'}
              </h3>
              <p>
                {isEn
                  ? 'Fokus Automations eliminates repetitive manual work with resilient multi-app pipelines and operational AI.'
                  : 'Fokus Automations reemplaza tareas manuales repetitivas con sistemas confiables que corren por su cuenta.'}
              </p>
            </div>
            <a
              href="/automations"
              onClick={(e) => {
                e.preventDefault()
                navigate('automations')
              }}
              className="thimos-pill-btn"
            >
              <span className="pill-circle" style={{ background: '#2EE59D', color: '#000' }}>
                <Arrow size={14} />
              </span>
              <span className="pill-label">
                {isEn ? 'Explore Fokus Automations' : 'Explorar Fokus Automations'}
              </span>
            </a>
          </div>
        </div>
      </section>

      <FokusFooter brand="digital" />
    </div>
  )
}

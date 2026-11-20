import { useEffect, useRef } from 'react'
import FokusNavbar from '../components/FokusNavbar'
import FokusFooter from '../components/FokusFooter'
import { Arrow, SvcIcon } from '../components/icons'
import { AUTOMATION_SERVICES } from '../data/servicesData'
import { navigate } from '../navigation'
import { useLanguage } from '../context/LanguageContext'

export default function AutomationsPage() {
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
    navigate(`automations/${id}`)
  }

  return (
    <div className="thimos-page services-page brand-automations-page">
      <FokusNavbar brand="fokus" theme="dark" active="automations" />

      {/* Hero Section */}
      <section className="services-hero-section">
        <div className="container">
          <div className="services-hero-top-badge">
            <span className="brand-tag-chip automations-chip">
              <span className="pixel-box" /> FOKUS AUTOMATIONS · 02
            </span>
            <span className="brand-purpose-label">
              {isEn ? 'Workflows and systems that run on their own.' : 'Flujos y sistemas que funcionan solos.'}
            </span>
          </div>

          <h1 className="giant-services-title blur-reveal automations-headline">
            {isEn ? 'BUSINESS AUTOMATIONS' : 'AUTOMATIZACIONES'}
          </h1>
          <p className="services-lead-subtext">
            {isEn
              ? 'Multi-app integrations, CRM pipelines, and operational AI designed to eliminate repetitive administrative labor and return valuable hours to your team.'
              : 'Integraciones, flujos de trabajo e inteligencia operativa diseñados para eliminar el trabajo manual repetitivo y devolverle horas al equipo.'}
          </p>
        </div>
      </section>

      {/* Grid de servicios */}
      <section className="services-grid-section">
        <div className="container">
          <div className="services-grid-2col">
            {AUTOMATION_SERVICES.map((svc, index) => {
              const iconType =
                index === 0 ? 'award' : index === 1 ? 'net' : index === 2 ? 'code' : 'hand'

              return (
                <article
                  key={svc.id}
                  ref={(el) => (cardsRef.current[index] = el)}
                  className="thimos-service-card automations-service-card"
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
                    <div className="card-badge-icon automations-badge" aria-hidden="true">
                      <SvcIcon name={iconType} />
                    </div>
                  </div>

                  <div className="service-card-info">
                    <span className="service-category-tag">{svc.category}</span>
                    <h3 className="service-card-title">{svc.title}</h3>
                    <p className="service-card-desc">{svc.summary}</p>

                    <div className="service-card-action">
                      <a
                        href={`/automations/${svc.id}`}
                        onClick={handleExplore(svc.id)}
                        className="thimos-pill-btn automations-btn"
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
                {isEn ? 'Digital Presence & Web Platforms' : 'Presencia Digital y Plataformas Web'}
              </h3>
              <p>
                {isEn
                  ? 'Fokus Digital crafts sub-second web platforms and living design systems that position your brand for commercial success.'
                  : 'Fokus Digital construye plataformas web de alto rendimiento y sistemas de marca para empresas modernas.'}
              </p>
            </div>
            <a
              href="/digital"
              onClick={(e) => {
                e.preventDefault()
                navigate('digital')
              }}
              className="thimos-pill-btn"
            >
              <span className="pill-circle" style={{ background: '#5B7CFF', color: '#fff' }}>
                <Arrow size={14} />
              </span>
              <span className="pill-label">
                {isEn ? 'Explore Fokus Digital' : 'Explorar Fokus Digital'}
              </span>
            </a>
          </div>
        </div>
      </section>

      <FokusFooter brand="automations" />
    </div>
  )
}

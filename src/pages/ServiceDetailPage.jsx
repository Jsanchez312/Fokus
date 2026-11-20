import { useEffect, useRef } from 'react'
import FokusNavbar from '../components/FokusNavbar'
import FokusFooter from '../components/FokusFooter'
import { Arrow, SvcIcon } from '../components/icons'
import { getServiceById, DIGITAL_SERVICES, AUTOMATION_SERVICES } from '../data/servicesData'
import { navigate } from '../navigation'
import { useLanguage } from '../context/LanguageContext'

export default function ServiceDetailPage({ slug }) {
  const { lang, isEn, t } = useLanguage()
  const service = getServiceById(slug) || DIGITAL_SERVICES[0]
  const isDigital = service.brand === 'Fokus Digital'
  const brandKey = isDigital ? 'digital' : 'automations'
  const siblingList = isDigital ? DIGITAL_SERVICES : AUTOMATION_SERVICES
  const relatedServices = siblingList.filter((s) => s.id !== service.id).slice(0, 2)

  const relatedCardsRef = useRef([])

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
      { threshold: 0.15 }
    )

    relatedCardsRef.current.forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [slug])

  const handleNav = (id) => (e) => {
    e.preventDefault()
    navigate(`${brandKey}/${id}`)
  }

  return (
    <div className={`thimos-page service-detail-page brand-${brandKey}-detail`}>
      <FokusNavbar brand="fokus" theme="dark" active="" />

      {/* Hero Banner */}
      <section className="service-detail-hero-section">
        <div className="container">
          <div
            className="detail-hero-banner"
            style={{
              backgroundImage: `linear-gradient(to top, rgba(13,14,17,0.78) 0%, rgba(13,14,17,0.2) 65%), url(${service.image})`
            }}
          >
            <div className="detail-hero-content">
              <div className="detail-badges-row">
                <span
                  className="detail-category-badge"
                  style={{
                    background: isDigital ? 'rgba(91, 124, 255, 0.28)' : 'rgba(46, 229, 157, 0.28)',
                    borderColor: service.accent,
                    color: isDigital ? '#a4beff' : '#2ee59d'
                  }}
                >
                  {service.brand.toUpperCase()} · {service.category}
                </span>
                <span className="detail-tagline-chip">{service.tagline}</span>
              </div>
              <h1 className="detail-hero-title">{service.title}</h1>
            </div>
          </div>
        </div>
      </section>

      {/* Service Body */}
      <section className="service-detail-body-section">
        <div className="container">
          <div className="detail-overview-grid">
            <div className="detail-lead-col">
              <span className="section-pill" style={{ borderColor: service.accent, color: service.accent }}>
                {isEn ? 'STRATEGIC APPROACH' : 'ENFOQUE ESTRATÉGICO'}
              </span>
              <h2 className="detail-lead-text">{service.lead}</h2>
              <p className="detail-overview-p">{service.overview}</p>
            </div>

            <div className="detail-metrics-col">
              <div className="metrics-card">
                <h4>{isEn ? 'VERIFIED OUTCOMES' : 'RESULTADOS COMPROBADOS'}</h4>
                <div className="metrics-list">
                  {service.metrics.map((m, idx) => (
                    <div key={idx} className="metric-item">
                      <b className="metric-num" style={{ color: service.accent }}>
                        {m.value}
                      </b>
                      <span className="metric-lbl">{m.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Deliverables Block */}
          <div className="detail-deliverables-block">
            <div className="block-header">
              <span className="section-pill" style={{ borderColor: service.accent, color: service.accent }}>
                {isEn ? 'SYSTEM DELIVERABLES' : 'ENTREGABLES DEL SISTEMA'}
              </span>
              <h3 className="block-title">
                {isEn ? 'What we engineer and deliver' : 'Lo que diseñamos y entregamos'}
              </h3>
            </div>

            <div className="deliverables-grid">
              {service.deliverables.map((item, idx) => (
                <div key={idx} className="deliverable-card">
                  <div className="card-number" style={{ color: service.accent }}>
                    0{idx + 1}
                  </div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Methodology Block */}
          <div className="detail-process-block">
            <div className="block-header">
              <span className="section-pill" style={{ borderColor: service.accent, color: service.accent }}>
                {isEn ? 'THE METHODOLOGY' : 'LA METODOLOGÍA'}
              </span>
              <h3 className="block-title">
                {isEn ? 'A phased roadmap to precision' : 'Una hoja de ruta por fases hacia la precisión'}
              </h3>
            </div>

            <div className="process-steps-grid">
              {service.process.map((p, idx) => (
                <div key={idx} className="step-card">
                  <span className="step-badge" style={{ background: service.accent, color: isDigital ? '#fff' : '#000' }}>
                    {p.step}
                  </span>
                  <h4>{p.title}</h4>
                  <p>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="detail-tech-block">
            <span className="tech-heading">
              {isEn ? 'Core Stack & Integrations' : 'Stack Principal e Integraciones'}
            </span>
            <div className="tech-tags">
              {service.technologies.map((tItem, idx) => (
                <span key={idx} className="tech-pill">
                  {tItem}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="related-services-section">
        <div className="container">
          <div className="related-header">
            <span className="section-pill">{isEn ? 'CONTINUE EXPLORING' : 'SIGUE EXPLORANDO'}</span>
            <h2 className="related-title">
              {isEn
                ? `RELATED ${isDigital ? 'DIGITAL' : 'AUTOMATION'} CAPABILITIES`
                : `CAPACIDADES ${isDigital ? 'DIGITALES' : 'DE AUTOMATIZACIÓN'} RELACIONADAS`}
            </h2>
          </div>

          <div className="services-grid-2col related-grid">
            {relatedServices.map((svc, idx) => (
              <article
                key={svc.id}
                ref={(el) => (relatedCardsRef.current[idx] = el)}
                className="thimos-service-card"
                onClick={handleNav(svc.id)}
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
                  <div className="card-badge-icon" aria-hidden="true" style={{ background: service.accent, color: isDigital ? '#fff' : '#000' }}>
                    <SvcIcon name={idx === 0 ? 'code' : 'award'} />
                  </div>
                </div>

                <div className="service-card-info">
                  <span className="service-category-tag">{svc.category}</span>
                  <h3 className="service-card-title">{svc.title}</h3>
                  <p className="service-card-desc">{svc.summary}</p>

                  <div className="service-card-action">
                    <a
                      href={`/${brandKey}/${svc.id}`}
                      onClick={handleNav(svc.id)}
                      className="thimos-pill-btn"
                    >
                      <span className="pill-circle" style={{ background: service.accent, color: isDigital ? '#fff' : '#000' }}>
                        <Arrow size={13} />
                      </span>
                      <span className="pill-label">
                        {isEn ? 'Explore Capability' : 'Explorar Servicio'}
                      </span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FokusFooter brand={brandKey} />
    </div>
  )
}

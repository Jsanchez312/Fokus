import { useState, useEffect, useRef } from 'react'
import FokusNavbar from '../components/FokusNavbar'
import FokusFooter from '../components/FokusFooter'
import { Arrow, Star, Pinwheel, CheckIcon } from '../components/icons'
import { PROJECTS_DATA, CLIENT_BRANDS } from '../data/projectsData'
import { navigate } from '../navigation'
import { useLanguage } from '../context/LanguageContext'

export default function ProjectsPage() {
  const [filter, setFilter] = useState('all')
  const { lang, isEn, t } = useLanguage()
  const cardsRef = useRef([])

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
      { threshold: 0.12 }
    )

    cardsRef.current.forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [filter])

  const filteredProjects =
    filter === 'all'
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.divisionKey === filter)

  const handleOpenProject = (slug) => (e) => {
    e.preventDefault()
    navigate(`projects/${slug}`)
  }

  return (
    <div className="thimos-page projects-page">
      <FokusNavbar brand="fokus" theme="light" active="projects" />

      {/* Hero Section */}
      <section className="projects-hero-section">
        <div className="container">
          <div className="projects-top-badge">
            <span className="brand-tag-chip digital-chip">
              <span className="pixel-box" /> {t('projects.badge')}
            </span>
            <span className="brand-purpose-label">{t('projects.purpose')}</span>
          </div>

          <h1 className="projects-hero-title">
            {t('projects.title')}
          </h1>

          <p className="services-lead-subtext" style={{ maxWidth: '820px', margin: '0 auto 2.8rem auto', textAlign: 'center' }}>
            {t('projects.lead')}
          </p>

          {/* Marcas que confían en Fokus */}
          <div className="brands-showcase-strip">
            <span className="brands-intro-tag">{t('projects.trusted')}</span>
            <div className="brands-chips-row">
              {CLIENT_BRANDS.map((b, idx) => (
                <div key={idx} className="brand-pill-badge">
                  <span className="brand-pill-dot" />
                  <strong>{b.name}</strong>
                  <span className="brand-pill-cat">{b.tag}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Filtros de proyectos */}
          <div className="projects-filter-bar">
            <button
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              {t('projects.filter.all')} ({PROJECTS_DATA.length})
            </button>
            <button
              className={`filter-btn ${filter === 'digital' ? 'active' : ''}`}
              onClick={() => setFilter('digital')}
            >
              {t('projects.filter.digital')} ({PROJECTS_DATA.filter((p) => p.divisionKey === 'digital').length})
            </button>
            <button
              className={`filter-btn ${filter === 'automations' ? 'active' : ''}`}
              onClick={() => setFilter('automations')}
            >
              {t('projects.filter.automations')} ({PROJECTS_DATA.filter((p) => p.divisionKey === 'automations').length})
            </button>
          </div>
        </div>
      </section>

      {/* Grid de Proyectos */}
      <section className="projects-grid-section">
        <div className="container">
          <div className="projects-cards-list">
            {filteredProjects.map((proj, idx) => (
              <article
                key={proj.slug}
                ref={(el) => (cardsRef.current[idx] = el)}
                className="project-showcase-card"
                onClick={handleOpenProject(proj.slug)}
              >
                <div className="project-card-image-box">
                  <img
                    src={proj.heroImage}
                    alt={proj.title}
                    className="project-cover-img"
                  />
                  <div className="project-card-overlay-badge">
                    <span
                      className="division-pill"
                      style={{
                        background: proj.divisionKey === 'digital' ? '#5B7CFF' : '#2EE59D',
                        color: proj.divisionKey === 'digital' ? '#fff' : '#000'
                      }}
                    >
                      {proj.badge}
                    </span>
                    <span className="project-year-pill">{proj.year}</span>
                  </div>
                </div>

                <div className="project-card-content">
                  <div className="project-meta-top">
                    <span className="project-category">{proj.category}</span>
                    <span className="project-client-name">{proj.brandName}</span>
                  </div>

                  <h2 className="project-card-title">{proj.title}</h2>
                  <p className="project-card-summary">{proj.summary}</p>

                  {/* Métricas clave */}
                  <div className="project-card-metrics-row">
                    {proj.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="mini-metric-item">
                        <span className="mini-metric-val">{m.value}</span>
                        <span className="mini-metric-lbl">{m.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Reseña de cliente destacada */}
                  <div className="project-card-review-snippet">
                    <div className="snippet-stars">
                      {[0, 1, 2, 3, 4].map((s) => (
                        <Star key={s} />
                      ))}
                    </div>
                    <p className="snippet-quote">"{proj.client.quote}"</p>
                    <div className="snippet-author">
                      <img src={proj.client.avatar} alt={proj.client.name} />
                      <div>
                        <strong>{proj.client.name}</strong>
                        <span>{proj.client.role} · {proj.client.company}</span>
                      </div>
                    </div>
                  </div>

                  <div className="project-card-footer-action">
                    <a
                      href={`/projects/${proj.slug}`}
                      onClick={handleOpenProject(proj.slug)}
                      className="thimos-pill-btn"
                    >
                      <span
                        className="pill-circle"
                        style={{
                          background: proj.accentColor,
                          color: proj.divisionKey === 'digital' ? '#fff' : '#000'
                        }}
                      >
                        <Arrow size={14} />
                      </span>
                      <span className="pill-label">{t('projects.viewCase')}</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Banner de llamada a la acción */}
          <div className="arm-switcher-card" style={{ marginTop: '5rem' }}>
            <div className="switcher-info">
              <span className="switcher-subtitle">
                {isEn ? 'READY TO BUILD YOUR NEXT SUCCESS STORY?' : '¿LISTO PARA CONSTRUIR TU PRÓXIMO ÉXITO?'}
              </span>
              <h3>
                {isEn
                  ? 'We place your attention and technology where it counts.'
                  : 'Ponemos la atención y la tecnología de tu empresa donde cuenta.'}
              </h3>
              <p>
                {isEn
                  ? 'Book a strategic session with our directors at Fokus Digital and Fokus Automations to analyze your specific objectives.'
                  : 'Agenda una sesión estratégica con nuestros directores de Fokus Digital y Fokus Automations para analizar tu caso específico.'}
              </p>
            </div>
            <a
              href="/contact"
              onClick={(e) => {
                e.preventDefault()
                navigate('contact')
              }}
              className="thimos-pill-btn"
            >
              <span className="pill-circle" style={{ background: '#d8ff3e', color: '#000' }}>
                <Arrow size={14} />
              </span>
              <span className="pill-label">
                {isEn ? 'Start Conversation' : 'Iniciar Conversación'}
              </span>
            </a>
          </div>
        </div>
      </section>

      <FokusFooter brand="fokus" />
    </div>
  )
}

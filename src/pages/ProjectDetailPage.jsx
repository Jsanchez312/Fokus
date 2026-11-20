import { useEffect } from 'react'
import FokusNavbar from '../components/FokusNavbar'
import FokusFooter from '../components/FokusFooter'
import { Arrow, Star, CheckIcon } from '../components/icons'
import { PROJECTS_DATA } from '../data/projectsData'
import { navigate } from '../navigation'
import { useLanguage } from '../context/LanguageContext'

export default function ProjectDetailPage({ slug }) {
  const { lang, isEn, t } = useLanguage()
  const project =
    PROJECTS_DATA.find((p) => p.slug === slug) || PROJECTS_DATA[0]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  const currentIndex = PROJECTS_DATA.findIndex((p) => p.slug === project.slug)
  const nextProject =
    PROJECTS_DATA[(currentIndex + 1) % PROJECTS_DATA.length]

  const facts = isEn
    ? [
        { label: 'Client', value: project.brandName },
        { label: 'Industry', value: project.industry },
        { label: 'Year', value: project.year },
        { label: 'Timeline', value: project.duration },
        { label: 'Division', value: project.division },
        { label: 'Location', value: project.location }
      ]
    : [
        { label: 'Cliente', value: project.brandName },
        { label: 'Industria', value: project.industry },
        { label: 'Año', value: project.year },
        { label: 'Duración', value: project.duration },
        { label: 'División', value: project.division },
        { label: 'Sede del trabajo', value: project.location }
      ]

  return (
    <div className="thimos-page project-detail-page">
      <FokusNavbar
        brand={project.divisionKey}
        theme="light"
        active="projects"
      />

      <section className="project-detail-hero">
        <div className="container">
          <nav className="detail-breadcrumb">
            <a
              href="/projects"
              onClick={(e) => {
                e.preventDefault()
                navigate('projects')
              }}
            >
              {t('projectDetail.back')}
            </a>
            <span className="crumb-sep">/</span>
            <span>{project.brandName}</span>
          </nav>

          <div className="detail-header-block">
            <div className="detail-badges-row">
              <span
                className="brand-tag-chip"
                style={{
                  background:
                    project.divisionKey === 'digital'
                      ? 'rgba(91, 124, 255, 0.12)'
                      : 'rgba(46, 229, 157, 0.15)',
                  color: project.accentColor
                }}
              >
                <span className="pixel-box" /> {project.badge}
              </span>
              <span className="detail-year-tag">{project.year}</span>
              <span className="detail-cat-tag">{project.category}</span>
            </div>

            <h1 className="detail-giant-title">{project.title}</h1>
            <p className="detail-lead-summary">{project.summary}</p>
          </div>

          <div className="detail-hero-media-frame">
            <img
              src={project.heroImage}
              alt={project.title}
              className="detail-hero-media-img"
            />
          </div>

          <div className="detail-metrics-grid">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="metric-box-card">
                <span className="metric-box-val" style={{ color: project.accentColor }}>
                  {m.value}
                </span>
                <span className="metric-box-lbl">{m.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="project-body-section">
        <div className="container project-body-grid">
          <div className="project-body-main">
            <article className="body-block">
              <span className="block-overline">{t('projectDetail.facts')}</span>
              <h2 className="block-heading">{t('projectDetail.factsTitle')}</h2>
              <div className="project-facts-grid">
                {facts.map((f) => (
                  <div key={f.label} className="project-fact">
                    <span className="project-fact-label">{f.label}</span>
                    <strong className="project-fact-value">{f.value}</strong>
                  </div>
                ))}
              </div>
            </article>

            {(project.story || []).map((block, i) => (
              <article className="body-block" key={block.heading}>
                <span className="block-overline">
                  {String(i + 1).padStart(2, '0')} · {block.heading.toUpperCase()}
                </span>
                <h2 className="block-heading">{block.heading}</h2>
                <p className="block-text">{block.body}</p>
              </article>
            ))}

            <article className="body-block">
              <span className="block-overline">{t('projectDetail.challengeOverline')}</span>
              <h2 className="block-heading">{t('projectDetail.challengeTitle')}</h2>
              <p className="block-text">{project.challenge}</p>
            </article>

            <article className="body-block">
              <span className="block-overline">{t('projectDetail.solutionOverline')}</span>
              <h2 className="block-heading">{t('projectDetail.solutionTitle')}</h2>
              <p className="block-text">{project.solution}</p>
            </article>

            <div className="project-detail-gallery">
              {project.galleryImages.slice(1).map((img, i) => (
                <div key={i} className="gallery-thumb-frame">
                  <img src={img} alt={`${project.title} vista ${i + 1}`} />
                </div>
              ))}
            </div>

            <div className="project-reviews-block">
              <span className="block-overline">{t('projectDetail.reviewsOverline')}</span>
              <h2 className="block-heading">{t('projectDetail.reviewsTitle')}</h2>
              <div className="project-reviews-list">
                {(project.reviews || [project.client]).map((review) => (
                  <div className="verified-review-card" key={`${review.name}-${review.role}`}>
                    <div className="review-card-top">
                      <div className="review-stars-row">
                        {[...Array(review.rating || 5)].map((_, i) => (
                          <Star key={i} />
                        ))}
                      </div>
                      <span className="verified-badge">
                        <CheckIcon size={14} /> {t('projectDetail.verified')}
                      </span>
                    </div>

                    <blockquote className="client-quote-text">
                      "{review.quote}"
                    </blockquote>

                    <div className="client-profile-footer">
                      <img
                        src={review.avatar}
                        alt={review.name}
                        className="client-avatar-img"
                      />
                      <div className="client-meta-info">
                        <h4 className="client-author-name">{review.name}</h4>
                        <p className="client-author-role">
                          {review.role} · <strong>{review.company}</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="project-sidebar">
            <div className="sidebar-card">
              <h3 className="sidebar-title">{t('projectDetail.deliverables')}</h3>
              <ul className="deliverables-check-list">
                {project.deliverables.map((item, idx) => (
                  <li key={idx}>
                    <span className="check-bullet" style={{ background: project.accentColor }}>
                      <CheckIcon size={13} />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="sidebar-divider" />

              <h3 className="sidebar-title">{t('projectDetail.tech')}</h3>
              <div className="tech-tags-cloud">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="sidebar-divider" />

              <div className="sidebar-cta-box">
                <h4>{t('projectDetail.ctaTitle')}</h4>
                <p>{t('projectDetail.ctaDesc')}</p>
                <a
                  href="/contact"
                  onClick={(e) => {
                    e.preventDefault()
                    navigate('contact')
                  }}
                  className="thimos-pill-btn sidebar-btn"
                >
                  <span className="pill-circle" style={{ background: project.accentColor, color: project.divisionKey === 'digital' ? '#fff' : '#000' }}>
                    <Arrow size={14} />
                  </span>
                  <span className="pill-label">{t('projectDetail.ctaBtn')}</span>
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="next-project-teaser container">
        <div className="next-project-card" onClick={() => navigate(`projects/${nextProject.slug}`)}>
          <div className="next-meta">
            <span className="next-lbl">{t('projectDetail.nextLabel')}</span>
            <h3 className="next-title">{nextProject.title}</h3>
            <p className="next-desc">{nextProject.summary}</p>
          </div>
          <div className="next-action">
            <span className="thimos-pill-btn">
              <span className="pill-circle" style={{ background: nextProject.accentColor, color: '#000' }}>
                <Arrow size={14} />
              </span>
              <span className="pill-label">
                {isEn ? `Explore ${nextProject.brandName}` : `Ver ${nextProject.brandName}`}
              </span>
            </span>
          </div>
        </div>
      </section>

      <FokusFooter brand={project.divisionKey} />
    </div>
  )
}

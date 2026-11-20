import { useState, useEffect, useRef } from 'react'
import FokusNavbar from '../components/FokusNavbar'
import FokusFooter from '../components/FokusFooter'
import { Arrow, ClockIcon, UserIcon, Pinwheel } from '../components/icons'
import { BLOG_POSTS } from '../data/blogData'
import { navigate } from '../navigation'
import { useLanguage } from '../context/LanguageContext'

export default function BlogPage() {
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

  const filteredPosts =
    filter === 'all'
      ? BLOG_POSTS
      : BLOG_POSTS.filter((p) => p.division === filter)

  const featured = BLOG_POSTS[0]

  const handleOpenPost = (slug) => (e) => {
    e.preventDefault()
    navigate(`articles/${slug}`)
  }

  return (
    <div className="thimos-page blog-page">
      <FokusNavbar brand="fokus" theme="light" active="articles" />

      {/* Hero Header */}
      <section className="blog-hero-section">
        <div className="container">
          <div className="projects-top-badge">
            <span className="brand-tag-chip digital-chip">
              <span className="pixel-box" /> {t('blog.badge')}
            </span>
            <span className="brand-purpose-label">{t('blog.purpose')}</span>
          </div>

          <h1 className="projects-hero-title">{t('blog.title')}</h1>

          <p className="services-lead-subtext" style={{ maxWidth: '780px', margin: '0 auto 2.5rem auto', textAlign: 'center' }}>
            {t('blog.lead')}
          </p>

          {/* Filter Bar */}
          <div className="projects-filter-bar">
            <button
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              {t('blog.filter.all')} ({BLOG_POSTS.length})
            </button>
            <button
              className={`filter-btn ${filter === 'digital' ? 'active' : ''}`}
              onClick={() => setFilter('digital')}
            >
              Fokus Digital ({BLOG_POSTS.filter((p) => p.division === 'digital').length})
            </button>
            <button
              className={`filter-btn ${filter === 'automations' ? 'active' : ''}`}
              onClick={() => setFilter('automations')}
            >
              Fokus Automations ({BLOG_POSTS.filter((p) => p.division === 'automations').length})
            </button>
          </div>
        </div>
      </section>

      {/* Featured Article Banner */}
      {filter === 'all' && (
        <section className="featured-article-section">
          <div className="container">
            <article
              className="featured-article-card"
              onClick={handleOpenPost(featured.slug)}
            >
              <div
                className="featured-media-box"
                style={{
                  backgroundImage: `url(${featured.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <span className="featured-pill-tag">{t('blog.featuredBadge')}</span>
              </div>

              <div className="featured-content-box">
                <div className="featured-meta-top">
                  <span className="featured-cat-tag">
                    {featured.category[lang] || featured.category.es}
                  </span>
                  <span className="featured-read-time">
                    <ClockIcon /> {featured.readTime[lang] || featured.readTime.es}
                  </span>
                </div>

                <h2 className="featured-card-title">
                  {featured.title[lang] || featured.title.es}
                </h2>

                <p className="featured-card-excerpt">
                  {featured.excerpt[lang] || featured.excerpt.es}
                </p>

                <div className="featured-author-row">
                  <img
                    src={featured.author.avatar}
                    alt={featured.author.name}
                    className="featured-author-avatar"
                  />
                  <div>
                    <strong className="featured-author-name">{featured.author.name}</strong>
                    <span className="featured-author-role">
                      {featured.author.role[lang] || featured.author.role.es}
                    </span>
                  </div>
                </div>

                <div className="featured-action-wrap">
                  <span className="thimos-pill-btn">
                    <span className="pill-circle" style={{ background: '#5B7CFF', color: '#fff' }}>
                      <Arrow size={14} />
                    </span>
                    <span className="pill-label">{t('blog.readArticle')}</span>
                  </span>
                </div>
              </div>
            </article>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="blog-grid-section">
        <div className="container">
          <div className="blog-posts-grid">
            {filteredPosts.map((post, idx) => (
              <article
                key={post.slug}
                ref={(el) => (cardsRef.current[idx] = el)}
                className="blog-card-item"
                onClick={handleOpenPost(post.slug)}
              >
                <div className="blog-card-thumb-frame">
                  <img
                    src={post.image}
                    alt={post.title[lang] || post.title.es}
                    className="blog-card-img"
                  />
                  <div className="blog-card-badge-chip">
                    <span
                      className="division-pill"
                      style={{
                        background: post.division === 'digital' ? '#5B7CFF' : '#2EE59D',
                        color: post.division === 'digital' ? '#fff' : '#000'
                      }}
                    >
                      {post.badge}
                    </span>
                  </div>
                </div>

                <div className="blog-card-body">
                  <div className="blog-card-meta-line">
                    <span className="blog-card-category">
                      {post.category[lang] || post.category.es}
                    </span>
                    <span className="blog-card-date">
                      {post.date[lang] || post.date.es}
                    </span>
                  </div>

                  <h3 className="blog-card-title">
                    {post.title[lang] || post.title.es}
                  </h3>

                  <p className="blog-card-summary">
                    {post.excerpt[lang] || post.excerpt.es}
                  </p>

                  <div className="blog-card-footer">
                    <div className="blog-author-mini">
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="blog-mini-avatar"
                      />
                      <span>{post.author.name}</span>
                    </div>

                    <span className="blog-read-time-pill">
                      <ClockIcon /> {post.readTime[lang] || post.readTime.es}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="arm-switcher-card" style={{ marginTop: '5rem' }}>
            <div className="switcher-info">
              <span className="switcher-subtitle">
                {isEn ? 'DO YOU WANT MEASURABLE DIGITAL IMPACT?' : '¿BUSCAS IMPACTO DIGITAL MEDIBLE?'}
              </span>
              <h3>
                {isEn
                  ? 'We turn technology into commercial leverage for modern brands.'
                  : 'Convertimos la tecnología en una ventaja comercial real para tu empresa.'}
              </h3>
              <p>
                {isEn
                  ? 'Schedule a 30-minute consultation with our directors to discuss your web architecture and workflow automation.'
                  : 'Agenda una sesión de 30 minutos con nuestros directores para analizar tu arquitectura web y automatizaciones operativas.'}
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

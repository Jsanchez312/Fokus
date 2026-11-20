import { useState, useEffect } from 'react'
import { Arrow, LogoMark } from './icons'
import { navigate } from '../navigation'
import { useLanguage } from '../context/LanguageContext'
import LangSwitcher from './LangSwitcher'

export default function FokusNavbar({
  brand = 'fokus',
  theme = 'light',
  active = ''
}) {
  const { isEn, t } = useLanguage()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Track scroll state for glass shadow and blur
  useEffect(() => {
    const handleScroll = () => {
      const y = window.pageYOffset || document.documentElement.scrollTop
      setScrolled(y > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile drawer on resize to desktop or on Escape key
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 860 && mobileOpen) {
        setMobileOpen(false)
      }
    }
    const handleKey = (e) => {
      if (e.key === 'Escape') setMobileOpen(false)
    }
    window.addEventListener('resize', handleResize)
    window.addEventListener('keydown', handleKey)
    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('keydown', handleKey)
    }
  }, [mobileOpen])

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const handleNav = (path) => (e) => {
    e.preventDefault()
    setMobileOpen(false)
    if (path.startsWith('#')) {
      const el = document.querySelector(path)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        return
      }
      navigate('')
      setTimeout(() => {
        const target = document.querySelector(path)
        if (target) target.scrollIntoView({ behavior: 'smooth' })
      }, 100)
      return
    }
    navigate(path)
  }

  const accentColor =
    brand === 'digital'
      ? '#5B7CFF'
      : brand === 'automations'
      ? '#2EE59D'
      : '#FF6A2B'

  return (
    <header
      className={`fokus-nav nav-${theme} brand-${brand} ${mobileOpen ? 'drawer-open' : ''} ${
        scrolled ? 'nav-scrolled' : ''
      }`}
    >
      <div className="container nav-inner">
        {/* Brand Lockup: 4 corner brackets + lowercase wordmark + descriptor */}
        <a href="/" onClick={handleNav('')} className="fokus-logo-link">
          <LogoMark
            className="nav-brand-mark"
            variant={brand}
            accent={accentColor}
          />
          <div className="nav-brand-text">
            <span className="nav-fokus-name">fokus</span>
            {brand === 'digital' && <span className="nav-descriptor digital">{t('nav.descriptor.digital')}</span>}
            {brand === 'automations' && (
              <span className="nav-descriptor automations">{t('nav.descriptor.automations')}</span>
            )}
          </div>
        </a>

        {/* Navigation items (Desktop) */}
        <nav className="nav-menu">
          <a
            href="/about"
            onClick={handleNav('about')}
            className={`nav-item ${active === 'about' ? 'active' : ''}`}
          >
            {t('nav.about')}
          </a>
          <a
            href="/digital"
            onClick={handleNav('digital')}
            className={`nav-item ${active === 'digital' ? 'active' : ''}`}
          >
            {t('nav.digital')}
          </a>
          <a
            href="/automations"
            onClick={handleNav('automations')}
            className={`nav-item ${active === 'automations' ? 'active' : ''}`}
          >
            {t('nav.automations')}
          </a>
          <a
            href="/projects"
            onClick={handleNav('projects')}
            className={`nav-item ${active === 'projects' ? 'active' : ''}`}
          >
            {t('nav.projects')}
          </a>
          <a
            href="/articles"
            onClick={handleNav('articles')}
            className={`nav-item ${active === 'insights' || active === 'articles' ? 'active' : ''}`}
          >
            {t('nav.articles')}
          </a>
        </nav>

        {/* Actions lockup: Language switcher + CTA button + Mobile Hamburger */}
        <div className="nav-actions-group">
          <LangSwitcher theme={theme} />

          <a
            href="/contact"
            className={`fokus-cta-btn nav-desktop-cta ${active === 'contact' ? 'is-active-btn' : ''}`}
            onClick={handleNav('contact')}
            style={{ '--btn-accent': accentColor }}
          >
            <span className="fokus-cta-circle">
              <Arrow size={14} />
            </span>
            <span className="fokus-cta-label">{t('nav.cta')}</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className={`nav-hamburger-btn ${mobileOpen ? 'is-open' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={mobileOpen}
          >
            <span className="hamburger-line top-line" />
            <span className="hamburger-line mid-line" />
            <span className="hamburger-line btm-line" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <div className={`nav-mobile-drawer ${mobileOpen ? 'is-visible' : ''}`}>
        <div className="mobile-drawer-inner">
          <nav className="mobile-nav-links">
            <a
              href="/about"
              onClick={handleNav('about')}
              className={`mobile-nav-link ${active === 'about' ? 'active' : ''}`}
            >
              <span>01</span>
              <strong>{t('nav.about')}</strong>
            </a>
            <a
              href="/digital"
              onClick={handleNav('digital')}
              className={`mobile-nav-link ${active === 'digital' ? 'active' : ''}`}
            >
              <span>02</span>
              <strong>{t('nav.digital')}</strong>
            </a>
            <a
              href="/automations"
              onClick={handleNav('automations')}
              className={`mobile-nav-link ${active === 'automations' ? 'active' : ''}`}
            >
              <span>03</span>
              <strong>{t('nav.automations')}</strong>
            </a>
            <a
              href="/projects"
              onClick={handleNav('projects')}
              className={`mobile-nav-link ${active === 'projects' ? 'active' : ''}`}
            >
              <span>04</span>
              <strong>{t('nav.projects')}</strong>
            </a>
            <a
              href="/articles"
              onClick={handleNav('articles')}
              className={`mobile-nav-link ${active === 'insights' || active === 'articles' ? 'active' : ''}`}
            >
              <span>05</span>
              <strong>{t('nav.articles')}</strong>
            </a>
          </nav>

          <div className="mobile-drawer-footer">
            <a
              href="/contact"
              className="mobile-cta-btn"
              onClick={handleNav('contact')}
              style={{ '--btn-accent': accentColor }}
            >
              <span>{t('nav.cta')}</span>
              <span className="mobile-cta-arrow">
                <Arrow size={16} />
              </span>
            </a>
            <p className="mobile-drawer-brand-note">
              Fokus Group · {isEn ? 'Two Specialized Divisions.' : 'Dos Divisiones Especializadas.'}
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}

import { Arrow } from './icons'
import { navigate } from '../navigation'

export default function ThimosNavbar({ variant = 'light', active = '' }) {
  const isDark = variant === 'dark'

  const handleNav = (path) => (e) => {
    e.preventDefault()
    navigate(path)
  }

  return (
    <header className={`thimos-nav ${isDark ? 'nav-dark' : 'nav-light'}`}>
      <div className="container nav-inner">
        <a href="/" onClick={handleNav('')} className="thimos-logo">
          THIMOS
        </a>

        <nav className="nav-menu">
          <a
            href="/about"
            onClick={handleNav('about')}
            className={`nav-item ${active === 'about' ? 'active' : ''}`}
          >
            NOSOTROS
          </a>
          <a
            href="/services"
            onClick={handleNav('services')}
            className={`nav-item ${active === 'services' ? 'active' : ''}`}
          >
            SERVICIOS
          </a>
          <a
            href="/projects"
            onClick={(e) => {
              e.preventDefault()
              navigate('projects')
            }}
            className={`nav-item ${active === 'projects' ? 'active' : ''}`}
          >
            PROYECTOS
          </a>
          <a
            href="/#articles"
            onClick={(e) => {
              e.preventDefault()
              navigate('')
            }}
            className={`nav-item ${active === 'blog' ? 'active' : ''}`}
          >
            ARTÍCULOS
          </a>
          <a
            href="/digital"
            onClick={(e) => {
              e.preventDefault()
              navigate('digital')
            }}
            className={`nav-item ${active === 'pages' ? 'active' : ''}`}
          >
            DIGITAL
          </a>
        </nav>

        <a href="/contact" className="thimos-cta-btn" onClick={handleNav('contact')}>
          <span className="cta-circle">
            <Arrow size={14} />
          </span>
          <span className="cta-text">HABLEMOS</span>
        </a>
      </div>
    </header>
  )
}

import { Btn, Marquee, TileBg } from './shared'
import { LogoMark, Pinwheel } from './icons'
import { navigate } from '../navigation'
import { useLanguage } from '../context/LanguageContext'

export default function Footer() {
  const { lang, isEn } = useLanguage()

  const linkColumns = isEn
    ? [
        [
          { label: 'Home', path: '' },
          { label: 'About Fokus', path: 'about' },
          { label: 'Capabilities', path: 'digital' }
        ],
        [
          { label: 'Fokus Digital', path: 'digital' },
          { label: 'Fokus Automations', path: 'automations' },
          { label: 'Projects & Work', path: 'projects' }
        ],
        [
          { label: 'Articles & Insights', path: 'articles' },
          { label: 'Methodology', path: '#process' },
          { label: 'Contact', path: 'contact' }
        ]
      ]
    : [
        [
          { label: 'Inicio', path: '' },
          { label: 'Sobre Fokus', path: 'about' },
          { label: 'Capacidades', path: 'digital' }
        ],
        [
          { label: 'Fokus Digital', path: 'digital' },
          { label: 'Fokus Automations', path: 'automations' },
          { label: 'Proyectos', path: 'projects' }
        ],
        [
          { label: 'Artículos & Insights', path: 'articles' },
          { label: 'Metodología', path: '#process' },
          { label: 'Contacto', path: 'contact' }
        ]
      ]

  const handleLink = (path) => (e) => {
    e.preventDefault()
    if (path.startsWith('#')) {
      const el = document.querySelector(path)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate(path)
    }
  }

  return (
    <footer className="footer">
      <TileBg cols={11} rows={6} />
      <div className="footer-top container">
        <div className="footer-left">
          <h4>
            {isEn ? (
              <>
                FOKUS IS A SPECIALIZED GROUP
                <br />
                ENGINEERING HIGH-IMPACT WEB PLATFORMS &
                <br />
                AUTOMATED SYSTEMS THAT GROW YOUR BUSINESS.
              </>
            ) : (
              <>
                FOKUS ES UN GRUPO ESPECIALIZADO
                <br />
                CONSTRUYENDO EXPERIENCIAS DIGITALES Y
                <br />
                SISTEMAS QUE HACEN AVANZAR TU NEGOCIO.
              </>
            )}
          </h4>
          <Btn onClick={() => navigate('contact')}>
            {isEn ? 'START A CONVERSATION' : 'INICIAR CONVERSACIÓN'}
          </Btn>
        </div>
        <div className="footer-links">
          {linkColumns.map((col, i) => (
            <ul key={i}>
              {col.map((item) => (
                <li key={item.label}>
                  <a href={`/${item.path}`} onClick={handleLink(item.path)}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      <div className="roller container" aria-label="Fokus">
        <div className="roller-track">
          {[0, 1, 2].map((k) => (
            <div className="roller-row" key={k}>
              <LogoMark className="roller-mark" />
              <span>fokus</span>
            </div>
          ))}
        </div>
      </div>

      <div className="copyright">
        <p>
          Copyright © <a href="#top">Fokus</a>.{' '}
          {isEn
            ? 'One sharp focus. Two specialized divisions.'
            : 'Un solo enfoque. Dos divisiones expertas.'}
        </p>
      </div>

      <div
        className="lime-band"
        style={{ cursor: 'pointer' }}
        onClick={() => navigate('contact')}
      >
        <div className="lime-track">
          {[0, 1, 2].map((k) => (
            <div className="lime-row" key={k}>
              {(isEn
                ? ['FOKUS DIGITAL', 'FOKUS AUTOMATIONS', "LET'S TALK", 'START PROJECT']
                : ['FOKUS DIGITAL', 'FOKUS AUTOMATIONS', 'HABLEMOS', 'CONTACTO']
              ).map((t, i) => (
                <span key={i}>
                  <Pinwheel className="lime-icon" />
                  <b>{t}</b>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}

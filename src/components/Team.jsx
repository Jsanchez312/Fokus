import { ScrollTitle } from './shared'
import { Linkedin } from './icons'
import { useScrollProgress, lerp } from '../hooks'
import { useLanguage } from '../context/LanguageContext'
import t1 from '../assets/team1.jpg'
import t2 from '../assets/team2.jpg'
import t3 from '../assets/team3.jpg'
import t4 from '../assets/team4.jpg'
import t5 from '../assets/team5.jpg'

const teamItems = [
  {
    n: { es: 'ESTRATEGIA DIGITAL', en: 'DIGITAL STRATEGY' },
    r: { es: 'Encontrar la oportunidad comercial', en: 'Uncovering commercial opportunity' },
    img: t1,
    w: 18.6
  },
  {
    n: { es: 'EXPERIENCIAS WEB', en: 'WEB EXPERIENCES' },
    r: { es: 'Hacer visible y deseable la marca', en: 'Making brands visible & desirable' },
    img: t2,
    w: 20.7
  },
  {
    n: { es: 'DISEÑO DE AUTOMATIZACIÓN', en: 'AUTOMATION ARCHITECTURE' },
    r: { es: 'Eliminar el trabajo manual repetitivo', en: 'Eliminating repetitive manual labor' },
    img: t3,
    w: 20.5
  },
  {
    n: { es: 'INTEGRACIONES API', en: 'API INTEGRATIONS' },
    r: { es: 'Conectar las herramientas clave', en: 'Connecting mission-critical tools' },
    img: t4,
    w: 17.6
  },
  {
    n: { es: 'OPTIMIZACIÓN & TELEMETRÍA', en: 'OPTIMIZATION & TELEMETRY' },
    r: { es: 'Mantener sistemas en marcha', en: 'Keeping systems operating 24/7' },
    img: t5,
    w: 18.6
  },
]

export default function Team() {
  const { lang, isEn, t } = useLanguage()
  const row = useScrollProgress((el, p) => {
    // Only scroll transform on desktop
    if (window.innerWidth <= 820) {
      el.style.transform = 'none'
      return
    }
    el.style.transform = `translateX(${lerp(5, -7, p)}vw)`
  }, { start: 1.1, end: -0.2 })

  return (
    <section className="team" id="team">
      <ScrollTitle badge={t('home.team.badge')}>
        {t('home.team.title')}
      </ScrollTitle>

      <div className="team-swipe-hint">
        <span>{isEn ? '← Swipe to explore team →' : '← Desliza para conocer al equipo →'}</span>
      </div>

      <div className="team-row" ref={row}>
        {teamItems.map((m, idx) => (
          <article className="member" key={idx} style={{ '--w': `${m.w}vw` }}>
            <div className="member-img">
              <img src={m.img} alt={m.n[lang] || m.n.es} />
              <a className="in-btn" href="#team" aria-label="LinkedIn">
                <Linkedin />
              </a>
            </div>
            <h4>{m.n[lang] || m.n.es}</h4>
            <p>{m.r[lang] || m.r.es}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

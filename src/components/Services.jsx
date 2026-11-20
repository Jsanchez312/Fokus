import { ScrollTitle } from './shared'
import { SvcIcon } from './icons'
import { navigate } from '../navigation'
import { useLanguage } from '../context/LanguageContext'
import s1 from '../assets/svc1.jpg'
import s2 from '../assets/svc2.jpg'
import s4 from '../assets/svc4.jpg'
import projAether from '../assets/proj-aether.jpg'

const serviceItems = [
  {
    icon: 'hand',
    path: 'digital',
    title: { es: 'FOKUS DIGITAL', en: 'FOKUS DIGITAL' },
    img: s1,
    text: {
      es: 'Digitalización para marcas y empresas: plataformas web y todo lo necesario para ser vistas, generar confianza y ser encontradas.',
      en: 'Digitalization for high-growth brands: bespoke web platforms engineered to be seen, trusted, and chosen.'
    }
  },
  {
    icon: 'award',
    path: 'automations',
    title: { es: 'FOKUS AUTOMATIONS', en: 'FOKUS AUTOMATIONS' },
    img: s2,
    text: {
      es: 'Automatizaciones que eliminan tareas repetitivas, permitiendo que tu equipo se concentre en el trabajo estratégico.',
      en: 'Workflow automations eliminating repetitive manual tasks, freeing your team for strategic commercial execution.'
    }
  },
  {
    icon: 'code',
    path: 'digital',
    title: { es: 'PRESENCIA DIGITAL', en: 'DIGITAL PRESENCE' },
    img: projAether,
    text: {
      es: 'Experiencias web veloces y atractivas que posicionan marcas con solidez comercial y máxima elegancia técnica.',
      en: 'Sub-second web platforms and design systems that establish commercial authority with modern technical elegance.'
    }
  },
  {
    icon: 'net',
    path: 'automations',
    title: { es: 'SISTEMAS INTELIGENTES', en: 'INTELLIGENT SYSTEMS' },
    img: s4,
    text: {
      es: 'Flujos de trabajo, integraciones y sistemas que operan de forma autónoma, confiable y orientada a métricas.',
      en: 'Self-operating multi-app pipelines, custom API bridges, and automated telemetry tracking key outcomes.'
    }
  },
]

export default function Services() {
  const { lang, isEn } = useLanguage()

  return (
    <section className="services" id="services">
      <ScrollTitle
        badge={isEn ? 'CORE DIVISIONS' : 'DIVISIONES'}
        onBadgeClick={() => navigate('digital')}
      >
        {isEn ? 'SERVICES' : 'SERVICIOS'}
      </ScrollTitle>
      <div className="svc-grid container">
        {serviceItems.map((it, i) => (
          <article
            key={i}
            className="svc-card has-img"
            onClick={() => navigate(it.path)}
          >
            <div
              className="svc-bg"
              style={{ backgroundImage: `url(${it.img})` }}
            />
            <div className="svc-icon">
              <SvcIcon name={it.icon} />
            </div>
            <div className="svc-body">
              <h3>{it.title[lang] || it.title.es}</h3>
              <p>{it.text[lang] || it.text.es}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

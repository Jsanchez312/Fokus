import { Marquee, useInView } from './shared'
import { PinIcon } from './icons'
import { useLanguage } from '../context/LanguageContext'
import about from '../assets/about.jpg'
import t1 from '../assets/team1.jpg'
import t2 from '../assets/team2.jpg'
import t3 from '../assets/team3.jpg'

export default function About() {
  const ref = useInView(0.3)
  const { isEn } = useLanguage()

  const marqueeItems = isEn
    ? ['CLARITY IN FOCUS', 'BRANDS MADE DIGITAL', 'SYSTEMS THAT RUN THEMSELVES', 'ENGINEERED TO GROW']
    : ['CLARIDAD EN FOCO', 'MARCAS HECHAS DIGITALES', 'SISTEMAS QUE FUNCIONAN SOLOS', 'CREADOS PARA AVANZAR']

  return (
    <>
      <section className="about" id="about" ref={ref}>
        <div className="about-grid container">
          <div className="about-img reveal-img">
            <img src={about} alt="Identidad Fokus" />
          </div>
          <div className="about-copy">
            <span className="pill">{isEn ? 'THE FOKUS GROUP' : 'EL GRUPO FOKUS'}</span>
            <h2 className="about-title">
              {isEn ? (
                <>
                  UNWAVERING CLARITY ON <span className="hl">WHAT MATTERS.</span>
                </>
              ) : (
                <>
                  CLARIDAD CONSTANTE EN <span className="hl">LO QUE IMPORTA.</span>
                </>
              )}
            </h2>
            <div className="about-bottom">
              <div className="clients">
                <div className="avatars">
                  {[t1, t2, t3].map((s, i) => (
                    <img key={i} src={s} alt="Cliente" style={{ '--i': i }} />
                  ))}
                </div>
                <span>
                  {isEn
                    ? 'One sharp focus. Two expert divisions.'
                    : 'Un solo enfoque. Dos divisiones expertas.'}
                </span>
              </div>
              <div className="about-info">
                <div className="loc">
                  <PinIcon />
                  <b>{isEn ? 'Digital Platforms + Workflow Automation' : 'Digitalización + Automatización'}</b>
                </div>
                <p>
                  {isEn
                    ? 'Fokus is the organization behind Fokus Digital and Fokus Automations. We empower modern companies to place their attention — and technology — where it yields measurable commercial leverage.'
                    : 'Fokus es el grupo detrás de Fokus Digital y Fokus Automations. Ayudamos a las empresas a poner su atención —y su tecnología— donde realmente genera valor comercial.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Marquee items={marqueeItems} />
    </>
  )
}

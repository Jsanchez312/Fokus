import { ScrollTitle } from './shared'
import { Star, Pinwheel } from './icons'
import { useScrollProgress } from '../hooks'
import { useLanguage } from '../context/LanguageContext'
import portrait from '../assets/review.jpg'
import t1 from '../assets/team1.jpg'
import t3 from '../assets/team3.jpg'
import t5 from '../assets/team5.jpg'

export default function Review() {
  const { lang, isEn } = useLanguage()

  const reviewList = [
    {
      cls: 'rv-a',
      n: 'FOKUS DIGITAL',
      r: isEn ? 'Brands engineered for the digital era.' : 'Marcas creadas para el mundo digital.',
      img: t1,
      t: isEn
        ? 'High-performance web platforms and living design systems that position brands with authority, trust, and commercial traction.'
        : 'Plataformas web y experiencias interactivas que ayudan a las marcas a ser vistas, generar confianza y ser elegidas.'
    },
    {
      cls: 'rv-b',
      n: 'FOKUS AUTOMATIONS',
      r: isEn ? 'Systems that run on their own.' : 'Trabajo que se ejecuta solo.',
      img: t5,
      t: isEn
        ? 'Resilient CRM pipelines, multi-app webhooks, and operational AI replacing repetitive manual work with measurable accuracy.'
        : 'Sistemas que reemplazan el trabajo manual repetitivo y liberan tiempo valioso para el crecimiento estratégico.'
    },
    {
      cls: 'rv-c',
      n: isEn ? 'THE FOKUS GROUP' : 'EL GRUPO FOKUS',
      r: isEn ? 'Unwavering clarity.' : 'Claridad en foco.',
      img: t3,
      t: isEn
        ? 'Two specialized divisions operating in total synergy to deliver digital technology that creates verified enterprise value.'
        : 'Dos divisiones especializadas trabajando en sincronía para construir tecnología que genera verdadero retorno de inversión.'
    },
  ]

  const stage = useScrollProgress((el, p) => {
    el.style.setProperty('--p', p.toFixed(3))
  }, { start: 1, end: 0.0 })

  return (
    <section className="review" id="review">
      <div className="review-head">
        <ScrollTitle>{isEn ? 'IN FOCUS' : 'EN FOCO'}</ScrollTitle>
      </div>
      <div className="review-dark">
        <div className="review-stage" ref={stage}>
          <div className="rv-portrait">
            <img src={portrait} alt="" />
          </div>
          {reviewList.map((r) => (
            <div className={`rv-card ${r.cls}`} key={r.n}>
              <div className="stars">
                {[0, 1, 2, 3, 4].map((i) => <Star key={i} />)}
              </div>
              <p>{r.t}</p>
              <div className="rv-who">
                <img src={r.img} alt="" />
                <div>
                  <h5>{r.n}</h5>
                  <span>{r.r}</span>
                </div>
              </div>
            </div>
          ))}
          <Pinwheel className="rv-spin" />
        </div>
      </div>
    </section>
  )
}

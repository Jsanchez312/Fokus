import { Btn, ScrollTitle } from './shared'
import { useScrollProgress } from '../hooks'
import { navigate } from '../navigation'
import { useLanguage } from '../context/LanguageContext'
import img from '../assets/process.jpg'

export default function Process() {
  const { lang, isEn } = useLanguage()

  const steps = [
    {
      n: isEn ? '01. IDENTIFY THE CORE' : '01. ENCONTRAR EL FOCO',
      t: isEn
        ? 'We begin with what matters: your business model, customer touchpoints, and the operational bottlenecks throttling growth.'
        : 'Iniciamos con lo que importa: tu negocio, tu equipo y los cuellos de botella que frenan tu avance.'
    },
    {
      n: isEn ? '02. MAP THE SYSTEM' : '02. MAPEAR EL SISTEMA',
      t: isEn
        ? 'We translate commercial requirements into precision digital blueprints or automated multi-app pipelines.'
        : 'Transformamos tus requerimientos en un plan digital o de automatización claro, orientado a metas concretas.'
    },
    {
      n: isEn ? '03. ENGINEER WITH PRECISION' : '03. CONSTRUIR CON CLARIDAD',
      t: isEn
        ? 'Our specialized engineering teams craft tactile web experiences and resilient automated workflows designed for scale.'
        : 'Nuestros equipos especializados crean experiencias digitales impecables y sistemas robustos diseñados para rendir.'
    },
    {
      n: isEn ? '04. DEPLOY & OPTIMIZE' : '04. SEGUIR AVANZANDO',
      t: isEn
        ? 'We deploy to edge infrastructure, track live telemetry, and continuously optimize for sub-second speeds and maximum conversion.'
        : 'Lanzamos, medimos y optimizamos para que tu presencia digital y tus sistemas sigan ahorrando tiempo y generando valor.'
    },
  ]

  const wrap = useScrollProgress((el, p) => {
    el.style.setProperty('--p', p.toFixed(3))
  }, { start: 1, end: 0.2 })

  return (
    <section className="process" id="process">
      <ScrollTitle>{isEn ? 'HOW WE OPERATE' : 'CÓMO TRABAJAMOS'}</ScrollTitle>
      <div className="process-grid container" ref={wrap}>
        <div className="cross-h" />
        <div className="cross-v" />
        <div className="process-img">
          <img src={img} alt="Proceso Fokus" />
        </div>
        {steps.map((s, i) => (
          <div className={`step s${i + 1}`} key={i}>
            <span className="step-badge">0{i + 1}</span>
            <h3>{s.n}</h3>
            <p>{s.t}</p>
            <div className="step-desktop-btn">
              <Btn
                className="btn-sm"
                href="/contact"
                onClick={(e) => {
                  e.preventDefault()
                  navigate('contact')
                }}
              >
                {isEn ? "LET'S TALK" : 'HABLEMOS'}
              </Btn>
            </div>
          </div>
        ))}
      </div>

      <div className="process-mobile-cta">
        <Btn
          href="/contact"
          onClick={(e) => {
            e.preventDefault()
            navigate('contact')
          }}
        >
          {isEn ? "LET'S TALK ABOUT YOUR PROJECT" : 'HABLEMOS DE TU PROYECTO'}
        </Btn>
      </div>
    </section>
  )
}

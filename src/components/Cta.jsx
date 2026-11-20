import { Btn, useInView } from './shared'
import { ScrollTitle } from './shared'
import { Pinwheel } from './icons'
import { navigate } from '../navigation'
import { useLanguage } from '../context/LanguageContext'
import t1 from '../assets/team1.jpg'
import t2 from '../assets/team2.jpg'
import t5 from '../assets/team5.jpg'

export default function Cta() {
  const ref = useInView(0.2)
  const { isEn } = useLanguage()

  return (
    <section className="cta" id="contact" ref={ref}>
      <div className="cta-inner container">
        <div className="cta-trust">
          <div className="avatars lg">
            {[t1, t5, t2].map((s, i) => (
              <img key={i} src={s} alt="" style={{ '--i': i }} />
            ))}
            <b>FOKUS</b>
          </div>
          <p>
            {isEn ? (
              <>
                ONE FOCUS.
                <br />
                TWO EXPERT
                <br />
                DIVISIONS.
              </>
            ) : (
              <>
                UN ENFOQUE.
                <br />
                DOS DIVISIONES
                <br />
                EXPERTAS.
              </>
            )}
          </p>
        </div>
        <Pinwheel className="cta-bg" />
        <div className="cta-center">
          <h3>{isEn ? 'BRING CLARITY INTO FOCUS' : 'PON LO CORRECTO EN FOCO'}</h3>
          <ScrollTitle className="cta-title" size="6.4vw">
            {isEn ? "LET'S TALK" : 'HABLEMOS'}
          </ScrollTitle>
          <h3>{isEn ? 'ABOUT WHAT COMES NEXT' : 'DE LO QUE VIENE'}</h3>
        </div>
        <i className="corner tr" />
        <i className="corner bl" />
        <div className="cta-side">
          <p>
            {isEn
              ? 'Build a high-performance web presence that converts or an automated system that gives hours back to your team.'
              : 'Construye una presencia digital que trabaje más duro o un sistema que le devuelva tiempo a tu equipo.'}
          </p>
          <Btn
            href="/contact"
            onClick={(e) => {
              e.preventDefault()
              navigate('contact')
            }}
          >
            {isEn ? 'START A CONVERSATION' : 'INICIAR CONVERSACIÓN'}
          </Btn>
        </div>
      </div>
    </section>
  )
}

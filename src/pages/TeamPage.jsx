import { useEffect, useRef } from 'react'
import FokusNavbar from '../components/FokusNavbar'
import FokusFooter from '../components/FokusFooter'
import { Linkedin } from '../components/icons'
import { navigate } from '../navigation'
import { TEAM_MEMBERS } from '../data/teamData'

export default function TeamPage() {
  const cardsRef = useRef([])

  useEffect(() => {
    window.scrollTo(0, 0)
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('in-view') }) },
      { threshold: 0.15 }
    )
    cardsRef.current.forEach((el) => { if (el) observer.observe(el) })
    return () => observer.disconnect()
  }, [])

  const headingLetters = 'NUESTRO EQUIPO'.split('')

  return (
    <div className="thimos-page team-spec-page">
      <FokusNavbar brand="fokus" theme="light" active="about" />

      <section className="team-page-hero container">
        <span className="brand-tag-chip digital-chip" style={{ marginBottom: '1.2rem' }}>
          <span className="pixel-box" /> EL COLECTIVO FOKUS
        </span>
        <h1 className="team-page-giant-title" aria-label="NUESTRO EQUIPO">
          {headingLetters.map((char, i) => (
            <span key={i} className="team-title-char-wrap">
              <span className="team-title-char" style={{ animationDelay: `${i * 60}ms` }}>
                {char === ' ' ? '\u00A0' : char}
              </span>
            </span>
          ))}
        </h1>
        <p className="team-page-lead">
          Conoce a los ingenieros, arquitectos y estrategas detrás de Fokus Digital y Fokus Automations. Ponemos tu atención —y tu tecnología— donde realmente cuenta.
        </p>

        <div className="team-page-grid">
          {TEAM_MEMBERS.map((member, i) => (
            <div key={member.slug} className="spec-team-card light-mode-card"
              ref={(el) => (cardsRef.current[i] = el)}
              style={{ transitionDelay: `${i * 120}ms` }}
              onClick={() => navigate(`team/${member.slug}`)}>
              <div className="spec-card-photo-wrap">
                <img src={member.image} alt={member.name} className="spec-card-photo" />
                <div className="spec-photo-lime-wash" />
                <a href={member.linkedin} target="_blank" rel="noreferrer" className="spec-linkedin-badge"
                  onClick={(e) => e.stopPropagation()} aria-label={`${member.name} en LinkedIn`}>
                  <Linkedin />
                </a>
              </div>
              <div className="spec-card-info">
                <span className="team-card-division">{member.division}</span>
                <h3 className="spec-card-name">{member.name.toUpperCase()}</h3>
                <span className="spec-card-role">{member.role}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <FokusFooter brand="fokus" />
    </div>
  )
}

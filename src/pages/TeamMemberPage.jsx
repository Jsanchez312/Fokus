import { useState, useEffect, useRef } from 'react'
import FokusNavbar from '../components/FokusNavbar'
import FokusFooter from '../components/FokusFooter'
import { Arrow, MailIcon, PhoneIcon } from '../components/icons'
import { navigate } from '../navigation'
import { TEAM_MEMBERS } from '../data/teamData'

export default function TeamMemberPage({ slug }) {
  const member = TEAM_MEMBERS.find((m) => m.slug === slug) || TEAM_MEMBERS[0]
  const [lineDrawn, setLineDrawn] = useState(false)
  const lineRef = useRef(null)
  const blocksRef = useRef([])

  useEffect(() => {
    window.scrollTo(0, 0)
    const lineEl = lineRef.current
    if (lineEl) {
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) { setLineDrawn(true); observer.disconnect() }
      }, { threshold: 0.3 })
      observer.observe(lineEl)
      return () => observer.disconnect()
    }
  }, [slug])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('in-view') }) },
      { threshold: 0.2 }
    )
    blocksRef.current.forEach((el) => { if (el) observer.observe(el) })
    return () => observer.disconnect()
  }, [slug])

  const nameLetters = member.name.toUpperCase().split('')

  return (
    <div className="thimos-page team-member-spec-page">
      <FokusNavbar brand="fokus" theme="light" active="about" />

      <section className="member-profile-section container">
        <div className="member-profile-grid">
          <div className="member-portrait-col">
            <div className="member-portrait-frame">
              <img src={member.image} alt={member.name} className="member-portrait-img" />
            </div>
          </div>

          <div className="member-info-col">
            <span className="member-role-overline">{member.shortRole || member.role}</span>
            <h1 className="member-name-heading" aria-label={member.name}>
              {nameLetters.map((char, i) => (
                <span key={i} className="member-name-char-wrap">
                  <span className="member-name-char" style={{ animationDelay: `${i * 60}ms` }}>
                    {char === ' ' ? '\u00A0' : char}
                  </span>
                </span>
              ))}
            </h1>
            <p className="member-bio-copy">{member.bio}</p>

            <div className="member-connect-btn-wrap">
              <button className="spec-connect-pill" onClick={() => navigate('contact')}>
                <span className="connect-label">Conectar</span>
                <span className="connect-arrow-circle"><Arrow size={14} /></span>
              </button>
            </div>

            <div className={`member-contact-hairline ${lineDrawn ? 'drawn' : ''}`} ref={lineRef} />
            <div className="member-contact-details-row">
              <div className="contact-detail-item">
                <span className="detail-item-header">
                  <MailIcon size={14} className="detail-icon" />
                  <span className="detail-label">CORREO ELECTRÓNICO</span>
                </span>
                <a href={`mailto:${member.email}`} className="detail-val-link">{member.email}</a>
              </div>
              <div className="contact-detail-item">
                <span className="detail-item-header">
                  <PhoneIcon size={14} className="detail-icon" />
                  <span className="detail-label">TELÉFONO</span>
                </span>
                <a href={`tel:${member.phone.replace(/[^0-9+]/g, '')}`} className="detail-val-link">{member.phone}</a>
              </div>
            </div>
          </div>
        </div>

        <div className="member-role-blocks-wrap">
          {member.roleBlocks.map((block, idx) => (
            <div key={idx} className="spec-role-block" ref={(el) => (blocksRef.current[idx] = el)} style={{ transitionDelay: `${idx * 100}ms` }}>
              <h3 className="role-block-title">{block.title}</h3>
              <p className="role-block-desc">{block.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <FokusFooter brand="fokus" />
    </div>
  )
}

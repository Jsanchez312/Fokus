import { useState, useEffect, useRef } from 'react'
import FokusNavbar from '../components/FokusNavbar'
import FokusFooter from '../components/FokusFooter'
import { Pinwheel, LogoMark, Linkedin, Arrow } from '../components/icons'
import { navigate } from '../navigation'
import { TEAM_MEMBERS } from '../data/teamData'
import { useLanguage } from '../context/LanguageContext'

import aboutImg from '../assets/about.jpg'
import mayaImg from '../assets/hero-maya.jpg'
import statueImg from '../assets/hero-statue.jpg'
import svc1 from '../assets/svc1.jpg'
import svc2 from '../assets/svc2.jpg'
import svc4 from '../assets/svc4.jpg'
import projAether from '../assets/proj-aether.jpg'
import projSolar from '../assets/proj-solar.jpg'
import team1 from '../assets/team1.jpg'
import team2 from '../assets/team2.jpg'
import team3 from '../assets/team3.jpg'
import team4 from '../assets/team4.jpg'

export default function AboutPage() {
  const { lang, isEn, t } = useLanguage()
  const [statCount, setStatCount] = useState(0)
  const [awardProgress, setAwardProgress] = useState(0)
  const [teamProgress, setTeamProgress] = useState(0)
  const [activeWordIndex, setActiveWordIndex] = useState(-1)
  const [wordsDone, setWordsDone] = useState(false)

  const statsRef = useRef(null)
  const awardRef = useRef(null)
  const teamHeadingRef = useRef(null)
  const teamGridRef = useRef(null)
  const teamCardsRef = useRef([])

  const taglineWords = isEn
    ? [
        'A', 'SPECIALIZED', 'STUDIO', 'TRANSFORMING', 'IDEAS',
        'INTO', 'EXPERIENCES', 'THAT', 'INSPIRE', 'AND', 'CONNECT'
      ]
    : [
        'UNA', 'AGENCIA', 'ESPECIALIZADA', 'QUE', 'TRANSFORMA', 'IDEAS',
        'EN', 'EXPERIENCIAS', 'QUE', 'INSPIRAN', 'Y', 'CONECTAN'
      ]

  useEffect(() => {
    window.scrollTo(0, 0)
    let wordTimer
    let idx = 0
    setActiveWordIndex(-1)
    setWordsDone(false)
    wordTimer = setInterval(() => {
      if (idx < taglineWords.length) {
        setActiveWordIndex(idx)
        idx++
      } else {
        clearInterval(wordTimer)
        setWordsDone(true)
      }
    }, 280)
    return () => clearInterval(wordTimer)
  }, [lang])

  useEffect(() => {
    const el = statsRef.current
    if (!el) return
    let timer
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let count = 0
          timer = setInterval(() => {
            count += 1
            if (count >= 13) { count = 13; clearInterval(timer) }
            setStatCount(count)
          }, 90)
          observer.disconnect()
        }
      },
      { threshold: 0.35 }
    )
    observer.observe(el)
    return () => { observer.disconnect(); clearInterval(timer) }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const windowH = window.innerHeight
      if (awardRef.current) {
        const rect = awardRef.current.getBoundingClientRect()
        setAwardProgress(Math.min(Math.max((windowH - rect.top) / (windowH * 0.8), 0), 1))
      }
      if (teamHeadingRef.current) {
        const rect = teamHeadingRef.current.getBoundingClientRect()
        setTeamProgress(Math.min(Math.max((windowH - rect.top) / (windowH * 0.8), 0), 1))
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('in-view') }) },
      { threshold: 0.15 }
    )
    teamCardsRef.current.forEach((el) => { if (el) observer.observe(el) })
    return () => observer.disconnect()
  }, [])

  const marqueePhotos = [svc1, projAether, svc2, statueImg, projSolar, svc4, mayaImg, aboutImg]

  return (
    <div className="thimos-page about-spec-page">
      <div className="about-dark-hero-wrap">
        <FokusNavbar brand="fokus" theme="dark" active="about" />

        <section className="about-stepped-hero container">
          <div className="hero-stepped-split">
            <div className="stepped-word-wrap" aria-label={isEn ? 'ABOUT US' : 'NOSOTROS'}>
              {isEn ? (
                <>
                  <div className="stepped-row top-row">
                    <span className="stepped-char-box"><span className="stepped-char" style={{ animationDelay: '0ms' }}>A</span></span>
                    <span className="stepped-char-box"><span className="stepped-char" style={{ animationDelay: '70ms' }}>B</span></span>
                    <span className="stepped-char-box o-box">
                      <span className="stepped-char o-ring" style={{ animationDelay: '140ms' }}>
                        <span className="o-circle-border" />
                        <Pinwheel className="spinning-lime-pinwheel" />
                      </span>
                    </span>
                    <span className="stepped-char-box"><span className="stepped-char" style={{ animationDelay: '210ms' }}>U</span></span>
                    <span className="stepped-char-box"><span className="stepped-char" style={{ animationDelay: '280ms' }}>T</span></span>
                  </div>
                  <div className="stepped-row bottom-row">
                    <span className="stepped-char-box"><span className="stepped-char" style={{ animationDelay: '350ms' }}>U</span></span>
                    <span className="stepped-char-box"><span className="stepped-char" style={{ animationDelay: '420ms' }}>S</span></span>
                  </div>
                </>
              ) : (
                <>
                  <div className="stepped-row top-row">
                    <span className="stepped-char-box"><span className="stepped-char" style={{ animationDelay: '0ms' }}>N</span></span>
                    <span className="stepped-char-box o-box">
                      <span className="stepped-char o-ring" style={{ animationDelay: '80ms' }}>
                        <span className="o-circle-border" />
                        <Pinwheel className="spinning-lime-pinwheel" />
                      </span>
                    </span>
                  </div>
                  <div className="stepped-row bottom-row">
                    <span className="stepped-char-box"><span className="stepped-char" style={{ animationDelay: '160ms' }}>S</span></span>
                    <span className="stepped-char-box"><span className="stepped-char" style={{ animationDelay: '240ms' }}>O</span></span>
                    <span className="stepped-char-box"><span className="stepped-char" style={{ animationDelay: '320ms' }}>T</span></span>
                    <span className="stepped-char-box"><span className="stepped-char" style={{ animationDelay: '400ms' }}>R</span></span>
                    <span className="stepped-char-box"><span className="stepped-char" style={{ animationDelay: '480ms' }}>O</span></span>
                    <span className="stepped-char-box"><span className="stepped-char" style={{ animationDelay: '560ms' }}>S</span></span>
                  </div>
                </>
              )}
            </div>

            <div className="about-tagline-box">
              <p className="about-animated-tagline">
                {taglineWords.map((word, i) => {
                  const isHighlighted = activeWordIndex === i
                  const isPast = activeWordIndex > i || wordsDone
                  return (
                    <span key={i} className={`tagline-word-unit ${isHighlighted ? 'highlighted' : ''} ${isPast ? 'revealed' : ''}`}>
                      {word}
                    </span>
                  )
                })}
              </p>
            </div>
          </div>
        </section>

        <div className="about-image-strip-band">
          <div className="image-strip-track">
            {[0, 1].map((copy) => (
              <div key={copy} className="image-strip-group" aria-hidden={copy > 0}>
                {marqueePhotos.map((src, idx) => (
                  <div key={idx} className="strip-photo-thumb" onClick={() => navigate('digital')}>
                    <img src={src} alt="Portafolio Fokus" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="about-stats-section" ref={statsRef}>
        <div className="container stats-two-col">
          <div className="stats-left-col">
            <div className="stat-giant-num">
              <span className="num-display">{statCount}</span>
            </div>
            <div className="client-reviews-lockup">
              <div className="avatar-overlap-stack">
                <img src={team1} alt="Cliente 1" />
                <img src={team2} alt="Cliente 2" />
                <img src={team3} alt="Cliente 3" />
              </div>
              <span className="review-stat-label">
                {isEn ? (
                  <>
                    Over 20K+
                    <br />
                    Verified Reviews
                  </>
                ) : (
                  <>
                    Más de 20K+
                    <br />
                    Reseñas de Clientes
                  </>
                )}
              </span>
            </div>
          </div>
          <div className="stats-vert-divider" />
          <div className="stats-right-col">
            <h2 className="stats-col-title">
              {isEn
                ? 'DIGITAL PRESENCE & BUSINESS AUTOMATION'
                : 'PRESENCIA DIGITAL & AUTOMATIZACIÓN EMPRESARIAL'}
            </h2>
            <div className="stats-big-photo-frame">
              <img src={mayaImg} alt="Equipo Fokus construyendo sistemas digitales" className="stats-big-photo" />
            </div>
          </div>
        </div>
      </section>

      {/* Replaced PREMIOS with EXPERIENCIA as requested */}
      <section className="about-award-section" ref={awardRef}>
        <div className="container">
          <div className="award-giant-wrap" style={{
            filter: `blur(${(1 - awardProgress) * 16}px)`,
            opacity: 0.25 + awardProgress * 0.75,
            transform: `scale(${0.96 + awardProgress * 0.04})`
          }}>
            <h2 className="award-giant-text">{t('about.experience.title')}</h2>
          </div>
          <div className="award-details-row">
            <div className="award-details-left">
              <h3 className="award-subtitle">{t('about.experience.subtitle')}</h3>
              <p className="award-copy">
                {t('about.experience.desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-team-heading-section" ref={teamHeadingRef}>
        <div className="container team-heading-wrap">
          <div className="team-giant-text-box" style={{
            filter: `blur(${(1 - teamProgress) * 16}px)`,
            opacity: 0.25 + teamProgress * 0.75,
            color: teamProgress > 0.6 ? '#000000' : '#88e04b'
          }}>
            <h2 className="team-giant-text">{t('about.team.title')}</h2>
            <button className="team-view-all-pill" onClick={() => navigate('team')}
              style={{ transform: `rotate(35deg) translateY(${(1 - teamProgress) * 14}px)` }}>
              {t('about.team.viewAll')}
            </button>
          </div>
        </div>
      </section>

      <section className="about-team-grid-dark" ref={teamGridRef}>
        <div className="container">
          <div className="team-cards-2col-grid">
            {TEAM_MEMBERS.slice(0, 4).map((member, i) => (
              <div key={member.slug} className="spec-team-card"
                ref={(el) => (teamCardsRef.current[i] = el)}
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
                  <h4 className="spec-card-name">{member.name.toUpperCase()}</h4>
                  <span className="spec-card-role">{member.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FokusFooter brand="fokus" />
    </div>
  )
}

import { useState, useRef, useEffect } from 'react'
import { ScrollTitle } from './shared'
import { navigate } from '../navigation'
import { useLanguage } from '../context/LanguageContext'
import aether from '../assets/proj-aether.jpg'
import solar from '../assets/proj-solar.jpg'
import svc2 from '../assets/svc2.jpg'
import svc1 from '../assets/svc1.jpg'

export default function Projects() {
  const cube = useRef(null)
  const sectionRef = useRef(null)
  const { lang, isEn } = useLanguage()
  const [activeFace, setActiveFace] = useState(0)

  const isAnimatingRef = useRef(false)
  const activeFaceRef = useRef(0)

  const faces = [
    {
      slug: 'aether-dynamics',
      title: 'FOKUS DIGITAL',
      subtitle: isEn ? 'Aether Dynamics Platform' : 'Plataforma Aether Dynamics',
      img: aether,
      tags: isEn ? ['Web Platforms', 'Brand Authority', 'Growth'] : ['Sitios Web', 'Presencia', 'Crecimiento']
    },
    {
      slug: 'solar-edge-health',
      title: 'FOKUS AUTOMATIONS',
      subtitle: isEn ? 'SolarEdge Health CRM' : 'CRM SolarEdge Health',
      img: solar,
      tags: isEn ? ['Workflows', 'CRM Pipelines', 'Scalability'] : ['Flujos', 'Sistemas', 'Escalabilidad']
    },
    {
      slug: 'lumina-logistics',
      title: isEn ? 'DIGITALIZATION' : 'DIGITALIZACIÓN',
      subtitle: isEn ? 'Lumina Global Portal' : 'Portal Lumina Logistics',
      img: svc2,
      tags: isEn ? ['Sub-Second Speed', 'Design Systems', 'Conversion'] : ['Velocidad', 'Diseño', 'Conversión']
    },
    {
      slug: 'finnext-capital',
      title: isEn ? 'AUTOMATION' : 'AUTOMATIZACIÓN',
      subtitle: isEn ? 'FinNext Capital Reports' : 'Informes FinNext Capital',
      img: svc1,
      tags: isEn ? ['Reliability', 'Efficiency', 'Clarity'] : ['Confiabilidad', 'Eficiencia', 'Claridad']
    },
  ]

  // Keep ref in sync and update cube 3D transform
  useEffect(() => {
    activeFaceRef.current = activeFace
    if (cube.current) {
      cube.current.style.transform = `translateZ(calc(var(--cw) * -0.5)) rotateX(-4deg) rotateY(${-activeFace * 90}deg)`
    }
  }, [activeFace])

  // Scroll-lock & wheel / touch handler:
  // Pauses page scrolling when user is in the cube section until all 4 faces have rotated!
  useEffect(() => {
    const handleWheel = (e) => {
      const section = sectionRef.current
      if (!section) return
      const rect = section.getBoundingClientRect()
      const vh = window.innerHeight
      const headerOffset = window.innerWidth <= 820 ? 64 : 76

      // Active zone: when section is positioned in the viewport
      const inZone = rect.top <= headerOffset + 90 && rect.bottom >= vh * 0.42
      if (!inZone) return

      if (e.deltaY > 6) {
        // Scrolling down: rotate cube until reaching last face (index 3)
        if (activeFaceRef.current < 3) {
          e.preventDefault()
          if (!isAnimatingRef.current) {
            isAnimatingRef.current = true
            const targetY = window.scrollY + rect.top - headerOffset
            if (Math.abs(rect.top - headerOffset) > 12) {
              window.scrollTo({ top: targetY, behavior: 'smooth' })
            }
            setActiveFace((prev) => {
              const next = Math.min(3, prev + 1)
              activeFaceRef.current = next
              return next
            })
            setTimeout(() => {
              isAnimatingRef.current = false
            }, 550)
          }
        }
      } else if (e.deltaY < -6) {
        // Scrolling up: rotate cube backwards until reaching first face (index 0)
        if (activeFaceRef.current > 0) {
          e.preventDefault()
          if (!isAnimatingRef.current) {
            isAnimatingRef.current = true
            const targetY = window.scrollY + rect.top - headerOffset
            if (Math.abs(rect.top - headerOffset) > 12) {
              window.scrollTo({ top: targetY, behavior: 'smooth' })
            }
            setActiveFace((prev) => {
              const next = Math.max(0, prev - 1)
              activeFaceRef.current = next
              return next
            })
            setTimeout(() => {
              isAnimatingRef.current = false
            }, 550)
          }
        }
      }
    }

    let touchStartY = 0
    let touchStartX = 0
    let isTouchActive = false

    const handleTouchStart = (e) => {
      if (e.touches && e.touches[0]) {
        touchStartY = e.touches[0].clientY
        touchStartX = e.touches[0].clientX
        isTouchActive = true
      }
    }

    const handleTouchMove = (e) => {
      if (!isTouchActive || !e.touches || !e.touches[0]) return
      const section = sectionRef.current
      if (!section) return

      const rect = section.getBoundingClientRect()
      const vh = window.innerHeight
      const headerOffset = window.innerWidth <= 820 ? 64 : 76
      const inZone = rect.top <= headerOffset + 90 && rect.bottom >= vh * 0.42
      if (!inZone) return

      const currentY = e.touches[0].clientY
      const currentX = e.touches[0].clientX
      const deltaY = touchStartY - currentY // positive = swiping up (scrolling down)
      const deltaX = touchStartX - currentX // positive = swiping left (next)

      if (Math.abs(deltaY) >= Math.abs(deltaX)) {
        if (deltaY > 16) {
          // Swipe up = scroll down
          if (activeFaceRef.current < 3) {
            e.preventDefault()
            if (!isAnimatingRef.current) {
              isAnimatingRef.current = true
              touchStartY = currentY
              const targetY = window.scrollY + rect.top - headerOffset
              if (Math.abs(rect.top - headerOffset) > 12) {
                window.scrollTo({ top: targetY, behavior: 'smooth' })
              }
              setActiveFace((prev) => {
                const next = Math.min(3, prev + 1)
                activeFaceRef.current = next
                return next
              })
              setTimeout(() => {
                isAnimatingRef.current = false
              }, 550)
            }
          }
        } else if (deltaY < -16) {
          // Swipe down = scroll up
          if (activeFaceRef.current > 0) {
            e.preventDefault()
            if (!isAnimatingRef.current) {
              isAnimatingRef.current = true
              touchStartY = currentY
              const targetY = window.scrollY + rect.top - headerOffset
              if (Math.abs(rect.top - headerOffset) > 12) {
                window.scrollTo({ top: targetY, behavior: 'smooth' })
              }
              setActiveFace((prev) => {
                const next = Math.max(0, prev - 1)
                activeFaceRef.current = next
                return next
              })
              setTimeout(() => {
                isAnimatingRef.current = false
              }, 550)
            }
          }
        } else {
          // Sub-threshold movement: prevent jitter when mid-cube
          if ((deltaY > 0 && activeFaceRef.current < 3) || (deltaY < 0 && activeFaceRef.current > 0)) {
            e.preventDefault()
          }
        }
      } else {
        // Horizontal swipe
        if (deltaX > 20) {
          if (activeFaceRef.current < 3) {
            e.preventDefault()
            if (!isAnimatingRef.current) {
              isAnimatingRef.current = true
              touchStartX = currentX
              setActiveFace((prev) => {
                const next = Math.min(3, prev + 1)
                activeFaceRef.current = next
                return next
              })
              setTimeout(() => {
                isAnimatingRef.current = false
              }, 550)
            }
          }
        } else if (deltaX < -20) {
          if (activeFaceRef.current > 0) {
            e.preventDefault()
            if (!isAnimatingRef.current) {
              isAnimatingRef.current = true
              touchStartX = currentX
              setActiveFace((prev) => {
                const next = Math.max(0, prev - 1)
                activeFaceRef.current = next
                return next
              })
              setTimeout(() => {
                isAnimatingRef.current = false
              }, 550)
            }
          }
        }
      }
    }

    const handleTouchEnd = () => {
      isTouchActive = false
    }

    const handleKeyDown = (e) => {
      const section = sectionRef.current
      if (!section) return
      const rect = section.getBoundingClientRect()
      const vh = window.innerHeight
      const headerOffset = window.innerWidth <= 820 ? 64 : 76
      const inZone = rect.top <= headerOffset + 90 && rect.bottom >= vh * 0.42
      if (!inZone) return

      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        if (activeFaceRef.current < 3) {
          e.preventDefault()
          if (!isAnimatingRef.current) {
            isAnimatingRef.current = true
            setActiveFace((prev) => {
              const next = Math.min(3, prev + 1)
              activeFaceRef.current = next
              return next
            })
            setTimeout(() => {
              isAnimatingRef.current = false
            }, 550)
          }
        }
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        if (activeFaceRef.current > 0) {
          e.preventDefault()
          if (!isAnimatingRef.current) {
            isAnimatingRef.current = true
            setActiveFace((prev) => {
              const next = Math.max(0, prev - 1)
              activeFaceRef.current = next
              return next
            })
            setTimeout(() => {
              isAnimatingRef.current = false
            }, 550)
          }
        }
      }
    }

    window.addEventListener('wheel', handleWheel, { passive: false })
    window.addEventListener('touchstart', handleTouchStart, { passive: true })
    window.addEventListener('touchmove', handleTouchMove, { passive: false })
    window.addEventListener('touchend', handleTouchEnd, { passive: true })
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchmove', handleTouchMove)
      window.removeEventListener('touchend', handleTouchEnd)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <section className="projects" id="projects" ref={sectionRef}>
      <ScrollTitle
        badge={isEn ? 'VIEW PROJECTS' : 'VER PROYECTOS'}
        onBadgeClick={() => navigate('projects')}
      >
        {isEn ? 'OUR FOCUS' : 'NUESTRO ENFOQUE'}
      </ScrollTitle>

      <div className="proj-cube-stage">
        <div className="scene">
          <div className="cube" ref={cube}>
            {faces.map((f, i) => (
              <div
                className="face"
                key={i}
                style={{ transform: `rotateY(${i * 90}deg) translateZ(calc(var(--cw) * 0.5))`, cursor: 'pointer' }}
                onClick={() => navigate('projects')}
              >
                <div className="face-img" style={{ backgroundImage: `url(${f.img})` }} />
                <div className="face-info">
                  <h3>{f.title}</h3>
                  <div className="tags">
                    {f.tags.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Face Switcher */}
        <div className="cube-controls">
          {faces.map((f, i) => (
            <button
              key={i}
              type="button"
              className={`cube-dot ${activeFace === i ? 'is-active' : ''}`}
              onClick={() => {
                setActiveFace(i)
                activeFaceRef.current = i
              }}
              aria-label={`Ver proyecto ${f.title}`}
            >
              <span>0{i + 1}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

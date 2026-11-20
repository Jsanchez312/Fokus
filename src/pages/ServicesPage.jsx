import { useEffect, useRef } from 'react'
import ThimosNavbar from '../components/ThimosNavbar'
import ThimosFooter from '../components/ThimosFooter'
import { Arrow, SvcIcon } from '../components/icons'
import { getAllServices } from '../data/servicesData'
import { navigate } from '../navigation'

export default function ServicesPage() {
  const titleRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    // Scroll reveal observer for each card row: dissolves veil to reveal image
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    )

    cardsRef.current.forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const handleExplore = (id) => (e) => {
    e.preventDefault()
    navigate(`services/${id}`)
  }

  return (
    <div className="thimos-page services-page">
      {/* 1. Navbar: No es fija, desaparece con el scroll, SERVICES subrayado */}
      <ThimosNavbar variant="light" active="services" />

      {/* 2. Título gigante: OUR SERVICES con blur-to-sharp fade-in */}
      <section className="services-hero-section">
        <div className="container">
          <h1 ref={titleRef} className="giant-services-title blur-reveal">
            NUESTROS SERVICIOS
          </h1>
        </div>
      </section>

      {/* 3. Grid de 2 columnas con las 5 tarjetas de servicios */}
      <section className="services-grid-section">
        <div className="container">
          <div className="services-grid-2col">
            {getAllServices().map((svc, index) => {
              const iconType =
                index === 0
                  ? 'hand'
                  : index === 1
                  ? 'award'
                  : index === 2
                  ? 'code'
                  : index === 3
                  ? 'net'
                  : 'award'

              return (
                <article
                  key={svc.id}
                  ref={(el) => (cardsRef.current[index] = el)}
                  className="thimos-service-card"
                  onClick={handleExplore(svc.id)}
                >
                  {/* Imagen de fondo de la tarjeta */}
                  <div
                    className="service-card-media"
                    style={{
                      backgroundImage: `url(${svc.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  >
                    {/* Velo gris y ficha de icono oscura arriba a la izquierda */}
                    <div className="card-veil" />
                    <div className="card-badge-icon" aria-hidden="true">
                      <SvcIcon name={iconType} />
                    </div>
                  </div>

                  {/* Cuerpo de la tarjeta con título, texto y botón */}
                  <div className="service-card-info">
                    <h3 className="service-card-title">{svc.title}</h3>
                    <p className="service-card-desc">{svc.summary}</p>

                    <div className="service-card-action">
                      <a
                        href={`/services/${svc.id}`}
                        onClick={handleExplore(svc.id)}
                        className="thimos-pill-btn"
                      >
                        <span className="pill-circle">
                          <Arrow size={13} />
                        </span>
                        <span className="pill-label">Ver servicio</span>
                      </a>
                    </div>
                  </div>
                </article>
              )
            })}

            {/* 5. NEXT PAGE: centrada bajo la 5ª tarjeta en la columna derecha */}
            <div className="services-pagination-col">
              <a
                href="#next"
                className="thimos-pill-btn next-page-btn"
                onClick={(e) => {
                  e.preventDefault()
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
              >
                <span className="pill-circle">
                  <Arrow size={14} />
                </span>
                <span className="pill-label">SIGUIENTE</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Footer idéntico con cuadrícula azul, wordmark gigante y marquee */}
      <ThimosFooter />
    </div>
  )
}

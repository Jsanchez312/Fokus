import { useState, useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser'
import FokusNavbar from '../components/FokusNavbar'
import FokusFooter from '../components/FokusFooter'
import { UserIcon, MailIcon, PhoneIcon, MessageSquareIcon, Chevron, CheckIcon } from '../components/icons'
import { useLanguage } from '../context/LanguageContext'
import mayaImg from '../assets/hero-maya.jpg'

export default function ContactPage() {
  const { lang, isEn, t } = useLanguage()
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })
  const [activeField, setActiveField] = useState(null)
  const [formStatus, setFormStatus] = useState({ submitted: false, error: null, loading: false })
  // Initialise cooldown from sessionStorage so a page refresh doesn't reset it
  const [cooldown, setCooldown] = useState(() => {
    const last = sessionStorage.getItem('fokus_contact_sent')
    if (!last) return 0
    const remaining = 60 - Math.floor((Date.now() - parseInt(last)) / 1000)
    return remaining > 0 ? remaining : 0
  })
  const [openFaq, setOpenFaq] = useState(null)
  const [faqInView, setFaqInView] = useState(false)
  const faqRef = useRef(null)
  const infoCardsRef = useRef([])

  useEffect(() => {
    window.scrollTo(0, 0)
    const faqEl = faqRef.current
    if (faqEl) {
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) { setFaqInView(true); observer.disconnect() }
      }, { threshold: 0.3 })
      observer.observe(faqEl)
      return () => observer.disconnect()
    }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('visible') })
    }, { threshold: 0.15 })
    infoCardsRef.current.forEach((el) => { if (el) observer.observe(el) })
    return () => observer.disconnect()
  }, [])

  // Strip HTML tags and control characters; cap to max length
  const sanitizeField = (val, maxLen) =>
    val.replace(/<[^>]*>/g, '').replace(/[\u0000-\u001F\u007F]/g, '').trim().slice(0, maxLen)

  // Tick the cooldown counter once per second
  useEffect(() => {
    if (cooldown <= 0) return
    const timer = setTimeout(() => setCooldown((c) => Math.max(0, c - 1)), 1000)
    return () => clearTimeout(timer)
  }, [cooldown])

  const handleChange = (e) => {
    const limits = { name: 100, email: 254, phone: 30, message: 2000 }
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value.slice(0, limits[name] ?? 500) })
    if (formStatus.error) setFormStatus({ submitted: false, error: null, loading: false })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Rate limit: block re-submission for 60 seconds after a successful send
    if (cooldown > 0) {
      setFormStatus({
        submitted: false, loading: false,
        error: isEn
          ? `Please wait ${cooldown}s before sending another message.`
          : `Por favor espera ${cooldown}s antes de enviar otro mensaje.`
      })
      return
    }

    // Required fields
    if (!formData.name.trim() || !formData.email.trim()) {
      setFormStatus({
        submitted: false, loading: false,
        error: isEn
          ? 'Please enter your name and email address.'
          : 'Por favor completa tu nombre y correo electrónico.'
      })
      return
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
    if (!emailRegex.test(formData.email.trim())) {
      setFormStatus({
        submitted: false, loading: false,
        error: isEn ? 'Please enter a valid email address.' : 'Por favor ingresa un correo válido.'
      })
      return
    }

    setFormStatus({ submitted: false, error: null, loading: true })

    // Sanitize all fields before they reach EmailJS — no raw user HTML is forwarded
    const cleanData = {
      from_name: sanitizeField(formData.name, 100),
      reply_to:  formData.email.trim().slice(0, 254),
      phone:     sanitizeField(formData.phone, 30) || (isEn ? 'Not provided' : 'No proporcionado'),
      message:   sanitizeField(formData.message, 2000) || (isEn ? 'No message provided.' : 'Sin mensaje.'),
    }

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      cleanData,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then(() => {
        sessionStorage.setItem('fokus_contact_sent', Date.now().toString())
        setCooldown(60)
        setFormStatus({ submitted: true, error: null, loading: false })
        setFormData({ name: '', email: '', phone: '', message: '' })
      })
      .catch(() => {
        setFormStatus({
          submitted: false,
          loading: false,
          error: isEn
            ? 'Something went wrong. Please try again or email us directly.'
            : 'Algo salió mal. Por favor intenta de nuevo o escríbenos directamente.'
        })
      })
  }

  const titleText = isEn ? 'CONTACT US' : 'CONTÁCTANOS'
  const faqTitleText = isEn ? 'QUESTIONS' : 'PREGUNTAS'

  const faqs = isEn
    ? [
        { q: '1. WHAT CAPABILITIES DOES FOKUS OFFER?', a: 'Fokus operates through two specialized arms: Fokus Digital (custom web engineering, living design systems, high-converting UX/UI, and sub-second SEO) and Fokus Automations (CRM pipelines, multi-app webhooks, operational AI, and autonomous reporting).' },
        { q: '2. HOW DOES THE STRATEGIC SPRINT WORK?', a: 'We start with a thorough systems and commercial audit to pinpoint bottlenecks. Then, our engineers architect the digital foundation, build in rapid iterative sprints, stress-test under heavy volume, and deploy with real-time telemetry.' },
        { q: '3. WHAT IS THE TYPICAL DEPLOYMENT TIMELINE?', a: 'Automated CRM pipelines and focused web platforms typically deploy within 2 to 3 weeks. Full organizational transformations spanning both divisions average 5 to 8 weeks with continuous staging access.' },
        { q: '4. DO YOU WORK WITH REMOTE & GLOBAL TEAMS?', a: 'Yes. We collaborate asynchronously and in real time with enterprise clients across North America, Europe, and Latin America using modern communication tools and live telemetry.' },
        { q: '5. DO YOU PROVIDE POST-LAUNCH MONITORING?', a: 'Absolutely. We offer 24/7 uptime monitoring, automated webhook failure recovery, third-party API version management, and continuous performance tuning.' }
      ]
    : [
        { q: '1. ¿QUÉ SERVICIOS OFRECE FOKUS?', a: 'Fokus opera a través de dos divisiones: Fokus Digital (ingeniería web, sistemas de diseño, UX de conversión y SEO técnico) y Fokus Automations (pipelines CRM, integraciones API multi-app, flujos autorreparables y asistentes IA operativos).' },
        { q: '2. ¿CÓMO ES EL PROCESO COLABORATIVO?', a: 'Iniciamos con una auditoría integral de sistemas para identificar los cuellos de botella clave. Luego, nuestros arquitectos diseñan la base digital, construyen en sprints iterativos rápidos, prueban bajo carga y despliegan con telemetría en tiempo real.' },
        { q: '3. ¿CUÁNTO TIEMPO TOMA UN PROYECTO TÍPICO?', a: 'Pipelines de automatización o plataformas de landing suelen desplegarse en 2 a 3 semanas. Transformaciones integrales con ambas divisiones promedian de 5 a 8 semanas con acceso continuo a staging.' },
        { q: '4. ¿PUEDEN TRABAJAR CON EQUIPOS REMOTOS?', a: 'Sí. Colaboramos de forma asíncrona y en tiempo real con clientes enterprise y equipos ágiles en Norteamérica, Europa y Latinoamérica usando herramientas modernas de comunicación y telemetría.' },
        { q: '5. ¿OFRECEN MONITOREO Y SOPORTE POST-LANZAMIENTO?', a: 'Absolutamente. Ofrecemos monitoreo continuo de uptime, verificación automática de webhooks, gestión de actualizaciones de APIs de terceros y optimización de rendimiento constante.' }
      ]

  return (
    <div className="thimos-page contact-page">
      <FokusNavbar brand="fokus" theme="light" active="contact" />

      <section className="contact-hero-section">
        <div className="container">
          <h1 className="contact-giant-title" aria-label={titleText}>
            {titleText.split('').map((char, i) => (
              <span key={i} className="contact-title-char-wrap">
                <span className="contact-title-char" style={{ animationDelay: `${i * 60}ms` }}>
                  {char === ' ' ? '\u00A0' : char}
                </span>
              </span>
            ))}
          </h1>

          <div className="contact-grid">
            <div className="contact-left-col">
              {formStatus.submitted ? (
                <div className="contact-success-box">
                  <div className="success-icon-badge"><CheckIcon size={24} /></div>
                  <h3>{isEn ? 'MESSAGE RECEIVED' : 'MENSAJE RECIBIDO'}</h3>
                  <p>
                    {isEn
                      ? 'Thank you for reaching out. A partner from Fokus Digital or Fokus Automations will review your inquiry and reply within 4 business hours.'
                      : 'Gracias por escribirnos. Un socio de Fokus Digital o Fokus Automations revisará tus requerimientos y te responderá en menos de 4 horas hábiles.'}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form" noValidate>
                  <div className={`contact-form-row ${activeField === 'name' ? 'focused' : ''}`}>
                    <div className="contact-field-header">
                      <span className="field-icon"><UserIcon /></span>
                      <label className="field-label" htmlFor="contact-name">
                        {isEn ? 'FULL NAME *' : 'NOMBRE COMPLETO *'}
                      </label>
                    </div>
                    <div className="contact-input-wrap">
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setActiveField('name')}
                        onBlur={() => setActiveField(null)}
                        placeholder={isEn ? 'Carlos Mendoza' : 'Carlos Mendoza'}
                        maxLength={100}
                        required
                      />
                    </div>
                  </div>

                  <div className={`contact-form-row ${activeField === 'email' ? 'focused' : ''}`}>
                    <div className="contact-field-header">
                      <span className="field-icon"><MailIcon /></span>
                      <label className="field-label" htmlFor="contact-email">
                        {isEn ? 'CORPORATE EMAIL *' : 'CORREO CORPORATIVO *'}
                      </label>
                    </div>
                    <div className="contact-input-wrap">
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setActiveField('email')}
                        onBlur={() => setActiveField(null)}
                        placeholder="carlos@empresa.com"
                        maxLength={254}
                        required
                      />
                    </div>
                  </div>

                  <div className={`contact-form-row ${activeField === 'phone' ? 'focused' : ''}`}>
                    <div className="contact-field-header">
                      <span className="field-icon"><PhoneIcon /></span>
                      <label className="field-label" htmlFor="contact-phone">
                        {isEn ? 'PHONE / WHATSAPP' : 'TELÉFONO / WHATSAPP'}
                      </label>
                    </div>
                    <div className="contact-input-wrap">
                      <input
                        id="contact-phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onFocus={() => setActiveField('phone')}
                        onBlur={() => setActiveField(null)}
                        placeholder="+1 (555) 000-0000"
                        maxLength={30}
                      />
                    </div>
                  </div>

                  <div className={`contact-form-row ${activeField === 'message' ? 'focused' : ''}`}>
                    <div className="contact-field-header">
                      <span className="field-icon"><MessageSquareIcon /></span>
                      <label className="field-label" htmlFor="contact-message">
                        {isEn ? 'PROJECT DETAILS & GOALS' : 'DETALLES DEL PROYECTO'}
                      </label>
                    </div>
                    <div className="contact-input-wrap">
                      <textarea
                        id="contact-message"
                        name="message"
                        rows={4}
                        maxLength={2000}
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => setActiveField('message')}
                        onBlur={() => setActiveField(null)}
                        placeholder={
                          isEn
                            ? 'Describe your web platform goals or operational bottlenecks...'
                            : 'Cuéntanos sobre tu proyecto digital o las tareas manuales que deseas automatizar...'
                        }
                      />
                    </div>
                  </div>

                  <div className="contact-submit-row">
                    {formStatus.error && (
                      <span className="contact-form-error">{formStatus.error}</span>
                    )}
                    <button type="submit" className="contact-pill-submit" disabled={formStatus.loading || cooldown > 0}>
                      {formStatus.loading
                        ? (isEn ? 'SENDING…' : 'ENVIANDO…')
                        : cooldown > 0
                          ? (isEn ? `WAIT ${cooldown}s` : `ESPERA ${cooldown}s`)
                          : (isEn ? 'SEND MESSAGE' : 'ENVIAR MENSAJE')}
                    </button>
                  </div>
                </form>
              )}
            </div>

            <div className="contact-right-col">
              <div className="contact-photo-frame">
                <img
                  src={mayaImg}
                  alt="Equipo Fokus trabajando"
                  className="contact-photo"
                />
              </div>

              <div className="contact-info-cards-row">
                <div className="contact-info-card" ref={(el) => (infoCardsRef.current[0] = el)}>
                  <div className="card-top-icon"><MailIcon /></div>
                  <span className="card-label">{isEn ? 'DIRECT INQUIRIES' : 'CONSULTAS DIRECTAS'}</span>
                  <a href="mailto:contacto@fokus.com" className="card-value">
                    contacto@fokus.com
                  </a>
                  <p className="card-subtext">{isEn ? 'Average reply: 4h' : 'Respuesta media en 4h'}</p>
                </div>

                <div className="contact-info-card" ref={(el) => (infoCardsRef.current[1] = el)}>
                  <div className="card-top-icon"><PhoneIcon /></div>
                  <span className="card-label">{isEn ? 'PHONE / WHATSAPP' : 'TELÉFONO / WHATSAPP'}</span>
                  <a href="tel:+15551234567" className="card-value">
                    +1 (555) 123-4567
                  </a>
                  <p className="card-subtext">{isEn ? 'Mon - Fri 9:00 - 18:00' : 'Lun - Vie 9:00 - 18:00'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="contact-faq-section" ref={faqRef}>
        <div className="container">
          <div className="faq-giant-title-wrap">
            <h2 className={`faq-giant-title ${faqInView ? 'in-view' : ''}`} aria-label={faqTitleText}>
              {faqTitleText.split('').map((char, i) => (
                <span key={i} className="faq-title-char" style={{ animationDelay: `${i * 50}ms` }}>
                  {char}
                </span>
              ))}
            </h2>
          </div>

          <div className="faq-accordion-list">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i
              return (
                <div key={i} className={`faq-item ${isOpen ? 'open' : ''}`}>
                  <button
                    className="faq-question-btn"
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <span className="faq-chevron-wrap">
                      <Chevron open={isOpen} />
                    </span>
                  </button>
                  <div className="faq-answer-collapse">
                    <p className="faq-answer-text">{faq.a}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <FokusFooter brand="fokus" />
    </div>
  )
}

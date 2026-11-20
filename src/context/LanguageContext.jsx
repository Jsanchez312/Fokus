import { createContext, useContext, useState, useEffect } from 'react'

const LanguageContext = createContext({
  lang: 'es',
  setLang: () => {},
  toggleLang: () => {},
  isEn: false,
  t: (key) => key
})

export const translations = {
  es: {
    // Navbar
    'nav.about': 'NOSOTROS',
    'nav.digital': 'DIGITAL',
    'nav.automations': 'AUTOMATIZACIONES',
    'nav.projects': 'PROYECTOS',
    'nav.articles': 'ARTÍCULOS',
    'nav.cta': 'HABLEMOS',
    'nav.descriptor.digital': 'DIGITAL',
    'nav.descriptor.automations': 'AUTOMATIZACIONES',

    // Hero
    'hero.word1': 'ENFOQUE',
    'hero.word2': 'FUTURO',
    'hero.tag': 'UN SOLO ENFOQUE. DOS EQUIPOS ESPECIALIZADOS. CONSTRUIMOS LO QUE HACE AVANZAR TU NEGOCIO.',
    'hero.maya.title': 'FOKUS DIGITAL',
    'hero.maya.desc': 'Marcas creadas para el entorno digital.',
    'hero.maya.explore': 'Explorar Digital',
    'hero.maya.start': 'Iniciar un proyecto',

    // About Home
    'home.about.badge': 'ENFOQUE CENTRAL',
    'home.about.title': 'DOS DIVISIONES. UN SOLO COMPROMISO: PRECISIÓN TÉCNICA Y RESULTADOS MEDIBLES.',
    'home.about.p1': 'Fokus Digital diseña plataformas web rápidas, accesibles y optimizadas para conversión que hacen destacar a tu marca en el mercado.',
    'home.about.p2': 'Fokus Automations conecta tus herramientas comerciales y operativas para eliminar la fricción manual y los cuellos de botella.',
    'home.about.loc': 'Operaciones globales remotas · Ingeniería moderna',
    'home.about.clients': '+50 empresas confían en nuestros sistemas',

    // Services Home
    'home.services.badge': 'SERVICIOS PRINCIPALES',
    'home.services.title': 'QUÉ CONSTRUIMOS',
    'home.services.explore': 'Explorar Servicio',

    // Projects Home
    'home.projects.badge': 'CASOS DE ESTUDIO',
    'home.projects.title': 'PROYECTOS SELECCIONADOS',
    'home.projects.viewAll': 'Ver todos los proyectos',

    // Process Home
    'home.process.badge': 'METODOLOGÍA',
    'home.process.title': 'CÓMO TRABAJAMOS',
    'home.process.start': 'Comenzar un proyecto',

    // Team Home
    'home.team.badge': 'CAPACIDADES EXPERTAS',
    'home.team.title': 'EQUIPO FOKUS',

    // Reviews Home
    'home.reviews.badge': 'TESTIMONIOS',
    'home.reviews.title': 'LO QUE DICEN QUIENES TRABAJAN CON FOKUS',

    // Articles Home
    'home.articles.badge': 'EN FOCO',
    'home.articles.title': 'ARTÍCULOS & INSIGHTS',
    'home.articles.viewAll': 'Ver todos los artículos',

    // CTA Home
    'home.cta.title': '¿LISTO PARA TRANSFORMAR TU OPERACIÓN DIGITAL?',
    'home.cta.lead': 'Analizamos tus necesidades técnicas y comerciales en una llamada estratégica de 30 minutos sin compromiso.',
    'home.cta.btn': 'Iniciar Conversación',

    // Footer
    'footer.tagline': 'Plataformas web de alto impacto y sistemas de automatización comercial que hacen avanzar a empresas modernas.',
    'footer.division.digital': 'Plataformas web, sistemas de diseño y arquitectura de conversión.',
    'footer.division.automations': 'Integración de flujos, automatización de CRM e IA operativa.',
    'footer.rights': 'Todos los derechos reservados.',
    'footer.backToTop': 'VOLVER ARRIBA',

    // Projects Page
    'projects.badge': 'CASOS DE ESTUDIO · PORTAFOLIO',
    'projects.purpose': 'Resultados comerciales medibles.',
    'projects.title': 'PROYECTOS & CASOS DE ESTUDIO',
    'projects.lead': 'Descubre cómo nuestras dos divisiones —Fokus Digital y Fokus Automations— diseñan experiencias web de alto impacto y sistemas automatizados que transforman la operación de marcas en todo el mundo.',
    'projects.trusted': 'MARCAS Y EMPRESAS QUE CONFÍAN EN FOKUS:',
    'projects.filter.all': 'Todos los Proyectos',
    'projects.filter.digital': 'Fokus Digital',
    'projects.filter.automations': 'Fokus Automations',
    'projects.viewCase': 'Ver Caso de Estudio Completo',

    // Project Detail Page
    'projectDetail.back': '← Volver a Proyectos',
    'projectDetail.facts': 'FICHA DEL ENCARGO',
    'projectDetail.factsTitle': 'Con quién, dónde y para qué',
    'projectDetail.challengeOverline': 'EL ROCE QUE HABÍA QUE CORTAR',
    'projectDetail.challengeTitle': 'El problema, en concreto',
    'projectDetail.solutionOverline': 'LO QUE CONSTRUIMOS',
    'projectDetail.solutionTitle': 'La arquitectura, no el discurso',
    'projectDetail.reviewsOverline': 'LO QUE DIJO QUIEN PAGÓ EL TRABAJO',
    'projectDetail.reviewsTitle': 'Reseñas del proyecto',
    'projectDetail.verified': 'Reseña verificada',
    'projectDetail.deliverables': 'ENTREGABLES',
    'projectDetail.tech': 'TECNOLOGÍAS',
    'projectDetail.ctaTitle': '¿Quieres un sistema parecido?',
    'projectDetail.ctaDesc': 'Diseñamos la pieza a la medida de tu operación, no un paquete genérico.',
    'projectDetail.ctaBtn': 'Hablemos de tu proyecto',
    'projectDetail.nextLabel': 'SIGUIENTE CASO →',

    // About Page
    'about.word': 'NOSOTROS',
    'about.tagline': [
      'UNA', 'AGENCIA', 'ESPECIALIZADA', 'QUE', 'TRANSFORMA', 'IDEAS',
      'EN', 'EXPERIENCIAS', 'QUE', 'INSPIRAN', 'Y', 'CONECTAN'
    ],
    'about.stats.title': 'PRESENCIA DIGITAL & AUTOMATIZACIÓN EMPRESARIAL',
    'about.stats.reviews': 'Más de 20K+\nReseñas de Clientes',
    'about.experience.title': 'EXPERIENCIA',
    'about.experience.subtitle': 'AÑOS CONSTRUYENDO SISTEMAS DIGITALES QUE PERDURAN',
    'about.experience.desc': 'No nos medimos por trofeos de festival, sino por el rendimiento diario de nuestras soluciones: plataformas web que cargan en menos de un segundo, automatizaciones con 99.98% de precisión y procesos comerciales que ahorran cientos de horas al mes a nuestros clientes.',
    'about.team.title': 'EQUIPO',
    'about.team.viewAll': 'VER TODOS',

    // Blog Page
    'blog.badge': 'PUBLICACIONES & ANÁLISIS',
    'blog.purpose': 'Estrategia, arquitectura y sistemas.',
    'blog.title': 'ARTÍCULOS & INSIGHTS',
    'blog.lead': 'Análisis técnicos, guías de automatización y lecciones prácticas de ingeniería de software para líderes de empresas y creadores digitales.',
    'blog.featuredBadge': 'ARTÍCULO DESTACADO',
    'blog.readArticle': 'Leer Artículo Completo',
    'blog.readTimeSuffix': 'de lectura',
    'blog.back': '← Volver a Artículos',
    'blog.keyTakeaways': 'Puntos clave del artículo',
    'blog.shareArticle': 'Compartir este artículo',
    'blog.writtenBy': 'Publicado por',
    'blog.nextArticle': 'SIGUIENTE ARTÍCULO →',
    'blog.filter.all': 'Todos los Artículos',
    'blog.filter.digital': 'Estrategia Digital',
    'blog.filter.automations': 'Automatizaciones',
    'blog.filter.ai': 'Inteligencia Artificial'
  },
  en: {
    // Navbar
    'nav.about': 'ABOUT',
    'nav.digital': 'DIGITAL',
    'nav.automations': 'AUTOMATIONS',
    'nav.projects': 'PROJECTS',
    'nav.articles': 'ARTICLES',
    'nav.cta': "LET'S TALK",
    'nav.descriptor.digital': 'DIGITAL',
    'nav.descriptor.automations': 'AUTOMATIONS',

    // Hero
    'hero.word1': 'FOCUS',
    'hero.word2': 'FUTURE',
    'hero.tag': 'ONE SHARP FOCUS. TWO SPECIALIZED DIVISIONS. WE ENGINEER WHAT PROPELS YOUR BUSINESS.',
    'hero.maya.title': 'FOKUS DIGITAL',
    'hero.maya.desc': 'Brands engineered for the digital era.',
    'hero.maya.explore': 'Explore Digital',
    'hero.maya.start': 'Start a Project',

    // About Home
    'home.about.badge': 'CORE FOCUS',
    'home.about.title': 'TWO DIVISIONS. ONE COMMITMENT: TECHNICAL PRECISION AND MEASURABLE IMPACT.',
    'home.about.p1': 'Fokus Digital builds high-speed, accessible, conversion-driven web platforms that make your brand stand out.',
    'home.about.p2': 'Fokus Automations integrates your commercial and operational tools to eliminate manual friction and operational bottlenecks.',
    'home.about.loc': 'Global remote operations · Modern software engineering',
    'home.about.clients': '50+ enterprise brands trust our systems',

    // Services Home
    'home.services.badge': 'CORE CAPABILITIES',
    'home.services.title': 'WHAT WE BUILD',
    'home.services.explore': 'Explore Capability',

    // Projects Home
    'home.projects.badge': 'CASE STUDIES',
    'home.projects.title': 'SELECTED WORK',
    'home.projects.viewAll': 'View All Projects',

    // Process Home
    'home.process.badge': 'METHODOLOGY',
    'home.process.title': 'HOW WE OPERATE',
    'home.process.start': 'Start a Project',

    // Team Home
    'home.team.badge': 'EXPERT CAPABILITIES',
    'home.team.title': 'FOKUS TEAM',

    // Reviews Home
    'home.reviews.badge': 'TESTIMONIALS',
    'home.reviews.title': 'WHAT TEAMS SAY ABOUT WORKING WITH FOKUS',

    // Articles Home
    'home.articles.badge': 'IN FOCUS',
    'home.articles.title': 'ARTICLES & INSIGHTS',
    'home.articles.viewAll': 'View All Articles',

    // CTA Home
    'home.cta.title': 'READY TO TRANSFORM YOUR DIGITAL OPERATIONS?',
    'home.cta.lead': 'We analyze your technical and commercial requirements in a focused 30-minute strategic consultation.',
    'home.cta.btn': 'Start a Conversation',

    // Footer
    'footer.tagline': 'High-impact web platforms and commercial automation systems that propel modern enterprises.',
    'footer.division.digital': 'Web platforms, living design systems, and conversion architecture.',
    'footer.division.automations': 'Workflow integration, CRM pipeline automation, and operational AI.',
    'footer.rights': 'All rights reserved.',
    'footer.backToTop': 'BACK TO TOP',

    // Projects Page
    'projects.badge': 'CASE STUDIES · PORTFOLIO',
    'projects.purpose': 'Measurable commercial outcomes.',
    'projects.title': 'PROJECTS & CASE STUDIES',
    'projects.lead': 'Discover how our two specialized divisions —Fokus Digital and Fokus Automations— engineer high-impact web platforms and automated systems transforming organizations worldwide.',
    'projects.trusted': 'BRANDS AND COMPANIES THAT TRUST FOKUS:',
    'projects.filter.all': 'All Projects',
    'projects.filter.digital': 'Fokus Digital',
    'projects.filter.automations': 'Fokus Automations',
    'projects.viewCase': 'View Full Case Study',

    // Project Detail Page
    'projectDetail.back': '← Back to Projects',
    'projectDetail.facts': 'PROJECT BRIEF',
    'projectDetail.factsTitle': 'Who, where, and what mattered',
    'projectDetail.challengeOverline': 'THE BOTTLENECK TO ELIMINATE',
    'projectDetail.challengeTitle': 'The friction, concretely',
    'projectDetail.solutionOverline': 'WHAT WE ENGINEERED',
    'projectDetail.solutionTitle': 'Architecture, not slogans',
    'projectDetail.reviewsOverline': 'WHAT THE CLIENT DELIVERED FEEDBACK ON',
    'projectDetail.reviewsTitle': 'Verified Client Reviews',
    'projectDetail.verified': 'Verified Review',
    'projectDetail.deliverables': 'DELIVERABLES',
    'projectDetail.tech': 'TECHNOLOGIES',
    'projectDetail.ctaTitle': 'Need a similar system?',
    'projectDetail.ctaDesc': 'We design custom solutions engineered around your exact operation, not generic templates.',
    'projectDetail.ctaBtn': "Let's talk about your project",
    'projectDetail.nextLabel': 'NEXT CASE STUDY →',

    // About Page
    'about.word': 'ABOUT US',
    'about.tagline': [
      'A', 'SPECIALIZED', 'STUDIO', 'TRANSFORMING', 'IDEAS',
      'INTO', 'EXPERIENCES', 'THAT', 'INSPIRE', 'AND', 'CONNECT'
    ],
    'about.stats.title': 'DIGITAL PRESENCE & BUSINESS AUTOMATION',
    'about.stats.reviews': 'Over 20K+\nVerified Client Reviews',
    'about.experience.title': 'EXPERIENCE',
    'about.experience.subtitle': 'YEARS BUILDING DIGITAL SYSTEMS THAT LAST',
    'about.experience.desc': 'We do not measure our work by festival trophies, but by the daily commercial reliability of our platforms: sub-second loading speeds, 99.98% automation accuracy, and workflows saving our clients hundreds of hours every month.',
    'about.team.title': 'TEAM',
    'about.team.viewAll': 'VIEW ALL',

    // Blog Page
    'blog.badge': 'PUBLICATIONS & ANALYSIS',
    'blog.purpose': 'Strategy, architecture & systems.',
    'blog.title': 'ARTICLES & INSIGHTS',
    'blog.lead': 'Technical blueprints, automation roadmaps, and software engineering lessons for business leaders and modern creators.',
    'blog.featuredBadge': 'FEATURED ARTICLE',
    'blog.readArticle': 'Read Full Article',
    'blog.readTimeSuffix': 'read',
    'blog.back': '← Back to Articles',
    'blog.keyTakeaways': 'Key Takeaways',
    'blog.shareArticle': 'Share this article',
    'blog.writtenBy': 'Published by',
    'blog.nextArticle': 'NEXT ARTICLE →',
    'blog.filter.all': 'All Articles',
    'blog.filter.digital': 'Digital Strategy',
    'blog.filter.automations': 'Automations',
    'blog.filter.ai': 'Artificial Intelligence'
  }
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    try {
      const stored = localStorage.getItem('fokus_language')
      return stored === 'en' ? 'en' : 'es'
    } catch {
      return 'es'
    }
  })

  const setLang = (nextLang) => {
    const val = nextLang === 'en' ? 'en' : 'es'
    setLangState(val)
    try {
      localStorage.setItem('fokus_language', val)
    } catch {
      // ignore
    }
  }

  const toggleLang = () => {
    setLang(lang === 'es' ? 'en' : 'es')
  }

  const t = (key) => {
    const dict = translations[lang] || translations.es
    return dict[key] !== undefined ? dict[key] : key
  }

  const value = {
    lang,
    setLang,
    toggleLang,
    isEn: lang === 'en',
    t
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}

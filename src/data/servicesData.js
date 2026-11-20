import s1 from '../assets/svc1.jpg'
import s2 from '../assets/svc2.jpg'
import s4 from '../assets/svc4.jpg'
import aether from '../assets/proj-aether.jpg'
import solar from '../assets/proj-solar.jpg'
import maya from '../assets/hero-maya.jpg'

export const DIGITAL_SERVICES = [
  {
    id: 'web-development',
    title: 'SITIOS WEB DE ALTO RENDIMIENTO',
    shortTitle: 'Sitios y plataformas',
    brand: 'Fokus Digital',
    badge: 'DIGITAL',
    accent: '#5B7CFF',
    accentLight: '#2F5BFF',
    summary:
      'Sitios y plataformas pensados para que te vean, te crean y te encuentren: arquitectura moderna, carga inmediata y recorridos que convierten visitas en clientes.',
    image: s1,
    category: 'Desarrollo e ingeniería',
    tagline: 'Marcas hechas para el entorno digital.',
    lead: 'Llevamos empresas al entorno digital con una presencia que se ve bien y trabaja de verdad.',
    overview:
      'Diseñamos y programamos puntos de contacto a medida, con una meta clara: resultado comercial. Cada sitio se construye con tecnología actual, tipografía que se adapta a cualquier pantalla y páginas que responden en menos de un segundo, para que quien llega se quede y decida.',
    deliverables: [
      {
        title: 'Plataformas web a medida',
        description: 'Arquitectura en Next.js y React pensada para velocidad, seguridad e interacciones fluidas en todos los dispositivos.'
      },
      {
        title: 'CMS desacoplado',
        description: 'Tu equipo de marketing publica contenido sin romper el diseño ni el rendimiento del código.'
      },
      {
        title: 'Microinteracciones y movimiento',
        description: 'Estados táctiles, transiciones suaves y detalle espacial que suben el prestigio de la marca.'
      },
      {
        title: 'Optimización de métricas web',
        description: 'Adaptación pixel a pixel, puntuaciones altas en PageSpeed, sin saltos de layout y con carga instantánea de recursos.'
      }
    ],
    process: [
      { step: '01', title: 'Arquitectura digital', desc: 'Mapa del sitio, recorridos de usuario y puntos de interacción clave.' },
      { step: '02', title: 'Prototipo interactivo', desc: 'Wireframes de alta fidelidad en Figma, contrastados con comportamiento real.' },
      { step: '03', title: 'Ingeniería limpia', desc: 'Código listo para producción y pruebas en todos los navegadores.' },
      { step: '04', title: 'Lanzamiento global', desc: 'Caché en red de distribución, certificado SSL y telemetría del día uno.' }
    ],
    metrics: [
      { value: '0.4s', label: 'Tiempo medio hasta el primer byte' },
      { value: '3.4x', label: 'Subida en tasa de conversión' },
      { value: '99.9%', label: 'Disponibilidad del sitio' }
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Figma', 'Node.js']
  },
  {
    id: 'digital-branding',
    title: 'IDENTIDAD Y SISTEMAS DE MARCA DIGITAL',
    shortTitle: 'Sistemas de marca',
    brand: 'Fokus Digital',
    badge: 'DIGITAL',
    accent: '#5B7CFF',
    accentLight: '#2F5BFF',
    summary:
      'Pasamos la estrategia de marca a una presencia digital nítida y coherente: librerías vivas, escala tipográfica y reglas que se mantienen en cada pantalla.',
    image: s2,
    category: 'Sistemas de diseño e identidad',
    tagline: 'Claridad puesta donde importa.',
    lead: 'Una sola lengua visual, diseñada para pantallas y software, no para un PDF que nadie abre.',
    overview:
      'Una marca digital no es un logotipo colgado en un header. Es una gramática visual que funciona igual en un favicon de 16 píxeles que en un muro de pantallas. Diseñamos sistemas vivos y tokens que crecen con el producto, no contra él.',
    deliverables: [
      {
        title: 'Sistemas de diseño modulares',
        description: 'Librerías atómicas en Figma y tokens de código para que producto y marketing hablen el mismo idioma.'
      },
      {
        title: 'Tipografía y color en tokens',
        description: 'Combinaciones accesibles, jerarquías fluidas y temas claro, oscuro y neutro listos para usar.'
      },
      {
        title: 'Kit de piezas digitales',
        description: 'Plantillas para redes, decks, correos y lineamientos de medios para ejecutar sin esperar al diseñador.'
      },
      {
        title: 'Documentación de componentes',
        description: 'Manual vivo con reglas de uso, espaciado y fragmentos de código para el equipo de desarrollo.'
      }
    ],
    process: [
      { step: '01', title: 'Auditoría visual', desc: 'Inventario de cada punto de contacto digital y de los rozamientos que ya existen.' },
      { step: '02', title: 'Tokens de base', desc: 'Rejilla, radios, color y escala tipográfica como cimiento.' },
      { step: '03', title: 'Librería de componentes', desc: 'Desde la navegación hasta widgets interactivos, listos para cualquier ancho.' },
      { step: '04', title: 'Entrega y herramientas', desc: 'Variables de Figma conectadas al repositorio de frontend.' }
    ],
    metrics: [
      { value: '100%', label: 'Consistencia de diseño' },
      { value: '-60%', label: 'Tiempo de desarrollo frontend' },
      { value: '45+', label: 'Componentes documentados' }
    ],
    technologies: ['Figma Variables', 'Storybook', 'Design Tokens', 'Tailwind', 'SVG Optimization']
  },
  {
    id: 'ux-ui-design',
    title: 'ARQUITECTURA UX/UI QUE CONVIERTE',
    shortTitle: 'Arquitectura UX/UI',
    brand: 'Fokus Digital',
    badge: 'DIGITAL',
    accent: '#5B7CFF',
    accentLight: '#2F5BFF',
    summary:
      'Interfaces pensadas para personas: menos fricción, más permanencia y un camino claro hacia la acción que te interesa.',
    image: aether,
    category: 'Producto y diseño de experiencia',
    tagline: 'La atención, puesta donde cuenta.',
    lead: 'Convertimos productos complejos en software que se entiende a la primera.',
    overview:
      'Cruzamos auditorías de uso reales con ejecución estética. Da igual si es un portal de alta de clientes, una interfaz SaaS o un tablero transaccional: cada clic tiene que sentirse intencional, fácil y con recompensa.',
    deliverables: [
      {
        title: 'Arquitectura de información y wireframes',
        description: 'Una jerarquía clara que lleva a la gente a su objetivo sin fatiga cognitiva.'
      },
      {
        title: 'Diseño de interfaz de alta fidelidad',
        description: 'Layouts pulidos, tema claro y oscuro, y estados táctiles que responden al gesto.'
      },
      {
        title: 'Pruebas con usuarios reales',
        description: 'Validamos con el público objetivo y resolvemos obstáculos de navegación antes de escribir código.'
      },
      {
        title: 'Optimización del embudo',
        description: 'Checkout, solicitud de demo y altas simplificados para que se complete más, no menos.'
      }
    ],
    process: [
      { step: '01', title: 'Mapa mental del cliente', desc: 'Cómo trabaja tu cliente y con qué criterios decide.' },
      { step: '02', title: 'Sprints de baja fidelidad', desc: 'Estructura primero: utilidad, no decoración.' },
      { step: '03', title: 'Oficio visual', desc: 'Tipografía de alto contraste, ritmo de espacios y pulido fino.' },
      { step: '04', title: 'Verificación de uso', desc: 'Tareas reales, microcopy y ajustes hasta que fluye.' }
    ],
    metrics: [
      { value: '+185%', label: 'Tareas completadas' },
      { value: '-48%', label: 'Abandono en checkout' },
      { value: '4.9/5', label: 'Puntuación de usabilidad' }
    ],
    technologies: ['Figma', 'UserTesting', 'Framer', 'Protopie', 'Hotjar']
  },
  {
    id: 'seo-performance',
    title: 'VISIBILIDAD EN BUSCADORES Y RENDIMIENTO',
    shortTitle: 'SEO y rendimiento',
    brand: 'Fokus Digital',
    badge: 'DIGITAL',
    accent: '#5B7CFF',
    accentLight: '#2F5BFF',
    summary:
      'SEO de cimiento, Core Web Vitals en orden y contenidos estructurados para que la marca aparezca arriba y se descubra sin pelear cada clic.',
    image: solar,
    category: 'Búsqueda y telemetría',
    tagline: 'Ser visto, generar confianza y ser encontrado.',
    lead: 'Canales orgánicos que duran, porque el sitio está bien construido por dentro.',
    overview:
      'La visibilidad no se pega al final: nace en la arquitectura. Ordenamos HTML semántico, datos estructurados, velocidad y autoridad temática para que los buscadores entiendan —y prioricen— lo que publicas.',
    deliverables: [
      {
        title: 'Auditorías técnicas de búsqueda',
        description: 'Rastreo completo, presupuesto de crawl, indexación y limpieza de canónicos.'
      },
      {
        title: 'Schema y JSON-LD',
        description: 'Rich snippets, marca de organización y entidades que Google y los buscadores de IA reconocen.'
      },
      {
        title: 'Ingeniería de Core Web Vitals',
        description: 'Sin saltos de layout, LCP bajo control y respuesta inmediata al primer gesto.'
      },
      {
        title: 'Clústeres de contenido',
        description: 'Investigación de intención de compra y arquitectura informativa que responde a esa búsqueda.'
      }
    ],
    process: [
      { step: '01', title: 'Diagnóstico de rastreo', desc: 'Redirecciones rotas, scripts que bloquean el pintado y rutas duplicadas.' },
      { step: '02', title: 'Reestructura semántica', desc: 'Encabezados, enlaces internos y marcado schema.' },
      { step: '03', title: 'Remedio de velocidad', desc: 'Imágenes, precarga de fuentes y caché del servidor.' },
      { step: '04', title: 'Seguimiento de posiciones', desc: 'Telemetría semanal e indexación en Search Console.' }
    ],
    metrics: [
      { value: '+240%', label: 'Crecimiento de búsqueda orgánica' },
      { value: '100', label: 'Puntuación de rendimiento' },
      { value: 'Top 3', label: 'Palabras clave objetivo' }
    ],
    technologies: ['Google Search Console', 'Ahrefs', 'Screaming Frog', 'JSON-LD', 'PageSpeed Insights']
  }
]

export const AUTOMATION_SERVICES = [
  {
    id: 'crm-pipeline',
    title: 'AUTOMATIZACIÓN DE CRM Y PIPELINE',
    shortTitle: 'CRM y enrutamiento',
    brand: 'Fokus Automations',
    badge: 'AUTOMATIZACIONES',
    accent: '#2EE59D',
    accentLight: '#0FA968',
    summary:
      'Cada lead entra, se enriquece y llega a la persona correcta en HubSpot, Salesforce o Pipedrive. Sin copiar a mano. Sin leads perdidos. Respuesta al instante.',
    image: s4,
    category: 'Sistemas comerciales y CRM',
    tagline: 'El trabajo, ejecutándose solo.',
    lead: 'El ciclo comercial deja de ser un Excel compartido. El equipo vende; el sistema registra.',
    overview:
      'Cuando llega una consulta, los segundos importan. Nuestras automatizaciones enriquecen el registro, asignan dueño según territorio y disparan el seguimiento en correo y calendario, sin que nadie copie y pegue.',
    deliverables: [
      {
        title: 'Triaje inmediato de leads',
        description: 'Captura, deduplicación y envío condicional del formulario web al ejecutivo que corresponde.'
      },
      {
        title: 'Enriquecimiento de la ficha',
        description: 'Plantilla, rango de ingresos, stack tecnológico y perfil de LinkedIn entran solos a la ficha del CRM.'
      },
      {
        title: 'Disparadores por etapa del trato',
        description: 'Al avanzar el deal se actualiza la etapa, se arma la propuesta y se avisa en Slack a quien tiene que actuar.'
      },
      {
        title: 'Agenda sincronizada',
        description: 'Reservas que respetan husos, disponibilidad y recordatorios por SMS o correo, sin ir y venir.'
      }
    ],
    process: [
      { step: '01', title: 'Auditoría del embudo', desc: 'De formulario a factura cobrada, etapa por etapa.' },
      { step: '02', title: 'Modelo de datos', desc: 'Propiedades, etapas y criterios de ciclo de vida, con nombres que el equipo entiende.' },
      { step: '03', title: 'Escenarios', desc: 'Ramas, excepciones y alertas cuando algo se sale del guion.' },
      { step: '04', title: 'Pruebas y entrega', desc: 'Simulamos casos raros y entrenamos al equipo comercial en el flujo nuevo.' }
    ],
    metrics: [
      { value: '< 2 min', label: 'Tiempo medio de respuesta al lead' },
      { value: '0%', label: 'Leads de entrada perdidos' },
      { value: '18 h/sem', label: 'Horas recuperadas por comercial' }
    ],
    technologies: ['HubSpot', 'Salesforce', 'Pipedrive', 'Make / Zapier', 'Clearbit', 'Calendly']
  },
  {
    id: 'workflow-integrations',
    title: 'FLUJOS INTERNOS E INTEGRACIONES ENTRE APPS',
    shortTitle: 'Integraciones de flujo',
    brand: 'Fokus Automations',
    badge: 'AUTOMATIZACIONES',
    accent: '#2EE59D',
    accentLight: '#0FA968',
    summary:
      'Unimos el software que hoy no se habla. Webhooks a medida y motores Make o Zapier que conectan bases, facturación, inventario y mensajería del equipo.',
    image: maya,
    category: 'Integraciones empresariales',
    tagline: 'Flujos, integraciones y sistemas que operan solos.',
    lead: 'Todas tus herramientas SaaS, orquestadas como una sola tubería operativa.',
    overview:
      'La empresa usa veinte apps y ninguna comparte idioma. Construimos puentes de API, webhooks y árboles de lógica que sincronizan datos en ambos sentidos, sin doble captura ni “te lo paso por WhatsApp”.',
    deliverables: [
      {
        title: 'Puentes de API y webhooks',
        description: 'Bases propias y APIs de terceros unidas con endpoints pensados para volumen.'
      },
      {
        title: 'Facturación y cobro automáticos',
        description: 'Al cerrar el trato se dispara la factura en Stripe o QuickBooks, se concilia el cobro y se actualiza la contabilidad.'
      },
      {
        title: 'Orquestación de avisos al equipo',
        description: 'Canales de Slack o Teams que hablan solo cuando hay que actuar, no cada vez que se mueve un campo.'
      },
      {
        title: 'Reintentos y bitácora',
        description: 'Colas de reintento y alertas a ingeniería para que un corte de un tercero no se lleve los datos.'
      }
    ],
    process: [
      { step: '01', title: 'Inventario de software', desc: 'Apps, licencias y pases de mano que hoy hace una persona.' },
      { step: '02', title: 'Plano de datos', desc: 'Una fuente de verdad y el esquema de cómo viaja la información.' },
      { step: '03', title: 'Sprints de integración', desc: 'Escenarios Make y escuchas de webhook, por módulos.' },
      { step: '04', title: 'Prueba de carga', desc: 'Lotes grandes para ver si el sistema aguanta el día feo.' }
    ],
    metrics: [
      { value: '120k+', label: 'Tareas automatizadas al mes' },
      { value: '99.98%', label: 'Precisión de los datos' },
      { value: '14 días', label: 'Implementación media' }
    ],
    technologies: ['Make.com', 'Zapier Central', 'REST APIs & Webhooks', 'Stripe', 'Airtable', 'Slack API']
  },
  {
    id: 'ai-support-operations',
    title: 'IA OPERATIVA Y ALTAS DE CLIENTES',
    shortTitle: 'IA de soporte y operación',
    brand: 'Fokus Automations',
    badge: 'AUTOMATIZACIONES',
    accent: '#2EE59D',
    accentLight: '#0FA968',
    summary:
      'Tickets, enrutamiento de consultas y altas de cliente que corren solos. Cientos de horas de equipo de vuelta, atención las 24 horas.',
    image: s2,
    category: 'IA y operación de clientes',
    tagline: 'El trabajo repetitivo, reemplazado por sistemas que no se cansan.',
    lead: 'Escala soporte y altas de cliente sin inflar la nómina.',
    overview:
      'Armamos una capa operativa de IA entrenada con tus procedimientos, documentación de producto e historial de clientes. Clasifica tickets urgentes, orquesta el alta de un cliente nuevo y trabaja de madrugada igual que a las once de la mañana.',
    deliverables: [
      {
        title: 'Alta automática de clientes',
        description: 'Carpetas compartidas, contratos, cuestionarios y secuencia de bienvenida se crean al confirmar el pago.'
      },
      {
        title: 'Clasificación de tickets con IA',
        description: 'El sistema etiqueta urgencia, propone respuesta y deja al equipo revisar, no redactar desde cero.'
      },
      {
        title: 'Asistentes internos de procedimiento',
        description: 'Asistentes privados, entrenados solo con tus docs de Notion o Drive, que contestan al equipo en segundos.'
      },
      {
        title: 'Encuestas y reseñas en el momento justo',
        description: 'NPS y seguimientos según el sentimiento, disparados al cerrar un hito, no tres meses tarde.'
      }
    ],
    process: [
      { step: '01', title: 'Ordenar procedimientos', desc: 'Documentos, preguntas frecuentes y peticiones que se repiten.' },
      { step: '02', title: 'Base de conocimiento', desc: 'Entrenamiento privado, con límites claros de lo que la IA puede decir.' },
      { step: '03', title: 'Encaje en el flujo', desc: 'Pasos automáticos dentro de Zendesk, Intercom o el correo.' },
      { step: '04', title: 'Auditoría de calidad', desc: 'Revisamos las primeras corridas y afinamos umbrales de confianza.' }
    ],
    metrics: [
      { value: '72%', label: 'Resolución en el primer contacto' },
      { value: '24/7', label: 'Atención inmediata al cliente' },
      { value: '-75%', label: 'Tiempo de alta de cliente' }
    ],
    technologies: ['OpenAI API', 'Intercom', 'Zendesk', 'Notion API', 'Make.com', 'Pinecone']
  },
  {
    id: 'data-telemetry',
    title: 'REPORTES AUTOMÁTICOS Y TELEMETRÍA',
    shortTitle: 'Reportes automáticos',
    brand: 'Fokus Automations',
    badge: 'AUTOMATIZACIONES',
    accent: '#2EE59D',
    accentLight: '#0FA968',
    summary:
      'Adiós a copiar filas el viernes. Extracción programada, tableros en vivo y resúmenes ejecutivos que llegan a Slack o al correo solos.',
    image: s1,
    category: 'Telemetría y analítica',
    tagline: 'Hablamos de horas recuperadas, no de “transformación”.',
    lead: 'La dirección ve el número ahora, no el lunes cuando alguien terminó el Excel.',
    overview:
      'Nadie en gerencia debería pasar la tarde copiando cifras entre Sheets, el panel de Stripe y los anuncios. Construimos tuberías que juntan, limpian y entregan reportes listos para quien decide.',
    deliverables: [
      {
        title: 'Extracción y limpieza automática',
        description: 'Scripts programados que bajan ventas, operación y finanzas a un almacén analítico ordenado.'
      },
      {
        title: 'Tableros ejecutivos en vivo',
        description: 'Churn, costo de adquisición y producción del equipo, legibles de un vistazo.'
      },
      {
        title: 'Resumen semanal en Slack',
        description: 'Los KPI de la semana, el lunes por la mañana, en el canal de liderazgo. Sin PowerPoint.'
      },
      {
        title: 'Alertas de desviación',
        description: 'Aviso inmediato si un umbral, un presupuesto o una anomalía operativa se sale de rango.'
      }
    ],
    process: [
      { step: '01', title: 'Definir la métrica', desc: 'Qué número usa de verdad la dirección para girar el timón.' },
      { step: '02', title: 'Armar la tubería', desc: 'Extracción desde Stripe, bancos, anuncios y CRM.' },
      { step: '03', title: 'Diseñar el tablero', desc: 'Gráficas claras, con refresco automático.' },
      { step: '04', title: 'Entrega automática', desc: 'Correo y Slack, cada semana, sin que nadie pulse enviar.' }
    ],
    metrics: [
      { value: '10 h/sem', label: 'Horas de dirección recuperadas' },
      { value: 'En vivo', label: 'Frescura de los datos' },
      { value: '100%', label: 'Reportes manuales eliminados' }
    ],
    technologies: ['Google BigQuery', 'Looker Studio', 'PostgreSQL', 'Stripe API', 'Slack Webhooks']
  }
]

export function getAllServices() {
  return [...DIGITAL_SERVICES, ...AUTOMATION_SERVICES]
}

export function getServiceById(id) {
  return getAllServices().find((s) => s.id === id)
}

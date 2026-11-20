import projAether from '../assets/proj-aether.jpg'
import projSolar from '../assets/proj-solar.jpg'
import svc1 from '../assets/svc1.jpg'
import svc2 from '../assets/svc2.jpg'
import svc4 from '../assets/svc4.jpg'
import maya from '../assets/hero-maya.jpg'
import team1 from '../assets/team1.jpg'
import team2 from '../assets/team2.jpg'
import team3 from '../assets/team3.jpg'
import team4 from '../assets/team4.jpg'

export const PROJECTS_DATA = [
  {
    slug: 'aether-dynamics',
    title: 'AETHER DYNAMICS',
    brandName: 'Aether Dynamics',
    division: 'Fokus Digital',
    divisionKey: 'digital',
    category: 'Plataforma web y sistema de diseño',
    industry: 'Aeroespacial y telemetría',
    year: '2024',
    duration: '14 semanas',
    location: 'Houston · remoto',
    badge: 'DIGITAL',
    accentColor: '#5B7CFF',
    heroImage: projAether,
    galleryImages: [projAether, svc1, maya],
    summary:
      'Rediseño completo de la plataforma corporativa y del sistema de diseño de una compañía de tecnología aeroespacial, para que un catálogo técnico deje de intimidar y empiece a vender.',
    story: [
      {
        heading: 'Qué pedía el negocio',
        body: 'Aether Dynamics vende sistemas de telemetría a gobiernos y a fabricantes de aeronaves. El producto es serio; el sitio no lo era. Tenían tres subsitios, tres voces y un tiempo de carga que ahuyentaba a cualquiera con prisa. El equipo comercial perdía demos porque el visitante no entendía, en treinta segundos, qué hacía la empresa.'
      },
      {
        heading: 'Cómo lo encaramos',
        body: 'Fokus Digital partió de una arquitectura única en Next.js, con páginas de producto que un editor puede publicar sin pedir permiso a ingeniería. El sistema de diseño —tokens, componentes y motion— vive en Figma y en código a la vez. Lo visual no es un barniz: es la forma en que un ingeniero de compras entiende el catálogo sin una llamada de una hora.'
      },
      {
        heading: 'Qué cambió en el día a día',
        body: 'Las solicitudes de demo enterprise subieron un 240% en el primer trimestre. El LCP bajó a 0,35 segundos. Marketing lanza una landing de misión en minutos, no en sprints. El sitio dejó de ser un folleto y pasó a ser el primer vendedor del equipo.'
      }
    ],
    client: {
      name: 'Carlos Mendoza',
      role: 'Director de Tecnología',
      company: 'Aether Dynamics Inc.',
      avatar: team2,
      quote:
        'Fokus no nos hizo un sitio bonito. Nos hizo un sitio que un CTO entiende en diez segundos y que pide una demo sin que nadie lo persiga. 0,3 segundos de carga y un 240% más de solicitudes en el primer trimestre.',
      rating: 5
    },
    reviews: [
      {
        name: 'Carlos Mendoza',
        role: 'Director de Tecnología',
        company: 'Aether Dynamics Inc.',
        avatar: team2,
        quote:
          'Fokus no nos hizo un sitio bonito. Nos hizo un sitio que un CTO entiende en diez segundos y que pide una demo sin que nadie lo persiga. 0,3 segundos de carga y un 240% más de solicitudes en el primer trimestre.',
        rating: 5
      },
      {
        name: 'Helena Ortiz',
        role: 'Directora de Marketing',
        company: 'Aether Dynamics Inc.',
        avatar: team1,
        quote:
          'Antes cada landing nueva era un ticket a desarrollo de tres semanas. Hoy el equipo publica solo, sin romper la marca. Eso, para una empresa que lanza misiones cada trimestre, no es un lujo: es oxígeno.',
        rating: 5
      },
      {
        name: 'David Chen',
        role: 'VP de Alianzas Enterprise',
        company: 'Aether Dynamics Inc.',
        avatar: team4,
        quote:
          'Los clientes institucionales comentan la claridad. Nadie nos pide ya “mándenme un PDF porque no entendí el sitio”. El sitio es el PDF, y más rápido.',
        rating: 5
      }
    ],
    challenge:
      'La presencia web estaba partida en subsitios lentos, sin una identidad. Quien compraba sistemas aeroespaciales no lograba leer el catálogo a la velocidad que exige una mesa de evaluación.',
    solution:
      'Una sola arquitectura moderna, renderizado híbrido, microinteracciones y un sistema de diseño modular. El equipo editorial publica páginas de producto en minutos, sin perder fidelidad visual.',
    metrics: [
      { value: '+240%', label: 'Leads calificados' },
      { value: '0,35s', label: 'Carga media (LCP)' },
      { value: '99/100', label: 'Core Web Vitals' }
    ],
    deliverables: [
      'Arquitectura web modular en Next.js y React',
      'Tokens de diseño y guía de estilos viva',
      'SEO técnico de cimiento, no de parche',
      'CMS desacoplado para publicación autónoma'
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Figma', 'Vercel Edge']
  },
  {
    slug: 'solar-edge-health',
    title: 'SOLAREDGE HEALTHCARE',
    brandName: 'SolarEdge Health',
    division: 'Fokus Automations',
    divisionKey: 'automations',
    category: 'Automatización operativa y CRM',
    industry: 'Red médica privada',
    year: '2024',
    duration: '11 semanas',
    location: 'Madrid · 40 centros',
    badge: 'AUTOMATIZACIONES',
    accentColor: '#2EE59D',
    heroImage: projSolar,
    galleryImages: [projSolar, svc2, team1],
    summary:
      'Captación, triaje y asignación de pacientes para una red con más de 40 centros: lo que un coordinador hacía a mano en cuatro horas ahora ocurre en un segundo y medio.',
    story: [
      {
        heading: 'El cuello de botella real',
        body: 'SolarEdge Health no tenía un problema de “transformación digital”. Tenía un problema de horas. Más de 80 a la semana se iban en copiar formularios a HubSpot y a la base clínica. Las citas se confirmaban tarde. Los pacientes se iban. HIPAA no perdona un Excel suelto.'
      },
      {
        heading: 'El sistema que construimos',
        body: 'Fokus Automations armó una tubería con webhooks, colas de reintento y cifrado. El formulario seguro alimenta HubSpot, WhatsApp confirma la cita y la agenda médica se actualiza en el momento. Si un servicio se cae, la cola reintenta; el dato no se pierde en el pico de las 9 de la mañana.'
      },
      {
        heading: 'Lo que el equipo médico nota',
        body: 'El triaje bajó 85%. El paciente recibe respuesta en 1,5 segundos. Cero pérdida de datos en picos. Los coordinadores volvieron a coordinar, no a transcribir.'
      }
    ],
    client: {
      name: 'Elena Rostova',
      role: 'Directora de Operaciones',
      company: 'SolarEdge Health Group',
      avatar: team1,
      quote:
        'El cuello de botella de la asignación desapareció. Lo que un coordinador hacía a mano en cuatro horas ahora ocurre en 1,5 segundos, sin errores y sin pelear con tres pantallas a la vez.',
      rating: 5
    },
    reviews: [
      {
        name: 'Elena Rostova',
        role: 'Directora de Operaciones',
        company: 'SolarEdge Health Group',
        avatar: team1,
        quote:
          'El cuello de botella de la asignación desapareció. Lo que un coordinador hacía a mano en cuatro horas ahora ocurre en 1,5 segundos, sin errores y sin pelear con tres pantallas a la vez.',
        rating: 5
      },
      {
        name: 'Dr. Andrés Molina',
        role: 'Director médico de red',
        company: 'SolarEdge Health Group',
        avatar: team2,
        quote:
          'Mis coordinadores dejaron de llegar agotados a las 11. El sistema no “ayuda”: hace el trabajo sucio. Nosotros volvimos a hablar con pacientes, que es para lo que estudiamos.',
        rating: 5
      },
      {
        name: 'Lucía Ferrer',
        role: 'Responsable de cumplimiento',
        company: 'SolarEdge Health Group',
        avatar: team3,
        quote:
          'Pedí trazabilidad y cifrado, no un demo bonito. Fokus entregó bitácora, reintentos y un diseño que un auditor entiende. Eso es raro, y se agradece.',
        rating: 5
      }
    ],
    challenge:
      'El equipo médico perdía más de 80 horas semanales transcribiendo formularios. Las citas se confirmaban tarde y los pacientes abandonaban el proceso.',
    solution:
      'Webhooks y colas resilientes que unen el formulario, HubSpot, WhatsApp y la agenda, con cifrado alineado a normativa sanitaria.',
    metrics: [
      { value: '-85%', label: 'Tiempo de triaje' },
      { value: '1,5s', label: 'Respuesta al paciente' },
      { value: '0%', label: 'Pérdida de datos en picos' }
    ],
    deliverables: [
      'Pipeline de CRM en HubSpot',
      'Integración multicanal por webhooks y APIs',
      'Alertas en Slack y SMS cuando hay que actuar',
      'Tablero de telemetría operativa en vivo'
    ],
    technologies: ['Make', 'HubSpot API', 'Node.js', 'PostgreSQL', 'Twilio API', 'AWS Lambda']
  },
  {
    slug: 'lumina-logistics',
    title: 'LUMINA GLOBAL LOGISTICS',
    brandName: 'Lumina Logistics',
    division: 'Fokus Digital',
    divisionKey: 'digital',
    category: 'Portal de clientes y experiencia UX/UI',
    industry: 'Logística internacional',
    year: '2023',
    duration: '16 semanas',
    location: 'Barcelona · red global',
    badge: 'DIGITAL',
    accentColor: '#5B7CFF',
    heroImage: svc4,
    galleryImages: [svc4, svc1, projAether],
    summary:
      'Portal para seguir envíos, cotizar carga y ver aduanas en tiempo real. El teléfono de soporte dejó de ser el GPS de la empresa.',
    story: [
      {
        heading: 'El correo como sistema de rastreo',
        body: 'Los clientes de Lumina preguntaban por teléfono y por mail dónde iba el contenedor. El equipo de atención era un centro de llamadas disfrazado de logística. Cada consulta era una persona buscando en tres sistemas. La marca se sentía antigua, aunque la operación no lo fuera.'
      },
      {
        heading: 'Un portal que responde antes de que llamen',
        body: 'Diseñamos un portal con mapa en vivo, estados de aduana legibles y reportes ejecutivos en PDF que se generan solos. La UX no es decoración: es menos tickets. Single sign-on para que el cliente corporativo entre como entra a su propio intranet.'
      },
      {
        heading: 'El efecto en la mesa de soporte',
        body: 'Las consultas manuales cayeron 60%. Satisfacción 4,8 de 5. Más de 100 mil eventos de rastreo al día, sin que un humano los reciba uno a uno.'
      }
    ],
    client: {
      name: 'Martín Barrenechea',
      role: 'VP de Producto Digital',
      company: 'Lumina Supply Chain Corp',
      avatar: team4,
      quote:
        'Los clientes corporativos elogiaron la sencillez. La claridad y la velocidad de Fokus cambiaron cómo se percibe la marca en un sector que no perdona la fricción.',
      rating: 5
    },
    reviews: [
      {
        name: 'Martín Barrenechea',
        role: 'VP de Producto Digital',
        company: 'Lumina Supply Chain Corp',
        avatar: team4,
        quote:
          'Los clientes corporativos elogiaron la sencillez. La claridad y la velocidad de Fokus cambiaron cómo se percibe la marca en un sector que no perdona la fricción.',
        rating: 5
      },
      {
        name: 'Paola Rivas',
        role: 'Jefa de atención a cuentas',
        company: 'Lumina Supply Chain Corp',
        avatar: team3,
        quote:
          'Pasé de tener la bandeja llena de “¿dónde está mi carga?” a tener conversaciones de verdad: incidencias, excepciones, negocio. El portal se quedó con lo repetitivo.',
        rating: 5
      },
      {
        name: 'Kenji Nakamura',
        role: 'Director de operaciones APAC',
        company: 'Lumina Supply Chain Corp',
        avatar: team2,
        quote:
          'Cotizar un contenedor a las 2 de la mañana, en Tokio, sin despertar a Barcelona: eso es lo que pedíamos. Fokus lo entregó sin teatro.',
        rating: 5
      }
    ],
    challenge:
      'Las empresas clientes dependían del correo y del teléfono para saber dónde iba la carga. El equipo de atención vivía apagando esa fricción.',
    solution:
      'Interfaz de seguimiento en tiempo real, mapa, estados aduaneros y reportes PDF automáticos, con acceso seguro unificado.',
    metrics: [
      { value: '4,8/5', label: 'Satisfacción corporativa' },
      { value: '-60%', label: 'Consultas manuales a soporte' },
      { value: '100k+', label: 'Eventos de rastreo al día' }
    ],
    deliverables: [
      'Portal web progresivo para clientes',
      'Cotización de carga al instante',
      'UX centrada en quitar fricción, no en añadir pantallas',
      'Acceso unificado con inicio de sesión único'
    ],
    technologies: ['React', 'TypeScript', 'Mapbox GL', 'Tailwind CSS', 'Node.js', 'Docker']
  },
  {
    slug: 'finnext-capital',
    title: 'FINNEXT WEALTH & CAPITAL',
    brandName: 'FinNext Capital',
    division: 'Fokus Automations',
    divisionKey: 'automations',
    category: 'Datos y reportes autónomos',
    industry: 'Gestión patrimonial',
    year: '2023',
    duration: '10 semanas',
    location: 'Ciudad de México',
    badge: 'AUTOMATIZACIONES',
    accentColor: '#2EE59D',
    heroImage: svc2,
    galleryImages: [svc2, projSolar, maya],
    summary:
      'Consolidación de carteras, conciliación bancaria e informes patrimoniales que antes tomaban una semana y ahora salen en doce minutos, con la cifra cuadrada.',
    story: [
      {
        heading: 'La semana perdida de cada cierre',
        body: 'Los analistas de FinNext bajaban estados de custodios y bancos a hojas de cálculo. Un error de copiado era un inversor molesto. El informe mensual salía tarde, y tarde en wealth management se siente como descuido.'
      },
      {
        heading: 'Una tubería que no improvisa',
        body: 'Scripts seguros y webhooks programados consolidan los estados, validan matemáticas y envían el PDF cifrado a cada inversor. Hay bitácora. Hay trazabilidad. Si un número no cuadra, el sistema para y avisa; no manda el reporte “para cumplir”. '
      },
      {
        heading: 'Doce minutos, cero discrepancias',
        body: 'El cierre pasó de una semana a 12 minutos. Cero errores matemáticos en los ciclos auditados. Más de 45 horas analíticas al mes que volvieron a analizar, no a pegar celdas.'
      }
    ],
    client: {
      name: 'Valeria Quintana',
      role: 'Socia directora de inversiones',
      company: 'FinNext Capital Partners',
      avatar: team3,
      quote:
        'El reporte mensual nos tomaba una semana. Fokus armó un sistema que compila, valida y reparte en 12 minutos, con una precisión que yo firmo delante de un inversor.',
      rating: 5
    },
    reviews: [
      {
        name: 'Valeria Quintana',
        role: 'Socia directora de inversiones',
        company: 'FinNext Capital Partners',
        avatar: team3,
        quote:
          'El reporte mensual nos tomaba una semana. Fokus armó un sistema que compila, valida y reparte en 12 minutos, con una precisión que yo firmo delante de un inversor.',
        rating: 5
      },
      {
        name: 'Tomás Aguilar',
        role: 'Analista senior',
        company: 'FinNext Capital Partners',
        avatar: team4,
        quote:
          'Dejé de temerle al último viernes del mes. Ahora reviso excepciones, no mil filas. Es la diferencia entre un trabajo de analista y un trabajo de copista.',
        rating: 5
      },
      {
        name: 'Inés Delgado',
        role: 'Inversionista y miembro del comité',
        company: 'Family office cliente',
        avatar: team1,
        quote:
          'El informe llega cifrado, a tiempo y se entiende. No sé qué hay detrás, y no necesito saberlo. Eso, para mí, es un buen sistema.',
        rating: 5
      }
    ],
    challenge:
      'Varios analistas extraían a mano datos de bancos y custodios. El riesgo de error y el retraso frente a los inversores eran el costo oculto de cada cierre.',
    solution:
      'Arquitectura de scripts y webhooks que consolida estados, valida cifras y reparte informes cifrados, con auditoría de cada paso.',
    metrics: [
      { value: '12 min', label: 'Generación de informes' },
      { value: '0 errores', label: 'Discrepancias matemáticas' },
      { value: '+45 h', label: 'Horas analíticas al mes' }
    ],
    deliverables: [
      'Tubería de extracción y validación',
      'Motor de informes PDF autónomo',
      'Conexión con pasarelas y custodios',
      'Auditoría y trazabilidad de cada cifra'
    ],
    technologies: ['Python', 'PostgreSQL', 'Make', 'AWS S3', 'Stripe API', 'Docker']
  }
]

export const CLIENT_BRANDS = [
  { name: 'Aether Dynamics', tag: 'Aeroespacial y tecnología', division: 'Digital' },
  { name: 'SolarEdge Health', tag: 'Red médica', division: 'Automatizaciones' },
  { name: 'Lumina Logistics', tag: 'Cadena de suministro', division: 'Digital' },
  { name: 'FinNext Capital', tag: 'Gestión patrimonial', division: 'Automatizaciones' },
  { name: 'Vanguard Retail', tag: 'Comercio omnicanal', division: 'Digital' },
  { name: 'Zenith Systems', tag: 'Infraestructura en la nube', division: 'Automatizaciones' }
]

import article1 from '../assets/article1.jpg'
import article2 from '../assets/article2.jpg'
import article3 from '../assets/article3.jpg'
import team1 from '../assets/team1.jpg'
import team2 from '../assets/team2.jpg'
import team4 from '../assets/team4.jpg'

export const BLOG_POSTS = [
  {
    slug: 'roi-plataformas-web-modernas',
    division: 'digital',
    badge: 'FOKUS DIGITAL',
    category: {
      es: 'Estrategia Web & Rendimiento',
      en: 'Web Strategy & Performance'
    },
    title: {
      es: 'El Retorno Real de Inversión en Plataformas Web Modernas: Next.js, Headless y Rendimiento Subsegundo',
      en: 'The Real ROI of Modern Web Platforms: Next.js, Headless Architecture & Sub-Second Speed'
    },
    excerpt: {
      es: 'Por qué una web que carga en 0.4 segundos no es un lujo estético, sino el motor de conversión más rentable y predecible de una compañía moderna.',
      en: 'Why a website loading in 0.4 seconds is not an aesthetic luxury, but the highest-yielding, most predictable conversion engine for modern business.'
    },
    readTime: {
      es: '6 min de lectura',
      en: '6 min read'
    },
    date: {
      es: '18 de Noviembre, 2024',
      en: 'November 18, 2024'
    },
    image: article1,
    author: {
      name: 'Mateo Sandoval',
      role: {
        es: 'Director de Ingeniería Web · Fokus Digital',
        en: 'Head of Web Engineering · Fokus Digital'
      },
      avatar: team2
    },
    keyTakeaways: {
      es: [
        'Cada 100 milisegundos de latencia reducida en el renderizado inicial incrementa la tasa de conversión comercial entre un 4% y un 7%.',
        'La arquitectura Headless desacopla la velocidad de entrega del gestor editorial, eliminando caídas en picos de tráfico.',
        'Los sitios web de alto rendimiento obtienen un índice de indexación 3x superior en Google Search Console y motores basados en IA.'
      ],
      en: [
        'Every 100 milliseconds of reduced initial render latency increases commercial conversion by 4% to 7%.',
        'Headless architecture decouples content management from frontend delivery, eliminating crashes during traffic spikes.',
        'High-performance web platforms achieve a 3x higher crawl rate and indexation priority across Google and AI search engines.'
      ]
    },
    content: {
      es: [
        {
          type: 'paragraph',
          text: 'Durante la última década, las empresas han considerado su sitio web corporativo como un costo de marketing o un catálogo estático. Sin embargo, en el panorama B2B y SaaS actual, la velocidad y la arquitectura de software no son detalles estéticos: son determinantes matemáticos directos del costo por adquisición de clientes y la confianza institucional.'
        },
        {
          type: 'heading',
          text: '1. La correlación directa entre latencia y tasa de conversión'
        },
        {
          type: 'paragraph',
          text: 'Cuando un comprador enterprise o un tomador de decisiones hace clic en una propuesta comercial o un enlace, tiene en promedio cuatro pestañas abiertas simultáneamente. Una plataforma web construida en arquitecturas monolíticas o WordPress saturado de plugins tarda entre 3.8 y 6.2 segundos en volverse interactiva (Time to Interactive). En ese intervalo, más del 53% de los usuarios calificados abandonan la sesión.'
        },
        {
          type: 'quote',
          text: 'Una plataforma web de subsegundo no compite por verse bonita: compite por ser la primera respuesta clara que el cliente experimenta sin fricción.',
          author: 'Mateo Sandoval'
        },
        {
          type: 'heading',
          text: '2. Por qué Next.js y el renderizado híbrido transforman el negocio'
        },
        {
          type: 'paragraph',
          text: 'En Fokus Digital implementamos Next.js con renderizado estático incremental (ISR) y componentes de servidor en React. Esto significa que el 90% del HTML se sirve de manera instantánea desde servidores perimetrales (Edge CDN) a menos de 15ms de la ubicación geográfica de tu visitante, mientras que la hidratación de interactividad ocurre de forma invisible en segundo plano.'
        },
        {
          type: 'paragraph',
          text: 'El resultado práctico para una empresa es evidente: tiempos de primera pintura con contenido (LCP) por debajo de 0.4 segundos, puntuaciones perfectas de 100/100 en Google Core Web Vitals y una experiencia táctil que transmite solidez técnica desde el primer instante.'
        },
        {
          type: 'heading',
          text: '3. Autonomía editorial sin comprometer la ingeniería'
        },
        {
          type: 'paragraph',
          text: 'El mayor conflicto en una empresa suele darse entre el equipo de marketing, que necesita lanzar landings y artículos con agilidad, y el equipo de ingeniería, que debe resguardar la estabilidad y la velocidad del código. Al implementar un Headless CMS conectado por GraphQL o REST a una base modular de componentes en Figma y React, los equipos comerciales editan y publican contenido sin tocar una sola línea de código y sin degradar la velocidad de la plataforma jamás.'
        }
      ],
      en: [
        {
          type: 'paragraph',
          text: 'For the past decade, organizations have treated corporate websites as marketing line items or digital brochures. However, in modern B2B and SaaS ecosystems, speed and software architecture are not cosmetic preferences: they are direct mathematical multipliers of customer acquisition and brand authority.'
        },
        {
          type: 'heading',
          text: '1. The direct correlation between latency and conversion rate'
        },
        {
          type: 'paragraph',
          text: 'When an enterprise buyer clicks a proposal link or digital campaign, they typically have four competitor tabs open simultaneously. A web platform running on legacy monolithic CMS stacks takes between 3.8 and 6.2 seconds to reach Time to Interactive. During that delay, over 53% of high-intent visitors abandon the page before reading a single headline.'
        },
        {
          type: 'quote',
          text: 'A sub-second web platform does not merely compete on aesthetics: it wins by delivering immediate, frictionless authority.',
          author: 'Mateo Sandoval'
        },
        {
          type: 'heading',
          text: '2. Why Next.js and hybrid rendering redefine commercial outcomes'
        },
        {
          type: 'paragraph',
          text: 'At Fokus Digital, we deploy Next.js with Incremental Static Regeneration (ISR) and React Server Components. This architecture serves 90% of your HTML instantly from global Edge CDN nodes situated within 15ms of your visitors, while interactivity hydration completes silently in the background.'
        },
        {
          type: 'paragraph',
          text: 'The commercial outcome is undeniable: Largest Contentful Paint (LCP) below 0.4 seconds, 100/100 Core Web Vitals scores, and a tactile, fluid digital experience that signals tier-one institutional prestige from the first millisecond.'
        },
        {
          type: 'heading',
          text: '3. Editorial autonomy without compromising code integrity'
        },
        {
          type: 'paragraph',
          text: 'The traditional corporate struggle pits marketing teams (who require agile landing page launches) against engineering teams (who protect platform stability and performance). By implementing Headless CMS architecture tied directly to Figma-aligned React design tokens, marketing operators publish autonomously without risking layout shift, security vulnerabilities, or code bloat.'
        }
      ]
    }
  },
  {
    slug: 'automatizacion-crm-flujos-b2b',
    division: 'automations',
    badge: 'FOKUS AUTOMATIONS',
    category: {
      es: 'Automatización & Operaciones CRM',
      en: 'Automation & CRM Operations'
    },
    title: {
      es: 'Cómo las Automatizaciones de CRM y Workflows Duplican la Capacidad Comercial sin Contratar Más Personal',
      en: 'How CRM & Workflow Automations Double Sales Capacity Without Increasing Headcount'
    },
    excerpt: {
      es: 'Eliminando la transcripción manual y el seguimiento tardío: cómo los equipos comerciales B2B reducen su tiempo de respuesta a 90 segundos y cierran más rápido.',
      en: 'Eliminating manual transcription and delayed follow-ups: how B2B sales teams cut lead response time to 90 seconds and accelerate deal velocity.'
    },
    readTime: {
      es: '7 min de lectura',
      en: '7 min read'
    },
    date: {
      es: '14 de Noviembre, 2024',
      en: 'November 14, 2024'
    },
    image: article2,
    author: {
      name: 'Sofía Valenzuela',
      role: {
        es: 'Líder de Sistemas & Workflows · Fokus Automations',
        en: 'Lead Systems Architect · Fokus Automations'
      },
      avatar: team1
    },
    keyTakeaways: {
      es: [
        'Los leads respondidos en menos de 5 minutos tienen una probabilidad 21x superior de convertirse en oportunidades calificadas.',
        'La sincronización bidireccional mediante webhooks y Make.com elimina entre 15 y 20 horas de trabajo repetitivo por ejecutivo cada semana.',
        'Una arquitectura de colas con reintentos automáticos garantiza cero pérdida de datos durante picos comerciales o caídas de APIs de terceros.'
      ],
      en: [
        'Inbound leads contacted within 5 minutes are 21x more likely to qualify into active sales pipelines.',
        'Bi-directional synchronization via resilient webhooks saves each sales rep between 15 and 20 hours of manual data entry every week.',
        'Resilient queue architecture with automated retries guarantees zero dropped data during traffic spikes or third-party API downtime.'
      ]
    },
    content: {
      es: [
        {
          type: 'paragraph',
          text: 'En la gran mayoría de las organizaciones B2B, el problema de crecimiento no radica en la falta de prospectos calificados, sino en la fricción oculta entre el formulario de contacto y la llamada inicial. Horas enteras se pierden copiando datos entre HubSpot, hojas de cálculo, calendarios y canales internos de mensajería.'
        },
        {
          type: 'heading',
          text: '1. El costo invisible del retraso en la atención'
        },
        {
          type: 'paragraph',
          text: 'Los estudios de telemetría de ventas demuestran que las probabilidades de contactar exitosamente a un prospecto caen un 391% si la primera respuesta ocurre después de la primera hora. Cuando un prospecto completa un formulario web y no recibe una asignación inmediata, se enfría y busca a la competencia.'
        },
        {
          type: 'quote',
          text: 'Automatizar no significa reemplazar el trato humano: significa quitar la burocracia para que el vendedor hable con prospectos listos para comprar.',
          author: 'Sofía Valenzuela'
        },
        {
          type: 'heading',
          text: '2. Triage y enriquecimiento automático en tiempo real'
        },
        {
          type: 'paragraph',
          text: 'En Fokus Automations construimos tuberías donde el formulario web envía un payload instantáneo a través de webhooks seguros. En menos de 1.5 segundos, el sistema consulta APIs de enriquecimiento empresarial (número de empleados, tecnología instalada, ingresos estimados), asigna el lead al ejecutivo adecuado según territorio comercial y programa la sesión en Calendly sincronizada con Google Calendar.'
        },
        {
          type: 'paragraph',
          text: 'Al mismo tiempo, se dispara un canal de Slack privado donde el equipo de ventas recibe un resumen con viñetas clave antes de entrar a la llamada. El representante comercial ya no pierde tiempo investigando en LinkedIn: entra a la reunión con el contexto completo.'
        },
        {
          type: 'heading',
          text: '3. Facturación y cierre sin fricción manual'
        },
        {
          type: 'paragraph',
          text: 'Cuando el negocio pasa a la fase "Cerrado-Ganado" en el CRM, el sistema emite automáticamente el contrato con firma digital en DocuSign, crea la factura en QuickBooks o Stripe, genera la carpeta compartida en Google Drive y envía el cuestionario de onboarding al cliente. Cero pasos manuales. Cero olvidos.'
        }
      ],
      en: [
        {
          type: 'paragraph',
          text: 'In the vast majority of B2B organizations, revenue bottlenecks do not stem from a shortage of demand, but from operational latency between inbound inquiry and commercial engagement. High-value account executives waste hours manually moving data between HubSpot, spreadsheets, calendars, and Slack.'
        },
        {
          type: 'heading',
          text: '1. The hidden cost of lead response delay'
        },
        {
          type: 'paragraph',
          text: 'Empirical sales data reveals that the likelihood of qualifying an inbound lead drops by 391% if the initial touch occurs after the first 60 minutes. When a prospective buyer submits a form and experiences silence, interest evaporates and competitor evaluation begins.'
        },
        {
          type: 'quote',
          text: 'Automation does not replace human relationship: it strips away administrative waste so closers focus entirely on high-intent conversations.',
          author: 'Sofía Valenzuela'
        },
        {
          type: 'heading',
          text: '2. Real-time lead triage and firmographic enrichment'
        },
        {
          type: 'paragraph',
          text: 'At Fokus Automations, we engineer automated pipelines where form submissions trigger instant, secure webhook payloads. In under 1.5 seconds, the engine queries firmographic enrichment APIs (headcount, revenue bracket, tech stack), routes the prospect according to custom territory logic, and issues personalized calendar booking invites.'
        },
        {
          type: 'paragraph',
          text: 'Simultaneously, a dedicated Slack briefing delivers actionable dossier points directly to the assigned account executive. The sales rep steps into the discovery call fully briefed without spending 30 minutes researching LinkedIn.'
        },
        {
          type: 'heading',
          text: '3. Frictionless deal closure and client onboarding'
        },
        {
          type: 'paragraph',
          text: 'When a deal transitions to "Closed-Won" in your CRM, the automation engine instantly dispatches DocuSign contracts, generates Stripe or accounting invoices, provisions client project environments, and triggers automated onboarding sequences without human delay.'
        }
      ]
    }
  },
  {
    slug: 'ia-operativa-atencion-24-7',
    division: 'automations',
    badge: 'FOKUS AUTOMATIONS',
    category: {
      es: 'Inteligencia Artificial Operativa',
      en: 'Operational AI & Systems'
    },
    title: {
      es: 'El Futuro de la IA Operativa: Asistentes de Conocimiento y Soporte Continuo sin Fricción',
      en: 'The Future of Operational AI: Private Knowledge Assistants and Frictionless 24/7 Support'
    },
    excerpt: {
      es: 'Dejar atrás los chatbots genéricos y construir agentes inteligentes entrenados sobre los SOPs internos y bases de conocimiento de tu empresa.',
      en: 'Moving beyond generic chatbots to engineer intelligent systems trained exclusively on internal SOPs and verified company documentation.'
    },
    readTime: {
      es: '5 min de lectura',
      en: '5 min read'
    },
    date: {
      es: '10 de Noviembre, 2024',
      en: 'November 10, 2024'
    },
    image: article3,
    author: {
      name: 'Diego Rangel',
      role: {
        es: 'Director de Inteligencia de Datos · Fokus Systems',
        en: 'Director of Data Intelligence · Fokus Systems'
      },
      avatar: team4
    },
    keyTakeaways: {
      es: [
        'Los modelos RAG privados garantizan que la IA solo responda con información verificada de tu empresa, eliminando alucinaciones.',
        'La resolución automática en el primer contacto (FCR) alcanza hasta un 72% en preguntas frecuentes de soporte técnico y onboarding.',
        'Los asistentes internos reducen a segundos el tiempo que los empleados dedican a buscar políticas operativas y manuales.'
      ],
      en: [
        'Private Retrieval-Augmented Generation (RAG) guarantees AI only responds from verified internal documentation, eliminating hallucinations.',
        'First-contact resolution rates reach up to 72% across customer support and onboarding workflows.',
        'Internal company knowledge assistants cut employee search time for operating procedures down to seconds.'
      ]
    },
    content: {
      es: [
        {
          type: 'paragraph',
          text: 'La adopción de inteligencia artificial en las empresas ha superado la etapa experimental. Hoy, los equipos directivos ya no buscan juguetes conversacionales: demandan sistemas operativos capaces de clasificar incidencias, redactar respuestas certeras basadas en documentación privada y reducir la carga de soporte sin poner en riesgo la privacidad de los datos.'
        },
        {
          type: 'heading',
          text: '1. Del chatbot genérico al asistente de conocimiento empresarial'
        },
        {
          type: 'paragraph',
          text: 'Los chatbots tradicionales basados en árboles de decisión fallan porque son rígidos y frustran al usuario. Por otro lado, los LLMs genéricos no conocen los productos ni las políticas específicas de tu empresa. La solución técnica es la Generación Aumentada por Recuperación (RAG con Pinecone o pgvector).'
        },
        {
          type: 'quote',
          text: 'Una IA operativa no inventa respuestas: consulta tu base de conocimiento institucional con precisión milimétrica antes de emitir una sola palabra.',
          author: 'Diego Rangel'
        },
        {
          type: 'heading',
          text: '2. Soporte al cliente 24/7 con supervisión humana inteligente'
        },
        {
          type: 'paragraph',
          text: 'En Fokus Automations integramos capas de IA directamente sobre Zendesk, Intercom o correo electrónico. Cuando un cliente formula una pregunta compleja fuera del horario laboral, el sistema identifica la intención, recupera la solución exacta de tu manual y redacta una respuesta coherente en el tono de tu marca.'
        },
        {
          type: 'paragraph',
          text: 'Si el nivel de confianza semántica cae por debajo de un umbral seguro, el sistema eleva el caso automáticamente a un especialista humano con un borrador ya preparado, asegurando que ninguna interacción sensible se resuelva de forma descuidada.'
        },
        {
          type: 'heading',
          text: '3. Asistentes internos para acelerar a tu propio equipo'
        },
        {
          type: 'paragraph',
          text: 'El mayor beneficio operativo a menudo no es externo, sino interno. Nuevos empleados tardan semanas en asimilar cientos de páginas de Notion, Google Drive o Confluence. Con un asistente interno privado conectado a Slack, cualquier colaborador puede preguntar: "¿Cuál es el protocolo de reembolso para clientes enterprise?" y recibir en dos segundos el extracto exacto con enlace directo al documento oficial.'
        }
      ],
      en: [
        {
          type: 'paragraph',
          text: 'Enterprise AI adoption has matured beyond experimentation. Today, executive leaders no longer seek conversational novelty: they require resilient operational software that categorizes inquiries, drafts verified responses from private documentation, and reduces ticket queues without compromising corporate data.'
        },
        {
          type: 'heading',
          text: '1. Beyond generic chatbots: Private Retrieval-Augmented Generation'
        },
        {
          type: 'paragraph',
          text: 'Traditional decision-tree chatbots fail because rigid branches frustrate modern users. Conversely, public LLMs lack awareness of proprietary contracts, pricing models, and service level agreements. The production answer is vector-based Retrieval-Augmented Generation (RAG).'
        },
        {
          type: 'quote',
          text: 'Operational AI never hallucinates: it retrieves verified source text from your company documentation before composing a single sentence.',
          author: 'Diego Rangel'
        },
        {
          type: 'heading',
          text: '2. 24/7 client operations with automated human escalation'
        },
        {
          type: 'paragraph',
          text: 'At Fokus Automations, we embed AI intelligence directly into Zendesk, Intercom, and custom CRM ticketing. When clients submit technical inquiries after hours, our systems identify intent, pull exact operational blueprints, and deliver verified resolutions in your brand voice.'
        },
        {
          type: 'paragraph',
          text: 'If semantic confidence falls beneath predefined safety thresholds, the system immediately routes the ticket to a human manager with an annotated draft, ensuring zero customer dissatisfaction.'
        },
        {
          type: 'heading',
          text: '3. Accelerating employee onboarding and institutional memory'
        },
        {
          type: 'paragraph',
          text: 'Often the most immediate ROI occurs internally. New team members spend months searching disparate folders in Notion, Google Drive, or Confluence. With a secure Slack assistant indexing internal repositories, any employee can instantly query complex operational policies and receive verified citations in seconds.'
        }
      ]
    }
  }
]

export function getAllPosts() {
  return BLOG_POSTS
}

export function getPostBySlug(slug) {
  return BLOG_POSTS.find((p) => p.slug === slug)
}

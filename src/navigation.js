import { useState, useEffect } from 'react'

function parseRoute() {
  const hash = window.location.hash.replace(/^#\/?/, '')
  const path = window.location.pathname.replace(/^\//, '')

  const raw = hash || path || ''
  const parts = raw.split('/').filter(Boolean)

  if (parts.length === 0 || parts[0] === 'home') {
    return { page: 'home', slug: null }
  }

  // Digital page or digital detail
  if (parts[0] === 'digital') {
    if (parts[1]) {
      return { page: 'service-detail', slug: parts[1] }
    }
    return { page: 'digital', slug: null }
  }

  // Automations page or automations detail
  if (parts[0] === 'automations' || parts[0] === 'automation' || parts[0] === 'automatizaciones') {
    if (parts[1]) {
      return { page: 'service-detail', slug: parts[1] }
    }
    return { page: 'automations', slug: null }
  }

  // Projects page or project detail
  if (parts[0] === 'projects' || parts[0] === 'proyectos') {
    if (parts[1]) {
      return { page: 'project-detail', slug: parts[1] }
    }
    return { page: 'projects', slug: null }
  }

  // Legacy /services paths
  if (parts[0] === 'services' || parts[0] === 'servicios') {
    if (parts[1] === 'digital') {
      return parts[2] ? { page: 'service-detail', slug: parts[2] } : { page: 'digital', slug: null }
    }
    if (parts[1] === 'automations' || parts[1] === 'automation' || parts[1] === 'automatizaciones') {
      return parts[2] ? { page: 'service-detail', slug: parts[2] } : { page: 'automations', slug: null }
    }
    if (parts[1]) {
      return { page: 'service-detail', slug: parts[1] }
    }
    // Default /services goes to digital
    return { page: 'digital', slug: null }
  }

  // About page
  if (parts[0] === 'about' || parts[0] === 'about-us' || parts[0] === 'nosotros') {
    return { page: 'about', slug: null }
  }

  // Contact page
  if (parts[0] === 'contact' || parts[0] === 'contact-us' || parts[0] === 'contacto') {
    return { page: 'contact', slug: null }
  }

  // Team pages
  if (parts[0] === 'team' || parts[0] === 'equipo') {
    if (parts[1]) {
      return { page: 'team-member', slug: parts[1] }
    }
    return { page: 'team', slug: null }
  }

  // Articles & Blog pages
  if (parts[0] === 'articles' || parts[0] === 'articulos' || parts[0] === 'blog' || parts[0] === 'insights') {
    if (parts[1]) {
      return { page: 'article-detail', slug: parts[1] }
    }
    return { page: 'articles', slug: null }
  }

  return { page: 'home', slug: null }
}

export function navigate(url) {
  const clean = url.replace(/^#\/?/, '').replace(/^\//, '')
  if (window.history.pushState) {
    try {
      window.history.pushState(null, '', '/' + clean)
    } catch {
      window.location.hash = '/' + clean
    }
  } else {
    window.location.hash = '/' + clean
  }
  window.dispatchEvent(new Event('thimos-navigate'))
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

export function useRoute() {
  const [route, setRoute] = useState(parseRoute)

  useEffect(() => {
    const handler = () => {
      setRoute(parseRoute())
    }
    window.addEventListener('popstate', handler)
    window.addEventListener('hashchange', handler)
    window.addEventListener('thimos-navigate', handler)
    return () => {
      window.removeEventListener('popstate', handler)
      window.removeEventListener('hashchange', handler)
      window.removeEventListener('thimos-navigate', handler)
    }
  }, [])

  return { ...route, navigate }
}

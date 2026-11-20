import { useRoute } from './navigation'
import { LanguageProvider } from './context/LanguageContext'
import FokusNavbar from './components/FokusNavbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Process from './components/Process'
import Team from './components/Team'
import Review from './components/Review'
import Articles from './components/Articles'
import Cta from './components/Cta'
import FokusFooter from './components/FokusFooter'
import DigitalPage from './pages/DigitalPage'
import AutomationsPage from './pages/AutomationsPage'
import ServiceDetailPage from './pages/ServiceDetailPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import TeamMemberPage from './pages/TeamMemberPage'
import TeamPage from './pages/TeamPage'
import ProjectsPage from './pages/ProjectsPage'
import ProjectDetailPage from './pages/ProjectDetailPage'
import BlogPage from './pages/BlogPage'
import BlogDetailPage from './pages/BlogDetailPage'

function AppContent() {
  const { page, slug } = useRoute()

  if (page === 'about') {
    return <AboutPage />
  }

  if (page === 'contact') {
    return <ContactPage />
  }

  if (page === 'projects') {
    return <ProjectsPage />
  }

  if (page === 'project-detail') {
    return <ProjectDetailPage slug={slug} />
  }

  if (page === 'articles') {
    return <BlogPage />
  }

  if (page === 'article-detail') {
    return <BlogDetailPage slug={slug} />
  }

  if (page === 'team') {
    return <TeamPage />
  }

  if (page === 'team-member') {
    return <TeamMemberPage slug={slug} />
  }

  if (page === 'digital') {
    return <DigitalPage />
  }

  if (page === 'automations') {
    return <AutomationsPage />
  }

  if (page === 'service-detail') {
    return <ServiceDetailPage slug={slug} />
  }

  return (
    <>
      <FokusNavbar brand="fokus" theme="dark" active="home" />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Process />
        <Team />
        <Review />
        <Articles />
        <Cta />
        <FokusFooter brand="fokus" />
      </main>
    </>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  )
}

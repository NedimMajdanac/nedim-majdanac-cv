import './App.css'
import heroImage from './assets/hero.png'
import profileImage from './assets/me.jpeg'
import { useEffect, useRef, useState } from 'react'
import {
  contactLinks,
  educationEntries,
  languageEntries,
  navItems,
  projectCards,
  projectPageStrings,
  skillGroups,
  siteStrings,
} from './constants/strings'

type SocialIconName = 'linkedin' | 'github' | 'email'
const themeStorageKey = 'nedim-portfolio-theme'

function ContactIcon({ name }: { name: SocialIconName }) {
  const commonProps = {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '1.8',
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  }

  switch (name) {
    case 'linkedin':
      return (
        <svg {...commonProps}>
          <path d="M6.94 8.5A1.56 1.56 0 1 1 6.94 5.4a1.56 1.56 0 0 1 0 3.1ZM5.4 9.9h3.1v8.7H5.4zm5.3 0h2.96v1.2h.04c.41-.78 1.42-1.6 2.93-1.6 3.14 0 3.72 2.06 3.72 4.74v4.36h-3.1v-4.07c0-1-.02-2.29-1.39-2.29-1.4 0-1.62 1.09-1.62 2.23v4.13H10.7z" />
        </svg>
      )
    case 'github':
      return (
        <svg {...commonProps}>
          <path d="M9 18.5c-4 1.2-4-2-5.5-2.4M15 20.5v-2.7a3.1 3.1 0 0 0-.9-2.4c3-.3 6.1-1.4 6.1-6.5A5 5 0 0 0 18.5 5a4.7 4.7 0 0 0-.1-1.7S17.3 3 14.5 4.2a16 16 0 0 0-7.2 0C4.5 3 3.9 3.3 3.9 3.3A4.7 4.7 0 0 0 3.8 5a5 5 0 0 0-1.1 3.3c0 5.1 3.1 6.2 6.1 6.5a3.2 3.2 0 0 0-.9 2.3V20.5" />
        </svg>
      )
    case 'email':
      return (
        <svg {...commonProps}>
          <path d="M3.5 7.5A2.5 2.5 0 0 1 6 5h12a2.5 2.5 0 0 1 2.5 2.5v9A2.5 2.5 0 0 1 18 19H6a2.5 2.5 0 0 1-2.5-2.5zm0 0 8.5 6 8.5-6" />
        </svg>
      )
    default:
      return null
  }
}

function ProjectCarousel({ projectName, images = [] }: { projectName: string; images?: string[] }) {
  const carouselRef = useRef<HTMLDivElement>(null)
  const isMobileApp = projectName === 'Mountain App' || projectName === 'Vaktija'

  const moveSlide = (direction: number) => {
    carouselRef.current?.scrollBy({
      left: direction * carouselRef.current.clientWidth,
      behavior: 'smooth',
    })
  }

  return (
    <div className={`project-carousel${isMobileApp ? ' mobile-carousel' : ''}`} aria-label={`${projectName} mockup gallery`}>
      <div className="carousel-slides" ref={carouselRef}>
        {(images.length > 0 ? images : [null, null, null]).map((image, index) => (
          <div className="mockup-slide" key={image ?? index} aria-label={`${projectName} mockup ${index + 1}`}>
            {image ? <img src={image} alt={`${projectName} screen ${index + 1}`} /> : <span>App mockup {index + 1}</span>}
          </div>
        ))}
      </div>
      <div className="carousel-controls" onClick={(event) => event.stopPropagation()}>
        <button type="button" aria-label={`Previous ${projectName} mockup`} onClick={() => moveSlide(-1)}>
          <span aria-hidden="true">←</span>
        </button>
        <span className="carousel-hint">Swipe to explore</span>
        <button type="button" aria-label={`Next ${projectName} mockup`} onClick={() => moveSlide(1)}>
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </div>
  )
}

type Project = (typeof projectCards)[number]

function ProjectCard({ project, onSelect }: { project: Project; onSelect: (project: Project) => void }) {
  const isMobileProject = project.name === 'Mountain App' || project.name === 'Vaktija'

  return (
    <article
      className={`project-card${isMobileProject ? ' mobile-project' : ''}`}
      onClick={() => onSelect(project)}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          onSelect(project)
        }
      }}
      role="button"
      tabIndex={0}
    >
      <ProjectCarousel projectName={project.name} images={project.images} />
      <div className="project-info">
        <div className="project-header">
          <div>
            <p className="project-type">{project.type}</p>
            <h3>{project.name}</h3>
          </div>
          <span className="project-status">{project.status}</span>
        </div>
        <p className="project-description">{project.description}</p>
        <div className="tag-row">
          {project.stack.map((item) => <span key={item} className="project-tag">{item}</span>)}
        </div>
        <div className="project-actions">
          <button className="project-details-button" type="button" onClick={() => onSelect(project)}>{projectPageStrings.details}</button>
          <a className="project-link" href={project.liveUrl} target="_blank" rel="noreferrer" onClick={(event) => event.stopPropagation()}>Live demo</a>
        </div>
      </div>
    </article>
  )
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose])

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
      <div className="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-modal-title" onMouseDown={(event) => event.stopPropagation()}>
        <button className="modal-close" type="button" aria-label={projectPageStrings.close} onClick={onClose}>×</button>
        <div className="modal-gallery"><ProjectCarousel projectName={project.name} images={project.images} /></div>
        <div className="modal-content">
          <p className="project-type">{project.type}</p>
          <h2 id="project-modal-title">{project.name}</h2>
          <span className="project-status">{project.status}</span>
          <p className="modal-label">{projectPageStrings.overview}</p>
          <p className="modal-description">{project.description}</p>
          <p className="modal-label">{projectPageStrings.implementation}</p>
          <p className="modal-description">{project.details}</p>
          <div className="tag-row">
            {project.stack.map((item) => <span key={item} className="project-tag">{item}</span>)}
          </div>
        </div>
      </div>
    </div>
  )
}

function SiteHeader({ isDarkTheme, onToggleTheme, onBack, isProjectsPage = false }: { isDarkTheme: boolean; onToggleTheme: () => void; onBack: () => void; isProjectsPage?: boolean }) {
  return (
    <header className="topbar">
      <a className="brand-wrap" href="/" onClick={isProjectsPage ? onBack : undefined}>
        <div className="profile-thumb" aria-label={`${siteStrings.name} profile photo`}><img src={profileImage} alt="" /></div>
        <div className="brand-text"><span className="brand-name">{siteStrings.name}</span><span className="brand-role">{siteStrings.role}</span></div>
      </a>
      <nav className="main-nav" aria-label="Main navigation">
        {navItems.map((item) => <a key={item.label} href={isProjectsPage && item.label !== 'Projects' ? `/${item.href}` : item.label === 'Projects' ? '/projects' : item.href}>{item.label}</a>)}
      </nav>
      <a className="nav-cta" href="/cv.pdf" download>{siteStrings.navCta}</a>
      <button className="theme-toggle" type="button" aria-pressed={isDarkTheme} aria-label={isDarkTheme ? siteStrings.themeToggle.light : siteStrings.themeToggle.dark} onClick={onToggleTheme}>{isDarkTheme ? siteStrings.themeToggle.light : siteStrings.themeToggle.dark}</button>
    </header>
  )
}

function ProjectsPage({ onBack, isDarkTheme, onToggleTheme }: { onBack: () => void; isDarkTheme: boolean; onToggleTheme: () => void }) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <div className={`page-shell${isDarkTheme ? ' theme-dark' : ''}`}>
      <SiteHeader isDarkTheme={isDarkTheme} onToggleTheme={onToggleTheme} onBack={onBack} isProjectsPage />
      <main className="content projects-page-content">
        <section className="projects-intro">
          <p className="eyebrow">{projectPageStrings.eyebrow}</p>
          <h1>{projectPageStrings.title}</h1>
          <p className="lead">{projectPageStrings.intro}</p>
        </section>
        <section className="projects-section projects-index-section">
          <div className="project-grid">{projectCards.map((project) => <ProjectCard key={project.name} project={project} onSelect={setSelectedProject} />)}</div>
        </section>
      </main>
      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </div>
  )
}

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(() => window.localStorage.getItem(themeStorageKey) === 'dark')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    document.body.classList.toggle('dark-theme', isDarkTheme)
    window.localStorage.setItem(themeStorageKey, isDarkTheme ? 'dark' : 'light')

    return () => document.body.classList.remove('dark-theme')
  }, [isDarkTheme])

  useEffect(() => {
    const handlePopState = () => setCurrentPath(window.location.pathname)
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const navigateHome = () => {
    if (window.location.pathname !== '/') {
      window.history.pushState({}, '', '/')
      setCurrentPath('/')
    }
  }

  if (currentPath === '/projects') {
    return <ProjectsPage onBack={navigateHome} isDarkTheme={isDarkTheme} onToggleTheme={() => setIsDarkTheme((currentTheme) => !currentTheme)} />
  }

  return (
    <div className={`page-shell${isDarkTheme ? ' theme-dark' : ''}`}>
      <SiteHeader isDarkTheme={isDarkTheme} onToggleTheme={() => setIsDarkTheme((currentTheme) => !currentTheme)} onBack={navigateHome} />

      <main className="content">
        <section className="hero" id="about">
          <div className="hero-copy">
            <img className="hero-image" src={heroImage} alt="" aria-hidden="true" />
            <p className="eyebrow">{siteStrings.heroTag}</p>
            <h1>{siteStrings.heroTitle}</h1>
            <p className="lead">{siteStrings.heroLead}</p>

            <div className="meta-row">
              <span>{siteStrings.location}</span>
              <span>{siteStrings.availability}</span>
            </div>

            <div className="hero-actions">
              <a href="#projects" className="primary-button">
                View projects
              </a>
              <a href="#contact" className="secondary-button">
                Let’s talk
              </a>
            </div>

            <div className="social-strip" aria-label="Social links">
              {contactLinks.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                  <ContactIcon name={link.icon as SocialIconName} />
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </div>

          <aside className="profile-panel" aria-label="Quick details">
            <div className="panel-header">
              <span className="status-dot" aria-hidden="true" />
              <span>Now</span>
            </div>

            <div className="profile-visual">
              <div className="portrait-placeholder" aria-label={`${siteStrings.name} profile photo`}>
                <img src={profileImage} alt={`${siteStrings.name} portrait`} />
              </div>
            </div>

            <div className="panel-body">
              <p className="focus-label">{siteStrings.highlightLabel}</p>
              <ul>
                {siteStrings.technologies.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
              <p className="focus-note">{siteStrings.currentFocus}</p>
            </div>
          </aside>
        </section>

        <section className="info-grid">
          <article className="info-card" id="education">
            <div className="section-label">01 // Education</div>
            <h2>Academic background</h2>
            <div className="timeline-list">
              {educationEntries.map((entry) => (
                <div key={entry.school} className="timeline-item">
                  <span className="timeline-period">{entry.period}</span>
                  <div>
                    <h3>{entry.school}</h3>
                    <p>{entry.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="info-card" id="languages">
            <div className="section-label">02 // Languages</div>
            <h2>Communication</h2>
            <div className="language-list">
              {languageEntries.map((entry) => (
                <div key={entry.name} className="language-item">
                  <span>{entry.name}</span>
                  <strong>{entry.level}</strong>
                </div>
              ))}
            </div>
          </article>
        </section>

        <section className="projects-section" id="projects">
          <div className="section-heading">
            <div className="section-label">03 // Projects</div>
            <h2>Selected work</h2>
          </div>

          <div className="project-grid">
            {projectCards.map((project) => <ProjectCard key={project.name} project={project} onSelect={setSelectedProject} />)}
          </div>
        </section>

        <section className="skills-section" id="skills">
          <div className="section-heading">
            <div className="section-label">04 // Skills</div>
            <h2>Tech stack and capabilities</h2>
          </div>

          <div className="skill-groups">
            {skillGroups.map((group) => (
              <div key={group.label} className="skill-group">
                <h3>{group.label}</h3>
                <div className="skill-list">
                  {group.skills.map((skill) => (
                    <span key={skill} className="skill-pill">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-label">05 // Contact</div>
          <h2>Let’s build something meaningful.</h2>

          <div className="contact-card">
            <div>
              <p className="contact-label">Email</p>
              <a href="mailto:nedimmajdanac13@gmail.com">nedimmajdanac13@gmail.com</a>
            </div>
            <div>
              <p className="contact-label">Location</p>
              <span>Bosnia and Herzegovina</span>
            </div>
            <div>
              <p className="contact-label">Availability</p>
              <span>Open for work and collaborations</span>
            </div>
          </div>
        </section>
      </main>
      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </div>
  )
}

export default App

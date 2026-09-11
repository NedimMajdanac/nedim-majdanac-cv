import './App.css'
import heroImage from './assets/hero.png'
import { useRef } from 'react'
import {
  contactLinks,
  educationEntries,
  languageEntries,
  navItems,
  projectCards,
  skillGroups,
  siteStrings,
} from './constants/strings'

type SocialIconName = 'linkedin' | 'github' | 'email'

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
      <div className="carousel-controls">
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

function App() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand-wrap">
          <div className="profile-thumb" aria-label="Profile photo placeholder">
            <span>N</span>
          </div>
          <div className="brand-text">
            <span className="brand-name">{siteStrings.name}</span>
            <span className="brand-role">{siteStrings.role}</span>
          </div>
        </div>

        <nav className="main-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="nav-cta" href="/cv.pdf" download>
          {siteStrings.navCta}
        </a>
      </header>

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
              <div className="portrait-placeholder" aria-label="Profile image placeholder">
                <span>Nedim</span>
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
            {projectCards.map((project) => (
              <article
                key={project.name}
                className={`project-card${project.name === 'Mountain App' || project.name === 'Vaktija' ? ' mobile-project' : ''}`}
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
                    {project.stack.map((item) => (
                      <span key={item} className="project-tag">
                        {item}
                      </span>
                    ))}
                  </div>

                  <a className="project-link" href={project.liveUrl} target="_blank" rel="noreferrer">
                    Live demo
                  </a>
                </div>
              </article>
            ))}
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
              <a href="mailto:hello@example.com">hello@example.com</a>
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
    </div>
  )
}

export default App

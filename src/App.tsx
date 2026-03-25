import { useState } from 'react'
import { usePortfolio } from './hooks/usePortfolio'
import { BentoGrid } from './components/BentoGrid'
import { ProjectsPage } from './components/ProjectsPage'
import { ProjectDetailPage } from './components/ProjectDetailPage'
import styles from './App.module.css'

type Page = 'home' | 'projects' | { type: 'project'; id: string }

export default function App() {
  const [page, setPage] = useState<Page>('home')
  const { profile, projects, loading, error } = usePortfolio()

  function navigate(p: Page) {
    setPage(p)
    window.scrollTo(0, 0)
  }

  const isProjects = page === 'projects' || (typeof page === 'object' && page.type === 'project')
  const selectedProject = typeof page === 'object' && page.type === 'project'
    ? projects.find((p) => p.id === page.id) ?? null
    : null

  return (
    <div className={styles.wrapper}>
      <nav className={styles.nav}>
        <div className={styles.logo} onClick={() => navigate('home')} style={{ cursor: 'pointer' }}>
          Theo<span className={styles.logoAccent}>.</span>
        </div>
        <ul className={styles.navLinks}>
          <li>
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); navigate('projects') }}
              className={isProjects ? styles.navActive : ''}
            >
              Projets
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); navigate('home') }}
              className={page === 'home' ? styles.navActive : ''}
            >
              À propos
            </a>
          </li>
          <li><a href="mailto:lambertheo@gmail.com">Contact</a></li>
        </ul>
      </nav>

      <main className={styles.main}>
        {page === 'home' && (
          <BentoGrid
            profile={profile}
            projects={projects}
            loading={loading}
            error={error}
            onProjectsClick={() => navigate('projects')}
          />
        )}
        {page === 'projects' && (
          <ProjectsPage
            projects={projects}
            loading={loading}
            onSelect={(id) => navigate({ type: 'project', id })}
          />
        )}
        {typeof page === 'object' && page.type === 'project' && selectedProject && (
          <ProjectDetailPage
            project={selectedProject}
            onBack={() => navigate('projects')}
          />
        )}
      </main>

      <footer className={styles.footer}>
        <span>© {new Date().getFullYear()} Theo Lambert</span>
        <div className={styles.footerLinks}>
          {profile?.linkedin_url && (
            <a href={profile.linkedin_url} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          )}
          {profile?.github_username && (
            <a href={`https://github.com/${profile.github_username}`} target="_blank" rel="noopener noreferrer">GitHub</a>
          )}
        </div>
      </footer>
    </div>
  )
}

import type { Profile, Project } from '../types'
import { HeroCard } from './cards/HeroCard'
import { StatusCard } from './cards/StatusCard'
import { StackCard } from './cards/StackCard'
import { ProjectCard } from './cards/ProjectCard'
import { AboutCard } from './cards/AboutCard'
import { ContactCard } from './cards/ContactCard'
import { FunCard } from './cards/FunCard'
import styles from './BentoGrid.module.css'

interface Props {
  profile: Profile | null
  projects: Project[]
  loading: boolean
  error: string | null
  onProjectsClick: () => void
}

export function BentoGrid({ profile, projects, loading, error, onProjectsClick }: Props) {

  if (loading) {
    return (
      <div className={styles.loading}>
        <div className={styles.spinner} />
      </div>
    )
  }

  if (error || !profile) {
    return (
      <div className={styles.error}>
        <p>Impossible de charger les données.</p>
        <small>{error}</small>
      </div>
    )
  }

  const [project1, project2] = projects

  return (
    <div className={styles.wrapper}>
      <div className={styles.grid} id="projects">
        <HeroCard profile={profile} />
        <StatusCard profile={profile} />
        <StackCard profile={profile} />
        {project1 && <ProjectCard project={project1} position="left" />}
        {project2 && <ProjectCard project={project2} position="right" />}
        <AboutCard profile={profile} />
        <ContactCard profile={profile} />
        <FunCard />
      </div>
      {projects.length > 2 && (
        <div className={styles.viewAllRow}>
          <button className={styles.viewAll} onClick={onProjectsClick}>
            Voir tous les projets
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>
      )}
    </div>
  )
}

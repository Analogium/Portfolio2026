import type { Project } from '../types'
import styles from './ProjectDetailPage.module.css'

const GRADIENT = 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)'

interface Props {
  project: Project
  onBack: () => void
}

export function ProjectDetailPage({ project, onBack }: Props) {
  return (
    <div className={styles.page}>
      <button className={styles.back} onClick={onBack}>
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5">
          <line x1="19" y1="12" x2="5" y2="12" />
          <polyline points="12 19 5 12 12 5" />
        </svg>
        Retour aux projets
      </button>

      <div className={styles.content}>
        <div className={styles.preview}>
          {project.image_url ? (
            <img src={project.image_url} alt={project.title} className={styles.previewImg} />
          ) : (
            <div className={styles.previewPlaceholder} style={{ background: GRADIENT }}>
              <div className={styles.mockLines}>
                <div className={`${styles.bar} ${styles.accent}`} />
                <div className={styles.bar} />
                <div className={`${styles.bar} ${styles.short}`} />
                <div className={styles.bar} />
                <div className={`${styles.bar} ${styles.accent} ${styles.short}`} />
              </div>
            </div>
          )}
        </div>

        <div className={styles.details}>
          <h1 className={styles.title}>{project.title}</h1>
          <p className={styles.description}>{project.description}</p>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Technologies</h2>
            <div className={styles.techs}>
              {project.technologies.map((t) => (
                <span key={t} className={styles.tech}>{t}</span>
              ))}
            </div>
          </div>

          <div className={styles.actions}>
            {project.live_url && (
              <a href={project.live_url} target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>
                <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                Voir le projet
              </a>
            )}
            <a href={project.github_url} target="_blank" rel="noopener noreferrer" className={styles.btnSecondary}>
              <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

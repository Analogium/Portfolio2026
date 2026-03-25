import type { Profile } from '../../types'
import styles from './HeroCard.module.css'

interface Props {
  profile: Profile
}

export function HeroCard({ profile }: Props) {
  const githubUrl = `https://github.com/${profile.github_username}`

  return (
    <div className={styles.card}>
      <div className={styles.tag}>
        <span className={styles.dot} />
        Disponible pour des missions
      </div>
      <h1 className={styles.title}>
        Je suis un<br />
        <em>{profile.title.toLowerCase()}</em><br />
      </h1>
      <p className={styles.bio}>{profile.bio}</p>
      <div className={styles.actions}>
        <a href="#projects" className={styles.ctaPrimary}>
          Voir mes projets
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
        <a href={githubUrl} target="_blank" rel="noopener noreferrer" className={styles.ctaSecondary}>
          GitHub
        </a>
      </div>
    </div>
  )
}

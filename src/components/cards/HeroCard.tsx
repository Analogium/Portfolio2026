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
        {profile.cv_url && (
          <a
            href={profile.cv_url}
            target="_blank"
            rel="noopener noreferrer"
            download
            className={styles.ctaCv}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M12 3v12M7 10l5 5 5-5M5 21h14" />
            </svg>
            Télécharger mon CV
          </a>
        )}
        <a href={githubUrl} target="_blank" rel="noopener noreferrer" className={styles.ctaGithub}>
          <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02.8-.22 1.65-.33 2.5-.34.85.01 1.7.12 2.5.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z" />
          </svg>
          GitHub
        </a>
      </div>
    </div>
  )
}

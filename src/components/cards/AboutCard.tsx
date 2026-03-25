import type { Profile } from '../../types'
import styles from './AboutCard.module.css'

interface Props {
  profile: Profile
}

export function AboutCard({ profile }: Props) {
  return (
    <div className={styles.card}>
      <div className={styles.label}>À propos</div>
      <p className={styles.text}>{profile.bio}</p>
      {profile.cv_url && (
        <a href={profile.cv_url} target="_blank" rel="noopener noreferrer" className={styles.cvLink}>
          Voir mon CV →
        </a>
      )}
    </div>
  )
}

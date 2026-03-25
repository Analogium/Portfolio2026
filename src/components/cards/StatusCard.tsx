import type { Profile } from '../../types'
import styles from './StatusCard.module.css'

interface Props {
  profile: Profile
}

export function StatusCard({ profile }: Props) {
  return (
    <div className={styles.card}>
      <div className={styles.label}>Localisation</div>
      <div>
        <div className={styles.location}>{profile.location ?? 'France'} 🇫🇷</div>
        <div className={styles.sub}>Remote-friendly</div>
      </div>
      <div className={styles.decorDot} />
    </div>
  )
}

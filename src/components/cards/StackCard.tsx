import type { Profile } from '../../types'
import styles from './StackCard.module.css'

interface Props {
  profile: Profile
}

export function StackCard({ profile }: Props) {
  const { frontend, backend, devops } = profile.skills_by_category
  const mainSkills = [...frontend.slice(0, 3), ...backend.slice(0, 3), ...devops.slice(0, 3)]
  const allSkills = [...frontend, ...backend, ...devops]

  return (
    <div className={styles.card}>
      <div className={styles.label}>Stack principale</div>
      <div className={styles.pills}>
        {mainSkills.map((skill) => (
          <span key={skill} className={`${styles.pill} ${styles.accent}`}>{skill}</span>
        ))}
        {allSkills.filter(s => !mainSkills.includes(s)).slice(0, 7).map((skill) => (
          <span key={skill} className={styles.pill}>{skill}</span>
        ))}
      </div>
    </div>
  )
}

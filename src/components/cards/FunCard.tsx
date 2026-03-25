import styles from './FunCard.module.css'

export function FunCard() {
  return (
    <div className={styles.card}>
      <div className={styles.emoji}>☕</div>
      <p className={styles.text}>
        <strong>Dev de nuit.</strong> La majorité de mes projets ont été démarrés après 22h, avec un café à côté.
      </p>
      <div className={styles.tag}>Fun fact</div>
    </div>
  )
}

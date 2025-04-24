import { memo } from 'react';

import styles from './Card.module.css';

type NewsCardProps = {
  date: string
  text: string
}

const Card = memo(({ date, text }: NewsCardProps) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.cardTitle}>{date}</h3>
      <div>
        <p className={styles.cardText}>{text}</p>
      </div>
    </div>
  )
})

export default Card
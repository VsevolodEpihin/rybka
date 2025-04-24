import styles from './Mission.module.css';

const Mission = () => {
  return (
    <div className={styles.container}>
      <div className={styles.mission}>
        <h2 className={styles.title}>Наша миссия</h2>
        <p>
          Создать условия для укрепления культуры добровольчества
          как естественной нормы жизни. Предоставлять возможности
          участия активистов в позитивном развитии Института
          Компьютерных Технологий и Информационной безопасности.
        </p>
        <button className={styles.btn}>О центре</button>
      </div>
      <div className={styles.containerImg}>
        <img src="/palm.png" alt="palm" />
      </div>
    </div>
  )
}

export default Mission

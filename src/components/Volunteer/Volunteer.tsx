import styles from './Volunteer.module.css';

const Volunteer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.volunteerContainer}>
      <div className={styles.volunteer}>
        <h2 className={styles.title}>Я - волонтер!</h2>
        <p>
          Получи подробную информацию, как быть полезным
        </p>
        <button className={styles.btn}>Подробнее</button>
      </div>
      <div>
        <img width={200} src="/love.png" alt="love" />
      </div>
      <div className={styles.volunteer}>
        <h2 className={styles.title}>Я — организатор!</h2>
        <p>Получи подробную информацию об услугах и сотрудничестве</p>
        <button className={styles.btn}>Подробнее</button>
      </div>
    </div>
    <img className={styles.lineImg} src="/line.png" alt="line" />
    </div>
  )
}

export default Volunteer

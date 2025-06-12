import styles from './AdminPersonalPage.module.css';

export const AdminPersonalPage = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        Личный <span className={styles.cabinet}>Кабинет</span> <span className={styles.organization}>Организации</span>
      </h2>
      <div className={styles.topSection}>
        <div className={styles.leftBlock}>
          <div className={styles.inputGroup}>
            <label htmlFor="email" className={styles.label}>Почта</label>
            <input id="email" type="text" value="nastasiataa@gmail.com" readOnly className={styles.input} />
          </div>
          <button className={styles.changePasswordBtn}>Изменить пароль</button>
          <button className={styles.exportBtn}>Экспорт отчетности</button>
        </div>
        <div className={styles.statsBlock}>
          <div className={styles.statsTitle}>Статистика</div>
          <div className={styles.statsItem}>Количество мероприятий: <b>100</b></div>
          <div className={styles.statsItem}>Количество часов: <b>1000</b></div>
          <div className={styles.statsItem}>Количество волонтеров: <b>100</b></div>
        </div>
      </div>
      <div className={styles.ratingSection}>
        <div className={styles.ratingTitle}>Рейтинг волонтеров:</div>
        <ol className={styles.ratingList}>
          {[...Array(10)].map((_, i) => (
            <li key={i} className={`${styles.item} ${styles[`ratingItem${i+1}`] || styles.ratingItem}`}>
              Анастасия Донская
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default AdminPersonalPage;

import styles from './EventListSection.module.css';

const EventListSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.searchSection}>
        <div className={styles.searchInputGroup}>
          <label htmlFor="searchQuery">Поиск по заголовку и содержимому:</label>
          <input type="text" id="searchQuery" placeholder="Поиск" className={styles.searchInput} />
        </div>

        <div className={styles.searchDateGroup}>
          <label>За период:</label>
          <input type="text" placeholder="Начало" className={styles.dateInput} />
          <input type="text" placeholder="Конец" className={styles.dateInput} />
        </div>

        <button className={styles.searchButton}>
          Найти
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
          </svg>
        </button>
      </div>

      <div className={styles.eventsList}>
        <h3 className={styles.eventDate}>1 апреля</h3>

        <div className={styles.eventItem}>
          <div className={styles.eventImageContainer}>
            <div className={styles.placeholderEventImage}></div>
          </div>
          <div className={styles.eventDetails}>
            <h4 className={styles.eventTitle}>Собрание Волонтерского Центра ИКТИБ ЮФУ</h4>
            <p className={styles.eventDescription}>Собрание Волонтерского Центра ИКТИБ ЮФУ прошло в Точке Кипения. На вводную лекцию пришли 58 студентов, 20 из которых первокурсники без опыта добровольчества в ВУЗе.</p>
          </div>
        </div>

        <div className={styles.eventItem}>
          <div className={styles.eventImageContainer}>
            <div className={styles.placeholderEventImage}></div>
          </div>
          <div className={styles.eventDetails}>
            <h4 className={styles.eventTitle}>Собрание Волонтерского Центра ИКТИБ ЮФУ</h4>
            <p className={styles.eventDescription}>Собрание Волонтерского Центра ИКТИБ ЮФУ прошло в Точке Кипения. На вводную лекцию пришли 58 студентов, 20 из которых первокурсники без опыта добровольчества в ВУЗе.</p>
          </div>
          <div className={styles.eventDetails}>
            <h4 className={styles.eventTitle}>Собрание Волонтерского Центра ИКТИБ ЮФУ</h4>
            <p className={styles.eventDescription}>Собрание Волонтерского Центра ИКТИБ ЮФУ прошло в Точке Кипения. На вводную лекцию пришли 58 студентов, 20 из которых первокурсники без опыта добровольчества в ВУЗе.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventListSection; 
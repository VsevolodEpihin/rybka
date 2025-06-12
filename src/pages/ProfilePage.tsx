import React from 'react';
import styles from './ProfilePage.module.css';

const ProfilePage = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Личный Кабинет Волонтера</h2>
      <div className={styles.contentArea}>
        {/* Left Section - Personal Info */}
        <div className={styles.personalInfoSection}>
          <div className={styles.infoRow}>
            <label>Фамилия</label>
            <input type="text" value="Рыбченкова" />
          </div>
          <div className={styles.infoRow}>
            <label>Имя</label>
            <input type="text" value="Анастасия" />
          </div>
          <div className={styles.infoRow}>
            <label>Отчество</label>
            <input type="text" value="Анатольевна" />
          </div>
          <div className={styles.infoRow}>
            <label>Мобильный телефон</label>
            <input type="text" value="+79897051705" />
          </div>
          <div className={styles.infoRow}>
            <label>E-mail</label>
            <input type="text" value="nastasiata@gmail.com" />
          </div>
          <div className={styles.infoRow}>
            <label>Род деятельности</label>
            <input type="text" value="Студентка, волонтер" />
          </div>
          <div className={styles.infoRow}>
            <label>Образовательная организация</label>
            <input type="text" value="ИКТИБ ЮФУ" />
          </div>
           <div className={styles.infoRow}>
            <label>Год выпуска</label>
            <input type="text" value="2024" />
          </div>
           <div className={styles.infoRow}>
            <label>Опыт общественной деятельности</label>
            <input type="text" value="2 года" />
          </div>
           <div className={styles.infoRow}>
            <label>Уровень английского языка</label>
            <input type="text" value="B1" />
          </div>
           <div className={styles.infoRow}>
            <label>Приоритетные направления</label>
            <input type="text" value="Событийное, социальное" />
          </div>
          {/* Gender and Size */}
          <div className={styles.infoRow}>
             <label>Пол</label>
             <input type="text" value="Женский" />
          </div>
          <div className={styles.infoRow}>
             <label>Размер одежды</label>
             <input type="text" value="M" />
          </div>
          <button className={styles.saveButton}>Сохранить изменения</button>
          <button className={styles.changePasswordButton}>Изменить пароль</button>
        </div>

        <div className={styles.rightSection}>
          {/* Profile Image */}
          <div className={styles.profileImageContainer}>
             <div className={styles.placeholderImage}></div>
          </div>

          <div className={styles.statisticsBlock}>
            <h4>Статистика</h4>
            <p>Количество мероприятий: 100</p>
            <p>Количество часов: 1000</p>
            <p>Баллы ВЦ ИКТИБ: 10000</p>
            <p>Оценка по отзывам: 5</p>
            <p>Рейтинг на платформе: №1</p>
          </div>

          <div className={styles.awardsBlock}>
            <h4>Награды</h4>
            <div className={styles.awardsGrid}>
              <div className={styles.placeholderAward}></div>
              <div className={styles.placeholderAward}></div>
              <div className={styles.placeholderAward}></div>
              <div className={styles.placeholderAward}></div>
              <div className={styles.placeholderAward}></div>
              <div className={styles.placeholderAward}></div>
              <div className={styles.placeholderAward}></div>
              <div className={styles.placeholderAward}></div>
              <div className={styles.placeholderAward}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage; 
import { ChangeEvent, useEffect, useState } from 'react';
import styles from './ProfilePage.module.css';
import Alert from '../../components/Alert/Alert';

const ProfilePage = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [formData, setFormData] = useState({
    lastName: "Рыбченкова",
    name: "Анастасия",
    middleName: "Анатольевна",
    tel: "+79897051705",
    email: "nastasiata@gmail.com",
    hobby: "Студентка, волонтер",
    university: "ИКТИБ ЮФУ",
    yearForRelease: "2024",
    experience: "2 года",
    levelEng: "B1",
    priorityAreas: "Событийное, социальное",
    gender: "Женский",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleClickSave = () => {
    setShowAlert(true);
  }

  useEffect(() => {
    setTimeout(() => {
      setShowAlert(false)
    },3000)
  }, [showAlert])

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Личный Кабинет Волонтера</h2>
      <div className={styles.contentArea}>
      <div className={styles.personalInfoSection}>
          <div className={styles.infoRow}>
            <label>Фамилия</label>
            <input
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          <div className={styles.infoRow}>
            <label>Имя</label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className={styles.infoRow}>
            <label>Отчество</label>
            <input
              name="middleName"
              value={formData.middleName}
              onChange={handleChange}
            />
          </div>
          <div className={styles.infoRow}>
            <label>Мобильный телефон</label>
            <input
              name="tel"
              value={formData.tel}
              onChange={handleChange}
            />
          </div>
          <div className={styles.infoRow}>
            <label>E-mail</label>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className={styles.infoRow}>
            <label>Род деятельности</label>
            <input
              name="hobby"
              value={formData.hobby}
              onChange={handleChange}
            />
          </div>
          <div className={styles.infoRow}>
            <label>Образовательная организация</label>
            <input
              name="university"
              value={formData.university}
              onChange={handleChange}
            />
          </div>
           <div className={styles.infoRow}>
            <label>Год выпуска</label>
            <input
              name="yearForRelease"
              value={formData.yearForRelease}
              onChange={handleChange}
            />
          </div>
           <div className={styles.infoRow}>
            <label>Опыт общественной деятельности</label>
            <input
              name="experience"
              value={formData.experience}
              onChange={handleChange}
            />
          </div>
           <div className={styles.infoRow}>
            <label>Уровень английского языка</label>
            <input
              name="levelEng"
              value={formData.levelEng}
              onChange={handleChange}
            />
          </div>
           <div className={styles.infoRow}>
            <label>Приоритетные направления</label>
            <input
              name="priorityAreas"
              value={formData.priorityAreas}
              onChange={handleChange}
            />
          </div>
          <div className={styles.infoRow}>
             <label>Пол</label>
             <input
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            />
          </div>
          <button onClick={handleClickSave} className={styles.saveButton}>Сохранить изменения</button>
          <button className={styles.changePasswordButton}>Изменить пароль</button>
        </div>

        <div className={styles.rightSection}>
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
              <div className={styles.placeholderAward}>
                <img src="/prize.png" alt="prize" />
              </div>
              <div className={styles.placeholderAward}>
                <img src="/prize.png" alt="prize" />
              </div>
              <div className={styles.placeholderAward}>
                <img src="/prize.png" alt="prize" />
              </div>
              <div className={styles.placeholderAward}>
                <img src="/prize.png" alt="prize" />
              </div>
              <div className={styles.placeholderAward}>
                <img src="/prize.png" alt="prize" />
              </div>
              <div className={styles.placeholderAward}>
                <img src="/prize.png" alt="prize" />
              </div>
              <div className={styles.placeholderAward}>
                <img src="/prize.png" alt="prize" />
              </div>
              <div className={styles.placeholderAward}>
                <img src="/prize.png" alt="prize" />
              </div>
              <div className={styles.placeholderAward}>
                <img src="/prize.png" alt="prize" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {showAlert && <Alert />}
    </div>
  );
};

export default ProfilePage; 
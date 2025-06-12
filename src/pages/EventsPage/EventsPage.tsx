import { useState } from 'react';

import styles from './EventsPage.module.css';
import Calendar from '../../components/Calendar/Calendar';
import useAuthStore from '../../store/authStore';
import AdminPanel from '../../components/AdminPanel/AdminPanel';
import Events from '../../components/Events/Events';

const EventsPage = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [showAdminPanel, setShowAdminPanel] = useState(false);
  const [showEvents, setShowEvents] = useState(true);
  const { role } = useAuthStore();

  const handleClickCalendar = () => {
    setShowCalendar(true);
    setShowAdminPanel(false);
    setShowEvents(false);
  }

  const handleClickAcions = () => {
    setShowCalendar(false);
    setShowAdminPanel(false);
    setShowEvents(true);
  }

  const handleClickAdminPanel = () => {
    setShowCalendar(false);
    setShowAdminPanel(true);
    setShowEvents(false);
  }
  console.log(role);
  return (
    <div className={styles.container}>
      {showAdminPanel && (
        <>
        <div className={styles.headerTabs}>
          <div onClick={handleClickAcions} className={styles.tab}>Мероприятия</div>
          <div onClick={handleClickCalendar} className={styles.tab}>Новости</div>
          {role === 'admin' && <div onClick={handleClickAdminPanel} className={`${styles.tab} ${styles.activeTab}`}>Панель управления</div>}
        </div>
        <AdminPanel />
      </>
      )}
      {
        showCalendar &&
        (
          <>
            <div className={styles.headerTabs}>
              <div onClick={handleClickAcions} className={styles.tab}>Мероприятия</div>
              <div onClick={handleClickCalendar} className={`${styles.tab} ${styles.activeTab}`}>Новости</div>
              {role === 'admin' && <div onClick={handleClickAdminPanel} className={styles.tab}>Панель управления</div>}
            </div>
            <Calendar />
          </>
        )
        }
        {
          showEvents && (
            <>
            <div className={styles.headerTabs}>
              <div onClick={handleClickAcions} className={`${styles.tab} ${styles.activeTab}`}>Мероприятия</div>
              <div onClick={handleClickCalendar} className={styles.tab}>Новости</div>
              {role === 'admin' && <div onClick={handleClickAdminPanel} className={styles.tab}>Панель управления</div>}
            </div>
            <Events />
          </>
          )
        }
    </div>
  );
};

export default EventsPage; 
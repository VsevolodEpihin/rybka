import { useState } from "react";
import styles from './Calendar.module.css';

interface Event {
  title: string;
  hashtag: string;
  time: string;
}

const eventsData: Record<string, Event[]> = {
  '2024-04-01': [
    {
      title: 'Собрание Волонтерского Центра ИКТИБ ЮФУ',
      hashtag: '#МЫВМЕСТЕ',
      time: '11:00',
    },
    {
      title: 'Второе собрание Волонтерского Центра ИКТИБ ЮФУ',
      hashtag: '#МЫВМЕСТЕ',
      time: '13:00',
    },
    {
      title: 'Третье собрание Волонтерского Центра ИКТИБ ЮФУ',
      hashtag: '#МЫВМЕСТЕ',
      time: '15:00',
    },
  ],
};

const weekDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2024, 3, 1)); // апрель 2024
  const [selectedDate, setSelectedDate] = useState<string | null>('2024-04-01');

  const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
  const daysInMonth = endOfMonth.getDate();
  const startDay = (startOfMonth.getDay() + 6) % 7;

  const handlePrevMonth = () => {
    setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() - 1, 1));
    setSelectedDate(null);
  };

  const handleNextMonth = () => {
    setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));
    setSelectedDate(null);
  };

  const handleDateClick = (day: number) => {
    const selected = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    setSelectedDate(selected.toISOString().split('T')[0]);
  };

  const renderDays = () => {
    const days = [];
    for (let i = 0; i < startDay; i++) {
      days.push(<div key={`empty-${i}`} className={styles.dayEmpty}></div>);
    }
    for (let day = 1; day <= daysInMonth; day++) {
      const dateStr = new Date(currentDate.getFullYear(), currentDate.getMonth(), day).toISOString().split('T')[0];
      const isSelected = selectedDate === dateStr;
      days.push(
        <div
          key={day}
          className={isSelected ? `${styles.day} ${styles.selected}` : styles.day}
          onClick={() => handleDateClick(day)}
        >
          {day}
        </div>
      );
    }
    return days;
  };

  const eventList = selectedDate ? eventsData[selectedDate] ?? [] : [];

  return (
    <div className={styles.calendarWrapper}>
      <div className={styles.calendarCard}>
        <div className={styles.header}>
          <button className={styles.monthBtn} onClick={handlePrevMonth}>&#8592;</button>
          <h2 className={styles.monthTitle}>{currentDate.toLocaleString('ru-RU', { month: 'long', year: 'numeric' })}</h2>
          <button className={styles.monthBtn} onClick={handleNextMonth}>&#8594;</button>
        </div>
        <div className={styles.weekDaysGrid}>
          {weekDays.map((d: string) => <div key={d} className={styles.weekDay}>{d}</div>)}
        </div>
        <div className={styles.daysGrid}>{renderDays()}</div>
      </div>
      <div className={styles.eventsSection}>
        {eventList.length > 0 ? (
          eventList.map((event: Event, idx: number) => (
            <div className={styles.eventCard} key={idx}>
              <div className={styles.eventDate}>1 апреля 2024</div>
              <div className={styles.eventTitle}>{event.title}</div>
              <div className={styles.eventTime}>{event.time}</div>
              <div className={styles.eventHashtag}>{event.hashtag}</div>
            </div>
          ))
        ) : (
          <div className={styles.noEvents}>Нет мероприятий</div>
        )}
      </div>
    </div>
  );
};

export default Calendar;

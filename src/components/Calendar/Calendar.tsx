import { useState } from "react";

import styles from './Calendar.module.css'

const eventsData: Record<string, string[]> = {
    '2025-05-31': ['Встреча с друзьями', 'Созвон с командой'],
    '2025-06-01': ['Доклад на конференции'],
    '2025-06-15': ['Поездка в Москву']
  };
  

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
  const daysInMonth = endOfMonth.getDate();

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
    const startDay = startOfMonth.getDay();

    for (let i = 0; i < startDay; i++) {
      days.push(<div key={`empty-${i}`} className="day empty"></div>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const dateStr = new Date(currentDate.getFullYear(), currentDate.getMonth(), day).toISOString().split('T')[0];
      const isSelected = selectedDate === dateStr;
      days.push(
        <div
          key={day}
          className={`day ${isSelected ? 'selected' : ''}`}
          onClick={() => handleDateClick(day)}
        >
          {day}
        </div>
      );
    }

    return days;
  };

  const eventList = selectedDate ? eventsData[selectedDate] || [] : [];


  return (
    <div className={styles.calendarContainer}>
      <div className={styles.calendar}>
        <div className={styles.header}>
          <button onClick={handlePrevMonth}>←</button>
          <h2>{currentDate.toLocaleString('ru-RU', { month: 'long', year: 'numeric' })}</h2>
          <button onClick={handleNextMonth}>→</button>
        </div>
        <div className={styles.daysGrid}>{renderDays()}</div>
      </div>
      <div className={styles.events}>
        <h3>Мероприятия</h3>
        {selectedDate ? (
          eventList.length ? (
            <ul>
              {eventList.map((event, i) => <li key={i}>{event}</li>)}
            </ul>
          ) : (
            <p>Нет мероприятий</p>
          )
        ) : (
          <p>Выберите дату</p>
        )}
      </div>
    </div>
  );
}

export default Calendar;

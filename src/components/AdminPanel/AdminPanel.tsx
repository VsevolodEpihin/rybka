import React, { useState } from 'react';
import styles from './AdminPanel.module.css';
import useEventsStore from '../../store/EventsStore';

interface Event {
  id: number;
  title: string;
  hashtag: string;
  time: string;
}

const initialEvents: Record<string, Event[]> = {
  '2024-04-01': [
    { id: 1, title: 'Собрание Волонтерского Центра ИКТИБ ЮФУ', hashtag: '#МЫВМЕСТЕ', time: '11:00' },
    { id: 2, title: 'Второе собрание Волонтерского Центра ИКТИБ ЮФУ', hashtag: '#МЫВМЕСТЕ', time: '13:00' },
  ],
  '2024-04-02': [
    { id: 3, title: 'Мастер-класс по Python', hashtag: '#IT', time: '15:00' },
  ],
};

const AdminPanel = () => {
  const [events, setEvents] = useState<Record<string, Event[]>>(initialEvents);
  const [selectedDate, setSelectedDate] = useState<string>('2024-04-01');
  const [modalType, setModalType] = useState<'add' | 'edit' | 'delete' | null>(null);
  const [editingEvent, setEditingEvent] = useState<Event | null>(null);
  const [form, setForm] = useState<{ title: string; hashtag: string; time: string }>({ title: '', hashtag: '', time: '' });

  const { createEvent } = useEventsStore();

  const handleDayClick = (date: string) => {
    setSelectedDate(date);
    setModalType(null);
    setEditingEvent(null);
  };
  console.log(form);
  const handleAdd = () => {
    setForm({ title: '', hashtag: '', time: '' });
    setModalType('add');
    setEditingEvent(null);
  };

  const handleEdit = (event: Event) => {
    setForm({ title: event.title, hashtag: event.hashtag, time: event.time });
    setEditingEvent(event);
    setModalType('edit');
  };

  const handleDelete = (event: Event) => {
    setEditingEvent(event);
    setModalType('delete');
  };

  const handleModalClose = () => {
    setModalType(null);
    setEditingEvent(null);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (modalType === 'add') {
      const newEvent: Event = {
        id: Date.now(),
        title: form.title,
        hashtag: form.hashtag,
        time: form.time,
      };
      setEvents(prev => ({
        ...prev,
        [selectedDate]: prev[selectedDate] ? [...prev[selectedDate], newEvent] : [newEvent],
      }));
    } else if (modalType === 'edit' && editingEvent) {
      setEvents(prev => ({
        ...prev,
        [selectedDate]: prev[selectedDate].map(ev => ev.id === editingEvent.id ? { ...editingEvent, ...form } : ev),
      }));
    }
    createEvent(form);
    handleModalClose();
  };

  const handleDeleteConfirm = () => {
    if (editingEvent) {
      setEvents(prev => ({
        ...prev,
        [selectedDate]: prev[selectedDate].filter(ev => ev.id !== editingEvent.id),
      }));
    }
    handleModalClose();
  };

  const dates = Object.keys(events);

  return (
    <div className={styles.adminPanelWrapper}>
      <h2 className={styles.title}>Панель управления мероприятиями</h2>
      <div className={styles.datesList}>
        {dates.map(date => (
          <button
            key={date}
            className={date === selectedDate ? styles.dateBtnActive : styles.dateBtn}
            onClick={() => handleDayClick(date)}
          >
            {new Date(date).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })}
          </button>
        ))}
        <button className={styles.addDateBtn} onClick={() => handleDayClick('new-date')}>+</button>
      </div>
      <div className={styles.eventsSection}>
        <h3 className={styles.subtitle}>Мероприятия на {selectedDate && new Date(selectedDate).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })}</h3>
        <div className={styles.eventCards}>
          {(events[selectedDate] && events[selectedDate].length > 0) ? (
            events[selectedDate].map(ev => (
              <div className={styles.eventCard} key={ev.id}>
                <div className={styles.eventTitle}>{ev.title}</div>
                <div className={styles.eventTime}>{ev.time}</div>
                <div className={styles.eventHashtag}>{ev.hashtag}</div>
                <div className={styles.eventActions}>
                  <button className={styles.editBtn} onClick={() => handleEdit(ev)}>Изменить</button>
                  <button className={styles.deleteBtn} onClick={() => handleDelete(ev)}>Удалить</button>
                </div>
              </div>
            ))
          ) : (
            <div className={styles.noEvents}>Нет мероприятий</div>
          )}
        </div>
        <button className={styles.addEventBtn} onClick={handleAdd}>Добавить мероприятие</button>
      </div>

      {modalType && (
        <div className={styles.modalOverlay} onClick={handleModalClose}>
          <div className={styles.modal} onClick={e => e.stopPropagation()}>
            {modalType === 'delete' ? (
              <>
                <h4>Удалить мероприятие?</h4>
                <p>Вы уверены, что хотите удалить мероприятие "{editingEvent?.title}"?</p>
                <div className={styles.modalActions}>
                  <button className={styles.deleteBtn} onClick={handleDeleteConfirm}>Удалить</button>
                  <button className={styles.cancelBtn} onClick={handleModalClose}>Отмена</button>
                </div>
              </>
            ) : (
              <form onSubmit={handleFormSubmit} className={styles.modalForm}>
                <h4>{modalType === 'add' ? 'Добавить мероприятие' : 'Изменить мероприятие'}</h4>
                <input
                  name="title"
                  placeholder="Название мероприятия"
                  value={form.title}
                  onChange={handleFormChange}
                  className={styles.input}
                  required
                />
                <input
                  name="time"
                  placeholder="Время (например, 11:00)"
                  value={form.time}
                  onChange={handleFormChange}
                  className={styles.input}
                  required
                />
                <input
                  name="hashtag"
                  placeholder="Хэштег"
                  value={form.hashtag}
                  onChange={handleFormChange}
                  className={styles.input}
                  required
                />
                <div className={styles.modalActions}>
                  <button className={styles.saveBtn} type="submit">Сохранить</button>
                  <button className={styles.cancelBtn} type="button" onClick={handleModalClose}>Отмена</button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPanel; 
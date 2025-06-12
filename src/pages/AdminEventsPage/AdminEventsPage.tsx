import styles from './AdminEventsPage.module.css';

const eventsRussia = [
  {
    img: '/wg2024.png',
    title: 'Всемирные Игры Дружбы 2024',
    desc: 'ВИД2024 — это спортивные соревнования, включающие в себя выступления по 33 летним видам спорта. Цель проведения — создание эффективной платформы для спорта высших достижений, обеспечение доступа детей к спортивной деятельности и развитие новых форматов спортивного сотрудничества.',
    date: '15–29 сентября',
    city: 'Москва, Екатеринбург',
    href: 'https://www.wfgames.org/',
    imgPath: '/wfg.png',
  },
  {
    img: '/brics2024.png',
    title: 'Спортивные Игры Стран БРИКС 2024',
    desc: 'Игры БРИКС — это ежегодные соревнования между странами БРИКС. Примут участие порядка 5000 спортсменов из 30 стран. Главная цель турнира — укрепление дружеских связей между разными странами на основе инклюзивных ценностей, отсутствие дискриминации и равного допуска спортсменов к соревнованиям.',
    date: '11–24 июня',
    city: 'Казань',
    href: 'https://bricskazan2024.games/ru',
    imgPath: '/brix.png',
  },
];

const eventsRegion = [
  {
    img: '/youthday2024.png',
    title: 'День Молодежи 2024',
    desc: 'На территории парка «Левобережный» располагаются интерактивные площадки, подготовленные комитетом по молодежной политике Ростовской области и НКО. Волонтеров ждут активности, мастер-классы, конкурсы, квесты и многое другое.',
    date: '1 июля',
    city: 'Ростов-на-Дону',
    href: 'https://youthday.ru/?erid=2VSb5wWwK36',
    imgPath: '/kind.png',
  },
];

const AdminEventsPage = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.sectionTitle}>Ближайшие масштабные мероприятия по России</h2>
      <div className={styles.eventsList}>
        {eventsRussia.map((event, idx) => (
          <div className={styles.eventCard} key={idx}>
            <div className={styles.eventImageWrap}>
              <img src={event.imgPath} alt={event.title} className={styles.eventImage} />
            </div>
            <div className={styles.eventInfo}>
              <h3 className={styles.eventTitle}>{event.title}</h3>
              <p className={styles.eventDesc}>{event.desc}</p>
              <div className={styles.eventMeta}>
                <span className={styles.eventDate}>
                  <span role="img" aria-label="calendar">🗓️</span> {event.date}
                </span>
                <span className={styles.eventCity}>
                  <span role="img" aria-label="location">📍</span> {event.city}
                </span>
              </div>
              <button className={styles.moreBtn}>
                <a className={styles.moreBtnLink} href={event.href}>Подробнее</a>
              </button>
            </div>
          </div>
        ))}
      </div>

      <h2 className={styles.sectionTitle}>Ближайшие мероприятия в регионе</h2>
      <div className={styles.eventsList}>
        {eventsRegion.map((event, idx) => (
          <div className={styles.eventCard} key={idx}>
            <div className={styles.eventImageWrap}>
              <img src={event.imgPath} alt={event.title} className={styles.eventImage} />
            </div>
            <div className={styles.eventInfo}>
              <h3 className={styles.eventTitle}>{event.title}</h3>
              <p className={styles.eventDesc}>{event.desc}</p>
              <div className={styles.eventMeta}>
                <span className={styles.eventDate}>
                  <span role="img" aria-label="calendar">🗓️</span> {event.date}
                </span>
                <span className={styles.eventCity}>
                  <span role="img" aria-label="location">📍</span> {event.city}
                </span>
              </div>
              <button className={styles.moreBtn}>
                <a className={styles.moreBtnLink} href={event.href}>Подробнее</a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminEventsPage;

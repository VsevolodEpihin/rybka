import { Link, NavLink } from 'react-router';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.navContainer}>
      <Link to="/">
        <img width={176} src="/logo.jpeg" alt="Логотип компании" />
      </Link>
      <nav>
        <ul className={styles.nav}>
          <li className={styles.item}>
          <NavLink to="/">
            {({ isActive }) => (
            <span className={isActive ? `${styles.link} ${styles.active}` : styles.link}>
              Главная
            </span>
            )}
          </NavLink>
          </li>
          <li className={styles.item}>
          <NavLink to="/about-us">
            {({ isActive }) => (
            <span className={isActive ? `${styles.link} ${styles.active}` : styles.link}>
              О нас
            </span>
            )}
          </NavLink>
          </li>
          <li className={styles.item}>
            <NavLink to="/volunteers">
              {({ isActive }) => (
              <span className={isActive ? `${styles.link} ${styles.active}` : styles.link}>
                Волонтерам
              </span>
              )}
            </NavLink>
          </li>
          <li className={styles.item}>
            <NavLink to="/partners">
              {({ isActive }) => (
              <span className={isActive ? `${styles.link} ${styles.active}` : styles.link}>
                Партнерам
              </span>
              )}
            </NavLink>
          </li>
          <li className={styles.item}>
            <NavLink to="/events">
              {({ isActive }) => (
              <span className={isActive ? `${styles.link} ${styles.active}` : styles.link}>
                События
              </span>
              )}
            </NavLink>
          </li>
        </ul>
      </nav>
      </div>
      <div className={styles.socialMedia}>
        <img width={60} src="/lk.png" alt="person" />
        <img width={60} src="/tg.png" alt="telegram" />
        <img width={60} src="/vk.png" alt="vk" />
      </div>
    </header>
  )
}

export default Header;
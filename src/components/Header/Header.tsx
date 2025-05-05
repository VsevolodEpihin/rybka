import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import styles from './Header.module.css';
import useAuthStore from '../../store/authStore';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { setPrevPath, openModal } = useAuthStore();

  const handleProfileClick = (e: React.MouseEvent) => {
    setPrevPath(location.pathname + location.search);
    openModal();
    navigate('/auth');
    e.preventDefault();
  };

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
          <a href="/auth" onClick={handleProfileClick}>
            <img
              width={60}
              src="/lk.png"
              alt="person"
            />
          </a>
          <NavLink to="/">
            <img
              width={60}
              src="/tg.png"
              alt="telegram"
            />
          </NavLink>
          <NavLink to="/">
            <img
              width={60}
              src="/vk.png"
              alt="vk"
            />
          </NavLink>
      </div>
    </header>
  )
}

export default Header;
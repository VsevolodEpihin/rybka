import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styles from './Header.module.css';
import useAuthStore from '../../store/authStore';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { setPrevPath, openModal } = useAuthStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleProfileClick = (e: React.MouseEvent) => {
    setPrevPath(location.pathname + location.search);
    openModal();
    navigate('/auth');
    e.preventDefault();
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <Link to="/">
        <img width={176} src="/logo.jpeg" alt="Логотип компании" />
      </Link>
      
      <button className={styles.burgerMenu} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav>
        <ul className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}>
          <li className={styles.item}>
            <NavLink to="/" onClick={() => setIsMenuOpen(false)}>
              {({ isActive }) => (
                <span className={isActive ? `${styles.link} ${styles.active}` : styles.link}>
                  Главная
                </span>
              )}
            </NavLink>
          </li>
          <li className={styles.item}>
            <NavLink to="/about-us" onClick={() => setIsMenuOpen(false)}>
              {({ isActive }) => (
                <span className={isActive ? `${styles.link} ${styles.active}` : styles.link}>
                  О нас
                </span>
              )}
            </NavLink>
          </li>
          <li className={styles.item}>
            <NavLink to="/volunteers" onClick={() => setIsMenuOpen(false)}>
              {({ isActive }) => (
                <span className={isActive ? `${styles.link} ${styles.active}` : styles.link}>
                  Волонтерам
                </span>
              )}
            </NavLink>
          </li>
          <li className={styles.item}>
            <NavLink to="/partners" onClick={() => setIsMenuOpen(false)}>
              {({ isActive }) => (
                <span className={isActive ? `${styles.link} ${styles.active}` : styles.link}>
                  Партнерам
                </span>
              )}
            </NavLink>
          </li>
          <li className={styles.item}>
            <NavLink to="/events" onClick={() => setIsMenuOpen(false)}>
              {({ isActive }) => (
                <span className={isActive ? `${styles.link} ${styles.active}` : styles.link}>
                  События
                </span>
              )}
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className={`${styles.socialMedia} ${isMenuOpen ? styles.open : ''}`}>
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